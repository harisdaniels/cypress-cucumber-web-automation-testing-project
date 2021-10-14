/// <reference types="cypress" />

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import Login from "../../pages/login";
import Dashboard from "../../pages/dashboard";
import CustomersList from "../../pages/customers";
import AddCustomer from "../../pages/add-customer";

import Generate from "../../pages/utils/generate";

const login = new Login();
const dashboard = new Dashboard();
const customers = new CustomersList();
const addCustomer = new AddCustomer();

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

When("Admin clicks on Side Bar Button", () => {
    cy.wait(3000);
    dashboard.clickNopSideBarPusher();
});

And("Admin clicks on Customers Menu", () => {
    cy.wait(3000);
    dashboard.clickCustomersDropDown();
});

And("Admin clicks on Customers Menu Item", () => {
    cy.wait(3000);
    dashboard.clickCustomersLink();
});

When("Admin clicks on Add New button", () => {
    customers.clickAddNewCustomerButton();
});

Then("Admin can view {string} page", (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
});

// Successful Add New Customer
When("Admin inputs customer info", () => {
    let email = generate.generateEmail();
    addCustomer.inputEmail(email);
    addCustomer.inputPassword("test123");
    addCustomer.inputFirstName("Otong");
    addCustomer.inputLastName("Surotong");
    addCustomer.chooseGender("mAlE");
    addCustomer.inputDOB("1/1/1970");
    addCustomer.inputCompanyName("Si Tampan Otong Inc Ltd");
    addCustomer.clicktaxExempt();
    addCustomer.selectCustomerRole("GuEstS");
    addCustomer.selectNewsLetter("tesT stOre 2");
    addCustomer.selectVendor("veNdOr 1");
    addCustomer.inputAdminComment("This is for testing");
});

// UnSuccessful Add New Customer with Registered Email
When("Admin inputs customer info with registered email {string}", (email) => {
    addCustomer.inputEmail(email);
    addCustomer.inputPassword("victoria123");
    addCustomer.inputFirstName("Victoria");
    addCustomer.inputLastName("Terces");
    addCustomer.chooseGender("FemAlE");
    addCustomer.inputDOB("1/1/1978");
    addCustomer.inputCompanyName("Si Tampan Otong Inc Ltd");
    addCustomer.clicktaxExempt();
    addCustomer.selectCustomerRole("reGisTered");
    addCustomer.selectNewsLetter("your store name");
    addCustomer.selectVendor("veNdOr 2");
    addCustomer.inputAdminComment("This is for testing");
});

// Unsuccessful Add New Customer because Without input email
When("Admin inputs customer info without inputing email", () => {
    addCustomer.inputPassword("victoria123");
    addCustomer.inputFirstName("Victoria");
    addCustomer.inputLastName("Terces");
    addCustomer.chooseGender("FemAlE");
    addCustomer.inputDOB("1/1/1978");
    addCustomer.inputCompanyName("Si Tampan Otong Inc Ltd");
    addCustomer.clicktaxExempt();
    addCustomer.selectCustomerRole("reGisTered");
    addCustomer.selectNewsLetter("your store name");
    addCustomer.selectVendor("veNdOr 2");
    addCustomer.inputAdminComment("This is for testing");
});

// Unsuccessful Add New Customer because input Invalid email
When("Admin inputs customer info with inputing Wrong email format", () => {
    let invalidEmail = generate.generateString();
    addCustomer.inputEmail(invalidEmail);
    addCustomer.inputPassword("test123");
    addCustomer.inputFirstName("Ucup");
    addCustomer.inputLastName("Surucup");
    addCustomer.chooseGender("mAlE");
    addCustomer.inputDOB("1/1/1970");
    addCustomer.inputCompanyName("Si Ganteng Ucup Inc Ltd");
    addCustomer.clicktaxExempt();
    addCustomer.selectCustomerRole("GuEstS");
    addCustomer.selectNewsLetter("tesT stOre 2");
    addCustomer.selectVendor("veNdOr 1");
    addCustomer.inputAdminComment("This is for testing");
});

// Unsuccessful Add New Customer because selecting Wrong Customer Role (Negative)
When("Admin inputs customer info with Wrong Customer Role", () => {
    let email = generate.generateEmail();
    addCustomer.inputEmail(email);
    addCustomer.inputPassword("test123");
    addCustomer.inputFirstName("Otong");
    addCustomer.inputLastName("Surotong");
    addCustomer.chooseGender("mAlE");
    addCustomer.inputDOB("1/1/1970");
    addCustomer.inputCompanyName("Si Tampan Otong Inc Ltd");
    addCustomer.clicktaxExempt();
    addCustomer.selectCustomerRole("administrators");
    addCustomer.selectNewsLetter("tesT stOre 2");
    addCustomer.selectVendor("veNdOr 1");
    addCustomer.inputAdminComment("This is for testing");
});

And("Admin clicks on Save button", () => {
    addCustomer.clickSaveButton();
});

Then("Admin can view confirmation message {string}", (expectedAlert) => {
    cy.get('.alert').should(($alert) => {
        let alert = $alert.text().trim();
        const actualAlert = alert.replace("\n", " ");
        expect(actualAlert).to.contain(expectedAlert);
    });
});

Then("Admin can view Error message {string}", (expectedAlert) => {
    cy.get(".validation-summary-errors > ul > li").should(($validationSummaryError) => {
        const actualAlert = $validationSummaryError.text();
        expect(actualAlert).to.equal(expectedAlert);
    });
});

Then("Admin can view error message {string} and {string}", (expectedAlert, expectedErrorMessage) => {
    cy.get(".alert").should(($alertError) => {
        let alert = $alertError.text().trim();
        const actualAlert = alert.replace("\n", " ");
        expect(actualAlert).to.contain(expectedAlert);
    });

    cy.get(".field-validation-error").should(($messageError) => {
        const actualErrorMessage = $messageError.text();
        expect(actualErrorMessage).to.equal(expectedErrorMessage);
    });
    cy.wait(3000);
});

// Logout
When("Admin clicks on Logout link", () => {
    cy.wait(3000);
    cy.get(".navbar-nav > :nth-child(3) > .nav-link").click();
});

Then("Page title should be {string}", (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
});