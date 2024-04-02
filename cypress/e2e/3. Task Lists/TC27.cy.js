it('unsuccessful creation of a new task list', () => {
    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.get('[aria-label="My projects menu"]').click();
    cy.get('[aria-label="Add project"]').click();
    cy.get('[for="LIST"]').click();
    cy.get('[type="submit"]').should('have.attr', 'aria-disabled', 'true');
});