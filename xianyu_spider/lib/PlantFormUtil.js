/**
 * Created by ghy on 2019/3/13.
 */
const navigator = require('./window/navigator');
function t() {
    for (var n = navigator.platform, t = 0; t < r.length; t++)if (r[t].test(n))return t + 1;
    return 0
}

var r = [/^Win32/, /^Win64/, /^Linux armv|Android/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/];
const Plant = {
    P: t
}
module.exports = Plant;