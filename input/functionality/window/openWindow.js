import { generateContentForWindow,generateContentForListWindow } from './generateContentForEditWindow.js';


const editCurrentListButton = document.querySelector('#listContainer button');
const editButton = document.querySelector('#listContainer button:nth-of-type(2)');
const addNewListButton = document.querySelector('#listContainer button:nth-of-type(3)');

const addNewListDialog = document.getElementById('addNewListPopUp');
const editDialog = document.getElementById('editPopUp');



editButton.addEventListener('click', generateContentAndOpenWindow);

function generateContentAndOpenWindow() {
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
    console.log(error);
  }
}


addNewListButton.addEventListener('click', () => openWindow(addNewListDialog));

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
