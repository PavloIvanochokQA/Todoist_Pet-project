it('possibility to enter using Facebook/Google/Apple', () => {
    cy.visit('https://app.todoist.com/');
    cy.get('[data-gtm-id="google-provider-link"]').should('be.visible').should('have.attr', 'href').and('include', 'accounts.google.com');
    cy.get('[data-gtm-id="facebook-provider-link"]').should('be.visible').should('have.attr', 'href').and('include', 'facebook.com');
    cy.get('[data-gtm-id="apple-provider-link"]').should('be.visible').should('have.attr', 'href').and('include', 'appleid.apple.com');
});