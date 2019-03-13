/**
 * Created by ghy on 2019/3/14.
 */
class Cookie {
    constructor() {
        this.cookeMap = {};
    }

    setCookie(key, value) {
        this.cookeMap[key] = value;
    }

    getCookie(key) {
        return this.cookeMap[key]
    }

    /**
     * [ 't=aeb10d1970ad2ea8ed836aa9c62f27c6;Path=/;Domain=.taobao.com;Max-Age=7776000',
     'cookie2=18a8bb443434cc81da6e6140135cf058;Path=/;Domain=.taobao.com;Max-Age=-1;HttpOnly',
     'v=0;Path=/;Domain=.taobao.com;Max-Age=-1',
     '_tb_token_=f7e77eeee735e;Path=/;Domain=.taobao.com;Max-Age=-1',
     '_m_h5_tk=a9b20cb52cd86650c37e17722303295d_1552502072774;Path=/;Domain=taobao.com;Max-Age=604800',
     '_m_h5_tk_enc=296540c7bf11cfc647943961e9699cb8;Path=/;Domain=taobao.com;Max-Age=604800' ]
     *
     * */
    setArrayCookie(array) {
        if (array instanceof Array) {
            for (var item of array) {
                var it1 = item.split(';')[0];
                this.setCookie(it1.split('=')[0], it1.split('=')[1])
            }
        }
        console.log('COOKIE 设置完cookie:', JSON.stringify(this.cookeMap))
    }
}
module.exports = new Cookie();