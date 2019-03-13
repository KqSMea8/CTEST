!function () {
    var ghy_head_n, ghy_isg = "isg",
        r = [/(?:\.alicdn\.com|\.mmstat\.com|\.tanx\.com|\.google\.com|\.googleapis\.com)\//], e = self,
        i = !!e.addEventListener, u = document.getElementsByTagName("head")[0], o = navigator.userAgent;
    !function (n) {
        function t() {
            let ramdom = 4294967295 * Math.random() >>> 0
            return ramdom;
        }

        function r(n) {
            for (var t = 0, r = 0, e = n.length; r < e; r++)t = (t << 5) - t + n.charCodeAt(r), t >>>= 0;
            return t
        }

        function e(n, t) {
            var r = n.indexOf(t);
            return -1 == r ? n : n.substr(0, r)
        }

        function u(n, t) {
            var r = n.indexOf(t);
            return -1 == r ? n : n.substr(r + t.length)
        }

        function o(n) {
            return /^(\d+\.){3}\d+$/.test(n)
        }

        function c(n) {
            if (o(n))return n;
            var t = g.test(n) ? -3 : -2;
            return n.split(".").slice(t).join(".")
        }

        function a(n) {
            if (!n)return null;
            var t = n.match(m);
            if (!t)return null;
            var r = t[1];
            return w.test(r) && (r = u(r, "@"), r = e(r, ":")), r
        }

        function f(n) {
            for (var t = 0, r = n.length - 1; r >= 0; r--)t = t << 1 | +n[r];
            return t
        }

        function s(n, t, r, e) {
            i ? n.addEventListener(t, r, e) : n["attachEvent"]("on" + t, function () {
                r(event)
            })
        }

        function v(n, t, r) {
            if (!n)return !1;
            var e = n[t];
            if (!e)return !1;
            var i = r(e);
            return n[t] = i, !0
        }

        function l(n, t, r) {
            if (!y)return !1;
            var e = y(n, t);
            return !(!e || !e.set) && (e.set = r(e.set), i || (e.get = function (n) {
                    return function () {
                        return n.call(this)
                    }
                }(e.get)), Object.defineProperty(n, t, e), !0)
        }

        function d(n, t, r) {
            if ("apply" in t)return t.apply(n, r);
            switch (r.length) {
                case 0:
                    return t();
                case 1:
                    return t(r[0]);
                case 2:
                    return t(r[0], r[1]);
                default:
                    return t(r[0], r[2], r[3])
            }
        }

        function h(n, t) {
            switch (t.length) {
                case 0:
                    return new n;
                case 1:
                    return new n(t[0]);
                case 2:
                    return new n(t[0], t[1]);
                default:
                    return new n(t[0], t[2], t[3])
            }
        }

        function p(n) {
            return "__" + n
        }

        n.a = t,
            n.b = r, n.c = Date.now || function () {
                return +new Date
            }, n.d = e, n.e = u, n.f = o;
        var g = /\.com\.cn$|\.com\.hk$/;
        n.g = c;
        var m = /^(?:https?:)?\/{2,}([^\/?#\\]+)/i, w = /[@:]/;
        n.h = a, n.i = f, n.j = s, n.k = v;
        var y = Object.getOwnPropertyDescriptor;
        n.l = l, n.m = d, n.n = h, n.o = p
    }(ghy_head_n || (ghy_head_n = {}));
    var c;
    !function (t) {
        function r(n) {
            b++, x = n.isTrusted == undefined || n.isTrusted, T = n.clientX, E = n.clientY
        }

        function e(n) {
            A++
        }

        function i(n) {
            j++
        }

        function o(n) {
            M++
        }

        function c() {
            var n = screen.availWidth, t = window.outerWidth;
            null == t && (t = document.documentElement.clientWidth || document.body.clientWidth), _ = n - t < 20
        }

        function a(n) {
            k = !0, C = !0
        }

        function f(n) {
            C = !1
        }

        function s() {
            ghy_head_n.j(document, "mousemove", e, !0), ghy_head_n.j(document, "touchmove", e, !0), ghy_head_n.j(document, "click", r, !0), ghy_head_n.j(document, "keydown", o, !0);
            var t = "onwheel" in u ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
            ghy_head_n.j(document, t, i, {
                capture: !0,
                passive: !0
            }), ghy_head_n.j(window, "focus", a), ghy_head_n.j(window, "blur", f), ghy_head_n.j(window, "resize", c), c()
        }

        function v() {
            return A
        }

        function l() {
            return j
        }

        function d() {
            return b
        }

        function h() {
            return M
        }

        function p() {
            return {u: T, v: E, w: x}
        }

        function g() {
            return !document.hidden
        }

        function m() {
            return C
        }

        function w() {
            return k
        }

        function y() {
            return _
        }

        var _, k, A = 0, b = 0, j = 0, M = 0, T = 0, E = 0, x = !0, C = !0;
        t.p = s,
            t.q = v, t.r = l,
            t.s = d, t.t = h,
            t.x = p, t.y = g, t.z = m, t.A = w, t.B = y
    }(c || (c = {}));


    var a;
    !function (t) {
        function r(n) {
            if (!O)return !1;
            var t;
            try {
                t = new O(n)
            } catch (r) {
                return !1
            }
            return !!t
        }

        function c(n) {
            for (var t = 0; t < P; t++) {
                var r = L[t].name;
                if (n.test(r))return !0
            }
            return !1
        }

        function a() {
            return c(/Shockwave/i) || r("ShockwaveFlash.ShockwaveFlash")
        }

        function f() {
            return navigator.javaEnabled()
        }

        function s() {
            return c(/PDF|Acrobat/i)
        }

        function v() {
            return c(/Native Client/)
        }

        function l() {
            return c(/WangWang/i)
        }

        function d() {
            return c(/Alipay/i)
        }

        function h() {
            return "$cdc_asdjflasutopfhvcZLmcfl_" in document
        }

        function p() {
            return !0
        }

        function g() {
            try {
                return "localStorage" in window
            } catch (n) {
                return !1
            }
        }

        function m() {
            var n;
            try {
                n = document.createElement("canvas").getContext("webgl2")
            } catch (t) {
            }
            return !!n
        }

        function w() {
            return "ontouchstart" in document
        }

        function y() {
            return "1" == (navigator["msDoNotTrack"] || navigator["doNotTrack"])
        }

        function _() {
            return /zh-cn/i.test(navigator.language || navigator["systemLanguage"])
        }

        function k() {
            var n = navigator["languages"];
            return n && n.length > 0
        }

        function A() {
            return -480 === (new Date).getTimezoneOffset()
        }

        function b() {
            return "iso-8859-1" === document["defaultCharset"]
        }

        function j() {
            for (var t = [], r = 0; r < 16; r++)t[r] = Q[r]();
            // console.log("json t:", JSON.stringify(t));
            return ghy_head_n.i(t)
        }

        function M() {
            for (var n in N)if (N.hasOwnProperty(n)) {
                var t = N[n];
                if (t())return +n.substr(1)
            }
            return 0
        }

        function T() {
            return P
        }

        function E(n) {
            var t = e["RTCPeerConnection"] || e["mozRTCPeerConnection"] || e["webkitRTCPeerConnection"];
            if (!t)return void n(0);
            var r = {iceServers: [{urls: "stun:x"}]}, i = new t(r);
            i.onicecandidate = function (t) {
                var r = t.candidate;
                if (!r)return void n(0);
                var e = x(r.candidate);
                null != e && (n(e), i.onicecandidate = null)
            }, i["createDataChannel"](""), i.createOffer(function (n) {
                i.setLocalDescription(n)
            }, function (t) {
                n(0)
            })
        }

        function x(n) {
            var t = /(\d+)\.(\d+)\.(\d+)\.(\d+)\D/.exec(n);
            return t ? (+t[1] << 24 | +t[2] << 16 | +t[3] << 8 | +t[4]) >>> 0 : null
        }

        function C() {
            L && (P = L.length)
        }

        var O = e["ActiveXObject"], L = navigator.plugins, P = 0, Q = [a, f, s, v, l, d, h, p, g, m, w, y, _, k, A, b];
        t.C = j;
        var D = navigator.vendor, B = "chrome" in window, W = "ActiveXObject" in window, S = u.style, N = {
            _13: function () {
                return "callPhantom" in window
            }, _14: function () {
                return /python/i.test(navigator.appVersion)
            }, _15: function () {
                return "sgAppName" in navigator
            }, _16: function () {
                return /Maxthon/i.test(D)
            }, _17: function () {
                return "opr" in window
            }, _18: function () {
                return B && /BIDUBrowser/i.test(o)
            }, _19: function () {
                return B && /LBBROWSER/i.test(o)
            }, _20: function () {
                return B && /QQBrowser/.test(o)
            }, _21: function () {
                return B && /UBrowser/i.test(o)
            }, _22: function () {
                return B && /2345Explorer/.test(o)
            }, _23: function () {
                return B && /TheWorld/.test(o)
            }, _24: function () {
                return B && "MSGesture" in window
            }, _25: function () {
                return "aef" in window
            }, _1: function () {
                return B
            }, _2: function () {
                return "MozSettingsEvent" in window
            }, _3: function () {
                return "safari" in window
            }, _4: function () {
                return W && !("maxHeight" in S)
            }, _5: function () {
                return W && !("postMessage" in window)
            }, _6: function () {
                return W && !i
            }, _7: function () {
                return W && !window["Uint8Array"]
            }, _8: function () {
                return W && !window["WeakMap"]
            }, _9: function () {
                return W && window["WeakMap"]
            }, _10: function () {
                return "Google Inc." === navigator.vendor
            }, _11: function () {
                return "Apple Computer, Inc." === navigator.vendor
            }, _12: function () {
                return W
            }
        };
        t.D = M, t.F = T, t.H = E, t.p = C
    }(a || (a = {}));
    var cookieUtil;
    !function (n) {
        function getCookie(n) {
            var t = document.cookie, r = "; " + n + "=", e = t.indexOf(r);
            if (-1 === e) {
                if (r = n + "=", t.substr(0, r.length) != r)return;
                e = 0
            }
            var i = e + r.length, u = t.indexOf("; ", i);
            return -1 === u && (u = t.length), t.substring(i, u)
        }

        function setCookie(n, t, r, e, i) {
            console.log("悄悄计算cookie")
            var u = n + "=" + t;
            e && (u += "; domain=" + e), i && (u += "; path=" + i), r && (u += "; expires=" + r), document.cookie = u
        }

        function clearCookie(n, t, e) {
            setCookie(n, "", "Thu, 01 Jan 1970 00:00:00 GMT", t, e)
        }

        n.getCookie = getCookie, n.setCookie = setCookie, n.K = clearCookie
    }(cookieUtil || (cookieUtil = {}));

    var ghy_var_s1, v = function () {
        function n(n) {
            this._fields = n;
            for (var t = 0, r = n.length; t < r; t++)this[t] = 0
        }

        return n.prototype.L = function () {
            for (var n = this._fields, t = [], r = -1, e = 0, i = n.length; e < i; e++)for (var u = this[e], o = n[e], c = r += o; t[c] = 255 & u, 0 != --o;)--c, u >>= 8;
            return t
        }, n.prototype.M = function (n) {
            for (var t = this._fields, r = 0, e = 0, i = t.length; e < i; e++) {
                var u = t[e], o = 0;
                do {
                    o = (o << 8) + n[r++]
                } while (--u > 0);
                // console.log("执行 M 函数", e, o >>> 0)
                this[e] = o >>> 0
            }
        }, n
    }();
    !function (n) {
        function t(n) {
            for (var t = 0, r = 0, e = n.length; r < e; r++)t = (t << 5) - t + n[r];
            return 255 & t
        }

        function r(n, t, r, e, i) {
            for (var u = n.length; t < u;)r[e++] = n[t++] ^ 255 & i, i = ~(131 * i)
        }

        function e(n) {
            for (var t = [], r = n.length, e = 0; e < r;) {
                var i = n[e++] << 16 | n[e++] << 8 | n[e++];
                t.push(f.charAt(i >> 18), f.charAt(i >> 12 & 63), f.charAt(i >> 6 & 63), f.charAt(63 & i))
            }
            return t.join("")
        }

        function i(n) {
            for (var t = [], r = 0; r < n.length; r += 4) {
                var e = ghy_array_var_s[n.charAt(r)] << 18 | ghy_array_var_s[n.charAt(r + 1)] << 12 | ghy_array_var_s[n.charAt(r + 2)] << 6 | ghy_array_var_s[n.charAt(r + 3)];
                t.push(e >> 16, e >> 8 & 255, 255 & e)
            }
            return t
        }

        function u() {
            for (var n = 0; n < 64; n++) {
                var t = f.charAt(n);
                ghy_array_var_s[t] = n
            }
        }

        function o(n) {
            var i = t(n), u = [a, i];
            return r(n, 0, u, 2, i), e(u)
        }

        function c(n) {
            var e = i(n), u = e[1], o = [];
            // console.log('最终验证',n, e, u, o);
            if (r(e, 2, o, 0, u), t(o) == u)return o
        }

        var a = 2,
            f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            ghy_array_var_s = {};
        n.p = u, n.N = o, n.O = c
    }(ghy_var_s1 || (ghy_var_s1 = {}));
    var l;
    !function (n) {
        function t() {
            for (var n = navigator.platform, t = 0; t < r.length; t++)if (r[t].test(n))return t + 1;
            return 0
        }

        var r = [/^Win32/, /^Win64/, /^Linux armv|Android/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/];
        n.P = t
    }(l || (l = {}));

    var ghy_d;
    !function (ghy_t) {
        function r() {
            return ghy_head_n.c() / 1e3 >>> 0
        }

        function e() {
            ghy_head_n.d(location.href, "#")
        }

        function i(t) {
            if (c.p(), a.p(), t) {
                var r = ghy_var_s1.O(t);
                if (r) {
                    GHY_FINNAL_DATA.M(r)
                }
                // r &&
            }
            let my_now = ghy_head_n.a();
            console.log("==============my now", my_now)
            GHY_FINNAL_DATA[1] = my_now,

                GHY_FINNAL_DATA[5] = a.D(), GHY_FINNAL_DATA[6] = l.P(), e(),
                GHY_FINNAL_DATA[8] = ghy_head_n.b(navigator.userAgent), GHY_FINNAL_DATA[16] = a.C(), GHY_FINNAL_DATA[17] = a.F(),
                a.H(function (n) {
                    GHY_FINNAL_DATA[7] = n
                })
        }

        function u(t, i) {
            console.log('##CONT SIGN', t, i)
            var u;
            if (0 == GHY_FINNAL_DATA[4]) {
                console.log('进入了4', GHY_FINNAL_DATA[4])
                GHY_FINNAL_DATA[4] = ghy_head_n.a(), GHY_FINNAL_DATA[3] = r(), u = !0
            }

            GHY_FINNAL_DATA[2] = r(), GHY_FINNAL_DATA[9] = c.q(), GHY_FINNAL_DATA[10] = c.r(), GHY_FINNAL_DATA[11] = c.s(), GHY_FINNAL_DATA[12] = c.t();

            GHY_FINNAL_DATA[1] = 50451018;  //Ajo6UF4RbqGoV-J0y6cbr5CUi2BWF6e1vRI_jkQz5k2YN9pxLHsO1QBB8fUX
            GHY_FINNAL_DATA[2] = 1362056;
            GHY_FINNAL_DATA[3] = 2998020;
            GHY_FINNAL_DATA[4] = 2375178291;

            var a = c.x();
            GHY_FINNAL_DATA[13] = a.u, GHY_FINNAL_DATA[14] = a.v;
            var v = c.z(), l = c.B(), d = c.A(), h = [u, c.y(), t, v, a.w, history.length > 0, d, l];
            console.log('计算 15 属性', JSON.stringify(h));
            if (GHY_FINNAL_DATA[15] = ghy_head_n.i(h), t) {
                // console.log("进入if")
                GHY_FINNAL_DATA[0] = ++f, e();
                ghy_head_n.e(i, "//")
            } else GHY_FINNAL_DATA[0] = 0;
            for (var key in GHY_FINNAL_DATA) {
                if (typeof GHY_FINNAL_DATA[key] != 'function') {
                    console.log(key, ":", GHY_FINNAL_DATA[key])
                }
                else {
                    console.log(key, ": function()")
                }
            }
            var p = GHY_FINNAL_DATA.L(), g = ghy_var_s1.N(p);
            console.log("return g:", t, i, p, g)
            return g
        }

        var GHY_FINNAL_DATA = new v([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1]), f = 0;
        ghy_t.p = i;
        ghy_t.Q = u
    }(ghy_d || (ghy_d = {}));

    var ghy_cookie_h, p = "";

    !function (i) {
        function u(n, t) {
            if (t)for (var r = 0; r < t.length; r++)if (t[r].test(n))return !0;
            return !1
        }

        function o(n) {
            return u(n, r) || u(n, e["sufei_jsonp_ignore"])
        }

        function c(t) {
            var r = ghy_head_n.h(t);
            return !r || w.test(r)
        }

        function set_cookie(r) {
            console.log('set cookie:', ghy_isg, r, y, host)
            y || (y = new Date(ghy_head_n.c() + 15552e6).toUTCString()),
                cookieUtil.setCookie(ghy_isg, r, y, host, "/")
        }

        function reset_isg_cookie() {
            console.log('reset_isg_cookie')
            set_cookie(ghy_d.Q(!1, null))
        }

        function set_isg_cookie(n) {
            console.log("set_isg_cookie", n)
            set_cookie(ghy_d.Q(!0, n)), timeInterval || (timeInterval = setTimeout(function () {
                timeInterval = 0, reset_isg_cookie()
            }, 0))
        }

        function l(n) {
            if (o(n))return p;
            var r = ghy_d.Q(!0, n);
            return n + (/\?/.test(n) ? "&" : "?") + ghy_isg + "=" + r
        }

        function h(n) {
            return null == n ? n = "" : n += "", c(n) ? (set_isg_cookie(n), null) : l(n)
        }

        function g() {
            console.log('document cookie', document.cookie)
            var r = cookieUtil.getCookie(ghy_isg);
            console.log('init r', r)
            ghy_d.p(r);
            var e = location.hostname;
            host = ghy_head_n.g(e), w = new RegExp("\\.?" + host.replace(/\./g, "\\.") + "$", "i"), reset_isg_cookie(), ghy_head_n.j(window, "unload", function (n) {
                reset_isg_cookie()
            })
        }

        var host, w, y, timeInterval;
        i.Q = h, i.p = g
    }(ghy_cookie_h || (ghy_cookie_h = {}));
    var g;
    !function (t) {
        function r() {
            i() || (o("insertBefore"), o("appendChild"))
        }

        function i() {
            var t = e["HTMLScriptElement"];
            return !!t && ghy_head_n.l(t.prototype, "src", function (n) {
                    return function (t) {
                        try {
                            var r = a(t);
                            r && (t = r)
                        } catch (e) {
                        }
                        return n.call(this, t)
                    }
                })
        }

        function o(t) {
            var r = e["Element"];
            r ? ghy_head_n.k(r.prototype, t, c) : (ghy_head_n.k(u, t, c), ghy_head_n.k(document.body, t, c))
        }

        function c(t) {
            return function (r) {
                if (r && "SCRIPT" === r.tagName)try {
                    var e = a(r.src);
                    e && (r.src = e)
                } catch (i) {
                }
                return ghy_head_n.m(this, t, arguments)
            }
        }

        function a(n) {
            return f.test(n) ? /isg=/.test(n) ? null : ghy_cookie_h.Q(n) : null
        }

        t.p = r;
        var f = /callback=/
    }(g || (g = {}));
    var SubmitUtil;
    !function (t) {
        function r(t) {
            return ghy_head_n.d(t.href, "#")
        }

        function i(n) {
            var t = n.target;
            if (!t) {
                var r = document.getElementsByTagName("base"), e = r.length;
                e > 0 && (t = r[e - 1].target)
            }
            return t
        }

        function GHY_FUN_U(n) {
            if (/^https?\:/.test(n.protocol)) {
                var t = i(n);
                if (!t || /^_self$/i.test(t)) {
                    if (r(n) === s && n.hash)return
                }
                ghy_cookie_h.Q(n.href)
            }
        }

        function o(n) {
            if (!n.defaultPrevented)for (var t = n.target || n.srcElement; t;) {
                var r = t.tagName;
                if ("A" === r || "AREA" === r) {
                    GHY_FUN_U(t);
                    break
                }
                t = t.parentNode
            }
        }

        function c(n) {
            var t = n.target || n.srcElement;
            if (t[v] !== l) {
                ghy_cookie_h.Q(t.action)
            }
        }

        function a(n) {
            return function () {
                try {
                    var t = this;
                    ghy_cookie_h.Q(t.action), t[v] = ++l
                } catch (r) {
                }
                return n.apply(this, arguments)
            }
        }

        function f() {
            s = r(location), ghy_head_n.j(document, "click", o), ghy_head_n.j(document, "submit", c);
            var t = e["HTMLFormElement"];
            t && ghy_head_n.k(t.prototype, "submit", a)
        }

        var s, v = ghy_head_n.o("sufei_id"), l = 0;
        t.p = f
    }(SubmitUtil || (SubmitUtil = {}));
    var callAppUtil;
    !function (t) {
        function r() {
            i(), /Mobile/.test(o) && (u(), c() || document.addEventListener("DOMContentLoaded", c))
        }

        function i() {
            ghy_head_n.k(e, "fetch", function (n) {
                return function (t, r) {
                    if ("string" != typeof t)return n.apply(this, arguments);
                    try {
                        var e = ghy_cookie_h.Q(t);
                        e ? t = e : "" === e || (r = r || {}, r.credentials = r.credentials || "include")
                    } catch (i) {
                    }
                    return n.call(this, t, r)
                }
            })
        }

        function u() {
            var t = e["lib"];
            t && ghy_head_n.k(t.windvane, "call", function (n) {
                return function (t, r, e) {
                    if ("MtopWVPlugin" === t && "send" === r)try {
                        ghy_cookie_h.Q("")
                    } catch (i) {
                    }
                    return n.apply(this, arguments)
                }
            })
        }

        function c() {
            var t = e["jsbridge"];
            if (t && (t = t["default"]))return ghy_head_n.k(t, "pushBack", function (n) {
                return function (t, r, e) {
                    if ("native:" === t)try {
                        ghy_cookie_h.Q("")
                    } catch (i) {
                    }
                    return n.apply(this, arguments)
                }
            }), !0
        }

        t.p = r
    }(callAppUtil || (callAppUtil = {}));
    var requestUtil;
    !function (t) {
        function r() {
            var n = e["XMLHttpRequest"];
            if (n) {
                var t = n.prototype;
                t ? i(t) : u()
            }
            o()
        }

        function i(t) {
            ghy_head_n.k(t, "open", function (n) {
                return function (t, r) {
                    try {
                        this[c] = r
                    } catch (e) {
                    }
                    return n.apply(this, arguments)
                }
            }), ghy_head_n.k(t, "send", function (n) {
                return function (t) {
                    try {
                        var r = this[c];
                        ghy_cookie_h.Q(r)
                    } catch (e) {
                    }
                    return n.apply(this, arguments)
                }
            })
        }

        function u() {
            ghy_head_n.k(e, "XMLHttpRequest", function (t) {
                return function () {
                    try {
                        ghy_cookie_h.Q("")
                    } catch (r) {
                    }
                    return ghy_head_n.n(t, arguments)
                }
            })
        }

        function o() {
            ghy_head_n.k(e, "ActiveXObject", function (t) {
                return function (r) {
                    try {
                        r && /XMLHTTP/i.test(r) && ghy_cookie_h.Q("")
                    } catch (e) {
                    }
                    return ghy_head_n.n(t, arguments)
                }
            })
        }

        var c = ghy_head_n.o("sufei_url");
        t.p = r
    }(requestUtil || (requestUtil = {}));
    var _;
    !function (n) {
        function t() {
            ghy_var_s1.p(), ghy_cookie_h.p(), SubmitUtil.p(), requestUtil.p(), callAppUtil.p(), g.p()
        }

        var r = "_sufei_data2";
        !function () {
            if (!document[r]) {
                document[r] = 309;
                try {
                    t()
                } catch (n) {
                }
            }
        }()
    }(_ || (_ = {}))
}();