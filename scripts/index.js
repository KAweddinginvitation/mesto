const popup = document.querySelector('.popup');
const buttonPopupOpen = document.querySelector('.profile__info-opened')
const buttonPopupClose = document.querySelector('.popup__profile-close');
const buttonPopupSave = document.querySelector('.popup__profile-save');

buttonPopupOpen.addEventListener('click', () => {
    popup.classList.add('popup__opened');
});

buttonPopupClose.addEventListener('click', () => {
    popup.classList.remove('popup__opened');
});

buttonPopupSave.addEventListener('click', () => {
    popup.classList.remove('popup__opened');
});

document.querySelector('.popup__profile-save').addEventListener('click', userClick);
function userClick() {
    let userName = document.querySelector('.popup__profile-username').value;
    let userJob = document.querySelector('.popup__profile-job').value;
    document.querySelector('.profile__info-title').textContent = userName;
    document.querySelector('.profile__info-subtitle').textContent = userJob;
};