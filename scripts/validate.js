const object = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive', 
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }
        
  // add class error
  const showInputError = (formElement, inputElement, errorMessage, object) => {
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(object.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(object.errorClass);
    };
  
  // del class error
  const hideInputError = (formElement, inputElement, object) => {
      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(object.inputErrorClass);
      errorElement.textContent = '';
      errorElement.classList.remove(object.errorClass);
    };
  
  // add or del text error 
    const checkInputValidity = (formElement, inputElement, object) => {
      if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, object);
      } else {
        hideInputError(formElement, inputElement, object);
      }
    };
  
  // validate input element
    const hasInvalidInput = (inputList) => {
      return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
    };
    
  // submit on or off
    const toggleButtonState = (inputList, buttonElement, object) => {
      if (hasInvalidInput (inputList)) {
        buttonElement.classList.add(object.inactiveButtonClass);
        buttonElement.setAttribute('disabled', '');
      }
      else {
        buttonElement.classList.remove(object.inactiveButtonClass);
        buttonElement.removeAttribute('disabled', '');
      }
    };
  
  // add listener forEach
    const setEventListeners = (formElement, object) => {
      const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
      const buttonElement = formElement.querySelector(object.submitButtonSelector);
      toggleButtonState(inputList,buttonElement, object);
      inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', function (event) {
          checkInputValidity(formElement, inputElement, object);
          toggleButtonState(inputList,buttonElement, object);
        });
      });
    };
  
    // validate form
    const enableValidation = (object) => {
    const formList = Array.from(document.querySelectorAll(object.formSelector));
      formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (event) {
        event.preventDefault();  
        });
  
        setEventListeners (formElement, object);
      
    });
  };
  
  enableValidation(object);