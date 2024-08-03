import LOCATORS from "../../support/locators";
import GuestFeature from "../pages/GuestFeature";

describe("Guest can select an item", () => {

    const guestFeature = new GuestFeature()

    beforeEach(() => {
        cy.visit("/")
    })

    it("Guest can select an item", () => {
        const menMenu = "Men Page"
        guestFeature.menuMen(menMenu)
        cy.get(LOCATORS.GUEST_FEATURE.menMenu).should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.itemSet).find('li:nth-child(2)').find('a').contains('Fragrance').click()
        cy.get(LOCATORS.GUEST_FEATURE.selectItem).contains('Euphoria Men Intense').should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.cardButton).should('be.visible').click()
        cy.get(LOCATORS.PURCHASE_FEATURE.checkoutButton).should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.guestchckRadioButt).should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.continueButton).should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.guestInfo).should('be.visible', 'GUEST CHECKOUT - STEP 1')

    });

});