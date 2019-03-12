function fun_1(n) {
    for (var t = 0, r = n.length - 1; r >= 0; r--)t = t << 1 | +n[r];
    return t
}
var v = function () {
    function n(n) {
        this._fields = n;
        for (var t = 0, r = n.length; t < r; t++) {
            this[t] = 0;
        }
    }

    n.prototype.L = function () {
        for (var n = this._fields,
                 t = [],
                 r = -1,
                 e = 0,
                 i = n.length;
             e < i; e++)for (var u = this[e],
                                 o = n[e],
                                 c = r += o;
                             t[c] = 255 & u, 0 != --o;)--c, u >>= 8;
        return t
    };
    n.prototype.M = function (n) {
        for (var t = this._fields, r = 0, e = 0, i = t.length; e < i; e++) {
            var u = t[e], o = 0;
            do {
                o = (o << 8) + n[r++]
            } while (--u > 0);
            console.log("执行 M 函数", e, o >>> 0)
            this[e] = o >>> 0
        }
    }
    return n;


}();
var random = function () {
    let ret_random = 4294967295 * Math.random() >>> 0
    // console.log(ret_random, " ret random")
    return ret_random;
}
var GHY_FINNAL_DATA = new v([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1])

var f = 0;
function r() {
    return random() / 1e3 >>> 0
}
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
        // return !document.hidden
        return false
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
    t.p = s, t.q = v, t.r = l, t.s = d, t.t = h, t.x = p, t.y = g, t.z = m, t.A = w, t.B = y
}(c || (c = {}));

var ghy_var2;
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
            var e = s[n.charAt(r)] << 18 | s[n.charAt(r + 1)] << 12 | s[n.charAt(r + 2)] << 6 | s[n.charAt(r + 3)];
            t.push(e >> 16, e >> 8 & 255, 255 & e)
        }
        return t
    }

    function u() {
        for (var n = 0; n < 64; n++) {
            var t = f.charAt(n);
            s[t] = n
        }
    }

    function o(n) {
        var i = t(n), u = [a, i];
        return r(n, 0, u, 2, i), e(u)
    }

    function c(n) {
        var e = i(n), u = e[1], o = [];
        if (r(e, 2, o, 0, u), t(o) == u)return o
    }

    var a = 2, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", s = {};
    n.p = u, n.N = o, n.O = c
}(ghy_var2 || (ghy_var2 = {}));

function ghy_fun5(n) {
    for (var t = 0, r = n.length - 1; r >= 0; r--)t = t << 1 | +n[r];
    return t
}

function ghy_fun2(n, t) {
    var r = n.indexOf(t);
    return -1 == r ? n : n.substr(r + t.length)
}

function u(t, i) {
    var u;
    if (0 == GHY_FINNAL_DATA[4]) {
        GHY_FINNAL_DATA[4] = random();
        GHY_FINNAL_DATA[3] = r();
        u = !0
    }
    GHY_FINNAL_DATA[1] = random();
    GHY_FINNAL_DATA[2] = r();
    GHY_FINNAL_DATA[5] = 1;// 写死
    GHY_FINNAL_DATA[6] = 1;// 写死
    GHY_FINNAL_DATA[7] = 184293744;// 写死
    GHY_FINNAL_DATA[8] = 2373783015;// 写死 浏览器 navacate
    // GHY_FINNAL_DATA[15]=

    // 设置固定值验证数据正确性
    GHY_FINNAL_DATA[1] = 1362056; // 随机数
    GHY_FINNAL_DATA[2] = 1362056;
    GHY_FINNAL_DATA[3] = 2998020;
    GHY_FINNAL_DATA[4] = 2375178291;

    console.log(GHY_FINNAL_DATA[2], GHY_FINNAL_DATA[3], GHY_FINNAL_DATA[4]);
    GHY_FINNAL_DATA[9] = c.q(), GHY_FINNAL_DATA[10] = c.r(), GHY_FINNAL_DATA[11] = c.s(), GHY_FINNAL_DATA[12] = c.t();
    var a = c.x();
    GHY_FINNAL_DATA[13] = a.u, GHY_FINNAL_DATA[14] = a.v;
    var v = c.z(), l = c.B(), d = c.A(), h = [u, c.y(), t, v, a.w, false, d, l];

    console.log('hhhhhhhhhhh', h)
    if (GHY_FINNAL_DATA[15] = fun_1(h), t) {
        console.log("进入if")
        GHY_FINNAL_DATA[0] = ++f, e();
        ghy_fun2(i, "//")
    } else GHY_FINNAL_DATA[0] = 0;
    for (var key in GHY_FINNAL_DATA) {
        if (typeof GHY_FINNAL_DATA[key] != 'function') {
            console.log(key, ":", GHY_FINNAL_DATA[key])
        }
        else {
            console.log(key, ": function()")
        }
    }


    // 设置固定值，这些值需要在浏览器中才会生效
    a[1] = 1822169403; // 变化,随机数
    a[7] = 184293744; // 固定
    a[8] = 3086956040; // 固定

    var p = GHY_FINNAL_DATA.L(), g = ghy_var2.N(p);

    console.log("return g:", t, JSON.stringify(p), i, g)
    return g
}

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
            var r = s.O(t);
            r && GHY_FINNAL_DATA.M(r)
        }
        GHY_FINNAL_DATA[1] = ghy_head_n.a();
        GHY_FINNAL_DATA[5] = a.D();
        GHY_FINNAL_DATA[6] = l.P();
        e();
        GHY_FINNAL_DATA[8] = ghy_head_n.b(navigator.userAgent);
        GHY_FINNAL_DATA[16] = a.C();
        GHY_FINNAL_DATA[17] = a.F();
        a.H(function (n) {
            GHY_FINNAL_DATA[7] = n
        })
    }

    function u(t, i) {

        var u;
        0 == GHY_FINNAL_DATA[4] && (GHY_FINNAL_DATA[4] = ghy_head_n.a(), GHY_FINNAL_DATA[3] = r(), u = !0), GHY_FINNAL_DATA[2] = r(), GHY_FINNAL_DATA[9] = c.q(), GHY_FINNAL_DATA[10] = c.r(), GHY_FINNAL_DATA[11] = c.s(), GHY_FINNAL_DATA[12] = c.t();
        GHY_FINNAL_DATA[2] = 1362056; //Ah8fIpm048K1gOfnHpimbF1Dr3KphHMmjdh3GrFsu04VQD_CuVQDdp2zB2rB
        GHY_FINNAL_DATA[4] = 2375178291;
        GHY_FINNAL_DATA[3] = 2998020;

        var a = c.x();
        GHY_FINNAL_DATA[13] = a.u, GHY_FINNAL_DATA[14] = a.v;
        var v = c.z(), l = c.B(), d = c.A(), h = [u, c.y(), t, v, a.w, history.length > 0, d, l];
        if (GHY_FINNAL_DATA[15] = ghy_head_n.i(h), t) {
            console.log("进入if")
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
        var p = GHY_FINNAL_DATA.L(), g = s.N(p);
        console.log("return g:", t, i, p, g)
        return g
    }

    var GHY_FINNAL_DATA = new v([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1]), f = 0;
    ghy_t.p = i, ghy_t.Q = u
}(ghy_d || (ghy_d = {}));

u(false, null);

function ghy_set_isg_cookie() {
}

function ghy_fun_n() {

}
function ghy_fun_s() {

}