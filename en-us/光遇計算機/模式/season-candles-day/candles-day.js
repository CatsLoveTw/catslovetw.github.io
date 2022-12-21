function getNowTime() {
    let date = new Date()
    let nowtime = date.getFullYear() + "/" + String(date.getMonth() + 1) + "/" + String(date.getDate()) + " " + String(date.getHours()) + ":" + String(date.getMinutes()) + ":" + String(date.getSeconds());
    let c_hour = Number(nowtime.split(" ")[1].split(":")[0])
    let c_minute = Number(nowtime.split(" ")[1].split(":")[1])
    let c_sec = Number(nowtime.split(" ")[1].split(":")[2])
    if (c_hour < 10) {
        c_hour = "0" + c_hour
    }
    if (c_minute < 10) {
        c_minute = "0" + c_minute
    }
    if (c_sec < 10) {
        c_sec = "0" + c_sec
    }
    return `${nowtime.split(" ")[0]} ${c_hour}:${c_minute}:${c_sec}`
}

function isNum (num) {
    return !isNaN(num)
}

function getValue (ID) {
    let e = document.getElementById(ID)
    console.log(e.value)
    return e.value
}
function send () {
    let result = document.getElementsByClassName("result-text").item(0)
    let nowCandles = getValue("now_candles")
    let candles = getValue("candles")
    let addCandles = getValue("addCandles")
    let cheak = true
    if (!isNum(nowCandles) || !isNum(candles) || !isNum(addCandles) || nowCandles == "" || candles == "" || addCandles == "" || (candles - nowCandles).toString().indexOf("-") != -1 || Number(addCandles) > 6) {
        result.innerHTML = "錯誤!"
    } else {
        let res = (candles - nowCandles) / addCandles
        let ca = Number(nowCandles)
        let list = []
        if (res.toFixed(0) - res < 0) {
            res = Number(res.toFixed(0)) + 1
        } else {
            res = Number(res.toFixed(0))
        }
        if (res >= 50000) {
            alert("數字過大，無法繼續!")
            return;
        }
        if (Number(res) > 999) {
            cheak = confirm("偵測到數值相差過大，可能會需要運算一段時間，是否繼續?")
        }
        if (cheak) {
            for (let i = 0; i < res; i++) {
                if (res - i == 1 && (ca + Number(addCandles)) > Number(candles)) {
                    let a = Number(candles)
                    let b = a - ca
                    list.push(`第 ${i + 1} 天: ${candles}根季蠟 (+${b})`)
                } else {
                    ca += Number(addCandles)
                    list.push(`第 ${i + 1} 天: ${ca}根季蠟 (+${addCandles})`)
                }
            }
            let date = new Date()
            Date.prototype.addDays = function (days) {
                this.setDate(this.getDate() + days);
                return this;
            }
            let v = new Date(getNowTime()).addDays(res)
            let nowtime = v.getFullYear() + "/" + String(v.getMonth() + 1) + "/" + String(v.getDate());
            let now = `${nowtime.split(" ")[0]}`

            result.innerHTML = "總共需要 " + res + " 天 " + "(預計到" + now + ")" + `<br>${list.join("<br>")}`
        } else {
            alert("取消成功!")
        }
    }
}

function reset () {
    let result = document.getElementsByClassName("result-text").item(0)
    let nowCandles = document.getElementById("now_candles")
    let candles = document.getElementById("candles")
    let addCandles = document.getElementById("addCandles")
    result.innerHTML = "無"
    nowCandles.value = ""
    candles.value = ""
    addCandles.value = ""
}