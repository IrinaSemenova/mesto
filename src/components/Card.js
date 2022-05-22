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
    this._elementLike.classList.toggle('elements__like_active'); 
  } 

// check like on/off
  _checkLike() {
    this._likes.some((like) => {
      if (like._id === this._userId){
        this._elementLike.classList.add('elements__like_active');
      }
    });
  };

// like count, on/off
  handleLike(data) {
    this._likes = data.likes;
    this._elementLikeCount.textContent = this._likes.length;
    this.like(); 
  }

//action with like
  setLike () {
    if (this._elementLike.classList.contains('elements__like_active')) {
      this._handleLikeRemove(this._id);
    } else {
      this._handleLikeAdd(this._id);
    }
  }

// del card  
  removeCard(){ 
    this._element.remove(); 
    this._element = null; 
  } 

// zoom image
  _zoomCard() {
    this._handleCardClick(this._name, this._link);
  }

  _setEventListeners(){ 
    this._elementLike.addEventListener('click', ()=>{ 
      this.setLike ();
    });

    this._elementTrash.addEventListener('click', ()=>{ 
      this._handleCardDelete (this._id); 
    });

    this._elementImage.addEventListener('click',  () =>{
      this._zoomCard();
    }); 
  }

  generateCard() { 
    this._element = this._getTemplate(); 
    this._elementLike = this._element.querySelector('.elements__like');
    this._elementLikeCount = this._element.querySelector('.elements__count');
    this._elementImage = this._element.querySelector('.elements__img'); 
    this._elementTrash = this._element.querySelector('.elements__trash');

    this._checkLike();
    this._setEventListeners(); 
 
    if (this._userId !== this._owner) {
      this._elementTrash.remove();
    };

    this._elementTitle = this._element.querySelector('.elements__title');
    this._elementLikeCount.textContent = this._likes.length;
    this._elementImage.src = this._link; 
    this._elementImage.alt = this._name; 
    this._elementTitle.textContent = this._name;

    return this._element;
  } 

  
}
  