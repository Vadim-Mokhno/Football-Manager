const priceBtnElement = document.querySelector('.price-btn');
const priceValueElement = document.querySelector('.price-value');
const displayAreaElement = document.querySelector('.display-area');

priceBtnElement.addEventListener('click', () => {
  let totalPrice = 0;
  for (const footballerCard of displayAreaElement.children) {
    totalPrice += Number(
      footballerCard
        .querySelector('.price')
        .textContent.slice(
          footballerCard.querySelector('.price').textContent.indexOf(':') + 1
        )
        .trim()
    );
  }
  priceValueElement.textContent = 'Total price: ' + totalPrice + ',000,000$';
});
