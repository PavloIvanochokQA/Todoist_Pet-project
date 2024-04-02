import { taskDesc, taskName } from "../../../js_examples/faker"
it('successful task duplication', () => {
    const name = taskName();
    const desc = taskDesc();
    const duplName = taskName();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 3');
    cy.contains(name).scrollIntoView().click();
    cy.get('[aria-label="More actions"]').click();
    cy.contains('Duplicate').click();
    cy.get('[aria-label="Task name"]').click();
    cy.get('[aria-label="Task name"]').clear().wait(500).type(duplName);
    cy.get('[aria-label="Save"]').click();
    cy.get('[aria-label="Close task"]').click();
    cy.contains(name).should('be.visible');
    cy.contains(duplName).should('be.visible');
});