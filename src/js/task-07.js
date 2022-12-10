const scriptElement = {
    input: document.querySelector("#font-size-control"),
    span: document.querySelector("#text"),
}

scriptElement.input.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    scriptElement.span.style.fontSize = event.currentTarget.value + "px";
};