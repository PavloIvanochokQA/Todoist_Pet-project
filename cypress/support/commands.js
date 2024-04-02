Cypress.Commands.add('LoginUser', (email, password) => {
    cy.visit('https://app.todoist.com/auth/login');
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('CreateUser', (em, pass, user) => {
    cy.visit('https://app.todoist.com/');
    cy.get('a[href="/auth/signup"]').click();
    cy.get('input[type="email"]').type(em);
    cy.get('input[type="password"]').type(pass);
    cy.get('button[type="submit"]').click();
    cy.get('#element-0').type(user);
    cy.get('button[type="submit"]').click();
    cy.get(':nth-child(1) > label > .I5VkSqX').click();
    cy.get('._5af09fb5').click();
    cy.get('button[aria-disabled="false"]').click();
});

Cypress.Commands.add('CreateTask', (name, desc, priority) => {
    cy.contains('Add task').click();
    cy.get('[aria-label="Task name"]').type(name);
    cy.get('[aria-label="Description"]').type(desc);
    cy.get('[aria-label="Set priority"]').click();
    cy.contains(priority).click();
    cy.get('[aria-label="Add task"]').as('addTask').click();
});

Cypress.Commands.add('DeleteProject', () => {
    cy.get('[aria-label="Project options menu"]').click();
    cy.contains('Delete').click();
    cy.get('.b75f86cd > ._14423c92').find('[type="submit"]').click();
});

Cypress.Commands.add('CreateTaskList', (name) => {
    cy.get('[aria-label="My projects menu"]').click();
    cy.get('[aria-label="Add project"]').click();
    cy.get('#edit_project_modal_field_name').type(name);
    cy.get('[for="LIST"]').click();
    cy.get('[type="submit"]').click();
});

Cypress.Commands.add('CreateBoard', (name) => {
    cy.get('[aria-label="My projects menu"]').click();
    cy.get('[aria-label="Add project"]').click();
    cy.get('#edit_project_modal_field_name').type(name);
    cy.get('[for="BOARD"]').click();
    cy.get('[type="submit"]').click();
});
