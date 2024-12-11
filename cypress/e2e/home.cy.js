import Home_PO from "../support/pageObjects/Home_PO";
import Search_PO from "../support/pageObjects/Search_PO";
import 'cypress-axe'

describe('Judge.Me Site', () => {

    const baseUrl = 'https://judge.me/reviews';
    const search_po = new Search_PO();

    beforeEach(() => {
      // visit the judge.me site before each test
      cy.visit(baseUrl);
      cy.injectAxe();
    });

    // Verify Page Load
    it('should load the page successfully and display key elements', () => {
        const home_po = new Home_PO();
        home_po.verifyPageLoad(baseUrl)
    });

    it('should have no accessibility violations', () => {
        cy.checkA11y();
    });

    // Validate Search Functionality
    it('should display correct results when searching by keyword', () => {
        search_po.verifySearchFunctionality();
    });

    // Validate Search Handles result when keyword is not found
    it('should display result not found when searching for a non existent keyword', () => {
        search_po.validateSearchNotFoundErr();
    });

    // Validate Pagination
    it('should allow navigation through pagination controls', () => {
        search_po.validatePagination()
    });

    // Validate Filtering by Rating
    it('should validate filter by rating a 2.5', () => {
        search_po.validateRateFilter()
    });

    // Validate currency filter
    it('should validate currency filter to select EUR', () => {
        search_po.validateCurrencyFilter()
    })

    it('should run lighthouse performance audit', () => {
        const thresholds = {
            performance: 50,
            accessibility: 80,
            seo: 60,
            pwa: 50,
            };
        const lighthouseConfig = {
            formFactor: 'desktop',
            screenEmulation: { disabled: true },
        };
        cy.lighthouse(thresholds, lighthouseConfig);
    });
});