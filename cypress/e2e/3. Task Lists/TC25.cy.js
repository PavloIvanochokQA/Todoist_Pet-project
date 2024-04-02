import { projectName } from "../../../js_examples/faker";
it('successful change of list name and type', () => {
    const name = projectName();
    const newName = projectName();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTaskList(name);
    cy.get('[aria-label="Project options menu"]').click();
    cy.contains('Edit').click();
    cy.get('#edit_project_modal_field_name').clear().type(newName);
    cy.get('[for="BOARD"]').click();
    cy.get('[type="submit"]').click();
    cy.get('.bff24867').should('contain', newName);
    cy.get('[data-testid="project-board-view"]').should('be.visible');
    //postconditions
    cy.DeleteProject();
});