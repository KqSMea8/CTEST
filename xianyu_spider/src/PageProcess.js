/**
 * Created by ghy on 2019/3/12.
 */

const request = require('request');
// const https = require('https');
class PageProcess {
    _geturl(city) {
        let city_str = encodeURIComponent(city);
        let url = `https://market.m.taobao.com/app/idleFish-F2e/IdleFishWeexRent/RentRoomList?wh_weex=true&rentNav=4&version=623&province=${city_str}&prov=${city_str}&city=${city_str}`
        return url;
    }

    getPage(city) {
        let url = this._geturl(city);
        this._request(url);
    }

    getData() {
        let url = this.getApiUrl();
        this._request(url);
    }

    getApiUrl() {
        let host = 'https://h5api.m.taobao.com/h5/mtop.taobao.idle.house.search/1.0/';
        let param = {
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
        }
        let array = []
        for (var key in param) {
            array.push(key + "=" + param[key])
        }
        let url = `${host}?${array.join('&')}`
        console.log(url)
        url = 'https://h5api.m.taobao.com/h5/mtop.taobao.idle.house.search/1.0/?jsv=2.4.9&appKey=12574478&t=1552392484171&sign=b1ad1807885ba2a8cf50c88a3c99fb5d&tb_eagleeyex_scm_project=default-ide-project-staging8&api=mtop.taobao.idle.house.search&v=1.0&ecode=1&dataType=originaljsonp&jsonpIncPrefix=weexcb&ttid=2019%40weex_h5_0.12.14&type=originaljson'
        return url;
    }


    _get(url) {
        const options = {
            method: 'GET'
        };
        console.log(url);
        const req = https.get(url, {}, function (res) {
            console.log('状态码:', res.statusCode);
            console.log('响应:', res.headers);
            res.on('data', (d) => {
                process.stdout.write(d);
            });
        });

        req.on('error', (e) => {
            console.error(e);
        });
        req.end();

    }

    _getCookie() {
        var cookie = {
            "cna": "nEYOFXxWhTsCASRuOhLFY5Mk",
            "t": "f29c976904f01fe7ca630bab07d31a81",
            "_m_h5_tk": "0df2f364c9a27f3c898b7185a262ca8e_1552399607153",
            "_m_h5_tk_enc": "307a6f69f6ddac0d93468d7430c3166b",
            "isg": "ArGxbSE1FVT3Srl5vHIQOl9ZwD1BYjxgQm_Ew5PGrXiXutEM2-414F_cqngg"
        }
        return
    }

    _request(url) {
        var options = {
            url: url,
            headers: {
                'Cookie': 'cna=nEYOFXxWhTsCASRuOhLFY5Mk; t=f29c976904f01fe7ca630bab07d31a81; _m_h5_tk=0df2f364c9a27f3c898b7185a262ca8e_1552399607153; _m_h5_tk_enc=307a6f69f6ddac0d93468d7430c3166b; isg=ArGxbSE1FVT3Srl5vHIQOl9ZwD1BYjxgQm_Ew5PGrXiXutEM2-414F_cqngg',
                'Accept': 'application/json',
                'Referer': 'https://market.m.taobao.com/app/idleFish-F2e/IdleFishWeexRent/RentRoomList?wh_weex=true&rentNav=4&version=623&province=%E4%B8%8A%E6%B5%B7&prov=%E4%B8%8A%E6%B5%B7&city=%E4%B8%8A%E6%B5%B7',
                'Origin': 'https://market.m.taobao.com',
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'data=' + encodeURIComponent(JSON.stringify({
                "rentNav": "4",
                "city": "上海",
                "province": "上海",
                "pageNumber": 1,
                "gps": "",
                "source": 1,
                "rentFrom": 0,
                "version": 623
            })),
        };
        request(options, function (error, response, body) {
            console.log(body)
            // console.log(error, response, body)
        });
    }
}
let pageProcess = new PageProcess;
// pageProcess.getPage('北京')
pageProcess.getData();
module.exports = pageProcess
