const {Product} = require("../coTest")



class PriceUpdater {
    static decreasePrice(product, amount) {
        if (product.price > 0) {
            product.price -= amount;
        }
    };

    static Normal(product) {
        this.decreasePrice(product, 1);
        if (product.sellIn <= 0) {
            this.decreasePrice(product, 2);
        }
        product.sellIn -= 1;
        return product;
    };

    static FullCoverage(product) {
        if (product.price < 50) {
            product.price += 1;
        }
        product.sellIn -= 1;
        return product;
    };

    static MegaCoverage(product) {
        product.price = 80;
        product.sellIn = product.sellIn;
        return product;
    };

    static SpecialFullCoverage(product) {
        product.price += 1;
        if (product.sellIn <= 0) {
            product.price = 0;
        } else if (product.sellIn <= 10 && product.price < 50) {
            product.price += 2;
        } else if (product.sellIn <= 5 && product.price < 50) {
            product.price += 3;
        }
        product.sellIn -= 1;
        return product;
    };

    static SuperSaleProduct(product)  {
        product.price -= 2;
        product.sellIn -= 1;
        if (product.price <= 0) {
            product.price = 0;
        }
        return product
    ;}


    static updatePriceByType(product) {
        let type = this.formatProductName(product.name);
        if (typeof this[type] === 'function') {
            return this[type](product);

        } else {
            throw new Error(`No existe un método para el tipo de producto: ${type}`)
        }
    }

    static formatProductName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

}



module.exports = {PriceUpdater };




