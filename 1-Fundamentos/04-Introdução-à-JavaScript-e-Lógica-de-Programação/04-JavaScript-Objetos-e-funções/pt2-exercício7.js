function verificaFimPalavra(palavra, final) {
 if (final.length < palavra.length) {
  if (palavra.slice(-final.length) === final) {
   console.log(true);
  } else {
   console.log(false);
  }
 } else {
  console.log('"' + final + '" é maior ou igual a "' + palavra + '"!');
 }
}

verificaFimPalavra('trybe', 'be');
verificaFimPalavra('joaofernando', 'fernan');