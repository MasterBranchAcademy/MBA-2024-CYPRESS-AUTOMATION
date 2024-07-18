import LOCATORS from "../../support/locators";
import VerifyPage from "../pages/VerifyPage";

describe("Verifying product details load correctly", () => {

    const verifyPage = new VerifyPage()

    beforeEach(() => {
        cy.visit("/")
    })

    it("Verify fist product in results", () => {
        const shoe = "Sandals"
        verifyPage.produstDetails(shoe)
        cy.get(LOCATORS.VERIFY_PAGE.apparelAndAccessories).find('nav > ul > li:nth-child(2) > a').should('be.visible').click()
        cy.get(LOCATORS.VERIFY_PAGE.shoesStore).should('be.visible').click()
        cy.get(LOCATORS.VERIFY_PAGE.firstProduct).should('be.visible').click()
        cy.get(LOCATORS.VERIFY_PAGE.productText).should('be.visible', 'New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals')
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
        cy.get(LOCATORS.VERIFY_PAGE.details).each((element) => {
            expect(element).to.exist;
            cy.wrap(element).invoke("text").should((text) => {
                const expectedTexts = [
                    "Available in 5 different colours",
                    "Diamante detailing to the front",
                    "Outer Material: Synthetic",
                    "Inner Material: Manmade",
                    "Heel Height: 9.5 centimetres",
                    "Heel Type: Wedge",
                    "Sandals have a toe thong design",
                    "Classic flip flop wedge heels",
                    "Perfect for the Summer!"
                ];
                //expect(expectedTexts).to.include(text);
                const normalizedText = text.trim().replace(/\s+/g, ' ');

                const isTextMatched = expectedTexts.some(expectedText => {
                    return normalizedText.includes(expectedText);
                });

                expect(isTextMatched).to.be.true;
            });
        });

    });

});

