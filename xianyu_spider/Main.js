/**
 * Created by ghy on 2019/3/13.
 */

const request = require('request');
const SecateUtil = require('./lib/SecateUtil');
const IsgCookie = require('./lib/IsgCookie');
const SubmitUtil = require('./lib/SubmitUtil');
const requestUtil = require('./lib/requestUtil');
const callAppUtil = require('./lib/callAppUtil');
const DomInsertUtil = require('./lib/DomInsertUtil');
const document = require('./lib/window/document');

const Urlstr = '//h5api.m.taobao.com/h5/mtop.taobao.idle.house.search/1.0/?jsv=2.4.9&appKey=12574478&t=1552471277979&sign=6f2b81d4e6c855c96232657668266401&tb_eagleeyex_scm_project=default-ide-project-staging8&api=mtop.taobao.idle.house.search&v=1.0&ecode=1&dataType=originaljsonp&jsonpIncPrefix=weexcb&ttid=2019%40weex_h5_0.12.14&type=originaljson'

const Url = require('./APP/Url')
const FormData = require('./APP/FormData');
const Sign = require('./APP/Sign');
const Cookie = require('./APP/Cookie');


// 初始化数据，，，，
var n;
function t() {

}
var r = "_sufei_data2";
const Main = {
    init: function () {
        this.layout();
        this.step1();
    },
    layout: function () {
        SecateUtil.p();
        IsgCookie.p();
        SubmitUtil.p();
        requestUtil.p();
        callAppUtil.p();
        DomInsertUtil.p();
    },
    // 第一次请求返回肯定为令牌为空，拿到返回值中的cookie 进行下一步操作
    step1(){
        let data = FormData.getData();
        console.log('MAIN GET data ', JSON.stringify(data));
        let sign = Sign.getSign(data)
        console.log('MAIN GET sign ', sign);
        let url = Url.getUrl(sign);
        console.log('MAIN GET url ', url);
        // IsgCookie.Q(url);
        this._request(url, '', data, function (error, response, body) {
            console.log('SETEP1 ', body)
            let res_cookie = response.headers['set-cookie']
            Cookie.setArrayCookie(res_cookie);
        });
    },
    // 正式请求
    setp2(){
        let data = FormData.getData();
        console.log('MAIN GET data ', JSON.stringify(data));
        let sign = Sign.getSign(data)
        console.log('MAIN GET sign ', sign);
        let url = Url.getUrl(sign);
        console.log('MAIN GET url ', url);
        IsgCookie.Q(url);
        this._request(url, '', data, function (error, response, body) {
            console.log('SETEP1 ', body)
            let res_cookie = response.headers['set-cookie']
            Cookie.setArrayCookie(res_cookie);
        });
    },
    _request(url, Cookie, formData, callback) {
        var options = {
            url: url,
            headers: {
                // 'Cookie': 'cna=nEYOFXxWhTsCASRuOhLFY5Mk; t=f29c976904f01fe7ca630bab07d31a81; _m_h5_tk=0df2f364c9a27f3c898b7185a262ca8e_1552399607153; _m_h5_tk_enc=307a6f69f6ddac0d93468d7430c3166b; isg=ArGxbSE1FVT3Srl5vHIQOl9ZwD1BYjxgQm_Ew5PGrXiXutEM2-414F_cqngg',
                'Accept': 'application/json',
                'Referer': 'https://market.m.taobao.com/app/idleFish-F2e/IdleFishWeexRent/RentRoomList?wh_weex=true&rentNav=4&version=623&province=%E4%B8%8A%E6%B5%B7&prov=%E4%B8%8A%E6%B5%B7&city=%E4%B8%8A%E6%B5%B7',
                'Origin': 'https://market.m.taobao.com',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'data=' + encodeURIComponent(JSON.stringify(formData)),
        };
        request(options, function (error, response, body) {
            if (typeof callback == 'function') {
                callback(error, response, body)
            }
        });
    }
}
Main.init();
