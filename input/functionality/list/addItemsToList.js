import {pushToArrayAndDisplayList, Money, Product, Food } from './listStructure.js'

export function addFoodToTheList() {
  let nameValue = document.getElementById('name').value;

  pushToArrayAndDisplayList(new Food(nameValue,
    getNumberOf('price'),
    getNumberOf('amountPerPrice'),
    getNumberOf('amountPerDay'),
    getNumberOf('weekAmount'),
    getNumberOf('monthAmount')))
}


export function addProductToTheList() {
  let nameValue = document.getElementById('name').value;
  pushToArrayAndDisplayList(new Product(nameValue, getNumberOf('price')))
}


export function addMoneyToTheList() {
  pushToArrayAndDisplayList(new Money(getNumberOf('price')))
}

function getNumberOf(elementId) {
  let valueOfElement = document.getElementById(`${elementId}`).value

   return transformToNumber(valueOfElement)
}



export function transformToNumber(valueOfElement){
  let letterRemover = /[0-9]+/g;
  let valueOfElementWithoutLetters = `${letterRemover.exec(valueOfElement)}`;
  
  return Number(valueOfElementWithoutLetters);
  }
