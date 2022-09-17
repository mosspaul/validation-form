document.querySelector

{
    let f = function() {
      this.classList.add('touched')
    }
    document
      .querySelectorAll('input')
      .forEach((e) => {
        e.addEventListener('blur', f, false)
        e.addEventListener('keydown', f, false)
      })
}
const submit = document.querySelector('#sub');
const cpassword = document.querySelector("#cpassword");
const password = document.querySelector("#password");

submit.addEventListener("click", e => determinePasswordMatch(e));

function determinePasswordMatch(e) {
  console.table([cpassword.value, password.value]);
  if (cpassword.value !== password.value) {
    e.preventDefault();
    cpassword.setCustomValidity("Passwords do not match, enter a new password");
  } else {
  cpassword.setCustomValidity("");
  }
}

const icon = document.querySelectorAll(".icon");
icon.forEach(icon => icon.addEventListener("click", e => toggleShow(e.target)));

function toggleShow(event) {
  let inputs = event.parentElement.previousElementSibling;
  if (inputs.type === "text") {
    inputs.setAttribute("type", "password");
    event.setAttribute("src", "images/second.svg");
  } else {
  event.setAttribute("src", "images/third.svg");
  inputs.setAttribute("type", "text");
  }
}
