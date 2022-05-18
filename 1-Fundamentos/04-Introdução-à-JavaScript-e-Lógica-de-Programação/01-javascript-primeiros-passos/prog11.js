const aliquotaINSS1 = 0.08;
const aliquotaINSS2 = 0.09;
const aliquotaINSS3 = 0.11;
const aliquotaINSSMax = 570.88;
const aliquotaIR1 = 0.075;
const aliquotaIR2 = 0.15;
const aliquotaIR3 = 0.225;
const aliquotaIR4 = 0.275;
const parcIR1 = 142.80;
const parcIR2 = 354.80;
const parcIR3 =  636.13;
const parcIR4 = 898.36;

let salarioBruto = 3000.00;
let valorINSS = {};

if (salarioBruto <= 1556.94) {
 valorINSS = salarioBruto * aliquotaINSS1;
} else if (salarioBruto <= 2594.92) {
 valorINSS = salarioBruto * aliquotaINSS2;
} else if (salarioBruto <= 5189.82) {
 valorINSS = salarioBruto * aliquotaINSS3;
} else {
 valorINSS = aliquotaINSSMax;
}

let salarioBase = salarioBruto - valorINSS;
let valorIR = {};

if (salarioBase <= 1903.98) {
 valorIR = 0;
} else if (salarioBase <= 2826.65) {
 valorIR = (salarioBase * aliquotaIR1) - parcIR1;
} else if (salarioBase <= 3701.05) {
 valorIR = (salarioBase * aliquotaIR2) - parcIR2;
} else if (salarioBase <= 4664.68) {
 valorIR = (salarioBase * aliquotaIR3) - parcIR3;
} else {
 valorIR = (salarioBase * aliquotaIR4) - parcIR4;
}

let salarioLiquido = salarioBase - valorIR;

console.log('INSS: - R$ ' + valorINSS.toFixed(2));
console.log('Salário Base: R$ ' + salarioBase.toFixed(2));
console.log('I.R.: - R$ ' + valorIR.toFixed(2));
console.log('Salário Líquido: R$ ' + salarioLiquido.toFixed(2));