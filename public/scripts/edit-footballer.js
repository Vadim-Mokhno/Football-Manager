import displayFootballers from './loadFootballers.js';
export default function editFootballerHandler() {
  const footballerData = document.querySelector('.edit-footballer');

  const closeBtn = document.querySelector('.edit-close-btn');
  const footballerDataFormBtn = document.querySelector('.edit-footballer-btn');
  const footballerID = this.parentElement.getAttribute('data-id');
  footballerData.classList.toggle('close');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  fillFormFields(this, footballerData);
  const putFootballer = async event => {
    event.preventDefault();
    await fetch(
      `http://localhost:${window.location.port}/api/footballers/` +
        footballerID,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createFootballer()),
      }
    );
    await displayFootballers();
    footballerData.classList.add('close');
  };
  footballerDataFormBtn.onclick = putFootballer;
  closeBtn.addEventListener('click', function () {
    footballerData.classList.add('close');
  });
}

function fillFormFields(footballer, footballerData) {
  const displayAreaElement = document.querySelector('.display-area');
  const footballerCard = displayAreaElement.querySelector(
    `[data-id="${footballer.parentElement.getAttribute('data-id')}"`
  ).parentElement;

  console.log(
    footballerCard
      .querySelector('.footballer-foot')
      .textContent.slice(
        footballerCard
          .querySelector('.footballer-foot')
          .textContent.indexOf(':') + 1
      )
      .trim()
  );
  footballerData.querySelector('#edit-name').value =
    footballerCard.querySelector('.footballer-fullname').textContent;
  footballerData.querySelector('#edit-citizenship').value = footballerCard
    .querySelector('.citizenship')
    .textContent.slice(
      footballerCard.querySelector('.citizenship').textContent.indexOf(':') + 1
    )
    .trim();
  footballerData.querySelector('#edit-image').value = footballerCard
    .querySelector('.image')
    .getAttribute('src');
  footballerData.querySelector('#edit-price').value = Number(
    footballerCard
      .querySelector('.price')
      .textContent.slice(
        footballerCard.querySelector('.price').textContent.indexOf(':') + 1
      )
  );
  footballerData.querySelector('#edit-height').value = Number(
    footballerCard
      .querySelector('.height')
      .textContent.slice(
        footballerCard.querySelector('.height').textContent.indexOf(':') + 1
      )
  );
  if (
    footballerCard
      .querySelector('.footballer-foot')
      .textContent.slice(
        footballerCard
          .querySelector('.footballer-foot')
          .textContent.indexOf(':') + 1
      )
      .trim() === 'right'
  ) {
    footballerData.querySelector('#edit-right').checked = true;
    footballerData.querySelector('#edit-left').checked = false;
  } else {
    footballerData.querySelector('#edit-left').checked = true;
    footballerData.querySelector('#edit-right').checked = false;
  }
  for (const position of footballerData.querySelector('#edit-position')
    .children) {
    if (
      position.value ===
      footballerCard
        .querySelector('.position')
        .textContent.slice(
          footballerCard.querySelector('.position').textContent.indexOf(':') + 1
        )
        .trim()
    ) {
      position.selected = true;
    } else {
      position.selected = false;
    }
  }
}

function createFootballer() {
  const footListElements = document.querySelectorAll('.edit-foot-radio');
  const footballer = {};
  footballer.fullname = document.getElementById('edit-name').value;
  footballer.citizenship = document.getElementById('edit-citizenship').value;
  footballer.image = document.getElementById('edit-image').value;
  footballer.position = document.getElementById('edit-position').value;
  footballer.height = Number(document.getElementById('edit-height').value);
  for (const footListElement of footListElements) {
    if (
      !footListElement.parentElement.parentElement.classList.contains(
        'close'
      ) &&
      footListElement.checked
    ) {
      footballer.foot = footListElement.value;
    }
  }
  footballer.price = Number(document.getElementById('edit-price').value);
  return footballer;
}
