import { homePage } from "../../support/pageObjects/homePage";
import { productCheckout } from "../../support/pageObjects/productCheckout";
import { productSelectionPage } from "../../support/pageObjects/productSelectionPage";
import { ProductType } from "../../support/pageObjects/ProductType";
import pageCheckOut from "../../support/pageObjects/pageCheckOut";

describe('test one', () => {
    it('test five', () => {
        var totalsumamount
        var actualtotalamountdisplayed
        const ps = new pageCheckOut()

         cy.visit('http://automationpractice.com/index.php')
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
        productCheckout.proceedToCheckout()
        ps.getSumOfAllProductProducts().
        then((c) => { totalsumamount = c; cy.log("totalsum"+totalsumamount);ps.gettotalPrice().
            then((d)=>{actualtotalamountdisplayed = d ;cy.log("totalsum"+d)
        expect(totalsumamount).equal(actualtotalamountdisplayed)
        }) 
        })
         



    });
    it('test six', () => {
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')
        homePage.yourLogoClick();
        homePage.VerifyPageTitle('My Store');
    });
    it('test one', () => {
        cy.visit('http://automationpractice.com/index.php')
        homePage.verifyProductDetailsinHomePage();
        homePage.displayProductDetailsinHomePage();
    });
    it('test two', () => {
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category')
        productSelectionPage.verifySortedProductsByNameASC();
    })
    it('test three', () => {
        cy.visit('http://automationpractice.com/index.php')
        homePage.selectProductbydiscount("20%");
    })
    it('test four', () => {
        cy.visit('http://automationpractice.com/index.php?id_product=5&controller=product')
        ProductType.chooseProductColour("black");
        ProductType.verifyProductColourIs("black")
    });
});