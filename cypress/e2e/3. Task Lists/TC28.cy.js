import { projectName } from "../../../js_examples/faker";
it('successful task list duplication', () => {
    const listName = projectName();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTaskList(listName);
    cy.contains('Add task').click();
    cy.get('[aria-label="Task name"]').as('name').type('Task 1');
    cy.get('[aria-label="Add task"]').click().wait(500);
    cy.get('[aria-label="Project options menu"]').click();
    cy.contains('Duplicate').click();
    cy.get('.fGc18p7 > .a03e39af').should('contain', listName);
    cy.get('.fGc18p7 > .a03e39af').should('contain', 'Copy of ' + listName);
    cy.contains('Copy of ' + listName).click();
    cy.get('[class="section_list"]').should('contain', 'Task 1');
    //postconditions
    cy.DeleteProject();
    cy.contains(listName).click();
    cy.DeleteProject();
});