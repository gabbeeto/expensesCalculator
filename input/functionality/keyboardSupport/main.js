import { calculate } from "../calculate/calculate"
import { displayError } from "../display/error"
import { displayContentForType } from "../display/expenseType"
import { displayList } from "../display/itemsOrLists"
import { deleteProduct } from "../window/delete"
import { generateContentAndOpenWindow, generateContentAndOpenWindowForList, openWindow } from "../window/openWindow"
import { removeClasses } from "./../editItemOrList/selection"

document.addEventListener('keyup', escapeOrDeleteItem)

function escapeOrDeleteItem(event) {
  // console.log(event)
  try {
    checkDialogs()
    if (event.key == "Escape" && selectedIndex) {
      selectedIndex = '';
      removeClasses();
    }
    else if (event.key == 'Delete' && selectedIndex) {
      deleteProduct()
    }
    else if (event.key == 'Tab') {
      generateContentAndOpenWindowForList();
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
      case "h":
        checkTypeOfItemAndMoveUp()
        break;
      case "H":
        checkListAndMoveUp();
        break;
      case 'l':
        checkTypeOfItemAndMoveDown();
        break;
      case 'L':
        checkListAndMoveDown();
        break;
      case '`':
        openWindow(document.getElementById('addNewListPopUp'))
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


function checkTypeOfItemAndMoveUp() {
  let somethingBeingFocusedDetected = document.querySelector('input:focus');
  if (somethingBeingFocusedDetected) {
    console.warn(`it doesn't work because something is being detected`)
  }
  else {
    let selectElement = document.querySelector('article select')
    switch (selectElement.value) {
      case 'regProduct':
        selectElement.value = 'food';
        displayContentForType(selectElement.value)
        break;
      case 'product':
        selectElement.value = 'regProduct';
        displayContentForType(selectElement.value)
        break;
      case 'money':
        selectElement.value = 'product';
        displayContentForType(selectElement.value)
        break;
    }
  }
}



function checkTypeOfItemAndMoveDown() {
  let somethingBeingFocusedDetected = document.querySelector('input:focus');
  if (somethingBeingFocusedDetected) {
    console.warn(`it doesn't work because something is being detected`)
  }
  else {
    let selectElement = document.querySelector('article select')
    switch (selectElement.value) {
      case 'food':
        selectElement.value = 'regProduct';
        displayContentForType(selectElement.value)
        break;
      case 'regProduct':
        selectElement.value = 'product';
        displayContentForType(selectElement.value)
        break;
      case 'product':
        selectElement.value = 'money';
        displayContentForType(selectElement.value)
        break;
    }
  }
}


function checkListAndMoveDown() {
  let somethingBeingFocusedDetected = document.querySelector('input:focus');
  if (somethingBeingFocusedDetected) {
    console.warn(`it doesn't work because something is being detected`)
  }
  else {
    let selectElement = document.getElementById('selectList')
    let maximumNumberPossible = document.querySelectorAll('#selectList option').length - 1;
    if (Number(selectElement.value) < maximumNumberPossible) {
      selectElement.value = `${Number(selectElement.value) + 1}`;
      window.valueOfSelect = Number(selectElement.value);
      window.currentList = list[Number(selectElement.value)];
      displayList();
    }
  }
}



function checkListAndMoveUp() {
  let somethingBeingFocusedDetected = document.querySelector('input:focus');
  if (somethingBeingFocusedDetected) {
    console.warn(`it doesn't work because something is being detected`)
  }
  else {
    let selectElement = document.getElementById('selectList')
    if (Number(selectElement.value) > 0) {
      selectElement.value = Number(selectElement.value) - 1;
      window.valueOfSelect = Number(selectElement.value);
      window.currentList = list[Number(selectElement.value)];
      displayList();
    }
  }
}


