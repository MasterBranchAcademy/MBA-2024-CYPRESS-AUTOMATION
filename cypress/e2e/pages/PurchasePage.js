import LOCATORS from "../../support/locators";
class PurchasePage {
    registeredUser(item){
        cy.get(LOCATORS.PURCHASE_FEATURE.books).click();
        
    }
}
export default PurchasePage