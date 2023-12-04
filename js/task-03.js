const nameInput = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
    const imputValue = event.target.value.trim()
    userName.textContent = imputValue ? imputValue : "Anonymous"
})