var k = Object.defineProperty, w = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var f = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var $ = (t, e, o) => e in t ? k(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o, p = (t, e) => {
  for (var o in e || (e = {}))
    C.call(e, o) && $(t, o, e[o]);
  if (f)
    for (var o of f(e))
      S.call(e, o) && $(t, o, e[o]);
  return t;
}, m = (t, e) => w(t, x(e));
import { openBlock as n, createElementBlock as _, createElementVNode as s, defineComponent as c, ref as L, renderSlot as a, createTextVNode as u, toDisplayString as r, withDirectives as H, vShow as I, normalizeClass as M, createVNode as D, unref as T, Fragment as h, renderList as v, resolveComponent as E, withCtx as z } from "vue";
const P = {
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
function V(t, e) {
  return n(), _("svg", P, N);
}
const R = { render: V }, A = { class: "demo-panel" }, F = { class: "demo-panel__header" }, O = { class: "demo-panel__title" }, j = { class: "demo-panel__description" }, q = { class: "demo-panel__content" }, G = { class: "demo-panel__example" }, J = { class: "demo-panel__code-content" }, K = { class: "demo-panel__footer" }, Q = { key: 0 }, U = { key: 1 }, W = c({
  name: "DemoPanel"
}), X = /* @__PURE__ */ c(m(p({}, W), {
  props: {
    title: {},
    description: {}
  },
  setup(t) {
    const e = L(!1), o = () => {
      e.value = !e.value;
    };
    return (i, d) => (n(), _("div", A, [
      s("div", F, [
        s("div", O, [
          a(i.$slots, "title", {}, () => [
            u(r(i.title), 1)
          ], !0)
        ]),
        s("div", j, [
          a(i.$slots, "description", {}, () => [
            u(r(i.description), 1)
          ], !0)
        ])
      ]),
      s("div", q, [
        s("div", G, [
          a(i.$slots, "default", {}, void 0, !0)
        ]),
        H(s("div", J, [
          a(i.$slots, "code", {}, void 0, !0)
        ], 512), [
          [I, e.value]
        ]),
        s("div", K, [
          s("div", {
            class: M(["demo-panel__expand", { "is-expand": e.value }]),
            onClick: o
          }, [
            D(T(R), {
              "font-size": "14px",
              fill: "currentColor",
              class: "demo-panel__expand__icon"
            }),
            e.value ? (n(), _("span", U, "Hide")) : (n(), _("span", Q, "Expand"))
          ], 2)
        ])
      ])
    ]));
  }
}));
const l = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [i, d] of e)
    o[i] = d;
  return o;
}, Y = /* @__PURE__ */ l(X, [["__scopeId", "data-v-abec707b"]]), Z = { class: "demo-header" }, ee = { class: "demo-header__left" }, te = { class: "logo" }, oe = { class: "title" }, se = ["href"], ne = { class: "demo-header__right" }, _e = ["href"], ie = c({
  name: "DemoHeader"
}), ae = /* @__PURE__ */ c(m(p({}, ie), {
  props: {
    logoText: {},
    title: {},
    titleLink: {},
    rightLinks: {}
  },
  setup(t) {
    return (e, o) => (n(), _("div", Z, [
      s("div", ee, [
        s("div", te, [
          a(e.$slots, "logo", {}, () => [
            s("span", null, r(e.logoText), 1)
          ], !0)
        ]),
        s("div", oe, [
          s("a", {
            href: e.titleLink,
            target: "_blank"
          }, r(e.title), 9, se)
        ]),
        a(e.$slots, "left", {}, void 0, !0)
      ]),
      s("div", ne, [
        a(e.$slots, "right", {}, void 0, !0),
        (n(!0), _(h, null, v(e.rightLinks, (i, d) => (n(), _("a", {
          key: d,
          href: i.href,
          target: "_blank"
        }, r(i.title), 9, _e))), 128))
      ])
    ]));
  }
}));
const de = /* @__PURE__ */ l(ae, [["__scopeId", "data-v-7646bf52"]]), re = { class: "demo-sidebar" }, ce = { class: "demo-sidebar__content" }, le = { class: "demo-sidebar__group-title" }, pe = { class: "demo-sidebar__group-menus" }, me = /* @__PURE__ */ c({
  name: "DemoSidebar",
  __name: "DemoSidebar",
  props: {
    items: { default: () => [
      {
        groupTitle: "布局",
        menus: [
          { title: "DemoContainer 容器", to: "/" },
          { title: "DemoHeader 头部导航", to: "/" },
          { title: "DemoSidebar 侧边栏", to: "/" },
          { title: "DemoMain 主体", to: "/" }
        ]
      },
      {
        groupTitle: "演示组件",
        menus: [{ title: "DemoPanel 示例面板", to: "/" }]
      }
    ] }
  },
  setup(t) {
    return (e, o) => {
      const i = E("RouterLink");
      return n(), _("div", re, [
        s("div", ce, [
          (n(!0), _(h, null, v(e.items, (d, b) => (n(), _("div", {
            key: b,
            class: "demo-sidebar__group"
          }, [
            s("div", le, r(d.groupTitle), 1),
            s("div", pe, [
              (n(!0), _(h, null, v(d.menus, (g, y) => (n(), _("div", {
                key: y,
                class: "demo-sidebar__group-menu-item"
              }, [
                D(i, {
                  to: g.to
                }, {
                  default: z(() => [
                    u(r(g.title), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]))), 128))
            ])
          ]))), 128))
        ])
      ]);
    };
  }
});
const ue = /* @__PURE__ */ l(me, [["__scopeId", "data-v-89697ac9"]]), he = { class: "demo-container" }, ve = /* @__PURE__ */ c({
  name: "DemoContainer",
  __name: "DemoContainer",
  setup(t) {
    return (e, o) => (n(), _("div", he, [
      a(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const ge = /* @__PURE__ */ l(ve, [["__scopeId", "data-v-930b9ff0"]]), fe = { class: "demo-main" }, $e = /* @__PURE__ */ c({
  name: "DemoMain",
  __name: "DemoMain",
  setup(t) {
    return (e, o) => (n(), _("div", fe, [
      a(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const De = /* @__PURE__ */ l($e, [["__scopeId", "data-v-ce93d6c7"]]);
const be = (t) => {
  [Y, de, ue, ge, De].forEach(
    (e) => {
      t.component(e.name, e);
    }
  );
}, we = {
  install: be
};
export {
  de as DemoHeader,
  Y as DemoPanel,
  we as default,
  be as install
};
