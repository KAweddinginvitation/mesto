const popup = document.querySelector('.popup');

const buttonPopupOpen = document.querySelector('.profile__edit')

const buttonPopupClose = document.querySelector('.popup__close');

// поля формы
const nameInput = document.getElementById('name');
let descriptionInput = document.getElementById('description');

//данные профиля
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');

function closeForm() {
    popup.classList.remove('popup_opened');
}

// открытие
buttonPopupOpen.addEventListener('click', () => {
    popup.classList.add('popup_opened');
    nameInput.value = userName.textContent;
    descriptionInput.value = userJob.textContent;
});
// закрытие
buttonPopupClose.addEventListener('click', () => {
    closeForm();
});

// Находим форму в DOM
const formElement = document.getElementById('form');

// Находим поля формы в DOM
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.
    userName.textContent = nameInput.value;
    userJob.textContent = descriptionInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    closeForm();
};
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);

