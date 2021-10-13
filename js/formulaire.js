// DOM Elements
const modalbg = document.querySelector(".bground");
const modalValidate = document.querySelector(".bground2");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalClose = document.querySelector (".close");
const btnSubmit = document.querySelector (".btn-submit");
const radios = document.querySelectorAll(".checkbox-input.radio");
const checkBox = document.querySelector(".checkbox-input.box");

const btnSubmitConfirmation = document.querySelector(".btn-submit.confirmation");
const modalConfirmationClose = document.querySelector(".close.confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

modalClose.addEventListener("click", closeModal);
btnSubmit.addEventListener("click", validateAll);

btnSubmitConfirmation.addEventListener("click", validateSubmit);
modalConfirmationClose.addEventListener("click", closeSubmitModal);


// Close button for the validation modal
function validateSubmit(){
  modalValidate.style.display = "none";
  location.reload();
}

// Close validation modal
function closeSubmitModal(){
  modalValidate.style.display = "none";
  launchModal();
}

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
  let isBirthDateValid = validateBirthDate();
  let isTournamentValid = validateTournament();
  let isRadioChecked = validateCities();
  let isCheckboxChecked = validateConditions();
  if(isFirstNameValid && isLastNameValid && isEmailValid && isBirthDateValid && isTournamentValid && isRadioChecked &&isCheckboxChecked ){
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

// Validation date de naissance
function validateBirthDate(){
  let birthDate = document.querySelector("#birthdate");
  let errorMessage = document.querySelector(".error.birthdate");
  let value = birthDate.value;
  let today = new Date();

  if (!value){
    errorMessage.innerText = "Ce champs est obligatoire";
    return false;
  }
 
  let date = new Date(value);

  if(date > today){
    errorMessage.innerText = "Veuillez entrer une date valide";
    return false;
  }

  errorMessage.innerText = ""; 
  return true; 
}

//Validation nombre de tournois
function validateTournament(){
  let quantity = document.querySelector("#quantity");
  let errorMessage = document.querySelector(".error.quantity");
  let value = quantity.value;

  if(!value){
    errorMessage.innerText = "Ce champs est obligatoire";
    return false;
  }
  errorMessage.innerText = ""; 
  return true; 
}

// Fonction des radios
function validateCities(){
  let errorMessage = document.querySelector(".error.radios");
  
  for (let index = 0; index < radios.length; index++) {
    const radio = radios[index];
    console.log(radio);

    if(radio.checked){
      errorMessage.innerText = "";
      return true;
    }     
  } 
  errorMessage.innerText =" Veuillez selectionner une ville";
  return false;
}
 
// fonction de la CheckBox
function validateConditions(){

  let errorMessage = document.querySelector(".error.checkbox");

  if (checkBox.checked){
        errorMessage.innerText = "";
        return true;
  }else{
        errorMessage.innerText = " Veuillez accepeter les conditions d'utilisation";
        return false;
  }
}

