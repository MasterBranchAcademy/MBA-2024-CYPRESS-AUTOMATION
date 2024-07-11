# MBA-2024-CYPRESS-AUTOMATION
cypress practice 2024

This project contains automated tests for Automation Test Store using Cypress, written in JavaScript, and following the Page Object Model (POM) design pattern.

### Table of Contents <hr>

1. [Prerequisites](#Prerequisites)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Writing Tests](#writing-tests)
5. [Running Tests](#running-tests)
6. [Contributing](#contributing)
7. [License](#license)

### Prerequisites <hr>

Before you begin, ensure you have met the following requirements:

* __Node.js__ (version 12 or later) and npm installed on your machine.
* A code editor like VS Code.

### Installation <hr>

1. Clone the repository: <br>
  > _git clone https://github.com/MasterBranchAcademy/MBA-2024-CYPRESS-AUTOMATION.git_
2. Navigate to the project directory: <br>
  > _cd MBA-2024-CYPRESS-AUTOMATION_
3. Install the dependencies:
  > _npm install_

### Project Structure <hr>
The project follows a structured format for better organization and maintainability:

> * MBA-2024-CYPRESS-AUTOMATION/
>  * cypress/
>    * e2e/
>      * pages/
>         * HomePage.js    
>         * LoginPage.js
>      * tests/
>        * exampleTest.spec.js
>    * fixtures/    
>      * example.json/    
>    * supports/    
>       * commands.js
>       * locators.js
>   * package.json
>   * package-lock.json
>   * cypress.config.js
>   * .gitignore
>   * README.md


> * e2e ## : Test files and data.
> * e2e/tests/: Test files.
> * support/commands.js: Custom commands.
> * support/index.js: Support file.


### Writing Tests <hr>
1. Create a new test file in cypress/integration/tests/:
> // cypress/integration/tests/exampleTest.spec.js <br>
import HomePage from '../../support/pageObjects/HomePage'; <br><br>
 describe('Example Test', () => {  <br>
  const homePage = new HomePage();  <br><br>
> it('should visit the homepage and verify the logo', () => { <br>
    homePage.visit(); <br>
    homePage.getLogo().should('be.visible');  <br>
  }); <br>
});

2. Create a Page Object Model file in cypress/support/pageObjects/:
> // cypress/support/pageObjects/HomePage.js  <br>
class HomePage {  <br>
visit() { <br>
cy.visit('https://automationteststore.com/'); <br>
} <br>
getLogo() { <br>
return cy.get('.logo'); <br>
} <br>
} <br>
export default HomePage;

### Running Tests <hr>
To run the tests, use the following commands:

1. Open Cypress Test Runner:
>   npx cypress open
2. Run Cypress tests in headless mode:
> npx cypress run

### Contributing <hr>
Contributions are welcome! Please fork the repository and create a pull request with your changes.

### License <hr> 
This project is licensed under the MBA License.



