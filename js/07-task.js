const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}
const navInputRangeElValue = refs.input.value;

refs.text.style.fontSize = `${navInputRangeElValue}px`;

refs.input.addEventListener('input', onInput);

function onInput(event) {
    let currentValue = event.currentTarget.value;
    refs.text.setAttribute("style", `font-size: ${currentValue}px;`);
};

