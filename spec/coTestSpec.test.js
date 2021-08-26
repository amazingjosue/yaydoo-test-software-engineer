'use strict';

const chai = require('chai'),
	expect = chai.expect,

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;


describe("Car insurance test", function () {

	it("It should have the error as undefined", function () {
		let response;
		let dayFive = []
		let dayTen = []
		let dayTwenty = []
		try {

			const testToFirst = new CarInsurance([new Product("Test", 0, 0)]);
			response = testToFirst.updatePrice();

			const productsAtDayZero = [
				new Product('Medium Coverage', 10, 20),
				new Product('Full Coverage', 2, 0),
				new Product('Low Coverage', 5, 7),
				new Product('Mega Coverage', 0, 80),
				new Product('Special Full Coverage', 15, 20),
				new Product('Super Sale', 3, 6),
			];

			const testToFive = new CarInsurance(productsAtDayZero);
			for (let i = 1; i <= 5; i += 1) {
				const product = testToFive.updatePrice().products
				dayFive.push({
					products: product
				})
			}

			const productsAtDayZeroTwo = [
				new Product('Medium Coverage', 10, 20),
				new Product('Full Coverage', 2, 0),
				new Product('Low Coverage', 5, 7),
				new Product('Mega Coverage', 0, 80),
				new Product('Special Full Coverage', 15, 20),
				new Product('Super Sale', 3, 6),
			];

			const testToTen = new CarInsurance(productsAtDayZeroTwo);
			for (let i = 1; i <= 10; i += 1) {
				const product = testToTen.updatePrice().products
				dayTen.push({
					products: product
				})
			}

			const productsAtDayZeroThree = [
				new Product('Medium Coverage', 10, 20),
				new Product('Full Coverage', 2, 0),
				new Product('Low Coverage', 5, 7),
				new Product('Mega Coverage', 0, 80),
				new Product('Special Full Coverage', 15, 20),
				new Product('Super Sale', 3, 6),
			];

			const testToTwenty = new CarInsurance(productsAtDayZeroThree);
			for (let i = 1; i <= 20; i += 1) {
				const product = testToTwenty.updatePrice().products
				dayTwenty.push({
					products: product
				})
			}


		} catch (err) {
			console.error(err)
			expect(err).to.be.undefined;
		}

		describe('New product Type of the resp with 1 day', function () {
			it("response should be an Object without error property", function () {
				expect(response).to.be.an("Object");
				expect(response, `This might no return error: ${response.error}`).not.to.have.property("error");
			});

			it("response Should contain the property success and products with the values true and 30", function () {
				expect(response).to.have.property("success");
				expect(response.success).to.be.equal(true);

				expect(response).to.have.property("products");
				expect(response.products).to.be.an("Array");
				expect(response.products.length).to.be.equal(1)
			});

			describe('Product Should contains values -1 and 0 at day 1', function () {
				it('Should contain -1 in sellIn', function () {
					expect(response.products[0].sellIn).to.be.equal(-1);
				});
				it('Should contain 0 in price', function () {
					expect(response.products[0].price).to.be.equal(0);
				});
			});


		});


		describe('Current products Type of the resp at day 5', function () {
			it("response should be an array without error property", function () {
				expect(dayFive).to.be.an("Array");
				expect(dayFive, `This might no return error: ${dayFive.error}`).not.to.have.property("error");
			});


			describe('Current Products response values at day 5', function () {
				dayFive[2].products.forEach(product => {
					switch (product.name) {
						case 'Medium Coverage':
							it('Medium Coverage Should contain 5 in price and 15 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(5);
								expect(product.price).to.be.equal(15);
							});
							break;
						case 'Full Coverage':
							it('Full Coverage Should contain -3 in price and 8 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(-3);
								expect(product.price).to.be.equal(8);
							});
							break;
						case 'Low Coverage':
							it('Low Coverage Should contain 0 in price and 2 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(0);
								expect(product.price).to.be.equal(2);
							});
							break;
						case 'Mega Coverage':
							it('Mega Coverage Should contain 0 in price and 80 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(0);
								expect(product.price).to.be.equal(80);
							});
							break;
						case 'Special Full Coverage':
							it('Special Full Coverage Should contain 10 in price and 25 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(10);
								expect(product.price).to.be.equal(25);
							});
							break;
						case 'Super Sale':
							it('Super Sale Should contain 5 in price and 15 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(-2);
								expect(product.price).to.be.equal(0);
							});
							break;

						default:
							break;
					}

				});
			});
		});

		describe('Current products Type of the resp at day 10', function () {
			it("response should be an array without error property", function () {
				expect(dayTen).to.be.an("Array");
				expect(dayTen, `This might no return error: ${dayTen.error}`).not.to.have.property("error");
			});


			describe('Current Products response values at day 10', function () {
				dayTen[2].products.forEach(product => {
					switch (product.name) {
						case 'Medium Coverage':
							it('Medium Coverage Should contain 0 in price and 10 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(0);
								expect(product.price).to.be.equal(10);
							});
							break;
						case 'Full Coverage':
							it('Full Coverage Should contain -8 in price and 18 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(-8);
								expect(product.price).to.be.equal(18);
							});
							break;
						case 'Low Coverage':
							it('Low Coverage Should contain -5 in price and 0 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(-5);
								expect(product.price).to.be.equal(0);
							});
							break;
						case 'Mega Coverage':
							it('Mega Coverage Should contain 0 in price and 80 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(0);
								expect(product.price).to.be.equal(80);
							});
							break;
						case 'Special Full Coverage':
							it('Special Full Coverage Should contain 5 in price and 35 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(5);
								expect(product.price).to.be.equal(35);
							});
							break;
						case 'Super Sale':
							it('Super Sale Should contain -7 in price and 0 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(-7);
								expect(product.price).to.be.equal(0);
							});
							break;

						default:
							break;
					}

				});
			});
		});

		describe('Current products Type of the resp at day 20', function () {
			it("response should be an array without error property", function () {
				expect(dayTwenty).to.be.an("Array");
				expect(dayTwenty, `This might no return error: ${dayTwenty.error}`).not.to.have.property("error");
			});


			describe('Current Products response values at day 20', function () {
				dayTwenty[2].products.forEach(product => {
					switch (product.name) {
						case 'Medium Coverage':
							it('Medium Coverage Should contain -10 in price and 0 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(-10);
								expect(product.price).to.be.equal(0);
							});
							break;
						case 'Full Coverage':
							it('Full Coverage Should contain -18 in price and 38 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(-18);
								expect(product.price).to.be.equal(38);
							});
							break;
						case 'Low Coverage':
							it('Low Coverage Should contain -15 in price and 0 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(-15);
								expect(product.price).to.be.equal(0);
							});
							break;
						case 'Mega Coverage':
							it('Mega Coverage Should contain 0 in price and 80 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(0);
								expect(product.price).to.be.equal(80);
							});
							break;
						case 'Special Full Coverage':
							it('Special Full Coverage Should contain 5 in price and 0 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(-5);
								expect(product.price).to.be.equal(0);
							});
							break;
						case 'Super Sale':
							it('Super Sale Should contain -17 in price and 0 in the SellIn', function () {
								expect(product.sellIn).to.be.equal(-17);
								expect(product.price).to.be.equal(0);
							});
							break;

						default:
							break;
					}

				});
			});
		});

	});
});
