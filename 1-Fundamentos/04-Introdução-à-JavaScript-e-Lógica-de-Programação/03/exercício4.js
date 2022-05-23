let maiorPrimo = 1;
let limitNumber = 50;

for (let i = 1; i <= limitNumber; i++) {
 let zeros = 0;
 for (let ii = 1; ii <= i; ii++) {
  let resto = i % ii;
  if (resto === 0) {
   zeros += 1;
  }
 }
 if (zeros === 2) {
  maiorPrimo = i;
 }
}
console.log('O maior número primo até ' + limitNumber + ' é ' + maiorPrimo + '.');