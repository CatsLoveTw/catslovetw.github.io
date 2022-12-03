/**
 * 目前年分
 */
const year = new Date().getFullYear();

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
    "首頁": {
      "path":"../../index.html",
      "settitle":"網站首頁",
      "title":"首頁"
    },
    "關於": {
      "path":"../關於/infoIndex.html",
      "settitle":"想了解我?",
      "title":"關於"
    },
    "...": {
      "path":"../其他網頁/other.html",
      "settitle":"其他網頁",
      "title":"傳送門",
      "submenu": { // 因為架構改變 submenu可以視為更多傳送點。 (只會顯示於傳送門處)
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
const menu = document.getElementsByClassName("main-header").item(0)
const getTitle = document.getElementsByClassName("title").item(0)
if (getTitle.innerHTML == "首頁") {
  let pathes = ""
  for (let i in pages.href) {
    let index = ""
    let display = i
    if (i == "首頁") {
      index = ""
      pathes += `<li class="now"><a href="${index}" title="${pages.href[i].settitle}">${display}</a></li>`
    } else {
      index = `./zh-tw/${pages.href[i].path.split("../")[1]}`
      pathes += `<li class="after"><a href="${index}" title="${pages.href[i].settitle}">${display}</a></li>`
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
} else {
  let pathes = ''
  for (let i in pages.href) {
    let index = pages.href[i].path
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
}
getTitle.innerHTML = ""
} catch {}


// footer / language
var footer = document.getElementById("footer")
footer.outerHTML = `
  <div class="f" id="f">
  <footer id="footer">
    text
  </footer>
  <select id="language" class="language" onchange="changeLang(this)">
            <option value="zh-tw" selected>繁體中文</option>
            <option value="en-us">English</option>
          </select>
  </div>`
footer = document.getElementById("footer")
footer.innerText = footer.innerText.replace("text", `©${year} 此網站由貓咪建立`)


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