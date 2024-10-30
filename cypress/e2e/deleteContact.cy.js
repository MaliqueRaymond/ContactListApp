describe('Deleting a Contact', () => {
    beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    });
  
    it('Should delete a contact', () => {
      cy.contains('Jane Doe').parents('tr').find('button.delete').click();
      cy.contains('Contact deleted successfully').should('be.visible');
      cy.contains('Jane Doe').should('not.exist');
    });
  });
  