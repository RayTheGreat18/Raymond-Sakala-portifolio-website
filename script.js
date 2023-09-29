const darkLightTheme = document.getElementById("dark-light-theme")
const body = document.querySelector(".body")

darkLightTheme.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})
