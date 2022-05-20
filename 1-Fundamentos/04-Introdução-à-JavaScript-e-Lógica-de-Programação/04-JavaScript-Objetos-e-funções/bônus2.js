function arrayOfNumbers(vector) {
 let result =[];
 for (let i = 0; i < vector.length; i++) {
  let currentChild = vector[i];
  for (let ii = 0; ii < currentChild.length; ii++) {
   if (currentChild[ii] % 2 === 0) {
    result.push(currentChild[ii]);
   }
  }
 }
 console.log(result);
}

arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]])