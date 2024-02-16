const { PriceUpdater } = require("./utils/updateFunctions");

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

  updatePriceForDays(days = 30) {
    const productsAtDayZero = [...this.products];
    for (let day = 1; day <= days; day++) {
      console.log(`Day ${day}:`);
      for (const product of productsAtDayZero) {
        PriceUpdater.updatePriceByType(product);
        console.log(`  Producto ${product.name}: Precio ${product.price}, SellIn ${product.sellIn}`);
      }
    }
  }
}

const productsAtDayZero = [
  new Product("Normal", 10, 20),
  new Product("FullCoverage", 2, 0),
  new Product("MegaCoverage", 0, 80),
  new Product("MegaCoverage", -1, 80),
  new Product("SpecialFullCoverage", 15, 20),
  new Product("SpecialFullCoverage", 10, 49),
  new Product("SpecialFullCoverage", 5, 49),
  new Product("SuperSale", 3, 6),
];


const carInsurance = new CarInsurance(productsAtDayZero);
carInsurance.updatePriceForDays(); 


module.exports = {
  Product,
  CarInsurance
};
