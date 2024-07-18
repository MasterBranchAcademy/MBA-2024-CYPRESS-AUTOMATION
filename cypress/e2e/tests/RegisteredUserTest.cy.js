import LOCATORS from "../../support/locators";
import RegisteredUser from "../pages/RegisteredUserPage"; 

describe("Registered User Access to Order History", () => {

    const registeredUser = new RegisteredUser()

    beforeEach(() => {
        cy.visit("/")
    })
    it("User Access to Order History", () => {
        const history = "Paper Towns"
        registeredUser.registeredUser(history)
        cy.get(LOCATORS.REGISTERED_USER.loginMenu).should('be.visible').click()
        cy.get(LOCATORS.PURCHASE_FEATURE.userInputBox).should('be.visible').type('AdilTashkentli')
        cy.get(LOCATORS.PURCHASE_FEATURE.passwordBox).should('be.visible').type('ideK@2H8pkaj')
        cy.get(LOCATORS.PURCHASE_FEATURE.loginButton).should('be.visible').click()
        cy.get(LOCATORS.REGISTERED_USER.orderHistory).should('be.visible').click()
        cy.get(LOCATORS.REGISTERED_USER.orderedItem).should('be.visible').click()
        cy.get(LOCATORS.REGISTERED_USER.itemStatus).should('contain', 'Pending')
    });

});