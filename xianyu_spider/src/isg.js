const CreateData = require('../lib/CreateData');
const Util = require('../lib/Util');
const SecateUtil = require('../lib/SecateUtil');
const DocumentUtil = require('../lib/DocumentUtil');
var GHY_FINNAL_DATA = new CreateData([2, 2, 4, 4, 4, 1, 1, 4, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1])

var f = 0;
function getRandom() {
    return Util.a() / 1e3 >>> 0
}


function count_sign(t, i) {
    var u;
    if (0 == GHY_FINNAL_DATA[4]) {
        GHY_FINNAL_DATA[4] = Util.a();
        GHY_FINNAL_DATA[3] = getRandom();
        u = !0
    }
    GHY_FINNAL_DATA[1] = Util.a();
    GHY_FINNAL_DATA[2] = getRandom();
    GHY_FINNAL_DATA[5] = 1;// 写死
    GHY_FINNAL_DATA[6] = 1;// 写死
    GHY_FINNAL_DATA[7] = 184293744;// 写死
    GHY_FINNAL_DATA[8] = 2373783015;// 写死 浏览器 navacate
    // GHY_FINNAL_DATA[15]=

    // 设置固定值验证数据正确性
    GHY_FINNAL_DATA[1] = 1362056; // 随机数
    GHY_FINNAL_DATA[2] = 1362056;
    GHY_FINNAL_DATA[3] = 2998020;
    GHY_FINNAL_DATA[4] = 2375178291;

    console.log(GHY_FINNAL_DATA[2], GHY_FINNAL_DATA[3], GHY_FINNAL_DATA[4]);
    GHY_FINNAL_DATA[9] = DocumentUtil.q(), GHY_FINNAL_DATA[10] = DocumentUtil.r(), GHY_FINNAL_DATA[11] = DocumentUtil.s(), GHY_FINNAL_DATA[12] = DocumentUtil.t();
    var a = DocumentUtil.x();
    GHY_FINNAL_DATA[13] = a.u, GHY_FINNAL_DATA[14] = a.v;
    var v = DocumentUtil.z(), l = DocumentUtil.B(), d = DocumentUtil.A(), h = [u, DocumentUtil.y(), t, v, a.w, false, d, l];

    console.log('hhhhhhhhhhh', h)
    if (GHY_FINNAL_DATA[15] = Util.i(h), t) {
        console.log("进入if")
        GHY_FINNAL_DATA[0] = ++f, e();
        Util.e(i, "//")
    } else GHY_FINNAL_DATA[0] = 0;
    for (var key in GHY_FINNAL_DATA) {
        if (typeof GHY_FINNAL_DATA[key] != 'function') {
            console.log(key, ":", GHY_FINNAL_DATA[key])
        }
        else {
            console.log(key, ": function()")
        }
    }


    // 设置固定值，这些值需要在浏览器中才会生效
    a[1] = 1822169403; // 变化,随机数
    a[7] = 184293744; // 固定
    a[8] = 3086956040; // 固定

    var p = GHY_FINNAL_DATA.L(),
        g = SecateUtil.N(p);

    console.log("return g:", t, JSON.stringify(p), i, g)
    return g
}


count_sign(false, null);

