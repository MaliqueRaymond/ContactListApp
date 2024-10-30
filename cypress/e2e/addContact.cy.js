describe('Adding a New Contact', () => {
    beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    });
  
    it('Should add a new contact', () => {
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john@example.com');
      cy.get('input[name="phone"]').type('1234567890');
      cy.get('button[type="submit"]').click();
      cy.contains('Contact added successfully').should('be.visible');
      cy.contains('John Doe'); 
    });
  });
  