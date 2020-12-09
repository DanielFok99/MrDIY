function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;
window.Modernizr = function (a, b, c) {
  function D(a) {
    j.cssText = a;
  }

  function E(a, b) {
    return D(n.join(a + ";") + (b || ""));
  }

  function F(a, b) {
    return _typeof(a) === b;
  }

  function G(a, b) {
    return !!~("" + a).indexOf(b);
  }

  function H(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }

    return !1;
  }

  function I(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f;
    }

    return !1;
  }

  function J(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
        e = (a + " " + p.join(d + " ") + d).split(" ");
    return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c));
  }

  function K() {
    e.input = function (c) {
      for (var d = 0, e = c.length; d < e; d++) {
        u[c[d]] = c[d] in k;
      }

      return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u;
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) {
      for (var d = 0, e, f, h, i = a.length; d < i; d++) {
        k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;
      }

      return t;
    }("search tel url email datetime date month week time datetime-local number range color".split(" "));
  }

  var d = "2.8.3",
      e = {},
      f = !0,
      g = b.documentElement,
      h = "modernizr",
      i = b.createElement(h),
      j = i.style,
      k = b.createElement("input"),
      l = ":)",
      m = {}.toString,
      n = " -webkit- -moz- -o- -ms- ".split(" "),
      o = "Webkit Moz O ms",
      p = o.split(" "),
      q = o.toLowerCase().split(" "),
      r = {
    svg: "http://www.w3.org/2000/svg"
  },
      s = {},
      t = {},
      u = {},
      v = [],
      w = v.slice,
      x,
      y = function y(a, c, d, e) {
    var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
    if (parseInt(d, 10)) while (d--) {
      j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
    }
    return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i;
  },
      z = function z(b) {
    var c = a.matchMedia || a.msMatchMedia;
    if (c) return c(b) && c(b).matches || !1;
    var d;
    return y("@media " + b + " { #" + h + " { position: absolute; } }", function (b) {
      d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute";
    }), d;
  },
      A = function () {
    function d(d, e) {
      e = e || b.createElement(a[d] || "div"), d = "on" + d;
      var f = (d in e);
      return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f;
    }

    var a = {
      select: "input",
      change: "input",
      submit: "form",
      reset: "form",
      error: "img",
      load: "img",
      abort: "img"
    };
    return d;
  }(),
      B = {}.hasOwnProperty,
      C;

  !F(B, "undefined") && !F(B.call, "undefined") ? C = function C(a, b) {
    return B.call(a, b);
  } : C = function C(a, b) {
    return b in a && F(a.constructor.prototype[b], "undefined");
  }, Function.prototype.bind || (Function.prototype.bind = function (b) {
    var c = this;
    if (typeof c != "function") throw new TypeError();

    var d = w.call(arguments, 1),
        e = function e() {
      if (this instanceof e) {
        var a = function a() {};

        a.prototype = c.prototype;
        var f = new a(),
            g = c.apply(f, d.concat(w.call(arguments)));
        return Object(g) === g ? g : f;
      }

      return c.apply(b, d.concat(w.call(arguments)));
    };

    return e;
  }), s.flexbox = function () {
    return J("flexWrap");
  }, s.canvas = function () {
    var a = b.createElement("canvas");
    return !!a.getContext && !!a.getContext("2d");
  }, s.canvastext = function () {
    return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function");
  }, s.webgl = function () {
    return !!a.WebGLRenderingContext;
  }, s.touch = function () {
    var c;
    return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
      c = a.offsetTop === 9;
    }), c;
  }, s.geolocation = function () {
    return "geolocation" in navigator;
  }, s.postmessage = function () {
    return !!a.postMessage;
  }, s.websqldatabase = function () {
    return !!a.openDatabase;
  }, s.indexedDB = function () {
    return !!J("indexedDB", a);
  }, s.hashchange = function () {
    return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
  }, s.history = function () {
    return !!a.history && !!history.pushState;
  }, s.draganddrop = function () {
    var a = b.createElement("div");
    return "draggable" in a || "ondragstart" in a && "ondrop" in a;
  }, s.websockets = function () {
    return "WebSocket" in a || "MozWebSocket" in a;
  }, s.rgba = function () {
    return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba");
  }, s.hsla = function () {
    return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla");
  }, s.multiplebgs = function () {
    return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background);
  }, s.backgroundsize = function () {
    return J("backgroundSize");
  }, s.borderimage = function () {
    return J("borderImage");
  }, s.borderradius = function () {
    return J("borderRadius");
  }, s.boxshadow = function () {
    return J("boxShadow");
  }, s.textshadow = function () {
    return b.createElement("div").style.textShadow === "";
  }, s.opacity = function () {
    return E("opacity:.55"), /^0.55$/.test(j.opacity);
  }, s.cssanimations = function () {
    return J("animationName");
  }, s.csscolumns = function () {
    return J("columnCount");
  }, s.cssgradients = function () {
    var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
    return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient");
  }, s.cssreflections = function () {
    return J("boxReflect");
  }, s.csstransforms = function () {
    return !!J("transform");
  }, s.csstransforms3d = function () {
    var a = !!J("perspective");
    return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
      a = b.offsetLeft === 9 && b.offsetHeight === 3;
    }), a;
  }, s.csstransitions = function () {
    return J("transition");
  }, s.fontface = function () {
    var a;
    return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
      var e = b.getElementById("smodernizr"),
          f = e.sheet || e.styleSheet,
          g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
      a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
    }), a;
  }, s.generatedcontent = function () {
    var a;
    return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
      a = b.offsetHeight >= 3;
    }), a;
  }, s.video = function () {
    var a = b.createElement("video"),
        c = !1;

    try {
      if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "");
    } catch (d) {}

    return c;
  }, s.audio = function () {
    var a = b.createElement("audio"),
        c = !1;

    try {
      if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "");
    } catch (d) {}

    return c;
  }, s.localstorage = function () {
    try {
      return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
    } catch (a) {
      return !1;
    }
  }, s.sessionstorage = function () {
    try {
      return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
    } catch (a) {
      return !1;
    }
  }, s.webworkers = function () {
    return !!a.Worker;
  }, s.applicationcache = function () {
    return !!a.applicationCache;
  }, s.svg = function () {
    return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect;
  }, s.inlinesvg = function () {
    var a = b.createElement("div");
    return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg;
  }, s.smil = function () {
    return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")));
  }, s.svgclippaths = function () {
    return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")));
  };

  for (var L in s) {
    C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));
  }

  return e.input || K(), e.addTest = function (a, b) {
    if (_typeof(a) == "object") for (var d in a) {
      C(a, d) && e.addTest(d, a[d]);
    } else {
      a = a.toLowerCase();
      if (e[a] !== c) return e;
      b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b;
    }
    return e;
  }, D(""), i = k = null, function (a, b) {
    function l(a, b) {
      var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
      return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);
    }

    function m() {
      var a = s.elements;
      return typeof a == "string" ? a.split(" ") : a;
    }

    function n(a) {
      var b = j[a[h]];
      return b || (b = {}, i++, a[h] = i, j[i] = b), b;
    }

    function o(a, c, d) {
      c || (c = b);
      if (k) return c.createElement(a);
      d || (d = n(c));
      var g;
      return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g;
    }

    function p(a, c) {
      a || (a = b);
      if (k) return a.createDocumentFragment();
      c = c || n(a);
      var d = c.frag.cloneNode(),
          e = 0,
          f = m(),
          g = f.length;

      for (; e < g; e++) {
        d.createElement(f[e]);
      }

      return d;
    }

    function q(a, b) {
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
        return s.shivMethods ? o(c, a, b) : b.createElem(c);
      }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';
      }) + ");return n}")(s, b.frag);
    }

    function r(a) {
      a || (a = b);
      var c = n(a);
      return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a;
    }

    var c = "3.7.0",
        d = a.html5 || {},
        e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g,
        h = "_html5shiv",
        i = 0,
        j = {},
        k;

    (function () {
      try {
        var a = b.createElement("a");
        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () {
          b.createElement("a");
          var a = b.createDocumentFragment();
          return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined";
        }();
      } catch (c) {
        g = !0, k = !0;
      }
    })();

    var s = {
      elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
      version: c,
      shivCSS: d.shivCSS !== !1,
      supportsUnknownElements: k,
      shivMethods: d.shivMethods !== !1,
      type: "default",
      shivDocument: r,
      createElement: o,
      createDocumentFragment: p
    };
    a.html5 = s, r(b);
  }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function (a) {
    return H([a]);
  }, e.testAllProps = J, e.testStyles = y, e.prefixed = function (a, b, c) {
    return b ? J(a, b, c) : J(a, "pfx");
  }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e;
}(this, this.document), function (a, b, c) {
  function d(a) {
    return "[object Function]" == o.call(a);
  }

  function e(a) {
    return "string" == typeof a;
  }

  function f() {}

  function g(a) {
    return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
  }

  function h() {
    var a = p.shift();
    q = 1, a ? a.t ? m(function () {
      ("c" == a.t ? _B.injectCss : _B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
    }, 0) : (a(), h()) : q = 0;
  }

  function i(a, c, d, e, f, i, j) {
    function k(b) {
      if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
        "img" != a && m(function () {
          t.removeChild(l);
        }, 50);

        for (var d in y[c]) {
          y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
    }

    var j = j || _B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = {
      t: d,
      s: c,
      e: f,
      a: i,
      x: j
    };
    1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
      k.call(this, r);
    }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
  }

  function j(a, b, c, d, f) {
    return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
  }

  function k() {
    var a = _B;
    return a.loader = {
      load: j,
      i: 0
    }, a;
  }

  var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = ("MozAppearance" in l.style),
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w = Array.isArray || function (a) {
    return "[object Array]" == o.call(a);
  },
      x = [],
      y = {},
      z = {
    timeout: function timeout(a, b) {
      return b.length && (a.timeout = b[0]), a;
    }
  },
      _A,
      _B;

  _B = function B(a) {
    function b(a) {
      var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = {
        url: c,
        origUrl: c,
        prefixes: a
      },
          e,
          f,
          g;

      for (f = 0; f < d; f++) {
        g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
      }

      for (f = 0; f < b; f++) {
        c = x[f](c);
      }

      return c;
    }

    function g(a, e, f, g, h) {
      var i = b(a),
          j = i.autoCallback;
      i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;
      })));
    }

    function h(a, b) {
      function c(a, c) {
        if (a) {
          if (e(a)) c || (j = function j() {
            var a = [].slice.call(arguments);
            k.apply(this, a), l();
          }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in m = function () {
            var b = 0,
                c;

            for (c in a) {
              a.hasOwnProperty(c) && b++;
            }

            return b;
          }(), a) {
            a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function j() {
              var a = [].slice.call(arguments);
              k.apply(this, a), l();
            } : j[n] = function (a) {
              return function () {
                var b = [].slice.call(arguments);
                a && a.apply(this, b), l();
              };
            }(k[n])), g(a[n], j, b, n, h));
          }
        } else !c && l();
      }

      var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
      c(h ? a.yep : a.nope, !!i), i && c(i);
    }

    var i,
        j,
        l = this.yepnope.loader;
    if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {
      j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? _B(j) : Object(j) === j && h(j, l);
    } else Object(a) === a && h(a, l);
  }, _B.addPrefix = function (a, b) {
    z[a] = b;
  }, _B.addFilter = function (a) {
    x.push(a);
  }, _B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", _A = function A() {
    b.removeEventListener("DOMContentLoaded", _A, 0), b.readyState = "complete";
  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
    var k = b.createElement("script"),
        l,
        o,
        e = e || _B.errorTimeout;
    k.src = a;

    for (o in d) {
      k.setAttribute(o, d[o]);
    }

    c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);
    }, m(function () {
      l || (l = 1, c(1));
    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);
  }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
    var e = b.createElement("link"),
        j,
        c = i ? h : c || f;
    e.href = a, e.rel = "stylesheet", e.type = "text/css";

    for (j in d) {
      e.setAttribute(j, d[j]);
    }

    g || (n.parentNode.insertBefore(e, n), m(c, 0));
  };
}(this, document), Modernizr.load = function () {
  yepnope.apply(window, [].slice.call(arguments, 0));
};
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */

!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
      this._handlers[c] = a.proxy(this[c], this);
    }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
    }, this)), a.each(e.Workers, a.proxy(function (b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      });
    }, this)), this.setup(), this.initialize();
  }

  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function run() {
      this._width = this.$element.width();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = this._items && this._items[this.relative(this._current)];
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      this.$stage.children(".cloned").remove();
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this.settings.margin || "",
          c = !this.settings.autoWidth,
          d = this.settings.rtl,
          e = {
        width: "auto",
        "margin-left": d ? b : "",
        "margin-right": d ? "" : b
      };
      !c && this.$stage.children().css(e), a.css = e;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          c = null,
          d = this._items.length,
          e = !this.settings.autoWidth,
          f = [];

      for (a.items = {
        merge: !1,
        width: b
      }; d--;) {
        c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      }

      this._widths = f;
    }
  }, {
    filter: ["items", "settings"],
    run: function run() {
      var b = [],
          c = this._items,
          d = this.settings,
          e = Math.max(2 * d.items, 4),
          f = 2 * Math.ceil(c.length / 2),
          g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
          h = "",
          i = "";

      for (g /= 2; g--;) {
        b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
      }

      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
        d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      }

      this._coordinates = f;
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run() {
      var a = this.settings.stagePadding,
          b = this._coordinates,
          c = {
        width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
        "padding-left": a || "",
        "padding-right": a || ""
      };
      this.$stage.css(c);
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      var b = this._coordinates.length,
          c = !this.settings.autoWidth,
          d = this.$stage.children();
      if (c && a.items.merge) for (; b--;) {
        a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      } else c && (a.css.width = a.items.width, d.css(a.css));
    }
  }, {
    filter: ["items"],
    run: function run() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style");
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function run(a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
    }
  }, {
    filter: ["position"],
    run: function run() {
      this.animate(this.coordinates(this._current));
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function run() {
      var a,
          b,
          c,
          d,
          e = this.settings.rtl ? 1 : -1,
          f = 2 * this.settings.stagePadding,
          g = this.coordinates(this.current()) + f,
          h = g + this.width() * e,
          i = [];

      for (c = 0, d = this._coordinates.length; c < d; c++) {
        a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      }

      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
    }
  }], e.prototype.initialize = function () {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var b, c, e;
      b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b);
    }

    this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
  }, e.prototype.setup = function () {
    var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
    c ? (a.each(c, function (a) {
      a <= b && a > d && (d = Number(a));
    }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }, e.prototype.optionsLogic = function () {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data;
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a];
    }, this._invalidated), e = {}; b < c;) {
      (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    }

    this._invalidated = {}, !this.is("valid") && this.enter("valid");
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;

      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;
    }
  }, e.prototype.refresh = function () {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
  }, e.prototype.onResize = function () {
    return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
  }, e.prototype.registerEventHandlers = function () {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
      return !1;
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
  }, e.prototype.onDragStart = function (b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
    }, this)));
  }, e.prototype.onDragMove = function (a) {
    var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
  }, e.prototype.onDragEnd = function (b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
      return !1;
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
  }, e.prototype.closest = function (b, c) {
    var d = -1,
        e = 30,
        f = this.width(),
        g = this.coordinates();
    return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
      return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1;
    }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d;
  }, e.prototype.animate = function (b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s"
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    });
  }, e.prototype.is = function (a) {
    return this._states.current[a] && this._states.current[a] > 0;
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;

    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }

    return this._current;
  }, e.prototype.invalidate = function (b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
      return b;
    });
  }, e.prototype.reset = function (a) {
    a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
  }, e.prototype.normalize = function (a, b) {
    var c = this._items.length,
        e = b ? 0 : this._clones.length;
    return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
  }, e.prototype.relative = function (a) {
    return a -= this._clones.length / 2, this.normalize(a, !0);
  }, e.prototype.maximum = function (a) {
    var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
    if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
      for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) {
        ;
      }

      f = b + 1;
    } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
    return a && (f -= this._clones.length / 2), Math.max(f, 0);
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2;
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function f(a) {
      return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
    };

    return b === d ? a.map(this._clones, function (a, b) {
      return f(b);
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null;
    });
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed;
  }, e.prototype.coordinates = function (b) {
    var c,
        e = 1,
        f = b - 1;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b);
    }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
  }, e.prototype.duration = function (a, b, c) {
    return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
  }, e.prototype.to = function (a, b) {
    var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update();
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a);
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a);
  }, e.prototype.onTransitionEnd = function (a) {
    if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated");
  }, e.prototype.viewport = function () {
    var d;
    return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType;
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, e.prototype.add = function (b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    });
  }, e.prototype.remove = function (a) {
    a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }));
  }, e.prototype.preloadAutoWidthImages = function (b) {
    b.each(a.proxy(function (b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
    }, this));
  }, e.prototype.destroy = function () {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));

    for (var d in this._plugins) {
      this._plugins[d].destroy();
    }

    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;

    switch (b) {
      case "<":
        return d ? a > c : a < c;

      case ">":
        return d ? a < c : a > c;

      case ">=":
        return d ? a <= c : a >= c;

      case "<=":
        return d ? a >= c : a <= c;
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
  }, e.prototype.trigger = function (b, c, d, f, g) {
    var h = {
      item: {
        count: this._items.length,
        index: this.current()
      }
    },
        i = a.camelCase(a.grep(["on", b, d], function (a) {
      return a;
    }).join("-").toLowerCase()),
        j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
      relatedTarget: this
    }, h, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(j);
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
  }, e.prototype.enter = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
    }, this));
  }, e.prototype.leave = function (b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
      this._states.current[b]--;
    }, this));
  }, e.prototype.register = function (b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function (a) {
          return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
        }, a.event.special[b.name].owl = !0;
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d;
    }, this)));
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0;
    }, this));
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b];
    }, this));
  }, e.prototype.pointer = function (a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
  }, e.prototype.isNumeric = function (a) {
    return !isNaN(parseFloat(a));
  }, e.prototype.difference = function (a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    };
  }, a.fn.owlCarousel = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
          f = d.data("owl.carousel");
      f || (f = new e(this, "object" == _typeof(b) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
        }, f));
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
    });
  }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoRefresh && this.watch();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function () {
    this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
  }, e.prototype.refresh = function () {
    this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
  }, e.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this._interval);

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
          this.load(b);
        }, this); f++ < e;) {
          this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    lazyLoad: !1
  }, e.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c),
        e = d && d.find(".owl-lazy");

    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e,
          f = a(d),
          g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this)).attr("src", g) : (e = new Image(), e.onload = a.proxy(function () {
        f.css({
          "background-image": 'url("' + g + '")',
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy");
      }, this), e.src = g);
    }, this)), this._loaded.push(d.get(0)));
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this._core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && this.update();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
      }, this),
      "loaded.owl.lazy": a.proxy(function (a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };

  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function () {
    var b = this._core._current,
        c = b + this._core.settings.items,
        d = this._core.$stage.children().toArray().slice(b, c),
        e = [],
        f = 0;

    a.each(d, function (b, c) {
      e.push(a(c).height());
    }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        });
      }, this),
      "resize.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop();
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a);
    }, this));
  };

  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function (a, b) {
    var c = function () {
      return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
    }(),
        d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
        e = a.attr("data-width") || this._core.settings.videoWidth,
        f = a.attr("data-height") || this._core.settings.videoHeight,
        g = a.attr("href");

    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
      if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
      c = "vzaar";
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
  }, e.prototype.thumbnail = function (b, c) {
    var d,
        e,
        f,
        g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
        h = b.find("img"),
        i = "src",
        j = "",
        k = this._core.settings,
        l = function l(a) {
      e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e);
    };

    if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
    "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
      type: "GET",
      url: "//vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a[0].thumbnail_large, l(f);
      }
    }) : "vzaar" === c.type && a.ajax({
      type: "GET",
      url: "//vzaar.com/api/videos/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function success(a) {
        f = a.framegrab_url, l(f);
      }
    });
  }, e.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
  }, e.prototype.play = function (b) {
    var c,
        d = a(b.target),
        e = d.closest("." + this._core.settings.itemClass),
        f = this._videos[e.attr("data-video")],
        g = f.width || "100%",
        h = f.height || this._core.$stage.height();

    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
  }, e.prototype.isInFullScreen = function () {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame");
  }, e.prototype.destroy = function () {
    var a, b;

    this._core.$element.off("click.owl.video");

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        a.namespace && (this.swapping = "translated" == a.type);
      }, this),
      "translate.owl.carousel": a.proxy(function (a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this)
    }, this.core.$element.on(this.handlers);
  };

  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function () {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b,
          c = a.proxy(this.clear, this),
          d = this.core.$stage.children().eq(this.previous),
          e = this.core.$stage.children().eq(this.next),
          f = this.core.settings.animateIn,
          g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
  }, e.prototype.destroy = function () {
    var a, b;

    for (a in this.handlers) {
      this.core.$element.off(a, this.handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function e(b) {
    this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.autoplay && this.play();
      }, this),
      "play.owl.autoplay": a.proxy(function (a, b, c) {
        a.namespace && this.play(b, c);
      }, this),
      "stop.owl.autoplay": a.proxy(function (a) {
        a.namespace && this.stop();
      }, this),
      "mouseover.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
      }, this),
      "touchstart.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
      }, this),
      "touchend.owl.core": a.proxy(function () {
        this._core.settings.autoplayHoverPause && this.play();
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
  };

  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype.play = function (a, b) {
    this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
  }, e.prototype._getNextTimeout = function (d, e) {
    return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
      this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
    }, this), d || this._core.settings.autoplayTimeout);
  }, e.prototype._setAutoPlayInterval = function () {
    this._timeout = this._getNextTimeout();
  }, e.prototype.stop = function () {
    this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
  }, e.prototype.pause = function () {
    this._core.is("rotating") && (this._paused = !0);
  }, e.prototype.destroy = function () {
    var a, b;
    this.stop();

    for (a in this._handlers) {
      this._core.$element.off(a, this._handlers[a]);
    }

    for (b in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[b] && (this[b] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
      }, this),
      "added.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
      }, this),
      "remove.owl.carousel": a.proxy(function (a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        a.namespace && "position" == a.property.name && this.draw();
      }, this),
      "initialized.owl.carousel": a.proxy(function (a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
      }, this),
      "refreshed.owl.carousel": a.proxy(function (a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
  };

  e.Defaults = {
    nav: !1,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function () {
    var b,
        c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.prev(c.navSpeed);
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
      this.next(c.navSpeed);
    }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed);
    }, this));

    for (b in this._overrides) {
      this._core[b] = a.proxy(this[b], this);
    }
  }, e.prototype.destroy = function () {
    var a, b, c, d;

    for (a in this._handlers) {
      this.$element.off(a, this._handlers[a]);
    }

    for (b in this._controls) {
      this._controls[b].remove();
    }

    for (d in this.overides) {
      this._core[d] = this._overrides[d];
    }

    for (c in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[c] && (this[c] = null);
    }
  }, e.prototype.update = function () {
    var a,
        b,
        c,
        d = this._core.clones().length / 2,
        e = d + this._core.items().length,
        f = this._core.maximum(!0),
        g = this._core.settings,
        h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;

    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
      if (b >= h || 0 === b) {
        if (this._pages.push({
          start: Math.min(f, a - d),
          end: a - d + h - 1
        }), Math.min(f, a - d) === f) break;
        b = 0, ++c;
      }

      b += this._core.mergers(this._core.relative(a));
    }
  }, e.prototype.draw = function () {
    var b,
        c = this._core.settings,
        d = this._core.items().length <= c.items,
        e = this._core.relative(this._core.current()),
        f = c.loop || c.rewind;

    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
  }, e.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    };
  }, e.prototype.current = function () {
    var b = this._core.relative(this._core.current());

    return a.grep(this._pages, a.proxy(function (a, c) {
      return a.start <= b && a.end >= b;
    }, this)).pop();
  }, e.prototype.getPosition = function (b) {
    var c,
        d,
        e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
  }, e.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
  }, e.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
  }, e.prototype.to = function (b, c, d) {
    var e;
    !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  "use strict";

  var e = function e(c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function (c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content;
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
              e = a.map(this._hashes, function (a, b) {
            return a === d ? b : null;
          }).join();

          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e;
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
      var c = b.location.hash.substring(1),
          e = this._core.$stage.children(),
          f = this._hashes[c] && e.index(this._hashes[c]);

      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
    }, this));
  };

  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");

    for (c in this._handlers) {
      this._core.$element.off(c, this._handlers[c]);
    }

    for (d in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[d] && (this[d] = null);
    }
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  function e(b, c) {
    var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
      if (g[b] !== d) return e = !c || b, !1;
    }), e;
  }

  function f(a) {
    return e(a, !0);
  }

  var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
    transition: {
      end: {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd",
        transition: "transitionend"
      }
    },
    animation: {
      end: {
        WebkitAnimation: "webkitAnimationEnd",
        MozAnimation: "animationend",
        OAnimation: "oAnimationEnd",
        animation: "animationend"
      }
    }
  },
      j = {
    csstransforms: function csstransforms() {
      return !!e("transform");
    },
    csstransforms3d: function csstransforms3d() {
      return !!e("perspective");
    },
    csstransitions: function csstransitions() {
      return !!e("transition");
    },
    cssanimations: function cssanimations() {
      return !!e("animation");
    }
  };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);
/*!
* metismenu - v2.7.8
* A jQuery menu plugin
* https://github.com/onokumus/metismenu#readme
*
* Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* Under MIT License
*/

!function (n, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : n.metisMenu = e(n.jQuery);
}(this, function (n) {
  "use strict";

  function a(s) {
    for (var n = 1; n < arguments.length; n++) {
      var a = null != arguments[n] ? arguments[n] : {},
          e = Object.keys(a);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(a).filter(function (n) {
        return Object.getOwnPropertyDescriptor(a, n).enumerable;
      }))), e.forEach(function (n) {
        var e, i, t;
        e = s, t = a[i = n], i in e ? Object.defineProperty(e, i, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[i] = t;
      });
    }

    return s;
  }

  var o,
      e,
      r,
      i,
      t,
      l,
      c,
      s,
      g = function (t) {
    var e = "transitionend",
        s = {
      TRANSITION_END: "mmTransitionEnd",
      triggerTransitionEnd: function triggerTransitionEnd(n) {
        t(n).trigger(e);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      }
    };

    function n(n) {
      var e = this,
          i = !1;
      return t(this).one(s.TRANSITION_END, function () {
        i = !0;
      }), setTimeout(function () {
        i || s.triggerTransitionEnd(e);
      }, n), this;
    }

    return t.fn.mmEmulateTransitionEnd = n, t.event.special[s.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function handle(n) {
        if (t(n.target).is(this)) return n.handleObj.handler.apply(this, arguments);
      }
    }, s;
  }(n = n && n.hasOwnProperty("default") ? n["default"] : n);

  return i = "." + (r = e = "metisMenu"), t = (o = n).fn[e], l = {
    toggle: !0,
    preventDefault: !0,
    activeClass: "active",
    collapseClass: "collapse",
    collapseInClass: "in",
    collapsingClass: "collapsing",
    triggerElement: "a",
    parentTrigger: "li",
    subMenu: "ul"
  }, c = {
    SHOW: "show" + i,
    SHOWN: "shown" + i,
    HIDE: "hide" + i,
    HIDDEN: "hidden" + i,
    CLICK_DATA_API: "click" + i + ".data-api"
  }, s = function () {
    function s(n, e) {
      this.element = n, this.config = a({}, l, e), this.transitioning = null, this.init();
    }

    var n = s.prototype;
    return n.init = function () {
      var a = this,
          r = this.config;
      o(this.element).find(r.parentTrigger + "." + r.activeClass).has(r.subMenu).children(r.subMenu).addClass(r.collapseClass + " " + r.collapseInClass), o(this.element).find(r.parentTrigger).not("." + r.activeClass).has(r.subMenu).children(r.subMenu).addClass(r.collapseClass), o(this.element).find(r.parentTrigger).has(r.subMenu).children(r.triggerElement).on(c.CLICK_DATA_API, function (n) {
        var e = o(this),
            i = e.parent(r.parentTrigger),
            t = i.siblings(r.parentTrigger).children(r.triggerElement),
            s = i.children(r.subMenu);
        r.preventDefault && n.preventDefault(), "true" !== e.attr("aria-disabled") && (i.hasClass(r.activeClass) ? (e.attr("aria-expanded", !1), a.hide(s)) : (a.show(s), e.attr("aria-expanded", !0), r.toggle && t.attr("aria-expanded", !1)), r.onTransitionStart && r.onTransitionStart(n));
      });
    }, n.show = function (n) {
      var e = this;

      if (!this.transitioning && !o(n).hasClass(this.config.collapsingClass)) {
        var i = o(n),
            t = o.Event(c.SHOW);

        if (i.trigger(t), !t.isDefaultPrevented()) {
          i.parent(this.config.parentTrigger).addClass(this.config.activeClass), this.config.toggle && this.hide(i.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + this.config.collapseInClass)), i.removeClass(this.config.collapseClass).addClass(this.config.collapsingClass).height(0), this.setTransitioning(!0);
          i.height(n[0].scrollHeight).one(g.TRANSITION_END, function () {
            e.config && e.element && (i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass + " " + e.config.collapseInClass).height(""), e.setTransitioning(!1), i.trigger(c.SHOWN));
          }).mmEmulateTransitionEnd(350);
        }
      }
    }, n.hide = function (n) {
      var e = this;

      if (!this.transitioning && o(n).hasClass(this.config.collapseInClass)) {
        var i = o(n),
            t = o.Event(c.HIDE);

        if (i.trigger(t), !t.isDefaultPrevented()) {
          i.parent(this.config.parentTrigger).removeClass(this.config.activeClass), i.height(i.height())[0].offsetHeight, i.addClass(this.config.collapsingClass).removeClass(this.config.collapseClass).removeClass(this.config.collapseInClass), this.setTransitioning(!0);

          var s = function s() {
            e.config && e.element && (e.transitioning && e.config.onTransitionEnd && e.config.onTransitionEnd(), e.setTransitioning(!1), i.trigger(c.HIDDEN), i.removeClass(e.config.collapsingClass).addClass(e.config.collapseClass));
          };

          0 === i.height() || "none" === i.css("display") ? s() : i.height(0).one(g.TRANSITION_END, s).mmEmulateTransitionEnd(350);
        }
      }
    }, n.setTransitioning = function (n) {
      this.transitioning = n;
    }, n.dispose = function () {
      o.removeData(this.element, r), o(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"), this.transitioning = null, this.config = null, this.element = null;
    }, s.jQueryInterface = function (t) {
      return this.each(function () {
        var n = o(this),
            e = n.data(r),
            i = a({}, l, n.data(), "object" == _typeof(t) && t ? t : {});

        if (!e && /dispose/.test(t) && this.dispose(), e || (e = new s(this, i), n.data(r, e)), "string" == typeof t) {
          if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
          e[t]();
        }
      });
    }, s;
  }(), o.fn[e] = s.jQueryInterface, o.fn[e].Constructor = s, o.fn[e].noConflict = function () {
    return o.fn[e] = t, s.jQueryInterface;
  }, s;
});
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */

(function (e) {
  e.fn.extend({
    slimScroll: function slimScroll(f) {
      var a = e.extend({
        width: "auto",
        height: "250px",
        size: "7px",
        color: "#000",
        position: "right",
        distance: "1px",
        start: "top",
        opacity: .4,
        alwaysVisible: !1,
        disableFadeOut: !1,
        railVisible: !1,
        railColor: "#333",
        railOpacity: .2,
        railDraggable: !0,
        railClass: "slimScrollRail",
        barClass: "slimScrollBar",
        wrapperClass: "slimScrollDiv",
        allowPageScroll: !1,
        wheelStep: 20,
        touchScrollStep: 200,
        borderRadius: "7px",
        railBorderRadius: "7px"
      }, f);
      this.each(function () {
        function v(d) {
          if (r) {
            d = d || window.event;
            var c = 0;
            d.wheelDelta && (c = -d.wheelDelta / 120);
            d.detail && (c = d.detail / 3);
            e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && n(c, !0);
            d.preventDefault && !k && d.preventDefault();
            k || (d.returnValue = !1);
          }
        }

        function n(d, g, e) {
          k = !1;
          var f = b.outerHeight() - c.outerHeight();
          g && (g = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), g = Math.min(Math.max(g, 0), f), g = 0 < d ? Math.ceil(g) : Math.floor(g), c.css({
            top: g + "px"
          }));
          l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
          g = l * (b[0].scrollHeight - b.outerHeight());
          e && (g = d, d = g / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), f), c.css({
            top: d + "px"
          }));
          b.scrollTop(g);
          b.trigger("slimscrolling", ~~g);
          w();
          p();
        }

        function x() {
          u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);
          c.css({
            height: u + "px"
          });
          var a = u == b.outerHeight() ? "none" : "block";
          c.css({
            display: a
          });
        }

        function w() {
          x();
          clearTimeout(B);
          l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
          C = l;
          u >= b.outerHeight() ? k = !0 : (c.stop(!0, !0).fadeIn("fast"), a.railVisible && m.stop(!0, !0).fadeIn("fast"));
        }

        function p() {
          a.alwaysVisible || (B = setTimeout(function () {
            a.disableFadeOut && r || y || z || (c.fadeOut("slow"), m.fadeOut("slow"));
          }, 1E3));
        }

        var r,
            y,
            z,
            B,
            A,
            u,
            l,
            C,
            k = !1,
            b = e(this);

        if (b.parent().hasClass(a.wrapperClass)) {
          var q = b.scrollTop(),
              c = b.siblings("." + a.barClass),
              m = b.siblings("." + a.railClass);
          x();

          if (e.isPlainObject(f)) {
            if ("height" in f && "auto" == f.height) {
              b.parent().css("height", "auto");
              b.css("height", "auto");
              var h = b.parent().parent().height();
              b.parent().css("height", h);
              b.css("height", h);
            } else "height" in f && (h = f.height, b.parent().css("height", h), b.css("height", h));

            if ("scrollTo" in f) q = parseInt(a.scrollTo);else if ("scrollBy" in f) q += parseInt(a.scrollBy);else if ("destroy" in f) {
              c.remove();
              m.remove();
              b.unwrap();
              return;
            }
            n(q, !1, !0);
          }
        } else if (!(e.isPlainObject(f) && "destroy" in f)) {
          a.height = "auto" == a.height ? b.parent().height() : a.height;
          q = e("<div></div>").addClass(a.wrapperClass).css({
            position: "relative",
            overflow: "hidden",
            width: a.width,
            height: a.height
          });
          b.css({
            overflow: "hidden",
            width: a.width,
            height: a.height
          });
          var m = e("<div></div>").addClass(a.railClass).css({
            width: a.size,
            height: "100%",
            position: "absolute",
            top: 0,
            display: a.alwaysVisible && a.railVisible ? "block" : "none",
            "border-radius": a.railBorderRadius,
            background: a.railColor,
            opacity: a.railOpacity,
            zIndex: 90
          }),
              c = e("<div></div>").addClass(a.barClass).css({
            background: a.color,
            width: a.size,
            position: "absolute",
            top: 0,
            opacity: a.opacity,
            display: a.alwaysVisible ? "block" : "none",
            "border-radius": a.borderRadius,
            BorderRadius: a.borderRadius,
            MozBorderRadius: a.borderRadius,
            WebkitBorderRadius: a.borderRadius,
            zIndex: 99
          }),
              h = "right" == a.position ? {
            right: a.distance
          } : {
            left: a.distance
          };
          m.css(h);
          c.css(h);
          b.wrap(q);
          b.parent().append(c);
          b.parent().append(m);
          a.railDraggable && c.bind("mousedown", function (a) {
            var b = e(document);
            z = !0;
            t = parseFloat(c.css("top"));
            pageY = a.pageY;
            b.bind("mousemove.slimscroll", function (a) {
              currTop = t + a.pageY - pageY;
              c.css("top", currTop);
              n(0, c.position().top, !1);
            });
            b.bind("mouseup.slimscroll", function (a) {
              z = !1;
              p();
              b.unbind(".slimscroll");
            });
            return !1;
          }).bind("selectstart.slimscroll", function (a) {
            a.stopPropagation();
            a.preventDefault();
            return !1;
          });
          m.hover(function () {
            w();
          }, function () {
            p();
          });
          c.hover(function () {
            y = !0;
          }, function () {
            y = !1;
          });
          b.hover(function () {
            r = !0;
            w();
            p();
          }, function () {
            r = !1;
            p();
          });
          b.bind("touchstart", function (a, b) {
            a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY);
          });
          b.bind("touchmove", function (b) {
            k || b.originalEvent.preventDefault();
            b.originalEvent.touches.length && (n((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY);
          });
          x();
          "bottom" === a.start ? (c.css({
            top: b.outerHeight() - c.outerHeight()
          }), n(0, !0)) : "top" !== a.start && (n(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
          window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v);
        }
      });
      return this;
    }
  });
  e.fn.extend({
    slimscroll: e.fn.slimScroll
  });
})(jQuery);
/*!
 * SlickNav Responsive Mobile Menu v1.0.10
 * (c) 2016 Josh Cope
 * licensed under MIT
 */


!function (e, t, n) {
  function a(t, n) {
    this.element = t, this.settings = e.extend({}, i, n), this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = i, this._name = s, this.init();
  }

  var i = {
    label: "MENU",
    duplicate: !0,
    duration: 200,
    easingOpen: "swing",
    easingClose: "swing",
    closedSymbol: "&#9658;",
    openedSymbol: "&#9660;",
    prependTo: "body",
    appendTo: "",
    parentTag: "a",
    closeOnClick: !1,
    allowParentLinks: !1,
    nestedParentLinks: !0,
    showChildren: !1,
    removeIds: !0,
    removeClasses: !1,
    removeStyles: !1,
    brand: "",
    animations: "jquery",
    init: function init() {},
    beforeOpen: function beforeOpen() {},
    beforeClose: function beforeClose() {},
    afterOpen: function afterOpen() {},
    afterClose: function afterClose() {}
  },
      s = "slicknav",
      o = "slicknav",
      l = {
    DOWN: 40,
    ENTER: 13,
    ESCAPE: 27,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  };
  a.prototype.init = function () {
    var n,
        a,
        i = this,
        s = e(this.element),
        r = this.settings;

    if (r.duplicate ? i.mobileNav = s.clone() : i.mobileNav = s, r.removeIds && (i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function (t, n) {
      e(n).removeAttr("id");
    })), r.removeClasses && (i.mobileNav.removeAttr("class"), i.mobileNav.find("*").each(function (t, n) {
      e(n).removeAttr("class");
    })), r.removeStyles && (i.mobileNav.removeAttr("style"), i.mobileNav.find("*").each(function (t, n) {
      e(n).removeAttr("style");
    })), n = o + "_icon", "" === r.label && (n += " " + o + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), i.mobileNav.attr("class", o + "_nav"), a = e('<div class="' + o + '_menu"></div>'), "" !== r.brand) {
      var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
      e(a).append(c);
    }

    i.btn = e(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + o + "_btn " + o + '_collapsed">', '<span class="' + o + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), e(a).append(i.btn), "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a), a.append(i.mobileNav);
    var p = i.mobileNav.find("li");
    e(p).each(function () {
      var t = e(this),
          n = {};

      if (n.children = t.children("ul").attr("role", "menu"), t.data("menu", n), n.children.length > 0) {
        var a = t.contents(),
            s = !1,
            l = [];
        e(a).each(function () {
          return e(this).is("ul") ? !1 : (l.push(this), void (e(this).is("a") && (s = !0)));
        });
        var c = e("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + o + '_item"/>');
        if (r.allowParentLinks && !r.nestedParentLinks && s) e(l).wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>').parent();else {
          var p = e(l).wrapAll(c).parent();
          p.addClass(o + "_row");
        }
        r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"), t.addClass(o + "_parent");
        var d = e('<span class="' + o + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>");
        r.allowParentLinks && !r.nestedParentLinks && s && (d = d.wrap(c).parent()), e(l).last().after(d);
      } else 0 === t.children().length && t.addClass(o + "_txtnode");

      t.children("a").attr("role", "menuitem").click(function (t) {
        r.closeOnClick && !e(t.target).parent().closest("li").hasClass(o + "_parent") && e(i.btn).click();
      }), r.closeOnClick && r.allowParentLinks && (t.children("a").children("a").click(function (t) {
        e(i.btn).click();
      }), t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function (t) {
        e(i.btn).click();
      }));
    }), e(p).each(function () {
      var t = e(this).data("menu");
      r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0);
    }), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), e(t).mousedown(function () {
      i._outlines(!1);
    }), e(t).keyup(function () {
      i._outlines(!0);
    }), e(i.btn).click(function (e) {
      e.preventDefault(), i._menuToggle();
    }), i.mobileNav.on("click", "." + o + "_item", function (t) {
      t.preventDefault(), i._itemClick(e(this));
    }), e(i.btn).keydown(function (t) {
      var n = t || event;

      switch (n.keyCode) {
        case l.ENTER:
        case l.SPACE:
        case l.DOWN:
          t.preventDefault(), n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open") || i._menuToggle(), e(i.btn).next().find('[role="menuitem"]').first().focus();
      }
    }), i.mobileNav.on("keydown", "." + o + "_item", function (t) {
      var n = t || event;

      switch (n.keyCode) {
        case l.ENTER:
          t.preventDefault(), i._itemClick(e(t.target));
          break;

        case l.RIGHT:
          t.preventDefault(), e(t.target).parent().hasClass(o + "_collapsed") && i._itemClick(e(t.target)), e(t.target).next().find('[role="menuitem"]').first().focus();
      }
    }), i.mobileNav.on("keydown", '[role="menuitem"]', function (t) {
      var n = t || event;

      switch (n.keyCode) {
        case l.DOWN:
          t.preventDefault();
          var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
              s = a.index(t.target),
              r = s + 1;
          a.length <= r && (r = 0);
          var c = a.eq(r);
          c.focus();
          break;

        case l.UP:
          t.preventDefault();
          var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'),
              s = a.index(t.target),
              c = a.eq(s - 1);
          c.focus();
          break;

        case l.LEFT:
          if (t.preventDefault(), e(t.target).parent().parent().parent().hasClass(o + "_open")) {
            var p = e(t.target).parent().parent().prev();
            p.focus(), i._itemClick(p);
          } else e(t.target).parent().parent().hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());

          break;

        case l.ESCAPE:
          t.preventDefault(), i._menuToggle(), e(i.btn).focus();
      }
    }), r.allowParentLinks && r.nestedParentLinks && e("." + o + "_item a").click(function (e) {
      e.stopImmediatePropagation();
    });
  }, a.prototype._menuToggle = function (e) {
    var t = this,
        n = t.btn,
        a = t.mobileNav;
    n.hasClass(o + "_collapsed") ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open")) : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")), n.addClass(o + "_animating"), t._visibilityToggle(a, n.parent(), !0, n);
  }, a.prototype._itemClick = function (e) {
    var t = this,
        n = t.settings,
        a = e.data("menu");
    a || (a = {}, a.arrow = e.children("." + o + "_arrow"), a.ul = e.next("ul"), a.parent = e.parent(), a.parent.hasClass(o + "_parent-link") && (a.parent = e.parent().parent(), a.ul = e.parent().next("ul")), e.data("menu", a)), a.parent.hasClass(o + "_collapsed") ? (a.arrow.html(n.openedSymbol), a.parent.removeClass(o + "_collapsed"), a.parent.addClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(n.closedSymbol), a.parent.addClass(o + "_collapsed"), a.parent.removeClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e));
  }, a.prototype._visibilityToggle = function (t, n, a, i, s) {
    function l(t, n) {
      e(t).removeClass(o + "_animating"), e(n).removeClass(o + "_animating"), s || p.afterOpen(t);
    }

    function r(n, a) {
      t.attr("aria-hidden", "true"), d.attr("tabindex", "-1"), c._setVisAttr(t, !0), t.hide(), e(n).removeClass(o + "_animating"), e(a).removeClass(o + "_animating"), s ? "init" == n && p.init() : p.afterClose(n);
    }

    var c = this,
        p = c.settings,
        d = c._getActionItems(t),
        u = 0;

    a && (u = p.duration), t.hasClass(o + "_hidden") ? (t.removeClass(o + "_hidden"), s || p.beforeOpen(i), "jquery" === p.animations ? t.stop(!0, !0).slideDown(u, p.easingOpen, function () {
      l(i, n);
    }) : "velocity" === p.animations && t.velocity("finish").velocity("slideDown", {
      duration: u,
      easing: p.easingOpen,
      complete: function complete() {
        l(i, n);
      }
    }), t.attr("aria-hidden", "false"), d.attr("tabindex", "0"), c._setVisAttr(t, !1)) : (t.addClass(o + "_hidden"), s || p.beforeClose(i), "jquery" === p.animations ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function () {
      r(i, n);
    }) : "velocity" === p.animations && t.velocity("finish").velocity("slideUp", {
      duration: u,
      easing: p.easingClose,
      complete: function complete() {
        r(i, n);
      }
    }));
  }, a.prototype._setVisAttr = function (t, n) {
    var a = this,
        i = t.children("li").children("ul").not("." + o + "_hidden");
    n ? i.each(function () {
      var t = e(this);
      t.attr("aria-hidden", "true");

      var i = a._getActionItems(t);

      i.attr("tabindex", "-1"), a._setVisAttr(t, n);
    }) : i.each(function () {
      var t = e(this);
      t.attr("aria-hidden", "false");

      var i = a._getActionItems(t);

      i.attr("tabindex", "0"), a._setVisAttr(t, n);
    });
  }, a.prototype._getActionItems = function (e) {
    var t = e.data("menu");

    if (!t) {
      t = {};
      var n = e.children("li"),
          a = n.find("a");
      t.links = a.add(n.find("." + o + "_item")), e.data("menu", t);
    }

    return t.links;
  }, a.prototype._outlines = function (t) {
    t ? e("." + o + "_item, ." + o + "_btn").css("outline", "") : e("." + o + "_item, ." + o + "_btn").css("outline", "none");
  }, a.prototype.toggle = function () {
    var e = this;

    e._menuToggle();
  }, a.prototype.open = function () {
    var e = this;
    e.btn.hasClass(o + "_collapsed") && e._menuToggle();
  }, a.prototype.close = function () {
    var e = this;
    e.btn.hasClass(o + "_open") && e._menuToggle();
  }, e.fn[s] = function (t) {
    var n = arguments;
    if (void 0 === t || "object" == _typeof(t)) return this.each(function () {
      e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t));
    });

    if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
      var i;
      return this.each(function () {
        var o = e.data(this, "plugin_" + s);
        o instanceof a && "function" == typeof o[t] && (i = o[t].apply(o, Array.prototype.slice.call(n, 1)));
      }), void 0 !== i ? i : this;
    }
  };
}(jQuery, document, window);
/*--------------  coin_sales1 start ------------*/

if ($('#coin_sales1').length) {
  var ctx = document.getElementById("coin_sales1").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
      datasets: [{
        label: "Sales",
        backgroundColor: "rgba(117, 19, 246, 0.1)",
        borderColor: '#0b76b6',
        data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25]
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: !0,
            maxTicksLimit: 5,
            padding: 0
          },
          gridLines: {
            drawTicks: !1,
            display: !1
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 0,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold"
          }
        }]
      }
    }
  });
}
/*--------------  coin_sales1 End ------------*/

/*--------------  coin_sales2 start ------------*/


if ($('#coin_sales2').length) {
  var ctx = document.getElementById("coin_sales2").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
      datasets: [{
        label: "Sales",
        backgroundColor: "rgba(240, 180, 26, 0.1)",
        borderColor: '#F0B41A',
        data: [18, 41, 86, 49, 20, 65, 64, 50, 49, 30, 45, 25]
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: !0,
            maxTicksLimit: 5,
            padding: 0
          },
          gridLines: {
            drawTicks: !1,
            display: !1
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 0,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold"
          }
        }]
      }
    }
  });
}
/*--------------  coin_sales2 End ------------*/

/*--------------  coin_sales3 start ------------*/


if ($('#coin_sales3').length) {
  var ctx = document.getElementById("coin_sales3").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
      datasets: [{
        label: "Sales",
        backgroundColor: "rgba(247, 163, 58, 0.1)",
        borderColor: '#fd9d24',
        fill: true,
        data: [18, 41, 50, 49, 20, 65, 50, 86, 20, 30, 45, 25]
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: !0,
            maxTicksLimit: 5,
            padding: 0
          },
          gridLines: {
            drawTicks: !1,
            display: !1
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 0,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold"
          }
        }]
      }
    }
  });
}
/*--------------  coin_sales3 End ------------*/

/*--------------  overview-chart start ------------*/


if ($('#verview-shart').length) {
  var myConfig = {
    "type": "line",
    "scale-x": {
      //X-Axis
      "labels": ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
      "label": {
        "font-size": 14,
        "offset-x": 0
      },
      "item": {
        //Scale Items (scale values or labels)
        "font-size": 10
      },
      "guide": {
        //Guides
        "visible": false,
        "line-style": "solid",
        //"solid", "dotted", "dashed", "dashdot"
        "alpha": 1
      }
    },
    "plot": {
      "aspect": "spline"
    },
    "series": [{
      "values": [20, 25, 30, 35, 45, 40, 40, 35, 25, 17, 40, 50],
      "line-color": "#F0B41A",

      /* "dotted" | "dashed" */
      "line-width": 5
      /* in pixels */
      ,
      "marker": {
        /* Marker object */
        "background-color": "#D79D3B",

        /* hexadecimal or RGB value */
        "size": 5,

        /* in pixels */
        "border-color": "#D79D3B"
        /* hexadecimal or RBG value */

      }
    }, {
      "values": [40, 45, 30, 20, 30, 35, 45, 55, 40, 30, 55, 30],
      "line-color": "#0884D9",

      /* "dotted" | "dashed" */
      "line-width": 5
      /* in pixels */
      ,
      "marker": {
        /* Marker object */
        "background-color": "#067dce",

        /* hexadecimal or RGB value */
        "size": 5,

        /* in pixels */
        "border-color": "#067dce"
        /* hexadecimal or RBG value */

      }
    }]
  };
  zingchart.render({
    id: 'verview-shart',
    data: myConfig,
    height: "100%",
    width: "100%"
  });
}
/*--------------  overview-chart END ------------*/

/*--------------  market status chart start ------------*/


if ($('#mvaluechart').length) {
  var ctx = document.getElementById('mvaluechart').getContext('2d');
  var myLineChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "Market Value",
        backgroundColor: 'transparent',
        borderColor: '#6e00ff',
        borderWidth: 2,
        data: [0, 15, 30, 10, 25, 0, 30],
        pointBorderColor: "transparent",
        pointBorderWidth: 10
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves

        }
      },
      scales: {
        yAxes: [{
          display: !1
        }],
        xAxes: [{
          display: !1
        }]
      }
    }
  });
}

if ($('#mvaluechart2').length) {
  var ctx = document.getElementById('mvaluechart2').getContext('2d');
  var myLineChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "Market Value",
        backgroundColor: 'transparent',
        borderColor: '#6e00ff',
        borderWidth: 2,
        data: [0, 15, 30, 10, 25, 0, 50],
        pointBorderColor: "transparent",
        pointBorderWidth: 10
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves

        }
      },
      scales: {
        yAxes: [{
          display: !1
        }],
        xAxes: [{
          display: !1
        }]
      }
    }
  });
}

if ($('#mvaluechart3').length) {
  var ctx = document.getElementById('mvaluechart3').getContext('2d');
  var myLineChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "Agut"],
      datasets: [{
        label: "Market Value",
        backgroundColor: 'transparent',
        borderColor: '#6e00ff',
        borderWidth: 2,
        data: [0, 15, 40, 10, 25, 0, 30, 20],
        pointBorderColor: "transparent",
        pointBorderWidth: 10
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves

        }
      },
      scales: {
        yAxes: [{
          display: !1
        }],
        xAxes: [{
          display: !1
        }]
      }
    }
  });
}

if ($('#mvaluechart4').length) {
  var ctx = document.getElementById('mvaluechart4').getContext('2d');
  var myLineChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "Market Value",
        backgroundColor: 'transparent',
        borderColor: '#6e00ff',
        borderWidth: 2,
        data: [0, 30, 30, 10, 25, 0, 30],
        pointBorderColor: "transparent",
        pointBorderWidth: 10
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem) {
            return tooltipItem.yLabel;
          }
        }
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves

        }
      },
      scales: {
        yAxes: [{
          display: !1
        }],
        xAxes: [{
          display: !1
        }]
      }
    }
  });
}
/*--------------  market status chart END ------------*/

/*--------------  visitor graph line chart start ------------*/


if ($('#visitor_graph').length) {
  Highcharts.chart('visitor_graph', {
    chart: {
      type: 'areaspline'
    },
    title: false,
    yAxis: {
      title: false,
      gridLineColor: '#fbf7f7',
      gridLineWidth: 1
    },
    xAxis: {
      gridLineColor: '#fbf7f7',
      gridLineWidth: 1
    },
    series: [{
      name: 'USD',
      data: [400, 470, 520, 500, 420, 350, 320, 400, 550, 600, 500, 420, 400],
      fillColor: 'rgba(76, 57, 249, 0.5)',
      lineColor: 'transparent'
    }, {
      name: 'BTC',
      data: [450, 520, 550, 400, 450, 500, 400, 450, 500, 450, 400, 500, 450],
      fillColor: 'rgba(103, 13, 251, 0.5)',
      lineColor: 'transparent'
    }]
  });
}
/*--------------  END visitor graph line chart start ------------*/

/*-------------- 1 line chart amchart start ------------*/


if ($('#amlinechart1').length) {
  var zoomChart = function zoomChart() {
    chart.zoomToDates(new Date(2012, 0, 2), new Date(2012, 0, 13));
  };

  var chart = AmCharts.makeChart("amlinechart1", {
    "type": "serial",
    "theme": "light",
    "marginRight": 20,
    "autoMarginOffset": 20,
    "dataDateFormat": "YYYY-MM-DD HH:NN",
    "dataProvider": [{
      "date": "2012-01-01",
      "value": 8
    }, {
      "date": "2012-01-02",
      "color": "#6e00ff",
      "value": 10
    }, {
      "date": "2012-01-03",
      "value": 12
    }, {
      "date": "2012-01-04",
      "value": 14
    }, {
      "date": "2012-01-05",
      "value": 11
    }, {
      "date": "2012-01-06",
      "value": 6
    }, {
      "date": "2012-01-07",
      "value": 7
    }, {
      "date": "2012-01-08",
      "value": 9
    }, {
      "date": "2012-01-09",
      "value": 13
    }, {
      "date": "2012-01-10",
      "value": 15
    }, {
      "date": "2012-01-11",
      "color": "#6e00ff",
      "value": 19
    }, {
      "date": "2012-01-12",
      "value": 21
    }, {
      "date": "2012-01-13",
      "value": 22
    }, {
      "date": "2012-01-14",
      "value": 20
    }, {
      "date": "2012-01-15",
      "value": 18
    }, {
      "date": "2012-01-16",
      "value": 14
    }, {
      "date": "2012-01-17",
      "color": "#6e00ff",
      "value": 16
    }, {
      "date": "2012-01-18",
      "value": 18
    }, {
      "date": "2012-01-19",
      "value": 17
    }, {
      "date": "2012-01-20",
      "value": 15
    }, {
      "date": "2012-01-21",
      "value": 12
    }, {
      "date": "2012-01-22",
      "color": "#6e00ff",
      "value": 10
    }, {
      "date": "2012-01-23",
      "value": 8
    }],
    "valueAxes": [{
      "axisAlpha": 0,
      "guides": [{
        "fillAlpha": 0.1,
        "fillColor": "#6e00ff",
        "lineAlpha": 0,
        "toValue": 16,
        "value": 10
      }],
      "position": "left",
      "tickLength": 0
    }],
    "graphs": [{
      "balloonText": "[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",
      "bullet": "round",
      "dashLength": 3,
      "colorField": "color",
      "valueField": "value"
    }],
    "trendLines": [{
      "finalDate": "2012-01-11 12",
      "finalValue": 19,
      "initialDate": "2012-01-02 12",
      "initialValue": 10,
      "lineColor": "#6e00ff"
    }, {
      "finalDate": "2012-01-22 12",
      "finalValue": 10,
      "initialDate": "2012-01-17 12",
      "initialValue": 16,
      "lineColor": "#6e00ff"
    }],
    "chartScrollbar": {
      "scrollbarHeight": 2,
      "offset": -1,
      "backgroundAlpha": 0.2,
      "backgroundColor": "#8816FD",
      "selectedBackgroundColor": "#815FF5",
      "selectedBackgroundAlpha": 1
    },
    "chartCursor": {
      "fullWidth": true,
      "valueLineEabled": true,
      "valueLineBalloonEnabled": true,
      "valueLineAlpha": 0.5,
      "cursorAlpha": 0
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "axisAlpha": 0,
      "gridAlpha": 0.1,
      "minorGridAlpha": 0.1,
      "minorGridEnabled": true
    },
    "export": {
      "enabled": false
    }
  });
  chart.addListener("dataUpdated", zoomChart);
}
/*-------------- 1 line chart amchart end ------------*/

/*-------------- 2 line chart amchart start ------------*/


if ($('#amlinechart2').length) {
  var _zoomChart = function _zoomChart() {
    chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
  };

  var chart = AmCharts.makeChart("amlinechart2", {
    "type": "serial",
    "theme": "light",
    "marginTop": 0,
    "marginRight": 20,
    "dataProvider": [{
      "year": "1950",
      "value": -0.307
    }, {
      "year": "1951",
      "value": -0.168
    }, {
      "year": "1952",
      "value": -0.073
    }, {
      "year": "1953",
      "value": -0.027
    }, {
      "year": "1954",
      "value": -0.251
    }, {
      "year": "1955",
      "value": -0.281
    }, {
      "year": "1956",
      "value": -0.348
    }, {
      "year": "1957",
      "value": -0.074
    }, {
      "year": "1958",
      "value": -0.011
    }, {
      "year": "1959",
      "value": -0.074
    }, {
      "year": "1960",
      "value": -0.124
    }, {
      "year": "1961",
      "value": -0.024
    }, {
      "year": "1962",
      "value": -0.022
    }, {
      "year": "1963",
      "value": 0
    }, {
      "year": "1964",
      "value": -0.296
    }, {
      "year": "1965",
      "value": -0.217
    }, {
      "year": "1966",
      "value": -0.147
    }, {
      "year": "1967",
      "value": -0.15
    }, {
      "year": "1968",
      "value": -0.16
    }, {
      "year": "1969",
      "value": -0.011
    }, {
      "year": "1970",
      "value": -0.068
    }, {
      "year": "1971",
      "value": -0.19
    }, {
      "year": "1972",
      "value": -0.056
    }, {
      "year": "1973",
      "value": 0.077
    }, {
      "year": "1974",
      "value": -0.213
    }, {
      "year": "1975",
      "value": -0.17
    }, {
      "year": "1976",
      "value": -0.254
    }, {
      "year": "1977",
      "value": 0.019
    }, {
      "year": "1978",
      "value": -0.063
    }, {
      "year": "1979",
      "value": 0.05
    }, {
      "year": "1980",
      "value": 0.077
    }, {
      "year": "1981",
      "value": 0.12
    }, {
      "year": "1982",
      "value": 0.011
    }, {
      "year": "1983",
      "value": 0.177
    }, {
      "year": "1984",
      "value": -0.021
    }, {
      "year": "1985",
      "value": -0.037
    }, {
      "year": "1986",
      "value": 0.03
    }, {
      "year": "1987",
      "value": 0.179
    }, {
      "year": "1988",
      "value": 0.18
    }, {
      "year": "1989",
      "value": 0.104
    }, {
      "year": "1990",
      "value": 0.255
    }, {
      "year": "1991",
      "value": 0.21
    }, {
      "year": "1992",
      "value": 0.065
    }, {
      "year": "1993",
      "value": 0.11
    }, {
      "year": "1994",
      "value": 0.172
    }, {
      "year": "1995",
      "value": 0.269
    }, {
      "year": "1996",
      "value": 0.141
    }, {
      "year": "1997",
      "value": 0.353
    }, {
      "year": "1998",
      "value": 0.548
    }, {
      "year": "1999",
      "value": 0.298
    }, {
      "year": "2000",
      "value": 0.267
    }, {
      "year": "2001",
      "value": 0.411
    }, {
      "year": "2002",
      "value": 0.462
    }, {
      "year": "2003",
      "value": 0.47
    }, {
      "year": "2004",
      "value": 0.445
    }, {
      "year": "2005",
      "value": 0.47
    }],
    "valueAxes": [{
      "axisAlpha": 0,
      "position": "left"
    }],
    "graphs": [{
      "id": "g1",
      "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
      "bullet": "round",
      "bulletSize": 8,
      "lineColor": "#9656e7",
      "lineThickness": 2,
      "negativeLineColor": "#c69cfd",
      "type": "smoothedLine",
      "valueField": "value"
    }],
    "chartScrollbar": {
      "graph": "g1",
      "gridAlpha": 0,
      "color": "#8816FD",
      "scrollbarHeight": 55,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.1,
      "selectedBackgroundColor": "#8816FD",
      "graphFillAlpha": 0,
      "autoGridCount": true,
      "selectedGraphFillAlpha": 0,
      "graphLineAlpha": 0.2,
      "graphLineColor": "#c2c2c2",
      "selectedGraphLineColor": "#9f46fc",
      "selectedGraphLineAlpha": 1
    },
    "chartCursor": {
      "categoryBalloonDateFormat": "YYYY",
      "cursorAlpha": 0,
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "valueLineAlpha": 0.5,
      "fullWidth": true
    },
    "dataDateFormat": "YYYY",
    "categoryField": "year",
    "categoryAxis": {
      "minPeriod": "YYYY",
      "parseDates": true,
      "minorGridAlpha": 0.1,
      "minorGridEnabled": true
    },
    "export": {
      "enabled": false
    }
  });
  chart.addListener("rendered", _zoomChart);

  if (chart.zoomChart) {
    chart.zoomChart();
  }
}
/*-------------- 2 line chart amchart end ------------*/

/*-------------- 3 line chart amchart start ------------*/


if ($('#amlinechart3').length) {
  // this method is called when chart is first inited as we listen for "rendered" event
  var _zoomChart2 = function _zoomChart2() {
    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
    chart.zoomToIndexes(chartData.length - 40, chartData.length - 1);
  }; // generate some random data, quite different range
  // generate some random data, quite different range


  var _generateChartData = function _generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 5);
    var visits = 1200;

    for (var i = 0; i < 1000; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      var newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      chartData.push({
        date: newDate,
        visits: visits
      });
    }

    return chartData;
  };

  var chartData = _generateChartData();

  var chart = AmCharts.makeChart("amlinechart3", {
    "type": "serial",
    "theme": "light",
    "marginRight": 20,
    "autoMarginOffset": 20,
    "marginTop": 7,
    "dataProvider": chartData,
    "valueAxes": [{
      "axisAlpha": 0.2,
      "dashLength": 1,
      "position": "left"
    }],
    "mouseWheelZoomEnabled": true,
    "graphs": [{
      "id": "g1",
      "balloonText": "[[value]]",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "hideBulletsCount": 50,
      "title": "red line",
      "valueField": "visits",
      "useLineColorForBulletBorder": true,
      "balloon": {
        "drop": true
      }
    }],
    "chartScrollbar": {
      "autoGridCount": true,
      "graph": "g1",
      "scrollbarHeight": 40,
      "color": "#fff",
      "selectedBackgroundAlpha": 1,
      "selectedBackgroundColor": "#815BF6",
      "selectedGraphFillAlpha": 0,
      "selectedGraphFillColor": "#8918FE",
      "graphLineAlpha": 0.2,
      "graphLineColor": "#c2c2c2",
      "selectedGraphLineColor": "#fff",
      "selectedGraphLineAlpha": 1
    },
    "chartCursor": {
      "limitToGraph": "g1"
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "axisColor": "#DADADA",
      "dashLength": 1,
      "minorGridEnabled": true
    },
    "export": {
      "enabled": false
    }
  });
  chart.addListener("rendered", _zoomChart2);

  _zoomChart2();
}
/*-------------- 3 line chart amchart end ------------*/

/*-------------- 4 line chart amchart start ------------*/


if ($('#amlinechart4').length) {
  var chart = AmCharts.makeChart("amlinechart4", {
    "type": "serial",
    "theme": "light",
    "legend": {
      "useGraphSettings": true
    },
    "dataProvider": [{
      "year": 1930,
      "italy": 1,
      "germany": 5,
      "uk": 3
    }, {
      "year": 1934,
      "italy": 1,
      "germany": 2,
      "uk": 6
    }, {
      "year": 1938,
      "italy": 2,
      "germany": 3,
      "uk": 1
    }, {
      "year": 1950,
      "italy": 3,
      "germany": 4,
      "uk": 1
    }, {
      "year": 1954,
      "italy": 5,
      "germany": 1,
      "uk": 2
    }, {
      "year": 1958,
      "italy": 3,
      "germany": 2,
      "uk": 1
    }, {
      "year": 1962,
      "italy": 1,
      "germany": 2,
      "uk": 3
    }, {
      "year": 1966,
      "italy": 2,
      "germany": 1,
      "uk": 5
    }, {
      "year": 1970,
      "italy": 3,
      "germany": 5,
      "uk": 2
    }, {
      "year": 1974,
      "italy": 4,
      "germany": 3,
      "uk": 6
    }, {
      "year": 1978,
      "italy": 1,
      "germany": 2,
      "uk": 4
    }],
    "startDuration": 0.5,
    "graphs": [{
      "balloonText": "place taken by Italy in [[category]]: [[value]]",
      "bullet": "round",
      "hidden": true,
      "title": "Italy",
      "valueField": "italy",
      "fillAlphas": 0,
      "lineColor": "#31ef98",
      "lineThickness": 2,
      "negativeLineColor": "#17e285"
    }, {
      "balloonText": "place taken by Germany in [[category]]: [[value]]",
      "bullet": "round",
      "title": "Germany",
      "valueField": "germany",
      "fillAlphas": 0,
      "lineColor": "#9656e7",
      "lineThickness": 2,
      "negativeLineColor": "#c69cfd"
    }, {
      "balloonText": "place taken by UK in [[category]]: [[value]]",
      "bullet": "round",
      "title": "United Kingdom",
      "valueField": "uk",
      "fillAlphas": 0,
      "lineColor": "#31aeef",
      "lineThickness": 2,
      "negativeLineColor": "#31aeef"
    }],
    "chartCursor": {
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 0,
      "fillAlpha": 0.05,
      "fillColor": "#000000",
      "gridAlpha": 0,
      "position": "top"
    },
    "export": {
      "enabled": false
    }
  });
}
/*-------------- 4 line chart amchart end ------------*/

/*-------------- 5 line chart amchart start ------------*/


if ($('#amlinechart5').length) {
  var _zoomChart3 = function _zoomChart3() {
    chart.zoomToDates(new Date(2012, 2, 2), new Date(2012, 2, 10));
  };

  var chart = AmCharts.makeChart("amlinechart5", {
    "type": "serial",
    "theme": "light",
    "marginRight": 20,
    "marginTop": 17,
    "autoMarginOffset": 20,
    "dataProvider": [{
      "date": "2012-03-01",
      "price": 20
    }, {
      "date": "2012-03-02",
      "price": 75
    }, {
      "date": "2012-03-03",
      "price": 15
    }, {
      "date": "2012-03-04",
      "price": 75
    }, {
      "date": "2012-03-05",
      "price": 158
    }, {
      "date": "2012-03-06",
      "price": 57
    }, {
      "date": "2012-03-07",
      "price": 107
    }, {
      "date": "2012-03-08",
      "price": 89
    }, {
      "date": "2012-03-09",
      "price": 75
    }, {
      "date": "2012-03-10",
      "price": 132
    }, {
      "date": "2012-03-11",
      "price": 158
    }, {
      "date": "2012-03-12",
      "price": 56
    }, {
      "date": "2012-03-13",
      "price": 169
    }, {
      "date": "2012-03-14",
      "price": 24
    }, {
      "date": "2012-03-15",
      "price": 147
    }],
    "valueAxes": [{
      "logarithmic": true,
      "dashLength": 1,
      "guides": [{
        "dashLength": 6,
        "inside": true,
        "label": "average",
        "lineAlpha": 1,
        "value": 90.4
      }],
      "position": "left"
    }],
    "graphs": [{
      "bullet": "round",
      "id": "g1",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 7,
      "lineThickness": 2,
      "title": "Price",
      "type": "smoothedLine",
      "useLineColorForBulletBorder": true,
      "valueField": "price"
    }],
    "chartScrollbar": {},
    "chartCursor": {
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "valueLineAlpha": 0.5,
      "fullWidth": true,
      "cursorAlpha": 0.05
    },
    "dataDateFormat": "YYYY-MM-DD",
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true
    },
    "export": {
      "enabled": false
    }
  });
  chart.addListener("dataUpdated", _zoomChart3);
}
/*-------------- 5 line chart amchart end ------------*/

/*-------------- 6 line chart chartjs start ------------*/


if ($('#seolinechart1').length) {
  var ctx = document.getElementById("seolinechart1").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
      datasets: [{
        label: "Likes",
        backgroundColor: "rgba(104, 124, 247, 0.6)",
        borderColor: '#8596fe',
        data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25]
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: !0,
            maxTicksLimit: 5,
            padding: 0
          },
          gridLines: {
            drawTicks: !1,
            display: !1
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 0,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold"
          }
        }]
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves

        }
      }
    }
  });
}
/*-------------- 6 line chart chartjs end ------------*/

/*-------------- 7 line chart chartjs start ------------*/


if ($('#seolinechart2').length) {
  var ctx = document.getElementById("seolinechart2").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
      datasets: [{
        label: "Share",
        backgroundColor: "rgba(96, 241, 205, 0.2)",
        borderColor: '#3de5bb',
        data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25]
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: !0,
            maxTicksLimit: 5,
            padding: 0
          },
          gridLines: {
            drawTicks: !1,
            display: !1
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 0,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold"
          }
        }]
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves

        }
      }
    }
  });
}
/*-------------- 7 line chart chartjs end ------------*/

/*-------------- 8 line chart chartjs start ------------*/


if ($('#seolinechart3').length) {
  var ctx = document.getElementById("seolinechart3").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
      datasets: [{
        label: "Share",
        backgroundColor: "rgba(96, 241, 205, 0)",
        borderColor: '#fff',
        data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25]
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: !0,
            maxTicksLimit: 5,
            padding: 0
          },
          gridLines: {
            drawTicks: !1,
            display: !1
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 0,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold"
          }
        }]
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves

        }
      }
    }
  });
}
/*-------------- 8 line chart chartjs end ------------*/

/*-------------- 9 line chart chartjs start ------------*/


if ($('#seolinechart4').length) {
  var ctx = document.getElementById("seolinechart4").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',
    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
      datasets: [{
        label: "New user",
        backgroundColor: "rgba(96, 241, 205, 0)",
        borderColor: '#fff',
        data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25]
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold",
            beginAtZero: !0,
            maxTicksLimit: 5,
            padding: 0
          },
          gridLines: {
            drawTicks: !1,
            display: !1
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 0,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold"
          }
        }]
      },
      elements: {
        line: {
          tension: 0 // disables bezier curves

        }
      }
    }
  });
}
/*-------------- 9 line chart chartjs end ------------*/

/*-------------- 10 line chart amchart start ------------*/


if ($('#user-statistics').length) {
  var chart = AmCharts.makeChart("user-statistics", {
    "type": "serial",
    "theme": "light",
    "marginRight": 0,
    "marginLeft": 40,
    "autoMarginOffset": 20,
    "dataDateFormat": "YYYY-MM-DD",
    "valueAxes": [{
      "id": "v1",
      "axisAlpha": 0,
      "position": "left",
      "ignoreAxisWidth": true
    }],
    "balloon": {
      "borderThickness": 1,
      "shadowAlpha": 0
    },
    "graphs": [{
      "id": "g1",
      "balloon": {
        "drop": true,
        "adjustBorderColor": false,
        "color": "#ffffff",
        "type": "smoothedLine"
      },
      "fillAlphas": 0.2,
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "title": "red line",
      "useLineColorForBulletBorder": true,
      "valueField": "value",
      "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
    }],
    "chartCursor": {
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "cursorAlpha": 0,
      "zoomable": false,
      "valueZoomable": true,
      "valueLineAlpha": 0.5
    },
    "valueScrollbar": {
      "autoGridCount": true,
      "color": "#5E72F3",
      "scrollbarHeight": 30
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": true
    },
    "export": {
      "enabled": false
    },
    "dataProvider": [{
      "date": "2012-07-27",
      "value": 13
    }, {
      "date": "2012-07-28",
      "value": 11
    }, {
      "date": "2012-07-29",
      "value": 15
    }, {
      "date": "2012-07-30",
      "value": 16
    }, {
      "date": "2012-07-31",
      "value": 18
    }, {
      "date": "2012-08-01",
      "value": 13
    }, {
      "date": "2012-08-02",
      "value": 22
    }, {
      "date": "2012-08-03",
      "value": 23
    }, {
      "date": "2012-08-04",
      "value": 20
    }, {
      "date": "2012-08-05",
      "value": 17
    }, {
      "date": "2012-08-06",
      "value": 16
    }, {
      "date": "2012-08-07",
      "value": 18
    }, {
      "date": "2012-08-08",
      "value": 21
    }, {
      "date": "2012-08-09",
      "value": 26
    }, {
      "date": "2012-08-10",
      "value": 24
    }, {
      "date": "2012-08-11",
      "value": 29
    }, {
      "date": "2012-08-12",
      "value": 32
    }, {
      "date": "2012-08-13",
      "value": 18
    }, {
      "date": "2012-08-14",
      "value": 24
    }, {
      "date": "2012-08-15",
      "value": 22
    }, {
      "date": "2012-08-16",
      "value": 18
    }, {
      "date": "2012-08-17",
      "value": 19
    }, {
      "date": "2012-08-18",
      "value": 14
    }, {
      "date": "2012-08-19",
      "value": 15
    }, {
      "date": "2012-08-20",
      "value": 12
    }, {
      "date": "2012-08-21",
      "value": 8
    }, {
      "date": "2012-08-22",
      "value": 9
    }, {
      "date": "2012-08-23",
      "value": 8
    }, {
      "date": "2012-08-24",
      "value": 7
    }, {
      "date": "2012-08-25",
      "value": 5
    }, {
      "date": "2012-08-26",
      "value": 11
    }, {
      "date": "2012-08-27",
      "value": 13
    }, {
      "date": "2012-08-28",
      "value": 18
    }, {
      "date": "2012-08-29",
      "value": 20
    }, {
      "date": "2012-08-30",
      "value": 29
    }, {
      "date": "2012-08-31",
      "value": 33
    }, {
      "date": "2012-09-01",
      "value": 42
    }, {
      "date": "2012-09-02",
      "value": 35
    }, {
      "date": "2012-09-03",
      "value": 31
    }, {
      "date": "2012-09-04",
      "value": 47
    }, {
      "date": "2012-09-05",
      "value": 52
    }, {
      "date": "2012-09-06",
      "value": 46
    }, {
      "date": "2012-09-07",
      "value": 41
    }, {
      "date": "2012-09-08",
      "value": 43
    }, {
      "date": "2012-09-09",
      "value": 40
    }, {
      "date": "2012-09-10",
      "value": 39
    }, {
      "date": "2012-09-11",
      "value": 34
    }, {
      "date": "2012-09-12",
      "value": 29
    }, {
      "date": "2012-09-13",
      "value": 34
    }, {
      "date": "2012-09-14",
      "value": 37
    }, {
      "date": "2012-09-15",
      "value": 42
    }, {
      "date": "2012-09-16",
      "value": 49
    }, {
      "date": "2012-09-17",
      "value": 46
    }, {
      "date": "2012-09-18",
      "value": 47
    }, {
      "date": "2012-09-19",
      "value": 55
    }, {
      "date": "2012-09-20",
      "value": 59
    }, {
      "date": "2012-09-21",
      "value": 58
    }, {
      "date": "2012-09-22",
      "value": 57
    }, {
      "date": "2012-09-23",
      "value": 61
    }, {
      "date": "2012-09-24",
      "value": 59
    }, {
      "date": "2012-09-25",
      "value": 67
    }, {
      "date": "2012-09-26",
      "value": 65
    }, {
      "date": "2012-09-27",
      "value": 61
    }, {
      "date": "2012-09-28",
      "value": 66
    }, {
      "date": "2012-09-29",
      "value": 69
    }, {
      "date": "2012-09-30",
      "value": 71
    }, {
      "date": "2012-10-01",
      "value": 67
    }, {
      "date": "2012-10-02",
      "value": 63
    }, {
      "date": "2012-10-03",
      "value": 46
    }, {
      "date": "2012-10-04",
      "value": 32
    }, {
      "date": "2012-10-05",
      "value": 21
    }, {
      "date": "2012-10-06",
      "value": 18
    }, {
      "date": "2012-10-07",
      "value": 21
    }, {
      "date": "2012-10-08",
      "value": 28
    }, {
      "date": "2012-10-09",
      "value": 27
    }, {
      "date": "2012-10-10",
      "value": 36
    }, {
      "date": "2012-10-11",
      "value": 33
    }, {
      "date": "2012-10-12",
      "value": 31
    }, {
      "date": "2012-10-13",
      "value": 30
    }, {
      "date": "2012-10-14",
      "value": 34
    }, {
      "date": "2012-10-15",
      "value": 38
    }, {
      "date": "2012-10-16",
      "value": 37
    }, {
      "date": "2012-10-17",
      "value": 44
    }, {
      "date": "2012-10-18",
      "value": 49
    }, {
      "date": "2012-10-19",
      "value": 53
    }, {
      "date": "2012-10-20",
      "value": 57
    }, {
      "date": "2012-10-21",
      "value": 60
    }, {
      "date": "2012-10-22",
      "value": 61
    }, {
      "date": "2012-10-23",
      "value": 69
    }, {
      "date": "2012-10-24",
      "value": 67
    }, {
      "date": "2012-10-25",
      "value": 72
    }, {
      "date": "2012-10-26",
      "value": 77
    }, {
      "date": "2012-10-27",
      "value": 75
    }, {
      "date": "2012-10-28",
      "value": 70
    }, {
      "date": "2012-10-29",
      "value": 72
    }, {
      "date": "2012-10-30",
      "value": 70
    }, {
      "date": "2012-10-31",
      "value": 72
    }, {
      "date": "2012-11-01",
      "value": 73
    }, {
      "date": "2012-11-02",
      "value": 67
    }, {
      "date": "2012-11-03",
      "value": 68
    }, {
      "date": "2012-11-04",
      "value": 65
    }, {
      "date": "2012-11-05",
      "value": 71
    }, {
      "date": "2012-11-06",
      "value": 75
    }, {
      "date": "2012-11-07",
      "value": 74
    }, {
      "date": "2012-11-08",
      "value": 71
    }, {
      "date": "2012-11-09",
      "value": 76
    }, {
      "date": "2012-11-10",
      "value": 77
    }, {
      "date": "2012-11-11",
      "value": 81
    }, {
      "date": "2012-11-12",
      "value": 83
    }, {
      "date": "2012-11-13",
      "value": 80
    }, {
      "date": "2012-11-14",
      "value": 81
    }, {
      "date": "2012-11-15",
      "value": 87
    }, {
      "date": "2012-11-16",
      "value": 82
    }, {
      "date": "2012-11-17",
      "value": 86
    }, {
      "date": "2012-11-18",
      "value": 80
    }, {
      "date": "2012-11-19",
      "value": 87
    }, {
      "date": "2012-11-20",
      "value": 83
    }, {
      "date": "2012-11-21",
      "value": 85
    }, {
      "date": "2012-11-22",
      "value": 84
    }, {
      "date": "2012-11-23",
      "value": 82
    }, {
      "date": "2012-11-24",
      "value": 73
    }, {
      "date": "2012-11-25",
      "value": 71
    }, {
      "date": "2012-11-26",
      "value": 75
    }, {
      "date": "2012-11-27",
      "value": 79
    }, {
      "date": "2012-11-28",
      "value": 70
    }, {
      "date": "2012-11-29",
      "value": 73
    }, {
      "date": "2012-11-30",
      "value": 61
    }, {
      "date": "2012-12-01",
      "value": 62
    }, {
      "date": "2012-12-02",
      "value": 66
    }, {
      "date": "2012-12-03",
      "value": 65
    }, {
      "date": "2012-12-04",
      "value": 73
    }, {
      "date": "2012-12-05",
      "value": 79
    }, {
      "date": "2012-12-06",
      "value": 78
    }, {
      "date": "2012-12-07",
      "value": 78
    }, {
      "date": "2012-12-08",
      "value": 78
    }, {
      "date": "2012-12-09",
      "value": 74
    }, {
      "date": "2012-12-10",
      "value": 73
    }, {
      "date": "2012-12-11",
      "value": 75
    }, {
      "date": "2012-12-12",
      "value": 70
    }, {
      "date": "2012-12-13",
      "value": 77
    }, {
      "date": "2012-12-14",
      "value": 67
    }, {
      "date": "2012-12-15",
      "value": 62
    }, {
      "date": "2012-12-16",
      "value": 64
    }, {
      "date": "2012-12-17",
      "value": 61
    }, {
      "date": "2012-12-18",
      "value": 59
    }, {
      "date": "2012-12-19",
      "value": 53
    }, {
      "date": "2012-12-20",
      "value": 54
    }, {
      "date": "2012-12-21",
      "value": 56
    }, {
      "date": "2012-12-22",
      "value": 59
    }, {
      "date": "2012-12-23",
      "value": 58
    }, {
      "date": "2012-12-24",
      "value": 55
    }, {
      "date": "2012-12-25",
      "value": 52
    }, {
      "date": "2012-12-26",
      "value": 54
    }, {
      "date": "2012-12-27",
      "value": 50
    }, {
      "date": "2012-12-28",
      "value": 50
    }, {
      "date": "2012-12-29",
      "value": 51
    }, {
      "date": "2012-12-30",
      "value": 52
    }, {
      "date": "2012-12-31",
      "value": 58
    }, {
      "date": "2013-01-01",
      "value": 60
    }, {
      "date": "2013-01-02",
      "value": 67
    }, {
      "date": "2013-01-03",
      "value": 64
    }, {
      "date": "2013-01-04",
      "value": 66
    }, {
      "date": "2013-01-05",
      "value": 60
    }, {
      "date": "2013-01-06",
      "value": 63
    }, {
      "date": "2013-01-07",
      "value": 61
    }, {
      "date": "2013-01-08",
      "value": 60
    }, {
      "date": "2013-01-09",
      "value": 65
    }, {
      "date": "2013-01-10",
      "value": 75
    }, {
      "date": "2013-01-11",
      "value": 77
    }, {
      "date": "2013-01-12",
      "value": 78
    }, {
      "date": "2013-01-13",
      "value": 70
    }, {
      "date": "2013-01-14",
      "value": 70
    }, {
      "date": "2013-01-15",
      "value": 73
    }, {
      "date": "2013-01-16",
      "value": 71
    }, {
      "date": "2013-01-17",
      "value": 74
    }, {
      "date": "2013-01-18",
      "value": 78
    }, {
      "date": "2013-01-19",
      "value": 85
    }, {
      "date": "2013-01-20",
      "value": 82
    }, {
      "date": "2013-01-21",
      "value": 83
    }, {
      "date": "2013-01-22",
      "value": 88
    }, {
      "date": "2013-01-23",
      "value": 85
    }, {
      "date": "2013-01-24",
      "value": 85
    }, {
      "date": "2013-01-25",
      "value": 80
    }, {
      "date": "2013-01-26",
      "value": 87
    }, {
      "date": "2013-01-27",
      "value": 84
    }, {
      "date": "2013-01-28",
      "value": 83
    }, {
      "date": "2013-01-29",
      "value": 84
    }, {
      "date": "2013-01-30",
      "value": 81
    }]
  });
}
/*-------------- 10 line chart amchart end ------------*/

/*-------------- 11 line chart amchart start ------------*/


if ($('#salesanalytic').length) {
  var chart = AmCharts.makeChart("salesanalytic", {
    "type": "serial",
    "theme": "light",
    "dataDateFormat": "YYYY-MM-DD",
    "precision": 2,
    "valueAxes": [{
      "id": "v1",
      "title": "Sales",
      "position": "left",
      "autoGridCount": false,
      "labelFunction": function labelFunction(value) {
        return "$" + Math.round(value) + "M";
      }
    }, {
      "id": "v2",
      "title": "Duration",
      "gridAlpha": 0,
      "position": "right",
      "autoGridCount": false
    }],
    "graphs": [{
      "id": "g3",
      "valueAxis": "v1",
      "lineColor": "#F3F8FB",
      "fillColors": "#F3F8FB",
      "fillAlphas": 1,
      "type": "column",
      "title": "Actual Sales",
      "valueField": "sales2",
      "clustered": false,
      "columnWidth": 0.5,
      "legendValueText": "$[[value]]M",
      "balloonText": "[[title]]<br /><small style='font-size: 130%'>$[[value]]M</small>"
    }, {
      "id": "g4",
      "valueAxis": "v1",
      "lineColor": "#5C6DF4",
      "fillColors": "#5C6DF4",
      "fillAlphas": 1,
      "type": "column",
      "title": "Target Sales",
      "valueField": "sales1",
      "clustered": false,
      "columnWidth": 0.3,
      "legendValueText": "$[[value]]M",
      "balloonText": "[[title]]<br /><small style='font-size: 130%'>$[[value]]M</small>"
    }, {
      "id": "g1",
      "valueAxis": "v2",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#815FF6",
      "type": "smoothedLine",
      "title": "Duration",
      "useLineColorForBulletBorder": true,
      "valueField": "market1",
      "balloonText": "[[title]]<br /><small style='font-size: 130%'>[[value]]</small>"
    }, {
      "id": "g2",
      "valueAxis": "v2",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "bulletSize": 5,
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#ffe598",
      "type": "smoothedLine",
      "dashLength": 5,
      "title": "Market Days ALL",
      "useLineColorForBulletBorder": true,
      "valueField": "market2",
      "balloonText": "[[title]]<br /><small style='font-size: 130%'>[[value]]</small>"
    }],
    "chartScrollbar": {
      "graph": "g1",
      "oppositeAxis": false,
      "offset": 50,
      "scrollbarHeight": 45,
      "backgroundAlpha": 0,
      "selectedBackgroundAlpha": 0.5,
      "selectedBackgroundColor": "#f9f9f9",
      "graphFillAlpha": 0.1,
      "graphLineAlpha": 0.4,
      "selectedGraphFillAlpha": 0,
      "selectedGraphLineAlpha": 1,
      "autoGridCount": true,
      "color": "#95a1f9"
    },
    "chartCursor": {
      "pan": true,
      "valueLineEnabled": true,
      "valueLineBalloonEnabled": true,
      "cursorAlpha": 0,
      "valueLineAlpha": 0.2
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "dashLength": 1,
      "minorGridEnabled": true,
      "color": "#5C6DF4"
    },
    "legend": {
      "useGraphSettings": true,
      "position": "top"
    },
    "balloon": {
      "borderThickness": 1,
      "shadowAlpha": 0
    },
    "export": {
      "enabled": false
    },
    "dataProvider": [{
      "date": "2013-01-16",
      "market1": 51,
      "market2": 55,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-17",
      "market1": 64,
      "market2": 70,
      "sales1": 5,
      "sales2": 6
    }, {
      "date": "2013-01-18",
      "market1": 65,
      "market2": 45,
      "sales1": 8,
      "sales2": 12
    }, {
      "date": "2013-01-19",
      "market1": 73,
      "market2": 75,
      "sales1": 7,
      "sales2": 8
    }, {
      "date": "2013-01-20",
      "market1": 65,
      "market2": 70,
      "sales1": 7,
      "sales2": 10
    }, {
      "date": "2013-01-21",
      "market1": 65,
      "market2": 55,
      "sales1": 9,
      "sales2": 12
    }, {
      "date": "2013-01-22",
      "market1": 68,
      "market2": 62,
      "sales1": 5,
      "sales2": 7
    }, {
      "date": "2013-01-23",
      "market1": 75,
      "market2": 80,
      "sales1": 7,
      "sales2": 10
    }, {
      "date": "2013-01-24",
      "market1": 75,
      "market2": 65,
      "sales1": 7,
      "sales2": 9
    }, {
      "date": "2013-01-25",
      "market1": 75,
      "market2": 69,
      "sales1": 8,
      "sales2": 10
    }, {
      "date": "2013-01-26",
      "market1": 55,
      "market2": 68,
      "sales1": 6,
      "sales2": 7
    }, {
      "date": "2013-01-27",
      "market1": 67,
      "market2": 70,
      "sales1": 3,
      "sales2": 4
    }, {
      "date": "2013-01-28",
      "market1": 62,
      "market2": 59,
      "sales1": 5,
      "sales2": 7
    }, {
      "date": "2013-01-29",
      "market1": 62,
      "market2": 56,
      "sales1": 5,
      "sales2": 8
    }, {
      "date": "2013-01-30",
      "market1": 71,
      "market2": 69,
      "sales1": 4,
      "sales2": 7
    }]
  });
} //------------echarts2

/*-------------- 11 line chart amchart end ------------*/

/*--------------  coin_sales4 bar chart start ------------*/


if ($('#coin_sales4').length) {
  var ctx = document.getElementById("coin_sales4").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      datasets: [{
        label: "Sales",
        data: [250, 320, 380, 330, 420, 250, 180, 250, 100, 300],
        backgroundColor: ['#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#3a3afb', '#8416fe']
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "#cccccc",
            beginAtZero: !0,
            padding: 0
          },
          gridLines: {
            zeroLineColor: "transparent"
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent",
            display: !1
          },
          ticks: {
            beginAtZero: !0,
            padding: 0,
            fontColor: "#cccccc"
          }
        }]
      }
    }
  });
}
/*--------------  coin_sales4 bar chart End ------------*/

/*--------------  coin_sales5 bar chart start ------------*/


if ($('#coin_sales5').length) {
  var ctx = document.getElementById("coin_sales5").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      datasets: [{
        label: "Sales",
        data: [250, 220, 380, 130, 420, 230, 180, 220, 150, 300],
        backgroundColor: ['#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#3a3afb', '#8416fe']
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "#cccccc",
            beginAtZero: !0,
            padding: 0
          },
          gridLines: {
            zeroLineColor: "transparent"
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent",
            display: !1
          },
          ticks: {
            beginAtZero: !0,
            padding: 0,
            fontColor: "#cccccc"
          }
        }]
      }
    }
  });
}
/*--------------  coin_sales5 bar chart End ------------*/

/*--------------  coin_sales6 bar chart start ------------*/


if ($('#coin_sales6').length) {
  var ctx = document.getElementById("coin_sales6").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      datasets: [{
        label: "Sales",
        data: [250, 320, 380, 120, 420, 530, 180, 250, 80, 250],
        backgroundColor: ['#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#3a3afb', '#8416fe']
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "#cccccc",
            beginAtZero: !0,
            padding: 0
          },
          gridLines: {
            zeroLineColor: "transparent"
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent",
            display: !1
          },
          ticks: {
            beginAtZero: !0,
            padding: 0,
            fontColor: "#cccccc"
          }
        }]
      }
    }
  });
}
/*--------------  coin_sales6 bar chart End ------------*/

/*--------------  coin_sales7 bar chart start ------------*/


if ($('#coin_sales7').length) {
  var ctx = document.getElementById("coin_sales7").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      datasets: [{
        label: "Sales",
        data: [100, 300, 350, 350, 420, 150, 300, 250, 250, 300],
        backgroundColor: ['#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#8416fe', '#3a3afb', '#3a3afb', '#8416fe']
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      animation: {
        easing: "easeInOutBack"
      },
      scales: {
        yAxes: [{
          display: !1,
          ticks: {
            fontColor: "#cccccc",
            beginAtZero: !0,
            padding: 0
          },
          gridLines: {
            zeroLineColor: "transparent"
          }
        }],
        xAxes: [{
          display: !1,
          gridLines: {
            zeroLineColor: "transparent",
            display: !1
          },
          ticks: {
            beginAtZero: !0,
            padding: 0,
            fontColor: "#cccccc"
          }
        }]
      }
    }
  });
}
/*--------------  coin_sales7 bar chart End ------------*/

/*--------------  bar chart 08 amchart start ------------*/


if ($('#ambarchart1').length) {
  var chart = AmCharts.makeChart("ambarchart1", {
    "theme": "light",
    "type": "serial",
    "balloon": {
      "adjustBorderColor": false,
      "horizontalPadding": 10,
      "verticalPadding": 4,
      "color": "#fff"
    },
    "dataProvider": [{
      "country": "USA",
      "year2004": 3.5,
      "year2005": 4.2,
      "color": "#bfbffd",
      "color2": "#7474F0"
    }, {
      "country": "UK",
      "year2004": 1.7,
      "year2005": 3.1,
      "color": "#bfbffd",
      "color2": "#7474F0"
    }, {
      "country": "Canada",
      "year2004": 2.8,
      "year2005": 2.9,
      "color": "#bfbffd",
      "color2": "#7474F0"
    }, {
      "country": "Japan",
      "year2004": 2.6,
      "year2005": 2.3,
      "color": "#bfbffd",
      "color2": "#7474F0"
    }, {
      "country": "France",
      "year2004": 1.4,
      "year2005": 2.1,
      "color": "#bfbffd",
      "color2": "#7474F0"
    }, {
      "country": "Brazil",
      "year2004": 2.6,
      "year2005": 4.9,
      "color": "#bfbffd",
      "color2": "#7474F0"
    }],
    "valueAxes": [{
      "unit": "%",
      "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "GDP grow in [[category]] (2017): <b>[[value]]</b>",
      "fillAlphas": 0.9,
      "fillColorsField": "color",
      "lineAlpha": 0.2,
      "title": "2017",
      "type": "column",
      "valueField": "year2004"
    }, {
      "balloonText": "GDP grow in [[category]] (2018): <b>[[value]]</b>",
      "fillAlphas": 0.9,
      "fillColorsField": "color2",
      "lineAlpha": 0.2,
      "title": "2018",
      "type": "column",
      "clustered": false,
      "columnWidth": 0.5,
      "valueField": "year2005"
    }],
    "plotAreaFillAlphas": 0.1,
    "categoryField": "country",
    "categoryAxis": {
      "gridPosition": "start"
    },
    "export": {
      "enabled": false
    }
  });
}
/*--------------  bar chart 08 amchart END ------------*/

/*--------------  bar chart 09 amchart start ------------*/


if ($('#ambarchart2').length) {
  var chart = AmCharts.makeChart("ambarchart2", {
    "type": "serial",
    "addClassNames": true,
    "theme": "light",
    "autoMargins": false,
    "marginLeft": 30,
    "marginRight": 8,
    "marginTop": 10,
    "marginBottom": 26,
    "balloon": {
      "adjustBorderColor": false,
      "horizontalPadding": 10,
      "verticalPadding": 8,
      "color": "#ffffff"
    },
    "dataProvider": [{
      "year": 2013,
      "income": 23.5,
      "expenses": 21.1,
      "color": "#7474f0"
    }, {
      "year": 2014,
      "income": 26.2,
      "expenses": 30.5,
      "color": "#7474f0"
    }, {
      "year": 2015,
      "income": 30.1,
      "expenses": 34.9,
      "color": "#7474f0"
    }, {
      "year": 2016,
      "income": 29.5,
      "expenses": 31.1,
      "color": "#7474f0"
    }, {
      "year": 2017,
      "income": 30.6,
      "expenses": 28.2,
      "dashLengthLine": 5,
      "color": "#7474f0"
    }, {
      "year": 2018,
      "income": 34.1,
      "expenses": 32.9,
      "dashLengthColumn": 5,
      "alpha": 0.2,
      "additional": "(projection)"
    }],
    "valueAxes": [{
      "axisAlpha": 0,
      "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
      "alphaField": "alpha",
      "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
      "fillAlphas": 1,
      "fillColorsField": "color",
      "title": "Income",
      "type": "column",
      "valueField": "income",
      "dashLengthField": "dashLengthColumn"
    }, {
      "id": "graph2",
      "balloonText": "<span style='font-size:12px;'>[[title]] in [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
      "bullet": "round",
      "lineThickness": 3,
      "bulletSize": 7,
      "bulletBorderAlpha": 1,
      "bulletColor": "#FFFFFF",
      "lineColor": "#AA59FE",
      "useLineColorForBulletBorder": true,
      "bulletBorderThickness": 3,
      "fillAlphas": 0,
      "lineAlpha": 1,
      "title": "Expenses",
      "valueField": "expenses",
      "dashLengthField": "dashLengthLine"
    }],
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 0,
      "tickLength": 0
    },
    "export": {
      "enabled": false
    }
  });
}
/*--------------  bar chart 09 amchart END ------------*/

/*--------------  bar chart 10 amchart start ------------*/


if ($('#ambarchart3').length) {
  var chart = AmCharts.makeChart("ambarchart3", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": true,
    "startDuration": 1,
    "categoryAxis": {
      "gridPosition": "start",
      "position": "left"
    },
    "trendLines": [],
    "graphs": [{
      "balloonText": "Income:[[value]]",
      "fillAlphas": 0.8,
      "id": "AmGraph-1",
      "lineAlpha": 0.2,
      "title": "Income",
      "type": "column",
      "valueField": "income",
      "fillColorsField": "color"
    }, {
      "balloonText": "Expenses:[[value]]",
      "fillAlphas": 0.8,
      "id": "AmGraph-2",
      "lineAlpha": 0.2,
      "title": "Expenses",
      "type": "column",
      "valueField": "expenses",
      "fillColorsField": "color2"
    }],
    "guides": [],
    "valueAxes": [{
      "id": "ValueAxis-1",
      "position": "top",
      "axisAlpha": 0
    }],
    "allLabels": [],
    "balloon": {},
    "titles": [],
    "dataProvider": [{
      "year": 2014,
      "income": 23.5,
      "expenses": 18.1,
      "color": "#7474f0",
      "color2": "#C5C5FD"
    }, {
      "year": 2015,
      "income": 26.2,
      "expenses": 22.8,
      "color": "#7474f0",
      "color2": "#C5C5FD"
    }, {
      "year": 2016,
      "income": 30.1,
      "expenses": 23.9,
      "color": "#7474f0",
      "color2": "#C5C5FD"
    }, {
      "year": 2017,
      "income": 29.5,
      "expenses": 25.1,
      "color": "#7474f0",
      "color2": "#C5C5FD"
    }, {
      "year": 2018,
      "income": 24.6,
      "expenses": 25,
      "color": "#7474f0",
      "color2": "#C5C5FD"
    }],
    "export": {
      "enabled": false
    }
  });
}
/*--------------  bar chart 10 amchart END ------------*/

/*--------------  bar chart 11 amchart start ------------*/


if ($('#ambarchart4').length) {
  var chart = AmCharts.makeChart("ambarchart4", {
    "type": "serial",
    "theme": "light",
    "marginRight": 70,
    "dataProvider": [{
      "country": "USA",
      "visits": 3025,
      "color": "#8918FE"
    }, {
      "country": "China",
      "visits": 1882,
      "color": "#7474F0"
    }, {
      "country": "Japan",
      "visits": 1809,
      "color": "#C5C5FD"
    }, {
      "country": "Germany",
      "visits": 1322,
      "color": "#952FFE"
    }, {
      "country": "UK",
      "visits": 1122,
      "color": "#7474F0"
    }, {
      "country": "France",
      "visits": 1114,
      "color": "#CBCBFD"
    }, {
      "country": "India",
      "visits": 984,
      "color": "#FD9C21"
    }, {
      "country": "Spain",
      "visits": 711,
      "color": "#0D8ECF"
    }, {
      "country": "Netherlands",
      "visits": 665,
      "color": "#0D52D1"
    }, {
      "country": "Russia",
      "visits": 580,
      "color": "#2A0CD0"
    }, {
      "country": "South Korea",
      "visits": 443,
      "color": "#8A0CCF"
    }, {
      "country": "Canada",
      "visits": 441,
      "color": "#9F43FE"
    }],
    "valueAxes": [{
      "axisAlpha": 0,
      "position": "left",
      "title": false
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "<b>[[category]]: [[value]]</b>",
      "fillColorsField": "color",
      "fillAlphas": 0.9,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "visits"
    }],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
      "gridPosition": "start",
      "labelRotation": 45
    },
    "export": {
      "enabled": false
    }
  });
}
/*--------------  bar chart 11 amchart END ------------*/

/*--------------  bar chart 12 amchart start ------------*/


if ($('#ambarchart5').length) {
  var chart = AmCharts.makeChart("ambarchart5", {
    "type": "serial",
    "theme": "light",
    "dataProvider": [{
      "name": "John",
      "points": 35654,
      "color": "#7F8DA9"
    }, {
      "name": "Damon",
      "points": 65456,
      "color": "#FEC514"
    }, {
      "name": "Patrick",
      "points": 45724,
      "color": "#952FFE"
    }, {
      "name": "Mark",
      "points": 23654,
      "color": "#8282F1"
    }, {
      "name": "Natasha",
      "points": 35654,
      "color": "#2599D4"
    }, {
      "name": "Adell",
      "points": 55456,
      "color": "#2563D6"
    }, {
      "name": "Alessandro",
      "points": 13654,
      "color": "#9524D4"
    }],
    "valueAxes": [{
      "maximum": 80000,
      "minimum": 0,
      "axisAlpha": 0,
      "dashLength": 4,
      "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
      "bulletOffset": 10,
      "bulletSize": 52,
      "colorField": "color",
      "cornerRadiusTop": 8,
      "customBulletField": "bullet",
      "fillAlphas": 0.8,
      "lineAlpha": 0,
      "type": "column",
      "valueField": "points"
    }],
    "marginTop": 0,
    "marginRight": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "autoMargins": false,
    "categoryField": "name",
    "categoryAxis": {
      "axisAlpha": 0,
      "gridAlpha": 0,
      "inside": true,
      "tickLength": 10,
      "color": "#fff"
    },
    "export": {
      "enabled": false
    }
  });
}
/*--------------  bar chart 12 amchart END ------------*/

/*--------------  bar chart 13 amchart start ------------*/


if ($('#ambarchart6').length) {
  var chart = AmCharts.makeChart("ambarchart6", {
    "type": "serial",
    "theme": "light",
    "handDrawn": true,
    "handDrawScatter": 3,
    "legend": {
      "useGraphSettings": true,
      "markerSize": 12,
      "valueWidth": 0,
      "verticalGap": 0
    },
    "dataProvider": [{
      "year": 2014,
      "income": 23.5,
      "expenses": 18.1,
      "color": "#952FFE"
    }, {
      "year": 2015,
      "income": 26.2,
      "expenses": 22.8,
      "color": "#5182DE"
    }, {
      "year": 2016,
      "income": 30.1,
      "expenses": 23.9,
      "color": "#8282F1"
    }, {
      "year": 2017,
      "income": 29.5,
      "expenses": 25.1,
      "color": "#B369FE"
    }, {
      "year": 2018,
      "income": 24.6,
      "expenses": 25,
      "color": "#51ADDD"
    }],
    "valueAxes": [{
      "minorGridAlpha": 0.08,
      "minorGridEnabled": true,
      "position": "top",
      "axisAlpha": 0
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
      "title": "Income",
      "type": "column",
      "fillAlphas": 1,
      "fillColorsField": "color",
      "valueField": "income"
    }, {
      "balloonText": "<span style='font-size:13px;'>[[title]] in [[category]]:<b>[[value]]</b></span>",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "lineColor": "#AA59FE",
      "bulletColor": "#FFFFFF",
      "useLineColorForBulletBorder": true,
      "fillAlphas": 0,
      "lineThickness": 2,
      "lineAlpha": 1,
      "bulletSize": 7,
      "title": "Expenses",
      "valueField": "expenses"
    }],
    "rotate": true,
    "categoryField": "year",
    "categoryAxis": {
      "gridPosition": "start"
    },
    "export": {
      "enabled": false
    }
  });
}
/*--------------  bar chart 13 amchart END ------------*/

/*--------------  bar chart 14 highchart start ------------*/


if ($('#socialads').length) {
  Highcharts.chart('socialads', {
    chart: {
      type: 'column'
    },
    title: false,
    xAxis: {
      categories: ['FB', 'TW', 'INS', 'G+', 'LINKD']
    },
    colors: ['#F5CA3F', '#E5726D', '#12C599', '#5F73F2'],
    yAxis: {
      min: 0,
      title: false
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'column'
      }
    },
    series: [{
      name: 'Closed',
      data: [51, 48, 64, 48, 84]
    }, {
      name: 'Hold',
      data: [83, 84, 53, 81, 88]
    }, {
      name: 'Pending',
      data: [93, 84, 53, 53, 48]
    }, {
      name: 'Active',
      data: [430, 312, 348, 254, 258]
    }]
  });
}
/*--------------  bar chart 14 highchart END ------------*/

/*--------------  coin distrubution chart END ------------*/


if ($('#coin_distribution').length) {
  zingchart.THEME = "classic";
  var myConfig = {
    "globals": {
      "font-family": "Roboto"
    },
    "graphset": [{
      "type": "pie",
      "background-color": "#fff",
      "legend": {
        "background-color": "none",
        "border-width": 0,
        "shadow": false,
        "layout": "float",
        "margin": "auto auto 16% auto",
        "marker": {
          "border-radius": 3,
          "border-width": 0
        },
        "item": {
          "color": "%backgroundcolor"
        }
      },
      "plotarea": {
        "background-color": "#FFFFFF",
        "border-color": "#DFE1E3",
        "margin": "25% 8%"
      },
      "labels": [{
        "x": "45%",
        "y": "47%",
        "width": "10%",
        "text": "340 Coin",
        "font-size": 17,
        "font-weight": 700
      }],
      "plot": {
        "size": 70,
        "slice": 90,
        "margin-right": 0,
        "border-width": 0,
        "shadow": 0,
        "value-box": {
          "visible": true
        },
        "tooltip": {
          "text": "%v USD",
          "shadow": false,
          "border-radius": 2
        }
      },
      "series": [{
        "values": [1355460],
        "text": "Bitcoin",
        "background-color": "#4cff63"
      }, {
        "values": [1585218],
        "text": "LiteCoin",
        "background-color": "#fd9c21"
      }, {
        "values": [1064598],
        "text": "Euthorium",
        "background-color": "#2c13f8"
      }]
    }]
  };
  zingchart.render({
    id: 'coin_distribution',
    data: myConfig
  });
}
/*--------------  coin distrubution chart END ------------*/

/*-------------- 1 Pie chart amchart start ------------*/


if ($('#ampiechart1').length) {
  var chart = AmCharts.makeChart("ampiechart1", {
    "type": "pie",
    "labelRadius": -35,
    "labelText": "[[percents]]%",
    "dataProvider": [{
      "country": "Lithuania",
      "litres": 501.9,
      "backgroundColor": "#815DF6"
    }, {
      "country": "Czech Republic",
      "litres": 301.9,
      "backgroundColor": "#67B7DC"
    }, {
      "country": "Ireland",
      "litres": 201.1,
      "backgroundColor": "#9c82f4"
    }, {
      "country": "The Netherlands",
      "litres": 150,
      "backgroundColor": "#FDD400"
    }],
    "color": "#fff",
    "colorField": "backgroundColor",
    "valueField": "litres",
    "titleField": "country"
  });
}
/*-------------- 1 Pie chart amchart end ------------*/

/*-------------- 2 Pie chart amchart start ------------*/


if ($('#ampiechart2').length) {
  var chart = AmCharts.makeChart("ampiechart2", {
    "type": "pie",
    "theme": "light",
    "labelRadius": -65,
    "labelText": "[[title]]%",
    "dataProvider": [{
      "title": "New",
      "value": 4852
    }, {
      "title": "Returning",
      "value": 9899
    }],
    "titleField": "title",
    "valueField": "value",
    "export": {
      "enabled": false
    },
    "color": "#fff"
  });
}
/*-------------- 2 Pie chart amchart end ------------*/

/*-------------- 3 Pie chart amchart start ------------*/


var chart;
var legend;
var selected;
var types = [{
  type: "Fossil Energy",
  percent: 70,
  color: "#ff9e01",
  subs: [{
    type: "Oil",
    percent: 15
  }, {
    type: "Coal",
    percent: 35
  }, {
    type: "Nuclear",
    percent: 20
  }]
}, {
  type: "Green Energy",
  percent: 30,
  color: "#6E4FD1",
  subs: [{
    type: "Hydro",
    percent: 15
  }, {
    type: "Wind",
    percent: 10
  }, {
    type: "Other",
    percent: 5
  }]
}];

function generateChartData() {
  var chartData = [];

  for (var i = 0; i < types.length; i++) {
    if (i == selected) {
      for (var x = 0; x < types[i].subs.length; x++) {
        chartData.push({
          type: types[i].subs[x].type,
          percent: types[i].subs[x].percent,
          color: types[i].color,
          pulled: true
        });
      }
    } else {
      chartData.push({
        type: types[i].type,
        percent: types[i].percent,
        color: types[i].color,
        id: i
      });
    }
  }

  return chartData;
}

if ($('#ampiechart3').length) {
  AmCharts.makeChart("ampiechart3", {
    "type": "pie",
    "theme": "light",
    "labelRadius": -35,
    "labelText": "[[percents]]%",
    "dataProvider": generateChartData(),
    "balloonText": "[[title]]: [[value]]",
    "titleField": "type",
    "valueField": "percent",
    "outlineColor": "#FFFFFF",
    "outlineAlpha": 0.8,
    "outlineThickness": 2,
    "colorField": "color",
    "color": "#fff",
    "pulledField": "pulled",
    "titles": [{
      "text": "Click a slice to see the details"
    }],
    "listeners": [{
      "event": "clickSlice",
      "method": function method(event) {
        var chart = event.chart;

        if (event.dataItem.dataContext.id != undefined) {
          selected = event.dataItem.dataContext.id;
        } else {
          selected = undefined;
        }

        chart.dataProvider = generateChartData();
        chart.validateData();
      }
    }],
    "export": {
      "enabled": false
    }
  });
}
/*-------------- 3 Pie chart amchart end ------------*/

/*-------------- 4 Pie chart highcharts start ------------*/


if ($('#highpiechart4').length) {
  var pieColors = function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
      // Start out with a darkened base color (negative brighten), and end
      // up with a much brighter color
      colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
    }

    return colors;
  }(); // Build the chart


  Highcharts.chart('highpiechart4', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Dollar market Values, 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          style: {
            "color": "contrast",
            "fontSize": "11px",
            "fontWeight": "bold",
            "textOutline": ""
          },
          enabled: true,
          format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Share',
      data: [{
        name: 'USD',
        y: 61.41
      }, {
        name: 'BTC',
        y: 11.84
      }, {
        name: 'TCN',
        y: 10.85
      }]
    }]
  });
}
/*-------------- 4 Pie chart highcharts end ------------*/

/*-------------- 5 Pie chart highcharts start ------------*/


if ($('#highpiechart5').length) {
  Highcharts.chart('highpiechart5', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Dollar market Values, 2018'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: Highcharts.theme && Highcharts.theme.contrastTextColor || '#444',
            "textOutline": ""
          }
        }
      }
    },
    series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'USB',
        y: 61.41,
        sliced: true,
        selected: true
      }, {
        name: 'BTC',
        y: 11.84
      }, {
        name: 'ETC',
        y: 10.85
      }]
    }]
  });
}
/*-------------- 5 Pie chart highcharts end ------------*/

/*-------------- 6 Pie chart highcharts start ------------*/


if ($('#highpiechart6').length) {
  Highcharts.chart('highpiechart6', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: '<br>Values<br>',
      align: 'center',
      verticalAlign: 'middle',
      y: 40
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -30,
          style: {
            fontWeight: 'bold',
            color: 'white',
            textOutline: 0
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '65%']
      }
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '55%',
      data: [['USD', 58.9], ['BTC', 13.29], ['TCN', 13], {
        name: 'Other',
        y: 7.61,
        dataLabels: {
          enabled: false
        }
      }]
    }]
  });
}
/*-------------- 6 Pie chart highcharts end ------------*/

/*-------------- 7 Pie chart chartjs start ------------*/


if ($('#seolinechart8').length) {
  var ctx = document.getElementById("seolinechart8").getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
      labels: ["FB", "TW", "G+", "INS"],
      datasets: [{
        backgroundColor: ["#8919FE", "#12C498", "#F8CB3F", "#E36D68"],
        borderColor: '#fff',
        data: [810, 410, 260, 150]
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: true
      },
      animation: {
        easing: "easeInOutBack"
      }
    }
  });
}
/*-------------- 7 Pie chart chartjs end ------------*/


(function ($) {
  "use strict";
  /*================================
  Preloader
  ==================================*/

  var preloader = $('#preloader');
  $(window).on('load', function () {
    setTimeout(function () {
      preloader.fadeOut('slow', function () {
        $(this).remove();
      });
    }, 300);
  });
  /*================================
  sidebar collapsing
  ==================================*/

  if (window.innerWidth <= 1364) {
    $('.page-container').addClass('sbar_collapsed');
  }

  $('.nav-btn').on('click', function () {
    $('.page-container').toggleClass('sbar_collapsed');
  });
  /*================================
  Start Footer resizer
  ==================================*/

  var e = function e() {
    var e = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 5;
    (e -= 67) < 1 && (e = 1), e > 67 && $(".main-content").css("min-height", e + "px");
  };

  $(window).ready(e), $(window).on("resize", e);
  /*================================
  sidebar menu
  ==================================*/

  $("#menu").metisMenu();
  /*================================
  slimscroll activation
  ==================================*/

  $('.menu-inner').slimScroll({
    height: 'auto'
  });
  $('.nofity-list').slimScroll({
    height: '435px'
  });
  $('.timeline-area').slimScroll({
    height: '500px'
  });
  $('.recent-activity').slimScroll({
    height: 'calc(100vh - 114px)'
  });
  $('.settings-list').slimScroll({
    height: 'calc(100vh - 158px)'
  });
  /*================================
  stickey Header
  ==================================*/

  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop(),
        mainHeader = $('#sticky-header'),
        mainHeaderHeight = mainHeader.innerHeight(); // console.log(mainHeader.innerHeight());

    if (scroll > 1) {
      $("#sticky-header").addClass("sticky-menu");
    } else {
      $("#sticky-header").removeClass("sticky-menu");
    }
  });
  /*================================
  form bootstrap validation
  ==================================*/

  $('[data-toggle="popover"]').popover();
  /*------------- Start form Validation -------------*/

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation'); // Loop over them and prevent submission

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
  /*================================
  datatable active
  ==================================*/

  if ($('#dataTable').length) {
    $('#dataTable').DataTable({
      responsive: true
    });
  }

  if ($('#dataTable2').length) {
    $('#dataTable2').DataTable({
      responsive: true
    });
  }

  if ($('#dataTable3').length) {
    $('#dataTable3').DataTable({
      responsive: true
    });
  }
  /*================================
  Slicknav mobile menu
  ==================================*/


  $('ul#nav_menu').slicknav({
    prependTo: "#mobile_menu"
  });
  /*================================
  login form
  ==================================*/

  $('.form-gp input').on('focus', function () {
    $(this).parent('.form-gp').addClass('focused');
  });
  $('.form-gp input').on('focusout', function () {
    if ($(this).val().length === 0) {
      $(this).parent('.form-gp').removeClass('focused');
    }
  });
  /*================================
  slider-area background setting
  ==================================*/

  $('.settings-btn, .offset-close').on('click', function () {
    $('.offset-area').toggleClass('show_hide');
    $('.settings-btn').toggleClass('active');
  });
  /*================================
  Owl Carousel
  ==================================*/

  function slider_area() {
    var owl = $('.testimonial-carousel').owlCarousel({
      margin: 50,
      loop: true,
      autoplay: false,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        450: {
          items: 1
        },
        768: {
          items: 2
        },
        1000: {
          items: 2
        },
        1360: {
          items: 1
        },
        1600: {
          items: 2
        }
      }
    });
  }

  slider_area();
  /*================================
  Fullscreen Page
  ==================================*/

  if ($('#full-view').length) {
    var requestFullscreen = function requestFullscreen(ele) {
      if (ele.requestFullscreen) {
        ele.requestFullscreen();
      } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
      } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
      } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
      } else {
        console.log('Fullscreen API is not supported.');
      }
    };

    var exitFullscreen = function exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else {
        console.log('Fullscreen API is not supported.');
      }
    };

    var fsDocButton = document.getElementById('full-view');
    var fsExitDocButton = document.getElementById('full-view-exit');
    fsDocButton.addEventListener('click', function (e) {
      e.preventDefault();
      requestFullscreen(document.documentElement);
      $('body').addClass('expanded');
    });
    fsExitDocButton.addEventListener('click', function (e) {
      e.preventDefault();
      exitFullscreen();
      $('body').removeClass('expanded');
    });
  }
})(jQuery); // Avoid `console` errors in browsers that lack a console.


(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Place any jQuery/helper plugins in here.

/*
 * jQuery Easing v1.4.0 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/


(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], function ($) {
      return factory($);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.easing["jswing"] = $.easing["swing"];
  var pow = Math.pow,
      sqrt = Math.sqrt,
      sin = Math.sin,
      cos = Math.cos,
      PI = Math.PI,
      c1 = 1.70158,
      c2 = c1 * 1.525,
      c3 = c1 + 1,
      c4 = 2 * PI / 3,
      c5 = 2 * PI / 4.5;

  function bounceOut(x) {
    var n1 = 7.5625,
        d1 = 2.75;

    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + .75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + .9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + .984375;
    }
  }

  $.extend($.easing, {
    def: "easeOutQuad",
    swing: function swing(x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function easeInQuad(x) {
      return x * x;
    },
    easeOutQuad: function easeOutQuad(x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function easeInOutQuad(x) {
      return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function easeInCubic(x) {
      return x * x * x;
    },
    easeOutCubic: function easeOutCubic(x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function easeInOutCubic(x) {
      return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function easeInQuart(x) {
      return x * x * x * x;
    },
    easeOutQuart: function easeOutQuart(x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function easeInOutQuart(x) {
      return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function easeInQuint(x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function easeOutQuint(x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function easeInOutQuint(x) {
      return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function easeInSine(x) {
      return 1 - cos(x * PI / 2);
    },
    easeOutSine: function easeOutSine(x) {
      return sin(x * PI / 2);
    },
    easeInOutSine: function easeInOutSine(x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function easeInExpo(x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function easeOutExpo(x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function easeInOutExpo(x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function easeInCirc(x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function easeOutCirc(x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function easeInOutCirc(x) {
      return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function easeInElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function easeOutElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1;
    },
    easeInOutElastic: function easeInOutElastic(x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1;
    },
    easeInBack: function easeInBack(x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function easeOutBack(x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function easeInOutBack(x) {
      return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function easeInBounce(x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function easeInOutBounce(x) {
      return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
    }
  });
});
