const romanValues = {
 I: 1,
 V: 5,
 X: 10,
 L: 50,
 C: 100,
 D: 500,
 M: 1000,
}

function translateRomans(romanNumber) {
 let romanArray = romanNumber.split('');
 let convertedValues = [];
 let result = 0;
 for (let i = 0; i < romanNumber.length; i++) {
  convertedValues.push(romanValues[romanArray[i]]);
 }
 for (let i = 0; i < (romanNumber.length) - 1; i++) {
  if (convertedValues[i] < convertedValues[i + 1]) {
   result -= convertedValues[i];
  } else {
   result += convertedValues[i];
  }
 }
 result += convertedValues[romanNumber.length - 1]
 console.log(result);
}

translateRomans('MMDVIII');