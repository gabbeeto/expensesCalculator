import { updateLocalStorage } from '../list/listStructure.js';
import { selectDiv } from './../editItemOrList/selection.js';

let container = document.getElementById('list');

let listSelect = document.querySelector('#selectList')

export function displayList() {
  restartEverything();
  currentList.array.forEach(appendItems)
  list.forEach(appendLists)
  updateLocalStorage()
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
  li.addEventListener('click', selectDiv)
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


