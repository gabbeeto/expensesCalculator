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
let priceForFood = Number(document.getElementById('#price').value);
let amountPerPrice = Number(document.getElementById('#amountPerPrice').value);
let amountPerDay = Number(document.getElementById('#amountPerDay').value);
let weekAmount = Number(document.getElementById('#weekAmount').value);
let monthAmount = Number(document.getElementById('#monthAmount').value);

return new Food(name,priceForFood,amountPerPrice,amountPerDay,weekAmount,monthAmount)
}

export function calculateProduct(){
alert(`calculate product WOrks`)
}


export function calculateMoney(){
alert(`calculate money WOrks`)
}
