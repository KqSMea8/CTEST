/**
 * Created by ghy on 2019/3/13.
 */

const SecateUtil = require('./lib/SecateUtil');
const IsgCookie = require('./lib/IsgCookie');
const SubmitUtil = require('./lib/SubmitUtil');
const requestUtil = require('./lib/requestUtil');
const callAppUtil = require('./lib/callAppUtil');
const DomInsertUtil = require('./lib/DomInsertUtil');
const document = require('./lib/window/document');

const Urlstr = '//h5api.m.taobao.com/h5/mtop.taobao.idle.house.search/1.0/?jsv=2.4.9&appKey=12574478&t=1552471277979&sign=6f2b81d4e6c855c96232657668266401&tb_eagleeyex_scm_project=default-ide-project-staging8&api=mtop.taobao.idle.house.search&v=1.0&ecode=1&dataType=originaljsonp&jsonpIncPrefix=weexcb&ttid=2019%40weex_h5_0.12.14&type=originaljson'

// 初始化数据，，，，
var n;
function t() {

}
var r = "_sufei_data2";
const Main = {
    init: function () {
        this.layout();
        this.test();
    },
    layout: function () {
        SecateUtil.p();
        IsgCookie.p();
        SubmitUtil.p();
        requestUtil.p();
        callAppUtil.p();
        DomInsertUtil.p()
    },
    test(){
        IsgCookie.Q(Urlstr);
        // IsgCookie.p();
    }
}
Main.init();
