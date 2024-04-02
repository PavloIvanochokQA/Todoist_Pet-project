import { taskDesc, taskName } from "../../../js_examples/faker"
it('successful addition of sub-task', () => {
    const name = taskName();
    const subName = taskName();
    const desc = taskDesc();
    const subDesc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 3');
    cy.contains(name).scrollIntoView().click();
    cy.contains('Add sub-task').click();
    cy.get('[data-placeholder="Task name"]').type(subName);
    cy.get('[aria-label="Description"]').type(subDesc);
    cy.get('[aria-label="Set priority"]').click();
    cy.contains('Priority 1').click();
    cy.get('[aria-label="Add task"]').click();
    cy.get('[aria-label="Cancel"]').click();
    cy.get('#task-detail-subtasks-panel').should('contain', subName).click();
    cy.get('[aria-label="Task name"]').should('contain', subName);
    cy.get('[aria-label="Task description"]').should('contain', subDesc);
    cy.get('button[aria-haspopup="listbox"]').eq(1).click();
    cy.get('[aria-label="Priority 1"]').should('have.attr', 'aria-selected', 'true').click();
});