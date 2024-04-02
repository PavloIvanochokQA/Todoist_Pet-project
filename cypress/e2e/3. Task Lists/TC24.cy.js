import { projectName } from "../../../js_examples/faker";
it('successful creation of a new task board with sections', () => {
    const name = projectName();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.get('[aria-label="My projects menu"]').click();
    cy.get('[aria-label="Add project"]').click();
    cy.get('#edit_project_modal_field_name').type(name);
    cy.get('[for="BOARD"]').click();
    cy.get('[type="submit"]').click();
    cy.get('.fGc18p7 > .a03e39af').should('contain', name);
    cy.get('[aria-label="Name this section"]').type('To Do').type('{enter}');
    cy.get('.board_add_section_button').click();
    cy.get('[aria-label="Name this section"]').type('Done').type('{enter}');
    cy.get('[data-testid="project-board-view"]').should('contain', 'To Do').should('contain', 'Done');
    //postconditions
    cy.DeleteProject();
});