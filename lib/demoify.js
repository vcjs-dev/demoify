var k = Object.defineProperty, w = Object.defineProperties;
var x = Object.getOwnPropertyDescriptors;
var $ = Object.getOwnPropertySymbols;
var C = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
var D = (o, e, t) => e in o ? k(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t, p = (o, e) => {
  for (var t in e || (e = {}))
    C.call(e, t) && D(o, t, e[t]);
  if ($)
    for (var t of $(e))
      S.call(e, t) && D(o, t, e[t]);
  return o;
}, m = (o, e) => w(o, x(e));
import { openBlock as n, createElementBlock as i, createElementVNode as s, defineComponent as l, ref as E, renderSlot as a, createTextVNode as u, toDisplayString as r, withDirectives as L, vShow as H, normalizeClass as I, createVNode as b, unref as M, Fragment as h, renderList as v, resolveComponent as T, withCtx as z } from "vue";
const B = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  class: "icon",
  viewBox: "0 0 1024 1024",
  style: { "--svg-origin-width": "200", "--svg-origin-height": "200", "--svg-origin-width--with-unit": "200px", "--svg-origin-height--with-unit": "200px" },
  "data-svg-origin-width": "200",
  "data-svg-origin-height": "200",
  "font-size": "200"
};
function P(o, e) {
  return n(), i("svg", B, e[0] || (e[0] = [
    s("path", { d: "M737.6 317.1 508.5 564.6 285.3 317.1H156.4l-.2.1 351.4 389.7 360.2-389.2-.6-.6z" }, null, -1)
  ]));
}
const N = { render: P }, V = { class: "demo-panel" }, R = { class: "demo-panel__header" }, A = { class: "demo-panel__title" }, F = { class: "demo-panel__description" }, O = { class: "demo-panel__content" }, j = { class: "demo-panel__example" }, q = { class: "demo-panel__code-content" }, G = { class: "demo-panel__footer" }, J = { key: 0 }, K = { key: 1 }, Q = l({
  name: "DemoPanel"
}), U = /* @__PURE__ */ l(m(p({}, Q), {
  props: {
    title: {},
    description: {},
    initialExpand: { type: Boolean, default: !1 }
  },
  setup(o) {
    const t = E(o.initialExpand), d = () => {
      t.value = !t.value;
    };
    return (_, g) => (n(), i("div", V, [
      s("div", R, [
        s("div", A, [
          a(_.$slots, "title", {}, () => [
            u(r(_.title), 1)
          ], !0)
        ]),
        s("div", F, [
          a(_.$slots, "description", {}, () => [
            u(r(_.description), 1)
          ], !0)
        ])
      ]),
      s("div", O, [
        s("div", j, [
          a(_.$slots, "default", {}, void 0, !0)
        ]),
        L(s("div", q, [
          a(_.$slots, "code", {}, void 0, !0)
        ], 512), [
          [H, t.value]
        ]),
        s("div", G, [
          s("div", {
            class: I(["demo-panel__expand", { "is-expand": t.value }]),
            onClick: d
          }, [
            b(M(N), {
              "font-size": "14px",
              fill: "currentColor",
              class: "demo-panel__expand__icon"
            }),
            t.value ? (n(), i("span", K, "Hide")) : (n(), i("span", J, "Expand"))
          ], 2)
        ])
      ])
    ]));
  }
}));
const c = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [d, _] of e)
    t[d] = _;
  return t;
}, W = /* @__PURE__ */ c(U, [["__scopeId", "data-v-b1416e40"]]), X = { class: "demo-header" }, Y = { class: "demo-header__left" }, Z = { class: "logo" }, ee = { class: "title" }, te = ["href"], oe = { class: "demo-header__right" }, se = ["href"], ne = l({
  name: "DemoHeader"
}), ie = /* @__PURE__ */ l(m(p({}, ne), {
  props: {
    logoText: {},
    title: {},
    titleLink: {},
    rightLinks: {}
  },
  setup(o) {
    return (e, t) => (n(), i("div", X, [
      s("div", Y, [
        s("div", Z, [
          a(e.$slots, "logo", {}, () => [
            s("span", null, r(e.logoText), 1)
          ], !0)
        ]),
        s("div", ee, [
          s("a", {
            href: e.titleLink,
            target: "_blank"
          }, r(e.title), 9, te)
        ]),
        a(e.$slots, "left", {}, void 0, !0)
      ]),
      s("div", oe, [
        a(e.$slots, "right", {}, void 0, !0),
        (n(!0), i(h, null, v(e.rightLinks, (d, _) => (n(), i("a", {
          key: _,
          href: d.href,
          target: "_blank"
        }, r(d.title), 9, se))), 128))
      ])
    ]));
  }
}));
const _e = /* @__PURE__ */ c(ie, [["__scopeId", "data-v-7646bf52"]]), ae = { class: "demo-sidebar" }, de = { class: "demo-sidebar__content" }, re = { class: "demo-sidebar__group-title" }, le = { class: "demo-sidebar__group-menus" }, ce = /* @__PURE__ */ l({
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
  setup(o) {
    return (e, t) => {
      const d = T("RouterLink");
      return n(), i("div", ae, [
        s("div", de, [
          (n(!0), i(h, null, v(e.items, (_, g) => (n(), i("div", {
            key: g,
            class: "demo-sidebar__group"
          }, [
            s("div", re, r(_.groupTitle), 1),
            s("div", le, [
              (n(!0), i(h, null, v(_.menus, (f, y) => (n(), i("div", {
                key: y,
                class: "demo-sidebar__group-menu-item"
              }, [
                b(d, {
                  to: f.to
                }, {
                  default: z(() => [
                    u(r(f.title), 1)
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
const pe = /* @__PURE__ */ c(ce, [["__scopeId", "data-v-89697ac9"]]), me = { class: "demo-container" }, ue = /* @__PURE__ */ l({
  name: "DemoContainer",
  __name: "DemoContainer",
  setup(o) {
    return (e, t) => (n(), i("div", me, [
      a(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const he = /* @__PURE__ */ c(ue, [["__scopeId", "data-v-930b9ff0"]]), ve = { class: "demo-main" }, ge = /* @__PURE__ */ l({
  name: "DemoMain",
  __name: "DemoMain",
  setup(o) {
    return (e, t) => (n(), i("div", ve, [
      a(e.$slots, "default", {}, void 0, !0)
    ]));
  }
});
const fe = /* @__PURE__ */ c(ge, [["__scopeId", "data-v-ce93d6c7"]]);
const $e = (o) => {
  [W, _e, pe, he, fe].forEach(
    (e) => {
      o.component(e.name, e);
    }
  );
}, ye = {
  install: $e
};
export {
  he as DemoContainer,
  _e as DemoHeader,
  fe as DemoMain,
  W as DemoPanel,
  pe as DemoSidebar,
  ye as default,
  $e as install
};
