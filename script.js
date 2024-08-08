let form = document.getElementById("form");
let firstNameInput = document.getElementById("firstName");
let firstName = firstNameInput.value

let lastNameInput = document.getElementById("lastName");
let lastName = lastNameInput.value


let emailInput = document.getElementById("email");
let email = emailInput.value;

let messageInput = document.getElementById("message");
let message = messageInput.value


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
 
function CheckName(firstName) {
  if (firstName >= 2 && regexText.test(firstName)) {
    return true
  }
  return false
}
function CheckEmail(email) {
  if (regexEmail.test(email)) {
    true
  }
  else{
    
  }
}



form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstNameValue= firstName.value
  if (firstNameValue === "") {    console.log('This field is required');

  }
  else{    
    firstName.classList.add('error')

  }
  
  // console.log("testSubmit");
  // successMessagePopUp.style.visibility = "visible";
});


// ------ REGEX ------
const regexText = /^[A-Za-z-\w]+$/;
let myName="Jean-Paul"
console.log(regexText.test(myName));


let emailAdress = email.value
const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,63}$/;
console.log(regexEmail.test(emailAdress));
