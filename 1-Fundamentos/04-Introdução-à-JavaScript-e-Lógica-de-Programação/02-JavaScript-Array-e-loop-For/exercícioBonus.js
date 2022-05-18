let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multNumbers = [];

for (let indice = 0; indice < numbers.length; indice += 1) {
  if ((indice + 1)  < numbers.length) {
    multNumbers.push(numbers[indice] * numbers[indice + 1]);
  } else {
    multNumbers.push(numbers[indice] * 2);
  }
}

for (let index = 1; index < numbers.length; index += 1) {
 for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
   if (numbers[index] < numbers[secondIndex]) {
     let position = numbers[index];
     numbers[index] = numbers[secondIndex];
     numbers[secondIndex] = position;
   }
 }
}

let invertedNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let invIndex = 1; invIndex < invertedNumbers.length; invIndex += 1) {
 for (let invSecondIndex = 0; invSecondIndex < invIndex; invSecondIndex += 1) {
   if (invertedNumbers[invIndex] > invertedNumbers[invSecondIndex]) {
     let invPosition = invertedNumbers[invIndex];
     invertedNumbers[invIndex] = invertedNumbers[invSecondIndex];
     invertedNumbers[invSecondIndex] = invPosition;
   }
 }
}

console.log('Numbers: ' + numbers);
console.log('Inverted Numbers: ' + invertedNumbers);
console.log('Multiplied Numbers: ' + multNumbers);