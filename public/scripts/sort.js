import { renderFootballerCard } from './loadFootballers.js';
const sortBtnElement = document.querySelector('.sort-btn');
const heightValue = document.querySelector('#height-value');
const heightInput = document.querySelector('#height');
heightValue.textContent = heightInput.value;
heightInput.addEventListener('input', event => {
  heightValue.textContent = event.target.value;
});
const priceValue = document.querySelector('#price-value');
const priceInput = document.querySelector('#price');
priceValue.textContent = priceInput.value;
priceInput.addEventListener('input', event => {
  priceValue.textContent = event.target.value;
});

sortBtnElement.addEventListener('click', event => {
  event.preventDefault();
  const displayAreaElement = document.querySelector('.display-area');
  const sortedFootballers = sortFootballers(
    displayAreaElement.children,
    createSortingOptions()
  );
  displayAreaElement.innerHTML = '';
  for (const footballer of sortedFootballers) {
    displayAreaElement.appendChild(renderFootballerCard(footballer));
  }
});

function sortFootballers(footballerCards, sortingOptions) {
  const sortedFootballers = [];
  for (const footballerCard of footballerCards) {
    const footballer = createFootballer(footballerCard);
    console.log(footballer);
    console.log(sortingOptions);
    if (
      footballer.price > sortingOptions.price &&
      sortingOptions.price !== false
    ) {
      continue;
    }
    if (
      footballer.height > sortingOptions.height &&
      sortingOptions.height !== false
    ) {
      continue;
    }
    if (
      footballer.foot !== sortingOptions.foot &&
      sortingOptions.foot !== false
    ) {
      continue;
    }
    if (
      footballer.position !== sortingOptions.position &&
      sortingOptions.position !== false
    ) {
      continue;
    }
    sortedFootballers.push(footballer);
  }
  console.log(sortedFootballers);
  return sortedFootballers;
}

function createFootballer(footballerCard) {
  const footballer = {};
  footballer.fullname = footballerCard.querySelector(
    '.footballer-fullname'
  ).textContent;
  footballer.image = footballerCard.querySelector('.image').getAttribute('src');
  footballer.citizenship = footballerCard
    .querySelector('.citizenship')
    .textContent.slice(
      footballerCard.querySelector('.citizenship').textContent.indexOf(':') + 1
    )
    .trim();
  footballer.position = footballerCard
    .querySelector('.position')
    .textContent.slice(
      footballerCard.querySelector('.position').textContent.indexOf(':') + 1
    )
    .trim();
  footballer.height = Number(
    footballerCard
      .querySelector('.height')
      .textContent.slice(
        footballerCard.querySelector('.height').textContent.indexOf(':') + 1
      )
  );
  footballer.foot = footballerCard
    .querySelector('.footballer-foot')
    .textContent.slice(
      footballerCard
        .querySelector('.footballer-foot')
        .textContent.indexOf(':') + 1
    )
    .trim();
  footballer.price = Number(
    footballerCard
      .querySelector('.price')
      .textContent.slice(
        footballerCard.querySelector('.price').textContent.indexOf(':') + 1
      )
  );
  return footballer;
}

function createSortingOptions() {
  const sortingOptions = {};
  if (document.querySelector('#height-option').checked) {
    sortingOptions.height = document.querySelector('#height').value;
  } else {
    sortingOptions.height = false;
  }
  if (document.querySelector('#price-option').checked) {
    sortingOptions.price = document.querySelector('#price').value;
  } else {
    sortingOptions.price = false;
  }
  if (document.querySelector('#position-option').checked) {
    sortingOptions.position = document.querySelector('#position').value;
  } else {
    sortingOptions.position = false;
  }
  if (document.querySelector('#foot-option').checked) {
    sortingOptions.foot = document.querySelector('#right').checked
      ? 'right'
      : 'left';
  } else {
    sortingOptions.foot = false;
  }
  return sortingOptions;
}
