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

    searchCustomerByEmail(email) {
        let flag;
        let searchedEmail = cy.get("#customers-grid > tbody > tr > td:nth-child(2)").each(function($element) {
            const getEmail = $element.text();
            cy.log(getEmail);
            if (getEmail === email) {
                flag = true;
                return false;
            } else {
                flag = false;
            }
        });
        flag = Boolean(searchedEmail);

        return flag;
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

    searchCustomerByName(firstName, lastName) {
        let flag;
        let searchedName = cy.get("#customers-grid > tbody > tr > td:nth-child(3)").each(function($element) {
            let fullName = $element.text();
            cy.log(fullName);
            let names = fullName.split(" ");
            cy.log(names);

            if (names[0] === firstName && names[1] === lastName) {
                flag = true;
                return false;
            } else {
                flag = false;
            }
        });
        flag = Boolean(searchedName);

        return flag;
    }

    clickSearchCustomerButton() {
        const searchCustomer = cy.get("#search-customers");
        searchCustomer.click();

        return this;
    }

}

export default CustomersList;