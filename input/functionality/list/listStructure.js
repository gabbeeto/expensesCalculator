import { displayContentForType } from './../display/expenseType.js'
import { displayList } from './../display/itemsOrLists.js'



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
export function Money(price, name = price, type = 'money') {
    return { price, name, type }
  }



  export function Product(name, price, type = 'product') {
    return { name, price, type }
  }

  export function RegProduct(name, price, amountPerYear, amountOfRegProducts, type = 'regProduct') {
    return { name, price, amountPerYear, amountOfRegProducts, type }
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
    console.log(el)
    currentList.array.push(el);
    displayList()
    displayContentForType()
  }





