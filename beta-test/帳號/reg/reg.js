function checkPassword (password) {
    let Englishs = "abcdefghijklmnopqrstuvwxyz"
    let Numbers = "1234567890"
    let checkeng = false
    let checknum = false
    for (let eng of Englishs.split("")) {
        if (password.indexOf(eng) != -1) {
            checkeng = true
        }
    }
    for (let num of Numbers.split("")) {
        if (password.indexOf(num) != -1) {
            checknum = true
        } 
    }
    if (checkeng && checknum) {
        return true
    }
    return false
}


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
    } else if (name.trim().length < 3) {
        return errorBox.style.display = "block"
    } else if (email.trim().length < 1) {
        return errorBox.style.display = "block"
    } else if (password.trim().length < 8) {
        return errorBox.style.display = "block"
    } else if (!checkPassword(password.trim())) {
        return errorBox.style.display = "block"
    } else if (again_password.trim().length < 1) {
        return errorBox.style.display = "block"
    } else if (email.trim().indexOf("@") == -1) {
        return errorBox.style.display = "block"
    } else if (email.trim().split("@")[1].length <= 4) {
        return errorBox.style.display = "block"
    }
    return location.href = go(`/beta-test/帳號/check-accout/check.html?name=${name},email=${email},password=${password}`)
}

function check (ID) {
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

     let ErrorTexts = {
        name: document.getElementById("nameError"),
        email: document.getElementById("emailError"),
        password: document.getElementById("passwordError"),
        againPassword: document.getElementById("againPasswordError")
     }
     switch (ID) {
        case "name": {
            let Html = document.getElementsByName("name").item(0)
            if (name.trim().length == 0) {
                ErrorTexts.name.style.display = "none"
                return Html.style.borderColor = "rgb(218, 218, 218)"
            } else if (name.trim().length < 3) {
                ErrorTexts.name.style.display = "block"
                return Html.style.borderColor = "red"
            }
            ErrorTexts.name.style.display = "none"
            return Html.style.borderColor = "green"
        }
        case "accout": {
            let Html = document.getElementsByName("email").item(0)
            if (email.trim().length == 0) {
                ErrorTexts.email.style.display = "none"
                return Html.style.borderColor = "rgb(218, 218, 218)"
            }
            if (email.trim().indexOf("@") == -1) {
                ErrorTexts.email.style.display = "block"
                return Html.style.borderColor = "red"
            } else if (email.trim().split("@")[1].length <= 4) {
                ErrorTexts.email.style.display = "block"
                return Html.style.borderColor = "red"
            }
                ErrorTexts.email.style.display = "none"
                return Html.style.borderColor = "green"
        }
        case "password": {
            let Html = document.getElementsByName("password").item(0)
            if (password.trim().length == 0) {
                ErrorTexts.password.style.display = "none"
                return Html.style.borderColor = "rgb(218, 218, 218)"
            }
            if (password.trim().length < 8) {
                ErrorTexts.password.style.display = "block"
                return Html.style.borderColor = "red"
            } else if (!checkPassword(password.trim())) {
                ErrorTexts.password.style.display = "block"
                return Html.style.borderColor = "red"
            }
                ErrorTexts.password.style.display = "none"
                return Html.style.borderColor = "green"
        }
        case "againPassword": {
            let Html = document.getElementsByName("again_password").item(0)
            if (again_password.trim().length == 0) {
                ErrorTexts.againPassword.style.display = "none"
                return Html.style.borderColor = "rgb(218, 218, 218)"
            }
            if (password != again_password) {
                ErrorTexts.againPassword.style.display = "block"
                return Html.style.borderColor = "red"
            }
                ErrorTexts.againPassword.style.display = "none"
                return Html.style.borderColor = "green"
        }
     }
}