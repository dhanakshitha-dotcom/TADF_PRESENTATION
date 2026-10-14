// Renders the offline player to a one-slide-per-page vector PDF (animations frozen at their final state).
import { chromium } from 'playwright-core';
import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const src = path.join(root, 'outputs/2026-10-07_tadf-presentation-offline_v2.html');
const out = process.argv[2] || path.join(root, 'outputs/2026-10-14_tadf-slides_v2.pdf');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1600, height: 900 } });
await p.goto('file://' + src); await p.waitForTimeout(500);
const n = await p.evaluate(() => SLIDES.length);
await p.evaluate(async (n) => {
  for (let i = 0; i < n; i++) go(i);            // mount every slide
  await document.fonts.ready;
  for (const h of hosts) {
    const st = document.createElement('style'); st.textContent = '*{animation:none!important;transition:none!important}';
    h.root.appendChild(st);
    h.host.classList.add('on'); h.host.style.cssText = 'position:relative;display:block;width:1600px;height:900px;overflow:hidden;break-after:page;page-break-after:always';
  }
  const g = document.createElement('style');
  g.textContent = '@page{size:1600px 900px;margin:0}html,body{height:auto!important;overflow:visible!important;background:#02040a}#vp{position:static!important}#stage{position:static!important;transform:none!important;width:1600px!important;height:auto!important}#bar,#notes{display:none!important}';
  document.head.appendChild(g);
}, n);
await p.waitForTimeout(800);
await p.pdf({ path: out, width: '1600px', height: '900px', printBackground: true, preferCSSPageSize: true });
console.log('pdf', out, 'slides', n);
await b.close();
