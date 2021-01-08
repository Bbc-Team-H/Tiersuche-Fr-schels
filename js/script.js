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

//der sende Button wird erst zu einem geändert wenn ich eine Datenbank erstellt habe, damit er nicht keine Funktion hat habe ich in zu einem Link gemacht:D 
document.getElementById("button").addEventListener("click", function () {
    goTo("https://www.youtube.com/watch?v=oHg5SJYRHA0")
})

function goTo(path) {
    let win = window.open(path, '_blank');
    win.focus();
}