const searchKeyword = 'tablet';
const nonSearchKeyword = 'm1hs2';
class Search_PO {
    verifySearchFunctionality() {
        // Use the custom command for searching
        cy.performSearch(searchKeyword);

        // Verify that the results match the search keyword
        cy.get('.search-results__list')
        .each(($review) => {
            cy.wrap($review).contains(searchKeyword, { matchCase: false });
        });
    }

    validateSearchNotFoundErr() {
        // Verify "No reviews found" message if no results match
        cy.get('#search-input').type(nonSearchKeyword)
        .type(`${nonSearchKeyword}{enter}`);
        cy.get('.search-results__result-heading').should('be.visible')
    }

    validatePagination() {
        // Use the custom command for searching
        cy.performSearch(searchKeyword);

        // Check that the "Next" button is visible
        cy.get('.pagination > :nth-child(3)').should('be.visible');

        // Click the "Next" button
        cy.get('.pagination > :nth-child(3)').click();

        // Verify that the second page of results is displayed
        cy.url().should('include', 'page=2');
        cy.get('.search-results__list').should('be.visible');

        // Click the "Previous" button and verify first page loads
        cy.get('.pagination > :nth-child(2)').click();
        cy.url().should('include', 'page=1');
        cy.get('.search-results__list').should('be.visible');
    }

    validateRateFilter() {
        cy.performSearch(searchKeyword);

        // click on 2.5 star rating
        cy.get('.star-rating-chooser-wrapper > :nth-child(3)').click()
        cy.url().should('include', 'rating=2.5');
    }

    validateCurrencyFilter() {
        cy.performSearch(searchKeyword);

        cy.get('.filter-sidebar__item-filter > .currency-dropdown > .currency-dropdown__wrapper > .currency-dropdown__select')
        .select('EUR')
    }
}

export default Search_PO;