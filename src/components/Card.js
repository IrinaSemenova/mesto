export default class Card { 

  constructor({name, link, handleCardClick}, templateSelector){ 
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  } 
  
  _getTemplate() { 
    const cardElement = document 
      .querySelector(this._templateSelector)
      .content 
      .querySelector('.elements__items') 
      .cloneNode(true); 

    return cardElement; 
  } 

  _like(){ 
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active'); 
  } 

  _trash(){ 
    this._element.remove(); 
    this._element = null; 
  } 

  _zoomCard() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventListeners(){ 
    this._element.querySelector('.elements__like').addEventListener('click', ()=>{ 
      this._like(); 
    }); 

    this._element.querySelector('.elements__trash').addEventListener('click', ()=>{ 
      this._trash(); 
    }); 

    this._element.querySelector('.elements__img').addEventListener('click',  () =>{
      this._zoomCard();
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
  