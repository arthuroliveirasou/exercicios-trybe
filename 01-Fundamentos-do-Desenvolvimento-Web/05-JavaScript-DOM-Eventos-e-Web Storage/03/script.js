function createDaysOfTheWeek() {
 const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
 const weekDaysList = document.querySelector('.week-days');

 for (let index = 0; index < weekDays.length; index += 1) {
   const days = weekDays[index];
   const dayListItem = document.createElement('li');
   dayListItem.innerHTML = days;

   weekDaysList.appendChild(dayListItem);
 };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays(){
 for (let i = 0; i < dezDaysList.length; i += 1) {
  let newDay = document.createElement('li');
  newDay.innerText = `${dezDaysList[i]}`;
  newDay.className = 'day';
  days.appendChild(newDay);
 }
}
createDays();

const dates = document.querySelectorAll('.day');

function classifiesFridays() {
 for (let i = 5; i < dates.length; i += 7) {
  dates[i].className += ' friday';
 }
}
classifiesFridays();

let holidays = [24, 25, 31];

function classifiesHolidays() {
 for (let i = 0; i < holidays.length; i += 1) {
  for (let ii = 0; ii < dates.length; ii += 1) {
   if (holidays[i] == dates[ii].innerText) {
    dates[ii].className += ' holiday';
   }
  }
 }
}
classifiesHolidays();

function createButton(theName, theId) {
 let newButton = document.createElement('button');
 newButton.innerText = theName;
 newButton.className = theId;
 document.getElementsByClassName('buttons-container')[0].appendChild(newButton);
}
createButton('Feriados', 'btn-holiday');

let theHolidays = document.getElementsByClassName('holiday');
let holidaysActivated = false;

function setsHolidaysColor() {
 for (let i = 0; i < theHolidays.length; i += 1) {
  if (holidaysActivated === true) {
   theHolidays[i].style.backgroundColor = 'rgb(0, 255, 153)';
  } else {
   theHolidays[i].style.backgroundColor = 'rgb(238, 238, 238)';
  }
 }
}
let holidayButton = document.getElementsByClassName('btn-holiday')[0];
holidayButton.addEventListener("click", changeColorHolidays);
function changeColorHolidays() {
 if (holidaysActivated) {
  holidaysActivated = false;
 } else {
  holidaysActivated = true;
 }
 setsHolidaysColor();
}

createButton('Sexta-Feira', 'btn-friday');

let theFridays = document.getElementsByClassName('friday');
let fridaysActivated = false;

function setsFridaysText() {
 for (let i = 0; i < theFridays.length; i += 1) {
  if (fridaysActivated === true) {
   theFridays[i].innerText += ' SEXTOU!';
  } else {
   theFridays[i].innerText = theFridays[i].innerText.slice(0, -8);
  }
 }
}
let fridayButton = document.getElementsByClassName('btn-friday')[0];
fridayButton.addEventListener("click", changeTextFridays);
function changeTextFridays() {
 if (fridaysActivated) {
  fridaysActivated = false;
 } else {
  fridaysActivated = true;
 }
 setsFridaysText();
}

let theDays = document.getElementsByClassName('day');
for (let i = 0; i < theDays.length; i += 1) {
 theDays[i].addEventListener('mouseenter', highlightsDay);
 theDays[i].addEventListener('mouseleave', highlightsDay);
 theDays[i].addEventListener('click', markTheDay);
}

function highlightsDay(action) {
 if (action.type == 'mouseenter') {
  action.target.style.fontSize = '30px';
 } else {
  action.target.style.fontSize = '20px';
 }
}

function createTask(tarefa) {
 let newTask = document.createElement('span');
 newTask.innerText = tarefa;
 document.getElementsByClassName('my-tasks')[0].appendChild(newTask);
}

function createCaption(cor){
 let newCaption = document.createElement('div');
 newCaption.className = 'task';
 newCaption.style.backgroundColor = cor;
 document.getElementsByClassName('my-tasks')[0].appendChild(newCaption);
}highlightsDay

let captions = document.getElementsByClassName('task');

for (let i = 0; i < captions.length; i += 1) {
 captions[i].addEventListener("click", selectCaption);
}
function selectCaption(eventResult) {
  let theCaption = eventResult.target;
    if (theCaption.className.includes('selected') === true) {
      theCaption.className = 'task';
    }
 theCaption.className += ' selected';
}

let selectedCaption = document.getElementsByClassName('selected')[0];
let selectedColor = selectCaption.style.backgroundColor;

function markTheDay(eventResult) {
  let markedDay = eventResult.target
  let dayColor = markedDay.style.backgroundColor;
  if (dayColor === selectedColor) {
    markedDay.style.backgroundColor = 'rgb(0, 0, 0, 0)';
  } else {
    markedDay.style.backgroundColor = selectedColor;
  }
}
