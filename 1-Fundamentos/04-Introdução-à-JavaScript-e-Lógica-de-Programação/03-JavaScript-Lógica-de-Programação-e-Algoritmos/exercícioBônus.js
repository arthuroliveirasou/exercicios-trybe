let n = 7;

if (n > 1) {
 let base = '';
 let antiBase = '';
 
 //Formando as bases
 for (let i = 1; i <= n; i++) {
  base = base + '*';
  antiBase = antiBase + ' ';
 }
 //Quadrado
 for (let i = 1; i <= n; i++) {
  console.log(base);
 }
 //Triângulo retângulo 1
 console.log();
 for (let i = 1; i <= n; i++) {
  console.log(base.slice(-i))
 }
 //Triângulo retângulo 2
 console.log();
 for (let i = 1; i <= n; i++) {
  console.log(antiBase.slice(0,-i) + base.slice(-i));
 }
 //Pirâmide 1
 console.log();
 if (n % 2 != 0) {
  console.log(antiBase.slice(Math.ceil(n / 2)) + '*');
 }
 for (let i = Math.floor((n - 2) / 2); i > 0; i--) {
  console.log(antiBase.slice(-i) + base.slice(i, -i))
 }
 if (n % 2 != 0) {
  console.log(base);
 }
 //Pirâmide 2
 if (n % 2 != 0) {
  console.log();
  let space = 1;
  console.log(antiBase.slice(Math.ceil(n / 2)) + '*');
  for (let i = Math.floor((n - 2) / 2); i > 0; i--) {
   console.log(antiBase.slice(-i) + '*' + antiBase.slice(-space) + '*')
   space += 2;
  }
 }
 console.log(base);
} else {
 console.log('ERRO! O valor de n é menor que 1.');
}
