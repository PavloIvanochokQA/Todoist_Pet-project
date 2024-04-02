import { taskDesc, taskName } from "../../../js_examples/faker"
it('successful task completion', () => {
    const name = taskName();
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 1');
    cy.contains(name).scrollIntoView().click();
    cy.get('.task-overview > .task_checkbox').trigger('mouseover').wait(500);
    cy.get('.task-overview > .task_checkbox').click().wait(500);
    cy.get('[aria-label="Close task"]').click();
    cy.wait(1000);
    cy.get('[aria-label="Completed"]').click();
    cy.contains(name).scrollIntoView().should('be.visible')
});