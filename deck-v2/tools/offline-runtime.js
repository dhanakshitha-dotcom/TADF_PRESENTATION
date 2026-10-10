// Offline player: shadow-DOM slides, a small template runtime (holes, sc-for, sc-if, events, state) and navigation.
'use strict';
class DCLogic {
  constructor(props) { this.props = props || {}; this.state = {}; this._render = null; }
  setState(o) { Object.assign(this.state, typeof o === 'function' ? o(this.state) : o); if (this._render) this._render(); }
  forceUpdate() { if (this._render) this._render(); }
}
const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
const getp = (scope, path) => path.trim().split('.').reduce((o, k) => (o == null ? undefined : o[k]), scope);
function proc(node, scope) {
  if (node.nodeType === 3) { if (node.data.includes('{{')) node.data = node.data.replace(HOLE, (_, p) => { const v = getp(scope, p); return v == null ? '' : v; }); return; }
  if (node.nodeType !== 1 && node.nodeType !== 11) return;
  const tag = node.nodeType === 1 ? node.tagName.toLowerCase() : '';
  if (tag === 'sc-for') {
    const list = getp(scope, node.getAttribute('list').replace(/[{}]/g, '')) || []; const as = node.getAttribute('as');
    const frag = document.createDocumentFragment();
    list.forEach((item, idx) => { for (const ch of node.childNodes) { const c = ch.cloneNode(true); frag.appendChild(c); proc(c, { ...scope, [as]: item, $index: idx }); } });
    node.replaceWith(frag); return;
  }
  if (tag === 'sc-if') {
    const v = getp(scope, node.getAttribute('value').replace(/[{}]/g, ''));
    if (v) { const kids = [...node.childNodes]; const frag = document.createDocumentFragment(); kids.forEach((k) => frag.appendChild(k)); node.replaceWith(frag); kids.forEach((k) => proc(k, scope)); } else node.remove();
    return;
  }
  if (node.nodeType === 1) {
    for (const a of [...node.attributes]) {
      if (!a.value.includes('{{')) continue;
      const whole = a.value.match(/^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/);
      if (whole) {
        const v = getp(scope, whole[1]);
        if (typeof v === 'function') { node.removeAttribute(a.name); node[a.name.toLowerCase()] = v; }
        else if (v == null) node.removeAttribute(a.name); else node.setAttribute(a.name, v);
      } else node.setAttribute(a.name, a.value.replace(HOLE, (_, p) => { const v = getp(scope, p); return v == null ? '' : v; }));
    }
  }
  for (const ch of [...node.childNodes]) proc(ch, scope);
}
function morph(oldP, newP, root) {
  const o = [...oldP.childNodes], n = [...newP.childNodes];
  for (let i = 0; i < n.length; i++) {
    const a = o[i], b = n[i];
    if (!a) { oldP.appendChild(b); continue; }
    if (a.nodeType !== b.nodeType || a.nodeName !== b.nodeName) { oldP.replaceChild(b, a); continue; }
    if (a.nodeType === 3) { if (a.data !== b.data) a.data = b.data; continue; }
    if (a.nodeType !== 1) continue;
    for (const at of [...a.attributes]) if (!b.hasAttribute(at.name)) a.removeAttribute(at.name);
    for (const at of b.attributes) {
      if (a.getAttribute(at.name) === at.value) continue;
      if (at.name === 'value' && root.activeElement === a) continue;
      a.setAttribute(at.name, at.value);
      if (at.name === 'value' && a.tagName === 'INPUT') a.value = at.value;
    }
    a.onclick = b.onclick; a.oninput = b.oninput; a.onchange = b.onchange;
    morph(a, b, root);
  }
  while (o.length > n.length) oldP.removeChild(o.pop());
}

const stage = document.getElementById('stage');
const baseCss = ':host{all:initial;display:block;width:1600px;height:900px}body{margin:0}';
const hosts = []; let cur = -1;
function mount(i) {
  const s = SLIDES[i]; const host = document.createElement('div'); host.className = 'slidehost'; stage.appendChild(host);
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = '<style>' + baseCss + s.css + '</style><div id="r"></div>';
  const mountPoint = root.getElementById('r');
  const Component = new Function('DCLogic', s.logic + '\nreturn Component;')(DCLogic);
  const inst = new Component({});
  const tpl = s.body;
  const render = () => {
    const vals = inst.renderVals();
    const t = document.createElement('template'); t.innerHTML = tpl;
    proc(t.content, vals);
    if (!mountPoint.firstChild) mountPoint.appendChild(t.content); else morph(mountPoint, t.content, root);
  };
  inst._render = render; render();
  root.addEventListener('pointerup', () => setTimeout(() => { const ae = root.activeElement; if (ae && /^(BUTTON|INPUT)$/.test(ae.tagName)) ae.blur(); }, 0));
  hosts[i] = { host, inst, root };
}
function fit() { const k = Math.min(innerWidth / 1600, innerHeight / 900); stage.style.transform = 'scale(' + k + ')'; stage.style.left = (innerWidth - 1600 * k) / 2 + 'px'; stage.style.top = (innerHeight - 900 * k) / 2 + 'px'; }
const notes = document.getElementById('notes'); let coreOnly = false;
function showNotes(i) {
  const s = SLIDES[i];
  const words = (a) => a.join(' ').split(/\s+/).filter(Boolean).length;
  const full = words(s.paras.map((p) => p.t)), cw = words(s.paras.filter((p) => p.core).map((p) => p.t));
  notes.innerHTML = '<h2>' + s.label + ' · ' + s.title.replace(/</g, '&lt;') + '</h2><div class="meta">' + (s.paras.length ? (s.coreSlide ? 'core ' + cw + ' words' : 'extended slide (skipped in the short version)') + ' · full ' + full + ' words' : 'no script') + '</div>' + s.paras.map((p) => '<p class="' + (p.core ? 'c' : 'x') + '">' + p.t.replace(/</g, '&lt;') + '</p>').join('');
  notes.classList.toggle('only', coreOnly);
}
function go(i) {
  i = Math.max(0, Math.min(SLIDES.length - 1, i)); if (i === cur) return;
  if (cur >= 0 && hosts[cur]) hosts[cur].host.classList.remove('on');
  if (!hosts[i]) mount(i);
  hosts[i].host.classList.add('on'); cur = i;
  document.getElementById('pos').textContent = (i + 1) + ' / ' + SLIDES.length;
  history.replaceState(null, '', '#' + (i + 1)); showNotes(i); notes.scrollTop = 0;
}
const toggleNotes = () => notes.classList.toggle('open');
const toggleCore = () => { coreOnly = !coreOnly; notes.classList.toggle('only', coreOnly); document.getElementById('b-core').style.borderColor = coreOnly ? '#62e7f4' : ''; };
const toggleFull = async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); } catch (e) {} };
document.getElementById('b-prev').onclick = () => go(cur - 1); document.getElementById('b-next').onclick = () => go(cur + 1);
document.getElementById('b-notes').onclick = toggleNotes; document.getElementById('b-core').onclick = toggleCore; document.getElementById('b-full').onclick = toggleFull;
addEventListener('keydown', (e) => {
  const t = e.composedPath()[0]; const tag = t && t.tagName;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const k = e.key;
  if (tag === 'INPUT' && (k === 'ArrowLeft' || k === 'ArrowRight' || k === ' ')) return;
  if (tag === 'BUTTON' && k === ' ') return;
  if (k === 'ArrowRight' || k === ' ' || k === 'PageDown') { e.preventDefault(); go(cur + 1); }
  else if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); go(cur - 1); }
  else if (k === 'Home') go(0); else if (k === 'End') go(22);
  else if (k === 'b' || k === 'B') go(23);
  else if (k === 'n' || k === 'N') toggleNotes(); else if (k === 'c' || k === 'C') toggleCore(); else if (k === 'f' || k === 'F') toggleFull();
  else if (k === 'Escape') notes.classList.remove('open');
});
addEventListener('resize', fit); fit();
go(Math.max(0, (parseInt(location.hash.slice(1), 10) || 1) - 1));
