import { taskDesc, taskName } from "../../../js_examples/faker"
it('successful change name, descriptions, priority', () => {
    const name = taskName();
    const newName = taskName();
    const disc = taskDesc();
    const newDesc = taskDesc();

    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.CreateTask(name, disc, 'Priority 1');
    cy.contains(name).scrollIntoView().click();
    //change name
    cy.get('[aria-label="Task name"]').click().wait(500);
    cy.get('[aria-label="Task name"]').clear().wait(500).type(newName);
    cy.get('[aria-label="Save"]').click();
    //change descriptions
    cy.get('[aria-label="Task description"]').click();
    cy.get('[aria-label="Description"]').clear().type(newDesc);
    cy.wait(500).get('[aria-label="Save"]').click();
    //change priority
    cy.get('button[aria-haspopup="listbox"]').eq(1).click();
    cy.contains('Priority 3').click();
    //checks
    cy.get('[aria-label="Task name"]').should('contain', newName);
    cy.get('[aria-label="Task description"]').should('contain', newDesc);
    cy.get('button[aria-haspopup="listbox"]').eq(1).click();
    cy.get('[aria-label="Priority 3"]').should('have.attr', 'aria-selected', 'true').click();
});