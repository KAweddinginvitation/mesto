const popup = document.querySelector('.popup');
const buttonPopupOpen = document.querySelector('.profile__info_edit-opened')
const buttonPopupClose = document.querySelector('.popup__profile_close');
const buttonPopupSave = document.querySelector('.popup__profile_save');

buttonPopupOpen.addEventListener('click', () => {
    popup.classList.add('popup__opened');
});

buttonPopupClose.addEventListener('click', () => {
    popup.classList.remove('popup__opened');
});

buttonPopupSave.addEventListener('click', () => {
    popup.classList.remove('popup__opened');
});

document.querySelector('.popup__profile_save').addEventListener('click', userClick);
function userClick() {
    let userName = document.querySelector('.popup__profile_username').value;
    let userJob = document.querySelector('.popup__profile_job').value;
    document.querySelector('.profile__info_title').textContent = userName;
    document.querySelector('.profile__info_subtitle').textContent = userJob;
};