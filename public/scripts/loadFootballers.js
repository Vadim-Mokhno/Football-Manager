import editFootballerHandler from './edit-footballer.js';
import deleteFootballerHandler from './delete-footballer.js';
async function loadFootballers(PORT) {
  try {
    const response = await fetch(`http://localhost:${PORT}/api/footballers`);
    const footballers = await response.json();
    return footballers;
  } catch (err) {
    console.log(err);
  }
}

const loadFootballersElement = document.querySelector('.load-footballers');
loadFootballersElement.addEventListener('click', displayFootballers);

export function renderFootballerCard(footballer) {
  const footballerCardElement = document.createElement('div');
  footballerCardElement.innerHTML =
    '<p><image class="image" src="' +
    footballer.image +
    '"></p>' +
    '<h2 class="footballer-fullname">' +
    footballer.fullname +
    '</h2>' +
    '<p class="citizenship">Citezenship: ' +
    footballer.citizenship +
    '</p>' +
    '<p class="position">Position: ' +
    footballer.position +
    '</p>' +
    '<p class="height">Height: ' +
    footballer.height +
    '</p>' +
    '<p class="footballer-foot">Foot: ' +
    footballer.foot +
    '</p>' +
    '<p class="price">Price: ' +
    footballer.price +
    '</p>' +
    '<div class="buttons"' +
    ` data-id="${footballer._id}">` +
    '<button class="footballer-edit-btn">Edit</button><button class="footballer-delete-btn">Delete</button>';
  footballerCardElement.classList.add('footballer-card');
  return footballerCardElement;
}

export default async function displayFootballers() {
  const footballers = await loadFootballers(window.location.port);
  const displayAreaElement = document.querySelector('.display-area');
  displayAreaElement.innerHTML = '';
  for (const footballer of footballers) {
    displayAreaElement.appendChild(renderFootballerCard(footballer));
  }
  const editFootballerBtns = document.querySelectorAll('.footballer-edit-btn');
  const deleteFootballerBtns = document.querySelectorAll(
    '.footballer-delete-btn'
  );
  for (const editFootballerBtn of editFootballerBtns) {
    editFootballerBtn.addEventListener('click', editFootballerHandler);
  }
  for (const deleteFootballerBtn of deleteFootballerBtns) {
    deleteFootballerBtn.addEventListener('click', deleteFootballerHandler);
  }
}
