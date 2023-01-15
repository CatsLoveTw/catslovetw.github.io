navigator.getBattery().then(battery => {
    // 電量顯示
    function batterylist () {
        let html = document.getElementById("batteryValue")
        let getChargeHtml = document.getElementById("isCharging")
        html.innerHTML = battery.level * 100 + "%"
        if (battery.level * 100 == 100) {
            getChargeHtml.innerHTML = "已充電完成"
        } else {
            getChargeHtml.innerHTML = "充電中..."
        }
    }
    batterylist()


    // 充電顯示
    function onCharge () {
        let batteryStyle = document.getElementById("batterylist")
        let text = document.getElementById("isCharging")
        let getIcon = document.getElementById("boltIcon")
        if (battery.charging) {
            text.style.display = "block"
            getIcon.style.display = "block"
            batteryStyle.style.animation = 'chargeStart 2.5s infinite'
        } else {
            text.style.display = "none"
            getIcon.style.display = "none"
            batteryStyle.style.animation = 'none'
        }
    }
    onCharge()


    // 沒電顯示 (<25% / 未充電)
    function LowBattery () {
        let batteryValue = battery.level * 100
        let text = document.getElementById("LowBat")
        let getIcon = document.getElementById("LowboltIcon")
        if (!battery.charging) {
            if (batteryValue <= 25) {
                text.style.display = "block"
                getIcon.style.display = "block"
            } else {
                text.style.display = "none"
                getIcon.style.display = "none"
            }
        } else {
            text.style.display = "none"
            getIcon.style.display = "none"
        }
    }

    LowBattery()


    function Batterydisplay () {
        let getDisplay = document.getElementById("batteryStart")
        let value = battery.level * 100
        let height = 100 - value
        let width = 102
        let pos = -1
        getDisplay.style.height = `${height}%`
        getDisplay.style.width = `${width}`
        getDisplay.style.left = pos
        
        function setColor () {
            let setColors = [
                "linear-gradient(to bottom, yellowgreen, green)", // 75-94
                "linear-gradient(to bottom, yellowgreen, rgb(255, 251, 0))", // 50-74
                "linear-gradient(to bottom, rgb(255, 251, 0), rgb(255, 60, 0))", // 25-49
                "linear-gradient(to bottom, rgb(255, 123, 0), rgb(255, 0, 0))", // 1-24
                "linear-gradient(to bottom, rgb(50, 205, 153), rgb(0, 87, 128))" // 95-100
            ]
            if (value >= 95) {
                document.getElementById("batterylist").style.backgroundImage = setColors[4]
            } else if (value >= 75 && value < 95) {
                document.getElementById("batterylist").style.backgroundImage = setColors[0]
            } else if (value >= 50 && value < 75) {
                document.getElementById("batterylist").style.backgroundImage = setColors[1]
            } else if (value >= 25 && value < 50) {
                document.getElementById("batterylist").style.backgroundImage = setColors[2]
            } else {
                document.getElementById("batterylist").style.backgroundImage = setColors[3]
            }
        }
        
        setColor()
    }
    Batterydisplay()
    battery.onlevelchange = () => {
        batterylist()
        Batterydisplay()
        LowBattery()
    }
    battery.onchargingchange = () => {
        onCharge()
        LowBattery()
    }
})
