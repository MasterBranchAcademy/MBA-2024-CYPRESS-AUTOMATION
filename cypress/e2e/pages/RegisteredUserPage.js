import LOCATORS from "../../support/locators";
class RegisteredUser {
    registeredUser(history){
        cy.get(LOCATORS.REGISTERED_USER.loginMenu).click();
        
    }
}
export default RegisteredUser