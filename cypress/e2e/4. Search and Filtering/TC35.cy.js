import { taskDesc, taskName } from "../../../js_examples/faker";
it('successful task search with emoji', () => {
    const name = taskName();
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name + '😂', desc, 'Priority 1').wait(500);
    cy.get('[aria-label="Search"]').click();
    cy.get('[placeholder="Search or type a command…"]').type('😂');
    cy.contains(name + '😂').scrollIntoView().click();
    cy.get('[data-testid="task-details-sidebar"]').should('be.visible');
});