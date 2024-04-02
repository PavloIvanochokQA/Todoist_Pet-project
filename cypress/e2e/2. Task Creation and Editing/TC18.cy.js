import { taskName } from "../../../js_examples/faker"
it('successful task creation with a link', () => {
    const name = taskName();
    const desc = 'https://app.todoist.com/app/upcoming';

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, 'Link: ' + desc, 'Priority 1');
    cy.contains(name).scrollIntoView().click();
    cy.get('.task_content > p > a').should('be.visible').invoke('removeAttr', 'target').click();
    cy.url().should('include', 'app.todoist.com/app/upcoming');
});