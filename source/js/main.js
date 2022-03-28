
window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer__wrapper');
  const titles = footer.querySelectorAll('h2');
  const footerItem = footer.querySelectorAll('.footer__item');

  footerItem.forEach((item) => {
    item.classList.remove('footer-list-active');
  });

  titles.forEach((item) =>
    item.addEventListener('click', () => {
      const parent = item.parentNode;

      if (parent.classList.contains('footer-list-active')) {
        parent.classList.remove('footer-list-active');
      } else {
        closeTab();
        parent.classList.add('footer-list-active');
      }
    })
  );

  function closeTab() {
    footerItem.forEach((child) => child.classList.remove('footer-list-active'));
  }

  // секция about - показать/скрыть параграфы и заменить текст на кнопке
  const about = document.querySelector('.about__description');
  const aboutText = about.querySelectorAll('.about__hidden');
  const aboutBnt = about.querySelector('.button--about');

  function deleteHidden() {
    aboutText.forEach((p) => {
      p.classList.toggle('visually-hidden');
    });
  }

  function toggleBtnText() {
    if (aboutBnt.innerHTML === 'Подробнее') {
      aboutBnt.innerHTML = 'Свернуть';
    } else {
      aboutBnt.innerHTML = 'Подробнее';
    }
  }

  aboutBnt.addEventListener('click', deleteHidden);
  aboutBnt.addEventListener('click', toggleBtnText);

  // popup
  const headerBnt = document.querySelector('.header__button');
  const closeBtn = document.querySelector('.popup__btn');
  const popup = document.querySelector('.popup');
  const popupBody = document.querySelector('.popup__body');
  const body = document.querySelector('.page__body');
  const userName = document.querySelector('#loginName');


  headerBnt.addEventListener('click', openPopup);
  closeBtn.addEventListener('click', closePopup);

  function openPopup() {
    userName.focus();
    popup.classList.add('popup--show');
    body.classList.add('page__body--lock');
  }

  function closePopup() {
    popup.classList.remove('popup--show');
    body.classList.remove('page__body--lock');
  }

  // закрываем окно по esc
  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      if (popup.classList.contains('popup--show')) {
        evt.preventDefault();
        popup.classList.remove('popup--show');
      }
    }
  });

  // закрываем окно по клику вне попапа
  popup.addEventListener('click', function (evt) {
    if (evt.target === popupBody) {
      closePopup();
    }
  });

  // localstorage
  const formInput = document.querySelectorAll('input');

  formInput.forEach((el) => {
    el.addEventListener('change', changeHandler);
  });

  // записывает изменение значения инпута в localStorage
  function changeHandler(e) {
    localStorage.setItem(e.target.name, e.target.value);
  }

  // записывает значения инпута из localStorage в инпут формы
  function getCheckStorage() {
    for (let i = 0; i < formInput.length; i++) {
      formInput[i].value = localStorage.getItem(formInput[i].name);
    }
  }
  getCheckStorage();

  // записывает значения чекбокса в localStorage
  const checkbox = document.querySelector('#formAgreement');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      localStorage.setItem('agreement', 'true');
    } else {
      localStorage.setItem('agreement', 'false');
    }
  });

  // записывает значения textarea в localStorage
  const textarea = document.querySelector('#appointment-text');
  textarea.addEventListener('change', changeHandler);

  // получает значения textarea из localStorage
  function getCheckStorageText() {
    textarea.value = localStorage.getItem(textarea.name);
  }
  getCheckStorageText();


  // плавный скрол до формы
  const mainBtn = document.querySelector('.button--main');
  const feedback = document.querySelector('.feedback');

  function scrollTo(el) {
    window.scroll({
      left: 0,
      top: el.offsetTop,
      behavior: 'smooth',
    });
  }

  mainBtn.addEventListener('click', () => {
    scrollTo(feedback);
  });

  // секция main - изменить текст на кнопке при wv<768px
  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 768px)').matches) {
      mainBtn.innerHTML = 'Получить бесплатную консультацию';
    } else {
      mainBtn.innerHTML = 'Бесплатная консультация';
    }
  });
});
