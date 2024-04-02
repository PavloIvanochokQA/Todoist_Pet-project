it('successful login to an existing account', () => {
    cy.visit('https://app.todoist.com/auth/login');
    cy.get('.bff24867').should('have.text', 'Log in');
    cy.get('[type="email"]').type('cosis52048@mnsaf.com');
    cy.get('[type="password"]').type('password180324');
    cy.get('[type="submit"]').click();
    cy.get('[aria-label="Settings"]').should('have.text', 'Test_user');
});