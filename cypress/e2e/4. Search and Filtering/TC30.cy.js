import { taskDesc, taskName } from "../../../js_examples/faker";
it('successful task search by task name', () => {
    const name = taskName();
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 3');
    cy.wait(500);
    cy.get('[aria-label="Search"]').click();
    cy.get('[placeholder="Search or type a command…"]').type(name).type('{enter}');
    cy.get('[data-testid="task-selection-list-container"]').contains(name).click();
    cy.get('[data-testid="task-details-sidebar"]').should('be.visible');
});