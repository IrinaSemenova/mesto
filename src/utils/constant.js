const object = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive', 
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };

const popups = document.querySelectorAll('.popup');
const template = '.template-card';
const editProfile = {
    buttonEditProfile: document.querySelector ('.profile__edit-button'),
    popupEdit: document.querySelector ('.popup_type_edit'),
    popupEditTitle: document.querySelector ('.profile__title'),
    popupEditSubtitle: document.querySelector ('.profile__subtitle'),
    popupEditForm: document.querySelector ('#popup__form_type_edit'),
    popupEditInputName: document.querySelector('.popup__input_type_name'),
    popupEditInputJob: document.querySelector('.popup__input_type_job'),
    popupSubmitEdit: document.querySelector ('#popup__submit_type-edit')
}

const addCard = {
    buttonAddCard: document.querySelector ('.profile__add-button'),
    elementList: document.querySelector('.elements__list'),
    popupCard: document.querySelector ('.popup_type_card'),
    popupCardForm: document.querySelector ('#popup__form_type_add'),
    popupCardImg: document.querySelector ('.popup__input_type_img-link'),
    popupCardName: document.querySelector ('.popup__input_type_img-name'),
    popupSubmitCard: document.querySelector ('#popup__submit_type-add')
}

const zoomCard = {
    popupZoom: document.querySelector ('.popup_type_zoom'),
    popupZoomImg: document.querySelector ('.popup__img'),
    popupZoomTitle: document.querySelector ('.popup__card-title')
}
  export {object, popups, editProfile, addCard, zoomCard, template};