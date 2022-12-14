const ch = document.getElementById("chper")
const ser = document.getElementById("server")
const up = document.getElementById("update")

const Icons = {
    ch: document.getElementById("chperIcon"),
    ser: document.getElementById("serverIcon"),
    up: document.getElementById("updateIcon")
}
Icons.ch.style.borderColor = "rgb(204, 255, 126)"


function chper () {
    ch.style.display = "block"
    ser.style.display = "none"
    up.style.display = "none"
    Icons.ch.style.borderColor = "rgb(204, 255, 126)"
    Icons.ser.style.borderColor = "rgb(156, 156, 156)"
    Icons.up.style.borderColor = "rgb(156, 156, 156)"
}

function server () {
    ch.style.display = "none"
    ser.style.display = "block"
    up.style.display = "none"
    Icons.ser.style.borderColor = "rgb(204, 255, 126)"
    Icons.ch.style.borderColor = "rgb(156, 156, 156)"
    Icons.up.style.borderColor = "rgb(156, 156, 156)"
}

function update () {
    ch.style.display = "none"
    ser.style.display = "none"
    up.style.display = "block"
    Icons.ser.style.borderColor = "rgb(156, 156, 156)"
    Icons.ch.style.borderColor = "rgb(156, 156, 156)"
    Icons.up.style.borderColor = "rgb(204, 255, 126)"
}