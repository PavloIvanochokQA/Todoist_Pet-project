it('successful filter saving', () => {
    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.get('[aria-label="Filters & Labels"]').click();
    cy.get('[aria-label="Add new filter"]').click();
    cy.get('[name="name"]').type('P3 tasks');
    cy.get('[name="query"]').type('Priority 3');
    cy.get('[type="submit"]').click();
    cy.get('[aria-label="Filters & Labels"]').click();
    cy.contains('P3 tasks').click();
    cy.get('.bff24867').should('have.text', 'P3 tasks');
    cy.get('.view_content').should('contain', 'Priority 3');
    //postconditions
    cy.get('[aria-label="Filter options menu"]').click();
    cy.contains('Delete').click();
    cy.get('[type="submit"]').click();
});