import { displayContentForType} from './../display/expenseType.js'
import { displayList} from './../display/itemsOrLists.js'


class Item {
  constructor(type, price,color) {
    this.type = type;
    this.price = price;
  }

  color(color = 'black'){
    return color
  }

  changeColor(selectedColor){
    Object.getPrototypeOf(this).color = (color = selectedColor) => {return selectedColor};
  }
}

export class Money extends Item {
  constructor(price, type) {
    super(type = 'money', price )
  }

  color(color = 'green'){
    return color;
  }
}


export class Product extends Item {
  constructor(name, price, type) {
    super(type = 'product', price)
    this.name = name;
  }

  color(color = 'blue'){
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
      this.weekAmount = monthAmount / 4;
    }

    if (monthAmount) {
      this.monthAmount = monthAmount;
    }
    else {
      this.monthAmount = weekAmount * 4;
    }
  }


  color(color = 'yellow'){
    return color
  }
}



window.currentList = [];
window.list = [currentList];

export function pushToArrayAndDisplayList(el){
currentList.push(el);
displayList()
displayContentForType()
}
