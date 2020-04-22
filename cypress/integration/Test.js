//spec contains tests that validate a value of h1 element, the link for a screenshot tool and text visibility after the second click in column

describe('Validates h1, the link and text visibility after the second click', function () {

    before(function () {
        cy.visit(Cypress.env('baseUrl'));
    });

    //this test fails because there is no text in <h1> element rigth now. the test will pass if <h1> element is changed to "QA-инженер"
    it('validates h1 contains page name', function () {
        cy.get('header > h1').should('be.visible').and('have.text', 'QA-инженер');
    })

    //this test fails because the div element with class "info-details" gets display:none property after the second click on the same link. it'll pass if
    //this property doesn't appear in css
    it('validates text is visible after the second click', function () {
        cy.get('.graphs-details > a').click();
        cy.wait(2000);
        cy.get('div[class="info-details"]').should('be.visible');
    })

    //this test fails because the link in <a> element isn't correct. the test will pass if href in html is changed to "http://monosnap.com/"
    it('validates the link is correct', function () {
        cy.get('.graphs-errors > a').click();
        cy.get('div[class="info-errors"] > aside > ul').children().eq(3).find('a').should('be.visible').and('have.attr', 'href', 'http://monosnap.com/');
    })
})