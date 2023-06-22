window.onload = () => {  
  function generaButtonsBackgroundColors() {
    let backgroundColorSection = document.querySelector("#background-color");
    const colorList = ['white', 'black', 'green', 'blue', 'yellow']
    colorList.forEach((color) => {
      const buttonElement = document.createElement('button');
      buttonElement.innerText = color;
    backgroundColorSection.appendChild(buttonElement);
  });
  }
  generaButtonsBackgroundColors();
  
  let content = document.querySelector(".content");
  const setBackgroundColor = (color) => {
    // let content = document.getElementsByClassName('article');
    content.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  }
  
  let paragraphs = document.querySelectorAll(".paragraph");
  // let paragraphs = document.getElementsByTagName('p');
  const setFontColor = (color) => {
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.color = color;
      localStorage.setItem("fontColor", color);
    }
  }

  const setFontSize = (size) => {
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontSize = size;
    }
  }

  const setLineHeight = (height) => {
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.lineHeight = height;
    }
  }

  const setFontFamily = (family) => {
    for (let index = 0; index < paragraphs.length; index += 1) {
      paragraphs[index].style.fontFamily = family;
    }
  }

  // Cor de fundo da tela;
  let backgroundColorButtons = document.querySelectorAll("#background-color>button");
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", (event) => {
      setBackgroundColor(event.target.innerHTML);
    })
  }

  // Cor do texto;
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    let fontColorButtons = document.querySelectorAll("#font-color>button");
    fontColorButtons[index].addEventListener("click", (event) => {
      setFontColor(event.target.innerHTML);
    })
  }

  // Tamanho da fonte
  for (let index = 0; index < fontSizeButtons.length; index += 1) {
    let fontSizeButtons = document.querySelectorAll("#font-size>button");
    fontSizeButtons[index].addEventListener("click", (event) => {
      setFontSize(event.target.innerHTML);
    })
  }

  // Espaçamento entre as linhas do texto;
  let lineHeightButtons = document.querySelectorAll("#line-height>button");
  for (let index = 0; index < lineHeightButtons.length; index += 1) {
    lineHeightButtons[index].addEventListener("click", (event) => {
      setLineHeight(event.target.innerHTML);
    })
  }

  // Tipo da fonte (Font family).
  let fontFamilyButtons = document.querySelectorAll("#font-family>button");
  for (let index = 0; index < fontFamilyButtons.length; index += 1) {
    fontFamilyButtons[index].addEventListener("click", (event) => {
      setFontFamily(event.target.innerHTML);
    })
  }

  const initialize = () => {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) setBackgroundColor(backgroundColor)

    let fontColor = localStorage.getItem("fontColor")
    if (fontColor) setFontColor(fontColor)
  }

  initialize()
}