import './index.css';

import {object, editProfile, addCard} from '../utils/constant.js'; 
import Card from '../components/Cards.js'; 
import formValidate from '../components/FormValidator.js'; 
import {initialCards} from '../utils/initialCards.js'; 
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

// popup Image
  const openFullImage = new PopupWithImage('.popup_type_zoom');
  openFullImage.setEventListeners();

  function handleCardClick (name, link) {  
    openFullImage.open(name, link)
  }

  const userInfo = new UserInfo({
    nameSelector: '.profile__title',
    jobSelector: '.profile__subtitle',
  });

// form profile 
editProfile.buttonEditProfile.addEventListener('click', ()=>{
    editProfile.popupEditInputName.value = userInfo.getUserInfo().name;
    editProfile.popupEditInputJob.value = userInfo.getUserInfo().job; 
    validationEdit.resetValidation(); 
    formEdit.open()
  });

// save new info profile
  const formEdit = new PopupWithForm ({
    popupSelector: '.popup_type_edit',
    formSubmitHandler: (inputValues) => {
      userInfo.setUserInfo({name:inputValues.username, job:inputValues.userjob});
      formEdit.close();    
    }
    });
  formEdit.setEventListeners();
  
//popup card
  addCard.buttonAddCard.addEventListener('click', function() { 
    validationAdd.resetValidation(); 
    formAdd.open(); 
  }); 

  const formAdd = new PopupWithForm ({
    popupSelector: '.popup_type_card',
    formSubmitHandler: (imageCard) => {
      const image = createCard(imageCard.imgName, imageCard.imgLink );
      section.addItems(image);
      formAdd.close();
    }
  });
  formAdd.setEventListeners();

// generate card
  function createCard (name, link){
    const card = new Card ({name, link, handleCardClick},'.template');
    const cardElement = card.generateCard(); 
    return cardElement; 
  }

// add card
  const groupList = ".elements__list";
  const section = new Section({items: initialCards, renderer: createCard}, groupList); 
  section.renderItems()

// validation 
  const validationEdit = new formValidate (object, editProfile.popupEditForm); 
  validationEdit.enableValidation() 

  const validationAdd = new formValidate (object, addCard.popupCardForm); 
  validationAdd.enableValidation()

