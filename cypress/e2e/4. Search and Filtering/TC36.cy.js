import { taskName } from "../../../js_examples/faker";
it('successful task search with links', () => {
    const name = taskName();
    const desc = 'https://www.youtube.com/';

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 2').wait(500);
    cy.get('[aria-label="Search"]').click();
    cy.get('[placeholder="Search or type a command…"]').type(desc).type('{enter}');
    cy.contains(name).scrollIntoView().click();
    cy.get('[data-testid="task-details-sidebar"]').should('be.visible');
});