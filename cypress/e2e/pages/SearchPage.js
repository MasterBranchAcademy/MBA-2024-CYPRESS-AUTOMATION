import LOCATORS from "../../support/locators";
class SearchPage {
    searchItem(item){
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).click().type(item);
        
    }
}
export default SearchPage