Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + days);
    return this;
}

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
    let days = getValue("days")
    let list = []
    if (!isNum(nowCandles) || !isNum(candles) || !isNum(days) || nowCandles == "" || candles == "" || days == "" || (candles - nowCandles).toString().indexOf("-") != -1) {
        result.innerHTML = "錯誤!"
    } else {
        let c = candles - nowCandles // 差多少根蠟燭
        let ca = Number(nowCandles)
        let DayOfcandles = Number(Math.ceil(c / days))
        // days = (DayOfcandles / ca)
        // if (days == Infinity) {
        //     days = DayOfcandles / (ca+1)
        // }
        console.log(c, ca, DayOfcandles, days)
        // if ((Number(days.toFixed(0)) - days) > 0) {
        //     days = Number(days.toFixed(0)) - 1
        // } else {
        //     days = Number(days.toFixed(0))
        // }
        for (let i=0; i < days; i++) {
            console.log("awa", days, getNowTime())
            if (DayOfcandles + Number(ca) > candles) {
                let a = candles - ca
                // days = i
                let chDAY = days - (i + 1) 
                days = i + 1
                list.push(`第 ${i+1} 天: ${candles}根蠟燭 (+${a})`)
                let v = new Date(getNowTime()).addDays(days)
                let nowtime = v.getFullYear() + "/" + String(v.getMonth() + 1) + "/" + String(v.getDate());
                let now = `${nowtime.split(" ")[0]}`
                result.innerHTML = "每天需要 " + a + " 或 " + DayOfcandles + "(主要) 根蠟燭 (比預計少 " + chDAY + " 天 - 預計到" + now + ")" + `<br>${list.join("<br>")}`
                break;
            } else {
                ca += Number(DayOfcandles)
                list.push(`第 ${i+1} 天: ${ca}根蠟燭 (+${DayOfcandles})`)
            }
            console.log("test", days)
            let v = new Date(getNowTime()).addDays(days)
            let nowtime = v.getFullYear() + "/" + String(v.getMonth() + 1) + "/" + String(v.getDate());
            let now = `${nowtime.split(" ")[0]}`
            console.log(now)
            result.innerHTML = "每天需要 " + DayOfcandles + " 根蠟燭 " + "(預計到" + now + ")" + `<br>${list.join("<br>")}`
        }
    }
}

function reset () {
    let result = document.getElementsByClassName("result-text").item(0)
    let nowCandles = document.getElementById("now_candles")
    let candles = document.getElementById("candles")
    let days = document.getElementById("days")
    result.innerHTML = "無"
    nowCandles.value = ""
    candles.value = ""
    days.value = ""
}