import LOCATORS from "../../support/locators";
import SearchPage from "../pages/SearchPage";

describe ("Search tests", () => {
    
    const searchPage = new SearchPage()
    
    beforeEach(() => {
        cy.visit ("/")
    })

    it("Successfully searching for a valid product", () => {
        const item = "Facial Cream"
        searchPage.searchItem(item)
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).should('be.visible')
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).type('{enter}')
        cy.get(LOCATORS.SEARCH_FEATURE.itemResult).should('be.visible')
        });

        
});

