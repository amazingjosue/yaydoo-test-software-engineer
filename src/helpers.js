/**
 * @name Helpers
 * @constructor 
 */
class Helpers {
    constructor(product) {
        this.product = product
    }

    /**
     * @name defaultUpdate Update product with the default conditions
     * @description
     * @memberof Helpers
     * @param {Object} product The product to update
     * @param {Number} product.sellIn The days remaining to sell the product
     * @param {Number} product.price The price of the product
     * @returns {Object} The updated product
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


    /**
     * @name fullCoverage Update product with the full coverage conditions
     * @description
     * @memberof Helpers
     * @param {Object} product The product to update
     * @param {Number} product.sellIn The days remaining to sell the product
     * @param {Number} product.price The price of the product
     * @returns {Object} The updated product
     */
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

    /**
     * @name specialFullCoverage Update product with the special full coverage conditions
     * @description
     * @memberof Helpers
     * @param {Object} product The product to update
     * @param {Number} product.sellIn The days remaining to sell the product
     * @param {Number} product.price The price of the product
     * @returns {Object} The updated product
     */
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

    /**
     * @name superSale Update product with the super sale conditions
     * @description
     * @memberof Helpers
     * @param {Object} product The product to update
     * @param {Number} product.sellIn The days remaining to sell the product
     * @param {Number} product.price The price of the product
     * @returns {Object} The updated product
     */
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
    Helpers
  }