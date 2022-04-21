import {openedPopup} from './popup.js';
import {zoomCard} from './constant.js';
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
    this._element.closest('.elements__items').remove();
    this._element = null;
  }
  
  _popupImageOpen () {
    zoomCard.popupZoomImg.src = this._link;
    zoomCard.popupZoomImg.alt = this._name;
    zoomCard.popupZoomTitle.textContent = this._name;
    openedPopup (zoomCard.popupZoom);
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
  