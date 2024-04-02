import { taskDesc, taskName, userComment } from "../../../js_examples/faker";
it('successful task search with comment', () => {
    const name = taskName();
    const desc = taskDesc();
    const comment = userComment();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 1').wait(500);
    cy.contains(name).scrollIntoView().click();
    cy.get('[aria-label="Open comment editor"]').click();
    cy.get('[aria-label="Comment"] > .is-editor-empty').type(comment);
    cy.get('button[type="submit"]').click();
    cy.get('[aria-label="Close comment editor"]').click();
    cy.get('[aria-label="Close task"]').click();
    cy.get('[aria-label="Search"]').click();
    cy.get('[placeholder="Search or type a command…"]').type(comment).type('{enter}');
    cy.contains('Comments').click();
    cy.contains(name).scrollIntoView().click();
    cy.get('[data-testid="task-details-sidebar"]').should('be.visible');
});