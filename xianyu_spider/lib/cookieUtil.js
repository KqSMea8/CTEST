/**
 * Created by ghy on 2019/3/12.
 */
var cookieUtil = {

    setCookie(n, t, r, e, i){
        var u = n + "=" + t;
        e && (u += "; domain=" + e), i && (u += "; path=" + i), r && (u += "; expires=" + r);
        console.log(u);
        return u
    },
    clearCookie(n, t, e){
        this.setCookie(n, "", "Thu, 01 Jan 1970 00:00:00 GMT", t, e)
    }
};
(function () {
    let r = 'sdfsdf'
    let ghy_isg = 'isg'
    let y = new Date(Date.now() + 15552e6).toUTCString();
    let m = 'aaa'
    cookieUtil.setCookie(ghy_isg, r, y, m, "/")
})()
module.exports = cookieUtil;