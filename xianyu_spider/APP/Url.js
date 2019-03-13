/**
 * Created by ghy on 2019/3/13.
 */
class Query {
    constructor() {
        this.url = 'https://h5api.m.taobao.com/h5/mtop.taobao.idle.house.search/1.0/';
        this.query = {
            jsv: "2.4.9",
            appKey: 12574478,
            t: 1552364302142,
            sign: "bdbf879a8613ce55f16e0cd3a2d0b845",
            tb_eagleeyex_scm_project: "default-ide-project-staging8",
            api: "mtop.taobao.idle.house.search",
            v: "1.0",
            ecode: 1,
            dataType: "originaljsonp",
            jsonpIncPrefix: "weexcb",
            ttid: "2019%40weex_h5_0.12.14",
            type: "originaljson"
        };
    }

    setQuery(key, value) {
        this.query[key] = value;
        if (!this.query[key]) {
            delete this.query[key];
        }
    }

    getUrl() {
        let array = [];
        for (var key in this.query) {
            array.push(key + "=" + this.query[key])
        }
        let url = `${host}?${array.join('&')}`
    }

    getQuery(key) {
        return this.query[key];
    }

    getQueryStr() {
        let str = '';
        for (var key in this.query) {
            str += (str ? '&' : '')
            str += `${key}=${this.query[key]}`
        }
        return str;
    }
}
module.exports = new Query();