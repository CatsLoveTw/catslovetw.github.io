const date = new Date()
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

nowtime = `${nowtime.split(" ")[0]} ${c_hour}:${c_minute}:${c_sec}`

let Rdate = "2022/11/29"
let Rtime = "19:12:00"

let times = document.getElementsByClassName("time")
times.item(1).innerHTML = times.item(1).innerHTML.replace("[date]", Rdate)
times.item(1).innerHTML = times.item(1).innerHTML.replace("[time]", Rtime)
times = document.getElementsByClassName("time")

// 創建時間
let d = (Math.abs(new Date(nowtime.split(" ")[0]) - new Date("2022/11/18")) / 1000 / 60 / 60 / 24)
times.item(0).innerHTML = times.item(0).innerHTML.replace("[time]", d)


// 最後修改
var day1 = new Date(times.item(1).innerHTML.split("timetext")[1].split("/timetext")[0].split("br>")[1].replace(/</g, "").trim());
var day2 = new Date(nowtime) 
var difference = Math.abs(day2 - day1);
let resultTime = Number((difference / (1000 * 60 * 60)).toFixed(1))
var Ltime = resultTime + " 小時前"
if (resultTime < 1) {
    resultTime = Number((difference / (1000 * 60)).toFixed(1))
    Ltime = resultTime + " 分鐘前"
    if (resultTime < 1) {
        resultTime = Number((difference / (1000)).toFixed(1))
        Ltime = resultTime + " 秒鐘前"
    }
}

var html = times.item(1).innerHTML
times.item(1).innerHTML = `
${html.replace("([day]", "<br>(約 " + Ltime)}
`

// 現在時間
times.item(2).innerHTML = times.item(2).innerHTML.replace("[time]", nowtime)