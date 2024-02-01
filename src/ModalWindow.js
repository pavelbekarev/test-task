import FormValidate from "./FormValidate.js"

const button = document.getElementById("button");
const modalWindow = document.getElementById("modalWindow");
const closeButton = document.querySelector(".close__button");


const ModalWindow = () => {
    button.addEventListener("click", () => {
        modalWindow.classList.toggle("modal-window__wrapper--active");
        document.body.style.position = 'fixed';
    });

    closeButton.addEventListener("click", () => {
        modalWindow.classList.toggle("modal-window__wrapper--active");
        document.body.style.position = '';
    })

    modalWindow.addEventListener("click", e => {
        const click = e.composedPath().includes(document.querySelector(".modal-window__wrapper"));

        if ( !click ) {
            modalWindow.classList.toggle("modal-window__wrapper--active");
            document.body.style.position = '';
        }
    })
}

export default ModalWindow;