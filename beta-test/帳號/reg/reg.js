function submit (a) {
    function go (path) {
        let geturl = location.href.split("//")[0] + "//" + location.href.split("//")[1].split("/")[0] + "/"
        return geturl + path
    }


    /**
     * @type {string}
     */
    let name = document.getElementsByName("name").item(0).value.replace(/ /g, "")
    /**
     * @type {string}
     */
    let email = document.getElementsByName("email").item(0).value
    /**
     * @type {string}
     */
    let password = document.getElementsByName("password").item(0).value
    /**
     * @type {string}
     */
    let again_password = document.getElementsByName("again_password").item(0).value
    /**
     * @type {string}
     */
    let errorBox = document.getElementById("errorBox")
    console.log(name, email, password, again_password)
    // 錯誤
    if (password != again_password) {
        return errorBox.style.display = "block"
    } else if (name.trim().length < 1) {
        return errorBox.style.display = "block"
    } else if (email.trim().length < 1) {
        return errorBox.style.display = "block"
    } else if (password.trim().length < 8) {
        return errorBox.style.display = "block"
    } else if (again_password.trim().length < 1) {
        return errorBox.style.display = "block"
    } else if (email.trim().indexOf("@") == -1) {
        return errorBox.style.display = "block"
    } else if (email.trim().split("@")[1].length <= 4) {
        return errorBox.style.display = "block"
    }
    return location.href = go(`/zh-tw/帳號/check-accout/check.html?name=${name},email=${email},password=${password}`)
}