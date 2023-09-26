import { Item, Money, Product, Food } from './listStructure.js'

export function calculateFood() {
  switch (window.typeOfCalculation) {
    case 'monthly':
      getValuesForFood()
      break;
    case 'weekly':
      getValuesForFood()
      break;
  }
}

function getValuesForFood() {
  let nameValue = document.getElementById('name').value;

  return new Food(nameValue,
    getNumberOf('price'),
    getNumberOf('amountPerPrice'),
    getNumberOf('amountPerDay'),
    getNumberOf('weekAmount'),
    getNumberOf('monthAmount'))
}


export function calculateProduct() {
  let nameValue = document.getElementById('name').value;
  return new Product(nameValue,getNumberOf('price')) 
}


export function calculateMoney() {
  return new Money(getNumberOf('price')) 
}

function getNumberOf(elementId) {
  let letterRemover = /[0-9]+/g;
  let valueOfElement = document.getElementById(`${elementId}`).value
  let valueOfElementWithoutLetters = `${letterRemover.exec(valueOfElement)}`;
  console.log(valueOfElementWithoutLetters)
  return Number(valueOfElementWithoutLetters);
}



