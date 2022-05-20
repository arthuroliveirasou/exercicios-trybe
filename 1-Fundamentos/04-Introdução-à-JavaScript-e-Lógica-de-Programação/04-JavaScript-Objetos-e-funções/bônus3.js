function basketCount(basket) {
 let result = {};
 for (let i = 0; i < basket.length; i++) {
  let currentItem = basket[i];
  let itemCount = 0;
  for (let ii = 0; ii < basket.length; ii++) {
   if (basket[ii] === currentItem) {
    itemCount += 1;
   }
  }
  result[currentItem] = itemCount;
 }
 let response = 'Sua cesta possui:';
 for (let key in result) {
  response =response + ' ' + result[key] + ' ' + key + 's,';
 }
 response = response.slice(0,-1);
 console.log(response);
 return result;
}

let yourBasket = [
 'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
 'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
 'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
 'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
 'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
 'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
 'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
 'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
 'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
 'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
 'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
 'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
 'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
 'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
 'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
 'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
 'Banana', 'Pera', 'Abacate', 'Uva',
];

basketCount(yourBasket);