import { taskDesc, taskName } from "../../../js_examples/faker"
it('successful addition a label', () => {
    const name = taskName();
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 2');
    cy.contains(name).scrollIntoView().click();
    cy.get('[aria-haspopup="listbox"]').eq(2).click();
    cy.get('[aria-label="Type a label"]').type('Work').type('{enter}').clear().type('Sport').type('{enter}').type('{esc}');
    cy.get('[aria-label="Close task"]').click();
    cy.contains('Work').click();
    cy.get('[data-testid="large-header"]').should('have.text', 'Work');
    cy.contains(name).should('be.visible');
    cy.contains('Sport').click();
    cy.get('[data-testid="large-header"]').should('have.text', 'Sport');
    cy.contains(name).should('be.visible');
});