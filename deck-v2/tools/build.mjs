// Builds project/*.dc.html + project/canvas.json from src/*.html, src/_deck.css, script.json, core.json.
// Usage: node tools/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import katex from 'katex';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'src');
const OUT = path.join(root, 'project');
fs.mkdirSync(OUT, { recursive: true });

// ---------------------------------------------------------------- assets (uploaded to the canvas)
const BLOB = {
  'Main-Regular': '9bb45e144e46ea175629680318830e86',
  'Main-Italic': 'ff18bf99ffafeab97912631a822a94d1',
  'Main-Bold': '4979f0f4285db05ac90feb18f2e1e71c',
  'Main-BoldItalic': 'b0190c50105d1363eed44397fc1d879f',
  'Math-Italic': '413225b7c30b11500a08a1c9c1c8ea0e',
  'Math-BoldItalic': '8dfab1b04e5828dc9fc0851a9ec8424d',
  'AMS-Regular': '96e6033685c10763b1fde8ccebbb6bff',
  'Size1-Regular': '7aab5b3e6f047ed6d410fef413e46d45',
  'Size2-Regular': '3e7c6d16b084391c94e6335d56a35898',
  'Size3-Regular': '296702bead53525a3521d8cb6e1cfb22',
  'Size4-Regular': 'e3ce9bf946a24311128737d01baa7142',
  'SansSerif-Regular': '52120500483235943306c24e1355be63',
  'Caligraphic-Regular': '5e0e804a8ca441f4ee00ea05fea797bb',
};
const WISECHIP = '/_blob/e25dd7ec0080c7e4a21aaa60bc04d473';

const faces = Object.entries(BLOB).map(([k, id]) => {
  const [fam, v] = k.split('-');
  const bold = /Bold/.test(v) ? 700 : 400;
  const ital = /Italic/.test(v) ? 'italic' : 'normal';
  return `@font-face{font-family:KaTeX_${fam};src:url(/_blob/${id}) format("woff2");font-weight:${bold};font-style:${ital}}`;
}).join('');
let katexCss = fs.readFileSync(path.join(root, 'node_modules/katex/dist/katex.min.css'), 'utf8');
katexCss = katexCss.replace(/@font-face\{[^}]*\}/g, '');
const KATEX_CSS = faces + katexCss;

const BASE_CSS = fs.readFileSync(path.join(SRC, '_deck.css'), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s*\n\s*/g, '\n');
const FONT_LINK = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&amp;family=Geist:wght@300;400;500;600&amp;family=Instrument+Serif:ital@0;1&amp;display=swap">';

// ---------------------------------------------------------------- script + layout
const script = JSON.parse(fs.readFileSync(path.join(root, 'script.json'), 'utf8'));
const core = JSON.parse(fs.readFileSync(path.join(root, 'core.json'), 'utf8'));
const wc = (a) => a.join(' ').split(/\s+/).filter(Boolean).length;
const WPM = 150;
const mmss = (words) => { const s = Math.round(words / WPM * 60); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };

const files = fs.readdirSync(SRC).filter((f) => /^(Main|\d\d|A\d)[^/]*\.html$/.test(f) && !f.startsWith('_')).sort();
const TOTAL_MAIN = 26;

const metaOf = (src) => JSON.parse(src.match(/^<!--meta\s*([\s\S]*?)-->/)[1]);

function renderTex(html, file) {
  return html.replace(/<tex(\s+d)?>([\s\S]*?)<\/tex>/g, (_, d, tex) => {
    const out = katex.renderToString(tex.trim(), { displayMode: !!d, output: 'htmlAndMathml', throwOnError: true, strict: 'ignore' });
    // drop the TeX-source annotation (its braces would collide with template holes); the MathML itself stays for screen readers
    const clean = out.replace(/<annotation[^>]*>[\s\S]*?<\/annotation>/g, '');
    if (clean.includes('{{')) throw new Error(`${file}: KaTeX output contains '{{': ${tex}`);
    return clean;
  });
}

const boards = {}; const order = []; const slideMeta = [];
for (const f of files) {
  const src = fs.readFileSync(path.join(SRC, f), 'utf8');
  const meta = metaOf(src);
  let rest = src.replace(/^<!--meta[\s\S]*?-->\s*/, '');
  let style = ''; let logic = '';
  const sm = rest.match(/^<style>([\s\S]*?)<\/style>\s*/);
  if (sm) { style = sm[1]; rest = rest.slice(sm[0].length); }
  const lm = rest.match(/<script>([\s\S]*?)<\/script>\s*$/);
  if (lm) { logic = lm[1].trim(); rest = rest.slice(0, lm.index); }
  const body = rest.trim();
  const hasTex = /<tex[\s>]/.test(body);

  const num = meta.num; // number or "A1"
  const isMain = typeof num === 'number';
  const numLabel = isMain ? String(num).padStart(2, '0') : num;
  const pageLabel = isMain ? `${numLabel} / ${TOTAL_MAIN}` : `${numLabel} · Backup`;
  const pct = isMain ? (num / TOTAL_MAIN * 100).toFixed(2) : 100;

  let frame;
  if (meta.frame === 'none') {
    frame = `<div class="sl" style="--acc:var(--${meta.acc || 'sing'})">\n${body}\n</div>`;
  } else {
    frame = `<div class="sl" style="--acc:var(--${meta.acc || 'sing'})">
<div class="eyebrow"><b>${numLabel}</b><span>${meta.eyebrow}</span></div>
<h1 class="hd">${meta.title}</h1>
<div class="mn">
${body}
</div>
<div class="foot"><span>${meta.src || ''}</span><span>${pageLabel}</span></div>
<div class="bar" style="width:${pct}%"></div>
</div>`;
  }
  frame = frame.replaceAll('%%WISECHIP%%', WISECHIP);
  frame = renderTex(frame, f);

  const stem = meta.file;
  const fileName = `${stem}.dc.html`;
  const cls = logic || 'class Component extends DCLogic {\n  renderVals() { return {}; }\n}';
  const pageTitle = (meta.docTitle || meta.title.replace(/<[^>]+>/g, '')).replace(/&/g, '&amp;');
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${pageTitle}</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
${FONT_LINK}
<style>
${BASE_CSS}
${hasTex ? KATEX_CSS : ''}
${style}
</style>
</helmet>
${frame}
</x-dc>
<script type="text/x-dc" data-dc-script data-props='{"$preview":{"width":1600,"height":900}}'>
${cls}
</script>
</body>
</html>
`;
  fs.writeFileSync(path.join(OUT, fileName), html);
  slideMeta.push({ ...meta, fileName });
}

// ---------------------------------------------------------------- canvas layout
const ROWS = [
  ['I · Charges meet inside a molecular sandwich', ['Main', '02', '03', '04']],
  ['II · Spin: one singlet, three triplets', ['05', '06', '07', '08']],
  ['III · Triplets are wasted. TADF’s answer', ['09', '10', '11', '12']],
  ['IV · Molecular design: gap, overlap, coupling', ['13', '14', '15', '16']],
  ['V · Delayed light, efficiency and losses', ['17', '18', '19', '20']],
  ['VI · Host, colour, and the whole story', ['21', '22', '23', '24']],
  ['VII · Synthesis', ['25', '26']],
  ['Backup · for questions', ['A1', 'A2', 'A3', 'A4', 'A5']],
];
const W = 1600, H = 900, GX = 1680, ROWPITCH = 1800;
const byKey = (k) => slideMeta.find((m) => (k === 'Main' ? m.file === 'Main' : String(m.num).padStart(2, '0') === k || m.num === k));
const notes = {};
let rowN = 0;
const startY = 330;
const coreTotal = { words: 0 }; let fullTotal = 0;
for (const [rowTitle, keys] of ROWS) {
  const y0 = startY + rowN * ROWPITCH;
  if (!keys.some((k) => byKey(k))) { rowN++; continue; }
  notes[`row${rowN}`] = { x: 0, y: y0 - 250, text: rowTitle, kind: 'title1', maxW: GX * keys.length - 80 };
  keys.forEach((k, i) => {
    const m = byKey(k);
    if (!m) { console.warn('(not yet written) ' + k); return; }
    const x = i * GX;
    boards[m.fileName] = { x, y: y0, w: W, h: H, title: `${typeof m.num === 'number' ? String(m.num).padStart(2, '0') + ' · ' : m.num + ' · '}${(m.docTitle || m.title).replace(/<[^>]+>/g, '')}`, ...(m.interactive ? { is_interactive: true } : {}) };
    order.push(m.fileName);
    // script note
    if (typeof m.num === 'number') {
      const seg = script.find((s) => s.slide === m.num);
      if (seg && seg.paras.length) {
        const keep = core[String(m.num)] || [];
        const full = wc(seg.paras);
        const cw = wc(keep.map((i) => seg.paras[i]));
        coreTotal.words += cw; fullTotal += full;
        const tag = keep.length ? `CORE ${cw} w · ${mmss(cw)}   |   FULL ${full} w · ${mmss(full)}` : `EXTENDED SLIDE — skipped in the short version   |   FULL ${full} w · ${mmss(full)}`;
        const text = `SCRIPT · SLIDE ${String(m.num).padStart(2, '0')} · ${seg.title.toUpperCase()}\n${tag}\n\n` +
          seg.paras.map((p, idx) => (keep.includes(idx) ? '▸ ' : '   ') + p).join('\n');
        notes[`s${String(m.num).padStart(2, '0')}`] = { x, y: y0 + H + 48, text, w: W, maxH: 420, size: 22, fill: 'gray' };
      } else if (m.num === 1) {
        notes['s01'] = { x, y: y0 + H + 48, text: 'SCRIPT · SLIDE 01 · TITLE\nNo script. Let the amber and cyan dots settle while you say hello, then go to slide 2.', w: W, maxH: 220, size: 22, fill: 'gray' };
      }
    }
  });
  rowN++;
}
notes['readme'] = {
  x: 0, y: startY - 250 - 520, w: 1600, maxH: 420, size: 22, fill: 'teal',
  text: `HOW TO USE THIS DECK\nEach slide has its script passage directly beneath it. “▸” marks the core path for a 12–15 minute talk; unmarked paragraphs are the full script.\n\nFull script ≈ ${fullTotal} words ≈ ${mmss(fullTotal)} at ${WPM} wpm. Core path ≈ ${coreTotal.words} words ≈ ${mmss(coreTotal.words)} before the simulations. Slides 21–24 are extended material.\n\nInteractive slides carry the blue mark: open them with Play and use the buttons and sliders. Equations are typeset; model curves are illustrative, not fitted data.`,
};

const canvas = {
  v: 3,
  createdOnFiles: { v: 1, at: new Date().toISOString().replace(/\.\d+Z$/, 'Z') },
  title: 'TADF: A Better Blue Pixel',
  launch: { view: 'canvas' },
  pages: [],
  boards, order, notes, designSystems: [],
};
fs.writeFileSync(path.join(OUT, 'canvas.json'), JSON.stringify(canvas, null, 1));

// script.md for the repo
let md = '# TADF talk — script synced to slides\n\n`▸` = core path (≈ 12–15 min). Unmarked = full script.\n\n';
for (const s of script) {
  if (!s.paras.length) continue;
  const keep = core[String(s.slide)] || [];
  md += `## Slide ${s.slide} — ${s.title}\n\n` + s.paras.map((p, i) => (keep.includes(i) ? '▸ ' : '') + p).join('\n\n') + '\n\n';
}
fs.writeFileSync(path.join(root, 'script.md'), md);
console.log(`built ${slideMeta.length} artboards; full ${fullTotal} words (${mmss(fullTotal)}), core ${coreTotal.words} words (${mmss(coreTotal.words)})`);
