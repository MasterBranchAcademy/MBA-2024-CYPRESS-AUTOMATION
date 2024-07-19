import LOCATORS from "../../support/locators";
import CardFeature from "../pages/CardPage";

describe("Search 'Creme Precieuse'", () => {
    const cardFeature = new CardFeature();

    before(() => {
        cy.visit("/");
    });

    it("User can search an item", () => {
        const control = "Creme Precieuse";
        cardFeature.register(control);
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox)
            .should('be.visible')
            .type('Creme Precieuse');
        cy.get(LOCATORS.SEARCH_FEATURE.searchButton)
            .should('be.visible')
            .click();
        cy.get(LOCATORS.CARD_PAGE.cremePreciuse)
            .should('be.visible')
            .and('contain.text', 'Creme Precieuse Nuit 50ml');
        cy.get(LOCATORS.PURCHASE_FEATURE.addToCardButton)
            .should('be.visible')
            .click();

        const itemDetails = [
            "Creme Precieuse Nuit 50ml",
            "BVLG003",
            "$220.00",
            "",
            "$220.00",
        ];

        cy.get(LOCATORS.CARD_PAGE.itemDetails).then((els) => {
            // Slice the array to get the middle 5 elements, excluding the first and last
            const middleEls = Array.from(els).slice(1, -1);

            // Verify that we have exactly 5 elements
            expect(middleEls).to.have.length(itemDetails.length);

            // Verify each item's text
            middleEls.forEach((el, index) => {
                expect(el.innerText.trim()).to.equal(itemDetails[index]);
            });
        });
    });
});