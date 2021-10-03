/// <reference types="cypress" />

class Login {
    
    visitWebsite(url) {
        cy.visit(url);
        return this;
    }

    clearEmailField() {
        const emailField = cy.get("#Email");
        emailField.clear();

        return this;
    }

    fillEmail(email) {
        const emailField = cy.get("#Email");
        emailField.type(email);

        return this;
    }

    clearPasswordField() {
        const passwordField = cy.get("#Password");
        passwordField.clear();

        return this;
    }

    fillPassword(password) {
        const passwordField = cy.get("#Password");
        passwordField.type(password);

        return this;
    }

    clickRememberMeCheckBox() {
        const rememberMeCheckBox = cy.get("input[type='checkbox']");
        rememberMeCheckBox.click();

        return this;
    }

    clickLoginButton() {
        const loginButton = cy.get("button[type='submit']");
        loginButton.click();

        return this;
    }

}

export default Login;