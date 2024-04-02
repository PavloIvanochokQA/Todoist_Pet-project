it('unsuccessful change the current password', () => {
    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.get('[aria-label="Settings"]').click();
    cy.get('a[role="menuitem"]').eq(0).click();
    cy.get('a[href="/app/settings/account/password"]').click();
    cy.get('[type="password"]').eq(0).type('invalidpass123');
    cy.get('[type="password"]').eq(1).type('newpassword');
    cy.get('[type="password"]').eq(2).type('newpassword');
    cy.get('[type="submit"]').click();
    cy.contains('You entered an incorrect password.').should('be.visible');
});