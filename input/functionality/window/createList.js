import { addEventListenerToButtons } from './openWindow.js'
const dialog = document.getElementById('editPopUp');

export function createList() {
  if (window.selectedIndex) {
    generateContentForDialog()
    addEventListenerToButtons()
  } else {
    throw new Error(`you haven't selected anything`)
  }
}

function generateContentForDialog() {
  let typeOfList = document.querySelector('#itemOrListContainer').value;
  let item = currentList.array[selectedIndex];

  if (typeOfList == 'item') {
    dialog.innerHTML = `
<button class='closeBtn'>close</button>
<p>name:</p>
<input value='${item.name}'type="text" id="name">
<p>price:</p>
<input value='${item.price}' type="text" inputmode='decimal' id="price">
<p>amount of food per price:</p>
<input  value='${item.amountPerPrice}' type="text" inputmode='numeric' id="amountPerPrice">
<p>amount of food per day:</p>
<input   value='${item.amountPerDay}' type="text" inputmode='numeric' id="amountPerDay">
<div>
  <section>
    <p>amount of days per month: <br> <span>(you eat)</span></p>
    <input value='${item.monthAmount}' type="text" inputmode='numeric' id="monthAmount">
  </section>
  <p>or</p>
  <section>
    <p>amount of days per week: <br> <span>(you eat)</span></p>
    <input value='${item.weekAmount}' type="text" inputmode='numeric' id="weekAmount">
  </section>
</div>
<button type='button' id='apply'>apply</button>
`
let applyButton = dialog.querySelector('#apply');
applyButton.addEventListener('click', applyChanges);
  }
}

function applyChanges(){
alert('changes are being apppliieid');
}
