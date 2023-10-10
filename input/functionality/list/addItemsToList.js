import { pushToArrayAndDisplayList, Money, Product, Food } from './listStructure.js'
import { checkIfFoodIsEmpty, checkIfProductIsEmpty, checkIfMoneyIsEmpty } from './../window/generateContentForEditWindow.js'
import { displayError } from './../display/error.js';

export function addFoodToTheList() {
  let nameValue = document.getElementById('name').value;

  try {
    let food = {
      name: nameValue,
      price: getNumberOf('price'),
      amountPerPrice: getNumberOf('amountPerPrice'),
      amountPerDay: getNumberOf('amountPerDay'),
      weekAmount: getNumberOf('weekAmount'),
      monthAmount: getNumberOf('monthAmount'),
    }
    checkIfFoodIsEmpty(food)
    pushToArrayAndDisplayList(Food(food.name, food.price, food.amountPerPrice, food.amountPerPrice, food.weekAmount, food.monthAmount))
  }
  catch (error) {
    displayError(error)
  }
}



export function addProductToTheList() {
  let nameValue = document.getElementById('name').value;

  try {
    let product = {
      name: nameValue,
      price: getNumberOf('price')
    }
    checkIfProductIsEmpty(product)
    pushToArrayAndDisplayList(Product(product.name, product.price))
  }
  catch (error) {
    displayError(error)
  }

}


export function addMoneyToTheList() {
  try {
    let money = { price: getNumberOf('price') }
    checkIfMoneyIsEmpty(money)
    pushToArrayAndDisplayList(Money(money.price))
  }
  catch (error) {
    displayError(error)
  }
}

function getNumberOf(elementId) {
  let valueOfElement = document.getElementById(`${elementId}`).value
  return transformToNumber(valueOfElement)
}

export function transformToNumber(valueOfElement) {
  let letterRemover = /[0-9]+/g;
  let valueOfElementWithoutLetters = `${letterRemover.exec(valueOfElement)}`;

  return Number(valueOfElementWithoutLetters);
}
