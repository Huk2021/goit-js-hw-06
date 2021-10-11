
let counterValue = 0;
const decrementBtn = document.querySelector("[data-action='decrement']");
const span = document.querySelector("#value");
const incrementBtn = document.querySelector("[data-action='increment']");

incrementBtn.addEventListener('click', event => {
    counterValue += 1
    span.textContent = counterValue;
});

decrementBtn.addEventListener('click', event => {
    counterValue -= 1
    span.textContent = counterValue;
});