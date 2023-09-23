const typeSelector = document.querySelector('#leftSection > article p + select');

typeSelector.addEventListener('change',(event)=>{displayContentForType(event.target.value)})

let expenseContentContainer = document.getElementById('expenseContent');

displayContentForType(typeSelector.value);

export function displayContentForType(targetValue) {

switch(targetValue){
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

function generateFood(){
expenseContentContainer.innerHTML =` <p>name:</p>
<input type="text" id="name">
<p>price:</p>
<input type="number" id="price">
<p>amount of food per price:</p>
<input type="number" id="price">
<p>amount of food per day:</p>
<input type="number" id="price">
<div>
  <section>
    <p>amount of days per month: <br> <span>(you eat)</span></p>
    <input type="number" id="price">
  </section>
  <p>or</p>
  <section>
    <p>amount of days per week: <br> <span>(you eat)</span></p>
    <input type="number" id="price">
  </section>
</div>
    `
}


function generateProduct(){
expenseContentContainer.innerHTML =` <p>name:</p>
<input type="text" id="name">
<p>price:</p>
<input type="number" id="price">`
}

function generateMoney(){
expenseContentContainer.innerHTML =` <p>money:</p>
<input type="number" id="price">`
}
