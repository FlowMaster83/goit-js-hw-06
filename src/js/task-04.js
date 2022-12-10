let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

decrementButton.addEventListener("click", counterValueReduce);
incrementButton.addEventListener("click", counterValueIncrease);

function counterValueReduce() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

function counterValueIncrease() {
    counterValue += 1;
    counter.textContent = counterValue;
}