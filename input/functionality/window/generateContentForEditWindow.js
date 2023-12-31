import { addEventListenerToButtons, closePopUp } from './openWindow.js';
import { transformToNumber } from './../list/addItemsToList.js';
import { Food, Product, RegProduct, Money } from './../list/listStructure.js';
import { displayList } from './../display/itemsOrLists.js';
import { displayError } from './../display/error.js';
import { deleteProduct } from './delete.js';

const dialog = document.getElementById('editPopUp');


export function generateContentForWindow() {
  if (window.selectedIndex) {
    generateContentForDialogForItems()
    addEventListenerToButtons()
  } else {
    throw new Error(`you haven't selected anything`)
  }
}

export function generateContentForListWindow() {
  generateContentForDialogForLists()
  addEventListenerToButtons()
}


function generateContentForDialogForItems() {
  let item = currentList.array[selectedIndex];
  let selectedList = list[selectedIndex];
  switch (item.type) {
    case 'food':
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
        <button type='button' id='delete'>delete</button>
        <button type='button' id='apply'>apply</button>`;
      break;
    case 'product':
      dialog.innerHTML = `<button class='closeBtn'>close</button>
        <p>name:</p>
        <input value='${item.name}'type="text" id="name">
        <p>price:</p>
        <input value='${item.price}' type="text" inputmode='decimal' id="price">
        <button type='button' id='delete'>delete</button>
        <button type='button' id='apply'>apply</button>`;
      break;
    case 'regProduct':
      dialog.innerHTML = `<button class='closeBtn'>close</button>
        <p>name:</p>
        <input value='${item.name}'type="text" id="name">
        <p>price:</p>
        <input value='${item.price}' type="text" inputmode='decimal' id="price">
        <p>amount of products:</p>
        <input type="text" inputmode='numeric' id="amountOfRegProducts" value='${item.amountOfRegProducts}' required>
        <p>amount of months per year:</p>
        <input type="text" inputmode='numeric' id="amountPerYear" value='${item.amountPerYear}' required>
        <button type='button' id='delete'>delete</button>
        <button type='button' id='apply'>apply</button>`;
      break;
    case 'money':
      dialog.innerHTML = `<button class='closeBtn'>close</button>
        <p>price:</p>
        <input value='${item.price}' type="text" inputmode='decimal' id="price">
        <button type='button' id='delete'>delete</button>
        <button type='button' id='apply'>apply</button>`;
      break;
  }
  let applyButton = dialog.querySelector('#apply');
  applyButton.addEventListener('click', applyChangesForItems);


  let deleteButton = dialog.querySelector('#delete');
  deleteButton.addEventListener('click', deleteProduct)
}

function generateContentForDialogForLists() {

  dialog.innerHTML = `<button class='closeBtn'>close</button>
        <p>name:</p>
        <input value='${currentList.name}'type="text" id="name">
        <button type='button' id='delete'>delete list</button>
        <button type='button' id='apply'>apply</button>`;

  // not using getElementById because you can't select inside the dialog property with getElementById
  let applyButton = dialog.querySelector('#apply');
  let deleteButton = dialog.querySelector('#delete');
  applyButton.addEventListener('click', applyChangesForLists);
  deleteButton.addEventListener('click', deleteList);
}

function applyChangesForItems() {
  let item = currentList.array[selectedIndex];
  switch (item.type) {
    case 'food':
      runPromiseToApplyValue(getValuesFromFoodInputs, getValuesForFood, checkIfFoodIsEmpty, reassingValueFromCurrentIndexIfItsAFood, true);
      break;
    case 'product':
      runPromiseToApplyValue(getValuesFromProductInputs, getValuesForProduct, checkIfProductIsEmpty, reassingValueFromCurrentIndexIfItsAProduct);
      break;
    case 'regProduct':
      runPromiseToApplyValue(getValuesFromRegProductInputs, getValuesForRegProduct, checkIfRegProductIsEmpty, reassingValueFromCurrentIndexIfItsARegProduct);
      break;
    case 'money':
      runPromiseToApplyValue(getValuesFromMoneyInputs, getValuesForMoney, checkIfMoneyIsEmpty, reassingValueFromCurrentIndexIfItsMoney);
      break;
  }
}

function runPromiseToApplyValue(getValuesFromInput_callback, getValuesFor_callBack, checkIfItemIsEmpty_callBack, reassingValueFromCurrentIndexIfItsA_callBack, workingWithFood = false,) {
  window.workingWithFood = workingWithFood;
  // remember to add validity in the catch in all of these 
  getValuesFromInput_callback()
    .then(getValuesFor_callBack)
    .then(checkIfItemIsEmpty_callBack)
    .then(makeWeeksOrMonthsValid)
    .then(reassingValueFromCurrentIndexIfItsA_callBack)
    .then(displayList)
    .then(closePopUp)
    .catch(error => displayError(error));
}


async function getValuesFromFoodInputs() {
  let name = dialog.querySelector('#name').value;
  let price = dialog.querySelector('#price').value;
  let amountPerPrice = dialog.querySelector('#amountPerPrice').value;
  let amountPerDay = dialog.querySelector('#amountPerDay').value;
  let monthAmount = dialog.querySelector('#monthAmount').value;
  let weekAmount = dialog.querySelector('#weekAmount').value;
  return { name, price, amountPerPrice, amountPerDay, monthAmount, weekAmount };
}

async function getValuesFromProductInputs() {
  let name = dialog.querySelector('#name').value;
  let price = dialog.querySelector('#price').value;
  return { name, price };
}

async function getValuesFromRegProductInputs() {
  let name = dialog.querySelector('#name').value;
  let price = dialog.querySelector('#price').value;
  let amountPerYear = dialog.querySelector('#amountPerYear').value;
  let amountOfRegProducts = dialog.querySelector('#amountOfRegProducts').value;
  return { name, price, amountPerYear, amountOfRegProducts };
}

async function getValuesFromMoneyInputs() {
  let price = dialog.querySelector('#price').value;
  return { price };
}



function getValuesForFood(food) {
  let name = food.name;
  let price = transformToNumber(food.price);
  let amountPerPrice = transformToNumber(food.amountPerPrice);
  let amountPerDay = transformToNumber(food.amountPerDay);
  let monthAmount = transformToNumber(food.monthAmount);
  let weekAmount = transformToNumber(food.weekAmount);
  return { name, price, amountPerPrice, amountPerDay, monthAmount, weekAmount }
}

function getValuesForProduct(product) {
  let name = product.name;
  let price = transformToNumber(product.price);
  return { name, price }
}


function getValuesForRegProduct(product) {
  let name = product.name;
  let price = transformToNumber(product.price);
  let amountPerYear = transformToNumber(product.amountPerYear);
  let amountOfRegProducts = transformToNumber(product.amountOfRegProducts);
  return { name, price, amountPerYear, amountOfRegProducts }
}


function getValuesForMoney(money) {
  let price = transformToNumber(money.price);
  return { price }
}





export function checkIfFoodIsEmpty(food) {
  // check emptyness 
  checkIfEmpty(food.name, 'the name of the food');
  checkIfEmpty(food.price, 'the price of the food');
  checkIfEmpty(food.amountPerPrice, 'the amount of food per price');
  checkIfEmpty(food.amountPerDay, 'the amount of food per day');
  checkIfEitherMonthOrWeekIsEmpty(food.weekAmount, food.monthAmount);

  limitNumber(food.weekAmount, 7, 'weeks can only be 7 days longs')
  limitNumber(food.monthAmount, 31, 'months can only be 31 days long')

  return { name: food.name, price: food.price, amountPerPrice: food.amountPerPrice, amountPerDay: food.amountPerDay, weekAmount: food.weekAmount, monthAmount: food.monthAmount }
}
function checkIfEitherMonthOrWeekIsEmpty(week, month) {
  if (checkWithoutError(week, 'week') && checkWithoutError(month, 'month')) {
    throw new Error(`you haven't filled neither the amount of days per week nor the amount of days per the month`)
  }
}


function checkWithoutError(item, name) {
  if (`${item}` == 'NaN') {
    return `you didn't fill the ${name}`;
  }
  else if (!`${item}`) {
    return `you didn't fill the ${name}`;
  }
  else {
    return ''
  }

}

function limitNumber(numberToCheck, limit, message) {
  if (Number(numberToCheck) > Number(limit)) {
    throw new Error(message);
  }
}


export function checkIfProductIsEmpty(product) {
  // check emptyness 
  checkIfEmpty(product.name, 'the name of the product');
  checkIfEmpty(product.price, 'the price of the product');

  return { name: product.name, price: product.price }
}


export function checkIfRegProductIsEmpty(product) {
  // check emptyness 
  checkIfEmpty(product.name, 'the name of the product');
  checkIfEmpty(product.price, 'the price of the product');
  checkIfEmpty(product.amountPerYear, 'the amount of months per year of the product');
  checkIfEmpty(product.amountOfRegProducts, 'the amount of product');

  return { name: product.name, price: product.price, amountPerYear: product.amountOfRegProducts, amountOfRegProducts: product.amountOfRegProducts }
}


export function checkIfMoneyIsEmpty(money) {
  // check emptyness 
  checkIfEmpty(money.price, 'any money');

  return { price: money.price }
}


export function checkIfEmpty(element, nameOfElementForEmptyMessage) {
  if (`${element}` == 'NaN') {
    throw new Error(`you didn't fill ${nameOfElementForEmptyMessage}`);
  }
  else if (!`${element}`) {
    throw new Error(`you didn't fill ${nameOfElementForEmptyMessage}`);
  }
}



function makeWeeksOrMonthsValid(food) {
  if (window.workingWithFood) {

    let item = currentList.array[selectedIndex];
    // check if the week or the month is false
    let weekEqual = false;
    let monthEqual = false;
    if (item.weekAmount == food.weekAmount) {
      weekEqual = true;
    }
    if (item.monthAmount == food.monthAmount) {
      monthEqual = true;
    }

    // change the other value if one of those is false but the other one is true
    if (weekEqual == true && monthEqual == false) {
      food.weekAmount = parseInt(food.monthAmount / 4)
    }
    else if (weekEqual == false && monthEqual == true) {
      food.monthAmount = parseInt(food.weekAmount * 4)
    }

    return { name: food.name, price: food.price, amountPerPrice: food.amountPerPrice, amountPerDay: food.amountPerDay, weekAmount: food.weekAmount, monthAmount: food.monthAmount }


  }
  else {
    return food;
  }
}





function reassingValueFromCurrentIndexIfItsAFood(food) {
  currentList.array[selectedIndex] = Food(food.name, food.price, food.amountPerPrice, food.amountPerDay, food.weekAmount, food.monthAmount)
}

function reassingValueFromCurrentIndexIfItsAProduct(product) {
  currentList.array[selectedIndex] = Product(product.name, product.price)
}

function reassingValueFromCurrentIndexIfItsARegProduct(product) {
  let { name, price, amountPerYear, amountOfRegProducts } = product;
  currentList.array[selectedIndex] = RegProduct(name, price, amountPerYear, amountOfRegProducts)
}


function reassingValueFromCurrentIndexIfItsMoney(money) {
  currentList.array[selectedIndex] = Money(money.price)
}




function applyChangesForLists() {
  let name = dialog.querySelector('#name').value;
  currentList.name = name;
  displayList()
  closePopUp()
}


function deleteList() {
  try {
    let listSelect = document.getElementById('selectList');
    let listIndex = Number(listSelect.value);
    if (window.list.length == 1) {
      throw new Error(`you can't delete this because it's the only list`)
    }
    window.list.splice(listIndex, 1)
    listSelect.value = 0;
    displayList()
    closePopUp()
  }
  catch (error) {
    displayError(error)
  }
}
