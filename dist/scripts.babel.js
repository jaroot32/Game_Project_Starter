"use strict";
function _typeof(e) {
  function t(e) {
    return n.apply(this, arguments);
  }var n, r;function i(e) {
    return r.apply(this, arguments);
  }return (_typeof = "function" == typeof Symbol && "symbol" === _typeof(Symbol.iterator) ? (r = function (e) {
    return void 0 === e ? "undefined" : _typeof(e);
  }, i.toString = function () {
    return r.toString();
  }, i) : (n = function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e);
  }, t.toString = function () {
    return n.toString();
  }, t))(e);
}!function (e) {
  "function" == typeof define && define.amd ? define("scripts", e) : e();
}(function () {
  var r = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};var e,
      t = (function (e) {
    var t, n;t = "undefined" != typeof window ? window : r, n = function (C, e) {
      function g(e) {
        return null != e && e === e.window;
      }var t = [],
          E = C.document,
          r = Object.getPrototypeOf,
          s = t.slice,
          y = t.concat,
          u = t.push,
          i = t.indexOf,
          n = {},
          o = n.toString,
          v = n.hasOwnProperty,
          a = v.toString,
          l = a.call(Object),
          m = {},
          x = function (e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
      },
          c = { type: !0, src: !0, nonce: !0, noModule: !0 };function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement("script");if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);n.head.appendChild(o).parentNode.removeChild(o);
      }function w(e) {
        return null == e ? e + "" : "object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e ? n[o.call(e)] || "object" : void 0 === e ? "undefined" : _typeof(e);
      }var f = "3.4.1",
          k = function e(t, n) {
        return new e.fn.init(t, n);
      },
          p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);return !x(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
      }k.fn = k.prototype = { jquery: f, constructor: k, length: 0, toArray: function () {
          return s.call(this);
        }, get: function (e) {
          return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        }, pushStack: function (e) {
          var t = k.merge(this.constructor(), e);return t.prevObject = this, t;
        }, each: function (e) {
          return k.each(this, e);
        }, map: function (n) {
          return this.pushStack(k.map(this, function (e, t) {
            return n.call(e, t, e);
          }));
        }, slice: function () {
          return this.pushStack(s.apply(this, arguments));
        }, first: function () {
          return this.eq(0);
        }, last: function () {
          return this.eq(-1);
        }, eq: function (e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        }, end: function () {
          return this.prevObject || this.constructor();
        }, push: u, sort: t.sort, splice: t.splice }, k.extend = k.fn.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" === (void 0 === a ? "undefined" : _typeof(a)) || x(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));return a;
      }, k.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
          throw new Error(e);
        }, noop: function () {}, isPlainObject: function (e) {
          var t, n;return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
        }, isEmptyObject: function (e) {
          var t;for (t in e) return !1;return !0;
        }, globalEval: function (e, t) {
          b(e, { nonce: t && t.nonce });
        }, each: function (e, t) {
          var n,
              r = 0;if (d(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;return e;
        }, trim: function (e) {
          return null == e ? "" : (e + "").replace(p, "");
        }, makeArray: function (e, t) {
          var n = t || [];return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
        }, inArray: function (e, t, n) {
          return null == t ? -1 : i.call(t, e, n);
        }, merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];return e.length = i, e;
        }, grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);return r;
        }, map: function (e, t, n) {
          var r,
              i,
              o = 0,
              a = [];if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);return y.apply([], a);
        }, guid: 1, support: m }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      });var h = function (n) {
        function f(e, t, n) {
          var r = "0x" + t - 65536;return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }function i() {
          T();
        }var e,
            d,
            b,
            o,
            a,
            h,
            p,
            g,
            w,
            u,
            l,
            T,
            C,
            s,
            E,
            y,
            c,
            v,
            m,
            k = "sizzle" + 1 * new Date(),
            x = n.document,
            N = 0,
            r = 0,
            S = ue(),
            A = ue(),
            L = ue(),
            D = ue(),
            j = function (e, t) {
          return e === t && (l = !0), 0;
        },
            q = {}.hasOwnProperty,
            t = [],
            I = t.pop,
            H = t.push,
            O = t.push,
            R = t.slice,
            P = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;return -1;
        },
            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            _ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + _ + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + _ + "))|)" + M + "*\\]",
            B = ":(" + _ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            z = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            U = new RegExp("^" + M + "*," + M + "*"),
            X = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            V = new RegExp(M + "|>"),
            G = new RegExp(B),
            Y = new RegExp("^" + _ + "$"),
            Q = { ID: new RegExp("^#(" + _ + ")"), CLASS: new RegExp("^\\.(" + _ + ")"), TAG: new RegExp("^(" + _ + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + B), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + $ + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            J = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            re = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
          return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        },
            ae = be(function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, { dir: "parentNode", next: "legend" });try {
          O.apply(t = R.call(x.childNodes), x.childNodes), t[x.childNodes.length].nodeType;
        } catch (e) {
          O = { apply: t.length ? function (e, t) {
              H.apply(e, R.call(t));
            } : function (e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];);e.length = n - 1;
            } };
        }function se(t, e, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = e && e.ownerDocument,
              p = e ? e.nodeType : 9;if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;if (!r && ((e ? e.ownerDocument || e : x) !== C && T(e), e = e || C, E)) {
            if (11 !== p && (u = te.exec(t))) if (i = u[1]) {
              if (9 === p) {
                if (!(a = e.getElementById(i))) return n;if (a.id === i) return n.push(a), n;
              } else if (f && (a = f.getElementById(i)) && m(e, a) && a.id === i) return n.push(a), n;
            } else {
              if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(i)), n;
            }if (d.qsa && !D[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
              if (c = t, f = e, 1 === p && V.test(t)) {
                for ((s = e.getAttribute("id")) ? s = s.replace(ie, oe) : e.setAttribute("id", s = k), o = (l = h(t)).length; o--;) l[o] = "#" + s + " " + xe(l[o]);c = l.join(","), f = ne.test(t) && ve(e.parentNode) || e;
              }try {
                return O.apply(n, f.querySelectorAll(c)), n;
              } catch (e) {
                D(t, !0);
              } finally {
                s === k && e.removeAttribute("id");
              }
            }
          }return g(t.replace(z, "$1"), e, n, r);
        }function ue() {
          var r = [];return function e(t, n) {
            return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
          };
        }function le(e) {
          return e[k] = !0, e;
        }function ce(e) {
          var t = C.createElement("fieldset");try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null;
          }
        }function fe(e, t) {
          for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t;
        }function pe(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) for (; n = n.nextSibling;) if (n === t) return -1;return e ? 1 : -1;
        }function de(t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }function he(n) {
          return function (e) {
            var t = e.nodeName.toLowerCase();return ("input" === t || "button" === t) && e.type === n;
          };
        }function ge(t) {
          return function (e) {
            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
          };
        }function ye(a) {
          return le(function (o) {
            return o = +o, le(function (e, t) {
              for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
            });
          });
        }function ve(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }for (e in d = se.support = {}, a = se.isXML = function (e) {
          var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;return !J.test(t || n && n.nodeName || "HTML");
        }, T = se.setDocument = function (e) {
          var t,
              n,
              r = e ? e.ownerDocument || e : x;return r !== C && 9 === r.nodeType && r.documentElement && (s = (C = r).documentElement, E = !a(C), x !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), d.attributes = ce(function (e) {
            return e.className = "i", !e.getAttribute("className");
          }), d.getElementsByTagName = ce(function (e) {
            return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
          }), d.getElementsByClassName = ee.test(C.getElementsByClassName), d.getById = ce(function (e) {
            return s.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
          }), d.getById ? (b.filter.ID = function (e) {
            var t = e.replace(re, f);return function (e) {
              return e.getAttribute("id") === t;
            };
          }, b.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && E) {
              var n = t.getElementById(e);return n ? [n] : [];
            }
          }) : (b.filter.ID = function (e) {
            var n = e.replace(re, f);return function (e) {
              var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return t && t.value === n;
            };
          }, b.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && E) {
              var n,
                  r,
                  i,
                  o = t.getElementById(e);if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
              }return [];
            }
          }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
          } : function (e, t) {
            var n,
                r = [],
                i = 0,
                o = t.getElementsByTagName(e);if ("*" !== e) return o;for (; n = o[i++];) 1 === n.nodeType && r.push(n);return r;
          }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e);
          }, c = [], y = [], (d.qsa = ee.test(C.querySelectorAll)) && (ce(function (e) {
            s.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + $ + ")"), e.querySelectorAll("[id~=" + k + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || y.push(".#.+[+~]");
          }), ce(function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = C.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
          })), (d.matchesSelector = ee.test(v = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function (e) {
            d.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), c.push("!=", B);
          }), y = y.length && new RegExp(y.join("|")), c = c.length && new RegExp(c.join("|")), t = ee.test(s.compareDocumentPosition), m = t || ee.test(s.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) if (t === e) return !0;return !1;
          }, j = t ? function (e, t) {
            if (e === t) return l = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === x && m(x, e) ? -1 : t === C || t.ownerDocument === x && m(x, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
          } : function (e, t) {
            if (e === t) return l = !0, 0;var n,
                r = 0,
                i = e.parentNode,
                o = t.parentNode,
                a = [e],
                s = [t];if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;if (i === o) return pe(e, t);for (n = e; n = n.parentNode;) a.unshift(n);for (n = t; n = n.parentNode;) s.unshift(n);for (; a[r] === s[r];) r++;return r ? pe(a[r], s[r]) : a[r] === x ? -1 : s[r] === x ? 1 : 0;
          }), C;
        }, se.matches = function (e, t) {
          return se(e, null, null, t);
        }, se.matchesSelector = function (e, t) {
          if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !D[t + " "] && (!c || !c.test(t)) && (!y || !y.test(t))) try {
            var n = v.call(e, t);if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
          } catch (e) {
            D(t, !0);
          }return 0 < se(t, C, null, [e]).length;
        }, se.contains = function (e, t) {
          return (e.ownerDocument || e) !== C && T(e), m(e, t);
        }, se.attr = function (e, t) {
          (e.ownerDocument || e) !== C && T(e);var n = b.attrHandle[t.toLowerCase()],
              r = n && q.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, se.escape = function (e) {
          return (e + "").replace(ie, oe);
        }, se.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }, se.uniqueSort = function (e) {
          var t,
              n = [],
              r = 0,
              i = 0;if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
            for (; t = e[i++];) t === e[i] && (r = n.push(i));for (; r--;) e.splice(n[r], 1);
          }return u = null, e;
        }, o = se.getText = function (e) {
          var t,
              n = "",
              r = 0,
              i = e.nodeType;if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; t = e[r++];) n += o(t);return n;
        }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) {
              return e[1] = e[1].replace(re, f), e[3] = (e[3] || e[4] || e[5] || "").replace(re, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
            }, CHILD: function (e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
            }, PSEUDO: function (e) {
              var t,
                  n = !e[6] && e[2];return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
            } }, filter: { TAG: function (e) {
              var t = e.replace(re, f).toLowerCase();return "*" === e ? function () {
                return !0;
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
            }, CLASS: function (e) {
              var t = S[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && S(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
              });
            }, ATTR: function (n, r, i) {
              return function (e) {
                var t = se.attr(e, n);return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
              };
            }, CHILD: function (h, e, t, g, y) {
              var v = "nth" !== h.slice(0, 3),
                  m = "last" !== h.slice(-4),
                  x = "of-type" === e;return 1 === g && 0 === y ? function (e) {
                return !!e.parentNode;
              } : function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = v != m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;if (c) {
                  if (v) {
                    for (; l;) {
                      for (a = e; a = a[l];) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;u = l = "only" === h && !u && "nextSibling";
                    }return !0;
                  }if (u = [m ? c.firstChild : c.lastChild], m && p) {
                    for (d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();) if (1 === a.nodeType && ++d && a === e) {
                      i[h] = [N, s, d];break;
                    }
                  } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === d) for (; (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [N, d]), a !== e)););return (d -= y) === g || d % g == 0 && 0 <= d / g;
                }
              };
            }, PSEUDO: function (e, o) {
              var t,
                  a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                for (var n, r = a(e, o), i = r.length; i--;) e[n = P(e, r[i])] = !(t[n] = r[i]);
              }) : function (e) {
                return a(e, 0, t);
              }) : a;
            } }, pseudos: { not: le(function (e) {
              var r = [],
                  i = [],
                  s = p(e.replace(z, "$1"));return s[k] ? le(function (e, t, n, r) {
                for (var i, o = s(e, null, r, []), a = e.length; a--;) (i = o[a]) && (e[a] = !(t[a] = i));
              }) : function (e, t, n) {
                return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
              };
            }), has: le(function (t) {
              return function (e) {
                return 0 < se(t, e).length;
              };
            }), contains: le(function (t) {
              return t = t.replace(re, f), function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              };
            }), lang: le(function (n) {
              return Y.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(re, f).toLowerCase(), function (e) {
                var t;do {
                  if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                } while ((e = e.parentNode) && 1 === e.nodeType);return !1;
              };
            }), target: function (e) {
              var t = n.location && n.location.hash;return t && t.slice(1) === e.id;
            }, root: function (e) {
              return e === s;
            }, focus: function (e) {
              return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
              var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
            }, selected: function (e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            }, empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;return !0;
            }, parent: function (e) {
              return !b.pseudos.empty(e);
            }, header: function (e) {
              return Z.test(e.nodeName);
            }, input: function (e) {
              return K.test(e.nodeName);
            }, button: function (e) {
              var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
            }, text: function (e) {
              var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
            }, first: ye(function () {
              return [0];
            }), last: ye(function (e, t) {
              return [t - 1];
            }), eq: ye(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }), even: ye(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);return e;
            }), odd: ye(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);return e;
            }), lt: ye(function (e, t, n) {
              for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);return e;
            }), gt: ye(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);return e;
            }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e);for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);function me() {}function xe(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;return r;
        }function be(s, e, t) {
          var u = e.dir,
              l = e.next,
              c = l || u,
              f = t && "parentNode" === c,
              p = r++;return e.first ? function (e, t, n) {
            for (; e = e[u];) if (1 === e.nodeType || f) return s(e, t, n);return !1;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a = [N, p];if (n) {
              for (; e = e[u];) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else for (; e = e[u];) if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
              if ((r = i[c]) && r[0] === N && r[1] === p) return a[2] = r[2];if ((i[c] = a)[2] = s(e, t, n)) return !0;
            }return !1;
          };
        }function we(i) {
          return 1 < i.length ? function (e, t, n) {
            for (var r = i.length; r--;) if (!i[r](e, t, n)) return !1;return !0;
          } : i[0];
        }function Te(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));return a;
        }function Ce(d, h, g, y, v, e) {
          return y && !y[k] && (y = Ce(y)), v && !v[k] && (v = Ce(v, e)), le(function (e, t, n, r) {
            var i,
                o,
                a,
                s = [],
                u = [],
                l = t.length,
                c = e || function (e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);return n;
            }(h || "*", n.nodeType ? [n] : n, []),
                f = !d || !e && h ? c : Te(c, s, d, n, r),
                p = g ? v || (e ? d : l || y) ? [] : t : f;if (g && g(f, p, n, r), y) for (i = Te(p, u), y(i, [], n, r), o = i.length; o--;) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));if (e) {
              if (v || d) {
                if (v) {
                  for (i = [], o = p.length; o--;) (a = p[o]) && i.push(f[o] = a);v(null, p = [], i, r);
                }for (o = p.length; o--;) (a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
              }
            } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : O.apply(t, p);
          });
        }function Ee(e) {
          for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
            return e === i;
          }, a, !0), l = be(function (e) {
            return -1 < P(i, e);
          }, a, !0), c = [function (e, t, n) {
            var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));return i = null, r;
          }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
            if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
              for (n = ++s; n < r && !b.relative[e[n].type]; n++);return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(z, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
            }c.push(t);
          }return we(c);
        }return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
          var n,
              r,
              i,
              o,
              a,
              s,
              u,
              l = A[e + " "];if (l) return t ? 0 : l.slice(0);for (a = e, s = [], u = b.preFilter; a;) {
            for (o in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), a = a.slice(n.length)), b.filter) !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length));if (!n) break;
          }return t ? a.length : a ? se.error(e) : A(e, s).slice(0);
        }, p = se.compile = function (e, t) {
          var n,
              r = [],
              i = [],
              o = L[e + " "];if (!o) {
            for (n = (t = t || h(e)).length; n--;) (o = Ee(t[n]))[k] ? r.push(o) : i.push(o);(o = L(e, function (y, v) {
              function e(e, t, n, r, i) {
                var o,
                    a,
                    s,
                    u = 0,
                    l = "0",
                    c = e && [],
                    f = [],
                    p = w,
                    d = e || x && b.find.TAG("*", i),
                    h = N += null == p ? 1 : Math.random() || .1,
                    g = d.length;for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                  if (x && o) {
                    for (a = 0, t || o.ownerDocument === C || (T(o), n = !E); s = y[a++];) if (s(o, t || C, n)) {
                      r.push(o);break;
                    }i && (N = h);
                  }m && ((o = !s && o) && u--, e && c.push(o));
                }if (u += l, m && l !== u) {
                  for (a = 0; s = v[a++];) s(c, f, t, n);if (e) {
                    if (0 < u) for (; l--;) c[l] || f[l] || (f[l] = I.call(r));f = Te(f);
                  }O.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r);
                }return i && (N = h, w = p), c;
              }var m = 0 < v.length,
                  x = 0 < y.length;return m ? le(e) : e;
            }(i, r))).selector = e;
          }return o;
        }, g = se.select = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = "function" == typeof e && e,
              c = !r && h(e = l.selector || e);if (n = n || [], 1 === c.length) {
            if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
              if (!(t = (b.find.ID(a.matches[0].replace(re, f), t) || [])[0])) return n;l && (t = t.parentNode), e = e.slice(o.shift().value.length);
            }for (i = Q.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);) if ((u = b.find[s]) && (r = u(a.matches[0].replace(re, f), ne.test(o[0].type) && ve(t.parentNode) || t))) {
              if (o.splice(i, 1), !(e = r.length && xe(o))) return O.apply(n, r), n;break;
            }
          }return (l || p(e, c))(r, t, !E, n, !t || ne.test(e) && ve(t.parentNode) || t), n;
        }, d.sortStable = k.split("").sort(j).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        }), ce(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), d.attributes && ce(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ce(function (e) {
          return null == e.getAttribute("disabled");
        }) || fe($, function (e, t, n) {
          var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), se;
      }(C);k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;function T(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
          if (i && k(e).is(n)) break;r.push(e);
        }return r;
      }function N(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);return n;
      }var S = k.expr.match.needsContext;function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e, n, r) {
        return x(n) ? k.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        }) : n.nodeType ? k.grep(e, function (e) {
          return e === n !== r;
        }) : "string" != typeof n ? k.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        }) : k.filter(n, e, r);
      }k.filter = function (e, t, n) {
        var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
          return 1 === e.nodeType;
        }));
      }, k.fn.extend({ find: function (e) {
          var t,
              n,
              r = this.length,
              i = this;if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
            for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
          }));for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);return 1 < r ? k.uniqueSort(n) : n;
        }, filter: function (e) {
          return this.pushStack(D(this, e || [], !1));
        }, not: function (e) {
          return this.pushStack(D(this, e || [], !0));
        }, is: function (e) {
          return !!D(this, "string" == typeof e && S.test(e) ? k(e) : e || [], !1).length;
        } });var j,
          q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init = function (e, t, n) {
        var r, i;if (!e) return this;if (n = n || j, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
          if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), L.test(r[1]) && k.isPlainObject(t)) for (r in t) x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);return this;
        }return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
      }).prototype = k.fn, j = k(E);var I = /^(?:parents|prev(?:Until|All))/,
          H = { children: !0, contents: !0, next: !0, prev: !0 };function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);return e;
      }k.fn.extend({ has: function (e) {
          var t = k(e, this),
              n = t.length;return this.filter(function () {
            for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
          });
        }, closest: function (e, t) {
          var n,
              r = 0,
              i = this.length,
              o = [],
              a = "string" != typeof e && k(e);if (!S.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);break;
          }return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
        }, index: function (e) {
          return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function (e, t) {
          return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        }, addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        } }), k.each({ parent: function (e) {
          var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
        }, parents: function (e) {
          return T(e, "parentNode");
        }, parentsUntil: function (e, t, n) {
          return T(e, "parentNode", n);
        }, next: function (e) {
          return O(e, "nextSibling");
        }, prev: function (e) {
          return O(e, "previousSibling");
        }, nextAll: function (e) {
          return T(e, "nextSibling");
        }, prevAll: function (e) {
          return T(e, "previousSibling");
        }, nextUntil: function (e, t, n) {
          return T(e, "nextSibling", n);
        }, prevUntil: function (e, t, n) {
          return T(e, "previousSibling", n);
        }, siblings: function (e) {
          return N((e.parentNode || {}).firstChild, e);
        }, children: function (e) {
          return N(e.firstChild);
        }, contents: function (e) {
          return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
        } }, function (r, i) {
        k.fn[r] = function (e, t) {
          var n = k.map(this, i, e);return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (H[r] || k.uniqueSort(n), I.test(r) && n.reverse()), this.pushStack(n);
        };
      });var R = /[^\x20\t\r\n\f]+/g;function P(e) {
        return e;
      }function $(e) {
        throw e;
      }function M(e, t, n, r) {
        var i;try {
          e && x(i = e.promise) ? i.call(e).done(t).fail(n) : e && x(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }k.Callbacks = function (r) {
        r = "string" == typeof r ? function (e) {
          var n = {};return k.each(e.match(R) || [], function (e, t) {
            n[t] = !0;
          }), n;
        }(r) : k.extend({}, r);function n() {
          for (o = o || r.once, t = i = !0; s.length; u = -1) for (e = s.shift(); ++u < a.length;) !1 === a[u].apply(e[0], e[1]) && r.stopOnFalse && (u = a.length, e = !1);r.memory || (e = !1), i = !1, o && (a = e ? [] : "");
        }var i,
            e,
            t,
            o,
            a = [],
            s = [],
            u = -1,
            l = { add: function () {
            return a && (e && !i && (u = a.length - 1, s.push(e)), function n(e) {
              k.each(e, function (e, t) {
                x(t) ? r.unique && l.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t);
              });
            }(arguments), e && !i && n()), this;
          }, remove: function () {
            return k.each(arguments, function (e, t) {
              for (var n; -1 < (n = k.inArray(t, a, n));) a.splice(n, 1), n <= u && u--;
            }), this;
          }, has: function (e) {
            return e ? -1 < k.inArray(e, a) : 0 < a.length;
          }, empty: function () {
            return a = a && [], this;
          }, disable: function () {
            return o = s = [], a = e = "", this;
          }, disabled: function () {
            return !a;
          }, lock: function () {
            return o = s = [], e || i || (a = e = ""), this;
          }, locked: function () {
            return !!o;
          }, fireWith: function (e, t) {
            return o || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), i || n()), this;
          }, fire: function () {
            return l.fireWith(this, arguments), this;
          }, fired: function () {
            return !!t;
          } };return l;
      }, k.extend({ Deferred: function (e) {
          var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
              i = "pending",
              a = { state: function () {
              return i;
            }, always: function () {
              return s.done(arguments).fail(arguments), this;
            }, catch: function (e) {
              return a.then(null, e);
            }, pipe: function () {
              var i = arguments;return k.Deferred(function (r) {
                k.each(o, function (e, t) {
                  var n = x(i[t[4]]) && i[t[4]];s[t[1]](function () {
                    var e = n && n.apply(this, arguments);e && x(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }), i = null;
              }).promise();
            }, then: function (t, n, r) {
              var u = 0;function l(i, o, a, s) {
                return function () {
                  function e() {
                    var e, t;if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");t = e && ("object" === (void 0 === e ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, x(t) ? s ? t.call(e, l(u, o, P, s), l(u, o, $, s)) : (u++, t.call(e, l(u, o, P, s), l(u, o, $, s), l(u, o, P, o.notifyWith))) : (a !== P && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                    }
                  }var n = this,
                      r = arguments,
                      t = s ? e : function () {
                    try {
                      e();
                    } catch (e) {
                      k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== $ && (n = void 0, r = [e]), o.rejectWith(n, r));
                    }
                  };i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
                };
              }return k.Deferred(function (e) {
                o[0][3].add(l(0, e, x(r) ? r : P, e.notifyWith)), o[1][3].add(l(0, e, x(t) ? t : P)), o[2][3].add(l(0, e, x(n) ? n : $));
              }).promise();
            }, promise: function (e) {
              return null != e ? k.extend(e, a) : a;
            } },
              s = {};return k.each(o, function (e, t) {
            var n = t[2],
                r = t[5];a[t[1]] = n.add, r && n.add(function () {
              i = r;
            }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
              return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
            }, s[t[0] + "With"] = n.fireWith;
          }), a.promise(s), e && e.call(s, s), s;
        }, when: function (e) {
          function t(t) {
            return function (e) {
              i[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(i, o);
            };
          }var n = arguments.length,
              r = n,
              i = Array(r),
              o = s.call(arguments),
              a = k.Deferred();if (n <= 1 && (M(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || x(o[r] && o[r].then))) return a.then();for (; r--;) M(o[r], t(r), a.reject);return a.promise();
        } });var _ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && _.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }, k.readyException = function (e) {
        C.setTimeout(function () {
          throw e;
        });
      };var W = k.Deferred();function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
      }k.fn.ready = function (e) {
        return W.then(e).catch(function (e) {
          k.readyException(e);
        }), this;
      }, k.extend({ isReady: !1, readyWait: 1, ready: function (e) {
          (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || W.resolveWith(E, [k]);
        } }), k.ready.then = W.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));function F(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;if ("object" === w(n)) for (s in i = !0, n) F(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, x(r) || (a = !0), l && (t = a ? (t.call(e, r), null) : (l = t, function (e, t, n) {
          return l.call(k(e), n);
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
      }var z = /^-ms-/,
          U = /-([a-z])/g;function X(e, t) {
        return t.toUpperCase();
      }function V(e) {
        return e.replace(z, "ms-").replace(U, X);
      }function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      }function Y() {
        this.expando = k.expando + Y.uid++;
      }Y.uid = 1, Y.prototype = { cache: function (e) {
          var t = e[this.expando];return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
        }, set: function (e, t, n) {
          var r,
              i = this.cache(e);if ("string" == typeof t) i[V(t)] = n;else for (r in t) i[V(r)] = t[r];return i;
        }, get: function (e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
        }, access: function (e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        }, remove: function (e, t) {
          var n,
              r = e[this.expando];if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;for (; n--;) delete r[t[n]];
            }void 0 !== t && !k.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        }, hasData: function (e) {
          var t = e[this.expando];return void 0 !== t && !k.isEmptyObject(t);
        } };var Q = new Y(),
          J = new Y(),
          K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          Z = /[A-Z]/g;function ee(e, t, n) {
        var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
          try {
            n = function (e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : K.test(e) ? JSON.parse(e) : e);
            }(n);
          } catch (e) {}J.set(e, t, n);
        } else n = void 0;return n;
      }k.extend({ hasData: function (e) {
          return J.hasData(e) || Q.hasData(e);
        }, data: function (e, t, n) {
          return J.access(e, t, n);
        }, removeData: function (e, t) {
          J.remove(e, t);
        }, _data: function (e, t, n) {
          return Q.access(e, t, n);
        }, _removeData: function (e, t) {
          Q.remove(e, t);
        } }), k.fn.extend({ data: function (n, e) {
          var t,
              r,
              i,
              o = this[0],
              a = o && o.attributes;if (void 0 !== n) return "object" === (void 0 === n ? "undefined" : _typeof(n)) ? this.each(function () {
            J.set(this, n);
          }) : F(this, function (e) {
            var t;if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;this.each(function () {
              J.set(this, n, e);
            });
          }, null, e, 1 < arguments.length, null, !0);if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
            for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));Q.set(o, "hasDataAttrs", !0);
          }return i;
        }, removeData: function (e) {
          return this.each(function () {
            J.remove(this, e);
          });
        } }), k.extend({ queue: function (e, t, n) {
          var r;if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
        }, dequeue: function (e, t) {
          t = t || "fx";var n = k.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = k._queueHooks(e, t);"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
            k.dequeue(e, t);
          }, o)), !r && o && o.empty.fire();
        }, _queueHooks: function (e, t) {
          var n = t + "queueHooks";return Q.get(e, n) || Q.access(e, n, { empty: k.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }) });
        } }), k.fn.extend({ queue: function (t, n) {
          var e = 2;return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
            var e = k.queue(this, t, n);k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
          });
        }, dequeue: function (e) {
          return this.each(function () {
            k.dequeue(this, e);
          });
        }, clearQueue: function (e) {
          return this.queue(e || "fx", []);
        }, promise: function (e, t) {
          function n() {
            --i || o.resolveWith(a, [a]);
          }var r,
              i = 1,
              o = k.Deferred(),
              a = this,
              s = this.length;for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (r = Q.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));return n(), o.promise(t);
        } });var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
          re = ["Top", "Right", "Bottom", "Left"],
          ie = E.documentElement,
          oe = function (e) {
        return k.contains(e.ownerDocument, e);
      },
          ae = { composed: !0 };ie.getRootNode && (oe = function (e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
      });function se(e, t, n, r) {
        var i,
            o,
            a = {};for (o in t) a[o] = e.style[o], e.style[o] = t[o];for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];return i;
      }var ue = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
      };function le(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ? function () {
          return r.cur();
        } : function () {
          return k.css(e, t, "");
        },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--;) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;c *= 2, k.style(e, t, c + l), n = n || [];
        }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
      }var ce = {};function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ue(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);return e;
      }k.fn.extend({ show: function () {
          return fe(this, !0);
        }, hide: function () {
          return fe(this);
        }, toggle: function (e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            ue(this) ? k(this).show() : k(this).hide();
          });
        } });var pe = /^(?:checkbox|radio)$/i,
          de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          he = /^$|^module$|\/(?:java|ecma)script/i,
          ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function ye(e, t) {
        var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
      }function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
      }ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;var me,
          xe,
          be = /<|&#?\w+;/;function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
          for (a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));for (f.textContent = "", d = 0; o = p[d++];) if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) for (c = 0; o = a[c++];) he.test(o.type || "") && n.push(o);return f;
      }me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), m.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;var Te = /^key/,
          Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ee = /^([^.]*)(?:\.(.+)|)/;function ke() {
        return !0;
      }function Ne() {
        return !1;
      }function Se(e, t) {
        return e === function () {
          try {
            return E.activeElement;
          } catch (e) {}
        }() == ("focus" === t);
      }function Ae(e, t, n, r, i, o) {
        var a, s;if ("object" === (void 0 === t ? "undefined" : _typeof(t))) {
          for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);return e;
        }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne;else if (!i) return e;return 1 === o && (a = i, (i = function (e) {
          return k().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
          k.event.add(this, t, i, r, n);
        });
      }function Le(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, { namespace: !1, handler: function (e) {
            var t,
                n,
                r = Q.get(this, i);if (1 & e.isTrigger && this[i]) {
              if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
            } else r.length && (Q.set(this, i, { value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
          } })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
      }k.event = { global: {}, add: function (t, e, n, r, i) {
          var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              y = Q.get(t);if (y) for (n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
            return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
          }), l = (e = (e || "").match(R) || [""]).length; l--;) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
        }, remove: function (e, t, n, r, i) {
          var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              y = Q.hasData(e) && Q.get(e);if (y && (u = y.events)) {
            for (l = (t = (t || "").match(R) || [""]).length; l--;) if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
              for (f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || k.removeEvent(e, d, y.handle), delete u[d]);
            } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);k.isEmptyObject(u) && Q.remove(e, "handle events");
          }
        }, dispatch: function (e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s = k.event.fix(e),
              u = new Array(arguments.length),
              l = (Q.get(this, "events") || {})[s.type] || [],
              c = k.event.special[s.type] || {};for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
            for (a = k.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped();) for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));return c.postDispatch && c.postDispatch.call(this, s), s.result;
          }
        }, handlers: function (e, t) {
          var n,
              r,
              i,
              o,
              a,
              s = [],
              u = t.delegateCount,
              l = e.target;if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);o.length && s.push({ elem: l, handlers: o });
          }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        }, addProp: function (t, e) {
          Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: x(e) ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            } : function () {
              if (this.originalEvent) return this.originalEvent[t];
            }, set: function (e) {
              Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
            } });
        }, fix: function (e) {
          return e[k.expando] ? e : new k.Event(e);
        }, special: { load: { noBubble: !0 }, click: { setup: function (e) {
              var t = this || e;return pe.test(t.type) && t.click && A(t, "input") && Le(t, "click", ke), !1;
            }, trigger: function (e) {
              var t = this || e;return pe.test(t.type) && t.click && A(t, "input") && Le(t, "click"), !0;
            }, _default: function (e) {
              var t = e.target;return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
            } }, beforeunload: { postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            } } } }, k.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }, k.Event = function (e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
      }, k.Event.prototype = { constructor: k.Event, isDefaultPrevented: Ne, isPropagationStopped: Ne, isImmediatePropagationStopped: Ne, isSimulated: !1, preventDefault: function () {
          var e = this.originalEvent;this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
        }, stopPropagation: function () {
          var e = this.originalEvent;this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
        }, stopImmediatePropagation: function () {
          var e = this.originalEvent;this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        } }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) {
          var t = e.button;return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        } }, k.event.addProp), k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        k.event.special[e] = { setup: function () {
            return Le(this, e, Se), !1;
          }, trigger: function () {
            return Le(this, e), !0;
          }, delegateType: t };
      }), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
        k.event.special[e] = { delegateType: i, bindType: i, handle: function (e) {
            var t,
                n = e.relatedTarget,
                r = e.handleObj;return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
          } };
      }), k.fn.extend({ on: function (e, t, n, r) {
          return Ae(this, e, t, n, r);
        }, one: function (e, t, n, r) {
          return Ae(this, e, t, n, r, 1);
        }, off: function (e, t, n) {
          var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" !== (void 0 === e ? "undefined" : _typeof(e))) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function () {
            k.event.remove(this, e, n, t);
          });for (i in e) this.off(i, t, e[i]);return this;
        } });var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          je = /<script|<style|<link/i,
          qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function He(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
      }function Oe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
      }function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }function Pe(e, t) {
        var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
          if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
        }
      }function $e(n, r, i, o) {
        r = y.apply([], r);var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = x(d);if (h || 1 < f && "string" == typeof d && !m.checkClone && qe.test(d)) return n.each(function (e) {
          var t = n.eq(e);h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o);
        });if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
          for (s = (a = k.map(ye(e, "script"), Oe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ye(u, "script"))), i.call(n[c], u, c);if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : b(u.textContent.replace(Ie, ""), u, l));
        }return n;
      }function Me(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ye(r)), r.parentNode && (n && oe(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));return e;
      }k.extend({ htmlPrefilter: function (e) {
          return e.replace(De, "<$1></$2>");
        }, clone: function (e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c = e.cloneNode(!0),
              f = oe(e);if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);if (t) if (n) for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);else Pe(e, c);return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c;
        }, cleanData: function (e) {
          for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) if (G(n)) {
            if (t = n[Q.expando]) {
              if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);n[Q.expando] = void 0;
            }n[J.expando] && (n[J.expando] = void 0);
          }
        } }), k.fn.extend({ detach: function (e) {
          return Me(this, e, !0);
        }, remove: function (e) {
          return Me(this, e);
        }, text: function (e) {
          return F(this, function (e) {
            return void 0 === e ? k.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
            });
          }, null, e, arguments.length);
        }, append: function () {
          return $e(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e);
          });
        }, prepend: function () {
          return $e(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = He(this, e);t.insertBefore(e, t.firstChild);
            }
          });
        }, before: function () {
          return $e(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        }, after: function () {
          return $e(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        }, empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ye(e, !1)), e.textContent = "");return this;
        }, clone: function (e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return k.clone(this, e, t);
          });
        }, html: function (e) {
          return F(this, function (e) {
            var t = this[0] || {},
                n = 0,
                r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !je.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = k.htmlPrefilter(e);try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ye(t, !1)), t.innerHTML = e);t = 0;
              } catch (e) {}
            }t && this.empty().append(e);
          }, null, e, arguments.length);
        }, replaceWith: function () {
          var n = [];return $e(this, arguments, function (e) {
            var t = this.parentNode;k.inArray(this, n) < 0 && (k.cleanData(ye(this)), t && t.replaceChild(e, this));
          }, n);
        } }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
        k.fn[e] = function (e) {
          for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());return this.pushStack(n);
        };
      });var _e,
          We,
          Be,
          Fe,
          ze,
          Ue,
          Xe,
          Ve = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
          Ge = function (e) {
        var t = e.ownerDocument.defaultView;return t && t.opener || (t = C), t.getComputedStyle(e);
      },
          Ye = new RegExp(re.join("|"), "i");function Qe() {
        if (Xe) {
          Ue.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Xe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(Ue).appendChild(Xe);var e = C.getComputedStyle(Xe);_e = "1%" !== e.top, ze = 12 === Je(e.marginLeft), Xe.style.right = "60%", Fe = 36 === Je(e.right), We = 36 === Je(e.width), Xe.style.position = "absolute", Be = 12 === Je(Xe.offsetWidth / 3), ie.removeChild(Ue), Xe = null;
        }
      }function Je(e) {
        return Math.round(parseFloat(e));
      }function Ke(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;return (n = n || Ge(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !m.pixelBoxStyles() && Ve.test(a) && Ye.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
      }function Ze(e, t) {
        return { get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
          } };
      }Ue = E.createElement("div"), (Xe = E.createElement("div")).style && (Xe.style.backgroundClip = "content-box", Xe.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === Xe.style.backgroundClip, k.extend(m, { boxSizingReliable: function () {
          return Qe(), We;
        }, pixelBoxStyles: function () {
          return Qe(), Fe;
        }, pixelPosition: function () {
          return Qe(), _e;
        }, reliableMarginLeft: function () {
          return Qe(), ze;
        }, scrollboxSize: function () {
          return Qe(), Be;
        } }));var et = ["Webkit", "Moz", "ms"],
          tt = E.createElement("div").style,
          nt = {};function rt(e) {
        var t = k.cssProps[e] || nt[e];return t || (e in tt ? e : nt[e] = function (e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;) if ((e = et[n] + t) in tt) return e;
        }(e) || e);
      }var it = /^(none|table(?!-c[ea]).+)/,
          ot = /^--/,
          at = { position: "absolute", visibility: "hidden", display: "block" },
          st = { letterSpacing: "0", fontWeight: "400" };function ut(e, t, n) {
        var r = ne.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }function lt(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
      }function ct(e, t, n) {
        var r = Ge(e),
            i = (!m.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = Ke(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);if (Ve.test(a)) {
          if (!n) return a;a = "auto";
        }return (!m.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + lt(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
      }function ft(e, t, n, r, i) {
        return new ft.prototype.init(e, t, n, r, i);
      }k.extend({ cssHooks: { opacity: { get: function (e, t) {
              if (t) {
                var n = Ke(e, "opacity");return "" === n ? "1" : n;
              }
            } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
                o,
                a,
                s = V(t),
                u = ot.test(t),
                l = e.style;if (u || (t = rt(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" === (o = void 0 === n ? "undefined" : _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
          }
        }, css: function (e, t, n, r) {
          var i,
              o,
              a,
              s = V(t);return ot.test(t) || (t = rt(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ke(e, t, r)), "normal" === i && t in st && (i = st[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        } }), k.each(["height", "width"], function (e, u) {
        k.cssHooks[u] = { get: function (e, t, n) {
            if (t) return !it.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, u, n) : se(e, at, function () {
              return ct(e, u, n);
            });
          }, set: function (e, t, n) {
            var r,
                i = Ge(e),
                o = !m.scrollboxSize() && "absolute" === i.position,
                a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                s = n ? lt(e, u, n, a, i) : 0;return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - lt(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), ut(0, t, s);
          } };
      }), k.cssHooks.marginLeft = Ze(m.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, { marginLeft: 0 }, function () {
          return e.getBoundingClientRect().left;
        })) + "px";
      }), k.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
        k.cssHooks[i + o] = { expand: function (e) {
            for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];return n;
          } }, "margin" !== i && (k.cssHooks[i + o].set = ut);
      }), k.fn.extend({ css: function (e, t) {
          return F(this, function (e, t, n) {
            var r,
                i,
                o = {},
                a = 0;if (Array.isArray(t)) {
              for (r = Ge(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);return o;
            }return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
          }, e, t, 1 < arguments.length);
        } }), ((k.Tween = ft).prototype = { constructor: ft, init: function (e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
        }, cur: function () {
          var e = ft.propHooks[this.prop];return e && e.get ? e.get(this) : ft.propHooks._default.get(this);
        }, run: function (e) {
          var t,
              n = ft.propHooks[this.prop];return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ft.propHooks._default.set(this), this;
        } }).init.prototype = ft.prototype, (ft.propHooks = { _default: { get: function (e) {
            var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
          }, set: function (e) {
            k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
          } } }).scrollTop = ft.propHooks.scrollLeft = { set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        } }, k.easing = { linear: function (e) {
          return e;
        }, swing: function (e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        }, _default: "swing" }, k.fx = ft.prototype.init, k.fx.step = {};var pt,
          dt,
          ht,
          gt,
          yt = /^(?:toggle|show|hide)$/,
          vt = /queueHooks$/;function mt() {
        dt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(mt) : C.setTimeout(mt, k.fx.interval), k.fx.tick());
      }function xt() {
        return C.setTimeout(function () {
          pt = void 0;
        }), pt = Date.now();
      }function bt(e, t) {
        var n,
            r = 0,
            i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;return t && (i.opacity = i.width = e), i;
      }function wt(e, t, n) {
        for (var r, i = (Tt.tweeners[t] || []).concat(Tt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
      }function Tt(o, e, t) {
        var n,
            a,
            r = 0,
            i = Tt.prefilters.length,
            s = k.Deferred().always(function () {
          delete u.elem;
        }),
            u = function () {
          if (a) return !1;for (var e = pt || xt(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
        },
            l = s.promise({ elem: o, props: k.extend({}, e), opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t), originalProperties: e, originalOptions: t, startTime: pt || xt(), duration: t.duration, tweens: [], createTween: function (e, t) {
            var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);return l.tweens.push(n), n;
          }, stop: function (e) {
            var t = 0,
                n = e ? l.tweens.length : 0;if (a) return this;for (a = !0; t < n; t++) l.tweens[t].run(1);return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
          } }),
            c = l.props;for (!function (e, t) {
          var n, r, i, o, a;for (n in e) if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
        }(c, l.opts.specialEasing); r < i; r++) if (n = Tt.prefilters[r].call(l, o, c, l.opts)) return x(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;return k.map(c, wt, l), x(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l;
      }k.Animation = k.extend(Tt, { tweeners: { "*": [function (e, t) {
            var n = this.createTween(e, t);return le(n.elem, e, ne.exec(t), n), n;
          }] }, tweener: function (e, t) {
          for (var n, r = 0, i = (e = x(e) ? (t = e, ["*"]) : e.match(R)).length; r < i; r++) n = e[r], Tt.tweeners[n] = Tt.tweeners[n] || [], Tt.tweeners[n].unshift(t);
        }, prefilters: [function (e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f = "width" in t || "height" in t,
              p = this,
              d = {},
              h = e.style,
              g = e.nodeType && ue(e),
              y = Q.get(e, "fxshow");for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s();
          }), a.unqueued++, p.always(function () {
            p.always(function () {
              a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
          })), t) if (i = t[r], yt.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
              if ("show" !== i || !y || void 0 === y[r]) continue;g = !0;
            }d[r] = y && y[r] || k.style(e, r);
          }if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
            h.display = l;
          }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
          })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Q.access(e, "fxshow", { display: l }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
            for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r]);
          })), u = wt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
        }], prefilter: function (e, t) {
          t ? Tt.prefilters.unshift(e) : Tt.prefilters.push(e);
        } }), k.speed = function (e, t, n) {
        var r = e && "object" === (void 0 === e ? "undefined" : _typeof(e)) ? k.extend({}, e) : { complete: n || !n && t || x(e) && e, duration: e, easing: n && t || t && !x(t) && t };return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          x(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }, r;
      }, k.fn.extend({ fadeTo: function (e, t, n, r) {
          return this.filter(ue).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        }, animate: function (t, e, n, r) {
          function i() {
            var e = Tt(this, k.extend({}, t), a);(o || Q.get(this, "finish")) && e.stop(!0);
          }var o = k.isEmptyObject(t),
              a = k.speed(e, n, r);return i.finish = i, o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i);
        }, stop: function (i, e, o) {
          function a(e) {
            var t = e.stop;delete e.stop, t(o);
          }return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
            var e = !0,
                t = null != i && i + "queueHooks",
                n = k.timers,
                r = Q.get(this);if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && vt.test(t) && a(r[t]);for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));!e && o || k.dequeue(this, i);
          });
        }, finish: function (a) {
          return !1 !== a && (a = a || "fx"), this.each(function () {
            var e,
                t = Q.get(this),
                n = t[a + "queue"],
                r = t[a + "queueHooks"],
                i = k.timers,
                o = n ? n.length : 0;for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);delete t.finish;
          });
        } }), k.each(["toggle", "show", "hide"], function (e, r) {
        var i = k.fn[r];k.fn[r] = function (e, t, n) {
          return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(bt(r, !0), e, t, n);
        };
      }), k.each({ slideDown: bt("show"), slideUp: bt("hide"), slideToggle: bt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
        k.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }), k.timers = [], k.fx.tick = function () {
        var e,
            t = 0,
            n = k.timers;for (pt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);n.length || k.fx.stop(), pt = void 0;
      }, k.fx.timer = function (e) {
        k.timers.push(e), k.fx.start();
      }, k.fx.interval = 13, k.fx.start = function () {
        dt || (dt = !0, mt());
      }, k.fx.stop = function () {
        dt = null;
      }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function (r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);t.stop = function () {
            C.clearTimeout(n);
          };
        });
      }, ht = E.createElement("input"), gt = E.createElement("select").appendChild(E.createElement("option")), ht.type = "checkbox", m.checkOn = "" !== ht.value, m.optSelected = gt.selected, (ht = E.createElement("input")).value = "t", ht.type = "radio", m.radioValue = "t" === ht.value;var Ct,
          Et = k.expr.attrHandle;k.fn.extend({ attr: function (e, t) {
          return F(this, k.attr, e, t, 1 < arguments.length);
        }, removeAttr: function (e) {
          return this.each(function () {
            k.removeAttr(this, e);
          });
        } }), k.extend({ attr: function (e, t, n) {
          var r,
              i,
              o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? Ct : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
        }, attrHooks: { type: { set: function (e, t) {
              if (!m.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
              }
            } } }, removeAttr: function (e, t) {
          var n,
              r = 0,
              i = t && t.match(R);if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n);
        } }), Ct = { set: function (e, t, n) {
          return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
        } }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = Et[t] || k.find.attr;Et[t] = function (e, t, n) {
          var r,
              i,
              o = t.toLowerCase();return n || (i = Et[o], Et[o] = r, r = null != a(e, t, n) ? o : null, Et[o] = i), r;
        };
      });var kt = /^(?:input|select|textarea|button)$/i,
          Nt = /^(?:a|area)$/i;function St(e) {
        return (e.match(R) || []).join(" ");
      }function At(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }function Lt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
      }k.fn.extend({ prop: function (e, t) {
          return F(this, k.prop, e, t, 1 < arguments.length);
        }, removeProp: function (e) {
          return this.each(function () {
            delete this[k.propFix[e] || e];
          });
        } }), k.extend({ prop: function (e, t, n) {
          var r,
              i,
              o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        }, propHooks: { tabIndex: { get: function (e) {
              var t = k.find.attr(e, "tabindex");return t ? parseInt(t, 10) : kt.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : -1;
            } } }, propFix: { for: "htmlFor", class: "className" } }), m.optSelected || (k.propHooks.selected = { get: function (e) {
          var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
        }, set: function (e) {
          var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        } }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        k.propFix[this.toLowerCase()] = this;
      }), k.fn.extend({ addClass: function (t) {
          var e,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;if (x(t)) return this.each(function (e) {
            k(this).addClass(t.call(this, e, At(this)));
          });if ((e = Lt(t)).length) for (; n = this[u++];) if (i = At(n), r = 1 === n.nodeType && " " + St(i) + " ") {
            for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");i !== (s = St(r)) && n.setAttribute("class", s);
          }return this;
        }, removeClass: function (t) {
          var e,
              n,
              r,
              i,
              o,
              a,
              s,
              u = 0;if (x(t)) return this.each(function (e) {
            k(this).removeClass(t.call(this, e, At(this)));
          });if (!arguments.length) return this.attr("class", "");if ((e = Lt(t)).length) for (; n = this[u++];) if (i = At(n), r = 1 === n.nodeType && " " + St(i) + " ") {
            for (a = 0; o = e[a++];) for (; -1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");i !== (s = St(r)) && n.setAttribute("class", s);
          }return this;
        }, toggleClass: function (i, t) {
          var o = void 0 === i ? "undefined" : _typeof(i),
              a = "string" === o || Array.isArray(i);return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : x(i) ? this.each(function (e) {
            k(this).toggleClass(i.call(this, e, At(this), t), t);
          }) : this.each(function () {
            var e, t, n, r;if (a) for (t = 0, n = k(this), r = Lt(i); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);else void 0 !== i && "boolean" !== o || ((e = At(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
          });
        }, hasClass: function (e) {
          var t,
              n,
              r = 0;for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && -1 < (" " + St(At(n)) + " ").indexOf(t)) return !0;return !1;
        } });var Dt = /\r/g;k.fn.extend({ val: function (n) {
          var r,
              e,
              i,
              t = this[0];return arguments.length ? (i = x(n), this.each(function (e) {
            var t;1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
              return null == e ? "" : e + "";
            })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
          })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Dt, "") : null == e ? "" : e : void 0;
        } }), k.extend({ valHooks: { option: { get: function (e) {
              var t = k.find.attr(e, "value");return null != t ? t : St(k.text(e));
            } }, select: { get: function (e) {
              var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                if (t = k(n).val(), a) return t;s.push(t);
              }return s;
            }, set: function (e, t) {
              for (var n, r, i = e.options, o = k.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);return n || (e.selectedIndex = -1), o;
            } } } }), k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = { set: function (e, t) {
            if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
          } }, m.checkOn || (k.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value;
        });
      }), m.focusin = "onfocusin" in C;function jt(e) {
        e.stopPropagation();
      }var qt = /^(?:focusinfocus|focusoutblur)$/;k.extend(k.event, { trigger: function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              p = [n || E],
              d = v.call(e, "type") ? e.type : e,
              h = v.call(e, "namespace") ? e.namespace.split(".") : [];if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !qt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" === (void 0 === e ? "undefined" : _typeof(e)) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
            if (!r && !c.noBubble && !g(n)) {
              for (s = c.delegateType || d, qt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
            }for (i = 0; (o = p[i++]) && !e.isPropagationStopped();) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && x(n[d]) && !g(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, jt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, jt), k.event.triggered = void 0, a && (n[u] = a)), e.result;
          }
        }, simulate: function (e, t, n) {
          var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });k.event.trigger(r, null, t);
        } }), k.fn.extend({ trigger: function (e, t) {
          return this.each(function () {
            k.event.trigger(e, t, this);
          });
        }, triggerHandler: function (e, t) {
          var n = this[0];if (n) return k.event.trigger(e, t, n, !0);
        } }), m.focusin || k.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        function i(e) {
          k.event.simulate(r, e.target, k.event.fix(e));
        }k.event.special[r] = { setup: function () {
            var e = this.ownerDocument || this,
                t = Q.access(e, r);t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
          }, teardown: function () {
            var e = this.ownerDocument || this,
                t = Q.access(e, r) - 1;t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
          } };
      });var It = C.location,
          Ht = Date.now(),
          Ot = /\?/;k.parseXML = function (e) {
        var t;if (!e || "string" != typeof e) return null;try {
          t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
      };var Rt = /\[\]$/,
          Pt = /\r?\n/g,
          $t = /^(?:submit|button|image|reset|file)$/i,
          Mt = /^(?:input|select|textarea|keygen)/i;function _t(n, e, r, i) {
        var t;if (Array.isArray(e)) k.each(e, function (e, t) {
          r || Rt.test(n) ? i(n, t) : _t(n + "[" + ("object" === (void 0 === t ? "undefined" : _typeof(t)) && null != t ? e : "") + "]", t, r, i);
        });else if (r || "object" !== w(e)) i(n, e);else for (t in e) _t(n + "[" + t + "]", e[t], r, i);
      }k.param = function (e, t) {
        function n(e, t) {
          var n = x(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        }var r,
            i = [];if (null == e) return "";if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
          n(this.name, this.value);
        });else for (r in e) _t(r, e[r], t, n);return i.join("&");
      }, k.fn.extend({ serialize: function () {
          return k.param(this.serializeArray());
        }, serializeArray: function () {
          return this.map(function () {
            var e = k.prop(this, "elements");return e ? k.makeArray(e) : this;
          }).filter(function () {
            var e = this.type;return this.name && !k(this).is(":disabled") && Mt.test(this.nodeName) && !$t.test(e) && (this.checked || !pe.test(e));
          }).map(function (e, t) {
            var n = k(this).val();return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
              return { name: t.name, value: e.replace(Pt, "\r\n") };
            }) : { name: t.name, value: n.replace(Pt, "\r\n") };
          }).get();
        } });var Wt = /%20/g,
          Bt = /#.*$/,
          Ft = /([?&])_=[^&]*/,
          zt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ut = /^(?:GET|HEAD)$/,
          Xt = /^\/\//,
          Vt = {},
          Gt = {},
          Yt = "*/".concat("*"),
          Qt = E.createElement("a");function Jt(o) {
        return function (e, t) {
          "string" != typeof e && (t = e, e = "*");var n,
              r = 0,
              i = e.toLowerCase().match(R) || [];if (x(t)) for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
      }function Kt(t, i, o, a) {
        var s = {},
            u = t === Gt;function l(e) {
          var r;return s[e] = !0, k.each(t[e] || [], function (e, t) {
            var n = t(i, o, a);return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
          }), r;
        }return l(i.dataTypes[0]) || !s["*"] && l("*");
      }function Zt(e, t) {
        var n,
            r,
            i = k.ajaxSettings.flatOptions || {};for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);return r && k.extend(!0, e, r), e;
      }Qt.href = It.href, k.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: It.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(It.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Yt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) {
          return t ? Zt(Zt(e, k.ajaxSettings), t) : Zt(k.ajaxSettings, e);
        }, ajaxPrefilter: Jt(Vt), ajaxTransport: Jt(Gt), ajax: function (e, t) {
          "object" === (void 0 === e ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};var c,
              f,
              p,
              n,
              d,
              r,
              h,
              g,
              i,
              o,
              y = k.ajaxSetup({}, t),
              v = y.context || y,
              m = y.context && (v.nodeType || v.jquery) ? k(v) : k.event,
              x = k.Deferred(),
              b = k.Callbacks("once memory"),
              w = y.statusCode || {},
              a = {},
              s = {},
              u = "canceled",
              T = { readyState: 0, getResponseHeader: function (e) {
              var t;if (h) {
                if (!n) for (n = {}; t = zt.exec(p);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);t = n[e.toLowerCase() + " "];
              }return null == t ? null : t.join(", ");
            }, getAllResponseHeaders: function () {
              return h ? p : null;
            }, setRequestHeader: function (e, t) {
              return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
            }, overrideMimeType: function (e) {
              return null == h && (y.mimeType = e), this;
            }, statusCode: function (e) {
              var t;if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];return this;
            }, abort: function (e) {
              var t = e || u;return c && c.abort(t), l(0, t), this;
            } };if (x.promise(T), y.url = ((e || y.url || It.href) + "").replace(Xt, It.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(R) || [""], null == y.crossDomain) {
            r = E.createElement("a");try {
              r.href = y.url, r.href = r.href, y.crossDomain = Qt.protocol + "//" + Qt.host != r.protocol + "//" + r.host;
            } catch (e) {
              y.crossDomain = !0;
            }
          }if (y.data && y.processData && "string" != typeof y.data && (y.data = k.param(y.data, y.traditional)), Kt(Vt, y, t, T), h) return T;for (i in (g = k.event && y.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ut.test(y.type), f = y.url.replace(Bt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Wt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (Ot.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Ft, "$1"), o = (Ot.test(f) ? "&" : "?") + "_=" + Ht++ + o), y.url = f + o), y.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = Kt(Gt, y, t, T)) {
            if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;y.async && 0 < y.timeout && (d = C.setTimeout(function () {
              T.abort("timeout");
            }, y.timeout));try {
              h = !1, c.send(a, l);
            } catch (e) {
              if (h) throw e;l(-1, e);
            }
          } else l(-1, "No Transport");function l(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l = t;h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
              for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));if (r) for (i in s) if (s[i] && s[i].test(r)) {
                u.unshift(i);break;
              }if (u[0] in n) o = u[0];else {
                for (i in n) {
                  if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;break;
                  }a = a || i;
                }o = o || a;
              }if (o) return o !== u[0] && u.unshift(o), n[o];
            }(y, T, n)), s = function (e, t, n, r) {
              var i,
                  o,
                  a,
                  s,
                  u,
                  l = {},
                  c = e.dataTypes.slice();if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
                }if (!0 !== a) if (a && e.throws) t = a(t);else try {
                  t = a(t);
                } catch (e) {
                  return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                }
              }return { state: "success", data: t };
            }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --k.active || k.event.trigger("ajaxStop")));
          }return T;
        }, getJSON: function (e, t, n) {
          return k.get(e, t, n, "json");
        }, getScript: function (e, t) {
          return k.get(e, void 0, t, "script");
        } }), k.each(["get", "post"], function (e, i) {
        k[i] = function (e, t, n, r) {
          return x(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({ url: e, type: i, dataType: r, data: t, success: n }, k.isPlainObject(e) && e));
        };
      }), k._evalUrl = function (e, t) {
        return k.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () {} }, dataFilter: function (e) {
            k.globalEval(e, t);
          } });
      }, k.fn.extend({ wrapAll: function (e) {
          var t;return this[0] && (x(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;return e;
          }).append(this)), this;
        }, wrapInner: function (n) {
          return x(n) ? this.each(function (e) {
            k(this).wrapInner(n.call(this, e));
          }) : this.each(function () {
            var e = k(this),
                t = e.contents();t.length ? t.wrapAll(n) : e.append(n);
          });
        }, wrap: function (t) {
          var n = x(t);return this.each(function (e) {
            k(this).wrapAll(n ? t.call(this, e) : t);
          });
        }, unwrap: function (e) {
          return this.parent(e).not("body").each(function () {
            k(this).replaceWith(this.childNodes);
          }), this;
        } }), k.expr.pseudos.hidden = function (e) {
        return !k.expr.pseudos.visible(e);
      }, k.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, k.ajaxSettings.xhr = function () {
        try {
          return new C.XMLHttpRequest();
        } catch (e) {}
      };var en = { 0: 200, 1223: 204 },
          tn = k.ajaxSettings.xhr();m.cors = !!tn && "withCredentials" in tn, m.ajax = tn = !!tn, k.ajaxTransport(function (i) {
        var o, a;if (m.cors || tn && !i.crossDomain) return { send: function (e, t) {
            var n,
                r = i.xhr();if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);o = function (e) {
              return function () {
                o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(en[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
              };
            }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
              4 === r.readyState && C.setTimeout(function () {
                o && a();
              });
            }, o = o("abort");try {
              r.send(i.hasContent && i.data || null);
            } catch (e) {
              if (o) throw e;
            }
          }, abort: function () {
            o && o();
          } };
      }), k.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) {
            return k.globalEval(e), e;
          } } }), k.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), k.ajaxTransport("script", function (n) {
        var r, i;if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) {
            r = k("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) {
              r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
            }), E.head.appendChild(r[0]);
          }, abort: function () {
            i && i();
          } };
      });var nn,
          rn = [],
          on = /(=)\?(?=&|$)|\?\?/;k.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
          var e = rn.pop() || k.expando + "_" + Ht++;return this[e] = !0, e;
        } }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
            i,
            o,
            a = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(on, "$1" + r) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
          return o || k.error(r + " was not called"), o[0];
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
          o = arguments;
        }, n.always(function () {
          void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, rn.push(r)), o && x(i) && i(o[0]), o = i = void 0;
        }), "script";
      }), m.createHTMLDocument = ((nn = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === nn.childNodes.length), k.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = L.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));var r, i, o;
      }, k.fn.load = function (e, t, n) {
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");return -1 < s && (r = St(e.slice(s)), e = e.slice(0, s)), x(t) ? (n = t, t = void 0) : t && "object" === (void 0 === t ? "undefined" : _typeof(t)) && (i = "POST"), 0 < a.length && k.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
          o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
        }).always(n && function (e, t) {
          a.each(function () {
            n.apply(this, o || [e.responseText, t, e]);
          });
        }), this;
      }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e);
        };
      }), k.expr.pseudos.animated = function (t) {
        return k.grep(k.timers, function (e) {
          return t === e.elem;
        }).length;
      }, k.offset = { setOffset: function (e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              u,
              l = k.css(e, "position"),
              c = k(e),
              f = {};"static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), x(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
        } }, k.fn.extend({ offset: function (t) {
          if (arguments.length) return void 0 === t ? this : this.each(function (e) {
            k.offset.setOffset(this, t, e);
          });var e,
              n,
              r = this[0];return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
        }, position: function () {
          if (this[0]) {
            var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
              for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position");) e = e.parentNode;e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
            }return { top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0) };
          }
        }, offsetParent: function () {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === k.css(e, "position");) e = e.offsetParent;return e || ie;
          });
        } }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
        var o = "pageYOffset" === i;k.fn[t] = function (e) {
          return F(this, function (e, t, n) {
            var r;if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
          }, t, e, arguments.length);
        };
      }), k.each(["top", "left"], function (e, n) {
        k.cssHooks[n] = Ze(m.pixelPosition, function (e, t) {
          if (t) return t = Ke(e, n), Ve.test(t) ? k(e).position()[n] + "px" : t;
        });
      }), k.each({ Height: "height", Width: "width" }, function (a, s) {
        k.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
          k.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
                i = r || (!0 === e || !0 === t ? "margin" : "border");return F(this, function (e, t, n) {
              var r;return g(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
            }, s, n ? e : void 0, n);
          };
        });
      }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        k.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
      }), k.fn.extend({ hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        } }), k.fn.extend({ bind: function (e, t, n) {
          return this.on(e, null, t, n);
        }, unbind: function (e, t) {
          return this.off(e, null, t);
        }, delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        }, undelegate: function (e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        } }), k.proxy = function (e, t) {
        var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), x(e)) return r = s.call(arguments, 2), (i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || k.guid++, i;
      }, k.holdReady = function (e) {
        e ? k.readyWait++ : k.ready(!0);
      }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = x, k.isWindow = g, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
        var t = k.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
      };var an = C.jQuery,
          sn = C.$;return k.noConflict = function (e) {
        return C.$ === k && (C.$ = sn), e && C.jQuery === k && (C.jQuery = an), k;
      }, e || (C.jQuery = C.$ = k), k;
    }, e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");return n(e);
    };
  }(e = { exports: {} }, e.exports), e.exports);window.$ = t, window.jQuery = t, $(function () {
    function e() {
      $("#mygame").append("<div id='container' style='display: none; width: 640px; height: 480px;'>"), gf.addSprite("container", "background", { width: 640, height: 480 }), gf.addSprite("container", "packets1", { width: 640, height: 40, y: 400 }), gf.addSprite("container", "packets2", { width: 640, height: 40, y: 330 }), gf.addSprite("container", "packets3", { width: 640, height: 40, y: 260 }), gf.addSprite("container", "bugs1", { width: 640, height: 60, y: 170 }), gf.addSprite("container", "bugs2", { width: 640, height: 60, y: 100 }), gf.addSprite("container", "bugs3", { width: 640, height: 60, y: 30 }), gf.addSprite("container", "front", { width: 640, height: 480 }), gf.addSprite("container", "player", { width: 40, height: 40, y: 440, x: 260 }), gf.setAnimation("background", t), gf.setAnimation("player", o), gf.setAnimation("packets1", r), gf.setAnimation("packets2", r), gf.setAnimation("packets3", r), gf.setAnimation("bugs1", i), gf.setAnimation("bugs2", i), gf.setAnimation("bugs3", i), gf.setAnimation("front", n), $("#startButton").remove(), $("#container").append("<div id='lifes' style='position: absolute; top: 10px; left: 20px; color: black;'>life: 3</div>").css("display", "block"), setInterval(d, 100);
    }var t = new gf.animation({ url: "img/back.png" }),
        n = new gf.animation({ url: "img/front.png" }),
        r = new gf.animation({ url: "img/packet.png" }),
        i = new gf.animation({ url: "img/bug.png" }),
        o = new gf.animation({ url: "img/player.png" }),
        a = { position: 300, speed: 3 },
        s = { position: 0, speed: -5 },
        u = { position: 30, speed: 5 },
        l = { position: 100, speed: -10 },
        c = { position: 0, speed: -6 },
        f = { position: 50, speed: -8 },
        p = "START",
        d = function () {
      a.position += a.speed, $("#packets1").css("background-position", a.position + "px 0px"), s.position += s.speed, $("#packets2").css("background-position", s.position + "px 0px"), u.position += u.speed, $("#packets3").css("background-position", u.position + "px 0px"), l.position += l.speed, $("#bugs1").css("background-position", l.position + "px 0px"), c.position += c.speed, $("#bugs2").css("background-position", c.position + "px 0px"), f.position += f.speed, $("#bugs3").css("background-position", f.position + "px 0px");var e = gf.x("player");switch (p) {case "LINE1":
          e += a.speed;break;case "LINE2":
          e += s.speed;break;case "LINE3":
          e += u.speed;}640 < e || e < -40 ? y() : (h(p) || y(), gf.x("player", e));
    };$(document).keydown(function (e) {
      if ("WON" != p && "GAMEOVER" != p) switch (e.keyCode) {case 37:
          gf.x("player", gf.x("player") - 5), h(p) || y();break;case 39:
          gf.x("player", gf.x("player") + 5), h(p) || y();break;case 38:
          switch (p) {case "START":
              $("#player").animate({ top: 400 }, function () {
                h("LINE1") ? p = "LINE1" : y();
              });break;case "LINE1":
              $("#player").animate({ top: 330 }, function () {
                h("LINE2") ? p = "LINE2" : y();
              });break;case "LINE2":
              $("#player").animate({ top: 260 }, function () {
                h("LINE3") ? p = "LINE3" : y();
              });break;case "LINE3":
              $("#player").animate({ top: 220 }, function () {
                p = "REST";
              });break;case "REST":
              $("#player").animate({ top: 180 }, function () {
                h("LINE4") ? p = "LINE4" : y();
              });break;case "LINE4":
              $("#player").animate({ top: 110 }, function () {
                h("LINE5") ? p = "LINE5" : y();
              });break;case "LINE5":
              $("#player").animate({ top: 40 }, function () {
                h("LINE6") ? p = "LINE6" : y();
              });break;case "LINE6":
              $("#player").animate({ top: 0 }, function () {
                p = "WON", $("#lifes").html("You won!");
              });}}
    });var h = function (e) {
      switch (e) {case "LINE1":
          return 110 < (t = (t = (gf.x("player") - a.position) % 230) < 0 ? t + 230 : t) && t < 210;case "LINE2":
          return 110 < (t = (t = (gf.x("player") - s.position) % 230) < 0 ? t + 230 : t) && t < 210;case "LINE3":
          return 110 < (t = (t = (gf.x("player") - u.position) % 230) < 0 ? t + 230 : t) && t < 210;case "LINE4":
          return (t = (t = (gf.x("player") - l.position) % 190) < 0 ? t + 190 : t) < 130;case "LINE5":
          return (t = (t = (gf.x("player") - c.position) % 190) < 0 ? t + 190 : t) < 130;case "LINE6":
          var t;return (t = (t = (gf.x("player") - f.position) % 190) < 0 ? t + 190 : t) < 130;}return !0;
    },
        g = 3,
        y = function () {
      if (0 == --g) p = "GAMEOVER", $("#lifes").html("Game Over!");else switch ($("#lifes").html("life: " + g), p) {case "START":case "LINE1":case "LINE2":case "LINE3":
          gf.x("player", 260), gf.y("player", 440), p = "START";break;case "REST":case "LINE4":case "LINE5":case "LINE6":
          gf.x("player", 260), gf.y("player", 220), p = "REST";}
    };$("#startButton").click(function () {
      gf.startPreloading(e);
    });
  });function n(t, n) {
    return { attack: function (e) {
        n < e.getLevel() && console.log(e.getName() + " has damaged " + t), n >= e.getLevel() && (e.damage(1), console.log(t + " has damaged " + e.getName()));
      }, damage: function (e) {}, getLevel: function () {
        return n;
      }, getName: function () {
        return t;
      } };
  }var i = n("jim", 10),
      o = n("jeff", 5),
      a = i.attack(o);console.log(a);
});
