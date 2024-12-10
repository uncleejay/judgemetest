describe('Judge.Me Site', () => {

    const baseUrl = 'https://judge.me/reviews';
    const searchKeyword = 'tablet';

    beforeEach(() => {
      // visit the judge.me site before each test
      cy.visit(baseUrl);
    });

    // Verify Page Load
    it('should load the page successfully and display key elements', () => {

        // check if the url is correct
        cy.url().should('eq', baseUrl)

        // Validate that the judge.me site loads within 3 seconds
        cy.window().its('performance.timing').then((timing) => {
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            cy.log(`Page load time: ${loadTime}ms`);
            expect(loadTime).to.be.lessThan(3000); // 3 seconds
        });

        // validate the header is visible
        cy.get('.main-header__container').should('be.visible')

        // validate that the search bar is visible
        cy.get('.search-card__layout').should('be.visible')

        // validate that the footer is visible
        cy.get('.marketplace-footer__container--top').should('be.visible')
    });

    // Validate Search Functionality
    it('should display correct results when searching by keyword', () => {
        // Use the custom command for searching
        cy.performSearch(searchKeyword);

        // Verify that the results match the search keyword
        cy.get('.search-results__list')
        .each(($review) => {
            cy.wrap($review).contains(searchKeyword, { matchCase: false });
        });
    });

    // Validate Search Handles result when keyword is not found
    it('should display result not found when searching for a non existent keyword', () => {
        const nonSearchKeyword = 'm1hs2';
        // Verify "No reviews found" message if no results match
        cy.get('#search-input').type(nonSearchKeyword)
        .type(`${nonSearchKeyword}{enter}`);
        cy.get('.search-results__result-heading').should('be.visible')
    });

    // Validate Pagination
    it('should allow navigation through pagination controls', () => {
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
    });

    // Validate Filtering by Rating
});