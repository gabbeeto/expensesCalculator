import {displayList} from './../display/itemsOrLists.js'


let selectForCurrentListButton = document.getElementById('selectList');
selectForCurrentListButton.addEventListener('change', changeCurrentList);

function changeCurrentList(event){
window.valueOfSelect = Number(event.target.value);
window.currentList = list[valueOfSelect];
displayList()
}

