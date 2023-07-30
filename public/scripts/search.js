const searchBtnElement = document.querySelector('.search-btn');
const cancelBtnElement = document.querySelector('.cancel-btn');
const searchTextElement = document.querySelector('.search-text');

searchBtnElement.addEventListener('click', event => {
  event.preventDefault();
  const queryString = searchTextElement.value;
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
  searchTextElement.value = '';
});

cancelBtnElement.addEventListener('click', event => {
  event.preventDefault();
  searchTextElement.value = '';
});
