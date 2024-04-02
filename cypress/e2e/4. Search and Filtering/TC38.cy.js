import { taskDesc, taskName, } from "../../../js_examples/faker";
it('successful task search with sub-task', () => {
    const name = taskName();
    const desc = taskDesc();
    const subName = taskName();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 1').wait(500);
    cy.contains(name).scrollIntoView().click();
    cy.contains('Add sub-task').click();
    cy.get('[data-placeholder="Task name"]').type(subName);
    cy.get('[aria-label="Set priority"]').click();
    cy.contains('Priority 1').click();
    cy.get('[aria-label="Add task"]').click();
    cy.get('[aria-label="Cancel"]').click();
    cy.get('[aria-label="Close task"]').click();
    cy.get('[aria-label="Search"]').click();
    cy.get('[placeholder="Search or type a command…"]').type(subName).type('{enter}');
    cy.get('[data-testid="task-selection-list-container"]').contains(subName).scrollIntoView().click();
    cy.contains(name).should('be.visible');
    cy.get('[data-testid="task-details-sidebar"]').should('be.visible');
});