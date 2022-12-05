function changeLang (a) {
    console.log("awa")
    // const select = document.querySelector("#language")
    // let value = select.options[select.selectedIndex].value
    let value = a.value
    console.log("text", value, location.href)
    try {
        console.log(location.href.indexOf("en-us"))
        if (value == "zh-tw" && location.href.indexOf("en-us") != -1) {
            let link = location.href
            console.log("test")
            if (link.indexOf("index.html") != -1) {
                location.href = location.href.split("/en-us")[0]
            } else if (link.indexOf("/en-us") != -1) {
                location.href = location.href.replace("en-us", "zh-tw")
            }
        } else if (value == "en-us") {
            if (location.href.indexOf("zh-tw") != -1 || location.href.indexOf("en-us") == -1) {
                if (location.href.indexOf("index.html") != -1) {
                    location.href = location.href.split("index.html")[0] + "/en-us/index.html"
                } else if (location.href.indexOf("/zh-tw") != -1) {
                    location.href = location.href.replace("zh-tw", "en-us")
                } else {
                    location.href = location.href + "en-us/index.html"
                }
            }
    }
} catch { }
}