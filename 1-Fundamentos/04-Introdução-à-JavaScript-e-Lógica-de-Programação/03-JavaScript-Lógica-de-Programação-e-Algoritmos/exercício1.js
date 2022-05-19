let value = 10;
let fatorial = value;

for (let i = (value - 1); i > 0; i--) {
 fatorial = fatorial * i;
}

console.log(value + '! = ' + fatorial)