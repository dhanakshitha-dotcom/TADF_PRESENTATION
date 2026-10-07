(() => {
  class DCLogic { constructor(p) { this.props = p || {}; this.state = {}; } setState(o) { Object.assign(this.state, typeof o === 'function' ? o(this.state) : o); } forceUpdate() {} }
  const code = document.querySelector('script[type="text/x-dc"]').textContent;
  const Component = new Function('DCLogic', code + '\nreturn Component;')(DCLogic);
  const inst = new Component({});
  window.__inst = inst;
  const vals = inst.renderVals();
  const get = (scope, path) => path.trim().split('.').reduce((o, k) => (o == null ? undefined : o[k]), scope);
  const HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
  function proc(node, scope) {
    if (node.nodeType === 3) { node.textContent = node.textContent.replace(HOLE, (_, p) => { const v = get(scope, p); return v == null ? '' : v; }); return; }
    if (node.nodeType !== 1) return;
    const tag = node.tagName.toLowerCase();
    if (tag === 'sc-for') {
      const list = get(scope, node.getAttribute('list').replace(/[{}]/g, '')) || []; const as = node.getAttribute('as');
      const frag = document.createDocumentFragment();
      list.forEach((item, i) => { for (const ch of node.childNodes) { const c = ch.cloneNode(true); frag.appendChild(c); proc(c, { ...scope, [as]: item, $index: i }); } });
      node.replaceWith(frag); return;
    }
    if (tag === 'sc-if') {
      const v = get(scope, node.getAttribute('value').replace(/[{}]/g, ''));
      if (v) { const kids = [...node.childNodes]; const frag = document.createDocumentFragment(); kids.forEach(k => frag.appendChild(k)); node.replaceWith(frag); kids.forEach(k => proc(k, scope)); } else node.remove();
      return;
    }
    for (const a of [...node.attributes]) {
      if (!a.value.includes('{{')) continue;
      const whole = a.value.match(/^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/);
      if (whole) { const v = get(scope, whole[1]); if (typeof v === 'function') node.removeAttribute(a.name); else if (v == null) node.removeAttribute(a.name); else node.setAttribute(a.name, v); }
      else node.setAttribute(a.name, a.value.replace(HOLE, (_, p) => { const v = get(scope, p); return v == null ? '' : v; }));
    }
    for (const ch of [...node.childNodes]) proc(ch, scope);
  }
  proc(document.querySelector('x-dc'), vals);
  return '';
})()
