import { projectName } from "../../../js_examples/faker";
it('successful creation of a new task list', () => {
    const name = projectName();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.get('[aria-label="My projects menu"]').click();
    cy.get('[aria-label="Add project"]').click();
    cy.get('#edit_project_modal_field_name').type(name);
    cy.get('[for="LIST"]').click();
    cy.get('[type="submit"]').click();
    cy.get('.fGc18p7 > .a03e39af').should('contain', name);
    //postconditions
    cy.DeleteProject();
});