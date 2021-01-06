const menuButton = document.getElementById("menu")
const nav = document.querySelector("nav")
const back = document.querySelector("#back")

const toggleMenuAndOverlay = () => {
    nav.classList.toggle("visible")
}

const menuback = () => {
    nav.classList.toggle("visible")
}

back.addEventListener("click", menuback)

menuButton.addEventListener("click", toggleMenuAndOverlay)
