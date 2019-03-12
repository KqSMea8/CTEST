/**
 * Created by ghy on 2019/3/13.
 */
const window = require('./window/window');
const Util = require('./Util');
const IsgUtil = require('./IsgUtil');
const cookieUtil = require('./cookieUtil');
const ghy_isg = 'isg'
function u(n, t) {
    if (t)for (var r = 0; r < t.length; r++)if (t[r].test(n))return !0;
    return !1
}

function o(n) {
    return u(n, r) || u(n, e["sufei_jsonp_ignore"])
}

function c(t) {
    var r = Util.h(t);
    return !r || w.test(r)
}

function set_cookie(r) {
    console.log('1111111111111111111 set cookie:', 'isg', r, y, host)
    y || (y = new Date(Util.c() + 15552e6).toUTCString()),
        cookieUtil.setCookie(ghy_isg, r, y, host, "/")
}

function reset_isg_cookie() {
    console.log('3333')
    set_cookie(IsgUtil.Q(!1, null))
}

function set_isg_cookie(n) {

    console.log("3333")
    set_cookie(IsgUtil.Q(!0, n)), _ || (_ = setTimeout(function () {
        _ = 0, ghy_fun_s()
    }, 0))
}

function l(n) {
    if (o(n))return p;
    var r = IsgUtil.Q(!0, n);
    return n + (/\?/.test(n) ? "&" : "?") + ghy_isg + "=" + r
}

function h(n) {
    return null == n ? n = "" : n += "", c(n) ? (ghy_fun_v(n), null) : l(n)
}

function g() {
    var r = cookieUtil.getCookie(ghy_isg);
    IsgUtil.p(r);
    var e = window.location.hostname;
    host = Util.g(e), w = new RegExp("\\.?" + host.replace(/\./g, "\\.") + "$", "i"), reset_isg_cookie(), Util.j(window, "unload", function (n) {
        ghy_fun_s()
    })
}


var host, w, y, _;
const IstCookie = {
    Q: h,
    p: g
}

IstCookie.p();

module.exports = IstCookie;


