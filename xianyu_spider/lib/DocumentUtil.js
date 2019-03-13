/**
 * Created by ghy on 2019/3/12.
 */
const Util = require('./Util');
const window = require('./window/window')
const document = require('./window/document');
const screen = require('./window/screen');

const u = document.getElementsByTagName('head');
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

function bindEvent() {
    Util.j(document, "mousemove", e, !0), Util.j(document, "touchmove", e, !0), Util.j(document, "click", r, !0), Util.j(document, "keydown", o, !0);
    var t = "onwheel" in u ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
    Util.j(document, t, i, {
        capture: !0,
        passive: !0
    });
    Util.j(window, "focus", a);
    Util.j(window, "blur", f);
    Util.j(window, "resize", c);
    c();
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
    // return !document.hidden //todo 默认值
    return true;
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


var _ = true, k, A = 0, b = 0, j = 0, M = 0, T = 0, E = 0, x = !0, C = !0;

const DocumentUtil = {
    p: bindEvent,
    q: v,
    r: l,
    s: d,
    t: h,
    x: p,
    y: g,
    z: m,
    A: w,
    B: y,
};

module.exports = DocumentUtil;
