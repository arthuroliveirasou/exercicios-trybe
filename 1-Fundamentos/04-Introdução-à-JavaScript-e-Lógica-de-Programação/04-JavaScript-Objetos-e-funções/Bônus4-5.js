let moradores = {
 blocoUm: [
   {
     nome: 'Luiza',
     sobrenome: 'Guimarães',
     andar: 10,
     apartamento: 1005,
   },
   {
     nome: 'William',
     sobrenome: 'Albuquerque',
     andar: 5,
     apartamento: 502,
   },
 ],
 blocoDois: [
   {
     nome: 'Murilo',
     sobrenome: 'Ferraz',
     andar: 8,
     apartamento: 804,
   },
   {
     nome: 'Zoey',
     sobrenome: 'Brooks',
     andar: 1,
     apartamento: 101,
   },
 ],
};

let ultimoMoradorBDois = moradores.blocoDois.length - 1;
console.log('O morador do bloco 2 de nome ' + moradores.blocoDois[ultimoMoradorBDois].nome + ' ' + moradores.blocoDois[ultimoMoradorBDois].sobrenome + ' mora no ' + moradores.blocoDois[ultimoMoradorBDois].andar + 'º andar, apartamento ' + moradores.blocoDois[ultimoMoradorBDois].apartamento);

for(let i = 0; i < moradores.blocoUm.length; i++) {
 console.log(moradores.blocoUm[i].nome + ' ' + moradores.blocoUm[i].sobrenome);
}

for(let i = 0; i < moradores.blocoDois.length; i++) {
 console.log(moradores.blocoDois[i].nome + ' ' + moradores.blocoDois[i].sobrenome);
}
