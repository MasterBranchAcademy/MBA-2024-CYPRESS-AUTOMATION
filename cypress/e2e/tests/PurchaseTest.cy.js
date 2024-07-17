import LOCATORS from "../../support/locators";
import PurchasePage from "../pages/PurchasePage";

describe("Verify registered account can order an item", () => {

    const purchasePage = new PurchasePage()

    beforeEach(() => {
        cy.visit("/")
    })
    it("Registered account can order an item", () => {
        const item = "Paper Towns"
        purchasePage.registeredUser(item)
        cy.get(LOCATORS.PURCHASE_FEATURE.books).should('be.visible').click()
        cy.get(LOCATORS.PURCHASE_FEATURE.paperbooks).should('be.visible').click()
        cy.get(LOCATORS.PURCHASE_FEATURE.selectedItem).should('be.visible').click()
        cy.get(LOCATORS.PURCHASE_FEATURE.addToCardButton).should('be.visible').click()
        cy.get(LOCATORS.PURCHASE_FEATURE.checkoutButton).should('be.visible').click()
        cy.get(LOCATORS.PURCHASE_FEATURE.userInputBox).should('be.visible').type('AdilTashkentli')
        cy.get(LOCATORS.PURCHASE_FEATURE.passwordBox).should('be.visible').type('ideK@2H8pkaj')
        cy.get(LOCATORS.PURCHASE_FEATURE.loginButton).should('be.visible').click()
        cy.get(LOCATORS.PURCHASE_FEATURE.confirmOrderButton).should('be.visible').click()
        cy.get(LOCATORS.PURCHASE_FEATURE.assertionText).should('be.visible', 'YOUR ORDER HAS BEEN PROCESSED!')
    });

});