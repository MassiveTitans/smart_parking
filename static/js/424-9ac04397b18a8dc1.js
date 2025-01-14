(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [424],
  {
    4019: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, o, n) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7942: function (e, t, o) {
      "use strict";
      var n = o(5696);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(2648).Z,
        a = o(7273).Z,
        u = r(o(7294)),
        l = o(4957),
        f = o(7995),
        c = o(647),
        i = o(1992),
        s = o(639),
        d = o(4019),
        p = o(227),
        v = {};
      function y(e, t, o, n) {
        if (e && l.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, o, n)).catch(function (e) {
            0;
          });
          var r =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          v[t + "%" + o + (r ? "%" + r : "")] = !0;
        }
      }
      var h = u.default.forwardRef(function (e, t) {
        var o,
          r = e.href,
          h = e.as,
          b = e.children,
          C = e.prefetch,
          g = e.passHref,
          _ = e.replace,
          m = e.shallow,
          x = e.scroll,
          M = e.locale,
          L = e.onClick,
          R = e.onMouseEnter,
          j = e.onTouchStart,
          E = e.legacyBehavior,
          O = void 0 === E ? !0 !== Boolean(!1) : E,
          k = a(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (o = b),
          !O ||
            ("string" !== typeof o && "number" !== typeof o) ||
            (o = u.default.createElement("a", null, o));
        var P = !1 !== C,
          w = u.default.useContext(c.RouterContext),
          T = u.default.useContext(i.AppRouterContext);
        T && (w = T);
        var I,
          S = u.default.useMemo(
            function () {
              var e = l.resolveHref(w, r, !0),
                t = n(e, 2),
                o = t[0],
                a = t[1];
              return { href: o, as: h ? l.resolveHref(w, h) : a || o };
            },
            [w, r, h]
          ),
          U = S.href,
          B = S.as,
          N = u.default.useRef(U),
          A = u.default.useRef(B);
        O && (I = u.default.Children.only(o));
        var D = O ? I && "object" === typeof I && I.ref : t,
          H = s.useIntersection({ rootMargin: "200px" }),
          K = n(H, 3),
          Z = K[0],
          G = K[1],
          q = K[2],
          z = u.default.useCallback(
            function (e) {
              (A.current === B && N.current === U) ||
                (q(), (A.current = B), (N.current = U)),
                Z(e),
                D &&
                  ("function" === typeof D
                    ? D(e)
                    : "object" === typeof D && (D.current = e));
            },
            [B, D, U, q, Z]
          );
        u.default.useEffect(
          function () {
            var e = G && P && l.isLocalURL(U),
              t = "undefined" !== typeof M ? M : w && w.locale,
              o = v[U + "%" + B + (t ? "%" + t : "")];
            e && !o && y(w, U, B, { locale: t });
          },
          [B, U, G, M, P, w]
        );
        var F = {
          ref: z,
          onClick: function (e) {
            O || "function" !== typeof L || L(e),
              O &&
                I.props &&
                "function" === typeof I.props.onClick &&
                I.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, o, n, r, a, f, c, i, s) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      l.isLocalURL(o))
                  ) {
                    e.preventDefault();
                    var d = function () {
                      "beforePopState" in t
                        ? t[r ? "replace" : "push"](o, n, {
                            shallow: a,
                            locale: c,
                            scroll: f,
                          })
                        : t[r ? "replace" : "push"](o, {
                            forceOptimisticNavigation: !s,
                          });
                    };
                    i ? u.default.startTransition(d) : d();
                  }
                })(e, w, U, B, _, m, x, M, Boolean(T), P);
          },
          onMouseEnter: function (e) {
            O || "function" !== typeof R || R(e),
              O &&
                I.props &&
                "function" === typeof I.props.onMouseEnter &&
                I.props.onMouseEnter(e),
              (!P && T) || (l.isLocalURL(U) && y(w, U, B, { priority: !0 }));
          },
          onTouchStart: function (e) {
            O || "function" !== typeof j || j(e),
              O &&
                I.props &&
                "function" === typeof I.props.onTouchStart &&
                I.props.onTouchStart(e),
              (!P && T) || (l.isLocalURL(U) && y(w, U, B, { priority: !0 }));
          },
        };
        if (!O || g || ("a" === I.type && !("href" in I.props))) {
          var J = "undefined" !== typeof M ? M : w && w.locale,
            Q =
              w &&
              w.isLocaleDomain &&
              d.getDomainLocale(B, J, w.locales, w.domainLocales);
          F.href = Q || p.addBasePath(f.addLocale(B, J, w && w.defaultLocale));
        }
        return O
          ? u.default.cloneElement(I, F)
          : u.default.createElement("a", Object.assign({}, k, F), o);
      });
      (t.default = h),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    639: function (e, t, o) {
      "use strict";
      var n = o(5696);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          var t = e.rootRef,
            o = e.rootMargin,
            c = e.disabled || !u,
            i = r.useState(!1),
            s = n(i, 2),
            d = s[0],
            p = s[1],
            v = r.useState(null),
            y = n(v, 2),
            h = y[0],
            b = y[1];
          r.useEffect(
            function () {
              if (u) {
                if (c || d) return;
                if (h && h.tagName) {
                  var e = (function (e, t, o) {
                    var n = (function (e) {
                        var t,
                          o = {
                            root: e.root || null,
                            margin: e.rootMargin || "",
                          },
                          n = f.find(function (e) {
                            return e.root === o.root && e.margin === o.margin;
                          });
                        if (n && (t = l.get(n))) return t;
                        var r = new Map(),
                          a = new IntersectionObserver(function (e) {
                            e.forEach(function (e) {
                              var t = r.get(e.target),
                                o = e.isIntersecting || e.intersectionRatio > 0;
                              t && o && t(o);
                            });
                          }, e);
                        return (
                          (t = { id: o, observer: a, elements: r }),
                          f.push(o),
                          l.set(o, t),
                          t
                        );
                      })(o),
                      r = n.id,
                      a = n.observer,
                      u = n.elements;
                    return (
                      u.set(e, t),
                      a.observe(e),
                      function () {
                        if ((u.delete(e), a.unobserve(e), 0 === u.size)) {
                          a.disconnect(), l.delete(r);
                          var t = f.findIndex(function (e) {
                            return e.root === r.root && e.margin === r.margin;
                          });
                          t > -1 && f.splice(t, 1);
                        }
                      }
                    );
                  })(
                    h,
                    function (e) {
                      return e && p(e);
                    },
                    { root: null == t ? void 0 : t.current, rootMargin: o }
                  );
                  return e;
                }
              } else if (!d) {
                var n = a.requestIdleCallback(function () {
                  return p(!0);
                });
                return function () {
                  return a.cancelIdleCallback(n);
                };
              }
            },
            [h, c, o, t, d]
          );
          var C = r.useCallback(function () {
            p(!1);
          }, []);
          return [b, d, C];
        });
      var r = o(7294),
        a = o(6286),
        u = "function" === typeof IntersectionObserver,
        l = new Map(),
        f = [];
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1992: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var n = (0, o(2648).Z)(o(7294)),
        r = n.default.createContext(null);
      t.AppRouterContext = r;
      var a = n.default.createContext(null);
      t.LayoutRouterContext = a;
      var u = n.default.createContext(null);
      t.GlobalLayoutRouterContext = u;
      var l = n.default.createContext(null);
      t.TemplateContext = l;
    },
    1664: function (e, t, o) {
      e.exports = o(7942);
    },
    1163: function (e, t, o) {
      e.exports = o(9898);
    },
  },
]);
