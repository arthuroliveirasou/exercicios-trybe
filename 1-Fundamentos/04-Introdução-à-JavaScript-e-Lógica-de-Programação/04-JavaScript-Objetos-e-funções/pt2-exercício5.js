function mostRepeated(array) {
 let theNumber;
 let highestRepetitions = 0;
 for (let i = 0; i < array.length; i++){
  let actualNumber = array[i];
  let repetitions = 0;
  for (let ii = 0; ii < array.length; ii++) {
   if (actualNumber = array[ii]) {
    repetitions += 1;
   }
  }
  if (repetitions > highestRepetitions) {
   highestRepetitions = repetitions;
   theNumber = array[i];
  }
 }
 console.log(theNumber);
}

mostRepeated([2, 3, 2, 5, 8, 2, 3]);