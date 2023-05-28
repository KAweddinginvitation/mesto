
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



// отправка формы профиля
function profileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = descriptionInput.value;
  closePopup(popupProfile);
};
formProfile.addEventListener('submit', profileFormSubmit);



// отправка формы карточки
function cardFormSubmit(evt) {
  evt.preventDefault();
  // поля формы popupCard
  const cardObject = {
    name: inputName.value,
    link: inputLink.value,
  };
  renderCard(cardObject, 'prepend');
  inputName.value = '';
  inputLink.value = '';
  closePopup(popupCard);
};

formCard.addEventListener('submit', cardFormSubmit);






const elementsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card').content;

const itemFromEvent = (evt) => evt.target.closest('.card');


const deleteCard = (evt) => {
  const item = itemFromEvent(evt);
  item.remove();
  console.log('delete');
}



const renderCard = (card, order = 'append') => {
  const cardContent = cardTemplate.cloneNode(true);
  cardContent.querySelector('.card__name').textContent = card.name;
  cardContent.querySelector('.card__image').alt = card.name;
  cardContent.querySelector('.card__image').src = card.link;
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
  elementsList[order](cardContent);
};


initialCards.forEach((item) => {
  renderCard(item);
});



