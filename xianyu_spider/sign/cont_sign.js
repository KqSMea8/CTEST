/**
 * Created by ghy on 2019/3/13.
 */
var appKey = '12574478';
var token = '7ae0f36f0331bc1525a3bff77cc22cce'
var timestamp = new Date().getTime();
const md5 = require('./md5');
var fromData = {
    "rentNav": "4",
    "city": "上海",
    "province": "上海",
    "pageNumber": 1,
    "gps": "",
    "source": 1,
    "rentFrom": 0,
    "version": 623
}
var sign = md5(token + '&' + timestamp + "&" + appKey + "&" + JSON.stringify(fromData));

console.log(sign);


