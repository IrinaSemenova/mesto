import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
    constructor({popupSelector}){
        super(popupSelector);
        this._form = this._popupSelector.querySelector('.popup__form');
    }

  submitDelete(data) {
    this._formSubmitHandler = data;
  }


  // delete submit
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitHandler();
    });
  }

  close(){
    super.close()
    this._form.reset();
  } 

}