import { taskDesc, taskName } from "../../../js_examples/faker"
it('successful task creation with emoji', () => {
    const name = taskName();
    const desc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name + '😂😅', desc + '🥰😍', 'Priority 3');
    cy.contains(name).scrollIntoView().click();
    cy.get('.task-overview-header')
        .find('img[alt="😂"]').should('be.visible');
    cy.get('.task-overview-header')
        .find('img[alt="😅"]').should('be.visible');
    cy.get('.task-overview-header')
        .find('img[alt="😍"]').should('be.visible');
    cy.get('.task-overview-header')
        .find('img[alt="🥰"]').should('be.visible');
});