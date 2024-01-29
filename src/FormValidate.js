'use strict'

const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");
const submitButton = document.getElementById("submit-button");
const errorName = document.querySelector(".error-name");
const errorEmail = document.querySelector(".error-email");
const errorMessage = document.querySelector(".error-message");


const FormValidate = () => {
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("нажатие сработало")

        inputName.value.length < 10 ? errorName.classList.add("error-visible") : errorName.classList.remove("error-visible");
        inputEmail.value.length < 10 ? errorEmail.classList.add("error-visible") : errorEmail.classList.remove("error-visible");
        inputMessage.value.length > 100 || inputMessage.value.length == 0 ? errorMessage.classList.add("error-visible") : errorMessage.classList.remove("error-visible");


        (errorName.classList.contains("error-visible") ||
        errorEmail.classList.contains("error-visible") || 
        errorMessage.classList.contains("error-visible"))
        ?
        console.log("Валидация формы нарушена")
        :
        console.log("Валидация формы не нарушена")


    });
}


export default FormValidate;