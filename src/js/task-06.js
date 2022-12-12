const symbolElement = {
    input: document.querySelector("#validation-input"),
};

symbolElement.input.addEventListener('blur', onValidInput);

function onValidInput(event) {
    event.currentTarget.classList.remove('invalid', 'valid');

    if (event.currentTarget.value.length === event.currentTarget.dataset.length) {
        symbolElement.input.classList.add('valid')
    } else {
        symbolElement.input.classList.add('invalid')
    };
};