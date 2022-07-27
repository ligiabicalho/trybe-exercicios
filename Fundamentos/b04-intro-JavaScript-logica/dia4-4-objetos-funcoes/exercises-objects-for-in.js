// Parte I - Objetos e For/In

// let info = {git status
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 

  // console.log(`Bem vinda, ${info.personagem}`);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

  // info.recorrente = 'Sim';
  // info['recorrente'] = 'Sim';
  // console.log(info);

// 3 - Faça um for/in que mostre todas as chaves do objeto.  
// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

  // for (let properties in info){
  //   console.log(properties);
  //   console.log(info[properties]);
  // }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let secondInfo = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

let expectedValue1 = `${info.personagem} e ${secondInfo.personagem}`;
let expectedValue2 = `${info.origem} e ${secondInfo.origem}`;
let expectedValue3 = `${info.nota} e ${secondInfo.nota}`;
console.log(expectedValue1);
console.log(expectedValue2);
console.log(expectedValue3);

for (properties in info){
  if(
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    secondInfo[properties] === 'Sim'
    ){
    let msgRecorrente = 'Ambos recorrentes';
    console.log(msgRecorrente);
    break;
  } else {
    msgRecorrente = `Recorrencia: ${info.properties} e ${secondInfo.properties}.`;
    console.log(msgRecorrente);
  }
}

