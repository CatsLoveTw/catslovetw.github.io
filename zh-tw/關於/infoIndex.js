let Rdate = "2022/12/21"
let Rtime = "14:13:28"
let Version = "1.0.38_pre4"


const date = new Date()
// 版本顯示
function ListVersion () {
    const version = document.getElementsByClassName("versiontitle").item(0)
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
// 取得更新
function getUpdate() {
    const allUpdates = {
        "V1.0.38": {
            "V1.0.38_pre4": {
                1: {
                    "title": "修復",
                    "website": "光遇計算機",
                    "updates": ["修復光遇計算機特定模式時 模式選項顯示錯誤之問題"]
                }
            },
            "V1.0.38_pre3": {
                1: {
                    "title": "修復",
                    "website": "找不到網址",
                    "updates": ["修復連結失效之問題"]
                }
            },
            "V1.0.38_pre2": {
                1: {
                    "title": "修復",
                    "website": "光遇計算機",
                    "updates": ["修復光遇計算機無法顯示翻譯進度之問題"]
                },
                2: {
                    "title": "修復",
                    "website": "找不到網址",
                    "updates": ["修復找不到網址時無法載入css檔案之問題"]
                }
            },
            "V1.0.38_pre1": {
                1: {
                    "title": "更新",
                    "website": "全部",
                    "updates": ["新增協助翻譯功能(聯繫作者)"]
                },
                2: {
                    "title": "更新",
                    "website": "錯誤",
                    "updates": ["新增找不到網頁時的顯示"]
                },
                3: {
                    "title": "調整",
                    "website": "首頁",
                    "updates": ["文字置中"]
                },
                4: {
                    "title": "調整",
                    "website": "其他網頁",
                    "updates": ["調整背景色彩 (漸層)", "調整文字色彩 (類似皮膚色 -> 橘色)", "調整碰觸到選項時的背景色彩 (#b3afaf -> #9c9c9c)"]
                }
            }
        },
        "V1.0.37": {
            "V1.0.37_pre2": {
                1: {
                    "title": "更新",
                    "website": "關於",
                    "updates": ["現在點擊版本已可直接通往更新資訊", "更新日誌新增版本分類", "更新日誌修改各項字體大小", "更新日誌修改更新資訊顯示 (寬度 - 字體大小改變 -> 100%)", "更新資訊字體上色", "簡潔切換頁面用的JS檔案"]
                },
                2: {
                    "title": "修改",
                    "website": "提醒",
                    "updates": ["修改連結顯示字體大小"]
                }
            },
            "V1.0.37_pre1": {
                1: {
                    "title": "可能是大更新?",
                    "website": "關於",
                    "updates": ["修改介面", "新增更新日誌"]
                }
            }
        },
        "未完整記載": {
            "V1.0.0-V1.0.36": {
                1: {
                    "title": "新增網頁",
                    "website": "首頁 關於 其他網頁 連結提醒 錯誤 光遇計算機",
                    "updates": ["新增網頁"]
                }
            }
        }
    }
    let t = []
    for (let r in allUpdates) {
        t.push(`
            <h1 class="versionInfo">${r}</h1>
            <div class="versionDiv">
        `)
        for (let i in allUpdates[r]) {
            let al = []
            for (let j in allUpdates[r][i]) {
                let num = 0
                let g = []
                for (let k in allUpdates[r][i][j].updates) {
                    num++
                    g.push(`${num}.${allUpdates[r][i][j].updates[k]}`)
                }
                al.push(`
                    <h1 class="Uptitle">${allUpdates[r][i][j].title}</h1>
                    <h2 class="text website">更新網站:<br><div style="color: rgb(218, 149, 0)">${allUpdates[r][i][j].website.split(" ").join("<br>")}</div></h2>
                    <h3 class="text update" style="color: yellow; font-size: 1.5em;">更新內容:<br><div style="color: rgb(255, 209, 209); font-size: 15px;">${g.join("<br>")}</div></h3>
                `)

            }
            t.push(`
                <h2 class="version opac" onclick="PopBox('${i}')">${i}</h2>
                <div id="${i}" class="updatebox" style="display: none;">
                <span class="material-symbols-outlined back" onclick="backBox('${i}')">
                    arrow_back
                </span>
                    ${al.join("")}
                    <h3><a class="url https://github.com/CatsLoveTw/catslovetw.github.io/commits/main" href="" style="color: aqua; font-size: 18">移動至github查看所有更新資訊</a></h3>
                </div>
            `)
        }
        t.push('</div>')
    }
    let update = document.getElementById("updatesText")
    update.innerHTML = t.join("<br>")
    let errorBox = document.getElementById("errorBox")
    errorBox.innerHTML = `
    <div id="errorboxs" style="display: none;">
    <span class="material-symbols-outlined back" onclick="document.getElementById('errorboxs').style.display = 'none'">
        arrow_back
    </span>
        <div class="error">
            <h1 class="errortext t">404</h1>
            <h2 class="errortext">找不到有關該版本的更新資訊</h2>
            <h2 class="errortext"><a href="https://github.com/CatsLoveTw/catslovetw.github.io/commits/main" style="color: aqua; font-size: 18">移動至github查看更新資訊</a></h2>
        </div>
    </div>
    `
}
// 跳出資訊
function PopBox (divID) {
    const box = document.getElementById(divID)
    const body = document.getElementsByClassName("opac")
    for (let i=0; i<body.length; i++) {
        body.item(i).style.opacity = "0.1"
    }
    box.style.display = "block"
    box.style.opacity = "0.9"
}
// 返回
function backBox (divID) {
    const box = document.getElementById(divID)
    try {
    const body = document.getElementsByClassName("opac")
        for (let i=0; i<body.length; i++) {
            body.item(i).style.opacity = "1"
        }
    } catch {}
    box.style.left = 0
    box.style.display = "none"
    box.style.opacity = "1"
}
// 版本資訊顯示
function getVersionBox (doc) {
    let version = "V" + doc.innerHTML.split("版本: ")[1].replace("<version>", '').replace("</version>", '')
    console.log(version)
    try {
        let a = document.getElementById(version)
        a.innerHTML
    } catch {
        document.getElementById("errorboxs").style.display = "block"
        return;
    }
    PopBox(version)
    update()
}


ListVersion()
CreateTime()
LastChange()
getUpdate()