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







});
