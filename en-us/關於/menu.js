const ch = document.getElementById("chper")
const ser = document.getElementById("server")
const up = document.getElementById("update")

const Icons = {
    ch: document.getElementById("chperIcon"),
    ser: document.getElementById("serverIcon"),
    up: document.getElementById("updateIcon")
}

const css = {
    borderColor: {
        seleted: "rgb(204, 255, 126)",
        not: "rgb(156, 156, 156)"
    }
}

Icons.ch.style.borderColor = css.borderColor.seleted


function changeColor (ID) {
    ch.style.display = "none"
    ser.style.display = "none"
    up.style.display = "none"
    Icons.ch.style.borderColor = css.borderColor.not
    Icons.ser.style.borderColor = css.borderColor.not
    Icons.up.style.borderColor = css.borderColor.not
    switch (ID) {
        case "chper": 
            ch.style.display = "block"
            Icons.ch.style.borderColor = css.borderColor.seleted
            break;
        case "server":
            ser.style.display = "block"
            Icons.ser.style.borderColor = css.borderColor.seleted
            break;
        case "update":
            up.style.display = "block"
            Icons.up.style.borderColor = css.borderColor.seleted
            break;
    }
}

function chper () {
    changeColor("chper")
}

function server () {
    changeColor("server")
}

function update () {
    changeColor("update")
}