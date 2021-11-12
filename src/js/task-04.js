let counterValue = 0;
const DecrementBtn = document.querySelector('button[data-action="decrement"]');
const IncrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

DecrementBtn.addEventListener('click', event => {
  counterValue -= 1;  
    counter.textContent = counterValue;
    console.log(event);
});

IncrementBtn.addEventListener('click', event => {
  counterValue += 1;  
    counter.textContent = counterValue;
    console.log(event);
});