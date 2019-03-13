/**
 * Created by ghy on 2019/3/14.
 */
const Cookie = require('./Cookie');
const c1 = '_m_h5_c';
const c2 = '_m_h5_tk';
class Token {
    constructor() {
    }

    getToken() {
        return Cookie.getCookie(c1) || Cookie.getCookie(c2);
    }
}
module.exports = new Token();