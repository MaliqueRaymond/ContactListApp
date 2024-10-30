describe('API Test - GET Contacts', () => {
    it('Should retrieve the list of contacts via API', () => {
      cy.request('GET', 'https://thinking-tester-contact-list.herokuapp.com/api/contacts')
        .its('status').should('eq', 200);
    });
  });
  