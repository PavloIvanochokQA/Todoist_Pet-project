it('unsuccessful registration', () => {
    cy.visit('https://app.todoist.com/');
    cy.get('a[href="/auth/signup"]').click();
    cy.get('[type="email"]').as('email').type('cosis52048@mnsaf.com');
    cy.get('[type="password"]').as('password').type('validpassword');
    cy.get('[type="submit"]').as('submit').click();
    cy.get('._8f5b5f2b').should('contain', 'this email address is unavailable');
    cy.get('.bff24867').should('have.text', 'Sign up');
    cy.get('@email').clear().type('invalidemail.com');
    cy.get('@password').clear().type('validpassword');
    cy.get('@submit').click();
    cy.get('.bff24867').should('have.text', 'Sign up');
    cy.get('@email').clear().type('validemail@gmail.com');
    cy.get('@password').clear().type('1234567');
    cy.get('.bff24867').should('have.text', 'Sign up');
});