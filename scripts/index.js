
// секции popup
const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-card');

// кнопки
const buttonPopupOpen = document.querySelector('.profile__edit');
const buttonPopupCard = document.querySelector('.profile__button');
const buttonCardClose = document.getElementById('card_close');
const buttonPopupClose = document.getElementById('profile_close');


// поля формы popupProfile
const nameInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

//данные профиля
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');

function closePopup() {
  popupCard.classList.remove('popup_opened');
  popupProfile.classList.remove('popup_opened');
}

buttonCardClose.addEventListener('click', () => {
  closePopup();
});

buttonPopupClose.addEventListener('click', () => {
  closePopup();
});



buttonPopupCard.addEventListener('click', () => {
  popupCard.classList.add('popup_opened');
});

// открытие
buttonPopupOpen.addEventListener('click', () => {
  popupProfile.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  descriptionInput.value = userJob.textContent;
});



buttonPopupClose.addEventListener('click', () => {
  popupCard.classList.remove('popup_opened');
});

// Находим форму в DOM
const formElement = document.getElementById('form_profile');

function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  userName.textContent = nameInput.value;
  userJob.textContent = descriptionInput.value;

  closePopup();
};
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);




const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];


const elementsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card').content;




initialCards.forEach((item) => {
  const cardContent = cardTemplate.cloneNode(true);
  cardContent.querySelector('.card__name').innerText = item.name;
  cardContent.querySelector('.card__image').alt = item.name;
  cardContent.querySelector('.card__image').src = item.link;

  elementsList.append(cardContent);
})


/* const buttonCardDelete = document.querySelector('card_delete');

  
buttonCardDelete.addEventListener('click', () => {
  item.remove();
}); */


// поля формы popupCard
const cardName = document.getElementById('name');
const cardLink = document.getElementById('link');

// данные карточки
const cardTitle = document.querySelector('.card__name');
const cardImage = document.querySelector('.card__image');

// форма карточки
const formCard = document.getElementById('form_card');

function cardFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  /* userName.textContent = nameInput.value;
  userJob.textContent = descriptionInput.value; */


  initialCards.unshift(initialCards.item);
  closePopup();
};
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formCard.addEventListener('submit', cardFormSubmit);





/* const cardElement = cardTemplate.querySelector('.card').cloneNode(true);  */

/* cardElement.querySelector('.card__image').src = 'tinyurl.com/v4pfzwy';
cardElement.querySelector('.card__name').textContent = 'Дюк Корморант';  */