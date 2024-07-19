import LOCATORS from "../../support/locators";
class CardFeature {
    register(control){
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).click();
        
    }
}
export default CardFeature