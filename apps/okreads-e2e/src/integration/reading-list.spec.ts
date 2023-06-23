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

  it('Then: I should be able to see finshed button', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('.reading-list-content').should('exist');

    cy.get('.reading-list-content')
      .find('.reading-list-item')
      .then(($elements) => {
        cy.wrap($elements[$elements.length - 1])
          .find("[aria-label^='Finish']")
          .click({force: true});
      });
  });
});
