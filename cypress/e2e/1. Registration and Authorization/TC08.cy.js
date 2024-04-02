it('unsuccessful login', () => {
    cy.visit('https://app.todoist.com/auth/login');
    cy.get('[type="email"]').as('email').type('notregistered@gmail.com');
    cy.get('[type="password"]').as('password').type('password180324');
    cy.get('[type="submit"]').as('submit').click();
    cy.get('._8f5b5f2b').should('have.text', 'Wrong email or password.');
    cy.get('.bff24867').should('have.text', 'Log in');
    cy.get('@email').clear().type('cosis52048@mnsaf.com');
    cy.get('@password').clear().type('invalidpassword');
    cy.get('@submit').click();
    cy.get('._8f5b5f2b').should('have.text', 'Wrong email or password.');
    cy.get('.bff24867').should('have.text', 'Log in');
});