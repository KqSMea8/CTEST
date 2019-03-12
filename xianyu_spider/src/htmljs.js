/**
 * Created by ghy on 2019/3/12.
 */
var t = e.selectedItemData(ce.FILTER_ITEM.LOCATION);
if (t && 0 == t.length) {
    e.getFilterItemWithFilterItem(ce.FILTER_ITEM.LOCATION).title = e.getUnlimitLocationName()
}
}),
this.$rentNav.invoke(this.searchParams.rentNav), this.$rLocation = (0, M.create)().safeGps().map(function (e) {
    return (0, F.default)(e) && (e = {coords: {longitude: "", latitude: ""}}), {location: e.coords}
}).update(this), this.$rRequestList = (0, M.create)(!0).save("rRequestList").forward(this.$rLocation, !0).restore("rRequestList").action(function (t, n) {
    e.hasNextPage && (e.listLoading = !0), (0, F.default)(t) || (0, F.default)(t.refresh) || (e.pageNumber = 1)
}).mtop(function (t, n) {
    var r = {
        tb_eagleeyex_scm_project: "default-ide-project-staging8",
        api: "mtop.taobao.idle.house.search",
        v: "1.0",
        needLogin: !1,
        type: "POST",
        data: u({}, e.searchParams, {
            pageNumber: e.pageNumber,
            gps: e.gpsValue(e.location),
            source: e.innerHeader ? 0 : 1,
            rentFrom: e.searchParams.rentFrom ? e.searchParams.rentFrom : 1 == e.pageNumber ? 0 : e.has3042() ? 1 : 0,
            version: 623
        }),
        ecode: 1
    };
    return delete e.searchParams.rentFrom, r
}).catch(function (t) {
    throw e.listLoading = !1, e.showEnterLoading = !1, e.pageNumber -= 1, t
}).toastOnCode("all").map(function (t, n) {
    e.showEnterLoading = !1, e.listLoading = !1;
    var r = t.data;
    e.parseLocationUrl(r);
    var i = r.cityAreasList || [], o = r.bizCircles || {};
    e.hasNextPage = r.nextPage;
    var a = i.map(function (t) {
        return {
            name: t, children: (o[t] || []).map(function (e) {
                return e.field = ce.FIELD.BIZ_CIRCLE, e.alias = "不限" == e.name ? t : e.name, e
            }), id: "不限" == t ? "" : t, alias: e.updateUnlimitLocationName(t), field: ce.FIELD.AREA
        }
    }), s = r.metroLineNames || [], u = r.metro || {};
    u = (0, F.default)(u) ? [] : s.map(function (t) {
        return {
            name: t, children: (u[t] || []).map(function (e) {
                return e.field = ce.FIELD.METRO, e
            }), alias: e.updateUnlimitLocationName(t), field: ce.FIELD.METRO_LINE
        }
    });
    var c = [{name: "区域", children: a, field: ce.FIELD.AREA_NAME}];
    (0, F.default)(u) || c.push({name: "地铁", children: u, field: ce.FIELD.METRO_NAME});
    var l = e.selectedItemData(ce.FILTER_ITEM.LOCATION);
    0 == l.length && c.length > 0 && c[0].children.length > 0 && "不限" == c[0].children[0].name && (l.push(c[0]), l.push(c[0].children[0])), e.updateSelection(c, e.selectedSelectorData[0]), e.selectorData[ye.indexOf(ce.FILTER_ITEM.LOCATION)] = c;
    var f = !1, d = (r.searchCondition || []).filter(function (e) {
        return "3081" == e.cardType || "3084" == e.cardType
    }).map(function (e) {
        var t = e.cardData;
        return t.title = t.propName, "3084" == e.cardType && (t.isRadioBox = !0), t.children = t.value.map(function (e) {
            return e.name = e.valueName, e.selected && (f = !0), e
        }), t
    });
    e.selectorGroupData = d, e.getFilterItemWithFilterItem(ce.FILTER_ITEM.FILTER).highlight = f;
    var p = e.card3028List;
    return e.pageNumber > 1 ? (p = p.concat(r.cardList), 0 == r.cardList.length && (e.pageNumber -= 1)) : p = r.cardList, 0 == p.length ? e.showErrorLoading = !0 : e.showErrorLoading = !1, e.pageNumber += 1, {card3028List: p}
}).update(this), this.$paramsUpdate = (0, M.create)().action(function () {
    e.keyword = e.searchParams.keyword
}).map(function () {
    return {refresh: !0}
}).forward(this.$rRequestList), ve.onmessage = function (t) {
    var n = t.data.url;
    e.updateSearchParamsWithUrlString(n), e.clearLocation(), e.clearSort(), e.clearPrice(), e.clearFilters(), e.$paramsUpdate.invoke()
};
var i = function (t) {
    e.searchParams.city != t.cityName && e.clearLocation(), e.searchParams.city = t.cityName, e.searchParams.province = t.provinceName, e.$cityUpdate.invoke(), e.$paramsUpdate.invoke()
};
ge.onmessage = function (e) {
    var t = JSON.parse(e.data);
    (0, F.default)(t) || (t.provinceName = t.provName), i(t)
}, this.$initLocation = (0, M.create)().action(function () {
    e.searchParams.city = "上海", e.searchParams.province = "上海"
}).forward(this.$cityUpdate, !0).forward(this.$paramsUpdate), this.$initPage = (0, M.create)().if(function () {
    return (0, F.default)(e.searchParams.province)
}).forward(this.$rLocation, !0).map(function () {
    return e.location
}).if(function () {
    return !(0, F.default)(e.location.longitude) && !(0, F.default)(e.location.latitude)
}).mtop(function () {
    return {
        api: "mtop.taobao.idle.city.name.bygps.get",
        v: "1.0",
        data: {longitude: e.location.longitude, latitude: e.location.latitude},
        ecode: 0
    }
}).action(function (e) {
    var t = e.data;
    (0, F.default)(t.cityInfo) || (0, F.default)(t.cityInfo.cityName) || i(t.cityInfo)
}).else().forward(this.$initLocation).end().else().forward(this.$paramsUpdate).end(), this.$handleDistanceSelector = (0, M.create)().save("handleDistanceSelector").forward(this.$rLocation, !0).restore("handleDistanceSelector").if(function () {
    return (0, F.default)(e.location.longitude) || (0, F.default)(e.location.latitude)
}).map(function () {
    return "定位失败，请检查是否已开启GPS"
}).toast().else().action(function (t) {
    e.selectorSelectImpl(t.source, t.index)
}).end(), this.$initPage.invoke()
},
methods:{
    has3042:function () {
        return this.card3028List && this.card3028List.some(function (e, t) {
                return "3042" == e.cardType
            })
    }
,
    parseLocationUrl:function (e) {
        var t = e.selectedBizCircle, n = e.selectedMetroStation;
        if (t || n) {
            var r = [[ce.FIELD.METRO_NAME, ce.FIELD.METRO_LINE, ce.FIELD.METRO], [ce.FIELD.AREA_NAME, ce.FIELD.AREA, ce.FIELD.BIZ_CIRCLE]],
                i = void 0, o = void 0, a = void 0, s = [];
            if (t) {
                var u = t.name, c = t.area;
                i = "区域", o = c, a = u, s = r[1]
            } else if (n) {
                var l = n.lineName, f = n.name;
                i = "地铁", o = l, a = f, s = r[0]
            }
            i && o && (this.selectedSelectorData[0] = [], this.selectedSelectorData[0].push({
                name: i,
                selected: !0,
                field: s[0]
            }), this.selectedSelectorData[0].push({
                name: o,
                selected: !0,
                field: s[1]
            }), a && this.selectedSelectorData[0].push({
                name: a,
                selected: !0,
                field: s[2]
            }), this.refreshInitAreaName(this.selectedSelectorData[0][this.selectedSelectorData[0].length - 1].name))
        }
    }
,
    refreshInitAreaName:function (e) {
        this.filterList[0].title = e
    }
,
    gpsValue:function (e) {
        return (0, F.default)(e) || (0, F.default)(e.longitude) && (0, F.default)(e.latitude) ? "" : e.longitude + "," + e.latitude
    }
,
    getUnlimitLocationName:function () {
        return "区域"
    }
,
    updateUnlimitLocationName:function (e) {
        return "不限" == e ? this.getUnlimitLocationName() : e
    }
,
    onScroll:function (e) {
        this.innerHeader || (-e.contentOffset.y >= this.outerSearchBarHeight ? this.headerRightIcon = "https://gw.alicdn.com/tfs/TB1QuekyuuSBuNjy1XcXXcYjFXa-35-34.png" : this.headerRightIcon = ""), this.contentOffsetY = e.contentOffset.y
    }
,
    updateSearchParamsWithUrlString:function (e) {
        var t = new L.default(e);
        this.updateSearchParamsWithUrl(t)
    }
,
    updateSearchParamsWithUrl:function (e) {
        var t = this, n = e.params;
        new Array("rentNav", "userInputGps", "sortType", "city", "province", "keyword", "rentFrom", "hotZoneId", "actTag").forEach(function (e) {
            (0, F.default)(n[e]) || (t.searchParams[e] = n[e])
        })
    }
,
    updateSelection:function (e, t) {
        if (e && e.length > 0) {
            var n = void 0;
            e.forEach(function (e) {
                t.length > 0 && e.name == t[0].name ? (e.selected = !0, n = e) : e.selected = !1
            });
            var r = t.slice();
            r.length > 0 && r.splice(0, 1), n && this.updateSelection(n.children, r)
        }
    }
,
    goSearch:function () {
        R.default.click("Button-Search", {}), P.default.push("SearchPOI", u({fmfrom: "rentroomlist"}, this.searchParams))
    }
,
    goDetail:function (e) {
        var t = {};
        (0, F.default)(e.cardData.trackParams) || (t = e.cardData.trackParams), R.default.click("Button-Item", t);
        var n = e.cardData;
        P.default.push(n.commonDO.redirectUrl)
    }
,
    envUrl:function (e) {
        var t = weex.config.bundleUrl;
        return -1 === e.indexOf("market.wapa") && -1 === e.indexOf("market.m") || (-1 !== t.indexOf(".wapa") ? e = e.replace(/\.m/g, ".wapa") : -1 !== t.indexOf(".m") && (e = e.replace(/\.wapa/g, ".m"))), e
    }
,
    chooseLocation:function () {
        R.default.click("Button-SwitchCity", {}), (0, M.create)().action(function () {
            P.default.push("https://market.m.taobao.com/app/idleFish-F2e/IdleFish4Weex/Rent/adress-search?wh_weex=true")
        }).invoke()
    }
,
    highlighPriceIfNeed:function () {
        var e = this.selectedItemData(ce.FILTER_ITEM.PRICE);
        this.getFilterItemWithFilterItem(ce.FILTER_ITEM.PRICE).highlight = e.length > 0 && "不限" != e[e.length - 1].name
    }
,
    filterClickWithIndex:function (e) {
        this.filterItemClick(this.filterList[e], e)
    }
,
    filterItemClick:function (e, t) {
        e.selected = !e.selected, e.id != ce.FILTER_ITEM.PRICE && e.id != ce.FILTER_ITEM.FILTER || (e.selected ? e.highlight = !0 : e.id == ce.FILTER_ITEM.PRICE && this.highlighPriceIfNeed()), e.selected && (e.id != ce.FILTER_ITEM.FILTER ? this.selectorOpenLevelSelect(t) : this.selectorOpenGroupSelect())
    }
,
    getFilterItemWithFilterItem:function (e) {
        var t = ye.indexOf(e);
        return t >= 0 && t < this.filterList.length ? this.filterList[t] : {}
    }
,
    selectedItemData:function (e) {
        var t = ye.indexOf(e);
        return t >= 0 && t < this.selectedSelectorData.length ? this.selectedSelectorData[t] : []
    }
,
    pricePropValueStr:function (e, t, n) {
        return "null" == e && (e = ""), "null" == t && (t = ""), "priceInput:" + e + "," + t + "," + n + ";"
    }
,
    updatePropValueStr:function () {
        this.searchParams.propValueStr = this.searchParamPrice + this.searchParamFilter
    }
,
    resetSelection:function (e) {
        var t = this;
        e.every(function (e) {
            return e.selected = !1, e.children && e.children.length > 0 && t.resetSelection(e.children), !0
        })
    }
,
    scrollListToTopIfNeed:function () {
        -this.contentOffsetY > this.outerSearchBarHeight && pe.scrollToElement(this.$refs.listtop, {
            offset: 0,
            animated: !0
        })
    }
,
    scrollHeaderToTopIfNeed:function () {
        var e = this;
        this.innerHeader || pe.getComponentRect(this.$refs.listheader, function (t) {
            t.size.top + e.filterListHeight - e.selectorTop > .01 && pe.scrollToElement(e.$refs.listheader, {
                offset: 0,
                animated: !0
            })
        })
    }
,
    selectorSelect:function (e, t) {
        this.scrollListToTopIfNeed();
        var n = e[e.length - 1], r = "", i = {};
        if (t == ye.indexOf(ce.FILTER_ITEM.LOCATION))switch (n.field) {
            case ce.FIELD.BIZ_CIRCLE:
                r = "Button-CommercialCircle";
                break;
            case ce.FIELD.METRO:
                r = "Button-Metro"
        } else if (t == ye.indexOf(ce.FILTER_ITEM.SORT))switch (n.id) {
            case"comprehensiveAsc":
                r = "Button-SortTogether";
                break;
            case"distanceAsc":
                r = "Button-SortDist";
                break;
            case"publishTimeDesc":
                r = "Button-SortFresh";
                break;
            case"priceAsc":
                r = "Button-SortPrice1to2";
                break;
            case"priceDesc":
                r = "Button-SortPrice2to1"
        } else t == ye.indexOf(ce.FILTER_ITEM.PRICE) && ("CustomPrice" == n.is ? r = "Button-PrieInp" : (r = "Button-PrieConf", i = {
            priceRange: n.id,
            index: n.index
        }));
        R.default.click(r, i), t == ye.indexOf(ce.FILTER_ITEM.SORT) && "distanceAsc" == n.id ? this.$handleDistanceSelector.invoke({
            source: e,
            index: t
        }) : this.selectorSelectImpl(e, t)
    }
,
    selectorSelectImpl:function (e, t) {
        var n = e[e.length - 1];
        if (this.resetSelection(this.selectorData[t]), this.selectedSelectorData[t] = e, this.updateSelection(this.selectorData[t], this.selectedSelectorData[t]), t == ye.indexOf(ce.FILTER_ITEM.LOCATION)) {
            if (this.clearLocationSearchParams(), e.length > 2 && !(0, F.default)(n.field) && (this.searchParams[n.field] = n.id), e.length > 1) {
                var r = e[1];
                r.field == ce.FIELD.AREA ? this.searchParams.area = r.id : r.name
            }
        } else if (t == ye.indexOf(ce.FILTER_ITEM.SORT)) this.searchParams.sortType = n.id, "distanceAsc" == n.id ? this.showDistance = !0 : this.showDistance = !1; else if (t == ye.indexOf(ce.FILTER_ITEM.PRICE)) {
            if ("CustomPrice" == n.is) n.alias = ((0, F.default)(n.min) ? "0" : n.min) + "-" + ((0, F.default)(n.max) ? "0" : n.max), this.searchParamPrice = this.pricePropValueStr(n.min, n.max, "input"); else {
                var i = n.id.split(",");
                this.searchParamPrice = this.pricePropValueStr(i[0], i[1], "select")
            }
            this.highlighPriceIfNeed(), this.updatePropValueStr()
        }
        this.filterList[t].title = n.alias || n.name, this.$paramsUpdate.invoke()
    }
,
    selectorGroupSelect:function (e) {
        R.default.click("Button-FilterConf", {}), this.scrollListToTopIfNeed();
        var t = "";
        e.forEach(function (e) {
            e.forEach(function (e) {
                t += e.propId + ":" + e.valueId + ";"
            })
        }), this.searchParamFilter = t, this.updatePropValueStr(), this.$paramsUpdate.invoke()
    }
,
    selectorHide:function (e) {
        this.filterClickWithIndex(e)
    }
,
    selectorGroupHide:function () {
        this.filterClickWithIndex(ye.indexOf(ce.FILTER_ITEM.FILTER))
    }
,
    selectorOpenLevelSelect:function (e) {
        this.scrollHeaderToTopIfNeed(), this.$refs.levelSelector[e].show(), e == ye.indexOf(ce.FILTER_ITEM.SORT) && R.default.click("Button-SortChose", {})
    }
,
    selectorOpenGroupSelect:function () {
        this.$refs.groupSelector.show()
    }
,
    selectorInnerSelect:function (e, t) {
        var n = "", r = {};
        if (t == ye.indexOf(ce.FILTER_ITEM.LOCATION))switch (e.field) {
            case ce.FIELD.AREA:
                n = "Button-Area"
        }
        R.default.click(n, r)
    }
,
    selectorGroupInnerSelect:function (e) {
        if (!(0, F.default)(e.trackParams)) {
            var t = "Button-" + e.trackParams.trackCtrlName + (e.selected ? "Select" : "Cancl"),
                n = {source: e.trackParams.source, name: e.trackParams.name};
            R.default.click(t, n)
        }
    }
,
    selectorGroupReset:function () {
        R.default.click("Button-FilterRes", {})
    }
,
    uniqueSelectGps:function (e) {
        var t = this, n = ["cleanMetro", "cleanDistance", "cleanPoi"], r = {};
        r[me.METRO] = "cleanMetro", r[me.DISTANCE] = "cleanDistance", r[me.POI] = "cleanPoi";
        var i = r[e];
        n.forEach(function (e) {
            e != i && t[e]()
        })
    }
,
    cleanFilterItem:function (e) {
        var t = ye.indexOf(e);
        t < this.selectedSelectorData.length && t < this.selectorData.length && (this.selectedSelectorData[t] = [], this.updateSelection(this.selectorData[t], this.selectedSelectorData[t]))
    }
,
    clearLocationSearchParams:function () {
        this.searchParams.metro = "", this.searchParams.bizCircle = "", this.searchParams.area = ""
    }
,
    clearLocation:function () {
        this.cleanFilterItem(ce.FILTER_ITEM.LOCATION), this.clearLocationSearchParams(), this.$cityUpdate.invoke()
    }
,
    clearSort:function () {
        this.cleanFilterItem(ce.FILTER_ITEM.SORT);
        var e = ye.indexOf(ce.FILTER_ITEM.SORT), t = this.selectorData[e]
    }
}