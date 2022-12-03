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

let Rdate = "2022/12/4"
let Rtime = "00:00:06"

let times = document.getElementsByClassName("time")
times.item(1).innerHTML = times.item(1).innerHTML.replace("[date]", Rdate)
times.item(1).innerHTML = times.item(1).innerHTML.replace("[time]", Rtime)
times = document.getElementsByClassName("time")

// 創建時間
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
    a_text.push(`${a_y} years`)
}
if (a_m != 0) {
    a_text.push(`${a_m} months`)
}
if (a_d != 0) {
    a_text.push(`${a_d} days`)
}
times.item(0).innerHTML = times.item(0).innerHTML.replace("[time]", a_text.join(" "))


// 最後修改
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
    b_text.push(`${b_y} years`)
}
if (b_mo != 0) {
    b_text.push(`${b_mo} months`)
}
if (b_d != 0) {
    b_text.push(`${b_d} days`)
}
if (b_h != 0) {
    b_text.push(`${b_h} hours`)
}
if (b_m != 0) {
    b_text.push(`${b_m} minutes`)
}
if (b_s != 0) {
    b_text.push(`${b_s} second`)
}

var html = times.item(1).innerHTML
times.item(1).innerHTML = `
${html.replace("([day]", "<br>(" + b_text.join(" ") + " ago")}
`

// 現在時間
times.item(2).innerHTML = times.item(2).innerHTML.replace("[time]", nowtime)