import { email, password, username } from "../../../js_examples/rnd"
it('account deletion', () => {
    cy.CreateUser(email, password, username);
    cy.get('[aria-label="Settings"]').click();
    cy.get('a[role="menuitem"]').eq(0).click();
    cy.get('a[href="/app/settings/account/delete"]').click();
    cy.get('[type="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.url().should('include', '/account-deleted');
    cy.get('.bff24867').should('have.text', 'Account deleted')
});