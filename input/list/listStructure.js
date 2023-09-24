class Item {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

export class Money extends Item {
  constructor(price, type) {
    super(type = 'money', price)
  }
}


export class Product extends Item {
  constructor(name, price, type) {
    super(type = 'product', price)
    this.name = name;
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
}



window.currentList = [];
window.list = [currentList];
