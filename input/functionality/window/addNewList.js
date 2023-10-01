import {List} from './../list/listStructure.js';
import {closePopUp} from './openWindow.js';
import {displayList} from './../display//itemsOrLists.js'

const addNewListDialog = document.querySelector('#addNewListPopUp')

const addNewListButton = addNewListDialog.querySelector('button:last-of-type')

addNewListButton.addEventListener('click', addNewList )
function addNewList(){
let nameForNewInput = addNewListDialog.querySelector('input').value;
list.push(List(nameForNewInput))
displayList()
closePopUp()
}
