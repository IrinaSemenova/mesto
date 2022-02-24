let editButton = document.querySelector ('.profile__edit-button');
let popup = document.querySelector ('.popup');
let container = document.querySelector ('.popup__container');
let closeButton = container.querySelector ('.popup__closeButton');
let title = document.querySelector ('.profile__title');
let subtitle = document.querySelector ('.profile__subtitle');
let inputName = container.querySelector('.popup__input_type_name');
let inputJob = container.querySelector('.popup__input_type_job');


editButton.addEventListener ('click', function (){
    popup.classList.add('popup_opened');
    inputName.value = title.textContent;
    inputJob.value = subtitle.textContent;
    });
    

    closeButton.addEventListener ('click', function () {
    popup.classList.remove('popup_opened');
    });

let formElement = document.querySelector ('.popup__form');
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    title.textContent = inputName.value;
    subtitle.textContent = inputJob.value;

    function closePopup () {
    popup.classList.remove('popup_opened');
};
    closePopup ();
}

formElement.addEventListener('submit', formSubmitHandler);

