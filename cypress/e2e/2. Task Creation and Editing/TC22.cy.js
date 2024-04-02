import { taskDesc } from "../../../js_examples/faker";
it('unsuccessful task creation', () => {
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.contains('Add task').click();
    cy.get('[aria-label="Description"]').type(desc);
    cy.get('[aria-label="Set priority"]').click();
    cy.contains('Priority 1').click();
    cy.get('[aria-label="Add task"]').should('have.attr', 'aria-disabled', 'true');
});