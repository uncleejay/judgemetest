class Home_PO {
    verifyPageLoad(baseUrl) {
        // check if the url is correct
        cy.url().should('eq', baseUrl)

        // Validate that the judge.me site loads within 5 seconds
        cy.window().its('performance.timing').then((timing) => {
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            cy.log(`Page load time: ${loadTime}ms`);
            expect(loadTime).to.be.lessThan(5000); 
        });

        // validate the header is visible
        cy.get('.main-header__container').should('be.visible')

        // validate that the search bar is visible
        cy.get('.search-card__layout').should('be.visible')

        // validate that the footer is visible
        cy.get('.marketplace-footer__container--top').should('be.visible')
    }
}

export default Home_PO;