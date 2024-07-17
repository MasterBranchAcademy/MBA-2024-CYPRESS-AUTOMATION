import LOCATORS from "../../support/locators";
class RegisteredUser {
    nagivateToItem(books){
        cy.get(LOCATORS.PURCHASE_FEATURE.books).click();
        
    }
}
export default RegisteredUser