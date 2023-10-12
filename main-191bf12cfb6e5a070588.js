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
  else {
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
if(document.querySelector('html').className == 'dark'){
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
  else{

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
      product: '#114b5f',
      regProduct: '#c8a2c8,',
      money: '#e5fcf5',
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
/* harmony export */   checkIfRegProductIsEmpty: () => (/* binding */ checkIfRegProductIsEmpty),
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

let isDarkModeEnabled = matchMedia('(prefers-color-scheme: dark)').matches
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
`, "",{"version":3,"sources":["webpack://./input/styling/style.css"],"names":[],"mappings":"AAAA,yBAAyB;;;AAGzB;AACA,sBAAsB;AACtB,4CAAmC;AACnC;;AAEA;AACA,qBAAqB;AACrB,4CAAmC;AACnC;;AAEA;AACA,UAAU;AACV,QAAQ;AACR,qBAAqB;AACrB;;AAEA;;AAEA,kBAAkB;AAClB,cAAc;AACd,cAAc;AACd,gBAAgB;AAChB,iBAAiB;AACjB,sBAAsB;AACtB,aAAa;AACb,kBAAkB;AAClB;;AAEA,uBAAuB;;;;AAIvB;AACA,YAAY;AACZ,sBAAsB;AACtB,kBAAkB;AAClB,iBAAiB;AACjB;;AAEA;AACA,YAAY;AACZ;;AAEA,uBAAuB;;AAEvB;AACA,sBAAsB;AACtB,8BAA8B;AAC9B,mBAAmB;AACnB,2CAA2C;AAC3C,sBAAsB;AACtB;;AAEA;AACA;AACA;;AAEA;AACA,yBAAyB;AACzB;AACA;AACA,aAAa;AACb,2BAA2B;AAC3B;;AAEA;AACA,UAAU;AACV;;AAEA;AACA,YAAY;AACZ,yCAAyC;AACzC,mBAAmB;AACnB,+CAA+C;AAC/C,QAAQ;AACR,eAAe;AACf,kBAAkB;AAClB;;AAEA;AACA,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,uBAAuB;AACvB,mBAAmB;AACnB,6BAA6B;AAC7B,QAAQ;AACR,gBAAgB;AAChB,SAAS;AACT,kBAAkB;AAClB;AACA;AACA,YAAY;AACZ,qBAAqB;AACrB,sBAAsB;AACtB,kBAAkB;AAClB,QAAQ;;AAER;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,YAAY;AACZ,kBAAkB;AAClB,wCAAwC;AACxC,qBAAqB;AACrB,qCAAqC;AACrC;;AAEA,qBAAqB;AACrB;AACA,4BAA4B;AAC5B,QAAQ;AACR,QAAQ;AACR,iBAAiB;AACjB,YAAY;AACZ,kBAAkB;AAClB,yBAAyB;AACzB;;AAEA;AACA,iCAAiC;AACjC;;AAEA;AACA,+BAA+B;AAC/B,mBAAmB;AACnB,6BAA6B;AAC7B,YAAY;AACZ,kBAAkB;AAClB;;AAEA;AACA,oCAAoC;AACpC,kBAAkB;AAClB,8BAA8B;AAC9B;;AAEA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,cAAc;AACd;;;;AAIA;AACA,8BAA8B;AAC9B,kBAAkB;AAClB,8BAA8B;AAC9B,WAAW;AACX;;AAEA;AACA,WAAW;AACX,iBAAiB;AACjB,6BAA6B;AAC7B,6BAA6B;AAC7B,kBAAkB;AAClB,8BAA8B;AAC9B;;AAEA;AACA,YAAY;AACZ,oBAAoB;;AAEpB;;;AAGA;AACA;AACA;;AAEA;AACA;AACA;;AAEA,oBAAoB;;AAEpB;AACA,iBAAiB;AACjB,eAAe;AACf;AACA;AACA;AACA,SAAS;AACT,cAAc;AACd","sourcesContent":["/* mobile first 300x440 */\n\n\n@font-face{\nfont-family: 'default';\nsrc: url('./font/oceanicdrift.ttf');\n}\n\n@font-face{\nfont-family: 'button';\nsrc: url('./font/Cyborg\\ Punk.ttf');\n}\n\n*{\npadding: 0;\nmargin:0;\nbox-sizing:border-box;\n}\n\n:root{\n\n/* color section */\n--black: black;\n--white: white;\n--green: #09FF99;\n--yellow: #F5BB00;\n--lightYellow: #EEEE9B;\n--red:#ED6464;\n--lightRed:#dc143c;\n}\n\n/* repetition section */\n\n\n\nheader, article{\ndisplay:flex;\njustify-content:center;\nalign-items:center;\ntext-align:center;\n}\n\nmain{\ndisplay:grid;\n}\n\n/* individual section */\n\nbody{\nfont-family: 'default';\nbackground-color: var(--white);\ncolor: var(--black);\ntransition-property:background-color, color;\ntransition-duration:2s;\n}\n\nheader{\nborder-bottom:2px solid var(--black)\n}\n\nheader h1{\nfont-size:max(1rem,3.8vw);\n}\nheader span{\ndisplay:block;\nfont-size:max(0.7rem,2.8vw);\n}\n\nheader button{\nheight:80%;\n}\n\nmain{\nheight:150vh;\ngrid-template: 1fr 1fr 3fr 200px 1fr/ 1fr;\n/* height: 450vh; */\n/* grid-template: 10% 10% 1fr 200px 10%/ 1fr; */\ngap:10px;\npadding-top:5px;\npadding-bottom:5px;\n}\n\narticle{\nflex-direction:column;\njustify-content:center;\nalign-items:center;\n/* align-self:center; */\njustify-self:center;\nborder:2px solid var(--black);\ngap: 7px;\npadding: 5px 0px;\nwidth:98%;\nborder-radius:10px;\n}\narticle form div{\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\nalign-items:center;\ngap: 7px;\n\n}\n\nbutton,input[type='file']::file-selector-button{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding: 8px;\nborder-radius:12px;\ntransition: background-color, color 0.7s;\nfont-family: 'button';\nfont-size: clamp(0.5rem , 1vw , 1rem);\n}\n\n/* edit item button */\n#listContainer div + button{\nbackground-color: var(--red);\nbottom:0;\nright: 0;\nposition:absolute;\npadding: 5px;\nborder-radius:30px;\ntext-transform: uppercase;\n}\n\n#listContainer div + button:hover{\nbackground-color: var(--lightRed);\n}\n\n#listContainer div + button.onSelection{\nbackground-color: var(--yellow);\ncolor: var(--white);\nborder:2px solid var(--white);\npadding: 6px;\nborder-radius:10px;\n}\n\n#listContainer div + button.onSelection:hover{\nbackground-color: var(--lightYellow);\ncolor:var(--black);\nborder: 2px solid var(--black);\n}\n\nbutton:hover, input[type='file']::file-selector-button:hover{\nbackground-color: var(--black);\ncolor:var(--white);\nborder: 2px solid var(--white);\ncursor:pointer;\n}\n\n\n\nselect{\nbackground-color: var(--white);\ncolor:var(--black);\nborder: 2px solid var(--black);\npadding:6px;\n}\n\ninput[type='text'],input[type='number']{\npadding:3px;\nborder-radius:4px;\nbackground-color:var(--white);\nborder:2px solid var(--black);\ncolor:var(--black);\noutline: 0px solid transparent;\n}\n\ninput[type='number']{\npadding: 5px;\nappearance:textfield;\n\n}\n\n\ninput[type='text']:invalid:hover{\nbackground-color:var(--red)\n}\n\ninput[type='text']:valid:hover{\nbackground-color:var(--green)\n}\n\n/* article section */\n\n#listContainer{\ngrid-row-start:-3;\ngrid-row-end:-3;\nposition: relative\n}\n#listContainer{\nwidth:98%;\nmax-height:98%;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUdBQW1HLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxlQUFlLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxRQUFRLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLG9FQUFvRSx5QkFB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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBOzs7QUFHQTtBQUM0QjtBQUNHO0FBQ0Q7QUFDUTtBQUNYO0FBQ1U7QUFDVDs7O0FBRzVCO0FBQytDO0FBQ0Y7QUFDRztBQUNGO0FBQ0E7QUFDVztBQUNQO0FBQ0Y7QUFDTDtBQUNLO0FBQ0M7QUFDSDtBQUNGO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2NhbGN1bGF0ZS9jYWxjdWxhdGUuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9jYWxjdWxhdGUvcGVyY2VudGFnZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2Rpc3BsYXkvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9kaXNwbGF5L2V4cGVuc2VUeXBlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvZGlzcGxheS9pdGVtc09yTGlzdHMuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9lZGl0SXRlbU9yTGlzdC9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9maWxlL2Rvd25sb2FkRmlsZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2ZpbGUvdXBsb2FkRmlsZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2lucHV0Q2hlY2suanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvbGlzdC9jdXJyZW50TGlzdC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L2xpc3QvbGlzdFN0cnVjdHVyZS5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3R5cGVDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L2Z1bmN0aW9uYWxpdHkvd2luZG93L2FkZE5ld0xpc3QuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS93aW5kb3cvY3VycmVuY3lXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS93aW5kb3cvZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuQ2hhbmdlQ29sb3JXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZnVuY3Rpb25hbGl0eS93aW5kb3cvb3BlbldpbmRvdy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rhcmttb2RlLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rhcmttb2RlLmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rlc2t0b3BTdXBwb3J0LmNzcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2xpc3QuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvcG9wdXAuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvc3R5bGUuY3NzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2NhbGN1bGF0aW9uVHlwZS5jc3M/YjY0OCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9pbnB1dC9zdHlsaW5nL2Rhcmttb2RlLmNzcz8zYWIzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvZGVza3RvcFN1cHBvcnQuY3NzPzI1ZmYiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9saXN0LmNzcz9hM2UzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL2lucHV0L3N0eWxpbmcvcG9wdXAuY3NzPzFlZjYiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvc3R5bGluZy9zdHlsZS5jc3M/Y2RhMSIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBlbnNlc2NhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2V4cGVuc2VzY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhwZW5zZXNjYWxjdWxhdG9yLy4vaW5wdXQvZmlsZUltcG9ydGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBjYWxjdWxhdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcmVzdWx0Q29udGVudGApO1xuY29uc3QgY2FsY3VsYXRlQnV0dG9uID0gY2FsY3VsYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbmApO1xuY29uc3QgY2FsY3VsYXRlU3BhbiA9IGNhbGN1bGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBzcGFuYCk7XG5cbmNhbGN1bGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGN1bGF0ZSlcblxuXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZSgpIHtcbiAgbGV0IGluZGV4byA9IDBcbiAgbGV0IHJlc3VsdCA9IGN1cnJlbnRMaXN0LmFycmF5LnJlZHVjZSgoYWNjdW11bGF0b3IsIGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgaW5kZXhvICs9IDE7XG4gICAgc3dpdGNoIChjdXJyZW50SXRlbS50eXBlKSB7XG4gICAgICBjYXNlICdmb29kJzpcbiAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgY2FsY3VsYXRlZEZvb2QoY3VycmVudEl0ZW0pO1xuICAgICAgY2FzZSAncmVnUHJvZHVjdCc6XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGNhbGN1bGF0ZWRSZWdQcm9kdWN0KGN1cnJlbnRJdGVtKTtcbiAgICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgY2FzZSAnbW9uZXknOlxuICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBjdXJyZW50SXRlbS5wcmljZTtcbiAgICB9XG4gIH0sIDApO1xuXG4gIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgcmVzdWx0ID0gcmVzdWx0ICogd2luZG93LnZhbHVlVG9NdWx0aXBseVxuICBjYWxjdWxhdGVTcGFuLmlubmVyVGV4dCA9IHJlc3VsdC50b0ZpeGVkKDIpO1xufVxuXG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlZEZvb2QoY3VycmVudEZvb2QpIHtcbiAgbGV0IHByaWNlRm9yVW5pdCA9IGN1cnJlbnRGb29kLnByaWNlIC8gY3VycmVudEZvb2QuYW1vdW50UGVyUHJpY2U7XG4gIGxldCBhbW91bnRPZkZvb2RFYXRlblBlck1vbnRoT3JXZWVrID0gY3VycmVudEZvb2QuYW1vdW50UGVyRGF5ICogZ2V0UHJvY2VzdXJlKGN1cnJlbnRGb29kKTtcbiAgbGV0IGF2ZXJhZ2VGb29kID0gcHJpY2VGb3JVbml0ICogYW1vdW50T2ZGb29kRWF0ZW5QZXJNb250aE9yV2VlaztcbiAgcmV0dXJuIGF2ZXJhZ2VGb29kO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9jZXN1cmUoY3VycmVudEZvb2QpIHtcbiAgaWYgKHR5cGVPZkNhbGN1bGF0aW9uID09ICdtb250aGx5Jykge1xuICAgIHJldHVybiBjdXJyZW50Rm9vZC5tb250aEFtb3VudFxuICB9XG4gIGVsc2UgaWYgKHR5cGVPZkNhbGN1bGF0aW9uID09ICd3ZWVrbHknKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRGb29kLndlZWtBbW91bnRcbiAgfVxuICBlbHNlIGlmICh0eXBlT2ZDYWxjdWxhdGlvbiA9PSAnZGFpbHknKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRGb29kLndlZWtBbW91bnQgLyA3O1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBjdXJyZW50Rm9vZC5tb250aEFtb3VudCAqIDEyO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlZFJlZ1Byb2R1Y3QoY3VycmVudFJlZ3VsYXJQcm9kdWN0KSB7XG4gIGxldCBuZXdQcmljZSA9IGN1cnJlbnRSZWd1bGFyUHJvZHVjdC5wcmljZSAqIGN1cnJlbnRSZWd1bGFyUHJvZHVjdC5hbW91bnRPZlJlZ1Byb2R1Y3RzXG4gIGlmICh0eXBlT2ZDYWxjdWxhdGlvbiA9PSAneWVhcmx5Jykge1xuICAgIHJldHVybiBuZXdQcmljZSAqIGN1cnJlbnRSZWd1bGFyUHJvZHVjdC5hbW91bnRQZXJZZWFyXG4gIH1cbiAgZWxzZSBpZiAodHlwZU9mQ2FsY3VsYXRpb24gPT0gJ3dlZWtseScpIHtcbiAgICByZXR1cm4gbmV3UHJpY2UgLyA0O1xuICB9XG4gIGVsc2UgaWYodHlwZU9mQ2FsY3VsYXRpb24gPT0gJ2RhaWx5Jyl7XG4gICAgcmV0dXJuIG5ld1ByaWNlIC8gMzE7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIG5ld1ByaWNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyB0cmFuc2Zvcm1Ub051bWJlcn0gZnJvbSAnLi8uLi9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJ1xuXG5sZXQgIHBlcmNlbnRhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwZXJjZW50YWdlSW5jcmVhc2VgKVxucGVyY2VudGFnZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHN0b3JlUGVyY2VudGFnZUluY3JlYXNlKVxuXG5mdW5jdGlvbiBzdG9yZVBlcmNlbnRhZ2VJbmNyZWFzZSgpe1xubGV0IHZhbHVlT2ZQZXJjZW50YWdlID0gIHRyYW5zZm9ybVRvTnVtYmVyKHRoaXMudmFsdWUpO1xud2luZG93LnZhbHVlVG9NdWx0aXBseSA9ICh2YWx1ZU9mUGVyY2VudGFnZSArIDEwMCkgLyAxMDA7XG59XG5cbiIsImxldCBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvclBvcFVwJyk7XG5sZXQgaDIgPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCdoMicpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5RXJyb3IobWVzc2FnZSkge1xuICBoMi5pbm5lclRleHQgPSBtZXNzYWdlO1xuICBzaG93UG9wVXAoKVxufVxuXG5mdW5jdGlvbiBzaG93UG9wVXAoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4geyBwb3BVcC5zaG93TW9kYWwoKSxcbiAgY2hhbmdlT3BhY2l0eSgpXG4gIH0sIDIwMClcbn1cblxuXG5cbmZ1bmN0aW9uIGNoYW5nZU9wYWNpdHkoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICBoMi5zdHlsZS5vcGFjaXR5ID0gJzEnLFxuICBwb3BVcC5zdHlsZS5vcGFjaXR5ID0gJzEnLFxuICBoaWRlT3BhY2l0eSgpXG4gIH0sIDEwMDApXG59XG5cblxuZnVuY3Rpb24gaGlkZU9wYWNpdHkoKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgaDIuc3R5bGUub3BhY2l0eSA9ICcwJyxcbiAgcG9wVXAuc3R5bGUub3BhY2l0eSA9ICcxJyxcbiAgaGlkZURpYWxvZygpXG4gIH0sIDMwMDApXG4gIFxufVxuXG5mdW5jdGlvbiBoaWRlRGlhbG9nKCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHsgcG9wVXAuY2xvc2UoKSB9LCAxMDAwKVxufVxuXG5cbiIsImltcG9ydCB7IGFkZEZvb2RUb1RoZUxpc3QsIGFkZE1vbmV5VG9UaGVMaXN0LCBhZGRQcm9kdWN0VG9UaGVMaXN0LCBhZGRSZWdQcm9kdWN0VG9UaGVMaXN0IH0gZnJvbSAnLi8uLi9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJztcblxubGV0IHNlbGVjdGVkU2VjdGlvbjtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKTtcblxudHlwZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4geyBkaXNwbGF5Q29udGVudEZvclR5cGUoZXZlbnQudGFyZ2V0LnZhbHVlKSB9KVxuXG5sZXQgZXhwZW5zZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhwZW5zZUNvbnRlbnQgZm9ybScpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudEZvclR5cGUodGFyZ2V0VmFsdWUpIHtcblxuICBzd2l0Y2ggKHRhcmdldFZhbHVlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBnZW5lcmF0ZUZvb2QoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgZ2VuZXJhdGVQcm9kdWN0KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZWdQcm9kdWN0JzpcbiAgICAgIGdlbmVyYXRlUmVnUHJvZHVjdCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgZ2VuZXJhdGVNb25leSgpXG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvb2QoKSB7XG4gIGV4cGVuc2VDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGAgPHA+bmFtZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cbjxwPnByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiICBpbnB1dG1vZGU9J2RlY2ltYWwnIGlkPVwicHJpY2VcIiByZXF1aXJlZD5cbjxwPmFtb3VudCBvZiBmb29kIHBlciBwcmljZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyUHJpY2VcIiByZXF1aXJlZD5cbjxwPmFtb3VudCBvZiBmb29kIHBlciBkYXk6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cImFtb3VudFBlckRheVwiIHJlcXVpcmVkPlxuPGRpdj5cbiAgPHNlY3Rpb24+XG4gICAgPHA+YW1vdW50IG9mIGRheXMgcGVyIG1vbnRoOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJtb250aEFtb3VudFwiICByZXF1aXJlZCA+XG4gIDwvc2VjdGlvbj5cbiAgPHA+b3I8L3A+XG4gIDxzZWN0aW9uPlxuICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciB3ZWVrOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJ3ZWVrQW1vdW50XCIgcmVxdWlyZWQgPlxuICA8L3NlY3Rpb24+XG48L2Rpdj5cbjxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+XG5gXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRGb29kVG9UaGVMaXN0KVxuXG4gIGlmICh3aW5kb3cudHlwZU9mQ2FsY3VsYXRpb24gPT0gJ21vbnRobHknIHx8IHdpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9PSAneWVhcmx5Jykge1xuXG4gICAgc2VsZWN0ZWRTZWN0aW9uID0gZXhwZW5zZUNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuICB9XG4gIGVsc2Uge1xuXG4gICAgc2VsZWN0ZWRTZWN0aW9uID0gZXhwZW5zZUNvbnRlbnRDb250YWluZXIucXVlcnlTZWxlY3Rvcignc2VjdGlvbjpsYXN0LW9mLXR5cGUnKTtcbiAgfVxuXG4gIHNlbGVjdGVkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvZHVjdCgpIHtcbiAgZXhwZW5zZUNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gYCA8cD5uYW1lOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkPlxuPHA+cHJpY2U6PC9wPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cInByaWNlXCIgcmVxdWlyZWQ+XG48YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPlxuYFxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvZHVjdFRvVGhlTGlzdClcblxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVJlZ1Byb2R1Y3QoKSB7XG4gIGV4cGVuc2VDb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGAgPHA+bmFtZTo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cbjxwPnByaWNlOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJwcmljZVwiIHJlcXVpcmVkPlxuPHA+YW1vdW50IG9mIHByb2R1Y3RzOjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRPZlJlZ1Byb2R1Y3RzXCIgdmFsdWU9JzEnIHJlcXVpcmVkPlxuPHA+YW1vdW50IG9mIG1vbnRocyBwZXIgeWVhcjo8L3A+XG48aW5wdXQgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwiYW1vdW50UGVyWWVhclwiIHZhbHVlPScxMicgcmVxdWlyZWQ+XG48YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPlxuYFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFJlZ1Byb2R1Y3RUb1RoZUxpc3QpXG5cbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZU1vbmV5KCkge1xuICBleHBlbnNlQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgIDxwPm1vbmV5OjwvcD5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJwcmljZVwiIHJlcXVpcmVkPlxuPGJ1dHRvbiB0eXBlPSdidXR0b24nIGlkPSdhcHBseSc+YXBwbHk8L2J1dHRvbj5gXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBseScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTW9uZXlUb1RoZUxpc3QpXG59XG4iLCJpbXBvcnQgeyB1cGRhdGVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9saXN0L2xpc3RTdHJ1Y3R1cmUuanMnO1xuaW1wb3J0IHsgc2VsZWN0RGl2IH0gZnJvbSAnLi8uLi9lZGl0SXRlbU9yTGlzdC9zZWxlY3Rpb24uanMnO1xuXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcblxubGV0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0TGlzdCcpXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TGlzdCgpIHtcbiAgcmVzdGFydEV2ZXJ5dGhpbmcoKTtcbiAgY3VycmVudExpc3QuYXJyYXkuZm9yRWFjaChhcHBlbmRJdGVtcylcbiAgbGlzdC5mb3JFYWNoKGFwcGVuZExpc3RzKVxuICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxuICBjb25zdCBjYWxjdWxhdGVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Jlc3VsdENvbnRlbnQgc3BhbmApO1xuICBjYWxjdWxhdGVTcGFuLmlubmVyVGV4dCA9ICcnO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0RXZlcnl0aGluZygpIHtcbiAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24nKTtcbiAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdvblNlbGVjdGlvbicpO1xuICB3aW5kb3cuc2VsZWN0ZWRJbmRleCA9ICcnO1xuXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICBsaXN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdExpc3QnKTtcbiAgbGlzdFNlbGVjdC5pbm5lckhUTUwgPSAnJztcbn1cblxuZnVuY3Rpb24gYXBwZW5kSXRlbXMoaXRlbSwgY3VycmVudExpc3RPZkl0ZW1zSW5kZXgpIHtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3REaXYpXG4gIGxldCBuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbmFtZVRleHQuaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICBuYW1lVGV4dC5zdHlsZS5jb2xvciA9IHJldHVybkRpZmZlcmVudENvbG9yRGVwZW5kaW5nT25UeXBlKGl0ZW0pO1xuICBuYW1lVGV4dC5kYXRhc2V0LmluZGV4ID0gY3VycmVudExpc3RPZkl0ZW1zSW5kZXg7XG4gIGNvbnRhaW5lci5hcHBlbmQobGkpO1xuICBsaS5hcHBlbmQobmFtZVRleHQpO1xufVxuXG5mdW5jdGlvbiByZXR1cm5EaWZmZXJlbnRDb2xvckRlcGVuZGluZ09uVHlwZShpdGVtKSB7XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NOYW1lID09ICdkYXJrJyl7XG4gIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICByZXR1cm4gY29sb3IuZGFyay5mb29kO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgcmV0dXJuIGNvbG9yLmRhcmsucHJvZHVjdDtcbiAgICBjYXNlICdyZWdQcm9kdWN0JzpcbiAgICAgIHJldHVybiBjb2xvci5kYXJrLnJlZ1Byb2R1Y3Q7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgcmV0dXJuIGNvbG9yLmRhcmsubW9uZXk7XG4gIH1cbiAgfVxuICBlbHNle1xuXG4gIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICByZXR1cm4gY29sb3IubGlnaHQuZm9vZDtcbiAgICBjYXNlICdwcm9kdWN0JzpcbiAgICAgIHJldHVybiBjb2xvci5saWdodC5wcm9kdWN0O1xuICAgIGNhc2UgJ3JlZ1Byb2R1Y3QnOlxuICAgICAgcmV0dXJuIGNvbG9yLmxpZ2h0LnJlZ1Byb2R1Y3Q7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgcmV0dXJuIGNvbG9yLmxpZ2h0Lm1vbmV5O1xuICB9XG5cbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGFwcGVuZExpc3RzKGxpc3QsIGN1cnJlbnRMaXN0b2ZMaXN0c0luZGV4KSB7XG5cbiAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gIG9wdGlvbi5pbm5lckhUTUwgPSBgJHtsaXN0Lm5hbWV9YDtcbiAgb3B0aW9uLnZhbHVlID0gYCR7Y3VycmVudExpc3RvZkxpc3RzSW5kZXh9YDtcbiAgaWYgKHdpbmRvdy52YWx1ZU9mU2VsZWN0ID09IGN1cnJlbnRMaXN0b2ZMaXN0c0luZGV4KSB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuICBsaXN0U2VsZWN0LmFwcGVuZChvcHRpb24pO1xufVxuXG5cbiIsImV4cG9ydCBmdW5jdGlvbiBzZWxlY3REaXYoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LmluZGV4KSB7XG4gICAgd2luZG93LnNlbGVjdGVkSW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5pbmRleFxuICAgIHNlbGVjdFBhcmVudChldmVudClcbiAgfVxufVxuXG5cblxuXG5mdW5jdGlvbiBzZWxlY3RQYXJlbnQoZXZlbnQpIHtcbiAgbGV0IHBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuXG4gIHJlbW92ZUNsYXNzZXMoKVxuICBsZXQgZWRpdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b25gKTtcbiAgZWRpdEl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgnb25TZWxlY3Rpb24nKVxuICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWRJdGVtJyk7XG59XG5mdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICBsZXQgb25TZWxlY3Rpb25DbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vblNlbGVjdGlvbicpXG4gIGlmKG9uU2VsZWN0aW9uQ2xhc3Mpe1xuICBvblNlbGVjdGlvbkNsYXNzLmNsYXNzTGlzdC5yZW1vdmUoJ29uU2VsZWN0aW9uJylcbiAgfVxuICBsZXQgc2VsZWN0ZWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RlZEl0ZW0nKTtcbiAgc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZEl0ZW0nKSk7XG59XG4iLCJjb25zdCBkb3dubG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBidXR0b246bnRoLW9mLXR5cGUoMiknKTtcbmRvd25sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG93bmxvYWRUaGVMaXN0U3RydWN0dXJlKVxuXG5cbmZ1bmN0aW9uIGRvd25sb2FkVGhlTGlzdFN0cnVjdHVyZSgpe1xubGV0IGxpc3RBbmRDb2xvciA9IFt3aW5kb3cubGlzdCwgd2luZG93LmNvbG9yXVxubGV0IGZpbGVUb0Rvd25sb2FkID0gbmV3IEZpbGUoW0pTT04uc3RyaW5naWZ5KGxpc3RBbmRDb2xvcildLCBgbGlzdC0ke25ldyBEYXRlKCkudG9JU09TdHJpbmcoKX1gLHt0eXBlOidhcHBsaWNhdGlvbi9qc29uJ30pO1xubGV0IG15VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlVG9Eb3dubG9hZCk7XG5sZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbmxpbmsuaHJlZiA9IG15VXJsO1xubGluay5kb3dubG9hZCA9IGZpbGVUb0Rvd25sb2FkLm5hbWVcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluaylcbmxpbmsuY2xpY2soKVxuZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKVxuVVJMLnJldm9rZU9iamVjdFVSTChteVVybClcbn1cbiIsImltcG9ydCB7IGRpc3BsYXlMaXN0IH0gZnJvbSAnLi8uLi9kaXNwbGF5L2l0ZW1zT3JMaXN0cy5qcydcblxuY29uc3QgdXBsb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdHlwZT0nZmlsZSddYCk7XG51cGxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXBkYXRlU3RydWN0dXJlKVxuXG5mdW5jdGlvbiB1cGRhdGVTdHJ1Y3R1cmUoKSB7XG5cbiAgbGV0IG15RmlsZSA9IHVwbG9hZEJ1dHRvbi5maWxlc1swXVxuICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuXG4gICAgbGV0IGxpc3RBbmRDb2xvciA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnJlc3VsdClcbiAgICB3aW5kb3cubGlzdCA9IGxpc3RBbmRDb2xvclswXTtcbiAgICB3aW5kb3cuY29sb3IgPSBsaXN0QW5kQ29sb3JbMV07XG4gICAgY3VycmVudExpc3QgPSBsaXN0WzBdO1xuICAgIGRpc3BsYXlMaXN0KClcbiAgfSk7XG5cbiAgcmVhZGVyLnJlYWRBc1RleHQobXlGaWxlKTtcbn1cblxuXG4iLCJpbXBvcnQgeyBjaGVja0lmRW1wdHkgfSBmcm9tICcuL3dpbmRvdy9nZW5lcmF0ZUNvbnRlbnRGb3JFZGl0V2luZG93LmpzJ1xuaW1wb3J0IHsgZGlzcGxheUVycm9yIH0gZnJvbSAnLi9kaXNwbGF5L2Vycm9yLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRXZlbnRMaXN0ZW5lckZvcklucHV0KCkge1xuICBmb3IgKGxldCBpbnB1dCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBmb3JtIGlucHV0W3R5cGU9J3RleHQnXWApKSB7XG5cbiAgICBzd2l0Y2ggKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKS52YWx1ZSkge1xuICAgICAgY2FzZSAnZm9vZCc6XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrSWZGb29kVmFsaWQpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHJvZHVjdCc6XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrSWZQcm9kdWN0T3JNb25leVZhbGlkKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hlY2tJZlByb2R1Y3RPck1vbmV5VmFsaWQpXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5nZW5lcmF0ZUV2ZW50TGlzdGVuZXJGb3JJbnB1dCgpXG5cbmZ1bmN0aW9uIGNoZWNrSWZGb29kVmFsaWQoKSB7XG4gIGxldCBpdGVtID0gdGhpcy52YWx1ZVxuICB0cnkge1xuICAgIGNoZWNrSWZFbXB0eShpdGVtKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwbGF5RXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjaGVja0lmUHJvZHVjdE9yTW9uZXlWYWxpZCgpIHtcbiAgbGV0IGl0ZW0gPSB0aGlzLnZhbHVlXG4gIHRyeSB7XG4gICAgY2hlY2tJZkVtcHR5KGl0ZW0pO1xuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbiIsImltcG9ydCB7IHB1c2hUb0FycmF5QW5kRGlzcGxheUxpc3QsIE1vbmV5LCBQcm9kdWN0LFJlZ1Byb2R1Y3QsIEZvb2QgfSBmcm9tICcuL2xpc3RTdHJ1Y3R1cmUuanMnXG5pbXBvcnQgeyBjaGVja0lmRm9vZElzRW1wdHksIGNoZWNrSWZQcm9kdWN0SXNFbXB0eSwgY2hlY2tJZlJlZ1Byb2R1Y3RJc0VtcHR5ICxjaGVja0lmTW9uZXlJc0VtcHR5IH0gZnJvbSAnLi8uLi93aW5kb3cvZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcydcbmltcG9ydCB7IGRpc3BsYXlFcnJvciB9IGZyb20gJy4vLi4vZGlzcGxheS9lcnJvci5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRGb29kVG9UaGVMaXN0KCkge1xuICBsZXQgbmFtZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcblxuICB0cnkge1xuICAgIGxldCBmb29kID0ge1xuICAgICAgbmFtZTogbmFtZVZhbHVlLFxuICAgICAgcHJpY2U6IGdldE51bWJlck9mKCdwcmljZScpLFxuICAgICAgYW1vdW50UGVyUHJpY2U6IGdldE51bWJlck9mKCdhbW91bnRQZXJQcmljZScpLFxuICAgICAgYW1vdW50UGVyRGF5OiBnZXROdW1iZXJPZignYW1vdW50UGVyRGF5JyksXG4gICAgICB3ZWVrQW1vdW50OiBnZXROdW1iZXJPZignd2Vla0Ftb3VudCcpLFxuICAgICAgbW9udGhBbW91bnQ6IGdldE51bWJlck9mKCdtb250aEFtb3VudCcpLFxuICAgIH1cbiAgICBjaGVja0lmRm9vZElzRW1wdHkoZm9vZClcbiAgICBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KEZvb2QoZm9vZC5uYW1lLCBmb29kLnByaWNlLCBmb29kLmFtb3VudFBlclByaWNlLCBmb29kLmFtb3VudFBlclByaWNlLCBmb29kLndlZWtBbW91bnQsIGZvb2QubW9udGhBbW91bnQpKVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BsYXlFcnJvcihlcnJvcilcbiAgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2R1Y3RUb1RoZUxpc3QoKSB7XG4gIGxldCBuYW1lVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuXG4gIHRyeSB7XG4gICAgbGV0IHByb2R1Y3QgPSB7XG4gICAgICBuYW1lOiBuYW1lVmFsdWUsXG4gICAgICBwcmljZTogZ2V0TnVtYmVyT2YoJ3ByaWNlJylcbiAgICB9XG4gICAgY2hlY2tJZlByb2R1Y3RJc0VtcHR5KHByb2R1Y3QpXG4gICAgcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdChQcm9kdWN0KHByb2R1Y3QubmFtZSwgcHJvZHVjdC5wcmljZSkpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgZGlzcGxheUVycm9yKGVycm9yKVxuICB9XG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUmVnUHJvZHVjdFRvVGhlTGlzdCgpIHtcbiAgbGV0IG5hbWVWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gIHRyeSB7XG4gICAgbGV0IHByb2R1Y3QgPSB7XG4gICAgICBuYW1lOiBuYW1lVmFsdWUsXG4gICAgICBwcmljZTogZ2V0TnVtYmVyT2YoJ3ByaWNlJyksXG4gICAgICBhbW91bnRQZXJZZWFyOiBnZXROdW1iZXJPZignYW1vdW50UGVyWWVhcicpLFxuICAgICAgYW1vdW50T2ZSZWdQcm9kdWN0czogZ2V0TnVtYmVyT2YoJ2Ftb3VudFBlclllYXInKSxcbiAgICB9XG4gICAgY2hlY2tJZlJlZ1Byb2R1Y3RJc0VtcHR5KHByb2R1Y3QpXG4gICAgcHVzaFRvQXJyYXlBbmREaXNwbGF5TGlzdChSZWdQcm9kdWN0KHByb2R1Y3QubmFtZSwgcHJvZHVjdC5wcmljZSxwcm9kdWN0LmFtb3VudFBlclllYXIscHJvZHVjdC5hbW91bnRPZlJlZ1Byb2R1Y3RzKSlcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwbGF5RXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNb25leVRvVGhlTGlzdCgpIHtcbiAgdHJ5IHtcbiAgICBsZXQgbW9uZXkgPSB7IHByaWNlOiBnZXROdW1iZXJPZigncHJpY2UnKSB9XG4gICAgY2hlY2tJZk1vbmV5SXNFbXB0eShtb25leSlcbiAgICBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KE1vbmV5KG1vbmV5LnByaWNlKSlcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwbGF5RXJyb3IoZXJyb3IpXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TnVtYmVyT2YoZWxlbWVudElkKSB7XG4gIGxldCB2YWx1ZU9mRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2VsZW1lbnRJZH1gKS52YWx1ZVxuICByZXR1cm4gdHJhbnNmb3JtVG9OdW1iZXIodmFsdWVPZkVsZW1lbnQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub051bWJlcih2YWx1ZU9mRWxlbWVudCkge1xuICBsZXQgbGV0dGVyUmVtb3ZlciA9IC9bMC05XSsvZztcbiAgbGV0IHZhbHVlT2ZFbGVtZW50V2l0aG91dExldHRlcnMgPSBgJHtsZXR0ZXJSZW1vdmVyLmV4ZWModmFsdWVPZkVsZW1lbnQpfWA7XG5cbiAgcmV0dXJuIE51bWJlcih2YWx1ZU9mRWxlbWVudFdpdGhvdXRMZXR0ZXJzKTtcbn1cbiIsImltcG9ydCB7ZGlzcGxheUxpc3R9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cblxubGV0IHNlbGVjdEZvckN1cnJlbnRMaXN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdExpc3QnKTtcbnNlbGVjdEZvckN1cnJlbnRMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUN1cnJlbnRMaXN0KTtcblxuZnVuY3Rpb24gY2hhbmdlQ3VycmVudExpc3QoZXZlbnQpe1xuICBhbGVydCgndGhpcyBoYXMgYmVlbiBjaGFuZ2VkJylcbndpbmRvdy52YWx1ZU9mU2VsZWN0ID0gTnVtYmVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG53aW5kb3cuY3VycmVudExpc3QgPSBsaXN0W3ZhbHVlT2ZTZWxlY3RdO1xuZGlzcGxheUxpc3QoKVxufVxuXG4iLCJpbXBvcnQgeyBkaXNwbGF5Q29udGVudEZvclR5cGUgfSBmcm9tICcuLy4uL2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMnXG5pbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnXG5cblxuXG4vLyBjb2xvciBzZWN0aW9uXG5pZiAobG9jYWxTdG9yYWdlLmNvbG9yKSB7XG4gIHdpbmRvdy5jb2xvciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmNvbG9yKVxufVxuZWxzZSB7XG4gIHdpbmRvdy5jb2xvciA9IHtcbiAgICBkYXJrOiB7XG4gICAgICBmb29kOiAnI2ZjY2IwNicsXG4gICAgICBwcm9kdWN0OiAnI2IxZGRmMScsXG4gICAgICByZWdQcm9kdWN0OiAnI2NhMmM5MicsXG4gICAgICBtb25leTogJyM1MGM4NzgnLFxuICAgIH0sXG4gICAgbGlnaHQ6IHtcbiAgICAgIGZvb2Q6ICcjZmZlOTAwJyxcbiAgICAgIHByb2R1Y3Q6ICcjMTE0YjVmJyxcbiAgICAgIHJlZ1Byb2R1Y3Q6ICcjYzhhMmM4LCcsXG4gICAgICBtb25leTogJyNlNWZjZjUnLFxuICAgIH1cbiAgfVxufVxuXG4gIC8vIGNsYXNzIHNlY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiBNb25leShwcmljZSwgbmFtZSA9IHByaWNlLCB0eXBlID0gJ21vbmV5Jykge1xuICAgIHJldHVybiB7IHByaWNlLCBuYW1lLCB0eXBlIH1cbiAgfVxuXG5cblxuICBleHBvcnQgZnVuY3Rpb24gUHJvZHVjdChuYW1lLCBwcmljZSwgdHlwZSA9ICdwcm9kdWN0Jykge1xuICAgIHJldHVybiB7IG5hbWUsIHByaWNlLCB0eXBlIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBSZWdQcm9kdWN0KG5hbWUsIHByaWNlLCBhbW91bnRQZXJZZWFyLCBhbW91bnRPZlJlZ1Byb2R1Y3RzLCB0eXBlID0gJ3JlZ1Byb2R1Y3QnKSB7XG4gICAgcmV0dXJuIHsgbmFtZSwgcHJpY2UsIGFtb3VudFBlclllYXIsIGFtb3VudE9mUmVnUHJvZHVjdHMsIHR5cGUgfVxuICB9XG5cblxuXG4gIGV4cG9ydCBmdW5jdGlvbiBGb29kKG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50LCBtb250aEFtb3VudCwgdHlwZSA9ICdmb29kJykge1xuICAgIGxldCBteVdlZWtBbW91bnQ7XG4gICAgbGV0IG15TW9udGhBbW91bnQ7XG4gICAgaWYgKHdlZWtBbW91bnQpIHtcbiAgICAgIG15V2Vla0Ftb3VudCA9IHdlZWtBbW91bnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgbXlXZWVrQW1vdW50ID0gcGFyc2VJbnQobW9udGhBbW91bnQgLyA0KTtcbiAgICB9XG5cbiAgICBpZiAobW9udGhBbW91bnQpIHtcbiAgICAgIG15TW9udGhBbW91bnQgPSBtb250aEFtb3VudDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBteU1vbnRoQW1vdW50ID0gcGFyc2VJbnQod2Vla0Ftb3VudCAqIDQpO1xuICAgIH1cblxuICAgIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50OiBteVdlZWtBbW91bnQsIG1vbnRoQW1vdW50OiBteU1vbnRoQW1vdW50LCB0eXBlIH1cbiAgfVxuXG5cbiAgZXhwb3J0IGZ1bmN0aW9uIExpc3QobmFtZSwgYXJyYXkgPSBbXSkge1xuICAgIHJldHVybiB7IGFycmF5LCBuYW1lIH1cbiAgfVxuXG5cbiAgLy8gbGlzdCBzZWN0aW9uXG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5saXN0KSB7XG4gICAgd2luZG93Lmxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5saXN0KVxuICAgIHdpbmRvdy5jdXJyZW50TGlzdCA9IHdpbmRvdy5saXN0WzBdO1xuICAgIGRpc3BsYXlMaXN0KClcbiAgfVxuICBlbHNlIHtcbiAgICB3aW5kb3cuY3VycmVudExpc3QgPSBuZXcgTGlzdCgnZGVmYXVsdCcpO1xuICAgIHdpbmRvdy5saXN0ID0gW2N1cnJlbnRMaXN0XTtcbiAgfVxuXG5cblxuICBleHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaXN0JywgSlNPTi5zdHJpbmdpZnkod2luZG93Lmxpc3QpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvcicsIEpTT04uc3RyaW5naWZ5KHdpbmRvdy5jb2xvcikpXG4gIH1cblxuXG4gIC8vIGZ1bmN0aW9uIHRvIHB1c2ggdG8gYXJyYXkgc2VjdGlvblxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwdXNoVG9BcnJheUFuZERpc3BsYXlMaXN0KGVsKSB7XG4gICAgY29uc29sZS5sb2coZWwpXG4gICAgY3VycmVudExpc3QuYXJyYXkucHVzaChlbCk7XG4gICAgZGlzcGxheUxpc3QoKVxuICAgIGRpc3BsYXlDb250ZW50Rm9yVHlwZSgpXG4gIH1cblxuXG5cblxuXG4iLCJpbXBvcnQgeyBkaXNwbGF5Q29udGVudEZvclR5cGUgfSBmcm9tICcuL2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMnO1xuXG5cbmNvbnN0IHR5cGVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZUNvbnRhaW5lciBzZWxlY3QnKTtcbmNvbnN0IHR5cGVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBzZWxlY3QnKTtcbnR5cGVTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUeXBlT2ZDYWxjdWxhdGlvbilcblxuY2hhbmdlVHlwZU9mQ2FsY3VsYXRpb24oKTtcbmZ1bmN0aW9uIGNoYW5nZVR5cGVPZkNhbGN1bGF0aW9uKCkge1xuXG4gIGlmICh0eXBlU2VsZWN0LnZhbHVlID09ICdtb250aGx5Jykge1xuICAgIHdpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9ICdtb250aGx5JztcbiAgfVxuICBlbHNlIGlmICh0eXBlU2VsZWN0LnZhbHVlID09ICd3ZWVrbHknKSB7XG4gICAgd2luZG93LnR5cGVPZkNhbGN1bGF0aW9uID0gJ3dlZWtseSc7XG4gIH1cbiAgZWxzZSBpZiAodHlwZVNlbGVjdC52YWx1ZSA9PSAnZGFpbHknKSB7XG4gICAgd2luZG93LnR5cGVPZkNhbGN1bGF0aW9uID0gJ2RhaWx5JztcbiAgfVxuICBlbHNle1xuICAgIHdpbmRvdy50eXBlT2ZDYWxjdWxhdGlvbiA9ICd5ZWFybHknO1xuICB9XG5cbiAgZGlzcGxheUNvbnRlbnRGb3JUeXBlKHR5cGVTZWxlY3Rvci52YWx1ZSk7XG59XG4iLCJpbXBvcnQge0xpc3R9IGZyb20gJy4vLi4vbGlzdC9saXN0U3RydWN0dXJlLmpzJztcbmltcG9ydCB7Y2xvc2VQb3BVcH0gZnJvbSAnLi9vcGVuV2luZG93LmpzJztcbmltcG9ydCB7ZGlzcGxheUxpc3R9IGZyb20gJy4vLi4vZGlzcGxheS8vaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCBhZGROZXdMaXN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZE5ld0xpc3RQb3BVcCcpXG5cbmNvbnN0IGFkZE5ld0xpc3RCdXR0b24gPSBhZGROZXdMaXN0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbjpsYXN0LW9mLXR5cGUnKVxuXG5hZGROZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3TGlzdCApXG5cbmZ1bmN0aW9uIGFkZE5ld0xpc3QoKXtcbmxldCBuYW1lRm9yTmV3SW5wdXQgPSBhZGROZXdMaXN0RGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG5saXN0LnB1c2goTGlzdChuYW1lRm9yTmV3SW5wdXQpKVxuZGlzcGxheUxpc3QoKVxuY2xvc2VQb3BVcCgpXG59XG4iLCJpbXBvcnQge2Rpc3BsYXlMaXN0fSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCBjdXJyZW5jeUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW5jeUJ1dHRvbicpO1xuY29uc3QgY3VycmVuY3lEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVuY3lQb3BVcCcpO1xuY3VycmVuY3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VDdXJyZW5jeSlcblxuYXN5bmMgZnVuY3Rpb24gY2hhbmdlQ3VycmVuY3koKSB7XG4gIGxldCBvcmlnaW5hbEN1cnJlbmN5ID0gY3VycmVuY3lEaWFsb2cucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVswXS52YWx1ZVxuXG4gIGxldCB0cmFuc2Zvcm1lZEN1cnJlbmN5ID0gY3VycmVuY3lEaWFsb2cucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVsxXS52YWx1ZVxuICBsZXQgdXJsID0gbmV3IFVSTChgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2ApXG4gIFxuICB1cmwucGF0aG5hbWUgPSBgZ2gvZmF3YXphaG1lZDAvY3VycmVuY3ktYXBpQDEvbGF0ZXN0L2N1cnJlbmNpZXMvJHt0cmFuc2Zvcm1lZEN1cnJlbmN5fS8ke29yaWdpbmFsQ3VycmVuY3l9Lmpzb25gXG4gIGFsZXJ0KHVybClcblxuICBsZXQgZmV0Y2hSZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgbGV0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoUmVzcG9uc2UuanNvbigpXG4gIGxldCBjdXJyZW5jeVZhbHVlID0gZ2V0Q3VycmVuY3koZmV0Y2hEYXRhKVxuICBpdGVyYXRlQW5kQ2hhbmdlUHJpY2VzKGN1cnJlbmN5VmFsdWUpXG4gIGRpc3BsYXlMaXN0KClcbn1cblxuXG5mdW5jdGlvbiBnZXRDdXJyZW5jeShkYXRhKSB7XG4gIGxldCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSlcbiAgbGV0IG9iamVjdERhdGEgPSBrZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgcmV0dXJuIHtrZXlzIDogZGF0YVtrZXldIH0gXG4gIH0pXG4gIGxldCBbZGF0ZSxjdXJyZW5jeV0gPSAgb2JqZWN0RGF0YVxuICBjdXJyZW5jeSA9IE51bWJlcihjdXJyZW5jeS5rZXlzKTtcbiAgcmV0dXJuIGN1cnJlbmN5XG59XG5cblxuZnVuY3Rpb24gaXRlcmF0ZUFuZENoYW5nZVByaWNlcyhjdXJyZW5jeVByaWNlKXtcbiAgZm9yKGxldCBjdXJyZW50TGlzdCBvZiBsaXN0KXtcbiAgICBjdXJyZW50TGlzdC5hcnJheS5tYXAoaXRlbSA9PiB7XG4gICAgaXRlbS5wcmljZSA9IGl0ZW0ucHJpY2UgLyBjdXJyZW5jeVByaWNlO1xuICAgIHJldHVybiBpdGVtO30pXG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb0J1dHRvbnMsIGNsb3NlUG9wVXAgfSBmcm9tICcuL29wZW5XaW5kb3cuanMnO1xuaW1wb3J0IHsgdHJhbnNmb3JtVG9OdW1iZXIgfSBmcm9tICcuLy4uL2xpc3QvYWRkSXRlbXNUb0xpc3QuanMnO1xuaW1wb3J0IHsgRm9vZCwgUHJvZHVjdCwgUmVnUHJvZHVjdCwgTW9uZXkgfSBmcm9tICcuLy4uL2xpc3QvbGlzdFN0cnVjdHVyZS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TGlzdCB9IGZyb20gJy4vLi4vZGlzcGxheS9pdGVtc09yTGlzdHMuanMnO1xuaW1wb3J0IHsgZGlzcGxheUVycm9yIH0gZnJvbSAnLi8uLi9kaXNwbGF5L2Vycm9yLmpzJztcblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRQb3BVcCcpO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JXaW5kb3coKSB7XG4gIGlmICh3aW5kb3cuc2VsZWN0ZWRJbmRleCkge1xuICAgIGdlbmVyYXRlQ29udGVudEZvckRpYWxvZ0Zvckl0ZW1zKClcbiAgICBhZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBoYXZlbid0IHNlbGVjdGVkIGFueXRoaW5nYClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50Rm9yTGlzdFdpbmRvdygpIHtcbiAgZ2VuZXJhdGVDb250ZW50Rm9yRGlhbG9nRm9yTGlzdHMoKVxuICBhZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKClcbn1cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JEaWFsb2dGb3JJdGVtcygpIHtcbiAgbGV0IGl0ZW0gPSBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XTtcbiAgbGV0IHNlbGVjdGVkTGlzdCA9IGxpc3Rbc2VsZWN0ZWRJbmRleF07XG4gIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBkaWFsb2cuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+bmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLm5hbWV9J3R5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8cD5hbW91bnQgb2YgZm9vZCBwZXIgcHJpY2U6PC9wPlxuICAgICAgICA8aW5wdXQgIHZhbHVlPScke2l0ZW0uYW1vdW50UGVyUHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJQcmljZVwiPlxuICAgICAgICA8cD5hbW91bnQgb2YgZm9vZCBwZXIgZGF5OjwvcD5cbiAgICAgICAgPGlucHV0ICAgdmFsdWU9JyR7aXRlbS5hbW91bnRQZXJEYXl9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJEYXlcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciBtb250aDogPGJyPiA8c3Bhbj4oeW91IGVhdCk8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ubW9udGhBbW91bnR9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJtb250aEFtb3VudFwiPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8cD5vcjwvcD5cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwPmFtb3VudCBvZiBkYXlzIHBlciB3ZWVrOiA8YnI+IDxzcGFuPih5b3UgZWF0KTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS53ZWVrQW1vdW50fScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J251bWVyaWMnIGlkPVwid2Vla0Ftb3VudFwiPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y3QnOlxuICAgICAgZGlhbG9nLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPSdjbG9zZUJ0bic+Y2xvc2U8L2J1dHRvbj5cbiAgICAgICAgPHA+bmFtZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLm5hbWV9J3R5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmA7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZWdQcm9kdWN0JzpcbiAgICAgIGRpYWxvZy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz0nY2xvc2VCdG4nPmNsb3NlPC9idXR0b24+XG4gICAgICAgIDxwPm5hbWU6PC9wPlxuICAgICAgICA8aW5wdXQgdmFsdWU9JyR7aXRlbS5uYW1lfSd0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiPlxuICAgICAgICA8cD5wcmljZTo8L3A+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT0nJHtpdGVtLnByaWNlfScgdHlwZT1cInRleHRcIiBpbnB1dG1vZGU9J2RlY2ltYWwnIGlkPVwicHJpY2VcIj5cbiAgICAgICAgPHA+YW1vdW50IG9mIHByb2R1Y3RzOjwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaW5wdXRtb2RlPSdudW1lcmljJyBpZD1cImFtb3VudE9mUmVnUHJvZHVjdHNcIiB2YWx1ZT0nJHtpdGVtLmFtb3VudE9mUmVnUHJvZHVjdHN9JyByZXF1aXJlZD5cbiAgICAgICAgPHA+YW1vdW50IG9mIG1vbnRocyBwZXIgeWVhcjo8L3A+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nbnVtZXJpYycgaWQ9XCJhbW91bnRQZXJZZWFyXCIgdmFsdWU9JyR7aXRlbS5hbW91bnRQZXJZZWFyfScgcmVxdWlyZWQ+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nYXBwbHknPmFwcGx5PC9idXR0b24+YDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgIGRpYWxvZy5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz0nY2xvc2VCdG4nPmNsb3NlPC9idXR0b24+XG4gICAgICAgIDxwPnByaWNlOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2l0ZW0ucHJpY2V9JyB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT0nZGVjaW1hbCcgaWQ9XCJwcmljZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmA7XG4gICAgICBicmVhaztcbiAgfVxuICBsZXQgYXBwbHlCdXR0b24gPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2FwcGx5Jyk7XG4gIGFwcGx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwbHlDaGFuZ2VzRm9ySXRlbXMpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRGb3JEaWFsb2dGb3JMaXN0cygpIHtcblxuICBkaWFsb2cuaW5uZXJIVE1MID0gYDxidXR0b24gY2xhc3M9J2Nsb3NlQnRuJz5jbG9zZTwvYnV0dG9uPlxuICAgICAgICA8cD5uYW1lOjwvcD5cbiAgICAgICAgPGlucHV0IHZhbHVlPScke2N1cnJlbnRMaXN0Lm5hbWV9J3R5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBpZD0nZGVsZXRlJz5kZWxldGUgbGlzdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgaWQ9J2FwcGx5Jz5hcHBseTwvYnV0dG9uPmA7XG5cbiAgLy8gbm90IHVzaW5nIGdldEVsZW1lbnRCeUlkIGJlY2F1c2UgeW91IGNhbid0IHNlbGVjdCBpbnNpZGUgdGhlIGRpYWxvZyBwcm9wZXJ0eSB3aXRoIGdldEVsZW1lbnRCeUlkXG4gIGxldCBhcHBseUJ1dHRvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYXBwbHknKTtcbiAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlJyk7XG4gIGFwcGx5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXBwbHlDaGFuZ2VzRm9yTGlzdHMpO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVMaXN0KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlDaGFuZ2VzRm9ySXRlbXMoKSB7XG4gIGxldCBpdGVtID0gY3VycmVudExpc3QuYXJyYXlbc2VsZWN0ZWRJbmRleF07XG4gIHN3aXRjaCAoaXRlbS50eXBlKSB7XG4gICAgY2FzZSAnZm9vZCc6XG4gICAgICBydW5Qcm9taXNlVG9BcHBseVZhbHVlKGdldFZhbHVlc0Zyb21Gb29kSW5wdXRzLCBnZXRWYWx1ZXNGb3JGb29kLCBjaGVja0lmRm9vZElzRW1wdHksIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBRm9vZCwgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwcm9kdWN0JzpcbiAgICAgIHJ1blByb21pc2VUb0FwcGx5VmFsdWUoZ2V0VmFsdWVzRnJvbVByb2R1Y3RJbnB1dHMsIGdldFZhbHVlc0ZvclByb2R1Y3QsIGNoZWNrSWZQcm9kdWN0SXNFbXB0eSwgcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c0FQcm9kdWN0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JlZ1Byb2R1Y3QnOlxuICAgICAgcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tUmVnUHJvZHVjdElucHV0cywgZ2V0VmFsdWVzRm9yUmVnUHJvZHVjdCwgY2hlY2tJZlJlZ1Byb2R1Y3RJc0VtcHR5LCByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQVJlZ1Byb2R1Y3QpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbW9uZXknOlxuICAgICAgcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tTW9uZXlJbnB1dHMsIGdldFZhbHVlc0Zvck1vbmV5LCBjaGVja0lmTW9uZXlJc0VtcHR5LCByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzTW9uZXkpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuUHJvbWlzZVRvQXBwbHlWYWx1ZShnZXRWYWx1ZXNGcm9tSW5wdXRfY2FsbGJhY2ssIGdldFZhbHVlc0Zvcl9jYWxsQmFjaywgY2hlY2tJZkl0ZW1Jc0VtcHR5X2NhbGxCYWNrLCByZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQV9jYWxsQmFjaywgd29ya2luZ1dpdGhGb29kID0gZmFsc2UsKSB7XG4gIHdpbmRvdy53b3JraW5nV2l0aEZvb2QgPSB3b3JraW5nV2l0aEZvb2Q7XG4gIC8vIHJlbWVtYmVyIHRvIGFkZCB2YWxpZGl0eSBpbiB0aGUgY2F0Y2ggaW4gYWxsIG9mIHRoZXNlIFxuICBnZXRWYWx1ZXNGcm9tSW5wdXRfY2FsbGJhY2soKVxuICAgIC50aGVuKGdldFZhbHVlc0Zvcl9jYWxsQmFjaylcbiAgICAudGhlbihjaGVja0lmSXRlbUlzRW1wdHlfY2FsbEJhY2spXG4gICAgLnRoZW4obWFrZVdlZWtzT3JNb250aHNWYWxpZClcbiAgICAudGhlbihyZWFzc2luZ1ZhbHVlRnJvbUN1cnJlbnRJbmRleElmSXRzQV9jYWxsQmFjaylcbiAgICAudGhlbihkaXNwbGF5TGlzdClcbiAgICAudGhlbihjbG9zZVBvcFVwKVxuICAgIC5jYXRjaChlcnJvciA9PiBkaXNwbGF5RXJyb3IoZXJyb3IpKTtcbn1cblxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tRm9vZElucHV0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICBsZXQgYW1vdW50UGVyUHJpY2UgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2Ftb3VudFBlclByaWNlJykudmFsdWU7XG4gIGxldCBhbW91bnRQZXJEYXkgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI2Ftb3VudFBlckRheScpLnZhbHVlO1xuICBsZXQgbW9udGhBbW91bnQgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI21vbnRoQW1vdW50JykudmFsdWU7XG4gIGxldCB3ZWVrQW1vdW50ID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyN3ZWVrQW1vdW50JykudmFsdWU7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJQcmljZSwgYW1vdW50UGVyRGF5LCBtb250aEFtb3VudCwgd2Vla0Ftb3VudCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tUHJvZHVjdElucHV0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tUmVnUHJvZHVjdElucHV0cygpIHtcbiAgbGV0IG5hbWUgPSBkaWFsb2cucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgbGV0IHByaWNlID0gZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJyNwcmljZScpLnZhbHVlO1xuICBsZXQgYW1vdW50UGVyWWVhciA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYW1vdW50UGVyWWVhcicpLnZhbHVlO1xuICBsZXQgYW1vdW50T2ZSZWdQcm9kdWN0cyA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYW1vdW50T2ZSZWdQcm9kdWN0cycpLnZhbHVlO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSwgYW1vdW50UGVyWWVhciwgYW1vdW50T2ZSZWdQcm9kdWN0cyB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tTW9uZXlJbnB1dHMoKSB7XG4gIGxldCBwcmljZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjcHJpY2UnKS52YWx1ZTtcbiAgcmV0dXJuIHsgcHJpY2UgfTtcbn1cblxuXG5cbmZ1bmN0aW9uIGdldFZhbHVlc0ZvckZvb2QoZm9vZCkge1xuICBsZXQgbmFtZSA9IGZvb2QubmFtZTtcbiAgbGV0IHByaWNlID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC5wcmljZSk7XG4gIGxldCBhbW91bnRQZXJQcmljZSA9IHRyYW5zZm9ybVRvTnVtYmVyKGZvb2QuYW1vdW50UGVyUHJpY2UpO1xuICBsZXQgYW1vdW50UGVyRGF5ID0gdHJhbnNmb3JtVG9OdW1iZXIoZm9vZC5hbW91bnRQZXJEYXkpO1xuICBsZXQgbW9udGhBbW91bnQgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLm1vbnRoQW1vdW50KTtcbiAgbGV0IHdlZWtBbW91bnQgPSB0cmFuc2Zvcm1Ub051bWJlcihmb29kLndlZWtBbW91bnQpO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSwgYW1vdW50UGVyUHJpY2UsIGFtb3VudFBlckRheSwgbW9udGhBbW91bnQsIHdlZWtBbW91bnQgfVxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JQcm9kdWN0KHByb2R1Y3QpIHtcbiAgbGV0IG5hbWUgPSBwcm9kdWN0Lm5hbWU7XG4gIGxldCBwcmljZSA9IHRyYW5zZm9ybVRvTnVtYmVyKHByb2R1Y3QucHJpY2UpO1xuICByZXR1cm4geyBuYW1lLCBwcmljZSB9XG59XG5cblxuZnVuY3Rpb24gZ2V0VmFsdWVzRm9yUmVnUHJvZHVjdChwcm9kdWN0KSB7XG4gIGxldCBuYW1lID0gcHJvZHVjdC5uYW1lO1xuICBsZXQgcHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihwcm9kdWN0LnByaWNlKTtcbiAgbGV0IGFtb3VudFBlclllYXIgPSB0cmFuc2Zvcm1Ub051bWJlcihwcm9kdWN0LmFtb3VudFBlclllYXIpO1xuICBsZXQgYW1vdW50T2ZSZWdQcm9kdWN0cyA9IHRyYW5zZm9ybVRvTnVtYmVyKHByb2R1Y3QuYW1vdW50T2ZSZWdQcm9kdWN0cyk7XG4gIHJldHVybiB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJZZWFyLCBhbW91bnRPZlJlZ1Byb2R1Y3RzIH1cbn1cblxuXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JNb25leShtb25leSkge1xuICBsZXQgcHJpY2UgPSB0cmFuc2Zvcm1Ub051bWJlcihtb25leS5wcmljZSk7XG4gIHJldHVybiB7IHByaWNlIH1cbn1cblxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZkZvb2RJc0VtcHR5KGZvb2QpIHtcbiAgLy8gY2hlY2sgZW1wdHluZXNzIFxuICBjaGVja0lmRW1wdHkoZm9vZC5uYW1lLCAndGhlIG5hbWUgb2YgdGhlIGZvb2QnKTtcbiAgY2hlY2tJZkVtcHR5KGZvb2QucHJpY2UsICd0aGUgcHJpY2Ugb2YgdGhlIGZvb2QnKTtcbiAgY2hlY2tJZkVtcHR5KGZvb2QuYW1vdW50UGVyUHJpY2UsICd0aGUgYW1vdW50IG9mIGZvb2QgcGVyIHByaWNlJyk7XG4gIGNoZWNrSWZFbXB0eShmb29kLmFtb3VudFBlckRheSwgJ3RoZSBhbW91bnQgb2YgZm9vZCBwZXIgZGF5Jyk7XG4gIGNoZWNrSWZFaXRoZXJNb250aE9yV2Vla0lzRW1wdHkoZm9vZC53ZWVrQW1vdW50LCBmb29kLm1vbnRoQW1vdW50KTtcblxuICBsaW1pdE51bWJlcihmb29kLndlZWtBbW91bnQsIDcsICd3ZWVrcyBjYW4gb25seSBiZSA3IGRheXMgbG9uZ3MnKVxuICBsaW1pdE51bWJlcihmb29kLm1vbnRoQW1vdW50LCAzMSwgJ21vbnRocyBjYW4gb25seSBiZSAzMSBkYXlzIGxvbmcnKVxuXG4gIHJldHVybiB7IG5hbWU6IGZvb2QubmFtZSwgcHJpY2U6IGZvb2QucHJpY2UsIGFtb3VudFBlclByaWNlOiBmb29kLmFtb3VudFBlclByaWNlLCBhbW91bnRQZXJEYXk6IGZvb2QuYW1vdW50UGVyRGF5LCB3ZWVrQW1vdW50OiBmb29kLndlZWtBbW91bnQsIG1vbnRoQW1vdW50OiBmb29kLm1vbnRoQW1vdW50IH1cbn1cbmZ1bmN0aW9uIGNoZWNrSWZFaXRoZXJNb250aE9yV2Vla0lzRW1wdHkod2VlaywgbW9udGgpIHtcbiAgaWYgKGNoZWNrV2l0aG91dEVycm9yKHdlZWssICd3ZWVrJykgJiYgY2hlY2tXaXRob3V0RXJyb3IobW9udGgsICdtb250aCcpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgaGF2ZW4ndCBmaWxsZWQgbmVpdGhlciB0aGUgYW1vdW50IG9mIGRheXMgcGVyIHdlZWsgbm9yIHRoZSBhbW91bnQgb2YgZGF5cyBwZXIgdGhlIG1vbnRoYClcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNoZWNrV2l0aG91dEVycm9yKGl0ZW0sIG5hbWUpIHtcbiAgaWYgKGAke2l0ZW19YCA9PSAnTmFOJykge1xuICAgIHJldHVybiBgeW91IGRpZG4ndCBmaWxsIHRoZSAke25hbWV9YDtcbiAgfVxuICBlbHNlIGlmICghYCR7aXRlbX1gKSB7XG4gICAgcmV0dXJuIGB5b3UgZGlkbid0IGZpbGwgdGhlICR7bmFtZX1gO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbn1cblxuZnVuY3Rpb24gbGltaXROdW1iZXIobnVtYmVyVG9DaGVjaywgbGltaXQsIG1lc3NhZ2UpIHtcbiAgaWYgKE51bWJlcihudW1iZXJUb0NoZWNrKSA+IE51bWJlcihsaW1pdCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZlByb2R1Y3RJc0VtcHR5KHByb2R1Y3QpIHtcbiAgLy8gY2hlY2sgZW1wdHluZXNzIFxuICBjaGVja0lmRW1wdHkocHJvZHVjdC5uYW1lLCAndGhlIG5hbWUgb2YgdGhlIHByb2R1Y3QnKTtcbiAgY2hlY2tJZkVtcHR5KHByb2R1Y3QucHJpY2UsICd0aGUgcHJpY2Ugb2YgdGhlIHByb2R1Y3QnKTtcblxuICByZXR1cm4geyBuYW1lOiBwcm9kdWN0Lm5hbWUsIHByaWNlOiBwcm9kdWN0LnByaWNlIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZlJlZ1Byb2R1Y3RJc0VtcHR5KHByb2R1Y3QpIHtcbiAgLy8gY2hlY2sgZW1wdHluZXNzIFxuICBjaGVja0lmRW1wdHkocHJvZHVjdC5uYW1lLCAndGhlIG5hbWUgb2YgdGhlIHByb2R1Y3QnKTtcbiAgY2hlY2tJZkVtcHR5KHByb2R1Y3QucHJpY2UsICd0aGUgcHJpY2Ugb2YgdGhlIHByb2R1Y3QnKTtcbiAgY2hlY2tJZkVtcHR5KHByb2R1Y3QuYW1vdW50UGVyWWVhciwgJ3RoZSBhbW91bnQgb2YgbW9udGhzIHBlciB5ZWFyIG9mIHRoZSBwcm9kdWN0Jyk7XG4gIGNoZWNrSWZFbXB0eShwcm9kdWN0LmFtb3VudE9mUmVnUHJvZHVjdHMsICd0aGUgYW1vdW50IG9mIHByb2R1Y3QnKTtcblxuICByZXR1cm4geyBuYW1lOiBwcm9kdWN0Lm5hbWUsIHByaWNlOiBwcm9kdWN0LnByaWNlLCBhbW91bnRQZXJZZWFyOiBwcm9kdWN0LmFtb3VudE9mUmVnUHJvZHVjdHMsIGFtb3VudE9mUmVnUHJvZHVjdHM6IHByb2R1Y3QuYW1vdW50T2ZSZWdQcm9kdWN0cyB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZNb25leUlzRW1wdHkobW9uZXkpIHtcbiAgLy8gY2hlY2sgZW1wdHluZXNzIFxuICBjaGVja0lmRW1wdHkobW9uZXkucHJpY2UsICdhbnkgbW9uZXknKTtcblxuICByZXR1cm4geyBwcmljZTogbW9uZXkucHJpY2UgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lmRW1wdHkoZWxlbWVudCwgbmFtZU9mRWxlbWVudEZvckVtcHR5TWVzc2FnZSkge1xuICBpZiAoYCR7ZWxlbWVudH1gID09ICdOYU4nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgZGlkbid0IGZpbGwgJHtuYW1lT2ZFbGVtZW50Rm9yRW1wdHlNZXNzYWdlfWApO1xuICB9XG4gIGVsc2UgaWYgKCFgJHtlbGVtZW50fWApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHlvdSBkaWRuJ3QgZmlsbCAke25hbWVPZkVsZW1lbnRGb3JFbXB0eU1lc3NhZ2V9YCk7XG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIG1ha2VXZWVrc09yTW9udGhzVmFsaWQoZm9vZCkge1xuICBpZiAod2luZG93LndvcmtpbmdXaXRoRm9vZCkge1xuXG4gICAgbGV0IGl0ZW0gPSBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XTtcbiAgICAvLyBjaGVjayBpZiB0aGUgd2VlayBvciB0aGUgbW9udGggaXMgZmFsc2VcbiAgICBsZXQgd2Vla0VxdWFsID0gZmFsc2U7XG4gICAgbGV0IG1vbnRoRXF1YWwgPSBmYWxzZTtcbiAgICBpZiAoaXRlbS53ZWVrQW1vdW50ID09IGZvb2Qud2Vla0Ftb3VudCkge1xuICAgICAgd2Vla0VxdWFsID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGl0ZW0ubW9udGhBbW91bnQgPT0gZm9vZC5tb250aEFtb3VudCkge1xuICAgICAgbW9udGhFcXVhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gY2hhbmdlIHRoZSBvdGhlciB2YWx1ZSBpZiBvbmUgb2YgdGhvc2UgaXMgZmFsc2UgYnV0IHRoZSBvdGhlciBvbmUgaXMgdHJ1ZVxuICAgIGlmICh3ZWVrRXF1YWwgPT0gdHJ1ZSAmJiBtb250aEVxdWFsID09IGZhbHNlKSB7XG4gICAgICBmb29kLndlZWtBbW91bnQgPSBwYXJzZUludChmb29kLm1vbnRoQW1vdW50IC8gNClcbiAgICB9XG4gICAgZWxzZSBpZiAod2Vla0VxdWFsID09IGZhbHNlICYmIG1vbnRoRXF1YWwgPT0gdHJ1ZSkge1xuICAgICAgZm9vZC5tb250aEFtb3VudCA9IHBhcnNlSW50KGZvb2Qud2Vla0Ftb3VudCAqIDQpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgbmFtZTogZm9vZC5uYW1lLCBwcmljZTogZm9vZC5wcmljZSwgYW1vdW50UGVyUHJpY2U6IGZvb2QuYW1vdW50UGVyUHJpY2UsIGFtb3VudFBlckRheTogZm9vZC5hbW91bnRQZXJEYXksIHdlZWtBbW91bnQ6IGZvb2Qud2Vla0Ftb3VudCwgbW9udGhBbW91bnQ6IGZvb2QubW9udGhBbW91bnQgfVxuXG5cbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZm9vZDtcbiAgfVxufVxuXG5cblxuXG5cbmZ1bmN0aW9uIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBRm9vZChmb29kKSB7XG4gIGN1cnJlbnRMaXN0LmFycmF5W3NlbGVjdGVkSW5kZXhdID0gRm9vZChmb29kLm5hbWUsIGZvb2QucHJpY2UsIGZvb2QuYW1vdW50UGVyUHJpY2UsIGZvb2QuYW1vdW50UGVyRGF5LCBmb29kLndlZWtBbW91bnQsIGZvb2QubW9udGhBbW91bnQpXG59XG5cbmZ1bmN0aW9uIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBUHJvZHVjdChwcm9kdWN0KSB7XG4gIGN1cnJlbnRMaXN0LmFycmF5W3NlbGVjdGVkSW5kZXhdID0gUHJvZHVjdChwcm9kdWN0Lm5hbWUsIHByb2R1Y3QucHJpY2UpXG59XG5cbmZ1bmN0aW9uIHJlYXNzaW5nVmFsdWVGcm9tQ3VycmVudEluZGV4SWZJdHNBUmVnUHJvZHVjdChwcm9kdWN0KSB7XG4gIGxldCB7IG5hbWUsIHByaWNlLCBhbW91bnRQZXJZZWFyLCBhbW91bnRPZlJlZ1Byb2R1Y3RzIH0gPSBwcm9kdWN0O1xuICBjdXJyZW50TGlzdC5hcnJheVtzZWxlY3RlZEluZGV4XSA9IFJlZ1Byb2R1Y3QobmFtZSwgcHJpY2UsIGFtb3VudFBlclllYXIsIGFtb3VudE9mUmVnUHJvZHVjdHMpXG59XG5cblxuZnVuY3Rpb24gcmVhc3NpbmdWYWx1ZUZyb21DdXJyZW50SW5kZXhJZkl0c01vbmV5KG1vbmV5KSB7XG4gIGN1cnJlbnRMaXN0LmFycmF5W3NlbGVjdGVkSW5kZXhdID0gTW9uZXkobW9uZXkucHJpY2UpXG59XG5cblxuXG5cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlc0Zvckxpc3RzKCkge1xuICBsZXQgbmFtZSA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xuICBjdXJyZW50TGlzdC5uYW1lID0gbmFtZTtcbiAgZGlzcGxheUxpc3QoKVxuICBjbG9zZVBvcFVwKClcbn1cblxuXG5mdW5jdGlvbiBkZWxldGVMaXN0KCkge1xuICB0cnkge1xuICAgIGxldCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdExpc3QnKTtcbiAgICBsZXQgbGlzdEluZGV4ID0gTnVtYmVyKGxpc3RTZWxlY3QudmFsdWUpO1xuICAgIGlmICh3aW5kb3cubGlzdC5sZW5ndGggPT0gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB5b3UgY2FuJ3QgZGVsZXRlIHRoaXMgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGxpc3RgKVxuICAgIH1cbiAgICB3aW5kb3cubGlzdC5zcGxpY2UobGlzdEluZGV4LCAxKVxuICAgIGxpc3RTZWxlY3QudmFsdWUgPSAwO1xuICAgIGRpc3BsYXlMaXN0KClcbiAgICBjbG9zZVBvcFVwKClcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwbGF5RXJyb3IoZXJyb3IpXG4gIH1cbn1cbiIsImltcG9ydCB7IGRpc3BsYXlMaXN0fSBmcm9tICcuLy4uL2Rpc3BsYXkvaXRlbXNPckxpc3RzLmpzJ1xuXG5jb25zdCBjaGFuZ2VDb2xvckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGU6Zmlyc3Qtb2YtdHlwZSBidXR0b246Zmlyc3Qtb2YtdHlwZScpO1xuXG5jaGFuZ2VDb2xvckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Db2xvcldpbmRvdylcbmZ1bmN0aW9uIG9wZW5Db2xvcldpbmRvdygpIHtcblxuICB1cGRhdGVWYWx1ZXNGcm9tQ29sb3JPYmplY3QoKVxuICBsZXQgY29sb3JXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3JQb3BVcCcpO1xuICBjb2xvcldpbmRvdy5zaG93TW9kYWwoKVxuXG4gIGZvciAobGV0IGNvbG9yUGlja2VyIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKSkge1xuICAgIGNvbG9yUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZUNvbG9ycylcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDb2xvcnMoKSB7XG4gIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5jbGFzc05hbWUgPT0gJ2RhcmsnKXtcbiAgd2luZG93LmNvbG9yLmRhcmsuZm9vZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVswXS52YWx1ZVxuICB3aW5kb3cuY29sb3IuZGFyay5wcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzFdLnZhbHVlXG4gIHdpbmRvdy5jb2xvci5kYXJrLnJlZ1Byb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMl0udmFsdWVcbiAgd2luZG93LmNvbG9yLmRhcmsubW9uZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbM10udmFsdWVcbiAgfVxuICBlbHNle1xuICB3aW5kb3cuY29sb3IubGlnaHQuZm9vZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVswXS52YWx1ZVxuICB3aW5kb3cuY29sb3IubGlnaHQucHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVsxXS52YWx1ZVxuICB3aW5kb3cuY29sb3IubGlnaHQucmVnUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVsyXS52YWx1ZVxuICB3aW5kb3cuY29sb3IubGlnaHQubW9uZXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbM10udmFsdWVcbiAgfVxuICBkaXNwbGF5TGlzdCgpXG59XG5cblxuXG5mdW5jdGlvbiB1cGRhdGVWYWx1ZXNGcm9tQ29sb3JPYmplY3QoKSB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuY2xhc3NOYW1lID09ICdkYXJrJykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVswXS52YWx1ZSA9IHdpbmRvdy5jb2xvci5kYXJrLmZvb2RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMV0udmFsdWUgPSB3aW5kb3cuY29sb3IuZGFyay5wcm9kdWN0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzJdLnZhbHVlID0gd2luZG93LmNvbG9yLmRhcmsucmVnUHJvZHVjdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVszXS52YWx1ZSA9IHdpbmRvdy5jb2xvci5kYXJrLm1vbmV5XG4gIH1cbiAgZWxzZSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzBdLnZhbHVlID0gd2luZG93LmNvbG9yLmxpZ2h0LmZvb2RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFt0eXBlPSdjb2xvciddYClbMV0udmFsdWUgPSB3aW5kb3cuY29sb3IubGlnaHQucHJvZHVjdFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W3R5cGU9J2NvbG9yJ11gKVsyXS52YWx1ZSA9IHdpbmRvdy5jb2xvci5saWdodC5yZWdQcm9kdWN0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT0nY29sb3InXWApWzNdLnZhbHVlID0gd2luZG93LmNvbG9yLmxpZ2h0Lm1vbmV5XG4gIH1cbn1cbiIsImltcG9ydCB7IGdlbmVyYXRlQ29udGVudEZvcldpbmRvdywgZ2VuZXJhdGVDb250ZW50Rm9yTGlzdFdpbmRvdyB9IGZyb20gJy4vZ2VuZXJhdGVDb250ZW50Rm9yRWRpdFdpbmRvdy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5RXJyb3IgfSBmcm9tICcuLy4uL2Rpc3BsYXkvZXJyb3IuanMnO1xuXG5cbmNvbnN0IGVkaXRDdXJyZW50TGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Q29udGFpbmVyIGRpdiBidXR0b24nKTtcbmNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b24nKTtcbmNvbnN0IGFkZE5ld0xpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdENvbnRhaW5lciBidXR0b246bnRoLW9mLXR5cGUoMiknKTtcbmNvbnN0IGN1cnJlbmN5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVDb250YWluZXIgYnV0dG9uJyk7XG5cblxuY29uc3QgYWRkTmV3TGlzdERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGROZXdMaXN0UG9wVXAnKTtcbmNvbnN0IGVkaXREaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdFBvcFVwJyk7XG5jb25zdCBjdXJyZW5jeURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW5jeVBvcFVwJyk7XG5cblxuXG5lZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvdyk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudEFuZE9wZW5XaW5kb3coKSB7XG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVDb250ZW50Rm9yV2luZG93KClcbiAgICBvcGVuV2luZG93KGVkaXREaWFsb2cpXG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmVkaXRDdXJyZW50TGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlQ29udGVudEFuZE9wZW5XaW5kb3dGb3JMaXN0KVxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50QW5kT3BlbldpbmRvd0Zvckxpc3QoKSB7XG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVDb250ZW50Rm9yTGlzdFdpbmRvdygpXG4gICAgb3BlbldpbmRvdyhlZGl0RGlhbG9nKVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BsYXlFcnJvcihlcnJvcik7XG4gIH1cbn1cblxuXG5hZGROZXdMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlbldpbmRvdyhhZGROZXdMaXN0RGlhbG9nKSk7XG5jdXJyZW5jeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5XaW5kb3coY3VycmVuY3lEaWFsb2cpKTtcblxuZnVuY3Rpb24gb3BlbldpbmRvdyhkaWFsb2cpIHtcbiAgZGlhbG9nLnNob3dNb2RhbCgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9CdXR0b25zKCkge1xuICBmb3IgKGxldCBjbG9zZUJ0biBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2VCdG4nKSkge1xuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3BVcClcbiAgfVxufVxuYWRkRXZlbnRMaXN0ZW5lclRvQnV0dG9ucygpXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBvcFVwKCkge1xuICBmb3IgKGxldCBkaWFsb2cgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGlhbG9nJykpIHtcbiAgICBpZiAoZGlhbG9nLm9wZW4pIHtcbiAgICAgIGRpYWxvZy5jbG9zZSgpXG4gICAgfVxuICB9XG59XG4iLCJcbmNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XG5jb25zdCBkYXJrTW9kZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24nKVxuZGFya01vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUb0RhcmtNb2RlKVxuXG5sZXQgaXNEYXJrTW9kZUVuYWJsZWQgPSBtYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlc1xuaWYgKGlzRGFya01vZGVFbmFibGVkKSB7XG4gIHN3aXRjaFRvRGFya01vZGUoKVxuXG5cbn1cblxuXG5cblxuZnVuY3Rpb24gc3dpdGNoVG9EYXJrTW9kZSgpIHtcbiAgaHRtbC5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJylcbiAgaWYgKGh0bWwuY2xhc3NOYW1lID09ICdkYXJrJykge1xuICAgIGRhcmtNb2RlQnV0dG9uLmlubmVyVGV4dCA9ICdsaWdodCBtb2RlJztcbiAgfVxuICBlbHNlIHtcbiAgICBkYXJrTW9kZUJ1dHRvbi5pbm5lclRleHQgPSAnZGFyayBtb2RlJztcbiAgfVxufVxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNlbGVjdGVke1xuYm9yZGVyLXJhZGl1czo1cHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XG5wYWRkaW5nOjVweDtcblxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL2NhbGN1bGF0aW9uVHlwZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxpQkFBaUI7QUFDakIsOEJBQThCO0FBQzlCLFdBQVc7O0FBRVhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNlbGVjdGVke1xcbmJvcmRlci1yYWRpdXM6NXB4O1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG5wYWRkaW5nOjVweDtcXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdC5kYXJre1xuLS1ibGFjazp3aGl0ZTtcbi0td2hpdGU6YmxhY2s7XG4tLWdyZWVuOiMwMTIxMjA7XG4tLXllbGxvdzogI0VFRUU5Qjtcbi0tbGlnaHRZZWxsb3c6ICNGNUJCMDA7XG4tLXJlZDojZGMxNDNjO1xuLS1saWdodFJlZDojRUQ2NDY0O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL2Rhcmttb2RlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2IsZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdC5kYXJre1xcbi0tYmxhY2s6d2hpdGU7XFxuLS13aGl0ZTpibGFjaztcXG4tLWdyZWVuOiMwMTIxMjA7XFxuLS15ZWxsb3c6ICNFRUVFOUI7XFxuLS1saWdodFllbGxvdzogI0Y1QkIwMDtcXG4tLXJlZDojZGMxNDNjO1xcbi0tbGlnaHRSZWQ6I0VENjQ2NDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEobWluLXdpZHRoOjUwMHB4KXtcbmFydGljbGUgZm9ybSBkaXZ7XG5mbGV4LWRpcmVjdGlvbjpyb3c7XG59fVxuXG5cbkBtZWRpYShtaW4td2lkdGg6OTAwcHgpe1xuaGVhZGVye1xuZ2FwOjRweDtcblxuICB9XG5cbmhlYWRlciBzcGFue1xuZGlzcGxheTppbmxpbmU7XG5mb250LXNpemU6Mi4ydnc7XG4gIH1cblxubWFpbntcbmhlaWdodDo5MHZoO1xubWluLWhlaWdodDogNTUwcHg7XG5ncmlkLXRlbXBsYXRlOidleHBlbnNlVHlwZSBleHBlbnNlQ29udGVudCcgMC45ZnJcbiAgICAgICAgICAgICAgJ3R5cGVPZkNhbGN1bGF0aW9uIGV4cGVuc2VDb250ZW50JyAwLjlmciAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJ3Nob3dMaXN0IGV4cGVuc2VDb250ZW50JyAxZnJcbiAgICAgICAgICAgICAgJ3Nob3dMaXN0IHJlc3VsdENvbnRlbnQnIDFmciAvIDFmciAxZnJcbn1cblxuXG4gIC8qIG9uIHRoZSBsZWZ0ICovXG5tYWluIGFydGljbGU6Zmlyc3Qtb2YtdHlwZXtcbmdyaWQtYXJlYTogZXhwZW5zZVR5cGU7XG59XG4jdHlwZUNvbnRhaW5lcntcbmdyaWQtYXJlYTp0eXBlT2ZDYWxjdWxhdGlvbjtcbn1cbiNsaXN0Q29udGFpbmVye1xuZ3JpZC1hcmVhOnNob3dMaXN0O1xufVxuXG4vKiBvbiB0aGUgcmlnaHQgKi9cblxuI2V4cGVuc2VDb250ZW50e1xuZ3JpZC1hcmVhOmV4cGVuc2VDb250ZW50O1xufVxuI3Jlc3VsdENvbnRlbnR7XG5ncmlkLWFyZWE6cmVzdWx0Q29udGVudDtcbn1cblxuXG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2lucHV0L3N0eWxpbmcvZGVza3RvcFN1cHBvcnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLE9BQU87O0VBRUw7O0FBRUY7QUFDQSxjQUFjO0FBQ2QsZUFBZTtFQUNiOztBQUVGO0FBQ0EsV0FBVztBQUNYLGlCQUFpQjtBQUNqQjs7OztBQUlBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBLGlCQUFpQjs7QUFFakI7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7O0FBR0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhKG1pbi13aWR0aDo1MDBweCl7XFxuYXJ0aWNsZSBmb3JtIGRpdntcXG5mbGV4LWRpcmVjdGlvbjpyb3c7XFxufX1cXG5cXG5cXG5AbWVkaWEobWluLXdpZHRoOjkwMHB4KXtcXG5oZWFkZXJ7XFxuZ2FwOjRweDtcXG5cXG4gIH1cXG5cXG5oZWFkZXIgc3BhbntcXG5kaXNwbGF5OmlubGluZTtcXG5mb250LXNpemU6Mi4ydnc7XFxuICB9XFxuXFxubWFpbntcXG5oZWlnaHQ6OTB2aDtcXG5taW4taGVpZ2h0OiA1NTBweDtcXG5ncmlkLXRlbXBsYXRlOidleHBlbnNlVHlwZSBleHBlbnNlQ29udGVudCcgMC45ZnJcXG4gICAgICAgICAgICAgICd0eXBlT2ZDYWxjdWxhdGlvbiBleHBlbnNlQ29udGVudCcgMC45ZnIgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAnc2hvd0xpc3QgZXhwZW5zZUNvbnRlbnQnIDFmclxcbiAgICAgICAgICAgICAgJ3Nob3dMaXN0IHJlc3VsdENvbnRlbnQnIDFmciAvIDFmciAxZnJcXG59XFxuXFxuXFxuICAvKiBvbiB0aGUgbGVmdCAqL1xcbm1haW4gYXJ0aWNsZTpmaXJzdC1vZi10eXBle1xcbmdyaWQtYXJlYTogZXhwZW5zZVR5cGU7XFxufVxcbiN0eXBlQ29udGFpbmVye1xcbmdyaWQtYXJlYTp0eXBlT2ZDYWxjdWxhdGlvbjtcXG59XFxuI2xpc3RDb250YWluZXJ7XFxuZ3JpZC1hcmVhOnNob3dMaXN0O1xcbn1cXG5cXG4vKiBvbiB0aGUgcmlnaHQgKi9cXG5cXG4jZXhwZW5zZUNvbnRlbnR7XFxuZ3JpZC1hcmVhOmV4cGVuc2VDb250ZW50O1xcbn1cXG4jcmVzdWx0Q29udGVudHtcXG5ncmlkLWFyZWE6cmVzdWx0Q29udGVudDtcXG59XFxuXFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2xpc3R7XG5ib3JkZXItcmFkaXVzOjEycHg7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG53aWR0aDo5MCU7XG5oZWlnaHQ6OTAlO1xub3ZlcmZsb3cteTpzY3JvbGw7XG59XG5cblxubGl7XG5saXN0LXN0eWxlOiBub25lO1xufVxuXG4jbGlzdCBsaS5zZWxlY3RlZEl0ZW17XG5vdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsVUFBVTtBQUNWLGlCQUFpQjtBQUNqQjs7O0FBR0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2xpc3R7XFxuYm9yZGVyLXJhZGl1czoxMnB4O1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG53aWR0aDo5MCU7XFxuaGVpZ2h0OjkwJTtcXG5vdmVyZmxvdy15OnNjcm9sbDtcXG59XFxuXFxuXFxubGl7XFxubGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI2xpc3QgbGkuc2VsZWN0ZWRJdGVte1xcbm91dGxpbmU6IDJweCBzb2xpZCBvcmFuZ2U7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9ne1xudGV4dC1hbGlnbjpjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXdoaXRlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xucG9zaXRpb246Zml4ZWQ7XG50b3A6NTAlO1xubGVmdDo1MCU7XG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuei1pbmRleDoyO1xucGFkZGluZzoxLjJ2dztcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuZGlhbG9nID4gKntcbmRpc3BsYXk6YmxvY2s7XG5tYXJnaW4tbGVmdDphdXRvO1xubWFyZ2luLXJpZ2h0OmF1dG87XG5tYXJnaW4tdG9wOjEwcHg7XG5cbn1cbiAgXG5kaWFsb2c6OmJhY2tkcm9we1xucG9zaXRpb246Zml4ZWQ7XG5iYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgjMjE1QTU5QUEsYmxhY2spIDtcbmJhY2tncm91bmQtc2l6ZTpjb3Zlcjtcbm9wYWNpdHk6MC43O1xufVxuXG5cbi8qIGVycm9yIHBvcCB1cCAqL1xuXG4jZXJyb3JQb3BVcCwgI2Vycm9yUG9wVXAgaDJ7XG5vcGFjaXR5OjA7XG50cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xuei1pbmRleDoxMDtcbnRvcDo4MCU7XG53aWR0aDo5MCU7XG5jb2xvcjogdmFyKC0tcmVkKTtcbn1cbiNlcnJvclBvcFVwOjpiYWNrZHJvcHtcbmJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCM1QTIzMjFBQSxibGFjaykgO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLGlCQUFpQjtBQUNqQiw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2QsT0FBTztBQUNQLFFBQVE7QUFDUiwrQkFBK0I7QUFDL0IsU0FBUztBQUNULGFBQWE7QUFDYixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixlQUFlOztBQUVmOztBQUVBO0FBQ0EsY0FBYztBQUNkLGtEQUFrRDtBQUNsRCxxQkFBcUI7QUFDckIsV0FBVztBQUNYOzs7QUFHQSxpQkFBaUI7O0FBRWpCO0FBQ0EsU0FBUztBQUNULHNCQUFzQjtBQUN0QixVQUFVO0FBQ1YsT0FBTztBQUNQLFNBQVM7QUFDVCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaWFsb2d7XFxudGV4dC1hbGlnbjpjZW50ZXI7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbnBvc2l0aW9uOmZpeGVkO1xcbnRvcDo1MCU7XFxubGVmdDo1MCU7XFxudHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG56LWluZGV4OjI7XFxucGFkZGluZzoxLjJ2dztcXG5ib3JkZXItcmFkaXVzOjEwcHg7XFxufVxcblxcbmRpYWxvZyA+ICp7XFxuZGlzcGxheTpibG9jaztcXG5tYXJnaW4tbGVmdDphdXRvO1xcbm1hcmdpbi1yaWdodDphdXRvO1xcbm1hcmdpbi10b3A6MTBweDtcXG5cXG59XFxuICBcXG5kaWFsb2c6OmJhY2tkcm9we1xcbnBvc2l0aW9uOmZpeGVkO1xcbmJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCMyMTVBNTlBQSxibGFjaykgO1xcbmJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcXG5vcGFjaXR5OjAuNztcXG59XFxuXFxuXFxuLyogZXJyb3IgcG9wIHVwICovXFxuXFxuI2Vycm9yUG9wVXAsICNlcnJvclBvcFVwIGgye1xcbm9wYWNpdHk6MDtcXG50cmFuc2l0aW9uOiBvcGFjaXR5IDFzO1xcbnotaW5kZXg6MTA7XFxudG9wOjgwJTtcXG53aWR0aDo5MCU7XFxuY29sb3I6IHZhcigtLXJlZCk7XFxufVxcbiNlcnJvclBvcFVwOjpiYWNrZHJvcHtcXG5iYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgjNUEyMzIxQUEsYmxhY2spIDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvb2NlYW5pY2RyaWZ0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udC9DeWJvcmcgUHVuay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBtb2JpbGUgZmlyc3QgMzAweDQ0MCAqL1xuXG5cbkBmb250LWZhY2V7XG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xuc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2V7XG5mb250LWZhbWlseTogJ2J1dHRvbic7XG5zcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuKntcbnBhZGRpbmc6IDA7XG5tYXJnaW46MDtcbmJveC1zaXppbmc6Ym9yZGVyLWJveDtcbn1cblxuOnJvb3R7XG5cbi8qIGNvbG9yIHNlY3Rpb24gKi9cbi0tYmxhY2s6IGJsYWNrO1xuLS13aGl0ZTogd2hpdGU7XG4tLWdyZWVuOiAjMDlGRjk5O1xuLS15ZWxsb3c6ICNGNUJCMDA7XG4tLWxpZ2h0WWVsbG93OiAjRUVFRTlCO1xuLS1yZWQ6I0VENjQ2NDtcbi0tbGlnaHRSZWQ6I2RjMTQzYztcbn1cblxuLyogcmVwZXRpdGlvbiBzZWN0aW9uICovXG5cblxuXG5oZWFkZXIsIGFydGljbGV7XG5kaXNwbGF5OmZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xudGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbm1haW57XG5kaXNwbGF5OmdyaWQ7XG59XG5cbi8qIGluZGl2aWR1YWwgc2VjdGlvbiAqL1xuXG5ib2R5e1xuZm9udC1mYW1pbHk6ICdkZWZhdWx0JztcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOiB2YXIoLS1ibGFjayk7XG50cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3IsIGNvbG9yO1xudHJhbnNpdGlvbi1kdXJhdGlvbjoycztcbn1cblxuaGVhZGVye1xuYm9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYmxhY2spXG59XG5cbmhlYWRlciBoMXtcbmZvbnQtc2l6ZTptYXgoMXJlbSwzLjh2dyk7XG59XG5oZWFkZXIgc3BhbntcbmRpc3BsYXk6YmxvY2s7XG5mb250LXNpemU6bWF4KDAuN3JlbSwyLjh2dyk7XG59XG5cbmhlYWRlciBidXR0b257XG5oZWlnaHQ6ODAlO1xufVxuXG5tYWlue1xuaGVpZ2h0OjE1MHZoO1xuZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAzZnIgMjAwcHggMWZyLyAxZnI7XG4vKiBoZWlnaHQ6IDQ1MHZoOyAqL1xuLyogZ3JpZC10ZW1wbGF0ZTogMTAlIDEwJSAxZnIgMjAwcHggMTAlLyAxZnI7ICovXG5nYXA6MTBweDtcbnBhZGRpbmctdG9wOjVweDtcbnBhZGRpbmctYm90dG9tOjVweDtcbn1cblxuYXJ0aWNsZXtcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XG5hbGlnbi1pdGVtczpjZW50ZXI7XG4vKiBhbGlnbi1zZWxmOmNlbnRlcjsgKi9cbmp1c3RpZnktc2VsZjpjZW50ZXI7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmdhcDogN3B4O1xucGFkZGluZzogNXB4IDBweDtcbndpZHRoOjk4JTtcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cbmFydGljbGUgZm9ybSBkaXZ7XG5kaXNwbGF5OmZsZXg7XG5mbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuYWxpZ24taXRlbXM6Y2VudGVyO1xuZ2FwOiA3cHg7XG5cbn1cblxuYnV0dG9uLGlucHV0W3R5cGU9J2ZpbGUnXTo6ZmlsZS1zZWxlY3Rvci1idXR0b257XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5jb2xvcjp2YXIoLS1ibGFjayk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5wYWRkaW5nOiA4cHg7XG5ib3JkZXItcmFkaXVzOjEycHg7XG50cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciAwLjdzO1xuZm9udC1mYW1pbHk6ICdidXR0b24nO1xuZm9udC1zaXplOiBjbGFtcCgwLjVyZW0gLCAxdncgLCAxcmVtKTtcbn1cblxuLyogZWRpdCBpdGVtIGJ1dHRvbiAqL1xuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcbmJvdHRvbTowO1xucmlnaHQ6IDA7XG5wb3NpdGlvbjphYnNvbHV0ZTtcbnBhZGRpbmc6IDVweDtcbmJvcmRlci1yYWRpdXM6MzBweDtcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0UmVkKTtcbn1cblxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9ue1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbnBhZGRpbmc6IDZweDtcbmJvcmRlci1yYWRpdXM6MTBweDtcbn1cblxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9uOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRZZWxsb3cpO1xuY29sb3I6dmFyKC0tYmxhY2spO1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xufVxuXG5idXR0b246aG92ZXIsIGlucHV0W3R5cGU9J2ZpbGUnXTo6ZmlsZS1zZWxlY3Rvci1idXR0b246aG92ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG5jb2xvcjp2YXIoLS13aGl0ZSk7XG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG5jdXJzb3I6cG9pbnRlcjtcbn1cblxuXG5cbnNlbGVjdHtcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbnBhZGRpbmc6NnB4O1xufVxuXG5pbnB1dFt0eXBlPSd0ZXh0J10saW5wdXRbdHlwZT0nbnVtYmVyJ117XG5wYWRkaW5nOjNweDtcbmJvcmRlci1yYWRpdXM6NHB4O1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS13aGl0ZSk7XG5ib3JkZXI6MnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcbmNvbG9yOnZhcigtLWJsYWNrKTtcbm91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXRbdHlwZT0nbnVtYmVyJ117XG5wYWRkaW5nOiA1cHg7XG5hcHBlYXJhbmNlOnRleHRmaWVsZDtcblxufVxuXG5cbmlucHV0W3R5cGU9J3RleHQnXTppbnZhbGlkOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1yZWQpXG59XG5cbmlucHV0W3R5cGU9J3RleHQnXTp2YWxpZDpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6dmFyKC0tZ3JlZW4pXG59XG5cbi8qIGFydGljbGUgc2VjdGlvbiAqL1xuXG4jbGlzdENvbnRhaW5lcntcbmdyaWQtcm93LXN0YXJ0Oi0zO1xuZ3JpZC1yb3ctZW5kOi0zO1xucG9zaXRpb246IHJlbGF0aXZlXG59XG4jbGlzdENvbnRhaW5lcntcbndpZHRoOjk4JTtcbm1heC1oZWlnaHQ6OTglO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9pbnB1dC9zdHlsaW5nL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx5QkFBeUI7OztBQUd6QjtBQUNBLHNCQUFzQjtBQUN0Qiw0Q0FBbUM7QUFDbkM7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsNENBQW1DO0FBQ25DOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFFBQVE7QUFDUixxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUEsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLGtCQUFrQjtBQUNsQjs7QUFFQSx1QkFBdUI7Ozs7QUFJdkI7QUFDQSxZQUFZO0FBQ1osc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUEsdUJBQXVCOztBQUV2QjtBQUNBLHNCQUFzQjtBQUN0Qiw4QkFBOEI7QUFDOUIsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0EsWUFBWTtBQUNaLHlDQUF5QztBQUN6QyxtQkFBbUI7QUFDbkIsK0NBQStDO0FBQy9DLFFBQVE7QUFDUixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsUUFBUTtBQUNSLGdCQUFnQjtBQUNoQixTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxZQUFZO0FBQ1oscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsUUFBUTs7QUFFUjs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsd0NBQXdDO0FBQ3hDLHFCQUFxQjtBQUNyQixxQ0FBcUM7QUFDckM7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0EsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUixRQUFRO0FBQ1IsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLG9DQUFvQztBQUNwQyxrQkFBa0I7QUFDbEIsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLGtCQUFrQjtBQUNsQiw4QkFBOEI7QUFDOUIsY0FBYztBQUNkOzs7O0FBSUE7QUFDQSw4QkFBOEI7QUFDOUIsa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5QixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLFlBQVk7QUFDWixvQkFBb0I7O0FBRXBCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxjQUFjO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogbW9iaWxlIGZpcnN0IDMwMHg0NDAgKi9cXG5cXG5cXG5AZm9udC1mYWNle1xcbmZvbnQtZmFtaWx5OiAnZGVmYXVsdCc7XFxuc3JjOiB1cmwoJy4vZm9udC9vY2VhbmljZHJpZnQudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2V7XFxuZm9udC1mYW1pbHk6ICdidXR0b24nO1xcbnNyYzogdXJsKCcuL2ZvbnQvQ3lib3JnXFxcXCBQdW5rLnR0ZicpO1xcbn1cXG5cXG4qe1xcbnBhZGRpbmc6IDA7XFxubWFyZ2luOjA7XFxuYm94LXNpemluZzpib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdHtcXG5cXG4vKiBjb2xvciBzZWN0aW9uICovXFxuLS1ibGFjazogYmxhY2s7XFxuLS13aGl0ZTogd2hpdGU7XFxuLS1ncmVlbjogIzA5RkY5OTtcXG4tLXllbGxvdzogI0Y1QkIwMDtcXG4tLWxpZ2h0WWVsbG93OiAjRUVFRTlCO1xcbi0tcmVkOiNFRDY0NjQ7XFxuLS1saWdodFJlZDojZGMxNDNjO1xcbn1cXG5cXG4vKiByZXBldGl0aW9uIHNlY3Rpb24gKi9cXG5cXG5cXG5cXG5oZWFkZXIsIGFydGljbGV7XFxuZGlzcGxheTpmbGV4O1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbnRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG5tYWlue1xcbmRpc3BsYXk6Z3JpZDtcXG59XFxuXFxuLyogaW5kaXZpZHVhbCBzZWN0aW9uICovXFxuXFxuYm9keXtcXG5mb250LWZhbWlseTogJ2RlZmF1bHQnO1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5jb2xvcjogdmFyKC0tYmxhY2spO1xcbnRyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvciwgY29sb3I7XFxudHJhbnNpdGlvbi1kdXJhdGlvbjoycztcXG59XFxuXFxuaGVhZGVye1xcbmJvcmRlci1ib3R0b206MnB4IHNvbGlkIHZhcigtLWJsYWNrKVxcbn1cXG5cXG5oZWFkZXIgaDF7XFxuZm9udC1zaXplOm1heCgxcmVtLDMuOHZ3KTtcXG59XFxuaGVhZGVyIHNwYW57XFxuZGlzcGxheTpibG9jaztcXG5mb250LXNpemU6bWF4KDAuN3JlbSwyLjh2dyk7XFxufVxcblxcbmhlYWRlciBidXR0b257XFxuaGVpZ2h0OjgwJTtcXG59XFxuXFxubWFpbntcXG5oZWlnaHQ6MTUwdmg7XFxuZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAzZnIgMjAwcHggMWZyLyAxZnI7XFxuLyogaGVpZ2h0OiA0NTB2aDsgKi9cXG4vKiBncmlkLXRlbXBsYXRlOiAxMCUgMTAlIDFmciAyMDBweCAxMCUvIDFmcjsgKi9cXG5nYXA6MTBweDtcXG5wYWRkaW5nLXRvcDo1cHg7XFxucGFkZGluZy1ib3R0b206NXB4O1xcbn1cXG5cXG5hcnRpY2xle1xcbmZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG5qdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbmFsaWduLWl0ZW1zOmNlbnRlcjtcXG4vKiBhbGlnbi1zZWxmOmNlbnRlcjsgKi9cXG5qdXN0aWZ5LXNlbGY6Y2VudGVyO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmdhcDogN3B4O1xcbnBhZGRpbmc6IDVweCAwcHg7XFxud2lkdGg6OTglO1xcbmJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuYXJ0aWNsZSBmb3JtIGRpdntcXG5kaXNwbGF5OmZsZXg7XFxuZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuYWxpZ24taXRlbXM6Y2VudGVyO1xcbmdhcDogN3B4O1xcblxcbn1cXG5cXG5idXR0b24saW5wdXRbdHlwZT0nZmlsZSddOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOiA4cHg7XFxuYm9yZGVyLXJhZGl1czoxMnB4O1xcbnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yIDAuN3M7XFxuZm9udC1mYW1pbHk6ICdidXR0b24nO1xcbmZvbnQtc2l6ZTogY2xhbXAoMC41cmVtICwgMXZ3ICwgMXJlbSk7XFxufVxcblxcbi8qIGVkaXQgaXRlbSBidXR0b24gKi9cXG4jbGlzdENvbnRhaW5lciBkaXYgKyBidXR0b257XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG5ib3R0b206MDtcXG5yaWdodDogMDtcXG5wb3NpdGlvbjphYnNvbHV0ZTtcXG5wYWRkaW5nOiA1cHg7XFxuYm9yZGVyLXJhZGl1czozMHB4O1xcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbjpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodFJlZCk7XFxufVxcblxcbiNsaXN0Q29udGFpbmVyIGRpdiArIGJ1dHRvbi5vblNlbGVjdGlvbntcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbmNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuYm9yZGVyOjJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxucGFkZGluZzogNnB4O1xcbmJvcmRlci1yYWRpdXM6MTBweDtcXG59XFxuXFxuI2xpc3RDb250YWluZXIgZGl2ICsgYnV0dG9uLm9uU2VsZWN0aW9uOmhvdmVye1xcbmJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0WWVsbG93KTtcXG5jb2xvcjp2YXIoLS1ibGFjayk7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcbn1cXG5cXG5idXR0b246aG92ZXIsIGlucHV0W3R5cGU9J2ZpbGUnXTo6ZmlsZS1zZWxlY3Rvci1idXR0b246aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcbmNvbG9yOnZhcigtLXdoaXRlKTtcXG5ib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcblxcblxcbnNlbGVjdHtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuY29sb3I6dmFyKC0tYmxhY2spO1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5wYWRkaW5nOjZweDtcXG59XFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddLGlucHV0W3R5cGU9J251bWJlcidde1xcbnBhZGRpbmc6M3B4O1xcbmJvcmRlci1yYWRpdXM6NHB4O1xcbmJhY2tncm91bmQtY29sb3I6dmFyKC0td2hpdGUpO1xcbmJvcmRlcjoycHggc29saWQgdmFyKC0tYmxhY2spO1xcbmNvbG9yOnZhcigtLWJsYWNrKTtcXG5vdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbmlucHV0W3R5cGU9J251bWJlcidde1xcbnBhZGRpbmc6IDVweDtcXG5hcHBlYXJhbmNlOnRleHRmaWVsZDtcXG5cXG59XFxuXFxuXFxuaW5wdXRbdHlwZT0ndGV4dCddOmludmFsaWQ6aG92ZXJ7XFxuYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1yZWQpXFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXTp2YWxpZDpob3ZlcntcXG5iYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWdyZWVuKVxcbn1cXG5cXG4vKiBhcnRpY2xlIHNlY3Rpb24gKi9cXG5cXG4jbGlzdENvbnRhaW5lcntcXG5ncmlkLXJvdy1zdGFydDotMztcXG5ncmlkLXJvdy1lbmQ6LTM7XFxucG9zaXRpb246IHJlbGF0aXZlXFxufVxcbiNsaXN0Q29udGFpbmVye1xcbndpZHRoOjk4JTtcXG5tYXgtaGVpZ2h0Ojk4JTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbGN1bGF0aW9uVHlwZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NhbGN1bGF0aW9uVHlwZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGFya21vZGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kYXJrbW9kZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVza3RvcFN1cHBvcnQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZXNrdG9wU3VwcG9ydC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwZXJjZW50YWdlSW5jcmVhc2VgKS52YWx1ZSA9IDA7XG5cbndpbmRvdy52YWx1ZVRvTXVsdGlwbHkgPSAxO1xuXG5cbi8vIGltcG9ydCBzdHlsZXNcbmltcG9ydCAnLi9zdHlsaW5nL3N0eWxlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2Rhcmttb2RlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2Rhcmttb2RlLmpzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvY2FsY3VsYXRpb25UeXBlLmNzcydcbmltcG9ydCAnLi9zdHlsaW5nL2xpc3QuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvZGVza3RvcFN1cHBvcnQuY3NzJ1xuaW1wb3J0ICcuL3N0eWxpbmcvcG9wdXAuY3NzJ1xuXG5cbi8vIGltcG9ydCBmdW5jdGlvbmFsaXR5XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9saXN0L2xpc3RTdHJ1Y3R1cmUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvbGlzdC9jdXJyZW50TGlzdC5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9saXN0L2FkZEl0ZW1zVG9MaXN0LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuV2luZG93LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9hZGROZXdMaXN0LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L3dpbmRvdy9vcGVuQ2hhbmdlQ29sb3JXaW5kb3cuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvd2luZG93L2N1cnJlbmN5V2luZG93LmpzJztcbmltcG9ydCAnLi9mdW5jdGlvbmFsaXR5L2Rpc3BsYXkvZXhwZW5zZVR5cGUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvdHlwZUNhbGN1bGF0b3IuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvY2FsY3VsYXRlL2NhbGN1bGF0ZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9jYWxjdWxhdGUvcGVyY2VudGFnZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9maWxlL2Rvd25sb2FkRmlsZS5qcyc7XG5pbXBvcnQgJy4vZnVuY3Rpb25hbGl0eS9maWxlL3VwbG9hZEZpbGUuanMnO1xuaW1wb3J0ICcuL2Z1bmN0aW9uYWxpdHkvaW5wdXRDaGVjay5qcyc7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=