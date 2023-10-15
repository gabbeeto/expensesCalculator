/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./input/functionality/calculate/calculate.js":
/*!****************************************************!*\
  !*** ./input/functionality/calculate/calculate.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculate: () => (/* binding */ calculate)
/* harmony export */ });


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
      case 'regProduct':
        return accumulator + calculatedRegProduct(currentItem);
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
  else if (typeOfCalculation == 'weekly') {
    return currentFood.weekAmount
  }
  else if (typeOfCalculation == 'daily') {
    return currentFood.weekAmount / 7;
  }
  else{
    return currentFood.monthAmount * 12;
  }
}


function calculatedRegProduct(currentRegularProduct) {
  let newPrice = currentRegularProduct.price * currentRegularProduct.amountOfRegProducts
  if (typeOfCalculation == 'yearly') {
    return newPrice * currentRegularProduct.amountPerYear
  }
  else if (typeOfCalculation == 'weekly') {
    return newPrice / 4;
  }
  else if(typeOfCalculation == 'daily'){
    return newPrice / 31;
  }
  else {
    return newPrice;
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
      generateFood();
      break;
    case 'product':
      generateProduct();
      break;
    case 'regProduct':
      generateRegProduct();
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

function generateRegProduct() {
  expenseContentContainer.innerHTML = ` <p>name:</p>
<input type="text" id="name" required>
<p>price:</p>
<input type="text" inputmode='numeric' id="price" required>
<p>amount of products:</p>
<input type="text" inputmode='numeric' id="amountOfRegProducts" value='1' required>
<p>amount of months per year:</p>
<input type="text" inputmode='numeric' id="amountPerYear" value='12' required>
<button type='button' id='apply'>apply</button>
`
  document.getElementById('apply').addEventListener('click', _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_0__.addRegProductToTheList)

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



let container = document.getElementById('list');

let listSelect = document.querySelector('#selectList')

let displayIsNotRunBefore = true;

function displayList() {
  restartEverything();
  currentList.array.forEach(appendItems)
  list.forEach(appendLists)
  ;(0,_list_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)()
  const calculateSpan = document.querySelector(`#resultContent span`);
  calculateSpan.innerText = '';
  if (displayIsNotRunBefore) {
    window.switchToDarkMode = function() {
      document.querySelector('html').classList.toggle('dark')
      if (document.querySelector('html').className == 'dark') {
        document.querySelector('header button').innerText = 'light mode';
      }
      else {
        document.querySelector('header button').innerText = 'dark mode';
      }
      displayList()
    }
    displayIsNotRunBefore = false;
  }
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
  if (document.querySelector('html').className == 'dark') {
    switch (item.type) {
      case 'food':
        return color.dark.food;
      case 'product':
        return color.dark.product;
      case 'regProduct':
        return color.dark.regProduct;
      case 'money':
        return color.dark.money;
    }
  }
  else {

    switch (item.type) {
      case 'food':
        return color.light.food;
      case 'product':
        return color.light.product;
      case 'regProduct':
        return color.light.regProduct;
      case 'money':
        return color.light.money;
    }

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
/* harmony export */   removeClasses: () => (/* binding */ removeClasses),
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
let listAndColor = [window.list, window.color]
let fileToDownload = new File([JSON.stringify(listAndColor)], `list-${new Date().toISOString()}`,{type:'application/json'});
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

    let listAndColor = JSON.parse(event.target.result)
    window.list = listAndColor[0];
    window.color = listAndColor[1];
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

/***/ "./input/functionality/keyboardSupport/main.js":
/*!*****************************************************!*\
  !*** ./input/functionality/keyboardSupport/main.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calculate_calculate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../calculate/calculate */ "./input/functionality/calculate/calculate.js");
/* harmony import */ var _display_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/error */ "./input/functionality/display/error.js");
/* harmony import */ var _window_openWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../window/openWindow */ "./input/functionality/window/openWindow.js");
/* harmony import */ var _editItemOrList_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../editItemOrList/selection */ "./input/functionality/editItemOrList/selection.js");





document.addEventListener('keyup', escape)

function escape(event) {
  try {
    checkDialogs()
    if (event.key == "Escape") {
      selectedIndex = '';
      (0,_editItemOrList_selection__WEBPACK_IMPORTED_MODULE_3__.removeClasses)();
    }
  }
  catch (error) {
    console.warn(error);
  }
}


function checkDialogs() {
  for (let dialog of document.querySelectorAll('dialog')) {
    if (dialog.open) {
      throw new Error(`dialog with id:'${dialog.id}' is open!`);
    }
  }
}




document.addEventListener('keypress', editItem)

function editItem(event) {
  console.log(event)
  try {
    checkDialogs()
    detectKeyAndPerformAction(event.key)
  }
  catch (error) {
    console.warn(error)
  }
}




function detectKeyAndPerformAction(key) {
  console.log(key)
  try {
    switch (key) {
      case "Enter":
        checkSelectedIndexToPerformAction();
        break;
      case "j":
      case "J":
        checkTypeOfCalculatorAndMoveUp()
        break;
      case 'k':
      case 'K':
        checkTypeOfCalculatorAndMoveDown()
        break;
    }
  }
  catch (error) {
    (0,_display_error__WEBPACK_IMPORTED_MODULE_1__.displayError)(error)
  }
}

function checkSelectedIndexToPerformAction() {
  if (window.selectedIndex) {
    (0,_window_openWindow__WEBPACK_IMPORTED_MODULE_2__.generateContentAndOpenWindow)()
  }
  else {
    (0,_calculate_calculate__WEBPACK_IMPORTED_MODULE_0__.calculate)()
  }

}

function checkTypeOfCalculatorAndMoveUp() {
  let selectElement = document.querySelector('#typeContainer select')
  switch (selectElement.value) {
    case 'yearly':
      break;
    case 'monthly':
      selectElement.value = 'yearly';
      break;
    case 'weekly':
      selectElement.value = 'monthly';
      break;
    case 'daily':
      selectElement.value = 'weekly';
      break;
  }
}


function checkTypeOfCalculatorAndMoveDown() {
  let selectElement = document.querySelector('#typeContainer select')
  switch (selectElement.value) {
    case 'yearly':
      selectElement.value = 'monthly';
      break;
    case 'monthly':
      selectElement.value = 'weekly';
      break;
    case 'weekly':
      selectElement.value = 'daily';
      break;
  }
}


/***/ }),

/***/ "./input/functionality/keyboardSupport/window.js":
/*!*******************************************************!*\
  !*** ./input/functionality/keyboardSupport/window.js ***!
  \*******************************************************/
/***/ (() => {



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
/* harmony export */   addRegProductToTheList: () => (/* binding */ addRegProductToTheList),
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


function addRegProductToTheList() {
  let nameValue = document.getElementById('name').value;
  try {
    let product = {
      name: nameValue,
      price: getNumberOf('price'),
      amountPerYear: getNumberOf('amountPerYear'),
      amountOfRegProducts: getNumberOf('amountPerYear'),
    }
    ;(0,_window_generateContentForEditWindow_js__WEBPACK_IMPORTED_MODULE_1__.checkIfRegProductIsEmpty)(product)
    ;(0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.pushToArrayAndDisplayList)((0,_listStructure_js__WEBPACK_IMPORTED_MODULE_0__.RegProduct)(product.name, product.price,product.amountPerYear,product.amountOfRegProducts))
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
/* harmony export */   RegProduct: () => (/* binding */ RegProduct),
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
    dark: {
      food: '#fccb06',
      product: '#b1ddf1',
      regProduct: '#ca2c92',
      money: '#50c878',
    },
    light: {
      food: '#ffe900',
      product: '#214D5C',
      regProduct: '#c8a2c8',
      money: '#333736',
    }
  }
}

  // class section
function Money(price, name = price, type = 'money') {
    return { price, name, type }
  }



  function Product(name, price, type = 'product') {
    return { name, price, type }
  }

  function RegProduct(name, price, amountPerYear, amountOfRegProducts, type = 'regProduct') {
    return { name, price, amountPerYear, amountOfRegProducts, type }
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

/***/ "./input/functionality/window/delete.js":
/*!**********************************************!*\
  !*** ./input/functionality/window/delete.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProduct: () => (/* binding */ deleteProduct)
/* harmony export */ });
/* harmony import */ var _display_itemsOrLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/itemsOrLists */ "./input/functionality/display/itemsOrLists.js");
/* harmony import */ var _openWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openWindow */ "./input/functionality/window/openWindow.js");



function deleteProduct() {
  let indexForCurrentItem = Number(selectedIndex);
  let currentListArray = currentList.array;
  currentListArray.splice(indexForCurrentItem, 1);
  (0,_display_itemsOrLists__WEBPACK_IMPORTED_MODULE_0__.displayList)();
  (0,_openWindow__WEBPACK_IMPORTED_MODULE_1__.closePopUp)();
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
/* harmony export */   checkIfRegProductIsEmpty: () => (/* binding */ checkIfRegProductIsEmpty),
/* harmony export */   generateContentForListWindow: () => (/* binding */ generateContentForListWindow),
/* harmony export */   generateContentForWindow: () => (/* binding */ generateContentForWindow)
/* harmony export */ });
/* harmony import */ var _openWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openWindow.js */ "./input/functionality/window/openWindow.js");
/* harmony import */ var _list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../list/addItemsToList.js */ "./input/functionality/list/addItemsToList.js");
/* harmony import */ var _list_listStructure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../list/listStructure.js */ "./input/functionality/list/listStructure.js");
/* harmony import */ var _display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../display/itemsOrLists.js */ "./input/functionality/display/itemsOrLists.js");
/* harmony import */ var _display_error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../display/error.js */ "./input/functionality/display/error.js");
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete.js */ "./input/functionality/window/delete.js");







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
  deleteButton.addEventListener('click', _delete_js__WEBPACK_IMPORTED_MODULE_5__.deleteProduct)
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


function getValuesForRegProduct(product) {
  let name = product.name;
  let price = (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__.transformToNumber)(product.price);
  let amountPerYear = (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__.transformToNumber)(product.amountPerYear);
  let amountOfRegProducts = (0,_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_1__.transformToNumber)(product.amountOfRegProducts);
  return { name, price, amountPerYear, amountOfRegProducts }
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


function checkIfRegProductIsEmpty(product) {
  // check emptyness 
  checkIfEmpty(product.name, 'the name of the product');
  checkIfEmpty(product.price, 'the price of the product');
  checkIfEmpty(product.amountPerYear, 'the amount of months per year of the product');
  checkIfEmpty(product.amountOfRegProducts, 'the amount of product');

  return { name: product.name, price: product.price, amountPerYear: product.amountOfRegProducts, amountOfRegProducts: product.amountOfRegProducts }
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

function reassingValueFromCurrentIndexIfItsARegProduct(product) {
  let { name, price, amountPerYear, amountOfRegProducts } = product;
  currentList.array[selectedIndex] = (0,_list_listStructure_js__WEBPACK_IMPORTED_MODULE_2__.RegProduct)(name, price, amountPerYear, amountOfRegProducts)
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

  updateValuesFromColorObject()
  let colorWindow = document.getElementById('colorPopUp');
  colorWindow.showModal()

  for (let colorPicker of document.querySelectorAll(`input[type='color']`)) {
    colorPicker.addEventListener('change', updateColors)
  }
}

function updateColors() {
  if(document.querySelector('html').className == 'dark'){
  window.color.dark.food = document.querySelectorAll(`input[type='color']`)[0].value
  window.color.dark.product = document.querySelectorAll(`input[type='color']`)[1].value
  window.color.dark.regProduct = document.querySelectorAll(`input[type='color']`)[2].value
  window.color.dark.money = document.querySelectorAll(`input[type='color']`)[3].value
  }
  else{
  window.color.light.food = document.querySelectorAll(`input[type='color']`)[0].value
  window.color.light.product = document.querySelectorAll(`input[type='color']`)[1].value
  window.color.light.regProduct = document.querySelectorAll(`input[type='color']`)[2].value
  window.color.light.money = document.querySelectorAll(`input[type='color']`)[3].value
  }
  (0,_display_itemsOrLists_js__WEBPACK_IMPORTED_MODULE_0__.displayList)()
}



function updateValuesFromColorObject() {
  if (document.querySelector('html').className == 'dark') {
    document.querySelectorAll(`input[type='color']`)[0].value = window.color.dark.food
    document.querySelectorAll(`input[type='color']`)[1].value = window.color.dark.product
    document.querySelectorAll(`input[type='color']`)[2].value = window.color.dark.regProduct
    document.querySelectorAll(`input[type='color']`)[3].value = window.color.dark.money
  }
  else {
    document.querySelectorAll(`input[type='color']`)[0].value = window.color.light.food
    document.querySelectorAll(`input[type='color']`)[1].value = window.color.light.product
    document.querySelectorAll(`input[type='color']`)[2].value = window.color.light.regProduct
    document.querySelectorAll(`input[type='color']`)[3].value = window.color.light.money
  }
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
/* harmony export */   closePopUp: () => (/* binding */ closePopUp),
/* harmony export */   generateContentAndOpenWindow: () => (/* binding */ generateContentAndOpenWindow)
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


window.switchToDarkMode = function() {
  html.classList.toggle('dark')
  if (html.className == 'dark') {
    darkModeButton.innerText = 'light mode';
  }
  else {
    darkModeButton.innerText = 'dark mode';
  }
}



darkModeButton.addEventListener('click', () =>{
  switchToDarkMode();
})

let isDarkModeEnabled = matchMedia('(prefers-color-scheme: dark)').matches
if (isDarkModeEnabled) {
  switchToDarkMode()


}







/***/ }),

/***/ "./input/styling/icon/displayIcon.js":
/*!*******************************************!*\
  !*** ./input/styling/icon/displayIcon.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.png */ "./input/styling/icon/icon.png");


const iconLink = document.head.querySelector('link');
iconLink.href = _icon_png__WEBPACK_IMPORTED_MODULE_0__;


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
overflow-y:scroll;
}


li{
list-style: none;
}

#list li.selectedItem{
outline: 2px solid orange;
}
`, "",{"version":3,"sources":["webpack://./input/styling/list.css"],"names":[],"mappings":"AAAA;AACA,kBAAkB;AAClB,8BAA8B;AAC9B,SAAS;AACT,UAAU;AACV,iBAAiB;AACjB;;;AAGA;AACA,gBAAgB;AAChB;;AAEA;AACA,yBAAyB;AACzB","sourcesContent":["#list{\nborder-radius:12px;\nborder: 2px solid var(--black);\nwidth:90%;\nheight:90%;\noverflow-y:scroll;\n}\n\n\nli{\nlist-style: none;\n}\n\n#list li.selectedItem{\noutline: 2px solid orange;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/oceanicdrift.ttf */ "./input/styling/font/oceanicdrift.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Cyborg Punk.ttf */ "./input/styling/font/Cyborg Punk.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* mobile first 300x440 */


@font-face{
font-family: 'default';
src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face{
font-family: 'button';
src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

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
font-family: 'default';
background-color: var(--white);
color: var(--black);
transition-property:background-color, color;
transition-duration:2s;
}

input[type='file']{
font-family: 'default';
font-size:0.9rem;
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
height:80%;
}

main{
height:150vh;
grid-template: 1fr 1fr 3fr 200px 1fr/ 1fr;
/* height: 450vh; */
/* grid-template: 10% 10% 1fr 200px 10%/ 1fr; */
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
transition: background-color, color 0.7s;
font-family: 'button';
font-size: clamp(0.5rem , 1vw , 1rem);
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
width:98%;
max-height:98%;
}
`, "",{"version":3,"sources":["webpack://./input/styling/style.css"],"names":[],"mappings":"AAAA,yBAAyB;;;AAGzB;AACA,sBAAsB;AACtB,4CAAmC;AACnC;;AAEA;AACA,qBAAqB;AACrB,4CAAmC;AACnC;;AAEA;AACA,UAAU;AACV,QAAQ;AACR,qBAAqB;AACrB;;AAEA;;AAEA,kBAAkB;AAClB,cAAc;AACd,cAAc;AACd,gBAAgB;AAChB,iBAAiB;AACjB,sBAAsB;AACtB,aAAa;AACb,kBAAkB;AAClB;;AAEA,uBAAuB;;;;AAIvB;AACA,YAAY;AACZ,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB;;AAEA;AACA,YAAY;AACZ;;AAEA,uBAAuB;;AAEvB;AACA,sBAAsB;AACtB,8BAA8B;AAC9B,mBAAmB;AACnB,2CAA2C;AAC3C,sBAAsB;AACtB;;AAEA;AACA,sBAAsB;AACtB,gBAAgB;AAChB;;AAEA;AACA;AACA;;AAEA;AACA,yBAAyB;AACzB;AACA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,UAAU;AACV;;AAEA;AACA,YAAY;AACZ,yCAAyC;AACzC,mBAAmB;AACnB,+CAA+C;AAC/C,QAAQ;AACR,eAAe;AACf,kBAAkB;AAClB;;AAEA;AACA,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,uBAAuB;AACvB,mBAAmB;AACnB,6BAA6B;AAC7B,QAAQ;AACR,gBAAgB;AAChB,SAAS;AACT,kBAAkB;AAClB;AACA;AACA,YAAY;AACZ,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,QAAQ;;AAER;;;AAGA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,YAAY;AACZ,kBAAkB;AAClB,wCAAwC;AACxC,qBAAqB;AACrB,qCAAqC;AACrC;;AAEA,qBAAqB;AACrB;AACA,4BAA4B;AAC5B,QAAQ;AACR,QAAQ;AACR,iBAAiB;AACjB,YAAY;AACZ,kBAAkB;AAClB,yBAAyB;AACzB;;AAEA;AACA,iCAAiC;AACjC;;AAEA;AACA,+BAA+B;AAC/B,mBAAmB;AACnB,6BAA6B;AAC7B,YAAY;AACZ,kBAAkB;AAClB;;AAEA;AACA,oCAAoC;AACpC,kBAAkB;AAClB,8BAA8B;AAC9B;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,cAAc;AACd;;;;AAIA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,WAAW;AACX;;AAEA;AACA,WAAW;AACX,iBAAiB;AACjB,6BAA6B;AAC7B,6BAA6B;AAC7B,kBAAkB;AAClB,8BAA8B;AAC9B;;AAEA;AACA,YAAY;AACZ,oBAAoB;;AAEpB;;;AAGA;AACA;AACA;;AAEA;AACA;AACA;;AAEA,oBAAoB;;AAEpB;AACA,iBAAiB;AACjB,eAAe;AACf;AACA;AACA;AACA,SAAS;AACT,cAAc;AACd","sourcesContent":["/* mobile first 300x440 */\n\n\n@font-face{\nfont-family: 'default';\nsrc: url('./font/oceanicdrift.ttf');\n}\n\n@font-face{\nfont-family: 'button';\nsrc: url('./font/Cyborg\\ Punk.ttf');\n}\n\n*{\npadding: 0;\nmargin:0;\nbox-sizing:border-box;\n}\n\n:root{\n\n/* color section */\n--black: black;\n--white: white;\n--green: #09FF99;\n--yellow: #F5BB00;\n--lightYellow: #EEEE9B;\n--red:#ED6464;\n--lightRed:#dc143c;\n}\n\n/* repetition section */\n\n\n\nheader, article{\ndisplay:flex;\njustify-content:center;\nalign-items:center;\ntext-align:center;\n}\n\nmain{\ndisplay:grid;\n}\n\n/* individual section */\n\nbody{\nfont-family: 'default';\nbackground-color: var(--white);\ncolor: var(--black);\ntransition-property:background-color, color;\ntransition-duration:2s;\n}\n\ninput[type='file']{\nfont-family: 'default';\nfont-size:0.9rem;\n}\n\nheader{\nborder-bottom:2px solid var(--black)\n}\n\nheader h1{\nfont-size:max(1rem,3.8vw);\n}\nheader span{\ndisplay:block;\nfont-size:max(0.7rem,2.8vw);\n}\n\nheader button{\nheight:80%;\n}\n\nmain{\nheight:150vh;\ngrid-template: 1fr 1fr 3fr 200px 1fr/ 1fr;\n/* height: 450vh; */\n/* grid-template: 10% 10% 1fr 200px 10%/ 1fr; */\ngap:10px;\npadding-top:5px;\npadding-bottom:5px;\n}\n\narticle{\nflex-direction:column;\njustify-content:center;\nalign-items:center;\n/* align-self:center; */\njustify-self:center;\nborder:2px solid var(--black);\ngap: 7px;\npadding: 5px 0px;\nwidth:98%;\nborder-radius:10px;\n}\narticle form div{\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items:center;\ngap: 7px;\n\n}\n\n\nbutton,input[type='file']::file-selector-button{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding: 8px;\nborder-radius:12px;\ntransition: background-color, color 0.7s;\nfont-family: 'button';\nfont-size: clamp(0.5rem , 1vw , 1rem);\n}\n\n/* edit item button */\n#listContainer div + button{\nbackground-color: var(--red);\nbottom:0;\nright: 0;\nposition:absolute;\npadding: 5px;\nborder-radius:30px;\ntext-transform: uppercase;\n}\n\n#listContainer div + button:hover{\nbackground-color: var(--lightRed);\n}\n\n#listContainer div + button.onSelection{\nbackground-color: var(--yellow);\ncolor: var(--white);\nborder:2px solid var(--white);\npadding: 6px;\nborder-radius:10px;\n}\n\n#listContainer div + button.onSelection:hover{\nbackground-color: var(--lightYellow);\ncolor:var(--black);\nborder: 2px solid var(--black);\n}\n\nbutton:hover, input[type='file']::file-selector-button:hover{\nbackground-color: var(--black);\ncolor:var(--white);\nborder: 2px solid var(--white);\ncursor:pointer;\n}\n\n\n\nselect{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding:6px;\n}\n\ninput[type='text'],input[type='number']{\npadding:3px;\nborder-radius:4px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\ncolor:var(--black);\noutline: 0px solid transparent;\n}\n\ninput[type='number']{\npadding: 5px;\nappearance:textfield;\n\n}\n\n\ninput[type='text']:invalid:hover{\nbackground-color:var(--red)\n}\n\ninput[type='text']:valid:hover{\nbackground-color:var(--green)\n}\n\n/* article section */\n\n#listContainer{\ngrid-row-start:-3;\ngrid-row-end:-3;\nposition: relative\n}\n#listContainer{\nwidth:98%;\nmax-height:98%;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ }),

/***/ "./input/styling/font/Cyborg Punk.ttf":
/*!********************************************!*\
  !*** ./input/styling/font/Cyborg Punk.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Cyborg Punk.ttf";

/***/ }),

/***/ "./input/styling/font/oceanicdrift.ttf":
/*!*********************************************!*\
  !*** ./input/styling/font/oceanicdrift.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "oceanicdrift.ttf";

/***/ }),

/***/ "./input/styling/icon/icon.png":
/*!*************************************!*\
  !*** ./input/styling/icon/icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icon.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styling_icon_displayIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styling/icon/displayIcon.js */ "./input/styling/icon/displayIcon.js");
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styling/style.css */ "./input/styling/style.css");
/* harmony import */ var _styling_darkmode_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styling/darkmode.css */ "./input/styling/darkmode.css");
/* harmony import */ var _styling_darkmode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styling/darkmode.js */ "./input/styling/darkmode.js");
/* harmony import */ var _styling_darkmode_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styling_darkmode_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styling_calculationType_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styling/calculationType.css */ "./input/styling/calculationType.css");
/* harmony import */ var _styling_list_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styling/list.css */ "./input/styling/list.css");
/* harmony import */ var _styling_desktopSupport_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styling/desktopSupport.css */ "./input/styling/desktopSupport.css");
/* harmony import */ var _styling_popup_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styling/popup.css */ "./input/styling/popup.css");
/* harmony import */ var _functionality_list_listStructure_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functionality/list/listStructure.js */ "./input/functionality/list/listStructure.js");
/* harmony import */ var _functionality_list_currentList_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functionality/list/currentList.js */ "./input/functionality/list/currentList.js");
/* harmony import */ var _functionality_list_addItemsToList_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functionality/list/addItemsToList.js */ "./input/functionality/list/addItemsToList.js");
/* harmony import */ var _functionality_window_openWindow_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functionality/window/openWindow.js */ "./input/functionality/window/openWindow.js");
/* harmony import */ var _functionality_window_addNewList_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functionality/window/addNewList.js */ "./input/functionality/window/addNewList.js");
/* harmony import */ var _functionality_window_openChangeColorWindow_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./functionality/window/openChangeColorWindow.js */ "./input/functionality/window/openChangeColorWindow.js");
/* harmony import */ var _functionality_window_currencyWindow_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./functionality/window/currencyWindow.js */ "./input/functionality/window/currencyWindow.js");
/* harmony import */ var _functionality_display_expenseType_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./functionality/display/expenseType.js */ "./input/functionality/display/expenseType.js");
/* harmony import */ var _functionality_typeCalculator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./functionality/typeCalculator.js */ "./input/functionality/typeCalculator.js");
/* harmony import */ var _functionality_calculate_calculate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./functionality/calculate/calculate.js */ "./input/functionality/calculate/calculate.js");
/* harmony import */ var _functionality_calculate_percentage_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./functionality/calculate/percentage.js */ "./input/functionality/calculate/percentage.js");
/* harmony import */ var _functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./functionality/file/downloadFile.js */ "./input/functionality/file/downloadFile.js");
/* harmony import */ var _functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_functionality_file_downloadFile_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _functionality_file_uploadFile_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./functionality/file/uploadFile.js */ "./input/functionality/file/uploadFile.js");
/* harmony import */ var _functionality_inputCheck_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./functionality/inputCheck.js */ "./input/functionality/inputCheck.js");
/* harmony import */ var _functionality_keyboardSupport_main_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./functionality/keyboardSupport/main.js */ "./input/functionality/keyboardSupport/main.js");
/* harmony import */ var _functionality_keyboardSupport_window_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./functionality/keyboardSupport/window.js */ "./input/functionality/keyboardSupport/window.js");
/* harmony import */ var _functionality_keyboardSupport_window_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_functionality_keyboardSupport_window_js__WEBPACK_IMPORTED_MODULE_23__);



document.getElementById(`percentageIncrease`).value = 0;

window.valueToMultiply = 1;


// import styles











// import functionality




















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi01YjA0ODQ2OWExMjBlMThhYmU2Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7O0FBSU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyRThEOztBQUU5RDtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLDBFQUFpQjtBQUMxQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsR0FBRztBQUNIOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQytIOztBQUUvSDtBQUNBOztBQUVBLHFEQUFxRCwyQ0FBMkM7O0FBRWhHOzs7QUFHTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkRBQTZELHFFQUFnQjs7QUFFN0U7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkRBQTZELHdFQUFtQjs7QUFFaEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwyRUFBc0I7O0FBRW5GOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxzRUFBaUI7QUFDOUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HOEQ7QUFDRDs7QUFFN0Q7O0FBRUE7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJFQUFrQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLG1FQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQyxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxzRUFBc0UseUJBQXlCLEdBQUcsd0JBQXdCO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQVc7QUFDZixHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ1RTtBQUNyQjs7QUFFM0M7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNGQUFZO0FBQ2hCO0FBQ0E7QUFDQSxJQUFJLCtEQUFZO0FBQ2hCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0ZBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNrRDtBQUNIO0FBQ29CO0FBQ047O0FBRTdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdFQUFhO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVU7QUFDbkQ7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxnRkFBNEI7QUFDaEM7QUFDQTtBQUNBLElBQUksK0RBQVM7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0crRjtBQUN1RDtBQUNqRzs7QUFFOUM7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRGQUFrQjtBQUN0QixJQUFJLDZFQUF5QixDQUFDLHVEQUFJO0FBQ2xDO0FBQ0E7QUFDQSxJQUFJLCtEQUFZO0FBQ2hCO0FBQ0E7Ozs7QUFJTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtGQUFxQjtBQUN6QixJQUFJLDZFQUF5QixDQUFDLDBEQUFPO0FBQ3JDO0FBQ0E7QUFDQSxJQUFJLCtEQUFZO0FBQ2hCOztBQUVBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtHQUF3QjtBQUM1QixJQUFJLDZFQUF5QixDQUFDLDZEQUFVO0FBQ3hDO0FBQ0E7QUFDQSxJQUFJLCtEQUFZO0FBQ2hCO0FBQ0E7Ozs7QUFJTztBQUNQO0FBQ0Esa0JBQWtCO0FBQ2xCLElBQUksNkZBQW1CO0FBQ3ZCLElBQUksNkVBQXlCLENBQUMsd0RBQUs7QUFDbkM7QUFDQTtBQUNBLElBQUksK0RBQVk7QUFDaEI7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxVQUFVO0FBQzVEO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHdDQUF3QyxtQ0FBbUM7O0FBRTNFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEZ3RDs7O0FBR3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUVBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZtRTtBQUNUOzs7O0FBSTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1AsYUFBYTtBQUNiOzs7O0FBSUEsRUFBUztBQUNULGFBQWE7QUFDYjs7QUFFQSxFQUFTO0FBQ1QsYUFBYTtBQUNiOzs7O0FBSUEsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7O0FBR0EsRUFBUztBQUNULGFBQWE7QUFDYjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBLElBQUkscUVBQVc7QUFDZixJQUFJLCtFQUFxQjtBQUN6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHaUU7OztBQUdqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSw4RUFBcUI7QUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmdEO0FBQ0w7QUFDYzs7QUFFekQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVUsNERBQUk7QUFDZCxzRUFBVztBQUNYLDJEQUFVO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7O0FDZndEOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0Usb0JBQW9CLEdBQUcsaUJBQWlCOztBQUU1RztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0VBQVc7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNzRDtBQUNaOztBQUVuQztBQUNQO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0VBQVc7QUFDYixFQUFFLHVEQUFVO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUd0U7QUFDUjtBQUNjO0FBQ25CO0FBQ047QUFDVDs7QUFFNUM7OztBQUdPO0FBQ1A7QUFDQTtBQUNBLElBQUksMEVBQXlCO0FBQzdCLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLEVBQUUsMEVBQXlCO0FBQzNCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBLHlCQUF5QixvQkFBb0I7QUFDN0M7QUFDQSwwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQztBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQSxpRkFBaUYseUJBQXlCO0FBQzFHO0FBQ0EsMkVBQTJFLG1CQUFtQjtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EseUNBQXlDLHFEQUFhO0FBQ3REOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsaUVBQVc7QUFDckIsVUFBVSxzREFBVTtBQUNwQixvQkFBb0IsK0RBQVk7QUFDaEM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7QUFJQTtBQUNBO0FBQ0EsY0FBYywwRUFBaUI7QUFDL0IsdUJBQXVCLDBFQUFpQjtBQUN4QyxxQkFBcUIsMEVBQWlCO0FBQ3RDLG9CQUFvQiwwRUFBaUI7QUFDckMsbUJBQW1CLDBFQUFpQjtBQUNwQyxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLGNBQWMsMEVBQWlCO0FBQy9CLFdBQVc7QUFDWDs7O0FBR0E7QUFDQTtBQUNBLGNBQWMsMEVBQWlCO0FBQy9CLHNCQUFzQiwwRUFBaUI7QUFDdkMsNEJBQTRCLDBFQUFpQjtBQUM3QyxXQUFXO0FBQ1g7OztBQUdBO0FBQ0EsY0FBYywwRUFBaUI7QUFDL0IsV0FBVztBQUNYOzs7Ozs7QUFNTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsU0FBUyxLQUFLO0FBQ2Qsa0NBQWtDLEtBQUs7QUFDdkM7QUFDQSxlQUFlLEtBQUs7QUFDcEIsa0NBQWtDLEtBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7QUFHTztBQUNQO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7QUFHTztBQUNQLFNBQVMsUUFBUTtBQUNqQix1Q0FBdUMsNkJBQTZCO0FBQ3BFO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLHVDQUF1Qyw2QkFBNkI7QUFDcEU7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQSxxQ0FBcUMsNERBQUk7QUFDekM7O0FBRUE7QUFDQSxxQ0FBcUMsK0RBQU87QUFDNUM7O0FBRUE7QUFDQSxRQUFRLGtEQUFrRDtBQUMxRCxxQ0FBcUMsa0VBQVU7QUFDL0M7OztBQUdBO0FBQ0EscUNBQXFDLDZEQUFLO0FBQzFDOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUVBQVc7QUFDYixFQUFFLDJEQUFVO0FBQ1o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQVc7QUFDZixJQUFJLDJEQUFVO0FBQ2Q7QUFDQTtBQUNBLElBQUksK0RBQVk7QUFDaEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzV3lEOztBQUV6RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUVBQVc7QUFDYjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0MyRztBQUN0RDs7O0FBR3JEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFTztBQUNQO0FBQ0EsSUFBSSwwRkFBd0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0ZBQTRCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQVk7QUFDaEI7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQjZCOztBQUU3QjtBQUNBLGdCQUFnQixzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxvR0FBb0csWUFBWSxhQUFhLFlBQVksbUNBQW1DLG9CQUFvQixpQ0FBaUMsY0FBYyxLQUFLLHFCQUFxQjtBQUNoUjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2J2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyw2RkFBNkYsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxxQ0FBcUMsZ0JBQWdCLGdCQUFnQixrQkFBa0Isb0JBQW9CLHlCQUF5QixnQkFBZ0IscUJBQXFCLEdBQUcscUJBQXFCO0FBQ25YO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsT0FBTyxtR0FBbUcsS0FBSyxZQUFZLGFBQWEsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFNBQVMsT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLFFBQVEsaURBQWlELG1CQUFtQixxQkFBcUIsSUFBSSw4QkFBOEIsU0FBUyxVQUFVLE9BQU8sZ0JBQWdCLGlCQUFpQixrQkFBa0IsS0FBSyxTQUFTLGNBQWMsb0JBQW9CLDZOQUE2TixzREFBc0QseUJBQXlCLEdBQUcsaUJBQWlCLDhCQUE4QixHQUFHLGlCQUFpQixxQkFBcUIsR0FBRywwQ0FBMEMsMkJBQTJCLEdBQUcsaUJBQWlCLDBCQUEwQixHQUFHLE9BQU8scUJBQXFCO0FBQ2xwQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RkFBeUYsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGdDQUFnQyxxQkFBcUIsaUNBQWlDLFlBQVksYUFBYSxvQkFBb0IsR0FBRyxTQUFTLG1CQUFtQixHQUFHLDBCQUEwQiw0QkFBNEIsR0FBRyxxQkFBcUI7QUFDOWI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBGQUEwRixZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksaUNBQWlDLG9CQUFvQixnQ0FBZ0MscUJBQXFCLGdDQUFnQyxpQkFBaUIsVUFBVSxXQUFXLGtDQUFrQyxZQUFZLGdCQUFnQixxQkFBcUIsR0FBRyxlQUFlLGdCQUFnQixtQkFBbUIsb0JBQW9CLGtCQUFrQixLQUFLLHVCQUF1QixpQkFBaUIscURBQXFELHdCQUF3QixjQUFjLEdBQUcsd0RBQXdELFlBQVkseUJBQXlCLGFBQWEsVUFBVSxZQUFZLG9CQUFvQixHQUFHLHdCQUF3QixxREFBcUQsR0FBRyxxQkFBcUI7QUFDM3FDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRHZDO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHFJQUEwQztBQUN0Riw0Q0FBNEMsbUlBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLG1DQUFtQztBQUM5Qzs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUdBQW1HLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxlQUFlLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLFFBQVEsS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsb0VBQW9FLHlCQUF5QixzQ0FB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QWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDdUM7O0FBRXZDOztBQUVBOzs7QUFHQTs7QUFFNkI7QUFDRztBQUNEO0FBQ1E7QUFDWDtBQUNVO0FBQ1Q7Ozs7QUFJN0I7QUFDK0M7QUFDRjtBQUNHO0FBQ0Y7QUFDQTtBQUNXO0FBQ1A7QUFDRjtBQUNMO0FBQ0s7QUFDQztBQUNIO0FBQ0Y7QUFDTDs7O0FBR1U7QUFDRSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvY2FsY3VsYXRlL2NhbGN1bGF0ZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2NhbGN1bGF0ZS9wZXJjZW50YWdlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9lcnJvci5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9kaXNwbGF5L2l0ZW1zT3JMaXN0cy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2VkaXRJdGVtT3JMaXN0L3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2ZpbGUvZG93bmxvYWRGaWxlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZmlsZS91cGxvYWRGaWxlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvaW5wdXRDaGVjay5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2tleWJvYXJkU3VwcG9ydC9tYWluLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvbGlzdC9hZGRJdGVtc1RvTGlzdC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2xpc3QvY3VycmVudExpc3QuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9saXN0L2xpc3RTdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS90eXBlQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9hZGROZXdMaXN0LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L2N1cnJlbmN5V2luZG93LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9nZW5lcmF0ZUNvbnRlbnRGb3JFZGl0V2luZG93LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L29wZW5DaGFuZ2VDb2xvcldpbmRvdy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuV2luZG93LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9pY29uL2Rpc3BsYXlJY29uLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rhcmttb2RlLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rlc2t0b3BTdXBwb3J0LmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2xpc3QuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvcG9wdXAuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvc3R5bGUuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2NhbGN1bGF0aW9uVHlwZS5jc3M/YjY0OCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rhcmttb2RlLmNzcz8zYWIzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvZGVza3RvcFN1cHBvcnQuY3NzPzI1ZmYiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9saXN0LmNzcz9hM2UzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvcG9wdXAuY3NzPzFlZjYiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9zdHlsZS5jc3M/Y2RhMSIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZmlsZUltcG9ydGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBjYWxjdWxhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcmVzdWx0Q29udGVudGApO1xuY29uc3QgY2FsY3VsYXRlQnV0dG9uID0gY2FsY3VsYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbmApO1xuY29uc3QgY2FsY3VsYXRlU3BhbiA9IGNhbGN1bGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBzcGFuYCk7XG5cbmNhbGN1bGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGN1bGF0ZSlcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGUoKSB7XG4gIGxldCBpbmRleG8gPSAwXG4gIGxldCByZXN1bHQgPSBjdXJyZW50TGlzdC5hcnJheS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50SXRlbSkgPT4ge1xuICAgIGluZGV4byArPSAxO1xuICAgIHN3aXRjaCAoY3VycmVudEl0ZW0udHlwZSkge1xuICAgICAgY2FzZSAnZm9vZCc6XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGNhbGN1bGF0ZWRGb29kKGN1cnJlbnRJdGVtKTtcbiAgICAgIGNhc2UgJ3JlZ1Byb2R1Y3QnOlxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBjYWxjdWxhdGVkUmVnUHJvZHVjdChjdXJyZW50SXRlbSk7XG4gICAgICBjYXNlICdwcm9kdWN0JzpcbiAgICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgY3VycmVudEl0ZW0ucHJpY2U7XG4gICAgfVxuICB9LCAwKTtcblxuICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gIHJlc3VsdCA9IHJlc3VsdCAqIHdpbmRvdy52YWx1ZVRvTXVsdGlwbHlcbiAgY2FsY3VsYXRlU3Bhbi5pbm5lclRleHQgPSByZXN1bHQudG9GaXhlZCgyKTtcbn1cblxuXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZWRGb29kKGN1cnJlbnRGb29kKSB7XG4gIGxldCBwcmljZUZvclVuaXQgPSBjdXJyZW50Rm9vZC5wcmljZSAvIGN1cnJlbnRGb29kLmFtb3VudFBlclByaWNlO1xuICBsZXQgYW1vdW50T2ZGb29kRWF0ZW5QZXJNb250aE9yV2VlayA9IGN1cnJlbnRGb29kLmFtb3VudFBlckRheSAqIGdldFByb2Nlc3VyZShjdXJyZW50Rm9vZCk7XG4gIGxldCBhdmVyYWdlRm9vZCA9IHByaWNlRm9yVW5pdCAqIGFtb3VudE9mRm9vZEVhdGVuUGVyTW9udGhPcldlZWs7XG4gIHJldHVybiBhdmVyYWdlRm9vZDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvY2VzdXJlKGN1cnJlbnRGb29kKSB7XG4gIGlmICh0eXBlT2ZDYWxjdWxhdGlvbiA9PSAnbW9udGhseScpIHtcbiAgICByZXR1cm4gY3VycmVudEZvb2QubW9udGhBbW91bnRcbiAgfVxuICBlbHNlIGlmICh0eXBlT2ZDYWxjdWxhdGlvbiA9PSAnd2Vla2x5Jykge1xuICAgIHJldHVybiBjdXJyZW50Rm9vZC53ZWVrQW1vdW50XG4gIH1cbiAgZWxzZSBpZiAodHlwZU9mQ2FsY3VsYXRpb24gPT0gJ2RhaWx5Jykge1xuICAgIHJldHVybiBjdXJyZW50Rm9vZC53ZWVrQW1vdW50IC8gNztcbiAgfVxuICBlbHNle1xuICAgIHJldHVybiBjdXJyZW50Rm9vZC5tb250aEFtb3VudCAqIDEyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlZFJlZ1Byb2R1Y3QoY3VycmVudFJlZ3VsYXJQcm9kdWN0KSB7XG4gIGxldCBuZXdQcmljZSA9IGN1cnJlbnRSZWd1bGFyUHJvZHVjdC5wcmljZSAqIGN1cnJlbnRSZWd1bGFyUHJvZHVjdC5hbW91bnRPZlJlZ1Byb2R1Y3RzXG4gIGlmICh0eXBlT2ZDYWxjdWxhdGlvbiA9PSAneWVhcmx5Jykge1xuICAgIHJldHVybiBuZXdQcmljZSAqIGN1cnJlbnRSZWd1bGFyUHJvZHVjdC5hbW91bnRQZXJZZWFyXG4gIH1cbiAgZWxzZSBpZiAodHlwZU9mQ2FsY3VsYXRpb24gPT0gJ3dlZWtseScpIHtcbiAgICByZXR1cm4gbmV3UHJpY2UgLyA0O1xuICB9XG4gIGVsc2UgaWYodHlwZU9mQ2FsY3VsYXRpb24gPT0gJ2RhaWx5Jyl7XG4gICAgcmV0dXJuIG5ld1ByaWNlIC8gMzE7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG5ld1ByaWNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyB0cmFuc2Zvcm1Ub051bWJlcn0gZnJvbSAnLi8uLi9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJ1xuXG5sZXQgIHBlcmNlbnRhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwZXJjZW50YWdlSW5jcmVhc2VgKVxucGVyY2VudGFnZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHN0b3JlUGVyY2VudGFnZUluY3JlYXNlKVxuXG5mdW5jdGlvbiBzdG9yZVBlcmNlbnRhZ2VJbmNyZWFzZSgpe1xubGV0IHZhbHVlT2ZQZXJjZW50YWdlID0gIHRyYW5zZm9ybVRvTnVtYmVyKHRoaXMudmFsdWUpO1xud2luZG93LnZhbHVlVG9NdWx0aXBseSA9ICh2YWx1ZU9mUGVyY2VudGFnZSArIDEwMCkgLyAxMDA7XG59XG5cbiIsImxldCBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclBvcFVwJyk7XG5sZXQgaDIgPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCdoMicpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RXJyb3IobWVzc2FnZSkge1xuICBoMi5pbm5lclRleHQgPSBtZXNzYWdlO1xuICBzaG93UG9wVXAoKVxufVxuXG5mdW5jdGlvbiBzaG93UG9wVXAoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4geyBwb3BVcC5zaG93TW9kYWwoKSxcbiAgY2hhbmdlT3BhY2l0eSgpXG4gIH0sIDIwMClcbn1cblxuXG5cbmZ1bmN0aW9uIGNoYW5nZU9wYWNpdHkoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICBoMi5zdHlsZS5vcGFjaXR5ID0gJzEnLFxuICBwb3BVcC5zdHlsZS5vcGFjaXR5ID0gJzEnLFxuICBoaWRlT3BhY2l0eSgpXG4gIH0sIDEwMDApXG59XG5cblxuZnVuY3Rpb24gaGlkZU9wYWNpdHkoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgaDIuc3R5bGUub3BhY2l0eSA9ICcwJyxcbiAgcG9wVXAuc3R5bGUub3BhY2l0eSA9ICcxJyxcbiAgaGlkZURpYWxvZygpXG4gIH0sIDMwMDApXG4gIFxufVxuXG5mdW5jdGlvbiBoaWRlRGlhbG9nKCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHsgcG9wVXAuY2xvc2UoKSB9LCAxMDAwKVxufVxuXG5cbiIsImltcG9ydCB7IGFkZEZvb2RUb1RoZUxpc3QsIGFkZE1vbmV5VG9UaGVMaXN0LCBhZGRQcm9kdWN0VG9UaGVMaXN0LCBhZGRSZWdQcm9kdWN0VG9UaGVMaXN0IH0gZnJvbSAnLi8uLi9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJztcblxubGV0IHNlbGVjdGVkU2VjdGlvbjtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKTtcblxudHlwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4geyBkaXNwbGF5Q29udGVudEZvclR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KVxuXG5sZXQgZXhwZW5zZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwZW5zZUNvbnRlbnQgZm9ybScpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudEZvclR5cGUodGFyZ2V0VmFsdWUpIHtcblxuICBzd2l0Y2ggKHRhcmdldFZhbHVlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBnZW5lcmF0ZUZvb2QoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgZ2VuZXJhdGVQcm9kdWN0KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZWdQcm9kdWN0JzpcbiAgICAgIGdlbmVyYXRlUmVnUHJvZHVjdCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgZ2VuZXJhdGVNb25leSgpXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvb2QoKSB7XG4gIGV4cGVuc2VDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGAgPHA+bmFtZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cbjxwPnByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiICBpbnB1dG1vZGU9J2RlY2ltYWwnIGlkPVwicHJpY2VcIiByZXF1aXJlZD5cbjxwPmFtb3VudCBvZiBmb29kIHBlciBwcmljZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyUHJpY2VcIiByZXF1aXJlZD5cbjxwPmFtb3VudCBvZiBmb29kIHBlciBkYXk6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cImFtb3VudFBlckRheVwiIHJlcXVpcmVkPlxuPGRpdj5cbiAgPHNlY3Rpb24+XG4gICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIG1vbnRoOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJtb250aEFtb3VudFwiICByZXF1aXJlZCA+XG4gIDwvc2VjdGlvbj5cbiAgPHA+b3I8L3A+XG4gIDxzZWN0aW9uPlxuICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciB3ZWVrOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJ3ZWVrQW1vdW50XCIgcmVxdWlyZWQgPlxuICA8L3NlY3Rpb24+XG48L2Rpdj5cbjxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+XG5gXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRGb29kVG9UaGVMaXN0KVxuXG4gIGlmICh3aW5kb3cudHlwZU9mQ2FsY3VsYXRpb24gPT0gJ21vbnRobHknIHx8IHdpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9PSAneWVhcmx5Jykge1xuXG4gICAgc2VsZWN0ZWRTZWN0aW9uID0gZXhwZW5zZUNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuICB9XG4gIGVsc2Uge1xuXG4gICAgc2VsZWN0ZWRTZWN0aW9uID0gZXhwZW5zZUNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VjdGlvbjpsYXN0LW9mLXR5cGUnKTtcbiAgfVxuXG4gIHNlbGVjdGVkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvZHVjdCgpIHtcbiAgZXhwZW5zZUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gYCA8cD5uYW1lOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkPlxuPHA+cHJpY2U6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cInByaWNlXCIgcmVxdWlyZWQ+XG48YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPlxuYFxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvZHVjdFRvVGhlTGlzdClcblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJlZ1Byb2R1Y3QoKSB7XG4gIGV4cGVuc2VDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGAgPHA+bmFtZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cbjxwPnByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJwcmljZVwiIHJlcXVpcmVkPlxuPHA+YW1vdW50IG9mIHByb2R1Y3RzOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRPZlJlZ1Byb2R1Y3RzXCIgdmFsdWU9JzEnIHJlcXVpcmVkPlxuPHA+YW1vdW50IG9mIG1vbnRocyBwZXIgeWVhcjo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyWWVhclwiIHZhbHVlPScxMicgcmVxdWlyZWQ+XG48YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPlxuYFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFJlZ1Byb2R1Y3RUb1RoZUxpc3QpXG5cbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZU1vbmV5KCkge1xuICBleHBlbnNlQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgIDxwPm1vbmV5OjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJwcmljZVwiIHJlcXVpcmVkPlxuPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTW9uZXlUb1RoZUxpc3QpXG59XG4iLCJpbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9saXN0L2xpc3RTdHJ1Y3R1cmUuanMnO1xuaW1wb3J0IHsgc2VsZWN0RGl2IH0gZnJvbSAnLi8uLi9lZGl0SXRlbU9yTGlzdC9zZWxlY3Rpb24uanMnO1xuXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcblxubGV0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGlzdCcpXG5cbmxldCBkaXNwbGF5SXNOb3RSdW5CZWZvcmUgPSB0cnVlO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxpc3QoKSB7XG4gIHJlc3RhcnRFdmVyeXRoaW5nKCk7XG4gIGN1cnJlbnRMaXN0LmFycmF5LmZvckVhY2goYXBwZW5kSXRlbXMpXG4gIGxpc3QuZm9yRWFjaChhcHBlbmRMaXN0cylcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKClcbiAgY29uc3QgY2FsY3VsYXRlU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyZXN1bHRDb250ZW50IHNwYW5gKTtcbiAgY2FsY3VsYXRlU3Bhbi5pbm5lclRleHQgPSAnJztcbiAgaWYgKGRpc3BsYXlJc05vdFJ1bkJlZm9yZSkge1xuICAgIHdpbmRvdy5zd2l0Y2hUb0RhcmtNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpXG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTmFtZSA9PSAnZGFyaycpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGJ1dHRvbicpLmlubmVyVGV4dCA9ICdsaWdodCBtb2RlJztcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgYnV0dG9uJykuaW5uZXJUZXh0ID0gJ2RhcmsgbW9kZSc7XG4gICAgICB9XG4gICAgICBkaXNwbGF5TGlzdCgpXG4gICAgfVxuICAgIGRpc3BsYXlJc05vdFJ1bkJlZm9yZSA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRFdmVyeXRoaW5nKCkge1xuICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbicpO1xuICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ29uU2VsZWN0aW9uJyk7XG4gIHdpbmRvdy5zZWxlY3RlZEluZGV4ID0gJyc7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICBsaXN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExpc3QnKTtcbiAgbGlzdFNlbGVjdC5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gYXBwZW5kSXRlbXMoaXRlbSwgY3VycmVudExpc3RPZkl0ZW1zSW5kZXgpIHtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3REaXYpXG4gIGxldCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQuaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICBuYW1lVGV4dC5zdHlsZS5jb2xvciA9IHJldHVybkRpZmZlcmVudENvbG9yRGVwZW5kaW5nT25UeXBlKGl0ZW0pO1xuICBuYW1lVGV4dC5kYXRhc2V0LmluZGV4ID0gY3VycmVudExpc3RPZkl0ZW1zSW5kZXg7XG4gIGNvbnRhaW5lci5hcHBlbmQobGkpO1xuICBsaS5hcHBlbmQobmFtZVRleHQpO1xufVxuXG5mdW5jdGlvbiByZXR1cm5EaWZmZXJlbnRDb2xvckRlcGVuZGluZ09uVHlwZShpdGVtKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NOYW1lID09ICdkYXJrJykge1xuICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICBjYXNlICdmb29kJzpcbiAgICAgICAgcmV0dXJuIGNvbG9yLmRhcmsuZm9vZDtcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgICByZXR1cm4gY29sb3IuZGFyay5wcm9kdWN0O1xuICAgICAgY2FzZSAncmVnUHJvZHVjdCc6XG4gICAgICAgIHJldHVybiBjb2xvci5kYXJrLnJlZ1Byb2R1Y3Q7XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICAgIHJldHVybiBjb2xvci5kYXJrLm1vbmV5O1xuICAgIH1cbiAgfVxuICBlbHNlIHtcblxuICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgICBjYXNlICdmb29kJzpcbiAgICAgICAgcmV0dXJuIGNvbG9yLmxpZ2h0LmZvb2Q7XG4gICAgICBjYXNlICdwcm9kdWN0JzpcbiAgICAgICAgcmV0dXJuIGNvbG9yLmxpZ2h0LnByb2R1Y3Q7XG4gICAgICBjYXNlICdyZWdQcm9kdWN0JzpcbiAgICAgICAgcmV0dXJuIGNvbG9yLmxpZ2h0LnJlZ1Byb2R1Y3Q7XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICAgIHJldHVybiBjb2xvci5saWdodC5tb25leTtcbiAgICB9XG5cbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGFwcGVuZExpc3RzKGxpc3QsIGN1cnJlbnRMaXN0b2ZMaXN0c0luZGV4KSB7XG5cbiAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gIG9wdGlvbi5pbm5lckhUTUwgPSBgJHtsaXN0Lm5hbWV9YDtcbiAgb3B0aW9uLnZhbHVlID0gYCR7Y3VycmVudExpc3RvZkxpc3RzSW5kZXh9YDtcbiAgaWYgKHdpbmRvdy52YWx1ZU9mU2VsZWN0ID09IGN1cnJlbnRMaXN0b2ZMaXN0c0luZGV4KSB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuICBsaXN0U2VsZWN0LmFwcGVuZChvcHRpb24pO1xufVxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBzZWxlY3REaXYoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgd2luZG93LnNlbGVjdGVkSW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleFxuICAgIHNlbGVjdFBhcmVudChldmVudClcbiAgfVxufVxuXG5cblxuXG5mdW5jdGlvbiBzZWxlY3RQYXJlbnQoZXZlbnQpIHtcbiAgbGV0IHBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuXG4gIHJlbW92ZUNsYXNzZXMoKVxuICBsZXQgZWRpdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b25gKTtcbiAgZWRpdEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgnb25TZWxlY3Rpb24nKVxuICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRJdGVtJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcygpIHtcbiAgbGV0IG9uU2VsZWN0aW9uQ2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25TZWxlY3Rpb24nKVxuICBpZihvblNlbGVjdGlvbkNsYXNzKXtcbiAgb25TZWxlY3Rpb25DbGFzcy5jbGFzc0xpc3QucmVtb3ZlKCdvblNlbGVjdGlvbicpXG4gIH1cbiAgbGV0IHNlbGVjdGVkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0ZWRJdGVtJyk7XG4gIHNlbGVjdGVkSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWRJdGVtJykpO1xufVxuIiwiY29uc3QgZG93bmxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlOmZpcnN0LW9mLXR5cGUgYnV0dG9uOm50aC1vZi10eXBlKDIpJyk7XG5kb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvd25sb2FkVGhlTGlzdFN0cnVjdHVyZSlcblxuXG5mdW5jdGlvbiBkb3dubG9hZFRoZUxpc3RTdHJ1Y3R1cmUoKXtcbmxldCBsaXN0QW5kQ29sb3IgPSBbd2luZG93Lmxpc3QsIHdpbmRvdy5jb2xvcl1cbmxldCBmaWxlVG9Eb3dubG9hZCA9IG5ldyBGaWxlKFtKU09OLnN0cmluZ2lmeShsaXN0QW5kQ29sb3IpXSwgYGxpc3QtJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9YCx7dHlwZTonYXBwbGljYXRpb24vanNvbid9KTtcbmxldCBteVVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZVRvRG93bmxvYWQpO1xubGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5saW5rLmhyZWYgPSBteVVybDtcbmxpbmsuZG93bmxvYWQgPSBmaWxlVG9Eb3dubG9hZC5uYW1lXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspXG5saW5rLmNsaWNrKClcbmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluaylcblVSTC5yZXZva2VPYmplY3RVUkwobXlVcmwpXG59XG4iLCJpbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cbmNvbnN0IHVwbG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9J2ZpbGUnXWApO1xudXBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZVN0cnVjdHVyZSlcblxuZnVuY3Rpb24gdXBkYXRlU3RydWN0dXJlKCkge1xuXG4gIGxldCBteUZpbGUgPSB1cGxvYWRCdXR0b24uZmlsZXNbMF1cbiAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZlbnQpID0+IHtcblxuICAgIGxldCBsaXN0QW5kQ29sb3IgPSBKU09OLnBhcnNlKGV2ZW50LnRhcmdldC5yZXN1bHQpXG4gICAgd2luZG93Lmxpc3QgPSBsaXN0QW5kQ29sb3JbMF07XG4gICAgd2luZG93LmNvbG9yID0gbGlzdEFuZENvbG9yWzFdO1xuICAgIGN1cnJlbnRMaXN0ID0gbGlzdFswXTtcbiAgICBkaXNwbGF5TGlzdCgpXG4gIH0pO1xuXG4gIHJlYWRlci5yZWFkQXNUZXh0KG15RmlsZSk7XG59XG5cblxuIiwiaW1wb3J0IHsgY2hlY2tJZkVtcHR5IH0gZnJvbSAnLi93aW5kb3cvZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcydcbmltcG9ydCB7IGRpc3BsYXlFcnJvciB9IGZyb20gJy4vZGlzcGxheS9lcnJvci5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUV2ZW50TGlzdGVuZXJGb3JJbnB1dCgpIHtcbiAgZm9yIChsZXQgaW5wdXQgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J11gKSkge1xuXG4gICAgc3dpdGNoIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlOmZpcnN0LW9mLXR5cGUgc2VsZWN0JykudmFsdWUpIHtcbiAgICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja0lmRm9vZFZhbGlkKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja0lmUHJvZHVjdE9yTW9uZXlWYWxpZClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb25leSc6XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrSWZQcm9kdWN0T3JNb25leVZhbGlkKVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZ2VuZXJhdGVFdmVudExpc3RlbmVyRm9ySW5wdXQoKVxuXG5mdW5jdGlvbiBjaGVja0lmRm9vZFZhbGlkKCkge1xuICBsZXQgaXRlbSA9IHRoaXMudmFsdWVcbiAgdHJ5IHtcbiAgICBjaGVja0lmRW1wdHkoaXRlbSk7XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKVxuICB9XG59XG5cblxuZnVuY3Rpb24gY2hlY2tJZlByb2R1Y3RPck1vbmV5VmFsaWQoKSB7XG4gIGxldCBpdGVtID0gdGhpcy52YWx1ZVxuICB0cnkge1xuICAgIGNoZWNrSWZFbXB0eShpdGVtKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBjYWxjdWxhdGUgfSBmcm9tIFwiLi4vY2FsY3VsYXRlL2NhbGN1bGF0ZVwiXG5pbXBvcnQgeyBkaXNwbGF5RXJyb3IgfSBmcm9tIFwiLi4vZGlzcGxheS9lcnJvclwiXG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRlbnRBbmRPcGVuV2luZG93IH0gZnJvbSBcIi4uL3dpbmRvdy9vcGVuV2luZG93XCJcbmltcG9ydCB7IHJlbW92ZUNsYXNzZXMgfSBmcm9tIFwiLi8uLi9lZGl0SXRlbU9yTGlzdC9zZWxlY3Rpb25cIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGVzY2FwZSlcblxuZnVuY3Rpb24gZXNjYXBlKGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgY2hlY2tEaWFsb2dzKClcbiAgICBpZiAoZXZlbnQua2V5ID09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHNlbGVjdGVkSW5kZXggPSAnJztcbiAgICAgIHJlbW92ZUNsYXNzZXMoKTtcbiAgICB9XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrRGlhbG9ncygpIHtcbiAgZm9yIChsZXQgZGlhbG9nIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpYWxvZycpKSB7XG4gICAgaWYgKGRpYWxvZy5vcGVuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGRpYWxvZyB3aXRoIGlkOicke2RpYWxvZy5pZH0nIGlzIG9wZW4hYCk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZWRpdEl0ZW0pXG5cbmZ1bmN0aW9uIGVkaXRJdGVtKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50KVxuICB0cnkge1xuICAgIGNoZWNrRGlhbG9ncygpXG4gICAgZGV0ZWN0S2V5QW5kUGVyZm9ybUFjdGlvbihldmVudC5rZXkpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKGVycm9yKVxuICB9XG59XG5cblxuXG5cbmZ1bmN0aW9uIGRldGVjdEtleUFuZFBlcmZvcm1BY3Rpb24oa2V5KSB7XG4gIGNvbnNvbGUubG9nKGtleSlcbiAgdHJ5IHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICAgIGNoZWNrU2VsZWN0ZWRJbmRleFRvUGVyZm9ybUFjdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJqXCI6XG4gICAgICBjYXNlIFwiSlwiOlxuICAgICAgICBjaGVja1R5cGVPZkNhbGN1bGF0b3JBbmRNb3ZlVXAoKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2snOlxuICAgICAgY2FzZSAnSyc6XG4gICAgICAgIGNoZWNrVHlwZU9mQ2FsY3VsYXRvckFuZE1vdmVEb3duKClcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BsYXlFcnJvcihlcnJvcilcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1NlbGVjdGVkSW5kZXhUb1BlcmZvcm1BY3Rpb24oKSB7XG4gIGlmICh3aW5kb3cuc2VsZWN0ZWRJbmRleCkge1xuICAgIGdlbmVyYXRlQ29udGVudEFuZE9wZW5XaW5kb3coKVxuICB9XG4gIGVsc2Uge1xuICAgIGNhbGN1bGF0ZSgpXG4gIH1cblxufVxuXG5mdW5jdGlvbiBjaGVja1R5cGVPZkNhbGN1bGF0b3JBbmRNb3ZlVXAoKSB7XG4gIGxldCBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVDb250YWluZXIgc2VsZWN0JylcbiAgc3dpdGNoIChzZWxlY3RFbGVtZW50LnZhbHVlKSB7XG4gICAgY2FzZSAneWVhcmx5JzpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vbnRobHknOlxuICAgICAgc2VsZWN0RWxlbWVudC52YWx1ZSA9ICd5ZWFybHknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd2Vla2x5JzpcbiAgICAgIHNlbGVjdEVsZW1lbnQudmFsdWUgPSAnbW9udGhseSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkYWlseSc6XG4gICAgICBzZWxlY3RFbGVtZW50LnZhbHVlID0gJ3dlZWtseSc7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrVHlwZU9mQ2FsY3VsYXRvckFuZE1vdmVEb3duKCkge1xuICBsZXQgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlQ29udGFpbmVyIHNlbGVjdCcpXG4gIHN3aXRjaCAoc2VsZWN0RWxlbWVudC52YWx1ZSkge1xuICAgIGNhc2UgJ3llYXJseSc6XG4gICAgICBzZWxlY3RFbGVtZW50LnZhbHVlID0gJ21vbnRobHknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9udGhseSc6XG4gICAgICBzZWxlY3RFbGVtZW50LnZhbHVlID0gJ3dlZWtseSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3ZWVrbHknOlxuICAgICAgc2VsZWN0RWxlbWVudC52YWx1ZSA9ICdkYWlseSc7XG4gICAgICBicmVhaztcbiAgfVxufVxuIiwiaW1wb3J0IHsgcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdCwgTW9uZXksIFByb2R1Y3QsUmVnUHJvZHVjdCwgRm9vZCB9IGZyb20gJy4vbGlzdFN0cnVjdHVyZS5qcydcbmltcG9ydCB7IGNoZWNrSWZGb29kSXNFbXB0eSwgY2hlY2tJZlByb2R1Y3RJc0VtcHR5LCBjaGVja0lmUmVnUHJvZHVjdElzRW1wdHkgLGNoZWNrSWZNb25leUlzRW1wdHkgfSBmcm9tICcuLy4uL3dpbmRvdy9nZW5lcmF0ZUNvbnRlbnRGb3JFZGl0V2luZG93LmpzJ1xuaW1wb3J0IHsgZGlzcGxheUVycm9yIH0gZnJvbSAnLi8uLi9kaXNwbGF5L2Vycm9yLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvb2RUb1RoZUxpc3QoKSB7XG4gIGxldCBuYW1lVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuXG4gIHRyeSB7XG4gICAgbGV0IGZvb2QgPSB7XG4gICAgICBuYW1lOiBuYW1lVmFsdWUsXG4gICAgICBwcmljZTogZ2V0TnVtYmVyT2YoJ3ByaWNlJyksXG4gICAgICBhbW91bnRQZXJQcmljZTogZ2V0TnVtYmVyT2YoJ2Ftb3VudFBlclByaWNlJyksXG4gICAgICBhbW91bnRQZXJEYXk6IGdldE51bWJlck9mKCdhbW91bnRQZXJEYXknKSxcbiAgICAgIHdlZWtBbW91bnQ6IGdldE51bWJlck9mKCd3ZWVrQW1vdW50JyksXG4gICAgICBtb250aEFtb3VudDogZ2V0TnVtYmVyT2YoJ21vbnRoQW1vdW50JyksXG4gICAgfVxuICAgIGNoZWNrSWZGb29kSXNFbXB0eShmb29kKVxuICAgIHB1c2hUb0FycmF5QW5kRGlzcGxheUxpc3QoRm9vZChmb29kLm5hbWUsIGZvb2QucHJpY2UsIGZvb2QuYW1vdW50UGVyUHJpY2UsIGZvb2QuYW1vdW50UGVyUHJpY2UsIGZvb2Qud2Vla0Ftb3VudCwgZm9vZC5tb250aEFtb3VudCkpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKVxuICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvZHVjdFRvVGhlTGlzdCgpIHtcbiAgbGV0IG5hbWVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG5cbiAgdHJ5IHtcbiAgICBsZXQgcHJvZHVjdCA9IHtcbiAgICAgIG5hbWU6IG5hbWVWYWx1ZSxcbiAgICAgIHByaWNlOiBnZXROdW1iZXJPZigncHJpY2UnKVxuICAgIH1cbiAgICBjaGVja0lmUHJvZHVjdElzRW1wdHkocHJvZHVjdClcbiAgICBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KFByb2R1Y3QocHJvZHVjdC5uYW1lLCBwcm9kdWN0LnByaWNlKSlcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwbGF5RXJyb3IoZXJyb3IpXG4gIH1cblxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRSZWdQcm9kdWN0VG9UaGVMaXN0KCkge1xuICBsZXQgbmFtZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgdHJ5IHtcbiAgICBsZXQgcHJvZHVjdCA9IHtcbiAgICAgIG5hbWU6IG5hbWVWYWx1ZSxcbiAgICAgIHByaWNlOiBnZXROdW1iZXJPZigncHJpY2UnKSxcbiAgICAgIGFtb3VudFBlclllYXI6IGdldE51bWJlck9mKCdhbW91bnRQZXJZZWFyJyksXG4gICAgICBhbW91bnRPZlJlZ1Byb2R1Y3RzOiBnZXROdW1iZXJPZignYW1vdW50UGVyWWVhcicpLFxuICAgIH1cbiAgICBjaGVja0lmUmVnUHJvZHVjdElzRW1wdHkocHJvZHVjdClcbiAgICBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KFJlZ1Byb2R1Y3QocHJvZHVjdC5uYW1lLCBwcm9kdWN0LnByaWNlLHByb2R1Y3QuYW1vdW50UGVyWWVhcixwcm9kdWN0LmFtb3VudE9mUmVnUHJvZHVjdHMpKVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BsYXlFcnJvcihlcnJvcilcbiAgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1vbmV5VG9UaGVMaXN0KCkge1xuICB0cnkge1xuICAgIGxldCBtb25leSA9IHsgcHJpY2U6IGdldE51bWJlck9mKCdwcmljZScpIH1cbiAgICBjaGVja0lmTW9uZXlJc0VtcHR5KG1vbmV5KVxuICAgIHB1c2hUb0FycmF5QW5kRGlzcGxheUxpc3QoTW9uZXkobW9uZXkucHJpY2UpKVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BsYXlFcnJvcihlcnJvcilcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXROdW1iZXJPZihlbGVtZW50SWQpIHtcbiAgbGV0IHZhbHVlT2ZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZWxlbWVudElkfWApLnZhbHVlXG4gIHJldHVybiB0cmFuc2Zvcm1Ub051bWJlcih2YWx1ZU9mRWxlbWVudClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVRvTnVtYmVyKHZhbHVlT2ZFbGVtZW50KSB7XG4gIGxldCBsZXR0ZXJSZW1vdmVyID0gL1swLTldKy9nO1xuICBsZXQgdmFsdWVPZkVsZW1lbnRXaXRob3V0TGV0dGVycyA9IGAke2xldHRlclJlbW92ZXIuZXhlYyh2YWx1ZU9mRWxlbWVudCl9YDtcblxuICByZXR1cm4gTnVtYmVyKHZhbHVlT2ZFbGVtZW50V2l0aG91dExldHRlcnMpO1xufVxuIiwiaW1wb3J0IHtkaXNwbGF5TGlzdH0gZnJvbSAnLi8uLi9kaXNwbGF5L2l0ZW1zT3JMaXN0cy5qcydcblxuXG5sZXQgc2VsZWN0Rm9yQ3VycmVudExpc3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0TGlzdCcpO1xuc2VsZWN0Rm9yQ3VycmVudExpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlQ3VycmVudExpc3QpO1xuXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50TGlzdChldmVudCl7XG53aW5kb3cudmFsdWVPZlNlbGVjdCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpO1xud2luZG93LmN1cnJlbnRMaXN0ID0gbGlzdFt2YWx1ZU9mU2VsZWN0XTtcbmRpc3BsYXlMaXN0KClcbn1cblxuIiwiaW1wb3J0IHsgZGlzcGxheUNvbnRlbnRGb3JUeXBlIH0gZnJvbSAnLi8uLi9kaXNwbGF5L2V4cGVuc2VUeXBlLmpzJ1xuaW1wb3J0IHsgZGlzcGxheUxpc3QgfSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5cblxuLy8gY29sb3Igc2VjdGlvblxuaWYgKGxvY2FsU3RvcmFnZS5jb2xvcikge1xuICB3aW5kb3cuY29sb3IgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jb2xvcilcbn1cbmVsc2Uge1xuICB3aW5kb3cuY29sb3IgPSB7XG4gICAgZGFyazoge1xuICAgICAgZm9vZDogJyNmY2NiMDYnLFxuICAgICAgcHJvZHVjdDogJyNiMWRkZjEnLFxuICAgICAgcmVnUHJvZHVjdDogJyNjYTJjOTInLFxuICAgICAgbW9uZXk6ICcjNTBjODc4JyxcbiAgICB9LFxuICAgIGxpZ2h0OiB7XG4gICAgICBmb29kOiAnI2ZmZTkwMCcsXG4gICAgICBwcm9kdWN0OiAnIzIxNEQ1QycsXG4gICAgICByZWdQcm9kdWN0OiAnI2M4YTJjOCcsXG4gICAgICBtb25leTogJyMzMzM3MzYnLFxuICAgIH1cbiAgfVxufVxuXG4gIC8vIGNsYXNzIHNlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBNb25leShwcmljZSwgbmFtZSA9IHByaWNlLCB0eXBlID0gJ21vbmV5Jykge1xuICAgIHJldHVybiB7IHByaWNlLCBuYW1lLCB0eXBlIH1cbiAgfVxuXG5cblxuICBleHBvcnQgZnVuY3Rpb24gUHJvZHVjdChuYW1lLCBwcmljZSwgdHlwZSA9ICdwcm9kdWN0Jykge1xuICAgIHJldHVybiB7IG5hbWUsIHByaWNlLCB0eXBlIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBSZWdQcm9kdWN0KG5hbWUsIHByaWNlLCBhbW91bnRQZXJZZWFyLCBhbW91bnRPZlJlZ1Byb2R1Y3RzLCB0eXBlID0gJ3JlZ1Byb2R1Y3QnKSB7XG4gICAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIGFtb3VudFBlclllYXIsIGFtb3VudE9mUmVnUHJvZHVjdHMsIHR5cGUgfVxuICB9XG5cblxuXG4gIGV4cG9ydCBmdW5jdGlvbiBGb29kKG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50LCBtb250aEFtb3VudCwgdHlwZSA9ICdmb29kJykge1xuICAgIGxldCBteVdlZWtBbW91bnQ7XG4gICAgbGV0IG15TW9udGhBbW91bnQ7XG4gICAgaWYgKHdlZWtBbW91bnQpIHtcbiAgICAgIG15V2Vla0Ftb3VudCA9IHdlZWtBbW91bnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbXlXZWVrQW1vdW50ID0gcGFyc2VJbnQobW9udGhBbW91bnQgLyA0KTtcbiAgICB9XG5cbiAgICBpZiAobW9udGhBbW91bnQpIHtcbiAgICAgIG15TW9udGhBbW91bnQgPSBtb250aEFtb3VudDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBteU1vbnRoQW1vdW50ID0gcGFyc2VJbnQod2Vla0Ftb3VudCAqIDQpO1xuICAgIH1cblxuICAgIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50OiBteVdlZWtBbW91bnQsIG1vbnRoQW1vdW50OiBteU1vbnRoQW1vdW50LCB0eXBlIH1cbiAgfVxuXG5cbiAgZXhwb3J0IGZ1bmN0aW9uIExpc3QobmFtZSwgYXJyYXkgPSBbXSkge1xuICAgIHJldHVybiB7IGFycmF5LCBuYW1lIH1cbiAgfVxuXG5cbiAgLy8gbGlzdCBzZWN0aW9uXG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5saXN0KSB7XG4gICAgd2luZG93Lmxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5saXN0KVxuICAgIHdpbmRvdy5jdXJyZW50TGlzdCA9IHdpbmRvdy5saXN0WzBdO1xuICAgIGRpc3BsYXlMaXN0KClcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuY3VycmVudExpc3QgPSBuZXcgTGlzdCgnZGVmYXVsdCcpO1xuICAgIHdpbmRvdy5saXN0ID0gW2N1cnJlbnRMaXN0XTtcbiAgfVxuXG5cblxuICBleHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkod2luZG93Lmxpc3QpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvcicsIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5jb2xvcikpXG4gIH1cblxuXG4gIC8vIGZ1bmN0aW9uIHRvIHB1c2ggdG8gYXJyYXkgc2VjdGlvblxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KGVsKSB7XG4gICAgY29uc29sZS5sb2coZWwpXG4gICAgY3VycmVudExpc3QuYXJyYXkucHVzaChlbCk7XG4gICAgZGlzcGxheUxpc3QoKVxuICAgIGRpc3BsYXlDb250ZW50Rm9yVHlwZSgpXG4gIH1cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBkaXNwbGF5Q29udGVudEZvclR5cGUgfSBmcm9tICcuL2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMnO1xuXG5cbmNvbnN0IHR5cGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZUNvbnRhaW5lciBzZWxlY3QnKTtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKTtcbnR5cGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUeXBlT2ZDYWxjdWxhdGlvbilcblxuY2hhbmdlVHlwZU9mQ2FsY3VsYXRpb24oKTtcbmZ1bmN0aW9uIGNoYW5nZVR5cGVPZkNhbGN1bGF0aW9uKCkge1xuXG4gIGlmICh0eXBlU2VsZWN0LnZhbHVlID09ICdtb250aGx5Jykge1xuICAgIHdpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9ICdtb250aGx5JztcbiAgfVxuICBlbHNlIGlmICh0eXBlU2VsZWN0LnZhbHVlID09ICd3ZWVrbHknKSB7XG4gICAgd2luZG93LnR5cGVPZkNhbGN1bGF0aW9uID0gJ3dlZWtseSc7XG4gIH1cbiAgZWxzZSBpZiAodHlwZVNlbGVjdC52YWx1ZSA9PSAnZGFpbHknKSB7XG4gICAgd2luZG93LnR5cGVPZkNhbGN1bGF0aW9uID0gJ2RhaWx5JztcbiAgfVxuICBlbHNle1xuICAgIHdpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9ICd5ZWFybHknO1xuICB9XG5cbiAgZGlzcGxheUNvbnRlbnRGb3JUeXBlKHR5cGVTZWxlY3Rvci52YWx1ZSk7XG59XG4iLCJpbXBvcnQge0xpc3R9IGZyb20gJy4vLi4vbGlzdC9saXN0U3RydWN0dXJlLmpzJztcbmltcG9ydCB7Y2xvc2VQb3BVcH0gZnJvbSAnLi9vcGVuV2luZG93LmpzJztcbmltcG9ydCB7ZGlzcGxheUxpc3R9IGZyb20gJy4vLi4vZGlzcGxheS8vaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCBhZGROZXdMaXN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZE5ld0xpc3RQb3BVcCcpXG5cbmNvbnN0IGFkZE5ld0xpc3RCdXR0b24gPSBhZGROZXdMaXN0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKVxuXG5hZGROZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3TGlzdCApXG5cbmZ1bmN0aW9uIGFkZE5ld0xpc3QoKXtcbmxldCBuYW1lRm9yTmV3SW5wdXQgPSBhZGROZXdMaXN0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG5saXN0LnB1c2goTGlzdChuYW1lRm9yTmV3SW5wdXQpKVxuZGlzcGxheUxpc3QoKVxuY2xvc2VQb3BVcCgpXG59XG4iLCJpbXBvcnQge2Rpc3BsYXlMaXN0fSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCBjdXJyZW5jeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW5jeUJ1dHRvbicpO1xuY29uc3QgY3VycmVuY3lEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVuY3lQb3BVcCcpO1xuY3VycmVuY3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDdXJyZW5jeSlcblxuYXN5bmMgZnVuY3Rpb24gY2hhbmdlQ3VycmVuY3koKSB7XG4gIGxldCBvcmlnaW5hbEN1cnJlbmN5ID0gY3VycmVuY3lEaWFsb2cucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVswXS52YWx1ZVxuXG4gIGxldCB0cmFuc2Zvcm1lZEN1cnJlbmN5ID0gY3VycmVuY3lEaWFsb2cucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVsxXS52YWx1ZVxuICBsZXQgdXJsID0gbmV3IFVSTChgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2ApXG4gIFxuICB1cmwucGF0aG5hbWUgPSBgZ2gvZmF3YXphaG1lZDAvY3VycmVuY3ktYXBpQDEvbGF0ZXN0L2N1cnJlbmNpZXMvJHt0cmFuc2Zvcm1lZEN1cnJlbmN5fS8ke29yaWdpbmFsQ3VycmVuY3l9Lmpzb25gXG5cbiAgbGV0IGZldGNoUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gIGxldCBmZXRjaERhdGEgPSBhd2FpdCBmZXRjaFJlc3BvbnNlLmpzb24oKVxuICBsZXQgY3VycmVuY3lWYWx1ZSA9IGdldEN1cnJlbmN5KGZldGNoRGF0YSlcbiAgaXRlcmF0ZUFuZENoYW5nZVByaWNlcyhjdXJyZW5jeVZhbHVlKVxuICBkaXNwbGF5TGlzdCgpXG59XG5cblxuZnVuY3Rpb24gZ2V0Q3VycmVuY3koZGF0YSkge1xuICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIGxldCBvYmplY3REYXRhID0ga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgIHJldHVybiB7a2V5cyA6IGRhdGFba2V5XSB9IFxuICB9KVxuICBsZXQgW2RhdGUsY3VycmVuY3ldID0gIG9iamVjdERhdGFcbiAgY3VycmVuY3kgPSBOdW1iZXIoY3VycmVuY3kua2V5cyk7XG4gIHJldHVybiBjdXJyZW5jeVxufVxuXG5cbmZ1bmN0aW9uIGl0ZXJhdGVBbmRDaGFuZ2VQcmljZXMoY3VycmVuY3lQcmljZSl7XG4gIGZvcihsZXQgY3VycmVudExpc3Qgb2YgbGlzdCl7XG4gICAgY3VycmVudExpc3QuYXJyYXkubWFwKGl0ZW0gPT4ge1xuICAgIGl0ZW0ucHJpY2UgPSBpdGVtLnByaWNlIC8gY3VycmVuY3lQcmljZTtcbiAgICByZXR1cm4gaXRlbTt9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gXCIuLi9kaXNwbGF5L2l0ZW1zT3JMaXN0c1wiO1xuaW1wb3J0IHsgY2xvc2VQb3BVcCB9IGZyb20gXCIuL29wZW5XaW5kb3dcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2R1Y3QoKSB7XG4gIGxldCBpbmRleEZvckN1cnJlbnRJdGVtID0gTnVtYmVyKHNlbGVjdGVkSW5kZXgpO1xuICBsZXQgY3VycmVudExpc3RBcnJheSA9IGN1cnJlbnRMaXN0LmFycmF5O1xuICBjdXJyZW50TGlzdEFycmF5LnNwbGljZShpbmRleEZvckN1cnJlbnRJdGVtLCAxKTtcbiAgZGlzcGxheUxpc3QoKTtcbiAgY2xvc2VQb3BVcCgpO1xufVxuIiwiaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvQnV0dG9ucywgY2xvc2VQb3BVcCB9IGZyb20gJy4vb3BlbldpbmRvdy5qcyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1Ub051bWJlciB9IGZyb20gJy4vLi4vbGlzdC9hZGRJdGVtc1RvTGlzdC5qcyc7XG5pbXBvcnQgeyBGb29kLCBQcm9kdWN0LCBSZWdQcm9kdWN0LCBNb25leSB9IGZyb20gJy4vLi4vbGlzdC9saXN0U3RydWN0dXJlLmpzJztcbmltcG9ydCB7IGRpc3BsYXlMaXN0IH0gZnJvbSAnLi8uLi9kaXNwbGF5L2l0ZW1zT3JMaXN0cy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5RXJyb3IgfSBmcm9tICcuLy4uL2Rpc3BsYXkvZXJyb3IuanMnO1xuaW1wb3J0IHsgZGVsZXRlUHJvZHVjdCB9IGZyb20gJy4vZGVsZXRlLmpzJztcblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQb3BVcCcpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3coKSB7XG4gIGlmICh3aW5kb3cuc2VsZWN0ZWRJbmRleCkge1xuICAgIGdlbmVyYXRlQ29udGVudEZvckRpYWxvZ0Zvckl0ZW1zKClcbiAgICBhZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBoYXZlbid0IHNlbGVjdGVkIGFueXRoaW5nYClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50Rm9yTGlzdFdpbmRvdygpIHtcbiAgZ2VuZXJhdGVDb250ZW50Rm9yRGlhbG9nRm9yTGlzdHMoKVxuICBhZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JEaWFsb2dGb3JJdGVtcygpIHtcbiAgbGV0IGl0ZW0gPSBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XTtcbiAgbGV0IHNlbGVjdGVkTGlzdCA9IGxpc3Rbc2VsZWN0ZWRJbmRleF07XG4gIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBkaWFsb2cuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+bmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLm5hbWV9J3R5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8cD5hbW91bnQgb2YgZm9vZCBwZXIgcHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgIHZhbHVlPScke2l0ZW0uYW1vdW50UGVyUHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJQcmljZVwiPlxuICAgICAgICA8cD5hbW91bnQgb2YgZm9vZCBwZXIgZGF5OjwvcD5cbiAgICAgICAgPGlucHV0ICAgdmFsdWU9JyR7aXRlbS5hbW91bnRQZXJEYXl9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJEYXlcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciBtb250aDogPGJyPiA8c3Bhbj4oeW91IGVhdCk8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ubW9udGhBbW91bnR9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJtb250aEFtb3VudFwiPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8cD5vcjwvcD5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciB3ZWVrOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS53ZWVrQW1vdW50fScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwid2Vla0Ftb3VudFwiPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nZGVsZXRlJz5kZWxldGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvZHVjdCc6XG4gICAgICBkaWFsb2cuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9J2Nsb3NlQnRuJz5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8cD5uYW1lOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ubmFtZX0ndHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgPHA+cHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5wcmljZX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdkZWNpbWFsJyBpZD1cInByaWNlXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nZGVsZXRlJz5kZWxldGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVnUHJvZHVjdCc6XG4gICAgICBkaWFsb2cuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9J2Nsb3NlQnRuJz5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8cD5uYW1lOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ubmFtZX0ndHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIj5cbiAgICAgICAgPHA+cHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5wcmljZX0nIHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdkZWNpbWFsJyBpZD1cInByaWNlXCI+XG4gICAgICAgIDxwPmFtb3VudCBvZiBwcm9kdWN0czo8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRPZlJlZ1Byb2R1Y3RzXCIgdmFsdWU9JyR7aXRlbS5hbW91bnRPZlJlZ1Byb2R1Y3RzfScgcmVxdWlyZWQ+XG4gICAgICAgIDxwPmFtb3VudCBvZiBtb250aHMgcGVyIHllYXI6PC9wPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyWWVhclwiIHZhbHVlPScke2l0ZW0uYW1vdW50UGVyWWVhcn0nIHJlcXVpcmVkPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2RlbGV0ZSc+ZGVsZXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIGRpYWxvZy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz0nY2xvc2VCdG4nPmNsb3NlPC9idXR0b24+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2RlbGV0ZSc+ZGVsZXRlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGxldCBhcHBseUJ1dHRvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYXBwbHknKTtcbiAgYXBwbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhcHBseUNoYW5nZXNGb3JJdGVtcyk7XG5cblxuICBsZXQgZGVsZXRlQnV0dG9uID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNkZWxldGUnKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvZHVjdClcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50Rm9yRGlhbG9nRm9yTGlzdHMoKSB7XG5cbiAgZGlhbG9nLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+bmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtjdXJyZW50TGlzdC5uYW1lfSd0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2RlbGV0ZSc+ZGVsZXRlIGxpc3Q8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gO1xuXG4gIC8vIG5vdCB1c2luZyBnZXRFbGVtZW50QnlJZCBiZWNhdXNlIHlvdSBjYW4ndCBzZWxlY3QgaW5zaWRlIHRoZSBkaWFsb2cgcHJvcGVydHkgd2l0aCBnZXRFbGVtZW50QnlJZFxuICBsZXQgYXBwbHlCdXR0b24gPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2FwcGx5Jyk7XG4gIGxldCBkZWxldGVCdXR0b24gPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2RlbGV0ZScpO1xuICBhcHBseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFwcGx5Q2hhbmdlc0Zvckxpc3RzKTtcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlc0Zvckl0ZW1zKCkge1xuICBsZXQgaXRlbSA9IGN1cnJlbnRMaXN0LmFycmF5W3NlbGVjdGVkSW5kZXhdO1xuICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuICAgIGNhc2UgJ2Zvb2QnOlxuICAgICAgcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tRm9vZElucHV0cywgZ2V0VmFsdWVzRm9yRm9vZCwgY2hlY2tJZkZvb2RJc0VtcHR5LCByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQUZvb2QsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvZHVjdCc6XG4gICAgICBydW5Qcm9taXNlVG9BcHBseVZhbHVlKGdldFZhbHVlc0Zyb21Qcm9kdWN0SW5wdXRzLCBnZXRWYWx1ZXNGb3JQcm9kdWN0LCBjaGVja0lmUHJvZHVjdElzRW1wdHksIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBUHJvZHVjdCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZWdQcm9kdWN0JzpcbiAgICAgIHJ1blByb21pc2VUb0FwcGx5VmFsdWUoZ2V0VmFsdWVzRnJvbVJlZ1Byb2R1Y3RJbnB1dHMsIGdldFZhbHVlc0ZvclJlZ1Byb2R1Y3QsIGNoZWNrSWZSZWdQcm9kdWN0SXNFbXB0eSwgcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FSZWdQcm9kdWN0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIHJ1blByb21pc2VUb0FwcGx5VmFsdWUoZ2V0VmFsdWVzRnJvbU1vbmV5SW5wdXRzLCBnZXRWYWx1ZXNGb3JNb25leSwgY2hlY2tJZk1vbmV5SXNFbXB0eSwgcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c01vbmV5KTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJ1blByb21pc2VUb0FwcGx5VmFsdWUoZ2V0VmFsdWVzRnJvbUlucHV0X2NhbGxiYWNrLCBnZXRWYWx1ZXNGb3JfY2FsbEJhY2ssIGNoZWNrSWZJdGVtSXNFbXB0eV9jYWxsQmFjaywgcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FfY2FsbEJhY2ssIHdvcmtpbmdXaXRoRm9vZCA9IGZhbHNlLCkge1xuICB3aW5kb3cud29ya2luZ1dpdGhGb29kID0gd29ya2luZ1dpdGhGb29kO1xuICAvLyByZW1lbWJlciB0byBhZGQgdmFsaWRpdHkgaW4gdGhlIGNhdGNoIGluIGFsbCBvZiB0aGVzZSBcbiAgZ2V0VmFsdWVzRnJvbUlucHV0X2NhbGxiYWNrKClcbiAgICAudGhlbihnZXRWYWx1ZXNGb3JfY2FsbEJhY2spXG4gICAgLnRoZW4oY2hlY2tJZkl0ZW1Jc0VtcHR5X2NhbGxCYWNrKVxuICAgIC50aGVuKG1ha2VXZWVrc09yTW9udGhzVmFsaWQpXG4gICAgLnRoZW4ocmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FfY2FsbEJhY2spXG4gICAgLnRoZW4oZGlzcGxheUxpc3QpXG4gICAgLnRoZW4oY2xvc2VQb3BVcClcbiAgICAuY2F0Y2goZXJyb3IgPT4gZGlzcGxheUVycm9yKGVycm9yKSk7XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbUZvb2RJbnB1dHMoKSB7XG4gIGxldCBuYW1lID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gIGxldCBwcmljZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjcHJpY2UnKS52YWx1ZTtcbiAgbGV0IGFtb3VudFBlclByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNhbW91bnRQZXJQcmljZScpLnZhbHVlO1xuICBsZXQgYW1vdW50UGVyRGF5ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNhbW91bnRQZXJEYXknKS52YWx1ZTtcbiAgbGV0IG1vbnRoQW1vdW50ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNtb250aEFtb3VudCcpLnZhbHVlO1xuICBsZXQgd2Vla0Ftb3VudCA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjd2Vla0Ftb3VudCcpLnZhbHVlO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSwgYW1vdW50UGVyUHJpY2UsIGFtb3VudFBlckRheSwgbW9udGhBbW91bnQsIHdlZWtBbW91bnQgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbVByb2R1Y3RJbnB1dHMoKSB7XG4gIGxldCBuYW1lID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gIGxldCBwcmljZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjcHJpY2UnKS52YWx1ZTtcbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbVJlZ1Byb2R1Y3RJbnB1dHMoKSB7XG4gIGxldCBuYW1lID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJykudmFsdWU7XG4gIGxldCBwcmljZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjcHJpY2UnKS52YWx1ZTtcbiAgbGV0IGFtb3VudFBlclllYXIgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2Ftb3VudFBlclllYXInKS52YWx1ZTtcbiAgbGV0IGFtb3VudE9mUmVnUHJvZHVjdHMgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2Ftb3VudE9mUmVnUHJvZHVjdHMnKS52YWx1ZTtcbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIGFtb3VudFBlclllYXIsIGFtb3VudE9mUmVnUHJvZHVjdHMgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbU1vbmV5SW5wdXRzKCkge1xuICBsZXQgcHJpY2UgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI3ByaWNlJykudmFsdWU7XG4gIHJldHVybiB7IHByaWNlIH07XG59XG5cblxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JGb29kKGZvb2QpIHtcbiAgbGV0IG5hbWUgPSBmb29kLm5hbWU7XG4gIGxldCBwcmljZSA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2QucHJpY2UpO1xuICBsZXQgYW1vdW50UGVyUHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLmFtb3VudFBlclByaWNlKTtcbiAgbGV0IGFtb3VudFBlckRheSA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2QuYW1vdW50UGVyRGF5KTtcbiAgbGV0IG1vbnRoQW1vdW50ID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC5tb250aEFtb3VudCk7XG4gIGxldCB3ZWVrQW1vdW50ID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC53ZWVrQW1vdW50KTtcbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIGFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXksIG1vbnRoQW1vdW50LCB3ZWVrQW1vdW50IH1cbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWVzRm9yUHJvZHVjdChwcm9kdWN0KSB7XG4gIGxldCBuYW1lID0gcHJvZHVjdC5uYW1lO1xuICBsZXQgcHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihwcm9kdWN0LnByaWNlKTtcbiAgcmV0dXJuIHsgbmFtZSwgcHJpY2UgfVxufVxuXG5cbmZ1bmN0aW9uIGdldFZhbHVlc0ZvclJlZ1Byb2R1Y3QocHJvZHVjdCkge1xuICBsZXQgbmFtZSA9IHByb2R1Y3QubmFtZTtcbiAgbGV0IHByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIocHJvZHVjdC5wcmljZSk7XG4gIGxldCBhbW91bnRQZXJZZWFyID0gdHJhbnNmb3JtVG9OdW1iZXIocHJvZHVjdC5hbW91bnRQZXJZZWFyKTtcbiAgbGV0IGFtb3VudE9mUmVnUHJvZHVjdHMgPSB0cmFuc2Zvcm1Ub051bWJlcihwcm9kdWN0LmFtb3VudE9mUmVnUHJvZHVjdHMpO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSwgYW1vdW50UGVyWWVhciwgYW1vdW50T2ZSZWdQcm9kdWN0cyB9XG59XG5cblxuZnVuY3Rpb24gZ2V0VmFsdWVzRm9yTW9uZXkobW9uZXkpIHtcbiAgbGV0IHByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIobW9uZXkucHJpY2UpO1xuICByZXR1cm4geyBwcmljZSB9XG59XG5cblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZGb29kSXNFbXB0eShmb29kKSB7XG4gIC8vIGNoZWNrIGVtcHR5bmVzcyBcbiAgY2hlY2tJZkVtcHR5KGZvb2QubmFtZSwgJ3RoZSBuYW1lIG9mIHRoZSBmb29kJyk7XG4gIGNoZWNrSWZFbXB0eShmb29kLnByaWNlLCAndGhlIHByaWNlIG9mIHRoZSBmb29kJyk7XG4gIGNoZWNrSWZFbXB0eShmb29kLmFtb3VudFBlclByaWNlLCAndGhlIGFtb3VudCBvZiBmb29kIHBlciBwcmljZScpO1xuICBjaGVja0lmRW1wdHkoZm9vZC5hbW91bnRQZXJEYXksICd0aGUgYW1vdW50IG9mIGZvb2QgcGVyIGRheScpO1xuICBjaGVja0lmRWl0aGVyTW9udGhPcldlZWtJc0VtcHR5KGZvb2Qud2Vla0Ftb3VudCwgZm9vZC5tb250aEFtb3VudCk7XG5cbiAgbGltaXROdW1iZXIoZm9vZC53ZWVrQW1vdW50LCA3LCAnd2Vla3MgY2FuIG9ubHkgYmUgNyBkYXlzIGxvbmdzJylcbiAgbGltaXROdW1iZXIoZm9vZC5tb250aEFtb3VudCwgMzEsICdtb250aHMgY2FuIG9ubHkgYmUgMzEgZGF5cyBsb25nJylcblxuICByZXR1cm4geyBuYW1lOiBmb29kLm5hbWUsIHByaWNlOiBmb29kLnByaWNlLCBhbW91bnRQZXJQcmljZTogZm9vZC5hbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5OiBmb29kLmFtb3VudFBlckRheSwgd2Vla0Ftb3VudDogZm9vZC53ZWVrQW1vdW50LCBtb250aEFtb3VudDogZm9vZC5tb250aEFtb3VudCB9XG59XG5mdW5jdGlvbiBjaGVja0lmRWl0aGVyTW9udGhPcldlZWtJc0VtcHR5KHdlZWssIG1vbnRoKSB7XG4gIGlmIChjaGVja1dpdGhvdXRFcnJvcih3ZWVrLCAnd2VlaycpICYmIGNoZWNrV2l0aG91dEVycm9yKG1vbnRoLCAnbW9udGgnKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgeW91IGhhdmVuJ3QgZmlsbGVkIG5laXRoZXIgdGhlIGFtb3VudCBvZiBkYXlzIHBlciB3ZWVrIG5vciB0aGUgYW1vdW50IG9mIGRheXMgcGVyIHRoZSBtb250aGApXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjaGVja1dpdGhvdXRFcnJvcihpdGVtLCBuYW1lKSB7XG4gIGlmIChgJHtpdGVtfWAgPT0gJ05hTicpIHtcbiAgICByZXR1cm4gYHlvdSBkaWRuJ3QgZmlsbCB0aGUgJHtuYW1lfWA7XG4gIH1cbiAgZWxzZSBpZiAoIWAke2l0ZW19YCkge1xuICAgIHJldHVybiBgeW91IGRpZG4ndCBmaWxsIHRoZSAke25hbWV9YDtcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGxpbWl0TnVtYmVyKG51bWJlclRvQ2hlY2ssIGxpbWl0LCBtZXNzYWdlKSB7XG4gIGlmIChOdW1iZXIobnVtYmVyVG9DaGVjaykgPiBOdW1iZXIobGltaXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZQcm9kdWN0SXNFbXB0eShwcm9kdWN0KSB7XG4gIC8vIGNoZWNrIGVtcHR5bmVzcyBcbiAgY2hlY2tJZkVtcHR5KHByb2R1Y3QubmFtZSwgJ3RoZSBuYW1lIG9mIHRoZSBwcm9kdWN0Jyk7XG4gIGNoZWNrSWZFbXB0eShwcm9kdWN0LnByaWNlLCAndGhlIHByaWNlIG9mIHRoZSBwcm9kdWN0Jyk7XG5cbiAgcmV0dXJuIHsgbmFtZTogcHJvZHVjdC5uYW1lLCBwcmljZTogcHJvZHVjdC5wcmljZSB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZSZWdQcm9kdWN0SXNFbXB0eShwcm9kdWN0KSB7XG4gIC8vIGNoZWNrIGVtcHR5bmVzcyBcbiAgY2hlY2tJZkVtcHR5KHByb2R1Y3QubmFtZSwgJ3RoZSBuYW1lIG9mIHRoZSBwcm9kdWN0Jyk7XG4gIGNoZWNrSWZFbXB0eShwcm9kdWN0LnByaWNlLCAndGhlIHByaWNlIG9mIHRoZSBwcm9kdWN0Jyk7XG4gIGNoZWNrSWZFbXB0eShwcm9kdWN0LmFtb3VudFBlclllYXIsICd0aGUgYW1vdW50IG9mIG1vbnRocyBwZXIgeWVhciBvZiB0aGUgcHJvZHVjdCcpO1xuICBjaGVja0lmRW1wdHkocHJvZHVjdC5hbW91bnRPZlJlZ1Byb2R1Y3RzLCAndGhlIGFtb3VudCBvZiBwcm9kdWN0Jyk7XG5cbiAgcmV0dXJuIHsgbmFtZTogcHJvZHVjdC5uYW1lLCBwcmljZTogcHJvZHVjdC5wcmljZSwgYW1vdW50UGVyWWVhcjogcHJvZHVjdC5hbW91bnRPZlJlZ1Byb2R1Y3RzLCBhbW91bnRPZlJlZ1Byb2R1Y3RzOiBwcm9kdWN0LmFtb3VudE9mUmVnUHJvZHVjdHMgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmTW9uZXlJc0VtcHR5KG1vbmV5KSB7XG4gIC8vIGNoZWNrIGVtcHR5bmVzcyBcbiAgY2hlY2tJZkVtcHR5KG1vbmV5LnByaWNlLCAnYW55IG1vbmV5Jyk7XG5cbiAgcmV0dXJuIHsgcHJpY2U6IG1vbmV5LnByaWNlIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZkVtcHR5KGVsZW1lbnQsIG5hbWVPZkVsZW1lbnRGb3JFbXB0eU1lc3NhZ2UpIHtcbiAgaWYgKGAke2VsZW1lbnR9YCA9PSAnTmFOJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgeW91IGRpZG4ndCBmaWxsICR7bmFtZU9mRWxlbWVudEZvckVtcHR5TWVzc2FnZX1gKTtcbiAgfVxuICBlbHNlIGlmICghYCR7ZWxlbWVudH1gKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgZGlkbid0IGZpbGwgJHtuYW1lT2ZFbGVtZW50Rm9yRW1wdHlNZXNzYWdlfWApO1xuICB9XG59XG5cblxuXG5mdW5jdGlvbiBtYWtlV2Vla3NPck1vbnRoc1ZhbGlkKGZvb2QpIHtcbiAgaWYgKHdpbmRvdy53b3JraW5nV2l0aEZvb2QpIHtcblxuICAgIGxldCBpdGVtID0gY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF07XG4gICAgLy8gY2hlY2sgaWYgdGhlIHdlZWsgb3IgdGhlIG1vbnRoIGlzIGZhbHNlXG4gICAgbGV0IHdlZWtFcXVhbCA9IGZhbHNlO1xuICAgIGxldCBtb250aEVxdWFsID0gZmFsc2U7XG4gICAgaWYgKGl0ZW0ud2Vla0Ftb3VudCA9PSBmb29kLndlZWtBbW91bnQpIHtcbiAgICAgIHdlZWtFcXVhbCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChpdGVtLm1vbnRoQW1vdW50ID09IGZvb2QubW9udGhBbW91bnQpIHtcbiAgICAgIG1vbnRoRXF1YWwgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGNoYW5nZSB0aGUgb3RoZXIgdmFsdWUgaWYgb25lIG9mIHRob3NlIGlzIGZhbHNlIGJ1dCB0aGUgb3RoZXIgb25lIGlzIHRydWVcbiAgICBpZiAod2Vla0VxdWFsID09IHRydWUgJiYgbW9udGhFcXVhbCA9PSBmYWxzZSkge1xuICAgICAgZm9vZC53ZWVrQW1vdW50ID0gcGFyc2VJbnQoZm9vZC5tb250aEFtb3VudCAvIDQpXG4gICAgfVxuICAgIGVsc2UgaWYgKHdlZWtFcXVhbCA9PSBmYWxzZSAmJiBtb250aEVxdWFsID09IHRydWUpIHtcbiAgICAgIGZvb2QubW9udGhBbW91bnQgPSBwYXJzZUludChmb29kLndlZWtBbW91bnQgKiA0KVxuICAgIH1cblxuICAgIHJldHVybiB7IG5hbWU6IGZvb2QubmFtZSwgcHJpY2U6IGZvb2QucHJpY2UsIGFtb3VudFBlclByaWNlOiBmb29kLmFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXk6IGZvb2QuYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50OiBmb29kLndlZWtBbW91bnQsIG1vbnRoQW1vdW50OiBmb29kLm1vbnRoQW1vdW50IH1cblxuXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIGZvb2Q7XG4gIH1cbn1cblxuXG5cblxuXG5mdW5jdGlvbiByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQUZvb2QoZm9vZCkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IEZvb2QoZm9vZC5uYW1lLCBmb29kLnByaWNlLCBmb29kLmFtb3VudFBlclByaWNlLCBmb29kLmFtb3VudFBlckRheSwgZm9vZC53ZWVrQW1vdW50LCBmb29kLm1vbnRoQW1vdW50KVxufVxuXG5mdW5jdGlvbiByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQVByb2R1Y3QocHJvZHVjdCkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IFByb2R1Y3QocHJvZHVjdC5uYW1lLCBwcm9kdWN0LnByaWNlKVxufVxuXG5mdW5jdGlvbiByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQVJlZ1Byb2R1Y3QocHJvZHVjdCkge1xuICBsZXQgeyBuYW1lLCBwcmljZSwgYW1vdW50UGVyWWVhciwgYW1vdW50T2ZSZWdQcm9kdWN0cyB9ID0gcHJvZHVjdDtcbiAgY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF0gPSBSZWdQcm9kdWN0KG5hbWUsIHByaWNlLCBhbW91bnRQZXJZZWFyLCBhbW91bnRPZlJlZ1Byb2R1Y3RzKVxufVxuXG5cbmZ1bmN0aW9uIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNNb25leShtb25leSkge1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IE1vbmV5KG1vbmV5LnByaWNlKVxufVxuXG5cblxuXG5mdW5jdGlvbiBhcHBseUNoYW5nZXNGb3JMaXN0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgY3VycmVudExpc3QubmFtZSA9IG5hbWU7XG4gIGRpc3BsYXlMaXN0KClcbiAgY2xvc2VQb3BVcCgpXG59XG5cblxuZnVuY3Rpb24gZGVsZXRlTGlzdCgpIHtcbiAgdHJ5IHtcbiAgICBsZXQgbGlzdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RMaXN0Jyk7XG4gICAgbGV0IGxpc3RJbmRleCA9IE51bWJlcihsaXN0U2VsZWN0LnZhbHVlKTtcbiAgICBpZiAod2luZG93Lmxpc3QubGVuZ3RoID09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgeW91IGNhbid0IGRlbGV0ZSB0aGlzIGJlY2F1c2UgaXQncyB0aGUgb25seSBsaXN0YClcbiAgICB9XG4gICAgd2luZG93Lmxpc3Quc3BsaWNlKGxpc3RJbmRleCwgMSlcbiAgICBsaXN0U2VsZWN0LnZhbHVlID0gMDtcbiAgICBkaXNwbGF5TGlzdCgpXG4gICAgY2xvc2VQb3BVcCgpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKVxuICB9XG59XG4iLCJpbXBvcnQgeyBkaXNwbGF5TGlzdH0gZnJvbSAnLi8uLi9kaXNwbGF5L2l0ZW1zT3JMaXN0cy5qcydcblxuY29uc3QgY2hhbmdlQ29sb3JCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhcnRpY2xlOmZpcnN0LW9mLXR5cGUgYnV0dG9uOmZpcnN0LW9mLXR5cGUnKTtcblxuY2hhbmdlQ29sb3JCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuQ29sb3JXaW5kb3cpXG5mdW5jdGlvbiBvcGVuQ29sb3JXaW5kb3coKSB7XG5cbiAgdXBkYXRlVmFsdWVzRnJvbUNvbG9yT2JqZWN0KClcbiAgbGV0IGNvbG9yV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yUG9wVXAnKTtcbiAgY29sb3JXaW5kb3cuc2hvd01vZGFsKClcblxuICBmb3IgKGxldCBjb2xvclBpY2tlciBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYCkpIHtcbiAgICBjb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1cGRhdGVDb2xvcnMpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29sb3JzKCkge1xuICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NOYW1lID09ICdkYXJrJyl7XG4gIHdpbmRvdy5jb2xvci5kYXJrLmZvb2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMF0udmFsdWVcbiAgd2luZG93LmNvbG9yLmRhcmsucHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVsxXS52YWx1ZVxuICB3aW5kb3cuY29sb3IuZGFyay5yZWdQcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzJdLnZhbHVlXG4gIHdpbmRvdy5jb2xvci5kYXJrLm1vbmV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzNdLnZhbHVlXG4gIH1cbiAgZWxzZXtcbiAgd2luZG93LmNvbG9yLmxpZ2h0LmZvb2QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMF0udmFsdWVcbiAgd2luZG93LmNvbG9yLmxpZ2h0LnByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMV0udmFsdWVcbiAgd2luZG93LmNvbG9yLmxpZ2h0LnJlZ1Byb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMl0udmFsdWVcbiAgd2luZG93LmNvbG9yLmxpZ2h0Lm1vbmV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzNdLnZhbHVlXG4gIH1cbiAgZGlzcGxheUxpc3QoKVxufVxuXG5cblxuZnVuY3Rpb24gdXBkYXRlVmFsdWVzRnJvbUNvbG9yT2JqZWN0KCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTmFtZSA9PSAnZGFyaycpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMF0udmFsdWUgPSB3aW5kb3cuY29sb3IuZGFyay5mb29kXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzFdLnZhbHVlID0gd2luZG93LmNvbG9yLmRhcmsucHJvZHVjdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVsyXS52YWx1ZSA9IHdpbmRvdy5jb2xvci5kYXJrLnJlZ1Byb2R1Y3RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbM10udmFsdWUgPSB3aW5kb3cuY29sb3IuZGFyay5tb25leVxuICB9XG4gIGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVswXS52YWx1ZSA9IHdpbmRvdy5jb2xvci5saWdodC5mb29kXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzFdLnZhbHVlID0gd2luZG93LmNvbG9yLmxpZ2h0LnByb2R1Y3RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMl0udmFsdWUgPSB3aW5kb3cuY29sb3IubGlnaHQucmVnUHJvZHVjdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVszXS52YWx1ZSA9IHdpbmRvdy5jb2xvci5saWdodC5tb25leVxuICB9XG59XG4iLCJpbXBvcnQgeyBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3csIGdlbmVyYXRlQ29udGVudEZvckxpc3RXaW5kb3cgfSBmcm9tICcuL2dlbmVyYXRlQ29udGVudEZvckVkaXRXaW5kb3cuanMnO1xuaW1wb3J0IHsgZGlzcGxheUVycm9yIH0gZnJvbSAnLi8uLi9kaXNwbGF5L2Vycm9yLmpzJztcblxuXG5jb25zdCBlZGl0Q3VycmVudExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdENvbnRhaW5lciBkaXYgYnV0dG9uJyk7XG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uJyk7XG5jb25zdCBhZGROZXdMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpc3RDb250YWluZXIgYnV0dG9uOm50aC1vZi10eXBlKDIpJyk7XG5jb25zdCBjdXJyZW5jeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlQ29udGFpbmVyIGJ1dHRvbicpO1xuXG5cbmNvbnN0IGFkZE5ld0xpc3REaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkTmV3TGlzdFBvcFVwJyk7XG5jb25zdCBlZGl0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQb3BVcCcpO1xuY29uc3QgY3VycmVuY3lEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVuY3lQb3BVcCcpO1xuXG5cblxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlQ29udGVudEFuZE9wZW5XaW5kb3cpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvdygpIHtcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3coKVxuICAgIG9wZW5XaW5kb3coZWRpdERpYWxvZylcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZWRpdEN1cnJlbnRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvd0Zvckxpc3QpXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRBbmRPcGVuV2luZG93Rm9yTGlzdCgpIHtcbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZUNvbnRlbnRGb3JMaXN0V2luZG93KClcbiAgICBvcGVuV2luZG93KGVkaXREaWFsb2cpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKTtcbiAgfVxufVxuXG5cbmFkZE5ld0xpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBvcGVuV2luZG93KGFkZE5ld0xpc3REaWFsb2cpKTtcbmN1cnJlbmN5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlbldpbmRvdyhjdXJyZW5jeURpYWxvZykpO1xuXG5mdW5jdGlvbiBvcGVuV2luZG93KGRpYWxvZykge1xuICBkaWFsb2cuc2hvd01vZGFsKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMoKSB7XG4gIGZvciAobGV0IGNsb3NlQnRuIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZUJ0bicpKSB7XG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcFVwKVxuICB9XG59XG5hZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUG9wVXAoKSB7XG4gIGZvciAobGV0IGRpYWxvZyBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaWFsb2cnKSkge1xuICAgIGlmIChkaWFsb2cub3Blbikge1xuICAgICAgZGlhbG9nLmNsb3NlKClcbiAgICB9XG4gIH1cbn1cbiIsIlxuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xuY29uc3QgZGFya01vZGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgYnV0dG9uJylcblxuXG53aW5kb3cuc3dpdGNoVG9EYXJrTW9kZSA9IGZ1bmN0aW9uKCkge1xuICBodG1sLmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKVxuICBpZiAoaHRtbC5jbGFzc05hbWUgPT0gJ2RhcmsnKSB7XG4gICAgZGFya01vZGVCdXR0b24uaW5uZXJUZXh0ID0gJ2xpZ2h0IG1vZGUnO1xuICB9XG4gIGVsc2Uge1xuICAgIGRhcmtNb2RlQnV0dG9uLmlubmVyVGV4dCA9ICdkYXJrIG1vZGUnO1xuICB9XG59XG5cblxuXG5kYXJrTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICBzd2l0Y2hUb0RhcmtNb2RlKCk7XG59KVxuXG5sZXQgaXNEYXJrTW9kZUVuYWJsZWQgPSBtYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlc1xuaWYgKGlzRGFya01vZGVFbmFibGVkKSB7XG4gIHN3aXRjaFRvRGFya01vZGUoKVxuXG5cbn1cblxuXG5cblxuXG4iLCJpbXBvcnQgaW1nIGZyb20gJy4vaWNvbi5wbmcnO1xuXG5jb25zdCBpY29uTGluayA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbGluaycpO1xuaWNvbkxpbmsuaHJlZiA9IGltZztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc2VsZWN0ZWR7XG5ib3JkZXItcmFkaXVzOjVweDtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcbnBhZGRpbmc6NXB4O1xuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUIsV0FBVzs7QUFFWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VsZWN0ZWR7XFxuYm9yZGVyLXJhZGl1czo1cHg7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbnBhZGRpbmc6NXB4O1xcblxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290LmRhcmt7XG4tLWJsYWNrOndoaXRlO1xuLS13aGl0ZTpibGFjaztcbi0tZ3JlZW46IzAxMjEyMDtcbi0teWVsbG93OiAjRUVFRTlCO1xuLS1saWdodFllbGxvdzogI0Y1QkIwMDtcbi0tcmVkOiNkYzE0M2M7XG4tLWxpZ2h0UmVkOiNFRDY0NjQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvZGFya21vZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsYUFBYTtBQUNiLGFBQWE7QUFDYixlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290LmRhcmt7XFxuLS1ibGFjazp3aGl0ZTtcXG4tLXdoaXRlOmJsYWNrO1xcbi0tZ3JlZW46IzAxMjEyMDtcXG4tLXllbGxvdzogI0VFRUU5QjtcXG4tLWxpZ2h0WWVsbG93OiAjRjVCQjAwO1xcbi0tcmVkOiNkYzE0M2M7XFxuLS1saWdodFJlZDojRUQ2NDY0O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYShtaW4td2lkdGg6NTAwcHgpe1xuYXJ0aWNsZSBmb3JtIGRpdntcbmZsZXgtZGlyZWN0aW9uOnJvdztcbn19XG5cblxuQG1lZGlhKG1pbi13aWR0aDo5MDBweCl7XG5oZWFkZXJ7XG5nYXA6NHB4O1xuXG4gIH1cblxuaGVhZGVyIHNwYW57XG5kaXNwbGF5OmlubGluZTtcbmZvbnQtc2l6ZToyLjJ2dztcbiAgfVxuXG5tYWlue1xuaGVpZ2h0Ojkwdmg7XG5taW4taGVpZ2h0OiA1NTBweDtcbmdyaWQtdGVtcGxhdGU6J2V4cGVuc2VUeXBlIGV4cGVuc2VDb250ZW50JyAwLjlmclxuICAgICAgICAgICAgICAndHlwZU9mQ2FsY3VsYXRpb24gZXhwZW5zZUNvbnRlbnQnIDAuOWZyICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAnc2hvd0xpc3QgZXhwZW5zZUNvbnRlbnQnIDFmclxuICAgICAgICAgICAgICAnc2hvd0xpc3QgcmVzdWx0Q29udGVudCcgMWZyIC8gMWZyIDFmclxufVxuXG5cbiAgLyogb24gdGhlIGxlZnQgKi9cbm1haW4gYXJ0aWNsZTpmaXJzdC1vZi10eXBle1xuZ3JpZC1hcmVhOiBleHBlbnNlVHlwZTtcbn1cbiN0eXBlQ29udGFpbmVye1xuZ3JpZC1hcmVhOnR5cGVPZkNhbGN1bGF0aW9uO1xufVxuI2xpc3RDb250YWluZXJ7XG5ncmlkLWFyZWE6c2hvd0xpc3Q7XG59XG5cbi8qIG9uIHRoZSByaWdodCAqL1xuXG4jZXhwZW5zZUNvbnRlbnR7XG5ncmlkLWFyZWE6ZXhwZW5zZUNvbnRlbnQ7XG59XG4jcmVzdWx0Q29udGVudHtcbmdyaWQtYXJlYTpyZXN1bHRDb250ZW50O1xufVxuXG5cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vaW5wdXQvc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsT0FBTzs7RUFFTDs7QUFFRjtBQUNBLGNBQWM7QUFDZCxlQUFlO0VBQ2I7O0FBRUY7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCOzs7O0FBSUE7OztFQUdFLGdCQUFnQjtBQUNsQjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOzs7QUFHQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEobWluLXdpZHRoOjUwMHB4KXtcXG5hcnRpY2xlIGZvcm0gZGl2e1xcbmZsZXgtZGlyZWN0aW9uOnJvdztcXG59fVxcblxcblxcbkBtZWRpYShtaW4td2lkdGg6OTAwcHgpe1xcbmhlYWRlcntcXG5nYXA6NHB4O1xcblxcbiAgfVxcblxcbmhlYWRlciBzcGFue1xcbmRpc3BsYXk6aW5saW5lO1xcbmZvbnQtc2l6ZToyLjJ2dztcXG4gIH1cXG5cXG5tYWlue1xcbmhlaWdodDo5MHZoO1xcbm1pbi1oZWlnaHQ6IDU1MHB4O1xcbmdyaWQtdGVtcGxhdGU6J2V4cGVuc2VUeXBlIGV4cGVuc2VDb250ZW50JyAwLjlmclxcbiAgICAgICAgICAgICAgJ3R5cGVPZkNhbGN1bGF0aW9uIGV4cGVuc2VDb250ZW50JyAwLjlmciAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICdzaG93TGlzdCBleHBlbnNlQ29udGVudCcgMWZyXFxuICAgICAgICAgICAgICAnc2hvd0xpc3QgcmVzdWx0Q29udGVudCcgMWZyIC8gMWZyIDFmclxcbn1cXG5cXG5cXG4gIC8qIG9uIHRoZSBsZWZ0ICovXFxubWFpbiBhcnRpY2xlOmZpcnN0LW9mLXR5cGV7XFxuZ3JpZC1hcmVhOiBleHBlbnNlVHlwZTtcXG59XFxuI3R5cGVDb250YWluZXJ7XFxuZ3JpZC1hcmVhOnR5cGVPZkNhbGN1bGF0aW9uO1xcbn1cXG4jbGlzdENvbnRhaW5lcntcXG5ncmlkLWFyZWE6c2hvd0xpc3Q7XFxufVxcblxcbi8qIG9uIHRoZSByaWdodCAqL1xcblxcbiNleHBlbnNlQ29udGVudHtcXG5ncmlkLWFyZWE6ZXhwZW5zZUNvbnRlbnQ7XFxufVxcbiNyZXN1bHRDb250ZW50e1xcbmdyaWQtYXJlYTpyZXN1bHRDb250ZW50O1xcbn1cXG5cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjbGlzdHtcbmJvcmRlci1yYWRpdXM6MTJweDtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbndpZHRoOjkwJTtcbmhlaWdodDo5MCU7XG5vdmVyZmxvdy15OnNjcm9sbDtcbn1cblxuXG5saXtcbmxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbiNsaXN0IGxpLnNlbGVjdGVkSXRlbXtcbm91dGxpbmU6IDJweCBzb2xpZCBvcmFuZ2U7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvbGlzdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCxVQUFVO0FBQ1YsaUJBQWlCO0FBQ2pCOzs7QUFHQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbGlzdHtcXG5ib3JkZXItcmFkaXVzOjEycHg7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbndpZHRoOjkwJTtcXG5oZWlnaHQ6OTAlO1xcbm92ZXJmbG93LXk6c2Nyb2xsO1xcbn1cXG5cXG5cXG5saXtcXG5saXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jbGlzdCBsaS5zZWxlY3RlZEl0ZW17XFxub3V0bGluZTogMnB4IHNvbGlkIG9yYW5nZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBkaWFsb2d7XG50ZXh0LWFsaWduOmNlbnRlcjtcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5wb3NpdGlvbjpmaXhlZDtcbnRvcDo1MCU7XG5sZWZ0OjUwJTtcbnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG56LWluZGV4OjI7XG5wYWRkaW5nOjEuMnZ3O1xuYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG5kaWFsb2cgPiAqe1xuZGlzcGxheTpibG9jaztcbm1hcmdpbi1sZWZ0OmF1dG87XG5tYXJnaW4tcmlnaHQ6YXV0bztcbm1hcmdpbi10b3A6MTBweDtcblxufVxuICBcbmRpYWxvZzo6YmFja2Ryb3B7XG5wb3NpdGlvbjpmaXhlZDtcbmJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCMyMTVBNTlBQSxibGFjaykgO1xuYmFja2dyb3VuZC1zaXplOmNvdmVyO1xub3BhY2l0eTowLjc7XG59XG5cblxuLyogZXJyb3IgcG9wIHVwICovXG5cbiNlcnJvclBvcFVwLCAjZXJyb3JQb3BVcCBoMntcbm9wYWNpdHk6MDtcbnRyYW5zaXRpb246IG9wYWNpdHkgMXM7XG56LWluZGV4OjEwO1xudG9wOjgwJTtcbndpZHRoOjkwJTtcbmNvbG9yOiB2YXIoLS1yZWQpO1xufVxuI2Vycm9yUG9wVXA6OmJhY2tkcm9we1xuYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoIzVBMjMyMUFBLGJsYWNrKSA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvcG9wdXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3QixrQkFBa0I7QUFDbEIsNkJBQTZCO0FBQzdCLGNBQWM7QUFDZCxPQUFPO0FBQ1AsUUFBUTtBQUNSLCtCQUErQjtBQUMvQixTQUFTO0FBQ1QsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGVBQWU7O0FBRWY7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0RBQWtEO0FBQ2xELHFCQUFxQjtBQUNyQixXQUFXO0FBQ1g7OztBQUdBLGlCQUFpQjs7QUFFakI7QUFDQSxTQUFTO0FBQ1Qsc0JBQXNCO0FBQ3RCLFVBQVU7QUFDVixPQUFPO0FBQ1AsU0FBUztBQUNULGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpYWxvZ3tcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG5jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucG9zaXRpb246Zml4ZWQ7XFxudG9wOjUwJTtcXG5sZWZ0OjUwJTtcXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbnotaW5kZXg6MjtcXG5wYWRkaW5nOjEuMnZ3O1xcbmJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuXFxuZGlhbG9nID4gKntcXG5kaXNwbGF5OmJsb2NrO1xcbm1hcmdpbi1sZWZ0OmF1dG87XFxubWFyZ2luLXJpZ2h0OmF1dG87XFxubWFyZ2luLXRvcDoxMHB4O1xcblxcbn1cXG4gIFxcbmRpYWxvZzo6YmFja2Ryb3B7XFxucG9zaXRpb246Zml4ZWQ7XFxuYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoIzIxNUE1OUFBLGJsYWNrKSA7XFxuYmFja2dyb3VuZC1zaXplOmNvdmVyO1xcbm9wYWNpdHk6MC43O1xcbn1cXG5cXG5cXG4vKiBlcnJvciBwb3AgdXAgKi9cXG5cXG4jZXJyb3JQb3BVcCwgI2Vycm9yUG9wVXAgaDJ7XFxub3BhY2l0eTowO1xcbnRyYW5zaXRpb246IG9wYWNpdHkgMXM7XFxuei1pbmRleDoxMDtcXG50b3A6ODAlO1xcbndpZHRoOjkwJTtcXG5jb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuI2Vycm9yUG9wVXA6OmJhY2tkcm9we1xcbmJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCM1QTIzMjFBQSxibGFjaykgO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9vY2VhbmljZHJpZnQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250L0N5Ym9yZyBQdW5rLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIG1vYmlsZSBmaXJzdCAzMDB4NDQwICovXG5cblxuQGZvbnQtZmFjZXtcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XG5zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZXtcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcbnNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4qe1xucGFkZGluZzogMDtcbm1hcmdpbjowO1xuYm94LXNpemluZzpib3JkZXItYm94O1xufVxuXG46cm9vdHtcblxuLyogY29sb3Igc2VjdGlvbiAqL1xuLS1ibGFjazogYmxhY2s7XG4tLXdoaXRlOiB3aGl0ZTtcbi0tZ3JlZW46ICMwOUZGOTk7XG4tLXllbGxvdzogI0Y1QkIwMDtcbi0tbGlnaHRZZWxsb3c6ICNFRUVFOUI7XG4tLXJlZDojRUQ2NDY0O1xuLS1saWdodFJlZDojZGMxNDNjO1xufVxuXG4vKiByZXBldGl0aW9uIHNlY3Rpb24gKi9cblxuXG5cbmhlYWRlciwgYXJ0aWNsZXtcbmRpc3BsYXk6ZmxleDtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG50ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxubWFpbntcbmRpc3BsYXk6Z3JpZDtcbn1cblxuLyogaW5kaXZpZHVhbCBzZWN0aW9uICovXG5cbmJvZHl7XG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuY29sb3I6IHZhcigtLWJsYWNrKTtcbnRyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvciwgY29sb3I7XG50cmFuc2l0aW9uLWR1cmF0aW9uOjJzO1xufVxuXG5pbnB1dFt0eXBlPSdmaWxlJ117XG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xuZm9udC1zaXplOjAuOXJlbTtcbn1cblxuaGVhZGVye1xuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spXG59XG5cbmhlYWRlciBoMXtcbmZvbnQtc2l6ZTptYXgoMXJlbSwzLjh2dyk7XG59XG5oZWFkZXIgc3BhbntcbmRpc3BsYXk6YmxvY2s7XG5mb250LXNpemU6bWF4KDAuN3JlbSwyLjh2dyk7XG59XG5cbmhlYWRlciBidXR0b257XG5oZWlnaHQ6ODAlO1xufVxuXG5tYWlue1xuaGVpZ2h0OjE1MHZoO1xuZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAzZnIgMjAwcHggMWZyLyAxZnI7XG4vKiBoZWlnaHQ6IDQ1MHZoOyAqL1xuLyogZ3JpZC10ZW1wbGF0ZTogMTAlIDEwJSAxZnIgMjAwcHggMTAlLyAxZnI7ICovXG5nYXA6MTBweDtcbnBhZGRpbmctdG9wOjVweDtcbnBhZGRpbmctYm90dG9tOjVweDtcbn1cblxuYXJ0aWNsZXtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG4vKiBhbGlnbi1zZWxmOmNlbnRlcjsgKi9cbmp1c3RpZnktc2VsZjpjZW50ZXI7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmdhcDogN3B4O1xucGFkZGluZzogNXB4IDBweDtcbndpZHRoOjk4JTtcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cbmFydGljbGUgZm9ybSBkaXZ7XG5kaXNwbGF5OmZsZXg7XG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xuZ2FwOiA3cHg7XG5cbn1cblxuXG5idXR0b24saW5wdXRbdHlwZT0nZmlsZSddOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBhZGRpbmc6IDhweDtcbmJvcmRlci1yYWRpdXM6MTJweDtcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yIDAuN3M7XG5mb250LWZhbWlseTogJ2J1dHRvbic7XG5mb250LXNpemU6IGNsYW1wKDAuNXJlbSAsIDF2dyAsIDFyZW0pO1xufVxuXG4vKiBlZGl0IGl0ZW0gYnV0dG9uICovXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b257XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xuYm90dG9tOjA7XG5yaWdodDogMDtcbnBvc2l0aW9uOmFic29sdXRlO1xucGFkZGluZzogNXB4O1xuYm9yZGVyLXJhZGl1czozMHB4O1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRSZWQpO1xufVxuXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24ub25TZWxlY3Rpb257XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuY29sb3I6IHZhcigtLXdoaXRlKTtcbmJvcmRlcjoycHggc29saWQgdmFyKC0td2hpdGUpO1xucGFkZGluZzogNnB4O1xuYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24ub25TZWxlY3Rpb246aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodFllbGxvdyk7XG5jb2xvcjp2YXIoLS1ibGFjayk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG59XG5cbmJ1dHRvbjpob3ZlciwgaW5wdXRbdHlwZT0nZmlsZSddOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbmNvbG9yOnZhcigtLXdoaXRlKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbmN1cnNvcjpwb2ludGVyO1xufVxuXG5cblxuc2VsZWN0e1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xucGFkZGluZzo2cHg7XG59XG5cbmlucHV0W3R5cGU9J3RleHQnXSxpbnB1dFt0eXBlPSdudW1iZXInXXtcbnBhZGRpbmc6M3B4O1xuYm9yZGVyLXJhZGl1czo0cHg7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xuY29sb3I6dmFyKC0tYmxhY2spO1xub3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dFt0eXBlPSdudW1iZXInXXtcbnBhZGRpbmc6IDVweDtcbmFwcGVhcmFuY2U6dGV4dGZpZWxkO1xuXG59XG5cblxuaW5wdXRbdHlwZT0ndGV4dCddOmludmFsaWQ6aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXJlZClcbn1cblxuaW5wdXRbdHlwZT0ndGV4dCddOnZhbGlkOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbilcbn1cblxuLyogYXJ0aWNsZSBzZWN0aW9uICovXG5cbiNsaXN0Q29udGFpbmVye1xuZ3JpZC1yb3ctc3RhcnQ6LTM7XG5ncmlkLXJvdy1lbmQ6LTM7XG5wb3NpdGlvbjogcmVsYXRpdmVcbn1cbiNsaXN0Q29udGFpbmVye1xud2lkdGg6OTglO1xubWF4LWhlaWdodDo5OCU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHlCQUF5Qjs7O0FBR3pCO0FBQ0Esc0JBQXNCO0FBQ3RCLDRDQUFtQztBQUNuQzs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQiw0Q0FBbUM7QUFDbkM7O0FBRUE7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQSxrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2Isa0JBQWtCO0FBQ2xCOztBQUVBLHVCQUF1Qjs7OztBQUl2QjtBQUNBLFlBQVk7QUFDWixzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0Esc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EsWUFBWTtBQUNaLHlDQUF5QztBQUN6QyxtQkFBbUI7QUFDbkIsK0NBQStDO0FBQy9DLFFBQVE7QUFDUixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsUUFBUTs7QUFFUjs7O0FBR0E7QUFDQSw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHdDQUF3QztBQUN4QyxxQkFBcUI7QUFDckIscUNBQXFDO0FBQ3JDOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsUUFBUTtBQUNSLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEMsa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLGNBQWM7QUFDZDs7OztBQUlBO0FBQ0EsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsV0FBVztBQUNYOztBQUVBO0FBQ0EsV0FBVztBQUNYLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQSxZQUFZO0FBQ1osb0JBQW9COztBQUVwQjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0I7O0FBRXBCO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsY0FBYztBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIG1vYmlsZSBmaXJzdCAzMDB4NDQwICovXFxuXFxuXFxuQGZvbnQtZmFjZXtcXG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xcbnNyYzogdXJsKCcuL2ZvbnQvb2NlYW5pY2RyaWZ0LnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNle1xcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcXG5zcmM6IHVybCgnLi9mb250L0N5Ym9yZ1xcXFwgUHVuay50dGYnKTtcXG59XFxuXFxuKntcXG5wYWRkaW5nOiAwO1xcbm1hcmdpbjowO1xcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuXFxuLyogY29sb3Igc2VjdGlvbiAqL1xcbi0tYmxhY2s6IGJsYWNrO1xcbi0td2hpdGU6IHdoaXRlO1xcbi0tZ3JlZW46ICMwOUZGOTk7XFxuLS15ZWxsb3c6ICNGNUJCMDA7XFxuLS1saWdodFllbGxvdzogI0VFRUU5QjtcXG4tLXJlZDojRUQ2NDY0O1xcbi0tbGlnaHRSZWQ6I2RjMTQzYztcXG59XFxuXFxuLyogcmVwZXRpdGlvbiBzZWN0aW9uICovXFxuXFxuXFxuXFxuaGVhZGVyLCBhcnRpY2xle1xcbmRpc3BsYXk6ZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxubWFpbntcXG5kaXNwbGF5OmdyaWQ7XFxufVxcblxcbi8qIGluZGl2aWR1YWwgc2VjdGlvbiAqL1xcblxcbmJvZHl7XFxuZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuY29sb3I6IHZhcigtLWJsYWNrKTtcXG50cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xcbnRyYW5zaXRpb24tZHVyYXRpb246MnM7XFxufVxcblxcbmlucHV0W3R5cGU9J2ZpbGUnXXtcXG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xcbmZvbnQtc2l6ZTowLjlyZW07XFxufVxcblxcbmhlYWRlcntcXG5ib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1ibGFjaylcXG59XFxuXFxuaGVhZGVyIGgxe1xcbmZvbnQtc2l6ZTptYXgoMXJlbSwzLjh2dyk7XFxufVxcbmhlYWRlciBzcGFue1xcbmRpc3BsYXk6YmxvY2s7XFxuZm9udC1zaXplOm1heCgwLjdyZW0sMi44dncpO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9ue1xcbmhlaWdodDo4MCU7XFxufVxcblxcbm1haW57XFxuaGVpZ2h0OjE1MHZoO1xcbmdyaWQtdGVtcGxhdGU6IDFmciAxZnIgM2ZyIDIwMHB4IDFmci8gMWZyO1xcbi8qIGhlaWdodDogNDUwdmg7ICovXFxuLyogZ3JpZC10ZW1wbGF0ZTogMTAlIDEwJSAxZnIgMjAwcHggMTAlLyAxZnI7ICovXFxuZ2FwOjEwcHg7XFxucGFkZGluZy10b3A6NXB4O1xcbnBhZGRpbmctYm90dG9tOjVweDtcXG59XFxuXFxuYXJ0aWNsZXtcXG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuanVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG5hbGlnbi1pdGVtczpjZW50ZXI7XFxuLyogYWxpZ24tc2VsZjpjZW50ZXI7ICovXFxuanVzdGlmeS1zZWxmOmNlbnRlcjtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5nYXA6IDdweDtcXG5wYWRkaW5nOiA1cHggMHB4O1xcbndpZHRoOjk4JTtcXG5ib3JkZXItcmFkaXVzOjEwcHg7XFxufVxcbmFydGljbGUgZm9ybSBkaXZ7XFxuZGlzcGxheTpmbGV4O1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG5nYXA6IDdweDtcXG5cXG59XFxuXFxuXFxuYnV0dG9uLGlucHV0W3R5cGU9J2ZpbGUnXTo6ZmlsZS1zZWxlY3Rvci1idXR0b257XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucGFkZGluZzogOHB4O1xcbmJvcmRlci1yYWRpdXM6MTJweDtcXG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciAwLjdzO1xcbmZvbnQtZmFtaWx5OiAnYnV0dG9uJztcXG5mb250LXNpemU6IGNsYW1wKDAuNXJlbSAsIDF2dyAsIDFyZW0pO1xcbn1cXG5cXG4vKiBlZGl0IGl0ZW0gYnV0dG9uICovXFxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9ue1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuYm90dG9tOjA7XFxucmlnaHQ6IDA7XFxucG9zaXRpb246YWJzb2x1dGU7XFxucGFkZGluZzogNXB4O1xcbmJvcmRlci1yYWRpdXM6MzBweDtcXG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b246aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRSZWQpO1xcbn1cXG5cXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24ub25TZWxlY3Rpb257XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG5jb2xvcjogdmFyKC0td2hpdGUpO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0td2hpdGUpO1xcbnBhZGRpbmc6IDZweDtcXG5ib3JkZXItcmFkaXVzOjEwcHg7XFxufVxcblxcbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbi5vblNlbGVjdGlvbjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodFllbGxvdyk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLCBpbnB1dFt0eXBlPSdmaWxlJ106OmZpbGUtc2VsZWN0b3ItYnV0dG9uOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcXG5jb2xvcjp2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbmN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG5zZWxlY3R7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxucGFkZGluZzo2cHg7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSxpbnB1dFt0eXBlPSdudW1iZXInXXtcXG5wYWRkaW5nOjNweDtcXG5ib3JkZXItcmFkaXVzOjRweDtcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcXG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5jb2xvcjp2YXIoLS1ibGFjayk7XFxub3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSdudW1iZXInXXtcXG5wYWRkaW5nOiA1cHg7XFxuYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XFxuXFxufVxcblxcblxcbmlucHV0W3R5cGU9J3RleHQnXTppbnZhbGlkOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tcmVkKVxcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J106dmFsaWQ6aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ncmVlbilcXG59XFxuXFxuLyogYXJ0aWNsZSBzZWN0aW9uICovXFxuXFxuI2xpc3RDb250YWluZXJ7XFxuZ3JpZC1yb3ctc3RhcnQ6LTM7XFxuZ3JpZC1yb3ctZW5kOi0zO1xcbnBvc2l0aW9uOiByZWxhdGl2ZVxcbn1cXG4jbGlzdENvbnRhaW5lcntcXG53aWR0aDo5OCU7XFxubWF4LWhlaWdodDo5OCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYWxjdWxhdGlvblR5cGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jYWxjdWxhdGlvblR5cGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rhcmttb2RlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFya21vZGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rlc2t0b3BTdXBwb3J0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcFN1cHBvcnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saXN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wb3B1cC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCAnLi9zdHlsaW5nL2ljb24vZGlzcGxheUljb24uanMnO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcGVyY2VudGFnZUluY3JlYXNlYCkudmFsdWUgPSAwO1xuXG53aW5kb3cudmFsdWVUb011bHRpcGx5ID0gMTtcblxuXG4vLyBpbXBvcnQgc3R5bGVzXG5cbmltcG9ydCAnLi9zdHlsaW5nL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGluZy9kYXJrbW9kZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxpbmcvZGFya21vZGUuanMnO1xuaW1wb3J0ICcuL3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGluZy9saXN0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGluZy9kZXNrdG9wU3VwcG9ydC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxpbmcvcG9wdXAuY3NzJztcblxuXG5cbi8vIGltcG9ydCBmdW5jdGlvbmFsaXR5XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9saXN0L2xpc3RTdHJ1Y3R1cmUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvbGlzdC9jdXJyZW50TGlzdC5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuV2luZG93LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9hZGROZXdMaXN0LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuQ2hhbmdlQ29sb3JXaW5kb3cuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvd2luZG93L2N1cnJlbmN5V2luZG93LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvdHlwZUNhbGN1bGF0b3IuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvY2FsY3VsYXRlL2NhbGN1bGF0ZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9jYWxjdWxhdGUvcGVyY2VudGFnZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9maWxlL2Rvd25sb2FkRmlsZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9maWxlL3VwbG9hZEZpbGUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvaW5wdXRDaGVjay5qcyc7XG5cblxuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkva2V5Ym9hcmRTdXBwb3J0L21haW4uanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkva2V5Ym9hcmRTdXBwb3J0L3dpbmRvdy5qcyc7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==