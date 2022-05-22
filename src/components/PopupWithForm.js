import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor ({popupSelector, formSubmitHandler } ){
        super(popupSelector);
        this._formSubmitHandler = formSubmitHandler;     
        this._form = this._popupSelector.querySelector('.popup__form');
        this._inputList= this._form.querySelectorAll('.popup__input');
        this._popupSubmit = this._form.querySelector('.popup__submit');
    }

    _getInputValues(){
        this._inputValues = {}
        this._inputList.forEach(input =>{
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues
    }

    setEventListeners(){
        super.setEventListeners()
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._formSubmitHandler(this._getInputValues())
        });      
    }
    close(){
        super.close()
        this._form.reset();
    } 

    // loading
    loading(loading) {
        if (loading) {
            this._popupSubmit.textContent = 'Сохранение...';
        } else {
            if (this._popupSelector.classList.contains("popup_type_card")) {
                this._popupSubmit.textContent = 'Создать';
            }
            else {
                this._popupSubmit.textContent = 'Сохранить';
            }
            this._popupSubmit.textContent = 'Сохранить';
        }
    }
}