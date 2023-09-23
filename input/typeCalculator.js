import { displayContentForType} from './display/expenseType.js';


const typeSelector = document.querySelector('#leftSection > article p + select');
const typeSelect = document.querySelector('#typeContainer select');

typeSelect.addEventListener('click', changeTypeOfCalculation)

changeTypeOfCalculation();
function changeTypeOfCalculation(){

if(typeSelect.value == 'monthly'){
window.typeOfCalculation = 'monthly';
}
else{
window.typeOfCalculation = 'weekly';
}

displayContentForType(typeSelector.value);

}
