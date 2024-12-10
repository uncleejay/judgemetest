describe('Judge.Me Site', () => {

    const baseUrl = 'https://judge.me/reviews'

    beforeEach(() => {
      // visit the judge.me site before each test
      cy.visit(baseUrl);
    });

    // Test Case 1: Verify Page Load
    it('should load the page successfully and display key elements', () => {
        //check if the url is correct
        cy.url().should('eq', baseUrl)
    });

});