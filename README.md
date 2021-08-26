# Test Software Engineer

## Installation

```
npm install
```

To use this Script you should use Node 12+, all the packages are in the web, there is no need to use another NPM provider.
To run the script the comand is:
- `npm run after-30-days`

To use as developer:
- `npm run dev`

To run the test:
- `npm run test`

## Documentation

This Repository was created to accomplish the next instructions

## Instructions

Refactor a legacy code into a testeable, object oriented solution.
### Evaluation rules
- Design an Object Oriented solution
- The solution must be scalable, we expect to be able to add new products on the future
- Meaningful git commits, we expect to see your solution approach as commit messages
- We expect a Node.js (>6) codebase, otherwise you should provide a `Dockerfile` with all the required dependencies to run the required commands.
- 100% code coverage, you should provide the report and the command to run the tests and get the coverage report.

#### Test instructions

The code updates the price of products of our business unit, Car Insurance, based on rules explained bellow.

Here you have a description of the products.

- All Products have a `sellIn` value which denotes the number of days we have to sell the product.
- All Products have a `price` value which denotes how much the product cost.
- At the end of each day our system lowers both values for every product.
- Once the sell by date has passed, `price` degrades twice as fast.
- The `price` of a product is never negative.
- **"Full Coverage"** actually increases in `price` the older it gets.
- The `price` of a product is never more than 50.
- **"Mega Coverage"**, being a legendary product, never has to be sold or decreases in `price`.
- **"Special Full Coverage"**, like full coverage, increases in `price` as its `sellIn` value approaches:
	- `price` increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but.
	- `price` drops to 0 when no more days left (and the product is not valid anymore).

They have recently released a new kind of product *Super Sale product*. This requires an update to the system:

- **"Super Sale"** Products degrade in `price` twice as fast as normal Products.

### Description

The refactor consist  in separate the core into many functions, this will provide a better scalable code, instead of adding logic to the main function you add a new function with the specific instructions for each product.

Something like this:

```js
const updatePrice function(product) {
    if(product.name == "Full coverage" && product.name != "Low coverage")
        product.sellIn = product.sellIn--
        if(product.sellIn == 0)
            product.price = 0

    if(product.name != "Full coverage" && product.name != "Low coverage"){
        product.sellIn = product.sellIn++
        product.price = product.price++
    }
    .
    .
    .
    return product
}   
```

Convert that into this:

```js
const updatePrice function(product) {

    if(product.name == "Full coverage")
        product = updateFullCoverage(product)

    if(product.name == "Low coverage"){
         product = updateLowCoverage(product)
    }
    .
    .
    .
    return product
}   
```


