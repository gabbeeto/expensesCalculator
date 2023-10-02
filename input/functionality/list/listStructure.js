import { displayContentForType } from './../display/expenseType.js'
import { displayList } from './../display/itemsOrLists.js'

// class section
class Item {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }

  color(color = 'black') {
    return color
  }

  changeColor(selectedColor) {
    console.log(this)
    this.color = (color = selectedColor) => { return selectedColor };
  }
}

export class Money extends Item {
  constructor(price, name = price, type) {
    super(type = 'money', price)
    this.name = name;
  }

  color(color = 'green') {
    return color;
  }
}


export class Product extends Item {
  constructor(name, price, type) {
    super(type = 'product', price)
    this.name = name;
  }

  color(color = 'blue') {
    return color
  }

}


export class Food extends Item {
  constructor(name, price, amountPerPrice, amountPerDay, weekAmount, monthAmount, type) {
    super(type = 'food', price)
    this.name = name;
    this.amountPerPrice = amountPerPrice;
    this.amountPerDay = amountPerDay;
    if (weekAmount) {
      this.weekAmount = weekAmount;
    }
    else {
      this.weekAmount = parseInt(monthAmount / 4);
    }

    if (monthAmount) {
      this.monthAmount = monthAmount;
    }
    else {
      this.monthAmount = parseInt(weekAmount * 4);
    }
  }


  color(color = 'yellow') {
    return color
  }
}

export function List(name, array = []) {
  return { array, name }
}


// list section

if (localStorage.list) {
  window.list = JSON.parse(localStorage.list)
  window.currentList = window.list[0];
  giveItemsTheirPrototype()
  displayList()
}
else {
  window.currentList = new List('default');
  window.list = [currentList];
}

function giveItemsTheirPrototype() {
  for (let currentList of list) {
    currentList.array.map(item => {
      switch (item.type) {
        case 'food':
          return turnIntoItemIntoClass(item, Food)
        case 'product':
          return turnIntoItemIntoClass(item, Product)
        case 'money':
          return turnIntoItemIntoClass(item, Money)
      }
    })
  }
}


function turnIntoItemIntoClass(item, theClass){
item.__proto__ = theClass.prototype;
return item;
}


export function updateLocalStorage() {
  localStorage.setItem('list', JSON.stringify(window.list))
}


// function to push to array section

export function pushToArrayAndDisplayList(el) {
  currentList.array.push(el);
  displayList()
  displayContentForType()
}



// color section

const colorInput = document.querySelector(`input[type='color']`)
colorInput.addEventListener('change', updateColor)
function updateColor(event) {
  let select = document.querySelector('article:first-of-type select').value
  switch (select) {
    case 'food':
      Food.prototype.changeColor(event.target.value);
      break;
    case 'product':
      Product.prototype.changeColor(event.target.value);
      break;
    case 'money':
      Money.prototype.changeColor(event.target.value);
      break;
  }
  displayList()
}
