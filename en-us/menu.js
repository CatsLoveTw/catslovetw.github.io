/**
 * 目前年分
 */
const year = 2023

console.log("now url:" + window.location.href)

// menu
function transfer (text) {
  switch (text) {
    case "%E6%B8%AC%E8%A9%A6%E7%94%A8%E7%B6%B2%E9%A0%81":
      return "測試用網頁"
  }
  return false

}

// 連結處理
try {
  const urls = document.getElementsByClassName("url")
  for (let i = 0; i < urls.length; i++) {
      let url = urls.item(i).classList.item(1)
      if (url != null) {
      let outer = urls.item(i).outerHTML
      urls.item(i).outerHTML = outer.replace('href="', `href="../警示用語/warring.html###${url}`)
    } else {
      let outer = urls.item(i).outerHTML
      urls.item(i).outerHTML = outer.replace('href="', 'href="../錯誤/errorwebsite.html')
    }
  }
} catch (e) {console.log(e)}


// "測試用網頁": {
//   "path":"../錯誤/errorwebsite.html#測試用網頁", // ../測試用網頁/testhub.html
//   "settitle":"測試用",
//   "title":"測試用網頁"
// },

// menu
const pages = {
  "href": {
    "home": {
      "path":"/en-us/index.html",
      "settitle":"website home",
      "title":"home"
    },
    "info": {
      "path":"/en-us/關於/infoIndex.html",
      "settitle":"want to know me?",
      "title":"Info"
    },
    "...": {
      "path":"/en-us/其他網頁/other.html",
      "settitle":"other page",
      "title":"portal",
      "submenu": { // 因為架構改變 submenu可以視為更多傳送點。 (只會顯示於傳送門處)
        "Sky Children of the Light Calc": {
          "path": "/en-us/光遇計算機/SkyCalc.html",
          "settitle": "Calc for Sky Children",
          "title": "Sky Children of Light Calc"
        }
        ,
        "To be continued...": {
          "path":"",
          "settitle":"To be continued...",
          "title":"敬請期待"
        }
      }
    }
  }
}
try {
  const url = (path) => {
    let getNowUrl = location.href.split("//")[0] + "//" + location.href.split("//")[1].split("/")[0] + path
    console.log(getNowUrl)
    return getNowUrl
  }
  const menu = document.getElementsByClassName("main-header").item(0)
  const getTitle = document.getElementsByClassName("title").item(0)
  
  let pathes = ''
  for (let i in pages.href) {
    let index = url(pages.href[i].path)
      if (pages.href[i].title == getTitle.innerHTML || transfer(window.location.href.split("#")[1]) == pages.href[i].title) {
        index = ""
        pathes += `<li class="now"><a href="${index}" title="${pages.href[i].settitle}">${i}</a></li>`
      } else {
        pathes += `<li class="after"><a href="${index}" title="${pages.href[i].settitle}">${i}</a></li>`
    }
  }
  
  menu.innerHTML = `
  <div class="container">
    <h1><a href="" class="h">${getTitle.innerHTML}</a></h1>
    <nav>
      <ul class="main-menu">
        ${pathes}  
      </ul>
    </nav>
    <label for="navbarToggle"><span class="material-icons">expand_more</span></label>
  </div>
  `
getTitle.innerHTML = ""
} catch {}


// footer / language
var footer = document.getElementById("footer")
let langSupports = {
  'zh-tw': {name: 'Chinese-Traditional', comp: '100%', path: 'index.html'},
  'en-us': {name: 'English', comp: '65%', path: 'en-us/index.html'},
  'zh-cn': {name: 'Chinese-Simplified', comp: '0%', path: 'en-us/錯誤/errorwebsite.html'},
  'jp': {name: 'Japanese', comp: '0%', path: 'en-us/錯誤/errorwebsite.html'}
}
let transLang = []
for (let i in langSupports) {
  let index = 0
  let color = ['langred', 'langorange', 'langgreen']
  let person = Number(langSupports[i].comp.replace("%", ""))
  if (person < 50) {
    index = 0
  } else if (person >= 50 && person <= 84) {
    index = 1
  } else {
    index = 2
  }
  console.log(location.href.split("//")[0] + "//" + document.location.href.split("//")[1].split("/")[0] + "/" + langSupports[i].path)
  let path = location.href.split("//")[0] + "//" + document.location.href.split("//")[1].split("/")[0] + "/" + langSupports[i].path
  if (i == "jp") {
    transLang.push(`<p class="langComplete last_langComplete" id="${i}"><a href="${path}" class="${color[index]}">${langSupports[i].name}: ${langSupports[i].comp}</a></p>`)
  } else {
  transLang.push(`<p class="langComplete" id="${i}"><a href="${path}" class="${color[index]}">${langSupports[i].name}: ${langSupports[i].comp}</a></p>`)
}
}
var listLang = ["zh-tw", "en-us"]
let displayLangs = []
let Langs = {
  "zh-tw": {
    "name": "繁體中文",
    "value": "zh-tw",
    seleted: false
  },
  "en-us": {
    "name": "English",
    "value": "en-us",
    seleted: true
  }
}

for (let i in listLang) {
  let lang = Langs[listLang[i]]
  let sele = 'selected'
  let c = ""
  if (!lang.seleted) {
    sele = ''
    c = "notSelected"
  }
  displayLangs.push(`<option class='${c}' value='${lang.value}' ${sele}>${lang.name}</option>`)
}

footer.outerHTML = `
<div class="f" id="f">
<input type="checkbox" name="tran" id="tran">
          <label for="tran" title="Help us for translate"><span class="material-symbols-outlined" id="translateIcon">translate</span></label>
          <div class="trans">
            <h2 class="trantitle">help us for translate</h2>
            <div class="langs">
            <p class="completeTitle">progress</p>
            ${transLang.join("")}
            </div>
            <a href="https://catslovetw.github.io/en-us/關於/infoIndex.html" class="tranUrl">Contact the author</a>
          </div>
<footer id="footer">
  text
</footer>
<select id="language" class="language" onchange="changeLang(this)" title="選擇語言">
        ${displayLangs.join()}
        </select>
</div>
`
footer = document.getElementById("footer")
footer.innerText = footer.innerText.replace("text", `©2022-${year} Website created by Cat`)


// 傳送門專用
try {
  const getTitle = document.getElementsByClassName("title").item(0)
  const por = document.getElementsByClassName("portal").item(0)
  let pathes = ''
  for (let i in pages.href) {
    let index = pages.href[i].path
    if (pages.href[i].title == getTitle.innerHTML) {
      index = ""
    }
    if (!pages.href[i].submenu) {
      pathes += `<li class="list"><a href="${index}" title="${pages.href[i].settitle}">${i}</a></li>`
    }
    if (pages.href[i].submenu) {
      let subindex = ""
      let subpathes = ""
      let sub = pages.href[i].submenu
      for (let f in sub) {
        subindex = sub[f].path
        subpathes += `<li class="list"><a href="${subindex}" title="${sub[f].settitle}">${f}</a></li>`
      }
      pathes += subpathes
    }
  }
  por.innerHTML = `
    ${pathes}
  `
} catch {}