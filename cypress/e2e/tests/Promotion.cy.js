
import LOCATORS, { } from "../../support/locators";
import HomePage, { } from "../pages/HomePage";

describe('Verify promotions are displayed correctly on the home page', () => {
    it('should display all active promotions with visible descriptions, images, and links', () => {
        // Given the user is on the home page
        cy.visit('/');

        // When the user looks at the promotions section
        cy.get(LOCATORS.HOME_PAGE.promoSection).should('be.visible');

        // Then all active promotions should be displayed
        cy.get(LOCATORS.HOME_PAGE.promotionItem).each(($promotion) => {
            // And each promotion should have a visible description
            cy.wrap($promotion).find(LOCATORS.HOME_PAGE.promotionDescription).should('be.visible');

            // And each promotion should have a visible image/banner
            cy.wrap($promotion).find(LOCATORS.HOME_PAGE.promotionImage).should('be.visible');

        });
    });
});
