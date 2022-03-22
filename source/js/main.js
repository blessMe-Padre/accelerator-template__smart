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
});
