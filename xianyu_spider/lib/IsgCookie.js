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

function set_cookie(r = '') {
    console.log('SET COOKIE:', 'isg', r, y, host)
    y || (y = new Date(Util.c() + 15552e6).toUTCString()),
        cookieUtil.setCookie(ghy_isg, r, y, host, "/")
}

function reset_isg_cookie() {
    console.log('reset_isg_cookie')
    set_cookie(IsgUtil.Q(!1, null))
}

function set_isg_cookie(n) {
    console.log("set_isg_cookie", n)
    set_cookie(IsgUtil.Q(!0, n)), _ || (_ = setTimeout(function () {
        _ = 0, reset_isg_cookie()
    }, 0))
}

function l(n) {
    if (o(n))return p;
    var r = IsgUtil.Q(!0, n);
    return n + (/\?/.test(n) ? "&" : "?") + ghy_isg + "=" + r
}

function h(n) {
    return null == n ? n = "" : n += "", c(n) ? (set_isg_cookie(n), null) : l(n)
}

function isg_init_full() {
    var r = cookieUtil.getCookie(ghy_isg);
    console.log('init r', r)
    IsgUtil.p(r);
    var e = window.location.hostname;
    host = Util.g(e), w = new RegExp("\\.?" + host.replace(/\./g, "\\.") + "$", "i"), reset_isg_cookie(), Util.j(window, "unload", function (n) {
        reset_isg_cookie()
    })
}


var host, w, y, _;
const IsgCookie = {
    Q: h,
    p: isg_init_full
}

// IsgCookie.p();// done
// IstCookie.Q(false, null);
// Ajo6UF4RbqGoV-J0y6cbr5CUi2BWF6e1vRI_jkQz5k2YN9pxLHsO1QBB8fUX
// IsgCookie.Q(true, '//h5api.m.taobao.com/h5/mtop.taobao.idle.house.search/1.0/?jsv=2.4.9&appKey=12574478&t=1552447588282&sign=ce9b57c67f634789fb9cd7821a6fd95f&tb_eagleeyex_scm_project=default-ide-project-staging8&api=mtop.taobao.idle.house.search&v=1.0&ecode=1&dataType=originaljsonp&jsonpIncPrefix=weexcb&ttid=2019%40weex_h5_0.12.14&type=originaljson');

module.exports = IsgCookie;


