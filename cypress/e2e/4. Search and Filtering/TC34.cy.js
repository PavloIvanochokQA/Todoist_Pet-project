import { taskDesc, taskName } from "../../../js_examples/faker";
it('successful task search by due date', () => {
    const name = taskName();
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 3');
    cy.contains(name).scrollIntoView().click();
    cy.contains('Due date').click();
    cy.get('button[data-track$="_tomorrow"]').click();
    cy.get('[aria-label="Close task"]').click();
    cy.get('[aria-label="Search"]').click();
    cy.get('[placeholder="Search or type a command…"]').type('Tomorrow').type('{enter}');
    cy.get('.bff24867').should('have.text', 'Results for “Tomorrow”');
    cy.get('[data-testid="task-selection-list-container"]').contains(name).scrollIntoView().click();
    cy.get('[data-testid="task-details-sidebar"]').should('be.visible');
});