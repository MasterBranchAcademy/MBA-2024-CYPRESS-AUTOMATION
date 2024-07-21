import LOCATORS from "../../support/locators";
class ProductPage {
    verify(item){
        cy.get(LOCATORS.PRODUCT_PAGE.firstItem).should('be.visible');
        
    }
}
export default ProductPage