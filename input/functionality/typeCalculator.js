import { displayContentForType} from './display/expenseType.js';


const typeSelect = document.querySelector('#typeContainer select');
const typeSelector = document.querySelector('article:first-of-type select');
typeSelect.addEventListener('click', changeTypeOfCalculation)

changeTypeOfCalculation();
function changeTypeOfCalculation(){

if(typeSelect.value == 'monthly'){
window.typeOfCalculation = 'monthly';
}
else if(typeSelect.value == 'weekly'){
window.typeOfCalculation = 'weekly';
}
else{
window.typeOfCalculation = 'daily';
}

displayContentForType(typeSelector.value);
}
