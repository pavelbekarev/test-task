'use strict'

const button = document.getElementById("button");
const modalWindow = document.getElementById("modalWindow");
const closeButton = document.querySelector(".close__button");


const ModalWindow = () => {
    button.addEventListener("click", () => {
        modalWindow.classList.toggle("modal-window__wrapper--active");
    });

    closeButton.addEventListener("click", () => {
        modalWindow.classList.toggle("modal-window__wrapper--active");
    })

    modalWindow.addEventListener("click", e => {
        const click = e.composedPath().includes(document.querySelector(".modal-window__wrapper"));

        if ( !click ) {
            modalWindow.classList.toggle("modal-window__wrapper--active");
        }
    })
}

export default ModalWindow;