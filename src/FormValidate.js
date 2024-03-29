const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");
const submitButton = document.getElementById("submit-button");
const errorName = document.querySelector(".error-name");
const errorEmail = document.querySelector(".error-email");
const errorMessage = document.querySelector(".error-message");

const modalWindowValide = document.querySelector(".modalWindowValide");
const modalWindowForm = document.querySelector(".modalWindow");
const closeButton = document.getElementById("close__button")



const FormValidate = () => {
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("нажатие сработало")

        inputName.value.length < 5 ? errorName.classList.add("error-visible") : errorName.classList.remove("error-visible");
        inputEmail.value.length < 5 ? errorEmail.classList.add("error-visible") : errorEmail.classList.remove("error-visible");
        inputMessage.value.length > 100 || inputMessage.value.length === 0 ? errorMessage.classList.add("error-visible") : errorMessage.classList.remove("error-visible");

        if ((errorName.classList.contains("error-visible") ||
        errorEmail.classList.contains("error-visible") ||
        errorMessage.classList.contains("error-visible"))) {
            console.log("Валидация формы нарушена");
        }

        else {
            modalWindowForm.classList.remove("modal-window__wrapper--active")
            modalWindowValide.classList.add("modalWindowValide-visible")
            console.log("Валидация формы не нарушена");
            
        }

    });


    closeButton.addEventListener("click", () => {
        modalWindowValide.classList.remove("modalWindowValide-visible");
        document.body.style.position = "";

    })


    modalWindowValide.addEventListener("click", e => {
        const click = e.composedPath().includes(document.querySelector(".modalWindowValide__wrapper"));

        if ( !click ) {
            modalWindowValide.classList.remove("modalWindowValide-visible");
            document.body.style.position = '';
        }
    })
}


export default FormValidate;