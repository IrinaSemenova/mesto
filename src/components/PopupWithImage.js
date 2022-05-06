import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this.popupZoomTitle = document.querySelector('.popup__card-title');
        this.popupZoomImg = document.querySelector('.popup__img');
    }
    open (name, link) {
        super.open();
        this.popupZoomImg.src = link;
        this.popupZoomImg.alt = name;
        this.popupZoomTitle.textContent = name;
      }

}