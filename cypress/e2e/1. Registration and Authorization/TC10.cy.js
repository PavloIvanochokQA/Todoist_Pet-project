it('unsuccessful delete the account', () => {
    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.get('[aria-label="Settings"]').click();
    cy.get('a[role="menuitem"]').eq(0).click();
    cy.get('a[href="/app/settings/account/delete"]').click();
    cy.get('[type="password"]').type('invalidpassword');
    cy.get('[type="submit"]').click();
    cy.contains('You entered an incorrect password.').should('be.visible');
});