const popup = document.querySelector('.popup');
const buttonPopupOpen = document.querySelector('.profile__edit')
const buttonPopupClose = document.querySelector('.popup__close');
const buttonPopupSave = document.querySelector('.popup__save');
//
let nameInput = document.querySelector('name');
let userName = document.querySelector('.profile__title');
//
buttonPopupOpen.addEventListener('click', () => {
    popup.classList.add('popup__opened');
    nameInput.value = userName.textContent;
});

buttonPopupClose.addEventListener('click', () => {
    popup.classList.remove('popup__opened');
});

buttonPopupSave.addEventListener('click', () => {
    popup.classList.remove('popup__opened');
});


document.querySelector('.popup__save').addEventListener('submit', userClick);
function userClick() {

    document.querySelector('.profile__title').textContent = userName;
    document.querySelector('.profile__subtitle').textContent = userJob;
    
};

//
//
//

/* 
// Находим форму в DOM
let formElement = document.querySelector('form');
// Находим поля формы в DOM
let nameInput = document.querySelector('name')
let descriptionInput = document.querySelector('description')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    nameInput.value = userName.textContent;
    descriptionInput.value = userDescription.textContent;
    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); */