//Correspondente aos itens de 1 a 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumbers = 0;
let higherNumber = numbers[0];
let smallestNumber = numbers[0];
let oddNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
 console.log((index + 1) + '- ' + numbers[index]);
 sumNumbers += numbers[index];
 if (numbers[index] > higherNumber) {
  higherNumber = numbers[index];
 };
 if (numbers[index] < higherNumber) {
  higherNumber = numbers[index];
 };
 if ((numbers[index] % 2) != 0) {
  oddNumbers.push(numbers[index]);
 };
}

let average = sumNumbers / numbers.length;
console.log ('Soma = ' + sumNumbers);
console.log('Média Aritmética: ' + average);

if (average > 20) {
 console.log('Valor maior que 20');
} else {
 console.log('Valor menor ou igual a 20');
}
console.log('Maior número: ' + higherNumber);
console.log('Menor número: ' + smallestNumber);
if (oddNumbers.length == 0) {
 console.log('Nenhum valor ímpar encontrado');
} else {
 console.log('Ímpares: ' + oddNumbers);
}
