const a1 = -30;
const a2 = 45;
const a3 = 105;

if (a1 < 0 || a2 < 0 || a3 < 0) {
 console.log('invalid angle');
} else if (a1 + a2 + a3 === 180) {
 console.log(true);
} else {
 console.log(false);
}