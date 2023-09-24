import { calculateFood, calculateMoney, calculateProduct } from './../list/calculate.js';

let selectedSection;
const typeSelector = document.querySelector('#leftSection > article p + select');

typeSelector.addEventListener('change', (event) => { displayContentForType(event.target.value) })

let expenseContentContainer = document.getElementById('expenseContent');


export function displayContentForType(targetValue) {

  switch (targetValue) {
    case 'food':
      generateFood()
      break;
    case 'product':
      generateProduct()
      break;
    case 'money':
      generateMoney()
      break;
  }
}

function generateFood() {
  expenseContentContainer.innerHTML = ` <p>name:</p>
<input type="text" id="name">
<p>price:</p>
<input type="number" inputmode='decimal' id="price">
<p>amount of food per price:</p>
<input type="text" inputmode='numeric' id="amountPerPrice">
<p>amount of food per day:</p>
<input type="text" inputmode='numeric' id="amountPerDay">
<div>
  <section>
    <p>amount of days per month: <br> <span>(you eat)</span></p>
    <input type="text" inputmode='numeric' id="weekAmount">
  </section>
  <p>or</p>
  <section>
    <p>amount of days per week: <br> <span>(you eat)</span></p>
    <input type="text" inputmode='numeric' id="monthAmount">
  </section>
<button id='apply'>apply</button>
</div>`
  document.getElementById('apply').addEventListener('click', calculateFood)

  if (window.typeOfCalculation == 'monthly') {
    selectedSection = expenseContentContainer.querySelector('section');
  }
  else {
    selectedSection = expenseContentContainer.querySelector('section:last-of-type');
  }

  selectedSection.classList.add('selected');
}


function generateProduct() {
  expenseContentContainer.innerHTML = ` <p>name:</p>
<input type="text" id="name">
<p>price:</p>
<input type="number" id="price">
<button id='apply'>apply</button>
`

  document.getElementById('apply').addEventListener('click', calculateProduct)

}

function generateMoney() {
  expenseContentContainer.innerHTML = ` <p>money:</p>
<input type="number" id="price">
<button id='apply'>apply</button>
`
  document.getElementById('apply').addEventListener('click', calculateMoney)
}
