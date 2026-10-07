// Builds ONE self-contained offline HTML presentation from project/*.dc.html (+ canvas.json order, script.json notes).
// Usage: node tools/build.mjs && node tools/build-offline.mjs
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const P = (...a) => path.join(root, ...a);
const canvas = JSON.parse(fs.readFileSync(P('project/canvas.json'), 'utf8'));
const script = JSON.parse(fs.readFileSync(P('script.json'), 'utf8'));
const core = JSON.parse(fs.readFileSync(P('core.json'), 'utf8'));
const b64 = (f) => fs.readFileSync(f).toString('base64');

// ---- fonts (document-level @font-face; shadow roots cannot declare fonts)
let gf = fs.readFileSync(P('offline-fonts/fonts.css'), 'utf8'); let i = 0;
gf = gf.replace(/url\((https:[^)]*)\) format\('truetype'\)/g, () => { i++; return `url(data:font/ttf;base64,${b64(P(`offline-fonts/f${i}.woff2`))}) format('truetype')`; });
const blobFont = {};
for (const m of fs.readFileSync(P('tools/build.mjs'), 'utf8').matchAll(/'([A-Za-z]+-[A-Za-z]+)': '([0-9a-f]{32})'/g)) blobFont[m[2]] = m[1];
const kfaces = Object.entries(blobFont).map(([id, k]) => {
  const [fam, v] = k.split('-');
  return `@font-face{font-family:KaTeX_${fam};src:url(data:font/woff2;base64,${b64(P('fonts/KaTeX_' + k + '.woff2'))}) format("woff2");font-weight:${/Bold/.test(v) ? 700 : 400};font-style:${/Italic/.test(v) ? 'italic' : 'normal'}}`;
}).join('\n');
const img = `data:image/jpeg;base64,${b64(P('assets/wisechip-pmoled.jpg'))}`;

// ---- slides
const slides = [];
for (const f of canvas.order) {
  const html = fs.readFileSync(P('project', f), 'utf8');
  const helmet = html.match(/<helmet>([\s\S]*?)<\/helmet>/)[1];
  let css = helmet.match(/<style>([\s\S]*?)<\/style>/)[1].replace(/@font-face\{[^}]*\}/g, '');
  const body = html.slice(html.indexOf('</helmet>') + 9, html.lastIndexOf('</x-dc>')).trim().replace(/\/_blob\/e25dd7ec0080c7e4a21aaa60bc04d473/g, img);
  const logic = html.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/)[1];
  const meta = canvas.boards[f];
  const m = meta.title.match(/^(\d\d|A\d) · (.*)$/) || ['', '', meta.title];
  const num = m[1].startsWith('A') ? m[1] : parseInt(m[1] || '1', 10);
  const seg = typeof num === 'number' ? script.find((s) => s.slide === num) : null;
  const keep = typeof num === 'number' ? (core[String(num)] || []) : [];
  slides.push({ title: m[2], label: m[1] || '01', css, body, logic, paras: seg ? seg.paras.map((p, k) => ({ t: p, core: keep.includes(k) })) : [], coreSlide: keep.length > 0, interactive: !!meta.is_interactive });
}
const data = JSON.stringify(slides).replace(/</g, '\\u003c');

const runtime = fs.readFileSync(P('tools/offline-runtime.js'), 'utf8');
const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>TADF: turning dark excitons into light</title>
<style>
${gf}
${kfaces}
html,body{margin:0;height:100%;background:#000;overflow:hidden;font-family:Geist,system-ui,sans-serif}
#vp{position:fixed;inset:0;background:#02040a}
#stage{position:absolute;left:0;top:0;width:1600px;height:900px;transform-origin:0 0}
.slidehost{position:absolute;inset:0;display:none}
.slidehost.on{display:block}
#bar{position:fixed;left:50%;bottom:10px;transform:translateX(-50%);display:flex;gap:6px;align-items:center;padding:5px 8px;border-radius:10px;background:rgba(5,10,20,.92);border:1px solid #26364f;opacity:.18;transition:opacity .25s;z-index:5;font:500 13px 'Geist Mono',ui-monospace,monospace;color:#adbbd2}
#bar:hover,#bar:focus-within{opacity:1}
#bar button{font:inherit;color:#f1f6ff;background:transparent;border:1px solid #4c628a;border-radius:6px;padding:6px 10px;cursor:pointer}
#bar button:hover{background:#13253f;border-color:#62e7f4}
#bar button:focus-visible{outline:2px solid #62e7f4}
#notes{position:fixed;left:0;right:0;bottom:0;max-height:46vh;overflow:auto;background:rgba(5,10,20,.97);border-top:1px solid #26364f;color:#dfe8f7;font:17px/1.55 Geist,system-ui,sans-serif;padding:18px 7vw 56px;display:none;z-index:4}
#notes.open{display:block}
#notes h2{margin:0 0 4px;font:500 13px 'Geist Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#62e7f4}
#notes .meta{font:12px 'Geist Mono',monospace;color:#8394b0;margin-bottom:10px}
#notes p{margin:0 0 8px}
#notes p.c::before{content:"▸ ";color:#62e7f4}
#notes.only p:not(.c){display:none}
#notes p.x{color:#8394b0}
</style></head><body>
<div id="vp"><div id="stage"></div></div>
<div id="notes" aria-live="polite"></div>
<div id="bar" role="toolbar" aria-label="Presentation controls"><button id="b-prev" aria-label="Previous slide">&larr;</button><span id="pos">1 / 31</span><button id="b-next" aria-label="Next slide">&rarr;</button><button id="b-notes">Notes (N)</button><button id="b-core">Core only (C)</button><button id="b-full">Fullscreen (F)</button></div>
<script>
const SLIDES=${data};
${runtime}
</script></body></html>`;
const out = P('..', 'outputs', '2026-10-07_tadf-presentation-offline_v2.html');
fs.writeFileSync(out, html);
console.log('wrote', path.relative(P('..'), out), Math.round(html.length / 1024) + ' KB', slides.length + ' slides');
