console.log(location.href)
let change = document.getElementsByClassName("changeMode").item(0)
let path = location.href
if (path.indexOf(transfer_url("模式")) != -1) {
    path = path.split(transfer_url("模式"))[1].replace(path.split(transfer_url("模式"))[1].split("/")[1], "")
} else {
    path = "/SkyCalc.html"
}
path = path.replace("/", "").replace("/", "").replace(".html", "")
switch (path) {
    case "SkyCalc":
        change.innerHTML = `
            <option value="nope" selected>無</option>
            <optgroup label="普通蠟燭">
            <option value="candles-day">計算所需天數</option>
        </optgroup>` 
        break;
    case "candles-day":
        change.innerHTML = `
            <option value="nope">無</option>
            <optgroup label="普通蠟燭">
            <option value="candles-day" selected>計算所需天數</option>
        </optgroup>` 
        break;
}




function transfer_url (text) {
    switch (text) {
        case "光遇計算機":
            return "%E5%85%89%E9%81%87%E8%A8%88%E7%AE%97%E6%A9%9F"
        case "模式":
            return "%E6%A8%A1%E5%BC%8F"    
    }
    return false
}

function transfer (text) {
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

function changeMode (modeID) {
    console.log(modeID)
    const url = (flie_name) => {
        return location.href.split('/' + transfer_url("光遇計算機"))[0] + "/光遇計算機/" + flie_name
    }
    switch (modeID) {
        case "nope":
            location.href = url("SkyCalc.html")
            break;
        case "candles-day":
            location.href = url("模式/candles-day/candles-day.html")
            break;
    }
}


