let Rdate = "2022/12/4"
let Rtime = "17:40:23"
let Version = "1.0.2"


const date = new Date()
// 版本顯示
function ListVersion () {
    const version = document.getElementsByClassName("version").item(0)
    version.innerHTML = version.innerHTML.replace("[version]", Version)
}

// 取得現在時間 (string)
function getNowTime() {
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
let nowtime = getNowTime()

// 取得修改後Html
function ChangeHtml() {
    let times = document.getElementsByClassName("time")
    times.item(1).innerHTML = times.item(1).innerHTML.replace("[date]", Rdate)
    times.item(1).innerHTML = times.item(1).innerHTML.replace("[time]", Rtime)
    times = document.getElementsByClassName("time")
    return times
}
let times = ChangeHtml()

// 創建時間
function CreateTime() {
    var a_text = []
    var a_d = (Math.abs(new Date(nowtime.split(" ")[0]) - new Date(document.getElementsByClassName("create").item(0).innerHTML.split("<br>")[1].trim())) / 1000 / 60 / 60 / 24)
    var a_m = 0
    var a_y = 0
    while (a_d >= 30) {
        a_m++
        a_d -= 30
    }
    while (a_m >= 12) {
        a_y++
        a_m -= 12
    }
    if (a_y != 0) {
        a_text.push(`${a_y} 年`)
    }
    if (a_m != 0) {
        a_text.push(`${a_m} 個月`)
    }
    if (a_d != 0) {
        a_text.push(`${a_d} 天`)
    }
    times.item(0).innerHTML = times.item(0).innerHTML.replace("[time]", a_text.join(" "))
}


// 最後修改
function LastChange() {
    var day1 = new Date(times.item(1).innerHTML.split("timetext")[1].split("/timetext")[0].split("br>")[1].replace(/</g, "").trim());
    var day2 = new Date(nowtime)
    var difference = Math.abs(day2 - day1);
    var b_text = []
    var b_m = 0
    var b_h = 0
    var b_d = 0
    var b_mo = 0
    var b_y = 0
    var b_s = Number((difference / 1000).toFixed(1))

    while (b_s >= 60) {
        b_s -= 60
        b_m++
    }
    while (b_m >= 60) {
        b_m -= 60
        b_h++
    }
    while (b_h >= 24) {
        b_h -= 24
        b_d++
    }
    while (b_d >= 30) {
        b_d -= 30
        b_mo++
    }
    while (b_mo >= 12) {
        b_mo -= 12
        b_y++
    }

    if (b_y != 0) {
        b_text.push(`${b_y} 年`)
    }
    if (b_mo != 0) {
        b_text.push(`${b_mo} 個月`)
    }
    if (b_d != 0) {
        b_text.push(`${b_d} 天`)
    }
    if (b_h != 0) {
        b_text.push(`${b_h} 小時`)
    }
    if (b_m != 0) {
        b_text.push(`${b_m} 分鐘`)
    }
    if (b_s != 0) {
        b_text.push(`${b_s} 秒鐘`)
    }

    var html = times.item(1).innerHTML
    times.item(1).innerHTML = `
        ${html.replace("([day]", "<br>(" + b_text.join(" ") + "前")}
    `
}

// 現在時間
times.item(2).innerHTML = times.item(2).innerHTML.replace("[time]", nowtime)


ListVersion()
CreateTime()
LastChange()