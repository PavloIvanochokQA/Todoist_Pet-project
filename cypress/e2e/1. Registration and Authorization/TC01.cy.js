import { email, password, username } from "../../../js_examples/rnd"
it('successful registration of a new account', () => {
    cy.visit('https://app.todoist.com/');
    cy.get('a[href="/auth/signup"]').click();
    cy.url().should('include', '/auth/signup');
    cy.get('.bff24867').should('have.text', 'Sign up');
    cy.get('[type="email"]').type(email);
    cy.get('[type="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('[type="text"]').type(username);
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(1) > label > .I5VkSqX').click();
    cy.get('._5af09fb5').click();
    cy.get('[aria-disabled="false"]').click();
    cy.get('[aria-label="Settings"]').should('contain', username);
});