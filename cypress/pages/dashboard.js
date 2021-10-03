/// <reference types="cypress" />

class Dashboard {

    clickNopSideBarPusher() {
        const nopSideBarPusher = cy.get("#nopSideBarPusher");
        nopSideBarPusher.click();

        return this;
    }

    clickCustomersDropDown() {
        const customersDropDown = cy.get(".nav-pills > :nth-child(4) > [href='#']");
        customersDropDown.click();

        return this;
    }

    clickCustomersLink() {
        const customersLink = cy.get(".menu-open > .nav > :nth-child(1) > .nav-link > p");
        customersLink.click();

        return this;
    }

}

export default Dashboard;