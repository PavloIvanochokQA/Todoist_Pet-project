import { projectName } from "../../../js_examples/faker";
it('successful task list archive', () => {
    const listName = projectName();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTaskList(listName);
    cy.get('[aria-label="Project options menu"]').click();
    cy.contains('Archive').click();
    cy.get('[type="submit"]').click();
    cy.get('.MDvuw2K').click();
    cy.contains('Active projects').click();
    cy.contains('Archived projects').click();
    cy.get('.ce2e3476 > ._8313bd46').click().wait(500);
    cy.contains(listName).click();
    cy.contains('This project is archived').should('be.visible')
    cy.contains('Unarchive').click();
    cy.get('.fGc18p7').should('contain', listName);
    //postconditions
    cy.contains(listName).click();
    cy.DeleteProject();
});