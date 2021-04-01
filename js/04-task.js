const refs = {
    value: document.querySelector('#value'),
    counter: document.querySelectorAll('#counter button'),
}

let counterValue = parseInt(refs.value.textContent)

console.log(refs.counter);

const navDecrementEl = refs.counter[0];
const navIncrementEl = refs.counter[1];

navIncrementEl.addEventListener('click', onIncrement);
navDecrementEl.addEventListener('click', onDecrement);

function onIncrement(event) {
    counterValue += 1;
    refs.value.textContent = counterValue;
};

function onDecrement(event) {
    counterValue -= 1;
    refs.value.textContent = counterValue;
};
