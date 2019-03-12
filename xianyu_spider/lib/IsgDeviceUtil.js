/**
 * Created by ghy on 2019/3/13.
 */

const window = require('./window/window');
const document = require('./window/document');
const navigator = require('./window/navigator');
const head = document.getElementsByTagName("head")[0];
const Util = require('./Util');

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
    return Util.i(t)
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
    var t = window["RTCPeerConnection"] || window["mozRTCPeerConnection"] || window["webkitRTCPeerConnection"];
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

var O = window["ActiveXObject"]
var L = navigator.plugins
var P = 0
var Q = [a, f, s, v, l, d, h, p, g, m, w, y, _, k, A, b];

var D = navigator.vendor
var B = "chrome" in window
var W = "ActiveXObject" in window
var S = head.style
var N = {
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

const IsgDeviceUtil = {
    C: j,
    D: M,
    F: T,
    H: E,
    p: C
}
module.exports = IsgDeviceUtil;