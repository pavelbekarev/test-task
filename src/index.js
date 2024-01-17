import './style.scss'

const header = document.getElementById("header");
const name = "Petr"

header.addEventListener("click", () => {
    header.style.color = "red";
    console.log(`hello ${name}`)
})

