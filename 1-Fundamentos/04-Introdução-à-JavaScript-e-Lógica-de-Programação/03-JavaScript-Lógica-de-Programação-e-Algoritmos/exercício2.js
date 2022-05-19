let word = 'tryber';
let inWord = '';

for (let i = (word.length - 1); i >= 0; i--) {
 inWord = inWord + word[i];
}

console.log(word + ' ao contrário é ' +inWord);