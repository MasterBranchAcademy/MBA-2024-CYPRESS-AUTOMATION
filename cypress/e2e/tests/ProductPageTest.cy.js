import LOCATORS from "../../support/locators";
import ProductPage from "../pages/ProductPage";

describe("Verify an item", () => {

    const productPage = new ProductPage()

    beforeEach(() => {
        cy.visit("/")
    })
    it("Verify item titles", () => {
        const item = "Skinsheen Bronzer Stick"
        productPage.verify(item)
        cy.get(LOCATORS.PRODUCT_PAGE.firstItem).first('firstItem:’.thumbnail’').click()
        cy.title().should('eq', 'Skinsheen Bronzer Stick');
        
    });

});