var u = Object.defineProperty, g = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var _ = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var l = (t, e, o) => e in t ? u(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, r = (t, e) => {
  for (var o in e || (e = {}))
    w.call(e, o) && l(t, o, e[o]);
  if (_)
    for (var o of _(e))
      x.call(e, o) && l(t, o, e[o]);
  return t;
}, p = (t, e) => g(t, f(e));
import { openBlock as a, createElementBlock as d, createElementVNode as s, defineComponent as m, ref as y, renderSlot as i, createTextVNode as h, toDisplayString as v, withDirectives as $, vShow as k, normalizeClass as D, createVNode as E, unref as z } from "vue";
const C = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  class: "icon",
  viewBox: "0 0 1024 1024",
  style: { "--svg-origin-width": "200", "--svg-origin-height": "200", "--svg-origin-width--with-unit": "200px", "--svg-origin-height--with-unit": "200px" },
  "data-svg-origin-width": "200",
  "data-svg-origin-height": "200",
  "font-size": "200"
}, B = /* @__PURE__ */ s("path", { d: "M737.6 317.1 508.5 564.6 285.3 317.1H156.4l-.2.1 351.4 389.7 360.2-389.2-.6-.6z" }, null, -1), N = [
  B
];
function P(t, e) {
  return a(), d("svg", C, N);
}
const S = { render: P }, V = { class: "demo-panel" }, H = { class: "demo-panel__header" }, I = { class: "demo-panel__title" }, A = { class: "demo-panel__description" }, M = { class: "demo-panel__content" }, O = { class: "demo-panel__example" }, T = { class: "demo-panel__code-content" }, b = { class: "demo-panel__footer" }, j = { key: 0 }, q = { key: 1 }, F = m({
  name: "DemoPanel"
}), G = /* @__PURE__ */ m(p(r({}, F), {
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    const e = y(!1), o = () => {
      e.value = !e.value;
    };
    return (n, c) => (a(), d("div", V, [
      s("div", H, [
        s("div", I, [
          i(n.$slots, "title", {}, () => [
            h(v(n.title), 1)
          ], !0)
        ]),
        s("div", A, [
          i(n.$slots, "description", {}, () => [
            h(v(n.description), 1)
          ], !0)
        ])
      ]),
      s("div", M, [
        s("div", O, [
          i(n.$slots, "default", {}, void 0, !0)
        ]),
        $(s("div", T, [
          i(n.$slots, "code", {}, void 0, !0)
        ], 512), [
          [k, e.value]
        ]),
        s("div", b, [
          s("div", {
            class: D(["demo-panel__expand", { "is-expand": e.value }]),
            onClick: o
          }, [
            E(z(S), {
              "font-size": "14px",
              fill: "currentColor",
              class: "demo-panel__expand__icon"
            }),
            e.value ? (a(), d("span", q, "Hide")) : (a(), d("span", j, "Expand"))
          ], 2)
        ])
      ])
    ]));
  }
}));
const J = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, K = /* @__PURE__ */ J(G, [["__scopeId", "data-v-658cc86f"]]);
const L = (t) => {
  [K].forEach((e) => {
    t.component(e.name, e);
  });
}, U = {
  install: L
};
export {
  K as DemoPanel,
  U as default,
  L as install
};
