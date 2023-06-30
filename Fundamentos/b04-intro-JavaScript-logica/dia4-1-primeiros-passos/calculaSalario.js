// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

function salarioCLT (salarioBruto){
    const { salarioBase } = calculaSalarioDescontadoINSS(salarioBruto);
    const { salarioLiquido } = calculaSalarioDescontadoIR(salarioBase);
    const { descontoTrybe, salarioFinal } = valorAPagarFinanciamentoTrybe(salarioBruto, salarioLiquido);

    return `O salário líquido a receber é ${salarioLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, e descontando o pagamento do curso, de ${descontoTrybe.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}, receberei ${salarioFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}

const calculaSalarioDescontadoINSS = (salarioBruto) => {
    let salarioBase = 0;
    if (salarioBruto <= 1556.94) {
        salarioBase = salarioBruto * 0.92; // aliquota 8%
    } else if (salarioBruto <= 2594.92) {
        salarioBase = salarioBruto * 0.91; // aliquota 9%
    } else if (salarioBruto <= 5189.82) {
        salarioBase = salarioBruto * 0.89; // aliquota 11%
    } else {
        salarioBase = salarioBruto - 570.88;
    }
    return {salarioBase};
}

const calculaSalarioDescontadoIR = (salarioBase) => {
    let salarioLiquido = 0;
    if (salarioBase <= 1903.98) {
        salarioLiquido = salarioBase;
    } else if (salarioBase <= 2826.65) {
        salarioLiquido = calculoIR(salarioBase, 0.075, 142.80) // alíquota 7,5% e parcela de R$ 142,80 a deduzir do imposto;
    } else if (salarioBase <= 3751.05) {
        valorIR = (salarioBase * 0.15) - 354.80; // alíquota de 15% e parcela de R$ 354,80 
        salarioLiquido = salarioBase - valorIR;
    } else if (salarioBase <= 4664.68) {
        valorIR = (salarioBase * 0.225) - 636.13; // alíquota de 22,5% e parcela de R$ 636,13 
        salarioLiquido = salarioBase - valorIR;
    } else {
        valorIR = (salarioBase * 0.275) - 869.36; // alíquota de 27,5% e parcela de R$ 869,36
        salarioLiquido = salarioBase - valorIR;
    } 
    return {salarioLiquido};
}

const calculoIR = (salarioBase, aliquota, parcela) => {
  let valorIR = (salarioBase * aliquota) - parcela;
  let salarioLiquido = salarioBase - valorIR;
  return salarioLiquido
}
  
const valorAPagarFinanciamentoTrybe = (salarioBruto=3000, salarioLiquido=2612.55) => {
    let descontoTrybe = salarioBruto * 0.17;
    let salarioFinal = salarioLiquido - descontoTrybe;
    return { descontoTrybe, salarioFinal };
}

const listaSalarios = [3000, 3500, 4000, 4500]
for (let index = 0; index < listaSalarios.length; index += 1){
  let salarioAReceber = salarioCLT(listaSalarios[index])
  console.log(salarioAReceber);
}