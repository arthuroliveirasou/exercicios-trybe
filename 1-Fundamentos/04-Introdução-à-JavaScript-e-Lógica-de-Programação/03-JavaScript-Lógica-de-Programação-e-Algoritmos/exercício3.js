let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = [];
let smallestWord = [];

for (let i = 0; i < array.length; i++) {
 if (array[i].length > biggestWord.length) {
  biggestWord = array[i];
 }
}
console.log('A maior palavra é: ' + biggestWord);

for (let i = 0; i < array.length; i++) {
 if (smallestWord.length === 0) {
  smallestWord = array[0];
 }
 if (array[i].length < smallestWord.length) {
  smallestWord = array[i];
 }
}
console.log('A menor palavra é: ' + smallestWord);