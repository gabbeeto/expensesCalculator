

const calculateContainer = document.querySelector(`#resultContent`);
const calculateButton = calculateContainer.querySelector(`button`);
const calculateSpan = calculateContainer.querySelector(`span`);

calculateButton.addEventListener('click', calculate)



export function calculate() {
  let indexo = 0
  let result = currentList.array.reduce((accumulator, currentItem) => {
    indexo += 1;
    switch (currentItem.type) {
      case 'food':
        return accumulator + calculatedFood(currentItem);
      case 'regProduct':
        return accumulator + calculatedRegProduct(currentItem);
      case 'product':
      case 'money':
        return accumulator + currentItem.price;
    }
  }, 0);

  console.log(result)
  result = result * window.valueToMultiply
  calculateSpan.innerText = result.toFixed(2);
}



function calculatedFood(currentFood) {
  let priceForUnit = currentFood.price / currentFood.amountPerPrice;
  let amountOfFoodEatenPerMonthOrWeek = currentFood.amountPerDay * getProcesure(currentFood);
  let averageFood = priceForUnit * amountOfFoodEatenPerMonthOrWeek;
  return averageFood;
}

function getProcesure(currentFood) {
  if (typeOfCalculation == 'monthly') {
    return currentFood.monthAmount
  }
  else if (typeOfCalculation == 'weekly') {
    return currentFood.weekAmount
  }
  else if (typeOfCalculation == 'daily') {
    return currentFood.weekAmount / 7;
  }
  else{
    return currentFood.monthAmount * 12;
  }
}


function calculatedRegProduct(currentRegularProduct) {
  let newPrice = currentRegularProduct.price * currentRegularProduct.amountOfRegProducts
  if (typeOfCalculation == 'yearly') {
    return newPrice * currentRegularProduct.amountPerYear
  }
  else if (typeOfCalculation == 'weekly') {
    return newPrice / 4;
  }
  else if(typeOfCalculation == 'daily'){
    return newPrice / 31;
  }
  else {
    return newPrice;
  }
}
