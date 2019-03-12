/**
 * Created by ghy on 2019/3/12.
 */
var g = /\.com\.cn$|\.com\.hk$/;
var m = /^(?:https?:)?\/{2,}([^\/?#\\]+)/i, w = /[@:]/;
var y = Object.getOwnPropertyDescriptor;
var isEvent = false;
function t() {
    let ramdom = 4294967295 * Math.random() >>> 0
    console.log('random', ramdom)
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

function addEvent(n, t, r, e) {
    // isEvent ? n.addEventListener(t, r, e) : n["attachEvent"]("on" + t, function () {
    //     r(event)
    // })
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


const Util = {
    a: t,
    b: r,
    c: Date.now,
    d: e,
    e: u,
    f: o,
    g: c,
    h: a,
    i: f,
    j: addEvent,
    k: v,
    l: l,
    m: d,
    n: h,
    o: p
}
module.exports = Util;