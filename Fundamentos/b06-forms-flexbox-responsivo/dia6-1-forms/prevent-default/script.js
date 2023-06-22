const hrefLink = document.querySelector("#href");
const inputCheckbox = document.querySelector("#input-checkbox");
const inputText = document.querySelector("#input-text");

hrefLink.addEventListener('click', (event) => {
  event.preventDefault();
});

inputCheckbox.addEventListener('click', (event) => {
  event.preventDefault();
});

inputText.addEventListener('keypress', (event) => {
  const character = event.key;
  if (character !== 'a') {
    event.preventDefault();
  }
});