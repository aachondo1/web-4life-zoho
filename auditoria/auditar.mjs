// Auditoría técnica del sitio 4Life en Zoho.
// Corre en GitHub Actions (o local con `npm run auditar`).
// Escribe reportes/ultimo.json (detalle) y reportes/ultimo.md (resumen corto con cambios vs la corrida anterior).
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE = (process.env.BASE_URL || 'https://demo4life1.zohosites.com').replace(/\/$/, '');
const LIGHTHOUSE = process.env.LIGHTHOUSE !== '0';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OUT = path.join(ROOT, 'reportes');
const PAGES = process.env.PAGINAS ? process.env.PAGINAS.split(',') : fs.readFileSync(path.join(ROOT, 'auditoria/paginas.txt'), 'utf8')
  .split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'));

const HEAVY_KB = 80;
const PLACEHOLDER = /lorem ipsum|\[[^\]]{0,30}(nombre|empresa|pendiente|todo|xxx)[^\]]{0,30}\]|\bTODO\b/gi;
const GENERIC_LINK = /^(ver( m[aá]s)?|ver documento|aqu[ií]|click aqu[ií]|leer m[aá]s|m[aá]s|documento)$/i;

// Cada hallazgo: { page, sev: P0..P3, cat, id, msg }. `id` estable para comparar corridas.
const findings = [];
const add = (page, sev, cat, id, msg) => findings.push({ page, sev, cat, id: `${page}::${id}`, msg });
const pageStats = {};
const allLinks = new Map(); // href -> Set(pages)

const impactSev = { critical: 'P1', serious: 'P1', moderate: 'P2', minor: 'P3' };

async function auditPage(browser, route) {
  const url = BASE + route;
  const stats = { route };
  for (const vp of [{ name: 'escritorio', width: 1280, height: 800 }, { name: 'movil', width: 375, height: 812, isMobile: true, hasTouch: true }]) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: !!vp.isMobile, hasTouch: !!vp.hasTouch, locale: 'es-CL' });
    const page = await ctx.newPage();
    const imgs = [];
    let bytes = 0;
    page.on('response', async r => {
      try {
        const len = Number(r.headers()['content-length'] || 0) || (await r.body().catch(() => Buffer.alloc(0))).length;
        bytes += len;
        if (r.request().resourceType() === 'image' && len > HEAVY_KB * 1024) imgs.push(`${Math.round(len / 1024)}KB ${r.url().split('/').pop().split('?')[0]}`);
      } catch {}
    });
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => null);
    if (!resp || resp.status() >= 400) { add(route, 'P0', 'Integridad', 'no-carga', `La página no carga (${resp ? resp.status() : 'timeout'})`); await ctx.close(); return stats; }
    // Bajar hasta el fondo para cargar imágenes lazy
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); } window.scrollTo(0, 0); });
    await page.waitForTimeout(500);

    if (vp.name === 'escritorio') {
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      for (const v of axe.violations) add(route, impactSev[v.impact] || 'P2', 'Accesibilidad', `axe-${v.id}`, `${v.help} (${v.nodes.length}×) — ${v.nodes.slice(0, 2).map(n => n.target.join(' ')).join(' | ')}`);

      const d = await page.evaluate(({ PH, GL }) => {
        const q = s => document.querySelector(s);
        const text = document.body.innerText;
        const skip = [...document.querySelectorAll('a[href^="#"]')].find(a => /skip|saltar/i.test(a.textContent));
        return {
          title: document.title,
          desc: q('meta[name=description]')?.content || '',
          canon: q('link[rel=canonical]')?.href || '',
          robots: q('meta[name=robots]')?.content || '',
          h1: document.querySelectorAll('h1').length,
          main: document.querySelectorAll('main,[role=main]').length,
          skip: skip ? { href: skip.getAttribute('href'), ok: !!document.getElementById(skip.getAttribute('href').slice(1)), text: skip.textContent.trim() } : null,
          placeholders: [...new Set(text.match(new RegExp(PH, 'gi')) || [])],
          generic: [...document.querySelectorAll('a')].filter(a => new RegExp(GL, 'i').test(a.textContent.trim()) && !a.getAttribute('aria-label')).length,
          links: [...new Set([...document.querySelectorAll('a[href]')].map(a => a.href).filter(h => h.startsWith(location.origin)).map(h => h.split('#')[0]))],
          fonts: [...new Set([...document.querySelectorAll('h1,h2,h3,p,li,a,span')].slice(0, 400).map(e => getComputedStyle(e).fontFamily.split(',')[0].replace(/"/g, '').trim()))],
        };
      }, { PH: PLACEHOLDER.source, GL: GENERIC_LINK.source });
      Object.assign(stats, { title: d.title, robots: d.robots, h1: d.h1, fonts: d.fonts, kb: Math.round(bytes / 1024), imgsPesadas: imgs });
      if (/demo4life|^home \|/i.test(d.title) || !/4life/i.test(d.title)) add(route, 'P2', 'SEO', 'titulo', `Título sin marca o de demo: "${d.title}"`);
      if (!d.desc && !/noindex/i.test(d.robots)) add(route, 'P2', 'SEO', 'sin-description', 'Sin meta description');
      if (d.canon.startsWith('http://')) add(route, 'P3', 'SEO', 'canonical-http', 'Canonical en http://');
      if (d.h1 !== 1) add(route, 'P1', 'Accesibilidad', 'h1', `Tiene ${d.h1} H1 (debe tener 1)`);
      if (!d.main) add(route, 'P1', 'Accesibilidad', 'sin-main', 'Sin landmark <main>');
      if (d.skip && !d.skip.ok) add(route, 'P1', 'Accesibilidad', 'skip-roto', `Skip link apunta a ${d.skip.href}, que no existe`);
      for (const p of d.placeholders) add(route, 'P0', 'Integridad', `placeholder-${p}`, `Texto de plantilla visible: "${p}"`);
      if (d.generic) add(route, 'P3', 'Accesibilidad', 'links-genericos', `${d.generic} enlaces con texto genérico ("Ver documento", "aquí"...)`);
      const offBrand = d.fonts.filter(f => /cormorant|times|georgia|garamond/i.test(f));
      if (offBrand.length) add(route, 'P1', 'Theming', 'fuente-fuera-marca', `Tipografía fuera de marca: ${offBrand.join(', ')}`);
      for (const i of imgs) add(route, 'P2', 'Rendimiento', `img-${i.split(' ')[1]}`, `Imagen pesada: ${i}`);
      for (const l of d.links) { if (!allLinks.has(l)) allLinks.set(l, new Set()); allLinks.get(l).add(route); }
    } else {
      const m = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth + 1 ? document.documentElement.scrollWidth : 0,
        tiny: [...document.querySelectorAll('body *')].filter(e => e.offsetParent && [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) && parseFloat(getComputedStyle(e).fontSize) < 12).length,
      }));
      if (m.overflow) add(route, 'P1', 'Responsive', 'overflow-movil', `Scroll horizontal en móvil (ancho ${m.overflow}px)`);
      if (m.tiny) add(route, 'P3', 'Responsive', 'texto-chico', `${m.tiny} textos de menos de 12px en móvil`);
    }
    await ctx.close();
  }
  return stats;
}

async function lighthouse(route) {
  try {
    const { default: lh } = await import('lighthouse');
    const chromeLauncher = await import('chrome-launcher');
    const chrome = await chromeLauncher.launch({ chromePath: chromium.executablePath(), chromeFlags: ['--headless=new', '--no-sandbox'] });
    const r = await lh(BASE + route, { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance', 'seo', 'best-practices'] });
    await chrome.kill();
    const a = r.lhr.audits, c = r.lhr.categories;
    return { perf: Math.round(c.performance.score * 100), seo: Math.round(c.seo.score * 100), bp: Math.round(c['best-practices'].score * 100), lcp: +(a['largest-contentful-paint'].numericValue / 1000).toFixed(1), cls: +a['cumulative-layout-shift'].numericValue.toFixed(3), tbt: Math.round(a['total-blocking-time'].numericValue) };
  } catch (e) { return { error: String(e.message || e).slice(0, 120) }; }
}

async function checkLinks() {
  for (const [href, pages] of allLinks) {
    let status = 0, title = '';
    try {
      const r = await fetch(href, { redirect: 'follow' });
      status = r.status;
      if ((r.headers.get('content-type') || '').includes('html')) title = ((await r.text()).match(/<title>([^<]*)/i) || [])[1] || '';
    } catch { status = -1; }
    if (status >= 400 || status < 0 || /404|no encontrada|not found/i.test(title)) {
      const p = new URL(href).pathname;
      add('(sitio)', 'P1', 'Integridad', `link-${p}`, `Enlace roto ${p} (${status}) — en ${[...pages].length} página(s)`);
    }
  }
}

const browser = await chromium.launch();
for (const r of PAGES) {
  process.stdout.write(`Auditando ${r}... `);
  pageStats[r] = await auditPage(browser, r);
  if (LIGHTHOUSE) pageStats[r].lighthouse = await lighthouse(r);
  console.log('ok');
}
await browser.close();
await checkLinks();

// ---- Comparar con la corrida anterior y escribir reportes ----
fs.mkdirSync(OUT, { recursive: true });
const prevPath = path.join(OUT, 'ultimo.json');
const prev = fs.existsSync(prevPath) ? JSON.parse(fs.readFileSync(prevPath, 'utf8')) : null;
const prevIds = new Set((prev?.findings || []).map(f => f.id));
const curIds = new Set(findings.map(f => f.id));
const nuevos = findings.filter(f => !prevIds.has(f.id));
const resueltos = (prev?.findings || []).filter(f => !curIds.has(f.id));
const fecha = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });
fs.writeFileSync(prevPath, JSON.stringify({ fecha, base: BASE, pageStats, findings }, null, 1));

const order = { P0: 0, P1: 1, P2: 2, P3: 3 };
findings.sort((a, b) => order[a.sev] - order[b.sev] || a.page.localeCompare(b.page));
const count = s => findings.filter(f => f.sev === s).length;
const line = f => `- **[${f.sev}]** \`${f.page}\` · ${f.cat}: ${f.msg}`;
let md = `# Auditoría técnica · ${fecha}\n\nSitio: ${BASE} · ${PAGES.length} páginas\n\n`;
md += `**Total: ${findings.length}** (P0 ${count('P0')} · P1 ${count('P1')} · P2 ${count('P2')} · P3 ${count('P3')})`;
md += prev ? ` · **${nuevos.length} nuevos · ${resueltos.length} resueltos** desde ${prev.fecha}\n\n` : ' · primera corrida\n\n';
if (prev) {
  md += `## Nuevos desde la corrida anterior\n${nuevos.length ? nuevos.map(line).join('\n') : '_Ninguno._'}\n\n`;
  md += `## Resueltos\n${resueltos.length ? resueltos.map(line).join('\n') : '_Ninguno._'}\n\n`;
}
md += `## Por página\n\n| Página | P0 | P1 | P2 | P3 | Perf móvil | LCP s | CLS | SEO | KB |\n|---|---|---|---|---|---|---|---|---|---|\n`;
for (const r of PAGES) {
  const f = findings.filter(x => x.page === r), lh = pageStats[r]?.lighthouse || {};
  md += `| \`${r}\` | ${['P0', 'P1', 'P2', 'P3'].map(s => f.filter(x => x.sev === s).length).join(' | ')} | ${lh.perf ?? '–'} | ${lh.lcp ?? '–'} | ${lh.cls ?? '–'} | ${lh.seo ?? '–'} | ${pageStats[r]?.kb ?? '–'} |\n`;
}
md += `\n## Todos los hallazgos\n${findings.map(line).join('\n')}\n`;
fs.writeFileSync(path.join(OUT, 'ultimo.md'), md);
fs.writeFileSync(path.join(OUT, `${new Date().toISOString().slice(0, 10)}.md`), md);
console.log(`\n${findings.length} hallazgos (P0 ${count('P0')}, P1 ${count('P1')}). Reporte: reportes/ultimo.md`);
