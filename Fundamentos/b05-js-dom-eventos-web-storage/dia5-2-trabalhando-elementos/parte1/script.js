// 1.Acesse o elemento elementoOndeVoceEsta.

let containerWhere = document.querySelector('#elementoOndeVoceEsta');
console.log(1, containerWhere);

// 2.Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let containerParents = containerWhere.parentNode;
containerParents.style.color = 'red';
console.log(2, containerParents);

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

// let containerPFF = document.querySelector('#primeiroFilhoDoFilho');
let containerPFF = containerWhere.firstElementChild;
containerPFF.innerText = "Primeiro Filho Do Filho"
console.log(3, containerPFF);

// 4. Acesse o primeiroFilho a partir de pai.

let containerPF = containerParents.firstElementChild;
console.log(4, containerPF);

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.


let containerPF2 = containerWhere.previousElementSibling;
console.log(5, containerPF2);

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

let atencao = containerWhere.nextSibling; 
console.log(6, atencao);

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

let terceiro = containerWhere.nextElementSibling;
console.log(7, terceiro);

// 8. Agora acesse o terceiroFilho a partir de pai.

// PARTE 2

// Crie um irmão para elementoOndeVoceEsta.
let pai = document.querySelector('#pai');
let siblingWhere = document.createElement('section');
siblingWhere.id = 'IrmaoElementoOndeVoceEsta';
pai.appendChild(siblingWhere);

console.log(8, siblingWhere);

// Crie um filho para elementoOndeVoceEsta.

let filhoWhere = document.createElement('section');
filhoWhere.id = 'filhoWhere';
containerWhere.appendChild(filhoWhere);
console.log(9, filhoWhere);

// Crie um filho para primeiroFilhoDoFilho.

let filhoPFF = document.createElement('section');
filhoPFF.id = 'filhoPFF';
containerPFF.appendChild(filhoWhere);
console.log(10, filhoPFF);

// A partir desse filho criado, acesse terceiroFilho.