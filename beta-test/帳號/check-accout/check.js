let accout = "undefined"
try {
    accout = location.href.split("email=")[1].split(",")[0]
} catch {}
let accoutD = document.getElementById("accout")

accoutD.innerText = accout