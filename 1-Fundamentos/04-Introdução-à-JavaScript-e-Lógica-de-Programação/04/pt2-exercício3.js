let menor = 0;

function itemMenor(array) {
 for (let i = 1; i < array.length; i++) {
  if (array[i] < array[menor]) {
   menor = i;
  }
 }
 console.log(menor);
}

itemMenor([2, 4, 6, 7, 10, 0, -3]);