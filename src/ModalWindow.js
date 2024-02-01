import FormValidate from "./FormValidate.js"

const button = document.getElementById("button");
const modalWindow = document.getElementById("modalWindow");
const closeButton = document.querySelector(".close__button");
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");
const errorName = document.querySelector(".error-name");
const errorEmail = document.querySelector(".error-email");
const errorMessage = document.querySelector(".error-message");

const ModalWindow = () => {
    button.addEventListener("click", () => {
        modalWindow.classList.toggle("modal-window__wrapper--active");
        document.body.style.position = 'fixed';
    });

    closeButton.addEventListener("click", () => {
        modalWindow.classList.toggle("modal-window__wrapper--active");
        document.body.style.position = '';
        inputName.value = "";
        inputEmail.value = "";
        inputMessage.value = "";
        errorName.classList.remove("error-visible");
        errorEmail.classList.remove("error-visible");
        errorMessage.classList.remove("error-visible");
    })

    modalWindow.addEventListener("click", e => {
        const click = e.composedPath().includes(document.querySelector(".modal-window__wrapper"));

        if ( !click ) {
            modalWindow.classList.toggle("modal-window__wrapper--active");
            document.body.style.position = '';
            inputName.value = "";
            inputEmail.value = "";
            inputMessage.value = "";
            errorName.classList.remove("error-visible");
            errorEmail.classList.remove("error-visible");
            errorMessage.classList.remove("error-visible");
        }
        
    })
}

export default ModalWindow;