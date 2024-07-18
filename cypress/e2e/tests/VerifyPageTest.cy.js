import LOCATORS from "../../support/locators";
import VerifyPage from "../pages/VerifyPage";

describe("Verifying product details load correctly", () => {

    const verifyPage = new VerifyPage()

    beforeEach(() => {
        cy.visit("/")
    })

    it("Verify first product in results", () => {
        const shoe = "Sandals";
        const expectedProductText = "New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals";
        const textList = [
            "Available in 5 different colours",
            "Diamante detailing to the front",
            "Outer Material: Synthetic",
            "Inner Material: Manmade",
            "Heel Height: 9.5 centimetres",
            "Heel Type: Wedge",
            "Sandals have a toe thong design",
            "Classic flip flop wedge heels",
            "Perfect for the Summer!",
        ];

        // Function to navigate to shoes section
        const navigateToShoesSection = () => {
            cy.get(LOCATORS.VERIFY_PAGE.apparelAndAccessories)
                .find('nav > ul > li:nth-child(2) > a')
                .should('be.visible')
                .click();

            cy.get(LOCATORS.VERIFY_PAGE.shoesStore)
                .should('be.visible')
                .click();
        };

        // Function to click on the first product and verify its details
        const verifyFirstProduct = () => {
            cy.get(LOCATORS.VERIFY_PAGE.firstProduct)
                .should('be.visible')
                .click();

            cy.get(LOCATORS.VERIFY_PAGE.productText)
                .should('be.visible')
                .and('have.text', expectedProductText);

            cy.get(LOCATORS.VERIFY_PAGE.details)
                .each((element) => {
                    cy.wrap(element).invoke("text").then((text) => {
                        const normalizedText = text.trim().replace(/\s+/g, ' ');

                        const isTextMatched = textList.some(expectedText => {
                            return normalizedText.includes(expectedText);
                        });

                        expect(isTextMatched).to.be.true;
                    });
                });
        };

        // Verify the product details
        verifyPage.produstDetails(shoe);
        navigateToShoesSection();
        verifyFirstProduct();
    });

});





