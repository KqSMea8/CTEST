/**
 * Created by ghy on 2019/3/13.
 */

const Util = require('./Util');
const window = require('./window/window');
const document = require('./window/document');
const navigator = require('./window/navigator');
var o = navigator.userAgent;
function r() {
    i(), /Mobile/.test(o) && (u(), c() || document.addEventListener("DOMContentLoaded", c))
}

function i() {
    Util.k(window, "fetch", function (n) {
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
    var t = window["lib"];
    t && Util.k(t.windvane, "call", function (n) {
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
    var t = window["jsbridge"];
    if (t && (t = t["default"]))return Util.k(t, "pushBack", function (n) {
        return function (t, r, e) {
            if ("native:" === t)try {
                ghy_cookie_h.Q("")
            } catch (i) {
            }
            return n.apply(this, arguments)
        }
    }), !0
}

const callAppUtil = {
    p: r
}

module.exports = callAppUtil;