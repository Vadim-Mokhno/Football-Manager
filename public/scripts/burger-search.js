const burgerSearchBtnElement = document.querySelector('.burger-search-btn');
const burgerCancelBtnElement = document.querySelector('.burger-cancel-btn');
const burgerSearchTextElement = document.querySelector('.burger-search-text');

const burgerMenu = document.querySelector('.burger-menu');
const searchForm = document.querySelector('.burger-search-form');

burgerSearchBtnElement.addEventListener('click', event => {
  event.preventDefault();
  const queryString = burgerSearchTextElement.value;
  const displayAreaElement = document.querySelector('.display-area');
  const matchedFootballerCards = [];
  for (const footballerCard of displayAreaElement.children) {
    if (
      footballerCard
        .querySelector('.footballer-fullname')
        .textContent.includes(queryString)
    ) {
      matchedFootballerCards.push(footballerCard);
    }
  }
  displayAreaElement.innerHTML = '';
  for (const footballerCard of matchedFootballerCards) {
    displayAreaElement.appendChild(footballerCard);
  }
  burgerMenu.classList.toggle('close');
  searchForm.classList.toggle('active');
  burgerSearchTextElement.value = '';
});

burgerCancelBtnElement.addEventListener('click', event => {
  event.preventDefault();
  burgerSearchTextElement.value = '';
});
