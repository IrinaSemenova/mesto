// constants
const popupList = document.querySelector ('.popup');
const buttonEditProfile = document.querySelector ('.profile__edit-button');
const buttonAddCard = document.querySelector ('.profile__add-button');

const popupEdit = document.querySelector ('.popup_type_edit');
const popupEditTitle = document.querySelector ('.profile__title');
const popupEditSubtitle = document.querySelector ('.profile__subtitle');
const popupEditForm = popupEdit.querySelector ('.popup__form');
const popupEditInputName = popupEdit.querySelector('.popup__input_type_name');
const popupEditInputJob = popupEdit.querySelector('.popup__input_type_job');
const popupEditClose = popupEdit.querySelector ('.popup__close-button');

const popupZoom = document.querySelector ('.popup_type_zoom');
const popupZoomClose = popupZoom.querySelector ('.popup__close-button');
const popupZoomImg = popupZoom.querySelector ('.popup__img');
const popupZoomTitle = popupZoom.querySelector ('.popup__card-title');

const popupCard = document.querySelector ('.popup_type_card');
const popupCardForm = popupCard.querySelector ('.popup__form');
const popupCardClose = popupCard.querySelector ('.popup__close-button');
const popupCardImg = popupCard.querySelector ('.popup__input_type_img-link');
const popupCardName = popupCard.querySelector ('.popup__input_type_img-name');

const popupCloseOverlay = document.querySelectorAll('.popup');

// open & close popup
function openedPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown',closeEsc);
}

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown',closeEsc);
};

// close button
popupEditClose.addEventListener ('click', function () {
    closePopup (popupEdit);
    });

popupZoomClose.addEventListener ('click', function () {
    closePopup (popupZoom);
});

popupCardClose.addEventListener ('click', function () {
    closePopup (popupCard);
});

// close by Escape
function closeEsc(evt) {
    if (evt.key === "Escape"){
      closePopup(document.querySelector('.popup_opened'));
    }
  };

// close by mousedown
popupCloseOverlay.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
    });
});

// form profile
buttonEditProfile.addEventListener ('click', function (){
    popupEditInputName.value = popupEditTitle.textContent;
    popupEditInputJob.value = popupEditSubtitle.textContent;
    openedPopup (popupEdit);
    });

// popup form profile
 function formSubmitHandler (evt) {
     evt.preventDefault(); 
     popupEditTitle.textContent = popupEditInputName.value;
     popupEditSubtitle.textContent = popupEditInputJob.value;
     closePopup (popupEdit);
 }
 popupEditForm.addEventListener('submit', formSubmitHandler);

 


// create card
const listTemplate = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('.template-card').content;

  function createCard(iLink, iName){
    const cardElement = cardTemplate.cloneNode(true);
    const cardElementImg = cardElement.querySelector('.elements__img');
        cardElementImg.src = iLink;
        cardElementImg.alt = iName;
    const cardElementText = cardElement.querySelector('.elements__title');
        cardElementText.textContent = iName;

    // like
    const cardLike = cardElement.querySelector('.elements__like');
    cardLike.addEventListener('click', function(evt){
        evt.target.classList.toggle('elements__like_active');
    });

    // popup card
    cardElementImg.addEventListener('click', function(){
        popupZoomImg.src = iLink;
        popupZoomImg.alt = iName;
        popupZoomTitle.textContent = iName;
        openedPopup (popupZoom);
    });

    // del card
    const cardElementTrash = cardElement.querySelector('.elements__trash');
    cardElementTrash.addEventListener('click', function (evt){
        evt.target.closest('.elements__items').remove();
    });

    return cardElement;
  };

// render card
    function renderInitialCards (initialCards){
        initialCards.forEach (function (item) {
            listTemplate.append(createCard(item.link,item.name));
        });
      };

  renderInitialCards(initialCards);

// new card
buttonAddCard.addEventListener('click', function(){
    openedPopup(popupCard);
  })

  function createNewCard (evt) {
    evt.preventDefault(); 
    listTemplate.prepend(createCard(popupCardImg.value,popupCardName.value));
    closePopup (popupCard);
    popupCardForm.reset();
  };
  popupCardForm.addEventListener('submit',createNewCard);







