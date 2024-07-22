import LOCATORS from "../../support/locators";
import SearchPage from "../pages/SearchPage";

describe("Search tests", () => {

    const searchPage = new SearchPage()

    beforeEach(() => {
        cy.visit("/")
    })

    it("Successfully searching for a valid product", () => {
        const item = "Facial Cream"
        searchPage.searchItem(item)
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).should('be.visible')
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).type('{enter}')
        cy.get(LOCATORS.SEARCH_FEATURE.itemResult).should('be.visible')
    });

    it("Performing a search with an empty search box", () => {
        const item = "  "
        searchPage.searchItem(item)
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).should('be.visible')
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).type('{enter}')
        cy.get(LOCATORS.SEARCH_FEATURE.emptyResult).should('contain', 'There is no product that matches the search criteria.')
    });

    it("Performing a search with non-existent product", () => {
        const item = "xyz123"
        searchPage.searchItem(item)
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).should('be.visible')
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).type('{enter}')
        cy.get(LOCATORS.SEARCH_FEATURE.emptyResult).should('contain', 'There is no product that matches the search criteria.')
    });

    it("product titles should be same", () => {
        const expectedText = "Womens high heel point toe stiletto sandals ankle strap court shoes"
        const actualText =  "Womens high heel point toe stiletto sandals ankle strap court shoes"   
        
        cy.get(LOCATORS.HOME_PAGE.bestsellerSecondProduct).should('have.text',actualText);
        cy.get(LOCATORS.HOME_PAGE.bestsellerSecondProduct).should('be.visible').click()
        expect(actualText).to.equal(expectedText);
        cy.title().should('eq', expectedText)
       
        });


});

