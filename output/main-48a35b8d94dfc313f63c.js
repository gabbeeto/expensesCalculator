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
  console.log(this);
  let item = this.value
  try {
    ;(0,_window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_0__.checkIfEmpty)(item,);
  }
  catch (error) {
    console.log(error)
  }
}


function checkIfProductOrMoneyValid() {
  console.log(this);
  let item = this.value
  try {
    ;(0,_window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_0__.checkIfEmpty)(item,);
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

/***/ "./input/functionality/window/currencyWindow.js":
/*!******************************************************!*\
  !*** ./input/functionality/window/currencyWindow.js ***!
  \******************************************************/
/***/ (() => {

const currencyButton = document.getElementById('currencyButton');
const currencyDialog = document.getElementById('currencyPopUp');
currencyButton.addEventListener('click', changeCurrency)

function changeCurrency(){
let originalCurrency = currencyDialog.querySelectorAll('input')[0].value

let transformedCurrency = currencyDialog.querySelectorAll('input')[1].value
let url = new URL(`https://cdn.jsdelivr.net/`)
url.pathname = `gh/fawazahmed0/currency-api@1/latest/currencies/${transformedCurrency}/${originalCurrency}.json`
console.log(url)
// fetch()



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
    console.log(error);
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

input[type='text']{
outline: 0px solid transparent;

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
`, "",{"version":3,"sources":["webpack://./input/styling/style.css"],"names":[],"mappings":"AAAA,yBAAyB;;AAEzB;AACA,UAAU;AACV,QAAQ;AACR,qBAAqB;AACrB;;AAEA;;AAEA,kBAAkB;AAClB,cAAc;AACd,cAAc;AACd,gBAAgB;AAChB,iBAAiB;AACjB,sBAAsB;AACtB,aAAa;AACb,kBAAkB;AAClB;;AAEA,uBAAuB;;;;AAIvB;AACA,YAAY;AACZ,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB;;AAEA;AACA,YAAY;AACZ;;AAEA,uBAAuB;;AAEvB;AACA,8BAA8B;AAC9B,mBAAmB;AACnB,2CAA2C;AAC3C,sBAAsB;AACtB;;AAEA;AACA;AACA;;AAEA;AACA,yBAAyB;AACzB;AACA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,UAAU;AACV;;AAEA;AACA,yCAAyC;AACzC,QAAQ;AACR,eAAe;AACf,kBAAkB;AAClB;;AAEA;AACA,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,uBAAuB;AACvB,mBAAmB;AACnB,6BAA6B;AAC7B,QAAQ;AACR,gBAAgB;AAChB,SAAS;AACT,kBAAkB;AAClB;AACA;AACA,YAAY;AACZ,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,QAAQ;;AAER;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,YAAY;AACZ,kBAAkB;AAClB;AACA;;AAEA,qBAAqB;AACrB;AACA,4BAA4B;AAC5B,QAAQ;AACR,QAAQ;AACR,iBAAiB;AACjB,YAAY;AACZ,kBAAkB;AAClB,yBAAyB;AACzB;;AAEA;AACA,iCAAiC;AACjC;;AAEA;AACA,+BAA+B;AAC/B,mBAAmB;AACnB,6BAA6B;AAC7B,YAAY;AACZ,kBAAkB;AAClB;;AAEA;AACA,oCAAoC;AACpC,kBAAkB;AAClB,8BAA8B;AAC9B;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,cAAc;AACd;;;;AAIA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,WAAW;AACX;;AAEA;AACA,WAAW;AACX,iBAAiB;AACjB,6BAA6B;AAC7B,6BAA6B;AAC7B,kBAAkB;AAClB;;AAEA;AACA,8BAA8B;;AAE9B;;AAEA;AACA;AACA;;AAEA;AACA;AACA;;AAEA,oBAAoB;;AAEpB;AACA,iBAAiB;AACjB,eAAe;AACf;AACA;AACA;AACA,eAAe;AACf,SAAS;AACT,cAAc;AACd","sourcesContent":["/* mobile first 300x440 */\n\n*{\npadding: 0;\nmargin:0;\nbox-sizing:border-box;\n}\n\n:root{\n\n/* color section */\n--black: black;\n--white: white;\n--green: #09FF99;\n--yellow: #F5BB00;\n--lightYellow: #EEEE9B;\n--red:#ED6464;\n--lightRed:#dc143c;\n}\n\n/* repetition section */\n\n\n\nheader, article{\ndisplay:flex;\njustify-content:center;\nalign-items:center;\ntext-align:center;\n}\n\nmain{\ndisplay:grid;\n}\n\n/* individual section */\n\nbody{\nbackground-color: var(--white);\ncolor: var(--black);\ntransition-property:background-color, color;\ntransition-duration:2s;\n}\n\nheader{\nborder-bottom:2px solid var(--black)\n}\n\nheader h1{\nfont-size:max(1rem,3.8vw);\n}\nheader span{\ndisplay:block;\nfont-size:max(0.7rem,2.8vw);\n}\n\nheader button{\nheight:90%;\n}\n\nmain{\ngrid-template: 10% 10% 1fr 200px 10%/ 1fr;\ngap:10px;\npadding-top:5px;\npadding-bottom:5px;\n}\n\narticle{\nflex-direction:column;\njustify-content:center;\nalign-items:center;\n/* align-self:center; */\njustify-self:center;\nborder:2px solid var(--black);\ngap: 7px;\npadding: 5px 0px;\nwidth:98%;\nborder-radius:10px;\n}\narticle form div{\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items:center;\ngap: 7px;\n\n}\n\nbutton{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding: 8px;\nborder-radius:12px;\ntransition: background-color, color 0.7s\n}\n\n/* edit item button */\n#listContainer div + button{\nbackground-color: var(--red);\nbottom:0;\nright: 0;\nposition:absolute;\npadding: 5px;\nborder-radius:30px;\ntext-transform: uppercase;\n}\n\n#listContainer div + button:hover{\nbackground-color: var(--lightRed);\n}\n\n#listContainer div + button.onSelection{\nbackground-color: var(--yellow);\ncolor: var(--white);\nborder:2px solid var(--white);\npadding: 6px;\nborder-radius:10px;\n}\n\n#listContainer div + button.onSelection:hover{\nbackground-color: var(--lightYellow);\ncolor:var(--black);\nborder: 2px solid var(--black);\n}\n\nbutton:hover{\nbackground-color: var(--black);\ncolor:var(--white);\nborder: 2px solid var(--white);\ncursor:pointer;\n}\n\n\n\nselect{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding:6px;\n}\n\ninput[type='text']{\npadding:3px;\nborder-radius:4px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\ncolor:var(--black);\n}\n\ninput[type='text']{\noutline: 0px solid transparent;\n\n}\n\ninput[type='text']:invalid:hover{\nbackground-color:var(--red)\n}\n\ninput[type='text']:valid:hover{\nbackground-color:var(--green)\n}\n\n/* article section */\n\n#listContainer{\ngrid-row-start:-3;\ngrid-row-end:-3;\nposition: relative\n}\n#listContainer{\noverflow:scroll;\nwidth:98%;\nmax-height:98%;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _functionality_window_currencyWindow_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_functionality_window_currencyWindow_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _functionality_display_expenseType_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./functionality/display/expenseType.js */ "./input/functionality/display/expenseType.js");
/* harmony import */ var _functionality_typeCalculator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./functionality/typeCalculator.js */ "./input/functionality/typeCalculator.js");
/* harmony import */ var _functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./functionality/calculate/calculate.js */ "./input/functionality/calculate/calculate.js");
/* harmony import */ var _functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./functionality/file/downloadFile.js */ "./input/functionality/file/downloadFile.js");
/* harmony import */ var _functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _functionality_file_uploadFile_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./functionality/file/uploadFile.js */ "./input/functionality/file/uploadFile.js");
/* harmony import */ var _functionality_inputCheck_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./functionality/inputCheck.js */ "./input/functionality/inputCheck.js");

// import styles









// import functionality














})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtHQUFrRyxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxlQUFlLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUs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LGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUM0QjtBQUNHO0FBQ0Q7QUFDUTtBQUNYO0FBQ1U7QUFDVDs7O0FBRzVCO0FBQytDO0FBQ0Y7QUFDRztBQUNGO0FBQ0E7QUFDVztBQUNQO0FBQ0Y7QUFDTDtBQUNLO0FBQ0Y7QUFDRjtBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9jYWxjdWxhdGUvY2FsY3VsYXRlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9leHBlbnNlVHlwZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZWRpdEl0ZW1Pckxpc3Qvc2VsZWN0aW9uLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZmlsZS9kb3dubG9hZEZpbGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9maWxlL3VwbG9hZEZpbGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9pbnB1dENoZWNrLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvbGlzdC9hZGRJdGVtc1RvTGlzdC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2xpc3QvY3VycmVudExpc3QuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9saXN0L2xpc3RTdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS90eXBlQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9hZGROZXdMaXN0LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L2N1cnJlbmN5V2luZG93LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L2dlbmVyYXRlQ29udGVudEZvckVkaXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS93aW5kb3cvb3BlbkNoYW5nZUNvbG9yV2luZG93LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L29wZW5XaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kYXJrbW9kZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2NhbGN1bGF0aW9uVHlwZS5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kYXJrbW9kZS5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3MiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9saXN0LmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcz9iNjQ4Iiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuY3NzPzNhYjMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3M/MjVmZiIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2xpc3QuY3NzP2EzZTMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9wb3B1cC5jc3M/MWVmNiIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL3N0eWxlLmNzcz9jZGExIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZmlsZUltcG9ydGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBjYWxjdWxhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcmVzdWx0Q29udGVudGApO1xuY29uc3QgY2FsY3VsYXRlQnV0dG9uID0gY2FsY3VsYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbmApO1xuY29uc3QgY2FsY3VsYXRlU3BhbiA9IGNhbGN1bGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBzcGFuYCk7XG5cbmNhbGN1bGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGN1bGF0ZSlcblxuXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZSgpIHtcbiAgbGV0IGluZGV4byA9IDBcbiAgbGV0IHJlc3VsdCA9IGN1cnJlbnRMaXN0LmFycmF5LnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgaW5kZXhvICs9IDE7XG4gICAgc3dpdGNoIChjdXJyZW50SXRlbS50eXBlKSB7XG4gICAgICBjYXNlICdmb29kJzpcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgY2FsY3VsYXRlZEZvb2QoY3VycmVudEl0ZW0pO1xuICAgICAgY2FzZSAncHJvZHVjdCc6XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGN1cnJlbnRJdGVtLnByaWNlO1xuICAgIH1cbiAgfSwgMCk7XG5cbiAgY2FsY3VsYXRlU3Bhbi5pbm5lclRleHQgPSByZXN1bHQ7XG59XG5cblxuXG5mdW5jdGlvbiBjYWxjdWxhdGVkRm9vZChjdXJyZW50Rm9vZCkge1xuICBsZXQgcHJpY2VGb3JVbml0ID0gY3VycmVudEZvb2QucHJpY2UgLyBjdXJyZW50Rm9vZC5hbW91bnRQZXJQcmljZTtcbiAgbGV0IGFtb3VudE9mRm9vZEVhdGVuUGVyTW9udGhPcldlZWsgPSBjdXJyZW50Rm9vZC5hbW91bnRQZXJEYXkgKiBnZXRQcm9jZXN1cmUoY3VycmVudEZvb2QpO1xuICBsZXQgYXZlcmFnZUZvb2QgPSBwcmljZUZvclVuaXQgKiBhbW91bnRPZkZvb2RFYXRlblBlck1vbnRoT3JXZWVrO1xuICByZXR1cm4gYXZlcmFnZUZvb2Q7XG59XG5cbmZ1bmN0aW9uIGdldFByb2Nlc3VyZShjdXJyZW50Rm9vZCkge1xuICBpZiAodHlwZU9mQ2FsY3VsYXRpb24gPT0gJ21vbnRobHknKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRGb29kLm1vbnRoQW1vdW50XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGN1cnJlbnRGb29kLndlZWtBbW91bnRcbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkRm9vZFRvVGhlTGlzdCwgYWRkTW9uZXlUb1RoZUxpc3QsIGFkZFByb2R1Y3RUb1RoZUxpc3QgfSBmcm9tICcuLy4uL2xpc3QvYWRkSXRlbXNUb0xpc3QuanMnO1xuXG5sZXQgc2VsZWN0ZWRTZWN0aW9uO1xuY29uc3QgdHlwZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXJ0aWNsZTpmaXJzdC1vZi10eXBlIHNlbGVjdCcpO1xuXG50eXBlU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7IGRpc3BsYXlDb250ZW50Rm9yVHlwZShldmVudC50YXJnZXQudmFsdWUpIH0pXG5cbmxldCBleHBlbnNlQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleHBlbnNlQ29udGVudCBmb3JtJyk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250ZW50Rm9yVHlwZSh0YXJnZXRWYWx1ZSkge1xuXG4gIHN3aXRjaCAodGFyZ2V0VmFsdWUpIHtcbiAgICBjYXNlICdmb29kJzpcbiAgICAgIGdlbmVyYXRlRm9vZCgpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9kdWN0JzpcbiAgICAgIGdlbmVyYXRlUHJvZHVjdCgpXG4gICAgICBicmVhaztcbiAgICBjYXNlICdtb25leSc6XG4gICAgICBnZW5lcmF0ZU1vbmV5KClcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm9vZCgpIHtcbiAgZXhwZW5zZUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gYCA8cD5uYW1lOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkPlxuPHA+cHJpY2U6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiIHJlcXVpcmVkPlxuPHA+YW1vdW50IG9mIGZvb2QgcGVyIHByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJQcmljZVwiIHJlcXVpcmVkPlxuPHA+YW1vdW50IG9mIGZvb2QgcGVyIGRheTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyRGF5XCIgcmVxdWlyZWQ+XG48ZGl2PlxuICA8c2VjdGlvbj5cbiAgICA8cD5hbW91bnQgb2YgZGF5cyBwZXIgbW9udGg6IDxicj4gPHNwYW4+KHlvdSBlYXQpPC9zcGFuPjwvcD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cIm1vbnRoQW1vdW50XCIgIHJlcXVpcmVkID5cbiAgPC9zZWN0aW9uPlxuICA8cD5vcjwvcD5cbiAgPHNlY3Rpb24+XG4gICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIHdlZWs6IDxicj4gPHNwYW4+KHlvdSBlYXQpPC9zcGFuPjwvcD5cbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cIndlZWtBbW91bnRcIiByZXF1aXJlZCA+XG4gIDwvc2VjdGlvbj5cbjwvZGl2PlxuPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5cbmBcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEZvb2RUb1RoZUxpc3QpXG5cbiAgaWYgKHdpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9PSAnbW9udGhseScpIHtcblxuICAgIHNlbGVjdGVkU2VjdGlvbiA9IGV4cGVuc2VDb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbiAgfVxuICBlbHNlIHtcblxuICAgIHNlbGVjdGVkU2VjdGlvbiA9IGV4cGVuc2VDb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb246bGFzdC1vZi10eXBlJyk7XG4gIH1cblxuICBzZWxlY3RlZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb2R1Y3QoKSB7XG4gIGV4cGVuc2VDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGAgPHA+bmFtZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cbjxwPnByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJwcmljZVwiIHJlcXVpcmVkPlxuPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5cbmBcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2R1Y3RUb1RoZUxpc3QpXG5cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNb25leSgpIHtcbiAgZXhwZW5zZUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gYCA8cD5tb25leTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwicHJpY2VcIiByZXF1aXJlZD5cbjxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE1vbmV5VG9UaGVMaXN0KVxufVxuIiwiaW1wb3J0IHsgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vbGlzdC9saXN0U3RydWN0dXJlLmpzJztcbmltcG9ydCB7IHNlbGVjdERpdiB9IGZyb20gJy4vLi4vZWRpdEl0ZW1Pckxpc3Qvc2VsZWN0aW9uLmpzJ1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuXG5sZXQgbGlzdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RMaXN0JylcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlMaXN0KCkge1xuICByZXN0YXJ0RXZlcnl0aGluZygpO1xuICBjdXJyZW50TGlzdC5hcnJheS5mb3JFYWNoKGFwcGVuZEl0ZW1zKVxuICBsaXN0LmZvckVhY2goYXBwZW5kTGlzdHMpXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRFdmVyeXRoaW5nKCkge1xuICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbicpO1xuICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29uU2VsZWN0aW9uJyk7XG4gIHdpbmRvdy5zZWxlY3RlZEluZGV4ID0gJyc7XG5cbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gIGxpc3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGlzdCcpO1xuICBsaXN0U2VsZWN0LmlubmVySFRNTCA9ICcnO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRJdGVtcyhpdGVtLCBjdXJyZW50TGlzdE9mSXRlbXNJbmRleCkge1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdERpdilcbiAgbGV0IG5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBuYW1lVGV4dC5pbm5lclRleHQgPSBpdGVtLm5hbWU7XG4gIG5hbWVUZXh0LnN0eWxlLmNvbG9yID0gcmV0dXJuRGlmZmVyZW50Q29sb3JEZXBlbmRpbmdPblR5cGUoaXRlbSk7XG4gIG5hbWVUZXh0LmRhdGFzZXQuaW5kZXggPSBjdXJyZW50TGlzdE9mSXRlbXNJbmRleDtcbiAgY29udGFpbmVyLmFwcGVuZChsaSk7XG4gIGxpLmFwcGVuZChuYW1lVGV4dCk7XG59XG5cbmZ1bmN0aW9uIHJldHVybkRpZmZlcmVudENvbG9yRGVwZW5kaW5nT25UeXBlKGl0ZW0pIHtcbiAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICBjYXNlICdmb29kJzpcbiAgICAgIHJldHVybiBjb2xvci5mb29kO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgcmV0dXJuIGNvbG9yLnByb2R1Y3Q7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgcmV0dXJuIGNvbG9yLm1vbmV5O1xuICB9XG59XG5cblxuZnVuY3Rpb24gYXBwZW5kTGlzdHMobGlzdCwgY3VycmVudExpc3RvZkxpc3RzSW5kZXgpIHtcblxuICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgb3B0aW9uLmlubmVySFRNTCA9IGAke2xpc3QubmFtZX1gO1xuICBvcHRpb24udmFsdWUgPSBgJHtjdXJyZW50TGlzdG9mTGlzdHNJbmRleH1gO1xuICBpZiAod2luZG93LnZhbHVlT2ZTZWxlY3QgPT0gY3VycmVudExpc3RvZkxpc3RzSW5kZXgpIHtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG4gIGxpc3RTZWxlY3QuYXBwZW5kKG9wdGlvbik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2VsZWN0RGl2KGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuZGF0YXNldC5pbmRleCkge1xuICAgIHdpbmRvdy5zZWxlY3RlZEluZGV4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICBzZWxlY3RQYXJlbnQoZXZlbnQpXG4gIH1cbn1cblxuXG5cblxuZnVuY3Rpb24gc2VsZWN0UGFyZW50KGV2ZW50KSB7XG4gIGxldCBwYXJlbnQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcblxuICByZW1vdmVDbGFzc2VzKClcbiAgbGV0IGVkaXRJdGVtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uYCk7XG4gIGVkaXRJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ29uU2VsZWN0aW9uJylcbiAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkSXRlbScpO1xufVxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgbGV0IG9uU2VsZWN0aW9uQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25TZWxlY3Rpb24nKVxuICBpZihvblNlbGVjdGlvbkNsYXNzKXtcblxuICBvblNlbGVjdGlvbkNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ29uU2VsZWN0aW9uJylcbiAgfVxuICBsZXQgc2VsZWN0ZWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RlZEl0ZW0nKTtcbiAgc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZEl0ZW0nKSk7XG5cbn1cbiIsImNvbnN0IGRvd25sb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXJ0aWNsZTpmaXJzdC1vZi10eXBlIGJ1dHRvbjpudGgtb2YtdHlwZSgyKScpO1xuZG93bmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb3dubG9hZFRoZUxpc3RTdHJ1Y3R1cmUpXG5cbmZ1bmN0aW9uIGRvd25sb2FkVGhlTGlzdFN0cnVjdHVyZSgpe1xubGV0IGZpbGVUb0Rvd25sb2FkID0gbmV3IEZpbGUoW0pTT04uc3RyaW5naWZ5KHdpbmRvdy5saXN0KV0sIGBsaXN0LSR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfWAse3R5cGU6J2FwcGxpY2F0aW9uL2pzb24nfSk7XG5sZXQgbXlVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVUb0Rvd25sb2FkKTtcbmxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xubGluay5ocmVmID0gbXlVcmw7XG5saW5rLmRvd25sb2FkID0gZmlsZVRvRG93bmxvYWQubmFtZVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKVxubGluay5jbGljaygpXG5kb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspXG5VUkwucmV2b2tlT2JqZWN0VVJMKG15VXJsKVxufVxuIiwiaW1wb3J0IHsgZGlzcGxheUxpc3QgfSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCB1cGxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt0eXBlPSdmaWxlJ11gKTtcbnVwbG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVTdHJ1Y3R1cmUpXG5cbmZ1bmN0aW9uIHVwZGF0ZVN0cnVjdHVyZSgpIHtcblxuICBsZXQgbXlGaWxlID0gdXBsb2FkQnV0dG9uLmZpbGVzWzBdXG4gIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG5cbiAgICB3aW5kb3cubGlzdCA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnJlc3VsdClcbiAgICBjdXJyZW50TGlzdCA9IGxpc3RbMF07XG4gICAgZGlzcGxheUxpc3QoKVxuICB9KTtcblxuICByZWFkZXIucmVhZEFzVGV4dChteUZpbGUpO1xufVxuXG5cbiIsImltcG9ydCB7IGNoZWNrSWZFbXB0eSB9IGZyb20gJy4vd2luZG93L2dlbmVyYXRlQ29udGVudEZvckVkaXRXaW5kb3cuanMnXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRXZlbnRMaXN0ZW5lckZvcklucHV0KCkge1xuICBmb3IgKGxldCBpbnB1dCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBmb3JtIGlucHV0W3R5cGU9J3RleHQnXWApKSB7XG4gICAgc3dpdGNoIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlOmZpcnN0LW9mLXR5cGUgc2VsZWN0JykudmFsdWUpIHtcbiAgICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja0lmRm9vZFZhbGlkKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja0lmUHJvZHVjdE9yTW9uZXlWYWxpZClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrSWZQcm9kdWN0T3JNb25leVZhbGlkKVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZ2VuZXJhdGVFdmVudExpc3RlbmVyRm9ySW5wdXQoKVxuXG5mdW5jdGlvbiBjaGVja0lmRm9vZFZhbGlkKCkge1xuICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgbGV0IGl0ZW0gPSB0aGlzLnZhbHVlXG4gIHRyeSB7XG4gICAgY2hlY2tJZkVtcHR5KGl0ZW0sKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrSWZQcm9kdWN0T3JNb25leVZhbGlkKCkge1xuICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgbGV0IGl0ZW0gPSB0aGlzLnZhbHVlXG4gIHRyeSB7XG4gICAgY2hlY2tJZkVtcHR5KGl0ZW0sKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0LCBNb25leSwgUHJvZHVjdCwgRm9vZCB9IGZyb20gJy4vbGlzdFN0cnVjdHVyZS5qcydcbmltcG9ydCB7IGNoZWNrSWZGb29kSXNFbXB0eSwgY2hlY2tJZlByb2R1Y3RJc0VtcHR5LCBjaGVja0lmTW9uZXlJc0VtcHR5IH0gZnJvbSAnLi8uLi93aW5kb3cvZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcydcblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRm9vZFRvVGhlTGlzdCgpIHtcbiAgbGV0IG5hbWVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG5cbiAgdHJ5IHtcbiAgICBsZXQgZm9vZCA9IHtcbiAgICAgIG5hbWU6IG5hbWVWYWx1ZSxcbiAgICAgIHByaWNlOiBnZXROdW1iZXJPZigncHJpY2UnKSxcbiAgICAgIGFtb3VudFBlclByaWNlOiBnZXROdW1iZXJPZignYW1vdW50UGVyUHJpY2UnKSxcbiAgICAgIGFtb3VudFBlckRheTogZ2V0TnVtYmVyT2YoJ2Ftb3VudFBlckRheScpLFxuICAgICAgd2Vla0Ftb3VudDogZ2V0TnVtYmVyT2YoJ3dlZWtBbW91bnQnKSxcbiAgICAgIG1vbnRoQW1vdW50OiBnZXROdW1iZXJPZignbW9udGhBbW91bnQnKSxcbiAgICB9XG4gICAgY2hlY2tJZkZvb2RJc0VtcHR5KGZvb2QpXG4gICAgcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdChGb29kKGZvb2QubmFtZSwgZm9vZC5wcmljZSwgYW1vdW50UGVyUHJpY2UsIGFtb3VudFBlclByaWNlLCB3ZWVrQW1vdW50LCBtb250aEFtb3VudCkpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoZXJyb3IpXG4gIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9kdWN0VG9UaGVMaXN0KCkge1xuICBsZXQgbmFtZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcblxuICB0cnkge1xuICAgIGxldCBwcm9kdWN0ID0ge1xuICAgICAgbmFtZTogbmFtZVZhbHVlLFxuICAgICAgcHJpY2U6IGdldE51bWJlck9mKCdwcmljZScpXG4gICAgfVxuICAgIGNoZWNrSWZQcm9kdWN0SXNFbXB0eShwcm9kdWN0KVxuICAgIHB1c2hUb0FycmF5QW5kRGlzcGxheUxpc3QoUHJvZHVjdChwcm9kdWN0Lm5hbWUsIHByb2R1Y3QucHJpY2UpKVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGVycm9yKVxuICB9XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTW9uZXlUb1RoZUxpc3QoKSB7XG4gIHRyeSB7XG4gICAgbGV0IG1vbmV5ID0geyBwcmljZTogZ2V0TnVtYmVyT2YoJ3ByaWNlJykgfVxuICAgIGNoZWNrSWZNb25leUlzRW1wdHkobW9uZXkpXG4gICAgcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdChNb25leShtb25leS5wcmljZSkpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoZXJyb3IpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TnVtYmVyT2YoZWxlbWVudElkKSB7XG4gIGxldCB2YWx1ZU9mRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2VsZW1lbnRJZH1gKS52YWx1ZVxuICByZXR1cm4gdHJhbnNmb3JtVG9OdW1iZXIodmFsdWVPZkVsZW1lbnQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub051bWJlcih2YWx1ZU9mRWxlbWVudCkge1xuICBsZXQgbGV0dGVyUmVtb3ZlciA9IC9bMC05XSsvZztcbiAgbGV0IHZhbHVlT2ZFbGVtZW50V2l0aG91dExldHRlcnMgPSBgJHtsZXR0ZXJSZW1vdmVyLmV4ZWModmFsdWVPZkVsZW1lbnQpfWA7XG5cbiAgcmV0dXJuIE51bWJlcih2YWx1ZU9mRWxlbWVudFdpdGhvdXRMZXR0ZXJzKTtcbn1cbiIsImltcG9ydCB7ZGlzcGxheUxpc3R9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cblxubGV0IHNlbGVjdEZvckN1cnJlbnRMaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdExpc3QnKTtcbnNlbGVjdEZvckN1cnJlbnRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUN1cnJlbnRMaXN0KTtcblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudExpc3QoZXZlbnQpe1xuICBhbGVydCgndGhpcyBoYXMgYmVlbiBjaGFuZ2VkJylcbndpbmRvdy52YWx1ZU9mU2VsZWN0ID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG53aW5kb3cuY3VycmVudExpc3QgPSBsaXN0W3ZhbHVlT2ZTZWxlY3RdO1xuZGlzcGxheUxpc3QoKVxufVxuXG4iLCJpbXBvcnQgeyBkaXNwbGF5Q29udGVudEZvclR5cGUgfSBmcm9tICcuLy4uL2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMnXG5pbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cblxuXG4vLyBjb2xvciBzZWN0aW9uXG5pZiAobG9jYWxTdG9yYWdlLmNvbG9yKSB7XG4gIHdpbmRvdy5jb2xvciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmNvbG9yKVxufVxuZWxzZSB7XG4gIHdpbmRvdy5jb2xvciA9IHtcbiAgICBmb29kOiAndmlvbGV0JyxcbiAgICBwcm9kdWN0OiAnYmx1ZScsXG4gICAgbW9uZXk6ICdncmVlbicsXG4gIH1cbn1cblxuXG4vLyBjbGFzcyBzZWN0aW9uXG5leHBvcnQgZnVuY3Rpb24gTW9uZXkocHJpY2UsIG5hbWUgPSBwcmljZSwgdHlwZSA9ICdtb25leScpIHtcbiAgcmV0dXJuIHsgcHJpY2UsIG5hbWUsIHR5cGUgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2R1Y3QobmFtZSwgcHJpY2UsIHR5cGUgPSAncHJvZHVjdCcpIHtcbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIHR5cGUgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIEZvb2QobmFtZSwgcHJpY2UsIGFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXksIHdlZWtBbW91bnQsIG1vbnRoQW1vdW50LCB0eXBlID0gJ2Zvb2QnKSB7XG5sZXQgbXlXZWVrQW1vdW50O1xubGV0IG15TW9udGhBbW91bnQ7XG4gIGlmICh3ZWVrQW1vdW50KSB7XG4gICAgbXlXZWVrQW1vdW50ID0gd2Vla0Ftb3VudDtcbiAgfVxuICBlbHNlIHtcbiAgICBteVdlZWtBbW91bnQgPSBwYXJzZUludChtb250aEFtb3VudCAvIDQpO1xuICB9XG5cbiAgaWYgKG1vbnRoQW1vdW50KSB7XG4gICAgbXlNb250aEFtb3VudCA9IG1vbnRoQW1vdW50O1xuICB9XG4gIGVsc2Uge1xuICAgIG15TW9udGhBbW91bnQgPSBwYXJzZUludCh3ZWVrQW1vdW50ICogNCk7XG4gIH1cblxuICByZXR1cm4geyBuYW1lLCBwcmljZSwgYW1vdW50UGVyUHJpY2UsIGFtb3VudFBlckRheSwgd2Vla0Ftb3VudDogbXlXZWVrQW1vdW50LCBtb250aEFtb3VudDogbXlNb250aEFtb3VudCwgdHlwZSB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIExpc3QobmFtZSwgYXJyYXkgPSBbXSkge1xuICByZXR1cm4geyBhcnJheSwgbmFtZSB9XG59XG5cblxuLy8gbGlzdCBzZWN0aW9uXG5cbmlmIChsb2NhbFN0b3JhZ2UubGlzdCkge1xuICB3aW5kb3cubGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmxpc3QpXG4gIHdpbmRvdy5jdXJyZW50TGlzdCA9IHdpbmRvdy5saXN0WzBdO1xuICBkaXNwbGF5TGlzdCgpXG59XG5lbHNlIHtcbiAgd2luZG93LmN1cnJlbnRMaXN0ID0gbmV3IExpc3QoJ2RlZmF1bHQnKTtcbiAgd2luZG93Lmxpc3QgPSBbY3VycmVudExpc3RdO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xpc3QnLCBKU09OLnN0cmluZ2lmeSh3aW5kb3cubGlzdCkpXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvcicsIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5jb2xvcikpXG59XG5cblxuLy8gZnVuY3Rpb24gdG8gcHVzaCB0byBhcnJheSBzZWN0aW9uXG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KGVsKSB7XG4gIGN1cnJlbnRMaXN0LmFycmF5LnB1c2goZWwpO1xuICBkaXNwbGF5TGlzdCgpXG4gIGRpc3BsYXlDb250ZW50Rm9yVHlwZSgpXG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHsgZGlzcGxheUNvbnRlbnRGb3JUeXBlfSBmcm9tICcuL2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMnO1xuXG5cbmNvbnN0IHR5cGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZUNvbnRhaW5lciBzZWxlY3QnKTtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKTtcbnR5cGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUeXBlT2ZDYWxjdWxhdGlvbilcblxuY2hhbmdlVHlwZU9mQ2FsY3VsYXRpb24oKTtcbmZ1bmN0aW9uIGNoYW5nZVR5cGVPZkNhbGN1bGF0aW9uKCl7XG5cbmlmKHR5cGVTZWxlY3QudmFsdWUgPT0gJ21vbnRobHknKXtcbndpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9ICdtb250aGx5Jztcbn1cbmVsc2V7XG53aW5kb3cudHlwZU9mQ2FsY3VsYXRpb24gPSAnd2Vla2x5Jztcbn1cblxuZGlzcGxheUNvbnRlbnRGb3JUeXBlKHR5cGVTZWxlY3Rvci52YWx1ZSk7XG5cbn1cbiIsImltcG9ydCB7TGlzdH0gZnJvbSAnLi8uLi9saXN0L2xpc3RTdHJ1Y3R1cmUuanMnO1xuaW1wb3J0IHtjbG9zZVBvcFVwfSBmcm9tICcuL29wZW5XaW5kb3cuanMnO1xuaW1wb3J0IHtkaXNwbGF5TGlzdH0gZnJvbSAnLi8uLi9kaXNwbGF5Ly9pdGVtc09yTGlzdHMuanMnXG5cbmNvbnN0IGFkZE5ld0xpc3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkTmV3TGlzdFBvcFVwJylcblxuY29uc3QgYWRkTmV3TGlzdEJ1dHRvbiA9IGFkZE5ld0xpc3REaWFsb2cucXVlcnlTZWxlY3RvcignYnV0dG9uOmxhc3Qtb2YtdHlwZScpXG5cbmFkZE5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdMaXN0IClcbmZ1bmN0aW9uIGFkZE5ld0xpc3QoKXtcbmxldCBuYW1lRm9yTmV3SW5wdXQgPSBhZGROZXdMaXN0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG5saXN0LnB1c2goTGlzdChuYW1lRm9yTmV3SW5wdXQpKVxuZGlzcGxheUxpc3QoKVxuY2xvc2VQb3BVcCgpXG59XG4iLCJjb25zdCBjdXJyZW5jeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW5jeUJ1dHRvbicpO1xuY29uc3QgY3VycmVuY3lEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVuY3lQb3BVcCcpO1xuY3VycmVuY3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDdXJyZW5jeSlcblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVuY3koKXtcbmxldCBvcmlnaW5hbEN1cnJlbmN5ID0gY3VycmVuY3lEaWFsb2cucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVswXS52YWx1ZVxuXG5sZXQgdHJhbnNmb3JtZWRDdXJyZW5jeSA9IGN1cnJlbmN5RGlhbG9nLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylbMV0udmFsdWVcbmxldCB1cmwgPSBuZXcgVVJMKGBodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvYClcbnVybC5wYXRobmFtZSA9IGBnaC9mYXdhemFobWVkMC9jdXJyZW5jeS1hcGlAMS9sYXRlc3QvY3VycmVuY2llcy8ke3RyYW5zZm9ybWVkQ3VycmVuY3l9LyR7b3JpZ2luYWxDdXJyZW5jeX0uanNvbmBcbmNvbnNvbGUubG9nKHVybClcbi8vIGZldGNoKClcblxuXG5cbn1cbiIsImltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMsIGNsb3NlUG9wVXAgfSBmcm9tICcuL29wZW5XaW5kb3cuanMnO1xuaW1wb3J0IHsgdHJhbnNmb3JtVG9OdW1iZXIgfSBmcm9tICcuLy4uL2xpc3QvYWRkSXRlbXNUb0xpc3QuanMnO1xuaW1wb3J0IHsgRm9vZCwgUHJvZHVjdCwgTW9uZXkgfSBmcm9tICcuLy4uL2xpc3QvbGlzdFN0cnVjdHVyZS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cbmNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UG9wVXAnKTtcblxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50Rm9yV2luZG93KCkge1xuICBpZiAod2luZG93LnNlbGVjdGVkSW5kZXgpIHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JEaWFsb2dGb3JJdGVtcygpXG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvQnV0dG9ucygpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgaGF2ZW4ndCBzZWxlY3RlZCBhbnl0aGluZ2ApXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudEZvckxpc3RXaW5kb3coKSB7XG4gIGdlbmVyYXRlQ29udGVudEZvckRpYWxvZ0Zvckxpc3RzKClcbiAgYWRkRXZlbnRMaXN0ZW5lclRvQnV0dG9ucygpXG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50Rm9yRGlhbG9nRm9ySXRlbXMoKSB7XG4gIGxldCBpdGVtID0gY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF07XG4gIGxldCBzZWxlY3RlZExpc3QgPSBsaXN0W3NlbGVjdGVkSW5kZXhdO1xuICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgZGlhbG9nLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY2xvc2VCdG4nPmNsb3NlPC9idXR0b24+XG4gICAgICAgIDxwPm5hbWU6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5uYW1lfSd0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiPlxuICAgICAgICA8cD5wcmljZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLnByaWNlfScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J2RlY2ltYWwnIGlkPVwicHJpY2VcIj5cbiAgICAgICAgPHA+YW1vdW50IG9mIGZvb2QgcGVyIHByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0ICB2YWx1ZT0nJHtpdGVtLmFtb3VudFBlclByaWNlfScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyUHJpY2VcIj5cbiAgICAgICAgPHA+YW1vdW50IG9mIGZvb2QgcGVyIGRheTo8L3A+XG4gICAgICAgIDxpbnB1dCAgIHZhbHVlPScke2l0ZW0uYW1vdW50UGVyRGF5fScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyRGF5XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8cD5hbW91bnQgb2YgZGF5cyBwZXIgbW9udGg6IDxicj4gPHNwYW4+KHlvdSBlYXQpPC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLm1vbnRoQW1vdW50fScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwibW9udGhBbW91bnRcIj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHA+b3I8L3A+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8cD5hbW91bnQgb2YgZGF5cyBwZXIgd2VlazogPGJyPiA8c3Bhbj4oeW91IGVhdCk8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ud2Vla0Ftb3VudH0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cIndlZWtBbW91bnRcIj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmA7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9kdWN0JzpcbiAgICAgIGRpYWxvZy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz0nY2xvc2VCdG4nPmNsb3NlPC9idXR0b24+XG4gICAgICAgIDxwPm5hbWU6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5uYW1lfSd0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiPlxuICAgICAgICA8cD5wcmljZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLnByaWNlfScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J2RlY2ltYWwnIGlkPVwicHJpY2VcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgZGlhbG9nLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+cHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5wcmljZX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdkZWNpbWFsJyBpZD1cInByaWNlXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGxldCBhcHBseUJ1dHRvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYXBwbHknKTtcbiAgYXBwbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUNoYW5nZXNGb3JJdGVtcyk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JEaWFsb2dGb3JMaXN0cygpIHtcblxuICBkaWFsb2cuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9J2Nsb3NlQnRuJz5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8cD5uYW1lOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2N1cnJlbnRMaXN0Lm5hbWV9J3R5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcblxuICBsZXQgYXBwbHlCdXR0b24gPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2FwcGx5Jyk7XG4gIGFwcGx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwbHlDaGFuZ2VzRm9yTGlzdHMpO1xufVxuXG5mdW5jdGlvbiBhcHBseUNoYW5nZXNGb3JJdGVtcygpIHtcbiAgbGV0IGl0ZW0gPSBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XTtcbiAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICBjYXNlICdmb29kJzpcbiAgICAgIHJ1blByb21pc2VUb0FwcGx5VmFsdWUoZ2V0VmFsdWVzRnJvbUZvb2RJbnB1dHMsIGdldFZhbHVlc0ZvckZvb2QsIGNoZWNrSWZGb29kSXNFbXB0eSwgcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FGb29kLCB0cnVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tUHJvZHVjdElucHV0cywgZ2V0VmFsdWVzRm9yUHJvZHVjdCwgY2hlY2tJZlByb2R1Y3RJc0VtcHR5LCByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQVByb2R1Y3QpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tTW9uZXlJbnB1dHMsIGdldFZhbHVlc0Zvck1vbmV5LCBjaGVja0lmTW9uZXlJc0VtcHR5LCByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzTW9uZXkpO1xuICAgICAgYnJlYWs7XG5cbiAgfVxufVxuXG5mdW5jdGlvbiBydW5Qcm9taXNlVG9BcHBseVZhbHVlKGdldFZhbHVlc0Zyb21JbnB1dF9jYWxsYmFjaywgZ2V0VmFsdWVzRm9yX2NhbGxCYWNrLCBjaGVja0lmSXRlbUlzRW1wdHlfY2FsbEJhY2ssIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBX2NhbGxCYWNrLCB3b3JraW5nV2l0aEZvb2QgPSBmYWxzZSwpIHtcbiAgd2luZG93LndvcmtpbmdXaXRoRm9vZCA9IHdvcmtpbmdXaXRoRm9vZDtcbiAgLy8gcmVtZW1iZXIgdG8gYWRkIHZhbGlkaXR5IGluIHRoZSBjYXRjaCBpbiBhbGwgb2YgdGhlc2UgXG4gIGdldFZhbHVlc0Zyb21JbnB1dF9jYWxsYmFjaygpXG4gICAgLnRoZW4oZ2V0VmFsdWVzRm9yX2NhbGxCYWNrKVxuICAgIC50aGVuKGNoZWNrSWZJdGVtSXNFbXB0eV9jYWxsQmFjaylcbiAgICAudGhlbihtYWtlV2Vla3NPck1vbnRoc1ZhbGlkKVxuICAgIC50aGVuKHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBX2NhbGxCYWNrKVxuICAgIC50aGVuKGRpc3BsYXlMaXN0KVxuICAgIC50aGVuKGNsb3NlUG9wVXApXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbUZvb2RJbnB1dHMoKSB7XG4gIGxldCBuYW1lID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gIGxldCBwcmljZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjcHJpY2UnKS52YWx1ZTtcbiAgbGV0IGFtb3VudFBlclByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNhbW91bnRQZXJQcmljZScpLnZhbHVlO1xuICBsZXQgYW1vdW50UGVyRGF5ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNhbW91bnRQZXJEYXknKS52YWx1ZTtcbiAgbGV0IG1vbnRoQW1vdW50ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNtb250aEFtb3VudCcpLnZhbHVlO1xuICBsZXQgd2Vla0Ftb3VudCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjd2Vla0Ftb3VudCcpLnZhbHVlO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSwgYW1vdW50UGVyUHJpY2UsIGFtb3VudFBlckRheSwgbW9udGhBbW91bnQsIHdlZWtBbW91bnQgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbVByb2R1Y3RJbnB1dHMoKSB7XG4gIGxldCBuYW1lID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gIGxldCBwcmljZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjcHJpY2UnKS52YWx1ZTtcbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UgfTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tTW9uZXlJbnB1dHMoKSB7XG4gIGxldCBwcmljZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjcHJpY2UnKS52YWx1ZTtcbiAgcmV0dXJuIHsgcHJpY2UgfTtcbn1cblxuXG5cbmZ1bmN0aW9uIGdldFZhbHVlc0ZvckZvb2QoZm9vZCkge1xuICBsZXQgbmFtZSA9IGZvb2QubmFtZTtcbiAgbGV0IHByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC5wcmljZSk7XG4gIGxldCBhbW91bnRQZXJQcmljZSA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2QuYW1vdW50UGVyUHJpY2UpO1xuICBsZXQgYW1vdW50UGVyRGF5ID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC5hbW91bnRQZXJEYXkpO1xuICBsZXQgbW9udGhBbW91bnQgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLm1vbnRoQW1vdW50KTtcbiAgbGV0IHdlZWtBbW91bnQgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLndlZWtBbW91bnQpO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSwgYW1vdW50UGVyUHJpY2UsIGFtb3VudFBlckRheSwgbW9udGhBbW91bnQsIHdlZWtBbW91bnQgfVxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JQcm9kdWN0KHByb2R1Y3QpIHtcbiAgbGV0IG5hbWUgPSBwcm9kdWN0Lm5hbWU7XG4gIGxldCBwcmljZSA9IHRyYW5zZm9ybVRvTnVtYmVyKHByb2R1Y3QucHJpY2UpO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSB9XG59XG5cblxuZnVuY3Rpb24gZ2V0VmFsdWVzRm9yTW9uZXkobW9uZXkpIHtcbiAgbGV0IHByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIobW9uZXkucHJpY2UpO1xuICByZXR1cm4geyBwcmljZSB9XG59XG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZGb29kSXNFbXB0eShmb29kKSB7XG4gIC8vIGNoZWNrIGVtcHR5bmVzcyBcbiAgY2hlY2tJZkVtcHR5KGZvb2QubmFtZSwgJ3RoZSBuYW1lIG9mIHRoZSBmb29kJyk7XG4gIGNoZWNrSWZFbXB0eShmb29kLnByaWNlLCAndGhlIHByaWNlIG9mIHRoZSBmb29kJyk7XG4gIGNoZWNrSWZFbXB0eShmb29kLmFtb3VudFBlclByaWNlLCAndGhlIGFtb3VudCBvZiBmb29kIHBlciBwcmljZScpO1xuICBjaGVja0lmRW1wdHkoZm9vZC5hbW91bnRQZXJEYXksICd0aGUgYW1vdW50IG9mIGZvb2QgcGVyIGRheScpO1xuICBjaGVja0lmRWl0aGVyTW9udGhPcldlZWtJc0VtcHR5KGZvb2Qud2Vla0Ftb3VudCwgZm9vZC5tb250aEFtb3VudCk7XG5cbiAgbGltaXROdW1iZXIoZm9vZC53ZWVrQW1vdW50LCA3LCAnd2Vla3MgY2FuIG9ubHkgYmUgNyBkYXlzIGxvbmdzJylcbiAgbGltaXROdW1iZXIoZm9vZC5tb250aEFtb3VudCwgMzEsICdtb250aHMgY2FuIG9ubHkgYmUgMzEgZGF5cyBsb25nJylcblxuICByZXR1cm4geyBuYW1lOiBmb29kLm5hbWUsIHByaWNlOiBmb29kLnByaWNlLCBhbW91bnRQZXJQcmljZTogZm9vZC5hbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5OiBmb29kLmFtb3VudFBlckRheSwgd2Vla0Ftb3VudDogZm9vZC53ZWVrQW1vdW50LCBtb250aEFtb3VudDogZm9vZC5tb250aEFtb3VudCB9XG59XG5mdW5jdGlvbiBjaGVja0lmRWl0aGVyTW9udGhPcldlZWtJc0VtcHR5KHdlZWssIG1vbnRoKSB7XG4gIGlmIChjaGVja1dpdGhvdXRFcnJvcih3ZWVrLCAnd2VlaycpICYmIGNoZWNrV2l0aG91dEVycm9yKG1vbnRoLCAnbW9udGgnKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeW91IGhhdmVuJ3QgZmlsbGVkIG5laXRoZXIgdGhlIGFtb3VudCBvZiBkYXlzIHBlciB3ZWVrIG5vciB0aGUgYW1vdW50IG9mIGRheXMgcGVyIHRoZSBtb250aGApXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjaGVja1dpdGhvdXRFcnJvcihpdGVtLCBuYW1lKSB7XG4gIGlmIChgJHtpdGVtfWAgPT0gJ05hTicpIHtcbiAgICByZXR1cm4gYHlvdSBkaWRuJ3QgZmlsbCB0aGUgJHtuYW1lfWA7XG4gIH1cbiAgZWxzZSBpZiAoIWAke2l0ZW19YCkge1xuICAgIHJldHVybiBgeW91IGRpZG4ndCBmaWxsIHRoZSAke25hbWV9YDtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGxpbWl0TnVtYmVyKG51bWJlclRvQ2hlY2ssIGxpbWl0LCBtZXNzYWdlKSB7XG4gIGlmIChOdW1iZXIobnVtYmVyVG9DaGVjaykgPiBOdW1iZXIobGltaXQpKSB7XG4gIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmUHJvZHVjdElzRW1wdHkocHJvZHVjdCkge1xuICAvLyBjaGVjayBlbXB0eW5lc3MgXG4gIGNoZWNrSWZFbXB0eShwcm9kdWN0Lm5hbWUsICd0aGUgbmFtZSBvZiB0aGUgcHJvZHVjdCcpO1xuICBjaGVja0lmRW1wdHkocHJvZHVjdC5wcmljZSwgJ3RoZSBwcmljZSBvZiB0aGUgcHJvZHVjdCcpO1xuXG4gIHJldHVybiB7IG5hbWU6IHByb2R1Y3QubmFtZSwgcHJpY2U6IHByb2R1Y3QucHJpY2UgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmTW9uZXlJc0VtcHR5KG1vbmV5KSB7XG4gIC8vIGNoZWNrIGVtcHR5bmVzcyBcbiAgY2hlY2tJZkVtcHR5KG1vbmV5LnByaWNlLCAnYW55IG1vbmV5Jyk7XG5cbiAgcmV0dXJuIHsgcHJpY2U6IG1vbmV5LnByaWNlIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZkVtcHR5KGVsZW1lbnQsIG5hbWVPZkVsZW1lbnRGb3JFbXB0eU1lc3NhZ2UpIHtcbiAgaWYgKGAke2VsZW1lbnR9YCA9PSAnTmFOJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgeW91IGRpZG4ndCBmaWxsICR7bmFtZU9mRWxlbWVudEZvckVtcHR5TWVzc2FnZX1gKTtcbiAgfVxuICBlbHNlIGlmICghYCR7ZWxlbWVudH1gKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgZGlkbid0IGZpbGwgJHtuYW1lT2ZFbGVtZW50Rm9yRW1wdHlNZXNzYWdlfWApO1xuICB9XG59XG5cblxuXG5mdW5jdGlvbiBtYWtlV2Vla3NPck1vbnRoc1ZhbGlkKGZvb2QpIHtcbiAgaWYgKHdpbmRvdy53b3JraW5nV2l0aEZvb2QpIHtcblxuICAgIGxldCBpdGVtID0gY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF07XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdlZWsgb3IgdGhlIG1vbnRoIGlzIGZhbHNlXG4gICAgbGV0IHdlZWtFcXVhbCA9IGZhbHNlO1xuICAgIGxldCBtb250aEVxdWFsID0gZmFsc2U7XG4gICAgaWYgKGl0ZW0ud2Vla0Ftb3VudCA9PSBmb29kLndlZWtBbW91bnQpIHtcbiAgICAgIHdlZWtFcXVhbCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpdGVtLm1vbnRoQW1vdW50ID09IGZvb2QubW9udGhBbW91bnQpIHtcbiAgICAgIG1vbnRoRXF1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGNoYW5nZSB0aGUgb3RoZXIgdmFsdWUgaWYgb25lIG9mIHRob3NlIGlzIGZhbHNlIGJ1dCB0aGUgb3RoZXIgb25lIGlzIHRydWVcbiAgICBpZiAod2Vla0VxdWFsID09IHRydWUgJiYgbW9udGhFcXVhbCA9PSBmYWxzZSkge1xuICAgICAgZm9vZC53ZWVrQW1vdW50ID0gcGFyc2VJbnQoZm9vZC5tb250aEFtb3VudCAvIDQpXG4gICAgfVxuICAgIGVsc2UgaWYgKHdlZWtFcXVhbCA9PSBmYWxzZSAmJiBtb250aEVxdWFsID09IHRydWUpIHtcbiAgICAgIGZvb2QubW9udGhBbW91bnQgPSBwYXJzZUludChmb29kLndlZWtBbW91bnQgKiA0KVxuICAgIH1cblxuICAgIHJldHVybiB7IG5hbWU6IGZvb2QubmFtZSwgcHJpY2U6IGZvb2QucHJpY2UsIGFtb3VudFBlclByaWNlOiBmb29kLmFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXk6IGZvb2QuYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50OiBmb29kLndlZWtBbW91bnQsIG1vbnRoQW1vdW50OiBmb29kLm1vbnRoQW1vdW50IH1cblxuXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZvb2Q7XG4gIH1cbn1cblxuXG5cblxuXG5mdW5jdGlvbiByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQUZvb2QoZm9vZCkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IEZvb2QoZm9vZC5uYW1lLCBmb29kLnByaWNlLCBmb29kLmFtb3VudFBlclByaWNlLCBmb29kLmFtb3VudFBlckRheSwgZm9vZC53ZWVrQW1vdW50LCBmb29kLm1vbnRoQW1vdW50KVxufVxuXG5mdW5jdGlvbiByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQVByb2R1Y3QocHJvZHVjdCkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IFByb2R1Y3QocHJvZHVjdC5uYW1lLCBwcm9kdWN0LnByaWNlKVxufVxuXG5cbmZ1bmN0aW9uIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNNb25leShtb25leSkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IE1vbmV5KG1vbmV5LnByaWNlKVxufVxuXG5cblxuXG5mdW5jdGlvbiBhcHBseUNoYW5nZXNGb3JMaXN0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgY3VycmVudExpc3QubmFtZSA9IG5hbWU7XG4gIGRpc3BsYXlMaXN0KClcbiAgY2xvc2VQb3BVcCgpXG59XG5cblxuIiwiaW1wb3J0IHsgZGlzcGxheUxpc3R9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cbmNvbnN0IGNoYW5nZUNvbG9yQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXJ0aWNsZTpmaXJzdC1vZi10eXBlIGJ1dHRvbjpmaXJzdC1vZi10eXBlJyk7XG5cbmNoYW5nZUNvbG9yQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkNvbG9yV2luZG93KVxuZnVuY3Rpb24gb3BlbkNvbG9yV2luZG93KCkge1xuICBsZXQgY29sb3JXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JQb3BVcCcpO1xuICBjb2xvcldpbmRvdy5zaG93TW9kYWwoKVxuICBmb3IgKGxldCBjb2xvclBpY2tlciBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYCkpIHtcbiAgICBjb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVDb2xvcnMpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29sb3JzKCkge1xuICB3aW5kb3cuY29sb3IuZm9vZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVswXS52YWx1ZVxuICB3aW5kb3cuY29sb3IucHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVsxXS52YWx1ZVxuICB3aW5kb3cuY29sb3IubW9uZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMl0udmFsdWVcbiAgZGlzcGxheUxpc3QoKVxufVxuXG5cbiIsImltcG9ydCB7IGdlbmVyYXRlQ29udGVudEZvcldpbmRvdywgZ2VuZXJhdGVDb250ZW50Rm9yTGlzdFdpbmRvdyB9IGZyb20gJy4vZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcyc7XG5cblxuY29uc3QgZWRpdEN1cnJlbnRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RDb250YWluZXIgZGl2IGJ1dHRvbicpO1xuY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbicpO1xuY29uc3QgYWRkTmV3TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGJ1dHRvbjpudGgtb2YtdHlwZSgyKScpO1xuY29uc3QgY3VycmVuY3lCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZUNvbnRhaW5lciBidXR0b24nKTtcblxuXG5jb25zdCBhZGROZXdMaXN0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZE5ld0xpc3RQb3BVcCcpO1xuY29uc3QgZWRpdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0UG9wVXAnKTtcbmNvbnN0IGN1cnJlbmN5RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbmN5UG9wVXAnKTtcblxuXG5cbmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUNvbnRlbnRBbmRPcGVuV2luZG93KTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvdygpIHtcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3coKVxuICAgIG9wZW5XaW5kb3coZWRpdERpYWxvZylcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZWRpdEN1cnJlbnRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvd0Zvckxpc3QpXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRBbmRPcGVuV2luZG93Rm9yTGlzdCgpIHtcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JMaXN0V2luZG93KClcbiAgICBvcGVuV2luZG93KGVkaXREaWFsb2cpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cblxuYWRkTmV3TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5XaW5kb3coYWRkTmV3TGlzdERpYWxvZykpO1xuY3VycmVuY3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuV2luZG93KGN1cnJlbmN5RGlhbG9nKSk7XG5cbmZ1bmN0aW9uIG9wZW5XaW5kb3coZGlhbG9nKSB7XG4gIGRpYWxvZy5zaG93TW9kYWwoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvQnV0dG9ucygpIHtcbiAgZm9yIChsZXQgY2xvc2VCdG4gb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb3NlQnRuJykpIHtcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wVXApXG4gIH1cbn1cbmFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMoKVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQb3BVcCgpIHtcbiAgZm9yIChsZXQgZGlhbG9nIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpYWxvZycpKSB7XG4gICAgaWYgKGRpYWxvZy5vcGVuKSB7XG4gICAgICBkaWFsb2cuY2xvc2UoKVxuICAgIH1cbiAgfVxufVxuIiwiY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcbmNvbnN0IGRhcmtNb2RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGJ1dHRvbicpXG5kYXJrTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvRGFya01vZGUpXG5cbmNvbnN0IGlzRGFya01vZGVFbmFibGVkID0gbWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXNcbmlmIChpc0RhcmtNb2RlRW5hYmxlZCkge1xuICBzd2l0Y2hUb0RhcmtNb2RlKClcblxuXG59XG5cblxuXG5cbmZ1bmN0aW9uIHN3aXRjaFRvRGFya01vZGUoKSB7XG4gIGh0bWwuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpXG4gIGlmIChodG1sLmNsYXNzTmFtZSA9PSAnZGFyaycpIHtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pbm5lclRleHQgPSAnbGlnaHQgbW9kZSc7XG4gIH1cbiAgZWxzZSB7XG4gICAgZGFya01vZGVCdXR0b24uaW5uZXJUZXh0ID0gJ2RhcmsgbW9kZSc7XG4gIH1cbn1cblxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZWxlY3RlZHtcbmJvcmRlci1yYWRpdXM6NXB4O1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xucGFkZGluZzo1cHg7XG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9jYWxjdWxhdGlvblR5cGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsaUJBQWlCO0FBQ2pCLDhCQUE4QjtBQUM5QixXQUFXOztBQUVYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWxlY3RlZHtcXG5ib3JkZXItcmFkaXVzOjVweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxucGFkZGluZzo1cHg7XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3QuZGFya3tcbi0tYmxhY2s6d2hpdGU7XG4tLXdoaXRlOmJsYWNrO1xuLS1ncmVlbjojMDEyMTIwO1xuLS15ZWxsb3c6ICNFRUVFOUI7XG4tLWxpZ2h0WWVsbG93OiAjRjVCQjAwO1xuLS1yZWQ6I2RjMTQzYztcbi0tbGlnaHRSZWQ6I0VENjQ2NDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9kYXJrbW9kZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxhQUFhO0FBQ2IsYUFBYTtBQUNiLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYixrQkFBa0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3QuZGFya3tcXG4tLWJsYWNrOndoaXRlO1xcbi0td2hpdGU6YmxhY2s7XFxuLS1ncmVlbjojMDEyMTIwO1xcbi0teWVsbG93OiAjRUVFRTlCO1xcbi0tbGlnaHRZZWxsb3c6ICNGNUJCMDA7XFxuLS1yZWQ6I2RjMTQzYztcXG4tLWxpZ2h0UmVkOiNFRDY0NjQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhKG1pbi13aWR0aDo1MDBweCl7XG5hcnRpY2xlIGZvcm0gZGl2e1xuZmxleC1kaXJlY3Rpb246cm93O1xufX1cblxuXG5AbWVkaWEobWluLXdpZHRoOjkwMHB4KXtcbmhlYWRlcntcbmdhcDo0cHg7XG5cbiAgfVxuXG5oZWFkZXIgc3BhbntcbmRpc3BsYXk6aW5saW5lO1xuZm9udC1zaXplOjIuMnZ3O1xuICB9XG5cbm1haW57XG5oZWlnaHQ6OTB2aDtcbm1pbi1oZWlnaHQ6IDU1MHB4O1xuZ3JpZC10ZW1wbGF0ZTonZXhwZW5zZVR5cGUgZXhwZW5zZUNvbnRlbnQnIDAuOWZyXG4gICAgICAgICAgICAgICd0eXBlT2ZDYWxjdWxhdGlvbiBleHBlbnNlQ29udGVudCcgMC45ZnIgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICdzaG93TGlzdCBleHBlbnNlQ29udGVudCcgMWZyXG4gICAgICAgICAgICAgICdzaG93TGlzdCByZXN1bHRDb250ZW50JyAxZnIgLyAxZnIgMWZyXG59XG5cblxuICAvKiBvbiB0aGUgbGVmdCAqL1xubWFpbiBhcnRpY2xlOmZpcnN0LW9mLXR5cGV7XG5ncmlkLWFyZWE6IGV4cGVuc2VUeXBlO1xufVxuI3R5cGVDb250YWluZXJ7XG5ncmlkLWFyZWE6dHlwZU9mQ2FsY3VsYXRpb247XG59XG4jbGlzdENvbnRhaW5lcntcbmdyaWQtYXJlYTpzaG93TGlzdDtcbn1cblxuLyogb24gdGhlIHJpZ2h0ICovXG5cbiNleHBlbnNlQ29udGVudHtcbmdyaWQtYXJlYTpleHBlbnNlQ29udGVudDtcbn1cbiNyZXN1bHRDb250ZW50e1xuZ3JpZC1hcmVhOnJlc3VsdENvbnRlbnQ7XG59XG5cblxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL2Rlc2t0b3BTdXBwb3J0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLENBQUM7OztBQUdEO0FBQ0E7QUFDQSxPQUFPOztFQUVMOztBQUVGO0FBQ0EsY0FBYztBQUNkLGVBQWU7RUFDYjs7QUFFRjtBQUNBLFdBQVc7QUFDWCxpQkFBaUI7QUFDakI7Ozs7QUFJQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7OztBQUdBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYShtaW4td2lkdGg6NTAwcHgpe1xcbmFydGljbGUgZm9ybSBkaXZ7XFxuZmxleC1kaXJlY3Rpb246cm93O1xcbn19XFxuXFxuXFxuQG1lZGlhKG1pbi13aWR0aDo5MDBweCl7XFxuaGVhZGVye1xcbmdhcDo0cHg7XFxuXFxuICB9XFxuXFxuaGVhZGVyIHNwYW57XFxuZGlzcGxheTppbmxpbmU7XFxuZm9udC1zaXplOjIuMnZ3O1xcbiAgfVxcblxcbm1haW57XFxuaGVpZ2h0Ojkwdmg7XFxubWluLWhlaWdodDogNTUwcHg7XFxuZ3JpZC10ZW1wbGF0ZTonZXhwZW5zZVR5cGUgZXhwZW5zZUNvbnRlbnQnIDAuOWZyXFxuICAgICAgICAgICAgICAndHlwZU9mQ2FsY3VsYXRpb24gZXhwZW5zZUNvbnRlbnQnIDAuOWZyICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgJ3Nob3dMaXN0IGV4cGVuc2VDb250ZW50JyAxZnJcXG4gICAgICAgICAgICAgICdzaG93TGlzdCByZXN1bHRDb250ZW50JyAxZnIgLyAxZnIgMWZyXFxufVxcblxcblxcbiAgLyogb24gdGhlIGxlZnQgKi9cXG5tYWluIGFydGljbGU6Zmlyc3Qtb2YtdHlwZXtcXG5ncmlkLWFyZWE6IGV4cGVuc2VUeXBlO1xcbn1cXG4jdHlwZUNvbnRhaW5lcntcXG5ncmlkLWFyZWE6dHlwZU9mQ2FsY3VsYXRpb247XFxufVxcbiNsaXN0Q29udGFpbmVye1xcbmdyaWQtYXJlYTpzaG93TGlzdDtcXG59XFxuXFxuLyogb24gdGhlIHJpZ2h0ICovXFxuXFxuI2V4cGVuc2VDb250ZW50e1xcbmdyaWQtYXJlYTpleHBlbnNlQ29udGVudDtcXG59XFxuI3Jlc3VsdENvbnRlbnR7XFxuZ3JpZC1hcmVhOnJlc3VsdENvbnRlbnQ7XFxufVxcblxcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNsaXN0e1xuYm9yZGVyLXJhZGl1czoxMnB4O1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xud2lkdGg6OTAlO1xuaGVpZ2h0OjkwJTtcbm92ZXJmbG93OnNjcm9sbDtcbn1cblxuXG5saXtcbmxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbiNsaXN0IGxpLnNlbGVjdGVkSXRlbXtcbm91dGxpbmU6IDJweCBzb2xpZCBvcmFuZ2U7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvbGlzdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCxVQUFVO0FBQ1YsZUFBZTtBQUNmOzs7QUFHQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbGlzdHtcXG5ib3JkZXItcmFkaXVzOjEycHg7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbndpZHRoOjkwJTtcXG5oZWlnaHQ6OTAlO1xcbm92ZXJmbG93OnNjcm9sbDtcXG59XFxuXFxuXFxubGl7XFxubGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI2xpc3QgbGkuc2VsZWN0ZWRJdGVte1xcbm91dGxpbmU6IDJweCBzb2xpZCBvcmFuZ2U7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9ne1xudGV4dC1hbGlnbjpjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xucG9zaXRpb246Zml4ZWQ7XG50b3A6NTAlO1xubGVmdDo1MCU7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuei1pbmRleDoyO1xucGFkZGluZzoxLjJ2dztcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuZGlhbG9nID4gKntcbmRpc3BsYXk6YmxvY2s7XG5tYXJnaW4tbGVmdDphdXRvO1xubWFyZ2luLXJpZ2h0OmF1dG87XG5tYXJnaW4tdG9wOjEwcHg7XG5cbn1cbiAgXG5kaWFsb2c6OmJhY2tkcm9we1xucG9zaXRpb246Zml4ZWQ7XG5iYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgjMjE1QTU5QUEsYmxhY2spIDtcbmJhY2tncm91bmQtc2l6ZTpjb3Zlcjtcbm9wYWNpdHk6MC43O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsT0FBTztBQUNQLFFBQVE7QUFDUiwrQkFBK0I7QUFDL0IsU0FBUztBQUNULGFBQWE7QUFDYixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixlQUFlOztBQUVmOztBQUVBO0FBQ0EsY0FBYztBQUNkLGtEQUFrRDtBQUNsRCxxQkFBcUI7QUFDckIsV0FBVztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpYWxvZ3tcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG5jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucG9zaXRpb246Zml4ZWQ7XFxudG9wOjUwJTtcXG5sZWZ0OjUwJTtcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbnotaW5kZXg6MjtcXG5wYWRkaW5nOjEuMnZ3O1xcbmJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuXFxuZGlhbG9nID4gKntcXG5kaXNwbGF5OmJsb2NrO1xcbm1hcmdpbi1sZWZ0OmF1dG87XFxubWFyZ2luLXJpZ2h0OmF1dG87XFxubWFyZ2luLXRvcDoxMHB4O1xcblxcbn1cXG4gIFxcbmRpYWxvZzo6YmFja2Ryb3B7XFxucG9zaXRpb246Zml4ZWQ7XFxuYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoIzIxNUE1OUFBLGJsYWNrKSA7XFxuYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbm9wYWNpdHk6MC43O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIG1vYmlsZSBmaXJzdCAzMDB4NDQwICovXG5cbip7XG5wYWRkaW5nOiAwO1xubWFyZ2luOjA7XG5ib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG5cbjpyb290e1xuXG4vKiBjb2xvciBzZWN0aW9uICovXG4tLWJsYWNrOiBibGFjaztcbi0td2hpdGU6IHdoaXRlO1xuLS1ncmVlbjogIzA5RkY5OTtcbi0teWVsbG93OiAjRjVCQjAwO1xuLS1saWdodFllbGxvdzogI0VFRUU5Qjtcbi0tcmVkOiNFRDY0NjQ7XG4tLWxpZ2h0UmVkOiNkYzE0M2M7XG59XG5cbi8qIHJlcGV0aXRpb24gc2VjdGlvbiAqL1xuXG5cblxuaGVhZGVyLCBhcnRpY2xle1xuZGlzcGxheTpmbGV4O1xuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcbmFsaWduLWl0ZW1zOmNlbnRlcjtcbnRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5tYWlue1xuZGlzcGxheTpncmlkO1xufVxuXG4vKiBpbmRpdmlkdWFsIHNlY3Rpb24gKi9cblxuYm9keXtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOiB2YXIoLS1ibGFjayk7XG50cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xudHJhbnNpdGlvbi1kdXJhdGlvbjoycztcbn1cblxuaGVhZGVye1xuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spXG59XG5cbmhlYWRlciBoMXtcbmZvbnQtc2l6ZTptYXgoMXJlbSwzLjh2dyk7XG59XG5oZWFkZXIgc3BhbntcbmRpc3BsYXk6YmxvY2s7XG5mb250LXNpemU6bWF4KDAuN3JlbSwyLjh2dyk7XG59XG5cbmhlYWRlciBidXR0b257XG5oZWlnaHQ6OTAlO1xufVxuXG5tYWlue1xuZ3JpZC10ZW1wbGF0ZTogMTAlIDEwJSAxZnIgMjAwcHggMTAlLyAxZnI7XG5nYXA6MTBweDtcbnBhZGRpbmctdG9wOjVweDtcbnBhZGRpbmctYm90dG9tOjVweDtcbn1cblxuYXJ0aWNsZXtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG4vKiBhbGlnbi1zZWxmOmNlbnRlcjsgKi9cbmp1c3RpZnktc2VsZjpjZW50ZXI7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmdhcDogN3B4O1xucGFkZGluZzogNXB4IDBweDtcbndpZHRoOjk4JTtcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cbmFydGljbGUgZm9ybSBkaXZ7XG5kaXNwbGF5OmZsZXg7XG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xuZ2FwOiA3cHg7XG5cbn1cblxuYnV0dG9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZzogOHB4O1xuYm9yZGVyLXJhZGl1czoxMnB4O1xudHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgY29sb3IgMC43c1xufVxuXG4vKiBlZGl0IGl0ZW0gYnV0dG9uICovXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b257XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xuYm90dG9tOjA7XG5yaWdodDogMDtcbnBvc2l0aW9uOmFic29sdXRlO1xucGFkZGluZzogNXB4O1xuYm9yZGVyLXJhZGl1czozMHB4O1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRSZWQpO1xufVxuXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24ub25TZWxlY3Rpb257XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuY29sb3I6IHZhcigtLXdoaXRlKTtcbmJvcmRlcjoycHggc29saWQgdmFyKC0td2hpdGUpO1xucGFkZGluZzogNnB4O1xuYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24ub25TZWxlY3Rpb246aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodFllbGxvdyk7XG5jb2xvcjp2YXIoLS1ibGFjayk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG59XG5cbmJ1dHRvbjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbmNvbG9yOnZhcigtLXdoaXRlKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbmN1cnNvcjpwb2ludGVyO1xufVxuXG5cblxuc2VsZWN0e1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZzo2cHg7XG59XG5cbmlucHV0W3R5cGU9J3RleHQnXXtcbnBhZGRpbmc6M3B4O1xuYm9yZGVyLXJhZGl1czo0cHg7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xuY29sb3I6dmFyKC0tYmxhY2spO1xufVxuXG5pbnB1dFt0eXBlPSd0ZXh0J117XG5vdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbn1cblxuaW5wdXRbdHlwZT0ndGV4dCddOmludmFsaWQ6aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXJlZClcbn1cblxuaW5wdXRbdHlwZT0ndGV4dCddOnZhbGlkOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbilcbn1cblxuLyogYXJ0aWNsZSBzZWN0aW9uICovXG5cbiNsaXN0Q29udGFpbmVye1xuZ3JpZC1yb3ctc3RhcnQ6LTM7XG5ncmlkLXJvdy1lbmQ6LTM7XG5wb3NpdGlvbjogcmVsYXRpdmVcbn1cbiNsaXN0Q29udGFpbmVye1xub3ZlcmZsb3c6c2Nyb2xsO1xud2lkdGg6OTglO1xubWF4LWhlaWdodDo5OCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHlCQUF5Qjs7QUFFekI7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCOztBQUVBLHVCQUF1Qjs7OztBQUl2QjtBQUNBLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0EsOEJBQThCO0FBQzlCLG1CQUFtQjtBQUNuQiwyQ0FBMkM7QUFDM0Msc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLHlDQUF5QztBQUN6QyxRQUFRO0FBQ1IsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLFFBQVE7QUFDUixnQkFBZ0I7QUFDaEIsU0FBUztBQUNULGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLFFBQVE7O0FBRVI7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0EsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUixRQUFRO0FBQ1IsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQyxrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsY0FBYztBQUNkOzs7O0FBSUE7QUFDQSw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixTQUFTO0FBQ1QsY0FBYztBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIG1vYmlsZSBmaXJzdCAzMDB4NDQwICovXFxuXFxuKntcXG5wYWRkaW5nOiAwO1xcbm1hcmdpbjowO1xcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuXFxuLyogY29sb3Igc2VjdGlvbiAqL1xcbi0tYmxhY2s6IGJsYWNrO1xcbi0td2hpdGU6IHdoaXRlO1xcbi0tZ3JlZW46ICMwOUZGOTk7XFxuLS15ZWxsb3c6ICNGNUJCMDA7XFxuLS1saWdodFllbGxvdzogI0VFRUU5QjtcXG4tLXJlZDojRUQ2NDY0O1xcbi0tbGlnaHRSZWQ6I2RjMTQzYztcXG59XFxuXFxuLyogcmVwZXRpdGlvbiBzZWN0aW9uICovXFxuXFxuXFxuXFxuaGVhZGVyLCBhcnRpY2xle1xcbmRpc3BsYXk6ZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxubWFpbntcXG5kaXNwbGF5OmdyaWQ7XFxufVxcblxcbi8qIGluZGl2aWR1YWwgc2VjdGlvbiAqL1xcblxcbmJvZHl7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbmNvbG9yOiB2YXIoLS1ibGFjayk7XFxudHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvcjtcXG50cmFuc2l0aW9uLWR1cmF0aW9uOjJzO1xcbn1cXG5cXG5oZWFkZXJ7XFxuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spXFxufVxcblxcbmhlYWRlciBoMXtcXG5mb250LXNpemU6bWF4KDFyZW0sMy44dncpO1xcbn1cXG5oZWFkZXIgc3BhbntcXG5kaXNwbGF5OmJsb2NrO1xcbmZvbnQtc2l6ZTptYXgoMC43cmVtLDIuOHZ3KTtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbntcXG5oZWlnaHQ6OTAlO1xcbn1cXG5cXG5tYWlue1xcbmdyaWQtdGVtcGxhdGU6IDEwJSAxMCUgMWZyIDIwMHB4IDEwJS8gMWZyO1xcbmdhcDoxMHB4O1xcbnBhZGRpbmctdG9wOjVweDtcXG5wYWRkaW5nLWJvdHRvbTo1cHg7XFxufVxcblxcbmFydGljbGV7XFxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbi8qIGFsaWduLXNlbGY6Y2VudGVyOyAqL1xcbmp1c3RpZnktc2VsZjpjZW50ZXI7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuZ2FwOiA3cHg7XFxucGFkZGluZzogNXB4IDBweDtcXG53aWR0aDo5OCU7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5hcnRpY2xlIGZvcm0gZGl2e1xcbmRpc3BsYXk6ZmxleDtcXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxuZ2FwOiA3cHg7XFxuXFxufVxcblxcbmJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOiA4cHg7XFxuYm9yZGVyLXJhZGl1czoxMnB4O1xcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yIDAuN3NcXG59XFxuXFxuLyogZWRpdCBpdGVtIGJ1dHRvbiAqL1xcbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbmJvdHRvbTowO1xcbnJpZ2h0OiAwO1xcbnBvc2l0aW9uOmFic29sdXRlO1xcbnBhZGRpbmc6IDVweDtcXG5ib3JkZXItcmFkaXVzOjMwcHg7XFxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9ue1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuY29sb3I6IHZhcigtLXdoaXRlKTtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5wYWRkaW5nOiA2cHg7XFxuYm9yZGVyLXJhZGl1czoxMHB4O1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24ub25TZWxlY3Rpb246aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRZZWxsb3cpO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuY29sb3I6dmFyKC0td2hpdGUpO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5jdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuc2VsZWN0e1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbnBhZGRpbmc6NnB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J117XFxucGFkZGluZzozcHg7XFxuYm9yZGVyLXJhZGl1czo0cHg7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J117XFxub3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J106aW52YWxpZDpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXJlZClcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddOnZhbGlkOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tZ3JlZW4pXFxufVxcblxcbi8qIGFydGljbGUgc2VjdGlvbiAqL1xcblxcbiNsaXN0Q29udGFpbmVye1xcbmdyaWQtcm93LXN0YXJ0Oi0zO1xcbmdyaWQtcm93LWVuZDotMztcXG5wb3NpdGlvbjogcmVsYXRpdmVcXG59XFxuI2xpc3RDb250YWluZXJ7XFxub3ZlcmZsb3c6c2Nyb2xsO1xcbndpZHRoOjk4JTtcXG5tYXgtaGVpZ2h0Ojk4JTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FsY3VsYXRpb25UeXBlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2FsY3VsYXRpb25UeXBlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrbW9kZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rhcmttb2RlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXNrdG9wU3VwcG9ydC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc2t0b3BTdXBwb3J0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuLy8gaW1wb3J0IHN0eWxlc1xuaW1wb3J0ICcuL3N0eWxpbmcvc3R5bGUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvZGFya21vZGUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvZGFya21vZGUuanMnXG5pbXBvcnQgJy4vc3R5bGluZy9jYWxjdWxhdGlvblR5cGUuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvbGlzdC5jc3MnXG5pbXBvcnQgJy4vc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3MnXG5pbXBvcnQgJy4vc3R5bGluZy9wb3B1cC5jc3MnXG5cblxuLy8gaW1wb3J0IGZ1bmN0aW9uYWxpdHlcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2xpc3QvbGlzdFN0cnVjdHVyZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9saXN0L2N1cnJlbnRMaXN0LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2xpc3QvYWRkSXRlbXNUb0xpc3QuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvd2luZG93L29wZW5XaW5kb3cuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvd2luZG93L2FkZE5ld0xpc3QuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvd2luZG93L29wZW5DaGFuZ2VDb2xvcldpbmRvdy5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS93aW5kb3cvY3VycmVuY3lXaW5kb3cuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9leHBlbnNlVHlwZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS90eXBlQ2FsY3VsYXRvci5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9jYWxjdWxhdGUvY2FsY3VsYXRlLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2ZpbGUvZG93bmxvYWRGaWxlLmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2ZpbGUvdXBsb2FkRmlsZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9pbnB1dENoZWNrLmpzJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==