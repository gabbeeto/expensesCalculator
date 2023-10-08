import { checkIfEmpty } from './window/generateContentForEditWindow.js'


export function generateEventListenerForInput() {
  for (let input of document.querySelectorAll(`form input[type='text']`)) {

    switch (document.querySelector('article:first-of-type select').value) {
      case 'food':
        input.addEventListener('change', checkIfFoodValid)
        break;
      case 'product':
        input.addEventListener('change', checkIfProductOrMoneyValid)
        break;
      case 'money':
        input.addEventListener('change', checkIfProductOrMoneyValid)
        break;
    }
  }
}

generateEventListenerForInput()

function checkIfFoodValid() {
  let item = this.value
  try {
    checkIfEmpty(item);
  }
  catch (error) {
    console.log(error)
  }
}


function checkIfProductOrMoneyValid() {
  let item = this.value
  try {
    checkIfEmpty(item);
  }
  catch (error) {
    console.log(error)
  }
}

