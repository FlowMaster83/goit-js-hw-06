const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
    if (event.currentTarget.trim === "") {
        output.textContent = event.currentTarget.trim;
    } else {
        output.textContent = "Anonymous";
    }
}