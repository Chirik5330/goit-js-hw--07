const inputValidation = document.querySelector('#validation-input');
console.log(inputValidation);


function onInputValidation() { 
  if (inputValidation.value.length > inputValidation.dataset.length
    || inputValidation.value.length < inputValidation.dataset.length) {
    inputValidation.classList.remove('valid');
    inputValidation.classList.add('invalid');
  } else {
    inputValidation.classList.add('valid');
    inputValidation.classList.remove('invalid');
  }
};

inputValidation.addEventListener('blur', onInputValidation);
