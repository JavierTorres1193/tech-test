const {PriceUpdater} = require("./utils/updateFunctions")


class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}




class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
}


const productsAtDayZero = [
  new Product("Medium Coverage", 10, 20),
  new Product("Full Coverage", 2, 0),
  new Product("Low Coverage", 5, 7),
  new Product("Mega Coverage", 0, 80),
  new Product("Mega Coverage", -1, 80),
  new Product("Special Full Coverage", 15, 20),
  new Product("Special Full Coverage", 10, 49),
  new Product("Special Full Coverage", 5, 49),
  new Product("Super Sale", 3, 6),
];



for (let day = 1; day <= 20; day++) {
  console.log(`Day ${day}:`);
  for (const product of productsAtDayZero) {
      PriceUpdater.updatePriceByType(productsAtDayZero);
      console.log(`  Producto ${product.name}: Precio ${product.price}, SellIn ${product.sellIn}`);
  }
}


module.exports = {
  Product
}
