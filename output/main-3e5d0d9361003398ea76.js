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
  let indexo = 0
  let result = currentList.array.reduce((accumulator, currentItem) => {
    indexo += 1;
    switch (currentItem.type) {
      case 'food':
        return accumulator + calculatedFood(currentItem);
      case 'product':
      case 'money':
        return accumulator + currentItem.price;
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

function getProcesure(currentFood) {
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
/* harmony import */ var _list_listStructure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list/listStructure.js */ "./input/functionality/list/listStructure.js");
/* harmony import */ var _editItemOrList_selection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../editItemOrList/selection.js */ "./input/functionality/editItemOrList/selection.js");



const container = document.getElementById('list');

let listSelect = document.querySelector('#selectList')

function displayList() {
  restartEverything();
  currentList.array.forEach(appendItems)
  list.forEach(appendLists)
  ;(0,_list_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)()
}

function restartEverything() {
  let editButton = document.querySelector('#listContainer div + button');
  editButton.classList.remove('onSelection');
  window.selectedIndex = '';

  container.innerHTML = '';

  listSelect = document.querySelector('#selectList');
  listSelect.innerHTML = '';
}

function appendItems(item, currentListOfItemsIndex) {
  let li = document.createElement('li');
  li.addEventListener('click', _editItemOrList_selection_js__WEBPACK_IMPORTED_MODULE_1__.selectDiv)
  let nameText = document.createElement('p');
  nameText.innerText = item.name;
  nameText.style.color = returnDifferentColorDependingOnType(item);
  nameText.dataset.index = currentListOfItemsIndex;
  container.append(li);
  li.append(nameText);
}

function returnDifferentColorDependingOnType(item) {
  switch (item.type) {
    case 'food':
      return color.food;
    case 'product':
      return color.product;
    case 'money':
      return color.money;


  }

}


function appendLists(list, currentListofListsIndex) {

  let option = document.createElement('option')
  option.innerHTML = `${list.name}`;
  option.value = `${currentListofListsIndex}`;
  if (window.valueOfSelect == currentListofListsIndex) {
    option.selected = true;
  }
  listSelect.append(option);
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




function selectParent(event) {
  let parent = event.target.parentNode;

  removeClasses()
  let editItemButton = document.querySelector(`#listContainer div + button`);
  editItemButton.classList.add('onSelection')
  parent.classList.add('selectedItem');
}
function removeClasses() {
  let onSelectionClass = document.querySelector('.onSelection')
  if(onSelectionClass){

  onSelectionClass.classList.remove('onSelection')
  }
  let selectedItems = document.querySelectorAll('.selectedItem');
  selectedItems.forEach(element => element.classList.remove('selectedItem'));

}


/***/ }),

/***/ "./input/functionality/file/downloadFile.js":
/*!**************************************************!*\
  !*** ./input/functionality/file/downloadFile.js ***!
  \**************************************************/
/***/ (() => {

const downloadButton = document.querySelector('article:first-of-type button:nth-of-type(2)');
downloadButton.addEventListener('click', downloadTheListStructure)

function downloadTheListStructure(){
let fileToDownload = new File([JSON.stringify(window.list)], `list-${new Date().toISOString()}`,{type:'application/json'});
let myUrl = URL.createObjectURL(fileToDownload);
let link = document.createElement('a');
link.href = myUrl;
link.download = fileToDownload.name
document.body.appendChild(link)
link.click()
document.body.removeChild(link)
URL.revokeObjectURL(myUrl)
}


/***/ }),

/***/ "./input/functionality/file/uploadFile.js":
/*!************************************************!*\
  !*** ./input/functionality/file/uploadFile.js ***!
  \************************************************/
/***/ (() => {

const uploadButton = document.querySelector(`input[type='file']`);
uploadButton.addEventListener('change', updateStructure)

function updateStructure(){
alert(`it's updating my boooysss`);


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

  (0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)((0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Food)(nameValue,
    getNumberOf('price'),
    getNumberOf('amountPerPrice'),
    getNumberOf('amountPerDay'),
    getNumberOf('weekAmount'),
    getNumberOf('monthAmount')))
}


function addProductToTheList() {
  let nameValue = document.getElementById('name').value;
  (0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)((0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Product)(nameValue, getNumberOf('price')))
}


function addMoneyToTheList() {
  (0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)((0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Money)(getNumberOf('price')))
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

/***/ "./input/functionality/list/currentList.js":
/*!*************************************************!*\
  !*** ./input/functionality/list/currentList.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../display/itemsOrLists.js */ "./input/functionality/display/itemsOrLists.js");



let selectForCurrentListButton = document.getElementById('selectList');
selectForCurrentListButton.addEventListener('change', changeCurrentList);

function changeCurrentList(event){
  alert('this has been changed')
window.valueOfSelect = Number(event.target.value);
window.currentList = list[valueOfSelect];
(0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_0__.displayList)()
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
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   Money: () => (/* binding */ Money),
/* harmony export */   Product: () => (/* binding */ Product),
/* harmony export */   pushToArrayAndDisplayList: () => (/* binding */ pushToArrayAndDisplayList),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _display_expenseType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../display/expenseType.js */ "./input/functionality/display/expenseType.js");
/* harmony import */ var _display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../display/itemsOrLists.js */ "./input/functionality/display/itemsOrLists.js");





// color section
if (localStorage.color) {
  window.color = JSON.parse(localStorage.color)
}
else {
  window.color = {
    food: 'violet',
    product: 'blue',
    money: 'green',
  }
}


// class section

function Money(price, name = price, type = 'money') {
  return { price, name, type }
}



function Product(name, price, type = 'product') {
  return { name, price, type }
}



function Food(name, price, amountPerPrice, amountPerDay, weekAmount, monthAmount, type = 'food') {
let myWeekAmount;
let myMonthAmount;
  if (weekAmount) {
    myWeekAmount = weekAmount;
  }
  else {
    myWeekAmount = parseInt(monthAmount / 4);
  }

  if (monthAmount) {
    myMonthAmount = monthAmount;
  }
  else {
    myMonthAmount = parseInt(weekAmount * 4);
  }

  return { name, price, amountPerPrice, amountPerDay, weekAmount: myWeekAmount, monthAmount: myMonthAmount, type }
}


function List(name, array = []) {
  return { array, name }
}


// list section

if (localStorage.list) {
  window.list = JSON.parse(localStorage.list)
  window.currentList = window.list[0];
  (0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_1__.displayList)()
}
else {
  window.currentList = new List('default');
  window.list = [currentList];
}



function updateLocalStorage() {
  localStorage.setItem('list', JSON.stringify(window.list))
  localStorage.setItem('color', JSON.stringify(window.color))
}


// function to push to array section

function pushToArrayAndDisplayList(el) {
  currentList.array.push(el);
  (0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_1__.displayList)()
  ;(0,_display_expenseType_js__WEBPACK_IMPORTED_MODULE_0__.displayContentForType)()
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

/***/ "./input/functionality/window/addNewList.js":
/*!**************************************************!*\
  !*** ./input/functionality/window/addNewList.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_listStructure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../list/listStructure.js */ "./input/functionality/list/listStructure.js");
/* harmony import */ var _openWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openWindow.js */ "./input/functionality/window/openWindow.js");
/* harmony import */ var _display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../display//itemsOrLists.js */ "./input/functionality/display/itemsOrLists.js");




const addNewListDialog = document.querySelector('#addNewListPopUp')

const addNewListButton = addNewListDialog.querySelector('button:last-of-type')

addNewListButton.addEventListener('click', addNewList )
function addNewList(){
let nameForNewInput = addNewListDialog.querySelector('input').value;
list.push((0,_list_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.List)(nameForNewInput))
;(0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_2__.displayList)()
;(0,_openWindow_js__WEBPACK_IMPORTED_MODULE_1__.closePopUp)()
}


/***/ }),

/***/ "./input/functionality/window/generateContentForEditWindow.js":
/*!********************************************************************!*\
  !*** ./input/functionality/window/generateContentForEditWindow.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateContentForListWindow: () => (/* binding */ generateContentForListWindow),
/* harmony export */   generateContentForWindow: () => (/* binding */ generateContentForWindow)
/* harmony export */ });
/* harmony import */ var _openWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openWindow.js */ "./input/functionality/window/openWindow.js");
/* harmony import */ var _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../list/addItemsToList.js */ "./input/functionality/list/addItemsToList.js");
/* harmony import */ var _list_listStructure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../list/listStructure.js */ "./input/functionality/list/listStructure.js");
/* harmony import */ var _display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../display/itemsOrLists.js */ "./input/functionality/display/itemsOrLists.js");





const dialog = document.getElementById('editPopUp');


function generateContentForWindow() {
  if (window.selectedIndex) {
    generateContentForDialogForItems()
    ;(0,_openWindow_js__WEBPACK_IMPORTED_MODULE_0__.addEventListenerToButtons)()
  } else {
    throw new Error(`you haven't selected anything`)
  }
}

function generateContentForListWindow() {
    generateContentForDialogForLists()
    ;(0,_openWindow_js__WEBPACK_IMPORTED_MODULE_0__.addEventListenerToButtons)()
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
function generateContentForDialogForLists(){

    dialog.innerHTML = `<button class='closeBtn'>close</button>
        <p>name:</p>
        <input value='${currentList.name}'type="text" id="name">
        <button type='button' id='apply'>apply</button>`;

    let applyButton = dialog.querySelector('#apply');
    applyButton.addEventListener('click', applyChangesForLists);
}

function applyChangesForItems() {
  let item = currentList.array[selectedIndex];
  switch (item.type) {
    case 'food':
      runPromiseToApplyValue(getValuesFromFoodInputs,getValuesForFood,checkIfFoodIsEmpty,reassingValueFromCurrentIndexIfItsAFood,true);
      break;
    case 'product':
      runPromiseToApplyValue(getValuesFromProductInputs,getValuesForProduct,checkIfProductIsEmpty,reassingValueFromCurrentIndexIfItsAProduct);
      break;
    case 'money':
      runPromiseToApplyValue(getValuesFromMoneyInputs,getValuesForMoney,checkIfMoneyIsEmpty,reassingValueFromCurrentIndexIfItsMoney);
      break;

  }
}

function runPromiseToApplyValue(getValuesFromInput_callback, getValuesFor_callBack, checkIfItemIsEmpty_callBack, reassingValueFromCurrentIndexIfItsA_callBack,workingWithFood = false,) {
window.workingWithFood = workingWithFood;
      // remember to add validity in the catch in all of these 
  getValuesFromInput_callback()
    .then(getValuesFor_callBack)
    .then(checkIfItemIsEmpty_callBack)
    .then(makeWeeksOrMonthsValid)
    .then(reassingValueFromCurrentIndexIfItsA_callBack)
    .then(_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_3__.displayList)
    .then(_openWindow_js__WEBPACK_IMPORTED_MODULE_0__.closePopUp)
    .catch(error => console.log(error));
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
  if(window.workingWithFood){

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
  else{
    return food;
  }
}





function reassingValueFromCurrentIndexIfItsAFood(food) {
  currentList.array[selectedIndex] = (0,_list_listStructure_js__WEBPACK_IMPORTED_MODULE_2__.Food)(food.name, food.price, food.amountPerPrice, food.amountPerDay, food.weekAmount, food.monthAmount)
}

function reassingValueFromCurrentIndexIfItsAProduct(product) {
  currentList.array[selectedIndex] = (0,_list_listStructure_js__WEBPACK_IMPORTED_MODULE_2__.Product)(product.name, product.price)
}


function reassingValueFromCurrentIndexIfItsMoney(money) {
  currentList.array[selectedIndex] = (0,_list_listStructure_js__WEBPACK_IMPORTED_MODULE_2__.Money)(money.price)
}




function applyChangesForLists() {
let name = dialog.querySelector('#name').value;
currentList.name = name;
(0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_3__.displayList)()
;(0,_openWindow_js__WEBPACK_IMPORTED_MODULE_0__.closePopUp)()
}




/***/ }),

/***/ "./input/functionality/window/openChangeColorWindow.js":
/*!*************************************************************!*\
  !*** ./input/functionality/window/openChangeColorWindow.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../display/itemsOrLists.js */ "./input/functionality/display/itemsOrLists.js");


const changeColorButton = document.querySelector('article:first-of-type button:first-of-type');

changeColorButton.addEventListener('click', openColorWindow)
function openColorWindow() {
  let colorWindow = document.getElementById('colorPopUp');
  colorWindow.showModal()
  for (let colorPicker of document.querySelectorAll(`input[type='color']`)) {
    colorPicker.addEventListener('change', updateColors)
  }
}

function updateColors() {
  window.color.food = document.querySelectorAll(`input[type='color']`)[0].value
  window.color.product = document.querySelectorAll(`input[type='color']`)[1].value
  window.color.money = document.querySelectorAll(`input[type='color']`)[2].value
  ;(0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_0__.displayList)()
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
/* harmony import */ var _generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateContentForEditWindow.js */ "./input/functionality/window/generateContentForEditWindow.js");



const editCurrentListButton = document.querySelector('#listContainer div button');
const editButton = document.querySelector('#listContainer div + button');
const addNewListButton = document.querySelector('#listContainer button:nth-of-type(2)');

const addNewListDialog = document.getElementById('addNewListPopUp');
const editDialog = document.getElementById('editPopUp');



editButton.addEventListener('click', generateContentAndOpenWindow);

function generateContentAndOpenWindow() {
  try {
    (0,_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_0__.generateContentForWindow)()
    openWindow(editDialog)
  }
  catch (error) {
    console.log(error);
  }
}

editCurrentListButton.addEventListener('click', generateContentAndOpenWindowForList)
function generateContentAndOpenWindowForList() {
  try {
    ;(0,_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_0__.generateContentForListWindow)()
    openWindow(editDialog)
  }
  catch (error) {
    console.log(error);
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
--yellow: #EEEE9B;
--lightYellow: #F5BB00;
--red:#dc143c;
--lightRed:#ED6464;
}
`, "",{"version":3,"sources":["webpack://./input/styling/darkmode.css"],"names":[],"mappings":"AAAA;AACA,aAAa;AACb,aAAa;AACb,eAAe;AACf,iBAAiB;AACjB,sBAAsB;AACtB,aAAa;AACb,kBAAkB;AAClB","sourcesContent":[":root.dark{\n--black:white;\n--white:black;\n--green:#012120;\n--yellow: #EEEE9B;\n--lightYellow: #F5BB00;\n--red:#dc143c;\n--lightRed:#ED6464;\n}\n"],"sourceRoot":""}]);
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


li{
list-style: none;
}

#list li.selectedItem{
outline: 2px solid orange;
}
`, "",{"version":3,"sources":["webpack://./input/styling/list.css"],"names":[],"mappings":"AAAA;AACA,kBAAkB;AAClB,8BAA8B;AAC9B,SAAS;AACT,UAAU;AACV,eAAe;AACf;;;AAGA;AACA,gBAAgB;AAChB;;AAEA;AACA,yBAAyB;AACzB","sourcesContent":["#list{\nborder-radius:12px;\nborder: 2px solid var(--black);\nwidth:90%;\nheight:90%;\noverflow:scroll;\n}\n\n\nli{\nlist-style: none;\n}\n\n#list li.selectedItem{\noutline: 2px solid orange;\n}\n"],"sourceRoot":""}]);
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
--yellow: #F5BB00;
--lightYellow: #EEEE9B;
--red:#ED6464;
--lightRed:#dc143c;
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

/* edit item button */
#listContainer div + button{
background-color: var(--red);
bottom:0;
right: 0;
position:absolute;
padding: 5px;
border-radius:30px;
text-transform: uppercase;
}

#listContainer div + button:hover{
background-color: var(--lightRed);
}

#listContainer div + button.onSelection{
background-color: var(--yellow);
color: var(--white);
border:2px solid var(--white);
padding: 6px;
border-radius:10px;
}

#listContainer div + button.onSelection:hover{
background-color: var(--lightYellow);
color:var(--black);
border: 2px solid var(--black);
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
position: relative
}
#listContainer{
overflow:scroll;
width:98%;
max-height:98%;
}
`, "",{"version":3,"sources":["webpack://./input/styling/style.css"],"names":[],"mappings":"AAAA,yBAAyB;;AAEzB;AACA,UAAU;AACV,QAAQ;AACR,qBAAqB;AACrB;;AAEA;;AAEA,kBAAkB;AAClB,cAAc;AACd,cAAc;AACd,gBAAgB;AAChB,iBAAiB;AACjB,sBAAsB;AACtB,aAAa;AACb,kBAAkB;AAClB;;AAEA,uBAAuB;;;;AAIvB;AACA,YAAY;AACZ,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB;;AAEA;AACA,YAAY;AACZ;;AAEA,uBAAuB;;AAEvB;AACA,8BAA8B;AAC9B,mBAAmB;AACnB,2CAA2C;AAC3C,sBAAsB;AACtB;;AAEA;AACA;AACA;;AAEA;AACA,yBAAyB;AACzB;AACA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,UAAU;AACV;;AAEA;AACA,yCAAyC;AACzC,QAAQ;AACR,eAAe;AACf,kBAAkB;AAClB;;AAEA;AACA,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,uBAAuB;AACvB,mBAAmB;AACnB,6BAA6B;AAC7B,QAAQ;AACR,gBAAgB;AAChB,SAAS;AACT,kBAAkB;AAClB;AACA;AACA,YAAY;AACZ,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,QAAQ;;AAER;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,YAAY;AACZ,kBAAkB;AAClB;AACA;;AAEA,qBAAqB;AACrB;AACA,4BAA4B;AAC5B,QAAQ;AACR,QAAQ;AACR,iBAAiB;AACjB,YAAY;AACZ,kBAAkB;AAClB,yBAAyB;AACzB;;AAEA;AACA,iCAAiC;AACjC;;AAEA;AACA,+BAA+B;AAC/B,mBAAmB;AACnB,6BAA6B;AAC7B,YAAY;AACZ,kBAAkB;AAClB;;AAEA;AACA,oCAAoC;AACpC,kBAAkB;AAClB,8BAA8B;AAC9B;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,cAAc;AACd;;;;AAIA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,WAAW;AACX;;AAEA;AACA,WAAW;AACX,iBAAiB;AACjB,6BAA6B;AAC7B,6BAA6B;AAC7B,kBAAkB;;AAElB;;;AAGA,oBAAoB;;AAEpB;AACA,iBAAiB;AACjB,eAAe;AACf;AACA;AACA;AACA,eAAe;AACf,SAAS;AACT,cAAc;AACd","sourcesContent":["/* mobile first 300x440 */\n\n*{\npadding: 0;\nmargin:0;\nbox-sizing:border-box;\n}\n\n:root{\n\n/* color section */\n--black: black;\n--white: white;\n--green: #09FF99;\n--yellow: #F5BB00;\n--lightYellow: #EEEE9B;\n--red:#ED6464;\n--lightRed:#dc143c;\n}\n\n/* repetition section */\n\n\n\nheader, article{\ndisplay:flex;\njustify-content:center;\nalign-items:center;\ntext-align:center;\n}\n\nmain{\ndisplay:grid;\n}\n\n/* individual section */\n\nbody{\nbackground-color: var(--white);\ncolor: var(--black);\ntransition-property:background-color, color;\ntransition-duration:2s;\n}\n\nheader{\nborder-bottom:2px solid var(--black)\n}\n\nheader h1{\nfont-size:max(1rem,3.8vw);\n}\nheader span{\ndisplay:block;\nfont-size:max(0.7rem,2.8vw);\n}\n\nheader button{\nheight:90%;\n}\n\nmain{\ngrid-template: 10% 10% 1fr 200px 10%/ 1fr;\ngap:10px;\npadding-top:5px;\npadding-bottom:5px;\n}\n\narticle{\nflex-direction:column;\njustify-content:center;\nalign-items:center;\n/* align-self:center; */\njustify-self:center;\nborder:2px solid var(--black);\ngap: 7px;\npadding: 5px 0px;\nwidth:98%;\nborder-radius:10px;\n}\narticle form div{\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items:center;\ngap: 7px;\n\n}\n\nbutton{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding: 8px;\nborder-radius:12px;\ntransition: background-color, color 0.7s\n}\n\n/* edit item button */\n#listContainer div + button{\nbackground-color: var(--red);\nbottom:0;\nright: 0;\nposition:absolute;\npadding: 5px;\nborder-radius:30px;\ntext-transform: uppercase;\n}\n\n#listContainer div + button:hover{\nbackground-color: var(--lightRed);\n}\n\n#listContainer div + button.onSelection{\nbackground-color: var(--yellow);\ncolor: var(--white);\nborder:2px solid var(--white);\npadding: 6px;\nborder-radius:10px;\n}\n\n#listContainer div + button.onSelection:hover{\nbackground-color: var(--lightYellow);\ncolor:var(--black);\nborder: 2px solid var(--black);\n}\n\nbutton:hover{\nbackground-color: var(--black);\ncolor:var(--white);\nborder: 2px solid var(--white);\ncursor:pointer;\n}\n\n\n\nselect{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding:6px;\n}\n\ninput[type='text']{\npadding:3px;\nborder-radius:4px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\ncolor:var(--black);\n\n}\n\n\n/* article section */\n\n#listContainer{\ngrid-row-start:-3;\ngrid-row-end:-3;\nposition: relative\n}\n#listContainer{\noverflow:scroll;\nwidth:98%;\nmax-height:98%;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _functionality_list_currentList_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functionality/list/currentList.js */ "./input/functionality/list/currentList.js");
/* harmony import */ var _functionality_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functionality/list/addItemsToList.js */ "./input/functionality/list/addItemsToList.js");
/* harmony import */ var _functionality_window_openWindow_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functionality/window/openWindow.js */ "./input/functionality/window/openWindow.js");
/* harmony import */ var _functionality_window_addNewList_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functionality/window/addNewList.js */ "./input/functionality/window/addNewList.js");
/* harmony import */ var _functionality_window_openChangeColorWindow_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functionality/window/openChangeColorWindow.js */ "./input/functionality/window/openChangeColorWindow.js");
/* harmony import */ var _functionality_display_expenseType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./functionality/display/expenseType.js */ "./input/functionality/display/expenseType.js");
/* harmony import */ var _functionality_typeCalculator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./functionality/typeCalculator.js */ "./input/functionality/typeCalculator.js");
/* harmony import */ var _functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./functionality/calculate/calculate.js */ "./input/functionality/calculate/calculate.js");
/* harmony import */ var _functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./functionality/file/downloadFile.js */ "./input/functionality/file/downloadFile.js");
/* harmony import */ var _functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _functionality_file_uploadFile_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./functionality/file/uploadFile.js */ "./input/functionality/file/uploadFile.js");
/* harmony import */ var _functionality_file_uploadFile_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_functionality_file_uploadFile_js__WEBPACK_IMPORTED_MODULE_17__);

// import styles









// import functionality












})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUM0QjtBQUNHO0FBQ0Q7QUFDUTtBQUNYO0FBQ1U7QUFDVDs7O0FBRzVCO0FBQytDO0FBQ0Y7QUFDRztBQUNGO0FBQ0E7QUFDVztBQUNUO0FBQ0w7QUFDSztBQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2NhbGN1bGF0ZS9jYWxjdWxhdGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9kaXNwbGF5L2V4cGVuc2VUeXBlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9pdGVtc09yTGlzdHMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9lZGl0SXRlbU9yTGlzdC9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9maWxlL2Rvd25sb2FkRmlsZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2ZpbGUvdXBsb2FkRmlsZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2xpc3QvYWRkSXRlbXNUb0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9saXN0L2N1cnJlbnRMaXN0LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvbGlzdC9saXN0U3RydWN0dXJlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvdHlwZUNhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS93aW5kb3cvYWRkTmV3TGlzdC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9nZW5lcmF0ZUNvbnRlbnRGb3JFZGl0V2luZG93LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L29wZW5DaGFuZ2VDb2xvcldpbmRvdy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuV2luZG93LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9jYWxjdWxhdGlvblR5cGUuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvZGVza3RvcFN1cHBvcnQuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9wb3B1cC5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2NhbGN1bGF0aW9uVHlwZS5jc3M/YjY0OCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rhcmttb2RlLmNzcz8zYWIzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvZGVza3RvcFN1cHBvcnQuY3NzPzI1ZmYiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9saXN0LmNzcz9hM2UzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvcG9wdXAuY3NzPzFlZjYiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9zdHlsZS5jc3M/Y2RhMSIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2ZpbGVJbXBvcnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgY2FsY3VsYXRlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Jlc3VsdENvbnRlbnRgKTtcbmNvbnN0IGNhbGN1bGF0ZUJ1dHRvbiA9IGNhbGN1bGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBidXR0b25gKTtcbmNvbnN0IGNhbGN1bGF0ZVNwYW4gPSBjYWxjdWxhdGVDb250YWluZXIucXVlcnlTZWxlY3Rvcihgc3BhbmApO1xuXG5jYWxjdWxhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYWxjdWxhdGUpXG5cblxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gIGxldCBpbmRleG8gPSAwXG4gIGxldCByZXN1bHQgPSBjdXJyZW50TGlzdC5hcnJheS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50SXRlbSkgPT4ge1xuICAgIGluZGV4byArPSAxO1xuICAgIHN3aXRjaCAoY3VycmVudEl0ZW0udHlwZSkge1xuICAgICAgY2FzZSAnZm9vZCc6XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGNhbGN1bGF0ZWRGb29kKGN1cnJlbnRJdGVtKTtcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgY2FzZSAnbW9uZXknOlxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBjdXJyZW50SXRlbS5wcmljZTtcbiAgICB9XG4gIH0sIDApO1xuXG4gIGNhbGN1bGF0ZVNwYW4uaW5uZXJUZXh0ID0gcmVzdWx0O1xufVxuXG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlZEZvb2QoY3VycmVudEZvb2QpIHtcbiAgbGV0IHByaWNlRm9yVW5pdCA9IGN1cnJlbnRGb29kLnByaWNlIC8gY3VycmVudEZvb2QuYW1vdW50UGVyUHJpY2U7XG4gIGxldCBhbW91bnRPZkZvb2RFYXRlblBlck1vbnRoT3JXZWVrID0gY3VycmVudEZvb2QuYW1vdW50UGVyRGF5ICogZ2V0UHJvY2VzdXJlKGN1cnJlbnRGb29kKTtcbiAgbGV0IGF2ZXJhZ2VGb29kID0gcHJpY2VGb3JVbml0ICogYW1vdW50T2ZGb29kRWF0ZW5QZXJNb250aE9yV2VlaztcbiAgcmV0dXJuIGF2ZXJhZ2VGb29kO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9jZXN1cmUoY3VycmVudEZvb2QpIHtcbiAgaWYgKHR5cGVPZkNhbGN1bGF0aW9uID09ICdtb250aGx5Jykge1xuICAgIHJldHVybiBjdXJyZW50Rm9vZC5tb250aEFtb3VudFxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBjdXJyZW50Rm9vZC53ZWVrQW1vdW50XG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZEZvb2RUb1RoZUxpc3QsIGFkZE1vbmV5VG9UaGVMaXN0LCBhZGRQcm9kdWN0VG9UaGVMaXN0IH0gZnJvbSAnLi8uLi9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJztcblxubGV0IHNlbGVjdGVkU2VjdGlvbjtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKTtcblxudHlwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4geyBkaXNwbGF5Q29udGVudEZvclR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KVxuXG5sZXQgZXhwZW5zZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwZW5zZUNvbnRlbnQgZm9ybScpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudEZvclR5cGUodGFyZ2V0VmFsdWUpIHtcblxuICBzd2l0Y2ggKHRhcmdldFZhbHVlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBnZW5lcmF0ZUZvb2QoKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvZHVjdCc6XG4gICAgICBnZW5lcmF0ZVByb2R1Y3QoKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgZ2VuZXJhdGVNb25leSgpXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvb2QoKSB7XG4gIGV4cGVuc2VDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGAgPHA+bmFtZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbjxwPnByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuPHA+YW1vdW50IG9mIGZvb2QgcGVyIHByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJQcmljZVwiPlxuPHA+YW1vdW50IG9mIGZvb2QgcGVyIGRheTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyRGF5XCI+XG48ZGl2PlxuICA8c2VjdGlvbj5cbiAgICA8cD5hbW91bnQgb2YgZGF5cyBwZXIgbW9udGg6IDxicj4gPHNwYW4+KHlvdSBlYXQpPC9zcGFuPjwvcD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwibW9udGhBbW91bnRcIj5cbiAgPC9zZWN0aW9uPlxuICA8cD5vcjwvcD5cbiAgPHNlY3Rpb24+XG4gICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIHdlZWs6IDxicj4gPHNwYW4+KHlvdSBlYXQpPC9zcGFuPjwvcD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwid2Vla0Ftb3VudFwiPlxuICA8L3NlY3Rpb24+XG48L2Rpdj5cbjxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+XG5gXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRGb29kVG9UaGVMaXN0KVxuXG4gIGlmICh3aW5kb3cudHlwZU9mQ2FsY3VsYXRpb24gPT0gJ21vbnRobHknKSB7XG5cbiAgICBzZWxlY3RlZFNlY3Rpb24gPSBleHBlbnNlQ29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG4gIH1cbiAgZWxzZSB7XG5cbiAgICBzZWxlY3RlZFNlY3Rpb24gPSBleHBlbnNlQ29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uOmxhc3Qtb2YtdHlwZScpO1xuICB9XG5cbiAgc2VsZWN0ZWRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9kdWN0KCkge1xuICBleHBlbnNlQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgIDxwPm5hbWU6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG48cD5wcmljZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwicHJpY2VcIj5cbjxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+XG5gXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQcm9kdWN0VG9UaGVMaXN0KVxuXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTW9uZXkoKSB7XG4gIGV4cGVuc2VDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGAgPHA+bW9uZXk6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cInByaWNlXCI+XG48YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRNb25leVRvVGhlTGlzdClcbn1cbiIsImltcG9ydCB7IHVwZGF0ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2xpc3QvbGlzdFN0cnVjdHVyZS5qcyc7XG5pbXBvcnQgeyBzZWxlY3REaXYgfSBmcm9tICcuLy4uL2VkaXRJdGVtT3JMaXN0L3NlbGVjdGlvbi5qcydcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcblxubGV0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGlzdCcpXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TGlzdCgpIHtcbiAgcmVzdGFydEV2ZXJ5dGhpbmcoKTtcbiAgY3VycmVudExpc3QuYXJyYXkuZm9yRWFjaChhcHBlbmRJdGVtcylcbiAgbGlzdC5mb3JFYWNoKGFwcGVuZExpc3RzKVxuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxufVxuXG5mdW5jdGlvbiByZXN0YXJ0RXZlcnl0aGluZygpIHtcbiAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24nKTtcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvblNlbGVjdGlvbicpO1xuICB3aW5kb3cuc2VsZWN0ZWRJbmRleCA9ICcnO1xuXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICBsaXN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExpc3QnKTtcbiAgbGlzdFNlbGVjdC5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gYXBwZW5kSXRlbXMoaXRlbSwgY3VycmVudExpc3RPZkl0ZW1zSW5kZXgpIHtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3REaXYpXG4gIGxldCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQuaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICBuYW1lVGV4dC5zdHlsZS5jb2xvciA9IHJldHVybkRpZmZlcmVudENvbG9yRGVwZW5kaW5nT25UeXBlKGl0ZW0pO1xuICBuYW1lVGV4dC5kYXRhc2V0LmluZGV4ID0gY3VycmVudExpc3RPZkl0ZW1zSW5kZXg7XG4gIGNvbnRhaW5lci5hcHBlbmQobGkpO1xuICBsaS5hcHBlbmQobmFtZVRleHQpO1xufVxuXG5mdW5jdGlvbiByZXR1cm5EaWZmZXJlbnRDb2xvckRlcGVuZGluZ09uVHlwZShpdGVtKSB7XG4gIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICByZXR1cm4gY29sb3IuZm9vZDtcbiAgICBjYXNlICdwcm9kdWN0JzpcbiAgICAgIHJldHVybiBjb2xvci5wcm9kdWN0O1xuICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIHJldHVybiBjb2xvci5tb25leTtcblxuXG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGFwcGVuZExpc3RzKGxpc3QsIGN1cnJlbnRMaXN0b2ZMaXN0c0luZGV4KSB7XG5cbiAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gIG9wdGlvbi5pbm5lckhUTUwgPSBgJHtsaXN0Lm5hbWV9YDtcbiAgb3B0aW9uLnZhbHVlID0gYCR7Y3VycmVudExpc3RvZkxpc3RzSW5kZXh9YDtcbiAgaWYgKHdpbmRvdy52YWx1ZU9mU2VsZWN0ID09IGN1cnJlbnRMaXN0b2ZMaXN0c0luZGV4KSB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuICBsaXN0U2VsZWN0LmFwcGVuZChvcHRpb24pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdERpdihldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcbiAgICB3aW5kb3cuc2VsZWN0ZWRJbmRleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgc2VsZWN0UGFyZW50KGV2ZW50KVxuICB9XG59XG5cblxuXG5cbmZ1bmN0aW9uIHNlbGVjdFBhcmVudChldmVudCkge1xuICBsZXQgcGFyZW50ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG5cbiAgcmVtb3ZlQ2xhc3NlcygpXG4gIGxldCBlZGl0SXRlbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbmApO1xuICBlZGl0SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdvblNlbGVjdGlvbicpXG4gIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZEl0ZW0nKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoKSB7XG4gIGxldCBvblNlbGVjdGlvbkNsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uU2VsZWN0aW9uJylcbiAgaWYob25TZWxlY3Rpb25DbGFzcyl7XG5cbiAgb25TZWxlY3Rpb25DbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCdvblNlbGVjdGlvbicpXG4gIH1cbiAgbGV0IHNlbGVjdGVkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWRJdGVtJyk7XG4gIHNlbGVjdGVkSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWRJdGVtJykpO1xuXG59XG4iLCJjb25zdCBkb3dubG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBidXR0b246bnRoLW9mLXR5cGUoMiknKTtcbmRvd25sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG93bmxvYWRUaGVMaXN0U3RydWN0dXJlKVxuXG5mdW5jdGlvbiBkb3dubG9hZFRoZUxpc3RTdHJ1Y3R1cmUoKXtcbmxldCBmaWxlVG9Eb3dubG9hZCA9IG5ldyBGaWxlKFtKU09OLnN0cmluZ2lmeSh3aW5kb3cubGlzdCldLCBgbGlzdC0ke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX1gLHt0eXBlOidhcHBsaWNhdGlvbi9qc29uJ30pO1xubGV0IG15VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlVG9Eb3dubG9hZCk7XG5sZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmxpbmsuaHJlZiA9IG15VXJsO1xubGluay5kb3dubG9hZCA9IGZpbGVUb0Rvd25sb2FkLm5hbWVcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluaylcbmxpbmsuY2xpY2soKVxuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKVxuVVJMLnJldm9rZU9iamVjdFVSTChteVVybClcbn1cbiIsImNvbnN0IHVwbG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9J2ZpbGUnXWApO1xudXBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZVN0cnVjdHVyZSlcblxuZnVuY3Rpb24gdXBkYXRlU3RydWN0dXJlKCl7XG5hbGVydChgaXQncyB1cGRhdGluZyBteSBib29veXNzc2ApO1xuXG5cbn1cbiIsImltcG9ydCB7cHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdCwgTW9uZXksIFByb2R1Y3QsIEZvb2QgfSBmcm9tICcuL2xpc3RTdHJ1Y3R1cmUuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb29kVG9UaGVMaXN0KCkge1xuICBsZXQgbmFtZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcblxuICBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KEZvb2QobmFtZVZhbHVlLFxuICAgIGdldE51bWJlck9mKCdwcmljZScpLFxuICAgIGdldE51bWJlck9mKCdhbW91bnRQZXJQcmljZScpLFxuICAgIGdldE51bWJlck9mKCdhbW91bnRQZXJEYXknKSxcbiAgICBnZXROdW1iZXJPZignd2Vla0Ftb3VudCcpLFxuICAgIGdldE51bWJlck9mKCdtb250aEFtb3VudCcpKSlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZHVjdFRvVGhlTGlzdCgpIHtcbiAgbGV0IG5hbWVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gIHB1c2hUb0FycmF5QW5kRGlzcGxheUxpc3QoUHJvZHVjdChuYW1lVmFsdWUsIGdldE51bWJlck9mKCdwcmljZScpKSlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9uZXlUb1RoZUxpc3QoKSB7XG4gIHB1c2hUb0FycmF5QW5kRGlzcGxheUxpc3QoTW9uZXkoZ2V0TnVtYmVyT2YoJ3ByaWNlJykpKVxufVxuXG5mdW5jdGlvbiBnZXROdW1iZXJPZihlbGVtZW50SWQpIHtcbiAgbGV0IHZhbHVlT2ZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZWxlbWVudElkfWApLnZhbHVlXG5cbiAgIHJldHVybiB0cmFuc2Zvcm1Ub051bWJlcih2YWx1ZU9mRWxlbWVudClcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub051bWJlcih2YWx1ZU9mRWxlbWVudCl7XG4gIGxldCBsZXR0ZXJSZW1vdmVyID0gL1swLTldKy9nO1xuICBsZXQgdmFsdWVPZkVsZW1lbnRXaXRob3V0TGV0dGVycyA9IGAke2xldHRlclJlbW92ZXIuZXhlYyh2YWx1ZU9mRWxlbWVudCl9YDtcbiAgXG4gIHJldHVybiBOdW1iZXIodmFsdWVPZkVsZW1lbnRXaXRob3V0TGV0dGVycyk7XG4gIH1cbiIsImltcG9ydCB7ZGlzcGxheUxpc3R9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cblxubGV0IHNlbGVjdEZvckN1cnJlbnRMaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdExpc3QnKTtcbnNlbGVjdEZvckN1cnJlbnRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUN1cnJlbnRMaXN0KTtcblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudExpc3QoZXZlbnQpe1xuICBhbGVydCgndGhpcyBoYXMgYmVlbiBjaGFuZ2VkJylcbndpbmRvdy52YWx1ZU9mU2VsZWN0ID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG53aW5kb3cuY3VycmVudExpc3QgPSBsaXN0W3ZhbHVlT2ZTZWxlY3RdO1xuZGlzcGxheUxpc3QoKVxufVxuXG4iLCJpbXBvcnQgeyBkaXNwbGF5Q29udGVudEZvclR5cGUgfSBmcm9tICcuLy4uL2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMnXG5pbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cblxuXG4vLyBjb2xvciBzZWN0aW9uXG5pZiAobG9jYWxTdG9yYWdlLmNvbG9yKSB7XG4gIHdpbmRvdy5jb2xvciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmNvbG9yKVxufVxuZWxzZSB7XG4gIHdpbmRvdy5jb2xvciA9IHtcbiAgICBmb29kOiAndmlvbGV0JyxcbiAgICBwcm9kdWN0OiAnYmx1ZScsXG4gICAgbW9uZXk6ICdncmVlbicsXG4gIH1cbn1cblxuXG4vLyBjbGFzcyBzZWN0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBNb25leShwcmljZSwgbmFtZSA9IHByaWNlLCB0eXBlID0gJ21vbmV5Jykge1xuICByZXR1cm4geyBwcmljZSwgbmFtZSwgdHlwZSB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gUHJvZHVjdChuYW1lLCBwcmljZSwgdHlwZSA9ICdwcm9kdWN0Jykge1xuICByZXR1cm4geyBuYW1lLCBwcmljZSwgdHlwZSB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gRm9vZChuYW1lLCBwcmljZSwgYW1vdW50UGVyUHJpY2UsIGFtb3VudFBlckRheSwgd2Vla0Ftb3VudCwgbW9udGhBbW91bnQsIHR5cGUgPSAnZm9vZCcpIHtcbmxldCBteVdlZWtBbW91bnQ7XG5sZXQgbXlNb250aEFtb3VudDtcbiAgaWYgKHdlZWtBbW91bnQpIHtcbiAgICBteVdlZWtBbW91bnQgPSB3ZWVrQW1vdW50O1xuICB9XG4gIGVsc2Uge1xuICAgIG15V2Vla0Ftb3VudCA9IHBhcnNlSW50KG1vbnRoQW1vdW50IC8gNCk7XG4gIH1cblxuICBpZiAobW9udGhBbW91bnQpIHtcbiAgICBteU1vbnRoQW1vdW50ID0gbW9udGhBbW91bnQ7XG4gIH1cbiAgZWxzZSB7XG4gICAgbXlNb250aEFtb3VudCA9IHBhcnNlSW50KHdlZWtBbW91bnQgKiA0KTtcbiAgfVxuXG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50OiBteVdlZWtBbW91bnQsIG1vbnRoQW1vdW50OiBteU1vbnRoQW1vdW50LCB0eXBlIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gTGlzdChuYW1lLCBhcnJheSA9IFtdKSB7XG4gIHJldHVybiB7IGFycmF5LCBuYW1lIH1cbn1cblxuXG4vLyBsaXN0IHNlY3Rpb25cblxuaWYgKGxvY2FsU3RvcmFnZS5saXN0KSB7XG4gIHdpbmRvdy5saXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UubGlzdClcbiAgd2luZG93LmN1cnJlbnRMaXN0ID0gd2luZG93Lmxpc3RbMF07XG4gIGRpc3BsYXlMaXN0KClcbn1cbmVsc2Uge1xuICB3aW5kb3cuY3VycmVudExpc3QgPSBuZXcgTGlzdCgnZGVmYXVsdCcpO1xuICB3aW5kb3cubGlzdCA9IFtjdXJyZW50TGlzdF07XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGlzdCcsIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5saXN0KSlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yJywgSlNPTi5zdHJpbmdpZnkod2luZG93LmNvbG9yKSlcbn1cblxuXG4vLyBmdW5jdGlvbiB0byBwdXNoIHRvIGFycmF5IHNlY3Rpb25cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hUb0FycmF5QW5kRGlzcGxheUxpc3QoZWwpIHtcbiAgY3VycmVudExpc3QuYXJyYXkucHVzaChlbCk7XG4gIGRpc3BsYXlMaXN0KClcbiAgZGlzcGxheUNvbnRlbnRGb3JUeXBlKClcbn1cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBkaXNwbGF5Q29udGVudEZvclR5cGV9IGZyb20gJy4vZGlzcGxheS9leHBlbnNlVHlwZS5qcyc7XG5cblxuY29uc3QgdHlwZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlQ29udGFpbmVyIHNlbGVjdCcpO1xuY29uc3QgdHlwZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXJ0aWNsZTpmaXJzdC1vZi10eXBlIHNlbGVjdCcpO1xudHlwZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVR5cGVPZkNhbGN1bGF0aW9uKVxuXG5jaGFuZ2VUeXBlT2ZDYWxjdWxhdGlvbigpO1xuZnVuY3Rpb24gY2hhbmdlVHlwZU9mQ2FsY3VsYXRpb24oKXtcblxuaWYodHlwZVNlbGVjdC52YWx1ZSA9PSAnbW9udGhseScpe1xud2luZG93LnR5cGVPZkNhbGN1bGF0aW9uID0gJ21vbnRobHknO1xufVxuZWxzZXtcbndpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9ICd3ZWVrbHknO1xufVxuXG5kaXNwbGF5Q29udGVudEZvclR5cGUodHlwZVNlbGVjdG9yLnZhbHVlKTtcblxufVxuIiwiaW1wb3J0IHtMaXN0fSBmcm9tICcuLy4uL2xpc3QvbGlzdFN0cnVjdHVyZS5qcyc7XG5pbXBvcnQge2Nsb3NlUG9wVXB9IGZyb20gJy4vb3BlbldpbmRvdy5qcyc7XG5pbXBvcnQge2Rpc3BsYXlMaXN0fSBmcm9tICcuLy4uL2Rpc3BsYXkvL2l0ZW1zT3JMaXN0cy5qcydcblxuY29uc3QgYWRkTmV3TGlzdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGROZXdMaXN0UG9wVXAnKVxuXG5jb25zdCBhZGROZXdMaXN0QnV0dG9uID0gYWRkTmV3TGlzdERpYWxvZy5xdWVyeVNlbGVjdG9yKCdidXR0b246bGFzdC1vZi10eXBlJylcblxuYWRkTmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld0xpc3QgKVxuZnVuY3Rpb24gYWRkTmV3TGlzdCgpe1xubGV0IG5hbWVGb3JOZXdJbnB1dCA9IGFkZE5ld0xpc3REaWFsb2cucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcbmxpc3QucHVzaChMaXN0KG5hbWVGb3JOZXdJbnB1dCkpXG5kaXNwbGF5TGlzdCgpXG5jbG9zZVBvcFVwKClcbn1cbiIsImltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMsIGNsb3NlUG9wVXAgfSBmcm9tICcuL29wZW5XaW5kb3cuanMnO1xuaW1wb3J0IHsgdHJhbnNmb3JtVG9OdW1iZXIgfSBmcm9tICcuLy4uL2xpc3QvYWRkSXRlbXNUb0xpc3QuanMnO1xuaW1wb3J0IHsgRm9vZCwgUHJvZHVjdCwgTW9uZXkgfSBmcm9tICcuLy4uL2xpc3QvbGlzdFN0cnVjdHVyZS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UG9wVXAnKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50Rm9yV2luZG93KCkge1xuICBpZiAod2luZG93LnNlbGVjdGVkSW5kZXgpIHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JEaWFsb2dGb3JJdGVtcygpXG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvQnV0dG9ucygpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgaGF2ZW4ndCBzZWxlY3RlZCBhbnl0aGluZ2ApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudEZvckxpc3RXaW5kb3coKSB7XG4gICAgZ2VuZXJhdGVDb250ZW50Rm9yRGlhbG9nRm9yTGlzdHMoKVxuICAgIGFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMoKVxufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudEZvckRpYWxvZ0Zvckl0ZW1zKCkge1xuICBsZXQgaXRlbSA9IGN1cnJlbnRMaXN0LmFycmF5W3NlbGVjdGVkSW5kZXhdO1xuICBsZXQgc2VsZWN0ZWRMaXN0ID0gbGlzdFtzZWxlY3RlZEluZGV4XTtcbiAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgICAgY2FzZSAnZm9vZCc6XG4gICAgICAgIGRpYWxvZy5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxidXR0b24gY2xhc3M9J2Nsb3NlQnRuJz5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8cD5uYW1lOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ubmFtZX0ndHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgPHA+cHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5wcmljZX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdkZWNpbWFsJyBpZD1cInByaWNlXCI+XG4gICAgICAgIDxwPmFtb3VudCBvZiBmb29kIHBlciBwcmljZTo8L3A+XG4gICAgICAgIDxpbnB1dCAgdmFsdWU9JyR7aXRlbS5hbW91bnRQZXJQcmljZX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cImFtb3VudFBlclByaWNlXCI+XG4gICAgICAgIDxwPmFtb3VudCBvZiBmb29kIHBlciBkYXk6PC9wPlxuICAgICAgICA8aW5wdXQgICB2YWx1ZT0nJHtpdGVtLmFtb3VudFBlckRheX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cImFtb3VudFBlckRheVwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIG1vbnRoOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5tb250aEFtb3VudH0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cIm1vbnRoQW1vdW50XCI+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxwPm9yPC9wPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIHdlZWs6IDxicj4gPHNwYW4+KHlvdSBlYXQpPC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLndlZWtBbW91bnR9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJ3ZWVrQW1vdW50XCI+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgICBkaWFsb2cuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9J2Nsb3NlQnRuJz5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8cD5uYW1lOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ubmFtZX0ndHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgPHA+cHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5wcmljZX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdkZWNpbWFsJyBpZD1cInByaWNlXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICAgIGRpYWxvZy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz0nY2xvc2VCdG4nPmNsb3NlPC9idXR0b24+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgYXBwbHlCdXR0b24gPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2FwcGx5Jyk7XG4gICAgYXBwbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUNoYW5nZXNGb3JJdGVtcyk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JEaWFsb2dGb3JMaXN0cygpe1xuXG4gICAgZGlhbG9nLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+bmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtjdXJyZW50TGlzdC5uYW1lfSd0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmA7XG5cbiAgICBsZXQgYXBwbHlCdXR0b24gPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2FwcGx5Jyk7XG4gICAgYXBwbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUNoYW5nZXNGb3JMaXN0cyk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlc0Zvckl0ZW1zKCkge1xuICBsZXQgaXRlbSA9IGN1cnJlbnRMaXN0LmFycmF5W3NlbGVjdGVkSW5kZXhdO1xuICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tRm9vZElucHV0cyxnZXRWYWx1ZXNGb3JGb29kLGNoZWNrSWZGb29kSXNFbXB0eSxyZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQUZvb2QsdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9kdWN0JzpcbiAgICAgIHJ1blByb21pc2VUb0FwcGx5VmFsdWUoZ2V0VmFsdWVzRnJvbVByb2R1Y3RJbnB1dHMsZ2V0VmFsdWVzRm9yUHJvZHVjdCxjaGVja0lmUHJvZHVjdElzRW1wdHkscmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FQcm9kdWN0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIHJ1blByb21pc2VUb0FwcGx5VmFsdWUoZ2V0VmFsdWVzRnJvbU1vbmV5SW5wdXRzLGdldFZhbHVlc0Zvck1vbmV5LGNoZWNrSWZNb25leUlzRW1wdHkscmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c01vbmV5KTtcbiAgICAgIGJyZWFrO1xuXG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tSW5wdXRfY2FsbGJhY2ssIGdldFZhbHVlc0Zvcl9jYWxsQmFjaywgY2hlY2tJZkl0ZW1Jc0VtcHR5X2NhbGxCYWNrLCByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQV9jYWxsQmFjayx3b3JraW5nV2l0aEZvb2QgPSBmYWxzZSwpIHtcbndpbmRvdy53b3JraW5nV2l0aEZvb2QgPSB3b3JraW5nV2l0aEZvb2Q7XG4gICAgICAvLyByZW1lbWJlciB0byBhZGQgdmFsaWRpdHkgaW4gdGhlIGNhdGNoIGluIGFsbCBvZiB0aGVzZSBcbiAgZ2V0VmFsdWVzRnJvbUlucHV0X2NhbGxiYWNrKClcbiAgICAudGhlbihnZXRWYWx1ZXNGb3JfY2FsbEJhY2spXG4gICAgLnRoZW4oY2hlY2tJZkl0ZW1Jc0VtcHR5X2NhbGxCYWNrKVxuICAgIC50aGVuKG1ha2VXZWVrc09yTW9udGhzVmFsaWQpXG4gICAgLnRoZW4ocmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FfY2FsbEJhY2spXG4gICAgLnRoZW4oZGlzcGxheUxpc3QpXG4gICAgLnRoZW4oY2xvc2VQb3BVcClcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tRm9vZElucHV0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICBsZXQgYW1vdW50UGVyUHJpY2UgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2Ftb3VudFBlclByaWNlJykudmFsdWU7XG4gIGxldCBhbW91bnRQZXJEYXkgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2Ftb3VudFBlckRheScpLnZhbHVlO1xuICBsZXQgbW9udGhBbW91bnQgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI21vbnRoQW1vdW50JykudmFsdWU7XG4gIGxldCB3ZWVrQW1vdW50ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrQW1vdW50JykudmFsdWU7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCBtb250aEFtb3VudCwgd2Vla0Ftb3VudCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tUHJvZHVjdElucHV0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSB9O1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFZhbHVlc0Zyb21Nb25leUlucHV0cygpIHtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICByZXR1cm4geyBwcmljZSB9O1xufVxuXG5cblxuZnVuY3Rpb24gZ2V0VmFsdWVzRm9yRm9vZChmb29kKSB7XG4gIGxldCBuYW1lID0gZm9vZC5uYW1lO1xuICBsZXQgcHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLnByaWNlKTtcbiAgbGV0IGFtb3VudFBlclByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC5hbW91bnRQZXJQcmljZSk7XG4gIGxldCBhbW91bnRQZXJEYXkgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLmFtb3VudFBlckRheSk7XG4gIGxldCBtb250aEFtb3VudCA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2QubW9udGhBbW91bnQpO1xuICBsZXQgd2Vla0Ftb3VudCA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2Qud2Vla0Ftb3VudCk7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCBtb250aEFtb3VudCwgd2Vla0Ftb3VudCB9XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlc0ZvclByb2R1Y3QocHJvZHVjdCkge1xuICBsZXQgbmFtZSA9IHByb2R1Y3QubmFtZTtcbiAgbGV0IHByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIocHJvZHVjdC5wcmljZSk7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JNb25leShtb25leSkge1xuICBsZXQgcHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihtb25leS5wcmljZSk7XG4gIHJldHVybiB7IHByaWNlIH1cbn1cblxuXG5cblxuXG5mdW5jdGlvbiBjaGVja0lmRm9vZElzRW1wdHkoZm9vZCkge1xuICAvLyBjaGVjayBlbXB0eW5lc3MgXG4gIGNoZWNrSWZFbXB0eShmb29kLm5hbWUsICd0aGUgbmFtZSBvZiB0aGUgZm9vZCcpO1xuICBjaGVja0lmRW1wdHkoZm9vZC5wcmljZSwgJ3RoZSBwcmljZSBvZiB0aGUgZm9vZCcpO1xuICBjaGVja0lmRW1wdHkoZm9vZC5hbW91bnRQZXJQcmljZSwgJ3RoZSBhbW91bnQgb2YgZm9vZCBwZXIgcHJpY2UnKTtcbiAgY2hlY2tJZkVtcHR5KGZvb2QuYW1vdW50UGVyRGF5LCAndGhlIGFtb3VudCBvZiBmb29kIHBlciBkYXknKTtcbiAgY2hlY2tJZkVtcHR5KGZvb2Qud2Vla0Ftb3VudCwgJ3RoZSBhbW91bnQgb2Ygd2Vla3MgaW4gd2hpY2ggeW91IGVhdCB0aGF0IGZvb2QgJyk7XG4gIGNoZWNrSWZFbXB0eShmb29kLm1vbnRoQW1vdW50LCAndGhlIGFtb3VudCBvZiBtb250aHMgaW4gd2hpY2ggeW91IGVhdCB0aGF0IGZvb2QgJyk7XG4gIHJldHVybiB7IG5hbWU6IGZvb2QubmFtZSwgcHJpY2U6IGZvb2QucHJpY2UsIGFtb3VudFBlclByaWNlOiBmb29kLmFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXk6IGZvb2QuYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50OiBmb29kLndlZWtBbW91bnQsIG1vbnRoQW1vdW50OiBmb29kLm1vbnRoQW1vdW50IH1cbn1cblxuZnVuY3Rpb24gY2hlY2tJZlByb2R1Y3RJc0VtcHR5KHByb2R1Y3QpIHtcbiAgLy8gY2hlY2sgZW1wdHluZXNzIFxuICBjaGVja0lmRW1wdHkocHJvZHVjdC5uYW1lLCAndGhlIG5hbWUgb2YgdGhlIHByb2R1Y3QnKTtcbiAgY2hlY2tJZkVtcHR5KHByb2R1Y3QucHJpY2UsICd0aGUgcHJpY2Ugb2YgdGhlIHByb2R1Y3QnKTtcbiAgcmV0dXJuIHsgbmFtZTogcHJvZHVjdC5uYW1lLCBwcmljZTogcHJvZHVjdC5wcmljZSB9XG59XG5cblxuZnVuY3Rpb24gY2hlY2tJZk1vbmV5SXNFbXB0eShtb25leSkge1xuICAvLyBjaGVjayBlbXB0eW5lc3MgXG4gIGNoZWNrSWZFbXB0eShtb25leS5wcmljZSwgJ2FueSBtb25leScpO1xuICByZXR1cm4geyBwcmljZTogbW9uZXkucHJpY2UgfVxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrSWZFbXB0eShlbGVtZW50LCBuYW1lT2ZFbGVtZW50Rm9yRW1wdHlNZXNzYWdlKSB7XG4gIGlmIChgJHtlbGVtZW50fWAgPT0gJ05hTicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBkaWRuJ3QgZmlsbCAke25hbWVPZkVsZW1lbnRGb3JFbXB0eU1lc3NhZ2V9YCk7XG4gIH1cbiAgZWxzZSBpZiAoIWAke2VsZW1lbnR9YCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeW91IGRpZG4ndCBmaWxsICR7bmFtZU9mRWxlbWVudEZvckVtcHR5TWVzc2FnZX1gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlV2Vla3NPck1vbnRoc1ZhbGlkKGZvb2QpIHtcbiAgaWYod2luZG93LndvcmtpbmdXaXRoRm9vZCl7XG5cbiAgbGV0IGl0ZW0gPSBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XTtcbiAgLy8gY2hlY2sgaWYgdGhlIHdlZWsgb3IgdGhlIG1vbnRoIGlzIGZhbHNlXG4gIGxldCB3ZWVrRXF1YWwgPSBmYWxzZTtcbiAgbGV0IG1vbnRoRXF1YWwgPSBmYWxzZTtcbiAgaWYgKGl0ZW0ud2Vla0Ftb3VudCA9PSBmb29kLndlZWtBbW91bnQpIHtcbiAgICB3ZWVrRXF1YWwgPSB0cnVlO1xuICB9XG4gIGlmIChpdGVtLm1vbnRoQW1vdW50ID09IGZvb2QubW9udGhBbW91bnQpIHtcbiAgICBtb250aEVxdWFsID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGNoYW5nZSB0aGUgb3RoZXIgdmFsdWUgaWYgb25lIG9mIHRob3NlIGlzIGZhbHNlIGJ1dCB0aGUgb3RoZXIgb25lIGlzIHRydWVcbiAgaWYgKHdlZWtFcXVhbCA9PSB0cnVlICYmIG1vbnRoRXF1YWwgPT0gZmFsc2UpIHtcbiAgICBmb29kLndlZWtBbW91bnQgPSBwYXJzZUludChmb29kLm1vbnRoQW1vdW50IC8gNClcbiAgfVxuICBlbHNlIGlmICh3ZWVrRXF1YWwgPT0gZmFsc2UgJiYgbW9udGhFcXVhbCA9PSB0cnVlKSB7XG4gICAgZm9vZC5tb250aEFtb3VudCA9IHBhcnNlSW50KGZvb2Qud2Vla0Ftb3VudCAqIDQpXG4gIH1cblxuICByZXR1cm4geyBuYW1lOiBmb29kLm5hbWUsIHByaWNlOiBmb29kLnByaWNlLCBhbW91bnRQZXJQcmljZTogZm9vZC5hbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5OiBmb29kLmFtb3VudFBlckRheSwgd2Vla0Ftb3VudDogZm9vZC53ZWVrQW1vdW50LCBtb250aEFtb3VudDogZm9vZC5tb250aEFtb3VudCB9XG5cblxuICB9XG4gIGVsc2V7XG4gICAgcmV0dXJuIGZvb2Q7XG4gIH1cbn1cblxuXG5cblxuXG5mdW5jdGlvbiByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQUZvb2QoZm9vZCkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IEZvb2QoZm9vZC5uYW1lLCBmb29kLnByaWNlLCBmb29kLmFtb3VudFBlclByaWNlLCBmb29kLmFtb3VudFBlckRheSwgZm9vZC53ZWVrQW1vdW50LCBmb29kLm1vbnRoQW1vdW50KVxufVxuXG5mdW5jdGlvbiByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQVByb2R1Y3QocHJvZHVjdCkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IFByb2R1Y3QocHJvZHVjdC5uYW1lLCBwcm9kdWN0LnByaWNlKVxufVxuXG5cbmZ1bmN0aW9uIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNNb25leShtb25leSkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IE1vbmV5KG1vbmV5LnByaWNlKVxufVxuXG5cblxuXG5mdW5jdGlvbiBhcHBseUNoYW5nZXNGb3JMaXN0cygpIHtcbmxldCBuYW1lID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG5jdXJyZW50TGlzdC5uYW1lID0gbmFtZTtcbmRpc3BsYXlMaXN0KClcbmNsb3NlUG9wVXAoKVxufVxuXG5cbiIsImltcG9ydCB7IGRpc3BsYXlMaXN0fSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCBjaGFuZ2VDb2xvckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBidXR0b246Zmlyc3Qtb2YtdHlwZScpO1xuXG5jaGFuZ2VDb2xvckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Db2xvcldpbmRvdylcbmZ1bmN0aW9uIG9wZW5Db2xvcldpbmRvdygpIHtcbiAgbGV0IGNvbG9yV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yUG9wVXAnKTtcbiAgY29sb3JXaW5kb3cuc2hvd01vZGFsKClcbiAgZm9yIChsZXQgY29sb3JQaWNrZXIgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApKSB7XG4gICAgY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlQ29sb3JzKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbG9ycygpIHtcbiAgd2luZG93LmNvbG9yLmZvb2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMF0udmFsdWVcbiAgd2luZG93LmNvbG9yLnByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMV0udmFsdWVcbiAgd2luZG93LmNvbG9yLm1vbmV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzJdLnZhbHVlXG4gIGRpc3BsYXlMaXN0KClcbn1cblxuXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3csZ2VuZXJhdGVDb250ZW50Rm9yTGlzdFdpbmRvdyB9IGZyb20gJy4vZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcyc7XG5cblxuY29uc3QgZWRpdEN1cnJlbnRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RDb250YWluZXIgZGl2IGJ1dHRvbicpO1xuY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbicpO1xuY29uc3QgYWRkTmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGJ1dHRvbjpudGgtb2YtdHlwZSgyKScpO1xuXG5jb25zdCBhZGROZXdMaXN0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZE5ld0xpc3RQb3BVcCcpO1xuY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UG9wVXAnKTtcblxuXG5cbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUNvbnRlbnRBbmRPcGVuV2luZG93KTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvdygpIHtcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3coKVxuICAgIG9wZW5XaW5kb3coZWRpdERpYWxvZylcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZWRpdEN1cnJlbnRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvd0Zvckxpc3QpXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRBbmRPcGVuV2luZG93Rm9yTGlzdCgpIHtcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JMaXN0V2luZG93KClcbiAgICBvcGVuV2luZG93KGVkaXREaWFsb2cpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cblxuYWRkTmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5XaW5kb3coYWRkTmV3TGlzdERpYWxvZykpO1xuXG5mdW5jdGlvbiBvcGVuV2luZG93KGRpYWxvZykge1xuICBkaWFsb2cuc2hvd01vZGFsKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMoKSB7XG4gIGZvciAobGV0IGNsb3NlQnRuIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZUJ0bicpKSB7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcFVwKVxuICB9XG59XG5hZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUG9wVXAoKSB7XG4gIGZvciAobGV0IGRpYWxvZyBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaWFsb2cnKSkge1xuICAgIGlmIChkaWFsb2cub3Blbikge1xuICAgICAgZGlhbG9nLmNsb3NlKClcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5jb25zdCBkYXJrTW9kZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24nKVxuZGFya01vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUb0RhcmtNb2RlKVxuXG5jb25zdCBpc0RhcmtNb2RlRW5hYmxlZCA9IG1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzXG5pZiAoaXNEYXJrTW9kZUVuYWJsZWQpIHtcbiAgc3dpdGNoVG9EYXJrTW9kZSgpXG5cblxufVxuXG5cblxuXG5mdW5jdGlvbiBzd2l0Y2hUb0RhcmtNb2RlKCkge1xuICBodG1sLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKVxuICBpZiAoaHRtbC5jbGFzc05hbWUgPT0gJ2RhcmsnKSB7XG4gICAgZGFya01vZGVCdXR0b24uaW5uZXJUZXh0ID0gJ2xpZ2h0IG1vZGUnO1xuICB9XG4gIGVsc2Uge1xuICAgIGRhcmtNb2RlQnV0dG9uLmlubmVyVGV4dCA9ICdkYXJrIG1vZGUnO1xuICB9XG59XG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VsZWN0ZWR7XG5ib3JkZXItcmFkaXVzOjVweDtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbnBhZGRpbmc6NXB4O1xuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUIsV0FBVzs7QUFFWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VsZWN0ZWR7XFxuYm9yZGVyLXJhZGl1czo1cHg7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbnBhZGRpbmc6NXB4O1xcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LmRhcmt7XG4tLWJsYWNrOndoaXRlO1xuLS13aGl0ZTpibGFjaztcbi0tZ3JlZW46IzAxMjEyMDtcbi0teWVsbG93OiAjRUVFRTlCO1xuLS1saWdodFllbGxvdzogI0Y1QkIwMDtcbi0tcmVkOiNkYzE0M2M7XG4tLWxpZ2h0UmVkOiNFRDY0NjQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290LmRhcmt7XFxuLS1ibGFjazp3aGl0ZTtcXG4tLXdoaXRlOmJsYWNrO1xcbi0tZ3JlZW46IzAxMjEyMDtcXG4tLXllbGxvdzogI0VFRUU5QjtcXG4tLWxpZ2h0WWVsbG93OiAjRjVCQjAwO1xcbi0tcmVkOiNkYzE0M2M7XFxuLS1saWdodFJlZDojRUQ2NDY0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYShtaW4td2lkdGg6NTAwcHgpe1xuYXJ0aWNsZSBmb3JtIGRpdntcbmZsZXgtZGlyZWN0aW9uOnJvdztcbn19XG5cblxuQG1lZGlhKG1pbi13aWR0aDo5MDBweCl7XG5oZWFkZXJ7XG5nYXA6NHB4O1xuXG4gIH1cblxuaGVhZGVyIHNwYW57XG5kaXNwbGF5OmlubGluZTtcbmZvbnQtc2l6ZToyLjJ2dztcbiAgfVxuXG5tYWlue1xuaGVpZ2h0Ojkwdmg7XG5taW4taGVpZ2h0OiA1NTBweDtcbmdyaWQtdGVtcGxhdGU6J2V4cGVuc2VUeXBlIGV4cGVuc2VDb250ZW50JyAwLjlmclxuICAgICAgICAgICAgICAndHlwZU9mQ2FsY3VsYXRpb24gZXhwZW5zZUNvbnRlbnQnIDAuOWZyICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAnc2hvd0xpc3QgZXhwZW5zZUNvbnRlbnQnIDFmclxuICAgICAgICAgICAgICAnc2hvd0xpc3QgcmVzdWx0Q29udGVudCcgMWZyIC8gMWZyIDFmclxufVxuXG5cbiAgLyogb24gdGhlIGxlZnQgKi9cbm1haW4gYXJ0aWNsZTpmaXJzdC1vZi10eXBle1xuZ3JpZC1hcmVhOiBleHBlbnNlVHlwZTtcbn1cbiN0eXBlQ29udGFpbmVye1xuZ3JpZC1hcmVhOnR5cGVPZkNhbGN1bGF0aW9uO1xufVxuI2xpc3RDb250YWluZXJ7XG5ncmlkLWFyZWE6c2hvd0xpc3Q7XG59XG5cbi8qIG9uIHRoZSByaWdodCAqL1xuXG4jZXhwZW5zZUNvbnRlbnR7XG5ncmlkLWFyZWE6ZXhwZW5zZUNvbnRlbnQ7XG59XG4jcmVzdWx0Q29udGVudHtcbmdyaWQtYXJlYTpyZXN1bHRDb250ZW50O1xufVxuXG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsT0FBTzs7RUFFTDs7QUFFRjtBQUNBLGNBQWM7QUFDZCxlQUFlO0VBQ2I7O0FBRUY7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCOzs7O0FBSUE7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOzs7QUFHQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEobWluLXdpZHRoOjUwMHB4KXtcXG5hcnRpY2xlIGZvcm0gZGl2e1xcbmZsZXgtZGlyZWN0aW9uOnJvdztcXG59fVxcblxcblxcbkBtZWRpYShtaW4td2lkdGg6OTAwcHgpe1xcbmhlYWRlcntcXG5nYXA6NHB4O1xcblxcbiAgfVxcblxcbmhlYWRlciBzcGFue1xcbmRpc3BsYXk6aW5saW5lO1xcbmZvbnQtc2l6ZToyLjJ2dztcXG4gIH1cXG5cXG5tYWlue1xcbmhlaWdodDo5MHZoO1xcbm1pbi1oZWlnaHQ6IDU1MHB4O1xcbmdyaWQtdGVtcGxhdGU6J2V4cGVuc2VUeXBlIGV4cGVuc2VDb250ZW50JyAwLjlmclxcbiAgICAgICAgICAgICAgJ3R5cGVPZkNhbGN1bGF0aW9uIGV4cGVuc2VDb250ZW50JyAwLjlmciAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICdzaG93TGlzdCBleHBlbnNlQ29udGVudCcgMWZyXFxuICAgICAgICAgICAgICAnc2hvd0xpc3QgcmVzdWx0Q29udGVudCcgMWZyIC8gMWZyIDFmclxcbn1cXG5cXG5cXG4gIC8qIG9uIHRoZSBsZWZ0ICovXFxubWFpbiBhcnRpY2xlOmZpcnN0LW9mLXR5cGV7XFxuZ3JpZC1hcmVhOiBleHBlbnNlVHlwZTtcXG59XFxuI3R5cGVDb250YWluZXJ7XFxuZ3JpZC1hcmVhOnR5cGVPZkNhbGN1bGF0aW9uO1xcbn1cXG4jbGlzdENvbnRhaW5lcntcXG5ncmlkLWFyZWE6c2hvd0xpc3Q7XFxufVxcblxcbi8qIG9uIHRoZSByaWdodCAqL1xcblxcbiNleHBlbnNlQ29udGVudHtcXG5ncmlkLWFyZWE6ZXhwZW5zZUNvbnRlbnQ7XFxufVxcbiNyZXN1bHRDb250ZW50e1xcbmdyaWQtYXJlYTpyZXN1bHRDb250ZW50O1xcbn1cXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjbGlzdHtcbmJvcmRlci1yYWRpdXM6MTJweDtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbndpZHRoOjkwJTtcbmhlaWdodDo5MCU7XG5vdmVyZmxvdzpzY3JvbGw7XG59XG5cblxubGl7XG5saXN0LXN0eWxlOiBub25lO1xufVxuXG4jbGlzdCBsaS5zZWxlY3RlZEl0ZW17XG5vdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsVUFBVTtBQUNWLGVBQWU7QUFDZjs7O0FBR0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xpc3R7XFxuYm9yZGVyLXJhZGl1czoxMnB4O1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG53aWR0aDo5MCU7XFxuaGVpZ2h0OjkwJTtcXG5vdmVyZmxvdzpzY3JvbGw7XFxufVxcblxcblxcbmxpe1xcbmxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNsaXN0IGxpLnNlbGVjdGVkSXRlbXtcXG5vdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZ3tcbnRleHQtYWxpZ246Y2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5jb2xvcjp2YXIoLS1ibGFjayk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBvc2l0aW9uOmZpeGVkO1xudG9wOjUwJTtcbmxlZnQ6NTAlO1xudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbnotaW5kZXg6MjtcbnBhZGRpbmc6MS4ydnc7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbmRpYWxvZyA+ICp7XG5kaXNwbGF5OmJsb2NrO1xubWFyZ2luLWxlZnQ6YXV0bztcbm1hcmdpbi1yaWdodDphdXRvO1xubWFyZ2luLXRvcDoxMHB4O1xuXG59XG4gIFxuZGlhbG9nOjpiYWNrZHJvcHtcbnBvc2l0aW9uOmZpeGVkO1xuYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoIzIxNUE1OUFBLGJsYWNrKSA7XG5iYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG5vcGFjaXR5OjAuNztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQiw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLE9BQU87QUFDUCxRQUFRO0FBQ1IsK0JBQStCO0FBQy9CLFNBQVM7QUFDVCxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsZUFBZTs7QUFFZjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrREFBa0Q7QUFDbEQscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2d7XFxudGV4dC1hbGlnbjpjZW50ZXI7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbnBvc2l0aW9uOmZpeGVkO1xcbnRvcDo1MCU7XFxubGVmdDo1MCU7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG56LWluZGV4OjI7XFxucGFkZGluZzoxLjJ2dztcXG5ib3JkZXItcmFkaXVzOjEwcHg7XFxufVxcblxcbmRpYWxvZyA+ICp7XFxuZGlzcGxheTpibG9jaztcXG5tYXJnaW4tbGVmdDphdXRvO1xcbm1hcmdpbi1yaWdodDphdXRvO1xcbm1hcmdpbi10b3A6MTBweDtcXG5cXG59XFxuICBcXG5kaWFsb2c6OmJhY2tkcm9we1xcbnBvc2l0aW9uOmZpeGVkO1xcbmJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCMyMTVBNTlBQSxibGFjaykgO1xcbmJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG5vcGFjaXR5OjAuNztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBtb2JpbGUgZmlyc3QgMzAweDQ0MCAqL1xuXG4qe1xucGFkZGluZzogMDtcbm1hcmdpbjowO1xuYm94LXNpemluZzpib3JkZXItYm94O1xufVxuXG46cm9vdHtcblxuLyogY29sb3Igc2VjdGlvbiAqL1xuLS1ibGFjazogYmxhY2s7XG4tLXdoaXRlOiB3aGl0ZTtcbi0tZ3JlZW46ICMwOUZGOTk7XG4tLXllbGxvdzogI0Y1QkIwMDtcbi0tbGlnaHRZZWxsb3c6ICNFRUVFOUI7XG4tLXJlZDojRUQ2NDY0O1xuLS1saWdodFJlZDojZGMxNDNjO1xufVxuXG4vKiByZXBldGl0aW9uIHNlY3Rpb24gKi9cblxuXG5cbmhlYWRlciwgYXJ0aWNsZXtcbmRpc3BsYXk6ZmxleDtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG50ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxubWFpbntcbmRpc3BsYXk6Z3JpZDtcbn1cblxuLyogaW5kaXZpZHVhbCBzZWN0aW9uICovXG5cbmJvZHl7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5jb2xvcjogdmFyKC0tYmxhY2spO1xudHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvcjtcbnRyYW5zaXRpb24tZHVyYXRpb246MnM7XG59XG5cbmhlYWRlcntcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKVxufVxuXG5oZWFkZXIgaDF7XG5mb250LXNpemU6bWF4KDFyZW0sMy44dncpO1xufVxuaGVhZGVyIHNwYW57XG5kaXNwbGF5OmJsb2NrO1xuZm9udC1zaXplOm1heCgwLjdyZW0sMi44dncpO1xufVxuXG5oZWFkZXIgYnV0dG9ue1xuaGVpZ2h0OjkwJTtcbn1cblxubWFpbntcbmdyaWQtdGVtcGxhdGU6IDEwJSAxMCUgMWZyIDIwMHB4IDEwJS8gMWZyO1xuZ2FwOjEwcHg7XG5wYWRkaW5nLXRvcDo1cHg7XG5wYWRkaW5nLWJvdHRvbTo1cHg7XG59XG5cbmFydGljbGV7XG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xuLyogYWxpZ24tc2VsZjpjZW50ZXI7ICovXG5qdXN0aWZ5LXNlbGY6Y2VudGVyO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5nYXA6IDdweDtcbnBhZGRpbmc6IDVweCAwcHg7XG53aWR0aDo5OCU7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG59XG5hcnRpY2xlIGZvcm0gZGl2e1xuZGlzcGxheTpmbGV4O1xuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcbmFsaWduLWl0ZW1zOmNlbnRlcjtcbmdhcDogN3B4O1xuXG59XG5cbmJ1dHRvbntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBhZGRpbmc6IDhweDtcbmJvcmRlci1yYWRpdXM6MTJweDtcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yIDAuN3Ncbn1cblxuLyogZWRpdCBpdGVtIGJ1dHRvbiAqL1xuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbmJvdHRvbTowO1xucmlnaHQ6IDA7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbnBhZGRpbmc6IDVweDtcbmJvcmRlci1yYWRpdXM6MzBweDtcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcbn1cblxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbnBhZGRpbmc6IDZweDtcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9uOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRZZWxsb3cpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xufVxuXG5idXR0b246aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG5jb2xvcjp2YXIoLS13aGl0ZSk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG5jdXJzb3I6cG9pbnRlcjtcbn1cblxuXG5cbnNlbGVjdHtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBhZGRpbmc6NnB4O1xufVxuXG5pbnB1dFt0eXBlPSd0ZXh0J117XG5wYWRkaW5nOjNweDtcbmJvcmRlci1yYWRpdXM6NHB4O1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcblxufVxuXG5cbi8qIGFydGljbGUgc2VjdGlvbiAqL1xuXG4jbGlzdENvbnRhaW5lcntcbmdyaWQtcm93LXN0YXJ0Oi0zO1xuZ3JpZC1yb3ctZW5kOi0zO1xucG9zaXRpb246IHJlbGF0aXZlXG59XG4jbGlzdENvbnRhaW5lcntcbm92ZXJmbG93OnNjcm9sbDtcbndpZHRoOjk4JTtcbm1heC1oZWlnaHQ6OTglO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5QkFBeUI7O0FBRXpCO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUixxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQjs7QUFFQSx1QkFBdUI7Ozs7QUFJdkI7QUFDQSxZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBLDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekMsUUFBUTtBQUNSLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IsZ0JBQWdCO0FBQ2hCLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixRQUFROztBQUVSOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLGNBQWM7QUFDZDs7OztBQUlBO0FBQ0EsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsV0FBVztBQUNYOztBQUVBO0FBQ0EsV0FBVztBQUNYLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLGtCQUFrQjs7QUFFbEI7OztBQUdBLG9CQUFvQjs7QUFFcEI7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixTQUFTO0FBQ1QsY0FBYztBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIG1vYmlsZSBmaXJzdCAzMDB4NDQwICovXFxuXFxuKntcXG5wYWRkaW5nOiAwO1xcbm1hcmdpbjowO1xcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuXFxuLyogY29sb3Igc2VjdGlvbiAqL1xcbi0tYmxhY2s6IGJsYWNrO1xcbi0td2hpdGU6IHdoaXRlO1xcbi0tZ3JlZW46ICMwOUZGOTk7XFxuLS15ZWxsb3c6ICNGNUJCMDA7XFxuLS1saWdodFllbGxvdzogI0VFRUU5QjtcXG4tLXJlZDojRUQ2NDY0O1xcbi0tbGlnaHRSZWQ6I2RjMTQzYztcXG59XFxuXFxuLyogcmVwZXRpdGlvbiBzZWN0aW9uICovXFxuXFxuXFxuXFxuaGVhZGVyLCBhcnRpY2xle1xcbmRpc3BsYXk6ZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxubWFpbntcXG5kaXNwbGF5OmdyaWQ7XFxufVxcblxcbi8qIGluZGl2aWR1YWwgc2VjdGlvbiAqL1xcblxcbmJvZHl7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbmNvbG9yOiB2YXIoLS1ibGFjayk7XFxudHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvcjtcXG50cmFuc2l0aW9uLWR1cmF0aW9uOjJzO1xcbn1cXG5cXG5oZWFkZXJ7XFxuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spXFxufVxcblxcbmhlYWRlciBoMXtcXG5mb250LXNpemU6bWF4KDFyZW0sMy44dncpO1xcbn1cXG5oZWFkZXIgc3BhbntcXG5kaXNwbGF5OmJsb2NrO1xcbmZvbnQtc2l6ZTptYXgoMC43cmVtLDIuOHZ3KTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbntcXG5oZWlnaHQ6OTAlO1xcbn1cXG5cXG5tYWlue1xcbmdyaWQtdGVtcGxhdGU6IDEwJSAxMCUgMWZyIDIwMHB4IDEwJS8gMWZyO1xcbmdhcDoxMHB4O1xcbnBhZGRpbmctdG9wOjVweDtcXG5wYWRkaW5nLWJvdHRvbTo1cHg7XFxufVxcblxcbmFydGljbGV7XFxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbi8qIGFsaWduLXNlbGY6Y2VudGVyOyAqL1xcbmp1c3RpZnktc2VsZjpjZW50ZXI7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuZ2FwOiA3cHg7XFxucGFkZGluZzogNXB4IDBweDtcXG53aWR0aDo5OCU7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5hcnRpY2xlIGZvcm0gZGl2e1xcbmRpc3BsYXk6ZmxleDtcXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxuZ2FwOiA3cHg7XFxuXFxufVxcblxcbmJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOiA4cHg7XFxuYm9yZGVyLXJhZGl1czoxMnB4O1xcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yIDAuN3NcXG59XFxuXFxuLyogZWRpdCBpdGVtIGJ1dHRvbiAqL1xcbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbmJvdHRvbTowO1xcbnJpZ2h0OiAwO1xcbnBvc2l0aW9uOmFic29sdXRlO1xcbnBhZGRpbmc6IDVweDtcXG5ib3JkZXItcmFkaXVzOjMwcHg7XFxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9ue1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuY29sb3I6IHZhcigtLXdoaXRlKTtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5wYWRkaW5nOiA2cHg7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24ub25TZWxlY3Rpb246aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRZZWxsb3cpO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuY29sb3I6dmFyKC0td2hpdGUpO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5jdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuc2VsZWN0e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbnBhZGRpbmc6NnB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J117XFxucGFkZGluZzozcHg7XFxuYm9yZGVyLXJhZGl1czo0cHg7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcblxcbn1cXG5cXG5cXG4vKiBhcnRpY2xlIHNlY3Rpb24gKi9cXG5cXG4jbGlzdENvbnRhaW5lcntcXG5ncmlkLXJvdy1zdGFydDotMztcXG5ncmlkLXJvdy1lbmQ6LTM7XFxucG9zaXRpb246IHJlbGF0aXZlXFxufVxcbiNsaXN0Q29udGFpbmVye1xcbm92ZXJmbG93OnNjcm9sbDtcXG53aWR0aDo5OCU7XFxubWF4LWhlaWdodDo5OCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbGN1bGF0aW9uVHlwZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbGN1bGF0aW9uVHlwZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFya21vZGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrbW9kZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcFN1cHBvcnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXNrdG9wU3VwcG9ydC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbi8vIGltcG9ydCBzdHlsZXNcbmltcG9ydCAnLi9zdHlsaW5nL3N0eWxlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2Rhcmttb2RlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2Rhcmttb2RlLmpzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2xpc3QuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvZGVza3RvcFN1cHBvcnQuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvcG9wdXAuY3NzJ1xuXG5cbi8vIGltcG9ydCBmdW5jdGlvbmFsaXR5XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9saXN0L2xpc3RTdHJ1Y3R1cmUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvbGlzdC9jdXJyZW50TGlzdC5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuV2luZG93LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9hZGROZXdMaXN0LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuQ2hhbmdlQ29sb3JXaW5kb3cuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9leHBlbnNlVHlwZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS90eXBlQ2FsY3VsYXRvci5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9jYWxjdWxhdGUvY2FsY3VsYXRlLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2ZpbGUvZG93bmxvYWRGaWxlLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2ZpbGUvdXBsb2FkRmlsZS5qcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=