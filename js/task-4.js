const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
let counterValueEl = document.querySelector('#value');

const increment = () => {
  ++counterValueEl.textContent;
};
const decrement = () => {
  if (counterValueEl.textContent > 0)
    --counterValueEl.textContent;
  
};
decrementBtnEl.addEventListener('click', decrement);
incrementBtnEl.addEventListener('click', increment);