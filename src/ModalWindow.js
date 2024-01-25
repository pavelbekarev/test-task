'use strict'

const button = document.querySelector(".lets-talk__button");
const footer__h1 = document.querySelector(".footer__h1");

const setColor = () => {
    button.addEventListener("click", () => {
        footer__h1.style.color = "blue"
    });
}

export default setColor;