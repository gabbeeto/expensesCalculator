import { displayError } from "../display/error"
import { generateContentAndOpenWindow } from "../window/openWindow"
import { removeClasses } from "./../editItemOrList/selection"

document.addEventListener('keypress', editItem)
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


function checkDialogs() {
  for (let dialog of document.querySelectorAll('dialog')) {
    if (dialog.open) {
      throw new Error(`dialog with id:'${dialog.id}' is open!`);
    }
  }
}


function detectKeyAndPerformAction(key) {
  console.log(key)
  try {
    switch (key) {
      case "Enter":
        checkSelectedIndexToPerformAction();
        break

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


}
