/**
 * Created by ghy on 2019/3/12.
 */
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

var a = 2;
var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
var s = {};

const SecateUtil = {
    p: u,
    N: o,
    O: c
}
module.exports = SecateUtil;
