// Подключение формы. Форма появляется при нажатии на кнопку "Напишите нам".

// Сделал форму более удобной.
// Изначально в хранилище localStorage сохранялось только имя пользователя (Фокус появлялся на поле "Ваш email").

// Итог:
// 1.) Все поля формы обязательны для ввода. При отсутствии одного заполненного поля появляется анимация ошибки.
// 2.) В хранилище сохраняются "Ваше имя" и "Ваш email" пользователя. При этом фокус идет на поле "Текст письма".

// Переменные, используемые в форме.

const loginLink = document.querySelector(".contacts-link");
const loginPopup = document.querySelector(".popup");
const loginClose = document.querySelector(".button-close");
const loginName = document.querySelector(".popup-form-name");
const loginForm = document.querySelector(".popup-form");
const loginEmail = document.querySelector(".popup-form-mail");
const loginTextarea = document.querySelector(".popup-form-text-input");

// Проверка наличия localStorage в браузере.

let isStorageSupport = true;
let storageName = localStorage.getItem("name");
let storageEmail = localStorage.getItem("email");

try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

// Оживление формы.

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");

  if (storage) {
    loginName.value = storageName;
    loginEmail.value = storageEmail;
    loginTextarea.focus();
  } else {
    loginName.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginName.value || !loginEmail.value || !loginTextarea.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", loginName.value);
      localStorage.setItem("email", loginEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});

// Оживление слайдера. Слайдер меняется без анимации, мгновенно.

// Переменные, используемые в слайдере.

const imageSlide = document.querySelectorAll(".slider-item");
const btnSlide = document.querySelectorAll(".slider-controls-item");

// Оживление слайдера.

const changeSlide = function (imageSlide, btnSlide, index) {
  for (let i = 0; i < imageSlide.length; i++) {
    if (imageSlide[i].classList.contains("slide-current")) {
      imageSlide[i].classList.remove("slide-current");
    }
  }
  imageSlide[index].classList.add("slide-current");

  for (let q = 0; q < btnSlide.length; q++) {
    if (btnSlide[q].classList.contains("current")) {
      btnSlide[q].classList.remove("current");
    }
  }
  btnSlide[index].classList.add("current");
};

for (let counter = 0; counter < btnSlide.length; counter++) {
  btnSlide[counter].addEventListener("click", function () {
    changeSlide(imageSlide, btnSlide, counter);
  });
}

// Добавление нестандартного маркера на Google-карту.


