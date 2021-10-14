/// <reference types="cypress" />

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import Login from "../../pages/login";

import Generate from "../../pages/utils/generate";

const login = new Login();
const generate = new Generate();

Given("Admin opens URL {string}", (url) => {
    login.visitWebsite(url);
});

When("Admin inputs Email as {string} and Password as {string}", (email, password) => {
    login.clearEmailField();
    login.fillEmail(email);

    login.clearPasswordField();
    login.fillPassword(password);
});

And("Admin clicks Checkbox also clicks on Login button", () => {
    login.clickRememberMeCheckBox();
    login.clickLoginButton();
});

// Logout
When("Admin clicks on Logout link", () => {
    cy.get(".navbar-nav > :nth-child(3) > .nav-link").click();
});

// Negative (Admin enters Email and does NOT input Password)
When("Admin inputs Email as {string} and does NOT input Password", (email) => {
    login.clearEmailField();
    login.fillEmail(email);

    login.clearPasswordField();
});

// Negative (Admin input Invalid Email and does NOT input Password)
When("Admin inputs invalid Email and does NOT input Password", () => {
    const invalidEmail = generate.generateEmail();

    login.clearEmailField();
    login.fillEmail(invalidEmail);

    login.clearPasswordField();
});

// Negative (Without input anything)
When("Admin does NOT input anything on Email field and Password field", () => {
    login.clearEmailField();
    login.clearPasswordField();
});

// Negative (Admin does NOT input Email but input Password )
When("Admin does NOT input Email and input Password as {string}", (password) => {
    login.clearEmailField();

    login.clearPasswordField();
    login.fillPassword(password);
});

// Negative (Admin input Wrong Email Format input Password)
When("Admin inputs wrong Email format but input valid Password as {string}", (password) => {
    const wrongEmailFormat = generate.generateString();
    login.clearEmailField();
    login.fillEmail(wrongEmailFormat);

    login.clearPasswordField();
    login.fillPassword(password);
});

Then("Admin can view {string} page", (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
});

// Negative
Then("Error message {string} should be displayed", (expectedErrorMessage) => {
    cy.get(".message-error").should(($messageError) => {
        let errorMessage = $messageError.text();
        let actualErrorMessage = errorMessage.replace("\n", "");
        expect(actualErrorMessage).to.equal(expectedErrorMessage);
    });
    cy.wait(3000);
});

Then("Email error message {string} should be displayed", (expectedEmailError) => {
    // .field-validation-error
   cy.get('#Email-error').then(($emailError) => {
        const actualEmailError = $emailError.text();
        expect(actualEmailError).to.equal(expectedEmailError);
        cy.wait(3000);
   });

   /*
    cy.get("#Email-error").invoke('text').then(($emailError) => {
        const actualEmailError = $emailError;
        expect(actualEmailError).to.equal(expectedEmailError);
        cy.log(actualEmailError);
        cy.wait(3000);
    });
    */
});