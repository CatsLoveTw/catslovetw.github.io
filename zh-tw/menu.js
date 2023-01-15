/**
 * 目前年分
 */
const year = 2023;

console.log("now url:" + window.location.href)

// menu
function transfer (text) {
  switch (text) {
    case "%E6%B8%AC%E8%A9%A6%E7%94%A8%E7%B6%B2%E9%A0%81":
      return "測試用網頁"
    case "%E5%85%89%E9%81%87%E8%A8%88%E7%AE%97%E6%A9%9F":
      return "光遇計算機"
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
    "首頁": {
      "path":"/index.html",
      "settitle":"網站首頁",
      "title":"首頁"
    },
    "關於": {
      "path":"/zh-tw/關於/infoIndex.html",
      "settitle":"想了解我?",
      "title":"關於"
    },
    "...": {
      "path":"/zh-tw/其他網頁/other.html",
      "settitle":"其他網頁",
      "title":"傳送門",
      "submenu": { // 因為架構改變 submenu可以視為更多傳送點。 (只會顯示於傳送門處)
        "光遇計算機": {
          "path":"/zh-tw/光遇計算機/SkyCalc.html",
          "settitle":"光遇計算機",
          "title":"光遇計算機"
        },
        "電量資訊": {
          "path":"/zh-tw/電池資訊/BatteryCheck.html",
          "settitle":"電量資訊",
          "title":"電量資訊"
        },
        "敬請期待...": {
          "path":"",
          "settitle":"敬請期待...",
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
let Subpathes = ''
for (let i in pages.href) {
  let index = url(pages.href[i].path)
    if (pages.href[i].title == getTitle.innerHTML || transfer(window.location.href.split("#")[1]) == pages.href[i].title) {
      index = ""
      pathes += `<li class="now"><a href="${index}" title="${pages.href[i].settitle}">${i}</a></li>`
    } else {
      pathes += `<li class="after"><a href="${index}" title="${pages.href[i].settitle}">${i}</a></li>`
  }
}

for (let i in pages.href) {
  let index = url(pages.href[i].path)
  if (pages.href[i] == pages.href["..."]) { 
    let otherpages = pages.href[i].submenu
    for (let j in otherpages) {
      let index = url(otherpages[j].path)
      if (otherpages[j].title == getTitle.innerHTML || transfer(window.location.href.split("#")[1]) == otherpages[j].title) {
        index = ""
        Subpathes += `<li class="now"><a href="${index}" title="${otherpages[j].settitle}">${j}</a></li>`
      } else {
        Subpathes += `<li class="after"><a href="${index}" title="${otherpages[j].settitle}">${j}</a></li>`
    }
    }
  } else {
    if (pages.href[i].title == getTitle.innerHTML || transfer(window.location.href.split("#")[1]) == pages.href[i].title) {
      index = ""
      Subpathes += `<li class="now"><a href="${index}" title="${pages.href[i].settitle}">${i}</a></li>`
    } else {
      Subpathes += `<li class="after"><a href="${index}" title="${pages.href[i].settitle}">${i}</a></li>`
  }
}
}
let gethome = window.location.href.split("//")[0] + "//"
gethome = gethome + window.location.href.replace(gethome, '').split("/")[0]

menu.outerHTML = `
<input type="checkbox" name="menu" id="menu">
<header class="main-header">
  <label for="menu"><span class="material-symbols-outlined">menu</span></label>
  <label for="menu" class="close"><span class="material-symbols-outlined">close</span></label>
  <a id="backHome" href="${gethome}"><span class="material-symbols-outlined">home</span></a>
<div class="container">
  <div class="webtitle">
    <h1><a href="" class="h">${getTitle.innerHTML}</a></h1>
  </div>
  <nav>
    <ul class="main-menu">
      ${pathes}
    </ul>
    <ul class="main-menu sub">
      ${Subpathes}
    </ul>
  </nav>
  </div>
  </header>
`


// if (getTitle.innerHTML == "首頁" || getTitle.innerHTML == "找不到網頁") {
//   let pathes = ""
//   for (let i in pages.href) {
//     let index = ""
//     let display = i
//     if (i == getTitle.innerHTML) {
//       index = ""
//       pathes += `<li class="now"><a href="${index}" title="${pages.href[i].settitle}">${display}</a></li>`
//     } else {
//       if (getTitle.innerHTML == "首頁") {
//         index = `./zh-tw/${pages.href[i].path.split("../")[1]}`
//         pathes += `<li class="after"><a href="${index}" title="${pages.href[i].settitle}">${display}</a></li>`
//       } else {
//           if (i == "首頁") {
//             index = "./index.html"
//             pathes += `<li class="after"><a href="${index}" title="${pages.href[i].settitle}">${display}</a></li>`
//           } else {
//             index = `./zh-tw/${pages.href[i].path.split("../")[1]}`
//             pathes += `<li class="after"><a href="${index}" title="${pages.href[i].settitle}">${display}</a></li>`
//           }
//       }
//   }
      
// }
//   menu.innerHTML = `
//   <div class="container">
//     <h1><a href="" class="h">${getTitle.innerHTML}</a></h1>
//     <nav>
//       <ul class="main-menu">
//         ${pathes} 
//       </ul>
//     </nav>
//     <label for="navbarToggle"><span class="material-icons">expand_more</span></label>
//   </div>
// `
// } else {
//   let pathes = ''
//   for (let i in pages.href) {
//     let index = pages.href[i].path
//     if (location.href.indexOf("%E5%85%89%E9%81%87%E8%A8%88%E7%AE%97%E6%A9%9F/%E6%A8%A1%E5%BC%8F") == -1) {
//       if (pages.href[i].title == getTitle.innerHTML || transfer(window.location.href.split("#")[1]) == pages.href[i].title) {
//         index = ""
//         pathes += `<li class="now"><a href="${index}" title="${pages.href[i].settitle}">${i}</a></li>`
//       } else {
//         pathes += `<li class="after"><a href="${index}" title="${pages.href[i].settitle}">${i}</a></li>`
//       }
//     } else {
//       if (pages.href[i].title == getTitle.innerHTML || transfer(window.location.href.split("#")[1]) == pages.href[i].title) {
//         index = ""
//         pathes += `<li class="now"><a href="${index}" title="${pages.href[i].settitle}">${i}</a></li>`
//       } else {
//         pathes += `<li class="after"><a href="${"../../" + index}" title="${pages.href[i].settitle}">${i}</a></li>`
//       }
//     }
// }

//   menu.innerHTML = `
//   <div class="container">
//     <h1><a href="" class="h">${getTitle.innerHTML}</a></h1>
//     <nav>
//       <ul class="main-menu">
//         ${pathes}  
//       </ul>
//     </nav>
//     <label for="navbarToggle"><span class="material-icons">expand_more</span></label>
//   </div>
// `
// 
} catch {}


// footer / language
var footer = document.getElementById("footer")
let langSupports = {
  'zh-tw': {name: '繁體中文', comp: '100%', path: 'index.html'},
  'en-us': {name: '英文', comp: '65%', path: 'en-us/index.html'},
  'zh-cn': {name: '簡體中文', comp: '0%', path: 'zh-tw/錯誤/errorwebsite.html'},
  'jp': {name: '日文', comp: '0%', path: 'zh-tw/錯誤/errorwebsite.html'}
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
var listLang = document.getElementsByTagName("allLang").item(0).outerHTML.split(">")[0].split("=")[1].replace(/"/g, "").split(" ")
let displayLangs = []
let Langs = {
  "zh-tw": {
    "name": "繁體中文",
    "value": "zh-tw",
    seleted: true
  },
  "en-us": {
    "name": "English",
    "value": "en-us",
    seleted: false
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
          <label for="tran" title="協助翻譯"><span class="material-symbols-outlined" id="translateIcon">translate</span></label>
          <div class="trans">
            <h2 class="trantitle">想要幫助我們翻譯?</h2>
            <div class="langs">
            <p class="completeTitle">語言進度</p>
            ${transLang.join("")}
            </div>
            <a href="https://catslovetw.github.io/zh-tw/關於/infoIndex.html" class="tranUrl">聯絡作者</a>
          </div>
<footer id="footer">
  text
</footer>
<select id="language" class="language" onchange="changeLang(this)" title="選擇語言">
        ${displayLangs.join()}
        </select>
</div>
`

// if (location.href.indexOf("%E5%85%89%E9%81%87%E8%A8%88%E7%AE%97%E6%A9%9F") != -1) {
//   footer.outerHTML = `
//   <div class="f" id="f">
//   <input type="checkbox" name="tran" id="tran">
//             <label for="tran" title="協助翻譯"><span class="material-symbols-outlined" id="translateIcon">translate</span></label>
//             <div class="trans">
//               <h2 class="trantitle">想要幫助我們翻譯?</h2>
//               <div class="langs">
//               <p class="completeTitle">語言進度</p>
//               ${transLang.join("")}
//               </div>
//               <a href="https://catslovetw.github.io/zh-tw/關於/infoIndex.html" class="tranUrl">聯絡作者</a>
//             </div>
//   <footer id="footer">
//     text
//   </footer>
//   <select id="language" class="language" onchange="changeLang(this)" title="選擇語言">
//             <option value="zh-tw" selected>繁體中文</option>
//           </select>
//   </div>`
// } else {
//   footer.outerHTML = `
//   <div class="f" id="f">
//   <input type="checkbox" name="tran" id="tran">
//             <label for="tran" title="協助翻譯"><span class="material-symbols-outlined" id="translateIcon">translate</span></label>
//             <div class="trans">
//               <h2 class="trantitle">想要幫助我們翻譯?</h2>
//               <div class="langs">
//               <p class="completeTitle">語言進度</p>
//               ${transLang.join("")}
//               </div>
//               <a href="https://catslovetw.github.io/zh-tw/關於/infoIndex.html" class="tranUrl">聯絡作者</a>
//             </div>
//   <footer id="footer">
//     text
//   </footer>
//   <select id="language" class="language" onchange="changeLang(this)" title="選擇語言">
//             <option value="zh-tw" selected>繁體中文</option>
//             <option value="en-us" class="notSelected">English</option>
//           </select>
//   </div>`

// }
footer = document.getElementById("footer")
footer.innerText = footer.innerText.replace("text", `©2022-${year} 此網站由貓咪建立`)
window.addEventListener("offline", (e) => {
  footer.style.backgroundColor = "#ff3737"
  footer.style.fontSize = "14px"
  footer.innerText = `您已經離線 / ©2022-${year} 此網站由貓咪建立`
})
window.addEventListener("online", (e) => {
  footer.style.backgroundColor = "#adff2f"
  footer.style.color = "black"
  footer.innerHTML = "偵測到回復連線，正在嘗試重新加載..."
  setInterval(() => {
    location.reload()
  }, 3500)
})

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

// 偵測所在區域為主頁 (width: 500px)
console.log(document.getElementsByClassName("title").item(0).innerHTML)
if (document.getElementsByClassName("title").item(0).innerHTML == "首頁") {
  document.getElementById("backHome").style.color = "#16d02e"
}
document.getElementsByClassName("title").item(0).innerHTML = ""