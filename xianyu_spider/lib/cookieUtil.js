/**
 * Created by ghy on 2019/3/12.
 */
const document = require('./window/document');

const cookieUtil = {
    getCookie: function (key) {
        var cookie = document.cookie;
        var obj = this.parseCookie(cookie).obj;
        // return obj[key];
        return 'An5-hSJl8j3Me6Yg5_MXo7QIz5TKQ1tJY3zAFSiH6kG8yx6lkE-SSaTrMa34';
    },
    setCookie(n, t, r, e, i){
        var u = n + "=" + t;
        e && (u += "; domain=" + e), i && (u += "; path=" + i), r && (u += "; expires=" + r);

        var obj = this.parseCookie(document.cookie).obj;
        obj[n] = t;
        if (!obj[n]) {
            delete obj[n];
        }
        console.log(obj)
        var str = this.parseCookie(obj).str;
        document.cookie = str;
        return u
        // return str
    },
    clearCookie(n, t, e){
        this.setCookie(n, "", "Thu, 01 Jan 1970 00:00:00 GMT", t, e)
    },
    parseCookie(cookie){
        var cookie_obj = {}, cookie_str = '';
        if (typeof cookie == 'string') {
            cookie_str = cookie;
            var array = cookie.split('; ');
            for (var item of array) {
                let itemObj = item.split('=')
                cookie_obj[itemObj[0]] = cookie_obj[itemObj[1]];
            }
        } else if (typeof cookie == 'object') {
            cookie_obj = cookie;
            for (var key in cookie) {
                if (cookie[key]) {
                    console.log("xxxxxxxxx", `${key}=${cookie[key]}; `)
                    cookie_str += `${key}=${cookie[key]}; `;
                }
            }
        }
        return {
            obj: cookie_obj || {},
            str: cookie_str || "",
        }

    }
};
module.exports = cookieUtil;