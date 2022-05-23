function maiorNome(array) {
 let maior = 0;
 for (let i = 1; i < array.length; i++) {
  if (array[i].length > array[maior].length) {
   maior = i;
  }
 }
 console.log(array[maior]);
}

maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);