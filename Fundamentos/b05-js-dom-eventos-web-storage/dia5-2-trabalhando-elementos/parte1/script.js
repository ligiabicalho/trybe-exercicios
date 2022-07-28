// 1.Acesse o elemento elementoOndeVoceEsta.

let containerWhere = document.querySelector('#elementoOndeVoceEsta');
console.log(containerWhere);

// 2.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let containerParents = containerWhere.parentNode;
containerParents.style.color = 'red';
console.log(containerParents);

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

// let containerPFF = document.querySelector('#primeiroFilhoDoFilho');
let containerPFF = containerWhere.firstElementChild;
containerPFF.innerText = "Primeiro Filho Do Filho"
console.log(containerPFF);

// 4. Acesse o primeiroFilho a partir de pai.

let containerPF = containerParents.firstElementChild;
console.log(containerPF);

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.


let containerPF2 = containerWhere.previousElementSibling;
console.log(containerPF2);

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

let atencao = containerWhere.nextSibling; 
console.log(atencao);

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

let terceiro = containerWhere.nextElementSibling;
console.log(terceiro);

// 8. Agora acesse o terceiroFilho a partir de pai.