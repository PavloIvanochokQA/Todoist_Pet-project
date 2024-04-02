import { taskDesc, taskName } from "../../../js_examples/faker";
it('successful task search by priority', () => {
    const name = taskName();
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 3');
    cy.wait(500);
    cy.get('[aria-label="Search"]').click();
    cy.get('[placeholder="Search or type a command…"]').type('Priority 3').type('{enter}');
    cy.get('.bff24867').should('have.text', 'Results for “Priority 3”');
    cy.get('[data-testid="task-selection-list-container"]').contains(name).scrollIntoView().click();
    cy.get('[data-testid="task-details-sidebar"]').should('be.visible');
});