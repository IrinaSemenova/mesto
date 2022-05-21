export default class Card { 

  constructor({data, handleCardClick,handleCardDelete,userId, handleLikeAdd, handleLikeRemove}, templateSelector){ 
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._owner = data.owner._id;
    this._userId = userId;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeAdd = handleLikeAdd;
    this._handleLikeRemove = handleLikeRemove;
  } 
  
  _getTemplate() { 
    const cardElement = document 
      .querySelector(this._templateSelector)
      .content 
      .querySelector('.elements__items') 
      .cloneNode(true); 

    return cardElement; 
  } 

// like active
  like(){ 
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active'); 
  } 

// check like on/off
  _checkLike() {
    this._likes.some((like) => {
      if (like._id === this._userId){
        this._element.querySelector('.elements__like').classList.add('elements__like_active');
      }
    });
  };

// like count, on/off
  handleLike(data) {
    this._likes = data.likes;
    this._element.querySelector('.elements__count').textContent = this._likes.length;
    this.like(); 
  }

//action with like
  setLike () {
    if (this._element.querySelector('.elements__like').classList.contains('elements__like_active')) {
      this._handleLikeRemove(this._id);
    } else {
      this._handleLikeAdd(this._id);
    }
  }

// del card  
  trash(){ 
    this._element.remove(); 
    this._element = null; 
  } 

// zoom image
  _zoomCard() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventListeners(){ 
    this._element.querySelector('.elements__like').addEventListener('click', ()=>{ 
      this.setLike ();
    });

    this._element.querySelector('.elements__trash').addEventListener('click', ()=>{ 
      this._handleCardDelete (this._id); 
    });

    this._element.querySelector('.elements__img').addEventListener('click',  () =>{
      this._zoomCard();
    }); 
  }

  generateCard() { 
    this._element = this._getTemplate(); 
    this._setEventListeners(); 
    this._checkLike();
  
    this._elementImage = this._element.querySelector('.elements__img'); 
    this._elementTitle = this._element.querySelector('.elements__title'); 
    
    if (this._userId !== this._owner) {
      this._element.querySelector('.elements__trash').remove();
    };
    
    this._element.querySelector('.elements__count').textContent = this._likes.length;
    this._elementImage.src = this._link; 
    this._elementImage.alt = this._name; 
    this._elementTitle.textContent = this._name;

    return this._element;
  } 

  
}
  