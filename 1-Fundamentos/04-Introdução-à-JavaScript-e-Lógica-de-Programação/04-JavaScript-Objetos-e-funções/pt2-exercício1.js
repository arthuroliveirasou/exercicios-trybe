function verifiePalindrome(word) {
 let invWord = word.split('').reverse().join('');
 if (word === invWord) {
  console.log(true);
 } else {
  console.log(false);
 }
}

verifiePalindrome('arara');
verifiePalindrome('desenvolvimento');