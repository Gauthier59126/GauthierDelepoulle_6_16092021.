// DOM Elements
const modalbg = document.querySelector('.bground');
const modalValidate = document.querySelector('.bground2');
const modalBtn = document.querySelectorAll('.modal-btn');

const modalClose = document.querySelector('.close');
const btnSubmit = document.querySelector('.btn-submit');

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal
function closeModal() {
  modalbg.style.display = 'none';
  document.querySelector('.form1').reset();
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

modalClose.addEventListener('click', closeModal);

// Validation du prénom
function validateFirstName() {
  const firstName = document.querySelector('#first');
  const errorMessage = document.querySelector('.error.firstName');
  const { value } = firstName;

  if (!value.trim()) {
    errorMessage.innerText = 'Veuillez remplir ce champs';
    firstName.value = '';
    return false;
  }

  if (value.trim().length < 2) {
    errorMessage.innerText = 'Veuillez entrer au moins deux caractères';
    return false;
  }
  errorMessage.innerText = '';
  return true;
}

// Validation du nom
function validateLastName() {
  const lastName = document.querySelector('#last');
  const errorMessage = document.querySelector('.error.lastName');
  const { value } = lastName;

  if (!value.trim()) {
    errorMessage.innerText = 'Veuillez remplir ce champs';
    lastName.value = '';
    return false;
  }

  if (value.trim().length < 2) {
    errorMessage.innerText = 'Veuillez entrer au moins deux caractères';
    return false;
  }
  errorMessage.innerText = '';
  return true;
}

// Validation de l'email
function validateEmail() {
  const email = document.querySelector('#email');
  const errorMessage = document.querySelector('.error.email');
  const { value } = email;

  if (!value.trim()) {
    errorMessage.innerText = 'Veuillez remplir ce champs';
    email.value = '';
    return false;
  }

  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    errorMessage.innerText = 'Veuillez entrer une adresse mail valide';
    return false;
  }

  errorMessage.innerText = '';
  return true;
}

// Validation du message
function validateMessage() {
  const message = document.querySelector('#message');
  const errorMessage = document.querySelector('.error.message');
  const { value } = message;

  if (!value.trim()) {
    errorMessage.innerText = 'Veuillez remplir ce champs';
    message.value = '';
    return false;
  }

  if (value.trim().length < 2) {
    errorMessage.innerText = 'Veuillez entrer au moins deux caractères';
    return false;
  }
  errorMessage.innerText = '';
  return true;
}

// validation fonction for openning validate modal
function validateAll(event) {
  event.preventDefault();
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();
  if (isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid) {
    closeModal();
    modalValidate.style.display = 'block';
  }
}

btnSubmit.addEventListener('click', validateAll);
