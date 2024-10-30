

---

## ContactListApp

This repository contains the **ContactListApp** project, focused on UI, API, and Security testing, including test automation with Cypress, security vulnerability scans, and integration with GitHub Actions.

### Table of Contents
- [Cloning the Repository](#cloning-the-repository)
- [Setting Up the Environment](#setting-up-the-environment)
- [Running Tests](#running-tests)
- [Documentation and Resources](#documentation-and-resources)

---

### Cloning the Repository

To get started, first, clone this repository to your local machine. 

1. Open a terminal in VS Code or your preferred environment.
2. Run the following command:

   ```bash
   git clone https://github.com/MaliqueRaymond/ContactListApp.git
   ```

3. Navigate into the project folder:

   ```bash
   cd ContactListApp
   ```

### Setting Up the Environment

#### Prerequisites
- **Node.js** (Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).)
- **Cypress**: Used for automating tests for UI and API endpoints.
- **GitHub Actions**: Configured to run automated tests upon each push or pull request.

#### Installation Steps

1. **Install Project Dependencies**:
   Run the following command in the project directory to install all dependencies listed in the `package.json` file:
   
   ```bash
   npm install
   ```

2. **Cypress Setup**:
   Initialize Cypress by opening it in the project for the first time:
   
   ```bash
   npx cypress open
   ```

   This will create the `cypress` directory where test files will be stored.

### Running Tests

#### 1. Run Tests Locally

- **Running All Tests**:
  
  To execute all test cases for UI, API, and security testing, run:
  
  ```bash
  npx cypress run
  ```

#### 2. GitHub Actions Automated Testing

- GitHub Actions will automatically trigger tests on every push or pull request. Test results are visible in the **Actions** tab in your GitHub repository.

#### 3. ZAP Security Scanning

The GitHub Actions workflow also includes a security scan using **OWASP ZAP** to detect potential vulnerabilities like XSS. This runs as a separate job in the GitHub Actions workflow.

### Documentation and Resources

- **API Documentation**:
  - Refer to the API documentation for each endpoint to understand expected inputs and outputs.
  
- **Cypress Documentation**:
  - [Cypress Documentation](https://docs.cypress.io/) provides details on writing and running tests.

- **GitHub Actions**:
  - Details on the setup can be found in the `.github/workflows` folder, where the workflow YAML file is stored.

---

This `README.md` should give you and any collaborators all the information needed to set up, run, and understand the structure and scope of testing in the ContactListApp project!