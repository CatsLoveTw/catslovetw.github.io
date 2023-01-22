function randint (min, max) {
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

const texts = {
    englishLower: "abcdefghijklmnopqrstuvwxyz",
    englishUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "1234567890",
    symbol: `~-_+=|:;./<>?!@#$%^&*(),`
}


class SysFormat {
    constructor (type) {
        this.type = type
    }
    add () {
        let format = document.getElementById("format")
        let t = format.value
        if (t.indexOf("sys[") == -1) {
            format.value = "-sys[]" + t.slice(1, t.length)
            format = document.getElementById("format")
            t = format.value
        }
        let number = format.value.indexOf(']')
        let length = t.slice(0, number).length
        format.value = t.slice(0, number) + ',"$' + this.type + '"' + t.slice(number, t.length)
        if (length == 5) {
            format.value = format.value.replace(",", "")
        }
    }

    remove () {
        let format = document.getElementById("format")
        let t = format.value
        let number = format.value.indexOf(']')
        if (t.indexOf(`,"$` + this.type + '"') != -1) {
            format.value = t.replace(`,"$` + this.type + '"', '')
        } else if (t.indexOf(`"$` + this.type + '",') != -1) {
            format.value = t.replace('"$' + this.type + '",', '')
        } else {
           format.value = t.replace('"$' + this.type + '"', '')
        }
    }
}

function generate () {
    let password = document.getElementById("password")
    let getformat = document.getElementById("format")
    let text = getformat.value
    let allFormats = []
    let formats = []
    var textFormats = []
    let all = text.slice(1, text.indexOf("- leng")).replace("sys", "")
    password.value = all
    let arr = all.split("],").join("] || ").split(" || ")
    for (let i in arr) {
        for (let j in JSON.parse(arr[i])) {
            let format = JSON.parse(arr[i])[j]
            formats.push(format)
            textFormats.push(format)
            allFormats.push(format)
        }
    }
    var copyFormats = formats
    var newFormats = formats // 會呈現打亂後的代碼
    
    let getRandom = []
    for (let i in copyFormats) {
        if (copyFormats[i].startsWith("$")) {
            getRandom.push(copyFormats[i])
        }
    }
    for (let i in copyFormats) {
        if (copyFormats[i].startsWith("$")) {
            let index = formats.indexOf(copyFormats[i])
            let value = newFormats[index]
            let index2 = randint(0, newFormats.length - 1)
            if (newFormats.length >= 2 && getRandom.length >= 2) {
                while (!newFormats[index2].startsWith("$") || index2 == index) {
                    index2 = randint(0, newFormats.length - 1)
                }
                let value2 = newFormats[index2]
                // console.log(newFormats);
                newFormats.splice(index, 1)
                textFormats.splice(index, 1)
                if (index != 0) {
                    newFormats.splice(index, 0, value2)
                    textFormats.splice(index, 0, value2)
                } else {
                    newFormats.splice(index, 0, value2)
                    textFormats.splice(index, 0, value2)
                }
                if (index2 != 0 && index2 > index) {
                    newFormats.splice(index2 - 1, 1)
                    textFormats.splice(index2 - 1, 1)
                } else {
                    newFormats.splice(index2, 1)
                    textFormats.splice(index2, 1)
                }
                newFormats.splice(index2, 0, value)
                console.log(value, value2, index, index2, newFormats);
            }
        }
    }

    // 處理純文字
    let Types = ["upperenglish", "lowerenglish", 'number', 'symbol', 'space']
    for (let i=0; i < textFormats.length; i++) {
        if (textFormats[i].includes("$") || Types.includes(textFormats[i].toLowerCase())) {
            textFormats.splice(i, 1)
            i--
        } else if (textFormats[i].includes("#")) {
            // newFormats.splice(newFormats.indexOf(textFormats[i]), 1)
        }
    }


    password.value = newFormats
    let Createpassword = ""
    let maxLength = Number(getformat.value.split("leng ")[1])
    let maxType = newFormats.length
    if (textFormats.length > 0) {
        for (let i in textFormats) {
            // console.log("length", maxLength, textFormats[i].length - 1);
            maxLength -= (textFormats[i].length - 1)
            maxType --
            // console.log(maxLength);
        }
    }
    
    // console.log(newFormats, textFormats);
    for (let k=0; k < Number(getformat.value.split("leng ")[1]); k++) {
        if (Createpassword.length >= Number(getformat.value.split("leng ")[1])) {
            break;
        }
        
        var format = ""
        // console.log(newFormats);
        if (k >= newFormats.length) {
            for (let i in copyFormats) {
                if (copyFormats[i].startsWith("$")) {
                    let index = formats.indexOf(copyFormats[i])
                    let value = newFormats[index]
                    let index2 = randint(0, newFormats.length - 1)
                    if (newFormats.length >= 2 && getRandom.length >= 2) {
                    while (!newFormats[index2].startsWith("$") || index2 == index) {
                        index2 = randint(0, newFormats.length - 1)
                    }
                    let value2 = newFormats[index2]
                    newFormats.splice(index, 1)
                    if (index2 != 0 && index2 > index) {
                        newFormats.splice(index2-1, 1)
                    } else {
                        newFormats.splice(index2, 1)
                    }
                    if (index != 0) {
                        newFormats.splice(index-1, 0, value2)
                    } else {
                        newFormats.splice(index, 0, value2)
                    }
                    newFormats.splice(index2, 0, value)
                    // console.log(value, value2, index, index2, newFormats);
                }
            }
            }
            format = newFormats[randint(0, newFormats.length - 1)]
            // console.log("test33");
        } else {
            format = newFormats[k]
            console.log("a", format, newFormats);
        }
        let c = format.toLowerCase()
        if (c.startsWith("$")) {
            c = c.replace("$", "")
        }
        if (Types.includes(c)) {
            // console.log("testformat", maxLength, maxType);
            let dLeng = Number((maxLength / maxType).toFixed(0))
            console.log(dLeng, maxLength, maxType, Createpassword.length, Createpassword.length + dLeng);
            if (dLeng == Infinity && maxLength > 0) {
                // console.log("test1");
                dLeng = 1
            } else if (dLeng == Infinity || (dLeng == 0 && maxLength == 0)) {
                // console.log("test2");
                break;
            }
            let leng = 0
            // console.log(Number(getformat.value.split("leng ")[1]) - 1,"&", k)
            if (Createpassword.length + 1 == Number(getformat.value.split("leng ")[1])) { // k == Number(getformat.value.split("leng ")[1]) - 1 有問題 待修改
                leng = maxLength
            } else if (Createpassword.length + dLeng >= Number(getformat.value.split("leng ")[1]) && !document.getElementById("gener").checked) {
                leng = maxLength
            } else {
                if (document.getElementById("gener").checked) {
                    leng = randint(1, 1)
                } else {
                    leng = randint(1, dLeng)
                }
                maxLength -= leng
                maxType--
            }
            for (let j=0; j < leng; j++) {
                let all = ''
                switch (c) {
                    case "upperenglish":
                        all = texts.englishUpper
                        Createpassword += all[randint(0, all.length-1)]
                        break;
                    case "lowerenglish":
                        all = texts.englishLower
                        Createpassword += all[randint(0, all.length-1)]
                        break;
                    case "number":
                        all = texts.number
                        Createpassword += all[randint(0, all.length-1)]
                        break;
                    case "symbol":
                        all = texts.symbol
                        Createpassword += all[randint(0, all.length-1)]
                        break;
                    case "space":
                        Createpassword += " "
                        break;
                }
            }
        } else if (format.startsWith("#")) {
            if ((Createpassword.length + format.replace("#", "").length) > Number(getformat.value.split("leng ")[1])) {
                // console.log("test123");
                format = format.slice(0, Number(getformat.value.split("leng ")[1]) - Createpassword.length)
                Createpassword += format.replace("#", "")
            } else {
                Createpassword += format.replace("#", "")
                newFormats.splice(newFormats.indexOf(format), 1)
                k--
            }
        }
    }
    password.value = Createpassword
}

function length () {
    let format = document.getElementById("format")
    let leng = document.getElementById("leng")
    let length = document.getElementById("length")
    if (leng.innerHTML.split("密碼長度: ")[1] == length.value.toString() || (Number(leng.innerHTML.split("密碼長度: ")[1]) > 15 && Number(length.value) == 15)) {
        return;
    }
    leng.innerHTML = `密碼長度: ${length.value}`
    format.value = format.value.split("leng")[0] + "leng " + length.value
}

function change (ID, my) {
    switch (ID) {
        case "Upper": {
            let a = new SysFormat("UpperEnglish")
            if (my.checked) {
                a.add()
            } else {
                a.remove()
            }
            break;
        }
        case "lower": {
            let a = new SysFormat("lowerEnglish")
            if (my.checked) {
                a.add()
            } else {
                a.remove()
            }
            break;
        }
        case "number": {
            let a = new SysFormat("number")
            if (my.checked) {
                a.add()
            } else {
                a.remove()
            }
            break;
        }
        case "symbol": {
            let a = new SysFormat("symbol")
            if (my.checked) {
                a.add()
            } else {
                a.remove()
            }
            break;
        }
        case "space": {
            let a = new SysFormat("space")
            if (my.checked) {
                a.add()
            } else {
                a.remove()
            }
            break;
        }
        case "defined": {
            let a = document.getElementById("format")
            if (my.checked) {
                a.disabled = false
            } else {
                a.disabled = true
            }
            break;
        }
        case "length": {
            let length = my.value.split("leng ")[1]
            let getsliderBar = document.getElementById("length")
            let leng = document.getElementById("leng")
            if (length > 200) {
                alert("密碼長度過長!")
                my.value = my.value.split("leng ")[0] + "leng " + "200"
                getsliderBar.value = 200
                leng.innerHTML = `密碼長度: 200`
            } else if (length < 3) {
                alert("密碼長度過短!")
                my.value = my.value.split("leng ")[0] + "leng " + "3"
                getsliderBar.value = 3
                leng.innerHTML = `密碼長度: 3`
            } else {
                if (length > 200) {
                    getsliderBar.value = 200
                } else {
                    getsliderBar.value = length
                }
                leng.innerHTML = `密碼長度: ${my.value.split("leng ")[1]}`
            }

            let getformat = document.getElementById("format")
            let gener = document.getElementById("gener")
            let text = getformat.value
            let formats = []
            let all = text.slice(1, text.indexOf("- leng")).replace("sys", "")
            let arr = all.split("],").join("] || ").split(" || ")
            for (let i in arr) {
                for (let j in JSON.parse(arr[i])) {
                    let format = JSON.parse(arr[i])[j]
                    formats.push(format)
                }
            }
            let gen = true
            for (let format of formats) {
                if (!format.startsWith("$")) {
                    gen = false
                    gener.checked = false
                    gener.disabled = true
                }
            }
            if (gen) {
                gener.checked = false
                gener.disabled = false
            }
            break;
        }
    }
}

function copy () {
    let password = document.getElementById("password")
    password.disabled = false
    password.select()
    document.execCommand('copy')
    password.disabled = true
    alert("複製成功!")
    window.getSelection().empty()
}

length()