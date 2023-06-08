describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  it('Then: I should see a snackbar message', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('button[aria-label^="Want to Read"]').eq(0).click({force:true});

    cy.get('.mat-snack-bar-container').should('be.visible');

    cy.get('.reading-list-content').should('exist');
  })
});
