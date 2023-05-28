
// секции popup
const popupProfile = document.getElementById('popup-profile');
const popupCard = document.getElementById('popup-card');
const popupImage = document.getElementById('popup-image');

// элементы popup
const imageOpen = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__description');

// кнопки
const buttonPopupOpen = document.querySelector('.profile__edit');
const buttonPopupCard = document.querySelector('.profile__button');

// поля формы popupProfile
const nameInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

// поля формы popupCard
const inputName = document.getElementById('name');
const inputLink = document.getElementById('link');


// форма профиля
const formProfile = document.getElementById('form_profile');

//данные профиля
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');

// форма карточки
const formCard = document.getElementById('form_card');

// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}


// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');

}


// поиск кнопок закрытия, добавления слушателя
document.querySelectorAll('.popup__close').forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
});


// открытие popupCard
buttonPopupCard.addEventListener('click', () => {
  openPopup(popupCard);
  inputName.value = '';
  inputLink.value = '';
});


// открытие popupProfile
buttonPopupOpen.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = userName.textContent;
  descriptionInput.value = userJob.textContent;
});



const elementsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card').content;


function deleteCard(evt) {

  const item = evt.target.closest('.card');
  console.log(item, '1');
  item.remove();
  console.log(item, '2');
}

function createCard(card) {
  const cardContent = cardTemplate.cloneNode(true);
  const cardImage = cardContent.querySelector('.card__image');
  const cardName = cardContent.querySelector('.card__name');

  cardName.textContent = card.name;
  cardImage.alt = card.name;
  cardImage.src = card.link;

  cardContent.getElementById('card_delete').addEventListener('click', deleteCard);
  cardContent.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  cardContent.querySelector('.card__image').addEventListener('click', () => {
    popupImage.classList.add('popup_opened');
    imageCaption.textContent = card.name;
    imageOpen.src = card.link;
    imageOpen.alt = card.name;
  });
  return cardContent;
};

function renderCard(card) {
  const newCard = createCard(card);
  cardAppend(newCard);
}

function cardPrepend(card) {
  elementsList.prepend(card)
}

function cardAppend(card) {
  elementsList.append(card)
}


initialCards.forEach((item) => {
  renderCard(item);
});


// отправка формы карточки
function cardFormSubmit(evt) {
  evt.preventDefault();
  // поля формы popupCard
  const cardObject = {
    name: inputName.value,
    link: inputLink.value,
  };
  const newCard = createCard(cardObject);
  cardPrepend(newCard);
  inputName.value = '';
  inputLink.value = '';
  closePopup(popupCard);
};

formCard.addEventListener('submit', cardFormSubmit);


// отправка формы профиля
function profileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = descriptionInput.value;
  closePopup(popupProfile);
};
formProfile.addEventListener('submit', profileFormSubmit);