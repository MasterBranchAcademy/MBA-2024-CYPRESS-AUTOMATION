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
        cy.get(LOCATORS.GUEST_FEATURE.menMenu).find('nav > ul > li:nth-child(6) > a').should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.itemSet).should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.selectItem).should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.cardButton).should('be.visible').click()
        cy.get(LOCATORS.PURCHASE_FEATURE.checkoutButton).should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.guestchckRadioButt).should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.continueButton).should('be.visible').click()
        cy.get(LOCATORS.GUEST_FEATURE.guestInfo).should('be.visible', 'GUEST CHECKOUT - STEP 1')

    });

});