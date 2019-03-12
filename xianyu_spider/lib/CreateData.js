/**
 * Created by ghy on 2019/3/12.
 */
function isg_data(n) {
    this._fields = n;
    for (var t = 0, r = n.length; t < r; t++) {
        this[t] = 0;
    }
}

isg_data.prototype.L = function () {
    for (var n = this._fields,
             t = [],
             r = -1,
             e = 0,
             i = n.length;
         e < i; e++) {
        for (var u = this[e],
                 o = n[e],
                 c = r += o;
             t[c] = 255 & u, 0 != --o;)--c, u >>= 8;
    }

    return t
};
isg_data.prototype.M = function (n) {
    for (var t = this._fields, r = 0, e = 0, i = t.length; e < i; e++) {
        var u = t[e], o = 0;
        do {
            o = (o << 8) + n[r++]
        } while (--u > 0);
        console.log("执行 M 函数", e, o >>> 0)
        this[e] = o >>> 0
    }
}
module.exports = isg_data;