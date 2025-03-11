/*! modernizr 3.13.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csspositionsticky-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-flexbox-flexboxlegacy-flexboxtweener-flexwrap-pointerevents-touchevents-video-webgl-mq-prefixed-prefixedcss-setclasses !*/
!function(e, t, n, r) {
    function i(e, t) {
        return typeof e === t
    }
    function o() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : C ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }
    function s() {
        var e = n.body;
        return e || (e = o(C ? "svg" : "body"), e.fake = !0), e
    }
    function a(e, t, r, i) {
        var a,
            l,
            d,
            c,
            u = "modernizr",
            f = o("div"),
            p = s();
        if (parseInt(r, 10))
            for (; r--;)
                d = o("div"),
                d.id = i ? i[r] : u + (r + 1),
                f.appendChild(d);
        return a = o("style"), a.type = "text/css", a.id = "s" + u, (p.fake ? p : f).appendChild(a), p.appendChild(f), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(n.createTextNode(e)), f.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), l = t(f, e), p.fake && p.parentNode ? (p.parentNode.removeChild(p), b.style.overflow = c, b.offsetHeight) : f.parentNode.removeChild(f), !!l
    }
    function l(e, n, r) {
        var i;
        if ("getComputedStyle" in t) {
            i = getComputedStyle.call(t, e, n);
            var o = t.console;
            if (null !== i)
                r && (i = i.getPropertyValue(r));
            else if (o) {
                var s = o.error ? "error" : "log";
                o[s].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            i = !n && e.currentStyle && e.currentStyle[r];
        return i
    }
    function d(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function c(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function u(e, n) {
        var i = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; i--;)
                if (t.CSS.supports(c(e[i]), n))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var o = []; i--;)
                o.push("(" + c(e[i]) + ":" + n + ")");
            return o = o.join(" or "), a("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" === l(e, null, "position")
            })
        }
        return r
    }
    function f(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }
    function p(e, t, n, s) {
        function a() {
            c && (delete E.style, delete E.modElem)
        }
        if (s = !i(s, "undefined") && s, !i(n, "undefined")) {
            var l = u(e, n);
            if (!i(l, "undefined"))
                return l
        }
        for (var c, p, v, h, m, y = ["modernizr", "tspan", "samp"]; !E.style && y.length;)
            c = !0,
            E.modElem = o(y.shift()),
            E.style = E.modElem.style;
        for (v = e.length, p = 0; p < v; p++)
            if (h = e[p], m = E.style[h], d(h, "-") && (h = f(h)), E.style[h] !== r) {
                if (s || i(n, "undefined"))
                    return a(), "pfx" !== t || h;
                try {
                    E.style[h] = n
                } catch (e) {}
                if (E.style[h] !== m)
                    return a(), "pfx" !== t || h
            }
        return a(), !1
    }
    function v(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function h(e, t, n) {
        var r;
        for (var o in e)
            if (e[o] in t)
                return !1 === n ? e[o] : (r = t[e[o]], i(r, "function") ? v(r, n || t) : r);
        return !1
    }
    function m(e, t, n, r, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + P.join(s + " ") + s).split(" ");
        return i(t, "string") || i(t, "undefined") ? p(a, t, r, o) : (a = (e + " " + N.join(s + " ") + s).split(" "), h(a, t, n))
    }
    function y(e, t, n) {
        return m(e, r, r, t, n)
    }
    function g(e, t) {
        return e - 1 === t || e === t || e + 1 === t
    }
    var x = [],
        w = {
            _version: "3.13.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                x.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                x.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = w,
    Modernizr = new Modernizr;
    var T = [],
        b = n.documentElement,
        C = "svg" === b.nodeName.toLowerCase(),
        S = function() {
            var e = t.matchMedia || t.msMatchMedia;
            return e ? function(t) {
                var n = e(t);
                return n && n.matches || !1
            } : function(e) {
                var t = !1;
                return a("@media " + e + " { #modernizr { position: absolute; } }", function(e) {
                    t = "absolute" === l(e, null, "position")
                }), t
            }
        }();
    w.mq = S;
    var _ = "Moz O ms Webkit",
        P = w._config.usePrefixes ? _.split(" ") : [];
    w._cssomPrefixes = P;
    var z = {
        elem: o("modernizr")
    };
    Modernizr._q.push(function() {
        delete z.elem
    });
    var E = {
        style: z.elem.style
    };
    Modernizr._q.unshift(function() {
        delete E.style
    });
    var N = w._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    w._domPrefixes = N,
    w.testAllProps = m;
    var A = function(e) {
        var n,
            i = j.length,
            o = t.CSSRule;
        if (void 0 === o)
            return r;
        if (!e)
            return !1;
        if (e = e.replace(/^@/, ""), (n = e.replace(/-/g, "_").toUpperCase() + "_RULE") in o)
            return "@" + e;
        for (var s = 0; s < i; s++) {
            var a = j[s];
            if (a.toUpperCase() + "_" + n in o)
                return "@-" + a.toLowerCase() + "-" + e
        }
        return !1
    };
    w.atRule = A;
    var I = w.prefixed = function(e, t, n) {
            return 0 === e.indexOf("@") ? A(e) : (-1 !== e.indexOf("-") && (e = f(e)), t ? m(e, t, n) : m(e, "pfx"))
        },
        j = (w.prefixedCSS = function(e) {
            var t = I(e);
            return t && c(t)
        }, w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""]);
    w._prefixes = j,
    Modernizr.addTest("touchevents", function() {
        if ("ontouchstart" in t || t.TouchEvent || t.DocumentTouch && n instanceof DocumentTouch)
            return !0;
        var e = ["(", j.join("touch-enabled),("), "heartz", ")"].join("");
        return S(e)
    });
    var k = [""].concat(N);
    w._domPrefixesAll = k;
    var W = function() {
        function e(e, n) {
            var i;
            return !!e && (n && "string" != typeof n || (n = o(n || "div")), e = "on" + e, i = e in n, !i && t && (n.setAttribute || (n = o("div")), n.setAttribute(e, ""), i = "function" == typeof n[e], n[e] !== r && (n[e] = r), n.removeAttribute(e)), i)
        }
        var t = !("onblur" in b);
        return e
    }();
    w.hasEvent = W,
    Modernizr.addTest("pointerevents", function() {
        for (var e = 0, t = k.length; e < t; e++)
            if (W(k[e] + "pointerdown"))
                return !0;
        return !1
    }),
    function() {
        var e = o("video");
        Modernizr.addTest("video", function() {
            var t = !1;
            try {
                t = !!e.canPlayType,
                t && (t = new Boolean(t))
            } catch (e) {}
            return t
        });
        try {
            e.canPlayType && (Modernizr.addTest("video.ogg", e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "")), Modernizr.addTest("video.h264", e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "")), Modernizr.addTest("video.h265", e.canPlayType('video/mp4; codecs="hev1"').replace(/^no$/, "")), Modernizr.addTest("video.webm", e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")), Modernizr.addTest("video.vp9", e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, "")), Modernizr.addTest("video.hls", e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, "")), Modernizr.addTest("video.av1", e.canPlayType('video/mp4; codecs="av01"').replace(/^no$/, "")))
        } catch (e) {}
    }(),
    Modernizr.addTest("webgl", function() {
        return "WebGLRenderingContext" in t
    }),
    Modernizr.addTest("csspositionsticky", function() {
        var e = "position:",
            t = o("a"),
            n = t.style;
        return n.cssText = e + j.join("sticky;" + e).slice(0, -e.length), -1 !== n.position.indexOf("sticky")
    }),
    w.testAllProps = y,
    Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)),
    Modernizr.addTest("flexboxlegacy", y("boxDirection", "reverse", !0)),
    Modernizr.addTest("flexboxtweener", y("flexAlign", "end", !0)),
    Modernizr.addTest("flexwrap", y("flexWrap", "wrap", !0));
    var $ = w.testStyles = a;
    $("#modernizr { height: 50vh; max-height: 10px; }", function(e) {
        var t = parseInt(l(e, null, "height"), 10);
        Modernizr.addTest("cssvhunit", 10 === t)
    }),
    $("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2],
            n = e.childNodes[1],
            r = e.childNodes[0],
            i = parseInt((n.offsetWidth - n.clientWidth) / 2, 10),
            o = r.clientWidth / 100,
            s = r.clientHeight / 100,
            a = parseInt(50 * Math.max(o, s), 10),
            d = parseInt(l(t, null, "width"), 10);
        Modernizr.addTest("cssvmaxunit", g(a, d) || g(a, d - i))
    }, 3),
    $("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}", function(e) {
        var t = e.childNodes[2],
            n = e.childNodes[1],
            r = e.childNodes[0],
            i = parseInt((n.offsetWidth - n.clientWidth) / 2, 10),
            o = r.clientWidth / 100,
            s = r.clientHeight / 100,
            a = parseInt(50 * Math.min(o, s), 10),
            d = parseInt(l(t, null, "width"), 10);
        Modernizr.addTest("cssvminunit", g(a, d) || g(a, d - i))
    }, 3),
    $("#modernizr { width: 50vw; }", function(e) {
        var n = parseInt(t.innerWidth / 2, 10),
            r = parseInt(l(e, null, "width"), 10);
        Modernizr.addTest("cssvwunit", g(r, n))
    }),
    function() {
        var e,
            t,
            n,
            r,
            o,
            s,
            a;
        for (var l in x)
            if (x.hasOwnProperty(l)) {
                if (e = [], t = x[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (r = i(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)
                    s = e[o],
                    a = s.split("."),
                    1 === a.length ? Modernizr[a[0]] = r : (Modernizr[a[0]] && (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean) || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r),
                    T.push((r ? "" : "no-") + a.join("-"))
            }
    }(),
    function(e) {
        var t = b.className,
            n = Modernizr._config.classPrefix || "";
        if (C && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (e.length > 0 && (t += " " + n + e.join(" " + n)), C ? b.className.baseVal = t : b.className = t)
    }(T),
    delete w.addTest,
    delete w.addAsyncTest;
    for (var L = 0; L < Modernizr._q.length; L++)
        Modernizr._q[L]();
    e.Modernizr = Modernizr
}(window, window, document);
