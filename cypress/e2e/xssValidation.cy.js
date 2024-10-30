describe('Security Test - Input Validation for XSS', () => {
    beforeEach(() => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    });
  
    it('Should validate input fields for XSS', () => {
      cy.get('input[name="name"]').type('<script>alert("XSS")</script>');
      cy.get('button[type="submit"]').click();
      cy.contains('Contact added successfully').should('be.visible');
    });
  });
  