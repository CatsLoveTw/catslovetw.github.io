let url = window.location.href.split("###")[1]
const link = document.getElementsByClassName("link")
const btn = document.getElementsByClassName("y").item(0)
const goLink = document.getElementsByClassName("url").item(0)
if (!url) {
    url = "無"
    btn.outerHTML = `<button class="btn y" style="opacity: 0.3;cursor: not-allowed;">前往</button>`
    goLink.outerHTML = goLink.outerHTML.replace("#", window.location.href)
} else {
    goLink.outerHTML = goLink.outerHTML.replace("#", url)
    btn.outerHTML = `<button class="btn y">前往</button>`
}
link.item(0).innerHTML = url


