const refs = {
    input: document.querySelector('#validation-input'),
}

const navInputElLength = refs.input.dataset.length;

console.log(navInputElLength);

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (navInputElLength < event.currentTarget.value.length) {
        refs.input.classList.remove('valid');
        refs.input.classList.add('invalid');
    } else {
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');
    }
};

