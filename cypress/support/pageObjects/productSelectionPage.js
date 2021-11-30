
const productSelectionPage_selectProductDropdown = '#selectProductSort'
const productSelectionPage_sortByPriceAscending = 'price:asc'
const productSelectionPage_sortByPriceDescending = 'price:desc'
const productSelectionPage_sortByNameAscending = 'name:asc'
const productSelectionPage_sortByNameDescending = 'name:desc'
const productSelectionPage_sortByQuantityDescending = 'quantity:desc'
const productSelectionPage_sortByReferenceAscending = 'reference:asc'
const productSelectionPage_sortByReferenceDescending = 'reference:desc'
const productSelectionPage_productPrices = 'div[class*="right"] span[itemprop="price"]'

export var productSelectionPage = {
    verifySortedProductsByPriceASC() {
        cy.VerifyProductsSort(productSelectionPage_selectProductDropdown,productSelectionPage_sortByPriceAscending,productSelectionPage_productPrices)
    },
    verifySortedProductsByPriceDSC() {
        cy.VerifyProductsSort(productSelectionPage_selectProductDropdown,productSelectionPage_sortByPriceDescending,productSelectionPage_productPrices)
    },
    verifySortedProductsByNameASC() {
        cy.VerifyProductsSort(productSelectionPage_selectProductDropdown,productSelectionPage_sortByNameAscending,productSelectionPage_productPrices)
    },
    verifySortedProductsByNameDSC() {
        cy.VerifyProductsSort(productSelectionPage_selectProductDropdown,productSelectionPage_sortByNameDescending,productSelectionPage_productPrices)
    },
    verifySortedProductsByQuantiryDSC() {
        cy.VerifyProductsSort(productSelectionPage_selectProductDropdown,productSelectionPage_sortByQuantityDescending,productSelectionPage_productPrices)
    },
    verifySortedProductsByReferenceASC() {
        cy.VerifyProductsSort(productSelectionPage_selectProductDropdown,productSelectionPage_sortByReferenceDescending,productSelectionPage_productPrices)
    },
    verifySortedProductsByReferenceDSC() {
        cy.VerifyProductsSort(productSelectionPage_selectProductDropdown,productSelectionPage_sortByReferenceAscending,productSelectionPage_productPrices)
    }


}