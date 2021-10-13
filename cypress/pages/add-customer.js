/// <reference types="cypress" />

class AddCustomer {

    inputEmail(email) {
        
        const emailField = cy.get("input[id='Email']");
        emailField.type(email);

        return this;
    }

    inputPassword(password) {
        const passwordField = cy.get("input[id='Password']");
        passwordField.type(password);

        return this;
    }

    inputFirstName(firstName) {
        const firstNameField = cy.get("input[id='FirstName']");
        firstNameField.type(firstName);

        return this;
    }

    inputLastName(lastName) {
        const lastNameField = cy.get("input[id='LastName']");
        lastNameField.type(lastName);

        return this;
    }

    chooseGender(gender) {
        if(gender.toLowerCase() === "Male".toLowerCase()) {
            cy.get("input[id='Gender_Male']").click();
		}
		else if (gender.toLowerCase() === "Female".toLowerCase()) {
			cy.get("input[id='Gender_Female']").click();
		} else {
            cy.get("input[id='Gender_Male']").click();
        }

        return this;
    }

    inputDOB(dob) {
        const dobField = cy.get("input[id='DateOfBirth']");
        dobField.type(dob);

        return this;
    }

    inputCompanyName(companyName) {
        const companyNameField = cy.get("input[id='Company']");
        companyNameField.type(companyName);

        return this;
    }

    clicktaxExempt() {
        const taxExemptCheckBox = cy.get("input[id='IsTaxExempt']");
        taxExemptCheckBox.click();

        return this;
    }

    selectNewsLetter(newsLetter) {
        cy.get("#SelectedNewsletterSubscriptionStoreIds").select("1", {force:true});

        if (newsLetter.toLowerCase() === "Your store name".toLowerCase()) {
            cy.get("#SelectedNewsletterSubscriptionStoreIds_listbox > [data-offset-index='0']").click();
        } else if (newsLetter.toLowerCase() === "Test store 2".toLowerCase()) {
            cy.get("#SelectedNewsletterSubscriptionStoreIds_listbox > [data-offset-index='1']").click();
        } else {
            cy.get("#SelectedNewsletterSubscriptionStoreIds_listbox > [data-offset-index='0']").click();
        }

        return this;
    }

    selectCustomerRole(role) {
        cy.get("span[title='delete']").click({ multiple: true });

        if (role.toLowerCase() === "Guests".toLowerCase()) {
            cy.get("#SelectedCustomerRoleIds_listbox > li:nth-child(3)").click({force:true});
        } else if (role.toLowerCase() === "Registered".toLowerCase()) {
            cy.get("#SelectedCustomerRoleIds_listbox > li:nth-child(4)").click({force:true});
        } else if (role.toLowerCase() === "Administrators".toLowerCase()) {
            cy.get("#SelectedCustomerRoleIds_listbox > li:nth-child(1)").click({force:true});
        } else if (role.toLowerCase() === "Forum Moderators".toLowerCase()) {
            cy.get("#SelectedCustomerRoleIds_listbox > li:nth-child(2)").click({force:true});
        } else if (role.toLowerCase() === "Vendors".toLowerCase()) {
            cy.get("#SelectedCustomerRoleIds_listbox > li:nth-child(5)").click({force:true});
        } else {
            cy.get("#SelectedCustomerRoleIds_listbox > li:nth-child(4)").click({force:true});
        }
        
        return this;
    }

    selectVendor(vendor) {

        if (vendor.toLowerCase() === "Vendor 1".toLowerCase()){
            //cy.get("#VendorId > option:nth-child(2)").click({force: true});
            cy.get("#VendorId").select("1");
        } else if (vendor.toLowerCase() === "Vendor 2".toLowerCase()) {
            //cy.get("#VendorId > option:nth-child(3)").click({force: true});
            cy.get("#VendorId").select("2");
        } else {
            cy.get("#VendorId").select("0");
        }

        return this;

    }

    inputAdminComment(comment) {
        const adminComment = cy.get("textarea[id='AdminComment']");
        adminComment.type(comment);

        return this;
    }

    clickSaveButton() {
        const saveButton = cy.get("button[name='save']");
        saveButton.click();

        return this;
    }

}

export default AddCustomer;