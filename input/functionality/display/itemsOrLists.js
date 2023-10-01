import { selectDiv } from './../editItemOrList/selection.js'

const container = document.getElementById('list');
const select = document.getElementById('itemOrListContainer');
select.addEventListener('change', displayList)


let listSelect = document.querySelector('#selectList')
export function displayList() {
  const itemOrListContainer = document.getElementById('itemOrListContainer')
  container.innerHTML = '';

  if (itemOrListContainer.value == 'item') {
    currentList.array.forEach(appendItems)
  }
  else {
    listSelect = document.querySelector('#selectList');
    listSelect.innerHTML = '';
    list.forEach(appendLists)
  }
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
  let li = document.createElement('li');
  li.addEventListener('click', selectDiv)

  let nameText = document.createElement('p');
  nameText.innerText = list.name;
  nameText.dataset.index = currentListofListsIndex;
  

  let option = document.createElement('option')
  option.innerHTML = `${list.name}`;
  option.value = `${currentListofListsIndex}`;
  
  listSelect.append(option);
  container.append(li);
  li.append(nameText);
}
