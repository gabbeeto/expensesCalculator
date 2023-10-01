import { selectDiv } from './../editItemOrList/selection.js'

const container = document.getElementById('list');

let listSelect = document.querySelector('#selectList')

export function displayList() {
  container.innerHTML = '';
  currentList.array.forEach(appendItems)
  listSelect = document.querySelector('#selectList');
  listSelect.innerHTML = '';
  list.forEach(appendLists)
}

function appendItems(item, currentListOfItemsIndex) {
  let li = document.createElement('li');
  li.addEventListener('click', selectDiv)
  let nameText = document.createElement('p');
  nameText.innerText = item.name;
  nameText.style.color = item.color();
  nameText.dataset.index = currentListOfItemsIndex;
  container.append(li);
  li.append(nameText);
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
