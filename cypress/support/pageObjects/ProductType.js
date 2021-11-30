const chooseProductType_black = 'a[name="Black"]'
const chooseProductType_Blue = 'a[name="Blue"]'
const chooseProductType_Yellow = 'a[name="Yellow"]'
const chooseProductType_Orange = 'a[name="Orange"]'

const image = '#bigpic'

const chooseProductType_black_img = 'http://automationpractice.com/img/p/1/5/15-large_default.jpg'
const chooseProductType_Orange_img = 'http://automationpractice.com/img/p/1/4/14-large_default.jpg'
const chooseProductType_Blue_img = 'http://automationpractice.com/img/p/1/3/13-large_default.jpg'
const chooseProductType_Yellow_img = 'http://automationpractice.com/img/p/1/2/12-large_default.jpg'

export var ProductType = {

    async chooseProductColour(colour) {

        switch (colour) {
            case "black":
                cy.get(chooseProductType_black).click()
                break;
            case "orange":
                cy.get(chooseProductType_Blue).click()
                break;
            case "blue":
                cy.get(chooseProductType_Yellow).click()
                break;
            case "yellow":
                cy.get(chooseProductType_Orange).click()
                break;
            default:
                cy.log("Choose correct colour type")
        }
    },
    async verifyProductColourIs(colour) {

        switch (colour) {
            case "black":
                cy.get(image).invoke('attr', 'src').should('contain', chooseProductType_black_img)
                break;
            case "orange":
                cy.get(image).invoke('attr', 'src').should('contain', chooseProductType_Blue_img)
                break;
            case "blue":
                cy.get(image).invoke('attr', 'src').should('contain', chooseProductType_Yellow_img)
                break;
            case "yellow":
                cy.get(image).invoke('attr', 'src').should('contain', chooseProductType_Orange_img)
                break;
            default:
        }
    }
}