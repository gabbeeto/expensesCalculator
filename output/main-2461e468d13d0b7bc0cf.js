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

  console.log(result)
  result = result * window.valueToMultiply
  calculateSpan.innerText = result.toFixed(2);
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
  else if(typeOfCalculation == 'weekly') {
    return currentFood.weekAmount
  }
  else{
    return currentFood.weekAmount / 7;
  }
}


/***/ }),

/***/ "./input/functionality/calculate/percentage.js":
/*!*****************************************************!*\
  !*** ./input/functionality/calculate/percentage.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../list/addItemsToList.js */ "./input/functionality/list/addItemsToList.js");


let  percentageInput = document.getElementById(`percentageIncrease`)
percentageInput.addEventListener('change', storePercentageIncrease)

function storePercentageIncrease(){
let valueOfPercentage =  (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_0__.transformToNumber)(this.value);
window.valueToMultiply = (valueOfPercentage + 100) / 100;
}



/***/ }),

/***/ "./input/functionality/display/error.js":
/*!**********************************************!*\
  !*** ./input/functionality/display/error.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayError: () => (/* binding */ displayError)
/* harmony export */ });
let popUp = document.getElementById('errorPopUp');
let h2 = popUp.querySelector('h2');


function displayError(message) {
  h2.innerText = message;
  showPopUp()
}

function showPopUp() {
  setTimeout(() => { popUp.showModal(),
  changeOpacity()
  }, 200)
}



function changeOpacity() {
  setTimeout(() => {
  h2.style.opacity = '1',
  popUp.style.opacity = '1',
  hideOpacity()
  }, 1000)
}


function hideOpacity() {
  setTimeout(() => { 
  h2.style.opacity = '0',
  popUp.style.opacity = '1',
  hideDialog()
  }, 3000)
  
}

function hideDialog() {
  setTimeout(() => { popUp.close() }, 1000)
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
<input type="text" id="name" required>
<p>price:</p>
<input type="text"  inputmode='decimal' id="price" required>
<p>amount of food per price:</p>
<input type="text" inputmode='numeric' id="amountPerPrice" required>
<p>amount of food per day:</p>
<input type="text" inputmode='numeric' id="amountPerDay" required>
<div>
  <section>
    <p>amount of days per month: <br> <span>(you eat)</span></p>
    <input type="text"  inputmode='numeric' id="monthAmount"  required >
  </section>
  <p>or</p>
  <section>
    <p>amount of days per week: <br> <span>(you eat)</span></p>
    <input type="text"  inputmode='numeric' id="weekAmount" required >
  </section>
</div>
<button type='button' id='apply'>apply</button>
`

  document.getElementById('apply').addEventListener('click', _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_0__.addFoodToTheList)

  if (window.typeOfCalculation == 'monthly' || window.typeOfCalculation == 'yearly') {

    selectedSection = expenseContentContainer.querySelector('section');
  }
  else {

    selectedSection = expenseContentContainer.querySelector('section:last-of-type');
  }

  selectedSection.classList.add('selected');
}


function generateProduct() {
  expenseContentContainer.innerHTML = ` <p>name:</p>
<input type="text" id="name" required>
<p>price:</p>
<input type="text" inputmode='numeric' id="price" required>
<button type='button' id='apply'>apply</button>
`

  document.getElementById('apply').addEventListener('click', _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_0__.addProductToTheList)

}

function generateMoney() {
  expenseContentContainer.innerHTML = ` <p>money:</p>
<input type="text" inputmode='numeric' id="price" required>
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
  const calculateSpan = document.querySelector(`#resultContent span`);
  calculateSpan.innerText = '';
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

/***/ "./input/functionality/inputCheck.js":
/*!*******************************************!*\
  !*** ./input/functionality/inputCheck.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateEventListenerForInput: () => (/* binding */ generateEventListenerForInput)
/* harmony export */ });
/* harmony import */ var _window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./window/generateContentForEditWindow.js */ "./input/functionality/window/generateContentForEditWindow.js");
/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/error.js */ "./input/functionality/display/error.js");



function generateEventListenerForInput() {
  for (let input of document.querySelectorAll(`form input[type='text']`)) {

    switch (document.querySelector('article:first-of-type select').value) {
      case 'food':
        input.addEventListener('change', checkIfFoodValid)
        break;
      case 'product':
        input.addEventListener('change', checkIfProductOrMoneyValid)
        break;
      case 'money':
        input.addEventListener('change', checkIfProductOrMoneyValid)
        break;
    }
  }
}

generateEventListenerForInput()

function checkIfFoodValid() {
  let item = this.value
  try {
    ;(0,_window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_0__.checkIfEmpty)(item);
  }
  catch (error) {
    (0,_display_error_js__WEBPACK_IMPORTED_MODULE_1__.displayError)(error)
  }
}


function checkIfProductOrMoneyValid() {
  let item = this.value
  try {
    ;(0,_window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_0__.checkIfEmpty)(item);
  }
  catch (error) {
    console.log(error)
  }
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
/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../display/error.js */ "./input/functionality/display/error.js");




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
    ;(0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)((0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Food)(food.name, food.price, food.amountPerPrice, food.amountPerPrice, food.weekAmount, food.monthAmount))
  }
  catch (error) {
    (0,_display_error_js__WEBPACK_IMPORTED_MODULE_2__.displayError)(error)
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
    (0,_display_error_js__WEBPACK_IMPORTED_MODULE_2__.displayError)(error)
  }

}


function addMoneyToTheList() {
  try {
    let money = { price: getNumberOf('price') }
    ;(0,_window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_1__.checkIfMoneyIsEmpty)(money)
    ;(0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)((0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.Money)(money.price))
  }
  catch (error) {
    (0,_display_error_js__WEBPACK_IMPORTED_MODULE_2__.displayError)(error)
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
  console.log(el)
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
function changeTypeOfCalculation() {

  if (typeSelect.value == 'monthly') {
    window.typeOfCalculation = 'monthly';
  }
  else if (typeSelect.value == 'weekly') {
    window.typeOfCalculation = 'weekly';
  }
  else if (typeSelect.value == 'daily') {
    window.typeOfCalculation = 'daily';
  }
  else{
    window.typeOfCalculation = 'yearly';
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

/***/ "./input/functionality/window/currencyWindow.js":
/*!******************************************************!*\
  !*** ./input/functionality/window/currencyWindow.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../display/itemsOrLists.js */ "./input/functionality/display/itemsOrLists.js");


const currencyButton = document.getElementById('currencyButton');
const currencyDialog = document.getElementById('currencyPopUp');
currencyButton.addEventListener('click', changeCurrency)

async function changeCurrency() {
  let originalCurrency = currencyDialog.querySelectorAll('input')[0].value

  let transformedCurrency = currencyDialog.querySelectorAll('input')[1].value
  let url = new URL(`https://cdn.jsdelivr.net/`)
  
  url.pathname = `gh/fawazahmed0/currency-api@1/latest/currencies/${transformedCurrency}/${originalCurrency}.json`
  alert(url)

  let fetchResponse = await fetch(url)
  let fetchData = await fetchResponse.json()
  let currencyValue = getCurrency(fetchData)
  iterateAndChangePrices(currencyValue)
  ;(0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_0__.displayList)()
}


function getCurrency(data) {
  let keys = Object.keys(data)
  let objectData = keys.map((key) => {
    return {keys : data[key] } 
  })
  let [date,currency] =  objectData
  currency = Number(currency.keys);
  return currency
}


function iterateAndChangePrices(currencyPrice){
  for(let currentList of list){
    currentList.array.map(item => {
    item.price = item.price / currencyPrice;
    return item;})
  }
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
/* harmony export */   checkIfEmpty: () => (/* binding */ checkIfEmpty),
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
/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../display/error.js */ "./input/functionality/display/error.js");






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
    .catch(error => (0,_display_error_js__WEBPACK_IMPORTED_MODULE_4__.displayError)(error));
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


function deleteList() {
  try {
    let listSelect = document.getElementById('selectList');
    let listIndex = Number(listSelect.value);
    if (window.list.length == 1) {
      throw new Error(`you can't delete this because it's the only list`)
    }
    window.list.splice(listIndex, 1)
    listSelect.value = 0;
    (0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_3__.displayList)()
    ;(0,_openWindow_js__WEBPACK_IMPORTED_MODULE_0__.closePopUp)()
  }
  catch (error) {
    (0,_display_error_js__WEBPACK_IMPORTED_MODULE_4__.displayError)(error)
  }
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
/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../display/error.js */ "./input/functionality/display/error.js");




const editCurrentListButton = document.querySelector('#listContainer div button');
const editButton = document.querySelector('#listContainer div + button');
const addNewListButton = document.querySelector('#listContainer button:nth-of-type(2)');
const currencyButton = document.querySelector('#typeContainer button');


const addNewListDialog = document.getElementById('addNewListPopUp');
const editDialog = document.getElementById('editPopUp');
const currencyDialog = document.getElementById('currencyPopUp');



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
    (0,_display_error_js__WEBPACK_IMPORTED_MODULE_1__.displayError)(error);
  }
}


addNewListButton.addEventListener('click', () => openWindow(addNewListDialog));
currencyButton.addEventListener('click', () => openWindow(currencyDialog));

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


/* error pop up */

#errorPopUp, #errorPopUp h2{
opacity:0;
transition: opacity 1s;
z-index:10;
top:80%;
width:90%;
color: var(--red);
}
#errorPopUp::backdrop{
background-image:linear-gradient(#5A2321AA,black) ;
}
`, "",{"version":3,"sources":["webpack://./input/styling/popup.css"],"names":[],"mappings":"AAAA;AACA,iBAAiB;AACjB,6BAA6B;AAC7B,kBAAkB;AAClB,6BAA6B;AAC7B,cAAc;AACd,OAAO;AACP,QAAQ;AACR,+BAA+B;AAC/B,SAAS;AACT,aAAa;AACb,kBAAkB;AAClB;;AAEA;AACA,aAAa;AACb,gBAAgB;AAChB,iBAAiB;AACjB,eAAe;;AAEf;;AAEA;AACA,cAAc;AACd,kDAAkD;AAClD,qBAAqB;AACrB,WAAW;AACX;;;AAGA,iBAAiB;;AAEjB;AACA,SAAS;AACT,sBAAsB;AACtB,UAAU;AACV,OAAO;AACP,SAAS;AACT,iBAAiB;AACjB;AACA;AACA,kDAAkD;AAClD","sourcesContent":["dialog{\ntext-align:center;\nbackground-color:var(--white);\ncolor:var(--black);\nborder:2px solid var(--black);\nposition:fixed;\ntop:50%;\nleft:50%;\ntransform: translate(-50%,-50%);\nz-index:2;\npadding:1.2vw;\nborder-radius:10px;\n}\n\ndialog > *{\ndisplay:block;\nmargin-left:auto;\nmargin-right:auto;\nmargin-top:10px;\n\n}\n  \ndialog::backdrop{\nposition:fixed;\nbackground-image:linear-gradient(#215A59AA,black) ;\nbackground-size:cover;\nopacity:0.7;\n}\n\n\n/* error pop up */\n\n#errorPopUp, #errorPopUp h2{\nopacity:0;\ntransition: opacity 1s;\nz-index:10;\ntop:80%;\nwidth:90%;\ncolor: var(--red);\n}\n#errorPopUp::backdrop{\nbackground-image:linear-gradient(#5A2321AA,black) ;\n}\n"],"sourceRoot":""}]);
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

button,input[type='file']::file-selector-button{
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

button:hover, input[type='file']::file-selector-button:hover{
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

input[type='text'],input[type='number']{
padding:3px;
border-radius:4px;
background-color:var(--white);
border:2px solid var(--black);
color:var(--black);
outline: 0px solid transparent;
}

input[type='number']{
padding: 5px;
appearance:textfield;

}


input[type='text']:invalid:hover{
background-color:var(--red)
}

input[type='text']:valid:hover{
background-color:var(--green)
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
`, "",{"version":3,"sources":["webpack://./input/styling/style.css"],"names":[],"mappings":"AAAA,yBAAyB;;AAEzB;AACA,UAAU;AACV,QAAQ;AACR,qBAAqB;AACrB;;AAEA;;AAEA,kBAAkB;AAClB,cAAc;AACd,cAAc;AACd,gBAAgB;AAChB,iBAAiB;AACjB,sBAAsB;AACtB,aAAa;AACb,kBAAkB;AAClB;;AAEA,uBAAuB;;;;AAIvB;AACA,YAAY;AACZ,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB;;AAEA;AACA,YAAY;AACZ;;AAEA,uBAAuB;;AAEvB;AACA,8BAA8B;AAC9B,mBAAmB;AACnB,2CAA2C;AAC3C,sBAAsB;AACtB;;AAEA;AACA;AACA;;AAEA;AACA,yBAAyB;AACzB;AACA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,UAAU;AACV;;AAEA;AACA,yCAAyC;AACzC,QAAQ;AACR,eAAe;AACf,kBAAkB;AAClB;;AAEA;AACA,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,uBAAuB;AACvB,mBAAmB;AACnB,6BAA6B;AAC7B,QAAQ;AACR,gBAAgB;AAChB,SAAS;AACT,kBAAkB;AAClB;AACA;AACA,YAAY;AACZ,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,QAAQ;;AAER;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,YAAY;AACZ,kBAAkB;AAClB;AACA;;AAEA,qBAAqB;AACrB;AACA,4BAA4B;AAC5B,QAAQ;AACR,QAAQ;AACR,iBAAiB;AACjB,YAAY;AACZ,kBAAkB;AAClB,yBAAyB;AACzB;;AAEA;AACA,iCAAiC;AACjC;;AAEA;AACA,+BAA+B;AAC/B,mBAAmB;AACnB,6BAA6B;AAC7B,YAAY;AACZ,kBAAkB;AAClB;;AAEA;AACA,oCAAoC;AACpC,kBAAkB;AAClB,8BAA8B;AAC9B;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,cAAc;AACd;;;;AAIA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,WAAW;AACX;;AAEA;AACA,WAAW;AACX,iBAAiB;AACjB,6BAA6B;AAC7B,6BAA6B;AAC7B,kBAAkB;AAClB,8BAA8B;AAC9B;;AAEA;AACA,YAAY;AACZ,oBAAoB;;AAEpB;;;AAGA;AACA;AACA;;AAEA;AACA;AACA;;AAEA,oBAAoB;;AAEpB;AACA,iBAAiB;AACjB,eAAe;AACf;AACA;AACA;AACA,eAAe;AACf,SAAS;AACT,cAAc;AACd","sourcesContent":["/* mobile first 300x440 */\n\n*{\npadding: 0;\nmargin:0;\nbox-sizing:border-box;\n}\n\n:root{\n\n/* color section */\n--black: black;\n--white: white;\n--green: #09FF99;\n--yellow: #F5BB00;\n--lightYellow: #EEEE9B;\n--red:#ED6464;\n--lightRed:#dc143c;\n}\n\n/* repetition section */\n\n\n\nheader, article{\ndisplay:flex;\njustify-content:center;\nalign-items:center;\ntext-align:center;\n}\n\nmain{\ndisplay:grid;\n}\n\n/* individual section */\n\nbody{\nbackground-color: var(--white);\ncolor: var(--black);\ntransition-property:background-color, color;\ntransition-duration:2s;\n}\n\nheader{\nborder-bottom:2px solid var(--black)\n}\n\nheader h1{\nfont-size:max(1rem,3.8vw);\n}\nheader span{\ndisplay:block;\nfont-size:max(0.7rem,2.8vw);\n}\n\nheader button{\nheight:90%;\n}\n\nmain{\ngrid-template: 10% 10% 1fr 200px 10%/ 1fr;\ngap:10px;\npadding-top:5px;\npadding-bottom:5px;\n}\n\narticle{\nflex-direction:column;\njustify-content:center;\nalign-items:center;\n/* align-self:center; */\njustify-self:center;\nborder:2px solid var(--black);\ngap: 7px;\npadding: 5px 0px;\nwidth:98%;\nborder-radius:10px;\n}\narticle form div{\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items:center;\ngap: 7px;\n\n}\n\nbutton,input[type='file']::file-selector-button{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding: 8px;\nborder-radius:12px;\ntransition: background-color, color 0.7s\n}\n\n/* edit item button */\n#listContainer div + button{\nbackground-color: var(--red);\nbottom:0;\nright: 0;\nposition:absolute;\npadding: 5px;\nborder-radius:30px;\ntext-transform: uppercase;\n}\n\n#listContainer div + button:hover{\nbackground-color: var(--lightRed);\n}\n\n#listContainer div + button.onSelection{\nbackground-color: var(--yellow);\ncolor: var(--white);\nborder:2px solid var(--white);\npadding: 6px;\nborder-radius:10px;\n}\n\n#listContainer div + button.onSelection:hover{\nbackground-color: var(--lightYellow);\ncolor:var(--black);\nborder: 2px solid var(--black);\n}\n\nbutton:hover, input[type='file']::file-selector-button:hover{\nbackground-color: var(--black);\ncolor:var(--white);\nborder: 2px solid var(--white);\ncursor:pointer;\n}\n\n\n\nselect{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding:6px;\n}\n\ninput[type='text'],input[type='number']{\npadding:3px;\nborder-radius:4px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\ncolor:var(--black);\noutline: 0px solid transparent;\n}\n\ninput[type='number']{\npadding: 5px;\nappearance:textfield;\n\n}\n\n\ninput[type='text']:invalid:hover{\nbackground-color:var(--red)\n}\n\ninput[type='text']:valid:hover{\nbackground-color:var(--green)\n}\n\n/* article section */\n\n#listContainer{\ngrid-row-start:-3;\ngrid-row-end:-3;\nposition: relative\n}\n#listContainer{\noverflow:scroll;\nwidth:98%;\nmax-height:98%;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _functionality_window_currencyWindow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./functionality/window/currencyWindow.js */ "./input/functionality/window/currencyWindow.js");
/* harmony import */ var _functionality_display_expenseType_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./functionality/display/expenseType.js */ "./input/functionality/display/expenseType.js");
/* harmony import */ var _functionality_typeCalculator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./functionality/typeCalculator.js */ "./input/functionality/typeCalculator.js");
/* harmony import */ var _functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./functionality/calculate/calculate.js */ "./input/functionality/calculate/calculate.js");
/* harmony import */ var _functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _functionality_calculate_percentage_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./functionality/calculate/percentage.js */ "./input/functionality/calculate/percentage.js");
/* harmony import */ var _functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./functionality/file/downloadFile.js */ "./input/functionality/file/downloadFile.js");
/* harmony import */ var _functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _functionality_file_uploadFile_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./functionality/file/uploadFile.js */ "./input/functionality/file/uploadFile.js");
/* harmony import */ var _functionality_inputCheck_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./functionality/inputCheck.js */ "./input/functionality/inputCheck.js");
document.getElementById(`percentageIncrease`).value = 0;

window.valueToMultiply = 1;

// import styles









// import functionality


















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0dBQWtHLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLGVBQWUsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUs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VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7O0FBRUE7QUFDNEI7QUFDRztBQUNEO0FBQ1E7QUFDWDtBQUNVO0FBQ1Q7OztBQUc1QjtBQUMrQztBQUNGO0FBQ0c7QUFDRjtBQUNBO0FBQ1c7QUFDUDtBQUNGO0FBQ0w7QUFDSztBQUNDO0FBQ0g7QUFDRjtBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9jYWxjdWxhdGUvY2FsY3VsYXRlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvY2FsY3VsYXRlL3BlcmNlbnRhZ2UuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9kaXNwbGF5L2Vycm9yLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9leHBlbnNlVHlwZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZWRpdEl0ZW1Pckxpc3Qvc2VsZWN0aW9uLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZmlsZS9kb3dubG9hZEZpbGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9maWxlL3VwbG9hZEZpbGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9pbnB1dENoZWNrLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvbGlzdC9hZGRJdGVtc1RvTGlzdC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2xpc3QvY3VycmVudExpc3QuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9saXN0L2xpc3RTdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS90eXBlQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9hZGROZXdMaXN0LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L2N1cnJlbmN5V2luZG93LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L2dlbmVyYXRlQ29udGVudEZvckVkaXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS93aW5kb3cvb3BlbkNoYW5nZUNvbG9yV2luZG93LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L29wZW5XaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kYXJrbW9kZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2NhbGN1bGF0aW9uVHlwZS5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kYXJrbW9kZS5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9saXN0LmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcz9iNjQ4Iiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuY3NzPzNhYjMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3M/MjVmZiIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2xpc3QuY3NzP2EzZTMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9wb3B1cC5jc3M/MWVmNiIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL3N0eWxlLmNzcz9jZGExIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZmlsZUltcG9ydGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBjYWxjdWxhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcmVzdWx0Q29udGVudGApO1xuY29uc3QgY2FsY3VsYXRlQnV0dG9uID0gY2FsY3VsYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbmApO1xuY29uc3QgY2FsY3VsYXRlU3BhbiA9IGNhbGN1bGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBzcGFuYCk7XG5cbmNhbGN1bGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGN1bGF0ZSlcblxuXG5cbiBmdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gIGxldCBpbmRleG8gPSAwXG4gIGxldCByZXN1bHQgPSBjdXJyZW50TGlzdC5hcnJheS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50SXRlbSkgPT4ge1xuICAgIGluZGV4byArPSAxO1xuICAgIHN3aXRjaCAoY3VycmVudEl0ZW0udHlwZSkge1xuICAgICAgY2FzZSAnZm9vZCc6XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGNhbGN1bGF0ZWRGb29kKGN1cnJlbnRJdGVtKTtcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgY2FzZSAnbW9uZXknOlxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBjdXJyZW50SXRlbS5wcmljZTtcbiAgICB9XG4gIH0sIDApO1xuXG4gIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgcmVzdWx0ID0gcmVzdWx0ICogd2luZG93LnZhbHVlVG9NdWx0aXBseVxuICBjYWxjdWxhdGVTcGFuLmlubmVyVGV4dCA9IHJlc3VsdC50b0ZpeGVkKDIpO1xufVxuXG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlZEZvb2QoY3VycmVudEZvb2QpIHtcbiAgbGV0IHByaWNlRm9yVW5pdCA9IGN1cnJlbnRGb29kLnByaWNlIC8gY3VycmVudEZvb2QuYW1vdW50UGVyUHJpY2U7XG4gIGxldCBhbW91bnRPZkZvb2RFYXRlblBlck1vbnRoT3JXZWVrID0gY3VycmVudEZvb2QuYW1vdW50UGVyRGF5ICogZ2V0UHJvY2VzdXJlKGN1cnJlbnRGb29kKTtcbiAgbGV0IGF2ZXJhZ2VGb29kID0gcHJpY2VGb3JVbml0ICogYW1vdW50T2ZGb29kRWF0ZW5QZXJNb250aE9yV2VlaztcbiAgcmV0dXJuIGF2ZXJhZ2VGb29kO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9jZXN1cmUoY3VycmVudEZvb2QpIHtcbiAgaWYgKHR5cGVPZkNhbGN1bGF0aW9uID09ICdtb250aGx5Jykge1xuICAgIHJldHVybiBjdXJyZW50Rm9vZC5tb250aEFtb3VudFxuICB9XG4gIGVsc2UgaWYodHlwZU9mQ2FsY3VsYXRpb24gPT0gJ3dlZWtseScpIHtcbiAgICByZXR1cm4gY3VycmVudEZvb2Qud2Vla0Ftb3VudFxuICB9XG4gIGVsc2V7XG4gICAgcmV0dXJuIGN1cnJlbnRGb29kLndlZWtBbW91bnQgLyA3O1xuICB9XG59XG4iLCJpbXBvcnQgeyB0cmFuc2Zvcm1Ub051bWJlcn0gZnJvbSAnLi8uLi9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJ1xuXG5sZXQgIHBlcmNlbnRhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwZXJjZW50YWdlSW5jcmVhc2VgKVxucGVyY2VudGFnZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHN0b3JlUGVyY2VudGFnZUluY3JlYXNlKVxuXG5mdW5jdGlvbiBzdG9yZVBlcmNlbnRhZ2VJbmNyZWFzZSgpe1xubGV0IHZhbHVlT2ZQZXJjZW50YWdlID0gIHRyYW5zZm9ybVRvTnVtYmVyKHRoaXMudmFsdWUpO1xud2luZG93LnZhbHVlVG9NdWx0aXBseSA9ICh2YWx1ZU9mUGVyY2VudGFnZSArIDEwMCkgLyAxMDA7XG59XG5cbiIsImxldCBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclBvcFVwJyk7XG5sZXQgaDIgPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCdoMicpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RXJyb3IobWVzc2FnZSkge1xuICBoMi5pbm5lclRleHQgPSBtZXNzYWdlO1xuICBzaG93UG9wVXAoKVxufVxuXG5mdW5jdGlvbiBzaG93UG9wVXAoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4geyBwb3BVcC5zaG93TW9kYWwoKSxcbiAgY2hhbmdlT3BhY2l0eSgpXG4gIH0sIDIwMClcbn1cblxuXG5cbmZ1bmN0aW9uIGNoYW5nZU9wYWNpdHkoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICBoMi5zdHlsZS5vcGFjaXR5ID0gJzEnLFxuICBwb3BVcC5zdHlsZS5vcGFjaXR5ID0gJzEnLFxuICBoaWRlT3BhY2l0eSgpXG4gIH0sIDEwMDApXG59XG5cblxuZnVuY3Rpb24gaGlkZU9wYWNpdHkoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgaDIuc3R5bGUub3BhY2l0eSA9ICcwJyxcbiAgcG9wVXAuc3R5bGUub3BhY2l0eSA9ICcxJyxcbiAgaGlkZURpYWxvZygpXG4gIH0sIDMwMDApXG4gIFxufVxuXG5mdW5jdGlvbiBoaWRlRGlhbG9nKCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHsgcG9wVXAuY2xvc2UoKSB9LCAxMDAwKVxufVxuXG5cbiIsImltcG9ydCB7IGFkZEZvb2RUb1RoZUxpc3QsIGFkZE1vbmV5VG9UaGVMaXN0LCBhZGRQcm9kdWN0VG9UaGVMaXN0IH0gZnJvbSAnLi8uLi9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJztcblxubGV0IHNlbGVjdGVkU2VjdGlvbjtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKTtcblxudHlwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4geyBkaXNwbGF5Q29udGVudEZvclR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KVxuXG5sZXQgZXhwZW5zZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwZW5zZUNvbnRlbnQgZm9ybScpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudEZvclR5cGUodGFyZ2V0VmFsdWUpIHtcblxuICBzd2l0Y2ggKHRhcmdldFZhbHVlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBnZW5lcmF0ZUZvb2QoKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvZHVjdCc6XG4gICAgICBnZW5lcmF0ZVByb2R1Y3QoKVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgZ2VuZXJhdGVNb25leSgpXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvb2QoKSB7XG4gIGV4cGVuc2VDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGAgPHA+bmFtZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cbjxwPnByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiICBpbnB1dG1vZGU9J2RlY2ltYWwnIGlkPVwicHJpY2VcIiByZXF1aXJlZD5cbjxwPmFtb3VudCBvZiBmb29kIHBlciBwcmljZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyUHJpY2VcIiByZXF1aXJlZD5cbjxwPmFtb3VudCBvZiBmb29kIHBlciBkYXk6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cImFtb3VudFBlckRheVwiIHJlcXVpcmVkPlxuPGRpdj5cbiAgPHNlY3Rpb24+XG4gICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIG1vbnRoOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJtb250aEFtb3VudFwiICByZXF1aXJlZCA+XG4gIDwvc2VjdGlvbj5cbiAgPHA+b3I8L3A+XG4gIDxzZWN0aW9uPlxuICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciB3ZWVrOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJ3ZWVrQW1vdW50XCIgcmVxdWlyZWQgPlxuICA8L3NlY3Rpb24+XG48L2Rpdj5cbjxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+XG5gXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRGb29kVG9UaGVMaXN0KVxuXG4gIGlmICh3aW5kb3cudHlwZU9mQ2FsY3VsYXRpb24gPT0gJ21vbnRobHknIHx8IHdpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9PSAneWVhcmx5Jykge1xuXG4gICAgc2VsZWN0ZWRTZWN0aW9uID0gZXhwZW5zZUNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuICB9XG4gIGVsc2Uge1xuXG4gICAgc2VsZWN0ZWRTZWN0aW9uID0gZXhwZW5zZUNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VjdGlvbjpsYXN0LW9mLXR5cGUnKTtcbiAgfVxuXG4gIHNlbGVjdGVkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvZHVjdCgpIHtcbiAgZXhwZW5zZUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gYCA8cD5uYW1lOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkPlxuPHA+cHJpY2U6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cInByaWNlXCIgcmVxdWlyZWQ+XG48YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPlxuYFxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvZHVjdFRvVGhlTGlzdClcblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU1vbmV5KCkge1xuICBleHBlbnNlQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgIDxwPm1vbmV5OjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJwcmljZVwiIHJlcXVpcmVkPlxuPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTW9uZXlUb1RoZUxpc3QpXG59XG4iLCJpbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9saXN0L2xpc3RTdHJ1Y3R1cmUuanMnO1xuaW1wb3J0IHsgc2VsZWN0RGl2IH0gZnJvbSAnLi8uLi9lZGl0SXRlbU9yTGlzdC9zZWxlY3Rpb24uanMnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuXG5sZXQgbGlzdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMaXN0JylcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlMaXN0KCkge1xuICByZXN0YXJ0RXZlcnl0aGluZygpO1xuICBjdXJyZW50TGlzdC5hcnJheS5mb3JFYWNoKGFwcGVuZEl0ZW1zKVxuICBsaXN0LmZvckVhY2goYXBwZW5kTGlzdHMpXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXG4gIGNvbnN0IGNhbGN1bGF0ZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcmVzdWx0Q29udGVudCBzcGFuYCk7XG4gIGNhbGN1bGF0ZVNwYW4uaW5uZXJUZXh0ID0gJyc7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRFdmVyeXRoaW5nKCkge1xuICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbicpO1xuICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29uU2VsZWN0aW9uJyk7XG4gIHdpbmRvdy5zZWxlY3RlZEluZGV4ID0gJyc7XG5cbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gIGxpc3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGlzdCcpO1xuICBsaXN0U2VsZWN0LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRJdGVtcyhpdGVtLCBjdXJyZW50TGlzdE9mSXRlbXNJbmRleCkge1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdERpdilcbiAgbGV0IG5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuYW1lVGV4dC5pbm5lclRleHQgPSBpdGVtLm5hbWU7XG4gIG5hbWVUZXh0LnN0eWxlLmNvbG9yID0gcmV0dXJuRGlmZmVyZW50Q29sb3JEZXBlbmRpbmdPblR5cGUoaXRlbSk7XG4gIG5hbWVUZXh0LmRhdGFzZXQuaW5kZXggPSBjdXJyZW50TGlzdE9mSXRlbXNJbmRleDtcbiAgY29udGFpbmVyLmFwcGVuZChsaSk7XG4gIGxpLmFwcGVuZChuYW1lVGV4dCk7XG59XG5cbmZ1bmN0aW9uIHJldHVybkRpZmZlcmVudENvbG9yRGVwZW5kaW5nT25UeXBlKGl0ZW0pIHtcbiAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICBjYXNlICdmb29kJzpcbiAgICAgIHJldHVybiBjb2xvci5mb29kO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgcmV0dXJuIGNvbG9yLnByb2R1Y3Q7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgcmV0dXJuIGNvbG9yLm1vbmV5O1xuICB9XG59XG5cblxuZnVuY3Rpb24gYXBwZW5kTGlzdHMobGlzdCwgY3VycmVudExpc3RvZkxpc3RzSW5kZXgpIHtcblxuICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgb3B0aW9uLmlubmVySFRNTCA9IGAke2xpc3QubmFtZX1gO1xuICBvcHRpb24udmFsdWUgPSBgJHtjdXJyZW50TGlzdG9mTGlzdHNJbmRleH1gO1xuICBpZiAod2luZG93LnZhbHVlT2ZTZWxlY3QgPT0gY3VycmVudExpc3RvZkxpc3RzSW5kZXgpIHtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG4gIGxpc3RTZWxlY3QuYXBwZW5kKG9wdGlvbik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2VsZWN0RGl2KGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCkge1xuICAgIHdpbmRvdy5zZWxlY3RlZEluZGV4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICBzZWxlY3RQYXJlbnQoZXZlbnQpXG4gIH1cbn1cblxuXG5cblxuZnVuY3Rpb24gc2VsZWN0UGFyZW50KGV2ZW50KSB7XG4gIGxldCBwYXJlbnQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcblxuICByZW1vdmVDbGFzc2VzKClcbiAgbGV0IGVkaXRJdGVtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uYCk7XG4gIGVkaXRJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ29uU2VsZWN0aW9uJylcbiAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkSXRlbScpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgbGV0IG9uU2VsZWN0aW9uQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25TZWxlY3Rpb24nKVxuICBpZihvblNlbGVjdGlvbkNsYXNzKXtcbiAgb25TZWxlY3Rpb25DbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCdvblNlbGVjdGlvbicpXG4gIH1cbiAgbGV0IHNlbGVjdGVkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWRJdGVtJyk7XG4gIHNlbGVjdGVkSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWRJdGVtJykpO1xufVxuIiwiY29uc3QgZG93bmxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlOmZpcnN0LW9mLXR5cGUgYnV0dG9uOm50aC1vZi10eXBlKDIpJyk7XG5kb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvd25sb2FkVGhlTGlzdFN0cnVjdHVyZSlcblxuZnVuY3Rpb24gZG93bmxvYWRUaGVMaXN0U3RydWN0dXJlKCl7XG5sZXQgZmlsZVRvRG93bmxvYWQgPSBuZXcgRmlsZShbSlNPTi5zdHJpbmdpZnkod2luZG93Lmxpc3QpXSwgYGxpc3QtJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9YCx7dHlwZTonYXBwbGljYXRpb24vanNvbid9KTtcbmxldCBteVVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZVRvRG93bmxvYWQpO1xubGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5saW5rLmhyZWYgPSBteVVybDtcbmxpbmsuZG93bmxvYWQgPSBmaWxlVG9Eb3dubG9hZC5uYW1lXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspXG5saW5rLmNsaWNrKClcbmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluaylcblVSTC5yZXZva2VPYmplY3RVUkwobXlVcmwpXG59XG4iLCJpbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cbmNvbnN0IHVwbG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9J2ZpbGUnXWApO1xudXBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZVN0cnVjdHVyZSlcblxuZnVuY3Rpb24gdXBkYXRlU3RydWN0dXJlKCkge1xuXG4gIGxldCBteUZpbGUgPSB1cGxvYWRCdXR0b24uZmlsZXNbMF1cbiAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcblxuICAgIHdpbmRvdy5saXN0ID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQucmVzdWx0KVxuICAgIGN1cnJlbnRMaXN0ID0gbGlzdFswXTtcbiAgICBkaXNwbGF5TGlzdCgpXG4gIH0pO1xuXG4gIHJlYWRlci5yZWFkQXNUZXh0KG15RmlsZSk7XG59XG5cblxuIiwiaW1wb3J0IHsgY2hlY2tJZkVtcHR5IH0gZnJvbSAnLi93aW5kb3cvZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcydcbmltcG9ydCB7IGRpc3BsYXlFcnJvciB9IGZyb20gJy4vZGlzcGxheS9lcnJvci5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUV2ZW50TGlzdGVuZXJGb3JJbnB1dCgpIHtcbiAgZm9yIChsZXQgaW5wdXQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J11gKSkge1xuXG4gICAgc3dpdGNoIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlOmZpcnN0LW9mLXR5cGUgc2VsZWN0JykudmFsdWUpIHtcbiAgICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja0lmRm9vZFZhbGlkKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja0lmUHJvZHVjdE9yTW9uZXlWYWxpZClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrSWZQcm9kdWN0T3JNb25leVZhbGlkKVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZ2VuZXJhdGVFdmVudExpc3RlbmVyRm9ySW5wdXQoKVxuXG5mdW5jdGlvbiBjaGVja0lmRm9vZFZhbGlkKCkge1xuICBsZXQgaXRlbSA9IHRoaXMudmFsdWVcbiAgdHJ5IHtcbiAgICBjaGVja0lmRW1wdHkoaXRlbSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKVxuICB9XG59XG5cblxuZnVuY3Rpb24gY2hlY2tJZlByb2R1Y3RPck1vbmV5VmFsaWQoKSB7XG4gIGxldCBpdGVtID0gdGhpcy52YWx1ZVxuICB0cnkge1xuICAgIGNoZWNrSWZFbXB0eShpdGVtKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0LCBNb25leSwgUHJvZHVjdCwgRm9vZCB9IGZyb20gJy4vbGlzdFN0cnVjdHVyZS5qcydcbmltcG9ydCB7IGNoZWNrSWZGb29kSXNFbXB0eSwgY2hlY2tJZlByb2R1Y3RJc0VtcHR5LCBjaGVja0lmTW9uZXlJc0VtcHR5IH0gZnJvbSAnLi8uLi93aW5kb3cvZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcydcbmltcG9ydCB7IGRpc3BsYXlFcnJvciB9IGZyb20gJy4vLi4vZGlzcGxheS9lcnJvci5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb29kVG9UaGVMaXN0KCkge1xuICBsZXQgbmFtZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcblxuICB0cnkge1xuICAgIGxldCBmb29kID0ge1xuICAgICAgbmFtZTogbmFtZVZhbHVlLFxuICAgICAgcHJpY2U6IGdldE51bWJlck9mKCdwcmljZScpLFxuICAgICAgYW1vdW50UGVyUHJpY2U6IGdldE51bWJlck9mKCdhbW91bnRQZXJQcmljZScpLFxuICAgICAgYW1vdW50UGVyRGF5OiBnZXROdW1iZXJPZignYW1vdW50UGVyRGF5JyksXG4gICAgICB3ZWVrQW1vdW50OiBnZXROdW1iZXJPZignd2Vla0Ftb3VudCcpLFxuICAgICAgbW9udGhBbW91bnQ6IGdldE51bWJlck9mKCdtb250aEFtb3VudCcpLFxuICAgIH1cbiAgICBjaGVja0lmRm9vZElzRW1wdHkoZm9vZClcbiAgICBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KEZvb2QoZm9vZC5uYW1lLCBmb29kLnByaWNlLCBmb29kLmFtb3VudFBlclByaWNlLCBmb29kLmFtb3VudFBlclByaWNlLCBmb29kLndlZWtBbW91bnQsIGZvb2QubW9udGhBbW91bnQpKVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BsYXlFcnJvcihlcnJvcilcbiAgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2R1Y3RUb1RoZUxpc3QoKSB7XG4gIGxldCBuYW1lVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuXG4gIHRyeSB7XG4gICAgbGV0IHByb2R1Y3QgPSB7XG4gICAgICBuYW1lOiBuYW1lVmFsdWUsXG4gICAgICBwcmljZTogZ2V0TnVtYmVyT2YoJ3ByaWNlJylcbiAgICB9XG4gICAgY2hlY2tJZlByb2R1Y3RJc0VtcHR5KHByb2R1Y3QpXG4gICAgcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdChQcm9kdWN0KHByb2R1Y3QubmFtZSwgcHJvZHVjdC5wcmljZSkpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKVxuICB9XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9uZXlUb1RoZUxpc3QoKSB7XG4gIHRyeSB7XG4gICAgbGV0IG1vbmV5ID0geyBwcmljZTogZ2V0TnVtYmVyT2YoJ3ByaWNlJykgfVxuICAgIGNoZWNrSWZNb25leUlzRW1wdHkobW9uZXkpXG4gICAgcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdChNb25leShtb25leS5wcmljZSkpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldE51bWJlck9mKGVsZW1lbnRJZCkge1xuICBsZXQgdmFsdWVPZkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtlbGVtZW50SWR9YCkudmFsdWVcbiAgcmV0dXJuIHRyYW5zZm9ybVRvTnVtYmVyKHZhbHVlT2ZFbGVtZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVG9OdW1iZXIodmFsdWVPZkVsZW1lbnQpIHtcbiAgbGV0IGxldHRlclJlbW92ZXIgPSAvWzAtOV0rL2c7XG4gIGxldCB2YWx1ZU9mRWxlbWVudFdpdGhvdXRMZXR0ZXJzID0gYCR7bGV0dGVyUmVtb3Zlci5leGVjKHZhbHVlT2ZFbGVtZW50KX1gO1xuXG4gIHJldHVybiBOdW1iZXIodmFsdWVPZkVsZW1lbnRXaXRob3V0TGV0dGVycyk7XG59XG4iLCJpbXBvcnQge2Rpc3BsYXlMaXN0fSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5cbmxldCBzZWxlY3RGb3JDdXJyZW50TGlzdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RMaXN0Jyk7XG5zZWxlY3RGb3JDdXJyZW50TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VDdXJyZW50TGlzdCk7XG5cbmZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRMaXN0KGV2ZW50KXtcbiAgYWxlcnQoJ3RoaXMgaGFzIGJlZW4gY2hhbmdlZCcpXG53aW5kb3cudmFsdWVPZlNlbGVjdCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xud2luZG93LmN1cnJlbnRMaXN0ID0gbGlzdFt2YWx1ZU9mU2VsZWN0XTtcbmRpc3BsYXlMaXN0KClcbn1cblxuIiwiaW1wb3J0IHsgZGlzcGxheUNvbnRlbnRGb3JUeXBlIH0gZnJvbSAnLi8uLi9kaXNwbGF5L2V4cGVuc2VUeXBlLmpzJ1xuaW1wb3J0IHsgZGlzcGxheUxpc3QgfSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5cblxuLy8gY29sb3Igc2VjdGlvblxuaWYgKGxvY2FsU3RvcmFnZS5jb2xvcikge1xuICB3aW5kb3cuY29sb3IgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jb2xvcilcbn1cbmVsc2Uge1xuICB3aW5kb3cuY29sb3IgPSB7XG4gICAgZm9vZDogJ3Zpb2xldCcsXG4gICAgcHJvZHVjdDogJ2JsdWUnLFxuICAgIG1vbmV5OiAnZ3JlZW4nLFxuICB9XG59XG5cblxuLy8gY2xhc3Mgc2VjdGlvblxuZXhwb3J0IGZ1bmN0aW9uIE1vbmV5KHByaWNlLCBuYW1lID0gcHJpY2UsIHR5cGUgPSAnbW9uZXknKSB7XG4gIHJldHVybiB7IHByaWNlLCBuYW1lLCB0eXBlIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9kdWN0KG5hbWUsIHByaWNlLCB0eXBlID0gJ3Byb2R1Y3QnKSB7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCB0eXBlIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBGb29kKG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50LCBtb250aEFtb3VudCwgdHlwZSA9ICdmb29kJykge1xubGV0IG15V2Vla0Ftb3VudDtcbmxldCBteU1vbnRoQW1vdW50O1xuICBpZiAod2Vla0Ftb3VudCkge1xuICAgIG15V2Vla0Ftb3VudCA9IHdlZWtBbW91bnQ7XG4gIH1cbiAgZWxzZSB7XG4gICAgbXlXZWVrQW1vdW50ID0gcGFyc2VJbnQobW9udGhBbW91bnQgLyA0KTtcbiAgfVxuXG4gIGlmIChtb250aEFtb3VudCkge1xuICAgIG15TW9udGhBbW91bnQgPSBtb250aEFtb3VudDtcbiAgfVxuICBlbHNlIHtcbiAgICBteU1vbnRoQW1vdW50ID0gcGFyc2VJbnQod2Vla0Ftb3VudCAqIDQpO1xuICB9XG5cbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIGFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXksIHdlZWtBbW91bnQ6IG15V2Vla0Ftb3VudCwgbW9udGhBbW91bnQ6IG15TW9udGhBbW91bnQsIHR5cGUgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBMaXN0KG5hbWUsIGFycmF5ID0gW10pIHtcbiAgcmV0dXJuIHsgYXJyYXksIG5hbWUgfVxufVxuXG5cbi8vIGxpc3Qgc2VjdGlvblxuXG5pZiAobG9jYWxTdG9yYWdlLmxpc3QpIHtcbiAgd2luZG93Lmxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5saXN0KVxuICB3aW5kb3cuY3VycmVudExpc3QgPSB3aW5kb3cubGlzdFswXTtcbiAgZGlzcGxheUxpc3QoKVxufVxuZWxzZSB7XG4gIHdpbmRvdy5jdXJyZW50TGlzdCA9IG5ldyBMaXN0KCdkZWZhdWx0Jyk7XG4gIHdpbmRvdy5saXN0ID0gW2N1cnJlbnRMaXN0XTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkod2luZG93Lmxpc3QpKVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3InLCBKU09OLnN0cmluZ2lmeSh3aW5kb3cuY29sb3IpKVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHB1c2ggdG8gYXJyYXkgc2VjdGlvblxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdChlbCkge1xuICBjb25zb2xlLmxvZyhlbClcbiAgY3VycmVudExpc3QuYXJyYXkucHVzaChlbCk7XG4gIGRpc3BsYXlMaXN0KClcbiAgZGlzcGxheUNvbnRlbnRGb3JUeXBlKClcbn1cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBkaXNwbGF5Q29udGVudEZvclR5cGUgfSBmcm9tICcuL2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMnO1xuXG5cbmNvbnN0IHR5cGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZUNvbnRhaW5lciBzZWxlY3QnKTtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKTtcbnR5cGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUeXBlT2ZDYWxjdWxhdGlvbilcblxuY2hhbmdlVHlwZU9mQ2FsY3VsYXRpb24oKTtcbmZ1bmN0aW9uIGNoYW5nZVR5cGVPZkNhbGN1bGF0aW9uKCkge1xuXG4gIGlmICh0eXBlU2VsZWN0LnZhbHVlID09ICdtb250aGx5Jykge1xuICAgIHdpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9ICdtb250aGx5JztcbiAgfVxuICBlbHNlIGlmICh0eXBlU2VsZWN0LnZhbHVlID09ICd3ZWVrbHknKSB7XG4gICAgd2luZG93LnR5cGVPZkNhbGN1bGF0aW9uID0gJ3dlZWtseSc7XG4gIH1cbiAgZWxzZSBpZiAodHlwZVNlbGVjdC52YWx1ZSA9PSAnZGFpbHknKSB7XG4gICAgd2luZG93LnR5cGVPZkNhbGN1bGF0aW9uID0gJ2RhaWx5JztcbiAgfVxuICBlbHNle1xuICAgIHdpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9ICd5ZWFybHknO1xuICB9XG5cbiAgZGlzcGxheUNvbnRlbnRGb3JUeXBlKHR5cGVTZWxlY3Rvci52YWx1ZSk7XG59XG4iLCJpbXBvcnQge0xpc3R9IGZyb20gJy4vLi4vbGlzdC9saXN0U3RydWN0dXJlLmpzJztcbmltcG9ydCB7Y2xvc2VQb3BVcH0gZnJvbSAnLi9vcGVuV2luZG93LmpzJztcbmltcG9ydCB7ZGlzcGxheUxpc3R9IGZyb20gJy4vLi4vZGlzcGxheS8vaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCBhZGROZXdMaXN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZE5ld0xpc3RQb3BVcCcpXG5cbmNvbnN0IGFkZE5ld0xpc3RCdXR0b24gPSBhZGROZXdMaXN0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKVxuXG5hZGROZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3TGlzdCApXG5cbmZ1bmN0aW9uIGFkZE5ld0xpc3QoKXtcbmxldCBuYW1lRm9yTmV3SW5wdXQgPSBhZGROZXdMaXN0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG5saXN0LnB1c2goTGlzdChuYW1lRm9yTmV3SW5wdXQpKVxuZGlzcGxheUxpc3QoKVxuY2xvc2VQb3BVcCgpXG59XG4iLCJpbXBvcnQge2Rpc3BsYXlMaXN0fSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCBjdXJyZW5jeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW5jeUJ1dHRvbicpO1xuY29uc3QgY3VycmVuY3lEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVuY3lQb3BVcCcpO1xuY3VycmVuY3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDdXJyZW5jeSlcblxuYXN5bmMgZnVuY3Rpb24gY2hhbmdlQ3VycmVuY3koKSB7XG4gIGxldCBvcmlnaW5hbEN1cnJlbmN5ID0gY3VycmVuY3lEaWFsb2cucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVswXS52YWx1ZVxuXG4gIGxldCB0cmFuc2Zvcm1lZEN1cnJlbmN5ID0gY3VycmVuY3lEaWFsb2cucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVsxXS52YWx1ZVxuICBsZXQgdXJsID0gbmV3IFVSTChgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2ApXG4gIFxuICB1cmwucGF0aG5hbWUgPSBgZ2gvZmF3YXphaG1lZDAvY3VycmVuY3ktYXBpQDEvbGF0ZXN0L2N1cnJlbmNpZXMvJHt0cmFuc2Zvcm1lZEN1cnJlbmN5fS8ke29yaWdpbmFsQ3VycmVuY3l9Lmpzb25gXG4gIGFsZXJ0KHVybClcblxuICBsZXQgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgbGV0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoUmVzcG9uc2UuanNvbigpXG4gIGxldCBjdXJyZW5jeVZhbHVlID0gZ2V0Q3VycmVuY3koZmV0Y2hEYXRhKVxuICBpdGVyYXRlQW5kQ2hhbmdlUHJpY2VzKGN1cnJlbmN5VmFsdWUpXG4gIGRpc3BsYXlMaXN0KClcbn1cblxuXG5mdW5jdGlvbiBnZXRDdXJyZW5jeShkYXRhKSB7XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgbGV0IG9iamVjdERhdGEgPSBrZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgcmV0dXJuIHtrZXlzIDogZGF0YVtrZXldIH0gXG4gIH0pXG4gIGxldCBbZGF0ZSxjdXJyZW5jeV0gPSAgb2JqZWN0RGF0YVxuICBjdXJyZW5jeSA9IE51bWJlcihjdXJyZW5jeS5rZXlzKTtcbiAgcmV0dXJuIGN1cnJlbmN5XG59XG5cblxuZnVuY3Rpb24gaXRlcmF0ZUFuZENoYW5nZVByaWNlcyhjdXJyZW5jeVByaWNlKXtcbiAgZm9yKGxldCBjdXJyZW50TGlzdCBvZiBsaXN0KXtcbiAgICBjdXJyZW50TGlzdC5hcnJheS5tYXAoaXRlbSA9PiB7XG4gICAgaXRlbS5wcmljZSA9IGl0ZW0ucHJpY2UgLyBjdXJyZW5jeVByaWNlO1xuICAgIHJldHVybiBpdGVtO30pXG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMsIGNsb3NlUG9wVXAgfSBmcm9tICcuL29wZW5XaW5kb3cuanMnO1xuaW1wb3J0IHsgdHJhbnNmb3JtVG9OdW1iZXIgfSBmcm9tICcuLy4uL2xpc3QvYWRkSXRlbXNUb0xpc3QuanMnO1xuaW1wb3J0IHsgRm9vZCwgUHJvZHVjdCwgTW9uZXkgfSBmcm9tICcuLy4uL2xpc3QvbGlzdFN0cnVjdHVyZS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnO1xuaW1wb3J0IHsgZGlzcGxheUVycm9yIH0gZnJvbSAnLi8uLi9kaXNwbGF5L2Vycm9yLmpzJztcblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQb3BVcCcpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3coKSB7XG4gIGlmICh3aW5kb3cuc2VsZWN0ZWRJbmRleCkge1xuICAgIGdlbmVyYXRlQ29udGVudEZvckRpYWxvZ0Zvckl0ZW1zKClcbiAgICBhZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBoYXZlbid0IHNlbGVjdGVkIGFueXRoaW5nYClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50Rm9yTGlzdFdpbmRvdygpIHtcbiAgZ2VuZXJhdGVDb250ZW50Rm9yRGlhbG9nRm9yTGlzdHMoKVxuICBhZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JEaWFsb2dGb3JJdGVtcygpIHtcbiAgbGV0IGl0ZW0gPSBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XTtcbiAgbGV0IHNlbGVjdGVkTGlzdCA9IGxpc3Rbc2VsZWN0ZWRJbmRleF07XG4gIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBkaWFsb2cuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+bmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLm5hbWV9J3R5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8cD5hbW91bnQgb2YgZm9vZCBwZXIgcHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgIHZhbHVlPScke2l0ZW0uYW1vdW50UGVyUHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJQcmljZVwiPlxuICAgICAgICA8cD5hbW91bnQgb2YgZm9vZCBwZXIgZGF5OjwvcD5cbiAgICAgICAgPGlucHV0ICAgdmFsdWU9JyR7aXRlbS5hbW91bnRQZXJEYXl9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJEYXlcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciBtb250aDogPGJyPiA8c3Bhbj4oeW91IGVhdCk8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ubW9udGhBbW91bnR9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJtb250aEFtb3VudFwiPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8cD5vcjwvcD5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciB3ZWVrOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS53ZWVrQW1vdW50fScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwid2Vla0Ftb3VudFwiPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgZGlhbG9nLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+bmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLm5hbWV9J3R5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmA7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtb25leSc6XG4gICAgICBkaWFsb2cuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9J2Nsb3NlQnRuJz5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8cD5wcmljZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLnByaWNlfScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J2RlY2ltYWwnIGlkPVwicHJpY2VcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgbGV0IGFwcGx5QnV0dG9uID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNhcHBseScpO1xuICBhcHBseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGx5Q2hhbmdlc0Zvckl0ZW1zKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudEZvckRpYWxvZ0Zvckxpc3RzKCkge1xuXG4gIGRpYWxvZy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz0nY2xvc2VCdG4nPmNsb3NlPC9idXR0b24+XG4gICAgICAgIDxwPm5hbWU6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7Y3VycmVudExpc3QubmFtZX0ndHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdkZWxldGUnPmRlbGV0ZSBsaXN0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcblxuICAvLyBub3QgdXNpbmcgZ2V0RWxlbWVudEJ5SWQgYmVjYXVzZSB5b3UgY2FuJ3Qgc2VsZWN0IGluc2lkZSB0aGUgZGlhbG9nIHByb3BlcnR5IHdpdGggZ2V0RWxlbWVudEJ5SWRcbiAgbGV0IGFwcGx5QnV0dG9uID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNhcHBseScpO1xuICBsZXQgZGVsZXRlQnV0dG9uID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUnKTtcbiAgYXBwbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUNoYW5nZXNGb3JMaXN0cyk7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUxpc3QpO1xufVxuXG5mdW5jdGlvbiBhcHBseUNoYW5nZXNGb3JJdGVtcygpIHtcbiAgbGV0IGl0ZW0gPSBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XTtcbiAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICBjYXNlICdmb29kJzpcbiAgICAgIHJ1blByb21pc2VUb0FwcGx5VmFsdWUoZ2V0VmFsdWVzRnJvbUZvb2RJbnB1dHMsIGdldFZhbHVlc0ZvckZvb2QsIGNoZWNrSWZGb29kSXNFbXB0eSwgcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FGb29kLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tUHJvZHVjdElucHV0cywgZ2V0VmFsdWVzRm9yUHJvZHVjdCwgY2hlY2tJZlByb2R1Y3RJc0VtcHR5LCByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQVByb2R1Y3QpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tTW9uZXlJbnB1dHMsIGdldFZhbHVlc0Zvck1vbmV5LCBjaGVja0lmTW9uZXlJc0VtcHR5LCByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzTW9uZXkpO1xuICAgICAgYnJlYWs7XG5cbiAgfVxufVxuXG5mdW5jdGlvbiBydW5Qcm9taXNlVG9BcHBseVZhbHVlKGdldFZhbHVlc0Zyb21JbnB1dF9jYWxsYmFjaywgZ2V0VmFsdWVzRm9yX2NhbGxCYWNrLCBjaGVja0lmSXRlbUlzRW1wdHlfY2FsbEJhY2ssIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBX2NhbGxCYWNrLCB3b3JraW5nV2l0aEZvb2QgPSBmYWxzZSwpIHtcbiAgd2luZG93LndvcmtpbmdXaXRoRm9vZCA9IHdvcmtpbmdXaXRoRm9vZDtcbiAgLy8gcmVtZW1iZXIgdG8gYWRkIHZhbGlkaXR5IGluIHRoZSBjYXRjaCBpbiBhbGwgb2YgdGhlc2UgXG4gIGdldFZhbHVlc0Zyb21JbnB1dF9jYWxsYmFjaygpXG4gICAgLnRoZW4oZ2V0VmFsdWVzRm9yX2NhbGxCYWNrKVxuICAgIC50aGVuKGNoZWNrSWZJdGVtSXNFbXB0eV9jYWxsQmFjaylcbiAgICAudGhlbihtYWtlV2Vla3NPck1vbnRoc1ZhbGlkKVxuICAgIC50aGVuKHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBX2NhbGxCYWNrKVxuICAgIC50aGVuKGRpc3BsYXlMaXN0KVxuICAgIC50aGVuKGNsb3NlUG9wVXApXG4gICAgLmNhdGNoKGVycm9yID0+IGRpc3BsYXlFcnJvcihlcnJvcikpO1xufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFZhbHVlc0Zyb21Gb29kSW5wdXRzKCkge1xuICBsZXQgbmFtZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xuICBsZXQgcHJpY2UgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI3ByaWNlJykudmFsdWU7XG4gIGxldCBhbW91bnRQZXJQcmljZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYW1vdW50UGVyUHJpY2UnKS52YWx1ZTtcbiAgbGV0IGFtb3VudFBlckRheSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYW1vdW50UGVyRGF5JykudmFsdWU7XG4gIGxldCBtb250aEFtb3VudCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjbW9udGhBbW91bnQnKS52YWx1ZTtcbiAgbGV0IHdlZWtBbW91bnQgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI3dlZWtBbW91bnQnKS52YWx1ZTtcbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIGFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXksIG1vbnRoQW1vdW50LCB3ZWVrQW1vdW50IH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFZhbHVlc0Zyb21Qcm9kdWN0SW5wdXRzKCkge1xuICBsZXQgbmFtZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xuICBsZXQgcHJpY2UgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI3ByaWNlJykudmFsdWU7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlIH07XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbU1vbmV5SW5wdXRzKCkge1xuICBsZXQgcHJpY2UgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI3ByaWNlJykudmFsdWU7XG4gIHJldHVybiB7IHByaWNlIH07XG59XG5cblxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JGb29kKGZvb2QpIHtcbiAgbGV0IG5hbWUgPSBmb29kLm5hbWU7XG4gIGxldCBwcmljZSA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2QucHJpY2UpO1xuICBsZXQgYW1vdW50UGVyUHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLmFtb3VudFBlclByaWNlKTtcbiAgbGV0IGFtb3VudFBlckRheSA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2QuYW1vdW50UGVyRGF5KTtcbiAgbGV0IG1vbnRoQW1vdW50ID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC5tb250aEFtb3VudCk7XG4gIGxldCB3ZWVrQW1vdW50ID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC53ZWVrQW1vdW50KTtcbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIGFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXksIG1vbnRoQW1vdW50LCB3ZWVrQW1vdW50IH1cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzRm9yUHJvZHVjdChwcm9kdWN0KSB7XG4gIGxldCBuYW1lID0gcHJvZHVjdC5uYW1lO1xuICBsZXQgcHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihwcm9kdWN0LnByaWNlKTtcbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UgfVxufVxuXG5cbmZ1bmN0aW9uIGdldFZhbHVlc0Zvck1vbmV5KG1vbmV5KSB7XG4gIGxldCBwcmljZSA9IHRyYW5zZm9ybVRvTnVtYmVyKG1vbmV5LnByaWNlKTtcbiAgcmV0dXJuIHsgcHJpY2UgfVxufVxuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmRm9vZElzRW1wdHkoZm9vZCkge1xuICAvLyBjaGVjayBlbXB0eW5lc3MgXG4gIGNoZWNrSWZFbXB0eShmb29kLm5hbWUsICd0aGUgbmFtZSBvZiB0aGUgZm9vZCcpO1xuICBjaGVja0lmRW1wdHkoZm9vZC5wcmljZSwgJ3RoZSBwcmljZSBvZiB0aGUgZm9vZCcpO1xuICBjaGVja0lmRW1wdHkoZm9vZC5hbW91bnRQZXJQcmljZSwgJ3RoZSBhbW91bnQgb2YgZm9vZCBwZXIgcHJpY2UnKTtcbiAgY2hlY2tJZkVtcHR5KGZvb2QuYW1vdW50UGVyRGF5LCAndGhlIGFtb3VudCBvZiBmb29kIHBlciBkYXknKTtcbiAgY2hlY2tJZkVpdGhlck1vbnRoT3JXZWVrSXNFbXB0eShmb29kLndlZWtBbW91bnQsIGZvb2QubW9udGhBbW91bnQpO1xuXG4gIGxpbWl0TnVtYmVyKGZvb2Qud2Vla0Ftb3VudCwgNywgJ3dlZWtzIGNhbiBvbmx5IGJlIDcgZGF5cyBsb25ncycpXG4gIGxpbWl0TnVtYmVyKGZvb2QubW9udGhBbW91bnQsIDMxLCAnbW9udGhzIGNhbiBvbmx5IGJlIDMxIGRheXMgbG9uZycpXG5cbiAgcmV0dXJuIHsgbmFtZTogZm9vZC5uYW1lLCBwcmljZTogZm9vZC5wcmljZSwgYW1vdW50UGVyUHJpY2U6IGZvb2QuYW1vdW50UGVyUHJpY2UsIGFtb3VudFBlckRheTogZm9vZC5hbW91bnRQZXJEYXksIHdlZWtBbW91bnQ6IGZvb2Qud2Vla0Ftb3VudCwgbW9udGhBbW91bnQ6IGZvb2QubW9udGhBbW91bnQgfVxufVxuZnVuY3Rpb24gY2hlY2tJZkVpdGhlck1vbnRoT3JXZWVrSXNFbXB0eSh3ZWVrLCBtb250aCkge1xuICBpZiAoY2hlY2tXaXRob3V0RXJyb3Iod2VlaywgJ3dlZWsnKSAmJiBjaGVja1dpdGhvdXRFcnJvcihtb250aCwgJ21vbnRoJykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBoYXZlbid0IGZpbGxlZCBuZWl0aGVyIHRoZSBhbW91bnQgb2YgZGF5cyBwZXIgd2VlayBub3IgdGhlIGFtb3VudCBvZiBkYXlzIHBlciB0aGUgbW9udGhgKVxuICB9XG59XG5cblxuZnVuY3Rpb24gY2hlY2tXaXRob3V0RXJyb3IoaXRlbSwgbmFtZSkge1xuICBpZiAoYCR7aXRlbX1gID09ICdOYU4nKSB7XG4gICAgcmV0dXJuIGB5b3UgZGlkbid0IGZpbGwgdGhlICR7bmFtZX1gO1xuICB9XG4gIGVsc2UgaWYgKCFgJHtpdGVtfWApIHtcbiAgICByZXR1cm4gYHlvdSBkaWRuJ3QgZmlsbCB0aGUgJHtuYW1lfWA7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxufVxuXG5mdW5jdGlvbiBsaW1pdE51bWJlcihudW1iZXJUb0NoZWNrLCBsaW1pdCwgbWVzc2FnZSkge1xuICBpZiAoTnVtYmVyKG51bWJlclRvQ2hlY2spID4gTnVtYmVyKGxpbWl0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmUHJvZHVjdElzRW1wdHkocHJvZHVjdCkge1xuICAvLyBjaGVjayBlbXB0eW5lc3MgXG4gIGNoZWNrSWZFbXB0eShwcm9kdWN0Lm5hbWUsICd0aGUgbmFtZSBvZiB0aGUgcHJvZHVjdCcpO1xuICBjaGVja0lmRW1wdHkocHJvZHVjdC5wcmljZSwgJ3RoZSBwcmljZSBvZiB0aGUgcHJvZHVjdCcpO1xuXG4gIHJldHVybiB7IG5hbWU6IHByb2R1Y3QubmFtZSwgcHJpY2U6IHByb2R1Y3QucHJpY2UgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmTW9uZXlJc0VtcHR5KG1vbmV5KSB7XG4gIC8vIGNoZWNrIGVtcHR5bmVzcyBcbiAgY2hlY2tJZkVtcHR5KG1vbmV5LnByaWNlLCAnYW55IG1vbmV5Jyk7XG5cbiAgcmV0dXJuIHsgcHJpY2U6IG1vbmV5LnByaWNlIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZkVtcHR5KGVsZW1lbnQsIG5hbWVPZkVsZW1lbnRGb3JFbXB0eU1lc3NhZ2UpIHtcbiAgaWYgKGAke2VsZW1lbnR9YCA9PSAnTmFOJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgeW91IGRpZG4ndCBmaWxsICR7bmFtZU9mRWxlbWVudEZvckVtcHR5TWVzc2FnZX1gKTtcbiAgfVxuICBlbHNlIGlmICghYCR7ZWxlbWVudH1gKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgZGlkbid0IGZpbGwgJHtuYW1lT2ZFbGVtZW50Rm9yRW1wdHlNZXNzYWdlfWApO1xuICB9XG59XG5cblxuXG5mdW5jdGlvbiBtYWtlV2Vla3NPck1vbnRoc1ZhbGlkKGZvb2QpIHtcbiAgaWYgKHdpbmRvdy53b3JraW5nV2l0aEZvb2QpIHtcblxuICAgIGxldCBpdGVtID0gY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF07XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdlZWsgb3IgdGhlIG1vbnRoIGlzIGZhbHNlXG4gICAgbGV0IHdlZWtFcXVhbCA9IGZhbHNlO1xuICAgIGxldCBtb250aEVxdWFsID0gZmFsc2U7XG4gICAgaWYgKGl0ZW0ud2Vla0Ftb3VudCA9PSBmb29kLndlZWtBbW91bnQpIHtcbiAgICAgIHdlZWtFcXVhbCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpdGVtLm1vbnRoQW1vdW50ID09IGZvb2QubW9udGhBbW91bnQpIHtcbiAgICAgIG1vbnRoRXF1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGNoYW5nZSB0aGUgb3RoZXIgdmFsdWUgaWYgb25lIG9mIHRob3NlIGlzIGZhbHNlIGJ1dCB0aGUgb3RoZXIgb25lIGlzIHRydWVcbiAgICBpZiAod2Vla0VxdWFsID09IHRydWUgJiYgbW9udGhFcXVhbCA9PSBmYWxzZSkge1xuICAgICAgZm9vZC53ZWVrQW1vdW50ID0gcGFyc2VJbnQoZm9vZC5tb250aEFtb3VudCAvIDQpXG4gICAgfVxuICAgIGVsc2UgaWYgKHdlZWtFcXVhbCA9PSBmYWxzZSAmJiBtb250aEVxdWFsID09IHRydWUpIHtcbiAgICAgIGZvb2QubW9udGhBbW91bnQgPSBwYXJzZUludChmb29kLndlZWtBbW91bnQgKiA0KVxuICAgIH1cblxuICAgIHJldHVybiB7IG5hbWU6IGZvb2QubmFtZSwgcHJpY2U6IGZvb2QucHJpY2UsIGFtb3VudFBlclByaWNlOiBmb29kLmFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXk6IGZvb2QuYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50OiBmb29kLndlZWtBbW91bnQsIG1vbnRoQW1vdW50OiBmb29kLm1vbnRoQW1vdW50IH1cblxuXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZvb2Q7XG4gIH1cbn1cblxuXG5cblxuXG5mdW5jdGlvbiByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQUZvb2QoZm9vZCkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IEZvb2QoZm9vZC5uYW1lLCBmb29kLnByaWNlLCBmb29kLmFtb3VudFBlclByaWNlLCBmb29kLmFtb3VudFBlckRheSwgZm9vZC53ZWVrQW1vdW50LCBmb29kLm1vbnRoQW1vdW50KVxufVxuXG5mdW5jdGlvbiByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQVByb2R1Y3QocHJvZHVjdCkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IFByb2R1Y3QocHJvZHVjdC5uYW1lLCBwcm9kdWN0LnByaWNlKVxufVxuXG5cbmZ1bmN0aW9uIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNNb25leShtb25leSkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IE1vbmV5KG1vbmV5LnByaWNlKVxufVxuXG5cblxuXG5mdW5jdGlvbiBhcHBseUNoYW5nZXNGb3JMaXN0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgY3VycmVudExpc3QubmFtZSA9IG5hbWU7XG4gIGRpc3BsYXlMaXN0KClcbiAgY2xvc2VQb3BVcCgpXG59XG5cblxuZnVuY3Rpb24gZGVsZXRlTGlzdCgpIHtcbiAgdHJ5IHtcbiAgICBsZXQgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RMaXN0Jyk7XG4gICAgbGV0IGxpc3RJbmRleCA9IE51bWJlcihsaXN0U2VsZWN0LnZhbHVlKTtcbiAgICBpZiAod2luZG93Lmxpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgeW91IGNhbid0IGRlbGV0ZSB0aGlzIGJlY2F1c2UgaXQncyB0aGUgb25seSBsaXN0YClcbiAgICB9XG4gICAgd2luZG93Lmxpc3Quc3BsaWNlKGxpc3RJbmRleCwgMSlcbiAgICBsaXN0U2VsZWN0LnZhbHVlID0gMDtcbiAgICBkaXNwbGF5TGlzdCgpXG4gICAgY2xvc2VQb3BVcCgpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKVxuICB9XG59XG4iLCJpbXBvcnQgeyBkaXNwbGF5TGlzdH0gZnJvbSAnLi8uLi9kaXNwbGF5L2l0ZW1zT3JMaXN0cy5qcydcblxuY29uc3QgY2hhbmdlQ29sb3JCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlOmZpcnN0LW9mLXR5cGUgYnV0dG9uOmZpcnN0LW9mLXR5cGUnKTtcblxuY2hhbmdlQ29sb3JCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQ29sb3JXaW5kb3cpXG5mdW5jdGlvbiBvcGVuQ29sb3JXaW5kb3coKSB7XG4gIGxldCBjb2xvcldpbmRvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvclBvcFVwJyk7XG4gIGNvbG9yV2luZG93LnNob3dNb2RhbCgpXG4gIGZvciAobGV0IGNvbG9yUGlja2VyIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKSkge1xuICAgIGNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZUNvbG9ycylcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDb2xvcnMoKSB7XG4gIHdpbmRvdy5jb2xvci5mb29kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzBdLnZhbHVlXG4gIHdpbmRvdy5jb2xvci5wcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzFdLnZhbHVlXG4gIHdpbmRvdy5jb2xvci5tb25leSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVsyXS52YWx1ZVxuICBkaXNwbGF5TGlzdCgpXG59XG5cblxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVDb250ZW50Rm9yV2luZG93LCBnZW5lcmF0ZUNvbnRlbnRGb3JMaXN0V2luZG93IH0gZnJvbSAnLi9nZW5lcmF0ZUNvbnRlbnRGb3JFZGl0V2luZG93LmpzJztcbmltcG9ydCB7IGRpc3BsYXlFcnJvciB9IGZyb20gJy4vLi4vZGlzcGxheS9lcnJvci5qcyc7XG5cblxuY29uc3QgZWRpdEN1cnJlbnRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RDb250YWluZXIgZGl2IGJ1dHRvbicpO1xuY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbicpO1xuY29uc3QgYWRkTmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGJ1dHRvbjpudGgtb2YtdHlwZSgyKScpO1xuY29uc3QgY3VycmVuY3lCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZUNvbnRhaW5lciBidXR0b24nKTtcblxuXG5jb25zdCBhZGROZXdMaXN0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZE5ld0xpc3RQb3BVcCcpO1xuY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UG9wVXAnKTtcbmNvbnN0IGN1cnJlbmN5RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbmN5UG9wVXAnKTtcblxuXG5cbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUNvbnRlbnRBbmRPcGVuV2luZG93KTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvdygpIHtcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3coKVxuICAgIG9wZW5XaW5kb3coZWRpdERpYWxvZylcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZWRpdEN1cnJlbnRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvd0Zvckxpc3QpXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRBbmRPcGVuV2luZG93Rm9yTGlzdCgpIHtcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JMaXN0V2luZG93KClcbiAgICBvcGVuV2luZG93KGVkaXREaWFsb2cpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKTtcbiAgfVxufVxuXG5cbmFkZE5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuV2luZG93KGFkZE5ld0xpc3REaWFsb2cpKTtcbmN1cnJlbmN5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlbldpbmRvdyhjdXJyZW5jeURpYWxvZykpO1xuXG5mdW5jdGlvbiBvcGVuV2luZG93KGRpYWxvZykge1xuICBkaWFsb2cuc2hvd01vZGFsKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMoKSB7XG4gIGZvciAobGV0IGNsb3NlQnRuIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZUJ0bicpKSB7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcFVwKVxuICB9XG59XG5hZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUG9wVXAoKSB7XG4gIGZvciAobGV0IGRpYWxvZyBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaWFsb2cnKSkge1xuICAgIGlmIChkaWFsb2cub3Blbikge1xuICAgICAgZGlhbG9nLmNsb3NlKClcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5jb25zdCBkYXJrTW9kZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24nKVxuZGFya01vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUb0RhcmtNb2RlKVxuXG5jb25zdCBpc0RhcmtNb2RlRW5hYmxlZCA9IG1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKS5tYXRjaGVzXG5pZiAoaXNEYXJrTW9kZUVuYWJsZWQpIHtcbiAgc3dpdGNoVG9EYXJrTW9kZSgpXG5cblxufVxuXG5cblxuXG5mdW5jdGlvbiBzd2l0Y2hUb0RhcmtNb2RlKCkge1xuICBodG1sLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKVxuICBpZiAoaHRtbC5jbGFzc05hbWUgPT0gJ2RhcmsnKSB7XG4gICAgZGFya01vZGVCdXR0b24uaW5uZXJUZXh0ID0gJ2xpZ2h0IG1vZGUnO1xuICB9XG4gIGVsc2Uge1xuICAgIGRhcmtNb2RlQnV0dG9uLmlubmVyVGV4dCA9ICdkYXJrIG1vZGUnO1xuICB9XG59XG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VsZWN0ZWR7XG5ib3JkZXItcmFkaXVzOjVweDtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbnBhZGRpbmc6NXB4O1xuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUIsV0FBVzs7QUFFWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VsZWN0ZWR7XFxuYm9yZGVyLXJhZGl1czo1cHg7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbnBhZGRpbmc6NXB4O1xcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LmRhcmt7XG4tLWJsYWNrOndoaXRlO1xuLS13aGl0ZTpibGFjaztcbi0tZ3JlZW46IzAxMjEyMDtcbi0teWVsbG93OiAjRUVFRTlCO1xuLS1saWdodFllbGxvdzogI0Y1QkIwMDtcbi0tcmVkOiNkYzE0M2M7XG4tLWxpZ2h0UmVkOiNFRDY0NjQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290LmRhcmt7XFxuLS1ibGFjazp3aGl0ZTtcXG4tLXdoaXRlOmJsYWNrO1xcbi0tZ3JlZW46IzAxMjEyMDtcXG4tLXllbGxvdzogI0VFRUU5QjtcXG4tLWxpZ2h0WWVsbG93OiAjRjVCQjAwO1xcbi0tcmVkOiNkYzE0M2M7XFxuLS1saWdodFJlZDojRUQ2NDY0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYShtaW4td2lkdGg6NTAwcHgpe1xuYXJ0aWNsZSBmb3JtIGRpdntcbmZsZXgtZGlyZWN0aW9uOnJvdztcbn19XG5cblxuQG1lZGlhKG1pbi13aWR0aDo5MDBweCl7XG5oZWFkZXJ7XG5nYXA6NHB4O1xuXG4gIH1cblxuaGVhZGVyIHNwYW57XG5kaXNwbGF5OmlubGluZTtcbmZvbnQtc2l6ZToyLjJ2dztcbiAgfVxuXG5tYWlue1xuaGVpZ2h0Ojkwdmg7XG5taW4taGVpZ2h0OiA1NTBweDtcbmdyaWQtdGVtcGxhdGU6J2V4cGVuc2VUeXBlIGV4cGVuc2VDb250ZW50JyAwLjlmclxuICAgICAgICAgICAgICAndHlwZU9mQ2FsY3VsYXRpb24gZXhwZW5zZUNvbnRlbnQnIDAuOWZyICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAnc2hvd0xpc3QgZXhwZW5zZUNvbnRlbnQnIDFmclxuICAgICAgICAgICAgICAnc2hvd0xpc3QgcmVzdWx0Q29udGVudCcgMWZyIC8gMWZyIDFmclxufVxuXG5cbiAgLyogb24gdGhlIGxlZnQgKi9cbm1haW4gYXJ0aWNsZTpmaXJzdC1vZi10eXBle1xuZ3JpZC1hcmVhOiBleHBlbnNlVHlwZTtcbn1cbiN0eXBlQ29udGFpbmVye1xuZ3JpZC1hcmVhOnR5cGVPZkNhbGN1bGF0aW9uO1xufVxuI2xpc3RDb250YWluZXJ7XG5ncmlkLWFyZWE6c2hvd0xpc3Q7XG59XG5cbi8qIG9uIHRoZSByaWdodCAqL1xuXG4jZXhwZW5zZUNvbnRlbnR7XG5ncmlkLWFyZWE6ZXhwZW5zZUNvbnRlbnQ7XG59XG4jcmVzdWx0Q29udGVudHtcbmdyaWQtYXJlYTpyZXN1bHRDb250ZW50O1xufVxuXG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsT0FBTzs7RUFFTDs7QUFFRjtBQUNBLGNBQWM7QUFDZCxlQUFlO0VBQ2I7O0FBRUY7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCOzs7O0FBSUE7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOzs7QUFHQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEobWluLXdpZHRoOjUwMHB4KXtcXG5hcnRpY2xlIGZvcm0gZGl2e1xcbmZsZXgtZGlyZWN0aW9uOnJvdztcXG59fVxcblxcblxcbkBtZWRpYShtaW4td2lkdGg6OTAwcHgpe1xcbmhlYWRlcntcXG5nYXA6NHB4O1xcblxcbiAgfVxcblxcbmhlYWRlciBzcGFue1xcbmRpc3BsYXk6aW5saW5lO1xcbmZvbnQtc2l6ZToyLjJ2dztcXG4gIH1cXG5cXG5tYWlue1xcbmhlaWdodDo5MHZoO1xcbm1pbi1oZWlnaHQ6IDU1MHB4O1xcbmdyaWQtdGVtcGxhdGU6J2V4cGVuc2VUeXBlIGV4cGVuc2VDb250ZW50JyAwLjlmclxcbiAgICAgICAgICAgICAgJ3R5cGVPZkNhbGN1bGF0aW9uIGV4cGVuc2VDb250ZW50JyAwLjlmciAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICdzaG93TGlzdCBleHBlbnNlQ29udGVudCcgMWZyXFxuICAgICAgICAgICAgICAnc2hvd0xpc3QgcmVzdWx0Q29udGVudCcgMWZyIC8gMWZyIDFmclxcbn1cXG5cXG5cXG4gIC8qIG9uIHRoZSBsZWZ0ICovXFxubWFpbiBhcnRpY2xlOmZpcnN0LW9mLXR5cGV7XFxuZ3JpZC1hcmVhOiBleHBlbnNlVHlwZTtcXG59XFxuI3R5cGVDb250YWluZXJ7XFxuZ3JpZC1hcmVhOnR5cGVPZkNhbGN1bGF0aW9uO1xcbn1cXG4jbGlzdENvbnRhaW5lcntcXG5ncmlkLWFyZWE6c2hvd0xpc3Q7XFxufVxcblxcbi8qIG9uIHRoZSByaWdodCAqL1xcblxcbiNleHBlbnNlQ29udGVudHtcXG5ncmlkLWFyZWE6ZXhwZW5zZUNvbnRlbnQ7XFxufVxcbiNyZXN1bHRDb250ZW50e1xcbmdyaWQtYXJlYTpyZXN1bHRDb250ZW50O1xcbn1cXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjbGlzdHtcbmJvcmRlci1yYWRpdXM6MTJweDtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbndpZHRoOjkwJTtcbmhlaWdodDo5MCU7XG5vdmVyZmxvdzpzY3JvbGw7XG59XG5cblxubGl7XG5saXN0LXN0eWxlOiBub25lO1xufVxuXG4jbGlzdCBsaS5zZWxlY3RlZEl0ZW17XG5vdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsVUFBVTtBQUNWLGVBQWU7QUFDZjs7O0FBR0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xpc3R7XFxuYm9yZGVyLXJhZGl1czoxMnB4O1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG53aWR0aDo5MCU7XFxuaGVpZ2h0OjkwJTtcXG5vdmVyZmxvdzpzY3JvbGw7XFxufVxcblxcblxcbmxpe1xcbmxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNsaXN0IGxpLnNlbGVjdGVkSXRlbXtcXG5vdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGRpYWxvZ3tcbnRleHQtYWxpZ246Y2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5jb2xvcjp2YXIoLS1ibGFjayk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBvc2l0aW9uOmZpeGVkO1xudG9wOjUwJTtcbmxlZnQ6NTAlO1xudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbnotaW5kZXg6MjtcbnBhZGRpbmc6MS4ydnc7XG5ib3JkZXItcmFkaXVzOjEwcHg7XG59XG5cbmRpYWxvZyA+ICp7XG5kaXNwbGF5OmJsb2NrO1xubWFyZ2luLWxlZnQ6YXV0bztcbm1hcmdpbi1yaWdodDphdXRvO1xubWFyZ2luLXRvcDoxMHB4O1xuXG59XG4gIFxuZGlhbG9nOjpiYWNrZHJvcHtcbnBvc2l0aW9uOmZpeGVkO1xuYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoIzIxNUE1OUFBLGJsYWNrKSA7XG5iYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG5vcGFjaXR5OjAuNztcbn1cblxuXG4vKiBlcnJvciBwb3AgdXAgKi9cblxuI2Vycm9yUG9wVXAsICNlcnJvclBvcFVwIGgye1xub3BhY2l0eTowO1xudHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbnotaW5kZXg6MTA7XG50b3A6ODAlO1xud2lkdGg6OTAlO1xuY29sb3I6IHZhcigtLXJlZCk7XG59XG4jZXJyb3JQb3BVcDo6YmFja2Ryb3B7XG5iYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgjNUEyMzIxQUEsYmxhY2spIDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9wb3B1cC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxpQkFBaUI7QUFDakIsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQiw2QkFBNkI7QUFDN0IsY0FBYztBQUNkLE9BQU87QUFDUCxRQUFRO0FBQ1IsK0JBQStCO0FBQy9CLFNBQVM7QUFDVCxhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsZUFBZTs7QUFFZjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrREFBa0Q7QUFDbEQscUJBQXFCO0FBQ3JCLFdBQVc7QUFDWDs7O0FBR0EsaUJBQWlCOztBQUVqQjtBQUNBLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEIsVUFBVTtBQUNWLE9BQU87QUFDUCxTQUFTO0FBQ1QsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGlhbG9ne1xcbnRleHQtYWxpZ246Y2VudGVyO1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5wb3NpdGlvbjpmaXhlZDtcXG50b3A6NTAlO1xcbmxlZnQ6NTAlO1xcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XFxuei1pbmRleDoyO1xcbnBhZGRpbmc6MS4ydnc7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5cXG5kaWFsb2cgPiAqe1xcbmRpc3BsYXk6YmxvY2s7XFxubWFyZ2luLWxlZnQ6YXV0bztcXG5tYXJnaW4tcmlnaHQ6YXV0bztcXG5tYXJnaW4tdG9wOjEwcHg7XFxuXFxufVxcbiAgXFxuZGlhbG9nOjpiYWNrZHJvcHtcXG5wb3NpdGlvbjpmaXhlZDtcXG5iYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgjMjE1QTU5QUEsYmxhY2spIDtcXG5iYWNrZ3JvdW5kLXNpemU6Y292ZXI7XFxub3BhY2l0eTowLjc7XFxufVxcblxcblxcbi8qIGVycm9yIHBvcCB1cCAqL1xcblxcbiNlcnJvclBvcFVwLCAjZXJyb3JQb3BVcCBoMntcXG5vcGFjaXR5OjA7XFxudHJhbnNpdGlvbjogb3BhY2l0eSAxcztcXG56LWluZGV4OjEwO1xcbnRvcDo4MCU7XFxud2lkdGg6OTAlO1xcbmNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG4jZXJyb3JQb3BVcDo6YmFja2Ryb3B7XFxuYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoIzVBMjMyMUFBLGJsYWNrKSA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogbW9iaWxlIGZpcnN0IDMwMHg0NDAgKi9cblxuKntcbnBhZGRpbmc6IDA7XG5tYXJnaW46MDtcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcbn1cblxuOnJvb3R7XG5cbi8qIGNvbG9yIHNlY3Rpb24gKi9cbi0tYmxhY2s6IGJsYWNrO1xuLS13aGl0ZTogd2hpdGU7XG4tLWdyZWVuOiAjMDlGRjk5O1xuLS15ZWxsb3c6ICNGNUJCMDA7XG4tLWxpZ2h0WWVsbG93OiAjRUVFRTlCO1xuLS1yZWQ6I0VENjQ2NDtcbi0tbGlnaHRSZWQ6I2RjMTQzYztcbn1cblxuLyogcmVwZXRpdGlvbiBzZWN0aW9uICovXG5cblxuXG5oZWFkZXIsIGFydGljbGV7XG5kaXNwbGF5OmZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xudGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbm1haW57XG5kaXNwbGF5OmdyaWQ7XG59XG5cbi8qIGluZGl2aWR1YWwgc2VjdGlvbiAqL1xuXG5ib2R5e1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuY29sb3I6IHZhcigtLWJsYWNrKTtcbnRyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvciwgY29sb3I7XG50cmFuc2l0aW9uLWR1cmF0aW9uOjJzO1xufVxuXG5oZWFkZXJ7XG5ib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1ibGFjaylcbn1cblxuaGVhZGVyIGgxe1xuZm9udC1zaXplOm1heCgxcmVtLDMuOHZ3KTtcbn1cbmhlYWRlciBzcGFue1xuZGlzcGxheTpibG9jaztcbmZvbnQtc2l6ZTptYXgoMC43cmVtLDIuOHZ3KTtcbn1cblxuaGVhZGVyIGJ1dHRvbntcbmhlaWdodDo5MCU7XG59XG5cbm1haW57XG5ncmlkLXRlbXBsYXRlOiAxMCUgMTAlIDFmciAyMDBweCAxMCUvIDFmcjtcbmdhcDoxMHB4O1xucGFkZGluZy10b3A6NXB4O1xucGFkZGluZy1ib3R0b206NXB4O1xufVxuXG5hcnRpY2xle1xuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcbmFsaWduLWl0ZW1zOmNlbnRlcjtcbi8qIGFsaWduLXNlbGY6Y2VudGVyOyAqL1xuanVzdGlmeS1zZWxmOmNlbnRlcjtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xuZ2FwOiA3cHg7XG5wYWRkaW5nOiA1cHggMHB4O1xud2lkdGg6OTglO1xuYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuYXJ0aWNsZSBmb3JtIGRpdntcbmRpc3BsYXk6ZmxleDtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG5nYXA6IDdweDtcblxufVxuXG5idXR0b24saW5wdXRbdHlwZT0nZmlsZSddOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBhZGRpbmc6IDhweDtcbmJvcmRlci1yYWRpdXM6MTJweDtcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yIDAuN3Ncbn1cblxuLyogZWRpdCBpdGVtIGJ1dHRvbiAqL1xuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbmJvdHRvbTowO1xucmlnaHQ6IDA7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbnBhZGRpbmc6IDVweDtcbmJvcmRlci1yYWRpdXM6MzBweDtcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcbn1cblxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbnBhZGRpbmc6IDZweDtcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9uOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRZZWxsb3cpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xufVxuXG5idXR0b246aG92ZXIsIGlucHV0W3R5cGU9J2ZpbGUnXTo6ZmlsZS1zZWxlY3Rvci1idXR0b246aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG5jb2xvcjp2YXIoLS13aGl0ZSk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG5jdXJzb3I6cG9pbnRlcjtcbn1cblxuXG5cbnNlbGVjdHtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBhZGRpbmc6NnB4O1xufVxuXG5pbnB1dFt0eXBlPSd0ZXh0J10saW5wdXRbdHlwZT0nbnVtYmVyJ117XG5wYWRkaW5nOjNweDtcbmJvcmRlci1yYWRpdXM6NHB4O1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbm91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXRbdHlwZT0nbnVtYmVyJ117XG5wYWRkaW5nOiA1cHg7XG5hcHBlYXJhbmNlOnRleHRmaWVsZDtcblxufVxuXG5cbmlucHV0W3R5cGU9J3RleHQnXTppbnZhbGlkOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1yZWQpXG59XG5cbmlucHV0W3R5cGU9J3RleHQnXTp2YWxpZDpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tZ3JlZW4pXG59XG5cbi8qIGFydGljbGUgc2VjdGlvbiAqL1xuXG4jbGlzdENvbnRhaW5lcntcbmdyaWQtcm93LXN0YXJ0Oi0zO1xuZ3JpZC1yb3ctZW5kOi0zO1xucG9zaXRpb246IHJlbGF0aXZlXG59XG4jbGlzdENvbnRhaW5lcntcbm92ZXJmbG93OnNjcm9sbDtcbndpZHRoOjk4JTtcbm1heC1oZWlnaHQ6OTglO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5QkFBeUI7O0FBRXpCO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUixxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQjs7QUFFQSx1QkFBdUI7Ozs7QUFJdkI7QUFDQSxZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBLDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYiwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekMsUUFBUTtBQUNSLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1IsZ0JBQWdCO0FBQ2hCLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixRQUFROztBQUVSOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLGNBQWM7QUFDZDs7OztBQUlBO0FBQ0EsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsV0FBVztBQUNYOztBQUVBO0FBQ0EsV0FBVztBQUNYLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQSxZQUFZO0FBQ1osb0JBQW9COztBQUVwQjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0I7O0FBRXBCO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsU0FBUztBQUNULGNBQWM7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBtb2JpbGUgZmlyc3QgMzAweDQ0MCAqL1xcblxcbip7XFxucGFkZGluZzogMDtcXG5tYXJnaW46MDtcXG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcblxcbi8qIGNvbG9yIHNlY3Rpb24gKi9cXG4tLWJsYWNrOiBibGFjaztcXG4tLXdoaXRlOiB3aGl0ZTtcXG4tLWdyZWVuOiAjMDlGRjk5O1xcbi0teWVsbG93OiAjRjVCQjAwO1xcbi0tbGlnaHRZZWxsb3c6ICNFRUVFOUI7XFxuLS1yZWQ6I0VENjQ2NDtcXG4tLWxpZ2h0UmVkOiNkYzE0M2M7XFxufVxcblxcbi8qIHJlcGV0aXRpb24gc2VjdGlvbiAqL1xcblxcblxcblxcbmhlYWRlciwgYXJ0aWNsZXtcXG5kaXNwbGF5OmZsZXg7XFxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxudGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbm1haW57XFxuZGlzcGxheTpncmlkO1xcbn1cXG5cXG4vKiBpbmRpdmlkdWFsIHNlY3Rpb24gKi9cXG5cXG5ib2R5e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jb2xvcjogdmFyKC0tYmxhY2spO1xcbnRyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvciwgY29sb3I7XFxudHJhbnNpdGlvbi1kdXJhdGlvbjoycztcXG59XFxuXFxuaGVhZGVye1xcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKVxcbn1cXG5cXG5oZWFkZXIgaDF7XFxuZm9udC1zaXplOm1heCgxcmVtLDMuOHZ3KTtcXG59XFxuaGVhZGVyIHNwYW57XFxuZGlzcGxheTpibG9jaztcXG5mb250LXNpemU6bWF4KDAuN3JlbSwyLjh2dyk7XFxufVxcblxcbmhlYWRlciBidXR0b257XFxuaGVpZ2h0OjkwJTtcXG59XFxuXFxubWFpbntcXG5ncmlkLXRlbXBsYXRlOiAxMCUgMTAlIDFmciAyMDBweCAxMCUvIDFmcjtcXG5nYXA6MTBweDtcXG5wYWRkaW5nLXRvcDo1cHg7XFxucGFkZGluZy1ib3R0b206NXB4O1xcbn1cXG5cXG5hcnRpY2xle1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG4vKiBhbGlnbi1zZWxmOmNlbnRlcjsgKi9cXG5qdXN0aWZ5LXNlbGY6Y2VudGVyO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmdhcDogN3B4O1xcbnBhZGRpbmc6IDVweCAwcHg7XFxud2lkdGg6OTglO1xcbmJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuYXJ0aWNsZSBmb3JtIGRpdntcXG5kaXNwbGF5OmZsZXg7XFxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbmdhcDogN3B4O1xcblxcbn1cXG5cXG5idXR0b24saW5wdXRbdHlwZT0nZmlsZSddOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOiA4cHg7XFxuYm9yZGVyLXJhZGl1czoxMnB4O1xcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yIDAuN3NcXG59XFxuXFxuLyogZWRpdCBpdGVtIGJ1dHRvbiAqL1xcbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbmJvdHRvbTowO1xcbnJpZ2h0OiAwO1xcbnBvc2l0aW9uOmFic29sdXRlO1xcbnBhZGRpbmc6IDVweDtcXG5ib3JkZXItcmFkaXVzOjMwcHg7XFxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9ue1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuY29sb3I6IHZhcigtLXdoaXRlKTtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5wYWRkaW5nOiA2cHg7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24ub25TZWxlY3Rpb246aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRZZWxsb3cpO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciwgaW5wdXRbdHlwZT0nZmlsZSddOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuY29sb3I6dmFyKC0td2hpdGUpO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5jdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuc2VsZWN0e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbnBhZGRpbmc6NnB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J10saW5wdXRbdHlwZT0nbnVtYmVyJ117XFxucGFkZGluZzozcHg7XFxuYm9yZGVyLXJhZGl1czo0cHg7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbm91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuaW5wdXRbdHlwZT0nbnVtYmVyJ117XFxucGFkZGluZzogNXB4O1xcbmFwcGVhcmFuY2U6dGV4dGZpZWxkO1xcblxcbn1cXG5cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J106aW52YWxpZDpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXJlZClcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddOnZhbGlkOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tZ3JlZW4pXFxufVxcblxcbi8qIGFydGljbGUgc2VjdGlvbiAqL1xcblxcbiNsaXN0Q29udGFpbmVye1xcbmdyaWQtcm93LXN0YXJ0Oi0zO1xcbmdyaWQtcm93LWVuZDotMztcXG5wb3NpdGlvbjogcmVsYXRpdmVcXG59XFxuI2xpc3RDb250YWluZXJ7XFxub3ZlcmZsb3c6c2Nyb2xsO1xcbndpZHRoOjk4JTtcXG5tYXgtaGVpZ2h0Ojk4JTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FsY3VsYXRpb25UeXBlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FsY3VsYXRpb25UeXBlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrbW9kZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rhcmttb2RlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXNrdG9wU3VwcG9ydC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc2t0b3BTdXBwb3J0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwZXJjZW50YWdlSW5jcmVhc2VgKS52YWx1ZSA9IDA7XG5cbndpbmRvdy52YWx1ZVRvTXVsdGlwbHkgPSAxO1xuXG4vLyBpbXBvcnQgc3R5bGVzXG5pbXBvcnQgJy4vc3R5bGluZy9zdHlsZS5jc3MnXG5pbXBvcnQgJy4vc3R5bGluZy9kYXJrbW9kZS5jc3MnXG5pbXBvcnQgJy4vc3R5bGluZy9kYXJrbW9kZS5qcydcbmltcG9ydCAnLi9zdHlsaW5nL2NhbGN1bGF0aW9uVHlwZS5jc3MnXG5pbXBvcnQgJy4vc3R5bGluZy9saXN0LmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2Rlc2t0b3BTdXBwb3J0LmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL3BvcHVwLmNzcydcblxuXG4vLyBpbXBvcnQgZnVuY3Rpb25hbGl0eVxuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvbGlzdC9saXN0U3RydWN0dXJlLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2xpc3QvY3VycmVudExpc3QuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvbGlzdC9hZGRJdGVtc1RvTGlzdC5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS93aW5kb3cvb3BlbldpbmRvdy5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS93aW5kb3cvYWRkTmV3TGlzdC5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS93aW5kb3cvb3BlbkNoYW5nZUNvbG9yV2luZG93LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9jdXJyZW5jeVdpbmRvdy5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9kaXNwbGF5L2V4cGVuc2VUeXBlLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3R5cGVDYWxjdWxhdG9yLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2NhbGN1bGF0ZS9jYWxjdWxhdGUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvY2FsY3VsYXRlL3BlcmNlbnRhZ2UuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvZmlsZS9kb3dubG9hZEZpbGUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvZmlsZS91cGxvYWRGaWxlLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2lucHV0Q2hlY2suanMnO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9