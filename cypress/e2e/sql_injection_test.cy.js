// sql_injection_test.spec.js
describe('SQL Injection Test on Login Form in Contact List App', () => {
    
    // Set up before each test
    beforeEach(() => {
        // Visit the login page for the Contact List App
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    });

    it('Should not allow SQL injection in the login form', () => {
        // SQL injection payload for username and password fields
        const sqlInjectionString = "' OR '1'='1";

        // Enter SQL injection strings into login fields
        cy.get('#email') // Contact List App login email field selector
          .type(sqlInjectionString);
        cy.get('#password') // Contact List App login password field selector
          .type(sqlInjectionString);

        // Submit the login form
        cy.get('button[type="submit"]').click(); // Submit button selector for Contact List App login

        // Expected outcomes:
        // Assert that login should fail
        cy.get('.alert-danger') // Error message selector in Contact List App (replace if different)
          .should('be.visible')
          .and('contain', 'Invalid email or password');

        // Ensure unauthorized access is not granted
        cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/'); // Confirms the user is still on the login page
    });
});
