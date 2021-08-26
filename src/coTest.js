const {Helpers}= require('./helpers')

/**
 * @name Product
 * @constructor 
 */
class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

/**
 * @name CarInsurance
 * @constructor 
 */
class CarInsurance {
  constructor(products = []) {
    this.products = products;
    this.helpers = new Helpers();
  }

  
  /**
   * @name updatePrice Update product with his own specific conditions according with the name
   * @description
   * @memberof CarInsurance
   * @param {Object} product The product to update
   * @param {Number} product.sellIn The days remaining to sell the product
   * @param {Number} product.price The price of the product
   * @param {Number} product.name The name of the product
   * @returns {Object} The updated products
   */
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
      return {
        products: this.products,
        success: true
      };

    } catch (error) {
      console.error(error)
      return {
        success: false,
        products: [],
        error: error.message || error
      };
    }
  }
}

module.exports = {
  Product,
  CarInsurance
}
