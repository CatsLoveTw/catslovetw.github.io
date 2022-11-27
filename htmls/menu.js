/**
 * 目前年分
 */
const year = new Date().getFullYear();

console.log("now url:" + window.location.href)

// menu

try {
const pages = {
  "href": {
    "首頁": {
      "path":"../../index.html"
    },
    "測試用網頁": {
      "path":"../錯誤/errorwebsite.html" // ../測試用網頁/testhub.html
    },
    "關於": {
      "path":"../關於/infoIndex.html"
    }
  }
}
const menu = document.getElementsByClassName("main-header").item(0)
const getTitle = document.getElementsByClassName("title").item(0)
if (getTitle.innerHTML == "首頁") {
  let pathes = ""
  for (let i in pages.href) {
    let index = ""
    if (i == "首頁") {
      index = "#"
    } else {
      index = `./htmls/${pages.href[i].path.split("../")[1]}`
    }
    console.log(index)
    pathes += `<li><a href="${index}">${i}</a></li>`
  }
  menu.innerHTML = `
  <div class="container">
    <h1><a href="#" class="h">${getTitle.innerHTML}</a></h1>
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
    if (i == getTitle.innerHTML) {
      index = "#"
    }
    pathes += `<li><a href="${index}">${i}</a></li>`
  }
  menu.innerHTML = `
  <div class="container">
    <h1><a href="#" class="h">${getTitle.innerHTML}</a></h1>
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


// footer
const footer = document.getElementById("footer")
footer.innerText = `©${year} 此網站由貓咪建立`