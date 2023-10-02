import { displayContentForType } from './../display/expenseType.js'
import { displayList } from './../display/itemsOrLists.js'



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

export function Money(price, name = price, type = 'money') {
  return { price, name, type }
}



export function Product(name, price, type = 'product') {
  return { name, price, type }
}



export function Food(name, price, amountPerPrice, amountPerDay, weekAmount, monthAmount, type = 'food') {
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


export function List(name, array = []) {
  return { array, name }
}


// list section

if (localStorage.list) {
  window.list = JSON.parse(localStorage.list)
  window.currentList = window.list[0];
  displayList()
}
else {
  window.currentList = new List('default');
  window.list = [currentList];
}



export function updateLocalStorage() {
  localStorage.setItem('list', JSON.stringify(window.list))
  localStorage.setItem('color', JSON.stringify(window.color))
}


// function to push to array section

export function pushToArrayAndDisplayList(el) {
  currentList.array.push(el);
  displayList()
  displayContentForType()
}





