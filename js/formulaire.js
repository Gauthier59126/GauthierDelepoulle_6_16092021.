// DOM Elements
const modalbg = document.querySelector(".bground");
const modalValidate = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalClose = document.querySelector (".close");
const btnSubmit = document.querySelector (".btn-submit");

const btnSubmitConfirmation = document.querySelector(".btn-submit.confirmation");
const modalConfirmationClose = document.querySelector(".close.confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

modalClose.addEventListener("click", closeModal);
btnSubmit.addEventListener("click", validateAll);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal(){
  modalbg.style.display = "none";
  document.querySelector(".form1").reset();
}

// validation fonction for openning validate modal
function validateAll (event) {
  event.preventDefault();
  let isFirstNameValid = validateFirstName();
  let isLastNameValid = validateLastName();
  let isEmailValid = validateEmail();
  let isMessageValid = validateMessage();
  if(isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid){
    closeModal();
    modalValidate.style.display = "block";
  }   
}

// Validation du prénom
function validateFirstName(){
  let firstName = document.querySelector("#first");
  let errorMessage = document.querySelector(".error.firstName");
  let value = firstName.value;

  if(!value.trim()){
    errorMessage.innerText = "Veuillez remplir ce champs";
    firstName.value = "";
    return false;
  }

  if (value.trim().length < 2 ){
    errorMessage.innerText = "Veuillez entrer au moins deux caractères";
    return false;
  } 
  errorMessage.innerText = "";  
  return true;
}

// Validation du nom 
function validateLastName(){
  let lastName = document.querySelector("#last");
  let errorMessage = document.querySelector(".error.lastName");
  let value = lastName.value;

  if(!value.trim()){
    errorMessage.innerText = "Veuillez remplir ce champs";
    lastName.value = "";
    return false;
  }

  if (value.trim().length < 2 ){
    errorMessage.innerText = "Veuillez entrer au moins deux caractères";
    return false;
  }
  errorMessage.innerText = ""; 
  return true;  
}

// Validation de l'email
function validateEmail(){
  let email = document.querySelector("#email");
  let errorMessage = document.querySelector(".error.email");
  let value = email.value;

  if(!value.trim()){
    errorMessage.innerText = "Veuillez remplir ce champs";
    email.value = "";
    return false;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
    errorMessage.innerText = "Veuillez entrer une adresse mail valide";
    return false;
  }

  errorMessage.innerText = ""; 
  return true;  
}

//Validation du message
function validateMessage(){
  let message = document.querySelector("#message");
  let errorMessage = document.querySelector(".error.message");
  let value = message.value;

  if(!value.trim()){
    errorMessage.innerText = "Veuillez remplir ce champs";
    message.value = "";
    return false;
  }

  if (value.trim().length < 2 ){
    errorMessage.innerText = "Veuillez entrer au moins deux caractères";
    return false;
  } 
  errorMessage.innerText = "";  
  return true;
}
