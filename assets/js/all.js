"use strict";

//pagescroll start
$(document).ready(function () {
  $('.scrollTop').click(function (e) {
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').animate({
      scrollTop: targetPos
    }, 1000);
  }); //滾動高度

  $(window).scroll(function () {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height(); // console.log(scrollPos, windowHeight);

    $('.scrollTop').each(function () {
      var target = $(this).attr('href');
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();

      if (targetPos - 1 <= scrollPos && targetPos + targetHeight > scrollPos) {
        $('.scrollTop').removeClass('active');
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
}); //sidebar

var menuIcon = document.querySelector('.nav_bar');
var navbar = document.querySelector('.nav_bar');
menuIcon.addEventListener('click', function () {
  navbar.classList.toggle('change');
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : void 0, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.5.1",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
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
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function is(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        ke(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
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
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
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
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Ae(this, e, Se), !1;
      },
      trigger: function trigger() {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(je, ""), u, l));
      }
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Oe(o[r], a[r]);
      } else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Re(this, e, !0);
    },
    remove: function remove(e) {
      return Re(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function Ie(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function We(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) {
        if ((e = _e[n] + t) in ze) return e;
      }
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
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
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], ot.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && at.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), pt = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function wt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
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
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      Dt(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      Dt(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || zt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * fullPage 2.9.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function (global, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], function ($) {
      return factory($, global, global.document, global.Math);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && exports) {
    module.exports = factory(require('jquery'), global, global.document, global.Math);
  } else {
    factory(jQuery, global, global.document, global.Math);
  }
})(typeof window !== 'undefined' ? window : void 0, function ($, window, document, Math, undefined) {
  'use strict'; // keeping central set of classnames and selectors

  var WRAPPER = 'fullpage-wrapper';
  var WRAPPER_SEL = '.' + WRAPPER; // slimscroll

  var SCROLLABLE = 'fp-scrollable';
  var SCROLLABLE_SEL = '.' + SCROLLABLE; // util

  var RESPONSIVE = 'fp-responsive';
  var NO_TRANSITION = 'fp-notransition';
  var DESTROYED = 'fp-destroyed';
  var ENABLED = 'fp-enabled';
  var VIEWING_PREFIX = 'fp-viewing';
  var ACTIVE = 'active';
  var ACTIVE_SEL = '.' + ACTIVE;
  var COMPLETELY = 'fp-completely';
  var COMPLETELY_SEL = '.' + COMPLETELY; // section

  var SECTION_DEFAULT_SEL = '.section';
  var SECTION = 'fp-section';
  var SECTION_SEL = '.' + SECTION;
  var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
  var SECTION_FIRST_SEL = SECTION_SEL + ':first';
  var SECTION_LAST_SEL = SECTION_SEL + ':last';
  var TABLE_CELL = 'fp-tableCell';
  var TABLE_CELL_SEL = '.' + TABLE_CELL;
  var AUTO_HEIGHT = 'fp-auto-height';
  var AUTO_HEIGHT_SEL = '.fp-auto-height';
  var NORMAL_SCROLL = 'fp-normal-scroll';
  var NORMAL_SCROLL_SEL = '.fp-normal-scroll'; // section nav

  var SECTION_NAV = 'fp-nav';
  var SECTION_NAV_SEL = '#' + SECTION_NAV;
  var SECTION_NAV_TOOLTIP = 'fp-tooltip';
  var SECTION_NAV_TOOLTIP_SEL = '.' + SECTION_NAV_TOOLTIP;
  var SHOW_ACTIVE_TOOLTIP = 'fp-show-active'; // slide

  var SLIDE_DEFAULT_SEL = '.slide';
  var SLIDE = 'fp-slide';
  var SLIDE_SEL = '.' + SLIDE;
  var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
  var SLIDES_WRAPPER = 'fp-slides';
  var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER;
  var SLIDES_CONTAINER = 'fp-slidesContainer';
  var SLIDES_CONTAINER_SEL = '.' + SLIDES_CONTAINER;
  var TABLE = 'fp-table'; // slide nav

  var SLIDES_NAV = 'fp-slidesNav';
  var SLIDES_NAV_SEL = '.' + SLIDES_NAV;
  var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + ' a';
  var SLIDES_ARROW = 'fp-controlArrow';
  var SLIDES_ARROW_SEL = '.' + SLIDES_ARROW;
  var SLIDES_PREV = 'fp-prev';
  var SLIDES_PREV_SEL = '.' + SLIDES_PREV;
  var SLIDES_ARROW_PREV = SLIDES_ARROW + ' ' + SLIDES_PREV;
  var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
  var SLIDES_NEXT = 'fp-next';
  var SLIDES_NEXT_SEL = '.' + SLIDES_NEXT;
  var SLIDES_ARROW_NEXT = SLIDES_ARROW + ' ' + SLIDES_NEXT;
  var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;
  var $window = $(window);
  var $document = $(document);

  $.fn.fullpage = function (options) {
    //only once my friend!
    if ($('html').hasClass(ENABLED)) {
      displayWarnings();
      return;
    } // common jQuery objects


    var $htmlBody = $('html, body');
    var $body = $('body');
    var FP = $.fn.fullpage; // Creating some defaults, extending them with any options that were provided

    options = $.extend({
      //ADDED BY ME
      considerHeader: false,
      header: null,
      //navigation
      menu: false,
      anchors: [],
      lockAnchors: false,
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: [],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',
      scrollBar: false,
      hybrid: false,
      //scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: null,
      scrollOverflow: false,
      scrollOverflowReset: false,
      scrollOverflowHandler: $.fn.fp_scrolloverflow ? $.fn.fp_scrolloverflow.iscrollHandler : null,
      scrollOverflowOptions: null,
      touchSensitivity: 5,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,
      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,
      //design
      controlArrows: true,
      controlArrowColor: '#fff',
      verticalCentered: true,
      sectionsColor: [],
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      responsive: 0,
      //backwards compabitility with responsiveWiddth
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
      },
      //Custom selectors
      sectionSelector: SECTION_DEFAULT_SEL,
      slideSelector: SLIDE_DEFAULT_SEL,
      //events
      afterLoad: null,
      onLeave: null,
      afterRender: null,
      afterResize: null,
      afterReBuild: null,
      afterSlideLoad: null,
      onSlideLeave: null,
      afterResponsive: null,
      lazyLoading: true
    }, options); //flag to avoid very fast sliding for landscape sliders

    var slideMoving = false;
    var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
    var isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
    var container = $(this); // MOD BY ME

    var windowsHeight = options.considerHeader ? $window.height() - $(options.header).height() : $window.height();
    var isResizing = false;
    var isWindowFocused = true;
    var lastScrolledDestiny;
    var lastScrolledSlide;
    var canScroll = true;
    var scrollings = [];
    var controlPressed;
    var startingSection;
    var isScrollAllowed = {};
    isScrollAllowed.m = {
      'up': true,
      'down': true,
      'left': true,
      'right': true
    };
    isScrollAllowed.k = $.extend(true, {}, isScrollAllowed.m);
    var MSPointer = getMSPointer();
    var events = {
      touchmove: 'ontouchmove' in window ? 'touchmove' : MSPointer.move,
      touchstart: 'ontouchstart' in window ? 'touchstart' : MSPointer.down
    };
    var scrollBarHandler; // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js

    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'; //timeouts

    var resizeId;
    var afterSectionLoadsId;
    var afterSlideLoadsId;
    var scrollId;
    var scrollId2;
    var keydownId;
    var originals = $.extend(true, {}, options); //deep copy

    displayWarnings(); //easeInOutCubic animation included in the plugin

    $.extend($.easing, {
      easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
      }
    });
    /**
     * Sets the autoScroll option.
     * It changes the scroll bar visibility and the history of the site as a result.
     */

    function setAutoScrolling(value, type) {
      //removing the transformation
      if (!value) {
        silentScroll(0);
      }

      setVariableState('autoScrolling', value, type);
      var element = $(SECTION_ACTIVE_SEL);

      if (options.autoScrolling && !options.scrollBar) {
        $htmlBody.css({
          'overflow': 'hidden',
          'height': '100%'
        });
        setRecordHistory(originals.recordHistory, 'internal'); //for IE touch devices

        container.css({
          '-ms-touch-action': 'none',
          'touch-action': 'none'
        });

        if (element.length) {
          //moving the container up
          silentScroll(element.position().top);
        }
      } else {
        $htmlBody.css({
          'overflow': 'visible',
          'height': 'initial'
        });
        setRecordHistory(false, 'internal'); //for IE touch devices

        container.css({
          '-ms-touch-action': '',
          'touch-action': ''
        }); //scrolling the page to the section with no animation

        if (element.length) {
          $htmlBody.scrollTop(element.position().top);
        }
      }
    }
    /**
     * Defines wheter to record the history for each hash change in the URL.
     */


    function setRecordHistory(value, type) {
      setVariableState('recordHistory', value, type);
    }
    /**
     * Defines the scrolling speed
     */


    function setScrollingSpeed(value, type) {
      setVariableState('scrollingSpeed', value, type);
    }
    /**
     * Sets fitToSection
     */


    function setFitToSection(value, type) {
      setVariableState('fitToSection', value, type);
    }
    /**
     * Sets lockAnchors
     */


    function setLockAnchors(value) {
      options.lockAnchors = value;
    }
    /**
     * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
     */


    function setMouseWheelScrolling(value) {
      if (value) {
        addMouseWheelHandler();
        addMiddleWheelHandler();
      } else {
        removeMouseWheelHandler();
        removeMiddleWheelHandler();
      }
    }
    /**
     * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
     * Optionally a second parameter can be used to specify the direction for which the action will be applied.
     *
     * @param directions string containing the direction or directions separated by comma.
     */


    function setAllowScrolling(value, directions) {
      if (typeof directions !== 'undefined') {
        directions = directions.replace(/ /g, '').split(',');
        $.each(directions, function (index, direction) {
          setIsScrollAllowed(value, direction, 'm');
        });
      } else {
        setIsScrollAllowed(value, 'all', 'm');

        if (value) {
          setMouseWheelScrolling(true);
          addTouchHandler();
        } else {
          setMouseWheelScrolling(false);
          removeTouchHandler();
        }
      }
    }
    /**
     * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
     */


    function setKeyboardScrolling(value, directions) {
      if (typeof directions !== 'undefined') {
        directions = directions.replace(/ /g, '').split(',');
        $.each(directions, function (index, direction) {
          setIsScrollAllowed(value, direction, 'k');
        });
      } else {
        setIsScrollAllowed(value, 'all', 'k');
        options.keyboardScrolling = value;
      }
    }
    /**
     * Moves the page up one section.
     */


    function moveSectionUp() {
      var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL); //looping to the bottom if there's no more sections above

      if (!prev.length && (options.loopTop || options.continuousVertical)) {
        prev = $(SECTION_SEL).last();
      }

      if (prev.length) {
        scrollPage(prev, null, true);
      }
    }
    /**
     * Moves the page down one section.
     */


    function moveSectionDown() {
      var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL); //looping to the top if there's no more sections below

      if (!next.length && (options.loopBottom || options.continuousVertical)) {
        next = $(SECTION_SEL).first();
      }

      if (next.length) {
        scrollPage(next, null, false);
      }
    }
    /**
     * Moves the page to the given section and slide with no animation.
     * Anchors or index positions can be used as params.
     */


    function silentMoveTo(sectionAnchor, slideAnchor) {
      setScrollingSpeed(0, 'internal');
      moveTo(sectionAnchor, slideAnchor);
      setScrollingSpeed(originals.scrollingSpeed, 'internal');
    }
    /**
     * Moves the page to the given section and slide.
     * Anchors or index positions can be used as params.
     */


    function moveTo(sectionAnchor, slideAnchor) {
      var destiny = getSectionByAnchor(sectionAnchor);

      if (typeof slideAnchor !== 'undefined') {
        scrollPageAndSlide(sectionAnchor, slideAnchor);
      } else if (destiny.length > 0) {
        scrollPage(destiny);
      }
    }
    /**
     * Slides right the slider of the active section.
     * Optional `section` param.
     */


    function moveSlideRight(section) {
      moveSlide('right', section);
    }
    /**
     * Slides left the slider of the active section.
     * Optional `section` param.
     */


    function moveSlideLeft(section) {
      moveSlide('left', section);
    }
    /**
     * When resizing is finished, we adjust the slides sizes and positions
     */


    function reBuild(resizing, isResizingHeader, newHeaderHeight) {
      if (container.hasClass(DESTROYED)) {
        return;
      } //nothing to do if the plugin was destroyed


      isResizing = true; //windowsHeight = $window.height();  //updating global var
      // MOD BY ME

      windowsHeight = options.considerHeader ? $window.height() - $(options.header).height() : $window.height();
      $(SECTION_SEL).each(function () {
        var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
        var slides = $(this).find(SLIDE_SEL); //adjusting the height of the table-cell for IE and Firefox

        if (options.verticalCentered) {
          $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
        }

        $(this).css('height', windowsHeight + 'px'); // ADDED BY ME

        if (isResizingHeader) {
          $(this).css('padding-top', newHeaderHeight);
        } //adjusting the position fo the FULL WIDTH slides...


        if (slides.length > 1) {
          landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
        }
      });

      if (options.scrollOverflow) {
        scrollBarHandler.createScrollBarForAll();
      }

      var activeSection = $(SECTION_ACTIVE_SEL);
      var sectionIndex = activeSection.index(SECTION_SEL); //isn't it the first section?

      if (sectionIndex) {
        //adjusting the position for the current section
        silentMoveTo(sectionIndex + 1);
      }

      isResizing = false;
      $.isFunction(options.afterResize) && resizing && options.afterResize.call(container);
      $.isFunction(options.afterReBuild) && !resizing && options.afterReBuild.call(container);
    }
    /**
     * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
     * are smaller than the set limit values.
     */


    function setResponsive(active) {
      var isResponsive = $body.hasClass(RESPONSIVE);

      if (active) {
        if (!isResponsive) {
          setAutoScrolling(false, 'internal');
          setFitToSection(false, 'internal');
          $(SECTION_NAV_SEL).hide();
          $body.addClass(RESPONSIVE);
          $.isFunction(options.afterResponsive) && options.afterResponsive.call(container, active);
        }
      } else if (isResponsive) {
        setAutoScrolling(originals.autoScrolling, 'internal');
        setFitToSection(originals.autoScrolling, 'internal');
        $(SECTION_NAV_SEL).show();
        $body.removeClass(RESPONSIVE);
        $.isFunction(options.afterResponsive) && options.afterResponsive.call(container, active);
      }
    }

    if ($(this).length) {
      //public functions
      FP.version = '2.9.5';
      FP.setAutoScrolling = setAutoScrolling;
      FP.setRecordHistory = setRecordHistory;
      FP.setScrollingSpeed = setScrollingSpeed;
      FP.setFitToSection = setFitToSection;
      FP.setLockAnchors = setLockAnchors;
      FP.setMouseWheelScrolling = setMouseWheelScrolling;
      FP.setAllowScrolling = setAllowScrolling;
      FP.setKeyboardScrolling = setKeyboardScrolling;
      FP.moveSectionUp = moveSectionUp;
      FP.moveSectionDown = moveSectionDown;
      FP.silentMoveTo = silentMoveTo;
      FP.moveTo = moveTo;
      FP.moveSlideRight = moveSlideRight;
      FP.moveSlideLeft = moveSlideLeft;
      FP.fitToSection = fitToSection;
      FP.reBuild = reBuild;
      FP.setResponsive = setResponsive;
      FP.destroy = destroy; //functions we want to share across files but which are not
      //mean to be used on their own by developers

      FP.shared = {
        afterRenderActions: afterRenderActions
      };
      init();
      bindEvents();
    }

    function init() {
      //if css3 is not supported, it will use jQuery animations
      if (options.css3) {
        options.css3 = support3d();
      }

      options.scrollBar = options.scrollBar || options.hybrid;
      setOptionsFromDOM();
      prepareDom();
      setAllowScrolling(true);
      setAutoScrolling(options.autoScrolling, 'internal');
      responsive(); //setting the class for the body element

      setBodyClass();

      if (document.readyState === 'complete') {
        scrollToAnchor();
      }

      $window.on('load', scrollToAnchor);
    }

    function bindEvents() {
      $window //when scrolling...
      .on('scroll', scrollHandler) //detecting any change on the URL to scroll to the given anchor link
      //(a way to detect back history button as we play with the hashes on the URL)
      .on('hashchange', hashChangeHandler) //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
      .blur(blurHandler) //when resizing the site, we adjust the heights of the sections, slimScroll...
      .resize(resizeHandler);
      $document //Sliding with arrow keys, both, vertical and horizontal
      .keydown(keydownHandler) //to prevent scrolling while zooming
      .keyup(keyUpHandler) //Scrolls to the section when clicking the navigation bullet
      .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler) //Scrolls the slider to the given slide destination for the given section
      .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler).on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler); //Scrolling horizontally when clicking on the slider controls.

      $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);
      /**
       * Applying normalScroll elements.
       * Ignoring the scrolls over the specified selectors.
       */

      if (options.normalScrollElements) {
        $document.on('mouseenter touchstart', options.normalScrollElements, function () {
          setAllowScrolling(false);
        });
        $document.on('mouseleave touchend', options.normalScrollElements, function () {
          setAllowScrolling(true);
        });
      }
    }
    /**
     * Setting options from DOM elements if they are not provided.
     */


    function setOptionsFromDOM() {
      var sections = container.find(options.sectionSelector); //no anchors option? Checking for them in the DOM attributes

      if (!options.anchors.length) {
        options.anchors = sections.filter('[data-anchor]').map(function () {
          return $(this).data('anchor').toString();
        }).get();
      } //no tooltips option? Checking for them in the DOM attributes


      if (!options.navigationTooltips.length) {
        options.navigationTooltips = sections.filter('[data-tooltip]').map(function () {
          return $(this).data('tooltip').toString();
        }).get();
      }
    }
    /**
     * Works over the DOM structure to set it up for the current fullpage options.
     */


    function prepareDom() {
      if (!options.considerHeader) {
        container.css({
          'height': '100%',
          'position': 'relative'
        });
      } else {
        container.css({
          'height': windowsHeight,
          'position': 'relative'
        });
      } //adding a class to recognize the container internally in the code


      container.addClass(WRAPPER);
      $('html').addClass(ENABLED); //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
      //windowsHeight = $window.height();
      // MOD BY ME

      windowsHeight = options.considerHeader ? $window.height() - $(options.header).height() : $window.height();
      container.removeClass(DESTROYED); //in case it was destroyed before initializing it again

      addInternalSelectors(); //styling the sections / slides / menu

      $(SECTION_SEL).each(function (index) {
        var section = $(this);
        var slides = section.find(SLIDE_SEL);
        var numSlides = slides.length; //caching the original styles to add them back on destroy('all')

        section.data('fp-styles', section.attr('style'));
        styleSection(section, index);
        styleMenu(section, index); // if there's any slide

        if (numSlides > 0) {
          styleSlides(section, slides, numSlides);
        } else {
          if (options.verticalCentered) {
            addTableClass(section);
          }
        }
      }); //fixed elements need to be moved out of the plugin container due to problems with CSS3.

      if (options.fixedElements && options.css3) {
        $(options.fixedElements).appendTo($body);
      } //vertical centered of the navigation + active bullet


      if (options.navigation) {
        addVerticalNavigation();
      }

      enableYoutubeAPI();

      if (options.scrollOverflow) {
        scrollBarHandler = options.scrollOverflowHandler.init(options);
      } else {
        afterRenderActions();
      }
    }
    /**
     * Styles the horizontal slides for a section.
     */


    function styleSlides(section, slides, numSlides) {
      var sliderWidth = numSlides * 100;
      var slideWidth = 100 / numSlides;
      slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
      slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');
      section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

      if (numSlides > 1) {
        if (options.controlArrows) {
          createSlideArrows(section);
        }

        if (options.slidesNavigation) {
          addSlidesNavigation(section, numSlides);
        }
      }

      slides.each(function (index) {
        $(this).css('width', slideWidth + '%');

        if (options.verticalCentered) {
          addTableClass($(this));
        }
      });
      var startingSlide = section.find(SLIDE_ACTIVE_SEL); //if the slide won't be an starting point, the default will be the first one
      //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.

      if (startingSlide.length && ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || $(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0)) {
        silentLandscapeScroll(startingSlide, 'internal');
      } else {
        slides.eq(0).addClass(ACTIVE);
      }
    }
    /**
     * Styling vertical sections
     */


    function styleSection(section, index) {
      //if no active section is defined, the 1st one will be the default one
      if (!index && $(SECTION_ACTIVE_SEL).length === 0) {
        section.addClass(ACTIVE);
      }

      startingSection = $(SECTION_ACTIVE_SEL);
      section.css('height', windowsHeight + 'px');

      if (options.paddingTop) {
        section.css('padding-top', options.paddingTop);
      }

      if (options.paddingBottom) {
        section.css('padding-bottom', options.paddingBottom);
      }

      if (typeof options.sectionsColor[index] !== 'undefined') {
        section.css('background-color', options.sectionsColor[index]);
      }

      if (typeof options.anchors[index] !== 'undefined') {
        section.attr('data-anchor', options.anchors[index]);
      }
    }
    /**
     * Sets the data-anchor attributes to the menu elements and activates the current one.
     */


    function styleMenu(section, index) {
      if (typeof options.anchors[index] !== 'undefined') {
        //activating the menu / nav element on load
        if (section.hasClass(ACTIVE)) {
          activateMenuAndNav(options.anchors[index], index);
        }
      } //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)


      if (options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length) {
        $(options.menu).appendTo($body);
      }
    }
    /**
     * Adds internal classes to be able to provide customizable selectors
     * keeping the link with the style sheet.
     */


    function addInternalSelectors() {
      container.find(options.sectionSelector).addClass(SECTION);
      container.find(options.slideSelector).addClass(SLIDE);
    }
    /**
     * Creates the control arrows for the given section
     */


    function createSlideArrows(section) {
      section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

      if (options.controlArrowColor != '#fff') {
        section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent ' + options.controlArrowColor);
        section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent ' + options.controlArrowColor + ' transparent transparent');
      }

      if (!options.loopHorizontal) {
        section.find(SLIDES_ARROW_PREV_SEL).hide();
      }
    }
    /**
     * Creates a vertical navigation bar.
     */


    function addVerticalNavigation() {
      $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
      var nav = $(SECTION_NAV_SEL);
      nav.addClass(function () {
        return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
      });

      for (var i = 0; i < $(SECTION_SEL).length; i++) {
        var link = '';

        if (options.anchors.length) {
          link = options.anchors[i];
        }

        var li = '<li><a href="#' + link + '"><span></span></a>'; // Only add tooltip if needed (defined by user)

        var tooltip = options.navigationTooltips[i];

        if (typeof tooltip !== 'undefined' && tooltip !== '') {
          li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
        }

        li += '</li>';
        nav.find('ul').append(li);
      } //centering it vertically


      $(SECTION_NAV_SEL).css('margin-top', '-' + $(SECTION_NAV_SEL).height() / 2 + 'px'); //activating the current active section

      $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
    }
    /*
    * Enables the Youtube videos API so we can control their flow if necessary.
    */


    function enableYoutubeAPI() {
      container.find('iframe[src*="youtube.com/embed/"]').each(function () {
        addURLParam($(this), 'enablejsapi=1');
      });
    }
    /**
     * Adds a new parameter and its value to the `src` of a given element
     */


    function addURLParam(element, newParam) {
      var originalSrc = element.attr('src');
      element.attr('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
    }
    /*
    * Returns the prefix sign to use for a new parameter in an existen URL.
    *
    * @return {String}  ? | &
    */


    function getUrlParamSign(url) {
      return !/\?/.test(url) ? '?' : '&';
    }
    /**
     * Actions and callbacks to fire afterRender
     */


    function afterRenderActions() {
      var section = $(SECTION_ACTIVE_SEL);
      section.addClass(COMPLETELY);
      lazyLoad(section);
      playMedia(section);

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.afterLoad();
      }

      if (isDestinyTheStartingSection()) {
        $.isFunction(options.afterLoad) && options.afterLoad.call(section, section.data('anchor'), section.index(SECTION_SEL) + 1);
      }

      $.isFunction(options.afterRender) && options.afterRender.call(container);
    }
    /**
     * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
     */


    function isDestinyTheStartingSection() {
      var destinationSection = getSectionByAnchor(getAnchorsURL().section);
      return !destinationSection || destinationSection.length && destinationSection.index() === startingSection.index();
    }

    var isScrolling = false;
    var lastScroll = 0; //when scrolling...

    function scrollHandler() {
      var currentSection;

      if (!options.autoScrolling || options.scrollBar) {
        var currentScroll = $window.scrollTop();
        var scrollDirection = getScrollDirection(currentScroll);
        var visibleSectionIndex = 0;
        var screen_mid = currentScroll + $window.height() / 2.0;
        var isAtBottom = $body.height() - $window.height() === currentScroll;
        var sections = document.querySelectorAll(SECTION_SEL); //when using `auto-height` for a small last section it won't be centered in the viewport

        if (isAtBottom) {
          visibleSectionIndex = sections.length - 1;
        } //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
        else if (!currentScroll) {
            visibleSectionIndex = 0;
          } //taking the section which is showing more content in the viewport
          else {
              for (var i = 0; i < sections.length; ++i) {
                var section = sections[i]; // Pick the the last section which passes the middle line of the screen.

                if (section.offsetTop <= screen_mid) {
                  visibleSectionIndex = i;
                }
              }
            }

        if (isCompletelyInViewPort(scrollDirection)) {
          if (!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)) {
            $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
          }
        } //geting the last one, the current one on the screen


        currentSection = $(sections).eq(visibleSectionIndex); //setting the visible section as active when manually scrolling
        //executing only once the first time we reach the section

        if (!currentSection.hasClass(ACTIVE)) {
          isScrolling = true;
          var leavingSection = $(SECTION_ACTIVE_SEL);
          var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
          var yMovement = getYmovement(currentSection);
          var anchorLink = currentSection.data('anchor');
          var sectionIndex = currentSection.index(SECTION_SEL) + 1;
          var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);
          var slideIndex;
          var slideAnchorLink;

          if (activeSlide.length) {
            slideAnchorLink = activeSlide.data('anchor');
            slideIndex = activeSlide.index();
          }

          if (canScroll) {
            currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            $.isFunction(options.onLeave) && options.onLeave.call(leavingSection, leavingSectionIndex, sectionIndex, yMovement);
            $.isFunction(options.afterLoad) && options.afterLoad.call(currentSection, anchorLink, sectionIndex);
            stopMedia(leavingSection);
            lazyLoad(currentSection);
            playMedia(currentSection);
            activateMenuAndNav(anchorLink, sectionIndex - 1);

            if (options.anchors.length) {
              //needed to enter in hashChange event when using the menu with anchor links
              lastScrolledDestiny = anchorLink;
            }

            setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
          } //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet


          clearTimeout(scrollId);
          scrollId = setTimeout(function () {
            isScrolling = false;
          }, 100);
        }

        if (options.fitToSection) {
          //for the auto adjust of the viewport to fit a whole section
          clearTimeout(scrollId2);
          scrollId2 = setTimeout(function () {
            //checking it again in case it changed during the delay
            if (options.fitToSection && //is the destination element bigger than the viewport?
            $(SECTION_ACTIVE_SEL).outerHeight() <= windowsHeight) {
              fitToSection();
            }
          }, options.fitToSectionDelay);
        }
      }
    }
    /**
     * Fits the site to the nearest active section
     */


    function fitToSection() {
      //checking fitToSection again in case it was set to false before the timeout delay
      if (canScroll) {
        //allows to scroll to an active section and
        //if the section is already active, we prevent firing callbacks
        isResizing = true;
        scrollPage($(SECTION_ACTIVE_SEL));
        isResizing = false;
      }
    }
    /**
     * Determines whether the active section has seen in its whole or not.
     */


    function isCompletelyInViewPort(movement) {
      var top = $(SECTION_ACTIVE_SEL).position().top;
      var bottom = top + $window.height();

      if (movement == 'up') {
        return bottom >= $window.scrollTop() + $window.height();
      }

      return top <= $window.scrollTop();
    }
    /**
     * Gets the directon of the the scrolling fired by the scroll event.
     */


    function getScrollDirection(currentScroll) {
      var direction = currentScroll > lastScroll ? 'down' : 'up';
      lastScroll = currentScroll; //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination

      previousDestTop = currentScroll;
      return direction;
    }
    /**
     * Determines the way of scrolling up or down:
     * by 'automatically' scrolling a section or by using the default and normal scrolling.
     */


    function scrolling(type) {
      if (!isScrollAllowed.m[type]) {
        return;
      }

      var scrollSection = type === 'down' ? moveSectionDown : moveSectionUp;

      if (options.scrollOverflow) {
        var scrollable = options.scrollOverflowHandler.scrollable($(SECTION_ACTIVE_SEL));
        var check = type === 'down' ? 'bottom' : 'top';

        if (scrollable.length > 0) {
          //is the scrollbar at the start/end of the scroll?
          if (options.scrollOverflowHandler.isScrolled(check, scrollable)) {
            scrollSection();
          } else {
            return true;
          }
        } else {
          // moved up/down
          scrollSection();
        }
      } else {
        // moved up/down
        scrollSection();
      }
    }
    /*
    * Preventing bouncing in iOS #2285
    */


    function preventBouncing(event) {
      var e = event.originalEvent;

      if (options.autoScrolling && isReallyTouch(e)) {
        //preventing the easing on iOS devices
        event.preventDefault();
      }
    }

    var touchStartY = 0;
    var touchStartX = 0;
    var touchEndY = 0;
    var touchEndX = 0;
    /* Detecting touch events
      * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
    * This way, the touchstart and the touch moves shows an small difference between them which is the
    * used one to determine the direction.
    */

    function touchMoveHandler(event) {
      var e = event.originalEvent;
      var activeSection = $(e.target).closest(SECTION_SEL); // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain

      if (isReallyTouch(e)) {
        if (options.autoScrolling) {
          //preventing the easing on iOS devices
          event.preventDefault();
        }

        var touchEvents = getEventsPage(e);
        touchEndY = touchEvents.y;
        touchEndX = touchEvents.x; //if movement in the X axys is greater than in the Y and the currect section has slides...

        if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY)) {
          //is the movement greater than the minimum resistance to scroll?
          if (!slideMoving && Math.abs(touchStartX - touchEndX) > $window.outerWidth() / 100 * options.touchSensitivity) {
            if (touchStartX > touchEndX) {
              if (isScrollAllowed.m.right) {
                moveSlideRight(activeSection); //next
              }
            } else {
              if (isScrollAllowed.m.left) {
                moveSlideLeft(activeSection); //prev
              }
            }
          }
        } //vertical scrolling (only when autoScrolling is enabled)
        else if (options.autoScrolling && canScroll) {
            //is the movement greater than the minimum resistance to scroll?
            if (Math.abs(touchStartY - touchEndY) > $window.height() / 100 * options.touchSensitivity) {
              if (touchStartY > touchEndY) {
                scrolling('down');
              } else if (touchEndY > touchStartY) {
                scrolling('up');
              }
            }
          }
      }
    }
    /**
     * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
     * this way we make sure that is really a touch event what IE is detecting.
     */


    function isReallyTouch(e) {
      //if is not IE   ||  IE is detecting `touch` or `pen`
      return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
    }
    /**
     * Handler for the touch start event.
     */


    function touchStartHandler(event) {
      var e = event.originalEvent; //stopping the auto scroll to adjust to a section

      if (options.fitToSection) {
        $htmlBody.stop();
      }

      if (isReallyTouch(e)) {
        var touchEvents = getEventsPage(e);
        touchStartY = touchEvents.y;
        touchStartX = touchEvents.x;
      }
    }
    /**
     * Gets the average of the last `number` elements of the given array.
     */


    function getAverage(elements, number) {
      var sum = 0; //taking `number` elements from the end to make the average, if there are not enought, 1

      var lastElements = elements.slice(Math.max(elements.length - number, 1));

      for (var i = 0; i < lastElements.length; i++) {
        sum = sum + lastElements[i];
      }

      return Math.ceil(sum / number);
    }
    /**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */


    var prevTime = new Date().getTime();

    function MouseWheelHandler(e) {
      var curTime = new Date().getTime();
      var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL); //autoscrolling and not zooming?

      if (options.autoScrolling && !controlPressed && !isNormalScroll) {
        // cross-browser wheel delta
        e = e || window.event;
        var value = e.wheelDelta || -e.deltaY || -e.detail;
        var delta = Math.max(-1, Math.min(1, value));
        var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
        var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection; //Limiting the array to 150 (lets not waste memory!)

        if (scrollings.length > 149) {
          scrollings.shift();
        } //keeping record of the previous scrollings


        scrollings.push(Math.abs(value)); //preventing to scroll the site on mouse wheel when scrollbar is present

        if (options.scrollBar) {
          e.preventDefault ? e.preventDefault() : e.returnValue = false;
        } //time difference between the last scroll and the current one


        var timeDiff = curTime - prevTime;
        prevTime = curTime; //haven't they scrolled in a while?
        //(enough to be consider a different scrolling action to scroll another section)

        if (timeDiff > 200) {
          //emptying the array, we dont care about old scrollings for our averages
          scrollings = [];
        }

        if (canScroll) {
          var averageEnd = getAverage(scrollings, 10);
          var averageMiddle = getAverage(scrollings, 70);
          var isAccelerating = averageEnd >= averageMiddle; //to avoid double swipes...

          if (isAccelerating && isScrollingVertically) {
            //scrolling down?
            if (delta < 0) {
              scrolling('down'); //scrolling up?
            } else {
              scrolling('up');
            }
          }
        }

        return false;
      }

      if (options.fitToSection) {
        //stopping the auto scroll to adjust to a section
        $htmlBody.stop();
      }
    }
    /**
     * Slides a slider to the given direction.
     * Optional `section` param.
     */


    function moveSlide(direction, section) {
      var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
      var slides = activeSection.find(SLIDES_WRAPPER_SEL);
      var numSlides = slides.find(SLIDE_SEL).length; // more than one slide needed and nothing should be sliding

      if (!slides.length || slideMoving || numSlides < 2) {
        return;
      }

      var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
      var destiny = null;

      if (direction === 'left') {
        destiny = currentSlide.prev(SLIDE_SEL);
      } else {
        destiny = currentSlide.next(SLIDE_SEL);
      } //isn't there a next slide in the secuence?


      if (!destiny.length) {
        //respect loopHorizontal settin
        if (!options.loopHorizontal) return;

        if (direction === 'left') {
          destiny = currentSlide.siblings(':last');
        } else {
          destiny = currentSlide.siblings(':first');
        }
      }

      slideMoving = true;
      landscapeScroll(slides, destiny, direction);
    }
    /**
     * Maintains the active slides in the viewport
     * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
     */


    function keepSlidesPosition() {
      $(SLIDE_ACTIVE_SEL).each(function () {
        silentLandscapeScroll($(this), 'internal');
      });
    }

    var previousDestTop = 0;
    /**
     * Returns the destination Y position based on the scrolling direction and
     * the height of the section.
     */

    function getDestinationPosition(element) {
      var elemPosition = element.position(); //top of the desination will be at the top of the viewport

      var position = elemPosition.top;
      var isScrollingDown = elemPosition.top > previousDestTop;
      var sectionBottom = position - windowsHeight + element.outerHeight();
      var bigSectionsDestination = options.bigSectionsDestination; //is the destination element bigger than the viewport?

      if (element.outerHeight() > windowsHeight) {
        //scrolling up?
        if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom') {
          position = sectionBottom;
        }
      } //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
      else if (isScrollingDown || isResizing && element.is(':last-child')) {
          //The bottom of the destination will be at the bottom of the viewport
          position = sectionBottom;
        }
      /*
      Keeping record of the last scrolled position to determine the scrolling direction.
      No conventional methods can be used as the scroll bar might not be present
      AND the section might not be active if it is auto-height and didnt reach the middle
      of the viewport.
      */


      previousDestTop = position;
      return position;
    }
    /**
     * Scrolls the site to the given element and scrolls to the slide if a callback is given.
     */


    function scrollPage(element, callback, isMovementUp) {
      if (typeof element === 'undefined') {
        return;
      } //there's no element to scroll, leaving the function


      var dtop = getDestinationPosition(element);
      var slideAnchorLink;
      var slideIndex; //local variables

      var v = {
        element: element,
        callback: callback,
        isMovementUp: isMovementUp,
        dtop: dtop,
        yMovement: getYmovement(element),
        anchorLink: element.data('anchor'),
        sectionIndex: element.index(SECTION_SEL),
        activeSlide: element.find(SLIDE_ACTIVE_SEL),
        activeSection: $(SECTION_ACTIVE_SEL),
        leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,
        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        localIsResizing: isResizing
      }; //quiting when destination scroll is the same as the current one

      if (v.activeSection.is(element) && !isResizing || options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT)) {
        return;
      }

      if (v.activeSlide.length) {
        slideAnchorLink = v.activeSlide.data('anchor');
        slideIndex = v.activeSlide.index();
      } //callback (onLeave) if the site is not just resizing and readjusting the slides


      if ($.isFunction(options.onLeave) && !v.localIsResizing) {
        if (options.onLeave.call(v.activeSection, v.leavingSection, v.sectionIndex + 1, v.yMovement) === false) {
          return;
        }
      } // If continuousVertical && we need to wrap around


      if (options.autoScrolling && options.continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == 'up' || // Intending to scroll down but about to go up or
      v.isMovementUp && v.yMovement == 'down')) {
        // intending to scroll up but about to go down
        v = createInfiniteSections(v);
      } //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)


      if (!v.localIsResizing) {
        stopMedia(v.activeSection);
      }

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.beforeLeave();
      }

      element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
      lazyLoad(element);

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.onLeave();
      } //preventing from activating the MouseWheelHandler event
      //more than once if the page is scrolling


      canScroll = false;
      setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);
      performMovement(v); //flag to avoid callingn `scrollPage()` twice in case of using anchor links

      lastScrolledDestiny = v.anchorLink; //avoid firing it twice (as it does also on scroll)

      activateMenuAndNav(v.anchorLink, v.sectionIndex);
    }
    /**
     * Performs the vertical movement (by CSS3 or by jQuery)
     */


    function performMovement(v) {
      // using CSS3 translate functionality
      if (options.css3 && options.autoScrolling && !options.scrollBar) {
        // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
        // that's why we round it to 0.
        var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
        transformContainer(translate3d, true); //even when the scrollingSpeed is 0 there's a little delay, which might cause the
        //scrollingSpeed to change in case of using silentMoveTo();

        if (options.scrollingSpeed) {
          clearTimeout(afterSectionLoadsId);
          afterSectionLoadsId = setTimeout(function () {
            afterSectionLoads(v);
          }, options.scrollingSpeed);
        } else {
          afterSectionLoads(v);
        }
      } // using jQuery animate
      else {
          var scrollSettings = getScrollSettings(v);
          $(scrollSettings.element).animate(scrollSettings.options, options.scrollingSpeed, options.easing).promise().done(function () {
            //only one single callback in case of animating  `html, body`
            if (options.scrollBar) {
              /* Hack!
              The timeout prevents setting the most dominant section in the viewport as "active" when the user
              scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
                When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
              */
              setTimeout(function () {
                afterSectionLoads(v);
              }, 30);
            } else {
              afterSectionLoads(v);
            }
          });
        }
    }
    /**
     * Gets the scrolling settings depending on the plugin autoScrolling option
     */


    function getScrollSettings(v) {
      var scroll = {};

      if (options.autoScrolling && !options.scrollBar) {
        scroll.options = {
          'top': -v.dtop
        };
        scroll.element = WRAPPER_SEL;
      } else {
        scroll.options = {
          'scrollTop': v.dtop
        };
        scroll.element = 'html, body';
      }

      return scroll;
    }
    /**
     * Adds sections before or after the current one to create the infinite effect.
     */


    function createInfiniteSections(v) {
      // Scrolling down
      if (!v.isMovementUp) {
        // Move all previous sections to after the active section
        $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
      } else {
        // Scrolling up
        // Move all next sections to before the active section
        $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
      } // Maintain the displayed position (now that we changed the element order)


      silentScroll($(SECTION_ACTIVE_SEL).position().top); // Maintain the active slides visible in the viewport

      keepSlidesPosition(); // save for later the elements that still need to be reordered

      v.wrapAroundElements = v.activeSection; // Recalculate animation variables

      v.dtop = v.element.position().top;
      v.yMovement = getYmovement(v.element); //sections will temporally have another position in the DOM
      //updating this values in case we need them

      v.leavingSection = v.activeSection.index(SECTION_SEL) + 1;
      v.sectionIndex = v.element.index(SECTION_SEL);
      return v;
    }
    /**
     * Fix section order after continuousVertical changes have been animated
     */


    function continuousVerticalFixSectionOrder(v) {
      // If continuousVertical is in effect (and autoScrolling would also be in effect then),
      // finish moving the elements around so the direct navigation will function more simply
      if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
        return;
      }

      if (v.isMovementUp) {
        $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
      } else {
        $(SECTION_LAST_SEL).after(v.wrapAroundElements);
      }

      silentScroll($(SECTION_ACTIVE_SEL).position().top); // Maintain the active slides visible in the viewport

      keepSlidesPosition();
    }
    /**
     * Actions to do once the section is loaded.
     */


    function afterSectionLoads(v) {
      continuousVerticalFixSectionOrder(v); //callback (afterLoad) if the site is not just resizing and readjusting the slides

      $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, v.sectionIndex + 1);

      if (options.scrollOverflow) {
        options.scrollOverflowHandler.afterLoad();
      }

      if (!v.localIsResizing) {
        playMedia(v.element);
      }

      v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
      canScroll = true;
      $.isFunction(v.callback) && v.callback.call(this);
    }
    /**
     * Sets the value for the given attribute from the `data-` attribute with the same suffix
     * ie: data-srcset ==> srcset  |  data-src ==> src
     */


    function setSrc(element, attribute) {
      element.attr(attribute, element.data(attribute)).removeAttr('data-' + attribute);
    }
    /**
     * Lazy loads image, video and audio elements.
     */


    function lazyLoad(destiny) {
      if (!options.lazyLoading) {
        return;
      }

      var panel = getSlideOrSection(destiny);
      var element;
      panel.find('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]').each(function () {
        element = $(this);
        $.each(['src', 'srcset'], function (index, type) {
          var attribute = element.attr('data-' + type);

          if (typeof attribute !== 'undefined' && attribute) {
            setSrc(element, type);
          }
        });

        if (element.is('source')) {
          var typeToPlay = element.closest('video').length ? 'video' : 'audio';
          element.closest(typeToPlay).get(0).load();
        }
      });
    }
    /**
     * Plays video and audio elements.
     */


    function playMedia(destiny) {
      var panel = getSlideOrSection(destiny); //playing HTML5 media elements

      panel.find('video, audio').each(function () {
        var element = $(this).get(0);

        if (element.hasAttribute('data-autoplay') && typeof element.play === 'function') {
          element.play();
        }
      }); //youtube videos

      panel.find('iframe[src*="youtube.com/embed/"]').each(function () {
        var element = $(this).get(0);

        if (element.hasAttribute('data-autoplay')) {
          playYoutube(element);
        } //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.


        element.onload = function () {
          if (element.hasAttribute('data-autoplay')) {
            playYoutube(element);
          }
        };
      });
    }
    /**
     * Plays a youtube video
     */


    function playYoutube(element) {
      element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
    /**
     * Stops video and audio elements.
     */


    function stopMedia(destiny) {
      var panel = getSlideOrSection(destiny); //stopping HTML5 media elements

      panel.find('video, audio').each(function () {
        var element = $(this).get(0);

        if (!element.hasAttribute('data-keepplaying') && typeof element.pause === 'function') {
          element.pause();
        }
      }); //youtube videos

      panel.find('iframe[src*="youtube.com/embed/"]').each(function () {
        var element = $(this).get(0);

        if (/youtube\.com\/embed\//.test($(this).attr('src')) && !element.hasAttribute('data-keepplaying')) {
          $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    }
    /**
     * Gets the active slide (or section) for the given section
     */


    function getSlideOrSection(destiny) {
      var slide = destiny.find(SLIDE_ACTIVE_SEL);

      if (slide.length) {
        destiny = $(slide);
      }

      return destiny;
    }
    /**
     * Scrolls to the anchor in the URL when loading the site
     */


    function scrollToAnchor() {
      var anchors = getAnchorsURL();
      var sectionAnchor = anchors.section;
      var slideAnchor = anchors.slide;

      if (sectionAnchor) {
        //if theres any #
        if (options.animateAnchor) {
          scrollPageAndSlide(sectionAnchor, slideAnchor);
        } else {
          silentMoveTo(sectionAnchor, slideAnchor);
        }
      }
    }
    /**
     * Detecting any change on the URL to scroll to the given anchor link
     * (a way to detect back history button as we play with the hashes on the URL)
     */


    function hashChangeHandler() {
      if (!isScrolling && !options.lockAnchors) {
        var anchors = getAnchorsURL();
        var sectionAnchor = anchors.section;
        var slideAnchor = anchors.slide; //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)

        var isFirstSlideMove = typeof lastScrolledDestiny === 'undefined';
        var isFirstScrollMove = typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving;

        if (sectionAnchor.length) {
          /*in order to call scrollpage() only once for each destination at a time
          It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
          event is fired on every scroll too.*/
          if (sectionAnchor && sectionAnchor !== lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !slideMoving && lastScrolledSlide != slideAnchor) {
            scrollPageAndSlide(sectionAnchor, slideAnchor);
          }
        }
      }
    } //gets the URL anchors (section and slide)


    function getAnchorsURL() {
      var section;
      var slide;
      var hash = window.location.hash;

      if (hash.length) {
        //getting the anchor link in the URL and deleting the `#`
        var anchorsParts = hash.replace('#', '').split('/'); //using / for visual reasons and not as a section/slide separator #2803

        var isFunkyAnchor = hash.indexOf('#/') > -1;
        section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
        var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];

        if (slideAnchor && slideAnchor.length) {
          slide = decodeURIComponent(slideAnchor);
        }
      }

      return {
        section: section,
        slide: slide
      };
    } //Sliding with arrow keys, both, vertical and horizontal


    function keydownHandler(e) {
      clearTimeout(keydownId);
      var activeElement = $(':focus');
      var keyCode = e.which; //tab?

      if (keyCode === 9) {
        onTab(e);
      } else if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') && activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' && options.keyboardScrolling && options.autoScrolling) {
        //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
        var keyControls = [40, 38, 32, 33, 34];

        if ($.inArray(keyCode, keyControls) > -1) {
          e.preventDefault();
        }

        controlPressed = e.ctrlKey;
        keydownId = setTimeout(function () {
          onkeydown(e);
        }, 150);
      }
    }

    function tooltipTextHandler() {
      $(this).prev().trigger('click');
    } //to prevent scrolling while zooming


    function keyUpHandler(e) {
      if (isWindowFocused) {
        //the keyup gets fired on new tab ctrl + t in Firefox
        controlPressed = e.ctrlKey;
      }
    } //binding the mousemove when the mouse's middle button is released


    function mouseDownHandler(e) {
      //middle button
      if (e.which == 2) {
        oldPageY = e.pageY;
        container.on('mousemove', mouseMoveHandler);
      }
    } //unbinding the mousemove when the mouse's middle button is released


    function mouseUpHandler(e) {
      //middle button
      if (e.which == 2) {
        container.off('mousemove');
      }
    } //Scrolling horizontally when clicking on the slider controls.


    function slideArrowHandler() {
      var section = $(this).closest(SECTION_SEL);

      if ($(this).hasClass(SLIDES_PREV)) {
        if (isScrollAllowed.m.left) {
          moveSlideLeft(section);
        }
      } else {
        if (isScrollAllowed.m.right) {
          moveSlideRight(section);
        }
      }
    } //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.


    function blurHandler() {
      isWindowFocused = false;
      controlPressed = false;
    } //Scrolls to the section when clicking the navigation bullet


    function sectionBulletHandler(e) {
      e.preventDefault();
      var index = $(this).parent().index();
      scrollPage($(SECTION_SEL).eq(index));
    } //Scrolls the slider to the given slide destination for the given section


    function slideBulletHandler(e) {
      e.preventDefault();
      var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
      var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());
      landscapeScroll(slides, destiny);
    }
    /**
     * Keydown event
     */


    function onkeydown(e) {
      var shiftPressed = e.shiftKey; //do nothing if we can not scroll or we are not using horizotnal key arrows.

      if (!canScroll && [37, 39].indexOf(e.which) < 0) {
        return;
      }

      switch (e.which) {
        //up
        case 38:
        case 33:
          if (isScrollAllowed.k.up) {
            moveSectionUp();
          }

          break;
        //down

        case 32:
          //spacebar
          if (shiftPressed && isScrollAllowed.k.up) {
            moveSectionUp();
            break;
          }

        /* falls through */

        case 40:
        case 34:
          if (isScrollAllowed.k.down) {
            moveSectionDown();
          }

          break;
        //Home

        case 36:
          if (isScrollAllowed.k.up) {
            moveTo(1);
          }

          break;
        //End

        case 35:
          if (isScrollAllowed.k.down) {
            moveTo($(SECTION_SEL).length);
          }

          break;
        //left

        case 37:
          if (isScrollAllowed.k.left) {
            moveSlideLeft();
          }

          break;
        //right

        case 39:
          if (isScrollAllowed.k.right) {
            moveSlideRight();
          }

          break;

        default:
          return;
        // exit this handler for other keys
      }
    }
    /**
     * Makes sure the tab key will only focus elements within the current section/slide
     * preventing this way from breaking the page.
     * Based on "Modals and keyboard traps"
     * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
     */


    function onTab(e) {
      var isShiftPressed = e.shiftKey;
      var activeElement = $(':focus');
      var activeSection = $(SECTION_ACTIVE_SEL);
      var activeSlide = activeSection.find(SLIDE_ACTIVE_SEL);
      var focusableWrapper = activeSlide.length ? activeSlide : activeSection;
      var focusableElements = focusableWrapper.find(focusableElementsString);

      function preventAndFocusFirst(e) {
        e.preventDefault();
        return focusableElements.first().focus();
      } //is there an element with focus?


      if (activeElement.length) {
        if (!activeElement.closest(SECTION_ACTIVE_SEL, SLIDE_ACTIVE_SEL).length) {
          activeElement = preventAndFocusFirst(e);
        }
      } //no element if focused? Let's focus the first one of the section/slide
      else {
          preventAndFocusFirst(e);
        } //when reached the first or last focusable element of the section/slide
      //we prevent the tab action to keep it in the last focusable element


      if (!isShiftPressed && activeElement.is(focusableElements.last()) || isShiftPressed && activeElement.is(focusableElements.first())) {
        e.preventDefault();
      }
    }
    /**
     * Detecting the direction of the mouse movement.
     * Used only for the middle button of the mouse.
     */


    var oldPageY = 0;

    function mouseMoveHandler(e) {
      if (canScroll) {
        // moving up
        if (e.pageY < oldPageY && isScrollAllowed.m.up) {
          moveSectionUp();
        } // moving down
        else if (e.pageY > oldPageY && isScrollAllowed.m.down) {
            moveSectionDown();
          }
      }

      oldPageY = e.pageY;
    }
    /**
     * Scrolls horizontal sliders.
     */


    function landscapeScroll(slides, destiny, direction) {
      var section = slides.closest(SECTION_SEL);
      var v = {
        slides: slides,
        destiny: destiny,
        direction: direction,
        destinyPos: destiny.position(),
        slideIndex: destiny.index(),
        section: section,
        sectionIndex: section.index(SECTION_SEL),
        anchorLink: section.data('anchor'),
        slidesNav: section.find(SLIDES_NAV_SEL),
        slideAnchor: getAnchor(destiny),
        prevSlide: section.find(SLIDE_ACTIVE_SEL),
        prevSlideIndex: section.find(SLIDE_ACTIVE_SEL).index(),
        //caching the value of isResizing at the momment the function is called
        //because it will be checked later inside a setTimeout and the value might change
        localIsResizing: isResizing
      };
      v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex); //important!! Only do it when not resizing

      if (!v.localIsResizing) {
        //preventing from scrolling to the next/prev section when using scrollHorizontally
        canScroll = false;
      }

      if (options.onSlideLeave) {
        //if the site is not just resizing and readjusting the slides
        if (!v.localIsResizing && v.xMovement !== 'none') {
          if ($.isFunction(options.onSlideLeave)) {
            if (options.onSlideLeave.call(v.prevSlide, v.anchorLink, v.sectionIndex + 1, v.prevSlideIndex, v.direction, v.slideIndex) === false) {
              slideMoving = false;
              return;
            }
          }
        }
      }

      destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);

      if (!v.localIsResizing) {
        stopMedia(v.prevSlide);
        lazyLoad(destiny);
      }

      if (!options.loopHorizontal && options.controlArrows) {
        //hidding it for the fist slide, showing for the rest
        section.find(SLIDES_ARROW_PREV_SEL).toggle(v.slideIndex !== 0); //hidding it for the last slide, showing for the rest

        section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
      } //only changing the URL if the slides are in the current section (not for resize re-adjusting)


      if (section.hasClass(ACTIVE) && !v.localIsResizing) {
        setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
      }

      performHorizontalMove(slides, v, true);
    }

    function afterSlideLoads(v) {
      activeSlidesNavigation(v.slidesNav, v.slideIndex); //if the site is not just resizing and readjusting the slides

      if (!v.localIsResizing) {
        $.isFunction(options.afterSlideLoad) && options.afterSlideLoad.call(v.destiny, v.anchorLink, v.sectionIndex + 1, v.slideAnchor, v.slideIndex); //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
        //and to prevent double scroll right after a windows resize

        canScroll = true;
        playMedia(v.destiny);
      } //letting them slide again


      slideMoving = false;
    }
    /**
     * Performs the horizontal movement. (CSS3 or jQuery)
     *
     * @param fireCallback {Bool} - determines whether or not to fire the callback
     */


    function performHorizontalMove(slides, v, fireCallback) {
      var destinyPos = v.destinyPos;

      if (options.css3) {
        var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';
        addAnimation(slides.find(SLIDES_CONTAINER_SEL)).css(getTransforms(translate3d));
        afterSlideLoadsId = setTimeout(function () {
          fireCallback && afterSlideLoads(v);
        }, options.scrollingSpeed, options.easing);
      } else {
        slides.animate({
          scrollLeft: Math.round(destinyPos.left)
        }, options.scrollingSpeed, options.easing, function () {
          fireCallback && afterSlideLoads(v);
        });
      }
    }
    /**
     * Sets the state for the horizontal bullet navigations.
     */


    function activeSlidesNavigation(slidesNav, slideIndex) {
      slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
      slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
    }

    var previousHeight = windowsHeight; //when resizing the site, we adjust the heights of the sections, slimScroll...

    function resizeHandler() {
      //checking if it needs to get responsive
      responsive(); // rebuild immediately on touch devices

      if (isTouchDevice) {
        var activeElement = $(document.activeElement); //if the keyboard is NOT visible

        if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
          var currentHeight = $window.height(); //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)

          if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
            reBuild(true);
            previousHeight = currentHeight;
          }
        }
      } else {
        //in order to call the functions only when the resize is finished
        //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
        clearTimeout(resizeId);
        resizeId = setTimeout(function () {
          reBuild(true);
        }, 350);
      }
    }
    /**
     * Checks if the site needs to get responsive and disables autoScrolling if so.
     * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
     */


    function responsive() {
      var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity

      var heightLimit = options.responsiveHeight; //only calculating what we need. Remember its called on the resize event.
      // modified by me: take in account retina displays
      //var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;

      var isBreakingPointWidth = widthLimit && window.screen.width < widthLimit; // modified by me: take in account retina displays
      // var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

      var isBreakingPointHeight = heightLimit && window.screen.height < heightLimit;

      if (widthLimit && heightLimit) {
        setResponsive(isBreakingPointWidth || isBreakingPointHeight);
      } else if (widthLimit) {
        setResponsive(isBreakingPointWidth);
      } else if (heightLimit) {
        setResponsive(isBreakingPointHeight);
      }
    }
    /**
     * Adds transition animations for the given element
     */


    function addAnimation(element) {
      var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;
      element.removeClass(NO_TRANSITION);
      return element.css({
        '-webkit-transition': transition,
        'transition': transition
      });
    }
    /**
     * Remove transition animations for the given element
     */


    function removeAnimation(element) {
      return element.addClass(NO_TRANSITION);
    }
    /**
     * Activating the vertical navigation bullets according to the given slide name.
     */


    function activateNavDots(name, sectionIndex) {
      if (options.navigation) {
        $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);

        if (name) {
          $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
        } else {
          $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
        }
      }
    }
    /**
     * Activating the website main menu elements according to the given slide name.
     */


    function activateMenuElement(name) {
      if (options.menu) {
        $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
        $(options.menu).find('[data-menuanchor="' + name + '"]').addClass(ACTIVE);
      }
    }
    /**
     * Sets to active the current menu and vertical nav items.
     */


    function activateMenuAndNav(anchor, index) {
      activateMenuElement(anchor);
      activateNavDots(anchor, index);
    }
    /**
     * Retuns `up` or `down` depending on the scrolling movement to reach its destination
     * from the current section.
     */


    function getYmovement(destiny) {
      var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
      var toIndex = destiny.index(SECTION_SEL);

      if (fromIndex == toIndex) {
        return 'none';
      }

      if (fromIndex > toIndex) {
        return 'up';
      }

      return 'down';
    }
    /**
     * Retuns `right` or `left` depending on the scrolling movement to reach its destination
     * from the current slide.
     */


    function getXmovement(fromIndex, toIndex) {
      if (fromIndex == toIndex) {
        return 'none';
      }

      if (fromIndex > toIndex) {
        return 'left';
      }

      return 'right';
    }

    function addTableClass(element) {
      //In case we are styling for the 2nd time as in with reponsiveSlides
      if (!element.hasClass(TABLE)) {
        element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
      }
    }

    function getTableHeight(element) {
      var sectionHeight = windowsHeight;

      if (options.paddingTop || options.paddingBottom) {
        var section = element;

        if (!section.hasClass(SECTION)) {
          section = element.closest(SECTION_SEL);
        }

        var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
        sectionHeight = windowsHeight - paddings;
      }

      return sectionHeight;
    }
    /**
     * Adds a css3 transform property to the container class with or without animation depending on the animated param.
     */


    function transformContainer(translate3d, animated) {
      if (animated) {
        addAnimation(container);
      } else {
        removeAnimation(container);
      }

      container.css(getTransforms(translate3d)); //syncronously removing the class after the animation has been applied.

      setTimeout(function () {
        container.removeClass(NO_TRANSITION);
      }, 10);
    }
    /**
     * Gets a section by its anchor / index
     */


    function getSectionByAnchor(sectionAnchor) {
      var section = container.find(SECTION_SEL + '[data-anchor="' + sectionAnchor + '"]');

      if (!section.length) {
        var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor - 1 : 0;
        section = $(SECTION_SEL).eq(sectionIndex);
      }

      return section;
    }
    /**
     * Gets a slide inside a given section by its anchor / index
     */


    function getSlideByAnchor(slideAnchor, section) {
      var slide = section.find(SLIDE_SEL + '[data-anchor="' + slideAnchor + '"]');

      if (!slide.length) {
        slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
        slide = section.find(SLIDE_SEL).eq(slideAnchor);
      }

      return slide;
    }
    /**
     * Scrolls to the given section and slide anchors
     */


    function scrollPageAndSlide(sectionAnchor, slideAnchor) {
      var section = getSectionByAnchor(sectionAnchor); //do nothing if there's no section with the given anchor name

      if (!section.length) return;
      var slide = getSlideByAnchor(slideAnchor, section); //we need to scroll to the section and then to the slide

      if (sectionAnchor !== lastScrolledDestiny && !section.hasClass(ACTIVE)) {
        scrollPage(section, function () {
          scrollSlider(slide);
        });
      } //if we were already in the section
      else {
          scrollSlider(slide);
        }
    }
    /**
     * Scrolls the slider to the given slide destination for the given section
     */


    function scrollSlider(slide) {
      if (slide.length) {
        landscapeScroll(slide.closest(SLIDES_WRAPPER_SEL), slide);
      }
    }
    /**
     * Creates a landscape navigation bar with dots for horizontal sliders.
     */


    function addSlidesNavigation(section, numSlides) {
      section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
      var nav = section.find(SLIDES_NAV_SEL); //top or bottom

      nav.addClass(options.slidesNavPosition);

      for (var i = 0; i < numSlides; i++) {
        nav.find('ul').append('<li><a href="#"><span></span></a></li>');
      } //centering it


      nav.css('margin-left', '-' + nav.width() / 2 + 'px');
      nav.find('li').first().find('a').addClass(ACTIVE);
    }
    /**
     * Sets the state of the website depending on the active section/slide.
     * It changes the URL hash when needed and updates the body class.
     */


    function setState(slideIndex, slideAnchor, anchorLink, sectionIndex) {
      var sectionHash = '';

      if (options.anchors.length && !options.lockAnchors) {
        //isn't it the first slide?
        if (slideIndex) {
          if (typeof anchorLink !== 'undefined') {
            sectionHash = anchorLink;
          } //slide without anchor link? We take the index instead.


          if (typeof slideAnchor === 'undefined') {
            slideAnchor = slideIndex;
          }

          lastScrolledSlide = slideAnchor;
          setUrlHash(sectionHash + '/' + slideAnchor); //first slide won't have slide anchor, just the section one
        } else if (typeof slideIndex !== 'undefined') {
          lastScrolledSlide = slideAnchor;
          setUrlHash(anchorLink);
        } //section without slides
        else {
            setUrlHash(anchorLink);
          }
      }

      setBodyClass();
    }
    /**
     * Sets the URL hash.
     */


    function setUrlHash(url) {
      if (options.recordHistory) {
        location.hash = url;
      } else {
        //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
        if (isTouchDevice || isTouch) {
          window.history.replaceState(undefined, undefined, '#' + url);
        } else {
          var baseUrl = window.location.href.split('#')[0];
          window.location.replace(baseUrl + '#' + url);
        }
      }
    }
    /**
     * Gets the anchor for the given slide / section. Its index will be used if there's none.
     */


    function getAnchor(element) {
      var anchor = element.data('anchor');
      var index = element.index(); //Slide without anchor link? We take the index instead.

      if (typeof anchor === 'undefined') {
        anchor = index;
      }

      return anchor;
    }
    /**
     * Sets a class for the body of the page depending on the active section / slide
     */


    function setBodyClass() {
      var section = $(SECTION_ACTIVE_SEL);
      var slide = section.find(SLIDE_ACTIVE_SEL);
      var sectionAnchor = getAnchor(section);
      var slideAnchor = getAnchor(slide);
      var text = String(sectionAnchor);

      if (slide.length) {
        text = text + '-' + slideAnchor;
      } //changing slash for dash to make it a valid CSS style


      text = text.replace('/', '-').replace('#', ''); //removing previous anchor classes

      var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
      $body[0].className = $body[0].className.replace(classRe, ''); //adding the current anchor

      $body.addClass(VIEWING_PREFIX + '-' + text);
    }
    /**
     * Checks for translate3d support
     * @return boolean
     * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
     */


    function support3d() {
      var el = document.createElement('p'),
          has3d,
          transforms = {
        'webkitTransform': '-webkit-transform',
        'OTransform': '-o-transform',
        'msTransform': '-ms-transform',
        'MozTransform': '-moz-transform',
        'transform': 'transform'
      }; // Add it to the body to get the computed style.

      document.body.insertBefore(el, null);

      for (var t in transforms) {
        if (el.style[t] !== undefined) {
          el.style[t] = 'translate3d(1px,1px,1px)';
          has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
        }
      }

      document.body.removeChild(el);
      return has3d !== undefined && has3d.length > 0 && has3d !== 'none';
    }
    /**
     * Removes the auto scrolling action fired by the mouse wheel and trackpad.
     * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
     */


    function removeMouseWheelHandler() {
      if (document.addEventListener) {
        document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper

        document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox

        document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
      } else {
        document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
      }
    }
    /**
     * Adds the auto scrolling action for the mouse wheel and trackpad.
     * After this function is called, the mousewheel and trackpad movements will scroll through sections
     * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
     */


    function addMouseWheelHandler() {
      var prefix = '';

      var _addEventListener;

      if (window.addEventListener) {
        _addEventListener = "addEventListener";
      } else {
        _addEventListener = "attachEvent";
        prefix = 'on';
      } // detect available wheel event


      var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
      document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
      'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox

      if (support == 'DOMMouseScroll') {
        document[_addEventListener](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
      } //handle MozMousePixelScroll in older Firefox
      else {
          document[_addEventListener](prefix + support, MouseWheelHandler, false);
        }
    }
    /**
     * Binding the mousemove when the mouse's middle button is pressed
     */


    function addMiddleWheelHandler() {
      container.on('mousedown', mouseDownHandler).on('mouseup', mouseUpHandler);
    }
    /**
     * Unbinding the mousemove when the mouse's middle button is released
     */


    function removeMiddleWheelHandler() {
      container.off('mousedown', mouseDownHandler).off('mouseup', mouseUpHandler);
    }
    /**
     * Adds the possibility to auto scroll through sections on touch devices.
     */


    function addTouchHandler() {
      if (isTouchDevice || isTouch) {
        if (options.autoScrolling) {
          $body.off(events.touchmove).on(events.touchmove, preventBouncing);
        }

        $(WRAPPER_SEL).off(events.touchstart).on(events.touchstart, touchStartHandler).off(events.touchmove).on(events.touchmove, touchMoveHandler);
      }
    }
    /**
     * Removes the auto scrolling for touch devices.
     */


    function removeTouchHandler() {
      if (isTouchDevice || isTouch) {
        if (options.autoScrolling) {
          $body.off(events.touchmove);
        }

        $(WRAPPER_SEL).off(events.touchstart).off(events.touchmove);
      }
    }
    /*
    * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
    * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
    */


    function getMSPointer() {
      var pointer; //IE >= 11 & rest of browsers

      if (window.PointerEvent) {
        pointer = {
          down: 'pointerdown',
          move: 'pointermove'
        };
      } //IE < 11
      else {
          pointer = {
            down: 'MSPointerDown',
            move: 'MSPointerMove'
          };
        }

      return pointer;
    }
    /**
     * Gets the pageX and pageY properties depending on the browser.
     * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
     */


    function getEventsPage(e) {
      var events = [];
      events.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
      events.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX; //in touch devices with scroll bar, e.pageY is detected, but we have to deal with touch events. #1008

      if (isTouch && isReallyTouch(e) && (options.scrollBar || !options.autoScrolling)) {
        events.y = e.touches[0].pageY;
        events.x = e.touches[0].pageX;
      }

      return events;
    }
    /**
     * Slides silently (with no animation) the active slider to the given slide.
     * @param noCallback {bool} true or defined -> no callbacks
     */


    function silentLandscapeScroll(activeSlide, noCallbacks) {
      setScrollingSpeed(0, 'internal');

      if (typeof noCallbacks !== 'undefined') {
        //preventing firing callbacks afterSlideLoad etc.
        isResizing = true;
      }

      landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

      if (typeof noCallbacks !== 'undefined') {
        isResizing = false;
      }

      setScrollingSpeed(originals.scrollingSpeed, 'internal');
    }
    /**
     * Scrolls silently (with no animation) the page to the given Y position.
     */


    function silentScroll(top) {
      // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
      // that's why we round it to 0.
      var roundedTop = Math.round(top);

      if (options.css3 && options.autoScrolling && !options.scrollBar) {
        var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
        transformContainer(translate3d, false);
      } else if (options.autoScrolling && !options.scrollBar) {
        container.css('top', -roundedTop);
      } else {
        $htmlBody.scrollTop(roundedTop);
      }
    }
    /**
     * Returns the cross-browser transform string.
     */


    function getTransforms(translate3d) {
      return {
        '-webkit-transform': translate3d,
        '-moz-transform': translate3d,
        '-ms-transform': translate3d,
        'transform': translate3d
      };
    }
    /**
     * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
     * @type  m (mouse) or k (keyboard)
     */


    function setIsScrollAllowed(value, direction, type) {
      //up, down, left, right
      if (direction !== 'all') {
        isScrollAllowed[type][direction] = value;
      } //all directions?
      else {
          $.each(Object.keys(isScrollAllowed[type]), function (index, key) {
            isScrollAllowed[type][key] = value;
          });
        }
    }
    /*
    * Destroys fullpage.js plugin events and optinally its html markup and styles
    */


    function destroy(all) {
      setAutoScrolling(false, 'internal');
      setAllowScrolling(false);
      setKeyboardScrolling(false);
      container.addClass(DESTROYED);
      clearTimeout(afterSlideLoadsId);
      clearTimeout(afterSectionLoadsId);
      clearTimeout(resizeId);
      clearTimeout(scrollId);
      clearTimeout(scrollId2);
      $window.off('scroll', scrollHandler).off('hashchange', hashChangeHandler).off('resize', resizeHandler);
      $document.off('click touchstart', SECTION_NAV_SEL + ' a').off('mouseenter', SECTION_NAV_SEL + ' li').off('mouseleave', SECTION_NAV_SEL + ' li').off('click touchstart', SLIDES_NAV_LINK_SEL).off('mouseover', options.normalScrollElements).off('mouseout', options.normalScrollElements);
      $(SECTION_SEL).off('click touchstart', SLIDES_ARROW_SEL);
      clearTimeout(afterSlideLoadsId);
      clearTimeout(afterSectionLoadsId); //lets make a mess!

      if (all) {
        destroyStructure();
      }
    }
    /*
    * Removes inline styles added by fullpage.js
    */


    function destroyStructure() {
      //reseting the `top` or `translate` properties to 0
      silentScroll(0); //loading all the lazy load content

      container.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function () {
        setSrc($(this), 'src');
      });
      container.find('img[data-srcset]').each(function () {
        setSrc($(this), 'srcset');
      });
      $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL + ', ' + SLIDES_ARROW_SEL).remove(); //removing inline styles

      $(SECTION_SEL).css({
        'height': '',
        'background-color': '',
        'padding': ''
      });
      $(SLIDE_SEL).css({
        'width': ''
      });
      container.css({
        'height': '',
        'position': '',
        '-ms-touch-action': '',
        'touch-action': ''
      });
      $htmlBody.css({
        'overflow': '',
        'height': ''
      }); // remove .fp-enabled class

      $('html').removeClass(ENABLED); // remove .fp-responsive class

      $body.removeClass(RESPONSIVE); // remove all of the .fp-viewing- classes

      $.each($body.get(0).className.split(/\s+/), function (index, className) {
        if (className.indexOf(VIEWING_PREFIX) === 0) {
          $body.removeClass(className);
        }
      }); //removing added classes

      $(SECTION_SEL + ', ' + SLIDE_SEL).each(function () {
        if (options.scrollOverflowHandler) {
          options.scrollOverflowHandler.remove($(this));
        }

        $(this).removeClass(TABLE + ' ' + ACTIVE);
        $(this).attr('style', $(this).data('fp-styles'));
      });
      removeAnimation(container); //Unwrapping content

      container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function () {
        //unwrap not being use in case there's no child element inside and its just text
        $(this).replaceWith(this.childNodes);
      }); //removing the applied transition from the fullpage wrapper

      container.css({
        '-webkit-transition': 'none',
        'transition': 'none'
      }); //scrolling the page to the top with no animation

      $htmlBody.scrollTop(0); //removing selectors

      var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
      $.each(usedSelectors, function (index, value) {
        $('.' + value).removeClass(value);
      });
    }
    /*
    * Sets the state for a variable with multiple states (original, and temporal)
    * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
    * This function is used to keep track of both states, the original and the temporal one.
    * If type is not 'internal', then we assume the user is globally changing the variable.
    */


    function setVariableState(variable, value, type) {
      options[variable] = value;

      if (type !== 'internal') {
        originals[variable] = value;
      }
    }
    /**
     * Displays warnings
     */


    function displayWarnings() {
      var extensions = ['fadingEffect', 'continuousHorizontal', 'scrollHorizontally', 'interlockedSlides', 'resetSliders', 'responsiveSlides', 'offsetSections', 'dragAndMove', 'scrollOverflowReset', 'parallax'];

      if ($('html').hasClass(ENABLED)) {
        showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
        return;
      } // Disable mutually exclusive settings


      if (options.continuousVertical && (options.loopTop || options.loopBottom)) {
        options.continuousVertical = false;
        showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
      }

      if (options.scrollBar && options.scrollOverflow) {
        showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
      }

      if (options.continuousVertical && (options.scrollBar || !options.autoScrolling)) {
        options.continuousVertical = false;
        showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
      }

      if (options.scrollOverflow && !options.scrollOverflowHandler) {
        options.scrollOverflow = false;
        showError('error', 'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.');
      } //using extensions? Wrong file!


      $.each(extensions, function (index, extension) {
        //is the option set to true?
        if (options[extension]) {
          showError('warn', 'fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: ' + extension);
        }
      }); //anchors can not have the same value as any element ID or NAME

      $.each(options.anchors, function (index, name) {
        //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
        var nameAttr = $document.find('[name]').filter(function () {
          return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
        });
        var idAttr = $document.find('[id]').filter(function () {
          return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
        });

        if (idAttr.length || nameAttr.length) {
          showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
          idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
          nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
        }
      });
    }
    /**
     * Shows a message in the console of the given type.
     */


    function showError(type, text) {
      console && console[type] && console[type]('fullPage: ' + text);
    }
  }; //end of $.fn.fullpage

});
//# sourceMappingURL=all.js.map
