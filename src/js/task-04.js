let counterValue = 0;

const minusValue = document.querySelector('button[data-action="decrement"]');
const plusValue = document.querySelector('button[data-action="increment"]');
const currentValue = document.querySelector('span#value');


minusValue.addEventListener('click', event => {
    counterValue -= 1;
    currentValue.textContent = counterValue;
});
plusValue.addEventListener('click', event => {
    counterValue += 1;
    currentValue.textContent = counterValue;
});

