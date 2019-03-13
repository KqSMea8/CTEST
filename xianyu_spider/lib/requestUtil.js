/**
 * Created by ghy on 2019/3/13.
 */
const Util = require('./Util');
const window = require('./window/window');
const IsgCookie = require('./IsgCookie');
function r() {
    var n = window["XMLHttpRequest"];
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
    Util.k(window, "ActiveXObject", function (t) {
        return function (r) {
            try {
                r && /XMLHTTP/i.test(r) && IsgCookie.Q("")
            } catch (e) {
            }
            return window.n(t, arguments)
        }
    })
}

var c = Util.o("sufei_url");

const requestUtil = {
    p: r
}
module.exports = requestUtil;