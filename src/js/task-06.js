const symbolElement = {
    input: document.querySelector("#validation-input"),
};

symbolElement.input.addEventListener('blur', onValidInput);

function onValidInput(event) {
    event.currentTarget.classList.remove('invalid');

    if (event.currentTarget.value.length === 6) {
        symbolElement.input.classList.add('valid')
    } else {
        symbolElement.input.classList.add('invalid')
    };
};