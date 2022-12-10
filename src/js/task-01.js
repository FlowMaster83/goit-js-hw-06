const listElements = document.querySelector('#categories');
console.log('Number of categories:', listElements.childElementCount);
const items = [...listElements.children];
items.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.childElementCount);
  });