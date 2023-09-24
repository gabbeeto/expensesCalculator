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
let name = document.getElementById('name').value;
let priceForFood = document.getElementById('#price').value;
let amountPerPrice = document.getElementById('#amountPerPrice').value;
let amountPerDay = document.getElementById('#amountPerDay').value;
let weekAmount = document.getElementById('#weekAmount').value;
let monthAmount = document.getElementById('#monthAmount').value;

return new Food(name,priceForFood,amountPerPrice,amountPerDay,weekAmount,monthAmount)
}

export function calculateProduct(){
alert(`calculate product WOrks`)
}


export function calculateMoney(){
alert(`calculate money WOrks`)
}
