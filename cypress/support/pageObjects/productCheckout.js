const productCheckout_productPriceList = 'td[data-title="Total"] span'
const productSelectionPage_checkoutbutton = 'a[title="Proceed to checkout"]'
const productCheckout_continueShopping = 'span[title="Continue shopping"]'

export var productCheckout = {


    confirmProductandContinueShopping() {
        cy.waitUntilElementVisible(productCheckout_continueShopping)
        cy.get(productCheckout_continueShopping).click()
    },
    proceedToCheckout() {
        cy.waitUntilElementVisible(productCheckout_continueShopping)
        cy.get(productSelectionPage_checkoutbutton).click()
    }
}

