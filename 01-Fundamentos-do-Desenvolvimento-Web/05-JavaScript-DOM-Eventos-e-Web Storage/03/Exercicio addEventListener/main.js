const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstLi.addEventListener("click", highlightTheLine);
secondLi.addEventListener("click", highlightTheLine);
thirdLi.addEventListener("click", highlightTheLine);
function highlightTheLine(theLine) {
  let contents = document.querySelectorAll('.container li');
  for (let i = 0; i < contents.length; i += 1) {
    if (contents[i].className.includes('tech') === true) {
      contents[i].className = '';
    }
  }
 theLine.target.className += 'tech';
}
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener("input", changeFirst);

function changeFirst(text) {
  let theText = input.value;
  let lineToChange = document.getElementsByClassName('tech')[0];
  lineToChange.innerText = theText;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

myWebpage.addEventListener("dblclick", openLink)
function openLink() {
  window.open('http://arthuroliveirasou.github.io');
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseenter', changeColor);
function changeColor(element) {
  let red = getRandomInt();
  let green = getRandomInt();
  let blue = getRandomInt();
  myWebpage.style.color = `rgb(${red}, ${green}, ${blue})`;
}

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.