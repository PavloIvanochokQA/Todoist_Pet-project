import { taskDesc, taskName } from "../../../js_examples/faker";
it('successful task search by label', () => {
    const name = taskName();
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 3');
    cy.contains(name).scrollIntoView().click();
    cy.get('[aria-haspopup="listbox"]').eq(2).click();
    cy.get('[aria-label="Type a label"]').type('Sport').type('{enter}').type('{esc}');
    cy.get('[aria-label="Close task"]').click();
    cy.get('[aria-label="Search"]').click();
    cy.get('[placeholder="Search or type a command…"]').type('Sport');
    cy.get('[aria-label="Search results"]').contains('Sport').click();
    cy.get('.bff24867').should('have.text', 'Sport');
    cy.get('[data-testid="task-selection-list-container"]').contains(name).scrollIntoView().click();
    cy.get('[data-testid="task-details-sidebar"]').should('be.visible');
});