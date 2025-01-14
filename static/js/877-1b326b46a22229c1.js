(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [877],
  {
    8566: function (t, e, n) {
      "use strict";
      var r = n(930),
        i = n(5696),
        o = n(7980);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          var e,
            n = t.src,
            s = t.sizes,
            u = t.unoptimized,
            h = void 0 !== u && u,
            m = t.priority,
            b = void 0 !== m && m,
            P = t.loading,
            V = t.lazyRoot,
            C = void 0 === V ? null : V,
            M = t.lazyBoundary,
            R = t.className,
            k = t.quality,
            j = t.width,
            O = t.height,
            L = t.style,
            D = t.objectFit,
            I = t.objectPosition,
            F = t.onLoadingComplete,
            U = t.placeholder,
            B = void 0 === U ? "empty" : U,
            z = t.blurDataURL,
            N = l(t, [
              "src",
              "sizes",
              "unoptimized",
              "priority",
              "loading",
              "lazyRoot",
              "lazyBoundary",
              "className",
              "quality",
              "width",
              "height",
              "style",
              "objectFit",
              "objectPosition",
              "onLoadingComplete",
              "placeholder",
              "blurDataURL",
            ]),
            _ = c.useContext(v.ImageConfigContext),
            H = c.useMemo(
              function () {
                var t = g || _ || f.imageConfigDefault,
                  e = []
                    .concat(o(t.deviceSizes), o(t.imageSizes))
                    .sort(function (t, e) {
                      return t - e;
                    }),
                  n = t.deviceSizes.sort(function (t, e) {
                    return t - e;
                  });
                return a({}, t, { allSizes: e, deviceSizes: n });
              },
              [_]
            ),
            W = N,
            q = s ? "responsive" : "intrinsic";
          "layout" in W && (W.layout && (q = W.layout), delete W.layout);
          var Y = A;
          if ("loader" in W) {
            if (W.loader) {
              var X = W.loader;
              Y = function (t) {
                t.config;
                var e = l(t, ["config"]);
                return X(e);
              };
            }
            delete W.loader;
          }
          var G = "";
          if (
            (function (t) {
              return (
                "object" === typeof t &&
                (w(t) ||
                  (function (t) {
                    return void 0 !== t.src;
                  })(t))
              );
            })(n)
          ) {
            var Z = w(n) ? n.default : n;
            if (!Z.src)
              throw new Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(
                  JSON.stringify(Z)
                )
              );
            if (
              ((z = z || Z.blurDataURL),
              (G = Z.src),
              (!q || "fill" !== q) &&
                ((O = O || Z.height),
                (j = j || Z.width),
                !Z.height || !Z.width))
            )
              throw new Error(
                "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(
                  JSON.stringify(Z)
                )
              );
          }
          var $ = !b && ("lazy" === P || "undefined" === typeof P);
          ((n = "string" === typeof n ? n : G).startsWith("data:") ||
            n.startsWith("blob:")) &&
            ((h = !0), ($ = !1));
          y.has(n) && ($ = !1);
          H.unoptimized && (h = !0);
          var K,
            J = c.useState(!1),
            Q = i(J, 2),
            tt = Q[0],
            et = Q[1],
            nt = p.useIntersection({
              rootRef: C,
              rootMargin: M || "200px",
              disabled: !$,
            }),
            rt = i(nt, 3),
            it = rt[0],
            ot = rt[1],
            at = rt[2],
            st = !$ || ot,
            ut = {
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            lt = {
              boxSizing: "border-box",
              display: "block",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: 0,
              margin: 0,
              padding: 0,
            },
            ct = !1,
            dt = {
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              boxSizing: "border-box",
              padding: 0,
              border: "none",
              margin: "auto",
              display: "block",
              width: 0,
              height: 0,
              minWidth: "100%",
              maxWidth: "100%",
              minHeight: "100%",
              maxHeight: "100%",
              objectFit: D,
              objectPosition: I,
            },
            ft = E(j),
            pt = E(O),
            vt = E(k);
          0;
          var ht = Object.assign({}, L, dt),
            mt =
              "blur" !== B || tt
                ? {}
                : {
                    backgroundSize: D || "cover",
                    backgroundPosition: I || "0% 0%",
                    filter: "blur(20px)",
                    backgroundImage: 'url("'.concat(z, '")'),
                  };
          if ("fill" === q)
            (ut.display = "block"),
              (ut.position = "absolute"),
              (ut.top = 0),
              (ut.left = 0),
              (ut.bottom = 0),
              (ut.right = 0);
          else if ("undefined" !== typeof ft && "undefined" !== typeof pt) {
            var gt = pt / ft,
              yt = isNaN(gt) ? "100%" : "".concat(100 * gt, "%");
            "responsive" === q
              ? ((ut.display = "block"),
                (ut.position = "relative"),
                (ct = !0),
                (lt.paddingTop = yt))
              : "intrinsic" === q
              ? ((ut.display = "inline-block"),
                (ut.position = "relative"),
                (ut.maxWidth = "100%"),
                (ct = !0),
                (lt.maxWidth = "100%"),
                (K =
                  "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27"
                    .concat(ft, "%27%20height=%27")
                    .concat(pt, "%27/%3e")))
              : "fixed" === q &&
                ((ut.display = "inline-block"),
                (ut.position = "relative"),
                (ut.width = ft),
                (ut.height = pt));
          } else 0;
          var xt = { src: x, srcSet: void 0, sizes: void 0 };
          st &&
            (xt = S({
              config: H,
              src: n,
              unoptimized: h,
              layout: q,
              width: ft,
              quality: vt,
              sizes: s,
              loader: Y,
            }));
          var bt = n;
          0;
          0;
          var wt =
              (r((e = {}), "imagesrcset", xt.srcSet),
              r(e, "imagesizes", xt.sizes),
              r(e, "crossOrigin", W.crossOrigin),
              e),
            St = c.default.useLayoutEffect,
            Et = c.useRef(F),
            At = c.useRef(n);
          c.useEffect(
            function () {
              Et.current = F;
            },
            [F]
          ),
            St(
              function () {
                At.current !== n && (at(), (At.current = n));
              },
              [at, n]
            );
          var Pt = a(
            {
              isLazy: $,
              imgAttributes: xt,
              heightInt: pt,
              widthInt: ft,
              qualityInt: vt,
              layout: q,
              className: R,
              imgStyle: ht,
              blurStyle: mt,
              loading: P,
              config: H,
              unoptimized: h,
              placeholder: B,
              loader: Y,
              srcString: bt,
              onLoadingCompleteRef: Et,
              setBlurComplete: et,
              setIntersection: it,
              isVisible: st,
              noscriptSizes: s,
            },
            W
          );
          return c.default.createElement(
            c.default.Fragment,
            null,
            c.default.createElement(
              "span",
              { style: ut },
              ct
                ? c.default.createElement(
                    "span",
                    { style: lt },
                    K
                      ? c.default.createElement("img", {
                          style: {
                            display: "block",
                            maxWidth: "100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: 0,
                            margin: 0,
                            padding: 0,
                          },
                          alt: "",
                          "aria-hidden": !0,
                          src: K,
                        })
                      : null
                  )
                : null,
              c.default.createElement(T, Object.assign({}, Pt))
            ),
            b
              ? c.default.createElement(
                  d.default,
                  null,
                  c.default.createElement(
                    "link",
                    Object.assign(
                      {
                        key: "__nimg-" + xt.src + xt.srcSet + xt.sizes,
                        rel: "preload",
                        as: "image",
                        href: xt.srcSet ? void 0 : xt.src,
                      },
                      wt
                    )
                  )
                )
              : null
          );
        });
      var a = n(6495).Z,
        s = n(2648).Z,
        u = n(1598).Z,
        l = n(7273).Z,
        c = u(n(7294)),
        d = s(n(2717)),
        f = n(8187),
        p = n(639),
        v = n(9239),
        h = (n(9475), n(4969));
      function m(t) {
        return "/" === t[0] ? t.slice(1) : t;
      }
      var g = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image/",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
        y = new Set(),
        x =
          (new Map(),
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      var b = new Map([
        [
          "default",
          function (t) {
            var e = t.config,
              n = t.src,
              r = t.width,
              i = t.quality;
            return n.endsWith(".svg") && !e.dangerouslyAllowSVG
              ? n
              : ""
                  .concat(h.normalizePathTrailingSlash(e.path), "?url=")
                  .concat(encodeURIComponent(n), "&w=")
                  .concat(r, "&q=")
                  .concat(i || 75);
          },
        ],
        [
          "imgix",
          function (t) {
            var e = t.config,
              n = t.src,
              r = t.width,
              i = t.quality,
              o = new URL("".concat(e.path).concat(m(n))),
              a = o.searchParams;
            return (
              a.set("auto", a.getAll("auto").join(",") || "format"),
              a.set("fit", a.get("fit") || "max"),
              a.set("w", a.get("w") || r.toString()),
              i && a.set("q", i.toString()),
              o.href
            );
          },
        ],
        [
          "cloudinary",
          function (t) {
            var e = t.config,
              n = t.src,
              r =
                [
                  "f_auto",
                  "c_limit",
                  "w_" + t.width,
                  "q_" + (t.quality || "auto"),
                ].join(",") + "/";
            return "".concat(e.path).concat(r).concat(m(n));
          },
        ],
        [
          "akamai",
          function (t) {
            var e = t.config,
              n = t.src,
              r = t.width;
            return "".concat(e.path).concat(m(n), "?imwidth=").concat(r);
          },
        ],
        [
          "custom",
          function (t) {
            var e = t.src;
            throw new Error(
              'Image with src "'.concat(e, '" is missing "loader" prop.') +
                "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader"
            );
          },
        ],
      ]);
      function w(t) {
        return void 0 !== t.default;
      }
      function S(t) {
        var e = t.config,
          n = t.src,
          r = t.unoptimized,
          i = t.layout,
          a = t.width,
          s = t.quality,
          u = t.sizes,
          l = t.loader;
        if (r) return { src: n, srcSet: void 0, sizes: void 0 };
        var c = (function (t, e, n, r) {
            var i = t.deviceSizes,
              a = t.allSizes;
            if (r && ("fill" === n || "responsive" === n)) {
              for (var s, u = /(^|\s)(1?\d?\d)vw/g, l = []; (s = u.exec(r)); s)
                l.push(parseInt(s[2]));
              if (l.length) {
                var c = 0.01 * Math.min.apply(Math, l);
                return {
                  widths: a.filter(function (t) {
                    return t >= i[0] * c;
                  }),
                  kind: "w",
                };
              }
              return { widths: a, kind: "w" };
            }
            return "number" !== typeof e || "fill" === n || "responsive" === n
              ? { widths: i, kind: "w" }
              : {
                  widths: o(
                    new Set(
                      [e, 2 * e].map(function (t) {
                        return (
                          a.find(function (e) {
                            return e >= t;
                          }) || a[a.length - 1]
                        );
                      })
                    )
                  ),
                  kind: "x",
                };
          })(e, a, i, u),
          d = c.widths,
          f = c.kind,
          p = d.length - 1;
        return {
          sizes: u || "w" !== f ? u : "100vw",
          srcSet: d
            .map(function (t, r) {
              return ""
                .concat(l({ config: e, src: n, quality: s, width: t }), " ")
                .concat("w" === f ? t : r + 1)
                .concat(f);
            })
            .join(", "),
          src: l({ config: e, src: n, quality: s, width: d[p] }),
        };
      }
      function E(t) {
        return "number" === typeof t
          ? t
          : "string" === typeof t
          ? parseInt(t, 10)
          : void 0;
      }
      function A(t) {
        var e,
          n = (null == (e = t.config) ? void 0 : e.loader) || "default",
          r = b.get(n);
        if (r) return r(t);
        throw new Error(
          'Unknown "loader" found in "next.config.js". Expected: '
            .concat(f.VALID_LOADERS.join(", "), ". Received: ")
            .concat(n)
        );
      }
      function P(t, e, n, r, i, o) {
        t &&
          t.src !== x &&
          t["data-loaded-src"] !== e &&
          ((t["data-loaded-src"] = e),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(function () {})
            .then(function () {
              if (
                t.parentNode &&
                (y.add(e),
                "blur" === r && o(!0),
                null == i ? void 0 : i.current)
              ) {
                var n = t.naturalWidth,
                  a = t.naturalHeight;
                i.current({ naturalWidth: n, naturalHeight: a });
              }
            }));
      }
      var T = function (t) {
        var e = t.imgAttributes,
          n = (t.heightInt, t.widthInt),
          r = t.qualityInt,
          i = t.layout,
          o = t.className,
          s = t.imgStyle,
          u = t.blurStyle,
          d = t.isLazy,
          f = t.placeholder,
          p = t.loading,
          v = t.srcString,
          h = t.config,
          m = t.unoptimized,
          g = t.loader,
          y = t.onLoadingCompleteRef,
          x = t.setBlurComplete,
          b = t.setIntersection,
          w = t.onLoad,
          E = t.onError,
          A = (t.isVisible, t.noscriptSizes),
          T = l(t, [
            "imgAttributes",
            "heightInt",
            "widthInt",
            "qualityInt",
            "layout",
            "className",
            "imgStyle",
            "blurStyle",
            "isLazy",
            "placeholder",
            "loading",
            "srcString",
            "config",
            "unoptimized",
            "loader",
            "onLoadingCompleteRef",
            "setBlurComplete",
            "setIntersection",
            "onLoad",
            "onError",
            "isVisible",
            "noscriptSizes",
          ]);
        return (
          (p = d ? "lazy" : p),
          c.default.createElement(
            c.default.Fragment,
            null,
            c.default.createElement(
              "img",
              Object.assign({}, T, e, {
                decoding: "async",
                "data-nimg": i,
                className: o,
                style: a({}, s, u),
                ref: c.useCallback(
                  function (t) {
                    b(t),
                      (null == t ? void 0 : t.complete) && P(t, v, 0, f, y, x);
                  },
                  [b, v, i, f, y, x]
                ),
                onLoad: function (t) {
                  P(t.currentTarget, v, 0, f, y, x), w && w(t);
                },
                onError: function (t) {
                  "blur" === f && x(!0), E && E(t);
                },
              })
            ),
            (d || "blur" === f) &&
              c.default.createElement(
                "noscript",
                null,
                c.default.createElement(
                  "img",
                  Object.assign(
                    {},
                    T,
                    S({
                      config: h,
                      src: v,
                      unoptimized: m,
                      layout: i,
                      width: n,
                      quality: r,
                      sizes: A,
                      loader: g,
                    }),
                    {
                      decoding: "async",
                      "data-nimg": i,
                      style: s,
                      className: o,
                      loading: p,
                    }
                  )
                )
              )
          )
        );
      };
      ("function" === typeof e.default ||
        ("object" === typeof e.default && null !== e.default)) &&
        "undefined" === typeof e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2831: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.AmpStateContext = void 0);
      var r = (0, n(2648).Z)(n(7294)).default.createContext({});
      e.AmpStateContext = r;
    },
    9470: function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isInAmpMode = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.ampFirst,
            n = void 0 !== e && e,
            r = t.hybrid,
            i = void 0 !== r && r,
            o = t.hasQuery,
            a = void 0 !== o && o;
          return n || (i && a);
        });
    },
    2717: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.defaultHead = c),
        (e.default = void 0);
      var r = n(6495).Z,
        i = n(2648).Z,
        o = (0, n(1598).Z)(n(7294)),
        a = i(n(1585)),
        s = n(2831),
        u = n(5850),
        l = n(9470);
      n(9475);
      function c() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function d(t, e) {
        return "string" === typeof e || "number" === typeof e
          ? t
          : e.type === o.default.Fragment
          ? t.concat(
              o.default.Children.toArray(e.props.children).reduce(function (
                t,
                e
              ) {
                return "string" === typeof e || "number" === typeof e
                  ? t
                  : t.concat(e);
              },
              [])
            )
          : t.concat(e);
      }
      var f = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(t, e) {
        var n = e.inAmpMode;
        return t
          .reduce(d, [])
          .reverse()
          .concat(c(n).reverse())
          .filter(
            (function () {
              var t = new Set(),
                e = new Set(),
                n = new Set(),
                r = {};
              return function (i) {
                var o = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" !== typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  var s = i.key.slice(i.key.indexOf("$") + 1);
                  t.has(s) ? (o = !1) : t.add(s);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    e.has(i.type) ? (o = !1) : e.add(i.type);
                    break;
                  case "meta":
                    for (var u = 0, l = f.length; u < l; u++) {
                      var c = f[u];
                      if (i.props.hasOwnProperty(c))
                        if ("charSet" === c) n.has(c) ? (o = !1) : n.add(c);
                        else {
                          var d = i.props[c],
                            p = r[c] || new Set();
                          ("name" === c && a) || !p.has(d)
                            ? (p.add(d), (r[c] = p))
                            : (o = !1);
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function (t, e) {
            var i = t.key || e;
            if (
              !n &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some(function (e) {
                return t.props.href.startsWith(e);
              })
            ) {
              var a = r({}, t.props || {});
              return (
                (a["data-href"] = a.href),
                (a.href = void 0),
                (a["data-optimized-fonts"] = !0),
                o.default.cloneElement(t, a)
              );
            }
            return o.default.cloneElement(t, { key: i });
          });
      }
      var v = function (t) {
        var e = t.children,
          n = o.useContext(s.AmpStateContext),
          r = o.useContext(u.HeadManagerContext);
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: p,
            headManager: r,
            inAmpMode: l.isInAmpMode(n),
          },
          e
        );
      };
      (e.default = v),
        ("function" === typeof e.default ||
          ("object" === typeof e.default && null !== e.default)) &&
          "undefined" === typeof e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    1585: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          var e = t.headManager,
            n = t.reduceComponentsToState;
          function s() {
            if (e && e.mountedInstances) {
              var i = r.Children.toArray(
                Array.from(e.mountedInstances).filter(Boolean)
              );
              e.updateHead(n(i, t));
            }
          }
          if (i) {
            var u;
            null == e || null == (u = e.mountedInstances) || u.add(t.children),
              s();
          }
          return (
            o(function () {
              var n;
              return (
                null == e ||
                  null == (n = e.mountedInstances) ||
                  n.add(t.children),
                function () {
                  var n;
                  null == e ||
                    null == (n = e.mountedInstances) ||
                    n.delete(t.children);
                }
              );
            }),
            o(function () {
              return (
                e && (e._pendingUpdate = s),
                function () {
                  e && (e._pendingUpdate = s);
                }
              );
            }),
            a(function () {
              return (
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null)),
                function () {
                  e &&
                    e._pendingUpdate &&
                    (e._pendingUpdate(), (e._pendingUpdate = null));
                }
              );
            }),
            null
          );
        });
      var r = (0, n(1598).Z)(n(7294));
      var i = !1,
        o = i ? function () {} : r.useLayoutEffect,
        a = i ? function () {} : r.useEffect;
    },
    930: function (t) {
      (t.exports = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    },
    9008: function (t, e, n) {
      t.exports = n(2717);
    },
    5675: function (t, e, n) {
      n(8566);
    },
    2660: function (t, e, n) {
      "use strict";
      n.d(e, {
        E: function () {
          return Aa;
        },
      });
      var r = function (t, e) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }),
          r(t, e)
        );
      };
      function i(t, e) {
        if ("function" !== typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
              return t;
            }),
          o.apply(this, arguments)
        );
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      Object.create;
      function s(t, e) {
        var n = "function" === typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function u(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create;
      var l = n(7294),
        c = function (t) {
          return {
            isEnabled: function (e) {
              return t.some(function (t) {
                return !!e[t];
              });
            },
          };
        },
        d = {
          measureLayout: c(["layout", "layoutId", "drag"]),
          animation: c([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: c(["exit"]),
          drag: c(["drag", "dragControls"]),
          focus: c(["whileFocus"]),
          hover: c(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: c(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: c(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: c(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var f = (0, l.createContext)({ strict: !1 }),
        p = Object.keys(d),
        v = p.length;
      var h = (0, l.createContext)({
          transformPagePoint: function (t) {
            return t;
          },
          isStatic: !1,
        }),
        m = (0, l.createContext)({});
      var g = (0, l.createContext)(null),
        y = "undefined" !== typeof window,
        x = y ? l.useLayoutEffect : l.useEffect;
      function b(t, e, n, r) {
        var i = (0, l.useContext)(f),
          o = (0, l.useContext)(m).visualElement,
          a = (0, l.useContext)(g),
          s = (0, l.useRef)(void 0);
        r || (r = i.renderer),
          !s.current &&
            r &&
            (s.current = r(t, {
              visualState: e,
              parent: o,
              props: n,
              presenceId: null === a || void 0 === a ? void 0 : a.id,
              blockInitialAnimation:
                !1 === (null === a || void 0 === a ? void 0 : a.initial),
            }));
        var u = s.current;
        return (
          x(function () {
            null === u || void 0 === u || u.syncRender();
          }),
          (0, l.useEffect)(function () {
            var t;
            null ===
              (t = null === u || void 0 === u ? void 0 : u.animationState) ||
              void 0 === t ||
              t.animateChanges();
          }),
          x(function () {
            return function () {
              return null === u || void 0 === u ? void 0 : u.notifyUnmount();
            };
          }, []),
          u
        );
      }
      function w(t) {
        return (
          "object" === typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function S(t) {
        return Array.isArray(t);
      }
      function E(t) {
        return "string" === typeof t || S(t);
      }
      function A(t, e, n, r, i) {
        var o;
        return (
          void 0 === r && (r = {}),
          void 0 === i && (i = {}),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          "string" === typeof e &&
            (e = null === (o = t.variants) || void 0 === o ? void 0 : o[e]),
          "function" === typeof e &&
            (e = e(null !== n && void 0 !== n ? n : t.custom, r, i)),
          e
        );
      }
      function P(t, e, n) {
        var r = t.getProps();
        return A(
          r,
          e,
          null !== n && void 0 !== n ? n : r.custom,
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.get());
              }),
              e
            );
          })(t),
          (function (t) {
            var e = {};
            return (
              t.forEachValue(function (t, n) {
                return (e[n] = t.getVelocity());
              }),
              e
            );
          })(t)
        );
      }
      function T(t) {
        var e;
        return (
          "function" ===
            typeof (null === (e = t.animate) || void 0 === e
              ? void 0
              : e.start) ||
          E(t.initial) ||
          E(t.animate) ||
          E(t.whileHover) ||
          E(t.whileDrag) ||
          E(t.whileTap) ||
          E(t.whileFocus) ||
          E(t.exit)
        );
      }
      function V(t) {
        return Boolean(T(t) || t.variants);
      }
      function C(t) {
        var e = (function (t, e) {
            if (T(t)) {
              var n = t.initial,
                r = t.animate;
              return {
                initial: !1 === n || E(n) ? n : void 0,
                animate: E(r) ? r : void 0,
              };
            }
            return !1 !== t.inherit ? e : {};
          })(t, (0, l.useContext)(m)),
          n = e.initial,
          r = e.animate;
        return (0, l.useMemo)(
          function () {
            return { initial: n, animate: r };
          },
          [M(n), M(r)]
        );
      }
      function M(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      function R(t) {
        var e = (0, l.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      const k = (1 / 60) * 1e3,
        j =
          "undefined" !== typeof performance
            ? () => performance.now()
            : () => Date.now(),
        O =
          "undefined" !== typeof window
            ? (t) => window.requestAnimationFrame(t)
            : (t) => setTimeout(() => t(j()), k);
      let L = !0,
        D = !1,
        I = !1;
      const F = { delta: 0, timestamp: 0 },
        U = ["read", "update", "preRender", "render", "postRender"],
        B = U.reduce(
          (t, e) => (
            (t[e] = (function (t) {
              let e = [],
                n = [],
                r = 0,
                i = !1,
                o = !1;
              const a = new WeakSet(),
                s = {
                  schedule: (t, o = !1, s = !1) => {
                    const u = s && i,
                      l = u ? e : n;
                    return (
                      o && a.add(t),
                      -1 === l.indexOf(t) &&
                        (l.push(t), u && i && (r = e.length)),
                      t
                    );
                  },
                  cancel: (t) => {
                    const e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1), a.delete(t);
                  },
                  process: (u) => {
                    if (i) o = !0;
                    else {
                      if (
                        ((i = !0),
                        ([e, n] = [n, e]),
                        (n.length = 0),
                        (r = e.length),
                        r)
                      )
                        for (let n = 0; n < r; n++) {
                          const r = e[n];
                          r(u), a.has(r) && (s.schedule(r), t());
                        }
                      (i = !1), o && ((o = !1), s.process(u));
                    }
                  },
                };
              return s;
            })(() => (D = !0))),
            t
          ),
          {}
        ),
        z = U.reduce((t, e) => {
          const n = B[e];
          return (
            (t[e] = (t, e = !1, r = !1) => (D || q(), n.schedule(t, e, r))), t
          );
        }, {}),
        N = U.reduce((t, e) => ((t[e] = B[e].cancel), t), {}),
        _ = U.reduce((t, e) => ((t[e] = () => B[e].process(F)), t), {}),
        H = (t) => B[t].process(F),
        W = (t) => {
          (D = !1),
            (F.delta = L ? k : Math.max(Math.min(t - F.timestamp, 40), 1)),
            (F.timestamp = t),
            (I = !0),
            U.forEach(H),
            (I = !1),
            D && ((L = !1), O(W));
        },
        q = () => {
          (D = !0), (L = !0), I || O(W);
        },
        Y = () => F;
      var X = z;
      const G = (t, e, n) => -n * t + n * e + t;
      function Z(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      function $(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function K(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var J = (function () {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function (t) {
              var e = this;
              return (
                $(this.subscriptions, t),
                function () {
                  return K(e.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function (t, e, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, e, n);
                else
                  for (var i = 0; i < r; i++) {
                    var o = this.subscriptions[i];
                    o && o(t, e, n);
                  }
            }),
            (t.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            t
          );
        })(),
        Q = (function () {
          function t(t) {
            var e,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new J()),
              (this.velocityUpdateSubscribers = new J()),
              (this.renderSubscribers = new J()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (t, e) {
                void 0 === e && (e = !0), (n.prev = n.current), (n.current = t);
                var r = Y(),
                  i = r.delta,
                  o = r.timestamp;
                n.lastUpdated !== o &&
                  ((n.timeDelta = i),
                  (n.lastUpdated = o),
                  X.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  e && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return X.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (t) {
                t.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity =
                ((e = this.current), !isNaN(parseFloat(e))));
          }
          return (
            (t.prototype.onChange = function (t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function (t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function (t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function (t, e) {
              void 0 === e && (e = !0),
                e && this.passiveEffect
                  ? this.passiveEffect(t, this.updateAndNotify)
                  : this.updateAndNotify(t, e);
            }),
            (t.prototype.get = function () {
              return this.current;
            }),
            (t.prototype.getPrevious = function () {
              return this.prev;
            }),
            (t.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? Z(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (t.prototype.start = function (t) {
              var e = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (e.hasAnimated = !0), (e.stopAnimation = t(n));
                }).then(function () {
                  return e.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            t
          );
        })();
      function tt(t) {
        return new Q(t);
      }
      var et = function (t) {
        return Boolean(null !== t && "object" === typeof t && t.getVelocity);
      };
      const nt = (t, e, n) => Math.min(Math.max(n, t), e),
        rt = 0.001;
      function it({
        duration: t = 800,
        bounce: e = 0.25,
        velocity: n = 0,
        mass: r = 1,
      }) {
        let i,
          o,
          a = 1 - e;
        (a = nt(0.05, 1, a)),
          (t = nt(0.01, 10, t / 1e3)),
          a < 1
            ? ((i = (e) => {
                const r = e * a,
                  i = r * t,
                  o = r - n,
                  s = ot(e, a),
                  u = Math.exp(-i);
                return rt - (o / s) * u;
              }),
              (o = (e) => {
                const r = e * a * t,
                  o = r * n + n,
                  s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                  u = Math.exp(-r),
                  l = ot(Math.pow(e, 2), a);
                return ((-i(e) + rt > 0 ? -1 : 1) * ((o - s) * u)) / l;
              }))
            : ((i = (e) => Math.exp(-e * t) * ((e - n) * t + 1) - 0.001),
              (o = (e) => Math.exp(-e * t) * (t * t * (n - e))));
        const s = (function (t, e, n) {
          let r = n;
          for (let i = 1; i < 12; i++) r -= t(r) / e(r);
          return r;
        })(i, o, 5 / t);
        if (((t *= 1e3), isNaN(s)))
          return { stiffness: 100, damping: 10, duration: t };
        {
          const e = Math.pow(s, 2) * r;
          return {
            stiffness: e,
            damping: 2 * a * Math.sqrt(r * e),
            duration: t,
          };
        }
      }
      function ot(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      const at = ["duration", "bounce"],
        st = ["stiffness", "damping", "mass"];
      function ut(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function lt(t) {
        var { from: e = 0, to: n = 1, restSpeed: r = 2, restDelta: i } = t,
          o = a(t, ["from", "to", "restSpeed", "restDelta"]);
        const s = { done: !1, value: e };
        let {
            stiffness: u,
            damping: l,
            mass: c,
            velocity: d,
            duration: f,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = Object.assign(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              t
            );
            if (!ut(t, st) && ut(t, at)) {
              const n = it(t);
              (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                velocity: 0,
                mass: 1,
              })),
                (e.isResolvedFromDuration = !0);
            }
            return e;
          })(o),
          v = ct,
          h = ct;
        function m() {
          const t = d ? -d / 1e3 : 0,
            r = n - e,
            o = l / (2 * Math.sqrt(u * c)),
            a = Math.sqrt(u / c) / 1e3;
          if (
            (void 0 === i && (i = Math.min(Math.abs(n - e) / 100, 0.4)), o < 1)
          ) {
            const e = ot(a, o);
            (v = (i) => {
              const s = Math.exp(-o * a * i);
              return (
                n -
                s *
                  (((t + o * a * r) / e) * Math.sin(e * i) +
                    r * Math.cos(e * i))
              );
            }),
              (h = (n) => {
                const i = Math.exp(-o * a * n);
                return (
                  o *
                    a *
                    i *
                    ((Math.sin(e * n) * (t + o * a * r)) / e +
                      r * Math.cos(e * n)) -
                  i *
                    (Math.cos(e * n) * (t + o * a * r) -
                      e * r * Math.sin(e * n))
                );
              });
          } else if (1 === o)
            v = (e) => n - Math.exp(-a * e) * (r + (t + a * r) * e);
          else {
            const e = a * Math.sqrt(o * o - 1);
            v = (i) => {
              const s = Math.exp(-o * a * i),
                u = Math.min(e * i, 300);
              return (
                n -
                (s * ((t + o * a * r) * Math.sinh(u) + e * r * Math.cosh(u))) /
                  e
              );
            };
          }
        }
        return (
          m(),
          {
            next: (t) => {
              const e = v(t);
              if (p) s.done = t >= f;
              else {
                const o = 1e3 * h(t),
                  a = Math.abs(o) <= r,
                  u = Math.abs(n - e) <= i;
                s.done = a && u;
              }
              return (s.value = s.done ? n : e), s;
            },
            flipTarget: () => {
              (d = -d), ([e, n] = [n, e]), m();
            },
          }
        );
      }
      lt.needsInterpolation = (t, e) =>
        "string" === typeof t || "string" === typeof e;
      const ct = (t) => 0,
        dt = (t, e, n) => {
          const r = e - t;
          return 0 === r ? 1 : (n - t) / r;
        },
        ft = (t, e) => (n) => Math.max(Math.min(n, e), t),
        pt = (t) => (t % 1 ? Number(t.toFixed(5)) : t),
        vt = /(-)?([\d]*\.?[\d])+/g,
        ht =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        mt =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function gt(t) {
        return "string" === typeof t;
      }
      const yt = {
          test: (t) => "number" === typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        xt = Object.assign(Object.assign({}, yt), { transform: ft(0, 1) }),
        bt = Object.assign(Object.assign({}, yt), { default: 1 }),
        wt = (t, e) => (n) =>
          Boolean(
            (gt(n) && mt.test(n) && n.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(n, e))
          ),
        St = (t, e, n) => (r) => {
          if (!gt(r)) return r;
          const [i, o, a, s] = r.match(vt);
          return {
            [t]: parseFloat(i),
            [e]: parseFloat(o),
            [n]: parseFloat(a),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        Et = ft(0, 255),
        At = Object.assign(Object.assign({}, yt), {
          transform: (t) => Math.round(Et(t)),
        }),
        Pt = {
          test: wt("rgb", "red"),
          parse: St("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            At.transform(t) +
            ", " +
            At.transform(e) +
            ", " +
            At.transform(n) +
            ", " +
            pt(xt.transform(r)) +
            ")",
        };
      const Tt = {
          test: wt("#"),
          parse: function (t) {
            let e = "",
              n = "",
              r = "",
              i = "";
            return (
              t.length > 5
                ? ((e = t.substr(1, 2)),
                  (n = t.substr(3, 2)),
                  (r = t.substr(5, 2)),
                  (i = t.substr(7, 2)))
                : ((e = t.substr(1, 1)),
                  (n = t.substr(2, 1)),
                  (r = t.substr(3, 1)),
                  (i = t.substr(4, 1)),
                  (e += e),
                  (n += n),
                  (r += r),
                  (i += i)),
              {
                red: parseInt(e, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: Pt.transform,
        },
        Vt = (t) => ({
          test: (e) => gt(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        Ct = Vt("deg"),
        Mt = Vt("%"),
        Rt = Vt("px"),
        kt = Vt("vh"),
        jt = Vt("vw"),
        Ot = Object.assign(Object.assign({}, Mt), {
          parse: (t) => Mt.parse(t) / 100,
          transform: (t) => Mt.transform(100 * t),
        }),
        Lt = {
          test: wt("hsl", "hue"),
          parse: St("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            Mt.transform(pt(e)) +
            ", " +
            Mt.transform(pt(n)) +
            ", " +
            pt(xt.transform(r)) +
            ")",
        };
      function Dt(t, e, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? t + 6 * (e - t) * n
            : n < 0.5
            ? e
            : n < 2 / 3
            ? t + (e - t) * (2 / 3 - n) * 6
            : t
        );
      }
      function It({ hue: t, saturation: e, lightness: n, alpha: r }) {
        (t /= 360), (n /= 100);
        let i = 0,
          o = 0,
          a = 0;
        if ((e /= 100)) {
          const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
            s = 2 * n - r;
          (i = Dt(s, r, t + 1 / 3)),
            (o = Dt(s, r, t)),
            (a = Dt(s, r, t - 1 / 3));
        } else i = o = a = n;
        return {
          red: Math.round(255 * i),
          green: Math.round(255 * o),
          blue: Math.round(255 * a),
          alpha: r,
        };
      }
      const Ft = (t, e, n) => {
          const r = t * t,
            i = e * e;
          return Math.sqrt(Math.max(0, n * (i - r) + r));
        },
        Ut = [Tt, Pt, Lt],
        Bt = (t) => Ut.find((e) => e.test(t)),
        zt = (t) =>
          `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        Nt = (t, e) => {
          let n = Bt(t),
            r = Bt(e);
          zt(t), zt(e);
          let i = n.parse(t),
            o = r.parse(e);
          n === Lt && ((i = It(i)), (n = Pt)),
            r === Lt && ((o = It(o)), (r = Pt));
          const a = Object.assign({}, i);
          return (t) => {
            for (const e in a) "alpha" !== e && (a[e] = Ft(i[e], o[e], t));
            return (a.alpha = G(i.alpha, o.alpha, t)), n.transform(a);
          };
        },
        _t = {
          test: (t) => Pt.test(t) || Tt.test(t) || Lt.test(t),
          parse: (t) =>
            Pt.test(t) ? Pt.parse(t) : Lt.test(t) ? Lt.parse(t) : Tt.parse(t),
          transform: (t) =>
            gt(t)
              ? t
              : t.hasOwnProperty("red")
              ? Pt.transform(t)
              : Lt.transform(t),
        },
        Ht = "${c}",
        Wt = "${n}";
      function qt(t) {
        "number" === typeof t && (t = `${t}`);
        const e = [];
        let n = 0;
        const r = t.match(ht);
        r &&
          ((n = r.length), (t = t.replace(ht, Ht)), e.push(...r.map(_t.parse)));
        const i = t.match(vt);
        return (
          i && ((t = t.replace(vt, Wt)), e.push(...i.map(yt.parse))),
          { values: e, numColors: n, tokenised: t }
        );
      }
      function Yt(t) {
        return qt(t).values;
      }
      function Xt(t) {
        const { values: e, numColors: n, tokenised: r } = qt(t),
          i = e.length;
        return (t) => {
          let e = r;
          for (let r = 0; r < i; r++)
            e = e.replace(
              r < n ? Ht : Wt,
              r < n ? _t.transform(t[r]) : pt(t[r])
            );
          return e;
        };
      }
      const Gt = (t) => ("number" === typeof t ? 0 : t);
      const Zt = {
          test: function (t) {
            var e, n, r, i;
            return (
              isNaN(t) &&
              gt(t) &&
              (null !==
                (n =
                  null === (e = t.match(vt)) || void 0 === e
                    ? void 0
                    : e.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (i =
                    null === (r = t.match(ht)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== i
                  ? i
                  : 0) >
                0
            );
          },
          parse: Yt,
          createTransformer: Xt,
          getAnimatableNone: function (t) {
            const e = Yt(t);
            return Xt(t)(e.map(Gt));
          },
        },
        $t = (t) => "number" === typeof t,
        Kt = (t, e) => (n) => e(t(n)),
        Jt = (...t) => t.reduce(Kt);
      function Qt(t, e) {
        return $t(t) ? (n) => G(t, e, n) : _t.test(t) ? Nt(t, e) : re(t, e);
      }
      const te = (t, e) => {
          const n = [...t],
            r = n.length,
            i = t.map((t, n) => Qt(t, e[n]));
          return (t) => {
            for (let e = 0; e < r; e++) n[e] = i[e](t);
            return n;
          };
        },
        ee = (t, e) => {
          const n = Object.assign(Object.assign({}, t), e),
            r = {};
          for (const i in n)
            void 0 !== t[i] && void 0 !== e[i] && (r[i] = Qt(t[i], e[i]));
          return (t) => {
            for (const e in r) n[e] = r[e](t);
            return n;
          };
        };
      function ne(t) {
        const e = Zt.parse(t),
          n = e.length;
        let r = 0,
          i = 0,
          o = 0;
        for (let a = 0; a < n; a++)
          r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? o++ : i++;
        return { parsed: e, numNumbers: r, numRGB: i, numHSL: o };
      }
      const re = (t, e) => {
          const n = Zt.createTransformer(e),
            r = ne(t),
            i = ne(e);
          return r.numHSL === i.numHSL &&
            r.numRGB === i.numRGB &&
            r.numNumbers >= i.numNumbers
            ? Jt(te(r.parsed, i.parsed), n)
            : (n) => `${n > 0 ? e : t}`;
        },
        ie = (t, e) => (n) => G(t, e, n);
      function oe(t, e, n) {
        const r = [],
          i =
            n ||
            ("number" === typeof (o = t[0])
              ? ie
              : "string" === typeof o
              ? _t.test(o)
                ? Nt
                : re
              : Array.isArray(o)
              ? te
              : "object" === typeof o
              ? ee
              : void 0);
        var o;
        const a = t.length - 1;
        for (let s = 0; s < a; s++) {
          let n = i(t[s], t[s + 1]);
          if (e) {
            const t = Array.isArray(e) ? e[s] : e;
            n = Jt(t, n);
          }
          r.push(n);
        }
        return r;
      }
      function ae(t, e, { clamp: n = !0, ease: r, mixer: i } = {}) {
        const o = t.length;
        e.length,
          !r || !Array.isArray(r) || r.length,
          t[0] > t[o - 1] &&
            ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
        const a = oe(e, r, i),
          s =
            2 === o
              ? (function ([t, e], [n]) {
                  return (r) => n(dt(t, e, r));
                })(t, a)
              : (function (t, e) {
                  const n = t.length,
                    r = n - 1;
                  return (i) => {
                    let o = 0,
                      a = !1;
                    if (
                      (i <= t[0]
                        ? (a = !0)
                        : i >= t[r] && ((o = r - 1), (a = !0)),
                      !a)
                    ) {
                      let e = 1;
                      for (; e < n && !(t[e] > i || e === r); e++);
                      o = e - 1;
                    }
                    const s = dt(t[o], t[o + 1], i);
                    return e[o](s);
                  };
                })(t, a);
        return n ? (e) => s(nt(t[0], t[o - 1], e)) : s;
      }
      const se = (t) => (e) => 1 - t(1 - e),
        ue = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        le = (t) => (e) => e * e * ((t + 1) * e - t),
        ce = (t) => t,
        de = ((fe = 2), (t) => Math.pow(t, fe));
      var fe;
      const pe = se(de),
        ve = ue(de),
        he = (t) => 1 - Math.sin(Math.acos(t)),
        me = se(he),
        ge = ue(me),
        ye = le(1.525),
        xe = se(ye),
        be = ue(ye),
        we = ((t) => {
          const e = le(t);
          return (t) =>
            (t *= 2) < 1 ? 0.5 * e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
        })(1.525),
        Se = (t) => {
          if (1 === t || 0 === t) return t;
          const e = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * e
            : t < 0.7272727272727273
            ? 9.075 * e - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        Ee = se(Se);
      function Ae(t, e) {
        return t.map(() => e || ve).splice(0, t.length - 1);
      }
      function Pe({
        from: t = 0,
        to: e = 1,
        ease: n,
        offset: r,
        duration: i = 300,
      }) {
        const o = { done: !1, value: t },
          a = Array.isArray(e) ? e : [t, e],
          s = (function (t, e) {
            return t.map((t) => t * e);
          })(
            r && r.length === a.length
              ? r
              : (function (t) {
                  const e = t.length;
                  return t.map((t, n) => (0 !== n ? n / (e - 1) : 0));
                })(a),
            i
          );
        function u() {
          return ae(s, a, { ease: Array.isArray(n) ? n : Ae(a, n) });
        }
        let l = u();
        return {
          next: (t) => ((o.value = l(t)), (o.done = t >= i), o),
          flipTarget: () => {
            a.reverse(), (l = u());
          },
        };
      }
      const Te = {
        keyframes: Pe,
        spring: lt,
        decay: function ({
          velocity: t = 0,
          from: e = 0,
          power: n = 0.8,
          timeConstant: r = 350,
          restDelta: i = 0.5,
          modifyTarget: o,
        }) {
          const a = { done: !1, value: e };
          let s = n * t;
          const u = e + s,
            l = void 0 === o ? u : o(u);
          return (
            l !== u && (s = l - e),
            {
              next: (t) => {
                const e = -s * Math.exp(-t / r);
                return (
                  (a.done = !(e > i || e < -i)),
                  (a.value = a.done ? l : l + e),
                  a
                );
              },
              flipTarget: () => {},
            }
          );
        },
      };
      function Ve(t, e, n = 0) {
        return t - e - n;
      }
      const Ce = (t) => {
        const e = ({ delta: e }) => t(e);
        return { start: () => X.update(e, !0), stop: () => N.update(e) };
      };
      function Me(t) {
        var e,
          n,
          {
            from: r,
            autoplay: i = !0,
            driver: o = Ce,
            elapsed: s = 0,
            repeat: u = 0,
            repeatType: l = "loop",
            repeatDelay: c = 0,
            onPlay: d,
            onStop: f,
            onComplete: p,
            onRepeat: v,
            onUpdate: h,
          } = t,
          m = a(t, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]);
        let g,
          y,
          x,
          { to: b } = m,
          w = 0,
          S = m.duration,
          E = !1,
          A = !0;
        const P = (function (t) {
          if (Array.isArray(t.to)) return Pe;
          if (Te[t.type]) return Te[t.type];
          const e = new Set(Object.keys(t));
          return e.has("ease") || (e.has("duration") && !e.has("dampingRatio"))
            ? Pe
            : e.has("dampingRatio") ||
              e.has("stiffness") ||
              e.has("mass") ||
              e.has("damping") ||
              e.has("restSpeed") ||
              e.has("restDelta")
            ? lt
            : Pe;
        })(m);
        (null === (n = (e = P).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(e, r, b)) &&
          ((x = ae([0, 100], [r, b], { clamp: !1 })), (r = 0), (b = 100));
        const T = P(Object.assign(Object.assign({}, m), { from: r, to: b }));
        function V() {
          w++,
            "reverse" === l
              ? ((A = w % 2 === 0),
                (s = (function (t, e, n = 0, r = !0) {
                  return r ? Ve(e + -t, e, n) : e - (t - e) + n;
                })(s, S, c, A)))
              : ((s = Ve(s, S, c)), "mirror" === l && T.flipTarget()),
            (E = !1),
            v && v();
        }
        function C(t) {
          if ((A || (t = -t), (s += t), !E)) {
            const t = T.next(Math.max(0, s));
            (y = t.value), x && (y = x(y)), (E = A ? t.done : s <= 0);
          }
          null === h || void 0 === h || h(y),
            E &&
              (0 === w && ((null !== S && void 0 !== S) || (S = s)),
              w < u
                ? (function (t, e, n, r) {
                    return r ? t >= e + n : t <= -n;
                  })(s, S, c, A) && V()
                : (g.stop(), p && p()));
        }
        return (
          i && (null === d || void 0 === d || d(), (g = o(C)), g.start()),
          {
            stop: () => {
              null === f || void 0 === f || f(), g.stop();
            },
          }
        );
      }
      var Re = function (t) {
        return 1e3 * t;
      };
      const ke = (t, e) => 1 - 3 * e + 3 * t,
        je = (t, e) => 3 * e - 6 * t,
        Oe = (t) => 3 * t,
        Le = (t, e, n) => ((ke(e, n) * t + je(e, n)) * t + Oe(e)) * t,
        De = (t, e, n) => 3 * ke(e, n) * t * t + 2 * je(e, n) * t + Oe(e);
      const Ie = 0.1;
      function Fe(t, e, n, r) {
        if (t === e && n === r) return ce;
        const i = new Float32Array(11);
        for (let a = 0; a < 11; ++a) i[a] = Le(a * Ie, t, n);
        function o(e) {
          let r = 0,
            o = 1;
          for (; 10 !== o && i[o] <= e; ++o) r += Ie;
          --o;
          const a = r + ((e - i[o]) / (i[o + 1] - i[o])) * Ie,
            s = De(a, t, n);
          return s >= 0.001
            ? (function (t, e, n, r) {
                for (let i = 0; i < 8; ++i) {
                  const i = De(e, n, r);
                  if (0 === i) return e;
                  e -= (Le(e, n, r) - t) / i;
                }
                return e;
              })(e, a, t, n)
            : 0 === s
            ? a
            : (function (t, e, n, r, i) {
                let o,
                  a,
                  s = 0;
                do {
                  (a = e + (n - e) / 2),
                    (o = Le(a, r, i) - t),
                    o > 0 ? (n = a) : (e = a);
                } while (Math.abs(o) > 1e-7 && ++s < 10);
                return a;
              })(e, r, r + Ie, t, n);
        }
        return (t) => (0 === t || 1 === t ? t : Le(o(t), e, r));
      }
      var Ue = {
          linear: ce,
          easeIn: de,
          easeInOut: ve,
          easeOut: pe,
          circIn: he,
          circInOut: ge,
          circOut: me,
          backIn: ye,
          backInOut: be,
          backOut: xe,
          anticipate: we,
          bounceIn: Ee,
          bounceInOut: (t) =>
            t < 0.5 ? 0.5 * (1 - Se(1 - 2 * t)) : 0.5 * Se(2 * t - 1) + 0.5,
          bounceOut: Se,
        },
        Be = function (t) {
          if (Array.isArray(t)) {
            t.length;
            var e = s(t, 4);
            return Fe(e[0], e[1], e[2], e[3]);
          }
          return "string" === typeof t
            ? ("Invalid easing type '".concat(t, "'"), Ue[t])
            : t;
        },
        ze = function (t, e) {
          return (
            "zIndex" !== t &&
            (!("number" !== typeof e && !Array.isArray(e)) ||
              !("string" !== typeof e || !Zt.test(e) || e.startsWith("url(")))
          );
        },
        Ne = function (t) {
          return Array.isArray(t);
        },
        _e = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        He = function (t) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        We = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        qe = function (t) {
          return { type: "keyframes", duration: 0.8, values: t };
        },
        Ye = {
          x: _e,
          y: _e,
          z: _e,
          rotate: _e,
          rotateX: _e,
          rotateY: _e,
          rotateZ: _e,
          scaleX: He,
          scaleY: He,
          scale: He,
          opacity: We,
          backgroundColor: We,
          color: We,
          default: He,
        };
      const Xe = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Ge(t) {
        let [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(vt) || [];
        if (!r) return t;
        const i = n.replace(r, "");
        let o = Xe.has(e) ? 1 : 0;
        return r !== n && (o *= 100), e + "(" + o + i + ")";
      }
      const Ze = /([a-z-]*)\(.*?\)/g,
        $e = Object.assign(Object.assign({}, Zt), {
          getAnimatableNone: (t) => {
            const e = t.match(Ze);
            return e ? e.map(Ge).join(" ") : t;
          },
        });
      var Ke = o(o({}, yt), { transform: Math.round }),
        Je = {
          borderWidth: Rt,
          borderTopWidth: Rt,
          borderRightWidth: Rt,
          borderBottomWidth: Rt,
          borderLeftWidth: Rt,
          borderRadius: Rt,
          radius: Rt,
          borderTopLeftRadius: Rt,
          borderTopRightRadius: Rt,
          borderBottomRightRadius: Rt,
          borderBottomLeftRadius: Rt,
          width: Rt,
          maxWidth: Rt,
          height: Rt,
          maxHeight: Rt,
          size: Rt,
          top: Rt,
          right: Rt,
          bottom: Rt,
          left: Rt,
          padding: Rt,
          paddingTop: Rt,
          paddingRight: Rt,
          paddingBottom: Rt,
          paddingLeft: Rt,
          margin: Rt,
          marginTop: Rt,
          marginRight: Rt,
          marginBottom: Rt,
          marginLeft: Rt,
          rotate: Ct,
          rotateX: Ct,
          rotateY: Ct,
          rotateZ: Ct,
          scale: bt,
          scaleX: bt,
          scaleY: bt,
          scaleZ: bt,
          skew: Ct,
          skewX: Ct,
          skewY: Ct,
          distance: Rt,
          translateX: Rt,
          translateY: Rt,
          translateZ: Rt,
          x: Rt,
          y: Rt,
          z: Rt,
          perspective: Rt,
          transformPerspective: Rt,
          opacity: xt,
          originX: Ot,
          originY: Ot,
          originZ: Rt,
          zIndex: Ke,
          fillOpacity: xt,
          strokeOpacity: xt,
          numOctaves: Ke,
        },
        Qe = o(o({}, Je), {
          color: _t,
          backgroundColor: _t,
          outlineColor: _t,
          fill: _t,
          stroke: _t,
          borderColor: _t,
          borderTopColor: _t,
          borderRightColor: _t,
          borderBottomColor: _t,
          borderLeftColor: _t,
          filter: $e,
          WebkitFilter: $e,
        }),
        tn = function (t) {
          return Qe[t];
        };
      function en(t, e) {
        var n,
          r = tn(t);
        return (
          r !== $e && (r = Zt),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, e)
        );
      }
      var nn = !1,
        rn = function (t) {
          return Ne(t) ? t[t.length - 1] || 0 : t;
        };
      function on(t) {
        var e = t.ease,
          n = t.times,
          r = t.yoyo,
          i = t.flip,
          s = t.loop,
          u = a(t, ["ease", "times", "yoyo", "flip", "loop"]),
          l = o({}, u);
        return (
          n && (l.offset = n),
          u.duration && (l.duration = Re(u.duration)),
          u.repeatDelay && (l.repeatDelay = Re(u.repeatDelay)),
          e &&
            (l.ease = (function (t) {
              return Array.isArray(t) && "number" !== typeof t[0];
            })(e)
              ? e.map(Be)
              : Be(e)),
          "tween" === u.type && (l.type = "keyframes"),
          (r || s || i) &&
            (!0,
            r
              ? (l.repeatType = "reverse")
              : s
              ? (l.repeatType = "loop")
              : i && (l.repeatType = "mirror"),
            (l.repeat = s || r || i || u.repeat)),
          "spring" !== u.type && (l.type = "keyframes"),
          l
        );
      }
      function an(t, e, n) {
        var r;
        return (
          Array.isArray(e.to) &&
            ((null !== (r = t.duration) && void 0 !== r) || (t.duration = 0.8)),
          (function (t) {
            Array.isArray(t.to) &&
              null === t.to[0] &&
              ((t.to = u([], s(t.to), !1)), (t.to[0] = t.from));
          })(e),
          (function (t) {
            t.when,
              t.delay,
              t.delayChildren,
              t.staggerChildren,
              t.staggerDirection,
              t.repeat,
              t.repeatType,
              t.repeatDelay,
              t.from;
            var e = a(t, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(e).length;
          })(t) ||
            (t = o(
              o({}, t),
              (function (t, e) {
                var n;
                return (
                  (n = Ne(e) ? qe : Ye[t] || Ye.default), o({ to: e }, n(e))
                );
              })(n, e.to)
            )),
          o(o({}, e), on(t))
        );
      }
      function sn(t, e, n, r, i) {
        var a,
          s = cn(r, t),
          u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
          l = ze(t, n);
        "none" === u && l && "string" === typeof n
          ? (u = en(t, n))
          : un(u) && "string" === typeof n
          ? (u = ln(n))
          : !Array.isArray(n) && un(n) && "string" === typeof u && (n = ln(u));
        var c = ze(t, u);
        return (
          "You are trying to animate "
            .concat(t, ' from "')
            .concat(u, '" to "')
            .concat(n, '". ')
            .concat(
              u,
              " is not an animatable value - to enable this animation set "
            )
            .concat(u, " to a value animatable to ")
            .concat(n, " via the `style` property."),
          c && l && !1 !== s.type
            ? function () {
                var r = {
                  from: u,
                  to: n,
                  velocity: e.getVelocity(),
                  onComplete: i,
                  onUpdate: function (t) {
                    return e.set(t);
                  },
                };
                return "inertia" === s.type || "decay" === s.type
                  ? (function ({
                      from: t = 0,
                      velocity: e = 0,
                      min: n,
                      max: r,
                      power: i = 0.8,
                      timeConstant: o = 750,
                      bounceStiffness: a = 500,
                      bounceDamping: s = 10,
                      restDelta: u = 1,
                      modifyTarget: l,
                      driver: c,
                      onUpdate: d,
                      onComplete: f,
                      onStop: p,
                    }) {
                      let v;
                      function h(t) {
                        return (
                          (void 0 !== n && t < n) || (void 0 !== r && t > r)
                        );
                      }
                      function m(t) {
                        return void 0 === n
                          ? r
                          : void 0 === r || Math.abs(n - t) < Math.abs(r - t)
                          ? n
                          : r;
                      }
                      function g(t) {
                        null === v || void 0 === v || v.stop(),
                          (v = Me(
                            Object.assign(Object.assign({}, t), {
                              driver: c,
                              onUpdate: (e) => {
                                var n;
                                null === d || void 0 === d || d(e),
                                  null === (n = t.onUpdate) ||
                                    void 0 === n ||
                                    n.call(t, e);
                              },
                              onComplete: f,
                              onStop: p,
                            })
                          ));
                      }
                      function y(t) {
                        g(
                          Object.assign(
                            {
                              type: "spring",
                              stiffness: a,
                              damping: s,
                              restDelta: u,
                            },
                            t
                          )
                        );
                      }
                      if (h(t)) y({ from: t, velocity: e, to: m(t) });
                      else {
                        let r = i * e + t;
                        "undefined" !== typeof l && (r = l(r));
                        const a = m(r),
                          s = a === n ? -1 : 1;
                        let c, d;
                        const f = (t) => {
                          (c = d),
                            (d = t),
                            (e = Z(t - c, Y().delta)),
                            ((1 === s && t > a) || (-1 === s && t < a)) &&
                              y({ from: t, to: a, velocity: e });
                        };
                        g({
                          type: "decay",
                          from: t,
                          velocity: e,
                          timeConstant: o,
                          power: i,
                          restDelta: u,
                          modifyTarget: l,
                          onUpdate: h(r) ? f : void 0,
                        });
                      }
                      return {
                        stop: () =>
                          null === v || void 0 === v ? void 0 : v.stop(),
                      };
                    })(o(o({}, r), s))
                  : Me(
                      o(o({}, an(s, r, t)), {
                        onUpdate: function (t) {
                          var e;
                          r.onUpdate(t),
                            null === (e = s.onUpdate) ||
                              void 0 === e ||
                              e.call(s, t);
                        },
                        onComplete: function () {
                          var t;
                          r.onComplete(),
                            null === (t = s.onComplete) ||
                              void 0 === t ||
                              t.call(s);
                        },
                      })
                    );
              }
            : function () {
                var t,
                  r,
                  o = rn(n);
                return (
                  e.set(o),
                  i(),
                  null ===
                    (t = null === s || void 0 === s ? void 0 : s.onUpdate) ||
                    void 0 === t ||
                    t.call(s, o),
                  null ===
                    (r = null === s || void 0 === s ? void 0 : s.onComplete) ||
                    void 0 === r ||
                    r.call(s),
                  { stop: function () {} }
                );
              }
        );
      }
      function un(t) {
        return (
          0 === t ||
          ("string" === typeof t &&
            0 === parseFloat(t) &&
            -1 === t.indexOf(" "))
        );
      }
      function ln(t) {
        return "number" === typeof t ? 0 : en("", t);
      }
      function cn(t, e) {
        return t[e] || t.default || t;
      }
      function dn(t, e, n, r) {
        return (
          void 0 === r && (r = {}),
          nn && (r = { type: !1 }),
          e.start(function (i) {
            var o,
              a,
              s = sn(t, e, n, r, i),
              u = (function (t, e) {
                var n, r;
                return null !==
                  (r =
                    null !== (n = (cn(t, e) || {}).delay) && void 0 !== n
                      ? n
                      : t.delay) && void 0 !== r
                  ? r
                  : 0;
              })(r, t),
              l = function () {
                return (a = s());
              };
            return (
              u ? (o = window.setTimeout(l, Re(u))) : l(),
              function () {
                clearTimeout(o), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
      var fn = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        pn = fn.length,
        vn = function (t) {
          return "string" === typeof t ? parseFloat(t) : t;
        },
        hn = function (t) {
          return "number" === typeof t || Rt.test(t);
        };
      function mn(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var gn = xn(0, 0.5, me),
        yn = xn(0.5, 0.95, ce);
      function xn(t, e, n) {
        return function (r) {
          return r < t ? 0 : r > e ? 1 : n(dt(t, e, r));
        };
      }
      function bn(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function wn(t, e) {
        bn(t.x, e.x), bn(t.y, e.y);
      }
      function Sn(t) {
        return void 0 === t || 1 === t;
      }
      function En(t) {
        var e = t.scale,
          n = t.scaleX,
          r = t.scaleY;
        return !Sn(e) || !Sn(n) || !Sn(r);
      }
      function An(t) {
        return (
          En(t) ||
          Pn(t.x) ||
          Pn(t.y) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY
        );
      }
      function Pn(t) {
        return t && "0%" !== t;
      }
      function Tn(t, e, n) {
        return n + e * (t - n);
      }
      function Vn(t, e, n, r, i) {
        return void 0 !== i && (t = Tn(t, i, r)), Tn(t, n, r) + e;
      }
      function Cn(t, e, n, r, i) {
        void 0 === e && (e = 0),
          void 0 === n && (n = 1),
          (t.min = Vn(t.min, e, n, r, i)),
          (t.max = Vn(t.max, e, n, r, i));
      }
      function Mn(t, e) {
        var n = e.x,
          r = e.y;
        Cn(t.x, n.translate, n.scale, n.originPoint),
          Cn(t.y, r.translate, r.scale, r.originPoint);
      }
      function Rn(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function kn(t, e, n) {
        var r = s(n, 3),
          i = r[0],
          o = r[1],
          a = r[2],
          u = void 0 !== e[a] ? e[a] : 0.5,
          l = G(t.min, t.max, u);
        Cn(t, e[i], e[o], l, e.scale);
      }
      var jn = ["x", "scaleX", "originX"],
        On = ["y", "scaleY", "originY"];
      function Ln(t, e) {
        kn(t.x, e, jn), kn(t.y, e, On);
      }
      const Dn = (t) => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
        In = (t) => Dn(t) && t.hasOwnProperty("z"),
        Fn = (t, e) => Math.abs(t - e);
      function Un(t, e) {
        if ($t(t) && $t(e)) return Fn(t, e);
        if (Dn(t) && Dn(e)) {
          const n = Fn(t.x, e.x),
            r = Fn(t.y, e.y),
            i = In(t) && In(e) ? Fn(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
        }
      }
      function Bn(t) {
        return t.max - t.min;
      }
      function zn(t, e, n) {
        return (
          void 0 === e && (e = 0), void 0 === n && (n = 0.01), Un(t, e) < n
        );
      }
      function Nn(t, e, n, r) {
        void 0 === r && (r = 0.5),
          (t.origin = r),
          (t.originPoint = G(e.min, e.max, t.origin)),
          (t.scale = Bn(n) / Bn(e)),
          (zn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = G(n.min, n.max, t.origin) - t.originPoint),
          (zn(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function _n(t, e, n, r) {
        Nn(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          Nn(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function Hn(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + Bn(e));
      }
      function Wn(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + Bn(e));
      }
      function qn(t, e, n) {
        Wn(t.x, e.x, n.x), Wn(t.y, e.y, n.y);
      }
      function Yn(t, e, n, r, i) {
        return (
          (t = Tn((t -= e), 1 / n, r)), void 0 !== i && (t = Tn(t, 1 / i, r)), t
        );
      }
      function Xn(t, e, n, r, i) {
        var o = s(n, 3),
          a = o[0],
          u = o[1],
          l = o[2];
        !(function (t, e, n, r, i, o, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5),
            void 0 === o && (o = t),
            void 0 === a && (a = t),
            Mt.test(e) &&
              ((e = parseFloat(e)), (e = G(a.min, a.max, e / 100) - a.min)),
            "number" === typeof e)
          ) {
            var s = G(o.min, o.max, r);
            t === o && (s -= e),
              (t.min = Yn(t.min, e, n, s, i)),
              (t.max = Yn(t.max, e, n, s, i));
          }
        })(t, e[a], e[u], e[l], e.scale, r, i);
      }
      var Gn = ["x", "scaleX", "originX"],
        Zn = ["y", "scaleY", "originY"];
      function $n(t, e, n, r) {
        Xn(
          t.x,
          e,
          Gn,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          Xn(
            t.y,
            e,
            Zn,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function Kn(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function Jn(t) {
        return Kn(t.x) && Kn(t.y);
      }
      function Qn(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      var tr = (function () {
          function t() {
            this.members = [];
          }
          return (
            (t.prototype.add = function (t) {
              $(this.members, t), t.scheduleRender();
            }),
            (t.prototype.remove = function (t) {
              if (
                (K(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead)
              ) {
                var e = this.members[this.members.length - 1];
                e && this.promote(e);
              }
            }),
            (t.prototype.relegate = function (t) {
              var e,
                n = this.members.findIndex(function (e) {
                  return t === e;
                });
              if (0 === n) return !1;
              for (var r = n; r >= 0; r--) {
                var i = this.members[r];
                if (!1 !== i.isPresent) {
                  e = i;
                  break;
                }
              }
              return !!e && (this.promote(e), !0);
            }),
            (t.prototype.promote = function (t, e) {
              var n,
                r = this.lead;
              t !== r &&
                ((this.prevLead = r),
                (this.lead = t),
                t.show(),
                r &&
                  (r.instance && r.scheduleRender(),
                  t.scheduleRender(),
                  (t.resumeFrom = r),
                  e && (t.resumeFrom.preserveOpacity = !0),
                  r.snapshot &&
                    ((t.snapshot = r.snapshot),
                    (t.snapshot.latestValues =
                      r.animationValues || r.latestValues),
                    (t.snapshot.isShared = !0)),
                  (null === (n = t.root) || void 0 === n
                    ? void 0
                    : n.isUpdating) && (t.isLayoutDirty = !0),
                  !1 === t.options.crossfade && r.hide()));
            }),
            (t.prototype.exitAnimationComplete = function () {
              this.members.forEach(function (t) {
                var e, n, r, i, o;
                null === (n = (e = t.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e),
                  null ===
                    (o =
                      null === (r = t.resumingFrom) || void 0 === r
                        ? void 0
                        : (i = r.options).onExitComplete) ||
                    void 0 === o ||
                    o.call(i);
              });
            }),
            (t.prototype.scheduleRender = function () {
              this.members.forEach(function (t) {
                t.instance && t.scheduleRender(!1);
              });
            }),
            (t.prototype.removeLeadSnapshot = function () {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            t
          );
        })(),
        er = {};
      function nr(t, e, n) {
        var r = t.x.translate / e.x,
          i = t.y.translate / e.y,
          o = "translate3d(".concat(r, "px, ").concat(i, "px, 0) ");
        if (n) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (o += "rotate(".concat(a, "deg) ")),
            s && (o += "rotateX(".concat(s, "deg) ")),
            u && (o += "rotateY(".concat(u, "deg) "));
        }
        return "translate3d(0px, 0px, 0) scale(1, 1)" ===
          (o += "scale(".concat(t.x.scale, ", ").concat(t.y.scale, ")"))
          ? "none"
          : o;
      }
      function rr(t) {
        return [t("x"), t("y")];
      }
      var ir = ["", "X", "Y", "Z"],
        or = ["transformPerspective", "x", "y", "z"];
      function ar(t, e) {
        return or.indexOf(t) - or.indexOf(e);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (t) {
        return ir.forEach(function (e) {
          return or.push(t + e);
        });
      });
      var sr = new Set(or);
      function ur(t) {
        return sr.has(t);
      }
      var lr = new Set(["originX", "originY", "originZ"]);
      function cr(t) {
        return lr.has(t);
      }
      var dr = function (t, e) {
          return t.depth - e.depth;
        },
        fr = (function () {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function (t) {
              $(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function (t) {
              K(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function (t) {
              this.isDirty && this.children.sort(dr),
                (this.isDirty = !1),
                this.children.forEach(t);
            }),
            t
          );
        })();
      function pr(t) {
        var e,
          n = et(t) ? t.get() : t;
        return (
          (e = n),
          Boolean(e && "object" === typeof e && e.mix && e.toValue)
            ? n.toValue()
            : n
        );
      }
      var vr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function hr(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          r = t.measureScroll,
          i = t.resetTransform;
        return (function () {
          function t(t, e, r) {
            var i = this;
            void 0 === e && (e = {}),
              void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                i.isUpdating && ((i.isUpdating = !1), i.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                i.nodes.forEach(Sr), i.nodes.forEach(Er);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? u(u([], s(r.path), !1), [r], !1) : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var o = 0; o < this.path.length; o++)
              this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new fr());
          }
          return (
            (t.prototype.addEventListener = function (t, e) {
              return (
                this.eventHandlers.has(t) || this.eventHandlers.set(t, new J()),
                this.eventHandlers.get(t).add(e)
              );
            }),
            (t.prototype.notifyListeners = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              var r = this.eventHandlers.get(t);
              null === r || void 0 === r || r.notify.apply(r, u([], s(e), !1));
            }),
            (t.prototype.hasListeners = function (t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function (t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function (t, n) {
              var r,
                i = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
                  (this.instance = t);
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout,
                  l = a.visualElement;
                if (
                  (l && !l.getInstance() && l.mount(t),
                  this.root.nodes.add(this),
                  null === (r = this.parent) ||
                    void 0 === r ||
                    r.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (u || s) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var c,
                    d = function () {
                      return (i.root.updateBlockedByResize = !1);
                    };
                  e(t, function () {
                    (i.root.updateBlockedByResize = !0),
                      clearTimeout(c),
                      (c = window.setTimeout(d, 250)),
                      vr.hasAnimatedSinceResize &&
                        ((vr.hasAnimatedSinceResize = !1), i.nodes.forEach(wr));
                  });
                }
                s && this.root.registerSharedNode(s, this),
                  !1 !== this.options.animate &&
                    l &&
                    (s || u) &&
                    this.addEventListener("didUpdate", function (t) {
                      var e,
                        n,
                        r,
                        a,
                        s,
                        u = t.delta,
                        c = t.hasLayoutChanged,
                        d = t.hasRelativeTargetChanged,
                        f = t.layout;
                      if (i.isTreeAnimationBlocked())
                        return (
                          (i.target = void 0), void (i.relativeTarget = void 0)
                        );
                      var p =
                          null !==
                            (n =
                              null !== (e = i.options.transition) &&
                              void 0 !== e
                                ? e
                                : l.getDefaultTransition()) && void 0 !== n
                            ? n
                            : Mr,
                        v = l.getProps().onLayoutAnimationComplete,
                        h = !i.targetLayout || !Qn(i.targetLayout, f) || d,
                        m = !c && d;
                      (null === (r = i.resumeFrom) || void 0 === r
                        ? void 0
                        : r.instance) ||
                      m ||
                      (c && (h || !i.currentAnimation))
                        ? (i.resumeFrom &&
                            ((i.resumingFrom = i.resumeFrom),
                            (i.resumingFrom.resumingFrom = void 0)),
                          i.setAnimationOrigin(u, m),
                          i.startAnimation(
                            o(o({}, cn(p, "layout")), { onComplete: v })
                          ))
                        : i.isLead() &&
                          (null === (s = (a = i.options).onExitComplete) ||
                            void 0 === s ||
                            s.call(a)),
                        (i.targetLayout = f);
                    });
              }
            }),
            (t.prototype.unmount = function () {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.remove(this),
                null === (e = this.parent) ||
                  void 0 === e ||
                  e.children.delete(this),
                (this.instance = void 0),
                N.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function () {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function () {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function () {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function () {
              var t;
              return (
                this.isAnimationBlocked ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isTreeAnimationBlocked()) ||
                !1
              );
            }),
            (t.prototype.startUpdate = function () {
              var t;
              this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                null === (t = this.nodes) || void 0 === t || t.forEach(Ar));
            }),
            (t.prototype.willUpdate = function (t) {
              var e, n, r;
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (n = (e = this.options).onExitComplete) ||
                  void 0 === n ||
                  n.call(e);
              else if (
                (!this.root.isUpdating && this.root.startUpdate(),
                !this.isLayoutDirty)
              ) {
                this.isLayoutDirty = !0;
                for (var i = 0; i < this.path.length; i++) {
                  var o = this.path[i];
                  (o.shouldResetTransform = !0), o.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout;
                if (void 0 !== s || u) {
                  var l =
                    null === (r = this.options.visualElement) || void 0 === r
                      ? void 0
                      : r.getProps().transformTemplate;
                  (this.prevTransformTemplateValue =
                    null === l || void 0 === l
                      ? void 0
                      : l(this.latestValues, "")),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate");
                }
              }
            }),
            (t.prototype.didUpdate = function () {
              if (this.isUpdateBlocked())
                return (
                  this.unblockUpdate(),
                  this.clearAllSnapshots(),
                  void this.nodes.forEach(xr)
                );
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size &&
                  (this.potentialNodes.forEach(Rr),
                  this.potentialNodes.clear()),
                this.nodes.forEach(br),
                this.nodes.forEach(mr),
                this.nodes.forEach(gr),
                this.clearAllSnapshots(),
                _.update(),
                _.preRender(),
                _.render());
            }),
            (t.prototype.clearAllSnapshots = function () {
              this.nodes.forEach(yr), this.sharedNodes.forEach(Pr);
            }),
            (t.prototype.scheduleUpdateProjection = function () {
              X.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function () {
              var t = this;
              X.postRender(function () {
                t.isLayoutDirty
                  ? t.root.didUpdate()
                  : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function () {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                jr(e),
                  (this.snapshot = {
                    measured: t,
                    layout: e,
                    latestValues: {},
                  });
              }
            }),
            (t.prototype.updateLayout = function () {
              var t;
              if (
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              ) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var e = 0; e < this.path.length; e++) {
                    this.path[e].updateScroll();
                  }
                var n = this.measure();
                jr(n);
                var r = this.layout;
                (this.layout = {
                  measured: n,
                  actual: this.removeElementScroll(n),
                }),
                  (this.layoutCorrected = {
                    x: { min: 0, max: 0 },
                    y: { min: 0, max: 0 },
                  }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners("measure", this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(
                      this.layout.actual,
                      null === r || void 0 === r ? void 0 : r.actual
                    );
              }
            }),
            (t.prototype.updateScroll = function () {
              this.options.layoutScroll &&
                this.instance &&
                (this.scroll = r(this.instance));
            }),
            (t.prototype.resetTransform = function () {
              var t;
              if (i) {
                var e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !Jn(this.projectionDelta),
                  r =
                    null === (t = this.options.visualElement) || void 0 === t
                      ? void 0
                      : t.getProps().transformTemplate,
                  o =
                    null === r || void 0 === r
                      ? void 0
                      : r(this.latestValues, ""),
                  a = o !== this.prevTransformTemplateValue;
                e &&
                  (n || An(this.latestValues) || a) &&
                  (i(this.instance, o),
                  (this.shouldResetTransform = !1),
                  this.scheduleRender());
              }
            }),
            (t.prototype.measure = function () {
              var t = this.options.visualElement;
              if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (Rn(e.x, n.x), Rn(e.y, n.y)), e;
            }),
            (t.prototype.removeElementScroll = function (t) {
              var e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              wn(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var r = this.path[n],
                  i = r.scroll,
                  o = r.options;
                r !== this.root &&
                  i &&
                  o.layoutScroll &&
                  (Rn(e.x, i.x), Rn(e.y, i.y));
              }
              return e;
            }),
            (t.prototype.applyTransform = function (t, e) {
              void 0 === e && (e = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              wn(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                !e &&
                  i.options.layoutScroll &&
                  i.scroll &&
                  i !== i.root &&
                  Ln(n, { x: -i.scroll.x, y: -i.scroll.y }),
                  An(i.latestValues) && Ln(n, i.latestValues);
              }
              return An(this.latestValues) && Ln(n, this.latestValues), n;
            }),
            (t.prototype.removeTransform = function (t) {
              var e,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              wn(n, t);
              for (var r = 0; r < this.path.length; r++) {
                var i = this.path[r];
                if (i.instance && An(i.latestValues)) {
                  En(i.latestValues) && i.updateSnapshot();
                  var o = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  wn(o, i.measure()),
                    $n(
                      n,
                      i.latestValues,
                      null === (e = i.snapshot) || void 0 === e
                        ? void 0
                        : e.layout,
                      o
                    );
                }
              }
              return An(this.latestValues) && $n(n, this.latestValues), n;
            }),
            (t.prototype.setTargetDelta = function (t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function (t) {
              var e;
              this.options = o(o(o({}, this.options), t), {
                crossfade: null === (e = t.crossfade) || void 0 === e || e,
              });
            }),
            (t.prototype.clearMeasurements = function () {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function () {
              var t,
                e,
                n,
                r,
                i = this.options,
                o = i.layout,
                a = i.layoutId;
              this.layout &&
                (o || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.relativeTargetOrigin = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    qn(
                      this.relativeTargetOrigin,
                      this.layout.actual,
                      this.relativeParent.layout.actual
                    ),
                    wn(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.targetWithTransforms = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    })),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  (null === (t = this.relativeParent) || void 0 === t
                    ? void 0
                    : t.target)
                    ? ((e = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      Hn(e.x, n.x, r.x),
                      Hn(e.y, n.y, r.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.actual
                          ))
                        : wn(this.target, this.layout.actual),
                      Mn(this.target, this.targetDelta))
                    : wn(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) ===
                        Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      qn(
                        this.relativeTargetOrigin,
                        this.target,
                        this.relativeParent.target
                      ),
                      wn(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function () {
              if (this.parent && !An(this.parent.latestValues))
                return (this.parent.relativeTarget ||
                  this.parent.targetDelta) &&
                  this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function () {
              var t,
                e = this.options,
                n = e.layout,
                r = e.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                  (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || r))
              ) {
                var i = this.getLead();
                wn(this.layoutCorrected, this.layout.actual),
                  (function (t, e, n, r) {
                    var i, o;
                    void 0 === r && (r = !1);
                    var a = n.length;
                    if (a) {
                      var s, u;
                      e.x = e.y = 1;
                      for (var l = 0; l < a; l++)
                        (u = (s = n[l]).projectionDelta),
                          "contents" !==
                            (null ===
                              (o =
                                null === (i = s.instance) || void 0 === i
                                  ? void 0
                                  : i.style) || void 0 === o
                              ? void 0
                              : o.display) &&
                            (r &&
                              s.options.layoutScroll &&
                              s.scroll &&
                              s !== s.root &&
                              Ln(t, { x: -s.scroll.x, y: -s.scroll.y }),
                            u &&
                              ((e.x *= u.x.scale),
                              (e.y *= u.y.scale),
                              Mn(t, u)),
                            r && An(s.latestValues) && Ln(t, s.latestValues));
                    }
                  })(
                    this.layoutCorrected,
                    this.treeScale,
                    this.path,
                    Boolean(this.resumingFrom) || this !== i
                  );
                var o = i.target;
                if (o) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    }));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform;
                  _n(
                    this.projectionDelta,
                    this.layoutCorrected,
                    o,
                    this.latestValues
                  ),
                    (this.projectionTransform = nr(
                      this.projectionDelta,
                      this.treeScale
                    )),
                    (this.projectionTransform === u &&
                      this.treeScale.x === a &&
                      this.treeScale.y === s) ||
                      ((this.hasProjected = !0),
                      this.scheduleRender(),
                      this.notifyListeners("projectionUpdate", o));
                }
              }
            }),
            (t.prototype.hide = function () {
              this.isVisible = !1;
            }),
            (t.prototype.show = function () {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function (t) {
              var e, n, r;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) ||
                  void 0 === n ||
                  n.call(e),
                t &&
                  (null === (r = this.getStack()) ||
                    void 0 === r ||
                    r.scheduleRender()),
                this.resumingFrom &&
                  !this.resumingFrom.instance &&
                  (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function (t, e) {
              var n,
                r = this;
              void 0 === e && (e = !1);
              var i = this.snapshot,
                a =
                  (null === i || void 0 === i ? void 0 : i.latestValues) || {},
                s = o({}, this.latestValues),
                u = {
                  x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                };
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !e);
              var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                c = null === i || void 0 === i ? void 0 : i.isShared,
                d =
                  ((null === (n = this.getStack()) || void 0 === n
                    ? void 0
                    : n.members.length) || 0) <= 1,
                f = Boolean(
                  c &&
                    !d &&
                    !0 === this.options.crossfade &&
                    !this.path.some(Cr)
                );
              (this.mixTargetDelta = function (e) {
                var n,
                  i,
                  o,
                  p,
                  v,
                  h = e / 1e3;
                Tr(u.x, t.x, h),
                  Tr(u.y, t.y, h),
                  r.setTargetDelta(u),
                  r.relativeTarget &&
                    r.relativeTargetOrigin &&
                    r.layout &&
                    (null === (n = r.relativeParent) || void 0 === n
                      ? void 0
                      : n.layout) &&
                    (qn(l, r.layout.actual, r.relativeParent.layout.actual),
                    (i = r.relativeTarget),
                    (o = r.relativeTargetOrigin),
                    (p = l),
                    (v = h),
                    Vr(i.x, o.x, p.x, v),
                    Vr(i.y, o.y, p.y, v)),
                  c &&
                    ((r.animationValues = s),
                    (function (t, e, n, r, i, o) {
                      var a, s, u, l;
                      i
                        ? ((t.opacity = G(
                            0,
                            null !== (a = n.opacity) && void 0 !== a ? a : 1,
                            gn(r)
                          )),
                          (t.opacityExit = G(
                            null !== (s = e.opacity) && void 0 !== s ? s : 1,
                            0,
                            yn(r)
                          )))
                        : o &&
                          (t.opacity = G(
                            null !== (u = e.opacity) && void 0 !== u ? u : 1,
                            null !== (l = n.opacity) && void 0 !== l ? l : 1,
                            r
                          ));
                      for (var c = 0; c < pn; c++) {
                        var d = "border".concat(fn[c], "Radius"),
                          f = mn(e, d),
                          p = mn(n, d);
                        (void 0 === f && void 0 === p) ||
                          (f || (f = 0),
                          p || (p = 0),
                          0 === f || 0 === p || hn(f) === hn(p)
                            ? ((t[d] = Math.max(G(vn(f), vn(p), r), 0)),
                              (Mt.test(p) || Mt.test(f)) && (t[d] += "%"))
                            : (t[d] = p));
                      }
                      (e.rotate || n.rotate) &&
                        (t.rotate = G(e.rotate || 0, n.rotate || 0, r));
                    })(s, a, r.latestValues, h, f, d)),
                  r.root.scheduleUpdateProjection(),
                  r.scheduleRender();
              }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function (t) {
              var e,
                n,
                r = this;
              null === (e = this.currentAnimation) || void 0 === e || e.stop(),
                this.resumingFrom &&
                  (null === (n = this.resumingFrom.currentAnimation) ||
                    void 0 === n ||
                    n.stop()),
                this.pendingAnimation &&
                  (N.update(this.pendingAnimation),
                  (this.pendingAnimation = void 0)),
                (this.pendingAnimation = X.update(function () {
                  (vr.hasAnimatedSinceResize = !0),
                    (r.currentAnimation = (function (t, e, n) {
                      void 0 === n && (n = {});
                      var r = et(t) ? t : tt(t);
                      return (
                        dn("", r, e, n),
                        {
                          stop: function () {
                            return r.stop();
                          },
                          isAnimating: function () {
                            return r.isAnimating();
                          },
                        }
                      );
                    })(
                      0,
                      1e3,
                      o(o({}, t), {
                        onUpdate: function (e) {
                          var n;
                          r.mixTargetDelta(e),
                            null === (n = t.onUpdate) ||
                              void 0 === n ||
                              n.call(t, e);
                        },
                        onComplete: function () {
                          var e;
                          null === (e = t.onComplete) ||
                            void 0 === e ||
                            e.call(t),
                            r.completeAnimation();
                        },
                      })
                    )),
                    r.resumingFrom &&
                      (r.resumingFrom.currentAnimation = r.currentAnimation),
                    (r.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function () {
              var t;
              this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) ||
                  void 0 === t ||
                  t.exitAnimationComplete(),
                (this.resumingFrom =
                  this.currentAnimation =
                  this.animationValues =
                    void 0),
                this.notifyListeners("animationComplete");
            }),
            (t.prototype.finishAnimation = function () {
              var t;
              this.currentAnimation &&
                (null === (t = this.mixTargetDelta) ||
                  void 0 === t ||
                  t.call(this, 1e3),
                this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function () {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                r = t.layout,
                i = t.latestValues;
              e &&
                n &&
                r &&
                (wn(e, n),
                Ln(e, i),
                _n(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                ));
            }),
            (t.prototype.registerSharedNode = function (t, e) {
              var n, r, i;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new tr()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition:
                    null === (n = e.options.initialPromotionConfig) ||
                    void 0 === n
                      ? void 0
                      : n.transition,
                  preserveFollowOpacity:
                    null ===
                      (i =
                        null === (r = e.options.initialPromotionConfig) ||
                        void 0 === r
                          ? void 0
                          : r.shouldPreserveFollowOpacity) || void 0 === i
                      ? void 0
                      : i.call(r, e),
                });
            }),
            (t.prototype.isLead = function () {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function () {
              var t;
              return (
                (this.options.layoutId &&
                  (null === (t = this.getStack()) || void 0 === t
                    ? void 0
                    : t.lead)) ||
                this
              );
            }),
            (t.prototype.getPrevLead = function () {
              var t;
              return this.options.layoutId
                ? null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.prevLead
                : void 0;
            }),
            (t.prototype.getStack = function () {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function (t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                r = e.transition,
                i = e.preserveFollowOpacity,
                o = this.getStack();
              o && o.promote(this, i),
                n && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                r && this.setOptions({ transition: r });
            }),
            (t.prototype.relegate = function () {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function () {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, r = 0; r < ir.length; r++) {
                  var i = "rotate" + ir[r];
                  t.getStaticValue(i) &&
                    ((e = !0),
                    (n[i] = t.getStaticValue(i)),
                    t.setStaticValue(i, 0));
                }
                if (e) {
                  for (var i in (null === t || void 0 === t || t.syncRender(),
                  n))
                    t.setStaticValue(i, n[i]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function (t) {
              var e, n, r, i, o, a;
              void 0 === t && (t = {});
              var s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: "hidden" };
              s.visibility = "";
              var u =
                null === (e = this.options.visualElement) || void 0 === e
                  ? void 0
                  : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ""),
                  (s.pointerEvents = pr(t.pointerEvents) || ""),
                  (s.transform = u ? u(this.latestValues, "") : "none"),
                  s
                );
              var l = this.getLead();
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity =
                      null !== (n = this.latestValues.opacity) && void 0 !== n
                        ? n
                        : 1),
                    (c.pointerEvents = pr(t.pointerEvents) || "")),
                  this.hasProjected &&
                    !An(this.latestValues) &&
                    ((c.transform = u ? u({}, "") : "none"),
                    (this.hasProjected = !1)),
                  c
                );
              }
              var d = l.animationValues || l.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = nr(
                  this.projectionDeltaWithTransform,
                  this.treeScale,
                  d
                )),
                u && (s.transform = u(d, s.transform));
              var f = this.projectionDelta,
                p = f.x,
                v = f.y;
              for (var h in ((s.transformOrigin = ""
                .concat(100 * p.origin, "% ")
                .concat(100 * v.origin, "% 0")),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !==
                          (i =
                            null !== (r = d.opacity) && void 0 !== r
                              ? r
                              : this.latestValues.opacity) && void 0 !== i
                        ? i
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    l === this
                      ? null !== (o = d.opacity) && void 0 !== o
                        ? o
                        : ""
                      : null !== (a = d.opacityExit) && void 0 !== a
                      ? a
                      : 0),
              er))
                if (void 0 !== d[h]) {
                  var m = er[h],
                    g = m.correct,
                    y = m.applyTo,
                    x = g(d[h], l);
                  if (y) for (var b = y.length, w = 0; w < b; w++) s[y[w]] = x;
                  else s[h] = x;
                }
              return (
                this.options.layoutId &&
                  (s.pointerEvents =
                    l === this ? pr(t.pointerEvents) || "" : "none"),
                s
              );
            }),
            (t.prototype.clearSnapshot = function () {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function () {
              this.root.nodes.forEach(function (t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e
                  ? void 0
                  : e.stop();
              }),
                this.root.nodes.forEach(xr),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function mr(t) {
        t.updateLayout();
      }
      function gr(t) {
        var e,
          n,
          r,
          i,
          o =
            null !==
              (n =
                null === (e = t.resumeFrom) || void 0 === e
                  ? void 0
                  : e.snapshot) && void 0 !== n
              ? n
              : t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          "size" === t.options.animationType
            ? rr(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = Bn(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : "position" === t.options.animationType &&
              rr(function (t) {
                var e = o.isShared ? o.measured[t] : o.layout[t],
                  n = Bn(s[t]);
                e.max = e.min + n;
              });
          var l = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          _n(l, s, o.layout);
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          o.isShared
            ? _n(c, t.applyTransform(u, !0), o.measured)
            : _n(c, s, o.layout);
          var d = !Jn(l),
            f = !1;
          if (
            !t.resumeFrom &&
            ((t.relativeParent = t.getClosestProjectingParent()),
            t.relativeParent && !t.relativeParent.resumeFrom)
          ) {
            var p = t.relativeParent,
              v = p.snapshot,
              h = p.layout;
            if (v && h) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              qn(m, o.layout, v.layout);
              var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              qn(g, s, h.actual), Qn(m, g) || (f = !0);
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: o,
            delta: c,
            layoutDelta: l,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: f,
          });
        } else
          t.isLead() &&
            (null === (i = (r = t.options).onExitComplete) ||
              void 0 === i ||
              i.call(r));
        t.options.transition = void 0;
      }
      function yr(t) {
        t.clearSnapshot();
      }
      function xr(t) {
        t.clearMeasurements();
      }
      function br(t) {
        t.resetTransform();
      }
      function wr(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function Sr(t) {
        t.resolveTargetDelta();
      }
      function Er(t) {
        t.calcProjection();
      }
      function Ar(t) {
        t.resetRotation();
      }
      function Pr(t) {
        t.removeLeadSnapshot();
      }
      function Tr(t, e, n) {
        (t.translate = G(e.translate, 0, n)),
          (t.scale = G(e.scale, 1, n)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function Vr(t, e, n, r) {
        (t.min = G(e.min, n.min, r)), (t.max = G(e.max, n.max, r));
      }
      function Cr(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var Mr = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Rr(t, e) {
        for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
          if (Boolean(t.path[r].instance)) {
            n = t.path[r];
            break;
          }
        var i = (n && n !== t.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(e, '"]')
        );
        i && t.mount(i, !0);
      }
      function kr(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function jr(t) {
        kr(t.x), kr(t.y);
      }
      var Or = 1;
      var Lr = (0, l.createContext)({}),
        Dr = (0, l.createContext)({});
      var Ir = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          i(e, t),
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            var t = this.props,
              e = t.visualElement,
              n = t.props;
            e && e.setProps(n);
          }),
          (e.prototype.render = function () {
            return this.props.children;
          }),
          e
        );
      })(l.Component);
      function Fr(t) {
        var e = t.preloadedFeatures,
          n = t.createVisualElement,
          r = t.projectionNodeConstructor,
          i = t.useRender,
          a = t.useVisualState,
          s = t.Component;
        return (
          e &&
            (function (t) {
              for (var e in t)
                null !== t[e] &&
                  ("projectionNodeConstructor" === e
                    ? (d.projectionNodeConstructor = t[e])
                    : (d[e].Component = t[e]));
            })(e),
          (0, l.forwardRef)(function (t, e) {
            var u = (function (t) {
              var e,
                n = t.layoutId,
                r =
                  null === (e = (0, l.useContext)(Lr)) || void 0 === e
                    ? void 0
                    : e.id;
              return r && void 0 !== n ? r + "-" + n : n;
            })(t);
            t = o(o({}, t), { layoutId: u });
            var c = (0, l.useContext)(h),
              g = null,
              x = C(t),
              S = c.isStatic
                ? void 0
                : R(function () {
                    if (vr.hasEverUpdated) return Or++;
                  }),
              E = a(t, c.isStatic);
            return (
              !c.isStatic &&
                y &&
                ((x.visualElement = b(s, E, o(o({}, c), t), n)),
                (function (t, e, n, r) {
                  var i,
                    o = e.layoutId,
                    a = e.layout,
                    s = e.drag,
                    u = e.dragConstraints,
                    c = e.layoutScroll,
                    d = (0, l.useContext)(Dr);
                  r &&
                    n &&
                    !(null === n || void 0 === n ? void 0 : n.projection) &&
                    ((n.projection = new r(
                      t,
                      n.getLatestValues(),
                      null === (i = n.parent) || void 0 === i
                        ? void 0
                        : i.projection
                    )),
                    n.projection.setOptions({
                      layoutId: o,
                      layout: a,
                      alwaysMeasureLayout: Boolean(s) || (u && w(u)),
                      visualElement: n,
                      scheduleRender: function () {
                        return n.scheduleRender();
                      },
                      animationType: "string" === typeof a ? a : "both",
                      initialPromotionConfig: d,
                      layoutScroll: c,
                    }));
                })(S, t, x.visualElement, r || d.projectionNodeConstructor),
                (g = (function (t, e, n) {
                  var r = [];
                  if (((0, l.useContext)(f), !e)) return null;
                  for (var i = 0; i < v; i++) {
                    var a = p[i],
                      s = d[a],
                      u = s.isEnabled,
                      c = s.Component;
                    u(t) &&
                      c &&
                      r.push(
                        l.createElement(
                          c,
                          o({ key: a }, t, { visualElement: e })
                        )
                      );
                  }
                  return r;
                })(t, x.visualElement))),
              l.createElement(
                Ir,
                { visualElement: x.visualElement, props: o(o({}, c), t) },
                g,
                l.createElement(
                  m.Provider,
                  { value: x },
                  i(
                    s,
                    t,
                    S,
                    (function (t, e, n) {
                      return (0, l.useCallback)(
                        function (r) {
                          var i;
                          r &&
                            (null === (i = t.mount) ||
                              void 0 === i ||
                              i.call(t, r)),
                            e && (r ? e.mount(r) : e.unmount()),
                            n &&
                              ("function" === typeof n
                                ? n(r)
                                : w(n) && (n.current = r));
                        },
                        [e]
                      );
                    })(E, x.visualElement, e),
                    E,
                    c.isStatic,
                    x.visualElement
                  )
                )
              )
            );
          })
        );
      }
      function Ur(t) {
        function e(e, n) {
          return void 0 === n && (n = {}), Fr(t(e, n));
        }
        if ("undefined" === typeof Proxy) return e;
        var n = new Map();
        return new Proxy(e, {
          get: function (t, r) {
            return n.has(r) || n.set(r, e(r)), n.get(r);
          },
        });
      }
      var Br = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function zr(t) {
        return (
          "string" === typeof t &&
          !t.includes("-") &&
          !!(Br.indexOf(t) > -1 || /[A-Z]/.test(t))
        );
      }
      function Nr(t, e) {
        var n = e.layout,
          r = e.layoutId;
        return (
          ur(t) ||
          cr(t) ||
          ((n || void 0 !== r) && (!!er[t] || "opacity" === t))
        );
      }
      var _r = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      };
      function Hr(t) {
        return t.startsWith("--");
      }
      var Wr = function (t, e) {
        return e && "number" === typeof t ? e.transform(t) : t;
      };
      function qr(t, e, n, r) {
        var i,
          o = t.style,
          a = t.vars,
          s = t.transform,
          u = t.transformKeys,
          l = t.transformOrigin;
        u.length = 0;
        var c = !1,
          d = !1,
          f = !0;
        for (var p in e) {
          var v = e[p];
          if (Hr(p)) a[p] = v;
          else {
            var h = Je[p],
              m = Wr(v, h);
            if (ur(p)) {
              if (((c = !0), (s[p] = m), u.push(p), !f)) continue;
              v !== (null !== (i = h.default) && void 0 !== i ? i : 0) &&
                (f = !1);
            } else cr(p) ? ((l[p] = m), (d = !0)) : (o[p] = m);
          }
        }
        c
          ? (o.transform = (function (t, e, n, r) {
              var i = t.transform,
                o = t.transformKeys,
                a = e.enableHardwareAcceleration,
                s = void 0 === a || a,
                u = e.allowTransformNone,
                l = void 0 === u || u,
                c = "";
              o.sort(ar);
              for (var d = !1, f = o.length, p = 0; p < f; p++) {
                var v = o[p];
                (c += "".concat(_r[v] || v, "(").concat(i[v], ") ")),
                  "z" === v && (d = !0);
              }
              return (
                !d && s ? (c += "translateZ(0)") : (c = c.trim()),
                r ? (c = r(i, n ? "" : c)) : l && n && (c = "none"),
                c
              );
            })(t, n, f, r))
          : r
          ? (o.transform = r({}, ""))
          : !e.transform && o.transform && (o.transform = "none"),
          d &&
            (o.transformOrigin = (function (t) {
              var e = t.originX,
                n = void 0 === e ? "50%" : e,
                r = t.originY,
                i = void 0 === r ? "50%" : r,
                o = t.originZ,
                a = void 0 === o ? 0 : o;
              return "".concat(n, " ").concat(i, " ").concat(a);
            })(l));
      }
      var Yr = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function Xr(t, e, n) {
        for (var r in e) et(e[r]) || Nr(r, n) || (t[r] = e[r]);
      }
      function Gr(t, e, n) {
        var r = {};
        return (
          Xr(r, t.style || {}, t),
          Object.assign(
            r,
            (function (t, e, n) {
              var r = t.transformTemplate;
              return (0, l.useMemo)(
                function () {
                  var t = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  qr(t, e, { enableHardwareAcceleration: !n }, r);
                  var i = t.style;
                  return o(o({}, t.vars), i);
                },
                [e]
              );
            })(t, e, n)
          ),
          t.transformValues && (r = t.transformValues(r)),
          r
        );
      }
      function Zr(t, e, n) {
        var r = {},
          i = Gr(t, e, n);
        return (
          Boolean(t.drag) &&
            !1 !== t.dragListener &&
            ((r.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === t.drag
                ? "none"
                : "pan-".concat("x" === t.drag ? "y" : "x"))),
          (r.style = i),
          r
        );
      }
      var $r = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "layoutDependency",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "dragSnapToOrigin",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
        "whileInView",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
        "layoutScroll",
      ]);
      function Kr(t) {
        return $r.has(t);
      }
      var Jr,
        Qr = function (t) {
          return !Kr(t);
        };
      try {
        (Jr = require("@emotion/is-prop-valid").default) &&
          (Qr = function (t) {
            return t.startsWith("on") ? !Kr(t) : Jr(t);
          });
      } catch (Pa) {}
      function ti(t, e, n) {
        return "string" === typeof t ? t : Rt.transform(e + n * t);
      }
      var ei = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        ni = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function ri(t, e, n, r) {
        var i = e.attrX,
          o = e.attrY,
          s = e.originX,
          u = e.originY,
          l = e.pathLength,
          c = e.pathSpacing,
          d = void 0 === c ? 1 : c,
          f = e.pathOffset,
          p = void 0 === f ? 0 : f;
        qr(
          t,
          a(e, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r
        ),
          (t.attrs = t.style),
          (t.style = {});
        var v = t.attrs,
          h = t.style,
          m = t.dimensions;
        v.transform && (m && (h.transform = v.transform), delete v.transform),
          m &&
            (void 0 !== s || void 0 !== u || h.transform) &&
            (h.transformOrigin = (function (t, e, n) {
              var r = ti(e, t.x, t.width),
                i = ti(n, t.y, t.height);
              return "".concat(r, " ").concat(i);
            })(m, void 0 !== s ? s : 0.5, void 0 !== u ? u : 0.5)),
          void 0 !== i && (v.x = i),
          void 0 !== o && (v.y = o),
          void 0 !== l &&
            (function (t, e, n, r, i) {
              void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === i && (i = !0),
                (t.pathLength = 1);
              var o = i ? ei : ni;
              t[o.offset] = Rt.transform(-r);
              var a = Rt.transform(e),
                s = Rt.transform(n);
              t[o.array] = "".concat(a, " ").concat(s);
            })(v, l, d, p, !1);
      }
      var ii = function () {
        return o(
          o(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function oi(t, e) {
        var n = (0, l.useMemo)(
          function () {
            var n = ii();
            return (
              ri(n, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              o(o({}, n.attrs), { style: o({}, n.style) })
            );
          },
          [e]
        );
        if (t.style) {
          var r = {};
          Xr(r, t.style, t), (n.style = o(o({}, r), n.style));
        }
        return n;
      }
      function ai(t) {
        void 0 === t && (t = !1);
        return function (e, n, r, i, a, s) {
          var u = a.latestValues,
            c = (zr(e) ? oi : Zr)(n, u, s),
            d = (function (t, e, n) {
              var r = {};
              for (var i in t)
                (Qr(i) ||
                  (!0 === n && Kr(i)) ||
                  (!e && !Kr(i)) ||
                  (t.draggable && i.startsWith("onDrag"))) &&
                  (r[i] = t[i]);
              return r;
            })(n, "string" === typeof e, t),
            f = o(o(o({}, d), c), { ref: i });
          return r && (f["data-projection-id"] = r), (0, l.createElement)(e, f);
        };
      }
      var si = /([a-z])([A-Z])/g,
        ui = function (t) {
          return t.replace(si, "$1-$2").toLowerCase();
        };
      function li(t, e, n, r) {
        var i = e.style,
          o = e.vars;
        for (var a in (Object.assign(t.style, i, r && r.getProjectionStyles(n)),
        o))
          t.style.setProperty(a, o[a]);
      }
      var ci = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
      ]);
      function di(t, e) {
        for (var n in (li(t, e), e.attrs))
          t.setAttribute(ci.has(n) ? n : ui(n), e.attrs[n]);
      }
      function fi(t) {
        var e = t.style,
          n = {};
        for (var r in e) (et(e[r]) || Nr(r, t)) && (n[r] = e[r]);
        return n;
      }
      function pi(t) {
        var e = fi(t);
        for (var n in t) {
          if (et(t[n]))
            e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n];
        }
        return e;
      }
      function vi(t) {
        return "object" === typeof t && "function" === typeof t.start;
      }
      function hi(t, e, n, r) {
        var i = t.scrapeMotionValuesFromProps,
          o = t.createRenderState,
          a = t.onMount,
          s = { latestValues: gi(e, n, r, i), renderState: o() };
        return (
          a &&
            (s.mount = function (t) {
              return a(e, t, s);
            }),
          s
        );
      }
      var mi = function (t) {
        return function (e, n) {
          var r = (0, l.useContext)(m),
            i = (0, l.useContext)(g);
          return n
            ? hi(t, e, r, i)
            : R(function () {
                return hi(t, e, r, i);
              });
        };
      };
      function gi(t, e, n, r) {
        var i = {},
          o = !1 === (null === n || void 0 === n ? void 0 : n.initial),
          s = r(t);
        for (var u in s) i[u] = pr(s[u]);
        var l = t.initial,
          c = t.animate,
          d = T(t),
          f = V(t);
        e &&
          f &&
          !d &&
          !1 !== t.inherit &&
          ((null !== l && void 0 !== l) || (l = e.initial),
          (null !== c && void 0 !== c) || (c = e.animate));
        var p = o || !1 === l,
          v = p ? c : l;
        v &&
          "boolean" !== typeof v &&
          !vi(v) &&
          (Array.isArray(v) ? v : [v]).forEach(function (e) {
            var n = A(t, e);
            if (n) {
              var r = n.transitionEnd;
              n.transition;
              var o = a(n, ["transitionEnd", "transition"]);
              for (var s in o) {
                var u = o[s];
                if (Array.isArray(u)) u = u[p ? u.length - 1 : 0];
                null !== u && (i[s] = u);
              }
              for (var s in r) i[s] = r[s];
            }
          });
        return i;
      }
      var yi,
        xi = {
          useVisualState: mi({
            scrapeMotionValuesFromProps: pi,
            createRenderState: ii,
            onMount: function (t, e, n) {
              var r = n.renderState,
                i = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (o) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              ri(r, i, { enableHardwareAcceleration: !1 }, t.transformTemplate),
                di(e, r);
            },
          }),
        },
        bi = {
          useVisualState: mi({
            scrapeMotionValuesFromProps: fi,
            createRenderState: Yr,
          }),
        };
      function wi(t, e, n, r) {
        return (
          t.addEventListener(e, n, r),
          function () {
            return t.removeEventListener(e, n, r);
          }
        );
      }
      function Si(t, e, n, r) {
        (0, l.useEffect)(
          function () {
            var i = t.current;
            if (n && i) return wi(i, e, n, r);
          },
          [t, e, n, r]
        );
      }
      function Ei(t) {
        return "undefined" !== typeof PointerEvent && t instanceof PointerEvent
          ? !("mouse" !== t.pointerType)
          : t instanceof MouseEvent;
      }
      function Ai(t) {
        return !!t.touches;
      }
      !(function (t) {
        (t.Animate = "animate"),
          (t.Hover = "whileHover"),
          (t.Tap = "whileTap"),
          (t.Drag = "whileDrag"),
          (t.Focus = "whileFocus"),
          (t.InView = "whileInView"),
          (t.Exit = "exit");
      })(yi || (yi = {}));
      var Pi = { pageX: 0, pageY: 0 };
      function Ti(t, e) {
        void 0 === e && (e = "page");
        var n = t.touches[0] || t.changedTouches[0] || Pi;
        return { x: n[e + "X"], y: n[e + "Y"] };
      }
      function Vi(t, e) {
        return void 0 === e && (e = "page"), { x: t[e + "X"], y: t[e + "Y"] };
      }
      function Ci(t, e) {
        return (
          void 0 === e && (e = "page"), { point: Ai(t) ? Ti(t, e) : Vi(t, e) }
        );
      }
      var Mi = function (t, e) {
          void 0 === e && (e = !1);
          var n,
            r = function (e) {
              return t(e, Ci(e));
            };
          return e
            ? ((n = r),
              function (t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : r;
        },
        Ri = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        ki = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function ji(t) {
        return y && null === window.onpointerdown
          ? t
          : y && null === window.ontouchstart
          ? ki[t]
          : y && null === window.onmousedown
          ? Ri[t]
          : t;
      }
      function Oi(t, e, n, r) {
        return wi(t, ji(e), Mi(n, "pointerdown" === e), r);
      }
      function Li(t, e, n, r) {
        return Si(t, ji(e), n && Mi(n, "pointerdown" === e), r);
      }
      function Di(t) {
        var e = null;
        return function () {
          return (
            null === e &&
            ((e = t),
            function () {
              e = null;
            })
          );
        };
      }
      var Ii = Di("dragHorizontal"),
        Fi = Di("dragVertical");
      function Ui(t) {
        var e = !1;
        if ("y" === t) e = Fi();
        else if ("x" === t) e = Ii();
        else {
          var n = Ii(),
            r = Fi();
          n && r
            ? (e = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return e;
      }
      function Bi() {
        var t = Ui(!0);
        return !t || (t(), !1);
      }
      function zi(t, e, n) {
        return function (r, i) {
          var o;
          Ei(r) &&
            !Bi() &&
            (null === (o = t.animationState) ||
              void 0 === o ||
              o.setActive(yi.Hover, e),
            null === n || void 0 === n || n(r, i));
        };
      }
      var Ni = function (t, e) {
        return !!e && (t === e || Ni(t, e.parentElement));
      };
      function _i(t) {
        return (0, l.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var Hi = new WeakMap(),
        Wi = new WeakMap(),
        qi = function (t) {
          var e;
          null === (e = Hi.get(t.target)) || void 0 === e || e(t);
        },
        Yi = function (t) {
          t.forEach(qi);
        };
      function Xi(t, e, n) {
        var r = (function (t) {
          var e = t.root,
            n = a(t, ["root"]),
            r = e || document;
          Wi.has(r) || Wi.set(r, {});
          var i = Wi.get(r),
            s = JSON.stringify(n);
          return (
            i[s] || (i[s] = new IntersectionObserver(Yi, o({ root: e }, n))),
            i[s]
          );
        })(e);
        return (
          Hi.set(t, n),
          r.observe(t),
          function () {
            Hi.delete(t), r.unobserve(t);
          }
        );
      }
      var Gi = { some: 0, all: 1 };
      function Zi(t, e, n, r) {
        var i = r.root,
          o = r.margin,
          a = r.amount,
          s = void 0 === a ? "some" : a,
          u = r.once;
        (0, l.useEffect)(
          function () {
            if (t) {
              var r = {
                root: null === i || void 0 === i ? void 0 : i.current,
                rootMargin: o,
                threshold: "number" === typeof s ? s : Gi[s],
              };
              return Xi(n.getInstance(), r, function (t) {
                var r,
                  i = t.isIntersecting;
                if (
                  e.isInView !== i &&
                  ((e.isInView = i), !u || i || !e.hasEnteredView)
                ) {
                  i && (e.hasEnteredView = !0),
                    null === (r = n.animationState) ||
                      void 0 === r ||
                      r.setActive(yi.InView, i);
                  var o = n.getProps(),
                    a = i ? o.onViewportEnter : o.onViewportLeave;
                  null === a || void 0 === a || a(t);
                }
              });
            }
          },
          [t, i, o, s]
        );
      }
      function $i(t, e, n) {
        (0, l.useEffect)(
          function () {
            t &&
              requestAnimationFrame(function () {
                var t;
                e.hasEnteredView = !0;
                var r = n.getProps().onViewportEnter;
                null === r || void 0 === r || r(null),
                  null === (t = n.animationState) ||
                    void 0 === t ||
                    t.setActive(yi.InView, !0);
              });
          },
          [t]
        );
      }
      var Ki = function (t) {
          return function (e) {
            return t(e), null;
          };
        },
        Ji = {
          inView: Ki(function (t) {
            var e = t.visualElement,
              n = t.whileInView,
              r = t.onViewportEnter,
              i = t.onViewportLeave,
              o = t.viewport,
              a = void 0 === o ? {} : o,
              s = (0, l.useRef)({ hasEnteredView: !1, isInView: !1 }),
              u = Boolean(n || r || i);
            a.once && s.current.hasEnteredView && (u = !1),
              ("undefined" === typeof IntersectionObserver ? $i : Zi)(
                u,
                s.current,
                e,
                a
              );
          }),
          tap: Ki(function (t) {
            var e = t.onTap,
              n = t.onTapStart,
              r = t.onTapCancel,
              i = t.whileTap,
              o = t.visualElement,
              a = e || n || r || i,
              s = (0, l.useRef)(!1),
              u = (0, l.useRef)(null);
            function c() {
              var t;
              null === (t = u.current) || void 0 === t || t.call(u),
                (u.current = null);
            }
            function d() {
              var t;
              return (
                c(),
                (s.current = !1),
                null === (t = o.animationState) ||
                  void 0 === t ||
                  t.setActive(yi.Tap, !1),
                !Bi()
              );
            }
            function f(t, n) {
              d() &&
                (Ni(o.getInstance(), t.target)
                  ? null === e || void 0 === e || e(t, n)
                  : null === r || void 0 === r || r(t, n));
            }
            function p(t, e) {
              d() && (null === r || void 0 === r || r(t, e));
            }
            Li(
              o,
              "pointerdown",
              a
                ? function (t, e) {
                    var r;
                    c(),
                      s.current ||
                        ((s.current = !0),
                        (u.current = Jt(
                          Oi(window, "pointerup", f),
                          Oi(window, "pointercancel", p)
                        )),
                        null === (r = o.animationState) ||
                          void 0 === r ||
                          r.setActive(yi.Tap, !0),
                        null === n || void 0 === n || n(t, e));
                  }
                : void 0
            ),
              _i(c);
          }),
          focus: Ki(function (t) {
            var e = t.whileFocus,
              n = t.visualElement;
            Si(
              n,
              "focus",
              e
                ? function () {
                    var t;
                    null === (t = n.animationState) ||
                      void 0 === t ||
                      t.setActive(yi.Focus, !0);
                  }
                : void 0
            ),
              Si(
                n,
                "blur",
                e
                  ? function () {
                      var t;
                      null === (t = n.animationState) ||
                        void 0 === t ||
                        t.setActive(yi.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Ki(function (t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              r = t.whileHover,
              i = t.visualElement;
            Li(i, "pointerenter", e || r ? zi(i, !0, e) : void 0),
              Li(i, "pointerleave", n || r ? zi(i, !1, n) : void 0);
          }),
        };
      function Qi() {
        var t = (0, l.useContext)(g);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          r = t.register,
          i = no();
        (0, l.useEffect)(function () {
          return r(i);
        }, []);
        return !e && n
          ? [
              !1,
              function () {
                return null === n || void 0 === n ? void 0 : n(i);
              },
            ]
          : [!0];
      }
      var to = 0,
        eo = function () {
          return to++;
        },
        no = function () {
          return R(eo);
        };
      function ro(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var io = function (t) {
          return /^0[^.\s]+$/.test(t);
        },
        oo = function (t) {
          return function (e) {
            return e.test(t);
          };
        },
        ao = [
          yt,
          Rt,
          Mt,
          Ct,
          jt,
          kt,
          {
            test: function (t) {
              return "auto" === t;
            },
            parse: function (t) {
              return t;
            },
          },
        ],
        so = function (t) {
          return ao.find(oo(t));
        },
        uo = u(u([], s(ao), !1), [_t, Zt], !1),
        lo = function (t) {
          return uo.find(oo(t));
        };
      function co(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, tt(n));
      }
      function fo(t, e) {
        var n = P(t, e),
          r = n ? t.makeTargetAnimatable(n, !1) : {},
          i = r.transitionEnd,
          s = void 0 === i ? {} : i;
        r.transition;
        var u = a(r, ["transitionEnd", "transition"]);
        for (var l in (u = o(o({}, u), s))) {
          co(t, l, rn(u[l]));
        }
      }
      function po(t, e) {
        if (e) return (e[t] || e.default || e).from;
      }
      function vo(t, e, n) {
        var r;
        void 0 === n && (n = {});
        var i = P(t, e, n.custom),
          a = (i || {}).transition,
          u = void 0 === a ? t.getDefaultTransition() || {} : a;
        n.transitionOverride && (u = n.transitionOverride);
        var l = i
            ? function () {
                return ho(t, i, n);
              }
            : function () {
                return Promise.resolve();
              },
          c = (
            null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var i = u.delayChildren,
                  a = void 0 === i ? 0 : i,
                  s = u.staggerChildren,
                  l = u.staggerDirection;
                return (function (t, e, n, r, i, a) {
                  void 0 === n && (n = 0);
                  void 0 === r && (r = 0);
                  void 0 === i && (i = 1);
                  var s = [],
                    u = (t.variantChildren.size - 1) * r,
                    l =
                      1 === i
                        ? function (t) {
                            return void 0 === t && (t = 0), t * r;
                          }
                        : function (t) {
                            return void 0 === t && (t = 0), u - t * r;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(mo)
                      .forEach(function (t, r) {
                        s.push(
                          vo(t, e, o(o({}, a), { delay: n + l(r) })).then(
                            function () {
                              return t.notifyAnimationComplete(e);
                            }
                          )
                        );
                      }),
                    Promise.all(s)
                  );
                })(t, e, a + r, s, l, n);
              }
            : function () {
                return Promise.resolve();
              },
          d = u.when;
        if (d) {
          var f = s("beforeChildren" === d ? [l, c] : [c, l], 2),
            p = f[0],
            v = f[1];
          return p().then(v);
        }
        return Promise.all([l(), c(n.delay)]);
      }
      function ho(t, e, n) {
        var r,
          i = void 0 === n ? {} : n,
          s = i.delay,
          u = void 0 === s ? 0 : s,
          l = i.transitionOverride,
          c = i.type,
          d = t.makeTargetAnimatable(e),
          f = d.transition,
          p = void 0 === f ? t.getDefaultTransition() : f,
          v = d.transitionEnd,
          h = a(d, ["transition", "transitionEnd"]);
        l && (p = l);
        var m = [],
          g =
            c &&
            (null === (r = t.animationState) || void 0 === r
              ? void 0
              : r.getState()[c]);
        for (var y in h) {
          var x = t.getValue(y),
            b = h[y];
          if (!(!x || void 0 === b || (g && go(g, y)))) {
            var w = dn(y, x, b, o({ delay: u }, p));
            m.push(w);
          }
        }
        return Promise.all(m).then(function () {
          v && fo(t, v);
        });
      }
      function mo(t, e) {
        return t.sortNodePosition(e);
      }
      function go(t, e) {
        var n = t.protectedKeys,
          r = t.needsAnimating,
          i = n.hasOwnProperty(e) && !0 !== r[e];
        return (r[e] = !1), i;
      }
      var yo = [
          yi.Animate,
          yi.InView,
          yi.Focus,
          yi.Hover,
          yi.Tap,
          yi.Drag,
          yi.Exit,
        ],
        xo = u([], s(yo), !1).reverse(),
        bo = yo.length;
      function wo(t) {
        return function (e) {
          return Promise.all(
            e.map(function (e) {
              var n = e.animation,
                r = e.options;
              return (function (t, e, n) {
                var r;
                if (
                  (void 0 === n && (n = {}),
                  t.notifyAnimationStart(e),
                  Array.isArray(e))
                ) {
                  var i = e.map(function (e) {
                    return vo(t, e, n);
                  });
                  r = Promise.all(i);
                } else if ("string" === typeof e) r = vo(t, e, n);
                else {
                  var o = "function" === typeof e ? P(t, e, n.custom) : e;
                  r = ho(t, o, n);
                }
                return r.then(function () {
                  return t.notifyAnimationComplete(e);
                });
              })(t, n, r);
            })
          );
        };
      }
      function So(t) {
        var e = wo(t),
          n = (function () {
            var t;
            return (
              ((t = {})[yi.Animate] = Eo(!0)),
              (t[yi.InView] = Eo()),
              (t[yi.Hover] = Eo()),
              (t[yi.Tap] = Eo()),
              (t[yi.Drag] = Eo()),
              (t[yi.Focus] = Eo()),
              (t[yi.Exit] = Eo()),
              t
            );
          })(),
          r = {},
          i = !0,
          l = function (e, n) {
            var r = P(t, n);
            if (r) {
              r.transition;
              var i = r.transitionEnd,
                s = a(r, ["transition", "transitionEnd"]);
              e = o(o(o({}, e), s), i);
            }
            return e;
          };
        function c(a, c) {
          for (
            var d,
              f = t.getProps(),
              p = t.getVariantContext(!0) || {},
              v = [],
              h = new Set(),
              m = {},
              g = 1 / 0,
              y = function (e) {
                var r = xo[e],
                  y = n[r],
                  x = null !== (d = f[r]) && void 0 !== d ? d : p[r],
                  b = E(x),
                  w = r === c ? y.isActive : null;
                !1 === w && (g = e);
                var A = x === p[r] && x !== f[r] && b;
                if (
                  (A && i && t.manuallyAnimateOnMount && (A = !1),
                  (y.protectedKeys = o({}, m)),
                  (!y.isActive && null === w) ||
                    (!x && !y.prevProp) ||
                    vi(x) ||
                    "boolean" === typeof x)
                )
                  return "continue";
                var P = (function (t, e) {
                    if ("string" === typeof e) return e !== t;
                    if (S(e)) return !ro(e, t);
                    return !1;
                  })(y.prevProp, x),
                  T = P || (r === c && y.isActive && !A && b) || (e > g && b),
                  V = Array.isArray(x) ? x : [x],
                  C = V.reduce(l, {});
                !1 === w && (C = {});
                var M = y.prevResolvedValues,
                  R = void 0 === M ? {} : M,
                  k = o(o({}, R), C),
                  j = function (t) {
                    (T = !0), h.delete(t), (y.needsAnimating[t] = !0);
                  };
                for (var O in k) {
                  var L = C[O],
                    D = R[O];
                  m.hasOwnProperty(O) ||
                    (L !== D
                      ? Ne(L) && Ne(D)
                        ? !ro(L, D) || P
                          ? j(O)
                          : (y.protectedKeys[O] = !0)
                        : void 0 !== L
                        ? j(O)
                        : h.add(O)
                      : void 0 !== L && h.has(O)
                      ? j(O)
                      : (y.protectedKeys[O] = !0));
                }
                (y.prevProp = x),
                  (y.prevResolvedValues = C),
                  y.isActive && (m = o(o({}, m), C)),
                  i && t.blockInitialAnimation && (T = !1),
                  T &&
                    !A &&
                    v.push.apply(
                      v,
                      u(
                        [],
                        s(
                          V.map(function (t) {
                            return { animation: t, options: o({ type: r }, a) };
                          })
                        ),
                        !1
                      )
                    );
              },
              x = 0;
            x < bo;
            x++
          )
            y(x);
          if (((r = o({}, m)), h.size)) {
            var b = {};
            h.forEach(function (e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (b[e] = n);
            }),
              v.push({ animation: b });
          }
          var w = Boolean(v.length);
          return (
            i && !1 === f.initial && !t.manuallyAnimateOnMount && (w = !1),
            (i = !1),
            w ? e(v) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (t) {
            return void 0 !== r[t];
          },
          animateChanges: c,
          setActive: function (e, r, i) {
            var o;
            return n[e].isActive === r
              ? Promise.resolve()
              : (null === (o = t.variantChildren) ||
                  void 0 === o ||
                  o.forEach(function (t) {
                    var n;
                    return null === (n = t.animationState) || void 0 === n
                      ? void 0
                      : n.setActive(e, r);
                  }),
                (n[e].isActive = r),
                c(i, e));
          },
          setAnimateFunction: function (n) {
            e = n(t);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Eo(t) {
        return (
          void 0 === t && (t = !1),
          {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var Ao = {
          animation: Ki(function (t) {
            var e = t.visualElement,
              n = t.animate;
            e.animationState || (e.animationState = So(e)),
              vi(n) &&
                (0, l.useEffect)(
                  function () {
                    return n.subscribe(e);
                  },
                  [n]
                );
          }),
          exit: Ki(function (t) {
            var e = t.custom,
              n = t.visualElement,
              r = s(Qi(), 2),
              i = r[0],
              o = r[1],
              a = (0, l.useContext)(g);
            (0, l.useEffect)(
              function () {
                var t, r;
                n.isPresent = i;
                var s =
                  null === (t = n.animationState) || void 0 === t
                    ? void 0
                    : t.setActive(yi.Exit, !i, {
                        custom:
                          null !==
                            (r =
                              null === a || void 0 === a ? void 0 : a.custom) &&
                          void 0 !== r
                            ? r
                            : e,
                      });
                !i && (null === s || void 0 === s || s.then(o));
              },
              [i]
            );
          }),
        },
        Po = (function () {
          function t(t, e, n) {
            var r = this,
              i = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function () {
                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                  var t = Co(r.lastMoveEventInfo, r.history),
                    e = null !== r.startEvent,
                    n = Un(t.offset, { x: 0, y: 0 }) >= 3;
                  if (e || n) {
                    var i = t.point,
                      a = Y().timestamp;
                    r.history.push(o(o({}, i), { timestamp: a }));
                    var s = r.handlers,
                      u = s.onStart,
                      l = s.onMove;
                    e ||
                      (u && u(r.lastMoveEvent, t),
                      (r.startEvent = r.lastMoveEvent)),
                      l && l(r.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function (t, e) {
                (r.lastMoveEvent = t),
                  (r.lastMoveEventInfo = To(e, r.transformPagePoint)),
                  Ei(t) && 0 === t.buttons
                    ? r.handlePointerUp(t, e)
                    : X.update(r.updatePoint, !0);
              }),
              (this.handlePointerUp = function (t, e) {
                r.end();
                var n = r.handlers,
                  i = n.onEnd,
                  o = n.onSessionEnd,
                  a = Co(To(e, r.transformPagePoint), r.history);
                r.startEvent && i && i(t, a), o && o(t, a);
              }),
              !(Ai(t) && t.touches.length > 1))
            ) {
              (this.handlers = e), (this.transformPagePoint = i);
              var a = To(Ci(t), this.transformPagePoint),
                s = a.point,
                u = Y().timestamp;
              this.history = [o(o({}, s), { timestamp: u })];
              var l = e.onSessionStart;
              l && l(t, Co(a, this.history)),
                (this.removeListeners = Jt(
                  Oi(window, "pointermove", this.handlePointerMove),
                  Oi(window, "pointerup", this.handlePointerUp),
                  Oi(window, "pointercancel", this.handlePointerUp)
                ));
            }
          }
          return (
            (t.prototype.updateHandlers = function (t) {
              this.handlers = t;
            }),
            (t.prototype.end = function () {
              this.removeListeners && this.removeListeners(),
                N.update(this.updatePoint);
            }),
            t
          );
        })();
      function To(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function Vo(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function Co(t, e) {
        var n = t.point;
        return {
          point: n,
          delta: Vo(n, Ro(e)),
          offset: Vo(n, Mo(e)),
          velocity: ko(e, 0.1),
        };
      }
      function Mo(t) {
        return t[0];
      }
      function Ro(t) {
        return t[t.length - 1];
      }
      function ko(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (
          var n = t.length - 1, r = null, i = Ro(t);
          n >= 0 && ((r = t[n]), !(i.timestamp - r.timestamp > Re(e)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var o = (i.timestamp - r.timestamp) / 1e3;
        if (0 === o) return { x: 0, y: 0 };
        var a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function jo(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0,
        };
      }
      function Oo(t, e) {
        var n,
          r = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min &&
            ((r = (n = s([i, r], 2))[0]), (i = n[1])),
          { min: r, max: i }
        );
      }
      var Lo = 0.35;
      function Do(t, e, n) {
        return { min: Io(t, e), max: Io(t, n) };
      }
      function Io(t, e) {
        var n;
        return "number" === typeof t
          ? t
          : null !== (n = t[e]) && void 0 !== n
          ? n
          : 0;
      }
      function Fo(t) {
        var e = t.top;
        return {
          x: { min: t.left, max: t.right },
          y: { min: e, max: t.bottom },
        };
      }
      function Uo(t, e) {
        return Fo(
          (function (t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var Bo = new WeakMap(),
        zo = (function () {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function (t, e) {
              var n = this,
                r = (void 0 === e ? {} : e).snapToCursor,
                i = void 0 !== r && r;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new Po(
                  t,
                  {
                    onSessionStart: function (t) {
                      n.stopAnimation(),
                        i && n.snapToCursor(Ci(t, "page").point);
                    },
                    onStart: function (t, e) {
                      var r,
                        i = n.getProps(),
                        o = i.drag,
                        a = i.dragPropagation,
                        s = i.onDragStart;
                      (!o ||
                        a ||
                        (n.openGlobalLock && n.openGlobalLock(),
                        (n.openGlobalLock = Ui(o)),
                        n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0),
                          (n.visualElement.projection.target = void 0)),
                        rr(function (t) {
                          var e,
                            r,
                            i = n.getAxisMotionValue(t).get() || 0;
                          if (Mt.test(i)) {
                            var o =
                              null ===
                                (r =
                                  null === (e = n.visualElement.projection) ||
                                  void 0 === e
                                    ? void 0
                                    : e.layout) || void 0 === r
                                ? void 0
                                : r.actual[t];
                            if (o) i = Bn(o) * (parseFloat(i) / 100);
                          }
                          n.originPoint[t] = i;
                        }),
                        null === s || void 0 === s || s(t, e),
                        null === (r = n.visualElement.animationState) ||
                          void 0 === r ||
                          r.setActive(yi.Drag, !0));
                    },
                    onMove: function (t, e) {
                      var r = n.getProps(),
                        i = r.dragPropagation,
                        o = r.dragDirectionLock,
                        a = r.onDirectionLock,
                        s = r.onDrag;
                      if (i || n.openGlobalLock) {
                        var u = e.offset;
                        if (o && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function (t, e) {
                              void 0 === e && (e = 10);
                              var n = null;
                              Math.abs(t.y) > e
                                ? (n = "y")
                                : Math.abs(t.x) > e && (n = "x");
                              return n;
                            })(u)),
                            void (
                              null !== n.currentDirection &&
                              (null === a ||
                                void 0 === a ||
                                a(n.currentDirection))
                            )
                          );
                        n.updateAxis("x", e.point, u),
                          n.updateAxis("y", e.point, u),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(t, e);
                      }
                    },
                    onSessionEnd: function (t, e) {
                      return n.stop(t, e);
                    },
                  },
                  {
                    transformPagePoint:
                      this.visualElement.getTransformPagePoint(),
                  }
                );
              }
            }),
            (t.prototype.stop = function (t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var r = e.velocity;
                this.startAnimation(r);
                var i = this.getProps().onDragEnd;
                null === i || void 0 === i || i(t, e);
              }
            }),
            (t.prototype.cancel = function () {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection &&
                  (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) ||
                  void 0 === e ||
                  e.setActive(yi.Drag, !1);
            }),
            (t.prototype.updateAxis = function (t, e, n) {
              var r = this.getProps().drag;
              if (n && No(t, r, this.currentDirection)) {
                var i = this.getAxisMotionValue(t),
                  o = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  (o = (function (t, e, n) {
                    var r = e.min,
                      i = e.max;
                    return (
                      void 0 !== r && t < r
                        ? (t = n ? G(r, t, n.min) : Math.max(t, r))
                        : void 0 !== i &&
                          t > i &&
                          (t = n ? G(i, t, n.max) : Math.min(t, i)),
                      t
                    );
                  })(o, this.constraints[t], this.elastic[t])),
                  i.set(o);
              }
            }),
            (t.prototype.resolveConstraints = function () {
              var t = this,
                e = this.getProps(),
                n = e.dragConstraints,
                r = e.dragElastic,
                i = (this.visualElement.projection || {}).layout,
                o = this.constraints;
              n && w(n)
                ? this.constraints ||
                  (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !i) &&
                    (function (t, e) {
                      var n = e.top,
                        r = e.left,
                        i = e.bottom,
                        o = e.right;
                      return { x: jo(t.x, r, o), y: jo(t.y, n, i) };
                    })(i.actual, n)),
                (this.elastic = (function (t) {
                  return (
                    void 0 === t && (t = Lo),
                    !1 === t ? (t = 0) : !0 === t && (t = Lo),
                    { x: Do(t, "left", "right"), y: Do(t, "top", "bottom") }
                  );
                })(r)),
                o !== this.constraints &&
                  i &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  rr(function (e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function (t, e) {
                        var n = {};
                        return (
                          void 0 !== e.min && (n.min = e.min - t.min),
                          void 0 !== e.max && (n.max = e.max - t.min),
                          n
                        );
                      })(i.actual[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function () {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints;
              if (!e || !w(e)) return !1;
              var r = e.current,
                i = this.visualElement.projection;
              if (!i || !i.layout) return !1;
              var o = (function (t, e, n) {
                  var r = Uo(t, n),
                    i = e.scroll;
                  return i && (Rn(r.x, i.x), Rn(r.y, i.y)), r;
                })(r, i.root, this.visualElement.getTransformPagePoint()),
                a = (function (t, e) {
                  return { x: Oo(t.x, e.x), y: Oo(t.y, e.y) };
                })(i.layout.actual, o);
              if (n) {
                var s = n(
                  (function (t) {
                    var e = t.x,
                      n = t.y;
                    return {
                      top: n.min,
                      right: e.max,
                      bottom: n.max,
                      left: e.min,
                    };
                  })(a)
                );
                (this.hasMutatedConstraints = !!s), s && (a = Fo(s));
              }
              return a;
            }),
            (t.prototype.startAnimation = function (t) {
              var e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                u = n.dragSnapToOrigin,
                l = n.onDragTransitionEnd,
                c = this.constraints || {},
                d = rr(function (n) {
                  var l;
                  if (No(n, r, e.currentDirection)) {
                    var d =
                      null !==
                        (l = null === c || void 0 === c ? void 0 : c[n]) &&
                      void 0 !== l
                        ? l
                        : {};
                    u && (d = { min: 0, max: 0 });
                    var f = a ? 200 : 1e6,
                      p = a ? 40 : 1e7,
                      v = o(
                        o(
                          {
                            type: "inertia",
                            velocity: i ? t[n] : 0,
                            bounceStiffness: f,
                            bounceDamping: p,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                          },
                          s
                        ),
                        d
                      );
                    return e.startAxisValueAnimation(n, v);
                  }
                });
              return Promise.all(d).then(l);
            }),
            (t.prototype.startAxisValueAnimation = function (t, e) {
              return dn(t, this.getAxisMotionValue(t), 0, e);
            }),
            (t.prototype.stopAnimation = function () {
              var t = this;
              rr(function (e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function (t) {
              var e,
                n,
                r = "_drag" + t.toUpperCase(),
                i = this.visualElement.getProps()[r];
              return (
                i ||
                this.visualElement.getValue(
                  t,
                  null !==
                    (n =
                      null === (e = this.visualElement.getProps().initial) ||
                      void 0 === e
                        ? void 0
                        : e[t]) && void 0 !== n
                    ? n
                    : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function (t) {
              var e = this;
              rr(function (n) {
                if (No(n, e.getProps().drag, e.currentDirection)) {
                  var r = e.visualElement.projection,
                    i = e.getAxisMotionValue(n);
                  if (r && r.layout) {
                    var o = r.layout.actual[n],
                      a = o.min,
                      s = o.max;
                    i.set(t[n] - G(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function () {
              var t,
                e = this,
                n = this.getProps(),
                r = n.drag,
                i = n.dragConstraints,
                o = this.visualElement.projection;
              if (w(i) && o && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                rr(function (t) {
                  var n = e.getAxisMotionValue(t);
                  if (n) {
                    var r = n.get();
                    a[t] = (function (t, e) {
                      var n = 0.5,
                        r = Bn(t),
                        i = Bn(e);
                      return (
                        i > r
                          ? (n = dt(e.min, e.max - r, t.min))
                          : r > i && (n = dt(t.min, t.max - i, e.min)),
                        nt(0, 1, n)
                      );
                    })({ min: r, max: r }, e.constraints[t]);
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s
                  ? s({}, "")
                  : "none"),
                  null === (t = o.root) || void 0 === t || t.updateScroll(),
                  o.updateLayout(),
                  this.resolveConstraints(),
                  rr(function (t) {
                    if (No(t, r, null)) {
                      var n = e.getAxisMotionValue(t),
                        i = e.constraints[t],
                        o = i.min,
                        s = i.max;
                      n.set(G(o, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function () {
              var t,
                e = this;
              Bo.set(this.visualElement, this);
              var n = Oi(
                  this.visualElement.getInstance(),
                  "pointerdown",
                  function (t) {
                    var n = e.getProps(),
                      r = n.drag,
                      i = n.dragListener;
                    r && (void 0 === i || i) && e.start(t);
                  }
                ),
                r = function () {
                  w(e.getProps().dragConstraints) &&
                    (e.constraints = e.resolveRefConstraints());
                },
                i = this.visualElement.projection,
                o = i.addEventListener("measure", r);
              i &&
                !i.layout &&
                (null === (t = i.root) || void 0 === t || t.updateScroll(),
                i.updateLayout()),
                r();
              var a = wi(window, "resize", function () {
                e.scalePositionWithinConstraints();
              });
              return (
                i.addEventListener("didUpdate", function (t) {
                  var n = t.delta,
                    r = t.hasLayoutChanged;
                  e.isDragging &&
                    r &&
                    (rr(function (t) {
                      var r = e.getAxisMotionValue(t);
                      r &&
                        ((e.originPoint[t] += n[t].translate),
                        r.set(r.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function () {
                  a(), n(), o();
                }
              );
            }),
            (t.prototype.getProps = function () {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = void 0 !== e && e,
                r = t.dragDirectionLock,
                i = void 0 !== r && r,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                l = void 0 !== u && u,
                c = t.dragElastic,
                d = void 0 === c ? Lo : c,
                f = t.dragMomentum,
                p = void 0 === f || f;
              return o(o({}, t), {
                drag: n,
                dragDirectionLock: i,
                dragPropagation: s,
                dragConstraints: l,
                dragElastic: d,
                dragMomentum: p,
              });
            }),
            t
          );
        })();
      function No(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var _o = {
          pan: Ki(function (t) {
            var e = t.onPan,
              n = t.onPanStart,
              r = t.onPanEnd,
              i = t.onPanSessionStart,
              o = t.visualElement,
              a = e || n || r || i,
              s = (0, l.useRef)(null),
              u = (0, l.useContext)(h).transformPagePoint,
              c = {
                onSessionStart: i,
                onStart: n,
                onMove: e,
                onEnd: function (t, e) {
                  (s.current = null), r && r(t, e);
                },
              };
            (0, l.useEffect)(function () {
              null !== s.current && s.current.updateHandlers(c);
            }),
              Li(
                o,
                "pointerdown",
                a &&
                  function (t) {
                    s.current = new Po(t, c, { transformPagePoint: u });
                  }
              ),
              _i(function () {
                return s.current && s.current.end();
              });
          }),
          drag: Ki(function (t) {
            var e = t.dragControls,
              n = t.visualElement,
              r = R(function () {
                return new zo(n);
              });
            (0, l.useEffect)(
              function () {
                return e && e.subscribe(r);
              },
              [r, e]
            ),
              (0, l.useEffect)(
                function () {
                  return r.addListeners();
                },
                [r]
              );
          }),
        },
        Ho = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var Wo = function (t) {
          var e = t.treeType,
            n = void 0 === e ? "" : e,
            r = t.build,
            i = t.getBaseTarget,
            a = t.makeTargetAnimatable,
            l = t.measureViewportBox,
            c = t.render,
            d = t.readValueFromInstance,
            f = t.removeValueFromRenderState,
            p = t.sortNodePosition,
            v = t.scrapeMotionValuesFromProps;
          return function (t, e) {
            var h = t.parent,
              m = t.props,
              g = t.presenceId,
              y = t.blockInitialAnimation,
              x = t.visualState;
            void 0 === e && (e = {});
            var b,
              w,
              S = !1,
              A = x.latestValues,
              P = x.renderState,
              C = (function () {
                var t = Ho.map(function () {
                    return new J();
                  }),
                  e = {},
                  n = {
                    clearAllListeners: function () {
                      return t.forEach(function (t) {
                        return t.clear();
                      });
                    },
                    updatePropListeners: function (t) {
                      Ho.forEach(function (r) {
                        var i,
                          o = "on" + r,
                          a = t[o];
                        null === (i = e[r]) || void 0 === i || i.call(e),
                          a && (e[r] = n[o](a));
                      });
                    },
                  };
                return (
                  t.forEach(function (t, e) {
                    (n["on" + Ho[e]] = function (e) {
                      return t.add(e);
                    }),
                      (n["notify" + Ho[e]] = function () {
                        for (var e = [], n = 0; n < arguments.length; n++)
                          e[n] = arguments[n];
                        t.notify.apply(t, u([], s(e), !1));
                      });
                  }),
                  n
                );
              })(),
              M = new Map(),
              R = new Map(),
              k = {},
              j = o({}, A);
            function O() {
              b && S && (L(), c(b, P, m.style, _.projection));
            }
            function L() {
              r(_, P, A, e, m);
            }
            function D() {
              C.notifyUpdate(A);
            }
            var I = v(m);
            for (var F in I) {
              var U = I[F];
              void 0 !== A[F] && et(U) && U.set(A[F], !1);
            }
            var B = T(m),
              z = V(m),
              _ = o(
                o(
                  {
                    treeType: n,
                    current: null,
                    depth: h ? h.depth + 1 : 0,
                    parent: h,
                    children: new Set(),
                    presenceId: g,
                    variantChildren: z ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null === h || void 0 === h ? void 0 : h.isMounted()
                    ),
                    blockInitialAnimation: y,
                    isMounted: function () {
                      return Boolean(b);
                    },
                    mount: function (t) {
                      (S = !0),
                        (b = _.current = t),
                        _.projection && _.projection.mount(t),
                        z &&
                          h &&
                          !B &&
                          (w =
                            null === h || void 0 === h
                              ? void 0
                              : h.addVariantChild(_)),
                        null === h || void 0 === h || h.children.add(_),
                        _.setProps(m);
                    },
                    unmount: function () {
                      var t;
                      null === (t = _.projection) ||
                        void 0 === t ||
                        t.unmount(),
                        N.update(D),
                        N.render(O),
                        R.forEach(function (t) {
                          return t();
                        }),
                        null === w || void 0 === w || w(),
                        null === h || void 0 === h || h.children.delete(_),
                        C.clearAllListeners(),
                        (b = void 0),
                        (S = !1);
                    },
                    addVariantChild: function (t) {
                      var e,
                        n = _.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) ||
                            void 0 === e ||
                            e.add(t),
                          function () {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function (t) {
                      return p && n === t.treeType
                        ? p(_.getInstance(), t.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return z
                        ? _
                        : null === h || void 0 === h
                        ? void 0
                        : h.getClosestVariantNode();
                    },
                    getLayoutId: function () {
                      return m.layoutId;
                    },
                    getInstance: function () {
                      return b;
                    },
                    getStaticValue: function (t) {
                      return A[t];
                    },
                    setStaticValue: function (t, e) {
                      return (A[t] = e);
                    },
                    getLatestValues: function () {
                      return A;
                    },
                    setVisibility: function (t) {
                      _.isVisible !== t &&
                        ((_.isVisible = t), _.scheduleRender());
                    },
                    makeTargetAnimatable: function (t, e) {
                      return void 0 === e && (e = !0), a(_, t, m, e);
                    },
                    measureViewportBox: function () {
                      return l(b, m);
                    },
                    addValue: function (t, e) {
                      _.hasValue(t) && _.removeValue(t),
                        M.set(t, e),
                        (A[t] = e.get()),
                        (function (t, e) {
                          var n = e.onChange(function (e) {
                              (A[t] = e), m.onUpdate && X.update(D, !1, !0);
                            }),
                            r = e.onRenderRequest(_.scheduleRender);
                          R.set(t, function () {
                            n(), r();
                          });
                        })(t, e);
                    },
                    removeValue: function (t) {
                      var e;
                      M.delete(t),
                        null === (e = R.get(t)) || void 0 === e || e(),
                        R.delete(t),
                        delete A[t],
                        f(t, P);
                    },
                    hasValue: function (t) {
                      return M.has(t);
                    },
                    getValue: function (t, e) {
                      var n = M.get(t);
                      return (
                        void 0 === n &&
                          void 0 !== e &&
                          ((n = tt(e)), _.addValue(t, n)),
                        n
                      );
                    },
                    forEachValue: function (t) {
                      return M.forEach(t);
                    },
                    readValue: function (t) {
                      var n;
                      return null !== (n = A[t]) && void 0 !== n
                        ? n
                        : d(b, t, e);
                    },
                    setBaseTarget: function (t, e) {
                      j[t] = e;
                    },
                    getBaseTarget: function (t) {
                      if (i) {
                        var e = i(m, t);
                        if (void 0 !== e && !et(e)) return e;
                      }
                      return j[t];
                    },
                  },
                  C
                ),
                {
                  build: function () {
                    return L(), P;
                  },
                  scheduleRender: function () {
                    X.render(O, !1, !0);
                  },
                  syncRender: O,
                  setProps: function (t) {
                    (t.transformTemplate || m.transformTemplate) &&
                      _.scheduleRender(),
                      (m = t),
                      C.updatePropListeners(t),
                      (k = (function (t, e, n) {
                        var r;
                        for (var i in e) {
                          var o = e[i],
                            a = n[i];
                          if (et(o)) t.addValue(i, o);
                          else if (et(a)) t.addValue(i, tt(o));
                          else if (a !== o)
                            if (t.hasValue(i)) {
                              var s = t.getValue(i);
                              !s.hasAnimated && s.set(o);
                            } else
                              t.addValue(
                                i,
                                tt(
                                  null !== (r = t.getStaticValue(i)) &&
                                    void 0 !== r
                                    ? r
                                    : o
                                )
                              );
                        }
                        for (var i in n) void 0 === e[i] && t.removeValue(i);
                        return e;
                      })(_, v(m), k));
                  },
                  getProps: function () {
                    return m;
                  },
                  getVariant: function (t) {
                    var e;
                    return null === (e = m.variants) || void 0 === e
                      ? void 0
                      : e[t];
                  },
                  getDefaultTransition: function () {
                    return m.transition;
                  },
                  getTransformPagePoint: function () {
                    return m.transformPagePoint;
                  },
                  getVariantContext: function (t) {
                    if ((void 0 === t && (t = !1), t))
                      return null === h || void 0 === h
                        ? void 0
                        : h.getVariantContext();
                    if (!B) {
                      var e =
                        (null === h || void 0 === h
                          ? void 0
                          : h.getVariantContext()) || {};
                      return void 0 !== m.initial && (e.initial = m.initial), e;
                    }
                    for (var n = {}, r = 0; r < Yo; r++) {
                      var i = qo[r],
                        o = m[i];
                      (E(o) || !1 === o) && (n[i] = o);
                    }
                    return n;
                  },
                }
              );
            return _;
          };
        },
        qo = u(["initial"], s(yo), !1),
        Yo = qo.length;
      function Xo(t) {
        return "string" === typeof t && t.startsWith("var(--");
      }
      var Go = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Zo(t, e, n) {
        void 0 === n && (n = 1),
          'Max CSS variable fallback depth detected in property "'.concat(
            t,
            '". This may indicate a circular fallback dependency.'
          );
        var r = s(
            (function (t) {
              var e = Go.exec(t);
              if (!e) return [,];
              var n = s(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          i = r[0],
          o = r[1];
        if (i) {
          var a = window.getComputedStyle(e).getPropertyValue(i);
          return a ? a.trim() : Xo(o) ? Zo(o, e, n + 1) : o;
        }
      }
      var $o,
        Ko = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Jo = function (t) {
          return Ko.has(t);
        },
        Qo = function (t, e) {
          t.set(e, !1), t.set(e);
        },
        ta = function (t) {
          return t === yt || t === Rt;
        };
      !(function (t) {
        (t.width = "width"),
          (t.height = "height"),
          (t.left = "left"),
          (t.right = "right"),
          (t.top = "top"),
          (t.bottom = "bottom");
      })($o || ($o = {}));
      var ea = function (t, e) {
          return parseFloat(t.split(", ")[e]);
        },
        na = function (t, e) {
          return function (n, r) {
            var i = r.transform;
            if ("none" === i || !i) return 0;
            var o = i.match(/^matrix3d\((.+)\)$/);
            if (o) return ea(o[1], e);
            var a = i.match(/^matrix\((.+)\)$/);
            return a ? ea(a[1], t) : 0;
          };
        },
        ra = new Set(["x", "y", "z"]),
        ia = or.filter(function (t) {
          return !ra.has(t);
        });
      var oa = {
          width: function (t, e) {
            var n = t.x,
              r = e.paddingLeft,
              i = void 0 === r ? "0" : r,
              o = e.paddingRight,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          height: function (t, e) {
            var n = t.y,
              r = e.paddingTop,
              i = void 0 === r ? "0" : r,
              o = e.paddingBottom,
              a = void 0 === o ? "0" : o;
            return n.max - n.min - parseFloat(i) - parseFloat(a);
          },
          top: function (t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function (t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function (t, e) {
            var n = t.y,
              r = e.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (t, e) {
            var n = t.x,
              r = e.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: na(4, 13),
          y: na(5, 14),
        },
        aa = function (t, e, n, r) {
          void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            (e = o({}, e)),
            (r = o({}, r));
          var i = Object.keys(e).filter(Jo),
            a = [],
            u = !1,
            l = [];
          if (
            (i.forEach(function (i) {
              var o = t.getValue(i);
              if (t.hasValue(i)) {
                var s,
                  c = n[i],
                  d = so(c),
                  f = e[i];
                if (Ne(f)) {
                  var p = f.length,
                    v = null === f[0] ? 1 : 0;
                  (c = f[v]), (d = so(c));
                  for (var h = v; h < p; h++)
                    s ? so(f[h]) : (s = so(f[h])) === d || (ta(d) && ta(s));
                } else s = so(f);
                if (d !== s)
                  if (ta(d) && ta(s)) {
                    var m = o.get();
                    "string" === typeof m && o.set(parseFloat(m)),
                      "string" === typeof f
                        ? (e[i] = parseFloat(f))
                        : Array.isArray(f) &&
                          s === Rt &&
                          (e[i] = f.map(parseFloat));
                  } else
                    (null === d || void 0 === d ? void 0 : d.transform) &&
                    (null === s || void 0 === s ? void 0 : s.transform) &&
                    (0 === c || 0 === f)
                      ? 0 === c
                        ? o.set(s.transform(c))
                        : (e[i] = d.transform(f))
                      : (u ||
                          ((a = (function (t) {
                            var e = [];
                            return (
                              ia.forEach(function (n) {
                                var r = t.getValue(n);
                                void 0 !== r &&
                                  (e.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (u = !0)),
                        l.push(i),
                        (r[i] = void 0 !== r[i] ? r[i] : e[i]),
                        Qo(o, f));
              }
            }),
            l.length)
          ) {
            var c = (function (t, e, n) {
              var r = e.measureViewportBox(),
                i = e.getInstance(),
                o = getComputedStyle(i),
                a = o.display,
                s = {};
              "none" === a && e.setStaticValue("display", t.display || "block"),
                n.forEach(function (t) {
                  s[t] = oa[t](r, o);
                }),
                e.syncRender();
              var u = e.measureViewportBox();
              return (
                n.forEach(function (n) {
                  var r = e.getValue(n);
                  Qo(r, s[n]), (t[n] = oa[n](u, o));
                }),
                t
              );
            })(e, t, l);
            return (
              a.length &&
                a.forEach(function (e) {
                  var n = s(e, 2),
                    r = n[0],
                    i = n[1];
                  t.getValue(r).set(i);
                }),
              t.syncRender(),
              { target: c, transitionEnd: r }
            );
          }
          return { target: e, transitionEnd: r };
        };
      function sa(t, e, n, r) {
        return (function (t) {
          return Object.keys(t).some(Jo);
        })(e)
          ? aa(t, e, n, r)
          : { target: e, transitionEnd: r };
      }
      var ua = function (t, e, n, r) {
        var i = (function (t, e, n) {
          var r,
            i = a(e, []),
            s = t.getInstance();
          if (!(s instanceof Element)) return { target: i, transitionEnd: n };
          for (var u in (n && (n = o({}, n)),
          t.forEachValue(function (t) {
            var e = t.get();
            if (Xo(e)) {
              var n = Zo(e, s);
              n && t.set(n);
            }
          }),
          i)) {
            var l = i[u];
            if (Xo(l)) {
              var c = Zo(l, s);
              c &&
                ((i[u] = c),
                n && ((null !== (r = n[u]) && void 0 !== r) || (n[u] = l)));
            }
          }
          return { target: i, transitionEnd: n };
        })(t, e, r);
        return sa(t, (e = i.target), n, (r = i.transitionEnd));
      };
      var la = {
          treeType: "dom",
          readValueFromInstance: function (t, e) {
            if (ur(e)) {
              var n = tn(e);
              return (n && n.default) || 0;
            }
            var r,
              i = ((r = t), window.getComputedStyle(r));
            return (Hr(e) ? i.getPropertyValue(e) : i[e]) || 0;
          },
          sortNodePosition: function (t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function (t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function (t, e) {
            return Uo(t, e.transformPagePoint);
          },
          resetTransform: function (t, e, n) {
            var r = n.transformTemplate;
            (e.style.transform = r ? r({}, "") : "none"), t.scheduleRender();
          },
          restoreTransform: function (t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function (t, e) {
            var n = e.vars,
              r = e.style;
            delete n[t], delete r[t];
          },
          makeTargetAnimatable: function (t, e, n, r) {
            var i = n.transformValues;
            void 0 === r && (r = !0);
            var s = e.transition,
              u = e.transitionEnd,
              l = a(e, ["transition", "transitionEnd"]),
              c = (function (t, e, n) {
                var r,
                  i,
                  o = {};
                for (var a in t)
                  o[a] =
                    null !== (r = po(a, e)) && void 0 !== r
                      ? r
                      : null === (i = n.getValue(a)) || void 0 === i
                      ? void 0
                      : i.get();
                return o;
              })(l, s || {}, t);
            if ((i && (u && (u = i(u)), l && (l = i(l)), c && (c = i(c))), r)) {
              !(function (t, e, n) {
                var r,
                  i,
                  o,
                  a,
                  s = Object.keys(e).filter(function (e) {
                    return !t.hasValue(e);
                  }),
                  u = s.length;
                if (u)
                  for (var l = 0; l < u; l++) {
                    var c = s[l],
                      d = e[c],
                      f = null;
                    Array.isArray(d) && (f = d[0]),
                      null === f &&
                        (f =
                          null !==
                            (i =
                              null !== (r = n[c]) && void 0 !== r
                                ? r
                                : t.readValue(c)) && void 0 !== i
                            ? i
                            : e[c]),
                      void 0 !== f &&
                        null !== f &&
                        ("string" === typeof f &&
                        (/^\-?\d*\.?\d+$/.test(f) || io(f))
                          ? (f = parseFloat(f))
                          : !lo(f) && Zt.test(d) && (f = en(c, d)),
                        t.addValue(c, tt(f)),
                        (null !== (o = (a = n)[c]) && void 0 !== o) ||
                          (a[c] = f),
                        t.setBaseTarget(c, f));
                  }
              })(t, l, c);
              var d = ua(t, l, c, u);
              (u = d.transitionEnd), (l = d.target);
            }
            return o({ transition: s, transitionEnd: u }, l);
          },
          scrapeMotionValuesFromProps: fi,
          build: function (t, e, n, r, i) {
            void 0 !== t.isVisible &&
              (e.style.visibility = t.isVisible ? "visible" : "hidden"),
              qr(e, n, r, i.transformTemplate);
          },
          render: li,
        },
        ca = Wo(la),
        da = Wo(
          o(o({}, la), {
            getBaseTarget: function (t, e) {
              return t[e];
            },
            readValueFromInstance: function (t, e) {
              var n;
              return ur(e)
                ? (null === (n = tn(e)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((e = ci.has(e) ? e : ui(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: pi,
            build: function (t, e, n, r, i) {
              ri(e, n, r, i.transformTemplate);
            },
            render: di,
          })
        ),
        fa = function (t, e) {
          return zr(t)
            ? da(e, { enableHardwareAcceleration: !1 })
            : ca(e, { enableHardwareAcceleration: !0 });
        };
      function pa(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var va = {
          correct: function (t, e) {
            if (!e.target) return t;
            if ("string" === typeof t) {
              if (!Rt.test(t)) return t;
              t = parseFloat(t);
            }
            var n = pa(t, e.target.x),
              r = pa(t, e.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        ha = "_$css",
        ma = {
          correct: function (t, e) {
            var n = e.treeScale,
              r = e.projectionDelta,
              i = t,
              o = t.includes("var("),
              a = [];
            o &&
              (t = t.replace(Go, function (t) {
                return a.push(t), ha;
              }));
            var s = Zt.parse(t);
            if (s.length > 5) return i;
            var u = Zt.createTransformer(t),
              l = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              d = r.y.scale * n.y;
            (s[0 + l] /= c), (s[1 + l] /= d);
            var f = G(c, d, 0.5);
            "number" === typeof s[2 + l] && (s[2 + l] /= f),
              "number" === typeof s[3 + l] && (s[3 + l] /= f);
            var p = u(s);
            if (o) {
              var v = 0;
              p = p.replace(ha, function () {
                var t = a[v];
                return v++, t;
              });
            }
            return p;
          },
        },
        ga = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            i(e, t),
            (e.prototype.componentDidMount = function () {
              var t,
                e = this,
                n = this.props,
                r = n.visualElement,
                i = n.layoutGroup,
                a = n.switchLayoutGroup,
                s = n.layoutId,
                u = r.projection;
              (t = ya),
                Object.assign(er, t),
                u &&
                  ((null === i || void 0 === i ? void 0 : i.group) &&
                    i.group.add(u),
                  (null === a || void 0 === a ? void 0 : a.register) &&
                    s &&
                    a.register(u),
                  u.root.didUpdate(),
                  u.addEventListener("animationComplete", function () {
                    e.safeToRemove();
                  }),
                  u.setOptions(
                    o(o({}, u.options), {
                      onExitComplete: function () {
                        return e.safeToRemove();
                      },
                    })
                  )),
                (vr.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function (t) {
              var e = this,
                n = this.props,
                r = n.layoutDependency,
                i = n.visualElement,
                o = n.drag,
                a = n.isPresent,
                s = i.projection;
              return s
                ? ((s.isPresent = a),
                  o || t.layoutDependency !== r || void 0 === r
                    ? s.willUpdate()
                    : this.safeToRemove(),
                  t.isPresent !== a &&
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        X.postRender(function () {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t
                            ? void 0
                            : t.members.length) || e.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (e.prototype.componentDidUpdate = function () {
              var t = this.props.visualElement.projection;
              t &&
                (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function () {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                r = t.switchLayoutGroup,
                i = e.projection;
              i &&
                (i.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) &&
                  n.group.remove(i),
                (null === r || void 0 === r ? void 0 : r.deregister) &&
                  r.deregister(i));
            }),
            (e.prototype.safeToRemove = function () {
              var t = this.props.safeToRemove;
              null === t || void 0 === t || t();
            }),
            (e.prototype.render = function () {
              return null;
            }),
            e
          );
        })(l.Component);
      var ya = {
          borderRadius: o(o({}, va), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: va,
          borderTopRightRadius: va,
          borderBottomLeftRadius: va,
          borderBottomRightRadius: va,
          boxShadow: ma,
        },
        xa = {
          measureLayout: function (t) {
            var e = s(Qi(), 2),
              n = e[0],
              r = e[1],
              i = (0, l.useContext)(Lr);
            return l.createElement(
              ga,
              o({}, t, {
                layoutGroup: i,
                switchLayoutGroup: (0, l.useContext)(Dr),
                isPresent: n,
                safeToRemove: r,
              })
            );
          },
        },
        ba = hr({
          attachResizeListener: function (t, e) {
            return (
              t.addEventListener("resize", e, { passive: !0 }),
              function () {
                return t.removeEventListener("resize", e);
              }
            );
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
        }),
        wa = { current: void 0 },
        Sa = hr({
          measureScroll: function (t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function () {
            if (!wa.current) {
              var t = new ba(0, {});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (wa.current = t);
            }
            return wa.current;
          },
          resetTransform: function (t, e) {
            t.style.transform = null !== e && void 0 !== e ? e : "none";
          },
        }),
        Ea = o(o(o(o({}, Ao), Ji), _o), xa),
        Aa = Ur(function (t, e) {
          return (function (t, e, n, r, i) {
            var a = e.forwardMotionProps,
              s = void 0 !== a && a,
              u = zr(t) ? xi : bi;
            return o(o({}, u), {
              preloadedFeatures: n,
              useRender: ai(s),
              createVisualElement: r,
              projectionNodeConstructor: i,
              Component: t,
            });
          })(t, e, Ea, fa, Sa);
        });
    },
    4730: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              o = Object.keys(t);
            for (r = 0; r < o.length; r++)
              (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      n.d(e, {
        Z: function () {
          return r;
        },
      });
    },
  },
]);
