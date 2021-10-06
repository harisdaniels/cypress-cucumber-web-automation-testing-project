/// <reference types="cypress" />

class CustomersList {

    clickAddNewCustomerButton() {
        const addnewCustomerButton = cy.get(".float-right > .btn-primary");
        addnewCustomerButton.click();

        return this;
    }

    searchByEmail(email) {
        const emailField = cy.get("#SearchEmail");
        emailField.clear();
        emailField.type(email);

        return this;
    }

    searchByFirstName(firstName) {
        const firstNameField = cy.get("#SearchFirstName");
        firstNameField.clear();
        firstNameField.type(firstName);

        return this;
    }
    searchByLastName(lastName) {
        const lastNameField = cy.get("#SearchLastName");
        lastNameField.clear();
        lastNameField.type(lastName);

        return this;
    }

    clickSearchCustomerButton() {
        const searchCustomer = cy.get("#search-customers");
        searchCustomer.click();

        return this;
    }

}

export default CustomersList;