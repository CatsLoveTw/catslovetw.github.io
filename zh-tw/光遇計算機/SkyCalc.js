console.log(location.href)

function transfer_url(text) {
    switch (text) {
        case "光遇計算機":
            return "%E5%85%89%E9%81%87%E8%A8%88%E7%AE%97%E6%A9%9F"
        case "模式":
            return "%E6%A8%A1%E5%BC%8F"
    }
    return false
}

function transfer(text) {
    switch (text) {
        case "%E6%B8%AC%E8%A9%A6%E7%94%A8%E7%B6%B2%E9%A0%81":
            return "測試用網頁"
        case "%E5%85%89%E9%81%87%E8%A8%88%E7%AE%97%E6%A9%9F":
            return "光遇計算機"
        case "%E6%A8%A1%E5%BC%8F":
            return "模式"
    }
    return false
}

const alls = {
    "SkyCalc": {
        "value": "nope",
        "display": "無",
        "href": "SkyCalc.html"
    },
    "optg": {
        "1": {
            "display": "普通",
            "opts": {
                "candles-day": {
                    "value": "candles-day",
                    "display": "計算所需天數",
                    "href": "模式/candles-day/candles-day.html"
                },
                "candles": {
                    "value": "candles",
                    "display": "計算每日所需蠟燭",
                    "href": "模式/candles-candles/candles.html"
                }
            }
        },
        "2": {
            "display": "季節蠟燭",
            "opts": {
                "season-candles-day": {
                    "value": "season-candles-day",
                    "display": "計算所需天數",
                    "href": "模式/season-candles-day/candles-day.html"
                },
                "season-candles": {
                    "value": "season-candles",
                    "display": "計算每日所需季節蠟燭",
                    "href": "模式/season-candles-candles/candles.html"
                }
            }
        },
        "3": {
            "display": "愛心計算",
            "opts": {
                "love-day": {
                    "value": "love-day",
                    "display": "計算所需天數",
                    "href": "模式/love-day/love-day.html"
                },
                "love": {
                    "value": "love",
                    "display": "計算每日所需愛心",
                    "href": "模式/love-love/love-love.html"
                },
            }
        }
    },
    "calc": {
        "value": "calc",
        "display": "綜合計算",
        "href": "模式/error/error.html",
        "disable": false
    }
}

let change = document.getElementsByClassName("changeMode").item(0)
let path = location.href

path = path.split(transfer_url("光遇計算機"))[1]
path = path.slice(1, path.length)
console.log(path)
function loadOption() {
    let all = []
    // 新增Option
    for (let i in alls) {
        if (alls[i]["1"]) {
            for (let a in alls[i]) {
                let b = alls[i][a]
                all.push(`<optgroup label="${b.display}">`)
                let opts = b.opts
                for (let j in opts) {
                    if (opts[j].disable) {
                        all.push(`<option value="${opts[j].value}" disabled>${opts[j].display}</option>`)
                    } else {
                        all.push(`<option value="${opts[j].value}">${opts[j].display}</option>`)
                    }
                }
            }
            all.push(`</optgroup>`)
        } else {
            if (alls[i].disable) {
                all.push(`<option value="${alls[i].value}" disabled>${alls[i].display}</option>`)
            } else {
                all.push(`<option value="${alls[i].value}">${alls[i].display}</option>`)
            }
        }
    }
    // 偵測預設 
    let value = ''
    for (let i in alls) {
        if (alls[i]["1"]) {
            for (let a in alls[i]) {
                let opts = alls[i][a].opts
                for (let i in opts) {
                    let href = opts[i].href.replace("模式", "%E6%A8%A1%E5%BC%8F")
                    if (href == path) {
                        value = opts[i].value
                    }
                }
            }
        } else {
            let href = ""
            try {
                href = alls[i].href.replace("模式", "%E6%A8%A1%E5%BC%8F")
            } catch {
                href = alls[i].href
            }
            if (href == path) {
                value = alls[i].value
            }
        }
    }
    console.log(all, "v: ", value)
    let index = 0
    for (let i in all) {
        if (all[i].indexOf(value) != -1) {
            index = i
        }
    }
    all[index] = all[index].replace('">', '" selected>')
    change.innerHTML = all.join("")
}

function changeMode(modeID) {
    console.log(modeID)
    const url = (flie_name) => {
        return location.href.split('/' + transfer_url("光遇計算機"))[0] + "/光遇計算機/" + flie_name
    }


    for (let i in alls) {
        if (alls[i][1]) {
            for (let a in alls[i]) {
                let opts = alls[i][a].opts
                for (let i in opts) {
                    if (modeID == opts[i].value) {
                        location.href = url(opts[i].href)
                    }
                }
            }
        }

        if (alls[i].value == modeID) {
            location.href = url(alls[i].href)
        }
    }
}

loadOption()

