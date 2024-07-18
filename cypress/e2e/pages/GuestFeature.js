import LOCATORS from "../../support/locators";
class GuestFeature {
    menuMen(purchase){
        cy.get(LOCATORS.REGISTERED_USER.loginMenu).click();
        
    }
}
export default GuestFeature