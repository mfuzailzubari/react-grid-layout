webpackJsonp(
  [4],
  {
    56: function(e, t, n) {
      "use strict";
      (function(e) {
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function r(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        }
        function a(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        var i = (function() {
            var e =
              ("function" == typeof Symbol &&
                Symbol.for &&
                Symbol.for("react.element")) ||
              60103;
            return function(t, n, o, r) {
              var a = t && t.defaultProps,
                i = arguments.length - 3;
              if ((n || 0 === i || (n = {}), n && a))
                for (var l in a) void 0 === n[l] && (n[l] = a[l]);
              else n || (n = a || {});
              if (1 === i) n.children = r;
              else if (i > 1) {
                for (var s = Array(i), u = 0; u < i; u++)
                  s[u] = arguments[u + 3];
                n.children = s;
              }
              return {
                $$typeof: e,
                type: t,
                key: void 0 === o ? null : "" + o,
                ref: null,
                props: n,
                _owner: null
              };
            };
          })(),
          l = n(0),
          s = t(l),
          u = n(2),
          c = t(u),
          f = (0, u.WidthProvider)(c.default),
          d = (function(e) {
            function t(n) {
              o(this, t);
              var a = r(this, e.call(this, n));
              return (a.onLayoutChange = a.onLayoutChange.bind(a)), a;
            }
            return (
              a(t, e),
              (t.prototype.onLayoutChange = function(e) {
                this.props.onLayoutChange(e);
              }),
              (t.prototype.render = function() {
                return i(
                  f,
                  {
                    className: "layout",
                    onLayoutChange: this.onLayoutChange,
                    rowHeight: 30
                  },
                  void 0,
                  i(
                    "div",
                    { "data-grid": { x: 0, y: 0, w: 2, h: 3 } },
                    "1",
                    i("span", { className: "text" }, void 0, "1")
                  ),
                  i(
                    "div",
                    { "data-grid": { x: 2, y: 0, w: 4, h: 3, static: !0 } },
                    "2",
                    i("span", { className: "text" }, void 0, "2 - Static")
                  ),
                  i(
                    "div",
                    { "data-grid": { x: 6, y: 0, w: 2, h: 3 } },
                    "3",
                    i("span", { className: "text" }, void 0, "3")
                  ),
                  i(
                    "div",
                    {
                      "data-grid": {
                        x: 8,
                        y: 0,
                        w: 4,
                        h: 3,
                        draggableHandle: ".react-grid-dragHandleExample"
                      }
                    },
                    "4",
                    i(
                      "span",
                      { className: "text" },
                      void 0,
                      "4 - Draggable with Handle",
                      i("hr", {}),
                      i("hr", {}),
                      i(
                        "span",
                        { className: "react-grid-dragHandleExample" },
                        void 0,
                        "[DRAG HERE]"
                      ),
                      i("hr", {}),
                      i("hr", {})
                    )
                  )
                );
              }),
              t
            );
          })(s.default.PureComponent);
        (e.exports = d), n.c[n.s] === e && n(3)(e.exports);
      }.call(t, n(1)(e)));
    }
  },
  [56]
);
