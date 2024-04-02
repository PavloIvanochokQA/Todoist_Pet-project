import { projectName } from "../../../js_examples/faker";
it('successful task list deletion', () => {
    const listName = projectName();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTaskList(listName);
    cy.get('[aria-label="Project options menu"]').click();
    cy.contains('Delete').click();
    cy.get('.b75f86cd > ._14423c92').find('[type="submit"]').click();
    cy.get('.qMjaCbb').click();
    cy.contains(listName).should('not.exist');
});