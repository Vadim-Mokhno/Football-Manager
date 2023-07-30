import displayFootballers from './loadFootballers.js';
const footballerData = document.querySelector('.create-footballer-data');
const createFootballerElement = document.querySelector('p.create-footballer');
const closeBtn = document.querySelector('.create-close-btn');
const footballerDataFormBtn = document.querySelector('.create-footballer-btn');

createFootballerElement.addEventListener('click', function () {
  footballerData.classList.toggle('close');
});

closeBtn.addEventListener('click', function () {
  footballerData.classList.add('close');
});

footballerDataFormBtn.addEventListener('click', async event => {
  event.preventDefault();
  await fetch(`http://localhost:${window.location.port}/api/footballers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(createFootballer()),
  });
  clearFormFields();
  await displayFootballers();
  footballerData.classList.add('close');
});

export default function createFootballer() {
  const footballer = {};
  footballer.fullname = document.getElementById('create-name').value;
  footballer.citizenship = document.getElementById('create-citizenship').value;
  footballer.image = document.getElementById('create-image').value;
  footballer.position = document.getElementById('create-position').value;
  footballer.height = Number(document.getElementById('create-height').value);
  footballer.foot =
    document.getElementById('create-right').getAttribute('checked') ===
    'checked'
      ? 'right'
      : 'left';
  footballer.price = Number(document.getElementById('create-price').value);
  return footballer;
}

function clearFormFields() {
  footballerData.querySelector('#create-name').value = '';
  footballerData.querySelector('#create-citizenship').value = '';
  footballerData.querySelector('#create-image').value = '';
  footballerData.querySelector('#create-price').value = null;
  footballerData.querySelector('#create-height').value = null;
  footballerData.querySelector('#create-left').checked = true;
  for (const position of footballerData.querySelector('#create-position')
    .children) {
    if (position.value === 'goolkeeper') {
      position.selected = true;
    }
    position.selected = false;
  }
}
