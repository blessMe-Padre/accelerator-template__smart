window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.footer__wrapper');
  const titles = footer.querySelectorAll('h2');

  titles.forEach((item) =>
    item.addEventListener('click', () => {
      const parent = item.parentNode;

      if (parent.classList.contains('footer__list--active')) {
        parent.classList.remove('footer__list--active');
      } else {
        parent.classList.add('footer__list--active');
      }
    })
  );


  // секция about - показать/скрыть параграфы и заменить текст на кнопке
  const about = document.querySelector('.about__description');
  const aboutText = about.querySelectorAll('.about__hidden');
  const aboutBnt = about.querySelector('.button__about');

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
  const popupContent = document.querySelector('.popup__content');
  const body = document.querySelector('.page__body');
  const userName = document.querySelector('#user-name');


  headerBnt.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('popup--show');
    body.classList.add('page__body--lock');
  });

  closeBtn.addEventListener('click', closePopup);

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

  popup.addEventListener('click', function (evt) {
    evt.stopPropagation();
    if (evt.target !== popupContent) {
      console.log('click!!!!!!!popupContent');
    } else {
      console.log('click!');
    }
  });

});
