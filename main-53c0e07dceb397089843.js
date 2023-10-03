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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../display/itemsOrLists.js */ "./input/functionality/display/itemsOrLists.js");


const uploadButton = document.querySelector(`input[type='file']`);
uploadButton.addEventListener('change', updateStructure)

function updateStructure() {

  let myFile = uploadButton.files[0]
  let reader = new FileReader();

  reader.addEventListener('load', (event) => {

    window.list = JSON.parse(event.target.result)
    currentList = list[0];
    (0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_0__.displayList)()
  });

  reader.readAsText(myFile);
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
/* harmony import */ var _window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../window/generateContentForEditWindow.js */ "./input/functionality/window/generateContentForEditWindow.js");




function addFoodToTheList() {
  let nameValue = document.getElementById('name').value;

  try {
    let food = {
      name: nameValue,
      price: getNumberOf('price'),
      amountPerPrice: getNumberOf('amountPerPrice'),
      amountPerDay: getNumberOf('amountPerDay'),
      weekAmount: getNumberOf('weekAmount'),
      monthAmount: getNumberOf('monthAmount'),
    }
    ;(0,_window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_1__.checkIfFoodIsEmpty)(food)
    ;(0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)((0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Food)(food.name, food.price, amountPerPrice, amountPerPrice, weekAmount, monthAmount))
  }
  catch (error) {
    alert(error)
  }
}



function addProductToTheList() {
  let nameValue = document.getElementById('name').value;

  try {
    let product = {
      name: nameValue,
      price: getNumberOf('price')
    }
    ;(0,_window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_1__.checkIfProductIsEmpty)(product)
    ;(0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)((0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Product)(product.name, product.price))
  }
  catch (error) {
    alert(error)
  }

}


function addMoneyToTheList() {
  try {
    let money = { price: getNumberOf('price') }
    ;(0,_window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_1__.checkIfMoneyIsEmpty)(money)
    ;(0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)((0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Money)(money.price))
  }
  catch (error) {
    alert(error)
  }
}

function getNumberOf(elementId) {
  let valueOfElement = document.getElementById(`${elementId}`).value
  return transformToNumber(valueOfElement)
}

function transformToNumber(valueOfElement) {
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
/* harmony export */   checkIfFoodIsEmpty: () => (/* binding */ checkIfFoodIsEmpty),
/* harmony export */   checkIfMoneyIsEmpty: () => (/* binding */ checkIfMoneyIsEmpty),
/* harmony export */   checkIfProductIsEmpty: () => (/* binding */ checkIfProductIsEmpty),
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
function generateContentForDialogForLists() {

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
      runPromiseToApplyValue(getValuesFromFoodInputs, getValuesForFood, checkIfFoodIsEmpty, reassingValueFromCurrentIndexIfItsAFood, true);
      break;
    case 'product':
      runPromiseToApplyValue(getValuesFromProductInputs, getValuesForProduct, checkIfProductIsEmpty, reassingValueFromCurrentIndexIfItsAProduct);
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

// import styles









// import functionality












})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtHQUFrRyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxlQUFlLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLFFBQVEsYUFBYSxN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QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFDNEI7QUFDRztBQUNEO0FBQ1E7QUFDWDtBQUNVO0FBQ1Q7OztBQUc1QjtBQUMrQztBQUNGO0FBQ0c7QUFDRjtBQUNBO0FBQ1c7QUFDVDtBQUNMO0FBQ0s7QUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9jYWxjdWxhdGUvY2FsY3VsYXRlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9leHBlbnNlVHlwZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZWRpdEl0ZW1Pckxpc3Qvc2VsZWN0aW9uLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZmlsZS9kb3dubG9hZEZpbGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9maWxlL3VwbG9hZEZpbGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvbGlzdC9jdXJyZW50TGlzdC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2xpc3QvbGlzdFN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3R5cGVDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L2FkZE5ld0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS93aW5kb3cvZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuQ2hhbmdlQ29sb3JXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS93aW5kb3cvb3BlbldpbmRvdy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rhcmttb2RlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rhcmttb2RlLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rlc2t0b3BTdXBwb3J0LmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2xpc3QuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvcG9wdXAuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvc3R5bGUuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9jYWxjdWxhdGlvblR5cGUuY3NzP2I2NDgiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kYXJrbW9kZS5jc3M/M2FiMyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rlc2t0b3BTdXBwb3J0LmNzcz8yNWZmIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvbGlzdC5jc3M/YTNlMyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL3BvcHVwLmNzcz8xZWY2Iiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvc3R5bGUuY3NzP2NkYTEiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9maWxlSW1wb3J0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IGNhbGN1bGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyZXN1bHRDb250ZW50YCk7XG5jb25zdCBjYWxjdWxhdGVCdXR0b24gPSBjYWxjdWxhdGVDb250YWluZXIucXVlcnlTZWxlY3RvcihgYnV0dG9uYCk7XG5jb25zdCBjYWxjdWxhdGVTcGFuID0gY2FsY3VsYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYHNwYW5gKTtcblxuY2FsY3VsYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsY3VsYXRlKVxuXG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlKCkge1xuICBsZXQgaW5kZXhvID0gMFxuICBsZXQgcmVzdWx0ID0gY3VycmVudExpc3QuYXJyYXkucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudEl0ZW0pID0+IHtcbiAgICBpbmRleG8gKz0gMTtcbiAgICBzd2l0Y2ggKGN1cnJlbnRJdGVtLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBjYWxjdWxhdGVkRm9vZChjdXJyZW50SXRlbSk7XG4gICAgICBjYXNlICdwcm9kdWN0JzpcbiAgICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgY3VycmVudEl0ZW0ucHJpY2U7XG4gICAgfVxuICB9LCAwKTtcblxuICBjYWxjdWxhdGVTcGFuLmlubmVyVGV4dCA9IHJlc3VsdDtcbn1cblxuXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZWRGb29kKGN1cnJlbnRGb29kKSB7XG4gIGxldCBwcmljZUZvclVuaXQgPSBjdXJyZW50Rm9vZC5wcmljZSAvIGN1cnJlbnRGb29kLmFtb3VudFBlclByaWNlO1xuICBsZXQgYW1vdW50T2ZGb29kRWF0ZW5QZXJNb250aE9yV2VlayA9IGN1cnJlbnRGb29kLmFtb3VudFBlckRheSAqIGdldFByb2Nlc3VyZShjdXJyZW50Rm9vZCk7XG4gIGxldCBhdmVyYWdlRm9vZCA9IHByaWNlRm9yVW5pdCAqIGFtb3VudE9mRm9vZEVhdGVuUGVyTW9udGhPcldlZWs7XG4gIHJldHVybiBhdmVyYWdlRm9vZDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvY2VzdXJlKGN1cnJlbnRGb29kKSB7XG4gIGlmICh0eXBlT2ZDYWxjdWxhdGlvbiA9PSAnbW9udGhseScpIHtcbiAgICByZXR1cm4gY3VycmVudEZvb2QubW9udGhBbW91bnRcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gY3VycmVudEZvb2Qud2Vla0Ftb3VudFxuICB9XG59XG4iLCJpbXBvcnQgeyBhZGRGb29kVG9UaGVMaXN0LCBhZGRNb25leVRvVGhlTGlzdCwgYWRkUHJvZHVjdFRvVGhlTGlzdCB9IGZyb20gJy4vLi4vbGlzdC9hZGRJdGVtc1RvTGlzdC5qcyc7XG5cbmxldCBzZWxlY3RlZFNlY3Rpb247XG5jb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlOmZpcnN0LW9mLXR5cGUgc2VsZWN0Jyk7XG5cbnR5cGVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHsgZGlzcGxheUNvbnRlbnRGb3JUeXBlKGV2ZW50LnRhcmdldC52YWx1ZSkgfSlcblxubGV0IGV4cGVuc2VDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2V4cGVuc2VDb250ZW50IGZvcm0nKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNvbnRlbnRGb3JUeXBlKHRhcmdldFZhbHVlKSB7XG5cbiAgc3dpdGNoICh0YXJnZXRWYWx1ZSkge1xuICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgZ2VuZXJhdGVGb29kKClcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgZ2VuZXJhdGVQcm9kdWN0KClcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIGdlbmVyYXRlTW9uZXkoKVxuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVGb29kKCkge1xuICBleHBlbnNlQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgIDxwPm5hbWU6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG48cD5wcmljZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J2RlY2ltYWwnIGlkPVwicHJpY2VcIj5cbjxwPmFtb3VudCBvZiBmb29kIHBlciBwcmljZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyUHJpY2VcIj5cbjxwPmFtb3VudCBvZiBmb29kIHBlciBkYXk6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cImFtb3VudFBlckRheVwiPlxuPGRpdj5cbiAgPHNlY3Rpb24+XG4gICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIG1vbnRoOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cIm1vbnRoQW1vdW50XCI+XG4gIDwvc2VjdGlvbj5cbiAgPHA+b3I8L3A+XG4gIDxzZWN0aW9uPlxuICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciB3ZWVrOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cIndlZWtBbW91bnRcIj5cbiAgPC9zZWN0aW9uPlxuPC9kaXY+XG48YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPlxuYFxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRm9vZFRvVGhlTGlzdClcblxuICBpZiAod2luZG93LnR5cGVPZkNhbGN1bGF0aW9uID09ICdtb250aGx5Jykge1xuXG4gICAgc2VsZWN0ZWRTZWN0aW9uID0gZXhwZW5zZUNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuICB9XG4gIGVsc2Uge1xuXG4gICAgc2VsZWN0ZWRTZWN0aW9uID0gZXhwZW5zZUNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VjdGlvbjpsYXN0LW9mLXR5cGUnKTtcbiAgfVxuXG4gIHNlbGVjdGVkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvZHVjdCgpIHtcbiAgZXhwZW5zZUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gYCA8cD5uYW1lOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiPlxuPHA+cHJpY2U6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cInByaWNlXCI+XG48YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPlxuYFxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvZHVjdFRvVGhlTGlzdClcblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU1vbmV5KCkge1xuICBleHBlbnNlQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgIDxwPm1vbmV5OjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJwcmljZVwiPlxuPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTW9uZXlUb1RoZUxpc3QpXG59XG4iLCJpbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9saXN0L2xpc3RTdHJ1Y3R1cmUuanMnO1xuaW1wb3J0IHsgc2VsZWN0RGl2IH0gZnJvbSAnLi8uLi9lZGl0SXRlbU9yTGlzdC9zZWxlY3Rpb24uanMnXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG5cbmxldCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExpc3QnKVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxpc3QoKSB7XG4gIHJlc3RhcnRFdmVyeXRoaW5nKCk7XG4gIGN1cnJlbnRMaXN0LmFycmF5LmZvckVhY2goYXBwZW5kSXRlbXMpXG4gIGxpc3QuZm9yRWFjaChhcHBlbmRMaXN0cylcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKClcbn1cblxuZnVuY3Rpb24gcmVzdGFydEV2ZXJ5dGhpbmcoKSB7XG4gIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uJyk7XG4gIGVkaXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnb25TZWxlY3Rpb24nKTtcbiAgd2luZG93LnNlbGVjdGVkSW5kZXggPSAnJztcblxuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgbGlzdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMaXN0Jyk7XG4gIGxpc3RTZWxlY3QuaW5uZXJIVE1MID0gJyc7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEl0ZW1zKGl0ZW0sIGN1cnJlbnRMaXN0T2ZJdGVtc0luZGV4KSB7XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0RGl2KVxuICBsZXQgbmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5hbWVUZXh0LmlubmVyVGV4dCA9IGl0ZW0ubmFtZTtcbiAgbmFtZVRleHQuc3R5bGUuY29sb3IgPSByZXR1cm5EaWZmZXJlbnRDb2xvckRlcGVuZGluZ09uVHlwZShpdGVtKTtcbiAgbmFtZVRleHQuZGF0YXNldC5pbmRleCA9IGN1cnJlbnRMaXN0T2ZJdGVtc0luZGV4O1xuICBjb250YWluZXIuYXBwZW5kKGxpKTtcbiAgbGkuYXBwZW5kKG5hbWVUZXh0KTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuRGlmZmVyZW50Q29sb3JEZXBlbmRpbmdPblR5cGUoaXRlbSkge1xuICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgcmV0dXJuIGNvbG9yLmZvb2Q7XG4gICAgY2FzZSAncHJvZHVjdCc6XG4gICAgICByZXR1cm4gY29sb3IucHJvZHVjdDtcbiAgICBjYXNlICdtb25leSc6XG4gICAgICByZXR1cm4gY29sb3IubW9uZXk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBhcHBlbmRMaXN0cyhsaXN0LCBjdXJyZW50TGlzdG9mTGlzdHNJbmRleCkge1xuXG4gIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICBvcHRpb24uaW5uZXJIVE1MID0gYCR7bGlzdC5uYW1lfWA7XG4gIG9wdGlvbi52YWx1ZSA9IGAke2N1cnJlbnRMaXN0b2ZMaXN0c0luZGV4fWA7XG4gIGlmICh3aW5kb3cudmFsdWVPZlNlbGVjdCA9PSBjdXJyZW50TGlzdG9mTGlzdHNJbmRleCkge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gIH1cbiAgbGlzdFNlbGVjdC5hcHBlbmQob3B0aW9uKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZWxlY3REaXYoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgd2luZG93LnNlbGVjdGVkSW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleFxuICAgIHNlbGVjdFBhcmVudChldmVudClcbiAgfVxufVxuXG5cblxuXG5mdW5jdGlvbiBzZWxlY3RQYXJlbnQoZXZlbnQpIHtcbiAgbGV0IHBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuXG4gIHJlbW92ZUNsYXNzZXMoKVxuICBsZXQgZWRpdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b25gKTtcbiAgZWRpdEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgnb25TZWxlY3Rpb24nKVxuICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRJdGVtJyk7XG59XG5mdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICBsZXQgb25TZWxlY3Rpb25DbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vblNlbGVjdGlvbicpXG4gIGlmKG9uU2VsZWN0aW9uQ2xhc3Mpe1xuXG4gIG9uU2VsZWN0aW9uQ2xhc3MuY2xhc3NMaXN0LnJlbW92ZSgnb25TZWxlY3Rpb24nKVxuICB9XG4gIGxldCBzZWxlY3RlZEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGVkSXRlbScpO1xuICBzZWxlY3RlZEl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkSXRlbScpKTtcblxufVxuIiwiY29uc3QgZG93bmxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlOmZpcnN0LW9mLXR5cGUgYnV0dG9uOm50aC1vZi10eXBlKDIpJyk7XG5kb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvd25sb2FkVGhlTGlzdFN0cnVjdHVyZSlcblxuZnVuY3Rpb24gZG93bmxvYWRUaGVMaXN0U3RydWN0dXJlKCl7XG5sZXQgZmlsZVRvRG93bmxvYWQgPSBuZXcgRmlsZShbSlNPTi5zdHJpbmdpZnkod2luZG93Lmxpc3QpXSwgYGxpc3QtJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9YCx7dHlwZTonYXBwbGljYXRpb24vanNvbid9KTtcbmxldCBteVVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZVRvRG93bmxvYWQpO1xubGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5saW5rLmhyZWYgPSBteVVybDtcbmxpbmsuZG93bmxvYWQgPSBmaWxlVG9Eb3dubG9hZC5uYW1lXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspXG5saW5rLmNsaWNrKClcbmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluaylcblVSTC5yZXZva2VPYmplY3RVUkwobXlVcmwpXG59XG4iLCJpbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cbmNvbnN0IHVwbG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9J2ZpbGUnXWApO1xudXBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZVN0cnVjdHVyZSlcblxuZnVuY3Rpb24gdXBkYXRlU3RydWN0dXJlKCkge1xuXG4gIGxldCBteUZpbGUgPSB1cGxvYWRCdXR0b24uZmlsZXNbMF1cbiAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcblxuICAgIHdpbmRvdy5saXN0ID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQucmVzdWx0KVxuICAgIGN1cnJlbnRMaXN0ID0gbGlzdFswXTtcbiAgICBkaXNwbGF5TGlzdCgpXG4gIH0pO1xuXG4gIHJlYWRlci5yZWFkQXNUZXh0KG15RmlsZSk7XG59XG5cblxuIiwiaW1wb3J0IHsgcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdCwgTW9uZXksIFByb2R1Y3QsIEZvb2QgfSBmcm9tICcuL2xpc3RTdHJ1Y3R1cmUuanMnXG5pbXBvcnQgeyBjaGVja0lmRm9vZElzRW1wdHksIGNoZWNrSWZQcm9kdWN0SXNFbXB0eSwgY2hlY2tJZk1vbmV5SXNFbXB0eSB9IGZyb20gJy4vLi4vd2luZG93L2dlbmVyYXRlQ29udGVudEZvckVkaXRXaW5kb3cuanMnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvb2RUb1RoZUxpc3QoKSB7XG4gIGxldCBuYW1lVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuXG4gIHRyeSB7XG4gICAgbGV0IGZvb2QgPSB7XG4gICAgICBuYW1lOiBuYW1lVmFsdWUsXG4gICAgICBwcmljZTogZ2V0TnVtYmVyT2YoJ3ByaWNlJyksXG4gICAgICBhbW91bnRQZXJQcmljZTogZ2V0TnVtYmVyT2YoJ2Ftb3VudFBlclByaWNlJyksXG4gICAgICBhbW91bnRQZXJEYXk6IGdldE51bWJlck9mKCdhbW91bnRQZXJEYXknKSxcbiAgICAgIHdlZWtBbW91bnQ6IGdldE51bWJlck9mKCd3ZWVrQW1vdW50JyksXG4gICAgICBtb250aEFtb3VudDogZ2V0TnVtYmVyT2YoJ21vbnRoQW1vdW50JyksXG4gICAgfVxuICAgIGNoZWNrSWZGb29kSXNFbXB0eShmb29kKVxuICAgIHB1c2hUb0FycmF5QW5kRGlzcGxheUxpc3QoRm9vZChmb29kLm5hbWUsIGZvb2QucHJpY2UsIGFtb3VudFBlclByaWNlLCBhbW91bnRQZXJQcmljZSwgd2Vla0Ftb3VudCwgbW9udGhBbW91bnQpKVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGVycm9yKVxuICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZHVjdFRvVGhlTGlzdCgpIHtcbiAgbGV0IG5hbWVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG5cbiAgdHJ5IHtcbiAgICBsZXQgcHJvZHVjdCA9IHtcbiAgICAgIG5hbWU6IG5hbWVWYWx1ZSxcbiAgICAgIHByaWNlOiBnZXROdW1iZXJPZigncHJpY2UnKVxuICAgIH1cbiAgICBjaGVja0lmUHJvZHVjdElzRW1wdHkocHJvZHVjdClcbiAgICBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KFByb2R1Y3QocHJvZHVjdC5uYW1lLCBwcm9kdWN0LnByaWNlKSlcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChlcnJvcilcbiAgfVxuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vbmV5VG9UaGVMaXN0KCkge1xuICB0cnkge1xuICAgIGxldCBtb25leSA9IHsgcHJpY2U6IGdldE51bWJlck9mKCdwcmljZScpIH1cbiAgICBjaGVja0lmTW9uZXlJc0VtcHR5KG1vbmV5KVxuICAgIHB1c2hUb0FycmF5QW5kRGlzcGxheUxpc3QoTW9uZXkobW9uZXkucHJpY2UpKVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGVycm9yKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldE51bWJlck9mKGVsZW1lbnRJZCkge1xuICBsZXQgdmFsdWVPZkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlbGVtZW50SWR9YCkudmFsdWVcbiAgcmV0dXJuIHRyYW5zZm9ybVRvTnVtYmVyKHZhbHVlT2ZFbGVtZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVG9OdW1iZXIodmFsdWVPZkVsZW1lbnQpIHtcbiAgbGV0IGxldHRlclJlbW92ZXIgPSAvWzAtOV0rL2c7XG4gIGxldCB2YWx1ZU9mRWxlbWVudFdpdGhvdXRMZXR0ZXJzID0gYCR7bGV0dGVyUmVtb3Zlci5leGVjKHZhbHVlT2ZFbGVtZW50KX1gO1xuXG4gIHJldHVybiBOdW1iZXIodmFsdWVPZkVsZW1lbnRXaXRob3V0TGV0dGVycyk7XG59XG4iLCJpbXBvcnQge2Rpc3BsYXlMaXN0fSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5cbmxldCBzZWxlY3RGb3JDdXJyZW50TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RMaXN0Jyk7XG5zZWxlY3RGb3JDdXJyZW50TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VDdXJyZW50TGlzdCk7XG5cbmZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRMaXN0KGV2ZW50KXtcbiAgYWxlcnQoJ3RoaXMgaGFzIGJlZW4gY2hhbmdlZCcpXG53aW5kb3cudmFsdWVPZlNlbGVjdCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xud2luZG93LmN1cnJlbnRMaXN0ID0gbGlzdFt2YWx1ZU9mU2VsZWN0XTtcbmRpc3BsYXlMaXN0KClcbn1cblxuIiwiaW1wb3J0IHsgZGlzcGxheUNvbnRlbnRGb3JUeXBlIH0gZnJvbSAnLi8uLi9kaXNwbGF5L2V4cGVuc2VUeXBlLmpzJ1xuaW1wb3J0IHsgZGlzcGxheUxpc3QgfSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5cblxuLy8gY29sb3Igc2VjdGlvblxuaWYgKGxvY2FsU3RvcmFnZS5jb2xvcikge1xuICB3aW5kb3cuY29sb3IgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jb2xvcilcbn1cbmVsc2Uge1xuICB3aW5kb3cuY29sb3IgPSB7XG4gICAgZm9vZDogJ3Zpb2xldCcsXG4gICAgcHJvZHVjdDogJ2JsdWUnLFxuICAgIG1vbmV5OiAnZ3JlZW4nLFxuICB9XG59XG5cblxuLy8gY2xhc3Mgc2VjdGlvblxuZXhwb3J0IGZ1bmN0aW9uIE1vbmV5KHByaWNlLCBuYW1lID0gcHJpY2UsIHR5cGUgPSAnbW9uZXknKSB7XG4gIHJldHVybiB7IHByaWNlLCBuYW1lLCB0eXBlIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9kdWN0KG5hbWUsIHByaWNlLCB0eXBlID0gJ3Byb2R1Y3QnKSB7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCB0eXBlIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBGb29kKG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50LCBtb250aEFtb3VudCwgdHlwZSA9ICdmb29kJykge1xubGV0IG15V2Vla0Ftb3VudDtcbmxldCBteU1vbnRoQW1vdW50O1xuICBpZiAod2Vla0Ftb3VudCkge1xuICAgIG15V2Vla0Ftb3VudCA9IHdlZWtBbW91bnQ7XG4gIH1cbiAgZWxzZSB7XG4gICAgbXlXZWVrQW1vdW50ID0gcGFyc2VJbnQobW9udGhBbW91bnQgLyA0KTtcbiAgfVxuXG4gIGlmIChtb250aEFtb3VudCkge1xuICAgIG15TW9udGhBbW91bnQgPSBtb250aEFtb3VudDtcbiAgfVxuICBlbHNlIHtcbiAgICBteU1vbnRoQW1vdW50ID0gcGFyc2VJbnQod2Vla0Ftb3VudCAqIDQpO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIGFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXksIHdlZWtBbW91bnQ6IG15V2Vla0Ftb3VudCwgbW9udGhBbW91bnQ6IG15TW9udGhBbW91bnQsIHR5cGUgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBMaXN0KG5hbWUsIGFycmF5ID0gW10pIHtcbiAgcmV0dXJuIHsgYXJyYXksIG5hbWUgfVxufVxuXG5cbi8vIGxpc3Qgc2VjdGlvblxuXG5pZiAobG9jYWxTdG9yYWdlLmxpc3QpIHtcbiAgd2luZG93Lmxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5saXN0KVxuICB3aW5kb3cuY3VycmVudExpc3QgPSB3aW5kb3cubGlzdFswXTtcbiAgZGlzcGxheUxpc3QoKVxufVxuZWxzZSB7XG4gIHdpbmRvdy5jdXJyZW50TGlzdCA9IG5ldyBMaXN0KCdkZWZhdWx0Jyk7XG4gIHdpbmRvdy5saXN0ID0gW2N1cnJlbnRMaXN0XTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkod2luZG93Lmxpc3QpKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3InLCBKU09OLnN0cmluZ2lmeSh3aW5kb3cuY29sb3IpKVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHB1c2ggdG8gYXJyYXkgc2VjdGlvblxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdChlbCkge1xuICBjdXJyZW50TGlzdC5hcnJheS5wdXNoKGVsKTtcbiAgZGlzcGxheUxpc3QoKVxuICBkaXNwbGF5Q29udGVudEZvclR5cGUoKVxufVxuXG5cblxuXG5cbiIsImltcG9ydCB7IGRpc3BsYXlDb250ZW50Rm9yVHlwZX0gZnJvbSAnLi9kaXNwbGF5L2V4cGVuc2VUeXBlLmpzJztcblxuXG5jb25zdCB0eXBlU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVDb250YWluZXIgc2VsZWN0Jyk7XG5jb25zdCB0eXBlU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlOmZpcnN0LW9mLXR5cGUgc2VsZWN0Jyk7XG50eXBlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVHlwZU9mQ2FsY3VsYXRpb24pXG5cbmNoYW5nZVR5cGVPZkNhbGN1bGF0aW9uKCk7XG5mdW5jdGlvbiBjaGFuZ2VUeXBlT2ZDYWxjdWxhdGlvbigpe1xuXG5pZih0eXBlU2VsZWN0LnZhbHVlID09ICdtb250aGx5Jyl7XG53aW5kb3cudHlwZU9mQ2FsY3VsYXRpb24gPSAnbW9udGhseSc7XG59XG5lbHNle1xud2luZG93LnR5cGVPZkNhbGN1bGF0aW9uID0gJ3dlZWtseSc7XG59XG5cbmRpc3BsYXlDb250ZW50Rm9yVHlwZSh0eXBlU2VsZWN0b3IudmFsdWUpO1xuXG59XG4iLCJpbXBvcnQge0xpc3R9IGZyb20gJy4vLi4vbGlzdC9saXN0U3RydWN0dXJlLmpzJztcbmltcG9ydCB7Y2xvc2VQb3BVcH0gZnJvbSAnLi9vcGVuV2luZG93LmpzJztcbmltcG9ydCB7ZGlzcGxheUxpc3R9IGZyb20gJy4vLi4vZGlzcGxheS8vaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCBhZGROZXdMaXN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZE5ld0xpc3RQb3BVcCcpXG5cbmNvbnN0IGFkZE5ld0xpc3RCdXR0b24gPSBhZGROZXdMaXN0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKVxuXG5hZGROZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3TGlzdCApXG5mdW5jdGlvbiBhZGROZXdMaXN0KCl7XG5sZXQgbmFtZUZvck5ld0lucHV0ID0gYWRkTmV3TGlzdERpYWxvZy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xubGlzdC5wdXNoKExpc3QobmFtZUZvck5ld0lucHV0KSlcbmRpc3BsYXlMaXN0KClcbmNsb3NlUG9wVXAoKVxufVxuIiwiaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvQnV0dG9ucywgY2xvc2VQb3BVcCB9IGZyb20gJy4vb3BlbldpbmRvdy5qcyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1Ub051bWJlciB9IGZyb20gJy4vLi4vbGlzdC9hZGRJdGVtc1RvTGlzdC5qcyc7XG5pbXBvcnQgeyBGb29kLCBQcm9kdWN0LCBNb25leSB9IGZyb20gJy4vLi4vbGlzdC9saXN0U3RydWN0dXJlLmpzJztcbmltcG9ydCB7IGRpc3BsYXlMaXN0IH0gZnJvbSAnLi8uLi9kaXNwbGF5L2l0ZW1zT3JMaXN0cy5qcydcblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQb3BVcCcpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3coKSB7XG4gIGlmICh3aW5kb3cuc2VsZWN0ZWRJbmRleCkge1xuICAgIGdlbmVyYXRlQ29udGVudEZvckRpYWxvZ0Zvckl0ZW1zKClcbiAgICBhZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBoYXZlbid0IHNlbGVjdGVkIGFueXRoaW5nYClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50Rm9yTGlzdFdpbmRvdygpIHtcbiAgZ2VuZXJhdGVDb250ZW50Rm9yRGlhbG9nRm9yTGlzdHMoKVxuICBhZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JEaWFsb2dGb3JJdGVtcygpIHtcbiAgbGV0IGl0ZW0gPSBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XTtcbiAgbGV0IHNlbGVjdGVkTGlzdCA9IGxpc3Rbc2VsZWN0ZWRJbmRleF07XG4gIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBkaWFsb2cuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+bmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLm5hbWV9J3R5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8cD5hbW91bnQgb2YgZm9vZCBwZXIgcHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgIHZhbHVlPScke2l0ZW0uYW1vdW50UGVyUHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJQcmljZVwiPlxuICAgICAgICA8cD5hbW91bnQgb2YgZm9vZCBwZXIgZGF5OjwvcD5cbiAgICAgICAgPGlucHV0ICAgdmFsdWU9JyR7aXRlbS5hbW91bnRQZXJEYXl9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJEYXlcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciBtb250aDogPGJyPiA8c3Bhbj4oeW91IGVhdCk8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ubW9udGhBbW91bnR9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJtb250aEFtb3VudFwiPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8cD5vcjwvcD5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciB3ZWVrOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS53ZWVrQW1vdW50fScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwid2Vla0Ftb3VudFwiPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgZGlhbG9nLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+bmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLm5hbWV9J3R5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmA7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtb25leSc6XG4gICAgICBkaWFsb2cuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9J2Nsb3NlQnRuJz5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8cD5wcmljZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLnByaWNlfScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J2RlY2ltYWwnIGlkPVwicHJpY2VcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgbGV0IGFwcGx5QnV0dG9uID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNhcHBseScpO1xuICBhcHBseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGx5Q2hhbmdlc0Zvckl0ZW1zKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudEZvckRpYWxvZ0Zvckxpc3RzKCkge1xuXG4gIGRpYWxvZy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz0nY2xvc2VCdG4nPmNsb3NlPC9idXR0b24+XG4gICAgICAgIDxwPm5hbWU6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7Y3VycmVudExpc3QubmFtZX0ndHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gO1xuXG4gIGxldCBhcHBseUJ1dHRvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYXBwbHknKTtcbiAgYXBwbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUNoYW5nZXNGb3JMaXN0cyk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlc0Zvckl0ZW1zKCkge1xuICBsZXQgaXRlbSA9IGN1cnJlbnRMaXN0LmFycmF5W3NlbGVjdGVkSW5kZXhdO1xuICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tRm9vZElucHV0cywgZ2V0VmFsdWVzRm9yRm9vZCwgY2hlY2tJZkZvb2RJc0VtcHR5LCByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQUZvb2QsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvZHVjdCc6XG4gICAgICBydW5Qcm9taXNlVG9BcHBseVZhbHVlKGdldFZhbHVlc0Zyb21Qcm9kdWN0SW5wdXRzLCBnZXRWYWx1ZXNGb3JQcm9kdWN0LCBjaGVja0lmUHJvZHVjdElzRW1wdHksIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBUHJvZHVjdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtb25leSc6XG4gICAgICBydW5Qcm9taXNlVG9BcHBseVZhbHVlKGdldFZhbHVlc0Zyb21Nb25leUlucHV0cywgZ2V0VmFsdWVzRm9yTW9uZXksIGNoZWNrSWZNb25leUlzRW1wdHksIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNNb25leSk7XG4gICAgICBicmVhaztcblxuICB9XG59XG5cbmZ1bmN0aW9uIHJ1blByb21pc2VUb0FwcGx5VmFsdWUoZ2V0VmFsdWVzRnJvbUlucHV0X2NhbGxiYWNrLCBnZXRWYWx1ZXNGb3JfY2FsbEJhY2ssIGNoZWNrSWZJdGVtSXNFbXB0eV9jYWxsQmFjaywgcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FfY2FsbEJhY2ssIHdvcmtpbmdXaXRoRm9vZCA9IGZhbHNlLCkge1xuICB3aW5kb3cud29ya2luZ1dpdGhGb29kID0gd29ya2luZ1dpdGhGb29kO1xuICAvLyByZW1lbWJlciB0byBhZGQgdmFsaWRpdHkgaW4gdGhlIGNhdGNoIGluIGFsbCBvZiB0aGVzZSBcbiAgZ2V0VmFsdWVzRnJvbUlucHV0X2NhbGxiYWNrKClcbiAgICAudGhlbihnZXRWYWx1ZXNGb3JfY2FsbEJhY2spXG4gICAgLnRoZW4oY2hlY2tJZkl0ZW1Jc0VtcHR5X2NhbGxCYWNrKVxuICAgIC50aGVuKG1ha2VXZWVrc09yTW9udGhzVmFsaWQpXG4gICAgLnRoZW4ocmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FfY2FsbEJhY2spXG4gICAgLnRoZW4oZGlzcGxheUxpc3QpXG4gICAgLnRoZW4oY2xvc2VQb3BVcClcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tRm9vZElucHV0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICBsZXQgYW1vdW50UGVyUHJpY2UgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2Ftb3VudFBlclByaWNlJykudmFsdWU7XG4gIGxldCBhbW91bnRQZXJEYXkgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2Ftb3VudFBlckRheScpLnZhbHVlO1xuICBsZXQgbW9udGhBbW91bnQgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI21vbnRoQW1vdW50JykudmFsdWU7XG4gIGxldCB3ZWVrQW1vdW50ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrQW1vdW50JykudmFsdWU7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCBtb250aEFtb3VudCwgd2Vla0Ftb3VudCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tUHJvZHVjdElucHV0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSB9O1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFZhbHVlc0Zyb21Nb25leUlucHV0cygpIHtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICByZXR1cm4geyBwcmljZSB9O1xufVxuXG5cblxuZnVuY3Rpb24gZ2V0VmFsdWVzRm9yRm9vZChmb29kKSB7XG4gIGxldCBuYW1lID0gZm9vZC5uYW1lO1xuICBsZXQgcHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLnByaWNlKTtcbiAgbGV0IGFtb3VudFBlclByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC5hbW91bnRQZXJQcmljZSk7XG4gIGxldCBhbW91bnRQZXJEYXkgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLmFtb3VudFBlckRheSk7XG4gIGxldCBtb250aEFtb3VudCA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2QubW9udGhBbW91bnQpO1xuICBsZXQgd2Vla0Ftb3VudCA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2Qud2Vla0Ftb3VudCk7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCBtb250aEFtb3VudCwgd2Vla0Ftb3VudCB9XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlc0ZvclByb2R1Y3QocHJvZHVjdCkge1xuICBsZXQgbmFtZSA9IHByb2R1Y3QubmFtZTtcbiAgbGV0IHByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIocHJvZHVjdC5wcmljZSk7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JNb25leShtb25leSkge1xuICBsZXQgcHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihtb25leS5wcmljZSk7XG4gIHJldHVybiB7IHByaWNlIH1cbn1cblxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZkZvb2RJc0VtcHR5KGZvb2QpIHtcbiAgLy8gY2hlY2sgZW1wdHluZXNzIFxuICBjaGVja0lmRW1wdHkoZm9vZC5uYW1lLCAndGhlIG5hbWUgb2YgdGhlIGZvb2QnKTtcbiAgY2hlY2tJZkVtcHR5KGZvb2QucHJpY2UsICd0aGUgcHJpY2Ugb2YgdGhlIGZvb2QnKTtcbiAgY2hlY2tJZkVtcHR5KGZvb2QuYW1vdW50UGVyUHJpY2UsICd0aGUgYW1vdW50IG9mIGZvb2QgcGVyIHByaWNlJyk7XG4gIGNoZWNrSWZFbXB0eShmb29kLmFtb3VudFBlckRheSwgJ3RoZSBhbW91bnQgb2YgZm9vZCBwZXIgZGF5Jyk7XG4gIGNoZWNrSWZFaXRoZXJNb250aE9yV2Vla0lzRW1wdHkoZm9vZC53ZWVrQW1vdW50LCBmb29kLm1vbnRoQW1vdW50KTtcblxuICBsaW1pdE51bWJlcihmb29kLndlZWtBbW91bnQsIDcsICd3ZWVrcyBjYW4gb25seSBiZSA3IGRheXMgbG9uZ3MnKVxuICBsaW1pdE51bWJlcihmb29kLm1vbnRoQW1vdW50LCAzMSwgJ21vbnRocyBjYW4gb25seSBiZSAzMSBkYXlzIGxvbmcnKVxuXG4gIHJldHVybiB7IG5hbWU6IGZvb2QubmFtZSwgcHJpY2U6IGZvb2QucHJpY2UsIGFtb3VudFBlclByaWNlOiBmb29kLmFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXk6IGZvb2QuYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50OiBmb29kLndlZWtBbW91bnQsIG1vbnRoQW1vdW50OiBmb29kLm1vbnRoQW1vdW50IH1cbn1cbmZ1bmN0aW9uIGNoZWNrSWZFaXRoZXJNb250aE9yV2Vla0lzRW1wdHkod2VlaywgbW9udGgpIHtcbiAgaWYgKGNoZWNrV2l0aG91dEVycm9yKHdlZWssICd3ZWVrJykgJiYgY2hlY2tXaXRob3V0RXJyb3IobW9udGgsICdtb250aCcpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgaGF2ZW4ndCBmaWxsZWQgbmVpdGhlciB0aGUgYW1vdW50IG9mIGRheXMgcGVyIHdlZWsgbm9yIHRoZSBhbW91bnQgb2YgZGF5cyBwZXIgdGhlIG1vbnRoYClcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrV2l0aG91dEVycm9yKGl0ZW0sIG5hbWUpIHtcbiAgaWYgKGAke2l0ZW19YCA9PSAnTmFOJykge1xuICAgIHJldHVybiBgeW91IGRpZG4ndCBmaWxsIHRoZSAke25hbWV9YDtcbiAgfVxuICBlbHNlIGlmICghYCR7aXRlbX1gKSB7XG4gICAgcmV0dXJuIGB5b3UgZGlkbid0IGZpbGwgdGhlICR7bmFtZX1gO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbn1cblxuZnVuY3Rpb24gbGltaXROdW1iZXIobnVtYmVyVG9DaGVjaywgbGltaXQsIG1lc3NhZ2UpIHtcbiAgaWYgKE51bWJlcihudW1iZXJUb0NoZWNrKSA+IE51bWJlcihsaW1pdCkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZQcm9kdWN0SXNFbXB0eShwcm9kdWN0KSB7XG4gIC8vIGNoZWNrIGVtcHR5bmVzcyBcbiAgY2hlY2tJZkVtcHR5KHByb2R1Y3QubmFtZSwgJ3RoZSBuYW1lIG9mIHRoZSBwcm9kdWN0Jyk7XG4gIGNoZWNrSWZFbXB0eShwcm9kdWN0LnByaWNlLCAndGhlIHByaWNlIG9mIHRoZSBwcm9kdWN0Jyk7XG5cbiAgcmV0dXJuIHsgbmFtZTogcHJvZHVjdC5uYW1lLCBwcmljZTogcHJvZHVjdC5wcmljZSB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZNb25leUlzRW1wdHkobW9uZXkpIHtcbiAgLy8gY2hlY2sgZW1wdHluZXNzIFxuICBjaGVja0lmRW1wdHkobW9uZXkucHJpY2UsICdhbnkgbW9uZXknKTtcblxuICByZXR1cm4geyBwcmljZTogbW9uZXkucHJpY2UgfVxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrSWZFbXB0eShlbGVtZW50LCBuYW1lT2ZFbGVtZW50Rm9yRW1wdHlNZXNzYWdlKSB7XG4gIGlmIChgJHtlbGVtZW50fWAgPT0gJ05hTicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBkaWRuJ3QgZmlsbCAke25hbWVPZkVsZW1lbnRGb3JFbXB0eU1lc3NhZ2V9YCk7XG4gIH1cbiAgZWxzZSBpZiAoIWAke2VsZW1lbnR9YCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeW91IGRpZG4ndCBmaWxsICR7bmFtZU9mRWxlbWVudEZvckVtcHR5TWVzc2FnZX1gKTtcbiAgfVxufVxuXG5cblxuZnVuY3Rpb24gbWFrZVdlZWtzT3JNb250aHNWYWxpZChmb29kKSB7XG4gIGlmICh3aW5kb3cud29ya2luZ1dpdGhGb29kKSB7XG5cbiAgICBsZXQgaXRlbSA9IGN1cnJlbnRMaXN0LmFycmF5W3NlbGVjdGVkSW5kZXhdO1xuICAgIC8vIGNoZWNrIGlmIHRoZSB3ZWVrIG9yIHRoZSBtb250aCBpcyBmYWxzZVxuICAgIGxldCB3ZWVrRXF1YWwgPSBmYWxzZTtcbiAgICBsZXQgbW9udGhFcXVhbCA9IGZhbHNlO1xuICAgIGlmIChpdGVtLndlZWtBbW91bnQgPT0gZm9vZC53ZWVrQW1vdW50KSB7XG4gICAgICB3ZWVrRXF1YWwgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXRlbS5tb250aEFtb3VudCA9PSBmb29kLm1vbnRoQW1vdW50KSB7XG4gICAgICBtb250aEVxdWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2UgdGhlIG90aGVyIHZhbHVlIGlmIG9uZSBvZiB0aG9zZSBpcyBmYWxzZSBidXQgdGhlIG90aGVyIG9uZSBpcyB0cnVlXG4gICAgaWYgKHdlZWtFcXVhbCA9PSB0cnVlICYmIG1vbnRoRXF1YWwgPT0gZmFsc2UpIHtcbiAgICAgIGZvb2Qud2Vla0Ftb3VudCA9IHBhcnNlSW50KGZvb2QubW9udGhBbW91bnQgLyA0KVxuICAgIH1cbiAgICBlbHNlIGlmICh3ZWVrRXF1YWwgPT0gZmFsc2UgJiYgbW9udGhFcXVhbCA9PSB0cnVlKSB7XG4gICAgICBmb29kLm1vbnRoQW1vdW50ID0gcGFyc2VJbnQoZm9vZC53ZWVrQW1vdW50ICogNClcbiAgICB9XG5cbiAgICByZXR1cm4geyBuYW1lOiBmb29kLm5hbWUsIHByaWNlOiBmb29kLnByaWNlLCBhbW91bnRQZXJQcmljZTogZm9vZC5hbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5OiBmb29kLmFtb3VudFBlckRheSwgd2Vla0Ftb3VudDogZm9vZC53ZWVrQW1vdW50LCBtb250aEFtb3VudDogZm9vZC5tb250aEFtb3VudCB9XG5cblxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBmb29kO1xuICB9XG59XG5cblxuXG5cblxuZnVuY3Rpb24gcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FGb29kKGZvb2QpIHtcbiAgY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF0gPSBGb29kKGZvb2QubmFtZSwgZm9vZC5wcmljZSwgZm9vZC5hbW91bnRQZXJQcmljZSwgZm9vZC5hbW91bnRQZXJEYXksIGZvb2Qud2Vla0Ftb3VudCwgZm9vZC5tb250aEFtb3VudClcbn1cblxuZnVuY3Rpb24gcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FQcm9kdWN0KHByb2R1Y3QpIHtcbiAgY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF0gPSBQcm9kdWN0KHByb2R1Y3QubmFtZSwgcHJvZHVjdC5wcmljZSlcbn1cblxuXG5mdW5jdGlvbiByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzTW9uZXkobW9uZXkpIHtcbiAgY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF0gPSBNb25leShtb25leS5wcmljZSlcbn1cblxuXG5cblxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzRm9yTGlzdHMoKSB7XG4gIGxldCBuYW1lID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gIGN1cnJlbnRMaXN0Lm5hbWUgPSBuYW1lO1xuICBkaXNwbGF5TGlzdCgpXG4gIGNsb3NlUG9wVXAoKVxufVxuXG5cbiIsImltcG9ydCB7IGRpc3BsYXlMaXN0fSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCBjaGFuZ2VDb2xvckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBidXR0b246Zmlyc3Qtb2YtdHlwZScpO1xuXG5jaGFuZ2VDb2xvckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Db2xvcldpbmRvdylcbmZ1bmN0aW9uIG9wZW5Db2xvcldpbmRvdygpIHtcbiAgbGV0IGNvbG9yV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yUG9wVXAnKTtcbiAgY29sb3JXaW5kb3cuc2hvd01vZGFsKClcbiAgZm9yIChsZXQgY29sb3JQaWNrZXIgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApKSB7XG4gICAgY29sb3JQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlQ29sb3JzKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbG9ycygpIHtcbiAgd2luZG93LmNvbG9yLmZvb2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMF0udmFsdWVcbiAgd2luZG93LmNvbG9yLnByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMV0udmFsdWVcbiAgd2luZG93LmNvbG9yLm1vbmV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzJdLnZhbHVlXG4gIGRpc3BsYXlMaXN0KClcbn1cblxuXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3csZ2VuZXJhdGVDb250ZW50Rm9yTGlzdFdpbmRvdyB9IGZyb20gJy4vZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcyc7XG5cblxuY29uc3QgZWRpdEN1cnJlbnRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RDb250YWluZXIgZGl2IGJ1dHRvbicpO1xuY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbicpO1xuY29uc3QgYWRkTmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGJ1dHRvbjpudGgtb2YtdHlwZSgyKScpO1xuXG5jb25zdCBhZGROZXdMaXN0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZE5ld0xpc3RQb3BVcCcpO1xuY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UG9wVXAnKTtcblxuXG5cbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUNvbnRlbnRBbmRPcGVuV2luZG93KTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvdygpIHtcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3coKVxuICAgIG9wZW5XaW5kb3coZWRpdERpYWxvZylcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZWRpdEN1cnJlbnRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvd0Zvckxpc3QpXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRBbmRPcGVuV2luZG93Rm9yTGlzdCgpIHtcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JMaXN0V2luZG93KClcbiAgICBvcGVuV2luZG93KGVkaXREaWFsb2cpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cblxuYWRkTmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5XaW5kb3coYWRkTmV3TGlzdERpYWxvZykpO1xuXG5mdW5jdGlvbiBvcGVuV2luZG93KGRpYWxvZykge1xuICBkaWFsb2cuc2hvd01vZGFsKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMoKSB7XG4gIGZvciAobGV0IGNsb3NlQnRuIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZUJ0bicpKSB7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcFVwKVxuICB9XG59XG5hZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUG9wVXAoKSB7XG4gIGZvciAobGV0IGRpYWxvZyBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaWFsb2cnKSkge1xuICAgIGlmIChkaWFsb2cub3Blbikge1xuICAgICAgZGlhbG9nLmNsb3NlKClcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5jb25zdCBkYXJrTW9kZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24nKVxuZGFya01vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUb0RhcmtNb2RlKVxuXG5jb25zdCBpc0RhcmtNb2RlRW5hYmxlZCA9IG1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzXG5pZiAoaXNEYXJrTW9kZUVuYWJsZWQpIHtcbiAgc3dpdGNoVG9EYXJrTW9kZSgpXG5cblxufVxuXG5cblxuXG5mdW5jdGlvbiBzd2l0Y2hUb0RhcmtNb2RlKCkge1xuICBodG1sLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKVxuICBpZiAoaHRtbC5jbGFzc05hbWUgPT0gJ2RhcmsnKSB7XG4gICAgZGFya01vZGVCdXR0b24uaW5uZXJUZXh0ID0gJ2xpZ2h0IG1vZGUnO1xuICB9XG4gIGVsc2Uge1xuICAgIGRhcmtNb2RlQnV0dG9uLmlubmVyVGV4dCA9ICdkYXJrIG1vZGUnO1xuICB9XG59XG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VsZWN0ZWR7XG5ib3JkZXItcmFkaXVzOjVweDtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbnBhZGRpbmc6NXB4O1xuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUIsV0FBVzs7QUFFWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VsZWN0ZWR7XFxuYm9yZGVyLXJhZGl1czo1cHg7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbnBhZGRpbmc6NXB4O1xcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LmRhcmt7XG4tLWJsYWNrOndoaXRlO1xuLS13aGl0ZTpibGFjaztcbi0tZ3JlZW46IzAxMjEyMDtcbi0teWVsbG93OiAjRUVFRTlCO1xuLS1saWdodFllbGxvdzogI0Y1QkIwMDtcbi0tcmVkOiNkYzE0M2M7XG4tLWxpZ2h0UmVkOiNFRDY0NjQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290LmRhcmt7XFxuLS1ibGFjazp3aGl0ZTtcXG4tLXdoaXRlOmJsYWNrO1xcbi0tZ3JlZW46IzAxMjEyMDtcXG4tLXllbGxvdzogI0VFRUU5QjtcXG4tLWxpZ2h0WWVsbG93OiAjRjVCQjAwO1xcbi0tcmVkOiNkYzE0M2M7XFxuLS1saWdodFJlZDojRUQ2NDY0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYShtaW4td2lkdGg6NTAwcHgpe1xuYXJ0aWNsZSBmb3JtIGRpdntcbmZsZXgtZGlyZWN0aW9uOnJvdztcbn19XG5cblxuQG1lZGlhKG1pbi13aWR0aDo5MDBweCl7XG5oZWFkZXJ7XG5nYXA6NHB4O1xuXG4gIH1cblxuaGVhZGVyIHNwYW57XG5kaXNwbGF5OmlubGluZTtcbmZvbnQtc2l6ZToyLjJ2dztcbiAgfVxuXG5tYWlue1xuaGVpZ2h0Ojkwdmg7XG5taW4taGVpZ2h0OiA1NTBweDtcbmdyaWQtdGVtcGxhdGU6J2V4cGVuc2VUeXBlIGV4cGVuc2VDb250ZW50JyAwLjlmclxuICAgICAgICAgICAgICAndHlwZU9mQ2FsY3VsYXRpb24gZXhwZW5zZUNvbnRlbnQnIDAuOWZyICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAnc2hvd0xpc3QgZXhwZW5zZUNvbnRlbnQnIDFmclxuICAgICAgICAgICAgICAnc2hvd0xpc3QgcmVzdWx0Q29udGVudCcgMWZyIC8gMWZyIDFmclxufVxuXG5cbiAgLyogb24gdGhlIGxlZnQgKi9cbm1haW4gYXJ0aWNsZTpmaXJzdC1vZi10eXBle1xuZ3JpZC1hcmVhOiBleHBlbnNlVHlwZTtcbn1cbiN0eXBlQ29udGFpbmVye1xuZ3JpZC1hcmVhOnR5cGVPZkNhbGN1bGF0aW9uO1xufVxuI2xpc3RDb250YWluZXJ7XG5ncmlkLWFyZWE6c2hvd0xpc3Q7XG59XG5cbi8qIG9uIHRoZSByaWdodCAqL1xuXG4jZXhwZW5zZUNvbnRlbnR7XG5ncmlkLWFyZWE6ZXhwZW5zZUNvbnRlbnQ7XG59XG4jcmVzdWx0Q29udGVudHtcbmdyaWQtYXJlYTpyZXN1bHRDb250ZW50O1xufVxuXG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsT0FBTzs7RUFFTDs7QUFFRjtBQUNBLGNBQWM7QUFDZCxlQUFlO0VBQ2I7O0FBRUY7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCOzs7O0FBSUE7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOzs7QUFHQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEobWluLXdpZHRoOjUwMHB4KXtcXG5hcnRpY2xlIGZvcm0gZGl2e1xcbmZsZXgtZGlyZWN0aW9uOnJvdztcXG59fVxcblxcblxcbkBtZWRpYShtaW4td2lkdGg6OTAwcHgpe1xcbmhlYWRlcntcXG5nYXA6NHB4O1xcblxcbiAgfVxcblxcbmhlYWRlciBzcGFue1xcbmRpc3BsYXk6aW5saW5lO1xcbmZvbnQtc2l6ZToyLjJ2dztcXG4gIH1cXG5cXG5tYWlue1xcbmhlaWdodDo5MHZoO1xcbm1pbi1oZWlnaHQ6IDU1MHB4O1xcbmdyaWQtdGVtcGxhdGU6J2V4cGVuc2VUeXBlIGV4cGVuc2VDb250ZW50JyAwLjlmclxcbiAgICAgICAgICAgICAgJ3R5cGVPZkNhbGN1bGF0aW9uIGV4cGVuc2VDb250ZW50JyAwLjlmciAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICdzaG93TGlzdCBleHBlbnNlQ29udGVudCcgMWZyXFxuICAgICAgICAgICAgICAnc2hvd0xpc3QgcmVzdWx0Q29udGVudCcgMWZyIC8gMWZyIDFmclxcbn1cXG5cXG5cXG4gIC8qIG9uIHRoZSBsZWZ0ICovXFxubWFpbiBhcnRpY2xlOmZpcnN0LW9mLXR5cGV7XFxuZ3JpZC1hcmVhOiBleHBlbnNlVHlwZTtcXG59XFxuI3R5cGVDb250YWluZXJ7XFxuZ3JpZC1hcmVhOnR5cGVPZkNhbGN1bGF0aW9uO1xcbn1cXG4jbGlzdENvbnRhaW5lcntcXG5ncmlkLWFyZWE6c2hvd0xpc3Q7XFxufVxcblxcbi8qIG9uIHRoZSByaWdodCAqL1xcblxcbiNleHBlbnNlQ29udGVudHtcXG5ncmlkLWFyZWE6ZXhwZW5zZUNvbnRlbnQ7XFxufVxcbiNyZXN1bHRDb250ZW50e1xcbmdyaWQtYXJlYTpyZXN1bHRDb250ZW50O1xcbn1cXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjbGlzdHtcbmJvcmRlci1yYWRpdXM6MTJweDtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbndpZHRoOjkwJTtcbmhlaWdodDo5MCU7XG5vdmVyZmxvdzpzY3JvbGw7XG59XG5cblxubGl7XG5saXN0LXN0eWxlOiBub25lO1xufVxuXG4jbGlzdCBsaS5zZWxlY3RlZEl0ZW17XG5vdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsVUFBVTtBQUNWLGVBQWU7QUFDZjs7O0FBR0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xpc3R7XFxuYm9yZGVyLXJhZGl1czoxMnB4O1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG53aWR0aDo5MCU7XFxuaGVpZ2h0OjkwJTtcXG5vdmVyZmxvdzpzY3JvbGw7XFxufVxcblxcblxcbmxpe1xcbmxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNsaXN0IGxpLnNlbGVjdGVkSXRlbXtcXG5vdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZ3tcbnRleHQtYWxpZ246Y2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5jb2xvcjp2YXIoLS1ibGFjayk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBvc2l0aW9uOmZpeGVkO1xudG9wOjUwJTtcbmxlZnQ6NTAlO1xudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbnotaW5kZXg6MjtcbnBhZGRpbmc6MS4ydnc7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbmRpYWxvZyA+ICp7XG5kaXNwbGF5OmJsb2NrO1xubWFyZ2luLWxlZnQ6YXV0bztcbm1hcmdpbi1yaWdodDphdXRvO1xubWFyZ2luLXRvcDoxMHB4O1xuXG59XG4gIFxuZGlhbG9nOjpiYWNrZHJvcHtcbnBvc2l0aW9uOmZpeGVkO1xuYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoIzIxNUE1OUFBLGJsYWNrKSA7XG5iYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG5vcGFjaXR5OjAuNztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQiw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLE9BQU87QUFDUCxRQUFRO0FBQ1IsK0JBQStCO0FBQy9CLFNBQVM7QUFDVCxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsZUFBZTs7QUFFZjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrREFBa0Q7QUFDbEQscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2d7XFxudGV4dC1hbGlnbjpjZW50ZXI7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbnBvc2l0aW9uOmZpeGVkO1xcbnRvcDo1MCU7XFxubGVmdDo1MCU7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG56LWluZGV4OjI7XFxucGFkZGluZzoxLjJ2dztcXG5ib3JkZXItcmFkaXVzOjEwcHg7XFxufVxcblxcbmRpYWxvZyA+ICp7XFxuZGlzcGxheTpibG9jaztcXG5tYXJnaW4tbGVmdDphdXRvO1xcbm1hcmdpbi1yaWdodDphdXRvO1xcbm1hcmdpbi10b3A6MTBweDtcXG5cXG59XFxuICBcXG5kaWFsb2c6OmJhY2tkcm9we1xcbnBvc2l0aW9uOmZpeGVkO1xcbmJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCMyMTVBNTlBQSxibGFjaykgO1xcbmJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG5vcGFjaXR5OjAuNztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBtb2JpbGUgZmlyc3QgMzAweDQ0MCAqL1xuXG4qe1xucGFkZGluZzogMDtcbm1hcmdpbjowO1xuYm94LXNpemluZzpib3JkZXItYm94O1xufVxuXG46cm9vdHtcblxuLyogY29sb3Igc2VjdGlvbiAqL1xuLS1ibGFjazogYmxhY2s7XG4tLXdoaXRlOiB3aGl0ZTtcbi0tZ3JlZW46ICMwOUZGOTk7XG4tLXllbGxvdzogI0Y1QkIwMDtcbi0tbGlnaHRZZWxsb3c6ICNFRUVFOUI7XG4tLXJlZDojRUQ2NDY0O1xuLS1saWdodFJlZDojZGMxNDNjO1xufVxuXG4vKiByZXBldGl0aW9uIHNlY3Rpb24gKi9cblxuXG5cbmhlYWRlciwgYXJ0aWNsZXtcbmRpc3BsYXk6ZmxleDtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG50ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxubWFpbntcbmRpc3BsYXk6Z3JpZDtcbn1cblxuLyogaW5kaXZpZHVhbCBzZWN0aW9uICovXG5cbmJvZHl7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5jb2xvcjogdmFyKC0tYmxhY2spO1xudHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvcjtcbnRyYW5zaXRpb24tZHVyYXRpb246MnM7XG59XG5cbmhlYWRlcntcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKVxufVxuXG5oZWFkZXIgaDF7XG5mb250LXNpemU6bWF4KDFyZW0sMy44dncpO1xufVxuaGVhZGVyIHNwYW57XG5kaXNwbGF5OmJsb2NrO1xuZm9udC1zaXplOm1heCgwLjdyZW0sMi44dncpO1xufVxuXG5oZWFkZXIgYnV0dG9ue1xuaGVpZ2h0OjkwJTtcbn1cblxubWFpbntcbmdyaWQtdGVtcGxhdGU6IDEwJSAxMCUgMWZyIDIwMHB4IDEwJS8gMWZyO1xuZ2FwOjEwcHg7XG5wYWRkaW5nLXRvcDo1cHg7XG5wYWRkaW5nLWJvdHRvbTo1cHg7XG59XG5cbmFydGljbGV7XG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xuLyogYWxpZ24tc2VsZjpjZW50ZXI7ICovXG5qdXN0aWZ5LXNlbGY6Y2VudGVyO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5nYXA6IDdweDtcbnBhZGRpbmc6IDVweCAwcHg7XG53aWR0aDo5OCU7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG59XG5hcnRpY2xlIGZvcm0gZGl2e1xuZGlzcGxheTpmbGV4O1xuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcbmFsaWduLWl0ZW1zOmNlbnRlcjtcbmdhcDogN3B4O1xuXG59XG5cbmJ1dHRvbntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBhZGRpbmc6IDhweDtcbmJvcmRlci1yYWRpdXM6MTJweDtcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yIDAuN3Ncbn1cblxuLyogZWRpdCBpdGVtIGJ1dHRvbiAqL1xuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbmJvdHRvbTowO1xucmlnaHQ6IDA7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbnBhZGRpbmc6IDVweDtcbmJvcmRlci1yYWRpdXM6MzBweDtcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcbn1cblxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbnBhZGRpbmc6IDZweDtcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9uOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRZZWxsb3cpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xufVxuXG5idXR0b246aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG5jb2xvcjp2YXIoLS13aGl0ZSk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG5jdXJzb3I6cG9pbnRlcjtcbn1cblxuXG5cbnNlbGVjdHtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBhZGRpbmc6NnB4O1xufVxuXG5pbnB1dFt0eXBlPSd0ZXh0J117XG5wYWRkaW5nOjNweDtcbmJvcmRlci1yYWRpdXM6NHB4O1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcblxufVxuXG5cbi8qIGFydGljbGUgc2VjdGlvbiAqL1xuXG4jbGlzdENvbnRhaW5lcntcbmdyaWQtcm93LXN0YXJ0Oi0zO1xuZ3JpZC1yb3ctZW5kOi0zO1xucG9zaXRpb246IHJlbGF0aXZlXG59XG4jbGlzdENvbnRhaW5lcntcbm92ZXJmbG93OnNjcm9sbDtcbndpZHRoOjk4JTtcbm1heC1oZWlnaHQ6OTglO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5QkFBeUI7O0FBRXpCO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUixxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQjs7QUFFQSx1QkFBdUI7Ozs7QUFJdkI7QUFDQSxZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBLDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekMsUUFBUTtBQUNSLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IsZ0JBQWdCO0FBQ2hCLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixRQUFROztBQUVSOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLGNBQWM7QUFDZDs7OztBQUlBO0FBQ0EsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsV0FBVztBQUNYOztBQUVBO0FBQ0EsV0FBVztBQUNYLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLGtCQUFrQjs7QUFFbEI7OztBQUdBLG9CQUFvQjs7QUFFcEI7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixTQUFTO0FBQ1QsY0FBYztBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIG1vYmlsZSBmaXJzdCAzMDB4NDQwICovXFxuXFxuKntcXG5wYWRkaW5nOiAwO1xcbm1hcmdpbjowO1xcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuXFxuLyogY29sb3Igc2VjdGlvbiAqL1xcbi0tYmxhY2s6IGJsYWNrO1xcbi0td2hpdGU6IHdoaXRlO1xcbi0tZ3JlZW46ICMwOUZGOTk7XFxuLS15ZWxsb3c6ICNGNUJCMDA7XFxuLS1saWdodFllbGxvdzogI0VFRUU5QjtcXG4tLXJlZDojRUQ2NDY0O1xcbi0tbGlnaHRSZWQ6I2RjMTQzYztcXG59XFxuXFxuLyogcmVwZXRpdGlvbiBzZWN0aW9uICovXFxuXFxuXFxuXFxuaGVhZGVyLCBhcnRpY2xle1xcbmRpc3BsYXk6ZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxubWFpbntcXG5kaXNwbGF5OmdyaWQ7XFxufVxcblxcbi8qIGluZGl2aWR1YWwgc2VjdGlvbiAqL1xcblxcbmJvZHl7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbmNvbG9yOiB2YXIoLS1ibGFjayk7XFxudHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvcjtcXG50cmFuc2l0aW9uLWR1cmF0aW9uOjJzO1xcbn1cXG5cXG5oZWFkZXJ7XFxuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spXFxufVxcblxcbmhlYWRlciBoMXtcXG5mb250LXNpemU6bWF4KDFyZW0sMy44dncpO1xcbn1cXG5oZWFkZXIgc3BhbntcXG5kaXNwbGF5OmJsb2NrO1xcbmZvbnQtc2l6ZTptYXgoMC43cmVtLDIuOHZ3KTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbntcXG5oZWlnaHQ6OTAlO1xcbn1cXG5cXG5tYWlue1xcbmdyaWQtdGVtcGxhdGU6IDEwJSAxMCUgMWZyIDIwMHB4IDEwJS8gMWZyO1xcbmdhcDoxMHB4O1xcbnBhZGRpbmctdG9wOjVweDtcXG5wYWRkaW5nLWJvdHRvbTo1cHg7XFxufVxcblxcbmFydGljbGV7XFxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbi8qIGFsaWduLXNlbGY6Y2VudGVyOyAqL1xcbmp1c3RpZnktc2VsZjpjZW50ZXI7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuZ2FwOiA3cHg7XFxucGFkZGluZzogNXB4IDBweDtcXG53aWR0aDo5OCU7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5hcnRpY2xlIGZvcm0gZGl2e1xcbmRpc3BsYXk6ZmxleDtcXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxuZ2FwOiA3cHg7XFxuXFxufVxcblxcbmJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOiA4cHg7XFxuYm9yZGVyLXJhZGl1czoxMnB4O1xcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yIDAuN3NcXG59XFxuXFxuLyogZWRpdCBpdGVtIGJ1dHRvbiAqL1xcbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbmJvdHRvbTowO1xcbnJpZ2h0OiAwO1xcbnBvc2l0aW9uOmFic29sdXRlO1xcbnBhZGRpbmc6IDVweDtcXG5ib3JkZXItcmFkaXVzOjMwcHg7XFxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9ue1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuY29sb3I6IHZhcigtLXdoaXRlKTtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5wYWRkaW5nOiA2cHg7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24ub25TZWxlY3Rpb246aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRZZWxsb3cpO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuY29sb3I6dmFyKC0td2hpdGUpO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5jdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuc2VsZWN0e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbnBhZGRpbmc6NnB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J117XFxucGFkZGluZzozcHg7XFxuYm9yZGVyLXJhZGl1czo0cHg7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcblxcbn1cXG5cXG5cXG4vKiBhcnRpY2xlIHNlY3Rpb24gKi9cXG5cXG4jbGlzdENvbnRhaW5lcntcXG5ncmlkLXJvdy1zdGFydDotMztcXG5ncmlkLXJvdy1lbmQ6LTM7XFxucG9zaXRpb246IHJlbGF0aXZlXFxufVxcbiNsaXN0Q29udGFpbmVye1xcbm92ZXJmbG93OnNjcm9sbDtcXG53aWR0aDo5OCU7XFxubWF4LWhlaWdodDo5OCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbGN1bGF0aW9uVHlwZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbGN1bGF0aW9uVHlwZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFya21vZGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrbW9kZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcFN1cHBvcnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXNrdG9wU3VwcG9ydC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbi8vIGltcG9ydCBzdHlsZXNcbmltcG9ydCAnLi9zdHlsaW5nL3N0eWxlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2Rhcmttb2RlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2Rhcmttb2RlLmpzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2xpc3QuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvZGVza3RvcFN1cHBvcnQuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvcG9wdXAuY3NzJ1xuXG5cbi8vIGltcG9ydCBmdW5jdGlvbmFsaXR5XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9saXN0L2xpc3RTdHJ1Y3R1cmUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvbGlzdC9jdXJyZW50TGlzdC5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuV2luZG93LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9hZGROZXdMaXN0LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuQ2hhbmdlQ29sb3JXaW5kb3cuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9leHBlbnNlVHlwZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS90eXBlQ2FsY3VsYXRvci5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9jYWxjdWxhdGUvY2FsY3VsYXRlLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2ZpbGUvZG93bmxvYWRGaWxlLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2ZpbGUvdXBsb2FkRmlsZS5qcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=