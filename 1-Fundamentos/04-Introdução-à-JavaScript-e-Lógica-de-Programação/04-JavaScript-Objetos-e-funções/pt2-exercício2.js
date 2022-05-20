let maior = 0;

function itemMaior(array) {
 for (let i = 1; i < array.length; i++) {
  if (array[i] > array[maior]) {
   maior = i;
  }
 }
 console.log(maior);
}

itemMaior([2, 3, 6, 7, 10, 1]);