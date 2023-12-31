
const registerForm = document.querySelector("form.login-form");

registerForm.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();
  const userData = {};
  const form = event.target;

  userData.email = form.elements.email.value.trim();
  userData.password = form.elements.password.value.trim();

  if (userData.email === "" || userData.password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(userData);
  registerForm.reset()
}