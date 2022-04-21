import {object, editProfile, addCard} from './constant.js';
import Card from './cards.js';
import {openedPopup, closePopup, popupCloseMouseButton} from './popup.js';
import formValidate from './FormValidator.js';
import {initialCards} from './initialCards.js';

// form profile
editProfile.buttonEditProfile.addEventListener ('click', function (){
    editProfile.popupEditInputName.value = editProfile.popupEditTitle.textContent;
    editProfile.popupEditInputJob.value = editProfile.popupEditSubtitle.textContent;
    validationEdit.resetValidation();
    openedPopup (editProfile.popupEdit);
    });

// popup form profile
function formSubmitHandler (evt) {
     evt.preventDefault(); 
     editProfile.popupEditTitle.textContent = editProfile.popupEditInputName.value;
     editProfile.popupEditSubtitle.textContent = editProfile.popupEditInputJob.value;
     submitDisable(editProfile.popupSubmitEdit);
     closePopup (editProfile.popupEdit);
 }
editProfile.popupEditForm.addEventListener('submit', formSubmitHandler);

// generate card
function createCard(name, link){
    const card = new Card (name, link, ".template");
    const cardElement = card.generateCard();
    return cardElement;
}
// render card 
initialCards.forEach((item) => {
  const card = createCard(item.name, item.link);
  addCard.elementList.append(card);
});
 
// new card open
addCard.buttonAddCard.addEventListener('click', function() {
    addCard.popupCardForm.reset();
    validationAdd.resetValidation();
    openedPopup(addCard.popupCard);
  });

//submit nonactive
function submitDisable(evt){
    evt.classList.add('popup__submit_inactive');
    evt.setAttribute('disabled', '');
  }

// create card
function createNewCard(evt) {
    evt.preventDefault();  
    document.querySelector('.elements__list').prepend(createCard(addCard.popupCardName.value, addCard.popupCardImg.value));
    submitDisable(addCard.popupSubmitCard); 
    addCard.popupCardForm.reset();
    closePopup(addCard.popupCard);
  }
addCard.popupCardForm.addEventListener('submit',createNewCard);

// validation
const validationEdit = new formValidate (object, editProfile.popupEditForm);
validationEdit.enableValidation()

const validationAdd = new formValidate (object, addCard.popupCardForm);
validationAdd.enableValidation()



