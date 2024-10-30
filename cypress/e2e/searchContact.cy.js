describe('Searching for a Contact', () => {
    beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    });
  
    it('Should search for a contact', () => {
      cy.get('input[name="search"]').type('John Doe');
      cy.contains('John Doe').should('be.visible');
    });
  });
  