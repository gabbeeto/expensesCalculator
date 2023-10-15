import { calculate } from "../calculate/calculate"
import { displayError } from "../display/error"
import { generateContentAndOpenWindow } from "../window/openWindow"
import { removeClasses } from "./../editItemOrList/selection"

document.addEventListener('keyup', escape)

function escape(event) {
  try {
    checkDialogs()
    if (event.key == "Escape") {
      selectedIndex = '';
      removeClasses();
    }
  }
  catch (error) {
    console.warn(error);
  }
}


function checkDialogs() {
  for (let dialog of document.querySelectorAll('dialog')) {
    if (dialog.open) {
      throw new Error(`dialog with id:'${dialog.id}' is open!`);
    }
  }
}




document.addEventListener('keypress', editItem)

function editItem(event) {
  console.log(event)
  try {
    checkDialogs()
    detectKeyAndPerformAction(event.key)
  }
  catch (error) {
    console.warn(error)
  }
}




function detectKeyAndPerformAction(key) {
  console.log(key)
  try {
    switch (key) {
      case "Enter":
        checkSelectedIndexToPerformAction();
        break;
      case "j":
      case "J":
        checkTypeOfCalculatorAndMoveUp()
        break;
      case 'k':
      case 'K':
        checkTypeOfCalculatorAndMoveDown()
        break;
    }
  }
  catch (error) {
    displayError(error)
  }
}

function checkSelectedIndexToPerformAction() {
  if (window.selectedIndex) {
    generateContentAndOpenWindow()
  }
  else {
    calculate()
  }

}

function checkTypeOfCalculatorAndMoveUp() {
  let selectElement = document.querySelector('#typeContainer select')
  switch (selectElement.value) {
    case 'yearly':
      break;
    case 'monthly':
      selectElement.value = 'yearly';
      break;
    case 'weekly':
      selectElement.value = 'monthly';
      break;
    case 'daily':
      selectElement.value = 'weekly';
      break;
  }
}


function checkTypeOfCalculatorAndMoveDown() {
  let selectElement = document.querySelector('#typeContainer select')
  switch (selectElement.value) {
    case 'yearly':
      selectElement.value = 'monthly';
      break;
    case 'monthly':
      selectElement.value = 'weekly';
      break;
    case 'weekly':
      selectElement.value = 'daily';
      break;
  }
}
