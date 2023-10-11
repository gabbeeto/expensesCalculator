

const calculateContainer = document.querySelector(`#resultContent`);
const calculateButton = calculateContainer.querySelector(`button`);
const calculateSpan = calculateContainer.querySelector(`span`);

calculateButton.addEventListener('click', calculate)



function calculate() {
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
  else {
    return currentFood.monthAmount * 12;
  }
}


function calculatedRegProduct(currentRegularProduct) {
  if (typeOfCalculation == 'yearly') {
    return currentRegularProduct.price * currentRegularProduct.amountPerYear
  }
  else if (typeOfCalculation == 'weekly') {
    return currentRegularProduct.price / 4;
  }
  else if(typeOfCalculation == 'daily'){
    return currentRegularProduct.price / 31;
  }
  else {
    return currentRegularProduct.price;
  }
}
