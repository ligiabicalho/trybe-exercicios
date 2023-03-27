/* 1. Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.
Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:
--------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade"
-------------------------------------------------- 
let idadeMarina = 13;
let idadeSilvia = 26;
let idadeIza = 13;
if(idadeMarina < idadeSilvia && idadeMarina < idadeIza){
    console.log('Marina é a pessoa mais jovem e possui', idadeMarina, 'anos de idade.');
}else if(idadeSilvia < idadeIza && idadeSilvia < idadeMarina){
    console.log('Silvia é a pessoa mais jovem e possui', idadeSilvia, 'anos de idade');
}else{
    console.log('Iza é a pessoa mais jovem e possui', idadeIza, 'anos de idade')
} */

/* 2. Taxa Metabólica Basal
Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal)
 em seu site, vamos ajudá-la escrevendo um algoritmo.
Ele recebe os seguintes dados:
 - age: número maior que 0
 - sex: M ou F
 - weight: Em (kg) com número maior que 0
 - height: Em (cm) com número maior que 0
A fórmula para homens:
 - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
A fórmula para mulheres:
 - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
Imprima no terminal o resultado do cálculo no formato:
-----------------------------------
"A taxa metabólica basal é: x Kcal"
----------------------------------- */
const bmrM = (heightM * 6.25) + (weightM * 9.99) - (ageM * 4.92) + 5
let heightM;
let weightM;
let ageM;
const bmrF = (heightF * 6.25) + (weightF * 9.99) - (ageF * 4.92) - 161
let heightF = 160;
let weightF = 50;
let ageF = 33;

let sex = 'F';
if(sex == 'F'){
    console.log('A taxa metabólica basal é:', bmrF ,'Kcal')
}else{
    console.log('A taxa metabólica basal é:', bmrM ,'Kcal')
}