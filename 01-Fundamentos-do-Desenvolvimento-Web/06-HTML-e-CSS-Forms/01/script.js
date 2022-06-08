const inputs = document.getElementsByClassName('input');
const editableInputs = document.getElementsByClassName('edt-input');
const radioInputs = document.getElementsByClassName('iradio');
const checkboxInputs = document.getElementsByClassName('icheck');
const submitButton = document.getElementById('btn-submit');
const clearButton = document.getElementById('btn-clear');

function clear(){
  editableValues();
  radioMarks();
  checkboxMarks();
}
clearButton.addEventListener('click', clear);

function editableValues() {
  for(i in editableInputs) {
    editableInputs[i].value = '';
  }
}
function radioMarks() {
  for(i in radioInputs) {
    radioInputs[i].checked = false;
  }
  radioInputs[0].checked = true;
}
function checkboxMarks() {
  for(i in checkboxInputs) {
    checkboxInputs[i].checked = false;
  }
}

function submitClick(event) {
  event.preventDefault();
  validityResponse();
}
submitButton.addEventListener('click', submitClick);

function verifyValidity(){
  let validities = [];
  for(let i = 0; i < inputs.length; i += 1){
    validities.push(inputs[i].validity.valid);
  }
  return validities;
}

function validityResponse(){
  let isValid = verifyValidity();
  if(isValid) {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  } else {
    alert('Dados Inválidos');
  }
}