import { taskDesc, taskName } from "../../../js_examples/faker"
it('successful task deletion', () => {
    const name = taskName();
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 3');
    cy.contains(name).scrollIntoView().click();
    cy.get('[aria-label="More actions"]').click();
    cy.get('[role="menuitem"]').eq(6).click();
    cy.get('[type="submit"]').click();
    cy.contains(name).should('not.exist');
});