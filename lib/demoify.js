var g = Object.defineProperty, f = Object.defineProperties;
var $ = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
var v = (t, e, o) => e in t ? g(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, r = (t, e) => {
  for (var o in e || (e = {}))
    w.call(e, o) && v(t, o, e[o]);
  if (p)
    for (var o of p(e))
      k.call(e, o) && v(t, o, e[o]);
  return t;
}, h = (t, e) => f(t, $(e));
import { openBlock as _, createElementBlock as a, createElementVNode as s, defineComponent as c, ref as x, renderSlot as i, createTextVNode as u, toDisplayString as d, withDirectives as y, vShow as D, normalizeClass as E, createVNode as H, unref as L, Fragment as b, renderList as z } from "vue";
const C = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  class: "icon",
  viewBox: "0 0 1024 1024",
  style: { "--svg-origin-width": "200", "--svg-origin-height": "200", "--svg-origin-width--with-unit": "200px", "--svg-origin-height--with-unit": "200px" },
  "data-svg-origin-width": "200",
  "data-svg-origin-height": "200",
  "font-size": "200"
}, B = /* @__PURE__ */ s("path", { d: "M737.6 317.1 508.5 564.6 285.3 317.1H156.4l-.2.1 351.4 389.7 360.2-389.2-.6-.6z" }, null, -1), I = [
  B
];
function N(t, e) {
  return _(), a("svg", C, I);
}
const P = { render: N }, S = { class: "demo-panel" }, T = { class: "demo-panel__header" }, V = { class: "demo-panel__title" }, A = { class: "demo-panel__description" }, F = { class: "demo-panel__content" }, M = { class: "demo-panel__example" }, O = { class: "demo-panel__code-content" }, j = { class: "demo-panel__footer" }, q = { key: 0 }, G = { key: 1 }, J = c({
  name: "DemoPanel"
}), K = /* @__PURE__ */ c(h(r({}, J), {
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    const e = x(!1), o = () => {
      e.value = !e.value;
    };
    return (n, l) => (_(), a("div", S, [
      s("div", T, [
        s("div", V, [
          i(n.$slots, "title", {}, () => [
            u(d(n.title), 1)
          ], !0)
        ]),
        s("div", A, [
          i(n.$slots, "description", {}, () => [
            u(d(n.description), 1)
          ], !0)
        ])
      ]),
      s("div", F, [
        s("div", M, [
          i(n.$slots, "default", {}, void 0, !0)
        ]),
        y(s("div", O, [
          i(n.$slots, "code", {}, void 0, !0)
        ], 512), [
          [D, e.value]
        ]),
        s("div", j, [
          s("div", {
            class: E(["demo-panel__expand", { "is-expand": e.value }]),
            onClick: o
          }, [
            H(L(P), {
              "font-size": "14px",
              fill: "currentColor",
              class: "demo-panel__expand__icon"
            }),
            e.value ? (_(), a("span", G, "Hide")) : (_(), a("span", q, "Expand"))
          ], 2)
        ])
      ])
    ]));
  }
}));
const m = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, l] of e)
    o[n] = l;
  return o;
}, Q = /* @__PURE__ */ m(K, [["__scopeId", "data-v-658cc86f"]]), R = { class: "demo-header" }, U = { class: "demo-header__left" }, W = { class: "logo" }, X = { class: "title" }, Y = ["href"], Z = { class: "demo-header__right" }, ee = ["href"], te = c({
  name: "DemoHeader"
}), oe = /* @__PURE__ */ c(h(r({}, te), {
  props: {
    logoText: {},
    title: {},
    titleLink: {},
    rightLinks: {}
  },
  setup(t) {
    return (e, o) => (_(), a("div", R, [
      s("div", U, [
        s("div", W, [
          i(e.$slots, "logo", {}, () => [
            s("span", null, d(e.logoText), 1)
          ], !0)
        ]),
        s("div", X, [
          s("a", {
            href: e.titleLink,
            target: "_blank"
          }, d(e.title), 9, Y)
        ]),
        i(e.$slots, "left", {}, void 0, !0)
      ]),
      s("div", Z, [
        i(e.$slots, "right", {}, void 0, !0),
        (_(!0), a(b, null, z(e.rightLinks, (n, l) => (_(), a("a", {
          key: l,
          href: n.href,
          target: "_blank"
        }, d(n.title), 9, ee))), 128))
      ])
    ]));
  }
}));
const se = /* @__PURE__ */ m(oe, [["__scopeId", "data-v-0a576b4a"]]);
const ne = (t) => {
  [Q, se].forEach((e) => {
    t.component(e.name, e);
  });
}, ae = {
  install: ne
};
export {
  se as DemoHeader,
  Q as DemoPanel,
  ae as default,
  ne as install
};
