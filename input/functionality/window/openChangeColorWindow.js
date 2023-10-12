import { displayList} from './../display/itemsOrLists.js'

const changeColorButton = document.querySelector('article:first-of-type button:first-of-type');

changeColorButton.addEventListener('click', openColorWindow)
function openColorWindow() {

  updateValuesFromColorObject()
  let colorWindow = document.getElementById('colorPopUp');
  colorWindow.showModal()

  for (let colorPicker of document.querySelectorAll(`input[type='color']`)) {
    colorPicker.addEventListener('change', updateColors)
  }
}

function updateColors() {
  if(document.querySelector('html').className == 'dark'){
  window.color.dark.food = document.querySelectorAll(`input[type='color']`)[0].value
  window.color.dark.product = document.querySelectorAll(`input[type='color']`)[1].value
  window.color.dark.regProduct = document.querySelectorAll(`input[type='color']`)[2].value
  window.color.dark.money = document.querySelectorAll(`input[type='color']`)[3].value
  }
  else{
  window.color.light.food = document.querySelectorAll(`input[type='color']`)[0].value
  window.color.light.product = document.querySelectorAll(`input[type='color']`)[1].value
  window.color.light.regProduct = document.querySelectorAll(`input[type='color']`)[2].value
  window.color.light.money = document.querySelectorAll(`input[type='color']`)[3].value
  }
  displayList()
}



function updateValuesFromColorObject() {
  if (document.querySelector('html').className == 'dark') {
    document.querySelectorAll(`input[type='color']`)[0].value = window.color.dark.food
    document.querySelectorAll(`input[type='color']`)[1].value = window.color.dark.product
    document.querySelectorAll(`input[type='color']`)[2].value = window.color.dark.regProduct
    document.querySelectorAll(`input[type='color']`)[3].value = window.color.dark.money
  }
  else {
    document.querySelectorAll(`input[type='color']`)[0].value = window.color.light.food
    document.querySelectorAll(`input[type='color']`)[1].value = window.color.light.product
    document.querySelectorAll(`input[type='color']`)[2].value = window.color.light.regProduct
    document.querySelectorAll(`input[type='color']`)[3].value = window.color.light.money
  }
}
