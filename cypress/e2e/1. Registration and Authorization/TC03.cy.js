it('successful logout from the account', () => {
    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.get('[aria-label="Settings"]').click();
    cy.get('button[role="menuitem"]').eq(5).click();
    cy.url().should('include', '/auth/login');
    cy.contains('Log in').should('be.visible');
});