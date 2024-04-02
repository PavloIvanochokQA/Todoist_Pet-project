it('unsuccessful task search with non-existent information', () => {
    cy.LoginUser('cosis52048@mnsaf.com', 'password180324');
    cy.get('[aria-label="Search"]').click();
    cy.get('[placeholder="Search or type a command…"]').type('Unreal').type('{enter}');
    cy.get('[data-testid="task-selection-list-container"]').should('contain', 'No completed tasks matching for “Unreal”');
    cy.contains('Comments').click();
    cy.contains('No matches for “Unreal”').should('be.visible');
});