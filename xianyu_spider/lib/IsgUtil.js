/**
 * Created by ghy on 2019/3/12.
 */

const window = require('./window/window');
const navigator = require('./window/navigator');
const CreateData = require('../lib/CreateData');
const Util = require('../lib/Util');
const SecateUtil = require('../lib/SecateUtil');
const DocumentUtil = require('../lib/DocumentUtil');
const IsgDeviceUtil = require('./IsgDeviceUtil');
const PlantFormUtil = require('./PlantFormUtil');

const GHY_FINNAL_DATA = new CreateData([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1])
let f = 0;

function getRandom() {
    return Util.a() / 1e3 >>> 0
}
function e() {
    Util.d(window.location.href, "#")
}

function count_sign(t, i) {
    console.log('##CONT SIGN', t, i)
    var u;
    GHY_FINNAL_DATA[4] = 2375178291;//todo 如果之前有数据，则保存
    if (0 == GHY_FINNAL_DATA[4]) {
        console.log('进入了4', GHY_FINNAL_DATA[4])
        GHY_FINNAL_DATA[4] = Util.a();
        GHY_FINNAL_DATA[3] = getRandom();
        u = !0
    }
    GHY_FINNAL_DATA[1] = Util.a();
    GHY_FINNAL_DATA[2] = getRandom();
    GHY_FINNAL_DATA[5] = 1;// 写死
    GHY_FINNAL_DATA[6] = 1;// 写死
    GHY_FINNAL_DATA[7] = 184293744;// 写死
    // GHY_FINNAL_DATA[8] = 2373783015;// 写死 浏览器 navacate

    // 设置固定值验证数据正确性
    GHY_FINNAL_DATA[1] = 50451018; // 随机数
    GHY_FINNAL_DATA[2] = 1362056; //Ajo6UF4RbqGoV-J0y6cbr5CUi2BWF6e1vRI_jkQz5k2YN9pxLHsO1QBB8fUX
    GHY_FINNAL_DATA[3] = 2998020;
    GHY_FINNAL_DATA[4] = 2375178291;

    GHY_FINNAL_DATA[9] = DocumentUtil.q(), GHY_FINNAL_DATA[10] = DocumentUtil.r(), GHY_FINNAL_DATA[11] = DocumentUtil.s(), GHY_FINNAL_DATA[12] = DocumentUtil.t();
    var a = DocumentUtil.x();
    GHY_FINNAL_DATA[13] = a.u, GHY_FINNAL_DATA[14] = a.v;
    var v = DocumentUtil.z(), l = DocumentUtil.B(), d = DocumentUtil.A(),
        h = [u, DocumentUtil.y(), t, v, a.w, true, d, l];
    console.log('计算 15 属性', JSON.stringify(h));
    if (GHY_FINNAL_DATA[15] = Util.i(h), t) {
        GHY_FINNAL_DATA[0] = ++f, e();
        Util.e(i, "//")
    } else {
        GHY_FINNAL_DATA[0] = 0
    }
    console.log('GHY_FINNAL_DATA', ":", JSON.stringify(GHY_FINNAL_DATA))
    // for (var key in GHY_FINNAL_DATA) {
    //     if (typeof GHY_FINNAL_DATA[key] != 'function') {
    //         console.log(key, ":", GHY_FINNAL_DATA[key])
    //     }
    //     else {
    //         console.log(key, ": function()")
    //     }
    // }


    // // 设置固定值，这些值需要在浏览器中才会生效
    // a[1] = 1822169403; // 变化,随机数
    // a[7] = 184293744; // 固定
    // a[8] = 3086956040; // 固定

    var p = GHY_FINNAL_DATA.L(),
        g = SecateUtil.N(p);

    console.log("return g:", t, JSON.stringify(p), i, g)
    return g
};

function sign_full(t) {
    if (DocumentUtil.p(), IsgDeviceUtil.p(), t) {
        var r = SecateUtil.O(t);
        r && GHY_FINNAL_DATA.M(r)
    }
    let my_now = Util.a();
    console.log("==============my now", my_now)
    GHY_FINNAL_DATA[1] = my_now;

    GHY_FINNAL_DATA[5] = IsgDeviceUtil.D();
    GHY_FINNAL_DATA[6] = PlantFormUtil.P(), e();
    GHY_FINNAL_DATA[8] = Util.b(navigator.userAgent);
    GHY_FINNAL_DATA[16] = IsgDeviceUtil.C();
    GHY_FINNAL_DATA[17] = IsgDeviceUtil.F();
    IsgDeviceUtil.H(function (n) {
        GHY_FINNAL_DATA[7] = n
    })
}
const IsgUtil = {
    p: sign_full,
    Q: count_sign,
}
// IsgUtil.Q(false, null);
module.exports = IsgUtil;