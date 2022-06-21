const storage = localStorage;
const theme = document.styleSheets[0].cssRules[0].style;
const backgroundColorValue = document.getElementById('background-selector');
const textColorValue = document.getElementById('text-color-selector');
const fontSizeValue = document.getElementById('font-size-selector');
const lineHeightValue = document.getElementById('line-height-selector');
const fontFamilyValue = document.getElementById('font-family-selector');
const themeButton = document.getElementById('confirm-btn');
const themeConfigBtn = document.styleSheets[0].cssRules[1].style;
const generalConfigs = {
  backgroundColor: ['rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
  textColorL: ['rgb(0, 0, 0)', 'rgb(170, 0, 0)', 'rgb(0, 0, 160)'],
  textColorD: ['rgb(255, 255, 255)', 'rgb(255, 100, 100)', 'rgb(0, 160, 255)'],
  fontSize: ['10px', '15px', '22px'],
  lineHeight: ['1', '1.2', '1.5'],
  fontFamily: ['serif', 'sans-serif', 'monospace'],
}

window.onload = onloadFunction;
function onloadFunction() {
  if (localStorage.length === 0) {
    saveConfigs();
  }
  applyConfigs();
}

function setTextColorValue(value) {
  let textColorNow;
  switch ( localStorage.getItem('backgroundColor')) {
    case 'rgb(255, 255, 255)':
      textColorNow = generalConfigs.textColorL[value];
      break;
    case 'rgb(0, 0, 0)':
      textColorNow = generalConfigs.textColorD[value];
      break;
  }
  return textColorNow;
}

function saveConfigs() {
  localStorage.setItem('backgroundColor', generalConfigs.backgroundColor[backgroundColorValue.value]);
  localStorage.setItem('textColor', setTextColorValue(textColorValue.value));
  localStorage.setItem('fontSize', generalConfigs.fontSize[fontSizeValue.value]);
  localStorage.setItem('lineHeight', generalConfigs.lineHeight[lineHeightValue.value]);
  localStorage.setItem('fontFamily', generalConfigs.fontFamily[fontFamilyValue.value]);
};

function applyThemeBtn() {
  themeConfigBtn.backgroundColor = localStorage.getItem('backgroundColor');
  themeConfigBtn.color = localStorage.getItem('textColor');
  themeConfigBtn.borderColor = localStorage.getItem('textColor');
}

function applyConfigs() {
  theme.backgroundColor = localStorage.getItem('backgroundColor');
  theme.color = localStorage.getItem('textColor');
  theme.fontSize = localStorage.getItem('fontSize');
  theme.lineHeight =  localStorage.getItem('lineHeight');
  theme.fontFamily = localStorage.getItem('fontFamily');
  applyThemeBtn();
}

function changeConfig() {
  saveConfigs();
  applyConfigs();
  window.open(`${location.pathname}`, '_self');
}

themeButton.addEventListener('click', changeConfig);
