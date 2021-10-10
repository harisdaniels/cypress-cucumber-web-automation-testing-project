# This Is My Dummy-Project of Web Automation Testing Using Cypress and Cucumber

## Project Information
For this project, i use:
- Cypress (https://www.cypress.io/)
- Cypress Cucumber Preprocessor (https://www.npmjs.com/package/cypress-cucumber-preprocessor)
- Multiple Cucumber HTML Reporter (https://www.npmjs.com/package/multiple-cucumber-html-reporter)

### Cypress
Fast, easy and reliable testing for anything that runs in a browser.

### Cypress Cucumber Preprocessor
The cypress-cucumber-preprocessor adds support for using feature files when testing with Cypress.

### Multiple Cucumber HTML Reporter
Multiple Cucumber HTML Reporter is a reporting module for Cucumber to parse the JSON output to a beautiful report. 
The difference between all the other reporting modules on the market is that this module has:
- A quick overview of all tested features and scenarios
- A features overview that can hold multiple runs of the same feature / runs of the same feature on different browsers / devices
- A features overview that can be searched / filtered / sorted
- A feature(s) overview with metadata of the used browser(s) / devices

## Preparation
- Clone from this repo https://github.com/harisdaniels/cypress-cucumber-web-automation-testing-project.git. 
- The steps of cloning Github Repository, can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
- Or, you can download this repository as ZIP file

### Setup
For windows and mac, you can [download node](https://nodejs.org/en/) and install.

### Package Installation
Before start development and running the test you need to install packages that needed for this simple project. To install them, you need to do these step:

- Go to your project repo directory in your local machine.
- Open your terminal or Git Bash (if you have this)
- Type `npm install` in your terminal and press ENTER on your keyboard to install all dependecies
- Wait, and done

### How to Organize the Test
To learn to organize the test completely, you can learn from [here](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

## Test Structure
- Use Gherkin syntax: a set of special [keywords](https://cucumber.io/docs/gherkin/reference/#keywords) to give structure and meaning to executable specifications.
  Each keyword is translated to many spoken languages; in this reference, Gherkin use English.
  Either spaces or tabs may be used for indentation. The recommended indentation level is two spaces. Here is an example:
  
  ```
  Feature: Login page feature admin-demo.nopcommerce.com

  Scenario: Successful Login with Valid Credentials
    Given User opens URL "https://admin-demo.nopcommerce.com/login"
    When User enters Email as "admin@yourstore.com" and Password as "admin"
    And Clicks on Login button
    Then Page title should be "Dashboard / nopCommerce administration"
    When User clicks on Logout link
    Then Page title should be "Your store. Login"
  ```


- Use Step Definition is a method with an [expression](https://cucumber.io/docs/cucumber/step-definitions/#expressions) that links it to one or more Gherkin steps. 
  When Cucumber executes a Gherkin step in a scenario, it will look for a matching step definition to execute.
  To illustrate how this works, look at the following Gherkin Scenario step definition:
  
  ```
  /// <reference types="cypress" />

  import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
  import Login from "../../pages/login";

  const login = new Login();

  Given("User opens URL {string}", (url) => {
    login.visitWebsite(url);
  });

  When("User enters Email as {string} and Password as {string}", (email, password) => {
    login.fillEmail(email);
    login.fillPassword(password);
  });

  And("User clicks Checkbox also clicks on Login button", () => {
    login.clickRememberMeCheckBox();
    login.clickLoginButton();
  });

  Then("Page title should be {string}", (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
    cy.wait(3000);
  });

  When("User clicks on Logout link", () => {
    cy.get(".navbar-nav > :nth-child(3) > .nav-link").click();
  });

  Then("Page title should be {string}", (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
  });
  ```

## Run Test
To run the test, you need to follow these steps
- First, open terminal in your Code Editor by clicking ctrl + `
- Then type `npx cypress open` and press ENTER on your keyboard
  
- Wait until Cypress Test Runner open up
- Then, click the `.feature` file to run the test
  
  ![Screenshot_1](https://user-images.githubusercontent.com/74105380/135406692-d39f743b-4e3b-413f-8d59-0e9ce6b1dc48.jpg)
- Or, to run all feature files at once, you can type `npm run cy:test` or `npx cypress run --headed --spec 'cypress/integration/*.feature'` and press ENTER

### The Tests are Executed  

#### `Login.feature` file
https://user-images.githubusercontent.com/74105380/135705084-065cde46-49c8-4340-9018-b8e3f608e714.mp4

#### `AddCustomer.feature` file
https://user-images.githubusercontent.com/74105380/135705090-6f6b80f0-fb4c-46f4-bb8c-13ba1684110d.mp4

#### `SearchCustomer.feature` file
https://user-images.githubusercontent.com/74105380/135705094-8d3d159c-461a-4266-a01e-2e28669d6b60.mp4


## Test Report by Multiple Cucumber HTML Reporter
After run the test, you can also see the result. 
To know how to configure it, you can learn from [here](https://kailash-pathak.medium.com/generate-cucumber-html-report-in-cypress-3691d596ef19).
And to generate the report, simply run .js file (cucumber-html-report.js) created in above steps. command is below

`node cypress/cucumber-html-report.js`

Copy the html file and paste it to search bar of your browser
![Screenshot_2](https://user-images.githubusercontent.com/74105380/135413699-92df061b-dc7d-4a3c-81de-ca2d0c0ed720.jpg)

### Test Report Sample
![Screenshot_1](https://user-images.githubusercontent.com/74105380/135705219-dc9cdfe9-3ab0-477f-9871-2042255b9c09.jpg)
  
# All is Done!
