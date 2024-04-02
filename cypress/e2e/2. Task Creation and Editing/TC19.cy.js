import { taskDesc, taskName, userComment } from "../../../js_examples/faker"
it('successful addition a comment', () => {
    const name = taskName();
    const desc = taskDesc();
    const comment = userComment();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 1');
    cy.contains(name).scrollIntoView().click();
    cy.get('[aria-label="Open comment editor"]').click();
    cy.get('[aria-label="Comment"] > .is-editor-empty').type(comment);
    cy.get('[type="submit"]').click();
    cy.get('[aria-label="Close comment editor"]').click();
    cy.contains(comment).scrollIntoView().should('be.visible');
});