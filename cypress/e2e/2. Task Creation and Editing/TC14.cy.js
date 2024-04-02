import { taskDesc, taskName } from "../../../js_examples/faker"
it('successful change of task due date and time', () => {
    const name = taskName();
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, desc, 'Priority 3');
    cy.contains(name).scrollIntoView().click();
    cy.contains('Due date').click();
    cy.get('[aria-haspopup="dialog"]').click();
    cy.get('#start-time-field').clear().wait(500).type('12:00');
    cy.get('[type="submit"]').click();
    cy.get('[data-track$="_nextweek"]').click();
    //check
    cy.get('[aria-label="Due date"]').should('contain', 'Monday 12:00');
    //change due date and time
    cy.get('[aria-label="Due date"] > .DHmDvjK').click();
    cy.get('[aria-haspopup="dialog"]').click();
    cy.get('#start-time-field').clear().wait(500).type('18:00');
    cy.get('button[type="submit"]').click();
    cy.get('button[data-track$="_tomorrow"]').click();
    //check
    cy.get('[aria-label="Due date"]').should('contain', 'Tomorrow 18:00');
});