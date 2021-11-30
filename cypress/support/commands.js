// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('verifylistelementsvisibility', (locator) => { 
 cy.get(locator).each(($el,index,$list)=>{
     cy.get($el).should('be.visible')
    })
 })
 Cypress.Commands.add('displayListElementsText', (locator) => { 
    cy.get(locator).each(($el,index,$list)=>{
        var element = $el.text()
        cy.log(element) 
       })
    })
    Cypress.Commands.add('VerifyProductsSort', (locator1,locator2,locator3) => { 

        var sortedarray
        var aarray = new Array()
        var barray = new Array()
        cy.get(locator1).select(locator2)
        cy.get(locator3).each(($el, index, $list) => {
            var a = $el.text()
            aarray.push(a)
            barray.push(a)
        }).then(() => {
        }).then(() => {
            sortedarray = aarray.sort();
        }).then(() => {
            for (var i = 0; i < barray.length; i++) {
                expect(sortedarray[i]).equals(barray[i])
            }
        })})
    Cypress.Commands.add('VerifyPageTitle',(titlename)=>{
        var title = cy.title().then((title)=>{
            expect(title).to.equals(titlename)
        })
    })

    Cypress.Commands.add('waitUntilElementVisible', (locator) => {
        return cy.get(locator,{timeout:120000}).should('be.visible')    
    })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
