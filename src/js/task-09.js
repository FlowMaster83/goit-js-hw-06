function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const randomColor = {
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
}

randomColor.button.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  randomColor.span.textContent = document.body.style.backgroundColor;
}