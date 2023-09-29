import {selectDiv} from './../editItemOrList/selection.js'

const container = document.getElementById('list');

export function displayList() {
  container.innerHTML = '';
  currentList.forEach(appendItems)
}

function appendItems(item, currentListIndex) {
  let li = document.createElement('li');
  li.addEventListener('click', selectDiv )
  let nameText = document.createElement('p');
  nameText.innerText = item.name;
  nameText.style.color = item.color()
  nameText.dataset.index = currentListIndex;
  container.append(li);
  li.append(nameText);
}
