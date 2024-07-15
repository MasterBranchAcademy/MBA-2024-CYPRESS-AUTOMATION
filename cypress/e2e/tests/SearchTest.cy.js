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
        cy.get(LOCATORS.SEARCH_FEATURE.searchItem)
        .should("contain", item)
        
        });
});

