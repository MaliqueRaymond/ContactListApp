describe('Editing a Contact', () => {
    beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    });
  
    it('Should edit an existing contact', () => {
      cy.contains('John Doe').parents('tr').find('button.edit').click();
      cy.get('input[name="name"]').clear().type('Jane Doe');
      cy.get('button[type="submit"]').click();
      cy.contains('Contact updated successfully').should('be.visible');
      cy.contains('Jane Doe');
    });
  });
  