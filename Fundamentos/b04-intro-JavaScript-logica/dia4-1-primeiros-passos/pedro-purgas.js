let salarioBase;
let salarioBruto = 6000;
let salarioInss;
let salarioIr;
let salarioLiquido;

if (salarioBruto <= 1556.94) {
  salarioInss = (salarioBruto / 100) * 8;
  salarioBase = salarioBruto - salarioInss;
  console.log(`Seu salário líquido é de R$${salarioBase}`);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioInss = (salarioBruto / 100) * 9;
  salarioBase = salarioBruto - salarioInss;
  if (salarioBase <= 1903.98) {
      console.log(`Seu salário líquido é de R$${salarioBase}`);
  } else if (salarioBase > 1903.98) {
      salarioIr = (salarioBase / 100) * 7.5 - 142.80;
      salarioLiquido = salarioBase - salarioIr;
      console.log(`Seu salário líquido é de R$${salarioLiquido}`);
  }
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5182.82) {
  salarioInss = (salarioBruto / 100) * 11;
  salarioBase = salarioBruto - salarioInss;
  if (salarioBase <= 2826.65) {
      salarioIr = (salarioBase / 100) * 7.5 - 142.80;
      salarioLiquido = salarioBase - salarioIr;
      console.log(`Seu salário líquido é de R$${salarioLiquido}`);
  } else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
      salarioIr = (salarioBase / 100) * 15 - 354.80;
      salarioLiquido = salarioBase - salarioIr;
      console.log(`Seu salário líquido é de R$${salarioLiquido}`);
  } else if (salarioBase >= 3571.06 && salarioBase <= 4664.68) {
      salarioIr = (salarioBase / 100) * 22.5 - 636.13;
      salarioLiquido = salarioBase - salarioIr;
      console.log(`Seu salário líquido é de R$${salarioLiquido}`);
  }
} else if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - 570.88;
  if (salarioBase <= 4664.68) {
      salarioIr = (salarioBase / 100) * 22.5 - 636.13;
      salarioLiquido = salarioBase - salarioIr;
      console.log(`Seu salário líquido é de R$${salarioLiquido}`);
  } else if (salarioBase > 4664.68) {
      salarioIr = (salarioBase / 100) * 27.5 - 869.36;
      salarioLiquido = salarioBase - salarioIr;
      console.log(`Seu salário líquido é de R$${salarioLiquido}`);
  }
}

