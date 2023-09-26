import {Item,Money,Product, Food} from './listStructure.js'

export function calculateFood(){
switch(window.typeOfCalculation){
    case 'monthly':
     getValuesForFood()
    case 'weekly':
     getValuesForFood()

  }
}

function getValuesForFood(){
let nameValue = document.getElementById('name').value;
let priceForFoodValue = document.getElementById('price').value;
let amountPerPriceValue = document.getElementById('amountPerPrice').value;
let amountPerDayValue = document.getElementById('amountPerDay').value;
let weekAmountValue = document.getElementById('weekAmount').value;
let monthAmountValue = document.getElementById('monthAmount').value;

let regEx = /[0-9]+/g;
let priceForFoodNumber = regEx.exec(priceForFoodValue);
let amountPerPriceNumber = regEx.exec(amountPerPriceValue);
let amountPerDayNumber = regEx.exec(amountPerDayValue);
let weekAmountNumber = regEx.exec(weekAmountValue);
let monthAmountNumber =regEx.exec(monthAmountValue);


let name = document.getElementById('name').value;
let priceForFood = Number(priceForFoodNumber);
let amountPerPrice = Number(amountPerPriceNumber);
let amountPerDay = Number(amountPerDayNumber);
let weekAmount = Number(weekAmountNumber);
let monthAmount = Number(monthAmountNumber);

let newFood = new Food(name,priceForFood,amountPerPrice,amountPerDay,weekAmount,monthAmount);
  console.log(newFood)
return newFood; 
}

export function calculateProduct(){
alert(`calculate product WOrks`)
}


export function calculateMoney(){
alert(`calculate money WOrks`)
}
