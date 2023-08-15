var u = Object.defineProperty, g = Object.defineProperties;
var f = Object.getOwnPropertyDescriptors;
var l = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
var _ = (o, e, t) => e in o ? u(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, r = (o, e) => {
  for (var t in e || (e = {}))
    w.call(e, t) && _(o, t, e[t]);
  if (l)
    for (var t of l(e))
      x.call(e, t) && _(o, t, e[t]);
  return o;
}, p = (o, e) => g(o, f(e));
import { openBlock as a, createElementBlock as d, createElementVNode as s, defineComponent as m, ref as k, renderSlot as i, createTextVNode as h, toDisplayString as v, withDirectives as y, vShow as $, normalizeClass as D, createVNode as E, unref as z } from "vue";
import "prismjs";
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
function P(o, e) {
  return a(), d("svg", C, N);
}
const S = { render: P }, V = { class: "demo-panel" }, H = { class: "demo-panel__header" }, I = { class: "demo-panel__title" }, A = { class: "demo-panel__description" }, M = { class: "demo-panel__content" }, O = { class: "demo-panel__example" }, T = { class: "demo-panel__code-content" }, b = { class: "language-markup" }, j = { class: "demo-panel__footer" }, q = { key: 0 }, F = { key: 1 }, G = m({
  name: "DemoPanel"
}), J = /* @__PURE__ */ m(p(r({}, G), {
  props: {
    title: {},
    description: {}
  },
  setup(o) {
    const e = k(!1), t = () => {
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
        y(s("div", T, [
          s("pre", b, [
            s("code", null, [
              i(n.$slots, "code", {}, void 0, !0)
            ])
          ])
        ], 512), [
          [$, e.value]
        ]),
        s("div", j, [
          s("div", {
            class: D(["demo-panel__expand", { "is-expand": e.value }]),
            onClick: t
          }, [
            E(z(S), {
              "font-size": "14px",
              fill: "currentColor",
              class: "demo-panel__expand__icon"
            }),
            e.value ? (a(), d("span", F, "Hide")) : (a(), d("span", q, "Expand"))
          ], 2)
        ])
      ])
    ]));
  }
}));
const K = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [n, c] of e)
    t[n] = c;
  return t;
}, L = /* @__PURE__ */ K(J, [["__scopeId", "data-v-02cea6f4"]]);
const Q = (o) => {
  [L].forEach((e) => {
    o.component(e.name, e);
  });
}, X = {
  install: Q
};
export {
  L as DemoPanel,
  X as default,
  Q as install
};
