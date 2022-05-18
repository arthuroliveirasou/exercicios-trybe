const buy = 2400;
const sell = 3499;
const tax = 0.2;
const cost = buy + (buy * tax);
const sales = 1000;

let profit = {};
if (buy < 0 || sell < 0 || cost < 0 ) {
 console.log('Any of the values is less than 0, check them.')
} else {
 profit = (sell - cost) * sales;
 console.log('Lucros de $' + profit)
}