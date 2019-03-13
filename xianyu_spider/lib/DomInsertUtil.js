/**
 * Created by ghy on 2019/3/13.
 */
const window = require('./window/window');
const document = require('./window/document');
const Util = require('./Util');
var u=document.getElementsByTagName("head")[0]
function r() {
    i() || (o("insertBefore"), o("appendChild"))
}

function i() {
    var t = window["HTMLScriptElement"];
    return !!t && Util.l(t.prototype, "src", function (n) {
            return function (t) {
                try {
                    var r = a(t);
                    r && (t = r)
                } catch (e) {
                }
                return n.call(this, t)
            }
        })
}

function o(t) {
    var r = window["Element"];
    r ? Util.k(r.prototype, t, c) : (Util.k(u, t, c), Util.k(document.body, t, c))
}

function c(t) {
    return function (r) {
        if (r && "SCRIPT" === r.tagName)try {
            var e = a(r.src);
            e && (r.src = e)
        } catch (i) {
        }
        return Util.m(this, t, arguments)
    }
}

function a(n) {
    return f.test(n) ? /isg=/.test(n) ? null : ghy_cookie_h.Q(n) : null
}

var f = /callback=/;

const DomInsertUtil = {
    p: r
}

module.exports = DomInsertUtil;