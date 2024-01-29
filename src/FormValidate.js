'use strict'

const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");
const submitButton = document.getElementById("submit-button");



const FormValidate = () => {
    submitButton.addEventListener("click", () => {
        if (inputName.length < 10) {
            document.querySelector(".error-name").classList.toggle("error-visible")
        }

    });
}


export default FormValidate;