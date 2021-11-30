const homePage_productsnameSection = '#homefeatured h5[itemprop="name"]';
const homePage_yourLogo = 'a[title="My Store"]'
const homePage_contentPrice = '#homefeatured .right-block .content_price'
const homePage_addToCartList = '#homefeatured .button-container a[title="Add to cart"]'
const homePage_windowPopProductSummary = 'span[title="Close window"]'


export var homePage = {

    verifyProductDetailsinHomePage() {
        cy.verifylistelementsvisibility(homePage_productsnameSection)
    },
    displayProductDetailsinHomePage() {
        cy.displayListElementsText(homePage_productsnameSection)
    },
    VerifyPageTitle(pageTitle) {

        cy.VerifyPageTitle(pageTitle)
    },
    yourLogoClick() {
        cy.get(homePage_yourLogo).click();
    },
    selectProductbydiscount(a) {
        this.a = a
        cy.get(homePage_contentPrice).each(($ml, index, $list) => {
            var discountprice = $ml.text()
            var priority = index
            cy.log(discountprice).then(() => {
                if (discountprice.includes(a)) {
                    cy.get(homePage_addToCartList).eq(priority).click()
                    cy.waitUntilElementVisible(homePage_windowPopProductSummary)
                    cy.get(homePage_windowPopProductSummary).siblings('h2').then(($wl) => {
                        var successmsg = $wl.text()
                        expect(successmsg).includes('\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t')
                    })
                }
            })
        })
    },

    addProductByIndex(index){
        cy.waitUntilElementVisible(homePage_addToCartList)
        cy.get(homePage_addToCartList).eq(index).click({force:true})
    },

}