const menuButton = document.getElementById("menu")
const nav = document.querySelector("nav")
const toggleMenuAndOverlay = () => {
    nav.classList.toggle("visible")
}
menuButton.addEventListener("click", toggleMenuAndOverlay)