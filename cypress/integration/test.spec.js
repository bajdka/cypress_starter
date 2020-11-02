describe('My First Tests', () => {
    it('Does not do much!', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();

        cy.url().should('include', '/commands/actions');
    });

    it('Does not do much too, but fails!', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').click();

        cy.url().should('include', '/commands/test');
    });


    it('Custom assertion used', () => {
        cy.visit('https://example.cypress.io');
        cy.contains('type').should('have.price', '222')
    });
});
