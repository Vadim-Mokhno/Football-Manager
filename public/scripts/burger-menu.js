const burgerMenu = document.querySelector('.burger-menu');
const searchForm = document.querySelector('.burger-search-form');

document.querySelector('.burger-menu').addEventListener('click', function () {
  burgerMenu.classList.toggle('close');
  searchForm.classList.toggle('active');
});
