
// секции popup
const popupProfile = document.getElementById('popup-profile');
const popupCard = document.getElementById('popup-card');
const popupImage = document.getElementById('popup-image');

// элементы popup
const imageOpen = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__description');

// форма профиля
const formProfile = document.getElementById('form_profile');

// форма карточки
const formCard = document.getElementById('form_card');


// кнопки
const buttonPopupProfile = document.querySelector('.profile__edit');
const buttonPopupCard = document.querySelector('.profile__button');
const buttonPopupSave = document.getElementById('buttonSave');

// поля формы popupProfile
const nameInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');

// поля формы popupCard
const inputName = document.getElementById('name');
const inputLink = document.getElementById('link');

// данные профиля
const userName = document.querySelector('.profile__title');
const userJob = document.querySelector('.profile__subtitle');



// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeHandlePopup);
  document.addEventListener('click', closeHandlePopup);
}


// закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.addEventListener('keydown', closeHandlePopup);
  document.addEventListener('click', closeHandlePopup);
}


function closeHandlePopup(evt) {
  if (
    evt.key === 'Escape' || // здесь закрытие по нажатию на Esc
    (evt.target.classList.contains('popup') && evt.target.classList.contains('popup_opened')) // закрытие по клику на оверлей
  ) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}



// поиск кнопок закрытия, добавления слушателя
document.querySelectorAll('.popup__close').forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
});


// открытие popupCard
buttonPopupCard.addEventListener('click', () => {
  formCard.reset();
  buttonPopupSave.setAttribute('disabled', true);
  buttonPopupSave.classList.add('popup__save_disabled');
  openPopup(popupCard);
});


// открытие popupProfile
buttonPopupProfile.addEventListener('click', () => {
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
    openPopup(popupImage);
    imageCaption.textContent = card.name;
    imageOpen.src = card.link;
    imageOpen.alt = card.name;
  });
  return cardContent;
};

function renderCard(card) {
  const newCard = createCard(card);
  appendCard(newCard);
}

function prependCard(card) {
  elementsList.prepend(card)
}

function appendCard(card) {
  elementsList.append(card)
}


initialCards.forEach((item) => {
  renderCard(item);
});




// отправка формы карточки
function submitCardForm(evt) {
  evt.preventDefault();
  const formElement = evt.target;
  const cardObject = {
    name: inputName.value,
    link: inputLink.value,
  };
  const newCard = createCard(cardObject);
  prependCard(newCard);
  closePopup(popupCard);
  formElement.reset(); // очищаем форму с помощью метода reset()
}

formCard.addEventListener('submit', submitCardForm);




// отправка формы профиля
function submitFormProfile(evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value;
  userJob.textContent = descriptionInput.value;
  closePopup(popupProfile);
};
formProfile.addEventListener('submit', submitFormProfile);


