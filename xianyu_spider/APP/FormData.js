/**
 * Created by ghy on 2019/3/13.
 */
class FormData {
    constructor() {
        this.data = {
            "rentNav": "4",
            "city": "上海",
            "province": "上海",
            "pageNumber": 1,
            "gps": "",
            "source": 1,
            "rentFrom": 0,
            "version": 623
        }
    }

    setData(key, value) {

    }

    getData(key) {
        if (!key) {
            return this.data;
        } else {
            return this.data[key];
        }
    }

}
module.exports = FormData;