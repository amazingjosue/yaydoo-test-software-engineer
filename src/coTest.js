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
    this.helpers = new Helpers();
  }

  updatePrice() {
    try {
      this.products.map(product => {

        switch (product.name) {
          case 'Medium Coverage':
            product = this.helpers.defaultUpdate(product)

            break;
          case 'Full Coverage':
            product = this.helpers.fullCoverage(product)

            break;
          case 'Low Coverage':
            product = this.helpers.defaultUpdate(product)

            break;
          case 'Mega Coverage':
            //Don't change anything

            break;
          case 'Special Full Coverage':
            product = this.helpers.specialFullCoverage(product)

            break;
          case 'Super Sale':
            product = this.helpers.superSale(product)

            break;
          default:
            product = this.helpers.defaultUpdate(product)

            break;
        }

        return product

      });
      return this.products;

    } catch (error) {
      console.error(error)
    }
  }
}

class Helpers {
  constructor(product) {
    this.product = product
  }

  /**
   * @name
   * @description
   * @
   * @param {Object} product 
   * @returns {Object} 
   */
  defaultUpdate(product) {

    let multiply = 1

    if (product.sellIn <= 0)
      multiply = 2

    if (product.price > 50)
      product.price = 50

    if (product.price != 0)
      product.price = product.price - 1 * multiply

    product.sellIn = product.sellIn - 1

    return product
  }

  fullCoverage(product) {

    let multiply = 1

    if (product.sellIn <= 0)
      multiply = 2

    if (product.price < 50)
      product.price = product.price + (1 * multiply)

    product.sellIn = product.sellIn - 1

    if (product.price > 50)
      product.price = 50

    return product
  }

  specialFullCoverage(product) {

    let multiply = 1;
    let sum = 1;

    if (product.sellIn <= 0) {
      multiply = 2
      product.price = product.price = 0
    }

    if (product.price != 0 && product.price < 50) {
      if (product.sellIn < 11) {
        sum = 2
        if (product.sellIn < 6) {
          sum = 3
        }
      }
      product.price = product.price + sum * multiply;
    }

    product.sellIn = product.sellIn - 1

    if (product.price > 50)
      product.price = 50

    return product
  }

  superSale(product) {

    let multiply = 1

    if (product.sellIn <= 0)
      multiply = 2

    if (product.price > 50)
      product.price = 50

    if (product.price != 0)
      product.price = product.price - 2 * multiply

    product.sellIn = product.sellIn - 1

    return product
  }


}

module.exports = {
  Product,
  CarInsurance
}
