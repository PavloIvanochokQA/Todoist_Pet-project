import { email, password, username } from "../../../js_examples/rnd"
it('password change', () => {
    cy.CreateUser(email, password, username);
    cy.get('[aria-label="Settings"]').click();
    cy.get('a[role="menuitem"]').eq(0).click();
    cy.get('a[href="/app/settings/account/password"]').click();
    cy.get('[type="password"]').eq(0).type(password);
    cy.get('[type="password"]').eq(1).type('new' + password);
    cy.get('[type="password"]').eq(2).type('new' + password);
    cy.get('[type="submit"]').click();
    cy.get('a[href="/app/settings/account/password"]').should('be.visible');
    cy.get('[aria-label="Close settings"]').click();
    cy.get('[aria-label="Settings"]').click();
    cy.get('button[role="menuitem"]').eq(5).click();
    cy.LoginUser(email, 'new' + password);
    cy.get('[aria-label="Settings"]').should('have.text', username);
});