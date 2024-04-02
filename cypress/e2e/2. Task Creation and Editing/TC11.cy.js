import { taskDesc, taskName } from "../../../js_examples/faker";
it('successful task creation', () => {
    const firstName = taskName();
    const firstDesc = taskDesc();
    const secondName = taskName();
    const secondDesc = taskDesc();
    const thirdName = taskName();
    const thirdDesc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    //add first task
    cy.contains('Add task').click();
    cy.get('[aria-label="Task name"]').as('name').type(firstName);
    cy.get('[aria-label="Description"]').as('desc').type(firstDesc);
    cy.get('[aria-label="Set priority"]').as('priority').click();
    cy.contains('Priority 1').click();
    cy.get('[aria-label="Add task"]').as('addTask').click();
    //check
    cy.contains(firstName).scrollIntoView().should('be.visible').click();
    cy.get('.task_content > p').should('have.text', firstDesc);
    cy.get('button[aria-haspopup="listbox"]').eq(1).click();
    cy.get('[aria-label="Priority 1"]').should('have.attr', 'aria-selected', 'true').click();
    cy.get('[aria-label="Close task"]').click();
    //add second task
    cy.contains('Add task').click();
    cy.get('@name').type(secondName);
    cy.get('@desc').type(secondDesc);
    cy.get('@priority').click();
    cy.contains('Priority 2').click();
    cy.get('@addTask').click();
    //check
    cy.contains(secondName).scrollIntoView().should('be.visible').click();
    cy.get('.task_content > p').should('have.text', secondDesc);
    cy.get('button[aria-haspopup="listbox"]').eq(1).click();
    cy.get('[aria-label="Priority 2"]').should('have.attr', 'aria-selected', 'true').click();
    cy.get('[aria-label="Close task"]').click();
    //add third task
    cy.contains('Add task').click();
    cy.get('@name').type(thirdName);
    cy.get('@desc').type(thirdDesc);
    cy.get('@priority').click();
    cy.contains('Priority 3').click();
    cy.get('@addTask').click();
    //check
    cy.contains(thirdName).scrollIntoView().should('be.visible').click();
    cy.get('.task_content > p').should('have.text', thirdDesc);
    cy.get('button[aria-haspopup="listbox"]').eq(1).click();
    cy.get('[aria-label="Priority 3"]').should('have.attr', 'aria-selected', 'true').click();
    cy.get('[aria-label="Close task"]').click();
});