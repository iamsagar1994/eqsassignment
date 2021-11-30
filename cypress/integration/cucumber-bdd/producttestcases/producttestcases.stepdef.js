

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { homePage } from "../../../support/pageObjects/homePage";
import { productCheckout } from "../../../support/pageObjects/productCheckout";
import { productSelectionPage } from "../../../support/pageObjects/productSelectionPage";
import { ProductType } from "../../../support/pageObjects/ProductType";
import pageCheckOut from "../../../support/pageObjects/pageCheckOut";

beforeEach(() => {

    cy.fixture('productdata').then(function (data) {
        this.data = data;
    })
})

Given('user visited the webpage', () => {
    cy.visit('http://automationpractice.com/index.php')
})
Given('user visited the porduct select webpage', () => {
    cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')
})
Given('user visited the product type selection webpage', () => {
    cy.visit('http://automationpractice.com/index.php?id_product=5&controller=product')
})
When('user landed on the homepage', function () {
    homePage.VerifyPageTitle('My Store');
})


When('user landed on the Printed Summer Dress', function () {
    homePage.VerifyPageTitle('Printed Summer Dress - My Store');
})
When('user landed on the Women - My Store page', function () {
    homePage.VerifyPageTitle('Women - My Store');
})

Then('verify product names are visible', function () {
    homePage.verifyProductDetailsinHomePage();
})
And('log product names', function () {
    homePage.displayProductDetailsinHomePage();
})
And('select products by discount', function () {
    homePage.displayProductDetailsinHomePage();
    homePage.selectProductbydiscount(this.data.discount);
})
Then('select products by price and verify sort order', function () {
    productSelectionPage.verifySortedProductsByNameASC();
})

And('toggle between colours', function () {
    ProductType.chooseProductColour(this.data.colour);
})

Then('verify colours are updated', function () {
    ProductType.verifyProductColourIs(this.data.colour)
})

And('user selects logo', function () {
    homePage.yourLogoClick();
})

Then('verify user landed on homepage', function () {
    homePage.VerifyPageTitle('My Store');
})

And('user selects any 5 products', function () {
    homePage.addProductByIndex(0)
    productCheckout.confirmProductandContinueShopping()
    homePage.addProductByIndex(1)
    productCheckout.confirmProductandContinueShopping()
    homePage.addProductByIndex(2)
    productCheckout.confirmProductandContinueShopping()
    homePage.addProductByIndex(3)
    productCheckout.confirmProductandContinueShopping()
    homePage.addProductByIndex(4)
    productCheckout.confirmProductandContinueShopping()
})
And('proceed to check out', function () {
    productCheckout.proceedToCheckout()
})
Then('total products prices matches with the total bill calculated', function () {
    var totalsumamount
    var actualtotalamountdisplayed
    const ps = new pageCheckOut()

    ps.getSumOfAllProductProducts().
    then((c) => { totalsumamount = c; cy.log("totalsum"+totalsumamount);ps.gettotalPrice().
        then((d)=>{actualtotalamountdisplayed = d ;cy.log("totalsum"+d)
    expect(totalsumamount).equal(actualtotalamountdisplayed)
    }) 
    })
})