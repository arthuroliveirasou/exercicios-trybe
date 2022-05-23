let info = {
 personagem: 'Margarida',
 origem: 'Pato Donald',
 nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem vinda, ' + info.personagem);

console.log();
info['recorrente'] = 'Sim';
console.log(info);

console.log();
for (let i in info) {
 console.log(i);
};

console.log();
for (let i in info) {
 console.log(info[i]);
};

let info2 = {
 personagem: 'Tio Patinhas',
 origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
 nota: 'O último MacPatinhas',
 recorrente: 'Sim',
}
console.log();
for (let key in info && info2) {
 if (key != 'recorrente') {
  console.log(info[key] + ' e ' + info2[key]);
 } else {
  if (info[key] === info2[key]) {
   console.log('Ambos ' + key + 's');
  } else {
   console.log('Pelo menos 1 não é ' + key);
  }
 }
}