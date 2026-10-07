// Checks every artboard: holes resolve against renderVals(), handlers run, no NaN/undefined values.
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'project');
let bad = 0;
class DCLogic { constructor(p) { this.props = p || {}; this.state = {}; } setState(o) { Object.assign(this.state, typeof o === 'function' ? o(this.state) : o); } }
globalThis.performance ??= { now: () => Date.now() };
globalThis.requestAnimationFrame = () => 0; globalThis.cancelAnimationFrame = () => {};
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.dc.html')).sort()) {
  const html = fs.readFileSync(path.join(dir, f), 'utf8');
  const code = html.match(/<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/)[1];
  const C = new Function('DCLogic', code + '\nreturn Component;')(DCLogic);
  const inst = new C({});
  let vals = inst.renderVals();
  const tpl = html.slice(html.indexOf('<x-dc>'), html.lastIndexOf('</x-dc>'));
  // holes
  const names = new Set([...tpl.matchAll(/\{\{\s*([^}]+?)\s*\}\}/g)].map((m) => m[1].trim()));
  const loopVars = [...tpl.matchAll(/<sc-for[^>]*list="\{\{\s*([^}]+?)\s*\}\}"[^>]*as="([^"]+)"/g)];
  const lv = Object.fromEntries(loopVars.map((m) => [m[2], m[1]]));
  const issues = [];
  for (const n of names) {
    const [head, ...rest] = n.split('.');
    if (lv[head]) { const arr = vals[lv[head]]; if (!Array.isArray(arr) || !arr.length) issues.push(`loop ${n}: list ${lv[head]} empty`); else if (rest.length && !(rest[0] in arr[0])) issues.push(`loop item missing .${rest[0]}`); }
    else if (!(head in vals)) issues.push(`hole {{${n}}} not in renderVals`);
  }
  const scan = (v, p) => { if (typeof v === 'number' && !Number.isFinite(v)) issues.push(`non-finite ${p}`); if (v === undefined) issues.push(`undefined ${p}`); if (typeof v === 'string' && /NaN|undefined|Infinity/.test(v)) issues.push(`bad string ${p}=${v.slice(0, 40)}`); if (Array.isArray(v)) v.forEach((x, i) => scan(x, p + '[' + i + ']')); else if (v && typeof v === 'object') for (const k in v) scan(v[k], p + '.' + k); };
  scan(vals, '');
  // exercise handlers
  const fnNames = Object.keys(vals).filter((k) => typeof vals[k] === 'function');
  for (const k of fnNames) {
    try {
      vals[k]({ target: { value: k.toLowerCase().includes('g') ? '21' : '0.5' } });
      vals = inst.renderVals(); scan(vals, '@' + k);
    } catch (e) { issues.push(`handler ${k} threw: ${e.message}`); }
  }
  // slider extremes
  console.log((issues.length ? 'FAIL ' : 'ok   ') + f + (fnNames.length ? `  [${fnNames.length} handlers]` : ''));
  for (const i of [...new Set(issues)].slice(0, 8)) { console.log('       ' + i); bad++; }
}
console.log(bad ? `${bad} issues` : 'all clear');
