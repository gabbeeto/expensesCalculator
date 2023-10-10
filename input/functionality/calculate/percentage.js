import { transformToNumber} from './../list/addItemsToList.js'

let  percentageInput = document.getElementById(`percentageIncrease`)
percentageInput.addEventListener('change', storePercentageIncrease)

function storePercentageIncrease(){
let valueOfPercentage =  transformToNumber(this.value);
window.valueToMultiply = (valueOfPercentage + 100) / 100;
}

