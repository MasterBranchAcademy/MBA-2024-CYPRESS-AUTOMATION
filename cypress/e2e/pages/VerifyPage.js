import LOCATORS from "../../support/locators";
class VerifyPage {
    produstDetails(shoe){
        cy.get(LOCATORS.VERIFY_PAGE.apparelAndAccessories).should('be.visible');
        
    }
}
export default VerifyPage