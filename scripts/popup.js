import { popups } from './constant.js';
// open & close popup
function openedPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown',closeEsc);
}
function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown',closeEsc);
};

// close by Escape
function closeEsc(evt) {
    if (evt.key === "Escape"){
      closePopup(document.querySelector('.popup_opened'));
    }
};

// close by mousedown & close button
const popupCloseMouseButton = () => {
    popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup)
          };
        });
    });
}
popupCloseMouseButton ();

export {openedPopup, closePopup, popupCloseMouseButton}