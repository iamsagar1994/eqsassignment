
const productCheckout_productPriceList = 'td[data-title="Total"] span';
const productSelectionPage_checkoutbutton = 'a[title="Proceed to checkout"]'
const productCheckout_continueShopping = 'span[title="Continue shopping"]'
const pageCheckOut_totalproductprice = 'td[id="total_product"]'

class pageCheckOut {

    confirmProductandContinueShopping() {
        cy.waitUntilElementVisible(productCheckout_continueShopping)
        cy.get(productCheckout_continueShopping).click()
    }
    getSumOfAllProductProducts() {
        var a = 0;
        cy.waitUntilElementVisible(productCheckout_productPriceList)
       return cy.get(productCheckout_productPriceList).each(($el, index, $list) => {
            var b = ($el.text()).trim()
            // cy.log((b.trim()).substring(3,(b.trim()).length))
            var c = b.substring(1, (b.length))
            a = a + (Number(c))
        }).then(()=>{return a})
        
    }
    gettotalPrice() {
        var a;
        cy.waitUntilElementVisible(pageCheckOut_totalproductprice)
        return cy.get(pageCheckOut_totalproductprice).then((a)=>{
            a = ((a.text()).trim()).substring(1, (((a.text()).trim()).length))
            return Number(a)
        })

    }
    proceedToCheckout() {
        cy.waitUntilElementVisible(productSelectionPage_checkoutbutton)

        cy.get(productSelectionPage_checkoutbutton).click()
    }


}

export default pageCheckOut