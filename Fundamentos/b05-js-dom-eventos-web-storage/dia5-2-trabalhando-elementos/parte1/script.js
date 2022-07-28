// 1.Acesse o elemento elementoOndeVoceEsta.

let container = document.querySelector('#elementoOndeVoceEsta');
console.log(container);

// 2.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let containerParents = container.parentNode;
containerParents.style.background = 'red';
console.log(containerParents);

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// 4. Acesse o primeiroFilho a partir de pai.
// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// 8. Agora acesse o terceiroFilho a partir de pai.