/// <reference types="cypress" />

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import Login from "../../pages/login";
import Dashboard from "../../pages/dashboard";
import CustomersList from "../../pages/customers";

const login = new Login();
const dashboard = new Dashboard();
const customers = new CustomersList();

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

And("Clicks on Customers Menu Item", () => {
    cy.wait(3000);
    dashboard.clickCustomersLink();
});

Then("Admin can view {string} page", (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
});


// Search Customer by Email
When("Admin inputs Customer Email", () => {
    customers.searchByEmail("brenda_lindgren@nopCommerce.com")
});

// Search Customer By Name
When("Admin inputs Customer First Name", () => {
    customers.searchByFirstName("Arthur")
});

And("Admin inputs Customer Last Name", () => {
    customers.searchByLastName("Holmes");
});

// Search Customer by Unavailable Email Negative Testing
When("Admin inputs Customer Unavailable Email {string}", (unavailableEmail) => {
    customers.searchByEmail(unavailableEmail);
});

// Search Customer by Unavailable Name Negative Testing
When("Admin inputs Customer First Name {string}", (firstName) => {
    customers.searchByFirstName(firstName)
});

And("Admin inputs Customer Last Name {string}", (lastName) => {
    customers.searchByLastName(lastName);
});

And("Admin clicks on Search button", () => {
    customers.clickSearchCustomerButton();
});

Then("Admin should find Email in the Search table", () => {
    
    cy.get(".odd > :nth-child(2)").should(($email) => {
        const email = $email.text();
        expect(email).to.equal("brenda_lindgren@nopCommerce.com");
    });
    cy.wait(3000);
});

Then("Admin should find their Name in the Search table", () => {
    
    cy.get(".odd > :nth-child(3)").should(($name) => {
        const name = $name.text();
        expect(name).to.equal("Arthur Holmes");
    });
    cy.wait(3000);
});

Then("{string} message should be displayed", (noDataAvailable) => {
    cy.get("#customers-grid > tbody > tr > td").should(($noData) => {
        const noData = $noData.text();
        expect(noData).to.equal(noDataAvailable);
    });
    cy.wait(3000);
});

// Logout
When("Admin clicks on Logout link", () => {
    cy.get(".navbar-nav > :nth-child(3) > .nav-link").click();
});

Then("Page title should be {string}", (expectedTitle) => {
    cy.title().should('eq', expectedTitle);
});