
const menu = document.querySelector(".startMenu")
const start = document.querySelector("#startIcon")

const sideMenu = document.querySelector(".sideMenu")
const time = document.querySelector(".time")

const wifi = document.querySelector(".wifi")
const wifiMenu = document.querySelector(".wifiMenu")


const arrow = document.querySelector(".arrow")
const arrowMenu = document.querySelector(".arrowMenu")

const container = document.querySelector(".container")
const overlay = document.querySelector(".overlay")


const sid = document.querySelector("#sid")


sid.addEventListener('click', () => {
    console.log("clicked")
    if (sid.classList.contains("active")) {
        sid.classList.remove("active")
    }
    else sid.classList.add("active")
})

overlay.addEventListener('click', () => {
    wifiMenu.classList.remove("open")
    arrowMenu.classList.remove("open")
    sideMenu.classList.remove("open")
    menu.classList.remove("open")
    sid.classList.remove("active")
    
})

start.addEventListener('click', () => {
    if (!menu.classList.contains("open")) {
        menu.classList.add("open")
    }
    else menu.classList.remove("open")
})

time.addEventListener('click', () => {
    if (!sideMenu.classList.contains("open")) {
        sideMenu.classList.add("open")
        wifiMenu.classList.remove("open")
        arrowMenu.classList.remove("open")
    }
    else sideMenu.classList.remove("open")
})

wifi.addEventListener('click', () => {
    if (!wifiMenu.classList.contains("open")) {
        wifiMenu.classList.add("open")
        sideMenu.classList.remove("open")
        arrowMenu.classList.remove("open")

    }
    else wifiMenu.classList.remove("open")
})

arrow.addEventListener('click', () => {
    console.log('clicked')
    if (!arrowMenu.classList.contains("open")) {
        arrowMenu.classList.add("open")
        sideMenu.classList.remove("open")
        wifiMenu.classList.remove("open")
    }
    else arrowMenu.classList.remove("open")
})