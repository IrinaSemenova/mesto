import {openedPopup} from './popup.js';
export default class Card {
  constructor(name, link){
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.template-card')
      .content
      .querySelector('.elements__items')
      .cloneNode(true);

    return cardElement;
  }
  
  _like(){
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  _trash(){
    this._element.querySelector('.elements__trash').closest('.elements__items').remove();
  }
  
  _popupImageOpen () {
    this._popupZoom = document.querySelector ('.popup_type_zoom');
    this._popupZoomImg = this._popupZoom.querySelector ('.popup__img');
    this._popupZoomTitle = this._popupZoom.querySelector ('.popup__card-title');
    this._popupZoomImg.src = this._link;
    this._popupZoomImg.alt = this._name;
    this._popupZoomTitle.textContent = this._name;
    openedPopup (this._popupZoom);
  }
  
  _setEventListeners(){
    
    this._element.querySelector('.elements__like').addEventListener('click', ()=>{
      this._like();
    });

    this._element.querySelector('.elements__trash').addEventListener('click', ()=>{
      this._trash();
    });

    this._element.querySelector('.elements__img').addEventListener('click', ()=>{
      this._popupImageOpen ();
    });
  }

  generateCard(){
    this._element = this._getTemplate();
    this._setEventListeners();

    this._elementImage = this._element.querySelector('.elements__img');
    this._elementTitle = this._element.querySelector('.elements__title');
    
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementTitle.textContent = this._name;
  
    return this._element;
  }
}
  