/**
 * Created by ghy on 2019/3/12.
 */
const document = require('./window/document');
const Cookie = require('../APP/Cookie');

const cookieUtil = {
    getCookie: function (key) {
        return Cookie.getCookie(key);
        // return 'An5-hSJl8j3Me6Yg5_MXo7QIz5TKQ1tJY3zAFSiH6kG8yx6lkE-SSaTrMa34';
    },
    setCookie(n, t, r, e, i){
        var u = n + "=" + t;
        e && (u += "; domain=" + e), i && (u += "; path=" + i), r && (u += "; expires=" + r);
        Cookie.setCookie(n, t);
        return u
    },
    clearCookie(n, t, e){
        Cookie.setCookie(n, '');
        this.setCookie(n, "", "Thu, 01 Jan 1970 00:00:00 GMT", t, e)
    },
};
module.exports = cookieUtil;