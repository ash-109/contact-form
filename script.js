let form = document.getElementById("form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById('email');
let message = document.getElementById('message')

let inputCheckbox= document.getElementById('consent')
let consent = inputCheckbox.checked

let successMessagePopUp = document.getElementById('success_message')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log('testSubmit');
});

const regexName = /^([A-Za-z])\w+$/;
let myname = "Ash";
console.log(regexName.test(myname));

const regexEmail=/^/ ;
