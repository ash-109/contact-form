let form = document.getElementById("form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let message = document.getElementById("message");


let queryTypeInput= document.querySelectorAll('.query-type-options input')
for (let index = 0; index < queryTypeInput.length; index++) {

  let queryType=""
  queryTypeInput[index].addEventListener('change',(event) =>{
      if (queryTypeInput[index].checked) {
   queryType = queryTypeInput[index].value;
  }   console.log(queryType);

  })

}


let inputCheckbox = document.getElementById("consent");
let consent = inputCheckbox.checked;

let successMessagePopUp = document.getElementById("success_message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstNameValue= firstName.value
  if (firstNameValue === "") {    console.log('ok');

  }
  else{    
    firstName.classList.add('error')

  }
  
  // console.log("testSubmit");
  // successMessagePopUp.style.visibility = "visible";
});


// ------ REGEX ------
const regexText = /^([A-Za-z])\w+$/;


let emailAdress = email.value
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,3}$/;
console.log(regexEmail.test(emailAdress));
