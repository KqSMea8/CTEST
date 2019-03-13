/**
 * Created by ghy on 2019/3/13.
 */
const Util = require('./Util');
const window = require('../lib/window/window');
const document = require('../lib/window/document');
function r(t) {
    return Util.d(t.href, "#")
}

function i(n) {
    var t = n.target;
    if (!t) {
        var r = document.getElementsByTagName("base"), e = r.length;
        e > 0 && (t = r[e - 1].target)
    }
    return t
}

function u(n) {
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
            u(t);
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
    s = r(window.location), Util.j(document, "click", o), Util.j(document, "submit", c);
    var t = window["HTMLFormElement"];
    t && Util.k(t.prototype, "submit", a)
}

var s, v = Util.o("sufei_id"), l = 0;
const SubmitUtil = {
    p: f
}
module.exports = SubmitUtil;