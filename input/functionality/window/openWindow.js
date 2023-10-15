import { generateContentForWindow, generateContentForListWindow } from './generateContentForEditWindow.js';
import { displayError } from './../display/error.js';


const editCurrentListButton = document.querySelector('#listContainer div button');
const editButton = document.querySelector('#listContainer div + button');
const addNewListButton = document.querySelector('#listContainer button:nth-of-type(2)');
const currencyButton = document.querySelector('#typeContainer button');


const addNewListDialog = document.getElementById('addNewListPopUp');
const editDialog = document.getElementById('editPopUp');
const currencyDialog = document.getElementById('currencyPopUp');



editButton.addEventListener('click', generateContentAndOpenWindow);

export function generateContentAndOpenWindow() {
  try {
    generateContentForWindow()
    openWindow(editDialog)
  }
  catch (error) {
    console.log(error);
  }
}

editCurrentListButton.addEventListener('click', generateContentAndOpenWindowForList)
function generateContentAndOpenWindowForList() {
  try {
    generateContentForListWindow()
    openWindow(editDialog)
  }
  catch (error) {
    displayError(error);
  }
}


addNewListButton.addEventListener('click', () => openWindow(addNewListDialog));
currencyButton.addEventListener('click', () => openWindow(currencyDialog));

function openWindow(dialog) {
  dialog.showModal()
}

export function addEventListenerToButtons() {
  for (let closeBtn of document.querySelectorAll('.closeBtn')) {
    closeBtn.addEventListener('click', closePopUp)
  }
}
addEventListenerToButtons()

export function closePopUp() {
  for (let dialog of document.querySelectorAll('dialog')) {
    if (dialog.open) {
      dialog.close()
    }
  }
}
