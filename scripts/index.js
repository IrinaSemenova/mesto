
const editButton = document.querySelector ('.profile__edit-button');
const addButton = document.querySelector ('.profile__add-button');

const popupEdit = document.querySelector ('.popup_type_edit');
const popupEditTitle = document.querySelector ('.profile__title');
const popupEditSubtitle = document.querySelector ('.profile__subtitle');
const popupEditForm = popupEdit.querySelector ('.popup__form');
const popupEditInputName = popupEdit.querySelector('.popup__input_type_name');
const popupEditInputJob = popupEdit.querySelector('.popup__input_type_job');
const popupEditClose = popupEdit.querySelector ('.popup__closeButton');

const popupZoom = document.querySelector ('.popup_type_zoom');
const popupZoomClose = popupZoom.querySelector ('.popup__closeButton');

const popupCard = document.querySelector ('.popup_type_card');
const popupCardForm = popupCard.querySelector ('.popup__form');
const popupCardClose = popupCard.querySelector ('.popup__closeButton');




function openedPopup (popup) {
    popup.classList.add('popup_opened');
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
};

/*close button*/
popupEditClose.addEventListener ('click', function () {
    closePopup (popupEdit);
    });

popupZoomClose.addEventListener ('click', function () {
    closePopup (popupZoom);
});

popupCardClose.addEventListener ('click', function () {
    closePopup (popupCard);
});

/*form profile*/
editButton.addEventListener ('click', function (){
    popupEditInputName.value = popupEditTitle.textContent;
    popupEditInputJob.value = popupEditSubtitle.textContent;
    openedPopup(popupEdit);
    });

 /*popup form profile*/
 function formSubmitHandler (evt) {
     evt.preventDefault(); 
     popupEditTitle.textContent = popupEditInputName.value;
     popupEditSubtitle.textContent = popupEditInputJob.value;
     closePopup (popupEdit);
 }
 popupEditForm.addEventListener('submit', formSubmitHandler);

/*card*/
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

/*create card*/
const listTemplate = document.querySelector('.elements__list');

  function createCard(iLink, iName){
    const cardTemplate = document.querySelector('.templateCard').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardElementImg = cardElement.querySelector('.elements__img');
        cardElementImg.src = iLink;
        cardElementImg.alt = iName;
    const cardElementText = cardElement.querySelector('.elements__title');
        cardElementText.textContent = iName;

    /*like*/
    const cardLike = cardElement.querySelector('.elements__like');
    cardLike.addEventListener('click', function(evt){
        evt.target.classList.toggle('elements__like_active');
    });

    /*popup card*/
    cardElementImg.addEventListener('click', function(){
        const popupZoomImg = popupZoom.querySelector ('.popup__img').src = iLink;
            popupZoomImg.alt = iName;
        const popupZoomTitle = popupZoom.querySelector ('.popup__cardTitle').textContent = iName;
        openedPopup (popupZoom);
    });

    /*del card*/
    const cardElementTrash = cardElement.querySelector('.elements__trash');
    cardElementTrash.addEventListener('click', function (evt){
        evt.target.closest('.elements__items').remove();
    });

    return cardElement;
  };

/*render card*/
    function renderInitialCards (initialCards){
        initialCards.forEach (function (item) {
            listTemplate.append(createCard(item.link,item.name));
        });
      };

  renderInitialCards(initialCards);

/*new card*/
  addButton.addEventListener('click', function(){
    openedPopup(popupCard);
  })

  function createNewCard (evt) {
    evt.preventDefault(); 
    const popupCardImg = popupCard.querySelector ('.popup__input_type_imgLink');
    const popupCardName = popupCard.querySelector ('.popup__input_type_imgName');
    listTemplate.prepend(createCard(popupCardImg.value,popupCardName.value));
    closePopup (popupCard);
  };
  popupCardForm.addEventListener('submit',createNewCard);

  

      

  
    