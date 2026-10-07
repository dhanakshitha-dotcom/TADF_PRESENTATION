// Local preview only: renders built artboards with a tiny stand-in for the canvas template runtime.
import { chromium } from 'playwright-core';
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = process.argv[2]; fs.mkdirSync(outDir, { recursive: true });
const only = process.argv.slice(3);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
const files = fs.readdirSync(path.join(root, 'project')).filter(f => f.endsWith('.dc.html') && (!only.length || only.some(o => f.startsWith(o))));
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
page.on('pageerror', e => console.log('PAGEERROR', e.message));
page.on('console', m => { if (m.type() === 'error') console.log('CONSOLE', m.text().slice(0, 200)); });
const blobMap = {}; for (const m of fs.readFileSync(path.join(root,'tools/build.mjs'),'utf8').matchAll(/'([A-Za-z]+-[A-Za-z]+)': '([0-9a-f]{32})'/g)) blobMap[m[2]] = path.join(root,'fonts','KaTeX_'+m[1]+'.woff2');
blobMap['e25dd7ec0080c7e4a21aaa60bc04d473'] = path.join(root,'assets','wisechip-pmoled.jpg');
await page.route('**/_blob/*', r => { const id = r.request().url().split('/').pop(); const f = blobMap[id]; if (f && fs.existsSync(f)) r.fulfill({ path: f }); else r.abort(); });
const runtime = fs.readFileSync(path.join(root, 'tools/mini-runtime.js'), 'utf8');
for (const f of files) {
  await page.goto('file://' + path.join(root, 'project', f), { waitUntil: 'load' }).catch(()=>{});
  await page.waitForTimeout(400);
  const err = await page.evaluate(runtime).catch(e => 'RUNTIME ERR ' + e.message);
  if (err) console.log(f, err);
  await page.waitForTimeout(900);
  const el = await page.$('.sl');
  await el.screenshot({ path: path.join(outDir, f.replace('.dc.html', '.png')) });
  console.log('shot', f);
}
await browser.close();
