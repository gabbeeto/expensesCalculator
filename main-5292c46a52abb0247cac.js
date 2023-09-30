/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./input/functionality/calculate/calculate.js":
/*!****************************************************!*\
  !*** ./input/functionality/calculate/calculate.js ***!
  \****************************************************/
/***/ (() => {



const calculateContainer = document.querySelector(`#resultContent`);
const calculateButton = calculateContainer.querySelector(`button`);
const calculateSpan = calculateContainer.querySelector(`span`);

calculateButton.addEventListener('click', calculate)



function calculate() {

let result =  currentList.array.reduce((accumulator, currentItem) => {
    switch (currentItem.type) {
      case 'food':
        return accumulator + calculatedFood(currentItem);
      case 'product':
      case 'money':
        return accumulator + currentItem.price(currentItem);
    }
  }, 0);

calculateSpan.innerText = result;
}



function calculatedFood(currentFood) {
  let priceForUnit = currentFood.price / currentFood.amountPerPrice;
  let amountOfFoodEatenPerMonthOrWeek = currentFood.amountPerDay * getProcesure(currentFood);
  let averageFood = priceForUnit * amountOfFoodEatenPerMonthOrWeek;
  return averageFood;
}

function getProcesure(currentFood){
if (typeOfCalculation == 'monthly') {
return currentFood.monthAmount
}
else {
return currentFood.weekAmount
}
}


/***/ }),

/***/ "./input/functionality/display/expenseType.js":
/*!****************************************************!*\
  !*** ./input/functionality/display/expenseType.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayContentForType: () => (/* binding */ displayContentForType)
/* harmony export */ });
/* harmony import */ var _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../list/addItemsToList.js */ "./input/functionality/list/addItemsToList.js");


let selectedSection;
const typeSelector = document.querySelector('article:first-of-type select');

typeSelector.addEventListener('change', (event) => { displayContentForType(event.target.value) })

let expenseContentContainer = document.querySelector('#expenseContent form');


function displayContentForType(targetValue) {

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
<input type="text" inputmode='decimal' id="price">
<p>amount of food per price:</p>
<input type="text" inputmode='numeric' id="amountPerPrice">
<p>amount of food per day:</p>
<input type="text" inputmode='numeric' id="amountPerDay">
<div>
  <section>
    <p>amount of days per month: <br> <span>(you eat)</span></p>
    <input type="text" inputmode='numeric' id="monthAmount">
  </section>
  <p>or</p>
  <section>
    <p>amount of days per week: <br> <span>(you eat)</span></p>
    <input type="text" inputmode='numeric' id="weekAmount">
  </section>
</div>
<button type='button' id='apply'>apply</button>
`

  document.getElementById('apply').addEventListener('click', _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_0__.addFoodToTheList)

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
<input type="text" inputmode='numeric' id="price">
<button type='button' id='apply'>apply</button>
`

  document.getElementById('apply').addEventListener('click', _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_0__.addProductToTheList)

}

function generateMoney() {
  expenseContentContainer.innerHTML = ` <p>money:</p>
<input type="text" inputmode='numeric' id="price">
<button type='button' id='apply'>apply</button>`
  document.getElementById('apply').addEventListener('click', _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_0__.addMoneyToTheList)
}


/***/ }),

/***/ "./input/functionality/display/itemsOrLists.js":
/*!*****************************************************!*\
  !*** ./input/functionality/display/itemsOrLists.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayList: () => (/* binding */ displayList)
/* harmony export */ });
/* harmony import */ var _editItemOrList_selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../editItemOrList/selection.js */ "./input/functionality/editItemOrList/selection.js");


const container = document.getElementById('list');
const select = document.getElementById('itemOrListContainer');
select.addEventListener('change', displayList)

function displayList() {
  const itemOrListContainer = document.getElementById('itemOrListContainer')
  container.innerHTML = '';

  if (itemOrListContainer.value == 'item') {
    currentList.array.forEach(appendItems)
  }
  else {
    list.forEach(appendLists)
  }
}

function appendItems(item, currentListOfItemsIndex) {
  let li = document.createElement('li');
  li.addEventListener('click', _editItemOrList_selection_js__WEBPACK_IMPORTED_MODULE_0__.selectDiv)
  let nameText = document.createElement('p');
  nameText.innerText = item.name;
  nameText.style.color = item.color();
  nameText.dataset.index = currentListOfItemsIndex;
  container.append(li);
  li.append(nameText);
}



function appendLists(list, currentListofListsIndex) {
  let li = document.createElement('li');
  li.addEventListener('click', _editItemOrList_selection_js__WEBPACK_IMPORTED_MODULE_0__.selectDiv)
  let nameText = document.createElement('p');
  nameText.innerText = list.name;
  nameText.dataset.index = currentListofListsIndex;
  container.append(li);
  li.append(nameText);
}


/***/ }),

/***/ "./input/functionality/editItemOrList/selection.js":
/*!*********************************************************!*\
  !*** ./input/functionality/editItemOrList/selection.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectDiv: () => (/* binding */ selectDiv)
/* harmony export */ });
function selectDiv(event) {
  if (event.target.dataset.index) {
    window.selectedIndex = event.target.dataset.index
    selectParent(event)
  }
}




function selectParent(event){
let parent = event.target.parentNode;
let selectedItems = document.querySelectorAll('.selectedItem');
selectedItems.forEach( element => element.classList.remove('selectedItem'));
parent.classList.add('selectedItem');
}



/***/ }),

/***/ "./input/functionality/list/addItemsToList.js":
/*!****************************************************!*\
  !*** ./input/functionality/list/addItemsToList.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFoodToTheList: () => (/* binding */ addFoodToTheList),
/* harmony export */   addMoneyToTheList: () => (/* binding */ addMoneyToTheList),
/* harmony export */   addProductToTheList: () => (/* binding */ addProductToTheList),
/* harmony export */   transformToNumber: () => (/* binding */ transformToNumber)
/* harmony export */ });
/* harmony import */ var _listStructure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listStructure.js */ "./input/functionality/list/listStructure.js");


function addFoodToTheList() {
  let nameValue = document.getElementById('name').value;

  (0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)(new _listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Food(nameValue,
    getNumberOf('price'),
    getNumberOf('amountPerPrice'),
    getNumberOf('amountPerDay'),
    getNumberOf('weekAmount'),
    getNumberOf('monthAmount')))
}


function addProductToTheList() {
  let nameValue = document.getElementById('name').value;
  (0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)(new _listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Product(nameValue, getNumberOf('price')))
}


function addMoneyToTheList() {
  (0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)(new _listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Money(getNumberOf('price')))
}

function getNumberOf(elementId) {
  let valueOfElement = document.getElementById(`${elementId}`).value

   return transformToNumber(valueOfElement)
}



function transformToNumber(valueOfElement){
  let letterRemover = /[0-9]+/g;
  let valueOfElementWithoutLetters = `${letterRemover.exec(valueOfElement)}`;
  
  return Number(valueOfElementWithoutLetters);
  }


/***/ }),

/***/ "./input/functionality/list/listStructure.js":
/*!***************************************************!*\
  !*** ./input/functionality/list/listStructure.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Food: () => (/* binding */ Food),
/* harmony export */   Money: () => (/* binding */ Money),
/* harmony export */   Product: () => (/* binding */ Product),
/* harmony export */   pushToArrayAndDisplayList: () => (/* binding */ pushToArrayAndDisplayList)
/* harmony export */ });
/* harmony import */ var _display_expenseType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../display/expenseType.js */ "./input/functionality/display/expenseType.js");
/* harmony import */ var _display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../display/itemsOrLists.js */ "./input/functionality/display/itemsOrLists.js");



// class section
class Item {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }

  color(color = 'black') {
    return color
  }

  changeColor(selectedColor) {
    console.log(this)
    this.color = (color = selectedColor) => { return selectedColor };
  }
}

class Money extends Item {
  constructor(price, name = price , type) {
    super(type = 'money', price)
    this.name = name;
  }

  color(color = 'green') {
    return color;
  }
}


class Product extends Item {
  constructor(name, price, type) {
    super(type = 'product', price)
    this.name = name;
  }

  color(color = 'blue') {
    return color
  }

}


class Food extends Item {
  constructor(name, price, amountPerPrice, amountPerDay, weekAmount, monthAmount, type) {
    super(type = 'food', price)
    this.name = name;
    this.amountPerPrice = amountPerPrice;
    this.amountPerDay = amountPerDay;
    if (weekAmount) {
      this.weekAmount = weekAmount;
    }
    else {
      this.weekAmount = parseInt(monthAmount / 4);
    }

    if (monthAmount){
      this.monthAmount = monthAmount;
    }
    else{
      this.monthAmount = parseInt(weekAmount * 4);
    }
  }


  color(color = 'yellow') {
    return color
  }
}

function List(name,array = []){
  return {array,name}
}


// list section
window.currentList = new List('default');
window.list = [currentList];




// function to push to array section

function pushToArrayAndDisplayList(el) {
  currentList.array.push(el);
  (0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_1__.displayList)()
  ;(0,_display_expenseType_js__WEBPACK_IMPORTED_MODULE_0__.displayContentForType)()
}



// color section

const colorInput = document.querySelector(`input[type='color']`)
colorInput.addEventListener('change', updateColor)
function updateColor(event) {
  let select = document.querySelector('article:first-of-type select').value
  switch (select) {
    case 'food':
      Food.prototype.changeColor(event.target.value);
      break;
    case 'product':
      Product.prototype.changeColor(event.target.value);
      break;
    case 'money':
      Money.prototype.changeColor(event.target.value);
      break;
  }
}


/***/ }),

/***/ "./input/functionality/typeCalculator.js":
/*!***********************************************!*\
  !*** ./input/functionality/typeCalculator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_expenseType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/expenseType.js */ "./input/functionality/display/expenseType.js");



const typeSelect = document.querySelector('#typeContainer select');
const typeSelector = document.querySelector('article:first-of-type select');
typeSelect.addEventListener('click', changeTypeOfCalculation)

changeTypeOfCalculation();
function changeTypeOfCalculation(){

if(typeSelect.value == 'monthly'){
window.typeOfCalculation = 'monthly';
}
else{
window.typeOfCalculation = 'weekly';
}

(0,_display_expenseType_js__WEBPACK_IMPORTED_MODULE_0__.displayContentForType)(typeSelector.value);

}


/***/ }),

/***/ "./input/functionality/window/createList.js":
/*!**************************************************!*\
  !*** ./input/functionality/window/createList.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createList: () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _openWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openWindow.js */ "./input/functionality/window/openWindow.js");
/* harmony import */ var _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../list/addItemsToList.js */ "./input/functionality/list/addItemsToList.js");
/* harmony import */ var _list_listStructure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../list/listStructure.js */ "./input/functionality/list/listStructure.js");
/* harmony import */ var _display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../display/itemsOrLists.js */ "./input/functionality/display/itemsOrLists.js");





const dialog = document.getElementById('editPopUp');

function createList() {
  if (window.selectedIndex) {
    generateContentForDialog()
    ;(0,_openWindow_js__WEBPACK_IMPORTED_MODULE_0__.addEventListenerToButtons)()
  } else {
    throw new Error(`you haven't selected anything`)
  }
}

function generateContentForDialog() {
  let typeOfList = document.querySelector('#itemOrListContainer').value;
  let item = currentList.array[selectedIndex];
  let selectedList = list[selectedIndex];
  if (typeOfList == 'item') {
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
        <button type='button' id='apply'>apply</button>`;
        break;
      case 'product':
        dialog.innerHTML = `<button class='closeBtn'>close</button>
        <p>name:</p>
        <input value='${item.name}'type="text" id="name">
        <p>price:</p>
        <input value='${item.price}' type="text" inputmode='decimal' id="price">
        <button type='button' id='apply'>apply</button>`;
        break;
      case 'money':
        dialog.innerHTML = `<button class='closeBtn'>close</button>
        <p>price:</p>
        <input value='${item.price}' type="text" inputmode='decimal' id="price">
        <button type='button' id='apply'>apply</button>`;
        break;
    }
    let applyButton = dialog.querySelector('#apply');
    applyButton.addEventListener('click', applyChangesForItems);
  }
  else {
    dialog.innerHTML = `<button class='closeBtn'>close</button>
        <p>name:</p>
        <input value='${selectedList.name}'type="text" id="name">
        <button type='button' id='apply'>apply</button>`;

    let applyButton = dialog.querySelector('#apply');
    applyButton.addEventListener('click', applyChangesForLists);
  }

}

function applyChangesForItems() {
  let item = currentList.array[selectedIndex];
  switch (item.type) {
    case 'food':
      getValuesFromFoodInputs()
        .then(getValuesForFood)
        .then(checkIfFoodIsEmpty)
        .then(makeWeeksOrMonthsValid)
        .then(reassingValueFromCurrentIndexIfItsAFood)
        .then(_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_3__.displayList)
        .then(_openWindow_js__WEBPACK_IMPORTED_MODULE_0__.closePopUp)
        .catch(error => console.log(error));
      break;
    case 'product':
      getValuesFromProductInputs()
        .then(getValuesForProduct)
        .then(checkIfProductIsEmpty)
        .then(reassingValueFromCurrentIndexIfItsAProduct)
        .then(_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_3__.displayList)
        .then(_openWindow_js__WEBPACK_IMPORTED_MODULE_0__.closePopUp)
        .catch(error => alert(error));
      break;
    case 'money':
      getValuesFromMoneyInputs()
        .then(getValuesForMoney)
        .then(checkIfMoneyIsEmpty)
        .then(reassingValueFromCurrentIndexIfItsMoney)
        .then(_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_3__.displayList)
        .then(_openWindow_js__WEBPACK_IMPORTED_MODULE_0__.closePopUp)
        .catch(error => alert(error));
      break;

  }
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


async function getValuesFromMoneyInputs() {
  let price = dialog.querySelector('#price').value;
  return { price };
}



function getValuesForFood(food) {
  let name = food.name;
  let price = (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__.transformToNumber)(food.price);
  let amountPerPrice = (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__.transformToNumber)(food.amountPerPrice);
  let amountPerDay = (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__.transformToNumber)(food.amountPerDay);
  let monthAmount = (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__.transformToNumber)(food.monthAmount);
  let weekAmount = (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__.transformToNumber)(food.weekAmount);
  return { name, price, amountPerPrice, amountPerDay, monthAmount, weekAmount }
}

function getValuesForProduct(product) {
  let name = product.name;
  let price = (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__.transformToNumber)(product.price);
  return { name, price }
}


function getValuesForMoney(money) {
  let price = (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__.transformToNumber)(money.price);
  return { price }
}





function checkIfFoodIsEmpty(food) {
  // check emptyness 
  checkIfEmpty(food.name, 'the name of the food');
  checkIfEmpty(food.price, 'the price of the food');
  checkIfEmpty(food.amountPerPrice, 'the amount of food per price');
  checkIfEmpty(food.amountPerDay, 'the amount of food per day');
  checkIfEmpty(food.weekAmount, 'the amount of weeks in which you eat that food ');
  checkIfEmpty(food.monthAmount, 'the amount of months in which you eat that food ');
  return { name: food.name, price: food.price, amountPerPrice: food.amountPerPrice, amountPerDay: food.amountPerDay, weekAmount: food.weekAmount, monthAmount: food.monthAmount }
}

function checkIfProductIsEmpty(product) {
  // check emptyness 
  checkIfEmpty(product.name, 'the name of the product');
  checkIfEmpty(product.price, 'the price of the product');
  return { name: product.name, price: product.price }
}


function checkIfMoneyIsEmpty(money) {
  // check emptyness 
  checkIfEmpty(money.price, 'any money');
  return { price: money.price }
}


function checkIfEmpty(element, nameOfElementForEmptyMessage) {
  if (`${element}` == 'NaN') {
    throw new Error(`you didn't fill ${nameOfElementForEmptyMessage}`);
  }
  else if (!`${element}`) {
    throw new Error(`you didn't fill ${nameOfElementForEmptyMessage}`);
  }
}

function makeWeeksOrMonthsValid(food) {
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





function reassingValueFromCurrentIndexIfItsAFood(food) {
  currentList.array[selectedIndex] = new _list_listStructure_js__WEBPACK_IMPORTED_MODULE_2__.Food(food.name, food.price, food.amountPerPrice, food.amountPerDay, food.weekAmount, food.monthAmount)
}

function reassingValueFromCurrentIndexIfItsAProduct(product) {
  currentList.array[selectedIndex] = new _list_listStructure_js__WEBPACK_IMPORTED_MODULE_2__.Product(product.name, product.price)
}


function reassingValueFromCurrentIndexIfItsMoney(money) {
  currentList.array[selectedIndex] = new _list_listStructure_js__WEBPACK_IMPORTED_MODULE_2__.Product(money.price)
}




function applyChangesForLists() {
  alert('changes are being apppliieid 2');
}




/***/ }),

/***/ "./input/functionality/window/openWindow.js":
/*!**************************************************!*\
  !*** ./input/functionality/window/openWindow.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerToButtons: () => (/* binding */ addEventListenerToButtons),
/* harmony export */   closePopUp: () => (/* binding */ closePopUp)
/* harmony export */ });
/* harmony import */ var _createList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createList.js */ "./input/functionality/window/createList.js");



const editButton = document.querySelector('#listContainer button');
const addNewListButton = document.querySelector('#listContainer button:nth-of-type(2)');

const addNewListDialog = document.getElementById('addNewListPopUp');
const editDialog = document.getElementById('editPopUp');



editButton.addEventListener('click', generateContentAndOpenWindow);

function generateContentAndOpenWindow() {
  try {
    (0,_createList_js__WEBPACK_IMPORTED_MODULE_0__.createList)()
    openWindow(editDialog)
  }
  catch (error) {
    alert(error);
  }
}

addNewListButton.addEventListener('click', () => openWindow(addNewListDialog));

function openWindow(dialog) {
  dialog.showModal()
}

function addEventListenerToButtons() {
  for (let closeBtn of document.querySelectorAll('.closeBtn')) {
    closeBtn.addEventListener('click', closePopUp)
  }
}
addEventListenerToButtons()

function closePopUp() {
  for (let dialog of document.querySelectorAll('dialog')) {
    if (dialog.open) {
      dialog.close()
    }
  }
}


/***/ }),

/***/ "./input/styling/darkmode.js":
/*!***********************************!*\
  !*** ./input/styling/darkmode.js ***!
  \***********************************/
/***/ (() => {

const html = document.querySelector('html');
const darkModeButton = document.querySelector('header button')
darkModeButton.addEventListener('click', switchToDarkMode)

const isDarkModeEnabled = matchMedia('(prefers-color-scheme: dark)').matches
if (isDarkModeEnabled) {
  switchToDarkMode()


}




function switchToDarkMode() {
  html.classList.toggle('dark')
  if (html.className == 'dark') {
    darkModeButton.innerText = 'light mode';
  }
  else {
    darkModeButton.innerText = 'dark mode';
  }
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./input/styling/calculationType.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./input/styling/calculationType.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.selected{
border-radius:5px;
background-color: var(--green);
padding:5px;

}
`, "",{"version":3,"sources":["webpack://./input/styling/calculationType.css"],"names":[],"mappings":"AAAA;AACA,iBAAiB;AACjB,8BAA8B;AAC9B,WAAW;;AAEX","sourcesContent":[".selected{\nborder-radius:5px;\nbackground-color: var(--green);\npadding:5px;\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./input/styling/darkmode.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./input/styling/darkmode.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root.dark{
--black:white;
--white:black;
--green:#012120;

}
`, "",{"version":3,"sources":["webpack://./input/styling/darkmode.css"],"names":[],"mappings":"AAAA;AACA,aAAa;AACb,aAAa;AACb,eAAe;;AAEf","sourcesContent":[":root.dark{\n--black:white;\n--white:black;\n--green:#012120;\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./input/styling/desktopSupport.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./input/styling/desktopSupport.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media(min-width:500px){
article form div{
flex-direction:row;
}}


@media(min-width:900px){
header{
gap:4px;

  }

header span{
display:inline;
font-size:2.2vw;
  }

main{
height:90vh;
min-height: 550px;
grid-template:'expenseType expenseContent' 0.9fr
              'typeOfCalculation expenseContent' 0.9fr             
              'showList expenseContent' 1fr
              'showList resultContent' 1fr / 1fr 1fr
}


  /* on the left */
main article:first-of-type{
grid-area: expenseType;
}
#typeContainer{
grid-area:typeOfCalculation;
}
#listContainer{
grid-area:showList;
}

/* on the right */

#expenseContent{
grid-area:expenseContent;
}
#resultContent{
grid-area:resultContent;
}


}
`, "",{"version":3,"sources":["webpack://./input/styling/desktopSupport.css"],"names":[],"mappings":"AAAA;AACA;AACA,kBAAkB;AAClB,CAAC;;;AAGD;AACA;AACA,OAAO;;EAEL;;AAEF;AACA,cAAc;AACd,eAAe;EACb;;AAEF;AACA,WAAW;AACX,iBAAiB;AACjB;;;;AAIA;;;EAGE,gBAAgB;AAClB;AACA,sBAAsB;AACtB;AACA;AACA,2BAA2B;AAC3B;AACA;AACA,kBAAkB;AAClB;;AAEA,iBAAiB;;AAEjB;AACA,wBAAwB;AACxB;AACA;AACA,uBAAuB;AACvB;;;AAGA","sourcesContent":["@media(min-width:500px){\narticle form div{\nflex-direction:row;\n}}\n\n\n@media(min-width:900px){\nheader{\ngap:4px;\n\n  }\n\nheader span{\ndisplay:inline;\nfont-size:2.2vw;\n  }\n\nmain{\nheight:90vh;\nmin-height: 550px;\ngrid-template:'expenseType expenseContent' 0.9fr\n              'typeOfCalculation expenseContent' 0.9fr             \n              'showList expenseContent' 1fr\n              'showList resultContent' 1fr / 1fr 1fr\n}\n\n\n  /* on the left */\nmain article:first-of-type{\ngrid-area: expenseType;\n}\n#typeContainer{\ngrid-area:typeOfCalculation;\n}\n#listContainer{\ngrid-area:showList;\n}\n\n/* on the right */\n\n#expenseContent{\ngrid-area:expenseContent;\n}\n#resultContent{\ngrid-area:resultContent;\n}\n\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./input/styling/list.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./input/styling/list.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#list{
border-radius:12px;
border: 2px solid var(--black);
width:90%;
height:90%;
overflow:scroll;
}

#list li.selectedItem{
outline: 2px solid orange;
list-style: none;
}
`, "",{"version":3,"sources":["webpack://./input/styling/list.css"],"names":[],"mappings":"AAAA;AACA,kBAAkB;AAClB,8BAA8B;AAC9B,SAAS;AACT,UAAU;AACV,eAAe;AACf;;AAEA;AACA,yBAAyB;AACzB,gBAAgB;AAChB","sourcesContent":["#list{\nborder-radius:12px;\nborder: 2px solid var(--black);\nwidth:90%;\nheight:90%;\noverflow:scroll;\n}\n\n#list li.selectedItem{\noutline: 2px solid orange;\nlist-style: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./input/styling/popup.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./input/styling/popup.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog{
text-align:center;
background-color:var(--white);
color:var(--black);
border:2px solid var(--black);
position:fixed;
top:50%;
left:50%;
transform: translate(-50%,-50%);
z-index:2;
padding:1.2vw;
border-radius:10px;
}

dialog > *{
display:block;
margin-left:auto;
margin-right:auto;
margin-top:10px;

}
  
dialog::backdrop{
position:fixed;
background-image:linear-gradient(#215A59AA,black) ;
background-size:cover;
opacity:0.7;
}
`, "",{"version":3,"sources":["webpack://./input/styling/popup.css"],"names":[],"mappings":"AAAA;AACA,iBAAiB;AACjB,6BAA6B;AAC7B,kBAAkB;AAClB,6BAA6B;AAC7B,cAAc;AACd,OAAO;AACP,QAAQ;AACR,+BAA+B;AAC/B,SAAS;AACT,aAAa;AACb,kBAAkB;AAClB;;AAEA;AACA,aAAa;AACb,gBAAgB;AAChB,iBAAiB;AACjB,eAAe;;AAEf;;AAEA;AACA,cAAc;AACd,kDAAkD;AAClD,qBAAqB;AACrB,WAAW;AACX","sourcesContent":["dialog{\ntext-align:center;\nbackground-color:var(--white);\ncolor:var(--black);\nborder:2px solid var(--black);\nposition:fixed;\ntop:50%;\nleft:50%;\ntransform: translate(-50%,-50%);\nz-index:2;\npadding:1.2vw;\nborder-radius:10px;\n}\n\ndialog > *{\ndisplay:block;\nmargin-left:auto;\nmargin-right:auto;\nmargin-top:10px;\n\n}\n  \ndialog::backdrop{\nposition:fixed;\nbackground-image:linear-gradient(#215A59AA,black) ;\nbackground-size:cover;\nopacity:0.7;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./input/styling/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./input/styling/style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* mobile first 300x440 */

*{
padding: 0;
margin:0;
box-sizing:border-box;
}

:root{

/* color section */
--black: black;
--white: white;
--green: #09FF99;
}

/* repetition section */



header, article{
display:flex;
justify-content:center;
align-items:center;
text-align:center;
}

main{
display:grid;
}

/* individual section */

body{
background-color: var(--white);
color: var(--black);
transition-property:background-color, color;
transition-duration:2s;
}

header{
border-bottom:2px solid var(--black)
}

header h1{
font-size:max(1rem,3.8vw);
}
header span{
display:block;
font-size:max(0.7rem,2.8vw);
}

header button{
height:90%;
}

main{
grid-template: 10% 10% 1fr 200px 10%/ 1fr;
gap:10px;
padding-top:5px;
padding-bottom:5px;
}

article{
flex-direction:column;
justify-content:center;
align-items:center;
/* align-self:center; */
justify-self:center;
border:2px solid var(--black);
gap: 7px;
padding: 5px 0px;
width:98%;
border-radius:10px;
}
article form div{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap: 7px;

}

button{
background-color: var(--white);
color:var(--black);
border: 2px solid var(--black);
padding: 8px;
border-radius:12px;
transition: background-color, color 0.7s
}

button:hover{
background-color: var(--black);
color:var(--white);
border: 2px solid var(--white);
cursor:pointer;
}


select{
background-color: var(--white);
color:var(--black);
border: 2px solid var(--black);
padding:6px;
}

input[type='text']{
padding:3px;
border-radius:4px;
background-color:var(--white);
border:2px solid var(--black);
color:var(--black);

}


/* article section */

#listContainer{
grid-row-start:-3;
grid-row-end:-3;
}
#listContainer{
overflow:scroll;
width:98%;
max-height:98%;
}
`, "",{"version":3,"sources":["webpack://./input/styling/style.css"],"names":[],"mappings":"AAAA,yBAAyB;;AAEzB;AACA,UAAU;AACV,QAAQ;AACR,qBAAqB;AACrB;;AAEA;;AAEA,kBAAkB;AAClB,cAAc;AACd,cAAc;AACd,gBAAgB;AAChB;;AAEA,uBAAuB;;;;AAIvB;AACA,YAAY;AACZ,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB;;AAEA;AACA,YAAY;AACZ;;AAEA,uBAAuB;;AAEvB;AACA,8BAA8B;AAC9B,mBAAmB;AACnB,2CAA2C;AAC3C,sBAAsB;AACtB;;AAEA;AACA;AACA;;AAEA;AACA,yBAAyB;AACzB;AACA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,UAAU;AACV;;AAEA;AACA,yCAAyC;AACzC,QAAQ;AACR,eAAe;AACf,kBAAkB;AAClB;;AAEA;AACA,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,uBAAuB;AACvB,mBAAmB;AACnB,6BAA6B;AAC7B,QAAQ;AACR,gBAAgB;AAChB,SAAS;AACT,kBAAkB;AAClB;AACA;AACA,YAAY;AACZ,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,QAAQ;;AAER;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,YAAY;AACZ,kBAAkB;AAClB;AACA;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,cAAc;AACd;;;AAGA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,WAAW;AACX;;AAEA;AACA,WAAW;AACX,iBAAiB;AACjB,6BAA6B;AAC7B,6BAA6B;AAC7B,kBAAkB;;AAElB;;;AAGA,oBAAoB;;AAEpB;AACA,iBAAiB;AACjB,eAAe;AACf;AACA;AACA,eAAe;AACf,SAAS;AACT,cAAc;AACd","sourcesContent":["/* mobile first 300x440 */\n\n*{\npadding: 0;\nmargin:0;\nbox-sizing:border-box;\n}\n\n:root{\n\n/* color section */\n--black: black;\n--white: white;\n--green: #09FF99;\n}\n\n/* repetition section */\n\n\n\nheader, article{\ndisplay:flex;\njustify-content:center;\nalign-items:center;\ntext-align:center;\n}\n\nmain{\ndisplay:grid;\n}\n\n/* individual section */\n\nbody{\nbackground-color: var(--white);\ncolor: var(--black);\ntransition-property:background-color, color;\ntransition-duration:2s;\n}\n\nheader{\nborder-bottom:2px solid var(--black)\n}\n\nheader h1{\nfont-size:max(1rem,3.8vw);\n}\nheader span{\ndisplay:block;\nfont-size:max(0.7rem,2.8vw);\n}\n\nheader button{\nheight:90%;\n}\n\nmain{\ngrid-template: 10% 10% 1fr 200px 10%/ 1fr;\ngap:10px;\npadding-top:5px;\npadding-bottom:5px;\n}\n\narticle{\nflex-direction:column;\njustify-content:center;\nalign-items:center;\n/* align-self:center; */\njustify-self:center;\nborder:2px solid var(--black);\ngap: 7px;\npadding: 5px 0px;\nwidth:98%;\nborder-radius:10px;\n}\narticle form div{\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items:center;\ngap: 7px;\n\n}\n\nbutton{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding: 8px;\nborder-radius:12px;\ntransition: background-color, color 0.7s\n}\n\nbutton:hover{\nbackground-color: var(--black);\ncolor:var(--white);\nborder: 2px solid var(--white);\ncursor:pointer;\n}\n\n\nselect{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding:6px;\n}\n\ninput[type='text']{\npadding:3px;\nborder-radius:4px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\ncolor:var(--black);\n\n}\n\n\n/* article section */\n\n#listContainer{\ngrid-row-start:-3;\ngrid-row-end:-3;\n}\n#listContainer{\noverflow:scroll;\nwidth:98%;\nmax-height:98%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./input/styling/calculationType.css":
/*!*******************************************!*\
  !*** ./input/styling/calculationType.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_calculationType_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./calculationType.css */ "./node_modules/css-loader/dist/cjs.js!./input/styling/calculationType.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_calculationType_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_calculationType_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_calculationType_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_calculationType_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./input/styling/darkmode.css":
/*!************************************!*\
  !*** ./input/styling/darkmode.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_darkmode_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./darkmode.css */ "./node_modules/css-loader/dist/cjs.js!./input/styling/darkmode.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_darkmode_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_darkmode_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_darkmode_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_darkmode_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./input/styling/desktopSupport.css":
/*!******************************************!*\
  !*** ./input/styling/desktopSupport.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_desktopSupport_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./desktopSupport.css */ "./node_modules/css-loader/dist/cjs.js!./input/styling/desktopSupport.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_desktopSupport_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_desktopSupport_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_desktopSupport_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_desktopSupport_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./input/styling/list.css":
/*!********************************!*\
  !*** ./input/styling/list.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./list.css */ "./node_modules/css-loader/dist/cjs.js!./input/styling/list.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./input/styling/popup.css":
/*!*********************************!*\
  !*** ./input/styling/popup.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./input/styling/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./input/styling/style.css":
/*!*********************************!*\
  !*** ./input/styling/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./input/styling/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./input/fileImporter.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styling/style.css */ "./input/styling/style.css");
/* harmony import */ var _styling_darkmode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styling/darkmode.css */ "./input/styling/darkmode.css");
/* harmony import */ var _styling_darkmode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styling/darkmode.js */ "./input/styling/darkmode.js");
/* harmony import */ var _styling_darkmode_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styling_darkmode_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styling_calculationType_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styling/calculationType.css */ "./input/styling/calculationType.css");
/* harmony import */ var _styling_list_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styling/list.css */ "./input/styling/list.css");
/* harmony import */ var _styling_desktopSupport_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styling/desktopSupport.css */ "./input/styling/desktopSupport.css");
/* harmony import */ var _styling_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styling/popup.css */ "./input/styling/popup.css");
/* harmony import */ var _functionality_list_listStructure_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functionality/list/listStructure.js */ "./input/functionality/list/listStructure.js");
/* harmony import */ var _functionality_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functionality/list/addItemsToList.js */ "./input/functionality/list/addItemsToList.js");
/* harmony import */ var _functionality_window_openWindow_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functionality/window/openWindow.js */ "./input/functionality/window/openWindow.js");
/* harmony import */ var _functionality_display_expenseType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functionality/display/expenseType.js */ "./input/functionality/display/expenseType.js");
/* harmony import */ var _functionality_typeCalculator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functionality/typeCalculator.js */ "./input/functionality/typeCalculator.js");
/* harmony import */ var _functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functionality/calculate/calculate.js */ "./input/functionality/calculate/calculate.js");
/* harmony import */ var _functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_12__);

// import styles









// import functionality







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0M7QUFDRjtBQUNFO0FBQ0w7QUFDSyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvY2FsY3VsYXRlL2NhbGN1bGF0ZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9kaXNwbGF5L2l0ZW1zT3JMaXN0cy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2VkaXRJdGVtT3JMaXN0L3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2xpc3QvYWRkSXRlbXNUb0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9saXN0L2xpc3RTdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS90eXBlQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9jcmVhdGVMaXN0LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L29wZW5XaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kYXJrbW9kZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2NhbGN1bGF0aW9uVHlwZS5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kYXJrbW9kZS5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9saXN0LmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcz9iNjQ4Iiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuY3NzPzNhYjMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3M/MjVmZiIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2xpc3QuY3NzP2EzZTMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9wb3B1cC5jc3M/MWVmNiIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL3N0eWxlLmNzcz9jZGExIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZmlsZUltcG9ydGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBjYWxjdWxhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcmVzdWx0Q29udGVudGApO1xuY29uc3QgY2FsY3VsYXRlQnV0dG9uID0gY2FsY3VsYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbmApO1xuY29uc3QgY2FsY3VsYXRlU3BhbiA9IGNhbGN1bGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBzcGFuYCk7XG5cbmNhbGN1bGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGN1bGF0ZSlcblxuXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZSgpIHtcblxubGV0IHJlc3VsdCA9ICBjdXJyZW50TGlzdC5hcnJheS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50SXRlbSkgPT4ge1xuICAgIHN3aXRjaCAoY3VycmVudEl0ZW0udHlwZSkge1xuICAgICAgY2FzZSAnZm9vZCc6XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGNhbGN1bGF0ZWRGb29kKGN1cnJlbnRJdGVtKTtcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgY2FzZSAnbW9uZXknOlxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBjdXJyZW50SXRlbS5wcmljZShjdXJyZW50SXRlbSk7XG4gICAgfVxuICB9LCAwKTtcblxuY2FsY3VsYXRlU3Bhbi5pbm5lclRleHQgPSByZXN1bHQ7XG59XG5cblxuXG5mdW5jdGlvbiBjYWxjdWxhdGVkRm9vZChjdXJyZW50Rm9vZCkge1xuICBsZXQgcHJpY2VGb3JVbml0ID0gY3VycmVudEZvb2QucHJpY2UgLyBjdXJyZW50Rm9vZC5hbW91bnRQZXJQcmljZTtcbiAgbGV0IGFtb3VudE9mRm9vZEVhdGVuUGVyTW9udGhPcldlZWsgPSBjdXJyZW50Rm9vZC5hbW91bnRQZXJEYXkgKiBnZXRQcm9jZXN1cmUoY3VycmVudEZvb2QpO1xuICBsZXQgYXZlcmFnZUZvb2QgPSBwcmljZUZvclVuaXQgKiBhbW91bnRPZkZvb2RFYXRlblBlck1vbnRoT3JXZWVrO1xuICByZXR1cm4gYXZlcmFnZUZvb2Q7XG59XG5cbmZ1bmN0aW9uIGdldFByb2Nlc3VyZShjdXJyZW50Rm9vZCl7XG5pZiAodHlwZU9mQ2FsY3VsYXRpb24gPT0gJ21vbnRobHknKSB7XG5yZXR1cm4gY3VycmVudEZvb2QubW9udGhBbW91bnRcbn1cbmVsc2Uge1xucmV0dXJuIGN1cnJlbnRGb29kLndlZWtBbW91bnRcbn1cbn1cbiIsImltcG9ydCB7IGFkZEZvb2RUb1RoZUxpc3QsIGFkZE1vbmV5VG9UaGVMaXN0LCBhZGRQcm9kdWN0VG9UaGVMaXN0IH0gZnJvbSAnLi8uLi9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJztcblxubGV0IHNlbGVjdGVkU2VjdGlvbjtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKTtcblxudHlwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4geyBkaXNwbGF5Q29udGVudEZvclR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KVxuXG5sZXQgZXhwZW5zZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwZW5zZUNvbnRlbnQgZm9ybScpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudEZvclR5cGUodGFyZ2V0VmFsdWUpIHtcblxuICBzd2l0Y2ggKHRhcmdldFZhbHVlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBnZW5lcmF0ZUZvb2QoKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvZHVjdCc6XG4gICAgICBnZW5lcmF0ZVByb2R1Y3QoKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgZ2VuZXJhdGVNb25leSgpXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvb2QoKSB7XG4gIGV4cGVuc2VDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGAgPHA+bmFtZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbjxwPnByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuPHA+YW1vdW50IG9mIGZvb2QgcGVyIHByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJQcmljZVwiPlxuPHA+YW1vdW50IG9mIGZvb2QgcGVyIGRheTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyRGF5XCI+XG48ZGl2PlxuICA8c2VjdGlvbj5cbiAgICA8cD5hbW91bnQgb2YgZGF5cyBwZXIgbW9udGg6IDxicj4gPHNwYW4+KHlvdSBlYXQpPC9zcGFuPjwvcD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwibW9udGhBbW91bnRcIj5cbiAgPC9zZWN0aW9uPlxuICA8cD5vcjwvcD5cbiAgPHNlY3Rpb24+XG4gICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIHdlZWs6IDxicj4gPHNwYW4+KHlvdSBlYXQpPC9zcGFuPjwvcD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwid2Vla0Ftb3VudFwiPlxuICA8L3NlY3Rpb24+XG48L2Rpdj5cbjxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+XG5gXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRGb29kVG9UaGVMaXN0KVxuXG4gIGlmICh3aW5kb3cudHlwZU9mQ2FsY3VsYXRpb24gPT0gJ21vbnRobHknKSB7XG5cbiAgICBzZWxlY3RlZFNlY3Rpb24gPSBleHBlbnNlQ29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG4gIH1cbiAgZWxzZSB7XG5cbiAgICBzZWxlY3RlZFNlY3Rpb24gPSBleHBlbnNlQ29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uOmxhc3Qtb2YtdHlwZScpO1xuICB9XG5cbiAgc2VsZWN0ZWRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9kdWN0KCkge1xuICBleHBlbnNlQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgIDxwPm5hbWU6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG48cD5wcmljZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwicHJpY2VcIj5cbjxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+XG5gXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9kdWN0VG9UaGVMaXN0KVxuXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTW9uZXkoKSB7XG4gIGV4cGVuc2VDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGAgPHA+bW9uZXk6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cInByaWNlXCI+XG48YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRNb25leVRvVGhlTGlzdClcbn1cbiIsImltcG9ydCB7IHNlbGVjdERpdiB9IGZyb20gJy4vLi4vZWRpdEl0ZW1Pckxpc3Qvc2VsZWN0aW9uLmpzJ1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1Pckxpc3RDb250YWluZXInKTtcbnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkaXNwbGF5TGlzdClcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlMaXN0KCkge1xuICBjb25zdCBpdGVtT3JMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1Pckxpc3RDb250YWluZXInKVxuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgaWYgKGl0ZW1Pckxpc3RDb250YWluZXIudmFsdWUgPT0gJ2l0ZW0nKSB7XG4gICAgY3VycmVudExpc3QuYXJyYXkuZm9yRWFjaChhcHBlbmRJdGVtcylcbiAgfVxuICBlbHNlIHtcbiAgICBsaXN0LmZvckVhY2goYXBwZW5kTGlzdHMpXG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kSXRlbXMoaXRlbSwgY3VycmVudExpc3RPZkl0ZW1zSW5kZXgpIHtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3REaXYpXG4gIGxldCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQuaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICBuYW1lVGV4dC5zdHlsZS5jb2xvciA9IGl0ZW0uY29sb3IoKTtcbiAgbmFtZVRleHQuZGF0YXNldC5pbmRleCA9IGN1cnJlbnRMaXN0T2ZJdGVtc0luZGV4O1xuICBjb250YWluZXIuYXBwZW5kKGxpKTtcbiAgbGkuYXBwZW5kKG5hbWVUZXh0KTtcbn1cblxuXG5cbmZ1bmN0aW9uIGFwcGVuZExpc3RzKGxpc3QsIGN1cnJlbnRMaXN0b2ZMaXN0c0luZGV4KSB7XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0RGl2KVxuICBsZXQgbmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5hbWVUZXh0LmlubmVyVGV4dCA9IGxpc3QubmFtZTtcbiAgbmFtZVRleHQuZGF0YXNldC5pbmRleCA9IGN1cnJlbnRMaXN0b2ZMaXN0c0luZGV4O1xuICBjb250YWluZXIuYXBwZW5kKGxpKTtcbiAgbGkuYXBwZW5kKG5hbWVUZXh0KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZWxlY3REaXYoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgd2luZG93LnNlbGVjdGVkSW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleFxuICAgIHNlbGVjdFBhcmVudChldmVudClcbiAgfVxufVxuXG5cblxuXG5mdW5jdGlvbiBzZWxlY3RQYXJlbnQoZXZlbnQpe1xubGV0IHBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xubGV0IHNlbGVjdGVkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWRJdGVtJyk7XG5zZWxlY3RlZEl0ZW1zLmZvckVhY2goIGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZEl0ZW0nKSk7XG5wYXJlbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRJdGVtJyk7XG59XG5cbiIsImltcG9ydCB7cHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdCwgTW9uZXksIFByb2R1Y3QsIEZvb2QgfSBmcm9tICcuL2xpc3RTdHJ1Y3R1cmUuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb29kVG9UaGVMaXN0KCkge1xuICBsZXQgbmFtZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcblxuICBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KG5ldyBGb29kKG5hbWVWYWx1ZSxcbiAgICBnZXROdW1iZXJPZigncHJpY2UnKSxcbiAgICBnZXROdW1iZXJPZignYW1vdW50UGVyUHJpY2UnKSxcbiAgICBnZXROdW1iZXJPZignYW1vdW50UGVyRGF5JyksXG4gICAgZ2V0TnVtYmVyT2YoJ3dlZWtBbW91bnQnKSxcbiAgICBnZXROdW1iZXJPZignbW9udGhBbW91bnQnKSkpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2R1Y3RUb1RoZUxpc3QoKSB7XG4gIGxldCBuYW1lVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KG5ldyBQcm9kdWN0KG5hbWVWYWx1ZSwgZ2V0TnVtYmVyT2YoJ3ByaWNlJykpKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNb25leVRvVGhlTGlzdCgpIHtcbiAgcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdChuZXcgTW9uZXkoZ2V0TnVtYmVyT2YoJ3ByaWNlJykpKVxufVxuXG5mdW5jdGlvbiBnZXROdW1iZXJPZihlbGVtZW50SWQpIHtcbiAgbGV0IHZhbHVlT2ZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZWxlbWVudElkfWApLnZhbHVlXG5cbiAgIHJldHVybiB0cmFuc2Zvcm1Ub051bWJlcih2YWx1ZU9mRWxlbWVudClcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub051bWJlcih2YWx1ZU9mRWxlbWVudCl7XG4gIGxldCBsZXR0ZXJSZW1vdmVyID0gL1swLTldKy9nO1xuICBsZXQgdmFsdWVPZkVsZW1lbnRXaXRob3V0TGV0dGVycyA9IGAke2xldHRlclJlbW92ZXIuZXhlYyh2YWx1ZU9mRWxlbWVudCl9YDtcbiAgXG4gIHJldHVybiBOdW1iZXIodmFsdWVPZkVsZW1lbnRXaXRob3V0TGV0dGVycyk7XG4gIH1cbiIsImltcG9ydCB7IGRpc3BsYXlDb250ZW50Rm9yVHlwZSB9IGZyb20gJy4vLi4vZGlzcGxheS9leHBlbnNlVHlwZS5qcydcbmltcG9ydCB7IGRpc3BsYXlMaXN0IH0gZnJvbSAnLi8uLi9kaXNwbGF5L2l0ZW1zT3JMaXN0cy5qcydcblxuLy8gY2xhc3Mgc2VjdGlvblxuY2xhc3MgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHByaWNlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gIH1cblxuICBjb2xvcihjb2xvciA9ICdibGFjaycpIHtcbiAgICByZXR1cm4gY29sb3JcbiAgfVxuXG4gIGNoYW5nZUNvbG9yKHNlbGVjdGVkQ29sb3IpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIHRoaXMuY29sb3IgPSAoY29sb3IgPSBzZWxlY3RlZENvbG9yKSA9PiB7IHJldHVybiBzZWxlY3RlZENvbG9yIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1vbmV5IGV4dGVuZHMgSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHByaWNlLCBuYW1lID0gcHJpY2UgLCB0eXBlKSB7XG4gICAgc3VwZXIodHlwZSA9ICdtb25leScsIHByaWNlKVxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBjb2xvcihjb2xvciA9ICdncmVlbicpIHtcbiAgICByZXR1cm4gY29sb3I7XG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgdHlwZSkge1xuICAgIHN1cGVyKHR5cGUgPSAncHJvZHVjdCcsIHByaWNlKVxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBjb2xvcihjb2xvciA9ICdibHVlJykge1xuICAgIHJldHVybiBjb2xvclxuICB9XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgRm9vZCBleHRlbmRzIEl0ZW0ge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgYW1vdW50UGVyUHJpY2UsIGFtb3VudFBlckRheSwgd2Vla0Ftb3VudCwgbW9udGhBbW91bnQsIHR5cGUpIHtcbiAgICBzdXBlcih0eXBlID0gJ2Zvb2QnLCBwcmljZSlcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYW1vdW50UGVyUHJpY2UgPSBhbW91bnRQZXJQcmljZTtcbiAgICB0aGlzLmFtb3VudFBlckRheSA9IGFtb3VudFBlckRheTtcbiAgICBpZiAod2Vla0Ftb3VudCkge1xuICAgICAgdGhpcy53ZWVrQW1vdW50ID0gd2Vla0Ftb3VudDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLndlZWtBbW91bnQgPSBwYXJzZUludChtb250aEFtb3VudCAvIDQpO1xuICAgIH1cblxuICAgIGlmIChtb250aEFtb3VudCl7XG4gICAgICB0aGlzLm1vbnRoQW1vdW50ID0gbW9udGhBbW91bnQ7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICB0aGlzLm1vbnRoQW1vdW50ID0gcGFyc2VJbnQod2Vla0Ftb3VudCAqIDQpO1xuICAgIH1cbiAgfVxuXG5cbiAgY29sb3IoY29sb3IgPSAneWVsbG93Jykge1xuICAgIHJldHVybiBjb2xvclxuICB9XG59XG5cbmZ1bmN0aW9uIExpc3QobmFtZSxhcnJheSA9IFtdKXtcbiAgcmV0dXJuIHthcnJheSxuYW1lfVxufVxuXG5cbi8vIGxpc3Qgc2VjdGlvblxud2luZG93LmN1cnJlbnRMaXN0ID0gbmV3IExpc3QoJ2RlZmF1bHQnKTtcbndpbmRvdy5saXN0ID0gW2N1cnJlbnRMaXN0XTtcblxuXG5cblxuLy8gZnVuY3Rpb24gdG8gcHVzaCB0byBhcnJheSBzZWN0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KGVsKSB7XG4gIGN1cnJlbnRMaXN0LmFycmF5LnB1c2goZWwpO1xuICBkaXNwbGF5TGlzdCgpXG4gIGRpc3BsYXlDb250ZW50Rm9yVHlwZSgpXG59XG5cblxuXG4vLyBjb2xvciBzZWN0aW9uXG5cbmNvbnN0IGNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPSdjb2xvciddYClcbmNvbG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlQ29sb3IpXG5mdW5jdGlvbiB1cGRhdGVDb2xvcihldmVudCkge1xuICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXJ0aWNsZTpmaXJzdC1vZi10eXBlIHNlbGVjdCcpLnZhbHVlXG4gIHN3aXRjaCAoc2VsZWN0KSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBGb29kLnByb3RvdHlwZS5jaGFuZ2VDb2xvcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvZHVjdCc6XG4gICAgICBQcm9kdWN0LnByb3RvdHlwZS5jaGFuZ2VDb2xvcihldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgTW9uZXkucHJvdG90eXBlLmNoYW5nZUNvbG9yKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgZGlzcGxheUNvbnRlbnRGb3JUeXBlfSBmcm9tICcuL2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMnO1xuXG5cbmNvbnN0IHR5cGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZUNvbnRhaW5lciBzZWxlY3QnKTtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKTtcbnR5cGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUeXBlT2ZDYWxjdWxhdGlvbilcblxuY2hhbmdlVHlwZU9mQ2FsY3VsYXRpb24oKTtcbmZ1bmN0aW9uIGNoYW5nZVR5cGVPZkNhbGN1bGF0aW9uKCl7XG5cbmlmKHR5cGVTZWxlY3QudmFsdWUgPT0gJ21vbnRobHknKXtcbndpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9ICdtb250aGx5Jztcbn1cbmVsc2V7XG53aW5kb3cudHlwZU9mQ2FsY3VsYXRpb24gPSAnd2Vla2x5Jztcbn1cblxuZGlzcGxheUNvbnRlbnRGb3JUeXBlKHR5cGVTZWxlY3Rvci52YWx1ZSk7XG5cbn1cbiIsImltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMsIGNsb3NlUG9wVXAgfSBmcm9tICcuL29wZW5XaW5kb3cuanMnO1xuaW1wb3J0IHsgdHJhbnNmb3JtVG9OdW1iZXIgfSBmcm9tICcuLy4uL2xpc3QvYWRkSXRlbXNUb0xpc3QuanMnO1xuaW1wb3J0IHsgRm9vZCwgUHJvZHVjdCwgTW9uZXkgfSBmcm9tICcuLy4uL2xpc3QvbGlzdFN0cnVjdHVyZS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UG9wVXAnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3QoKSB7XG4gIGlmICh3aW5kb3cuc2VsZWN0ZWRJbmRleCkge1xuICAgIGdlbmVyYXRlQ29udGVudEZvckRpYWxvZygpXG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvQnV0dG9ucygpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgaGF2ZW4ndCBzZWxlY3RlZCBhbnl0aGluZ2ApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50Rm9yRGlhbG9nKCkge1xuICBsZXQgdHlwZU9mTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtT3JMaXN0Q29udGFpbmVyJykudmFsdWU7XG4gIGxldCBpdGVtID0gY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF07XG4gIGxldCBzZWxlY3RlZExpc3QgPSBsaXN0W3NlbGVjdGVkSW5kZXhdO1xuICBpZiAodHlwZU9mTGlzdCA9PSAnaXRlbScpIHtcbiAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgY2FzZSAnZm9vZCc6XG4gICAgICAgIGRpYWxvZy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gY2xhc3M9J2Nsb3NlQnRuJz5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8cD5uYW1lOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ubmFtZX0ndHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgPHA+cHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5wcmljZX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdkZWNpbWFsJyBpZD1cInByaWNlXCI+XG4gICAgICAgIDxwPmFtb3VudCBvZiBmb29kIHBlciBwcmljZTo8L3A+XG4gICAgICAgIDxpbnB1dCAgdmFsdWU9JyR7aXRlbS5hbW91bnRQZXJQcmljZX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cImFtb3VudFBlclByaWNlXCI+XG4gICAgICAgIDxwPmFtb3VudCBvZiBmb29kIHBlciBkYXk6PC9wPlxuICAgICAgICA8aW5wdXQgICB2YWx1ZT0nJHtpdGVtLmFtb3VudFBlckRheX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cImFtb3VudFBlckRheVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIG1vbnRoOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5tb250aEFtb3VudH0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cIm1vbnRoQW1vdW50XCI+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxwPm9yPC9wPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIHdlZWs6IDxicj4gPHNwYW4+KHlvdSBlYXQpPC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLndlZWtBbW91bnR9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJ3ZWVrQW1vdW50XCI+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgICBkaWFsb2cuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9J2Nsb3NlQnRuJz5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8cD5uYW1lOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ubmFtZX0ndHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgPHA+cHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5wcmljZX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdkZWNpbWFsJyBpZD1cInByaWNlXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICAgIGRpYWxvZy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz0nY2xvc2VCdG4nPmNsb3NlPC9idXR0b24+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgYXBwbHlCdXR0b24gPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2FwcGx5Jyk7XG4gICAgYXBwbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUNoYW5nZXNGb3JJdGVtcyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZGlhbG9nLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+bmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtzZWxlY3RlZExpc3QubmFtZX0ndHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gO1xuXG4gICAgbGV0IGFwcGx5QnV0dG9uID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNhcHBseScpO1xuICAgIGFwcGx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwbHlDaGFuZ2VzRm9yTGlzdHMpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzRm9ySXRlbXMoKSB7XG4gIGxldCBpdGVtID0gY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF07XG4gIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBnZXRWYWx1ZXNGcm9tRm9vZElucHV0cygpXG4gICAgICAgIC50aGVuKGdldFZhbHVlc0ZvckZvb2QpXG4gICAgICAgIC50aGVuKGNoZWNrSWZGb29kSXNFbXB0eSlcbiAgICAgICAgLnRoZW4obWFrZVdlZWtzT3JNb250aHNWYWxpZClcbiAgICAgICAgLnRoZW4ocmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FGb29kKVxuICAgICAgICAudGhlbihkaXNwbGF5TGlzdClcbiAgICAgICAgLnRoZW4oY2xvc2VQb3BVcClcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9kdWN0JzpcbiAgICAgIGdldFZhbHVlc0Zyb21Qcm9kdWN0SW5wdXRzKClcbiAgICAgICAgLnRoZW4oZ2V0VmFsdWVzRm9yUHJvZHVjdClcbiAgICAgICAgLnRoZW4oY2hlY2tJZlByb2R1Y3RJc0VtcHR5KVxuICAgICAgICAudGhlbihyZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQVByb2R1Y3QpXG4gICAgICAgIC50aGVuKGRpc3BsYXlMaXN0KVxuICAgICAgICAudGhlbihjbG9zZVBvcFVwKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gYWxlcnQoZXJyb3IpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIGdldFZhbHVlc0Zyb21Nb25leUlucHV0cygpXG4gICAgICAgIC50aGVuKGdldFZhbHVlc0Zvck1vbmV5KVxuICAgICAgICAudGhlbihjaGVja0lmTW9uZXlJc0VtcHR5KVxuICAgICAgICAudGhlbihyZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzTW9uZXkpXG4gICAgICAgIC50aGVuKGRpc3BsYXlMaXN0KVxuICAgICAgICAudGhlbihjbG9zZVBvcFVwKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gYWxlcnQoZXJyb3IpKTtcbiAgICAgIGJyZWFrO1xuXG4gIH1cbn1cblxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tRm9vZElucHV0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICBsZXQgYW1vdW50UGVyUHJpY2UgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2Ftb3VudFBlclByaWNlJykudmFsdWU7XG4gIGxldCBhbW91bnRQZXJEYXkgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2Ftb3VudFBlckRheScpLnZhbHVlO1xuICBsZXQgbW9udGhBbW91bnQgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI21vbnRoQW1vdW50JykudmFsdWU7XG4gIGxldCB3ZWVrQW1vdW50ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrQW1vdW50JykudmFsdWU7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCBtb250aEFtb3VudCwgd2Vla0Ftb3VudCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tUHJvZHVjdElucHV0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSB9O1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFZhbHVlc0Zyb21Nb25leUlucHV0cygpIHtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICByZXR1cm4geyBwcmljZSB9O1xufVxuXG5cblxuZnVuY3Rpb24gZ2V0VmFsdWVzRm9yRm9vZChmb29kKSB7XG4gIGxldCBuYW1lID0gZm9vZC5uYW1lO1xuICBsZXQgcHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLnByaWNlKTtcbiAgbGV0IGFtb3VudFBlclByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC5hbW91bnRQZXJQcmljZSk7XG4gIGxldCBhbW91bnRQZXJEYXkgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLmFtb3VudFBlckRheSk7XG4gIGxldCBtb250aEFtb3VudCA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2QubW9udGhBbW91bnQpO1xuICBsZXQgd2Vla0Ftb3VudCA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2Qud2Vla0Ftb3VudCk7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCBtb250aEFtb3VudCwgd2Vla0Ftb3VudCB9XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlc0ZvclByb2R1Y3QocHJvZHVjdCkge1xuICBsZXQgbmFtZSA9IHByb2R1Y3QubmFtZTtcbiAgbGV0IHByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIocHJvZHVjdC5wcmljZSk7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JNb25leShtb25leSkge1xuICBsZXQgcHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihtb25leS5wcmljZSk7XG4gIHJldHVybiB7IHByaWNlIH1cbn1cblxuXG5cblxuXG5mdW5jdGlvbiBjaGVja0lmRm9vZElzRW1wdHkoZm9vZCkge1xuICAvLyBjaGVjayBlbXB0eW5lc3MgXG4gIGNoZWNrSWZFbXB0eShmb29kLm5hbWUsICd0aGUgbmFtZSBvZiB0aGUgZm9vZCcpO1xuICBjaGVja0lmRW1wdHkoZm9vZC5wcmljZSwgJ3RoZSBwcmljZSBvZiB0aGUgZm9vZCcpO1xuICBjaGVja0lmRW1wdHkoZm9vZC5hbW91bnRQZXJQcmljZSwgJ3RoZSBhbW91bnQgb2YgZm9vZCBwZXIgcHJpY2UnKTtcbiAgY2hlY2tJZkVtcHR5KGZvb2QuYW1vdW50UGVyRGF5LCAndGhlIGFtb3VudCBvZiBmb29kIHBlciBkYXknKTtcbiAgY2hlY2tJZkVtcHR5KGZvb2Qud2Vla0Ftb3VudCwgJ3RoZSBhbW91bnQgb2Ygd2Vla3MgaW4gd2hpY2ggeW91IGVhdCB0aGF0IGZvb2QgJyk7XG4gIGNoZWNrSWZFbXB0eShmb29kLm1vbnRoQW1vdW50LCAndGhlIGFtb3VudCBvZiBtb250aHMgaW4gd2hpY2ggeW91IGVhdCB0aGF0IGZvb2QgJyk7XG4gIHJldHVybiB7IG5hbWU6IGZvb2QubmFtZSwgcHJpY2U6IGZvb2QucHJpY2UsIGFtb3VudFBlclByaWNlOiBmb29kLmFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXk6IGZvb2QuYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50OiBmb29kLndlZWtBbW91bnQsIG1vbnRoQW1vdW50OiBmb29kLm1vbnRoQW1vdW50IH1cbn1cblxuZnVuY3Rpb24gY2hlY2tJZlByb2R1Y3RJc0VtcHR5KHByb2R1Y3QpIHtcbiAgLy8gY2hlY2sgZW1wdHluZXNzIFxuICBjaGVja0lmRW1wdHkocHJvZHVjdC5uYW1lLCAndGhlIG5hbWUgb2YgdGhlIHByb2R1Y3QnKTtcbiAgY2hlY2tJZkVtcHR5KHByb2R1Y3QucHJpY2UsICd0aGUgcHJpY2Ugb2YgdGhlIHByb2R1Y3QnKTtcbiAgcmV0dXJuIHsgbmFtZTogcHJvZHVjdC5uYW1lLCBwcmljZTogcHJvZHVjdC5wcmljZSB9XG59XG5cblxuZnVuY3Rpb24gY2hlY2tJZk1vbmV5SXNFbXB0eShtb25leSkge1xuICAvLyBjaGVjayBlbXB0eW5lc3MgXG4gIGNoZWNrSWZFbXB0eShtb25leS5wcmljZSwgJ2FueSBtb25leScpO1xuICByZXR1cm4geyBwcmljZTogbW9uZXkucHJpY2UgfVxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrSWZFbXB0eShlbGVtZW50LCBuYW1lT2ZFbGVtZW50Rm9yRW1wdHlNZXNzYWdlKSB7XG4gIGlmIChgJHtlbGVtZW50fWAgPT0gJ05hTicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBkaWRuJ3QgZmlsbCAke25hbWVPZkVsZW1lbnRGb3JFbXB0eU1lc3NhZ2V9YCk7XG4gIH1cbiAgZWxzZSBpZiAoIWAke2VsZW1lbnR9YCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeW91IGRpZG4ndCBmaWxsICR7bmFtZU9mRWxlbWVudEZvckVtcHR5TWVzc2FnZX1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlV2Vla3NPck1vbnRoc1ZhbGlkKGZvb2QpIHtcbiAgbGV0IGl0ZW0gPSBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XTtcbiAgLy8gY2hlY2sgaWYgdGhlIHdlZWsgb3IgdGhlIG1vbnRoIGlzIGZhbHNlXG4gIGxldCB3ZWVrRXF1YWwgPSBmYWxzZTtcbiAgbGV0IG1vbnRoRXF1YWwgPSBmYWxzZTtcbiAgaWYgKGl0ZW0ud2Vla0Ftb3VudCA9PSBmb29kLndlZWtBbW91bnQpIHtcbiAgICB3ZWVrRXF1YWwgPSB0cnVlO1xuICB9XG4gIGlmIChpdGVtLm1vbnRoQW1vdW50ID09IGZvb2QubW9udGhBbW91bnQpIHtcbiAgICBtb250aEVxdWFsID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGNoYW5nZSB0aGUgb3RoZXIgdmFsdWUgaWYgb25lIG9mIHRob3NlIGlzIGZhbHNlIGJ1dCB0aGUgb3RoZXIgb25lIGlzIHRydWVcbiAgaWYgKHdlZWtFcXVhbCA9PSB0cnVlICYmIG1vbnRoRXF1YWwgPT0gZmFsc2UpIHtcbiAgICBmb29kLndlZWtBbW91bnQgPSBwYXJzZUludChmb29kLm1vbnRoQW1vdW50IC8gNClcbiAgfVxuICBlbHNlIGlmICh3ZWVrRXF1YWwgPT0gZmFsc2UgJiYgbW9udGhFcXVhbCA9PSB0cnVlKSB7XG4gICAgZm9vZC5tb250aEFtb3VudCA9IHBhcnNlSW50KGZvb2Qud2Vla0Ftb3VudCAqIDQpXG4gIH1cblxuICByZXR1cm4geyBuYW1lOiBmb29kLm5hbWUsIHByaWNlOiBmb29kLnByaWNlLCBhbW91bnRQZXJQcmljZTogZm9vZC5hbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5OiBmb29kLmFtb3VudFBlckRheSwgd2Vla0Ftb3VudDogZm9vZC53ZWVrQW1vdW50LCBtb250aEFtb3VudDogZm9vZC5tb250aEFtb3VudCB9XG59XG5cblxuXG5cblxuZnVuY3Rpb24gcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FGb29kKGZvb2QpIHtcbiAgY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF0gPSBuZXcgRm9vZChmb29kLm5hbWUsIGZvb2QucHJpY2UsIGZvb2QuYW1vdW50UGVyUHJpY2UsIGZvb2QuYW1vdW50UGVyRGF5LCBmb29kLndlZWtBbW91bnQsIGZvb2QubW9udGhBbW91bnQpXG59XG5cbmZ1bmN0aW9uIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBUHJvZHVjdChwcm9kdWN0KSB7XG4gIGN1cnJlbnRMaXN0LmFycmF5W3NlbGVjdGVkSW5kZXhdID0gbmV3IFByb2R1Y3QocHJvZHVjdC5uYW1lLCBwcm9kdWN0LnByaWNlKVxufVxuXG5cbmZ1bmN0aW9uIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNNb25leShtb25leSkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IG5ldyBQcm9kdWN0KG1vbmV5LnByaWNlKVxufVxuXG5cblxuXG5mdW5jdGlvbiBhcHBseUNoYW5nZXNGb3JMaXN0cygpIHtcbiAgYWxlcnQoJ2NoYW5nZXMgYXJlIGJlaW5nIGFwcHBsaWllaWQgMicpO1xufVxuXG5cbiIsImltcG9ydCB7IGNyZWF0ZUxpc3QgfSBmcm9tICcuL2NyZWF0ZUxpc3QuanMnO1xuXG5cbmNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdENvbnRhaW5lciBidXR0b24nKTtcbmNvbnN0IGFkZE5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdENvbnRhaW5lciBidXR0b246bnRoLW9mLXR5cGUoMiknKTtcblxuY29uc3QgYWRkTmV3TGlzdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGROZXdMaXN0UG9wVXAnKTtcbmNvbnN0IGVkaXREaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFBvcFVwJyk7XG5cblxuXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvdyk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudEFuZE9wZW5XaW5kb3coKSB7XG4gIHRyeSB7XG4gICAgY3JlYXRlTGlzdCgpXG4gICAgb3BlbldpbmRvdyhlZGl0RGlhbG9nKVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGVycm9yKTtcbiAgfVxufVxuXG5hZGROZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlbldpbmRvdyhhZGROZXdMaXN0RGlhbG9nKSk7XG5cbmZ1bmN0aW9uIG9wZW5XaW5kb3coZGlhbG9nKSB7XG4gIGRpYWxvZy5zaG93TW9kYWwoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvQnV0dG9ucygpIHtcbiAgZm9yIChsZXQgY2xvc2VCdG4gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlQnRuJykpIHtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wVXApXG4gIH1cbn1cbmFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMoKVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQb3BVcCgpIHtcbiAgZm9yIChsZXQgZGlhbG9nIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpYWxvZycpKSB7XG4gICAgaWYgKGRpYWxvZy5vcGVuKSB7XG4gICAgICBkaWFsb2cuY2xvc2UoKVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcbmNvbnN0IGRhcmtNb2RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGJ1dHRvbicpXG5kYXJrTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvRGFya01vZGUpXG5cbmNvbnN0IGlzRGFya01vZGVFbmFibGVkID0gbWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcbmlmIChpc0RhcmtNb2RlRW5hYmxlZCkge1xuICBzd2l0Y2hUb0RhcmtNb2RlKClcblxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIHN3aXRjaFRvRGFya01vZGUoKSB7XG4gIGh0bWwuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpXG4gIGlmIChodG1sLmNsYXNzTmFtZSA9PSAnZGFyaycpIHtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pbm5lclRleHQgPSAnbGlnaHQgbW9kZSc7XG4gIH1cbiAgZWxzZSB7XG4gICAgZGFya01vZGVCdXR0b24uaW5uZXJUZXh0ID0gJ2RhcmsgbW9kZSc7XG4gIH1cbn1cblxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWxlY3RlZHtcbmJvcmRlci1yYWRpdXM6NXB4O1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xucGFkZGluZzo1cHg7XG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9jYWxjdWxhdGlvblR5cGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5QixXQUFXOztBQUVYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWxlY3RlZHtcXG5ib3JkZXItcmFkaXVzOjVweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxucGFkZGluZzo1cHg7XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3QuZGFya3tcbi0tYmxhY2s6d2hpdGU7XG4tLXdoaXRlOmJsYWNrO1xuLS1ncmVlbjojMDEyMTIwO1xuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlOztBQUVmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290LmRhcmt7XFxuLS1ibGFjazp3aGl0ZTtcXG4tLXdoaXRlOmJsYWNrO1xcbi0tZ3JlZW46IzAxMjEyMDtcXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEobWluLXdpZHRoOjUwMHB4KXtcbmFydGljbGUgZm9ybSBkaXZ7XG5mbGV4LWRpcmVjdGlvbjpyb3c7XG59fVxuXG5cbkBtZWRpYShtaW4td2lkdGg6OTAwcHgpe1xuaGVhZGVye1xuZ2FwOjRweDtcblxuICB9XG5cbmhlYWRlciBzcGFue1xuZGlzcGxheTppbmxpbmU7XG5mb250LXNpemU6Mi4ydnc7XG4gIH1cblxubWFpbntcbmhlaWdodDo5MHZoO1xubWluLWhlaWdodDogNTUwcHg7XG5ncmlkLXRlbXBsYXRlOidleHBlbnNlVHlwZSBleHBlbnNlQ29udGVudCcgMC45ZnJcbiAgICAgICAgICAgICAgJ3R5cGVPZkNhbGN1bGF0aW9uIGV4cGVuc2VDb250ZW50JyAwLjlmciAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJ3Nob3dMaXN0IGV4cGVuc2VDb250ZW50JyAxZnJcbiAgICAgICAgICAgICAgJ3Nob3dMaXN0IHJlc3VsdENvbnRlbnQnIDFmciAvIDFmciAxZnJcbn1cblxuXG4gIC8qIG9uIHRoZSBsZWZ0ICovXG5tYWluIGFydGljbGU6Zmlyc3Qtb2YtdHlwZXtcbmdyaWQtYXJlYTogZXhwZW5zZVR5cGU7XG59XG4jdHlwZUNvbnRhaW5lcntcbmdyaWQtYXJlYTp0eXBlT2ZDYWxjdWxhdGlvbjtcbn1cbiNsaXN0Q29udGFpbmVye1xuZ3JpZC1hcmVhOnNob3dMaXN0O1xufVxuXG4vKiBvbiB0aGUgcmlnaHQgKi9cblxuI2V4cGVuc2VDb250ZW50e1xuZ3JpZC1hcmVhOmV4cGVuc2VDb250ZW50O1xufVxuI3Jlc3VsdENvbnRlbnR7XG5ncmlkLWFyZWE6cmVzdWx0Q29udGVudDtcbn1cblxuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvZGVza3RvcFN1cHBvcnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLE9BQU87O0VBRUw7O0FBRUY7QUFDQSxjQUFjO0FBQ2QsZUFBZTtFQUNiOztBQUVGO0FBQ0EsV0FBVztBQUNYLGlCQUFpQjtBQUNqQjs7OztBQUlBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7O0FBR0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhKG1pbi13aWR0aDo1MDBweCl7XFxuYXJ0aWNsZSBmb3JtIGRpdntcXG5mbGV4LWRpcmVjdGlvbjpyb3c7XFxufX1cXG5cXG5cXG5AbWVkaWEobWluLXdpZHRoOjkwMHB4KXtcXG5oZWFkZXJ7XFxuZ2FwOjRweDtcXG5cXG4gIH1cXG5cXG5oZWFkZXIgc3BhbntcXG5kaXNwbGF5OmlubGluZTtcXG5mb250LXNpemU6Mi4ydnc7XFxuICB9XFxuXFxubWFpbntcXG5oZWlnaHQ6OTB2aDtcXG5taW4taGVpZ2h0OiA1NTBweDtcXG5ncmlkLXRlbXBsYXRlOidleHBlbnNlVHlwZSBleHBlbnNlQ29udGVudCcgMC45ZnJcXG4gICAgICAgICAgICAgICd0eXBlT2ZDYWxjdWxhdGlvbiBleHBlbnNlQ29udGVudCcgMC45ZnIgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAnc2hvd0xpc3QgZXhwZW5zZUNvbnRlbnQnIDFmclxcbiAgICAgICAgICAgICAgJ3Nob3dMaXN0IHJlc3VsdENvbnRlbnQnIDFmciAvIDFmciAxZnJcXG59XFxuXFxuXFxuICAvKiBvbiB0aGUgbGVmdCAqL1xcbm1haW4gYXJ0aWNsZTpmaXJzdC1vZi10eXBle1xcbmdyaWQtYXJlYTogZXhwZW5zZVR5cGU7XFxufVxcbiN0eXBlQ29udGFpbmVye1xcbmdyaWQtYXJlYTp0eXBlT2ZDYWxjdWxhdGlvbjtcXG59XFxuI2xpc3RDb250YWluZXJ7XFxuZ3JpZC1hcmVhOnNob3dMaXN0O1xcbn1cXG5cXG4vKiBvbiB0aGUgcmlnaHQgKi9cXG5cXG4jZXhwZW5zZUNvbnRlbnR7XFxuZ3JpZC1hcmVhOmV4cGVuc2VDb250ZW50O1xcbn1cXG4jcmVzdWx0Q29udGVudHtcXG5ncmlkLWFyZWE6cmVzdWx0Q29udGVudDtcXG59XFxuXFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2xpc3R7XG5ib3JkZXItcmFkaXVzOjEycHg7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG53aWR0aDo5MCU7XG5oZWlnaHQ6OTAlO1xub3ZlcmZsb3c6c2Nyb2xsO1xufVxuXG4jbGlzdCBsaS5zZWxlY3RlZEl0ZW17XG5vdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xubGlzdC1zdHlsZTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsU0FBUztBQUNULFVBQVU7QUFDVixlQUFlO0FBQ2Y7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNsaXN0e1xcbmJvcmRlci1yYWRpdXM6MTJweDtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxud2lkdGg6OTAlO1xcbmhlaWdodDo5MCU7XFxub3ZlcmZsb3c6c2Nyb2xsO1xcbn1cXG5cXG4jbGlzdCBsaS5zZWxlY3RlZEl0ZW17XFxub3V0bGluZTogMnB4IHNvbGlkIG9yYW5nZTtcXG5saXN0LXN0eWxlOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZ3tcbnRleHQtYWxpZ246Y2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5jb2xvcjp2YXIoLS1ibGFjayk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBvc2l0aW9uOmZpeGVkO1xudG9wOjUwJTtcbmxlZnQ6NTAlO1xudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbnotaW5kZXg6MjtcbnBhZGRpbmc6MS4ydnc7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbmRpYWxvZyA+ICp7XG5kaXNwbGF5OmJsb2NrO1xubWFyZ2luLWxlZnQ6YXV0bztcbm1hcmdpbi1yaWdodDphdXRvO1xubWFyZ2luLXRvcDoxMHB4O1xuXG59XG4gIFxuZGlhbG9nOjpiYWNrZHJvcHtcbnBvc2l0aW9uOmZpeGVkO1xuYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoIzIxNUE1OUFBLGJsYWNrKSA7XG5iYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG5vcGFjaXR5OjAuNztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQiw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLE9BQU87QUFDUCxRQUFRO0FBQ1IsK0JBQStCO0FBQy9CLFNBQVM7QUFDVCxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsZUFBZTs7QUFFZjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrREFBa0Q7QUFDbEQscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2d7XFxudGV4dC1hbGlnbjpjZW50ZXI7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbnBvc2l0aW9uOmZpeGVkO1xcbnRvcDo1MCU7XFxubGVmdDo1MCU7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG56LWluZGV4OjI7XFxucGFkZGluZzoxLjJ2dztcXG5ib3JkZXItcmFkaXVzOjEwcHg7XFxufVxcblxcbmRpYWxvZyA+ICp7XFxuZGlzcGxheTpibG9jaztcXG5tYXJnaW4tbGVmdDphdXRvO1xcbm1hcmdpbi1yaWdodDphdXRvO1xcbm1hcmdpbi10b3A6MTBweDtcXG5cXG59XFxuICBcXG5kaWFsb2c6OmJhY2tkcm9we1xcbnBvc2l0aW9uOmZpeGVkO1xcbmJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCMyMTVBNTlBQSxibGFjaykgO1xcbmJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG5vcGFjaXR5OjAuNztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBtb2JpbGUgZmlyc3QgMzAweDQ0MCAqL1xuXG4qe1xucGFkZGluZzogMDtcbm1hcmdpbjowO1xuYm94LXNpemluZzpib3JkZXItYm94O1xufVxuXG46cm9vdHtcblxuLyogY29sb3Igc2VjdGlvbiAqL1xuLS1ibGFjazogYmxhY2s7XG4tLXdoaXRlOiB3aGl0ZTtcbi0tZ3JlZW46ICMwOUZGOTk7XG59XG5cbi8qIHJlcGV0aXRpb24gc2VjdGlvbiAqL1xuXG5cblxuaGVhZGVyLCBhcnRpY2xle1xuZGlzcGxheTpmbGV4O1xuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcbmFsaWduLWl0ZW1zOmNlbnRlcjtcbnRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5tYWlue1xuZGlzcGxheTpncmlkO1xufVxuXG4vKiBpbmRpdmlkdWFsIHNlY3Rpb24gKi9cblxuYm9keXtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOiB2YXIoLS1ibGFjayk7XG50cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xudHJhbnNpdGlvbi1kdXJhdGlvbjoycztcbn1cblxuaGVhZGVye1xuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spXG59XG5cbmhlYWRlciBoMXtcbmZvbnQtc2l6ZTptYXgoMXJlbSwzLjh2dyk7XG59XG5oZWFkZXIgc3BhbntcbmRpc3BsYXk6YmxvY2s7XG5mb250LXNpemU6bWF4KDAuN3JlbSwyLjh2dyk7XG59XG5cbmhlYWRlciBidXR0b257XG5oZWlnaHQ6OTAlO1xufVxuXG5tYWlue1xuZ3JpZC10ZW1wbGF0ZTogMTAlIDEwJSAxZnIgMjAwcHggMTAlLyAxZnI7XG5nYXA6MTBweDtcbnBhZGRpbmctdG9wOjVweDtcbnBhZGRpbmctYm90dG9tOjVweDtcbn1cblxuYXJ0aWNsZXtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG4vKiBhbGlnbi1zZWxmOmNlbnRlcjsgKi9cbmp1c3RpZnktc2VsZjpjZW50ZXI7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmdhcDogN3B4O1xucGFkZGluZzogNXB4IDBweDtcbndpZHRoOjk4JTtcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cbmFydGljbGUgZm9ybSBkaXZ7XG5kaXNwbGF5OmZsZXg7XG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xuZ2FwOiA3cHg7XG5cbn1cblxuYnV0dG9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZzogOHB4O1xuYm9yZGVyLXJhZGl1czoxMnB4O1xudHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgY29sb3IgMC43c1xufVxuXG5idXR0b246aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG5jb2xvcjp2YXIoLS13aGl0ZSk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG5jdXJzb3I6cG9pbnRlcjtcbn1cblxuXG5zZWxlY3R7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5jb2xvcjp2YXIoLS1ibGFjayk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5wYWRkaW5nOjZweDtcbn1cblxuaW5wdXRbdHlwZT0ndGV4dCdde1xucGFkZGluZzozcHg7XG5ib3JkZXItcmFkaXVzOjRweDtcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5jb2xvcjp2YXIoLS1ibGFjayk7XG5cbn1cblxuXG4vKiBhcnRpY2xlIHNlY3Rpb24gKi9cblxuI2xpc3RDb250YWluZXJ7XG5ncmlkLXJvdy1zdGFydDotMztcbmdyaWQtcm93LWVuZDotMztcbn1cbiNsaXN0Q29udGFpbmVye1xub3ZlcmZsb3c6c2Nyb2xsO1xud2lkdGg6OTglO1xubWF4LWhlaWdodDo5OCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHlCQUF5Qjs7QUFFekI7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEI7O0FBRUEsdUJBQXVCOzs7O0FBSXZCO0FBQ0EsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBLHVCQUF1Qjs7QUFFdkI7QUFDQSw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EseUNBQXlDO0FBQ3pDLFFBQVE7QUFDUixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsUUFBUTs7QUFFUjs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLGNBQWM7QUFDZDs7O0FBR0E7QUFDQSw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0Isa0JBQWtCOztBQUVsQjs7O0FBR0Esb0JBQW9COztBQUVwQjtBQUNBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7QUFDQTtBQUNBLGVBQWU7QUFDZixTQUFTO0FBQ1QsY0FBYztBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIG1vYmlsZSBmaXJzdCAzMDB4NDQwICovXFxuXFxuKntcXG5wYWRkaW5nOiAwO1xcbm1hcmdpbjowO1xcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuXFxuLyogY29sb3Igc2VjdGlvbiAqL1xcbi0tYmxhY2s6IGJsYWNrO1xcbi0td2hpdGU6IHdoaXRlO1xcbi0tZ3JlZW46ICMwOUZGOTk7XFxufVxcblxcbi8qIHJlcGV0aXRpb24gc2VjdGlvbiAqL1xcblxcblxcblxcbmhlYWRlciwgYXJ0aWNsZXtcXG5kaXNwbGF5OmZsZXg7XFxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxudGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbm1haW57XFxuZGlzcGxheTpncmlkO1xcbn1cXG5cXG4vKiBpbmRpdmlkdWFsIHNlY3Rpb24gKi9cXG5cXG5ib2R5e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jb2xvcjogdmFyKC0tYmxhY2spO1xcbnRyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvciwgY29sb3I7XFxudHJhbnNpdGlvbi1kdXJhdGlvbjoycztcXG59XFxuXFxuaGVhZGVye1xcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKVxcbn1cXG5cXG5oZWFkZXIgaDF7XFxuZm9udC1zaXplOm1heCgxcmVtLDMuOHZ3KTtcXG59XFxuaGVhZGVyIHNwYW57XFxuZGlzcGxheTpibG9jaztcXG5mb250LXNpemU6bWF4KDAuN3JlbSwyLjh2dyk7XFxufVxcblxcbmhlYWRlciBidXR0b257XFxuaGVpZ2h0OjkwJTtcXG59XFxuXFxubWFpbntcXG5ncmlkLXRlbXBsYXRlOiAxMCUgMTAlIDFmciAyMDBweCAxMCUvIDFmcjtcXG5nYXA6MTBweDtcXG5wYWRkaW5nLXRvcDo1cHg7XFxucGFkZGluZy1ib3R0b206NXB4O1xcbn1cXG5cXG5hcnRpY2xle1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG4vKiBhbGlnbi1zZWxmOmNlbnRlcjsgKi9cXG5qdXN0aWZ5LXNlbGY6Y2VudGVyO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmdhcDogN3B4O1xcbnBhZGRpbmc6IDVweCAwcHg7XFxud2lkdGg6OTglO1xcbmJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuYXJ0aWNsZSBmb3JtIGRpdntcXG5kaXNwbGF5OmZsZXg7XFxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbmdhcDogN3B4O1xcblxcbn1cXG5cXG5idXR0b257XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucGFkZGluZzogOHB4O1xcbmJvcmRlci1yYWRpdXM6MTJweDtcXG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciAwLjdzXFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuY29sb3I6dmFyKC0td2hpdGUpO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5jdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuXFxuc2VsZWN0e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbnBhZGRpbmc6NnB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J117XFxucGFkZGluZzozcHg7XFxuYm9yZGVyLXJhZGl1czo0cHg7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcblxcbn1cXG5cXG5cXG4vKiBhcnRpY2xlIHNlY3Rpb24gKi9cXG5cXG4jbGlzdENvbnRhaW5lcntcXG5ncmlkLXJvdy1zdGFydDotMztcXG5ncmlkLXJvdy1lbmQ6LTM7XFxufVxcbiNsaXN0Q29udGFpbmVye1xcbm92ZXJmbG93OnNjcm9sbDtcXG53aWR0aDo5OCU7XFxubWF4LWhlaWdodDo5OCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbGN1bGF0aW9uVHlwZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbGN1bGF0aW9uVHlwZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFya21vZGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrbW9kZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcFN1cHBvcnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXNrdG9wU3VwcG9ydC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbi8vIGltcG9ydCBzdHlsZXNcbmltcG9ydCAnLi9zdHlsaW5nL3N0eWxlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2Rhcmttb2RlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2Rhcmttb2RlLmpzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2xpc3QuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvZGVza3RvcFN1cHBvcnQuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvcG9wdXAuY3NzJ1xuXG5cbi8vIGltcG9ydCBmdW5jdGlvbmFsaXR5XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9saXN0L2xpc3RTdHJ1Y3R1cmUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvbGlzdC9hZGRJdGVtc1RvTGlzdC5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS93aW5kb3cvb3BlbldpbmRvdy5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9kaXNwbGF5L2V4cGVuc2VUeXBlLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3R5cGVDYWxjdWxhdG9yLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2NhbGN1bGF0ZS9jYWxjdWxhdGUuanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9