
// секции popup
const popupProfile = document.getElementById('popup-profile');
const popupCard = document.getElementById('popup-card');
const popupImage = document.getElementById('popup-image');

// кнопки
const buttonPopupOpen = document.querySelector('.profile__edit');
const buttonPopupCard = document.querySelector('.profile__button');
const buttonCardClose = document.getElementById('card_close');
const buttonPopupClose = document.getElementById('profile_close');


// поля формы popupProfile
const nameInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

// поля формы popupCard
const inputName = document.getElementById('name');
const inputLink = document.getElementById('link');

//данные профиля
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');


function closePopup() {
  popupCard.classList.remove('popup_opened');
  popupProfile.classList.remove('popup_opened');
  inputName.value = '';
  inputLink.value = '';
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
];


const elementsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card').content;

const itemFromEvent = (evt) => evt.target.closest('.card');


const deleteCard = (evt) => {
  const item = itemFromEvent(evt);
  item.remove();
  console.log('delete');
}


const renderCard = (todo, order = 'append') => {
  const cardContent = cardTemplate.cloneNode(true);
  cardContent.querySelector('.card__name').innerText = todo.name;
  cardContent.querySelector('.card__image').alt = todo.name;
  cardContent.querySelector('.card__image').src = todo.link;
  cardContent.getElementById('card_delete').addEventListener('click', deleteCard);
  cardContent.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  elementsList[order](cardContent);
};


initialCards.forEach((item) => {
  renderCard(item);
});



// форма карточки
const formCard = document.getElementById('form_card');

const cardSubmit = (evt) => {
  evt.preventDefault();
  // поля формы popupCard
  const cardObject = {
    name: inputName.value,
    link: inputLink.value,
  };
  renderCard(cardObject, 'prepend');
  inputName.value = '';
  inputLink.value = '';
  closePopup();
};

formCard.addEventListener('submit', cardSubmit);