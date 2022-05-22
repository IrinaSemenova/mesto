import './index.css';

import {object, editProfile, addCard, template, popupEditAvatar} from '../utils/constant.js'; 
import Card from '../components/Card.js'; 
import formValidate from '../components/FormValidator.js'; 
//import {initialCards} from '../utils/initialCards.js'; 
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithDelete from '../components/PopupWithDelete';
import Api from '../components/Api';

//create Api
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-41',
  headers: {
    authorization: 'f5901c24-63b3-4521-95a0-b92550e35de4',
    'Content-type': 'application/json'
  }
});

// create Error Api
function errorApi(err){
  console.log(`Ошибка: ${err}`);
}

// create Api for userInfo & Card
Promise.all([api.getUserInfo(), api.getInitialCards()]) 
.then (([user, initialCards]) => {
  userInfo.setUserInfo(user);
  userId = user._id;
  section.renderItems(initialCards);

  console.log(user);
  console.log(initialCards);
})
.catch((err) => {
  errorApi(err);
});

// create user Info 
const userInfo = new UserInfo({
  username: '.profile__title',
  userjob: '.profile__subtitle',
  editAvatar:'.profile__avatar'
});

const formEdit = new PopupWithForm ({
  popupSelector: '.popup_type_edit',
  formSubmitHandler: (inputValues) => {
    formEdit.loading(true);
    api.editUserInfo(inputValues) 
      .then((inputValues) => {
        userInfo.setUserInfo(inputValues);
        formEdit.close(); 
      })
      .catch((err) => {
        errorApi(err);
      })  
      .finally(() => {
        formEdit.loading(false);
      });
  }
});
formEdit.setEventListeners();

// button profile & user Info 
editProfile.buttonEditProfile.addEventListener('click', ()=>{
  editProfile.popupEditInputName.value = userInfo.getUserInfo().username;
  editProfile.popupEditInputJob.value = userInfo.getUserInfo().userjob; 
  validationEdit.resetValidation(); 
  formEdit.open()
});

// create Avatar
const formEditAvatar = new PopupWithForm ({
  popupSelector: '.popup_type_editAvatar',
  formSubmitHandler: (inputValues) => {
    formEditAvatar.loading(true);
    api.editUserAvatar(inputValues) 
      .then((inputValues) => {
        userInfo.setAvatarInfo(inputValues); 
        formEdit.close();
      })
      .catch((err) => {
        errorApi(err);
      })
      .finally(() => {
        formEditAvatar.loading(false);
      });
  }
});
formEditAvatar.setEventListeners();

// button avatar 
editProfile.buttonEditAvatar.addEventListener('click', ()=>{
  validationAvatar.resetValidation(); 
  formEditAvatar.open();
})

// create card
let userId;
const groupList = ".elements__list";
const section = new Section({
  renderer: (card) => {
    section.addItems(createCard(card));
  },
}, groupList);

function createCard (data){
  const card = new Card ({
    data: data,
    userId: userId, 
    handleCardClick,
    handleCardDelete: (cardId) => {
      popupCardDelete.submitDelete(() =>{
        api.deleteCard(cardId)
          .then(() => {
            popupCardDelete.close();
            card.removeCard();
            console.log(cardId);
          })
          .catch((err) => {
            errorApi(err);
          });
      }),
      popupCardDelete.open();
    },
    handleLikeAdd: (cardId) => {
      api.putLike(cardId)
        .then((data) => {
          card.handleLike(data);
        })
        .catch((err) => {
          errorApi(err);
        });
    },
    handleLikeRemove: (cardId) => {
      api.removeLike(cardId)
        .then((data) => {
          card.handleLike(data);
        })
        .catch((err) => {
          errorApi(err);
        });
    }
  }, 
    template);
  const cardElement = card.generateCard(); 
  return cardElement; 
}

// button card
addCard.buttonAddCard.addEventListener('click', function() { 
  validationAdd.resetValidation(); 
  formAdd.open(); 
});

// create new card
const formAdd = new PopupWithForm ({
  popupSelector: '.popup_type_card',
  formSubmitHandler: (data) => {
    formAdd.loading(true);
    api.addNewCard(data)
      .then ((data) => {
        section.addItems(createCard(data));
        formAdd.close();
      })
      .catch((err) => {
        errorApi(err);
      })
      .finally(() => {
        formAdd.loading(false);
      });
    }
  });
  formAdd.setEventListeners();

// popup Delete
const popupCardDelete = new PopupWithDelete({
  popupSelector: '.popup_type_delete'
});
popupCardDelete.setEventListeners();

// popup Image
const openFullImage = new PopupWithImage('.popup_type_zoom');
openFullImage.setEventListeners();

function handleCardClick (name, link) {  
  openFullImage.open(name, link)
}

// validation 
  const validationEdit = new formValidate (object, editProfile.popupEditForm); 
  validationEdit.enableValidation() ;

  const validationAdd = new formValidate (object, addCard.popupCardForm); 
  validationAdd.enableValidation();

  const validationAvatar = new formValidate (object, editProfile.popupEditAvatar); 
  validationAvatar.enableValidation();


