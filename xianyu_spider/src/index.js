/**
 * Created by ghy on 2019/3/13.
 */
console.log("ALI WEEX VUE RENDER 0.12.14, Build 2017-12-11 16:44."), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.WeexVueRender = t()
}(this, function () {
    "use strict";
    function e(e, t) {
        if ("undefined" == typeof document)return t;
        e = e || "";
        var n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
        return i.type = "text/css", n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e)), t
    }

    function t(e, t) {
        return t = {exports: {}}, e(t, t.exports), t.exports
    }

    function n() {
        j || (j = !0, window.addEventListener("deviceorientation", r))
    }

    function i() {
        j && (j = !1, window.removeEventListener("deviceorientation", r))
    }

    function r(e) {
        if (B && (B = !1, !e.alpha && !e.beta && !e.gamma))return R = !1, L.forEach(function (e) {
            e(N)
        }), L.length = 0, void i();
        var t = {alpha: e.alpha, beta: e.beta, gamma: e.gamma}, n = Date.now();
        O.forEach(function (e) {
            n > e.nextTick && (e.nextTick = n + e.interval, e.callback(t))
        })
    }

    function o(e, t, n) {
        if ("string" == typeof e)try {
            e = JSON.parse(e)
        } catch (e) {
            return
        }
        if ("object" == typeof e && (e.api || e.apiName)) {
            var i = A({}, e);
            i.api = i.api || i.apiName, i.v = i.v || i.apiVersion;
            var r = "boolean" == typeof i.needLogin ? i.needLogin : "AutoLoginAndManualLogin" === i.sessionOption;
            i.data = i.data || i.param || i.params || i.requestParams, i.ecode = i.ecode ? parseInt(i.ecode) : 0, i.ttid = i.ttid || weex.config.env.ttid, i.post && (i.type = "POST"), w = lib.env.aliapp, v = w && w.appname, b = "TB" === v || "TM" === v;
            ["apiName", "apiVersion", "needLogin", "isHttps", "post", "sessionOption", "param", "params", "requestParams"].forEach(function (e) {
                delete i[e]
            }), i.ecode && !b && global.UA_Opt && "function" == typeof global.getUA && (i.data.ua = getUA());
            var o = w && w.version,
                a = "acds" === i.requestType && w && ("TB" === v && o.gte("5.4") || "TM" === v && o.gte("5.10")) ? "acds" : "mtop",
                s = function (e) {
                    "acds" === i.requestType && "mtop" === a && (e = e.data), e || (e = new Error("mtop response is null.")), "object" == typeof e && n && (e = JSON.stringify(e)), t && t(e)
                };
            "acds" === a ? lib.windvane.call("HCWVPlugin", "getCategrid", {}, function (e) {
                e = JSON.parse(e.result || "{}"), s(e)
            }, s) : r ? lib.mtop.loginRequest(i).then(s, s) : lib.mtop.request(i).then(s, s)
        }
    }

    function a(e, t) {
        t && t({result: "WX_FAILED", message: "no windvane detected."})
    }

    function s(e) {
        var t = /(?:https?:)?\/\//, n = /data:image\/[^;]+;base64,/, i = /local:\/\//,
            r = {iconType: "", icon: "", fromNative: !1};
        if (e.match(t)) r.iconType = "URL"; else if (e.match(n)) r.iconType = "Base64", r.icon = e.replace(n, ""); else {
            if (!e.match(i))return;
            r.fromNative = !0, r.iconType = "Native", r.icon = e.replace(i, "")
        }
        return r
    }

    var l = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        c = t(function (e) {
            function t(e, t) {
                if ("undefined" == typeof document)return t;
                e = e || "";
                var n = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
                return i.type = "text/css", n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e)), t
            }

            function n(e, t) {
                for (var n = e; n;) {
                    if (n.contains(t) || n == t)return n;
                    n = n.parentNode
                }
                return null
            }

            function i(e, t, n) {
                var i = Vt.createEvent("HTMLEvents");
                if (i.initEvent(t, !0, !0), "object" == typeof n)for (var r in n)i[r] = n[r];
                i._for = "weex", e.dispatchEvent(i)
            }

            function r(e, t, n, i, r, o, a, s) {
                var l = Math.atan2(s - o, a - r) - Math.atan2(i - t, n - e),
                    c = Math.sqrt((Math.pow(s - o, 2) + Math.pow(a - r, 2)) / (Math.pow(i - t, 2) + Math.pow(n - e, 2))),
                    u = [r - c * e * Math.cos(l) + c * t * Math.sin(l), o - c * t * Math.cos(l) - c * e * Math.sin(l)];
                return {
                    rotate: l,
                    scale: c,
                    translate: u,
                    matrix: [[c * Math.cos(l), -c * Math.sin(l), u[0]], [c * Math.sin(l), c * Math.cos(l), u[1]], [0, 0, 1]]
                }
            }

            function o(e) {
                0 === Object.keys(Jt).length && (qt.addEventListener("touchmove", a, !1), qt.addEventListener("touchend", s, !1), qt.addEventListener("touchcancel", c, !1));
                for (var t = 0; t < e.changedTouches.length; t++) {
                    var r = e.changedTouches[t], o = {};
                    for (var l in r)o[l] = r[l];
                    var u = {
                        startTouch: o,
                        startTime: Date.now(),
                        status: "tapping",
                        element: e.srcElement || e.target,
                        pressingHandler: setTimeout(function (t, n) {
                            return function () {
                                "tapping" === u.status && (u.status = "pressing", i(t, "longpress", {
                                    touch: n,
                                    touches: e.touches,
                                    changedTouches: e.changedTouches,
                                    touchEvent: e
                                })), clearTimeout(u.pressingHandler), u.pressingHandler = null
                            }
                        }(e.srcElement || e.target, e.changedTouches[t]), 500)
                    };
                    Jt[r.identifier] = u
                }
                if (2 == Object.keys(Jt).length) {
                    var d = [];
                    for (var l in Jt)d.push(Jt[l].element);
                    i(n(d[0], d[1]), "dualtouchstart", {touches: Gt.call(e.touches), touchEvent: e})
                }
            }

            function a(e) {
                for (var t = 0; t < e.changedTouches.length; t++) {
                    var o = e.changedTouches[t], a = Jt[o.identifier];
                    if (!a)return;
                    a.lastTouch || (a.lastTouch = a.startTouch), a.lastTime || (a.lastTime = a.startTime), a.velocityX || (a.velocityX = 0), a.velocityY || (a.velocityY = 0), a.duration || (a.duration = 0);
                    var s = Date.now() - a.lastTime, l = (o.clientX - a.lastTouch.clientX) / s,
                        c = (o.clientY - a.lastTouch.clientY) / s;
                    s > 70 && (s = 70), a.duration + s > 70 && (a.duration = 70 - s), a.velocityX = (a.velocityX * a.duration + l * s) / (a.duration + s), a.velocityY = (a.velocityY * a.duration + c * s) / (a.duration + s), a.duration += s, a.lastTouch = {};
                    for (var u in o)a.lastTouch[u] = o[u];
                    a.lastTime = Date.now();
                    var d = o.clientX - a.startTouch.clientX, h = o.clientY - a.startTouch.clientY,
                        f = Math.sqrt(Math.pow(d, 2) + Math.pow(h, 2)), p = !(Math.abs(d) > Math.abs(h)),
                        m = p ? h >= 0 ? "down" : "up" : d >= 0 ? "right" : "left";
                    ("tapping" === a.status || "pressing" === a.status) && f > 10 && (a.status = "panning", a.isVertical = p, a.direction = m, i(a.element, "panstart", {
                        touch: o,
                        touches: e.touches,
                        changedTouches: e.changedTouches,
                        touchEvent: e,
                        isVertical: a.isVertical,
                        direction: m
                    })), "panning" === a.status && (a.panTime = Date.now(), i(a.element, "panmove", {
                        displacementX: d,
                        displacementY: h,
                        touch: o,
                        touches: e.touches,
                        changedTouches: e.changedTouches,
                        touchEvent: e,
                        isVertical: a.isVertical,
                        direction: m
                    }))
                }
                if (2 == Object.keys(Jt).length) {
                    for (var g, A = [], w = [], v = [], t = 0; t < e.touches.length; t++) {
                        var o = e.touches[t], a = Jt[o.identifier];
                        A.push([a.startTouch.clientX, a.startTouch.clientY]), w.push([o.clientX, o.clientY])
                    }
                    for (var u in Jt)v.push(Jt[u].element);
                    g = r(A[0][0], A[0][1], A[1][0], A[1][1], w[0][0], w[0][1], w[1][0], w[1][1]), i(n(v[0], v[1]), "dualtouch", {
                        transform: g,
                        touches: e.touches,
                        touchEvent: e
                    })
                }
            }

            function s(e) {
                if (2 == Object.keys(Jt).length) {
                    var t = [];
                    for (var r in Jt)t.push(Jt[r].element);
                    i(n(t[0], t[1]), "dualtouchend", {touches: Gt.call(e.touches), touchEvent: e})
                }
                for (var o = 0; o < e.changedTouches.length; o++) {
                    var l = e.changedTouches[o], u = l.identifier, d = Jt[u];
                    if (d) {
                        if (d.pressingHandler && (clearTimeout(d.pressingHandler), d.pressingHandler = null), "tapping" === d.status && (d.timestamp = Date.now(), i(d.element, "tap", {
                                touch: l,
                                touchEvent: e
                            }), Kt && d.timestamp - Kt.timestamp < 300 && i(d.element, "doubletap", {
                                touch: l,
                                touchEvent: e
                            }), Kt = d), "panning" === d.status) {
                            var h = Date.now(), f = h - d.startTime, p = l.clientX - d.startTouch.clientX,
                                m = l.clientY - d.startTouch.clientY,
                                g = Math.sqrt(d.velocityY * d.velocityY + d.velocityX * d.velocityX),
                                A = g > .5 && h - d.lastTime < 100, w = {
                                    duration: f,
                                    isSwipe: A,
                                    velocityX: d.velocityX,
                                    velocityY: d.velocityY,
                                    displacementX: p,
                                    displacementY: m,
                                    touch: l,
                                    touches: e.touches,
                                    changedTouches: e.changedTouches,
                                    touchEvent: e,
                                    isVertical: d.isVertical,
                                    direction: d.direction
                                };
                            i(d.element, "panend", w), A && i(d.element, "swipe", w)
                        }
                        "pressing" === d.status && i(d.element, "pressend", {touch: l, touchEvent: e}), delete Jt[u]
                    }
                }
                0 === Object.keys(Jt).length && (qt.removeEventListener("touchmove", a, !1), qt.removeEventListener("touchend", s, !1), qt.removeEventListener("touchcancel", c, !1))
            }

            function c(e) {
                if (2 == Object.keys(Jt).length) {
                    var t = [];
                    for (var r in Jt)t.push(Jt[r].element);
                    i(n(t[0], t[1]), "dualtouchend", {touches: Gt.call(e.touches), touchEvent: e})
                }
                for (var o = 0; o < e.changedTouches.length; o++) {
                    var l = e.changedTouches[o], u = l.identifier, d = Jt[u];
                    d && (d.pressingHandler && (clearTimeout(d.pressingHandler), d.pressingHandler = null), "panning" === d.status && i(d.element, "panend", {
                        touch: l,
                        touches: e.touches,
                        changedTouches: e.changedTouches,
                        touchEvent: e
                    }), "pressing" === d.status && i(d.element, "pressend", {touch: l, touchEvent: e}), delete Jt[u])
                }
                0 === Object.keys(Jt).length && (qt.removeEventListener("touchmove", a, !1), qt.removeEventListener("touchend", s, !1), qt.removeEventListener("touchcancel", c, !1))
            }

            function u(e, t) {
                return t = {exports: {}}, e(t, t.exports), t.exports
            }

            function d(e) {
                var t, n;
                this.promise = new e(function (e, i) {
                    if (void 0 !== t || void 0 !== n)throw TypeError("Bad Promise constructor");
                    t = e, n = i
                }), this.resolve = Vo(t), this.reject = Vo(n)
            }

            function h(e) {
                Object.defineProperty(this, "val", {value: e.toString(), enumerable: !0}), this.gt = function (e) {
                    return h.compare(this, e) > 0
                }, this.gte = function (e) {
                    return h.compare(this, e) >= 0
                }, this.lt = function (e) {
                    return h.compare(this, e) < 0
                }, this.lte = function (e) {
                    return h.compare(this, e) <= 0
                }, this.eq = function (e) {
                    return 0 === h.compare(this, e)
                }
            }

            function f(e) {
                return Xa.call(e) === Za
            }

            function p(e) {
                return Xa.call(e) === es
            }

            function m(e) {
                for (var t = arguments, n = [], i = arguments.length - 1; i-- > 0;)n[i] = t[i + 1];
                return !n || n.length <= 0 ? e : (n.forEach(function (t) {
                    if ("object" == typeof t)for (var n in t)e[n] = t[n]
                }), e)
            }

            function g(e) {
                for (var t = arguments, n = [], i = arguments.length - 1; i-- > 0;)n[i] = t[i + 1];
                return !n || n.length <= 0 ? e : (n.forEach(function (t) {
                    if ("object" == typeof t) {
                        var n;
                        for (var i in t)!(n = t[i]) && "" !== n && 0 !== n || "undefined" === n || (e[i] = n)
                    }
                }), e)
            }

            function A(e, t, n) {
                return void 0 === t && (t = {}), (n || []).forEach(function (n) {
                    t && (e[n] = t[n])
                }), e
            }

            function w(e, t, n) {
                return void 0 === t && (t = {}), t ? ((n || []).forEach(function (n) {
                    t && (e[n] = t[n]), t && delete t[n]
                }), e) : e
            }

            function v(e, t) {
                return function (n) {
                    var i = arguments.length;
                    return i ? i > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
                }
            }

            function b(e, t) {
                function n() {
                    i = null, e.apply(null)
                }

                var i;
                return function () {
                    clearTimeout(i), i = setTimeout(n, t)
                }
            }

            function y(e, t) {
                function n() {
                    i = null
                }

                var i;
                return function () {
                    i || e.apply(), clearTimeout(i), i = setTimeout(n, t)
                }
            }

            function x(e, t, n) {
                var i = 0, r = null, o = t + (t > 25 ? t : 25);
                return function () {
                    for (var a = arguments, s = [], l = arguments.length; l--;)s[l] = a[l];
                    var c = this, u = (new Date).getTime();
                    u - i > t && (n && (r && clearTimeout(r), r = setTimeout(function () {
                        r = null, e.apply(c, s)
                    }, o)), e.apply(c, s), i = u)
                }
            }

            function _(e, t, n) {
                if (p(e)) {
                    var i = "l" === (n + "").toLowerCase(), r = e.length;
                    if (t %= r, t < 0 && (t = -t, i = !i), 0 === t)return e;
                    var o, a;
                    return i ? (o = e.slice(0, t), a = e.slice(t)) : (o = e.slice(0, r - t), a = e.slice(r - t)), a.concat(o)
                }
            }

            function C(e) {
                var t = Object.create(null);
                return function (n) {
                    return t[n] || (t[n] = e(n))
                }
            }

            function E(e) {
                var t = {};
                for (var n in e)t[ns(n)] = e[n];
                return t
            }

            function S(e) {
                var t = {};
                for (var n in e)t[os(n)] = e[n];
                return t
            }

            function k(e) {
                var t = {};
                for (var n in e) {
                    t[os(n).replace(as, function (e) {
                        return "-" + e
                    })] = e[n]
                }
                return t
            }

            function T(e) {
                return e ? e.replace(/([A-Z])/g, function (e, t) {
                    return "-" + t.toLowerCase()
                }) : ""
            }

            function I(e, t, n) {
                var i = document.getElementById(t);
                i && n && (i.parentNode.removeChild(i), i = null), i || (i = document.createElement("style"), i.type = "text/css", t && (i.id = t), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
            }

            function O(e) {
                (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                    return setTimeout(e, 16)
                })(e)
            }

            function L(e) {
                if (e) {
                    var t = k(e), n = "";
                    for (var i in t)n += i + ":" + t[i] + ";";
                    return n
                }
            }

            function N(e) {
                var t = window.document, n = e / 10;
                if (t.documentElement) {
                    t.documentElement.style.fontSize || (t.documentElement.style.fontSize = n + "px", ms.rem = n)
                }
            }

            function R(e) {
                if (us) {
                    if (parseInt(us.getAttribute("content")) === e)return
                } else us = document.createElement("meta"), us.setAttribute("name", "weex-viewport");
                us.setAttribute("content", e + "")
            }

            function B() {
                return ms
            }

            function j(e) {
                for (var t = arguments, n = [], i = arguments.length - 1; i-- > 0;)n[i] = t[i + 1];
                return !n || n.length <= 0 ? e : (n.forEach(function (t) {
                    if ("object" == typeof t)for (var n in t)e[n] = t[n]
                }), e)
            }

            function M() {
                return gs
            }

            function P(e, t, n) {
                var i = new Event(t, {bubbles: !1});
                if (j(i, n), -1 !== window.navigator.userAgent.toLowerCase().indexOf("phantomjs"))return i;
                try {
                    Object.defineProperty(i, "target", {enumerable: !0, value: e})
                } catch (t) {
                    return j({}, i, {target: e})
                }
                return i
            }

            function W(e, t, n) {
                var i = new Event(t, {bubbles: !0});
                if (j(i, n), -1 !== window.navigator.userAgent.toLowerCase().indexOf("phantomjs"))return i;
                try {
                    Object.defineProperty(i, "target", {enumerable: !0, value: e})
                } catch (t) {
                    return j({}, i, {target: e})
                }
                return i
            }

            function D(e, t, n) {
                var i = document.createEvent("CustomEvent");
                i.initCustomEvent(t, !1, !0, {}), j(i, n);
                try {
                    Object.defineProperty(i, "target", {enumerable: !0, value: e || null})
                } catch (t) {
                    return j({}, i, {target: e || null})
                }
                return i
            }

            function F(e, t) {
                e.dispatchEvent(t)
            }

            function z(e) {
                var t = {};
                return ["input", "change", "focus", "blur"].forEach(function (n) {
                    t[n] = function (t) {
                        e.$el && (t.value = e.$el.value), e.$emit(n, t)
                    }
                }), t
            }

            function $(e) {
                function t(n) {
                    if (n)return ws.scrollableTypes.indexOf(n.weexType) > -1 ? (e._parentScroller = n, n) : t(n.$parent)
                }

                return e ? e._parentScroller ? e._parentScroller : t(e.$parent) : null
            }

            function U(e, t) {
                return e.left < t.right && e.right > t.left
            }

            function Q(e, t) {
                return e.top < t.bottom && e.bottom > t.top
            }

            function Y(e, t, n, i) {
                n = n || "up";
                var r = "left" === n || "right" === n, o = "up" === n || "down" === n;
                if (r && !Q(e, t))return [!1, !1];
                if (o && !U(e, t))return [!1, !1];
                switch (i = parseInt(i || 0) * weex.config.env.scale, n) {
                    case"up":
                        return [e.top < t.bottom && e.bottom > t.top, e.top < t.bottom + i && e.bottom > t.top - i];
                    case"down":
                        return [e.bottom > t.top && e.top < t.bottom, e.bottom > t.top - i && e.top < t.bottom + i];
                    case"left":
                        return [e.left < t.right && e.right > t.left, e.left < t.right + i && e.right > t.left - i];
                    case"right":
                        return [e.right > t.left && e.left < t.right, e.right > t.left - i && e.left < t.right + i]
                }
            }

            function H(e, t, n, i) {
                if (!e.getBoundingClientRect)return !1;
                var r = {top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth},
                    o = t === window || t === document.body ? r : t ? t.getBoundingClientRect() : r;
                return Y(e.getBoundingClientRect(), o, n, i)
            }

            function V(e, t, n, i) {
                var r = t[n];
                r && r.fn && (r = r.fn), r && r(P(e, n, {direction: i}))
            }

            function q(e) {
                for (var t = e.$vnode, n = {}, i = []; t;)i.push(t), t = t.parent;
                return i.forEach(function (e) {
                    var t = e.componentOptions && e.componentOptions.listeners, i = e.data && e.data.on;
                    m(n, t, i)
                }), n
            }

            function G(e) {
                return e && e.getAttribute("appear-offset")
            }

            function J(e) {
                return [!(!e.appear && !e.disappear), !(!e.offsetAppear && !e.offsetDisappear)]
            }

            function K(e, t) {
                var n = e && e.$el;
                if (n && 1 === n.nodeType) {
                    var i = G(n), r = q(e), o = J(r);
                    if (o[0] || o[1]) {
                        var a = !1, s = window, l = $(e);
                        if (l && l.$el ? s = l.$el : a = !0, t) {
                            Z(e, H(n, s, null, i), null)
                        }
                        if (s._watchAppearList || (s._watchAppearList = []), s._watchAppearList.push(e), !s._scrollWatched) {
                            s._scrollWatched = !0;
                            var c = x(function (e) {
                                var t = a ? window.pageYOffset : s.scrollTop, n = s._lastScrollTop;
                                s._lastScrollTop = t;
                                var i = (t < n ? "down" : t > n ? "up" : s._prevDirection) || null;
                                s._prevDirection = i;
                                for (var r = s._watchAppearList || [], o = r.length, l = 0; l < o; l++) {
                                    var c = r[l], u = c.$el, d = G(u);
                                    Z(c, H(u, s, i, d), i)
                                }
                            }, 25, !0);
                            s.addEventListener("scroll", c, !1), a && document.body.addEventListener("scroll", c, !1)
                        }
                    }
                }
            }

            function X(e) {
                return Z(e, [!1, !1])
            }

            function Z(e, t, n, i) {
                void 0 === n && (n = null);
                var r = e && e.$el, o = t[0], a = t[1];
                if (r) {
                    var s = q(e);
                    (e._appearedOnce || o) && e._visible !== o && (e._appearedOnce || (e._appearedOnce = !0), e._visible = o, V(r, s, o ? "appear" : "disappear", n)), (e._offsetAppearedOnce || a) && e._offsetVisible !== a && (e._offsetAppearedOnce || (e._offsetAppearedOnce = !0), e._offsetVisible = a, V(r, s, a ? "offsetAppear" : "offsetDisappear", n))
                }
            }

            function ee(e, t, n) {
                var i = new Image;
                i.onload = t ? t.bind(i) : null, i.onerror = n ? n.bind(i) : null, i.src = e
            }

            function te(e, t, n) {
                function i() {
                    delete e._src_loading
                }

                t && e._src_loading !== t && (e.style.backgroundImage = "url(" + (t || "") + ")", e.removeAttribute("img-src"), e._src_loading = t, ee(t, function (n) {
                    e.style.backgroundImage = "url(" + (t || "") + ")";
                    var r = this, o = r.width, a = r.height;
                    F(e, P(e, "load", {success: !0, size: {naturalWidth: o, naturalHeight: a}})), i()
                }, function (t) {
                    F(e, P(e, "load", {
                        success: !1,
                        size: {naturalWidth: 0, naturalHeight: 0}
                    })), n && ee(n, function () {
                        e.style.backgroundImage = "url(" + (n || "") + ")"
                    }), i()
                }))
            }

            function ne(e) {
                if (e) {
                    var t = e._ptScroller;
                    if (!t) {
                        for (var n = e.parentElement; n && n !== document.body;) {
                            if ((n.className + "" || "").match(/weex-list|weex-scroller|weex-waterfall/)) {
                                t = n;
                                break
                            }
                            n = n.parentElement
                        }
                        t = n, e._ptScroller = n
                    }
                    return t
                }
            }

            function ie(e, t) {
                if (Array.isArray(e))return e.forEach(function (e) {
                    return ie(e)
                });
                if (e = e || document.body) {
                    var n = (e || document.body).querySelectorAll("[img-src]");
                    e.getAttribute("img-src") && (n = [e]);
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i];
                        "boolean" == typeof t && t ? te(r, r.getAttribute("img-src"), r.getAttribute("img-placeholder")) : H(r, ne(e))[0] && te(r, r.getAttribute("img-src"), r.getAttribute("img-placeholder"))
                    }
                }
            }

            function re(e, t) {
                void 0 === e && (e = 16), void 0 === t && (t = document.body);
                var n = +(t && t.dataset.throttleId);
                return (isNaN(n) || n <= 0) && (n = bs++, t && t.setAttribute("data-throttle-id", n + "")), !vs[n] && (vs[n] = {}), vs[n][e] || (vs[n][e] = x(ie.bind(this, t), parseFloat(e), !0))
            }

            function oe(e) {
                return e in Fs ? Fs[e] : Fs[e] = e.replace(Ws, "-$&").toLowerCase().replace(Ds, "-ms-")
            }

            function ae() {
                if (void 0 === As) {
                    var e = window.devicePixelRatio;
                    if (e && e >= 2 && document.documentElement) {
                        var t = document.documentElement, n = document.createElement("div"),
                            i = document.createElement("body"), r = t.firstElementChild || t.firstChild;
                        n.style.border = "0.5px solid transparent", i.appendChild(n), t.insertBefore(i, r), As = 1 === n.offsetHeight, t.removeChild(i)
                    } else As = !1
                }
                return As
            }

            function se(e) {
                return e.replace(/(?:\/\*)[\s\S]*?\*\//g, "")
            }

            function le() {
                if (null !== Vs)return Vs;
                var e = window.document.createElement("div"), t = e.style;
                return t.cssText = "position:-webkit-sticky;position:sticky;", Vs = -1 !== t.position.indexOf("sticky")
            }

            function ce(e) {
                return qs.test(e)
            }

            function ue(e) {
                var t = e.match(Gs);
                if (!t)return "";
                var n = "px";
                return t[2] && (n = t[2]), fe(parseFloat(t[1]), n)
            }

            function de() {
                return {px: B().scale, wx: 1}
            }

            function he(e, t) {
                t = t || 1;
                var n = 0 === e ? 0 : e > 0 ? 1 : -1, i = Math.abs(e) > t ? e : n * t;
                return 1 === i && e < 1 && ae() && (i = .5), i
            }

            function fe(e, t) {
                return he(e * de()[t]) + "px"
            }

            function pe(e, t) {
                if (ce(t))return t;
                var n = ue(t);
                if (n)return n;
                var i = /([+-]?[\d.]+)([p,w]x)/gi;
                if (i.test(t)) {
                    var r = de();
                    return t.replace(i, function (e, t, n) {
                        return he(parseFloat(t) * r[n]) + "px"
                    })
                }
                return t
            }

            function me(e) {
                var t = Ys(e), n = t.flex;
                return n && (t.WebkitBoxFlex = n, t.MozBoxFlex = n, t.MsFlex = n), t
            }

            function ge(e, t) {
                return t * B().scale + "px"
            }

            function Ae(e) {
                var t = {};
                for (var n in e) {
                    var i = e[n];
                    if (Hs.indexOf(n) > -1) t[n] = i; else switch (typeof i) {
                        case"string":
                            t[n] = pe(n, i);
                            break;
                        case"number":
                            t[n] = ge(n, i);
                            break;
                        default:
                            t[n] = i
                    }
                }
                return t
            }

            function we(e) {
                var t = {};
                if (!e)return t;
                var n = e.style.webkitTransform || e.style.mozTransform || e.style.transform;
                return n && n.match(/(?: *(?:translate|rotate|scale)[^(]*\([^(]+\))+/i) && (t = n.trim().replace(/, +/g, ",").split(" ").reduce(function (e, t) {
                    return ["translate", "scale", "rotate"].forEach(function (n) {
                        new RegExp(n, "i").test(t) && (e[n] = t)
                    }), e
                }, {})), t
            }

            function ve(e) {
                return Object.keys(e).reduce(function (t, n) {
                    return t + e[n] + " "
                }, "")
            }

            function be(e, t, n) {
                if (t) {
                    var i = {};
                    n || (i = we(e));
                    for (var r in t) {
                        var o = t[r];
                        o && (i[r] = o)
                    }
                    var a = ve(i);
                    e.style.webkitTransform = a, e.style.mozTransform = a, e.style.transform = a
                }
            }

            function ye(e, t) {
                if (t) {
                    var n = we(e);
                    n.translate || (n.translate = "translate3d(0px, 0px, 0px)"), n.translate = n.translate.replace(/[+-\d.]+[pw]x/, function (e) {
                        return parseFloat(e) + t + "px"
                    });
                    var i = ve(n);
                    e.style.webkitTransform = i, e.style.mozTransform = i, e.style.transform = i
                }
            }

            function xe(e, t, n) {
                var i;
                if (n) {
                    var r = we(e);
                    if (!r[n])return;
                    var o = we(t);
                    o[n] = r[n], i = ve(o)
                } else i = e.style.webkitTransform || e.style.mozTransform || e.style.transform;
                t.style.webkitTransform = i, t.style.mozTransform = i, t.style.transform = i
            }

            function _e(e) {
                var t = /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/, n = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/,
                    i = document.createElement("span"), r = document.body;
                i.style.cssText = "color: " + e + "; width: 0px; height: 0px;", r && r.appendChild(i), e = window.getComputedStyle(i).color + "", r && r.removeChild(i);
                var o;
                return (o = e.match(t)) ? {
                    r: parseInt(o[1], 16),
                    g: parseInt(o[2], 16),
                    b: parseInt(o[3], 16)
                } : (o = e.match(n), o ? {r: parseInt(o[1]), g: parseInt(o[2]), b: parseInt(o[3])} : void 0)
            }

            function Ce(e) {
                if (e)for (var t = document.styleSheets, n = t.length, i = 0; i < n; i++) {
                    var r = t[i];
                    if (r.ownerNode.id === e)return r
                }
            }

            function Ee(e) {
                for (var t = e.length, n = 0, i = 0; i < t; i++)n += e[i].getBoundingClientRect().width;
                return n
            }

            function Se(e) {
                var t = e.children;
                if (!t)return e.getBoundingClientRect().width;
                if (!Range)return Ee(t);
                var n = document.createRange();
                return n.selectNodeContents ? (n.selectNodeContents(e), n.getBoundingClientRect().width) : Ee(t)
            }

            function ke() {
                var e = [], t = Array.from(document.styleSheets || []).filter(function (e) {
                    return "1" !== e.ownerNode.getAttribute("weex-scanned")
                }), n = Array.from(t).reduce(function (t, n) {
                    if (n.ownerNode.setAttribute("weex-scanned", 1), "link" === n.ownerNode.tagName.toLowerCase() || !n.ownerNode.textContent || n.ownerNode.id.match(/weex-pseudo-\d+/))return t;
                    for (var i = se(n.ownerNode.textContent.trim()).split(/}/), r = i.length, o = [], a = 0; a < r; a++) {
                        var s = i[a];
                        if (s && !s.match(/^\s*$/)) {
                            var l = s.match(/((?:,?\s*\.[\w-]+\[data-v-\w+\](?::\w+)?)+)\s*({[^}]+)/);
                            if (!l)return t;
                            for (var c = l[1].split(",").map(function (e) {
                                return e.trim()
                            }), u = l[2].replace(/[{}]/g, "").trim(), d = 0, h = c.length; d < h;)o.push({
                                selectorText: c[d],
                                cssText: u
                            }), d++
                        }
                    }
                    return Array.from(o).forEach(function (e) {
                        var n = e.selectorText || "", i = !1;
                        n.match(/:(?:active|focus|enabled|disabled)/) && (i = !0);
                        var r = se(e.cssText).split(";").reduce(function (e, t) {
                            if ((t = t.trim()) && t.indexOf("/*") <= -1) {
                                var n = t.split(":").map(function (e) {
                                    return e.trim()
                                });
                                e[n[0]] = n[1]
                            }
                            return e
                        }, {});
                        if (i) {
                            I(n + "{" + Object.keys(r).reduce(function (e, t) {
                                    return e + t + ":" + r[t] + "!important;"
                                }, "") + "}", "weex-pseudo-" + el++)
                        }
                        var o = i ? t.pseudo : t;
                        o[n] ? m(o[n], r) : o[n] = r
                    }), e.push(n.ownerNode), t
                }, {pseudo: {}});
                return window._no_remove_style_sheets || e.forEach(function (e) {
                    e.parentNode.removeChild(e)
                }), n
            }

            function Te(e) {
                return e.context.$options._scopeId
            }

            function Ie(e, t) {
                for (var n = Te(e), i = {}, r = weex._styleMap || {}, o = 0, a = t.length; o < a;) {
                    var s = "." + t[o] + "[" + n + "]", l = r[s];
                    l && g(i, l), o++
                }
                return E(i)
            }

            function Oe(e, t) {
                var n = e.data || {},
                    i = "string" == typeof n.staticClass ? n.staticClass.split(" ") : n.staticClass || [],
                    r = "string" == typeof n.class ? n.class.split(" ") : n.class || [], o = i.concat(r),
                    a = Ae(Ie(e, o));
                return n.cached || (n.cached = g({}, n.staticStyle)), g(n.cached, n.style), m(a, n.cached), n.staticStyle = a, t && (delete n.staticStyle, delete n.style), a
            }

            function Le(e, t) {
                if (!e.$vnode)return {};
                for (var n = {}, i = e.$vnode; i;)m(n, Oe(i, t)), i = i.parent;
                var r = me(n);
                for (var o in r)!function (t) {
                    if (Array.isArray(r[t])) {
                        var i = r[t];
                        e.$nextTick(function () {
                            var n = e.$el;
                            if (n)for (var r = 0; r < i.length; r++)n.style[t] = i[r]
                        }), "position" !== t && (r[t] = n[t])
                    }
                }(o);
                var a = r.position, s = /sticky$/;
                if ("fixed" === a) e.$nextTick(function () {
                    var t = e.$el;
                    t && t.classList.add("weex-fixed")
                }); else if (p(a) && a[0].match(s) || (a + "").match(s))if (delete r.position, le()) e.$nextTick(function () {
                    var t = e.$el;
                    t && t.classList.add("weex-ios-sticky")
                }); else if (!e._stickyAdded) {
                    var l = e._uid, c = $(e);
                    c && (e._stickyAdded = !0, c._stickyChildren || (c._stickyChildren = {}), c._stickyChildren[l] = e), e.$nextTick(function () {
                        var t = e.$el;
                        t && (e._initOffsetTop = t.offsetTop)
                    })
                }
                return r
            }

            function Ne(e) {
                return Le(e, !0)
            }

            function Re(e) {
                return p(e) ? e.filter(function (e) {
                    return !!e.tag
                }) : e
            }

            function Be(e, t) {
                for (var n = []; e;) {
                    if (e.data && e.data.on) {
                        var i = e.data.on[t];
                        i && n.push(i)
                    }
                    if (e.componentOptions && e.componentOptions.listeners) {
                        var r = e.componentOptions.listeners[t];
                        r && n.push(r)
                    }
                    e = e.parent
                }
                return n
            }

            function je(e) {
                for (var t = arguments, n = [], i = arguments.length - 1; i-- > 0;)n[i] = t[i + 1];
                if (Array.isArray(e))for (var r = e.slice(), o = r.length, a = 0; a < o; a++) {
                    var s = r[a];
                    s._weex_hook || s.apply(null, n)
                } else e._weex_hook || e.apply(null, n)
            }

            function Me(e) {
                for (var t = arguments, n = [], i = arguments.length - 1; i-- > 0;)n[i] = t[i + 1];
                var r = {}, o = function (t) {
                    return function (n) {
                        var i, o = t || n;
                        "function" == typeof n ? i = n : "string" == typeof n && (i = function (t) {
                                if (!t._triggered)for (var i = e; i;) {
                                    var r = Be(i._vnode || i.$vnode, n), o = r.length;
                                    if (o > 0) {
                                        for (var a = 0; a < o;) {
                                            var s = r[a];
                                            je(s.fns, t), a++
                                        }
                                        return void(t._triggered = {el: i.$el})
                                    }
                                    i = i.$parent
                                }
                            }, i._weex_hook = !0), r[o] || (r[o] = []), r[o].push(i)
                    }
                };
                if (n)for (var a = n.length, s = 0; s < a; s++) {
                    var l = n[s];
                    if (p(l)) l.forEach(o()); else if ("object" == typeof l)for (var c in l)o(c)(l[c])
                }
                return r
            }

            function Pe() {
                nl = !0, ["scroll", "resize"].forEach(function (e) {
                    window.addEventListener(e, re(25, document.body))
                }), document.body.addEventListener("scroll", re(25, document.body))
            }

            function We() {
                if (!il) {
                    il = !0;
                    var e = window._process_style_note_page || rl;
                    console.warn("[vue-render]: you should add vue-loader config with $processStyle to enable inline styles's normalization. see " + e + " If you already did this, please ignore this message.")
                }
            }

            function De(e) {
                if (!e)throw new Error("[Vue Render] Vue not found. Please make sure vue 2.x runtime is imported.");
                l.weex.__vue__ = e, console.log("[Vue Render] install Vue " + e.version + ".")
            }

            function Fe(e) {
                return "a" === e.tagName.toLowerCase()
            }

            function ze(e) {
                for (var t = e.parentElement; t && t !== document.body;) {
                    if ("A" === t.tagName)return !0;
                    t = t.parentElement
                }
                return !1
            }

            function $e(e, t) {
                for (var n = []; e;) {
                    if (e.data && e.data.on) {
                        var i = e.data.on[t];
                        i && n.push(i)
                    }
                    if (e.componentOptions && e.componentOptions.listeners) {
                        var r = e.componentOptions.listeners[t];
                        r && n.push(r)
                    }
                    e = e.parent
                }
                return n
            }

            function Ue(e) {
                if (!ml && e) {
                    ml = !0;
                    var t = M();
                    pl.forEach(function (n) {
                        var i = "click" === n || !!(fl.indexOf(n) > -1 && t) && {passive: !0};
                        e.addEventListener(n, function (e) {
                            for (var t = e.target, n = t.__vue__; !n && t && t !== document.body;)t = t.parentElement, n = t && t.__vue__;
                            if (n) {
                                var i = !1, r = e.type;
                                if ("tap" !== r || "weex" === e._for)for (; n;) {
                                    var o = n._vnode || n.$vnode, a = n.$el, s = $e(o, "tap" === r ? "click" : r),
                                        l = s && s.length;
                                    if (l > 0) {
                                        if ("click" !== r)for (var c = 0; c < l; c++) {
                                            var u = s[c], d = "tap" === r ? P(t, "click") : e;
                                            d._triggered = {target: a}, je(u.fns, d)
                                        }
                                        e._triggered = {target: a}, i = !0
                                    }
                                    if (Fe(a) && ("click" === r || "tap" === r)) {
                                        var h = a.getAttribute("href"),
                                            f = /^\s*javascript\s*:\s*void\s*(?:\(\s*0\s*\)|0)\s*;?\s*$/,
                                            p = a.getAttribute("prevent");
                                        window._should_intercept_a_jump && window._should_intercept_a_jump(a) ? (e._triggered = !1, i = !0) : h.match(f) || "" === p || "true" === p ? (e._triggered = !1, e.preventDefault()) : (e._triggered = {target: a}, i = !0)
                                    }
                                    if (i && "click" === r && ze(a))return e._triggered = {target: a}, void e.preventDefault();
                                    if (i)return;
                                    n = n.$parent
                                }
                            }
                        }, i)
                    })
                }
            }

            function Qe() {
                Ue(document)
            }

            function Ye(e) {
                function t(e) {
                    return void 0 !== weex._components[e]
                }

                if (!gl) {
                    gl = !0, De(e), e.prototype.$getConfig = function () {
                        return console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.'), weex.config
                    };
                    var n = /^html:/i;
                    e.config.isReservedTag = function (e) {
                        return n.test(e)
                    }, e.config.parsePlatformTagName = function (e) {
                        return e.replace(n, "")
                    };
                    var i = e.config.getTagNamespace;
                    e.config.getTagNamespace = function (e) {
                        if (!t(e))return i(e)
                    }, e.mixin(al), e.mixin(sl), e.mixin(ul), Qe()
                }
            }

            function He(e) {
                var t = e.extractComponentStyle, n = e.trimTextVNodes;
                return {
                    name: "weex-a", props: {href: String}, render: function (e) {
                        return e("html:a", {
                            attrs: {"weex-type": "a", href: this.href},
                            staticClass: "weex-a weex-ct",
                            staticStyle: t(this)
                        }, n(this.$slots.default))
                    }, _css: Tl
                }
            }

            function Ve(e) {
                var t = e.extractComponentStyle, n = e.trimTextVNodes;
                return {
                    name: "weex-div", render: function (e) {
                        return e("html:div", {
                            attrs: {"weex-type": "div"},
                            staticClass: "weex-div weex-ct",
                            staticStyle: t(this)
                        }, n(this.$slots.default))
                    }, _css: Ol
                }
            }

            function qe(e, t) {
                var n = e.spritePosition;
                if (n && !bl(n) && (n = (n + "").split(",").map(function (e) {
                        return e.replace(/[[\]]/g, "").replace(/^\s*(\S[\s\S]*?)\s*$/g, function (e, t) {
                            return parseInt(t)
                        })
                    })), n) {
                    var i = -n[0], r = -n[1], o = weex.config.env.scale;
                    return {
                        "background-position": i * o + "px " + r * o + "px",
                        "background-size": 100 * (parseFloat(e.spriteWidth) / parseFloat(t.width) * weex.config.env.scale) + "%"
                    }
                }
                var a = e.resize || "100% 100%";
                return {"background-size": ["cover", "contain", "100% 100%"].indexOf(a) > -1 ? a : "100% 100%"}
            }

            function Ge(e, t, n) {
                if (!n || !n.width || !n.height)return t;
                var i = n.width, r = n.height;
                return e.processImgSrc && e.processImgSrc(t, {
                        width: parseFloat(i),
                        height: parseFloat(r),
                        quality: e.quality,
                        sharpen: e.sharpen,
                        original: e.original
                    }) || t
            }

            function Je(e, t) {
                try {
                    var n, i, r = !1;
                    e.match(/data:image\/[^;]+;base64,/) && (r = !0, n = e.split(",")), i = r ? n[1].substr(0, Nl) : e.replace(/\?[^?]+/, "").replace(/#[^#]+/, "").match(/([^\/]+)$/);
                    var o = document.createElement("a");
                    o.href = e, o.download = i;
                    var a = new Event("click", {bubbles: !1});
                    o.dispatchEvent(a), function () {
                        t && t({success: !0})
                    }()
                } catch (e) {
                    !function (e) {
                        t && t({success: !1, errorDesc: e + ""})
                    }(e)
                }
            }

            function Ke(e, t) {
                if (t) {
                    var n = ["::-webkit-input-placeholder", ":-moz-placeholder", "::-moz-placeholder", ":-ms-input-placeholder", ":placeholder-shown"],
                        i = e._id;
                    _l(n.map(function (e, r) {
                        return "#" + Ml + i + n[r] + "{color:" + t + ";}"
                    }).join(""), "" + jl + i, !0)
                }
            }

            function Xe(e) {
                var t = yl(e), n = t.placeholderColor;
                return n && Ke(e, n), t
            }

            function Ze(e) {
                return {
                    name: "weex-input",
                    mixins: [e.mixins.inputCommon],
                    props: {
                        type: {
                            type: String, default: "text", validator: function (e) {
                                return -1 !== ["email", "number", "password", "search", "tel", "text", "url", "date", "datetime", "time"].indexOf(e)
                            }
                        },
                        value: String,
                        placeholder: String,
                        disabled: {type: [String, Boolean], default: !1},
                        autofocus: {type: [String, Boolean], default: !1},
                        maxlength: [String, Number],
                        returnKeyType: String
                    },
                    render: function (e) {
                        this._id || (this._id = Pl++);
                        var t = xl(this);
                        return e("html:input", {
                            attrs: {
                                "weex-type": "input",
                                id: "" + Ml + this._id,
                                type: this.type,
                                value: this.value,
                                disabled: "false" !== this.disabled && !1 !== this.disabled,
                                autofocus: "false" !== this.autofocus && !1 !== this.autofocus,
                                placeholder: this.placeholder,
                                maxlength: this.maxlength,
                                returnKeyType: this.returnKeyType
                            },
                            domProps: {value: this.value},
                            on: this.createKeyboardEvent(t),
                            staticClass: "weex-input weex-el",
                            staticStyle: Xe(this)
                        })
                    },
                    _css: Wl
                }
            }

            function et(e) {
                var t = e.extractComponentStyle;
                return {
                    name: "weex-switch",
                    props: {
                        checked: {type: [Boolean, String], default: !1},
                        disabled: {type: [Boolean, String], default: !1}
                    },
                    data: function () {
                        return {
                            isChecked: "false" !== this.checked && !1 !== this.checked,
                            isDisabled: "false" !== this.disabled && !1 !== this.disabled
                        }
                    },
                    computed: {
                        wrapperClass: function () {
                            var e = ["weex-switch"];
                            return this.isChecked && e.push("weex-switch-checked"), this.isDisabled && e.push("weex-switch-disabled"), e.join(" ")
                        }
                    },
                    methods: {
                        toggle: function () {
                            this.isDisabled || (this.isChecked = !this.isChecked, this.$emit("change", {value: this.isChecked}))
                        }
                    },
                    mounted: function () {
                        var e = this, t = this.$el;
                        if (t && 1 === t.nodeType && !this._removeClickHandler) {
                            var n = function (t) {
                                e.toggle()
                            };
                            this._removeClickHandler = t.removeEventListener.bind(t, "click", n), t.addEventListener("click", n)
                        }
                    },
                    beforeDestroy: function () {
                        var e = this._removeClickHandler;
                        e && (e(), delete this._removeClickHandler)
                    },
                    render: function (e) {
                        return e("span", {
                            attrs: {"weex-type": "switch"},
                            staticClass: this.wrapperClass,
                            staticStyle: t(this)
                        }, [e("small", {staticClass: "weex-switch-inner"})])
                    },
                    _css: Fl
                }
            }

            function tt(e) {
                var t = weex.config.env.scale;
                if (!e._throttleScroll) {
                    var n = e.$refs.wrapper, i = e.$refs.inner,
                        r = ("horizontal" === e.scrollDirection ? n.scrollLeft : n.scrollTop) || 0;
                    e._throttleScroll = weex.utils.throttle(function (o) {
                        var a = "horizontal" === e.scrollDirection ? n.scrollLeft : n.scrollTop,
                            s = parseInt(e.offsetAccuracy) * t;
                        Math.abs(a - r) >= s && (!function () {
                            var t = i.getBoundingClientRect();
                            o.contentSize = {width: t.width, height: t.height}, o.contentOffset = {
                                x: n.scrollLeft,
                                y: -n.scrollTop
                            }, e.$emit("scroll", o)
                        }(), r = a)
                    }, 16, !0)
                }
                return e._throttleScroll
            }

            function nt(e) {
                var t = e.extractComponentStyle, n = e.createEventMap;
                return {
                    name: "weex-list", mixins: [$l, Ul], computed: {
                        wrapperClass: function () {
                            var e = ["weex-list", "weex-list-wrapper", "weex-ct"];
                            return this._refresh && e.push("with-refresh"), this._loading && e.push("with-loading"), e.join(" ")
                        }
                    }, methods: {
                        createChildren: function (e) {
                            var t = this.$slots.default || [];
                            return this._cells = t.filter(function (e) {
                                return !(!e.tag || !e.componentOptions)
                            }), [e("article", {ref: "inner", staticClass: "weex-list-inner weex-ct"}, this._cells)]
                        }
                    }, render: function (e) {
                        var i = this;
                        return this.weexType = "list", this.$nextTick(function () {
                            i.updateLayout()
                        }), e("main", {
                            ref: "wrapper",
                            attrs: {"weex-type": "list"},
                            staticClass: this.wrapperClass,
                            on: n(this, {
                                scroll: this.handleListScroll,
                                touchstart: this.handleTouchStart,
                                touchmove: this.handleTouchMove,
                                touchend: this.handleTouchEnd
                            }),
                            staticStyle: t(this)
                        }, this.createChildren(e))
                    }
                }
            }

            function it(e) {
                var t = e.extractComponentStyle, n = e.createEventMap;
                return {
                    name: "weex-scroller",
                    mixins: [$l, Ul],
                    props: {
                        scrollDirection: {
                            type: [String], default: "vertical", validator: function (e) {
                                return -1 !== ["horizontal", "vertical"].indexOf(e)
                            }
                        }, scrollable: {type: [Boolean], default: !0}
                    },
                    computed: {
                        wrapperClass: function () {
                            var e = ["weex-scroller", "weex-scroller-wrapper", "weex-ct"];
                            return "horizontal" === this.scrollDirection ? e.push("weex-scroller-horizontal") : e.push("weex-scroller-vertical"), this.scrollable || e.push("weex-scroller-disabled"), e.join(" ")
                        }
                    },
                    methods: {
                        createChildren: function (e) {
                            var t = this.$slots.default || [];
                            return this._cells = t.filter(function (e) {
                                return !(!e.tag || !e.componentOptions)
                            }), [e("article", {
                                ref: "inner", staticClass: "weex-scroller-inner weex-ct"
                            }, this._cells)]
                        }
                    },
                    render: function (e) {
                        var i = this;
                        return this.weexType = "scroller", this._cells = this.$slots.default || [], this.$nextTick(function () {
                            i.updateLayout()
                        }), e("main", {
                            ref: "wrapper",
                            attrs: {"weex-type": "scroller"},
                            on: n(this, {
                                scroll: this.handleScroll,
                                touchstart: this.handleTouchStart,
                                touchmove: this.handleTouchMove,
                                touchend: this.handleTouchEnd
                            }),
                            staticClass: this.wrapperClass,
                            staticStyle: t(this)
                        }, this.createChildren(e))
                    }
                }
            }

            function rt(e) {
                var t = e.extractComponentStyle, n = e.createEventMap;
                return {
                    name: "weex-waterfall",
                    mixins: [$l],
                    props: {
                        columnGap: {
                            type: [String, Number], default: "normal", validator: function (e) {
                                return !e || "normal" === e || (e = parseInt(e), !isNaN(e) && e > 0)
                            }
                        }, columnCount: {
                            type: [String, Number], default: Vl, validator: function (e) {
                                return e = parseInt(e), !isNaN(e) && e > 0
                            }
                        }, columnWidth: {
                            type: [String, Number], default: "auto", validator: function (e) {
                                return !e || "auto" === e || (e = parseInt(e), !isNaN(e) && e > 0)
                            }
                        }
                    },
                    mounted: function () {
                        this._nextTick()
                    },
                    updated: function () {
                        this.$nextTick(this._nextTick())
                    },
                    methods: {
                        _createChildren: function (e, t) {
                            var n = this, i = this.$slots.default || [];
                            this._headers = [], this._footers = [], this._others = [];
                            for (var r = i.length, o = 0; o < r; o++) {
                                var a = i[o], s = a.componentOptions && a.componentOptions.tag;
                                if ("refresh" !== s && "loading" !== s) {
                                    if ("cell" === s)break;
                                    "header" === s && n._headers.push(a)
                                }
                            }
                            for (var l = r - 1; l >= 0; l--) {
                                var c = i[l], u = c.componentOptions && c.componentOptions.tag;
                                if ("refresh" !== u && "loading" !== u) {
                                    if ("cell" === u)break;
                                    "header" === u && n._footers.push(c)
                                }
                            }
                            this._cells = i.filter(function (e) {
                                if (!e.tag || !e.componentOptions)return !1;
                                var t = e.componentOptions.tag;
                                return "refresh" === t || "loading" === t ? (n["_" + t] = e, !1) : "cell" === t || (n._others.push(e), !1)
                            }), this._reCalc(t), this._genColumns(e);
                            var d = [];
                            return this._refresh && d.push(this._refresh), d = d.concat(this._headers), d.push(e("html:div", {
                                ref: "columns",
                                staticClass: "weex-waterfall-inner-columns weex-ct"
                            }, this._columns)), d.push(e("html:div", {
                                ref: "footers",
                                staticClass: "weex-waterfall-footers weex-ct"
                            }, this._footers)), this._loading && d.push(this._loading), [e("article", {
                                ref: "inner",
                                staticClass: "weex-waterfall-inner weex-ct"
                            }, d)]
                        }, _reCalc: function (t) {
                            function n(e, t) {
                                return e - (t.padding ? 2 * parseInt(t.padding) : parseInt(t.paddingLeft || 0) + parseInt(t.paddingRight || 0))
                            }

                            var i, r, o, a, s = e.config.env.scale, l = this.$el;
                            if (l && 1 === l.nodeType) {
                                var c = window.getComputedStyle(l);
                                a = n(l.getBoundingClientRect().width, c)
                            } else a = n(document.documentElement.clientWidth, t);
                            if (r = this.columnGap, r = r && "normal" !== r ? parseInt(r) : Hl, r *= s, i = this.columnWidth, o = this.columnCount, i && "auto" !== i && (i = parseInt(i) * s), o && "auto" !== o && (o = parseInt(o)), "auto" === o && "auto" === i); else if ("auto" !== o && "auto" === i) i = (a - (o - 1) * r) / o; else if ("auto" === o && "auto" !== i) o = (a + r) / (i + r); else if ("auto" !== o && "auto" !== i) {
                                var u, d = function () {
                                    u = o * i + (o - 1) * r, u < a ? i += (a - u) / o : u > a && o > 1 ? (o--, d()) : u > a && (i = a)
                                };
                                d()
                            }
                            this._columnCount = o, this._columnWidth = i, this._columnGap = r
                        }, _genColumns: function (e) {
                            var t = this;
                            this._columns = [];
                            for (var n = this._cells, i = this._columnCount, r = n.length, o = this._columnCells = Array(i).join(".").split(".").map(function () {
                                return []
                            }), a = 0; a < r; a++)(n[a].data.attrs || (n[a].data.attrs = {}))["data-cell"] = a, o[a % i].push(n[a]);
                            for (var s = 0; s < i; s++)t._columns.push(e("html:div", {
                                ref: "column" + s,
                                attrs: {"data-column": s},
                                staticClass: "weex-ct",
                                staticStyle: {
                                    width: t._columnWidth + "px",
                                    marginLeft: 0 === s ? 0 : t._columnGap + "px"
                                }
                            }, o[s]))
                        }, _nextTick: function () {
                            this._reLayoutChildren()
                        }, _reLayoutChildren: function () {
                            for (var e = this, t = this._columnCount, n = [], i = [], r = [], o = Number.MAX_SAFE_INTEGER, a = 0, s = 0; s < t; s++) {
                                var l = e._columns[s].elm, c = l.lastElementChild,
                                    u = c ? c.getBoundingClientRect().bottom : 0;
                                n.push(l), r[s] = u, i.push(document.createDocumentFragment()), u < o && (o = u, a = s)
                            }
                            for (var d = [], h = {}, f = 0; f < t; f++)if (f !== a)for (var p = n[f], m = p.querySelectorAll("section.weex-cell"), g = m.length, A = g - 1; A >= 0; A--) {
                                var w = m[A], v = w.getBoundingClientRect();
                                if (v.top > o) {
                                    var b = ~~w.getAttribute("data-cell");
                                    d.push(b), h[b] = {elm: w, height: v.height}, r[f] -= v.height
                                }
                            }
                            d.sort(function (e, t) {
                                return e > t
                            });
                            for (var y = d.length, x = 0; x < y; x++)!function (e) {
                                o = Math.min.apply(Math, r), a = r.indexOf(o);
                                var t = e.elm, n = e.height;
                                i[a].appendChild(t), r[a] += n
                            }(h[d[x]]);
                            for (var _ = 0; _ < t; _++)n[_].appendChild(i[_])
                        }
                    },
                    render: function (e) {
                        var i = this;
                        this.weexType = "waterfall", this._cells = this.$slots.default || [], this.$nextTick(function () {
                            i.updateLayout()
                        });
                        var r = t(this);
                        return e("main", {
                            ref: "wrapper",
                            attrs: {"weex-type": "waterfall"},
                            on: n(this, {
                                scroll: this.handleScroll,
                                touchstart: this.handleTouchStart,
                                touchmove: this.handleTouchMove,
                                touchend: this.handleTouchEnd
                            }),
                            staticClass: "weex-waterfall weex-waterfall-wrapper weex-ct",
                            staticStyle: r
                        }, this._createChildren(e, r))
                    }
                }
            }

            function ot(e) {
                var t = e.extractComponentStyle;
                return {
                    name: "weex-cell", render: function (e) {
                        return e("section", {
                            attrs: {"weex-type": "cell"},
                            staticClass: "weex-cell weex-ct",
                            staticStyle: t(this)
                        }, this.$slots.default)
                    }
                }
            }

            function at(e) {
                var t = e.extractComponentStyle, n = e.utils, i = n.supportSticky;
                return {
                    data: function () {
                        return {sticky: !1, initTop: 0, placeholder: null, supportSticky: i()}
                    }, mounted: function () {
                        this.initTop = this.$el.offsetTop, this.placeholder = window.document.createElement("header")
                    }, updated: function () {
                        this.sticky || (this.initTop = this.$el.offsetTop)
                    }, methods: {
                        addSticky: function () {
                            this.sticky = !0, this.placeholder.style.display = "block", this.placeholder.style.width = this.$el.offsetWidth + "px", this.placeholder.style.height = this.$el.offsetHeight + "px", this.$el.parentNode.insertBefore(this.placeholder, this.$el)
                        }, removeSticky: function () {
                            this.sticky = !1;
                            try {
                                this.$el.parentNode.removeChild(this.placeholder)
                            } catch (e) {
                            }
                        }
                    }, render: function (e) {
                        return e("html:header", {
                            attrs: {"weex-type": "header"},
                            ref: "header",
                            staticClass: "weex-header weex-ct",
                            class: {"weex-sticky": this.sticky, "weex-ios-sticky": this.supportSticky},
                            staticStyle: t(this)
                        }, this.$slots.default)
                    }
                }
            }

            function st() {
                var e = weex.extractComponentStyle;
                return {
                    name: "weex-loading", props: {
                        display: {
                            type: String, default: "show", validator: function (e) {
                                return -1 !== ["show", "hide"].indexOf(e)
                            }
                        }
                    }, data: function () {
                        return {height: -1, viewHeight: 0}
                    }, mounted: function () {
                        this.viewHeight = this.$el.offsetHeight, "hide" === this.display ? this.height = 0 : this.height = this.viewHeight
                    }, watch: {
                        height: function (e) {
                            this.$el.style.height = e + "px"
                        }, display: function (e) {
                            this.height = "hide" === e ? 0 : this.viewHeight
                        }
                    }, methods: {
                        pulling: function (e) {
                            void 0 === e && (e = 0), this.height = e
                        }, pullingUp: function (e) {
                            this.$el.style.transition = "height 0s", this.pulling(e)
                        }, pullingEnd: function () {
                            this.$el.style.transition = "height .2s", this.height >= this.viewHeight ? (this.pulling(this.viewHeight), this.$emit("loading")) : this.pulling(0)
                        }, getChildren: function () {
                            var e = this.$slots.default || [];
                            return "show" === this.display ? e : e.filter(function (e) {
                                return e.componentOptions && "loading-indicator" !== e.componentOptions.tag
                            })
                        }
                    }, render: function (t) {
                        return this.$parent._loading = this, t("aside", {
                            ref: "loading",
                            attrs: {"weex-type": "loading"},
                            staticClass: "weex-loading weex-ct",
                            staticStyle: e(this)
                        }, this.getChildren())
                    }
                }
            }

            function lt(e) {
                var t = e.extractComponentStyle, n = e.utils, i = n.createEvent;
                return {
                    name: "weex-refresh", props: {
                        display: {
                            type: String, default: "show", validator: function (e) {
                                return -1 !== ["show", "hide"].indexOf(e)
                            }
                        }
                    }, data: function () {
                        return {lastDy: 0, viewHeight: 0, height: -1}
                    }, mounted: function () {
                        this.viewHeight = this.$el.offsetHeight, "hide" === this.display ? this.height = 0 : this.height = this.viewHeight
                    }, watch: {
                        height: function (e) {
                            this.$el.style.height = e + "px"
                        }, display: function (e) {
                            this.height = "hide" === e ? 0 : this.viewHeight
                        }
                    }, methods: {
                        pulling: function (e) {
                            void 0 === e && (e = 0), this.height = e, this.$emit("pullingdown", i(this, "pullingdown", {
                                dy: e - this.lastDy,
                                pullingDistance: e,
                                viewHeight: this.viewHeight
                            })), this.lastDy = e
                        }, pullingDown: function (e) {
                            this.$el.style.transition = "height 0s", this.pulling(e)
                        }, pullingEnd: function () {
                            this.$el.style.transition = "height .2s", this.height >= this.viewHeight ? (this.pulling(this.viewHeight), this.$emit("refresh")) : this.pulling(0)
                        }, getChildren: function () {
                            var e = this.$slots.default || [];
                            return "show" === this.display ? e : e.filter(function (e) {
                                return e.componentOptions && "loading-indicator" !== e.componentOptions.tag
                            })
                        }
                    }, render: function (e) {
                        return this.$parent._refresh = this, e("aside", {
                            ref: "refresh",
                            attrs: {"weex-type": "refresh"},
                            staticClass: "weex-refresh weex-ct",
                            staticStyle: t(this)
                        }, this.getChildren())
                    }
                }
            }

            function ct(e) {
                e._styleSheet || (e._styleSheet = kl("weex-cmp-loading-indicator"))
            }

            function ut(e, t) {
                ct(e);
                for (var n = dt(t), i = e._styleSheet.rules || e._styleSheet.cssRules, r = 0, o = i.length; r < o; r++) {
                    var a = i.item(r);
                    if ((a.type === CSSRule.KEYFRAMES_RULE || a.type === CSSRule.WEBKIT_KEYFRAMES_RULE) && "weex-spinner" === a.name)for (var s = a.cssRules, l = 0, c = s.length; l < c; l++) {
                        var u = s[l];
                        u.type !== CSSRule.KEYFRAME_RULE && u.type !== CSSRule.WEBKIT_KEYFRAME_RULE || (u.style.boxShadow = n[l])
                    }
                }
            }

            function dt(e) {
                if (e) {
                    for (var t = ["0em -1.3em 0em 0em", "0.9em -0.9em 0 0em", "1.25em 0em 0 0em", "0.875em 0.875em 0 0em", "0em 1.25em 0 0em", "-0.9em 0.9em 0 0em", "-1.3em 0em 0 0em", "-0.9em -0.9em 0 0em"], n = ["1", "0.2", "0.2", "0.2", "0.2", "0.2", "0.5", "0.7"].map(function (t) {
                        return "rgba(" + e.r + "," + e.g + "," + e.b + "," + t + ")"
                    }), i = [], r = 0; r < t.length; r++)!function (e) {
                        var r = Sl(n, e, "r");
                        i.push(t.map(function (e, t) {
                            return e + " " + r[t]
                        }).join(", "))
                    }(r);
                    return i
                }
            }

            function ht(e) {
                var t = Cl(e), n = t.color, i = n && El(n);
                return i && ut(e, i), t
            }

            function ft(e, t) {
                var n = {};
                return n["background-color"] = e[t ? "itemSelectedColor" : "itemColor"], n.width = n.height = e.itemSize, n
            }

            function pt(e, t) {
                for (var n = [], i = ic(e), r = oc({}, i, ["itemColor", "itemSelectedColor", "itemSize"]), o = 0; o < Number(e.count); ++o) {
                    var a = ["weex-indicator-item weex-el"], s = !1;
                    o === Number(e.active) && (a.push("weex-indicator-item-active"), s = !0), n.push(t("mark", {
                        staticClass: a.join(" "),
                        staticStyle: ft(r, s)
                    }))
                }
                return e.$nextTick(function () {
                    wt(this, mt(this, i), gt(this, i))
                }), t("nav", {
                    attrs: {"weex-type": "indicator"},
                    staticClass: "weex-indicator weex-ct",
                    staticStyle: i
                }, n)
            }

            function mt(e, t) {
                var n = e._getParentRect();
                return ["width", "height"].reduce(function (e, i) {
                    var r = t && t[i];
                    return e[i] = r ? parseFloat(r) : n[i], e
                }, {})
            }

            function gt(e, t) {
                return ["left", "top", "bottom", "right"].reduce(function (e, n) {
                    var i = t && t[n];
                    return i || 0 === i ? (e[n] = parseFloat(i), e) : e
                }, {})
            }

            function At(e) {
                var t, n;
                if (1 === e.children.length) {
                    var i = window.getComputedStyle(e.children[0]);
                    t = parseFloat(i.width), n = parseFloat(i.height)
                } else {
                    var r = window.getComputedStyle(e.children[1]), o = parseFloat(r.marginLeft);
                    n = parseFloat(r.height), t = e.children.length * (n + o) - o
                }
                return {width: t, height: n}
            }

            function wt(e, t, n) {
                var i = e.$el, r = At(i), o = Object.keys(r).reduce(function (e, t) {
                    return e[t] = r[t] + "px", e
                }, {});
                rc(i.style, o);
                var a = [{
                    dir: n.left || 0 === n.left ? "left" : n.right || 0 === n.right ? "right" : "left",
                    scale: "width"
                }, {
                    dir: n.top || 0 === n.top ? "top" : n.bottom || 0 === n.bottom ? "bottom" : "top",
                    scale: "height"
                }];
                Object.keys(a).forEach(function (e) {
                    var o = a[e], s = o.dir, l = o.scale;
                    i.style[s] = (n[s] || 0) + t[l] / 2 - r[l] / 2 + "px"
                })
            }

            function vt(e) {
                void 0 === e && (e = {});
                var t = parseInt(e.lines) || 0, n = e["text-overflow"] || "ellipsis";
                if (t > 0)return {overflow: "hidden", "text-overflow": n, "-webkit-line-clamp": t}
            }

            function bt(e) {
                var t = e.extractComponentStyle, n = e.createEventMap, i = e.utils, r = i.extend;
                return {
                    name: "weex-text", props: {lines: [Number, String], value: [String]}, render: function (e) {
                        var i = t(this), o = vt(i);
                        return e("p", {
                            attrs: {"weex-type": "text"},
                            on: n(this),
                            staticClass: "weex-text weex-el",
                            staticStyle: r(i, o)
                        }, this.$slots.default || [this.value])
                    }, _css: pc
                }
            }

            function yt(e) {
                var t = e.extractComponentStyle, n = e.createEventMap, i = e.mixins, r = i.inputCommon, o = e.utils,
                    a = o.extend, s = o.mapFormEvents;
                return {
                    name: "weex-textarea",
                    mixins: [r],
                    props: {
                        value: String,
                        placeholder: String,
                        disabled: {type: [String, Boolean], default: !1},
                        autofocus: {type: [String, Boolean], default: !1},
                        rows: {type: [String, Number], default: 2},
                        returnKeyType: String
                    },
                    render: function (e) {
                        var i = a(n(this), s(this));
                        return e("html:textarea", {
                            attrs: {
                                "weex-type": "textarea",
                                value: this.value,
                                disabled: "false" !== this.disabled && !1 !== this.disabled,
                                autofocus: "false" !== this.autofocus && !1 !== this.autofocus,
                                placeholder: this.placeholder,
                                rows: this.rows,
                                "return-key-type": this.returnKeyType
                            },
                            domProps: {value: this.value},
                            on: this.createKeyboardEvent(i),
                            staticClass: "weex-textarea weex-el",
                            staticStyle: t(this)
                        })
                    },
                    _css: gc
                }
            }

            function xt(e) {
                var t = e.extractComponentStyle, n = e.createEventMap;
                return {
                    name: "weex-video",
                    props: {
                        src: String,
                        playStatus: {
                            type: String, default: "pause", validator: function (e) {
                                return -1 !== ["play", "pause"].indexOf(e)
                            }
                        },
                        autoplay: {type: [String, Boolean], default: !1},
                        autoPlay: {type: [String, Boolean], default: !1},
                        playsinline: {type: [String, Boolean], default: !0},
                        controls: {type: [String, Boolean], default: !1}
                    },
                    render: function (e) {
                        return "play" === this.playStatus ? this.$nextTick(function () {
                            this.$el && this.$el.play()
                        }) : "pause" === this.playStatus && this.$nextTick(function () {
                                this.$el && this.$el.pause()
                            }), e("html:video", {
                            attrs: {
                                "weex-type": "video",
                                autoplay: "false" !== this.autoplay && !1 !== this.autoplay || "false" !== this.autoPlay && !1 !== this.autoPlay,
                                "webkit-playsinline": this.playsinline,
                                controls: this.controls,
                                src: this.src
                            },
                            on: n(this, ["start", "pause", "finish", "fail"]),
                            staticClass: "weex-video weex-el",
                            staticStyle: t(this)
                        })
                    }
                }
            }

            function _t(e) {
                var t = e.extractComponentStyle, n = e.createEventMap, i = e.utils, r = i.createEvent;
                return {
                    name: "weex-web", props: {src: String}, methods: {
                        goBack: function () {
                            this.$el && this.$el.contentWindow.history.back()
                        }, goForward: function () {
                            this.$el && this.$el.contentWindow.history.forward()
                        }, reload: function () {
                            this.$el && this.$el.contentWindow.history.reload()
                        }
                    }, mounted: function () {
                        var e = this;
                        this.$el && (this.$emit("pagestart", r(this.$el, "pagestart", {url: this.src})), this.$el.addEventListener("load", function (t) {
                            e.$emit("pagefinish", r(e.$el, "pagefinish", {url: e.src}))
                        }))
                    }, render: function (e) {
                        return e("iframe", {
                            attrs: {"weex-type": "web", src: this.src},
                            on: n(this, ["error"]),
                            staticClass: "weex-web weex-el",
                            staticStyle: t(this)
                        })
                    }, _css: vc
                }
            }

            function Ct(e, t, n) {
                e.performCallback(t, {result: Tc, data: n || Ic})
            }

            function Et(e, t) {
                e.performCallback(t, {result: Tc, data: "localStorage is disabled or not supported."})
            }

            function St(e) {
                if (null === e || void 0 === e)throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }

            function kt(e) {
                switch (e.arrayFormat) {
                    case"index":
                        return function (t, n, i) {
                            return null === n ? [It(t, e), "[", i, "]"].join("") : [It(t, e), "[", It(i, e), "]=", It(n, e)].join("")
                        };
                    case"bracket":
                        return function (t, n) {
                            return null === n ? It(t, e) : [It(t, e), "[]=", It(n, e)].join("")
                        };
                    default:
                        return function (t, n) {
                            return null === n ? It(t, e) : [It(t, e), "=", It(n, e)].join("")
                        }
                }
            }

            function Tt(e) {
                var t;
                switch (e.arrayFormat) {
                    case"index":
                        return function (e, n, i) {
                            if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t)return void(i[e] = n);
                            void 0 === i[e] && (i[e] = {}), i[e][t[1]] = n
                        };
                    case"bracket":
                        return function (e, n, i) {
                            return t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 === i[e] ? void(i[e] = [n]) : void(i[e] = [].concat(i[e], n)) : void(i[e] = n)
                        };
                    default:
                        return function (e, t, n) {
                            if (void 0 === n[e])return void(n[e] = t);
                            n[e] = [].concat(n[e], t)
                        }
                }
            }

            function It(e, t) {
                return t.encode ? t.strict ? zc(e) : encodeURIComponent(e) : e
            }

            function Ot(e) {
                return Array.isArray(e) ? e.sort() : "object" == typeof e ? Ot(Object.keys(e)).sort(function (e, t) {
                    return Number(e) - Number(t)
                }).map(function (t) {
                    return e[t]
                }) : e
            }

            function Lt(e, t, n) {
                var i, r = e.jsonpCallbackName || "jsonp_" + ++Vc;
                e.url || console.error("[h5-render] config.url should be set in _jsonp for 'fetch' API."), l[r] = function (e) {
                    return function (n) {
                        t({status: 200, ok: !0, statusText: "OK", data: n}), delete l[e]
                    }
                }(r);
                var o = document.createElement("script");
                try {
                    i = lib.httpurl(e.url)
                } catch (t) {
                    console.error("[h5-render] invalid config.url in _jsonp for 'fetch' API: " + e.url)
                }
                i.params.callback = r, o.type = "text/javascript", o.src = i.toString(), o.onerror = function (e) {
                    return function (n) {
                        console.error("[h5-render] unexpected error in _jsonp for 'fetch' API", n), t({
                            status: qc,
                            ok: !1,
                            statusText: "",
                            data: ""
                        }), delete l[e]
                    }
                }(r), document.getElementsByTagName("head")[0].insertBefore(o, null)
            }

            function Nt(e, t, n) {
                var i = new XMLHttpRequest;
                i.responseType = e.type, i.open(e.method, e.url, !0), !0 === e.withCredentials && (i.withCredentials = !0);
                var r = e.headers || {};
                for (var o in r)i.setRequestHeader(o, r[o]);
                i.onload = function (e) {
                    t({
                        status: i.status,
                        ok: i.status >= 200 && i.status < 300,
                        statusText: i.statusText,
                        data: i.response,
                        headers: i.getAllResponseHeaders().split("\n").reduce(function (e, t) {
                            var n = t.match(/(.+): (.+)/);
                            return n && (e[n[1]] = n[2]), e
                        }, {})
                    })
                }, n && (i.onprogress = function (e) {
                    n({
                        readyState: i.readyState,
                        status: i.status,
                        length: e.loaded,
                        total: e.total,
                        statusText: i.statusText,
                        headers: i.getAllResponseHeaders().split("\n").reduce(function (e, t) {
                            var n = t.match(/(.+): (.+)/);
                            return n && (e[n[1]] = n[2]), e
                        }, {})
                    })
                }), i.onerror = function (e) {
                    console.error("[h5-render] unexpected error in _xhr for 'fetch' API", e), t({
                        status: qc,
                        ok: !1,
                        statusText: "",
                        data: ""
                    })
                }, i.send(e.body || null)
            }

            function Rt() {
                var e = document.getElementById(Xc);
                return e || (e = document.createElement("input"), e.setAttribute("id", Xc), e.style.cssText = "height:1px;width:1px;border:none;", document.body.appendChild(e)), e
            }

            function Bt(e, t, n) {
                var i = ou.nextFrame, r = ou.toCSSText, o = ou.autoPrefix, a = ou.camelizeKeys, s = ou.normalizeStyle;
                (0, ou.isArray)(e) && (e = e[0]);
                var l = t.duration || 0, c = t.timingFunction || "linear", u = t.delay || 0,
                    d = "all " + l + "ms " + c + " " + u + "ms", h = e.$el;
                h && weex.utils.fireLazyload(h, !0);
                var f = function (e) {
                    e && e.stopPropagation(), Bc && (h.removeEventListener(Bc, f), h.style[jc] = ""), n()
                };
                Bc && (h.style[jc] = d, h.addEventListener(Bc, f)), i(function () {
                    h.style.cssText += r(o(s(a(t.styles))) || {})
                })
            }

            function jt(e) {
                if (!e)return null;
                var t = e.$el ? e : e.elm ? e.componentInstance || e.context : null;
                if (!t)return null;
                var n = t.$el && t.$el.getAttribute("weex-type");
                return ws.scrollableTypes.indexOf(n) > -1 ? t : jt(t.$parent)
            }

            function Mt() {
                return (window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now)()
            }

            function Pt(e, t) {
                if (this === document.body || this === window && window.scrollTo)return window.scrollTo(0, t);
                this["scroll" + e] = t
            }

            function Wt(e) {
                e.frame = window.requestAnimationFrame(Wt.bind(window, e));
                var t = Mt(), n = (t - e.startTime) / 468;
                n = n > 1 ? 1 : n;
                var i = Dt(n), r = e.startPosition + (e.position - e.startPosition) * i;
                if (e.method.call(e.scrollable, e.dSuffix, r), ~~r == ~~e.position)return void window.cancelAnimationFrame(e.frame)
            }

            function Dt(e) {
                return .5 * (1 - Math.cos(Math.PI * e))
            }

            function Ft(e, t) {
                su || (su = document.createElement("div"), su.classList.add(wu), su.classList.add("hide"), document.body.appendChild(su)), su.textContent = e, setTimeout(function () {
                    su.classList.remove("hide"), t && t()
                }, 16)
            }

            function zt(e) {
                su && (su.classList.add("hide"), setTimeout(function () {
                    e && e()
                }, 1e3 * vu))
            }

            function $t() {
                this.wrap = document.querySelector(yu), this.node = document.querySelector(xu), this.wrap || this.createWrap(), this.node || this.createNode(), this.clearNode(), this.createNodeContent(), this.bindEvents()
            }

            function Ut(e) {
                this.msg = e.message || "", this.callback = e.callback, this.okTitle = e.okTitle || "OK", $t.call(this), this.node.classList.add("weex-alert")
            }

            function Qt(e) {
                this.msg = e.message || "", this.callback = e.callback, this.okTitle = e.okTitle || "OK", this.cancelTitle = e.cancelTitle || "Cancel", $t.call(this), this.node.classList.add("weex-confirm")
            }

            function Yt(e) {
                this.msg = e.message || "", this.defaultMsg = e.default || "", this.callback = e.callback, this.okTitle = e.okTitle || "OK", this.cancelTitle = e.cancelTitle || "Cancel", $t.call(this), this.node.classList.add("weex-prompt")
            }

            console.log("START WEEX VUE RENDER: 0.12.27, Build 2017-12-11 16:41."), t('/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-root,\n.weex-root * {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, \'Source Sans Pro\', \'Helvetica Neue\', Helvetica, Arial, sans-serif;\n}\n\n.weex-root,\n.weex-root *,\n.weex-root *::before,\n.weex-root *::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n  -moz-text-size-adjust: none;\n  -ms-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\n.weex-root a,\n.weex-root button,\n.weex-root [role="button"],\n.weex-root input,\n.weex-root label,\n.weex-root select,\n.weex-root textarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\n.weex-root p,\n.weex-root ol,\n.weex-root ul,\n.weex-root dl {\n  margin: 0;\n  padding: 0;\n}\n\n.weex-root li {\n  list-style: none;\n}\n\n.weex-root figure {\n  margin: 0;\n}\n\n.weex-root textarea {\n  resize: none;\n}\n\n/* show no scroll bar. */\n::-webkit-scrollbar {\n  display: none;\n}\n', void 0), t('/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-root * {\n  border-width: 0;\n  border-color: inherit;\n  border-style: solid;\n}\n\n.weex-flex-ct {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.weex-ct {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -moz-box-flex: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -moz-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -webkit-align-content: flex-start;\n  -ms-flex-line-pack: start;\n  align-content: flex-start;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ct.horizontal {\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n}\n\n.weex-el {\n  display: block;\n  box-sizing: border-box;\n  position: relative;\n  -webkit-flex-shrink: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-flex-grow: 0;\n  -moz-box-flex: 0;\n  -ms-flex-grow: 0;\n  flex-grow: 0;\n  -webkit-flex-basis: auto;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto;\n  border: 0 solid black;\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n}\n\n.weex-ios-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 9999;\n  top: 0;\n}\n\n.weex-fixed {\n  position: fixed;\n  z-index: 1;\n}\n\n.weex-sticky {\n  position: fixed;\n  top: 0;\n  z-index: 9999;\n}\n', void 0);
            var Ht = !1, Vt = window.document, qt = Vt.documentElement, Gt = Array.prototype.slice, Jt = {}, Kt = null;
            Ht || (qt.addEventListener("touchstart", o, !1), Ht = !0), Array.from || (Array.from = function () {
                var e = Object.prototype.toString, t = function (t) {
                    return "function" == typeof t || "[object Function]" === e.call(t)
                }, n = function (e) {
                    var t = Number(e);
                    return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                }, i = Math.pow(2, 53) - 1, r = function (e) {
                    var t = n(e);
                    return Math.min(Math.max(t, 0), i)
                };
                return function (e) {
                    var n = this, i = Object(e);
                    if (null == e)throw new TypeError("Array.from requires an array-like object - not null or undefined");
                    var o, a = arguments.length > 1 ? arguments[1] : void 0;
                    if (void 0 !== a) {
                        if (!t(a))throw new TypeError("Array.from: when provided, the second argument must be a function");
                        arguments.length > 2 && (o = arguments[2])
                    }
                    for (var s, l = r(i.length), c = t(n) ? Object(new n(l)) : new Array(l), u = 0; u < l;)s = i[u], c[u] = a ? void 0 === o ? a(s, u) : a.call(o, s, u) : s, u += 1;
                    return c.length = l, c
                }
            }());
            var Xt = u(function (e) {
                    var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = t)
                }), Zt = u(function (e) {
                    var t = e.exports = {version: "2.5.1"};
                    "number" == typeof __e && (__e = t)
                }), en = function (e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                }, tn = en, nn = function (e) {
                    if (!tn(e))throw TypeError(e + " is not an object!");
                    return e
                }, rn = function (e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }, on = !rn(function () {
                    return 7 != Object.defineProperty({}, "a", {
                            get: function () {
                                return 7
                            }
                        }).a
                }), an = en, sn = Xt.document, ln = an(sn) && an(sn.createElement), cn = function (e) {
                    return ln ? sn.createElement(e) : {}
                }, un = !on && !rn(function () {
                        return 7 != Object.defineProperty(cn("div"), "a", {
                                get: function () {
                                    return 7
                                }
                            }).a
                    }), dn = en, hn = function (e, t) {
                    if (!dn(e))return e;
                    var n, i;
                    if (t && "function" == typeof(n = e.toString) && !dn(i = n.call(e)))return i;
                    if ("function" == typeof(n = e.valueOf) && !dn(i = n.call(e)))return i;
                    if (!t && "function" == typeof(n = e.toString) && !dn(i = n.call(e)))return i;
                    throw TypeError("Can't convert object to primitive value")
                }, fn = nn, pn = un, mn = hn, gn = Object.defineProperty,
                An = on ? Object.defineProperty : function (e, t, n) {
                    if (fn(e), t = mn(t, !0), fn(n), pn)try {
                        return gn(e, t, n)
                    } catch (e) {
                    }
                    if ("get" in n || "set" in n)throw TypeError("Accessors not supported!");
                    return "value" in n && (e[t] = n.value), e
                }, wn = {f: An}, vn = function (e, t) {
                    return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
                }, bn = wn, yn = vn, xn = on ? function (e, t, n) {
                    return bn.f(e, t, yn(1, n))
                } : function (e, t, n) {
                    return e[t] = n, e
                }, _n = {}.hasOwnProperty, Cn = function (e, t) {
                    return _n.call(e, t)
                }, En = 0, Sn = Math.random(), kn = function (e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++En + Sn).toString(36))
                }, Tn = u(function (e) {
                    var t = Xt, n = xn, i = Cn, r = kn("src"), o = Function.toString, a = ("" + o).split("toString");
                    Zt.inspectSource = function (e) {
                        return o.call(e)
                    }, (e.exports = function (e, o, s, l) {
                        var c = "function" == typeof s;
                        c && (i(s, "name") || n(s, "name", o)), e[o] !== s && (c && (i(s, r) || n(s, r, e[o] ? "" + e[o] : a.join(String(o)))), e === t ? e[o] = s : l ? e[o] ? e[o] = s : n(e, o, s) : (delete e[o], n(e, o, s)))
                    })(Function.prototype, "toString", function () {
                        return "function" == typeof this && this[r] || o.call(this)
                    })
                }), In = function (e) {
                    if ("function" != typeof e)throw TypeError(e + " is not a function!");
                    return e
                }, On = In, Ln = function (e, t, n) {
                    if (On(e), void 0 === t)return e;
                    switch (n) {
                        case 1:
                            return function (n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function (n, i) {
                                return e.call(t, n, i)
                            };
                        case 3:
                            return function (n, i, r) {
                                return e.call(t, n, i, r)
                            }
                    }
                    return function () {
                        return e.apply(t, arguments)
                    }
                }, Nn = Xt, Rn = Zt, Bn = xn, jn = Tn, Mn = Ln, Pn = function (e, t, n) {
                    var i, r, o, a, s = e & Pn.F, l = e & Pn.G, c = e & Pn.S, u = e & Pn.P, d = e & Pn.B,
                        h = l ? Nn : c ? Nn[t] || (Nn[t] = {}) : (Nn[t] || {}).prototype,
                        f = l ? Rn : Rn[t] || (Rn[t] = {}), p = f.prototype || (f.prototype = {});
                    l && (n = t);
                    for (i in n)r = !s && h && void 0 !== h[i], o = (r ? h : n)[i], a = d && r ? Mn(o, Nn) : u && "function" == typeof o ? Mn(Function.call, o) : o, h && jn(h, i, o, e & Pn.U), f[i] != o && Bn(f, i, a), u && p[i] != o && (p[i] = o)
                };
            Nn.core = Rn, Pn.F = 1, Pn.G = 2, Pn.S = 4, Pn.P = 8, Pn.B = 16, Pn.W = 32, Pn.U = 64, Pn.R = 128;
            var Wn = Pn, Dn = {}.toString, Fn = function (e) {
                    return Dn.call(e).slice(8, -1)
                }, zn = Fn, $n = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
                    return "String" == zn(e) ? e.split("") : Object(e)
                }, Un = function (e) {
                    if (void 0 == e)throw TypeError("Can't call method on  " + e);
                    return e
                }, Qn = $n, Yn = Un, Hn = function (e) {
                    return Qn(Yn(e))
                }, Vn = Math.ceil, qn = Math.floor, Gn = function (e) {
                    return isNaN(e = +e) ? 0 : (e > 0 ? qn : Vn)(e)
                }, Jn = Gn, Kn = Math.min, Xn = function (e) {
                    return e > 0 ? Kn(Jn(e), 9007199254740991) : 0
                }, Zn = Gn, ei = Math.max, ti = Math.min, ni = function (e, t) {
                    return e = Zn(e), e < 0 ? ei(e + t, 0) : ti(e, t)
                }, ii = Hn, ri = Xn, oi = ni, ai = Xt, si = ai["__core-js_shared__"] || (ai["__core-js_shared__"] = {}),
                li = function (e) {
                    return si[e] || (si[e] = {})
                }, ci = li("keys"), ui = kn, di = function (e) {
                    return ci[e] || (ci[e] = ui(e))
                }, hi = Cn, fi = Hn, pi = function (e) {
                    return function (t, n, i) {
                        var r, o = ii(t), a = ri(o.length), s = oi(i, a);
                        if (e && n != n) {
                            for (; a > s;)if ((r = o[s++]) != r)return !0
                        } else for (; a > s; s++)if ((e || s in o) && o[s] === n)return e || s || 0;
                        return !e && -1
                    }
                }(!1), mi = di("IE_PROTO"), gi = function (e, t) {
                    var n, i = fi(e), r = 0, o = [];
                    for (n in i)n != mi && hi(i, n) && o.push(n);
                    for (; t.length > r;)hi(i, n = t[r++]) && (~pi(o, n) || o.push(n));
                    return o
                },
                Ai = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
                wi = gi, vi = Ai, bi = Object.keys || function (e) {
                        return wi(e, vi)
                    }, yi = Object.getOwnPropertySymbols, xi = {f: yi}, _i = {}.propertyIsEnumerable, Ci = {f: _i}, Ei = Un,
                Si = function (e) {
                    return Object(Ei(e))
                }, ki = bi, Ti = xi, Ii = Ci, Oi = Si, Li = $n, Ni = Object.assign, Ri = !Ni || rn(function () {
                    var e = {}, t = {}, n = Symbol(), i = "abcdefghijklmnopqrst";
                    return e[n] = 7, i.split("").forEach(function (e) {
                        t[e] = e
                    }), 7 != Ni({}, e)[n] || Object.keys(Ni({}, t)).join("") != i
                }) ? function (e, t) {
                    for (var n = arguments, i = Oi(e), r = arguments.length, o = 1, a = Ti.f, s = Ii.f; r > o;)for (var l, c = Li(n[o++]), u = a ? ki(c).concat(a(c)) : ki(c), d = u.length, h = 0; d > h;)s.call(c, l = u[h++]) && (i[l] = c[l]);
                    return i
                } : Ni, Bi = Wn;
            Bi(Bi.S + Bi.F, "Object", {assign: Ri}), Object.setPrototypeOf || (Object.setPrototypeOf = function (e, t) {
                function n(e, t) {
                    return i.call(e, t), e
                }

                var i;
                try {
                    i = e.getOwnPropertyDescriptor(e.prototype, "__proto__").set, i.call({}, null)
                } catch (t) {
                    if (e.prototype !== {}.__proto__ || void 0 === {__proto__: null}.__proto__)return;
                    i = function (e) {
                        this.__proto__ = e
                    }, n.polyfill = n(n({}, null), e.prototype) instanceof e
                }
                return n
            }(Object));
            var ji = u(function (e) {
                var t = li("wks"), n = kn, i = Xt.Symbol, r = "function" == typeof i;
                (e.exports = function (e) {
                    return t[e] || (t[e] = r && i[e] || (r ? i : n)("Symbol." + e))
                }).store = t
            }), Mi = Fn, Pi = ji("toStringTag"), Wi = "Arguments" == Mi(function () {
                    return arguments
                }()), Di = function (e, t) {
                try {
                    return e[t]
                } catch (e) {
                }
            }, Fi = function (e) {
                var t, n, i;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = Di(t = Object(e), Pi)) ? n : Wi ? Mi(t) : "Object" == (i = Mi(t)) && "function" == typeof t.callee ? "Arguments" : i
            }, zi = Fi, $i = {};
            $i[ji("toStringTag")] = "z", $i + "" != "[object z]" && Tn(Object.prototype, "toString", function () {
                return "[object " + zi(this) + "]"
            }, !0);
            var Ui = Gn, Qi = Un, Yi = {}, Hi = wn, Vi = nn, qi = bi,
                Gi = on ? Object.defineProperties : function (e, t) {
                    Vi(e);
                    for (var n, i = qi(t), r = i.length, o = 0; r > o;)Hi.f(e, n = i[o++], t[n]);
                    return e
                }, Ji = Xt.document, Ki = Ji && Ji.documentElement, Xi = nn, Zi = Gi, er = Ai, tr = di("IE_PROTO"),
                nr = function () {
                }, ir = function () {
                    var e, t = cn("iframe"), n = er.length;
                    for (t.style.display = "none", Ki.appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), ir = e.F; n--;)delete ir.prototype[er[n]];
                    return ir()
                }, rr = Object.create || function (e, t) {
                        var n;
                        return null !== e ? (nr.prototype = Xi(e), n = new nr, nr.prototype = null, n[tr] = e) : n = ir(), void 0 === t ? n : Zi(n, t)
                    }, or = wn.f, ar = Cn, sr = ji("toStringTag"), lr = function (e, t, n) {
                    e && !ar(e = n ? e : e.prototype, sr) && or(e, sr, {configurable: !0, value: t})
                }, cr = rr, ur = vn, dr = lr, hr = {};
            xn(hr, ji("iterator"), function () {
                return this
            });
            var fr = function (e, t, n) {
                    e.prototype = cr(hr, {next: ur(1, n)}), dr(e, t + " Iterator")
                }, pr = Cn, mr = Si, gr = di("IE_PROTO"), Ar = Object.prototype,
                wr = Object.getPrototypeOf || function (e) {
                        return e = mr(e), pr(e, gr) ? e[gr] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Ar : null
                    }, vr = Wn, br = Tn, yr = xn, xr = Cn, _r = Yi, Cr = fr, Er = lr, Sr = wr, kr = ji("iterator"),
                Tr = !([].keys && "next" in [].keys()), Ir = function () {
                    return this
                }, Or = function (e, t, n, i, r, o, a) {
                    Cr(n, t, i);
                    var s, l, c, u = function (e) {
                            if (!Tr && e in p)return p[e];
                            switch (e) {
                                case"keys":
                                case"values":
                                    return function () {
                                        return new n(this, e)
                                    }
                            }
                            return function () {
                                return new n(this, e)
                            }
                        }, d = t + " Iterator", h = "values" == r, f = !1, p = e.prototype,
                        m = p[kr] || p["@@iterator"] || r && p[r], g = m || u(r), A = r ? h ? u("entries") : g : void 0,
                        w = "Array" == t ? p.entries || m : m;
                    if (w && (c = Sr(w.call(new e))) !== Object.prototype && c.next && (Er(c, d, !0), xr(c, kr) || yr(c, kr, Ir)), h && m && "values" !== m.name && (f = !0, g = function () {
                            return m.call(this)
                        }), (Tr || f || !p[kr]) && yr(p, kr, g), _r[t] = g, _r[d] = Ir, r)if (s = {
                            values: h ? g : u("values"),
                            keys: o ? g : u("keys"),
                            entries: A
                        }, a)for (l in s)l in p || br(p, l, s[l]); else vr(vr.P + vr.F * (Tr || f), t, s);
                    return s
                }, Lr = function (e) {
                    return function (t, n) {
                        var i, r, o = String(Qi(t)), a = Ui(n), s = o.length;
                        return a < 0 || a >= s ? e ? "" : void 0 : (i = o.charCodeAt(a), i < 55296 || i > 56319 || a + 1 === s || (r = o.charCodeAt(a + 1)) < 56320 || r > 57343 ? e ? o.charAt(a) : i : e ? o.slice(a, a + 2) : r - 56320 + (i - 55296 << 10) + 65536)
                    }
                }(!0);
            Or(String, "String", function (e) {
                this._t = String(e), this._i = 0
            }, function () {
                var e, t = this._t, n = this._i;
                return n >= t.length ? {value: void 0, done: !0} : (e = Lr(t, n), this._i += e.length, {
                    value: e,
                    done: !1
                })
            });
            var Nr = ji("unscopables"), Rr = Array.prototype;
            void 0 == Rr[Nr] && xn(Rr, Nr, {});
            var Br = function (e) {
                Rr[Nr][e] = !0
            }, jr = function (e, t) {
                return {value: t, done: !!e}
            }, Mr = Br, Pr = jr, Wr = Yi, Dr = Hn, Fr = Or(Array, "Array", function (e, t) {
                this._t = Dr(e), this._i = 0, this._k = t
            }, function () {
                var e = this._t, t = this._k, n = this._i++;
                return !e || n >= e.length ? (this._t = void 0, Pr(1)) : "keys" == t ? Pr(0, n) : "values" == t ? Pr(0, e[n]) : Pr(0, [n, e[n]])
            }, "values");
            Wr.Arguments = Wr.Array, Mr("keys"), Mr("values"), Mr("entries");
            for (var zr = Fr, $r = bi, Ur = Tn, Qr = Xt, Yr = xn, Hr = Yi, Vr = ji, qr = Vr("iterator"), Gr = Vr("toStringTag"), Jr = Hr.Array, Kr = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, Xr = $r(Kr), Zr = 0; Zr < Xr.length; Zr++) {
                var eo, to = Xr[Zr], no = Kr[to], io = Qr[to], ro = io && io.prototype;
                if (ro && (ro[qr] || Yr(ro, qr, Jr), ro[Gr] || Yr(ro, Gr, to), Hr[to] = Jr, no))for (eo in zr)ro[eo] || Ur(ro, eo, zr[eo], !0)
            }
            var oo, ao, so, lo = function (e, t, n, i) {
                    if (!(e instanceof t) || void 0 !== i && i in e)throw TypeError(n + ": incorrect invocation!");
                    return e
                }, co = nn, uo = function (e, t, n, i) {
                    try {
                        return i ? t(co(n)[0], n[1]) : t(n)
                    } catch (t) {
                        var r = e.return;
                        throw void 0 !== r && co(r.call(e)), t
                    }
                }, ho = Yi, fo = ji("iterator"), po = Array.prototype, mo = function (e) {
                    return void 0 !== e && (ho.Array === e || po[fo] === e)
                }, go = Fi, Ao = ji("iterator"), wo = Yi, vo = Zt.getIteratorMethod = function (e) {
                    if (void 0 != e)return e[Ao] || e["@@iterator"] || wo[go(e)]
                }, bo = u(function (e) {
                    var t = Ln, n = uo, i = mo, r = nn, o = Xn, a = vo, s = {}, l = {},
                        c = e.exports = function (e, c, u, d, h) {
                            var f, p, m, g, A = h ? function () {
                                return e
                            } : a(e), w = t(u, d, c ? 2 : 1), v = 0;
                            if ("function" != typeof A)throw TypeError(e + " is not iterable!");
                            if (i(A)) {
                                for (f = o(e.length); f > v; v++)if ((g = c ? w(r(p = e[v])[0], p[1]) : w(e[v])) === s || g === l)return g
                            } else for (m = A.call(e); !(p = m.next()).done;)if ((g = n(m, w, p.value, c)) === s || g === l)return g
                        };
                    c.BREAK = s, c.RETURN = l
                }), yo = nn, xo = In, _o = ji("species"), Co = function (e, t) {
                    var n, i = yo(e).constructor;
                    return void 0 === i || void 0 == (n = yo(i)[_o]) ? t : xo(n)
                }, Eo = function (e, t, n) {
                    var i = void 0 === n;
                    switch (t.length) {
                        case 0:
                            return i ? e() : e.call(n);
                        case 1:
                            return i ? e(t[0]) : e.call(n, t[0]);
                        case 2:
                            return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                        case 3:
                            return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                        case 4:
                            return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
                    }
                    return e.apply(n, t)
                }, So = Ln, ko = Eo, To = Ki, Io = cn, Oo = Xt, Lo = Oo.process, No = Oo.setImmediate,
                Ro = Oo.clearImmediate, Bo = Oo.MessageChannel, jo = Oo.Dispatch, Mo = 0, Po = {}, Wo = function () {
                    var e = +this;
                    if (Po.hasOwnProperty(e)) {
                        var t = Po[e];
                        delete Po[e], t()
                    }
                }, Do = function (e) {
                    Wo.call(e.data)
                };
            No && Ro || (No = function (e) {
                for (var t = arguments, n = [], i = 1; arguments.length > i;)n.push(t[i++]);
                return Po[++Mo] = function () {
                    ko("function" == typeof e ? e : Function(e), n)
                }, oo(Mo), Mo
            }, Ro = function (e) {
                delete Po[e]
            }, "process" == Fn(Lo) ? oo = function (e) {
                Lo.nextTick(So(Wo, e, 1))
            } : jo && jo.now ? oo = function (e) {
                jo.now(So(Wo, e, 1))
            } : Bo ? (ao = new Bo, so = ao.port2, ao.port1.onmessage = Do, oo = So(so.postMessage, so, 1)) : Oo.addEventListener && "function" == typeof postMessage && !Oo.importScripts ? (oo = function (e) {
                Oo.postMessage(e + "", "*")
            }, Oo.addEventListener("message", Do, !1)) : oo = "onreadystatechange" in Io("script") ? function (e) {
                To.appendChild(Io("script")).onreadystatechange = function () {
                    To.removeChild(this), Wo.call(e)
                }
            } : function (e) {
                setTimeout(So(Wo, e, 1), 0)
            });
            var Fo = {set: No, clear: Ro}, zo = Xt, $o = Fo.set, Uo = zo.MutationObserver || zo.WebKitMutationObserver,
                Qo = zo.process, Yo = zo.Promise, Ho = "process" == Fn(Qo), Vo = In, qo = function (e) {
                    return new d(e)
                }, Go = {f: qo}, Jo = function (e) {
                    try {
                        return {e: !1, v: e()}
                    } catch (e) {
                        return {e: !0, v: e}
                    }
                }, Ko = nn, Xo = en, Zo = Go, ea = function (e, t) {
                    if (Ko(e), Xo(t) && t.constructor === e)return t;
                    var n = Zo.f(e);
                    return (0, n.resolve)(t), n.promise
                }, ta = Tn, na = Xt, ia = wn, ra = on, oa = ji("species"), aa = ji("iterator"), sa = !1;
            try {
                var la = [7][aa]();
                la.return = function () {
                    sa = !0
                }, Array.from(la, function () {
                    throw 2
                })
            } catch (e) {
            }
            var ca, ua, da, ha, fa = Xt, pa = Ln, ma = Fi, ga = Wn, Aa = en, wa = In, va = lo, ba = bo, ya = Co,
                xa = Fo.set, _a = function () {
                    var e, t, n, i = function () {
                        var i, r;
                        for (Ho && (i = Qo.domain) && i.exit(); e;) {
                            r = e.fn, e = e.next;
                            try {
                                r()
                            } catch (i) {
                                throw e ? n() : t = void 0, i
                            }
                        }
                        t = void 0, i && i.enter()
                    };
                    if (Ho) n = function () {
                        Qo.nextTick(i)
                    }; else if (Uo) {
                        var r = !0, o = document.createTextNode("");
                        new Uo(i).observe(o, {characterData: !0}), n = function () {
                            o.data = r = !r
                        }
                    } else if (Yo && Yo.resolve) {
                        var a = Yo.resolve();
                        n = function () {
                            a.then(i)
                        }
                    } else n = function () {
                        $o.call(zo, i)
                    };
                    return function (i) {
                        var r = {fn: i, next: void 0};
                        t && (t.next = r), e || (e = r, n()), t = r
                    }
                }(), Ca = Go, Ea = Jo, Sa = ea, ka = fa.TypeError, Ta = fa.process, Ia = fa.Promise,
                Oa = "process" == ma(Ta), La = function () {
                }, Na = ua = Ca.f, Ra = !!function () {
                    try {
                        var e = Ia.resolve(1), t = (e.constructor = {})[ji("species")] = function (e) {
                            e(La, La)
                        };
                        return (Oa || "function" == typeof PromiseRejectionEvent) && e.then(La) instanceof t
                    } catch (e) {
                    }
                }(), Ba = function (e) {
                    var t;
                    return !(!Aa(e) || "function" != typeof(t = e.then)) && t
                }, ja = function (e, t) {
                    if (!e._n) {
                        e._n = !0;
                        var n = e._c;
                        _a(function () {
                            for (var i = e._v, r = 1 == e._s, o = 0; n.length > o;)!function (t) {
                                var n, o, a = r ? t.ok : t.fail, s = t.resolve, l = t.reject, c = t.domain;
                                try {
                                    a ? (r || (2 == e._h && Wa(e), e._h = 1), !0 === a ? n = i : (c && c.enter(), n = a(i), c && c.exit()), n === t.promise ? l(ka("Promise-chain cycle")) : (o = Ba(n)) ? o.call(n, s, l) : s(n)) : l(i)
                                } catch (e) {
                                    l(e)
                                }
                            }(n[o++]);
                            e._c = [], e._n = !1, t && !e._h && Ma(e)
                        })
                    }
                }, Ma = function (e) {
                    xa.call(fa, function () {
                        var t, n, i, r = e._v, o = Pa(e);
                        if (o && (t = Ea(function () {
                                Oa ? Ta.emit("unhandledRejection", r, e) : (n = fa.onunhandledrejection) ? n({
                                    promise: e,
                                    reason: r
                                }) : (i = fa.console) && i.error && i.error("Unhandled promise rejection", r)
                            }), e._h = Oa || Pa(e) ? 2 : 1), e._a = void 0, o && t.e)throw t.v
                    })
                }, Pa = function (e) {
                    if (1 == e._h)return !1;
                    for (var t, n = e._a || e._c, i = 0; n.length > i;)if (t = n[i++], t.fail || !Pa(t.promise))return !1;
                    return !0
                }, Wa = function (e) {
                    xa.call(fa, function () {
                        var t;
                        Oa ? Ta.emit("rejectionHandled", e) : (t = fa.onrejectionhandled) && t({promise: e, reason: e._v})
                    })
                }, Da = function (e) {
                    var t = this;
                    t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), ja(t, !0))
                }, Fa = function (e) {
                    var t, n = this;
                    if (!n._d) {
                        n._d = !0, n = n._w || n;
                        try {
                            if (n === e)throw ka("Promise can't be resolved itself");
                            (t = Ba(e)) ? _a(function () {
                                var i = {_w: n, _d: !1};
                                try {
                                    t.call(e, pa(Fa, i, 1), pa(Da, i, 1))
                                } catch (e) {
                                    Da.call(i, e)
                                }
                            }) : (n._v = e, n._s = 1, ja(n, !1))
                        } catch (e) {
                            Da.call({_w: n, _d: !1}, e)
                        }
                    }
                };
            Ra || (Ia = function (e) {
                va(this, Ia, "Promise", "_h"), wa(e), ca.call(this);
                try {
                    e(pa(Fa, this, 1), pa(Da, this, 1))
                } catch (e) {
                    Da.call(this, e)
                }
            }, ca = function (e) {
                this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
            }, ca.prototype = function (e, t, n) {
                for (var i in t)ta(e, i, t[i], n);
                return e
            }(Ia.prototype, {
                then: function (e, t) {
                    var n = Na(ya(this, Ia));
                    return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Oa ? Ta.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && ja(this, !1), n.promise
                }, catch: function (e) {
                    return this.then(void 0, e)
                }
            }), da = function () {
                var e = new ca;
                this.promise = e, this.resolve = pa(Fa, e, 1), this.reject = pa(Da, e, 1)
            }, Ca.f = Na = function (e) {
                return e === Ia || e === ha ? new da(e) : ua(e)
            }), ga(ga.G + ga.W + ga.F * !Ra, {Promise: Ia}), lr(Ia, "Promise"), function (e) {
                var t = na[e];
                ra && t && !t[oa] && ia.f(t, oa, {
                    configurable: !0, get: function () {
                        return this
                    }
                })
            }("Promise"), ha = Zt.Promise, ga(ga.S + ga.F * !Ra, "Promise", {
                reject: function (e) {
                    var t = Na(this);
                    return (0, t.reject)(e), t.promise
                }
            }), ga(ga.S + ga.F * !Ra, "Promise", {
                resolve: function (e) {
                    return Sa(this, e)
                }
            }), ga(ga.S + ga.F * !(Ra && function (e, t) {
                    if (!t && !sa)return !1;
                    var n = !1;
                    try {
                        var i = [7], r = i[aa]();
                        r.next = function () {
                            return {done: n = !0}
                        }, i[aa] = function () {
                            return r
                        }, e(i)
                    } catch (e) {
                    }
                    return n
                }(function (e) {
                    Ia.all(e).catch(La)
                })), "Promise", {
                all: function (e) {
                    var t = this, n = Na(t), i = n.resolve, r = n.reject, o = Ea(function () {
                        var n = [], o = 0, a = 1;
                        ba(e, !1, function (e) {
                            var s = o++, l = !1;
                            n.push(void 0), a++, t.resolve(e).then(function (e) {
                                l || (l = !0, n[s] = e, --a || i(n))
                            }, r)
                        }), --a || i(n)
                    });
                    return o.e && r(o.v), n.promise
                }, race: function (e) {
                    var t = this, n = Na(t), i = n.reject, r = Ea(function () {
                        ba(e, !1, function (e) {
                            t.resolve(e).then(n.resolve, i)
                        })
                    });
                    return r.e && i(r.v), n.promise
                }
            });
            var za = window.lib || (window.lib = {});
            h.prototype.toString = function () {
                return this.val
            }, h.prototype.valueOf = function () {
                for (var e = this.val.split("."), t = [], n = 0; n < e.length; n++) {
                    var i = parseInt(e[n], 10);
                    isNaN(i) && (i = 0);
                    var r = i.toString();
                    r.length < 5 && (r = Array(6 - r.length).join("0") + r), t.push(r), 1 === t.length && t.push(".")
                }
                return parseFloat(t.join(""))
            }, h.compare = function (e, t) {
                e = e.toString().split("."), t = t.toString().split(".");
                for (var n = 0; n < e.length || n < t.length; n++) {
                    var i = parseInt(e[n], 10), r = parseInt(t[n], 10);
                    if (window.isNaN(i) && (i = 0), window.isNaN(r) && (r = 0), i < r)return -1;
                    if (i > r)return 1
                }
                return 0
            }, za.version = function (e) {
                return new h(e)
            };
            var $a = window.lib || (window.lib = {}), Ua = $a.env || ($a.env = {}),
                Qa = window.location.search.replace(/^\?/, "");
            if (Ua.params = {}, Qa)for (var Ya = Qa.split("&"), Ha = 0; Ha < Ya.length; Ha++) {
                Ya[Ha] = Ya[Ha].split("=");
                try {
                    Ua.params[Ya[Ha][0]] = decodeURIComponent(Ya[Ha][1])
                } catch (e) {
                    Ua.params[Ya[Ha][0]] = Ya[Ha][1]
                }
            }
            var Va, qa = window.lib || (window.lib = {}), Ga = qa.env || (qa.env = {}), Ja = window.navigator.userAgent;
            if (Va = Ja.match(/Windows\sPhone\s(?:OS\s)?([\d.]+)/)) Ga.os = {
                name: "Windows Phone",
                isWindowsPhone: !0,
                version: Va[1]
            }; else if (Ja.match(/Safari/) && (Va = Ja.match(/Android[\s\/]([\d.]+)/))) Ga.os = {version: Va[1]}, Ja.match(/Mobile\s+Safari/) ? (Ga.os.name = "Android", Ga.os.isAndroid = !0) : (Ga.os.name = "AndroidPad", Ga.os.isAndroidPad = !0); else if (Va = Ja.match(/(iPhone|iPad|iPod)/)) {
                var Ka = Va[1];
                Va = Ja.match(/OS ([\d_.]+) like Mac OS X/), Ga.os = {
                    name: Ka,
                    isIPhone: "iPhone" === Ka || "iPod" === Ka,
                    isIPad: "iPad" === Ka,
                    isIOS: !0,
                    version: Va && Va[1].split("_").join(".") || ""
                }
            } else Ga.os = {name: "unknown", version: "0.0.0"};
            qa.version && (Ga.os.version = qa.version(Ga.os.version)), Va = Ja.match(/(?:UCWEB|UCBrowser\/)([\d.]+)/), Va ? Ga.browser = {
                name: "UC",
                isUC: !0,
                version: Va[1]
            } : (Va = Ja.match(/MQQBrowser\/([\d.]+)/)) ? Ga.browser = {
                name: "QQ",
                isQQ: !0,
                version: Va[1]
            } : (Va = Ja.match(/Firefox\/([\d.]+)/)) ? Ga.browser = {
                name: "Firefox",
                isFirefox: !0,
                version: Va[1]
            } : (Va = Ja.match(/MSIE\s([\d.]+)/)) || (Va = Ja.match(/IEMobile\/([\d.]+)/)) ? (Ga.browser = {version: Va[1]}, Ja.match(/IEMobile/) ? (Ga.browser.name = "IEMobile", Ga.browser.isIEMobile = !0) : (Ga.browser.name = "IE", Ga.browser.isIE = !0), Ja.match(/Android|iPhone/) && (Ga.browser.isIELikeWebkit = !0)) : (Va = Ja.match(/(?:Chrome|CriOS)\/([\d.]+)/)) ? (Ga.browser = {
                name: "Chrome",
                isChrome: !0,
                version: Va[1]
            }, Ja.match(/Version\/[\d+.]+\s*Chrome/) && (Ga.browser.name = "Chrome Webview", Ga.browser.isWebview = !0)) : Ja.match(/Safari/) && (Va = Ja.match(/Android[\s\/]([\d.]+)/)) ? Ga.browser = {
                name: "Android",
                isAndroid: !0,
                version: Va[1]
            } : Ja.match(/iPhone|iPad|iPod/) ? Ja.match(/Safari/) ? (Va = Ja.match(/Version\/([\d.]+)/), Ga.browser = {
                name: "Safari",
                isSafari: !0,
                version: Va && Va[1] || ""
            }) : (Va = Ja.match(/OS ([\d_.]+) like Mac OS X/), Ga.browser = {
                name: "iOS Webview",
                isWebview: !0,
                version: Va && Va[1].replace(/_/g, ".") || ""
            }) : Ga.browser = {
                name: "unknown",
                version: "0.0.0"
            }, qa.version && (Ga.browser.version = qa.version(Ga.browser.version));
            var Xa = Object.prototype.toString, Za = "[object Object]", es = "[object Array]", ts = /-(\w)/g,
                ns = C(function (e) {
                    return e.replace(ts, function (e, t) {
                        return t.toUpperCase()
                    })
                }), is = C(function (e) {
                    return e.charAt(0).toUpperCase() + e.slice(1)
                }), rs = /([^-])([A-Z])/g, os = C(function (e) {
                    return e.replace(rs, "$1-$2").replace(rs, "$1-$2").toLowerCase()
                }), as = /webkit-|moz-|o-|ms-/, ss = !1, ls = parseInt(750), cs = !isNaN(ls) && ls > 0 ? ls : 750,
                us = document.querySelector('meta[name="weex-viewport"]'),
                ds = us && parseInt(us.getAttribute("content"));
            ds && !isNaN(ds) && ds > 0 && (cs = ds);
            var hs = 0, fs = 0, ps = 0, ms = {dpr: hs, scale: 0, rem: 0, deviceWidth: 0, deviceHeight: 0}, gs = !1;
            try {
                document.createElement("div").addEventListener("test", function (e) {
                }, {
                    get passive() {
                        gs = !0
                    }
                })
            } catch (e) {
            }
            var As, ws = {
                    scrollableTypes: ["scroller", "list", "waterfall"],
                    gestureEvents: ["panstart", "panmove", "panend", "swipe", "longpress", "tap"]
                }, vs = {}, bs = 1, ys = u(function (e, t) {
                    function n(e) {
                        return e.charAt(0).toUpperCase() + e.slice(1)
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n, e.exports = t.default
                }), xs = u(function (e, t) {
                    function n(e, t, n) {
                        if (e.hasOwnProperty(t))for (var i = e[t], o = 0, a = i.length; o < a; ++o)n[i[o] + (0, r.default)(t)] = n[t]
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = ys, r = function (e) {
                        return e && e.__esModule ? e : {default: e}
                    }(i);
                    e.exports = t.default
                }), _s = u(function (e, t) {
                    function n(e, t, n, i, r) {
                        for (var o = 0, a = e.length; o < a; ++o) {
                            var s = e[o](t, n, i, r);
                            if (s)return s
                        }
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n, e.exports = t.default
                }), Cs = u(function (e, t) {
                    function n(e, t) {
                        -1 === e.indexOf(t) && e.push(t)
                    }

                    function i(e, t) {
                        if (Array.isArray(t))for (var i = 0, r = t.length; i < r; ++i)n(e, t[i]); else n(e, t)
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = i, e.exports = t.default
                }), Es = u(function (e, t) {
                    function n(e) {
                        return e instanceof Object && !Array.isArray(e)
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n, e.exports = t.default
                }), Ss = u(function (e, t) {
                    function n(e) {
                        return e && e.__esModule ? e : {default: e}
                    }

                    function i(e) {
                        function t(e) {
                            for (var r in e) {
                                var a = e[r];
                                if ((0, d.default)(a)) e[r] = t(a); else if (Array.isArray(a)) {
                                    for (var l = [], u = 0, h = a.length; u < h; ++u) {
                                        var f = (0, s.default)(i, r, a[u], e, n);
                                        (0, c.default)(l, f || a[u])
                                    }
                                    l.length > 0 && (e[r] = l)
                                } else {
                                    var p = (0, s.default)(i, r, a, e, n);
                                    p && (e[r] = p), (0, o.default)(n, r, e)
                                }
                            }
                            return e
                        }

                        var n = e.prefixMap, i = e.plugins;
                        return t
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = i;
                    var r = xs, o = n(r), a = _s, s = n(a), l = Cs, c = n(l), u = Es, d = n(u);
                    e.exports = t.default
                }), ks = u(function (e, t) {
                    Object.defineProperty(t, "__esModule", {value: !0});
                    var n = ["Webkit"], i = ["Moz"], r = ["ms"], o = ["Webkit", "Moz"], a = ["Webkit", "ms"],
                        s = ["Webkit", "Moz", "ms"];
                    t.default = {
                        plugins: [],
                        prefixMap: {
                            appearance: o,
                            userSelect: s,
                            textEmphasisPosition: n,
                            textEmphasis: n,
                            textEmphasisStyle: n,
                            textEmphasisColor: n,
                            boxDecorationBreak: n,
                            clipPath: n,
                            maskImage: n,
                            maskMode: n,
                            maskRepeat: n,
                            maskPosition: n,
                            maskClip: n,
                            maskOrigin: n,
                            maskSize: n,
                            maskComposite: n,
                            mask: n,
                            maskBorderSource: n,
                            maskBorderMode: n,
                            maskBorderSlice: n,
                            maskBorderWidth: n,
                            maskBorderOutset: n,
                            maskBorderRepeat: n,
                            maskBorder: n,
                            maskType: n,
                            textDecorationStyle: n,
                            textDecorationSkip: n,
                            textDecorationLine: n,
                            textDecorationColor: n,
                            filter: n,
                            fontFeatureSettings: n,
                            breakAfter: s,
                            breakBefore: s,
                            breakInside: s,
                            columnCount: o,
                            columnFill: o,
                            columnGap: o,
                            columnRule: o,
                            columnRuleColor: o,
                            columnRuleStyle: o,
                            columnRuleWidth: o,
                            columns: o,
                            columnSpan: o,
                            columnWidth: o,
                            writingMode: a,
                            flex: n,
                            flexBasis: n,
                            flexDirection: n,
                            flexGrow: n,
                            flexFlow: n,
                            flexShrink: n,
                            flexWrap: n,
                            alignContent: n,
                            alignItems: n,
                            alignSelf: n,
                            justifyContent: n,
                            order: n,
                            transform: n,
                            transformOrigin: n,
                            transformOriginX: n,
                            transformOriginY: n,
                            backfaceVisibility: n,
                            perspective: n,
                            perspectiveOrigin: n,
                            transformStyle: n,
                            transformOriginZ: n,
                            animation: n,
                            animationDelay: n,
                            animationDirection: n,
                            animationFillMode: n,
                            animationDuration: n,
                            animationIterationCount: n,
                            animationName: n,
                            animationPlayState: n,
                            animationTimingFunction: n,
                            backdropFilter: n,
                            fontKerning: n,
                            scrollSnapType: a,
                            scrollSnapPointsX: a,
                            scrollSnapPointsY: a,
                            scrollSnapDestination: a,
                            scrollSnapCoordinate: a,
                            shapeImageThreshold: n,
                            shapeImageMargin: n,
                            shapeImageOutside: n,
                            hyphens: s,
                            flowInto: a,
                            flowFrom: a,
                            regionFragment: a,
                            textAlignLast: i,
                            tabSize: i,
                            wrapFlow: r,
                            wrapThrough: r,
                            wrapMargin: r,
                            gridTemplateColumns: r,
                            gridTemplateRows: r,
                            gridTemplateAreas: r,
                            gridTemplate: r,
                            gridAutoColumns: r,
                            gridAutoRows: r,
                            gridAutoFlow: r,
                            grid: r,
                            gridRowStart: r,
                            gridColumnStart: r,
                            gridRowEnd: r,
                            gridRow: r,
                            gridColumn: r,
                            gridColumnEnd: r,
                            gridColumnGap: r,
                            gridRowGap: r,
                            gridArea: r,
                            gridGap: r,
                            textSizeAdjust: a,
                            borderImage: n,
                            borderImageOutset: n,
                            borderImageRepeat: n,
                            borderImageSlice: n,
                            borderImageSource: n,
                            borderImageWidth: n,
                            transitionDelay: n,
                            transitionDuration: n,
                            transitionProperty: n,
                            transitionTimingFunction: n
                        }
                    }, e.exports = t.default
                }), Ts = u(function (e, t) {
                    function n(e, t) {
                        if ("cursor" === e && r.hasOwnProperty(t))return i.map(function (e) {
                            return e + t
                        })
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = ["-webkit-", "-moz-", ""], r = {"zoom-in": !0, "zoom-out": !0, grab: !0, grabbing: !0};
                    e.exports = t.default
                }), Is = u(function (e, t) {
                    function n(e) {
                        return "string" == typeof e && i.test(e)
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = /-webkit-|-moz-|-ms-/;
                    e.exports = t.default
                }), Os = u(function (e, t) {
                    function n(e, t) {
                        if ("string" == typeof t && !(0, r.default)(t) && t.indexOf("cross-fade(") > -1)return o.map(function (e) {
                            return t.replace(/cross-fade\(/g, e + "cross-fade(")
                        })
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = Is, r = function (e) {
                        return e && e.__esModule ? e : {default: e}
                    }(i), o = ["-webkit-", ""];
                    e.exports = t.default
                }), Ls = u(function (e, t) {
                    function n(e, t) {
                        if ("string" == typeof t && !(0, r.default)(t) && t.indexOf("filter(") > -1)return o.map(function (e) {
                            return t.replace(/filter\(/g, e + "filter(")
                        })
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = Is, r = function (e) {
                        return e && e.__esModule ? e : {default: e}
                    }(i), o = ["-webkit-", ""];
                    e.exports = t.default
                }), Ns = u(function (e, t) {
                    function n(e, t) {
                        if ("display" === e && i.hasOwnProperty(t))return i[t]
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = {
                        flex: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
                        "inline-flex": ["-webkit-inline-box", "-moz-inline-box", "-ms-inline-flexbox", "-webkit-inline-flex", "inline-flex"]
                    };
                    e.exports = t.default
                }), Rs = u(function (e, t) {
                    function n(e, t, n) {
                        "flexDirection" === e && "string" == typeof t && (t.indexOf("column") > -1 ? n.WebkitBoxOrient = "vertical" : n.WebkitBoxOrient = "horizontal", t.indexOf("reverse") > -1 ? n.WebkitBoxDirection = "reverse" : n.WebkitBoxDirection = "normal"), r.hasOwnProperty(e) && (n[r[e]] = i[t] || t)
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = {
                        "space-around": "justify",
                        "space-between": "justify",
                        "flex-start": "start",
                        "flex-end": "end",
                        "wrap-reverse": "multiple",
                        wrap: "multiple"
                    }, r = {alignItems: "WebkitBoxAlign", justifyContent: "WebkitBoxPack", flexWrap: "WebkitBoxLines"};
                    e.exports = t.default
                }), Bs = u(function (e, t) {
                    function n(e, t) {
                        if ("string" == typeof t && !(0, r.default)(t) && a.test(t))return o.map(function (e) {
                            return e + t
                        })
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = Is, r = function (e) {
                            return e && e.__esModule ? e : {default: e}
                        }(i), o = ["-webkit-", "-moz-", ""],
                        a = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
                    e.exports = t.default
                }), js = u(function (e, t) {
                    function n(e, t) {
                        if ("string" == typeof t && !(0, r.default)(t) && t.indexOf("image-set(") > -1)return o.map(function (e) {
                            return t.replace(/image-set\(/g, e + "image-set(")
                        })
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = Is, r = function (e) {
                        return e && e.__esModule ? e : {default: e}
                    }(i), o = ["-webkit-", ""];
                    e.exports = t.default
                }), Ms = u(function (e, t) {
                    function n(e, t) {
                        if ("position" === e && "sticky" === t)return ["-webkit-sticky", "sticky"]
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n, e.exports = t.default
                }), Ps = u(function (e, t) {
                    function n(e, t) {
                        if (r.hasOwnProperty(e) && o.hasOwnProperty(t))return i.map(function (e) {
                            return e + t
                        })
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = ["-webkit-", "-moz-", ""], r = {
                        maxHeight: !0,
                        maxWidth: !0,
                        width: !0,
                        height: !0,
                        columnWidth: !0,
                        minWidth: !0,
                        minHeight: !0
                    }, o = {
                        "min-content": !0,
                        "max-content": !0,
                        "fill-available": !0,
                        "fit-content": !0,
                        "contain-floats": !0
                    };
                    e.exports = t.default
                }), Ws = /[A-Z]/g, Ds = /^ms-/, Fs = {}, zs = oe, $s = u(function (e, t) {
                    function n(e) {
                        return (0, r.default)(e)
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = n;
                    var i = zs, r = function (e) {
                        return e && e.__esModule ? e : {default: e}
                    }(i);
                    e.exports = t.default
                }), Us = u(function (e, t) {
                    function n(e) {
                        return e && e.__esModule ? e : {default: e}
                    }

                    function i(e, t) {
                        if ((0, l.default)(e))return e;
                        for (var n = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), i = 0, r = n.length; i < r; ++i) {
                            var o = n[i], s = [o];
                            for (var c in t) {
                                var u = (0, a.default)(c);
                                if (o.indexOf(u) > -1 && "order" !== u)for (var d = t[c], f = 0, p = d.length; f < p; ++f)s.unshift(o.replace(u, h[d[f]] + u))
                            }
                            n[i] = s.join(",")
                        }
                        return n.join(",")
                    }

                    function r(e, t, n, r) {
                        if ("string" == typeof t && d.hasOwnProperty(e)) {
                            var o = i(t, r), a = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (e) {
                                return !/-moz-|-ms-/.test(e)
                            }).join(",");
                            if (e.indexOf("Webkit") > -1)return a;
                            var s = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (e) {
                                return !/-webkit-|-ms-/.test(e)
                            }).join(",");
                            return e.indexOf("Moz") > -1 ? s : (n["Webkit" + (0, u.default)(e)] = a, n["Moz" + (0, u.default)(e)] = s, o)
                        }
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.default = r;
                    var o = $s, a = n(o), s = Is, l = n(s), c = ys, u = n(c), d = {
                        transition: !0,
                        transitionProperty: !0,
                        WebkitTransition: !0,
                        WebkitTransitionProperty: !0,
                        MozTransition: !0,
                        MozTransitionProperty: !0
                    }, h = {Webkit: "-webkit-", Moz: "-moz-", ms: "-ms-"};
                    e.exports = t.default
                }), Qs = u(function (e, t) {
                    function n(e) {
                        return e && e.__esModule ? e : {default: e}
                    }

                    Object.defineProperty(t, "__esModule", {value: !0});
                    var i = Ss, r = n(i), o = ks, a = n(o), s = Ts, l = n(s), c = Os, u = n(c), d = Ls, h = n(d), f = Ns,
                        p = n(f), m = Rs, g = n(m), A = Bs, w = n(A), v = js, b = n(v), y = Ms, x = n(y), _ = Ps, C = n(_),
                        E = Us, S = n(E),
                        k = [u.default, l.default, h.default, g.default, w.default, b.default, x.default, C.default, S.default, p.default];
                    t.default = (0, r.default)({prefixMap: a.default.prefixMap, plugins: k}), e.exports = t.default
                }), Ys = function (e) {
                    return e && e.__esModule ? e.default : e
                }(Qs), Hs = ["flex", "opacity", "zIndex", "fontWeight", "lines"], Vs = null, qs = /^[+-]?\d+(\.\d+)?%$/,
                Gs = /^([+-]?\d+(?:\.\d+)?)([p,w]x)?$/, Js = Object.freeze({
                    extend: m,
                    extendTruthy: g,
                    extendKeys: A,
                    extractKeys: w,
                    bind: v,
                    debounce: b,
                    depress: y,
                    throttle: x,
                    loopArray: _,
                    cached: C,
                    camelize: ns,
                    camelizeKeys: E,
                    capitalize: is,
                    hyphenate: os,
                    hyphenateKeys: S,
                    hyphenateStyleKeys: k,
                    camelToKebab: T,
                    appendCss: I,
                    nextFrame: O,
                    toCSSText: L,
                    supportsPassive: M,
                    createEvent: P,
                    createBubblesEvent: W,
                    createCustomEvent: D,
                    dispatchEvent: F,
                    mapFormEvents: z,
                    getParentScroller: $,
                    hasIntersection: Y,
                    isElementVisible: H,
                    getEventHandlers: q,
                    watchAppear: K,
                    triggerDisappear: X,
                    detectAppear: Z,
                    applySrc: te,
                    fireLazyload: ie,
                    getThrottleLazyload: re,
                    supportHairlines: ae,
                    trimComment: se,
                    supportSticky: le,
                    isPercentage: ce,
                    normalizeUnitsNum: ue,
                    normalizeString: pe,
                    autoPrefix: me,
                    normalizeNumber: ge,
                    normalizeStyle: Ae,
                    getTransformObj: we,
                    getTransformStr: ve,
                    addTransform: be,
                    addTranslateX: ye,
                    copyTransform: xe,
                    getRgb: _e,
                    getStyleSheetById: Ce,
                    getRangeWidth: Se,
                    isPlainObject: f,
                    isArray: p
                });
            window.WXEnvironment = function (e, t) {
                var n = t.browser ? t.browser.name : navigator.appName, i = t.browser ? t.browser.version.val : null,
                    r = t.os.name;
                r.match(/(iPhone|iPad|iPod)/i) ? r = "iOS" : r.match(/Android/i) && (r = "android");
                var o = t.os.version.val;
                return m({
                    platform: "Web",
                    weexVersion: "0.12.27",
                    userAgent: navigator.userAgent,
                    appName: n,
                    appVersion: i,
                    osName: r,
                    osVersion: o,
                    deviceModel: t.os.name || null
                }, e)
            }(function (e) {
                if (void 0 === e && (e = cs), !ss) {
                    ss = !0;
                    var t = window.document;
                    if (!t)return void console.error("[vue-render] window.document is undfined.");
                    if (!t.documentElement)return void console.error("[vue-render] document.documentElement is undfined.");
                    hs = ms.dpr = window.devicePixelRatio, fs = t.documentElement.clientWidth, ps = t.documentElement.clientHeight;
                    var n = function () {
                        ps = t.documentElement.clientHeight;
                        var e = window.weex && window.weex.config.env;
                        ms.deviceHeight = e.deviceHeight = ps * hs
                    };
                    N(fs), R(e), window.addEventListener("resize", n);
                    m(ms, {scale: fs / e, deviceWidth: fs * hs, deviceHeight: ps * hs})
                }
                return ms
            }(), window.lib.env);
            var Ks = {}, Xs = [], Zs = {
                __vue__: null,
                utils: Js,
                config: {env: window.WXEnvironment, bundleUrl: location.href},
                _components: {},
                _modules: Ks,
                _meta: {mounted: {}, updated: {}, destroyed: {}, requiredModules: {}, apiCalled: {}, perf: {}},
                document: {body: {}},
                requireModule: function (e) {
                    var t = Zs._meta.requiredModules;
                    return t[e] || (t[e] = 0), t[e]++, Ks[e]
                },
                registerModule: function () {
                    for (var e = arguments, t = [], n = arguments.length; n--;)t[n] = e[n];
                    return (i = this).registerApiModule.apply(i, t);
                    var i
                },
                support: function (e) {
                    void 0 === e && (e = "");
                    var t = (e + "").match(/@(component|module)\/(\w+)(.\w+)?/);
                    if (!t)return console.warn("[vue-render] invalid argument for weex.support: " + e), null;
                    var n = t[1], i = t[2], r = t[3];
                    switch (r = r && r.replace(/^\./, ""), n) {
                        case"component":
                            return void 0 !== this._components[i];
                        case"module":
                            var o = Ks[i];
                            return o && r ? !!o[r] : !!o
                    }
                },
                registerVueInstance: function (e) {
                    if (!(!e instanceof Vue)) {
                        var t = e.$root;
                        t && t.$el && this.document.body.children.push(t.$el)
                    }
                },
                require: function () {
                    for (var e = arguments, t = [], n = arguments.length; n--;)t[n] = e[n];
                    return console.log('[Vue Render] "weex.require" is deprecated, please use "weex.requireModule" instead.'), (i = this).requireModule.apply(i, t);
                    var i
                },
                registerApiModule: function (e, t, n) {
                    Ks[e] || (Ks[e] = {}), n && "full" === n.mountType && (Ks[e] = t);
                    for (var i in t)!function (n) {
                        t.hasOwnProperty(n) && (Ks[e][n] = function () {
                            var i = Zs._meta.apiCalled;
                            i[e] || (i[e] = {});
                            var r = i[e];
                            return r[n] || (r[n] = 0), r[n]++, t[n].apply(Zs, arguments)
                        })
                    }(i)
                },
                registerComponent: function (e, t) {
                    if (!this.__vue__)return console.log("[Vue Render] Vue is not found. Please import Vue.js before register a component.");
                    if (this._components[e] = 0, t._css) {
                        I(t._css.replace(/\b[+-]?[\d.]+rem;?\b/g, function (e) {
                            return 75 * parseFloat(e) * Zs.config.env.scale + "px"
                        }), "weex-cmp-" + e), delete t._css
                    }
                    this.__vue__.component(e, t)
                },
                getRoot: function () {
                },
                sender: {
                    performCallback: function (e, t, n) {
                        return "function" == typeof e ? e(t) : null
                    }
                },
                install: function (e) {
                    e.init(this)
                }
            };
            Object.defineProperty(Zs.document.body, "children", {
                get: function () {
                    return Xs
                }
            }), ["on", "once", "off", "emit"].forEach(function (e) {
                Zs[e] = function () {
                    for (var t = arguments, n = [], i = arguments.length; i--;)n[i] = t[i];
                    return this._vue || (this._vue = new this.__vue__), (r = this._vue)["$" + e].apply(r, n);
                    var r
                }
            });
            var el = (window._weex_perf = {time: {}}, 0), tl = Object.freeze({
                    getHeadStyleMap: ke,
                    getScopeId: Te,
                    getScopeStyle: Ie,
                    getComponentStyle: Le,
                    extractComponentStyle: Ne,
                    trimTextVNodes: Re,
                    applyFns: je,
                    createEventMap: Me
                }), nl = !1, il = !1,
                rl = "https://gist.github.com/MrRaindrop/5a805a067146609e5cfd4d64d775d693#file-weex-vue-render-config-for-vue-loader-js",
                ol = 0, al = {
                    beforeCreate: function () {
                        nl || Pe()
                    }, updated: function () {
                        if (this._rootId) {
                            var e = this.$el;
                            1 === e.nodeType && e.className.indexOf("weex-root") <= -1 && (e.classList.add("weex-root"), e.setAttribute("data-wx-root-id", this._rootId))
                        }
                        var t = this.$options && this.$options._componentTag, n = weex._meta.updated;
                        n[t] || (n[t] = 0), n[t]++, this._fireLazyload()
                    }, mounted: function () {
                        var e = this.$options && this.$options._componentTag;
                        void 0 !== weex._components[e] && weex._components[e]++;
                        var t = weex._meta.mounted;
                        if (t[e] || (t[e] = 0), t[e]++, this === this.$root) {
                            var n = "wx-root-" + ol++;
                            weex._root || (weex._root = {}), weex._root[n] = this, this._rootId = n;
                            var i = this.$el;
                            if (1 !== i.nodeType)return;
                            i.classList.add("weex-root"), i.setAttribute("data-wx-root-id", n), this._fireLazyload(i)
                        }
                        il || window._style_processing_added || We();
                        var r, o;
                        this.$el && (r = o = this.$vnode) && (r = r.data) && (o = o.componentOptions) && (this.$el.attrs = m({}, r.attrs, o.propsData)), K(this, !0)
                    }, destroyed: function () {
                        this._rootId && (delete weex._root[this._rootId], delete this._rootId);
                        var e = this.$options && this.$options._componentTag;
                        void 0 !== weex._components[e] && weex._components[e]--;
                        var t = weex._meta.destroyed;
                        t[e] || (t[e] = 0), t[e]++, this._fireLazyload(), X(this)
                    }, methods: {
                        _fireLazyload: function (e) {
                            re(25, e || document.body)()
                        }
                    }
                }, sl = {
                    beforeCreate: function () {
                        function e() {
                            var e = this.$options && this.$options._componentTag;
                            if ((this.$vnode && this.$vnode.data && "component" === this.$vnode.data.tag || this === this.$root && this.$options && !this._firstScanned) && (this._firstScanned = !0, m(weex._styleMap, ke())), (this === this.$root && this.$options || e && void 0 === weex._components[e] && !t[e]) && !this._secondScanned) {
                                t[e] = 1, this._secondScanned = !0;
                                for (var n = this.$options.beforeCreate, i = n.length, r = 0; r < i && !n[r]._styleMixin; r++);
                                if (r !== i - 1) {
                                    var o = n[i - 1];
                                    n[i - 1] = function () {
                                        o.call(this), m(weex._styleMap, ke()), n[i - 1] = o
                                    }
                                }
                            }
                        }

                        var t = {};
                        return e._styleMixin = !0, e
                    }(), methods: {
                        $processStyle: function (e) {
                            if (window._style_processing_added = !0, e)return Ae(E(e))
                        }, _getParentRect: function () {
                            var e = this.$options._parentElm;
                            return e && e.getBoundingClientRect()
                        }
                    }
                }, ll = function (e) {
                    return ["default", "go", "next", "search", "send"].indexOf(e) > -1 ? e : "done"
                }, cl = {
                    methods: {
                        focus: function () {
                            this.$el && this.$el.focus()
                        }, blur: function () {
                            this.$el && this.$el.blur()
                        }, setSelectionRange: function (e, t) {
                            try {
                                this.$el.setSelectionRange(e, t)
                            } catch (e) {
                            }
                        }, getSelectionRange: function (e) {
                            try {
                                var t = window.getSelection(), n = t.toString(), i = this.$el.value.indexOf(n),
                                    r = -1 === i ? i : i + n.length;
                                e && e({selectionStart: i, selectionEnd: r})
                            } catch (t) {
                                e && e(new Error("[vue-render] getSelection is not supported."))
                            }
                        }, getEditSelectionRange: function (e) {
                            return this.getSelectionRange(e)
                        }, createKeyboardEvent: function (e) {
                            var t = this.returnKeyType, n = this;
                            if (this._events.return) {
                                e = m(e, {
                                    keyup: function (e) {
                                        var i = e.keyCode, r = e.key;
                                        if (13 === i) {
                                            r && "tab" !== r.toLowerCase() || (e.key = "next");
                                            var o = ll(t);
                                            e.returnKeyType = o, e.value = e.target.value, n.$emit("return", e)
                                        }
                                    }
                                })
                            }
                            return e
                        }
                    }
                }, ul = {
                    destroyed: function () {
                        if (this._stickyAdded) {
                            var e = $(this);
                            e && delete e._stickyChildren[this._uid]
                        }
                    }, methods: {
                        _addSticky: function () {
                            var e = this.$el;
                            e && 1 !== e.nodeType && (e.classList.add("sticky"), this._placeholder || (this._placeholder = e.cloneNode(!0)), this._placeholder.style.display = "block", this._placeholder.style.width = this.$el.offsetWidth + "px", this._placeholder.style.height = this.$el.offsetHeight + "px", e.parentNode.insertBefore(this._placeholder, this.$el))
                        }, _removeSticky: function () {
                            var e = this.$el;
                            e && 1 !== e.nodeType && (e.classList.remove("sticky"), this._placeholder && this._placeholder.parentNode.removeChild(this._placeholder), this._placeholder = null)
                        }
                    }
                };
            window.global = window, window.weex = Zs, Zs._styleMap = {}, ["getComponentStyle", "extractComponentStyle", "createEventMap", "trimTextVNodes"].forEach(function (e) {
                Zs[e] = tl[e].bind(Zs)
            }), Zs.mixins = {inputCommon: cl};
            var dl = ws.gestureEvents, hl = ["click", "touchstart", "touchmove", "touchend"], fl = ["touchmove"],
                pl = dl.concat(hl), ml = !1, gl = !1;
            "undefined" != typeof window && window.Vue && Ye(window.Vue), weex.init = Ye;
            var Al, wl, vl, bl, yl, xl, _l, Cl, El, Sl, kl, Tl = "\n.weex-a {\n  text-decoration: none;\n}\n", Il = {
                    init: function (e) {
                        e.registerComponent("a", He(e))
                    }
                }, Ol = "\nbody > .weex-div {\n  min-height: 100%;\n}\n", Ll = {
                    init: function (e) {
                        var t = Ve(e);
                        e.registerComponent("div", t), e.registerComponent("container", t)
                    }
                }, Nl = 15, Rl = {
                    name: "weex-image",
                    props: {
                        src: String,
                        placeholder: String,
                        resize: String,
                        quality: String,
                        sharpen: String,
                        original: [String, Boolean],
                        spriteSrc: String,
                        spritePosition: [String, Array],
                        spriteWidth: [String, Number]
                    },
                    updated: function () {
                        this._fireLazyload()
                    },
                    mounted: function () {
                        this._fireLazyload()
                    },
                    methods: {
                        save: function (e) {
                            Je(this.src, e)
                        }
                    },
                    render: function (e) {
                        var t = Al(this), n = qe(this, t);
                        return e("figure", {
                            attrs: {
                                "weex-type": "image",
                                "img-src": this.spriteSrc || Ge(this, this.src, t),
                                "img-placeholder": Ge(this, this.placeholder, t),
                                "sprite-src": this.spriteSrc,
                                "sprite-position": this.spritePosition,
                                "sprite-width": this.spriteWidth
                            }, on: wl(this, ["load", "error"]), staticClass: "weex-image weex-el", staticStyle: vl(t, n)
                        })
                    },
                    _css: "\n.weex-image, .weex-img {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n}\n"
                }, Bl = {
                    init: function (e) {
                        Al = e.extractComponentStyle, wl = e.createEventMap, vl = e.utils.extend, bl = e.utils.isArray, e.registerComponent("image", Rl), e.registerComponent("img", Rl)
                    }
                }, jl = "wipt_plc_", Ml = "wipt_", Pl = 0,
                Wl = "\n.weex-input, .weex-textarea {\n  font-size: 0.426667rem;\n}\n.weex-input:focus, .weex-textarea:focus {\n  outline: none;\n}\n",
                Dl = {
                    init: function (e) {
                        yl = e.extractComponentStyle, xl = e.utils.mapFormEvents, _l = e.utils.appendCss,
                            e.registerComponent("input", Ze(e))
                    }
                },
                Fl = "\n.weex-switch {\n  border: 0.013333rem solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.333333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n  -moz-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n  transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  box-shadow: #64bd63 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  background-color: #A0CCA0;\n  box-shadow: #A0CCA0 0 0 0 0.533333rem inset;\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 0.013333rem 0.04rem rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n  -moz-transition: background-color 0.4s, left 0.2s;\n  transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.533333rem;\n}\n",
                zl = {
                    init: function (e) {
                        e.registerComponent("switch", et(e))
                    }
                }, $l = {
                    props: {
                        loadmoreoffset: {
                            type: [String, Number], default: 0, validator: function (e) {
                                var t = parseInt(e);
                                return !isNaN(t) && t >= 0
                            }
                        }, offsetAccuracy: {
                            type: [Number, String], default: 10, validator: function (e) {
                                var t = parseInt(e);
                                return !isNaN(t) && t >= 10
                            }
                        }
                    }, created: function () {
                        this._loadmoreReset = !0
                    }, methods: {
                        updateLayout: function () {
                            var e = this.$refs.wrapper;
                            if (e) {
                                var t = e.getBoundingClientRect();
                                this._wrapperWidth = t.width, this._wrapperHeight = t.height
                            }
                            var n = this.$refs.inner, i = n && n.children;
                            if (n) {
                                var r = n.getBoundingClientRect();
                                this._innerWidth = r.width, this._innerHeight = r.height
                            }
                            var o = this._loading && this._loading.$el, a = this._refresh && this._refresh.$el;
                            o && (this._innerHeight -= o.getBoundingClientRect().height), a && (this._innerHeight -= a.getBoundingClientRect().height), "horizontal" === this.scrollDirection && i && (this._innerWidth = weex.utils.getRangeWidth(n))
                        }, resetLoadmore: function () {
                            this._loadmoreReset = !0
                        }, processSticky: function () {
                            if (!weex.utils.supportSticky() && "horizontal" !== this.scrollDirection) {
                                var e = this._stickyChildren, t = e && e.length || 0;
                                if (!(t <= 0)) {
                                    var n = this.$el;
                                    if (n)for (var i, r = n.scrollTop, o = 0; o < t; o++)i = e[o], i._initOffsetTop < r ? i._addSticky() : i._removeSticky()
                                }
                            }
                        }, handleScroll: function (e) {
                            if (weex.utils.getThrottleLazyload(25, this.$el, "scroll")(), tt(this)(e), this.processSticky(), this.$refs.inner) {
                                var t = "horizontal" === this.scrollDirection ? this._innerWidth : this._innerHeight;
                                this._innerLength || (this._innerLength = t), this._innerLength !== t && (this._innerLength = t, this._loadmoreReset = !0), this._loadmoreReset && this.reachBottom(this.loadmoreoffset) && (this._loadmoreReset = !1, this.$emit("loadmore", e))
                            }
                        }, reachTop: function () {
                            var e = this.$refs.wrapper;
                            return !!e && e.scrollTop <= 0
                        }, reachBottom: function (e) {
                            var t = this.$refs.wrapper, n = this.$refs.inner;
                            if (e = parseInt(e || 0) * weex.config.env.scale, t && n) {
                                var i = "horizontal" === this.scrollDirection ? "width" : "height",
                                    r = this["_inner" + i[0].toUpperCase() + i.substr(1)],
                                    o = this["_wrapper" + i[0].toUpperCase() + i.substr(1)];
                                return ("horizontal" === this.scrollDirection ? t.scrollLeft : t.scrollTop) >= r - o - e
                            }
                            return !1
                        }, handleTouchStart: function (e) {
                            if (this._loading || this._refresh) {
                                var t = e.changedTouches[0];
                                this._touchParams = {
                                    reachTop: this.reachTop(),
                                    reachBottom: this.reachBottom(),
                                    startTouchEvent: t,
                                    startX: t.pageX,
                                    startY: t.pageY,
                                    timeStamp: e.timeStamp
                                }
                            }
                        }, handleTouchMove: function (e) {
                            if (this._touchParams && (this._refresh || this._loading)) {
                                var t = this.$refs.inner, n = this._touchParams, i = n.startY, r = n.reachTop,
                                    o = n.reachBottom;
                                if (t) {
                                    var a = e.changedTouches[0], s = a.pageY - i, l = s > 0 ? "down" : "up";
                                    this._touchParams.offsetY = s, this._refresh && "down" === l && r ? this._refresh.pullingDown(s) : this._loading && "up" === l && o && this._loading.pullingUp(-s)
                                }
                            }
                        }, handleTouchEnd: function (e) {
                            if (this._touchParams && (this._refresh || this._loading)) {
                                var t = this.$refs.inner, n = this._touchParams, i = n.startY, r = n.reachTop,
                                    o = n.reachBottom;
                                if (t) {
                                    var a = e.changedTouches[0], s = a.pageY - i, l = s > 0 ? "down" : "up";
                                    this._touchParams.offsetY = s, this._refresh && "down" === l && r ? this._refresh.pullingEnd() : this._loading && "up" === l && o && this._loading.pullingEnd()
                                }
                                delete this._touchParams
                            }
                        }
                    }
                }, Ul = {
                    methods: {
                        handleListScroll: function (e) {
                            if (this.handleScroll(e), !weex.utils.supportSticky()) {
                                var t = this.$el.scrollTop, n = this.$children.filter(function (e) {
                                    return e.$refs.header
                                });
                                if (!(n.length <= 0))for (var i = 0; i < n.length; i++)n[i].initTop < t ? n[i].addSticky() : n[i].removeSticky()
                            }
                        }
                    }
                }, Ql = {
                    init: function (e) {
                        e.registerComponent("list", nt(e))
                    }
                }, Yl = {
                    init: function (e) {
                        e.registerComponent("scroller", it(e))
                    }
                }, Hl = 32, Vl = 1, ql = {
                    init: function (e) {
                        e.registerComponent("waterfall", rt(e))
                    }
                }, Gl = {
                    init: function (e) {
                        e.registerComponent("cell", ot(e))
                    }
                }, Jl = {
                    init: function (e) {
                        e.registerComponent("header", at(e))
                    }
                }, Kl = {
                    init: function (e) {
                        e.registerComponent("loading", st())
                    }
                }, Xl = {
                    init: function (e) {
                        e.registerComponent("refresh", lt(e))
                    }
                }, Zl = {
                    name: "weex-loading-indicator",
                    render: function (e) {
                        return this.weexType = "loading-indicator", e("mark", {
                            attrs: {"weex-type": "loading-indicator"},
                            staticClass: "weex-loading-indicator weex-ct",
                            staticStyle: ht(this)
                        })
                    },
                    _css: "\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  width: 1rem !important;\n  height: 1rem !important;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  width: 0.5em;\n  height: 0.5em;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n  -moz-animation: weex-spinner 1.1s infinite ease;\n  animation: weex-spinner 1.1s infinite ease;\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -1.3em 0em 0em #ffffff, 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.5), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  11.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.7), 0.9em -0.9em 0 0em #ffffff, 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.5), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.7), 1.25em 0em 0 0em #ffffff, 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.5), 1.25em 0em 0 0em rgba(255, 255, 255, 0.7), 0.875em 0.875em 0 0em #ffffff, 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.5), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.7), 0em 1.25em 0 0em #ffffff, -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.2), -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  61.25% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.5), 0em 1.25em 0 0em rgba(255, 255, 255, 0.7), -0.9em 0.9em 0 0em #ffffff, -1.3em 0em 0 0em rgba(255, 255, 255, 0.2), -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.5), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.7), -1.3em 0em 0 0em #ffffff, -0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -1.3em 0em 0em rgba(255, 255, 255, 0.2), 0.9em -0.9em 0 0em rgba(255, 255, 255, 0.2), 1.25em 0em 0 0em rgba(255, 255, 255, 0.2), 0.875em 0.875em 0 0em rgba(255, 255, 255, 0.2), 0em 1.25em 0 0em rgba(255, 255, 255, 0.2), -0.9em 0.9em 0 0em rgba(255, 255, 255, 0.5), -1.3em 0em 0 0em rgba(255, 255, 255, 0.7), -0.9em -0.9em 0 0em #ffffff;\n  }\n}\n"
                }, ec = {
                    init: function (e) {
                        Cl = e.extractComponentStyle, El = e.utils.getRgb, Sl = e.utils.loopArray, kl = e.utils.getStyleSheetById, e.registerComponent("loading-indicator", Zl)
                    }
                };
            t('/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\nbody > .weex-list,\nbody > .weex-scroller,\nbody > .weex-waterfall {\n  max-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-scroller-wrapper,\n.weex-waterfall-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-list-wrapper,\n.weex-waterfall-wrapper {\n  overflow-y: scroll !important;\n  overflow-x: hidden !important;\n}\n\n.weex-list-inner,\n.weex-scroller-inner,\n.weex-waterfall-inner {\n  -webkit-overflow-scrolling: touch;\n}\n\n.weex-waterfall-inner-columns {\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-scroller-wrapper.weex-scroller-vertical {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.weex-scroller-wrapper.weex-scroller-disabled {\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner {\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  height: 100%;\n}\n\n.weex-cell {\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n}\n', void 0);
            var tc = [Ql, Yl, ql, Gl, Jl, Kl, Xl, ec], nc = {
                init: function (e) {
                    tc.forEach(function (t) {
                        e.install(t)
                    })
                }
            };
            t('/*\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n \n.weex-slider-wrapper {\n  overflow-x: hidden;\n  overflow-y: visible;\n}\n\n.weex-slider-inner {\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  -webkit-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n}\n\n.weex-slider-cell {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background: transparent !important;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.neighbor-cell {\n  overflow: visible !important;\n}', void 0);
            var ic, rc, oc, ac = {
                    created: function () {
                        this._clones = [], this.innerOffset = 0, this._indicator = null
                    }, beforeUpdate: function () {
                        this._getWrapperSize()
                    }, updated: function () {
                        var e = this.$children, t = e && e.length;
                        if (this.frameCount !== this._prevFrameCount) {
                            var n = this.$refs.inner;
                            n && (n.style.webkitTransform = "translate3d(0px, 0, 0)", n.style.mozTransform = "translate3d(0px, 0, 0)", n.style.transform = "translate3d(0px, 0, 0)")
                        }
                        if (e && t > 0)for (var i = 0; i < t; i++) {
                            var r = e[i];
                            if ("indicator" === r.$options._componentTag || "indicator" === r.$vnode.data.ref) {
                                r._watcher.get();
                                break
                            }
                        }
                        weex.utils.fireLazyload(this.$el, !0), this._preIndex !== this.currentIndex && this._slideTo(this.currentIndex)
                    }, mounted: function () {
                        this._getWrapperSize(), this._slideTo(this.currentIndex), weex.utils.fireLazyload(this.$el, !0)
                    }, methods: {
                        _getWrapperSize: function () {
                            var e = this.$refs.wrapper;
                            if (e) {
                                var t = e.getBoundingClientRect();
                                this._wrapperWidth = t.width, this._wrapperHeight = t.height
                            }
                        }, _formatChildren: function (e) {
                            var t, n = this, i = this.$slots.default || [], r = i.filter(function (e) {
                                return !!e.tag && (!e.componentOptions || "indicator" !== e.componentOptions.tag || (t = e, !1))
                            }).map(function (t) {
                                return e("li", {
                                    ref: "cells",
                                    staticClass: "weex-slider-cell weex-ct" + (n.isNeighbor ? " neighbor-cell" : "")
                                }, [t])
                            });
                            return t && (t.data.attrs = t.data.attrs || {}, t.data.attrs.count = r.length, t.data.attrs.active = this.currentIndex, this._indicator = t), r
                        }, _renderSlides: function (e) {
                            return this._cells = this._formatChildren(e), this.frameCount = this._cells.length, e("nav", {
                                ref: "wrapper",
                                attrs: {"weex-type": this.isNeighbor ? "slider-neighbor" : "slider"},
                                on: weex.createEventMap(this, ["scroll", "scrollstart", "scrollend"], {
                                    touchstart: this._handleTouchStart,
                                    touchmove: weex.utils.throttle(weex.utils.bind(this._handleTouchMove, this), 25),
                                    touchend: this._handleTouchEnd,
                                    touchcancel: this._handleTouchCancel
                                }),
                                staticClass: "weex-slider weex-slider-wrapper weex-ct",
                                staticStyle: weex.extractComponentStyle(this)
                            }, [e("ul", {
                                ref: "inner",
                                staticClass: "weex-slider-inner weex-ct"
                            }, this._cells), this._indicator])
                        }, _normalizeIndex: function (e) {
                            var t = (e + this.frameCount) % this.frameCount;
                            return Math.min(Math.max(t, 0), this.frameCount - 1)
                        }, _startAutoPlay: function () {
                            if (this.autoPlay && "false" !== this.autoPlay) {
                                this._autoPlayTimer && (clearTimeout(this._autoPlayTimer), this._autoPlayTimer = null);
                                var e = parseInt(this.interval - 400 - 100);
                                e = e > 200 ? e : 200, this._autoPlayTimer = setTimeout(weex.utils.bind(this._next, this), e)
                            }
                        }, _stopAutoPlay: function () {
                            this._autoPlayTimer && (clearTimeout(this._autoPlayTimer), this._autoPlayTimer = null)
                        }, _slideTo: function (e, t) {
                            var n = this;
                            if (!(this.frameCount <= 0)) {
                                if ((!this.infinite || "false" === this.infinite) && (-1 === e || e > this.frameCount - 1))return void this._slideTo(this.currentIndex);
                                if (this._preIndex || 0 === this._preIndex || (this._showNodes && this._showNodes[0] ? this._preIndex = this._showNodes[0].index : this._preIndex = this.currentIndex), !this._sliding) {
                                    this._sliding = !0;
                                    var i = this._normalizeIndex(e), r = this.$refs.inner,
                                        o = this._step = this.frameCount <= 1 ? 0 : this._preIndex - e;
                                    if (r) {
                                        this._prepareNodes();
                                        var a = weex.utils.getTransformObj(r).translate,
                                            s = a && a.match(/translate[^(]+\(([+-\d.]+)/), l = s && s[1] || 0,
                                            c = l - this.innerOffset;
                                        this.innerOffset += o * this._wrapperWidth, r.style.webkitTransition = "-webkit-transform 0.4s ease-in-out", r.style.mozTransition = "transform 0.4s ease-in-out", r.style.transition = "transform 0.4s ease-in-out", r.style.webkitTransform = "translate3d(" + this.innerOffset + "px, 0, 0)", r.style.mozTransform = "translate3d(" + this.innerOffset + "px, 0, 0)", r.style.transform = "translate3d(" + this.innerOffset + "px, 0, 0)", t || this._emitScrollEvent("scrollstart"), setTimeout(function () {
                                            n._throttleEmitScroll(c, function () {
                                                n._emitScrollEvent("scrollend")
                                            })
                                        }, 25), this._loopShowNodes(o), setTimeout(function () {
                                            n.isNeighbor && n._setNeighbors(), setTimeout(function () {
                                                r.style.webkitTransition = "", r.style.mozTransition = "", r.style.transition = "";
                                                for (var e = n._showStartIdx; e <= n._showEndIdx; e++) {
                                                    var t = n._showNodes[e];
                                                    if (t) {
                                                        var o = t.firstElementChild;
                                                        o.style.webkitTransition = "", o.style.mozTransition = "", o.style.transition = ""
                                                    }
                                                }
                                                n._rearrangeNodes(i)
                                            }, 100)
                                        }, 400)
                                    }
                                    i !== this._preIndex && this.$emit("change", weex.utils.createEvent(this.$el, "change", {index: i}))
                                }
                            }
                        }, _clearNodesOffset: function () {
                            for (var e = this, t = this._showEndIdx, n = this._showStartIdx; n <= t; n++) {
                                var i = e._showNodes[n];
                                i = i && i.firstElementChild, i && weex.utils.addTransform(e._showNodes[n].firstElementChild, {translate: "translate3d(0px, 0px, 0px)"})
                            }
                        }, _loopShowNodes: function (e) {
                            var t = this;
                            if (e && !(this.frameCount <= 1)) {
                                for (var n = e > 0 ? 1 : -1, i = e <= 0 ? this._showStartIdx : this._showEndIdx, r = e <= 0 ? this._showEndIdx : this._showStartIdx; i !== r - n; i -= n) {
                                    var o = i + e;
                                    t._showNodes[o] = t._showNodes[i], t._showNodes[o]._showIndex = o, delete t._showNodes[i]
                                }
                                this._showStartIdx += e, this._showEndIdx += e
                            }
                        }, _prepareNodes: function () {
                            var e = this._step, t = this._prevFrameCount, n = this.frameCount;
                            if (t !== n && (this._prevFrameCount = n, this._inited = !1), this._inited || (this._initNodes(), this._inited = !0, this._showNodes = {}), n <= 1) {
                                this._showStartIdx = this._showEndIdx = 0;
                                var i = this._cells[0].elm;
                                return i.style.opacity = 1, i.style.zIndex = 99, i.index = 0, this._showNodes[0] = i, i._inShow = !0, void(i._showIndex = 0)
                            }
                            var r = this._showCount = Math.abs(e) + 3;
                            this._showStartIdx = e <= 0 ? -1 : 2 - r, this._showEndIdx = e <= 0 ? r - 2 : 1, this._clearNodesOffset(), this._positionNodes(this._showStartIdx, this._showEndIdx, e)
                        }, _initNodes: function () {
                            for (var e = this.frameCount, t = this._cells, n = 0; n < e; n++) {
                                var i = t[n].elm;
                                i.index = n, i._inShow = !1, i.style.zIndex = 0, i.style.opacity = 0
                            }
                        }, _positionNodes: function (e, t, n, i) {
                            for (var r = this, o = this._cells, a = n <= 0 ? e : t, s = n <= 0 ? t : e, l = n <= 0 ? -1 : 1, c = this._preIndex + l, u = a; u !== s - l; u -= l) {
                                var d = o[r._normalizeIndex(c)].elm;
                                c -= l, r._positionNode(d, u)
                            }
                        }, _positionNode: function (e, t) {
                            var n = this._showNodes[t];
                            if (e._inShow && n !== e) n && this._removeClone(n), e = this._getClone(e.index); else if (e._inShow)return;
                            e._inShow = !0;
                            var i = t * this._wrapperWidth - this.innerOffset;
                            weex.utils.addTransform(e, {translate: "translate3d(" + i + "px, 0px, 0px)"}), e.style.zIndex = 99 - Math.abs(t), e.style.opacity = 1, e._showIndex = t, this._showNodes[t] = e
                        }, _getClone: function (e) {
                            var t = this._clones[e];
                            if (t || (this._clones[e] = t = []), t.length <= 0) {
                                var n = this._cells[e].elm, i = n.cloneNode(!0);
                                i._isClone = !0, i._inShow = n._inShow, i.index = n.index, i.style.opacity = 0, i.style.zIndex = 0;
                                this.$refs.inner.appendChild(i), t.push(i)
                            }
                            return t.pop()
                        }, _removeClone: function (e) {
                            var t = e.index;
                            this._hideNode(e), this._clones[t].push(e)
                        }, _hideNode: function (e) {
                            e._inShow = !1, e.style.opacity = 0, e.style.zIndex = 0
                        }, _clearNodes: function (e, t) {
                            for (var n = this, i = e; i <= t; i++) {
                                var r = n._showNodes[i];
                                if (!r)return;
                                r._isClone ? n._removeClone(r) : r._inShow || n._hideNode(r), delete n._showNodes[i]
                            }
                        }, _copyStyle: function (e, t, n, i) {
                            void 0 === n && (n = ["opacity", "zIndex"]), void 0 === i && (i = {}), weex.utils.extendKeys(t.style, e.style, n);
                            var r = weex.utils.getTransformObj(e);
                            for (var o in i)r[o] = i[o];
                            weex.utils.addTransform(t, r);
                            var a = e.firstElementChild, s = t.firstElementChild;
                            s.style.opacity = a.style.opacity, weex.utils.copyTransform(a, s)
                        }, _replaceClone: function (e, t) {
                            var n = this, i = this._cells[e.index].elm;
                            if (!i._inShow) {
                                var r, o = i._showIndex, a = ["opacity", "zIndex"];
                                Math.abs(o) <= 1 && (r = this._getClone(i.index), this._copyStyle(i, r), this._showNodes[o] = r), i._inShow = !0;
                                var s = weex.utils.getTransformObj(e);
                                s.translate = s.translate.replace(/[+-\d.]+[pw]x/, function (e) {
                                    return t * n._wrapperWidth - n.innerOffset + "px"
                                }), this._copyStyle(e, i, a, s), this._removeClone(e), r || delete this._showNodes[o], this._showNodes[t] = i, i._showIndex = t
                            }
                        }, _rearrangeNodes: function (e) {
                            var t = this;
                            if (this.frameCount <= 1)return this._sliding = !1, void(this.currentIndex = 0);
                            this._startAutoPlay();
                            for (var n = this._showNodes, i = this._showStartIdx; i <= this._showEndIdx; i++)n[i]._inShow = !1;
                            for (var r = -1; r <= 1; r++) {
                                var o = n[r];
                                o._isClone ? t._replaceClone(o, r) : o._inShow = !0
                            }
                            this._clearNodes(this._showStartIdx, -2), this._showStartIdx = -1, this._clearNodes(2, this._showEndIdx), this._showEndIdx = 1, this._sliding = !1, this.currentIndex = e, this._preIndex = e
                        }, _setNeighbors: function () {
                            for (var e = this, t = this._showStartIdx; t <= this._showEndIdx; t++) {
                                var n = e._showNodes[t].firstElementChild;
                                n.style.webkitTransition = "all 0.1s ease", n.style.mozTransition = "all 0.1s ease", n.style.transition = "all 0.1s ease";
                                var i = {scale: "scale(" + (0 === t ? e.currentItemScale : e.neighborScale) + ")"},
                                    r = void 0;
                                if (e._neighborWidth || (e._neighborWidth = parseFloat(n.style.width) || n.getBoundingClientRect().width), 1 === Math.abs(t)) {
                                    r = -t * (((e._wrapperWidth - e._neighborWidth * e.neighborScale) / 2 + e.neighborSpace * weex.config.env.scale) / e.neighborScale)
                                } else r = 0;
                                i.translate = "translate3d(" + r + "px, 0px, 0px)", weex.utils.addTransform(n, i), n.style.opacity = 0 === t ? 1 : e.neighborAlpha
                            }
                        }, _next: function () {
                            var e = this.currentIndex + 1;
                            this.frameCount <= 1 && e--, this._slideTo(e)
                        }, _prev: function () {
                            var e = this.currentIndex - 1;
                            this.frameCount <= 1 && e++, this._slideTo(e)
                        }, _handleTouchStart: function (e) {
                            var t = e.changedTouches[0];
                            this._stopAutoPlay();
                            var n = this.$refs.inner;
                            this._touchParams = {
                                originalTransform: n.style.webkitTransform || n.style.mozTransform || n.style.transform,
                                startTouchEvent: t,
                                startX: t.pageX,
                                startY: t.pageY,
                                timeStamp: e.timeStamp
                            }
                        }, _handleTouchMove: function (e) {
                            var t = this._touchParams;
                            if (t && !this._sliding) {
                                var n = this._touchParams, i = n.startX, r = n.startY, o = e.changedTouches[0],
                                    a = o.pageX - i, s = o.pageY - r;
                                t.offsetX = a, t.offsetY = s;
                                var l = t.isVertical;
                                if (void 0 === l && ((l = t.isVertical = Math.abs(a) < Math.abs(s)) || this._emitScrollEvent("scrollstart")), !l) {
                                    e.preventDefault();
                                    var c = this.$refs.inner;
                                    c && a && (this._nodesOffsetCleared || (this._nodesOffsetCleared = !0, this._clearNodesOffset()), this._emitScrollEvent("scroll", {offsetXRatio: a / this._wrapperWidth}), c.style.webkitTransform = "translate3d(" + (this.innerOffset + a) + "px, 0, 0)", c.style.mozTransform = "translate3d(" + (this.innerOffset + a) + "px, 0, 0)", c.style.transform = "translate3d(" + (this.innerOffset + a) + "px, 0, 0)")
                                }
                            }
                        }, _handleTouchEnd: function (e) {
                            this._startAutoPlay();
                            var t = this._touchParams;
                            if (t) {
                                if (void 0 !== t.isVertical) {
                                    var n = this.$refs.inner, i = t.offsetX;
                                    if (n) {
                                        this._nodesOffsetCleared = !1;
                                        var r = Math.abs(i / this._wrapperWidth) < .2, o = i > 0 ? 1 : -1,
                                            a = r ? this.currentIndex : this.currentIndex - o;
                                        this._slideTo(a, !0)
                                    }
                                    delete this._touchParams
                                }
                            }
                        }, _handleTouchCancel: function (e) {
                            return this._handleTouchEnd(e)
                        }, _emitScrollEvent: function (e, t) {
                            void 0 === t && (t = {}), this.$emit(e, weex.utils.createEvent(this.$el, e, t))
                        }, _throttleEmitScroll: function (e, t) {
                            var n = this, i = 0, r = parseInt(16) - 1, o = e > 0 ? 1 : -1,
                                a = Math.abs(e / this._wrapperWidth), s = function () {
                                    if (++i > r)return t && t.call(n);
                                    var e = 0 === n._step ? o * a * (1 - i / r) : o * (a + (1 - a) * i / r);
                                    n._emitScrollEvent("scroll", {offsetXRatio: e}), setTimeout(s, 25)
                                };
                            s()
                        }
                    }
                }, sc = {
                    mixins: [ac],
                    props: {
                        index: {type: [String, Number], default: 0},
                        "auto-play": {type: [String, Boolean], default: !1},
                        interval: {type: [String, Number], default: 3e3},
                        infinite: {type: [String, Boolean], default: !0}
                    },
                    watch: {
                        index: function () {
                            this.currentIndex = this._normalizeIndex(this.index)
                        }
                    },
                    data: function () {
                        return {frameCount: 0, currentIndex: this.index}
                    },
                    beforeCreate: function () {
                        this.weexType = "slider"
                    },
                    render: function (e) {
                        return this._renderSlides(e)
                    }
                }, lc = {
                    init: function (e) {
                        e.registerComponent("slider", sc), e.registerComponent("cycleslider", sc)
                    }
                }, cc = {
                    mixins: [ac],
                    props: {
                        index: {type: [String, Number], default: 0},
                        autoPlay: {type: [String, Boolean], default: !1},
                        interval: {type: [String, Number], default: 3e3},
                        infinite: {type: [String, Boolean], default: !0},
                        neighborSpace: {
                            type: [String, Number], validator: function (e) {
                                return e = parseFloat(e), !isNaN(e) && e > 0
                            }, default: 20
                        },
                        neighborAlpha: {
                            type: [String, Number], validator: function (e) {
                                return e = parseFloat(e), !isNaN(e) && e >= 0 && e <= 1
                            }, default: .6
                        },
                        neighborScale: {
                            type: [String, Number], validator: function (e) {
                                return e = parseFloat(e), !isNaN(e) && e >= 0 && e <= 1
                            }, default: .8
                        },
                        currentItemScale: {
                            type: [String, Number], validator: function (e) {
                                return e = parseFloat(e), !isNaN(e) && e >= 0 && e <= 1
                            }, default: .9
                        }
                    },
                    watch: {
                        index: function () {
                            this.currentIndex = this._normalizeIndex(this.index)
                        }
                    },
                    data: function () {
                        return {currentIndex: this.index, frameCount: 0}
                    },
                    beforeCreate: function () {
                        this.isNeighbor = !0, this.weexType = "slider-neighbor"
                    },
                    render: function (e) {
                        return this._renderSlides(e)
                    }
                }, uc = {
                    init: function (e) {
                        e.registerComponent("slider-neighbor", cc)
                    }
                }, dc = {
                    name: "weex-indicator",
                    methods: {
                        show: function () {
                            this.$el.style.visibility = "visible"
                        }
                    },
                    data: function () {
                        return {count: 0, active: 0}
                    },
                    render: function (e) {
                        var t = this.$vnode.data.attrs || {}, n = t.count, i = t.active;
                        if (this.count = n, this.active = i, this.count)return pt(this, e)
                    },
                    _css: "\n.weex-indicator {\n  position: absolute;\n  z-index: 10;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  -moz-box-orient: horizontal;\n  -moz-box-direction: normal;\n  flex-direction: row;\n  -webkit-box-orient: horizontal;\n  margin: 0;\n  padding: 0;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.266667rem;\n  height: 0.266667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.133333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}\n"
                }, hc = {
                    init: function (e) {
                        ic = e.extractComponentStyle, rc = e.utils.extend, oc = e.utils.extendKeys, e.registerComponent("indicator", dc)
                    }
                }, fc = {
                    init: function (e) {
                        e.install(lc), e.install(uc), e.install(hc)
                    }
                },
                pc = "\n.weex-text {\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  position: relative;\n  white-space: pre-wrap;  /* not using 'pre': support auto line feed. */\n  font-size: 0.426667rem;\n  word-wrap: break-word;\n  overflow: hidden; /* it'll be clipped if the height is not high enough. */\n}\n",
                mc = {
                    init: function (e) {
                        e.registerComponent("text", bt(e))
                    }
                },
                gc = "\n.weex-textarea {\n  font-size: 0.426667rem\n}\n.weex-textarea:focus {\n  outline: none;\n}\n",
                Ac = {
                    init: function (e) {
                        e.registerComponent("textarea", yt(e))
                    }
                }, wc = {
                    init: function (e) {
                        e.registerComponent("video", xt(e))
                    }
                },
                vc = "\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n}\n",
                bc = {
                    init: function (e) {
                        e.registerComponent("web", _t(e))
                    }
                }, yc = [Il, Ll, Bl, Dl, zl, nc, fc, mc, Ac, wc, bc], xc = "geolocation" in navigator,
                _c = "[h5-render]: browser doesn't support geolocation.", Cc = {
                    getCurrentPosition: function (e, t, n) {
                        var i = this, r = function (t) {
                            return i.sender.performCallback(e, t)
                        }, o = function (e) {
                            return i.sender.performCallback(t, e)
                        };
                        xc ? navigator.geolocation.getCurrentPosition(r, o, n) : (console.warn(_c), o(new Error(_c)))
                    }, watchPosition: function (e, t, n) {
                        var i = this, r = function (t) {
                            return i.sender.performCallback(e, t, !0)
                        }, o = function (e) {
                            return i.sender.performCallback(t, e)
                        };
                        if (xc)var a = navigator.geolocation.watchPosition(function (e) {
                            e.watchId = a, r(e)
                        }, o, n); else console.warn(_c), o(new Error(_c))
                    }, clearWatch: function (e) {
                        xc ? navigator.geolocation.clearWatch(e) : console.warn(_c)
                    }
                }, Ec = {
                    geolocation: [{
                        name: "getCurrentPosition",
                        args: ["function", "function", "object"]
                    }, {name: "watchPosition", args: ["function", "function", "object"]}, {
                        name: "clearWatch",
                        args: ["string"]
                    }]
                }, Sc = {
                    init: function (e) {
                        e.registerApiModule("geolocation", Cc, Ec)
                    }
                }, kc = !1;
            try {
                kc = "undefined" != typeof localStorage
            } catch (e) {
            }
            var Tc = "failed", Ic = "undefined", Oc = {
                setItem: function (e, t, n) {
                    var i = this.sender;
                    if (!kc)return Et(i, n);
                    if (!e || !t && 0 !== t)return void i.performCallback(n, {result: "failed", data: "invalid_param"});
                    try {
                        localStorage.setItem(e, t), i.performCallback(n, {result: "success", data: Ic})
                    } catch (e) {
                        Ct(i, n)
                    }
                }, getItem: function (e, t) {
                    var n = this.sender;
                    if (!kc)return Et(n, t);
                    if (!e)return void n.performCallback(t, {result: Tc, data: "invalid_param"});
                    try {
                        var i = localStorage.getItem(e);
                        n.performCallback(t, {result: i ? "success" : Tc, data: i || Ic})
                    } catch (e) {
                        Ct(n, t)
                    }
                }, removeItem: function (e, t) {
                    var n = this.sender;
                    if (!kc)return Et(n, t);
                    if (!e)return void n.performCallback(t, {result: Tc, data: "invalid_param"});
                    try {
                        localStorage.removeItem(e), n.performCallback(t, {result: "success", data: Ic})
                    } catch (e) {
                        Ct(n, t)
                    }
                }, length: function (e) {
                    var t = this.sender;
                    if (!kc)return Et(t, e);
                    try {
                        var n = localStorage.length;
                        t.performCallback(e, {result: "success", data: n})
                    } catch (n) {
                        Ct(t, e)
                    }
                }, getAllKeys: function (e) {
                    var t = this.sender;
                    if (!kc)return Et(t, e);
                    try {
                        for (var n = [], i = 0; i < localStorage.length; i++)n.push(localStorage.key(i));
                        t.performCallback(e, {result: "success", data: n})
                    } catch (n) {
                        Ct(t, e)
                    }
                }
            }, Lc = {
                storage: [{name: "setItem", args: ["string", "string", "function"]}, {
                    name: "getItem",
                    args: ["string", "function"]
                }, {name: "removeItem", args: ["string", "function"]}, {
                    name: "length",
                    args: ["function"]
                }, {name: "getAllKeys", args: ["function"]}]
            }, Nc = {
                init: function (e) {
                    e.registerApiModule("storage", Oc, Lc)
                }
            };
            "undefined" == typeof window && (window = {
                ctrl: {},
                lib: {}
            }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function (e, t) {
                function n(e) {
                    var t = {};
                    Object.defineProperty(this, "params", {
                        set: function (e) {
                            if ("object" == typeof e) {
                                for (var n in t)delete t[n];
                                for (var n in e)t[n] = e[n]
                            }
                        }, get: function () {
                            return t
                        }, enumerable: !0
                    }), Object.defineProperty(this, "search", {
                        set: function (e) {
                            if ("string" == typeof e) {
                                0 === e.indexOf("?") && (e = e.substr(1));
                                var n = e.split("&");
                                for (var i in t)delete t[i];
                                for (var r = 0; r < n.length; r++) {
                                    var o = n[r].split("=");
                                    if (void 0 !== o[1] && (o[1] = o[1].toString()), o[0])try {
                                        t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                                    } catch (e) {
                                        t[o[0]] = o[1]
                                    }
                                }
                            }
                        }, get: function () {
                            var e = [];
                            for (var n in t)if (void 0 !== t[n])if ("" !== t[n])try {
                                e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]))
                            } catch (i) {
                                e.push(n + "=" + t[n])
                            } else try {
                                e.push(encodeURIComponent(n))
                            } catch (t) {
                                e.push(n)
                            }
                            return e.length ? "?" + e.join("&") : ""
                        }, enumerable: !0
                    });
                    var n;
                    Object.defineProperty(this, "hash", {
                        set: function (e) {
                            "string" == typeof e && (e && e.indexOf("#") < 0 && (e = "#" + e), n = e || "")
                        }, get: function () {
                            return n
                        }, enumerable: !0
                    }), this.set = function (e) {
                        e = e || "";
                        var t;
                        if (!(t = e.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i"))))throw new Error("Wrong uri scheme.");
                        this.protocol = t[1] || ("object" == typeof location ? location.protocol : ""), this.username = t[2] || "", this.password = t[3] || "", this.hostname = this.host = t[4], this.port = t[5] || "", this.pathname = t[6] || "/", this.search = t[7] || "", this.hash = t[8] || "", this.origin = this.protocol + "//" + this.hostname
                    }, this.toString = function () {
                        var e = this.protocol + "//";
                        return this.username && (e += this.username, this.password && (e += ":" + this.password), e += "@"), e += this.host, this.port && "80" !== this.port && (e += ":" + this.port), this.pathname && (e += this.pathname), this.search && (e += this.search), this.hash && (e += this.hash), e
                    }, e && this.set(e.toString())
                }

                t.httpurl = function (e) {
                    return new n(e)
                }
            }(window, window.lib || (window.lib = {}));
            var Rc, Bc, jc, Mc = function (e) {
                    return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase()
                    })
                }, Pc = Object.getOwnPropertySymbols, Wc = Object.prototype.hasOwnProperty,
                Dc = Object.prototype.propertyIsEnumerable, Fc = function () {
                    try {
                        if (!Object.assign)return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0])return !1;
                        for (var t = {}, n = 0; n < 10; n++)t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                                return t[e]
                            }).join(""))return !1;
                        var i = {};
                        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                            i[e] = e
                        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                    } catch (e) {
                        return !1
                    }
                }() ? Object.assign : function (e, t) {
                    for (var n, i, r = arguments, o = St(e), a = 1; a < arguments.length; a++) {
                        n = Object(r[a]);
                        for (var s in n)Wc.call(n, s) && (o[s] = n[s]);
                        if (Pc) {
                            i = Pc(n);
                            for (var l = 0; l < i.length; l++)Dc.call(n, i[l]) && (o[i[l]] = n[i[l]])
                        }
                    }
                    return o
                }, zc = Mc, $c = Fc, Uc = function (e) {
                    return e.split("?")[1] || ""
                }, Qc = function (e, t) {
                    t = $c({arrayFormat: "none"}, t);
                    var n = Tt(t), i = Object.create(null);
                    return "string" != typeof e ? i : (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function (e) {
                        var t = e.replace(/\+/g, " ").split("="), r = t.shift(), o = t.length > 0 ? t.join("=") : void 0;
                        o = void 0 === o ? null : decodeURIComponent(o), n(decodeURIComponent(r), o, i)
                    }), Object.keys(i).sort().reduce(function (e, t) {
                        var n = i[t];
                        return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = Ot(n) : e[t] = n, e
                    }, Object.create(null))) : i
                }, Yc = function (e, t) {
                    t = $c({encode: !0, strict: !0, arrayFormat: "none"}, t);
                    var n = kt(t);
                    return e ? Object.keys(e).sort().map(function (i) {
                        var r = e[i];
                        if (void 0 === r)return "";
                        if (null === r)return It(i, t);
                        if (Array.isArray(r)) {
                            var o = [];
                            return r.slice().forEach(function (e) {
                                void 0 !== e && o.push(n(i, e, o.length))
                            }), o.join("&")
                        }
                        return It(i, t) + "=" + It(r, t)
                    }).filter(function (e) {
                        return e.length > 0
                    }).join("&") : ""
                }, Hc = {extract: Uc, parse: Qc, stringify: Yc}, Vc = 0, qc = -1, Gc = {
                    sendHttp: function (e, t) {
                        if ("string" == typeof e)try {
                            e = JSON.parse(e)
                        } catch (e) {
                            return
                        }
                        if ("object" != typeof e || !e.url)return console.error("[h5-render] invalid config or invalid config.url for sendHttp API");
                        var n = this.sender, i = e.method || "GET", r = new XMLHttpRequest;
                        r.open(i, e.url, !0), r.onload = function () {
                            n.performCallback(t, this.responseText)
                        }, r.onerror = function (e) {
                            return console.error("[h5-render] unexpected error in sendHttp API", e)
                        }, r.send()
                    }, fetch: function (e, t, n) {
                        var i = ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH"],
                            r = ["cors", "no-cors", "same-origin", "navigate"],
                            o = ["text", "json", "jsonp", "arraybuffer"], a = this.sender, s = Rc.extend({}, e);
                        if (void 0 === s.method) s.method = "GET", console.warn("[h5-render] options.method for 'fetch' API has been set to default value '" + s.method + "'"); else if (-1 === i.indexOf((s.method + "").toUpperCase()))return console.error("[h5-render] options.method '" + s.method + "' for 'fetch' API should be one of " + i + ".");
                        if (!s.url)return console.error("[h5-render] options.url should be set for 'fetch' API.");
                        if ("GET" === s.method.toUpperCase()) {
                            var l = s.body;
                            Rc.isPlainObject(l) && (l = Hc.stringify(l));
                            var c = s.url, u = c.indexOf("#");
                            u <= -1 && (u = c.length);
                            var d = c.substr(u);
                            d && "#" === d[0] && (d = d.substr(1)), c = c.substring(0, u), l && (c += (s.url.indexOf("?") <= -1 ? "?" : "&") + l), c += "#" + d, s.url = c
                        }
                        if (void 0 === s.mode) s.mode = "cors"; else if (-1 === r.indexOf((s.mode + "").toLowerCase()))return console.error("[h5-render] options.mode '" + s.mode + "' for 'fetch' API should be one of " + r + ".");
                        if (void 0 === s.type) s.type = "text", console.warn("[h5-render] options.type for 'fetch' API has been set to default value '" + s.type + "'."); else if (-1 === o.indexOf((s.type + "").toLowerCase()))return console.error("[h5-render] options.type '" + s.type + "' for 'fetch' API should be one of " + o + ".");
                        if (s.headers = s.headers || {}, !Rc.isPlainObject(s.headers))return console.error("[h5-render] options.headers should be a plain object");
                        s.timeout = parseInt(s.timeout, 10) || 2500;
                        var h = [s, function (e) {
                            a.performCallback(t, e)
                        }];
                        n && h.push(function (e) {
                            a.performCallback(n, e, !0)
                        }), "jsonp" === s.type ? Lt.apply(this, h) : Nt.apply(this, h)
                    }
                }, Jc = {
                    stream: [{name: "sendHttp", args: ["object", "function"]}, {
                        name: "fetch",
                        args: ["object", "function", "function"]
                    }]
                }, Kc = {
                    init: function (e) {
                        Rc = e.utils, e.registerApiModule("stream", Gc, Jc)
                    }
                }, Xc = "__weex_clipboard_id__", Zc = {
                    getString: function (e) {
                        console.log("clipboard.getString() is not supported now.")
                    }, setString: function (e) {
                        if ("string" == typeof e && "" !== e && document.execCommand) {
                            var t = Rt();
                            t.value = e, t.select(), document.execCommand("copy"), t.value = "", t.blur()
                        } else console.log("only support string input now")
                    }
                }, eu = {clipboard: [{name: "getString", args: ["function"]}, {name: "setString", args: ["string"]}]},
                tu = {
                    init: function (e) {
                        e.registerApiModule("clipboard", Zc, eu)
                    }
                }, nu = {
                    openURL: function (e) {
                        location.href = e
                    }
                }, iu = {event: [{name: "openURL", args: ["string"]}]}, ru = {
                    init: function (e) {
                        e.registerApiModule("event", nu, iu)
                    }
                }, ou = {}, au = {
                    transition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "mozTransitionEnd",
                    OTransition: "oTransitionEnd",
                    msTransition: "MSTransitionEnd"
                };
            !function () {
                var e = document.createElement("div"), t = e.style;
                for (var n in au)if (n in t) {
                    Bc = au[n], jc = n;
                    break
                }
            }();
            var su, lu = {
                transition: function (e, t, n) {
                    if (t.styles)return Bt(e, t, function () {
                        n && n()
                    })
                }
            }, cu = {
                init: function (e) {
                    (0, e.utils.extendKeys)(ou, e.utils, ["nextFrame", "toCSSText", "autoPrefix", "camelizeKeys", "normalizeStyle", "isArray"]), e.registerModule("animation", lu)
                }
            }, uu = {}, du = {
                scrollToElement: function (e, t) {
                    (0, uu.isArray)(e) && (e = e[0]);
                    var n = jt(e), i = n && n.scrollDirection || "vertical", r = !n, o = r ? document.body : n.$el,
                        a = e.$el || e.elm;
                    if (o && a) {
                        var s = {horizontal: "Left", vertical: "Top"}[i], l = o.getBoundingClientRect(),
                            c = a.getBoundingClientRect();
                        n && "waterfall" === n.weexType && n._headers && n._headers.indexOf(e.$vnode || e) > -1 && (c = o.firstElementChild.getBoundingClientRect());
                        var u = s.toLowerCase(), d = (r ? 0 : o["scroll" + s]) + c[u] - l[u];
                        if (t && (d += t.offset && t.offset * weex.config.env.scale || 0), t && !1 === t.animated)return Pt.call(o, s, d);
                        Wt({
                            scrollable: o,
                            startTime: Mt(),
                            frame: null,
                            startPosition: r ? window.pageYOffset : o["scroll" + s],
                            position: d,
                            method: Pt,
                            dSuffix: s
                        })
                    }
                }, getComponentRect: function (e, t) {
                    function n(e) {
                        var t = {};
                        return o.forEach(function (n) {
                            e[n] && (t[n] = e[n] / i)
                        }), t
                    }

                    (0, uu.isArray)(e) && (e = e[0]);
                    var i = window.weex.config.env.scale, r = {result: !1},
                        o = ["width", "height", "top", "bottom", "left", "right"];
                    e && "viewport" === e ? (r.result = !0, r.size = n({
                        width: document.documentElement.clientWidth,
                        height: document.documentElement.clientHeight,
                        top: 0,
                        left: 0,
                        right: document.documentElement.clientWidth,
                        bottom: document.documentElement.clientHeight
                    }), r.contentSize = n({
                        width: document.documentElement.offsetWidth,
                        height: document.documentElement.offsetHeight
                    })) : e && e.$el && (r.result = !0, r.size = n(e.$el.getBoundingClientRect()), e.$refs.inner ? r.contentSize = n({
                            width: e.$refs.inner.offsetWidth,
                            height: e.$refs.inner.offsetHeight
                        }) : r.contentSize = n({width: e.$el.offsetWidth, height: e.$el.offsetHeight}));
                    var a = r.result ? r : {result: !1, errMsg: "Illegal parameter"};
                    return t && t(a), a
                }, addRule: function (e, t) {
                    var n = uu.camelToKebab, i = uu.appendCss;
                    e = n(e);
                    var r = "";
                    for (var o in t)t.hasOwnProperty(o) && (r += n(o) + ":" + t[o] + ";");
                    i("@" + e + "{" + r + "}", "dom-added-rules")
                }
            }, hu = {
                init: function (e) {
                    (0, e.utils.extendKeys)(uu, e.utils, ["camelToKebab", "appendCss", "isArray"]), e.registerModule("dom", du)
                }
            }, fu = {}, pu = {
                addEventListener: function (e, t) {
                    if (t) {
                        var n = fu[e];
                        n || (n = fu[e] = []);
                        for (var i = n.length, r = 0; r < i; r++)if (n[r] === t)return;
                        n.push(t), document.addEventListener(e, t)
                    }
                }, removeEventListener: function (e) {
                    var t = fu[e];
                    t && (t.forEach(function (t) {
                        return document.removeEventListener(e, t)
                    }), delete fu[e])
                }
            }, mu = {
                init: function (e) {
                    e.registerModule("globalEvent", pu)
                }
            }, gu = [], Au = !1, wu = "weex-toast", vu = .4, bu = {
                push: function (e, t) {
                    gu.push({msg: e, duration: t || .8}), this.show()
                }, show: function () {
                    var e = this;
                    if (!gu.length)return su && su.parentNode.removeChild(su), void(su = null);
                    if (!Au) {
                        Au = !0;
                        var t = gu.shift();
                        Ft(t.msg, function () {
                            setTimeout(function () {
                                zt(function () {
                                    Au = !1, e.show()
                                })
                            }, 1e3 * t.duration)
                        })
                    }
                }
            }, yu = "weex-modal-wrap", xu = "weex-modal-node";
            $t.prototype = {
                show: function () {
                    this.wrap.style.display = "block", this.node.classList.remove("hide")
                }, destroy: function () {
                    document.body.removeChild(this.wrap), document.body.removeChild(this.node), this.wrap = null, this.node = null
                }, createWrap: function () {
                    this.wrap = document.createElement("div"), this.wrap.className = yu, document.body.appendChild(this.wrap)
                }, createNode: function () {
                    this.node = document.createElement("div"), this.node.classList.add(xu, "hide"), document.body.appendChild(this.node)
                }, clearNode: function () {
                    this.node.innerHTML = ""
                }, createNodeContent: function () {
                }, bindEvents: function () {
                    this.wrap.addEventListener("click", function (e) {
                        e.preventDefault(), e.stopPropagation()
                    })
                }
            };
            Ut.prototype = Object.create($t.prototype), Ut.prototype.createNodeContent = function () {
                var e = document.createElement("div");
                e.classList.add("content"), this.node.appendChild(e);
                var t = document.createElement("div");
                t.classList.add("content-msg"), t.appendChild(document.createTextNode(this.msg)), e.appendChild(t);
                var n = document.createElement("div");
                n.classList.add("btn-group"), this.node.appendChild(n);
                var i = document.createElement("div");
                i.classList.add("btn", "alert-ok"), i.appendChild(document.createTextNode(this.okTitle)), n.appendChild(i)
            }, Ut.prototype.bindEvents = function () {
                $t.prototype.bindEvents.call(this), this.node.querySelector(".btn").addEventListener("click", function () {
                    this.destroy(), this.callback && this.callback()
                }.bind(this))
            };
            Qt.prototype = Object.create($t.prototype), Qt.prototype.createNodeContent = function () {
                var e = document.createElement("div");
                e.classList.add("content"), this.node.appendChild(e);
                var t = document.createElement("div");
                t.classList.add("content-msg"), t.appendChild(document.createTextNode(this.msg)), e.appendChild(t);
                var n = document.createElement("div");
                n.classList.add("btn-group"), this.node.appendChild(n);
                var i = document.createElement("div");
                i.appendChild(document.createTextNode(this.okTitle)), i.classList.add("btn-ok", "btn");
                var r = document.createElement("div");
                r.appendChild(document.createTextNode(this.cancelTitle)), r.classList.add("btn-cancel", "btn"), n.appendChild(i), n.appendChild(r), this.node.appendChild(n)
            }, Qt.prototype.bindEvents = function () {
                $t.prototype.bindEvents.call(this);
                var e = this.node.querySelector(".btn.btn-ok"), t = this.node.querySelector(".btn.btn-cancel");
                e.addEventListener("click", function () {
                    this.destroy(), this.callback && this.callback(this.okTitle)
                }.bind(this)), t.addEventListener("click", function () {
                    this.destroy(), this.callback && this.callback(this.cancelTitle)
                }.bind(this))
            };
            Yt.prototype = Object.create($t.prototype), Yt.prototype.createNodeContent = function () {
                var e = document.createElement("div");
                e.classList.add("content"), this.node.appendChild(e);
                var t = document.createElement("div");
                t.classList.add("content-msg"), t.appendChild(document.createTextNode(this.msg)), e.appendChild(t);
                var n = document.createElement("div");
                n.classList.add("input-wrap"), e.appendChild(n);
                var i = document.createElement("input");
                i.classList.add("input"), i.type = "text", i.autofocus = !0, i.placeholder = this.defaultMsg, n.appendChild(i);
                var r = document.createElement("div");
                r.classList.add("btn-group");
                var o = document.createElement("div");
                o.appendChild(document.createTextNode(this.okTitle)), o.classList.add("btn-ok", "btn");
                var a = document.createElement("div");
                a.appendChild(document.createTextNode(this.cancelTitle)), a.classList.add("btn-cancel", "btn"), r.appendChild(o), r.appendChild(a), this.node.appendChild(r)
            }, Yt.prototype.bindEvents = function () {
                $t.prototype.bindEvents.call(this);
                var e = this.node.querySelector(".btn.btn-ok"), t = this.node.querySelector(".btn.btn-cancel"),
                    n = this;
                e.addEventListener("click", function () {
                    var e = document.querySelector("input").value;
                    this.destroy(), this.callback && this.callback({result: n.okTitle, data: e})
                }.bind(this)), t.addEventListener("click", function () {
                    var e = document.querySelector("input").value;
                    this.destroy(), this.callback && this.callback({result: n.cancelTitle, data: e})
                }.bind(this))
            };
            var _u, Cu = {
                toast: function (e) {
                    bu.push(e.message, e.duration)
                }, alert: function (e, t) {
                    e.callback = function () {
                        t && t()
                    }, new Ut(e).show()
                }, confirm: function (e, t) {
                    e.callback = function (e) {
                        t && t(e)
                    }, new Qt(e).show()
                }, prompt: function (e, t) {
                    e.callback = function (e) {
                        t && t(e)
                    }, new Yt(e).show()
                }
            }, Eu = {
                init: function (e) {
                    e.utils.appendCss("\n.weex-toast {\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  z-index: 1999999999;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 50%;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.7;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -moz-box-orient: vertical;\n  -moz-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -moz-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.426667rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 0.013333rem solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.weex-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.426667rem;\n  border: 0.013333rem solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 0.013333rem solid #ddd;\n}\n", "weex-mud-modal"), e.registerModule("modal", Cu)
                }
            }, Su = {
                push: function (e, t) {
                    window.location.href = e.url, t && t()
                }, pop: function (e, t) {
                    window.history.back(), t && t()
                }
            }, ku = {
                init: function (e) {
                    e.registerModule("navigator", Su)
                }
            }, Tu = {
                goBack: function (e) {
                    _u(e) && (e = e[0]), e && "function" == typeof e.goBack && e.goBack()
                }, goForward: function (e) {
                    _u(e) && (e = e[0]), e && "function" == typeof e.goForward && e.goForward()
                }, reload: function (e) {
                    _u(e) && (e = e[0]), e && "function" == typeof e.reload && e.reload()
                }
            }, Iu = {
                init: function (e) {
                    _u = e.utils.isArray, e.registerModule("webview", Tu)
                }
            }, Ou = function () {
                var e = ["onopen", "onmessage", "onerror", "onclose"], t = {
                    INSTANCE: null, WebSocket: function (e, n) {
                        return e ? (t.INSTANCE = n ? new WebSocket(e, n) : new WebSocket(e), t.INSTANCE) : void(t.INSTANCE = null)
                    }, send: function (e) {
                        t.INSTANCE && t.INSTANCE.send(e)
                    }, close: function () {
                        t.INSTANCE && t.INSTANCE.close()
                    }
                };
                for (var n in e)!function (n) {
                    e.hasOwnProperty(n) && Object.defineProperty(t, e[n], {
                        get: function () {
                            return t.INSTANCE && t.INSTANCE[e[n]]
                        }, set: function (i) {
                            t.INSTANCE && (t.INSTANCE[e[n]] = i)
                        }
                    })
                }(n);
                return t
            }(), Lu = {
                init: function (e) {
                    e.registerModule("webSocket", Ou, {mountType: "full"})
                }
            }, Nu = {
                setViewport: function (e) {
                    console.warn('[vue-render] meta.setViewport doesn\'t works as expected in web platform. Please use <meta name="weex-viewport" content="xxx"> to specify your viewport width.')
                }
            }, Ru = {
                init: function (e) {
                    e.registerModule("meta", Nu)
                }
            }, Bu = [Sc, Nc, Kc, tu, ru, Eu, Lu, cu, hu, mu, ku, Iu, Ru], ju = weex.init;
            weex.init = function () {
                ju.apply(weex, arguments), yc.concat(Bu).forEach(function (e) {
                    weex.install(e)
                })
            }, l.Vue && weex.init(l.Vue), e.exports = weex
        }), u = function (e) {
            return e && e.__esModule ? e.default : e
        }(c);
    "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function (e, t) {
        var n = e.Promise, i = e.document, r = e.navigator.userAgent,
            o = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(r) || /Windows\sNT\s[\d\.]+/i.test(r),
            a = o && e.WindVane_Win_Private && e.WindVane_Win_Private.call, s = /iPhone|iPad|iPod/i.test(r),
            l = /Android/i.test(r), c = r.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),
            u = Object.prototype.hasOwnProperty, d = t.windvane = e.WindVane || (e.WindVane = {}),
            h = (e.WindVane_Native, Math.floor(65536 * Math.random())), f = 1, p = [], m = "iframe_", g = "param_",
            A = "chunk_";
        c = c ? (c[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0";
        var w = {
            isAvailable: 1 === function (e, t) {
                e = e.toString().split("."), t = t.toString().split(".");
                for (var n = 0; n < e.length || n < t.length; n++) {
                    var i = parseInt(e[n], 10), r = parseInt(t[n], 10);
                    if (window.isNaN(i) && (i = 0), window.isNaN(r) && (r = 0), i < r)return -1;
                    if (i > r)return 1
                }
                return 0
            }(c, "0"), call: function (e, t, i, r, o, a) {
                var s, l;
                "number" == typeof arguments[arguments.length - 1] && (a = arguments[arguments.length - 1]), "function" != typeof r && (r = null), "function" != typeof o && (o = null), n && (l = {}, l.promise = new n(function (e, t) {
                    l.resolve = e, l.reject = t
                })), s = v.getSid();
                var c = {success: r, failure: o, deferred: l};
                if (a > 0 && (c.timeout = setTimeout(function () {
                        w.onFailure(s, {ret: "HY_TIMEOUT"})
                    }, a)), v.registerCall(s, c), v.registerGC(s, a), w.isAvailable ? v.callMethod(e, t, i, s) : w.onFailure(s, {ret: "HY_NOT_IN_WINDVANE"}), l)return l.promise
            }, fireEvent: function (e, t, n) {
                var r = i.createEvent("HTMLEvents");
                r.initEvent(e, !1, !0), r.param = v.parseData(t || v.getData(n)), i.dispatchEvent(r)
            }, getParam: function (e) {
                return v.getParam(e)
            }, setData: function (e, t) {
                v.setData(e, t)
            }, onSuccess: function (e, t) {
                v.onComplete(e, t, "success")
            }, onFailure: function (e, t) {
                v.onComplete(e, t, "failure")
            }
        }, v = {
            params: {}, chunks: {}, calls: {}, getSid: function () {
                return (h + f++) % 65536 + ""
            }, buildParam: function (e) {
                return e && "object" == typeof e ? JSON.stringify(e) : e || ""
            }, getParam: function (e) {
                return this.params[g + e] || ""
            }, setParam: function (e, t) {
                this.params[g + e] = t
            }, parseData: function (e) {
                var t;
                if (e && "string" == typeof e)try {
                    t = JSON.parse(e)
                } catch (e) {
                    t = {ret: ["WV_ERR::PARAM_PARSE_ERROR"]}
                } else t = e || {};
                return t
            }, setData: function () {
                this.chunks[A + sid] = this.chunks[A + sid] || [], this.chunks[A + sid].push(chunk)
            }, getData: function (e) {
                return this.chunks[A + e] ? this.chunks[A + e].join("") : ""
            }, registerCall: function (e, t) {
                this.calls[e] = t
            }, unregisterCall: function (e) {
                var t = {};
                return this.calls[e] && (t = this.calls[e], delete this.calls[e]), t
            }, useIframe: function (e, t) {
                var n = m + e, r = p.pop();
                r || (r = i.createElement("iframe"), r.setAttribute("frameborder", "0"), r.style.cssText = "width:0;height:0;border:0;display:none;"), r.setAttribute("id", n), r.setAttribute("src", t), r.parentNode || setTimeout(function () {
                    i.body.appendChild(r)
                }, 5)
            }, retrieveIframe: function (e) {
                var t = m + e, n = i.querySelector("#" + t);
                p.length >= 3 ? i.body.removeChild(n) : p.indexOf(n) < 0 && p.push(n)
            }, callMethod: function (t, n, i, r) {
                if (i = v.buildParam(i), o) a ? e.WindVane_Win_Private.call(t, n, r, i) : this.onComplete(r, {ret: "HY_NO_HANDLER_ON_WP"}, "failure"); else {
                    var c = "hybrid://" + t + ":" + r + "/" + n + "?" + i;
                    if (s) this.setParam(r, i), this.useIframe(r, c); else if (l) {
                        window.prompt(c, "wv_hybrid:")
                    } else this.onComplete(r, {ret: "HY_NOT_SUPPORT_DEVICE"}, "failure")
                }
            }, registerGC: function (e, t) {
                var n = this, i = Math.max(t || 0, 6e5), r = Math.max(t || 0, 6e4), o = Math.max(t || 0, 6e5);
                setTimeout(function () {
                    n.unregisterCall(e)
                }, i), s ? setTimeout(function () {
                    n.params[g + e] && delete n.params[g + e]
                }, r) : l && setTimeout(function () {
                        n.chunks[A + e] && delete n.chunks[A + e]
                    }, o)
            }, onComplete: function (e, t, n) {
                var i = this.unregisterCall(e), r = i.success, o = i.failure, a = i.deferred, c = i.timeout;
                c && clearTimeout(c), t = t || this.getData(e), t = this.parseData(t);
                var u = t.ret;
                "string" == typeof u && (t = t.value || t, t.ret || (t.ret = [u])), "success" === n ? (r && r(t), a && a.resolve(t)) : "failure" === n && (o && o(t), a && a.reject(t)), s ? (this.retrieveIframe(e), this.params[g + e] && delete this.params[g + e]) : l && this.chunks[A + e] && delete this.chunks[A + e]
            }
        };
        for (var b in w)u.call(d, b) || (d[b] = w[b])
    }(window, window.lib || (window.lib = {})), "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function (e, t) {
        function n() {
            var e = {}, t = new f(function (t, n) {
                e.resolve = t, e.reject = n
            });
            return e.promise = t, e
        }

        function i(e, t) {
            for (var n in t)void 0 === e[n] && (e[n] = t[n]);
            return e
        }

        function r(e) {
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document).appendChild(e)
        }

        function o(e) {
            var t = [];
            for (var n in e)e[n] && t.push(n + "=" + encodeURIComponent(e[n]));
            return t.join("&")
        }

        function a(e) {
            return e.substring(e.lastIndexOf(".", e.lastIndexOf(".") - 1) + 1)
        }

        function s(e) {
            function t(e, t) {
                return e << t | e >>> 32 - t
            }

            function n(e, t) {
                var n, i, r, o, a;
                return r = 2147483648 & e, o = 2147483648 & t, n = 1073741824 & e, i = 1073741824 & t, a = (1073741823 & e) + (1073741823 & t), n & i ? 2147483648 ^ a ^ r ^ o : n | i ? 1073741824 & a ? 3221225472 ^ a ^ r ^ o : 1073741824 ^ a ^ r ^ o : a ^ r ^ o
            }

            function i(e, t, n) {
                return e & t | ~e & n
            }

            function r(e, t, n) {
                return e & n | t & ~n
            }

            function o(e, t, n) {
                return e ^ t ^ n
            }

            function a(e, t, n) {
                return t ^ (e | ~n)
            }

            function s(e, r, o, a, s, l, c) {
                return e = n(e, n(n(i(r, o, a), s), c)), n(t(e, l), r)
            }

            function l(e, i, o, a, s, l, c) {
                return e = n(e, n(n(r(i, o, a), s), c)), n(t(e, l), i)
            }

            function c(e, i, r, a, s, l, c) {
                return e = n(e, n(n(o(i, r, a), s), c)), n(t(e, l), i)
            }

            function u(e, i, r, o, s, l, c) {
                return e = n(e, n(n(a(i, r, o), s), c)), n(t(e, l), i)
            }

            function d(e) {
                var t, n, i = "", r = "";
                for (n = 0; 3 >= n; n++)t = e >>> 8 * n & 255, r = "0" + t.toString(16), i += r.substr(r.length - 2, 2);
                return i
            }

            var h, f, p, m, g, A, w, v, b, y = [];
            for (e = function (e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n);
                    128 > i ? t += String.fromCharCode(i) : i > 127 && 2048 > i ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
                }
                return t
            }(e), y = function (e) {
                for (var t, n = e.length, i = n + 8, r = (i - i % 64) / 64, o = 16 * (r + 1), a = new Array(o - 1), s = 0, l = 0; n > l;)t = (l - l % 4) / 4, s = l % 4 * 8, a[t] = a[t] | e.charCodeAt(l) << s, l++;
                return t = (l - l % 4) / 4, s = l % 4 * 8, a[t] = a[t] | 128 << s, a[o - 2] = n << 3, a[o - 1] = n >>> 29, a
            }(e), A = 1732584193, w = 4023233417, v = 2562383102, b = 271733878, h = 0; h < y.length; h += 16)f = A, p = w, m = v, g = b, A = s(A, w, v, b, y[h + 0], 7, 3614090360), b = s(b, A, w, v, y[h + 1], 12, 3905402710), v = s(v, b, A, w, y[h + 2], 17, 606105819), w = s(w, v, b, A, y[h + 3], 22, 3250441966), A = s(A, w, v, b, y[h + 4], 7, 4118548399), b = s(b, A, w, v, y[h + 5], 12, 1200080426), v = s(v, b, A, w, y[h + 6], 17, 2821735955), w = s(w, v, b, A, y[h + 7], 22, 4249261313), A = s(A, w, v, b, y[h + 8], 7, 1770035416), b = s(b, A, w, v, y[h + 9], 12, 2336552879), v = s(v, b, A, w, y[h + 10], 17, 4294925233), w = s(w, v, b, A, y[h + 11], 22, 2304563134), A = s(A, w, v, b, y[h + 12], 7, 1804603682), b = s(b, A, w, v, y[h + 13], 12, 4254626195), v = s(v, b, A, w, y[h + 14], 17, 2792965006), w = s(w, v, b, A, y[h + 15], 22, 1236535329), A = l(A, w, v, b, y[h + 1], 5, 4129170786), b = l(b, A, w, v, y[h + 6], 9, 3225465664), v = l(v, b, A, w, y[h + 11], 14, 643717713), w = l(w, v, b, A, y[h + 0], 20, 3921069994), A = l(A, w, v, b, y[h + 5], 5, 3593408605), b = l(b, A, w, v, y[h + 10], 9, 38016083), v = l(v, b, A, w, y[h + 15], 14, 3634488961), w = l(w, v, b, A, y[h + 4], 20, 3889429448), A = l(A, w, v, b, y[h + 9], 5, 568446438), b = l(b, A, w, v, y[h + 14], 9, 3275163606), v = l(v, b, A, w, y[h + 3], 14, 4107603335), w = l(w, v, b, A, y[h + 8], 20, 1163531501), A = l(A, w, v, b, y[h + 13], 5, 2850285829), b = l(b, A, w, v, y[h + 2], 9, 4243563512), v = l(v, b, A, w, y[h + 7], 14, 1735328473), w = l(w, v, b, A, y[h + 12], 20, 2368359562), A = c(A, w, v, b, y[h + 5], 4, 4294588738), b = c(b, A, w, v, y[h + 8], 11, 2272392833), v = c(v, b, A, w, y[h + 11], 16, 1839030562), w = c(w, v, b, A, y[h + 14], 23, 4259657740), A = c(A, w, v, b, y[h + 1], 4, 2763975236), b = c(b, A, w, v, y[h + 4], 11, 1272893353), v = c(v, b, A, w, y[h + 7], 16, 4139469664), w = c(w, v, b, A, y[h + 10], 23, 3200236656), A = c(A, w, v, b, y[h + 13], 4, 681279174), b = c(b, A, w, v, y[h + 0], 11, 3936430074), v = c(v, b, A, w, y[h + 3], 16, 3572445317), w = c(w, v, b, A, y[h + 6], 23, 76029189), A = c(A, w, v, b, y[h + 9], 4, 3654602809), b = c(b, A, w, v, y[h + 12], 11, 3873151461), v = c(v, b, A, w, y[h + 15], 16, 530742520), w = c(w, v, b, A, y[h + 2], 23, 3299628645), A = u(A, w, v, b, y[h + 0], 6, 4096336452), b = u(b, A, w, v, y[h + 7], 10, 1126891415), v = u(v, b, A, w, y[h + 14], 15, 2878612391), w = u(w, v, b, A, y[h + 5], 21, 4237533241), A = u(A, w, v, b, y[h + 12], 6, 1700485571), b = u(b, A, w, v, y[h + 3], 10, 2399980690), v = u(v, b, A, w, y[h + 10], 15, 4293915773), w = u(w, v, b, A, y[h + 1], 21, 2240044497), A = u(A, w, v, b, y[h + 8], 6, 1873313359), b = u(b, A, w, v, y[h + 15], 10, 4264355552), v = u(v, b, A, w, y[h + 6], 15, 2734768916), w = u(w, v, b, A, y[h + 13], 21, 1309151649), A = u(A, w, v, b, y[h + 4], 6, 4149444226), b = u(b, A, w, v, y[h + 11], 10, 3174756917), v = u(v, b, A, w, y[h + 2], 15, 718787259), w = u(w, v, b, A, y[h + 9], 21, 3951481745), A = n(A, f), w = n(w, p), v = n(v, m), b = n(b, g);
            return (d(A) + d(w) + d(v) + d(b)).toLowerCase()
        }

        function l(e) {
            return "[object Object]" == {}.toString.call(e)
        }

        function c(e, t, n) {
            var i = n || {};
            document.cookie = e.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + t.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (i.domain ? ";domain=" + i.domain : "") + (i.path ? ";path=" + i.path : "") + (i.secure ? ";secure" : "") + (i.httponly ? ";HttpOnly" : "")
        }

        function u(e) {
            var t = new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
            return t ? t[1] : void 0
        }

        function d(e, t, n) {
            var i = new Date;
            i.setTime(i.getTime() - 864e5);
            document.cookie = e + "=;path=/;domain=." + t + ";expires=" + i.toGMTString(), document.cookie = e + "=;path=/;domain=." + n + "." + t + ";expires=" + i.toGMTString()
        }

        function h(e) {
            this.id = ++v, this.params = i(e || {}, {
                v: "*",
                data: {},
                type: "get",
                dataType: "jsonp"
            }), this.params.type = this.params.type.toLowerCase(), "object" == typeof this.params.data && (this.params.data = JSON.stringify(this.params.data)), this.middlewares = g.slice(0)
        }

        var f = e.Promise, p = (f || {
            resolve: function () {
            }
        }).resolve();
        String.prototype.trim || (String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        });
        var m = {useJsonpResultType: !1, safariGoLogin: !0, useAlipayJSBridge: !1}, g = [],
            A = {ERROR: -1, SUCCESS: 0, TOKEN_EXPIRED: 1, SESSION_EXPIRED: 2};
        (function () {
            var t = e.location.hostname;
            if (!t) {
                var n = e.parent.location.hostname;
                n && ~n.indexOf("zebra.alibaba-inc.com") && (t = n)
            }
            var i = ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "alibaba-inc.com"],
                r = new RegExp("([^.]*?)\\.?((?:" + i.join(")|(?:").replace(/\./g, "\\.") + "))", "i"),
                o = t.match(r) || [], a = o[2] || "taobao.com", s = o[1] || "m";
            "taobao.net" !== a || "x" !== s && "waptest" !== s && "daily" !== s ? "taobao.net" === a && "demo" === s ? s = "demo" : "alibaba-inc.com" === a && "zebra" === s ? s = "zebra" : "waptest" !== s && "wapa" !== s && "m" !== s && (s = "m") : s = "waptest";
            m.mainDomain = a, m.subDomain = s, m.prefix = "h5api"
        })(), function () {
            var t = e.navigator.userAgent, n = t.match(/WindVane[\/\s]([\d\.\_]+)/);
            n && (m.WindVaneVersion = n[1]);
            var i = t.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
            i && (m.AliAppName = i[1], m.AliAppVersion = i[2])
        }();
        var w = "AP" === m.AliAppName && parseFloat(m.AliAppVersion) >= 10.1, v = 0;
        h.prototype.use = function (e) {
            if (!e)throw new Error("middleware is undefined");
            return this.middlewares.push(e), this
        }, h.prototype.__processRequestMethod = function (e) {
            var t = this.params, n = this.options;
            "get" === t.type && "jsonp" === t.dataType ? n.getJSONP = !0 : "get" === t.type && "originaljsonp" === t.dataType ? n.getOriginalJSONP = !0 : "get" === t.type && "json" === t.dataType ? n.getJSON = !0 : "post" === t.type && (n.postJSON = !0), e()
        }, h.prototype.__processRequestType = function (n) {
            var i = this, r = this.params, o = this.options;
            if (!0 === m.H5Request && (o.H5Request = !0), !0 === m.WindVaneRequest && (o.WindVaneRequest = !0), !1 === o.H5Request && !0 === o.WindVaneRequest) {
                if (!w && (!t.windvane || parseFloat(o.WindVaneVersion) < 5.4))throw new Error("WINDVANE_NOT_FOUND::ç¼ºå°‘WindVaneçŽ¯å¢ƒ");
                if (w && !e.AlipayJSBridge)throw new Error("ALIPAY_NOT_READY::æ”¯ä»˜å®é€šé“æœªå‡†å¤‡å¥½ï¼Œæ”¯ä»˜å®è¯·è§ https://lark.alipay.com/mtbsdkdocs/mtopjssdkdocs/pucq6z")
            } else if (!0 === o.H5Request) o.WindVaneRequest = !1; else if (void 0 === o.WindVaneRequest && void 0 === o.H5Request && (t.windvane && parseFloat(o.WindVaneVersion) >= 5.4 ? o.WindVaneRequest = !0 : o.H5Request = !0, w))if (o.WindVaneRequest = o.H5Request = void 0, e.AlipayJSBridge)if (l(r.data)) o.WindVaneRequest = !0; else try {
                l(JSON.parse(r.data)) ? o.WindVaneRequest = !0 : o.H5Request = !0
            } catch (e) {
                o.H5Request = !0
            } else o.H5Request = !0;
            var a = e.navigator.userAgent.toLowerCase();
            return a.indexOf("youku") > -1 && o.mainDomain.indexOf("youku.com") < 0 && (o.WindVaneRequest = !1, o.H5Request = !0), o.mainDomain.indexOf("youku.com") > -1 && a.indexOf("youku") < 0 && (o.WindVaneRequest = !1, o.H5Request = !0), n ? n().then(function () {
                var e = o.retJson.ret;
                if (e instanceof Array && (e = e.join(",")),
                    !0 === o.WindVaneRequest && w && o.retJson.error || !e || e.indexOf("PARAM_PARSE_ERROR") > -1 || e.indexOf("HY_FAILED") > -1 || e.indexOf("HY_NO_HANDLER") > -1 || e.indexOf("HY_CLOSED") > -1 || e.indexOf("HY_EXCEPTION") > -1 || e.indexOf("HY_NO_PERMISSION") > -1) {
                    if (!w || !(isNaN(o.retJson.error) || e.indexOf("FAIL_SYS_ACCESS_DENIED") > -1))return w && l(r.data) && (r.data = JSON.stringify(r.data)), m.H5Request = !0, i.__sequence([i.__processRequestType, i.__processToken, i.__processRequestUrl, i.middlewares, i.__processRequest]);
                    void 0 === o.retJson.api && void 0 === o.retJson.v && (o.retJson.api = r.api, o.retJson.v = r.v, o.retJson.ret = [o.retJson.error + "::" + o.retJson.errorMessage], o.retJson.data = {})
                }
            }) : void 0
        };
        var b = "_m_h5_c", y = "_m_h5_tk";
        h.prototype.__getTokenFromAlipay = function () {
            var t = n(), i = this.options, r = (e.navigator.userAgent, !!location.protocol.match(/^https?\:$/));
            return !0 === i.useAlipayJSBridge && !r && w && e.AlipayJSBridge && e.AlipayJSBridge.call ? e.AlipayJSBridge.call("getMtopToken", function (e) {
                e && e.token && (i.token = e.token), t.resolve()
            }, function () {
                t.resolve()
            }) : t.resolve(), t.promise
        }, h.prototype.__getTokenFromCookie = function () {
            // alert('__getTokenFromCookie');

            var e = this.options;


            e.CDR && u(b) ? e.token = u(b).split(";")[0] : e.token = e.token || u(y),
            e.token && (e.token = e.token.split("_")[0]);
            console.log('GET TOKEN', u(b), u(y), e.token.split("_"))
            return f.resolve()
        }, h.prototype.__waitWKWebViewCookie = function (t) {
            // alert('__waitWKWebViewCookie');
            var n = this.options;
            n.waitWKWebViewCookieFn && n.H5Request && e.webkit &&
            e.webkit.messageHandlers ? n.waitWKWebViewCookieFn(t) : t()
        }, h.prototype.__processToken = function (e) {

            var t = this, n = this.options;
            return this.params, n.token && delete n.token, !0 !== n.WindVaneRequest ? p.then(function () {
                return t.__getTokenFromAlipay()
            }).then(function () {
                return t.__getTokenFromCookie()
            }).then(e).then(function () {

                var e = n.retJson, i = e.ret;
                console.log(i, 'iiiiiiiiiiiiiiiiiiiiiiiii')
                if (i instanceof Array && (i = i.join(",")),
                    i.indexOf("TOKEN_EMPTY") > -1 || !0 === n.CDR && i.indexOf("ILLEGAL_ACCESS") > -1 ||
                    i.indexOf("TOKEN_EXOIRED") > -1) {
                    console.log('token 是空的')
                    if (n.maxRetryTimes = n.maxRetryTimes || 5, n.failTimes = n.failTimes || 0, n.H5Request && ++n.failTimes < n.maxRetryTimes) {
                        console.log("超过retry time")
                        return t.__sequence([t.__waitWKWebViewCookie, t.__processToken, t.__processRequestUrl, t.middlewares, t.__processRequest]);
                    }
                    if (n.maxRetryTimes > 0) {
                        d(b, n.pageDomain, "*"), d(y, n.mainDomain, n.subDomain),
                            d("_m_h5_tk_enc", n.mainDomain, n.subDomain)
                    }
                    ;
                    e.retType = A.TOKEN_EXPIRED
                    console.log("token", e.retType);
                }
            }) : void e()
        }, h.prototype.__processRequestUrl = function (t) {
            var n = this.params, i = this.options;
            if (i.hostSetting && i.hostSetting[e.location.hostname]) {
                var r = i.hostSetting[e.location.hostname];
                r.prefix && (i.prefix = r.prefix), r.subDomain && (i.subDomain = r.subDomain), r.mainDomain && (i.mainDomain = r.mainDomain)
            }
            if (!0 === i.H5Request) {
                var o = "//" + (i.prefix ? i.prefix + "." : "") + (i.subDomain ? i.subDomain + "." : "") + i.mainDomain + "/h5/" + n.api.toLowerCase() + "/" + n.v.toLowerCase() + "/",
                    a = n.appKey || ("waptest" === i.subDomain ? "4272" : "12574478"), l = (new Date).getTime(),
                    c = s(i.token + "&" + l + "&" + a + "&" + n.data);
                console.log('计算sign :', i.token, l, a, JSON.stringify(n.data))

                var u = {jsv: "2.4.9", appKey: a, t: l, sign: c},
                    d = {data: n.data, ua: n.ua};
                Object.keys(n).forEach(function (e) {
                    void 0 === u[e] && void 0 === d[e] && (u[e] = n[e])
                }), i.getJSONP ? u.type = "jsonp" : i.getOriginalJSONP ? u.type = "originaljsonp" : (i.getJSON || i.postJSON) && (u.type = "originaljson"), void 0 !== n.valueType && ("original" === n.valueType ? i.getJSONP || i.getOriginalJSONP ? u.type = "originaljsonp" : (i.getJSON || i.postJSON) && (u.type = "originaljson") : "string" === n.valueType && (i.getJSONP || i.getOriginalJSONP ? u.type = "jsonp" : (i.getJSON || i.postJSON) && (u.type = "json"))), !0 === i.useJsonpResultType && "originaljson" === u.type && delete u.type, i.dangerouslySetProtocol && (o = i.dangerouslySetProtocol + ":" + o), i.querystring = u, i.postdata = d, i.path = o
            }
            t()
        }, h.prototype.__processUnitPrefix = function (e) {
            e()
        };
        var x = 0;
        h.prototype.__requestJSONP = function (e) {
            function t(e) {
                if (u && clearTimeout(u), d.parentNode && d.parentNode.removeChild(d), "TIMEOUT" === e) window[c] = function () {
                    window[c] = void 0;
                    try {
                        delete window[c]
                    } catch (e) {
                    }
                }; else {
                    window[c] = void 0;
                    try {
                        delete window[c]
                    } catch (e) {
                    }
                }
            }

            var i = n(), a = this.params, s = this.options, l = a.timeout || 2e4,
                c = "mtopjsonp" + (a.jsonpIncPrefix || "") + ++x, u = setTimeout(function () {
                    e(s.timeoutErrMsg || "TIMEOUT::æŽ¥å£è¶…æ—¶"), t("TIMEOUT")
                }, l);
            s.querystring.callback = c;
            var d = document.createElement("script");
            return d.src = s.path + "?" + o(s.querystring) + "&" + o(s.postdata), d.async = !0, d.onerror = function () {
                t("ABORT"), e(s.abortErrMsg || "ABORT::æŽ¥å£å¼‚å¸¸é€€å‡º")
            }, window[c] = function () {
                s.results = Array.prototype.slice.call(arguments), t(), i.resolve()
            }, r(d), i.promise
        }, h.prototype.__requestJSON = function (t) {
            function i(e) {
                d && clearTimeout(d), "TIMEOUT" === e && l.abort()
            }

            var r = n(), a = this.params, s = this.options, l = new e.XMLHttpRequest, c = a.timeout || 2e4,
                d = setTimeout(function () {
                    t(s.timeoutErrMsg || "TIMEOUT::æŽ¥å£è¶…æ—¶"), i("TIMEOUT")
                }, c);
            s.CDR && u(b) && (s.querystring.c = decodeURIComponent(u(b))), l.onreadystatechange = function () {
                if (4 == l.readyState) {
                    var e, n, o = l.status;
                    if (o >= 200 && 300 > o || 304 == o) {
                        i(), e = l.responseText, n = l.getAllResponseHeaders() || "";
                        try {
                            e = /^\s*$/.test(e) ? {} : JSON.parse(e), e.responseHeaders = n, s.results = [e], r.resolve()
                        } catch (e) {
                            t("PARSE_JSON_ERROR::è§£æžJSONå¤±è´¥")
                        }
                    } else i("ABORT"), t(s.abortErrMsg || "ABORT::æŽ¥å£å¼‚å¸¸é€€å‡º")
                }
            };
            var h, f, p = s.path + "?" + o(s.querystring);
            if (s.getJSON ? (h = "GET", p += "&" + o(s.postdata)) : s.postJSON && (h = "POST", f = o(s.postdata)), l.open(h, p, !0), l.withCredentials = !0, l.setRequestHeader("Accept", "application/json"), l.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.headers)for (var m in a.headers)l.setRequestHeader(m, a.headers[m]);
            return l.send(f), r.promise
        }, h.prototype.__requestWindVane = function (e) {
            function i(e) {
                a.results = [e], r.resolve()
            }

            var r = n(), o = this.params, a = this.options, s = o.data, l = o.api, c = o.v, u = a.postJSON ? 1 : 0,
                d = a.getJSON || a.postJSON || a.getOriginalJSONP ? "originaljson" : "";
            void 0 !== o.valueType && ("original" === o.valueType ? d = "originaljson" : "string" === o.valueType && (d = "")), !0 === a.useJsonpResultType && (d = "");
            var h, f, p = "https" === location.protocol ? 1 : 0, m = o.isSec || 0,
                g = o.sessionOption || "AutoLoginOnly", A = o.ecode || 0;
            f = void 0 !== o.timer ? parseInt(o.timer) : void 0 !== o.timeout ? parseInt(o.timeout) : 2e4, h = 2 * f, !0 === o.needLogin && void 0 === o.sessionOption && (g = "AutoLoginAndManualLogin"), void 0 !== o.secType && void 0 === o.isSec && (m = o.secType);
            var w = {
                api: l,
                v: c,
                post: String(u),
                type: d,
                isHttps: String(p),
                ecode: String(A),
                isSec: String(m),
                param: JSON.parse(s),
                timer: f,
                sessionOption: g,
                ext_headers: {referer: location.href}
            };
            return o.ttid && !0 === a.dangerouslySetWVTtid && (w.ttid = o.ttid), t.windvane.call("MtopWVPlugin", "send", w, i, i, h), r.promise
        }, h.prototype.__requestAlipay = function (t) {
            function i(e) {
                a.results = [e], r.resolve()
            }

            var r = n(), o = this.params, a = this.options,
                s = {apiName: o.api, apiVersion: o.v, needEcodeSign: !!o.ecode, usePost: !!a.postJSON};
            return l(o.data) || (o.data = JSON.parse(o.data)), s.data = o.data, o.ttid && !0 === a.dangerouslySetWVTtid && (s.ttid = o.ttid), (a.getJSON || a.postJSON || a.getOriginalJSONP) && (s.type = "originaljson"), void 0 !== o.valueType && ("original" === o.valueType ? s.type = "originaljson" : "string" === o.valueType && delete s.type), !0 === a.useJsonpResultType && delete s.type, e.AlipayJSBridge.call("mtop", s, i), r.promise
        }, h.prototype.__processRequest = function (e, t) {
            var n = this;
            return p.then(function () {
                var e = n.options;
                if (e.H5Request && (e.getJSONP || e.getOriginalJSONP))return n.__requestJSONP(t);
                if (e.H5Request && (e.getJSON || e.postJSON))return n.__requestJSON(t);
                if (e.WindVaneRequest)return w ? n.__requestAlipay(t) : n.__requestWindVane(t);
                throw new Error("UNEXCEPT_REQUEST::é”™è¯¯çš„è¯·æ±‚ç±»åž‹")
            }).then(e).then(function () {
                var e = n.options, t = (n.params, e.results[0]), i = t && t.ret || [];
                t.ret = i, i instanceof Array && (i = i.join(","));
                var r = t.c;
                e.CDR && r && c(b, r, {
                    domain: e.pageDomain,
                    path: "/"
                }), i.indexOf("SUCCESS") > -1 ? t.retType = A.SUCCESS : t.retType = A.ERROR, e.retJson = t
            })
        }, h.prototype.__sequence = function (e) {
            function t(e) {
                if (e instanceof Array) e.forEach(t); else {
                    var a, s = n(), l = n();
                    r.push(function () {
                        return s = n(), a = e.call(i, function (e) {
                            return s.resolve(e), l.promise
                        }, function (e) {
                            return s.reject(e), l.promise
                        }), a && (a = a.catch(function (e) {
                            s.reject(e)
                        })), s.promise
                    }), o.push(function (e) {
                        return l.resolve(e), a
                    })
                }
            }

            var i = this, r = [], o = [];
            e.forEach(t);
            for (var a, s = p; a = r.shift();)s = s.then(a);
            for (; a = o.pop();)s = s.then(a);
            return s
        };
        var _ = function (e) {
            e()
        }, C = function (e) {
            e()
        };
        h.prototype.request = function (n) {
            var r = this;
            if (this.options = i(n || {}, m), !f) {
                var o = "å½“å‰æµè§ˆå™¨ä¸æ”¯æŒPromiseï¼Œè¯·åœ¨windowså¯¹è±¡ä¸ŠæŒ‚è½½Promiseå¯¹è±¡å¯å‚è€ƒï¼ˆhttp://gitlab.alibaba-inc.com/mtb/lib-es6polyfill/tree/masterï¼‰ä¸­çš„è§£å†³æ–¹æ¡ˆ";
                throw t.mtop = {ERROR: o}, new Error(o)
            }
            var s = f.resolve([_, C]).then(function (e) {
                var t = e[0], n = e[1];
                return r.__sequence([t, r.__processRequestMethod, r.__processRequestType, r.__processToken, r.__processRequestUrl, r.middlewares, r.__processRequest, n])
            }).then(function () {
                var e = r.options.retJson;
                return e.retType !== A.SUCCESS ? f.reject(e) : r.options.successCallback ? void r.options.successCallback(e) : f.resolve(e)
            }).catch(function (e) {
                var t;
                return e instanceof Error ? (console.error(e.stack), t = {
                    ret: [e.message],
                    stack: [e.stack],
                    retJson: A.ERROR
                }) : t = "string" == typeof e ? {
                    ret: [e],
                    retJson: A.ERROR
                } : void 0 !== e ? e : r.options.retJson, r.options.failureCallback ? void r.options.failureCallback(t) : f.reject(t)
            });
            return this.__processRequestType(), r.options.H5Request && (r.constructor.__firstProcessor || (r.constructor.__firstProcessor = s), _ = function (e) {
                r.constructor.__firstProcessor.then(e).catch(e)
            }), ("get" === this.params.type && "json" === this.params.dataType || "post" === this.params.type) && (n.pageDomain = n.pageDomain || a(e.location.hostname), n.mainDomain !== n.pageDomain && (n.maxRetryTimes = 4,
                n.CDR = !0)), s
        }, t.mtop = function (e) {
            return new h(e)
        }, t.mtop.request = function (e, t, n) {
            var i = {
                H5Request: e.H5Request,
                WindVaneRequest: e.WindVaneRequest,
                LoginRequest: e.LoginRequest,
                AntiCreep: e.AntiCreep,
                AntiFlood: e.AntiFlood,
                successCallback: t,
                failureCallback: n || t
            };
            return new h(e).request(i)
        }, t.mtop.H5Request = function (e, t, n) {
            var i = {H5Request: !0, successCallback: t, failureCallback: n || t};
            return new h(e).request(i)
        }, t.mtop.middlewares = g, t.mtop.config = m, t.mtop.RESPONSE_TYPE = A, t.mtop.CLASS = h
    }(window, window.lib || (window.lib = {})), function (e, t) {
        function n(e) {
            return e.preventDefault(), !1
        }

        function i(e) {
            var t = new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
            return t ? t[1] : void 0
        }

        function r(t, i) {
            var r = this, o = e.dpr || 1, a = document.createElement("div"),
                s = document.documentElement.getBoundingClientRect(), l = Math.max(s.width, window.innerWidth) / o,
                c = Math.max(s.height, window.innerHeight) / o;
            a.style.cssText = ["-webkit-transform:scale(" + o + ") translateZ(0)", "-ms-transform:scale(" + o + ") translateZ(0)", "transform:scale(" + o + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + l + "px", "height:" + c + "px", "z-index:999999", "position:" + (l > 800 ? "fixed" : "absolute"), "left:0", "top:0px", "background:" + (l > 800 ? "rgba(0,0,0,.5)" : "#FFF"), "display:none"].join(";");
            var u = document.createElement("div");
            u.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), u.innerText = t;
            var d = document.createElement("a");
            d.style.cssText = ["display:block", "position:absolute", "right:0", "top:0", "height:52px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"), d.innerText = "å…³é—­";
            var h = document.createElement("iframe");
            h.style.cssText = ["width:100%", "height:100%", "border:0", "overflow:hidden"].join(";"), l > 800 && (u.style.cssText = ["width:370px", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:" + (l / 2 - 185) + "px", "top:40px", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), h.style.cssText = ["position:absolute", "top:92px", "left:" + (l / 2 - 185) + "px", "width:370px", "height:480px", "border:0", "background:#FFF", "overflow:hidden"].join(";")), u.appendChild(d), a.appendChild(u), a.appendChild(h), a.className = "J_MIDDLEWARE_FRAME_WIDGET", document.body.appendChild(a), h.src = i, d.addEventListener("click", function () {
                r.hide();
                var e = document.createEvent("HTMLEvents");
                e.initEvent("close", !1, !1), a.dispatchEvent(e)
            }, !1), this.addEventListener = function () {
                a.addEventListener.apply(a, arguments)
            }, this.removeEventListener = function () {
                a.removeEventListener.apply(a, arguments)
            }, this.show = function () {
                document.addEventListener("touchmove", n, !1), a.style.display = "block", window.scrollTo(0, 0)
            }, this.hide = function () {
                document.removeEventListener("touchmove", n), window.scrollTo(0, -s.top), a.parentNode && a.parentNode.removeChild(a)
            }
        }

        function o(e) {
            var n = this, i = this.options, r = this.params;
            return e().then(function () {
                var e = i.retJson, o = e.ret, a = navigator.userAgent.toLowerCase(),
                    s = a.indexOf("safari") > -1 && a.indexOf("chrome") < 0 && a.indexOf("qqbrowser") < 0;
                if (o instanceof Array && (o = o.join(",")), (o.indexOf("SESSION_EXPIRED") > -1 || o.indexOf("SID_INVALID") > -1 || o.indexOf("AUTH_REJECT") > -1 || o.indexOf("NEED_LOGIN") > -1) && (e.retType = d.SESSION_EXPIRED, !i.WindVaneRequest && (!0 === u.LoginRequest || !0 === i.LoginRequest || !0 === r.needLogin))) {
                    if (!t.login)throw new Error("LOGIN_NOT_FOUND::ç¼ºå°‘lib.login");
                    if (!0 !== i.safariGoLogin || !s || "taobao.com" === i.pageDomain)return t.login.goLoginAsync().then(function (e) {
                        return n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest])
                    }).catch(function (e) {
                        throw"CANCEL" === e ? new Error("LOGIN_CANCEL::ç”¨æˆ·å–æ¶ˆç™»å½•") : new Error("LOGIN_FAILURE::ç”¨æˆ·ç™»å½•å¤±è´¥")
                    });
                    t.login.goLogin()
                }
            })
        }

        function a(e) {
            var t = this.options;
            return this.params, !0 !== t.H5Request || !0 !== u.AntiFlood && !0 !== t.AntiFlood ? void e() : e().then(function () {
                var e = t.retJson, n = e.ret;
                n instanceof Array && (n = n.join(",")), n.indexOf("FAIL_SYS_USER_VALIDATE") > -1 && e.data.url && (t.AntiFloodReferer ? location.href = e.data.url.replace(/(http_referer=).+/, "$1" + t.AntiFloodReferer) : location.href = e.data.url)
            })
        }

        function s(t) {
            var n = this, o = this.options, a = this.params;
            return !0 !== a.forceAntiCreep && !0 !== o.H5Request || !0 !== u.AntiCreep && !0 !== o.AntiCreep ? void t() : t().then(function () {
                var t = o.retJson, s = t.ret;
                if (s instanceof Array && (s = s.join(",")), s.indexOf("RGV587_ERROR::SM") > -1 && t.data.url) {
                    var c = "_m_h5_smt", u = i(c), d = !1;
                    if (!0 === o.saveAntiCreepToken && u) {
                        u = JSON.parse(u);
                        for (var h in u)a[h] && (d = !0)
                    }
                    if (!0 === o.saveAntiCreepToken && u && !d) {
                        for (var h in u)a[h] = u[h];
                        return n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest])
                    }
                    return new l(function (i, s) {
                        function l() {
                            h.removeEventListener("close", l), e.removeEventListener("message", u), s("USER_INPUT_CANCEL::ç”¨æˆ·å–æ¶ˆè¾“å…¥")
                        }

                        function u(t) {
                            var r;
                            try {
                                r = JSON.parse(t.data) || {}
                            } catch (e) {
                            }
                            if (r && "child" === r.type) {
                                h.removeEventListener("close", l), e.removeEventListener("message", u), h.hide();
                                var d;
                                try {
                                    "string" == typeof(d = JSON.parse(decodeURIComponent(r.content))) && (d = JSON.parse(d));
                                    for (var f in d)a[f] = d[f];
                                    !0 === o.saveAntiCreepToken ? (document.cookie = c + "=" + JSON.stringify(d) + ";", e.location.reload()) : n.__sequence([n.__processToken, n.__processRequestUrl, n.__processUnitPrefix, n.middlewares, n.__processRequest]).then(i)
                                } catch (e) {
                                    s("USER_INPUT_FAILURE::ç”¨æˆ·è¾“å…¥å¤±è´¥")
                                }
                            }
                        }

                        var d = t.data.url, h = new r("", d);
                        h.addEventListener("close", l, !1), e.addEventListener("message", u, !1), h.show()
                    })
                }
            })
        }

        if (!t || !t.mtop || t.mtop.ERROR)throw new Error("Mtop åˆå§‹åŒ–å¤±è´¥ï¼è¯·å‚è€ƒMtopæ–‡æ¡£http://gitlab.alibaba-inc.com/mtb/lib-mtop");
        var l = e.Promise, c = t.mtop.CLASS, u = t.mtop.config, d = t.mtop.RESPONSE_TYPE;
        t.mtop.middlewares.push(o), t.mtop.loginRequest = function (e, t, n) {
            var i = {LoginRequest: !0, H5Request: !0, successCallback: t, failureCallback: n || t};
            return new c(e).request(i)
        }, t.mtop.antiFloodRequest = function (e, t, n) {
            var i = {AntiFlood: !0, successCallback: t, failureCallback: n || t};
            return new c(e).request(i)
        }, t.mtop.middlewares.push(a), t.mtop.antiCreepRequest = function (e, t, n) {
            var i = {AntiCreep: !0, successCallback: t, failureCallback: n || t};
            return new c(e).request(i)
        }, t.mtop.middlewares.push(s)
    }(window, window.lib || (window.lib = {})), "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function (e, t, n) {
        function i(e) {
            var t = new RegExp("(?:^|;\\s*)" + e + "\\=([^;]+)(?:;\\s*|$)").exec(y.cookie);
            return t ? t[1] : n
        }

        function r(e) {
            return e.preventDefault(), !1
        }

        function o(t, n) {
            var i = this, o = e.dpr || 1, a = document.createElement("div"),
                s = document.documentElement.getBoundingClientRect(), l = Math.max(s.width, window.innerWidth) / o,
                c = Math.max(s.height, window.innerHeight) / o;
            a.style.cssText = ["-webkit-transform:scale(" + o + ") translateZ(0)", "-ms-transform:scale(" + o + ") translateZ(0)", "transform:scale(" + o + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + l + "px", "height:" + c + "px", "z-index:999999", "position:absolute", "left:0", "top:0px", "background:#FFF", "display:none"].join(";");
            var u = document.createElement("div");
            u.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), u.innerText = t;
            var d = document.createElement("a");
            d.style.cssText = ["display:block", "position:absolute", "right:0", "top:0", "height:52px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"), d.innerText = "å…³é—­";
            var h = document.createElement("iframe");
            h.style.cssText = ["width:100%", "height:" + window.innerHeight / o + "px", "border:0", "overflow:hidden"].join(";"), u.appendChild(d), a.appendChild(u), a.appendChild(h), y.body.appendChild(a), h.src = n, d.addEventListener("click", function () {
                i.hide();
                var e = y.createEvent("HTMLEvents");
                e.initEvent("close", !1, !1), a.dispatchEvent(e)
            }, !1), this.addEventListener = function () {
                a.addEventListener.apply(a, arguments)
            }, this.removeEventListener = function () {
                a.removeEventListener.apply(a, arguments)
            }, this.show = function () {
                document.addEventListener("touchmove", r, !1), a.style.display = "block", window.scrollTo(0, 0)
            }, this.hide = function () {
                document.removeEventListener("touchmove", r), window.scrollTo(0, -s.top), y.body.removeChild(a)
            }
        }

        function a(e) {
            if (!e || "function" != typeof e || !t.mtop) {
                return !!this.getUserNick()
            }
            t.mtop.request({
                api: "mtop.user.getUserSimple",
                v: "1.0",
                data: {},
                ecode: 1,
                sessionOption: "AutoLoginOnly"
            }, function (i) {
                i.retType === t.mtop.RESPONSE_TYPE.SUCCESS ? e(!0, i) : i.retType === t.mtop.RESPONSE_TYPE.SESSION_EXPIRED ? e(!1, i) : e(n, i)
            })
        }

        function s(e) {
            var t;
            return b && (t = {}, t.promise = new b(function (e, n) {
                t.resolve = e, t.reject = n
            })), this.isLogin(function (n, i) {
                e && e(n, i), !0 === n ? t && t.resolve(i) : t && t.reject(i)
            }), t ? t.promise : void 0
        }

        function l(e) {
            if (!e || "function" != typeof e) {
                var t = "", r = i("_w_tb_nick"), o = i("_nk_") || i("snk"), a = i("sn");
                return r && r.length > 0 && "null" != r ? t = decodeURIComponent(r) : o && o.length > 0 && "null" != o ? t = unescape(unescape(o).replace(/\\u/g, "%u")) : a && a.length > 0 && "null" != a && (t = decodeURIComponent(a)), t = t.replace(/\</g, "&lt;").replace(/\>/g, "&gt;")
            }
            this.isLogin(function (t, i) {
                e(!0 === t && i && i.data && i.data.nick ? i.data.nick : !1 === t ? "" : n)
            })
        }

        function c(e) {
            var t;
            return b && (t = {}, t.promise = new b(function (e, n) {
                t.resolve = e, t.reject = n
            })), this.getUserNick(function (n) {
                e && e(n), n ? t && t.resolve(n) : t && t.reject()
            }), t ? t.promise : void 0
        }

        function u(e, n) {
            var i = "//" + N + "." + R.subDomain + "." + O + "/" + R[(e || "login") + "Name"];
            if (n) {
                var r = [];
                for (var o in n)r.push(o + "=" + encodeURIComponent(n[o]));
                i += "?" + r.join("&")
            }
            var a = t.login.config.loginUrlParams;
            if (a) {
                var s = [];
                for (var l in a)s.push(l + "=" + encodeURIComponent(a[l]));
                i += /\?/.test(i) ? "&" + s.join("&") : "?" + r.join("&")
            }
            return i
        }

        function d(e, t) {
            t ? location.replace(e) : location.href = e
        }

        function h(t, n, i) {
            function r() {
                c.removeEventListener("close", r), e.removeEventListener("message", a), i("CANCEL")
            }

            function a(t) {
                var n = t.data || {};
                n && "child" === n.type && n.content.indexOf("SUCCESS") > -1 ? (c.removeEventListener("close", r), e.removeEventListener("message", a), c.hide(), i("SUCCESS")) : i("FAILURE")
            }

            var s = location.protocol + "//h5." + R.subDomain + ".taobao.com/" + ("waptest" === R.subDomain ? "src" : "other") + "/" + t + "end.html?origin=" + encodeURIComponent(location.protocol + "//" + location.hostname),
                l = u(t, {ttid: "h5@iframe", redirectURL: s}),
                c = new o(n.title || "æ‚¨éœ€è¦ç™»å½•æ‰èƒ½ç»§ç»­è®¿é—®", l);
            c.addEventListener("close", r, !1), e.addEventListener("message", a, !1), c.show()
        }

        function f(t, n, i) {
            var r = u(t, {wvLoginCallback: "wvLoginCallback"});
            e.wvLoginCallback = function (t) {
                delete e.wvLoginCallback, i(t.indexOf(":SUCCESS") > -1 ? "SUCCESS" : t.indexOf(":CANCEL") > -1 ? "CANCEL" : "FAILURE")
            }, d(r)
        }

        function p(e, t, n) {
            if ("function" == typeof t ? (n = t, t = null) : "string" == typeof t && (t = {redirectUrl: t}), t = t || {}, n && S) f(e, t, n); else if (n && !E && "login" === e) h(e, t, n); else {
                var i = u(e, {redirectURL: t.redirectUrl || location.href});
                d(i, t.replace)
            }
        }

        function m(e, t, n) {
            var i;
            return b && (i = {}, i.promise = new b(function (e, t) {
                i.resolve = e, i.reject = t
            })), p(e, t, function (e) {
                n && n(e), "SUCCESS" === e ? i && i.resolve(e) : i && i.reject(e)
            }), i ? i.promise : void 0
        }

        function g(e) {
            p("login", e)
        }

        function A(e) {
            return m("login", e)
        }

        function w(e) {
            p("logout", e)
        }

        function v(e) {
            return m("logout", e)
        }

        var b = e.Promise, y = e.document, x = e.navigator.userAgent, _ = location.hostname,
            C = (e.location.search, x.match(/WindVane[\/\s]([\d\.\_]+)/)),
            E = x.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i), S = !!(E && "TB" === E[1] && C && parseFloat(C[1]) > 5.2),
            k = ["taobao.net", "taobao.com"],
            T = new RegExp("([^.]*?)\\.?((?:" + k.join(")|(?:").replace(/\./g, "\\.") + "))", "i"),
            I = _.match(T) || [], O = function () {
                return (I[2] || "taobao.com").match(/\.?taobao\.net$/) ? "taobao.net" : "taobao.com"
            }(), L = function () {
                var e = O, t = I[1] || "m";
                return "taobao.net" === e && (t = "waptest"), "m" != t && "wapa" != t && "waptest" != t && (t = "m"), t
            }(), N = "login";
        t.login = t.login || {};
        var R = {loginName: "login.htm", logoutName: "logout.htm", subDomain: L};
        t.login.config = R, t.login.isLogin = a, t.login.isLoginAsync = s, t.login.getUserNick = l, t.login.getUserNickAsync = c, t.login.generateUrl = u, t.login.goLogin = g, t.login.goLoginAsync = A, t.login.goLogout = w, t.login.goLogoutAsync = v
    }(window, window.lib || (window.lib = {})), "undefined" == typeof window && (window = {
        ctrl: {},
        lib: {}
    }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function (e, t) {
        function n(e) {
            var t = {};
            Object.defineProperty(this, "params", {
                set: function (e) {
                    if ("object" == typeof e) {
                        for (var n in t)delete t[n];
                        for (var n in e)t[n] = e[n]
                    }
                }, get: function () {
                    return t
                }, enumerable: !0
            }), Object.defineProperty(this, "search", {
                set: function (e) {
                    if ("string" == typeof e) {
                        0 === e.indexOf("?") && (e = e.substr(1));
                        var n = e.split("&");
                        for (var i in t)delete t[i];
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r].split("=");
                            if (void 0 !== o[1] && (o[1] = o[1].toString()), o[0])try {
                                t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
                            } catch (e) {
                                t[o[0]] = o[1]
                            }
                        }
                    }
                }, get: function () {
                    var e = [];
                    for (var n in t)if (void 0 !== t[n])if ("" !== t[n])try {
                        e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]))
                    } catch (i) {
                        e.push(n + "=" + t[n])
                    } else try {
                        e.push(encodeURIComponent(n))
                    } catch (t) {
                        e.push(n)
                    }
                    return e.length ? "?" + e.join("&") : ""
                }, enumerable: !0
            });
            var n;
            Object.defineProperty(this, "hash", {
                set: function (e) {
                    "string" == typeof e && (e && e.indexOf("#") < 0 && (e = "#" + e), n = e || "")
                }, get: function () {
                    return n
                }, enumerable: !0
            }), this.set = function (e) {
                e = e || "";
                var t;
                if (!(t = e.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$", "i"))))throw new Error("Wrong uri scheme.");
                this.protocol = t[1] || ("object" == typeof location ? location.protocol : ""), this.username = t[2] || "", this.password = t[3] || "", this.hostname = this.host = t[4], this.port = t[5] || "", this.pathname = t[6] || "/", this.search = t[7] || "", this.hash = t[8] || "", this.origin = this.protocol + "//" + this.hostname
            }, this.toString = function () {
                var e = this.protocol + "//";
                return this.username && (e += this.username, this.password && (e += ":" + this.password), e += "@"), e += this.host, this.port && "80" !== this.port && (e += ":" + this.port), this.pathname && (e += this.pathname), this.search && (e += this.search), this.hash && (e += this.hash), e
            }, e && this.set(e.toString())
        }

        t.httpurl = function (e) {
            return new n(e)
        }
    }(window, window.lib || (window.lib = {}));
    var d, h = (window.lib.httpurl, t(function (e) {
            "undefined" == typeof window && (window = {
                ctrl: {},
                lib: {}
            }), !window.ctrl && (window.ctrl = {}), !window.lib && (window.lib = {}), function () {
                function t(e, t) {
                    for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
                    return e
                }

                function n(e) {
                    var t, n = e.width, i = e.height, r = e.type, o = e.dpr || 2;
                    r = r || l;
                    var a = h.square;
                    if (!(n + "").match(/^\d+$/) || !(i + "").match(/^\d+$/))throw new Error("height or width is not number");
                    switch (t = r == u ? i : n >= i ? n : i, r) {
                        case c:
                            a = h.widths;
                            break;
                        case u:
                            a = h.heights;
                            break;
                        case d:
                            a = h.xzs
                    }
                    var s = a[a.length - 1], p = a[0], m = 0, g = f.baseDpr;
                    if (t = parseInt(o * t / g), s <= t)return s;
                    if (p >= t)return p;
                    for (var A = a.length; A >= 0; A--)if (a[A] <= t) {
                        a[A] == t ? m = t : A < a.length - 1 && (m = a[A + 1]);
                        break
                    }
                    return m
                }

                function i(e) {
                    var t = "", i = "", r = f.q, o = f.sharpen, a = (f.defaultSize, l), s = e.width || f.width,
                        h = e.height || f.height;
                    switch (e && e.type && e.type.match(new RegExp("^(" + [l, c, u, d].join("|") + ")$")) && (a = e.type), t = n({
                        width: s,
                        height: h,
                        type: a
                    }), a) {
                        case l:
                            t = t + "x" + t;
                            break;
                        case c:
                            t += "x10000";
                            break;
                        case u:
                            t = "10000x" + t;
                            break;
                        case d:
                            t = t + "x" + t + "xz"
                    }
                    return i = "_" + t, "original" === r && (r = ""), "original" === o && (o = ""), i += r + o + ".jpg"
                }

                function r(e, r) {
                    var r = r || {};
                    if (t(f, r), !e || "string" != typeof e)return "";
                    f.defaultSize = f.defaultSize || n({height: r.height, width: r.width, dpr: r.dpr});
                    var l = f.defaultSize + "x" + f.defaultSize, c = f.q, u = "_" + l + c + f.sharpen + ".jpg";
                    try {
                        var d = new lib.httpurl(e)
                    } catch (t) {
                        return -1 === e.indexOf("base64,") && console.log("[error]wrong img url:", e), e
                    }
                    var p = d.host, m = d.pathname;
                    if (d.protocol = "", h.filterDomains = h.filterDomains.concat(f.filterDomains), -1 != h.filterDomains.indexOf(p))return /alicdn/.test(p) || (d.protocol = "http:"), d.toString();
                    var g = p.match(/(.+\.(?:alicdn|taobaocdn|taobao|mmcdn)\.com)/) || e.match(a);
                    if (g && g[0] != o) -1 == d.host.indexOf("taobaocdn.net") && (d.host = o); else if (null === g)return d.toString();
                    if (r && r.original)return d.toString();
                    var A = m.match(s), w = m.match(/-(\d+)-(\d+)\.(?:jpg|png|gif)/);
                    if (w) {
                        var v, b;
                        v = parseInt(w[1]) < parseInt(f.defaultSize) ? f.defaultSize : w[1] > 760 ? 760 : w[1], b = n({
                            height: v,
                            width: v,
                            dpr: r.dpr
                        }), u = "_" + b + "x" + b + c + f.sharpen + ".jpg"
                    }
                    return r && "string" == typeof r ? u = i({size: r}) : r && "object" == typeof r && Object.keys(r).length > 0 && (u = i(r)), /\.png/.test(m) && (u = u.replace(/(q\d+)(s\d+)/, "")), /\.gif/.test(m) && r.ignoreGif ? d.toString() : /\.png/.test(m) && r.ignorePng ? d.toString() : (r.webpSupport && (u += "_.webp"), A ? A[1] || A[2] || A[3] || A[4] ? d.pathname = m.replace(s, u) : A[0].match(/_\.(jpg|png|gif|jpef)/) && (d.pathname += u) : m.match(/_\.webp$/g) ? d.pathname = m.replace(/_\.webp$/g, u) : d.pathname = m + u, d.toString())
                }

                lib || (lib = {});
                var o = "gw.alicdn.com",
                    a = /^(?:(?:http|https):)?\/\/(.+\.(?:alicdn|taobaocdn|taobao)\.(?:com|net))(\/.*(?:\.(jpg|png|gif|jpeg|webp))?)$/i,
                    s = /_(\d+x\d+|cy\d+i\d+|sum|m|b)?(xz|xc)?(q\d+)?(s\d+)?(\.jpg)?(_\.webp)?$/i, l = "square",
                    c = "widthFixed", u = "heightFixed", d = "xz", h = {};
                h.widths = [110, 150, 170, 220, 240, 290, 450, 570, 580, 620, 790], h.heights = [170, 220, 340, 500], h.xzs = [72, 80, 88, 90, 100, 110, 120, 145, 160, 170, 180, 200, 230, 270, 290, 310, 360, 430, 460, 580, 640], h.square = [16, 20, 24, 30, 32, 36, 40, 48, 50, 60, 64, 70, 72, 80, 88, 90, 100, 110, 120, 125, 128, 145, 180, 190, 200, 200, 210, 220, 230, 240, 250, 270, 300, 310, 315, 320, 336, 360, 468, 490, 540, 560, 580, 600, 640, 720, 728, 760, 970], h.filterDomains = ["a.tbcdn.cn", "assets.alicdn.com", "wwc.taobaocdn.com", "wwc.alicdn.com", "cbu01.alicdn.com", "ossgw.alicdn.com"];
                var f = {
                    width: 320,
                    height: 320,
                    webpSupport: !1,
                    ignoreGif: !0,
                    ignorePng: !1,
                    sharpen: "s150",
                    q: "q50",
                    baseDpr: 2,
                    original: !1,
                    filterDomains: []
                }, p = {getNewUrl: r};
                lib.imgcore = p, e.exports = p
            }()
        }), ["a.tbcdn.cn", "assets.alicdn.com", "wwc.taobaocdn.com", "wwc.alicdn.com", "g.alicdn.com", "gjusp.alicdn.com"]),
        f = {low: ["q50", "q50"], normal: ["q75", "q50"], high: ["q90", "q75"], original: ["original", "original"]},
        p = {sharpen: "s150", unsharpen: "original"};
    !function () {
        navigator.userAgent.match(/WindVane/i) && window.WindVane && window.WindVane.call("WVNetwork", "getNetworkType", {}, function (e) {
            e && e.type && (d = "wifi" === e.type.toLowerCase())
        }, function () {
        })
    }();
    var m = function () {
        var e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
    }();
    !function () {
        try {
            var e = new Image;
            e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA", e.onload = function () {
                2 === e.height && (m = !0)
            }
        } catch (e) {
        }
    }();
    var g, A, w, v, b, y, x = {
            methods: {
                processImgSrc: function (e, t) {
                    var n = t.width, i = t.height;
                    n = parseFloat(n), i = parseFloat(i), (!n || isNaN(n) || n < 0) && (n = 0), (!i || isNaN(i) || i < 0) && (i = 0);
                    var r = t.quality;
                    void 0 === r && (r = "normal");
                    var o = t.sharpen;
                    void 0 === o && (o = "unsharpen");
                    var a = t.original;
                    if (a && "false" !== a)return e;
                    var s = window.devicePixelRatio || 1, l = void 0 === d ? 0 : d ? 0 : 1, c = {
                        width: parseInt(n * s),
                        height: parseInt(i * s),
                        q: f[r][l],
                        sharpen: p[o] || p.sharpen,
                        webpSupport: !!m,
                        ignoreGif: !0,
                        ignorePng: !1,
                        filterDomains: h
                    };
                    return lib.imgcore.getNewUrl(e, c)
                }
            }
        }, _ = [x], C = {}, E = 1, S = {
            load: function (e, t) {
                if (!window.Audio)return void(t && t({
                    id: e.id,
                    status: 6,
                    value: {code: "5", message: "not support audio in this browser"}
                }));
                if (!e)return void(t && t({id: e.id, status: 6, value: {code: "4", message: "empty option"}}));
                if (!e.url)return void(t && t({id: e.id, status: 6, value: {code: "4", message: "empty option src"}}));
                e.id || (e.id = E, E++), C[e.id] && C[e.id].pause();
                var n = new Audio;
                n.autoplay = e.autoplay || !1, n.loop = e.loop || !1, n.volume = e.volume || 1, n.src = e.url, C[e.id] = n, g = t, t && t({
                    id: e.id,
                    status: 1
                }), n.addEventListener("loadeddata", function () {
                    t && t({id: e.id, status: 2, value: {duration: n.duration}})
                }), n.addEventListener("play", function () {
                    t && t({id: e.id, status: 3})
                }), n.addEventListener("ended", function () {
                    t({id: e.id, status: 5})
                }), n.load()
            }, play: function (e) {
                if (!C || !C[e])return void console.error("[vue-render] your browser is not support audio yet.");
                C[e].play()
            }, pause: function (e) {
                if (!C || !C[e])return void console.error("[vue-render] your browser is not support audio yet.");
                C[e].pause(), g && g({id: e, status: 4})
            }, stop: function (e) {
                if (!C || !C[e])return void console.error("[vue-render] your browser is not support audio yet.");
                var t = C[e];
                t.pause(), t.currentTime = 0, g && g({id: e, status: 5})
            }, setVolume: function (e) {
                if (!window.Audio || !C)return void console.error("[vue-render] your browser is not support audio yet.");
                e <= 0 && (e = .01), e >= 1 && (e = 1);
                for (var t in C)t && C[t] && C[t].volume && (C[t].volume = e)
            }, canPlayType: function (e) {
                return window.Audio ? (new Audio).canPlayType(e) : ""
            }
        }, k = {
            init: function (e) {
                e.registerModule("audio", S)
            }
        }, T = {
            get: function () {
                return document.cookie
            }, set: function (e) {
                document.cookie = e
            }, getAllObjects: function () {
                for (var e = document.cookie.split(";"), t = e.length - 1; t >= 0; t--) {
                    var n = e[t].trim();
                    if ("" === n) e.splice(t, 1); else {
                        var i = n.indexOf("=");
                        e[t] = i < 0 ? {name: n, value: ""} : {name: n.substr(0, i), value: n.substr(i + 1)}
                    }
                }
                return e
            }, setObject: function (e) {
                var t = e.name, n = e.value;
                if (t && void 0 !== n) {
                    var i = t + "=" + n, r = e.domain;
                    r && (i += ";domain=" + r);
                    var o = e.path;
                    o && (i += ";path=" + o);
                    var a = e.maxAge;
                    void 0 !== a && (i += ";max-age=" + a);
                    var s = e.expires;
                    s && (s instanceof Date ? i += ";expires=" + s.toUTCString() : i += ";expires=" + s);
                    e.secure && (i += ";secure"), document.cookie = i
                }
            }, remove: function (e) {
                var t = e.name;
                if (t) {
                    var n = t + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT", i = e.domain;
                    i && (n += ";domain=" + i);
                    var r = e.path;
                    r && (n += ";path=" + r), document.cookie = n
                }
            }
        }, I = {
            init: function (e) {
                e.registerModule("cookie", T)
            }
        }, O = [], L = [], N = {ret: "WX_FAILED", msg: "Gyroscope is not avaliable"}, R = !0, B = !0, j = !1, M = {
            watchOrientation: function (e, t, i) {
                if (!R)return void(i && i(N));
                if (t) {
                    B && i && L.push(i);
                    var r = 1e3 / 12;
                    e && e.interval && (r = e.interval), O.push({interval: r, nextTick: 0, callback: t}), n()
                }
            }, stopOrientation: function () {
                O.length = 0, i()
            }
        }, P = {
            init: function (e) {
                e.registerModule("device", M)
            }
        }, W = lib.env.aliapp, D = "geolocation" in navigator, F = "[vue-render]: browser doesn't support geolocation.",
        z = {}, $ = {
            getCurrentPosition: function (e, t, n) {
                W ? lib.windvane.call("WVLocation", "getLocation", n, e, t) : D ? navigator.geolocation.getCurrentPosition(e, t, n) : (console.warn(F), t(new Error(F)))
            }, watchPosition: function (e, t, n) {
                var i = function (t) {
                    z[t.watchId] && e(t)
                };
                if (D) {
                    var r = navigator.geolocation.watchPosition(function (e) {
                        e.watchId = r, i(e)
                    }, t, n);
                    "number" == typeof r && (z[r] = !0)
                } else console.warn(F), t(new Error(F))
            }, clearWatch: function (e) {
                D ? (delete z[e], navigator.geolocation.clearWatch(e)) : console.warn(F)
            }
        }, U = {
            init: function (e) {
                e.registerModule("geolocation", $)
            }
        }, Q = {
            sendMtop: function (e, t) {
                o(e, t, !0)
            }
        }, Y = {
            send: function (e, t) {
                console.warn("[vue-render] mtop.send is deprecated. Please use mtop.request instead. See http://doc.weex.alibaba-inc.com/modules/mtop.html#request"), o(e, t)
            }, request: function (e, t, n) {
                void 0 === e && (e = {});
                var i = weex.utils, r = i.extend, a = i.isArray;
                e = r({}, e);
                for (var s = ["prefix", "subDomain", "mainDomain", "dangerouslySetWVTtid"], l = s.length, c = 0; c < l; c++) {
                    var u = s[c], d = e[u];
                    void 0 !== d && (lib.mtop.config[u] = d)
                }
                "POST" === e.type && (e.post = !0), ["originaljson", "json", "originaljsonp", "jsonp"].indexOf(e.dataType) <= -1 && (e.dataType = "originaljsonp"),
                "originaljson" === e.dataType && (e.dataType = "json"), e.isSec = e.secType, s.concat(["secType", "type"]).forEach(function (t) {
                    delete e[t]
                }), ["AntiCreep", "AntiFlool"].forEach(function (t) {
                    "boolean" != typeof e[t] && b && (e[t] = !0)
                }), e.jsonpIncPrefix || (e.jsonpIncPrefix = "weexcb"), o(e, function (e) {
                    var i = e.ret || "";
                    a(i) && (i = i.join(",")), i.indexOf("SUCCESS") > -1 ? t && t(e) : n && n(e)
                })
            }
        }, H = {
            init: function (e) {
                A = e.utils.extend, e.registerModule("stream", Q), e.registerModule("mtop", Y)
            }
        },
        V = new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^#]*)?$", "i"),
        q = /^(?:https?:)?\/\//, G = {
            push: function (e, t, n) {
                var i = e.url;
                if (!i || !i.match(V))return n && n({
                        result: "WX_PARAM_ERR",
                        message: "[vue-render]: invalid url '" + i + "'."
                    });
                window.location.href = e.url, t && t()
            }, open: function (e, t, n) {
                var i = e.url;
                if (!i)return function (e) {
                    return n && n(e)
                }({result: "WX_PARAM_ERR", message: "[h5-render]: invalid url for navigator to open: " + i + "."});
                var r = function () {
                    Ali && Ali.pushWindow && Ali.pushWindow(i, function (e) {
                        if (e.errorCode)return void(location.href = i);
                        t && t(e)
                    })
                };
                i.match(q) && lib.windvane && global._has_windvane ? lib.windvane.call("WVNative", "openWindow", {url: i}, function (e) {
                    t && t(e)
                }, function (e) {
                    JSON.stringify(e), r()
                }) : lib.windvane && global._has_windvane ? lib.windvane.call("WVClient", "open", {url: i}, function (e) {
                    t && t(e)
                }, function (e) {
                    JSON.stringify(e), r()
                }) : location.href = i
            }, pop: function (e, t, n) {
                lib.windvane && global._has_windvane ? lib.windvane.call("WebAppInterface", "pop", {}, function (e) {
                    t && t()
                }, function (e) {
                    n && n({result: "WX_FAILED", message: "[vue-render] windvane WebAppInterface.pop failed."})
                }) : !window.history.length || window.history.length <= 1 ? n && n({
                        result: "WX_FAILED",
                        message: "[vue-render]: no previous page in history."
                    }) : (window.history.back(), t && t())
            }
        };
    G.close = G.pop;
    var J, K, X, Z, ee, te, ne, ie = {
        reload: function (e) {
            window.location.reload(e)
        }, replace: function (e) {
            window.location.replace(e)
        }
    }, re = {
        init: function (e) {
            y = e.utils.extend, G = y(G, ie), e.registerModule("navigator", G), e.registerModule("location", ie)
        }
    }, oe = {
        setTitle: function (e) {
            e = e || "Weex Vue Render";
            try {
                e = decodeURIComponent(e)
            } catch (e) {
            }
            document.title = e, lib.windvane && global._has_windvane && lib.windvane.call("WebAppInterface", "setCustomPageTitle", {title: e})
        }, setSpm: function (e, t) {
            if (e) {
                var n = document.querySelector('meta[name="data-spm"]');
                n || (n = document.createElement("meta"), n.setAttribute("name", "data-spm"), document.head.appendChild(n)), n.setAttribute("content", e)
            }
            t && document.body.setAttribute("data-spm", t)
        }
    }, ae = {
        init: function (e) {
            e.registerModule("pageInfo", oe)
        }
    }, se = {
        getUserInfo: function (e) {
            var t = function (t, n) {
                e && e({isLogin: t + "", info: {userId: n.userNumId, nick: n.nick}, userId: n.userNumId, nick: n.nick})
            };
            lib.login.isLogin(function (e, n) {
                var i = n ? n.data || {} : {};
                e ? t(!0, i) : t(!1, i)
            })
        }, login: function (e) {
            var t = function (t, n) {
                e && e({status: t, info: n})
            };
            lib.login.goLoginAsync().then(function (e) {
                (e + "").match(/success/i) ? lib.login.isLogin(function (e, n) {
                    var i = n ? n.data || {} : n;
                    e ? t("success", {userId: i.userNumId, nick: i.nick}) : t("failure")
                }) : t("failure")
            }).catch(function (e) {
                t("failure")
            })
        }, logout: function (e) {
            lib.login.goLogoutAsync(function (t) {
                t = (t + "").match(/success/i) ? "success" : "failure", e && e({status: t})
            })
        }
    }, le = {
        init: function (e) {
            e.registerModule("user", se)
        }
    }, ce = {
        commit: function (e, t, n, i) {
            var r = "", o = i.logkey, a = i.chksum;
            "Object" === Object.prototype.toString.call(i).slice(8, -1) && (r = Object.keys(i).reduce(function (e, t, n, i) {
                var r = t;
                if ("logkey" === r || "chksum" === r)return e;
                var o = e.params[t];
                return e.result.push(r + "=" + encodeURIComponent(o)), e
            }, {params: i, result: []}), r = r.result.join("&"));
            try {
                if ("enter" === e) {
                    document.querySelector('meta[name="aplus-waiting"]') && goldlog.launch(i)
                } else"click" === e ? goldlog.record(o, "CLK", r, a) : "expose" === e && goldlog.record(o, "EXP", r, a)
            } catch (e) {
            }
        }
    }, ue = {
        init: function (e) {
            e.registerModule("userTrack", ce)
        }
    }, de = {
        call2: function (e, t, n, i) {
            if (lib.windvane && global._has_windvane) {
                var r = e.indexOf(".");
                if (r >= 0) lib.windvane.call(e.substr(0, r), e.substr(r + 1), t, n, function (e) {
                    console.log("WindVane call failed: ", e), i && i(e)
                }); else {
                    var o = "invalid WindBane bridge name: " + e;
                    console.log(o), i && i({ret: "HY_WEEX_PARAM_ERR", msg: o})
                }
            } else {
                var a = "WindVane not supported";
                console.log(a), i && i({ret: "HY_NOT_SUPPORTED", msg: a})
            }
        }, call: function (e, t) {
            var n = function (e) {
                return t && t(e)
            };
            lib.windvane && global._has_windvane ? lib.windvane.call(e.class, e.method, e.data, function (e) {
                return n(e)
            }, function (e) {
                console.log("windvane call error: ", e), n(e)
            }) : console.error("windvane call is invalid.")
        }
    }, he = {
        init: function (e) {
            e.registerModule("windvane", de)
        }
    }, fe = weex.utils, pe = fe.extend, me = fe.isArray, ge = {
        show: function (e, t, n) {
            var i = {hidden: "0", animated: e && e.animated ? "1" : "0", statusBarHidden: "0"};
            lib.windvane && global._has_windvane ? lib.windvane.call("WebAppInterface", "setNaviBarHidden", i, function () {
                t && t()
            }, function (e) {
                n && n({result: "WX_FAILED", message: e.msg || "WebAppInterface.setNaviBarHidden failed."})
            }) : a("navigationBar.show", n)
        }, hide: function (e, t, n) {
            var i = {hidden: "1", animated: e && e.animated ? "1" : "0", statusBarHidden: "0"};
            lib.windvane && global._has_windvane ? lib.windvane.call("WebAppInterface", "setNaviBarHidden", i, function () {
                t && t()
            }, function (e) {
                n && n({result: "WX_FAILED", message: e.msg || "WebAppInterface.setNaviBarHidden failed."})
            }) : a("navigationBar.hide", n)
        }, setTitle: function (e, t, n) {
            var i = pe({title: "", icon: "", fromNative: !1, iconFont: !1, iconType: "", stretch: !1}, e);
            delete i.subTitle;
            var r = i.icon;
            if (r) {
                delete i.title;
                var o = s(r);
                if (!o)return n && n({result: "WX_FAILED", message: "invalid icon value: " + r + "."});
                pe(i, o)
            }
            if (lib.windvane && global._has_windvane) lib.windvane.call("WebAppInterface", "setCustomPageTitle", i, function () {
                t && t()
            }, function (e) {
                n && n({result: "WX_FAILED", message: e.msg || "WebAppInterface.setCustomPageTitle failed."})
            }); else {
                a("navigationBar.setTitle", function (e) {
                    i.title ? document.title = i.title : n && n(e)
                })
            }
        }, setLeftItem: function (e, t, n) {
            lib.windvane && global._has_windvane ? (J || (J = !0, lib.windvane.call("WebAppInterface", "enableHookNativeBack", {}), window._windvane_backControl = function () {
                return "true"
            }, document.addEventListener("wvBackClickEvent", function (e) {
                K ? K({index: 0}) : lib.windvane.call("WebAppInterface", "pop")
            }, !1)), t ? (K = e && (e.title || e.icon) ? t : null, t({})) : K = null) : a("navigationBar.setLeftItem", n)
        }, setRightItem: function (e, t, n) {
            var i = {title: "", icon: "", fromNative: !1, iconFont: !1, autoReset: !1, items: null}, r = pe(i, e),
                o = r.items;
            o && me(o) && o.length > 0 && (pe(r, o[0]), delete r.items);
            var l = r.title || r.icon, c = r.icon;
            if (c) {
                delete r.title;
                var u = s(c);
                if (!u)return n && n({result: "WX_FAILED", message: "invalid icon value: " + c + "."});
                pe(r, u)
            }
            lib.windvane && global._has_windvane ? l ? (X || (X = !0, document.addEventListener("TBNaviBar.rightItem.clicked", function (e) {
                Z && Z({index: 0})
            }, !1)), lib.windvane.call("WebAppInterface", "setNaviBarRightItem", r, function () {
                t && (Z = t, t({}))
            }, function (e) {
                Z = null, n && n({result: "WX_FAILED", message: e.msg || "WebAppInterface.setNaviBarRightItem failed."})
            })) : lib.windvane.call("WebAppInterface", "clearNaviBarRightItem", {}, function () {
                Z = null, t && t({})
            }, function (e) {
                n && n({result: "WX_FAILED", message: e.msg || "WebAppInterface.clearNaviBarRightItem failed."})
            }) : a("navigationBar.setRightItem", n)
        }, setStyle: function (e, t, n) {
            lib.windvane && global._has_windvane ? n && n({
                    result: "WX_FAILED",
                    message: "don't support WebAppInterface.setStyle on web currently."
                }) : a("navigationBar.setStyle", n)
        }, setStatusBarStyle: function (e, t, n) {
            lib.windvane && global._has_windvane ? lib.windvane.call("WebAppInterface", "setStatusBarStyle", e, function (e) {
                t && t()
            }, function (e) {
                n && n({
                    result: "WX_FAILED",
                    message: "[vue-render] windvane WebAppInterface.setStatusBarStyle failed."
                })
            }) : a("navigationBar.setStyle", n)
        }
    }, Ae = {
        init: function (e) {
            e.registerModule("navigationBar", ge)
        }
    }, we = lib.env.aliapp, ve = "connection" in navigator, be = !1, ye = function () {
        be || (be = !0, console.warn("[vue-render]: browser doesn't support connection."))
    }, xe = {
        getType: function () {
            if (we && lib.windvane.call("WVNetwork", "getNetworkType", {}, function (e) {
                    return e
                }), ve) {
                return window.navigator.connection.type
            }
            return ye(), "unknown"
        }, getNetworkType: function () {
            if (we && lib.windvane.call("WVNetwork", "getNetworkType", {}, function (e) {
                    return e
                }), !ve)return ye(), "unknown";
            var e = window.navigator.connection, t = window.navigator.onLine,
                n = e ? e.type : t ? "unknown" : "nonsupport";
            switch (n) {
                case"nonsupport":
                    return "unkown";
                case"cellular":
                    return "cell";
                default:
                    return n
            }
        }, getDownlinkMax: function () {
            if (ve) {
                return window.navigator.connection.downlinkMax || "unkonw"
            }
            return ye(), "unknown"
        }, addEventListener: function (e, t) {
            if (ve) {
                var n = window.navigator.connection;
                "change" === e && (n.ontypechange = t)
            } else ye()
        }
    }, _e = {
        init: function (e) {
            e.registerModule("connection", xe)
        }
    }, Ce = {
        createBlur: function (e, t, n) {
            Se(e.src, t, 10).then(function (e) {
                n({data: e, result: "success"})
            }, function (e) {
                n({data: e, result: "failure"})
            })
        }, createBlurWithOverlay: function (e, t, n, i) {
            Se(e.src, t, 10, n).then(function (e) {
                i({data: e, result: "success"})
            }, function (e) {
                i({data: e, result: "failure"})
            })
        }, applyBlur: function (e, t, n) {
            t ? (e.$el.setAttribute("img-src", t), ee(e.$el), n({result: "success"})) : n({result: "failure"})
        }
    }, Ee = function (e, t) {
        var n, i, r, o, a, s, l, c, u, d, h, f = new Uint8ClampedArray(e.data), p = e.width, m = e.height, g = [];
        t = Math.floor(t);
        var A = t / 3;
        for (l = 1 / (Math.sqrt(2 * Math.PI) * A), s = -1 / (2 * A * A), c = -t; c <= t; c++)g.push(l * Math.exp(s * c * c));
        for (r = 0; r < m; r++)for (i = 0; i < p; i++) {
            for (o = a = s = l = n = 0, u = -t; u <= t; u++)(d = i + u) >= 0 && d < p && (c = 4 * (r * p + d), h = g[u + t], o += f[c] * h, a += f[c + 1] * h, s += f[c + 2] * h, l += f[c + 3] * h, n += h);
            c = 4 * (r * p + i), e.data.set([o, a, s, l].map(function (e) {
                return e / n
            }), c)
        }
        for (f.set(e.data), i = 0; i < p; i++)for (r = 0; r < m; r++) {
            for (o = a = s = l = n = 0, u = -t; u <= t; u++)(d = r + u) >= 0 && d < m && (c = 4 * (d * p + i), h = g[u + t], o += f[c] * h, a += f[c + 1] * h, s += f[c + 2] * h, l += f[c + 3] * h, n += h);
            c = 4 * (r * p + i), e.data.set([o, a, s, l].map(function (e) {
                return e / n
            }), c)
        }
        return e
    }, Se = function (e, t, n, i) {
        return void 0 === n && (n = 1), new Promise(function (r, o) {
            var a = new Image;
            a.crossOrigin = "*", a.onload = function () {
                var e = document.createElement("CANVAS"), s = a.width, l = a.height;
                1 !== n && (s = Math.ceil(s / n), l = Math.ceil(l / n), t = Math.ceil(t / n));
                try {
                    e.width = s, e.height = l;
                    var c = e.getContext("2d");
                    c.drawImage(a, 0, 0, s, l);
                    var u = c.getImageData(0, 0, s, l), d = Ee(u, t);
                    i && ke(d, Te(i)), c.putImageData(d, 0, 0), r(e.toDataURL())
                } catch (e) {
                    o(e)
                }
            }, a.src = e
        })
    }, ke = function (e, t) {
        for (var n = e.data, i = 0; i < n.length; i += 4)n[i] = (n[i] + t[1]) / 2, n[i + 1] = (n[i + 1] + t[2]) / 2, n[i + 2] = (n[i + 2] + t[3]) / 2, n[i + 3] = (n[i + 3] + t[0]) / 2
    }, Te = function (e) {
        var t = /^#([0-9a-fA-f]{4}|[0-9a-fA-f]{8})$/, n = /^(rgb|RGB)/, i = /^(rgba|RGBA)/, r = [];
        if ((e = e.toLowerCase()) && t.test(e)) {
            if (5 === e.length) {
                for (var o = "#", a = 1; a < 5; a += 1)o += e.slice(a, a + 1).concat(e.slice(a, a + 1));
                e = o
            }
            for (var s = 1; s < 9; s += 2)r.push(parseInt("0x" + e.slice(s, s + 2)))
        }
        if (e && n.test(e) && (r = e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), r.unshift("255")), e && i.test(e)) {
            r = e.replace(/(?:\(|\)|rgba|RGBA)*/g, "").split(",");
            var l = r.pop();
            r.unshift(l)
        }
        return r
    }, Ie = {
        init: function (e) {
            ee = e.utils.fireLazyload, e.registerModule("blurEx", Ce)
        }
    }, Oe = {
        init: function (e) {
            e.install(k), e.install(I), e.install(P), e.install(U), e.install(H), e.install(re), e.install(ae), e.install(le), e.install(ue), e.install(he), e.install(Ae), e.install(_e), e.install(Ie)
        }
    }, Le = {
        name: "tabheader",
        props: {
            data: {type: Array, required: !0},
            title: String,
            selectedIndex: {type: [Number, String], default: 0},
            textColor: {type: String, default: "#333"},
            textHighlightColor: {type: String, default: "#ff0000"}
        },
        watch: {
            selectedIndex: function (e) {
                this.currentIndex = parseInt(e)
            }
        },
        data: function () {
            return {
                scrollOffset: 0,
                currentIndex: parseInt(this.selectedIndex),
                headerClasses: ["weex-tabheader weex-ct"]
            }
        },
        created: function () {
            var e = this;
            this.scrollLeft = 0, this.$nextTick(function () {
                return e._scrollToView(e.currentIndex)
            })
        },
        updated: function () {
            var e = this;
            this.$nextTick(function () {
                e._resetScrollLeft(e.scrollLeft), e.$nextTick(function () {
                    return e._scrollToView(e.currentIndex)
                })
            })
        },
        methods: {
            _renderBar: function (e) {
                this._headerBar = e("html:div", {staticClass: "header-bar"}, [this.title || "åˆ‡æ¢æ¥¼å±‚"])
            }, _renderBody: function (e) {
                var t = this, n = this.data, i = [];
                if (weex.utils.isArray(n)) {
                    for (var r = 0, o = n.length; r < o;) {
                        var a = [], s = "th-item weex-el", l = t.textColor;
                        r === (t.currentIndex || 0) && (s += " active", l = t.textHighlightColor, a.push(e("html:i", {
                            domProps: {innerHTML: "&#xe650;"},
                            staticClass: "hl-icon iconfont active",
                            staticStyle: {color: l}
                        }))), a.push(n[r]), i.push(e("html:li", {
                            attrs: {"data-floor": r},
                            staticClass: s,
                            staticStyle: {color: l},
                            on: {
                                click: function (e) {
                                    this.currentIndex = e, this._triggerSelectEvent(e), this._unfold ? this._toggleFolder() : this._scrollToView(e)
                                }.bind(t, r)
                            }
                        }, a)), r++
                    }
                    this._headerBody = e("html:ul", {staticClass: "header-body weex-ct horizontal"}, i)
                }
            }, _triggerSelectEvent: function (e) {
                this.$emit("select", ne(this.$el.querySelector('[data-foor="' + e + '"]'), "select", {index: e}))
            }, _renderToggle: function (e) {
                this._toggle = e("html:div", {
                    domProps: {innerHTML: "&#xe661;"},
                    on: {click: this._toggleFolder},
                    staticClass: "fold-toggle iconfont"
                })
            }, _toggleFolder: function () {
                var e = this;
                this._unfold = !this._unfold, this._unfold ? this.headerClasses.push("unfold-header") : (this.headerClasses.splice(this.headerClasses.indexOf("unfold-header"), 1), this.$nextTick(function () {
                    e._resetScrollLeft(e.scrollLeft), e.$nextTick(function () {
                        return e._scrollToView(e.currentIndex)
                    })
                }))
            }, _resetScrollLeft: function (e) {
                void 0 === e && (e = 0);
                var t = this._headerBody && this._headerBody.elm;
                t && (t.scrollLeft = e)
            }, _getTargetOffset: function (e) {
                if (e) {
                    var t = e.parentNode, n = t.getBoundingClientRect(), i = n.left, r = n.right,
                        o = e.getBoundingClientRect(), a = o.left, s = o.right, l = 0;
                    return a < i ? (l = a - i - 100, this.scrollLeft + l >= 0 ? l : -this.scrollLeft) : (s > r && (l = s - r + 100), l)
                }
            }, _scrollToView: function (e) {
                void 0 === e && (e = 0), this._scrollOffset(this._getTargetOffset(this.$el.querySelector('[data-floor="' + e + '"]')))
            }, _scrollOffset: function (e) {
                if (e) {
                    var t = this._headerBody.elm;
                    this.scrollLeft = t.scrollLeft + e;
                    var n = 20;
                    n = e > 0 ? n : -n, te(function e(i) {
                        var r = i / n < 1;
                        t.scrollLeft += r ? i : n, !r && te(e.bind(null, i - n))
                    }.bind(null, e))
                }
            }
        },
        render: function (e) {
            return this._renderBar(e), this._renderBody(e), this._renderToggle(e), e("html:div", {
                attrs: {"weex-type": "tabheader"},
                staticClass: this.headerClasses.join(" "),
                staticStyle: weex.extractComponentStyle(this)
            }, [this._headerBar, this._headerBody, this._toggle])
        },
        _css: '\n@font-face {\n  font-family: "iconfont";\n  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAPAIAAAwBwRkZUTXBD98UAAAD8AAAAHE9TLzJXL1zIAAABGAAAAGBjbWFws6IHbgAAAXgAAAFaY3Z0IAyV/swAAApQAAAAJGZwZ20w956VAAAKdAAACZZnYXNwAAAAEAAACkgAAAAIZ2x5ZuxoPFIAAALUAAAEWGhlYWQHA5h3AAAHLAAAADZoaGVhBzIDcgAAB2QAAAAkaG10eAs2AW0AAAeIAAAAGGxvY2EDcAQeAAAHoAAAABBtYXhwASkKKwAAB7AAAAAgbmFtZQl/3hgAAAfQAAACLnBvc3Tm7f0bAAAKAAAAAEhwcmVwpbm+ZgAAFAwAAACVAAAAAQAAAADMPaLPAAAAANIDKnoAAAAA0gMqewAEA/oB9AAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAgAGAwAAAAAAAAAAAAEQAAAAAAAAAAAAAABQZkVkAMAAeObeAyz/LABcAxgAlAAAAAEAAAAAAxgAAAAAACAAAQAAAAMAAAADAAAAHAABAAAAAABUAAMAAQAAABwABAA4AAAACgAIAAIAAgB45lDmYebe//8AAAB45lDmYebe////ixm0GaQZKAABAAAAAAAAAAAAAAAAAQYAAAEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACACIAAAEyAqoAAwAHAClAJgAAAAMCAANXAAIBAQJLAAICAU8EAQECAUMAAAcGBQQAAwADEQUPKzMRIREnMxEjIgEQ7szMAqr9ViICZgAAAAUALP/hA7wDGAAWADAAOgBSAF4Bd0uwE1BYQEoCAQANDg0ADmYAAw4BDgNeAAEICAFcEAEJCAoGCV4RAQwGBAYMXgALBAtpDwEIAAYMCAZYAAoHBQIECwoEWRIBDg4NUQANDQoOQhtLsBdQWEBLAgEADQ4NAA5mAAMOAQ4DXgABCAgBXBABCQgKCAkKZhEBDAYEBgxeAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CG0uwGFBYQEwCAQANDg0ADmYAAw4BDgNeAAEICAFcEAEJCAoICQpmEQEMBgQGDARmAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CG0BOAgEADQ4NAA5mAAMOAQ4DAWYAAQgOAQhkEAEJCAoICQpmEQEMBgQGDARmAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CWVlZQChTUzs7MjEXF1NeU15bWDtSO1JLQzc1MToyOhcwFzBRETEYESgVQBMWKwEGKwEiDgIdASE1NCY1NC4CKwEVIQUVFBYUDgIjBiYrASchBysBIiciLgI9ARciBhQWMzI2NCYXBgcOAx4BOwYyNicuAScmJwE1ND4COwEyFh0BARkbGlMSJRwSA5ABChgnHoX+SgKiARUfIw4OHw4gLf5JLB0iFBkZIBMIdwwSEgwNEhKMCAYFCwQCBA8OJUNRUEAkFxYJBQkFBQb+pAUPGhW8HykCHwEMGScaTCkQHAQNIBsSYYg0Fzo6JRcJAQGAgAETGyAOpz8RGhERGhF8GhYTJA4QDQgYGg0jERMUAXfkCxgTDB0m4wAAAgCg/2wDYALsABIAGgAhQB4AAAADAgADWQACAQECTQACAgFRAAECAUUTFjkQBBIrACAGFRQeAxcWOwEyPwESNTQAIiY0NjIWFAKS/tzORFVvMRAJDgEOCW3b/uKEXl6EXgLszpI1lXyJNhEKC30BDIyS/s5ehF5ehAAAAAEAggBJA4QB6AAdABtAGBIRAgEAAUAFAQA+AAABAGgAAQFfEx8CECsBJgcGBwkBLgEGBwYUFwEwMxcVFjI3AT4DLgIDehEWAwP+uP60BhEQBgoKAWEBAQoaCQFeAwQCAQECBAHhEg0DAv61AUkHBAUGCRsJ/qIBAQkJAWICBwYHCAYGAAEAfwCLA4ECJwAhAB1AGhYPAgEAAUAFAQA+AAABAGgCAQEBXyQuEwMRKyUBMCcjNSYHBgcBDgEUFhceAjMyNwkBFjMyNjc+Ai4BA3f+nwEBEhUEAv6iBQUFBQMHCAQOCQFIAUwKDQYMBQMFAQEFwwFeAQERDQID/p8FDAwMBAMEAgkBS/62CQUFAwoJCgkAAAEAAAABAAALIynoXw889QALBAAAAAAA0gMqewAAAADSAyp7ACL/bAO8AxgAAAAIAAIAAAAAAAAAAQAAAxj/bABcBAAAAAAAA7wAAQAAAAAAAAAAAAAAAAAAAAUBdgAiAAAAAAFVAAAD6QAsBAAAoACCAH8AAAAoACgAKAFkAaIB5AIsAAEAAAAHAF8ABQAAAAAAAgAmADQAbAAAAIoJlgAAAAAAAAAMAJYAAQAAAAAAAQAIAAAAAQAAAAAAAgAGAAgAAQAAAAAAAwAkAA4AAQAAAAAABAAIADIAAQAAAAAABQBGADoAAQAAAAAABgAIAIAAAwABBAkAAQAQAIgAAwABBAkAAgAMAJgAAwABBAkAAwBIAKQAAwABBAkABAAQAOwAAwABBAkABQCMAPwAAwABBAkABgAQAYhpY29uZm9udE1lZGl1bUZvbnRGb3JnZSAyLjAgOiBpY29uZm9udCA6IDI2LTgtMjAxNWljb25mb250VmVyc2lvbiAxLjAgOyB0dGZhdXRvaGludCAodjAuOTQpIC1sIDggLXIgNTAgLUcgMjAwIC14IDE0IC13ICJHIiAtZiAtc2ljb25mb250AGkAYwBvAG4AZgBvAG4AdABNAGUAZABpAHUAbQBGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAGkAYwBvAG4AZgBvAG4AdAAgADoAIAAyADYALQA4AC0AMgAwADEANQBpAGMAbwBuAGYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwACAAOwAgAHQAdABmAGEAdQB0AG8AaABpAG4AdAAgACgAdgAwAC4AOQA0ACkAIAAtAGwAIAA4ACAALQByACAANQAwACAALQBHACAAMgAwADAAIAAtAHgAIAAxADQAIAAtAHcAIAAiAEcAIgAgAC0AZgAgAC0AcwBpAGMAbwBuAGYAbwBuAHQAAAACAAAAAAAA/4MAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAABAAIAWwECAQMBBAd1bmlFNjUwB3VuaUU2NjEHdW5pRTZERQABAAH//wAPAAAAAAAAAAAAAAAAAAAAAAAyADIDGP/hAxj/bAMY/+EDGP9ssAAssCBgZi2wASwgZCCwwFCwBCZasARFW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCwCkVhZLAoUFghsApFILAwUFghsDBZGyCwwFBYIGYgiophILAKUFhgGyCwIFBYIbAKYBsgsDZQWCGwNmAbYFlZWRuwACtZWSOwAFBYZVlZLbACLCBFILAEJWFkILAFQ1BYsAUjQrAGI0IbISFZsAFgLbADLCMhIyEgZLEFYkIgsAYjQrIKAAIqISCwBkMgiiCKsAArsTAFJYpRWGBQG2FSWVgjWSEgsEBTWLAAKxshsEBZI7AAUFhlWS2wBCywCCNCsAcjQrAAI0KwAEOwB0NRWLAIQyuyAAEAQ2BCsBZlHFktsAUssABDIEUgsAJFY7ABRWJgRC2wBiywAEMgRSCwACsjsQQEJWAgRYojYSBkILAgUFghsAAbsDBQWLAgG7BAWVkjsABQWGVZsAMlI2FERC2wByyxBQVFsAFhRC2wCCywAWAgILAKQ0qwAFBYILAKI0JZsAtDSrAAUlggsAsjQlktsAksILgEAGIguAQAY4ojYbAMQ2AgimAgsAwjQiMtsAosS1RYsQcBRFkksA1lI3gtsAssS1FYS1NYsQcBRFkbIVkksBNlI3gtsAwssQANQ1VYsQ0NQ7ABYUKwCStZsABDsAIlQrIAAQBDYEKxCgIlQrELAiVCsAEWIyCwAyVQWLAAQ7AEJUKKiiCKI2GwCCohI7ABYSCKI2GwCCohG7AAQ7ACJUKwAiVhsAgqIVmwCkNHsAtDR2CwgGIgsAJFY7ABRWJgsQAAEyNEsAFDsAA+sgEBAUNgQi2wDSyxAAVFVFgAsA0jQiBgsAFhtQ4OAQAMAEJCimCxDAQrsGsrGyJZLbAOLLEADSstsA8ssQENKy2wECyxAg0rLbARLLEDDSstsBIssQQNKy2wEyyxBQ0rLbAULLEGDSstsBUssQcNKy2wFiyxCA0rLbAXLLEJDSstsBgssAcrsQAFRVRYALANI0IgYLABYbUODgEADABCQopgsQwEK7BrKxsiWS2wGSyxABgrLbAaLLEBGCstsBsssQIYKy2wHCyxAxgrLbAdLLEEGCstsB4ssQUYKy2wHyyxBhgrLbAgLLEHGCstsCEssQgYKy2wIiyxCRgrLbAjLCBgsA5gIEMjsAFgQ7ACJbACJVFYIyA8sAFgI7ASZRwbISFZLbAkLLAjK7AjKi2wJSwgIEcgILACRWOwAUViYCNhOCMgilVYIEcgILACRWOwAUViYCNhOBshWS2wJiyxAAVFVFgAsAEWsCUqsAEVMBsiWS2wJyywByuxAAVFVFgAsAEWsCUqsAEVMBsiWS2wKCwgNbABYC2wKSwAsANFY7ABRWKwACuwAkVjsAFFYrAAK7AAFrQAAAAAAEQ+IzixKAEVKi2wKiwgPCBHILACRWOwAUViYLAAQ2E4LbArLC4XPC2wLCwgPCBHILACRWOwAUViYLAAQ2GwAUNjOC2wLSyxAgAWJSAuIEewACNCsAIlSYqKRyNHI2EgWGIbIVmwASNCsiwBARUUKi2wLiywABawBCWwBCVHI0cjYbAGRStlii4jICA8ijgtsC8ssAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgsAlDIIojRyNHI2EjRmCwBEOwgGJgILAAKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwgGJhIyAgsAQmI0ZhOBsjsAlDRrACJbAJQ0cjRyNhYCCwBEOwgGJgIyCwACsjsARDYLAAK7AFJWGwBSWwgGKwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbAwLLAAFiAgILAFJiAuRyNHI2EjPDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuwNCstsGEssDErsDUrLbBiLLAxK7A2Ky2wYyywMisusSQBFCstsGQssDIrsDQrLbBlLLAyK7A1Ky2wZiywMiuwNistsGcssDMrLrEkARQrLbBoLLAzK7A0Ky2waSywMyuwNSstsGossDMrsDYrLbBrLCuwCGWwAyRQeLABFTAtAABLuADIUlixAQGOWbkIAAgAYyCwASNEILADI3CwDkUgIEu4AA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbABRWMjYrACI0SzCgkFBCuzCgsFBCuzDg8FBCtZsgQoCUVSRLMKDQYEK7EGAUSxJAGIUViwQIhYsQYDRLEmAYhRWLgEAIhYsQYBRFlZWVm4Af+FsASNsQUARAAAAA==") format("truetype");\n}\n\n.iconfont {\n  font-family: iconfont !important;\n  font-size: 0.213333rem;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.002667rem;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.weex-tabheader,\n.weex-tabheader * {\n  color: inherit;\n  cursor: inherit;\n  direction: inherit;\n  font: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  font-weight: inherit;\n  line-height: inherit;\n  text-align: inherit;\n  text-indent: inherit;\n  visibility: inherit;\n  white-space: inherit;\n  word-spacing: inherit;\n  background-color: inherit;\n}\n\n.weex-tabheader.weex-ct {\n  position: relative;\n  z-index: 99;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  left: 0;\n  top: 0;\n  width: 10rem;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  color: #333;\n  overflow: hidden;\n  list-style: none;\n  white-space: nowrap;\n}\n\n.weex-tabheader .header-bar {\n  display: none;\n  position: relative;\n  font-size: 0.373333rem;\n  width: 10rem;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  color: #999;\n  padding-left: 0.4rem;\n}\n.weex-tabheader .header-body {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 9rem;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n.weex-tabheader .header-body::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n.weex-tabheader .fold-toggle {\n  position: absolute;\n  top: 0.6rem;\n  right: 0;\n  width: 1rem;\n  height: 1.17rem;\n  line-height: 1.17rem;\n  text-align: center;\n  z-index: 999;\n  font-size: 0.426667rem;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n.weex-tabheader .th-item {\n  padding-left: 0.72rem;\n  font-size: 0.373333rem;\n  position: relative;\n  display: inline-block;\n}\n.weex-tabheader .th-item.active {\n  color: #ff0000;\n}\n.weex-tabheader .hl-icon {\n  width: 0.4rem;\n  height: 0.4rem;\n  line-height: 0.4rem;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 0.24rem;\n  font-size: 0.373333rem;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n.weex-tabheader .hl-icon.active {\n  color: #ff0000;\n}\n\n.unfold-header.weex-tabheader {\n  overflow: visible;\n}\n\n.unfold-header .header-bar {\n  display: block;\n}\n.unfold-header .fold-toggle {\n  -webkit-transform: translateY(-50%) rotate(180deg);\n  transform: translateY(-50%) rotate(180deg);\n}\n.unfold-header .header-body {\n  display: block;\n  height: auto;\n  width: 10rem;\n  position: absolute;\n  margin-top: 1.17rem;\n  padding: 0.133333rem;\n  margin-right: 0;\n  white-space: normal;\n}\n.unfold-header.weex-tabheader {\n  display: block;\n  height: auto;\n}\n.unfold-header .th-item {\n  box-sizing: border-box;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  float: left;\n  width: 33.3333%;\n  height: 1.01rem;\n  line-height: 1.01rem;\n}\n.unfold-header .hl-icon {\n  margin-right: 0;\n  font-size: 0.373333rem;\n  position: absolute;\n}\n.unfold-header.tabheader-mask {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\n.tabheader-mask {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n'
    }, Ne = {
        init: function (e) {
            te = e.utils.nextFrame, ne = e.utils.createEvent, e.registerComponent("tabheader", Le)
        }
    };
    e(".weex-mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 999999999;\n}\n\n/*.weex-mask-ct {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  z-index: 9999999999;\n}*/\n", void 0);
    var Re = {
        name: "weex-mask", render: function (e) {
            return e("html:div", {
                attrs: {"weex-type": "mask"},
                staticClass: "weex-mask weex-ct",
                staticStyle: weex.extractComponentStyle(this)
            }, weex.trimTextVNodes(this.$slots.default))
        }
    }, Be = {
        init: function (e) {
            e.registerComponent("mask", Re)
        }
    };
    e("div.weex-el.weex-richtext,\ndiv.weex-el.weex-richtext * {\n  display: inline-block;\n}\n\ndiv.weex-el.weex-richtext span {\n  display: inline;\n}\n\ndiv.weex-el.weex-richtext figure {\n  vertical-align: text-bottom;\n}\n", void 0);
    var je = {
        props: {value: [String]}, render: function (e) {
            return e("html:span", {
                attrs: {"weex-type": "span"},
                on: weex.createEventMap(this),
                staticClass: "weex-span",
                staticStyle: weex.extractComponentStyle(this)
            }, this.$slots.default || [this.value])
        }
    }, Me = {
        name: "weex-richtext", render: function (e) {
            return e("html:div", {
                attrs: {"weex-type": "richtext"},
                staticClass: "weex-richtext weex-el",
                staticStyle: weex.extractComponentStyle(this)
            }, weex.trimTextVNodes(this.$slots.default))
        }
    }, Pe = {
        init: function (e) {
            e.registerComponent("span", je), e.registerComponent("richtext", Me)
        }
    };
    e(".weex-appbar{\n  opacity: 0 !important;\n}", void 0);
    var We, De, Fe, ze, $e, Ue, Qe, Ye = {
        name: "weex-appbar", props: {"more-items": {type: Array}}, methods: {
            clickmoreitem: function (e) {
            }
        }, render: function (e) {
            return e("html:div", {
                attrs: {"weex-type": "appbar"},
                staticClass: "weex-appbar weex-ct",
                staticStyle: weex.extractComponentStyle(this)
            }, weex.trimTextVNodes(this.$slots.default))
        }
    }, He = {
        init: function (e) {
            e.registerComponent("appbar", Ye)
        }
    }, Ve = {
        name: "weex-parallax",
        props: {
            bindingScroller: {type: String},
            transform: {type: Array},
            backgroundColor: {type: Object},
            opacity: {type: Object}
        },
        created: function () {
            this._originY = 0, this._touchParams = {startY: 0}, this._biginTouch = !1, this.scrollDistance = 0, this.scroller = null, this.scroll = 0
        },
        methods: {
            scrollHandler: function (e) {
                Fe(this._doTransform)
            }, _doTransform: function () {
                var e = {},
                    t = ((this.scroller ? this.scroller.scrollTop : document.body.scrollTop) + this._originY) / ze;
                if (!this.isEmpty(this.backgroundColor)) {
                    var n = this._transformBackgroundColor(t);
                    We(e, n)
                }
                if (!this.isEmpty(this.opacity)) {
                    var i = this._transformOpacity(t);
                    We(e, i)
                }
                if (!this.isEmpty(this.transform) && this.transform.length > 0) {
                    var r = this._transform(t);
                    We(e, r)
                }
                We(this.$el.style, De(e))
            }, _transform: function (e) {
                return {transform: this.gradientTransform(this.transform, e)}
            }, _transformOpacity: function (e) {
                return {opacity: this.gradientOpacity(this.opacity.out[0], this.opacity.out[1], this.opacity.in[0], this.opacity.in[1], e)}
            }, _transformBackgroundColor: function (e) {
                return {backgroundColor: this.gradientColor(this.backgroundColor.out[0], this.backgroundColor.out[1], this.backgroundColor.in[0], this.backgroundColor.in[1], e)}
            }, gradientTransform: function (e, t) {
                for (var n = this, i = [], r = 0, o = e.length; r < o; r++)switch (e[r].type) {
                    case"translate":
                        i.push(n.gradientTranslate(e[r].out[0], e[r].out[1], e[r].out[2], e[r].out[3], e[r].in[0], e[r].in[1], t));
                        break;
                    case"scale":
                        i.push(n.gradientScale(e[r].out[0], e[r].out[1], e[r].out[2], e[r].out[3], e[r].in[0], e[r].in[1], t));
                        break;
                    case"rotate":
                        i.push(n.gradientRotate(e[r].out[0], e[r].out[1], e[r].in[0], e[r].in[1], t))
                }
                return i.join(" ")
            }, gradientTranslate: function (e, t, n, i, r, o, a) {
                var s = a > o ? o - r : a - r;
                return s <= 0 ? "translate3d(" + e + "px," + t + "px,0)" : s === o - r ? "translate3d(" + n + "px," + i + "px,0)" : "translate3d(" + (e + (n - e) / (o - r) * s) + "px," + (t + (i - e) / (o - r) * s) + "px,0)"
            }, gradientScale: function (e, t, n, i, r, o, a) {
                var s = a > o ? o - r : a - r;
                return s <= 0 ? "scale(" + e + "," + t + ")" : s === o - r ? "scale(" + n + "," + i + ")" : "scale(" + (e + (n - e) / (o - r) * s) + "," + (t + (i - e) / (o - r) * s) + ")"
            }, gradientRotate: function (e, t, n, i, r) {
                var o = r > i ? i - n : r - n;
                return o <= 0 ? "rotate(" + e + "deg)" : o === i - n ? "rotate(" + t + "deg)" : "rotate(" + (e + (t - e) / (i - n) * o) + "deg)"
            }, gradientOpacity: function (e, t, n, i, r) {
                var o = r > i ? i - n : r - n, a = (t - e) / (i - n) * o;
                return o <= 0 ? e : o === i - n ? t : (a = e + a, parseFloat(a).toFixed(2))
            }, gradientColor: function (e, t, n, i, r) {
                var o = this.colorRgb(e), a = o[0], s = o[1], l = o[2], c = this.colorRgb(t), u = c[0], d = c[1],
                    h = c[2], f = i - n, p = r > i ? i - n : r - n, m = (u - a) / f * p + a, g = (d - s) / f * p + s,
                    A = (h - l) / f * p + l;
                return p <= 0 ? e : p === i - n ? t : this.colorHex("rgb(" + parseInt(m) + "," + parseInt(g) + "," + parseInt(A) + ")")
            }, colorRgb: function (e) {
                var t = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
                if ((e = e.toLowerCase()) && t.test(e)) {
                    if (4 === e.length) {
                        for (var n = "#", i = 1; i < 4; i += 1)n += e.slice(i, i + 1).concat(e.slice(i, i + 1));
                        e = n
                    }
                    for (var r = [], o = 1; o < 7; o += 2)r.push(parseInt("0x" + e.slice(o, o + 2)));
                    return r
                }
                return e
            }, colorHex: function (e) {
                var t = e, n = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
                if (/^(rgb|RGB)/.test(t)) {
                    for (var i = t.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), r = "#", o = 0; o < i.length; o++) {
                        var a = Number(i[o]).toString(16);
                        a = a < 10 ? "0" + a : a, "0" === a && (a += a), r += a
                    }
                    return 7 !== r.length && (r = t), r
                }
                if (!n.test(t))return t;
                var s = t.replace(/#/, "").split("");
                if (6 === s.length)return t;
                if (3 === s.length) {
                    for (var l = "#", c = 0; c < s.length; c += 1)l += s[c] + s[c];
                    return l
                }
            }, isEmpty: function (e) {
                for (var t in e)return !1;
                return !0
            }, handleTouchstart: function (e) {
                if (0 === this.scroller.scrollTop && (this.scroller.style.transition = "none", 0 === this.scroller.scrollTop)) {
                    var t = e.touches[0];
                    this._biginTouch = !0, this._touchParams = {startY: t.pageY}
                }
            }, handleTouchmove: function (e) {
                if (this._biginTouch) {
                    var t = this._touchParams, n = t.startY, i = e.touches[0], r = i.pageY, o = r - n > 0 ? 1 : -1,
                        a = Math.abs(r - n),
                        s = a / this.scroller.offsetHeight > .5 ? a / this.scroller.offsetHeight : .5;
                    if (this.scrollDistance = a - a * s, o > 0) {
                        e.preventDefault(), this._originY = -this.scrollDistance, Fe(this._doTransform);
                        var l = {translate: "translate3d(0," + this.scrollDistance + "px,0)"};
                        $e(this.scroller, l, !1)
                    }
                }
            }, handleTouchend: function (e) {
                if (this._biginTouch) {
                    var t = this.scrollDistance > 100 ? 50 / this.scrollDistance : .5;
                    this._originY = 0, this._biginTouch = !1, this.scroller.style.transition = "transform " + t + "s", this.scroller.style.transform = "", Fe(this._doTransform)
                }
            }, bindEventListener: function () {
                if (this.bindingScroller) {
                    for (var e = this.$parent; e && !e.$refs[this.bindingScroller] && e.$parent;)e = e.$parent;
                    e.$refs[this.bindingScroller] && (this.scroller = e.$refs[this.bindingScroller].$el)
                } else this.scroller = window;
                this.scroller.addEventListener("scroll", this.scrollHandler, !1), this.scroller.addEventListener("touchstart", this.handleTouchstart, !1), this.scroller.addEventListener("touchmove", this.handleTouchmove, !1), this.scroller.addEventListener("touchend", this.handleTouchend, !1)
            }, destoryEventListener: function () {
                this.scroller.removeEventListener("scroll", this.scrollHandler), this.scroller.removeEventListener("touchstart", this.handleTouchstart), this.scroller.removeEventListener("touchmove", this.handleTouchmove), this.scroller.removeEventListener("touchend", this.handleTouchend)
            }
        },
        watch: {
            bindingScroller: function (e, t) {
                e !== t && (this.destoryEventListener(), this.bindEventListener())
            }
        },
        mounted: function () {
            this.bindEventListener()
        },
        destroyed: function () {
            this.destoryEventListener()
        },
        render: function (e) {
            return e("html:div", {
                attrs: {"weex-type": "parallax"},
                staticClass: "weex-parallax weex-ct",
                staticStyle: weex.extractComponentStyle(this)
            }, weex.trimTextVNodes(this.$slots.default))
        }
    }, qe = {
        init: function (e) {
            We = e.utils.extend, De = e.utils.autoPrefix, Fe = e.utils.nextFrame, $e = e.utils.addTransform, ze = e.config.env.scale, e.registerComponent("parallax", Ve)
        }
    }, Ge = {
        init: function (e) {
            e.install(Ne), e.install(Be), e.install(Pe), e.install(He), e.install(qe)
        }
    }, Je = window.lib || (window.lib = {}), Ke = Je.env || (Je.env = {}), Xe = window.navigator.userAgent;
    (Ue = Xe.match(/WindVane[\/\s]([\d._]+)/)) && (Qe = Ue[1]);
    var Ze = !1, et = "", tt = "", nt = ""
    ;Ue = Xe.match(/AliApp\(([A-Z-]+)\/([\d.]+)\)/i), Ue && (Ze = !0, et = Ue[1], nt = Ue[2], tt = et.indexOf("-PD") > 0 ? Ke.os.isIOS ? "iPad" : Ke.os.isAndroid ? "AndroidPad" : Ke.os.name : Ke.os.name), !et && Xe.indexOf("TBIOS") > 0 && (et = "TB"), Ke.aliapp = !!Ze && {
            windvane: Je.version(Qe || "0.0.0"),
            appname: et || "unkown",
            version: Je.version(nt || "0.0.0"),
            platform: tt || Ke.os.name
        }, Ke.taobaoApp = Ke.aliapp, Xe.match(/Weibo/i) ? Ke.thirdapp = {
        appname: "Weibo",
        isWeibo: !0
    } : Xe.match(/MicroMessenger/i) ? Ke.thirdapp = {
        appname: "Weixin",
        isWeixin: !0
    } : Ke.thirdapp = !1, l._has_windvane = function () {
        var e = Je.env.aliapp;
        return !!(e && e.windvane && e.windvane.val && "0.0.0" !== e.windvane.val) || !(!e || "TB" !== e.appname && "TM" !== e.appname)
    }();
    var it = function (e) {
        function t(t) {
            e.config.env.utdid = t
        }

        e.config.env.weexVersion = "0.12.14";
        var n = lib.env.aliapp, i = e.config.env;
        n && (i.appName = n.appname, i.appVersion = n.version.val);
        var r = e.config.env.weexVersion, o = (new Date).getFullYear();
        if (e.config.env.ttid = o + "@weex_h5_" + r, lib.windvane && global._has_windvane)try {
            lib.windvane.call("TBDeviceInfo", "getUtdid", {}, function (e) {
                t(e.utdid)
            }, function (e) {
                t(null)
            })
        } catch (e) {
            t(null)
        } else t(null);
        window._should_intercept_a_jump = function (e) {
            return "_blank" === e.getAttribute("target") && window.Ali && window.Ali.pushWindow && (window._ALI_HYBRID_AUTO_PUSH_WINDOW_VUE || window._ALI_NATIVE_AUTO_PUSH_WINDOW_VUE || window._ALI_HYBRID_AUTO_PUSH_WINDOW || window._ALI_NATIVE_AUTO_PUSH_WINDOW)
        }
    }, rt = u.init, ot = !1;
    u.init = function (e) {
        for (var t = [], n = arguments.length - 1; n-- > 0;)t[n] = arguments[n + 1];
        ot || (ot = !0, rt.call.apply(rt, [u, e].concat(t)), _.forEach(function (t) {
            return e.mixin(t)
        }), u.install(Oe), u.install(Ge), it(u))
    };
    var at = u.__vue__ || window.Vue;
    return at && u.init(at), global._process_style_note_page = "http://gitlab.alibaba-inc.com/weex/weex-vue-render/wikis/build-bundle", u
});