const darkLightTheme = document.getElementById("dark-light-theme")
const body = document.querySelector(".body")
const card1 = document.querySelector(".card-one")
const card2 = document.querySelector(".card-two")
const card3 = document.querySelector(".card-three")
const card4 = document.querySelector(".card-four")
const card5 = document.querySelector(".card-five")
const card6 = document.querySelector(".card-six")

darkLightTheme.addEventListener("click", ()=>{
    body.classList.toggle("dark")
    card1.classList.toggle("greyed")
    card2.classList.toggle("greyed")
    card3.classList.toggle("greyed")
    card4.classList.toggle("greyed")
    card5.classList.toggle("greyed")
    card6.classList.toggle("greyed")
})

