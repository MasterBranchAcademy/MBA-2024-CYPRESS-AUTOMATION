import LOCATORS from "../../support/locators";

describe('Home Page Tests', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    
// SCRUM-67
    it('should display the home page', () => {  
        cy.url().should('include', 'https://automationteststore.com/');
        cy.get(LOCATORS.HOME_PAGE.logo).should('be.visible');
        cy.get(LOCATORS.HOME_PAGE.mainMenu).find('.nav-pills.categorymenu').children(2).should('contain', 'Apparel & accessories');
        cy.get(LOCATORS.SEARCH_FEATURE.searchBox).should('be.visible');
        cy.get(LOCATORS.HOME_PAGE.footer).should('be.visible');
    });

    // SCRUM-54
    it('should display product categories', () => {
        cy.get(LOCATORS.HOME_PAGE.mainMenu).should('be.visible');
        cy.get(LOCATORS.HOME_PAGE.eachCategory).each(($category) => {
            cy.wrap($category).should('be.visible').and('not.be.empty');
            const href = $category.prop('href');
            cy.request(href).its('status').should('eq', 200);
        });
        cy.get(LOCATORS.HOME_PAGE.pathImage).each(($category) => {
        const img = $category.find(LOCATORS.HOME_PAGE.catImage);
        if (img.length && img.parent().css('display') !== 'none') {
                cy.wrap(img).should('be.visible').and(($img) => {
                    expect($img[0].naturalWidth).to.be.greaterThan(0);
                });
            }
        });
    });
});
