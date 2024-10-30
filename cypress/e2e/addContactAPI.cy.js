describe('API Test - Adding a Contact', () => {
    it('Should add a new contact via API', () => {
      cy.request('POST', 'https://thinking-tester-contact-list.herokuapp.com/api/contacts', {
        name: 'API Contact',
        email: 'api@example.com',
        phone: '0987654321'
      }).its('status').should('eq', 201);
    });
  });
  