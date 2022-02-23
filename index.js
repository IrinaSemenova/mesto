let editButton = document.querySelector ('.profile__edit-button');
let popup = document.querySelector ('.popup');
let container = document.querySelector ('.popup__container');
let closeButton = container.querySelector ('.popup__closeButton');
let like = document.querySelector ('.elements__like');

editButton.addEventListener ('click', function(){
    popup.classList.add('popup_opened');
    });

closeButton.addEventListener ('click', function () {
    popup.classList.remove('popup_opened');
    });

like.addEventListener ('click', function () {
        like.classList.add('elements__like_active');
    });


function addName () {
    let title = document.querySelector ('.profile__title');
    let subtitle = document.querySelector ('.profile__subtitle');
    let inputName = container.querySelector('.popup__input_type_name');
    let inputJob = container.querySelector('.popup__input_type_job');
    inputName.value = title.textContent;
    inputJob.value = subtitle.textContent;
}
addName();

// Находим форму в DOM
let formElement = document.querySelector ('.popup__form');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = formElement.querySelector ('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = formElement.querySelector ('.popup__input_type_job')// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    let title = document.querySelector ('.profile__title');
    let subtitle = document.querySelector ('.profile__subtitle');
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

let popupSubmit = formElement.querySelector ('.popup__submit');
popupSubmit.addEventListener ('click', function () {
    popup.classList.remove('popup_opened');
});
