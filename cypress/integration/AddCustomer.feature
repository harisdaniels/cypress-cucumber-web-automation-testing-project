Feature: Add Customers page feature admin-demo.nopcommerce.com

  Background: Steps for Add Customer
    Given Admin opens URL "https://admin-demo.nopcommerce.com/login"
    When Admin input Email as "admin@yourstore.com" and Password as "admin"
    And Admin clicks Checkbox also clicks on Login button
    Then Admin can view the Dashboard
    When Admin clicks on Side Bar Button
    And Admin clicks on Customers Menu
    And Admin clicks on Customers Menu Item
    When Admin clicks on Add New button
    Then Admin can view "Add a new customer / nopCommerce administration" page

  Scenario: Successful Add New Customer (Positive)
    When Admin input customer info
    And Admin clicks on Save button
    Then Admin can view confirmation message "The new customer has been added successfully."
    When Admin clicks on Logout link
    Then Page title should be "Your store. Login"

  Scenario Outline: UnSuccessful Add New Customer Because Email Is Already REGISTERED (Negative)
    When Admin input customer info with registered email "<email>"
    And Admin clicks on Save button
    Then Admin can view Error message "Email is already registered"
    When Admin clicks on Logout link
    Then Page title should be "Your store. Login"

    Examples: 
      | email                             |
      | victoria_victoria@nopCommerce.com |

  Scenario: Unsuccessful Add New Customer Because Admin Does NOT Input Email (Negative)
    When Admin input customer info without inputing email
    And Admin clicks on Save button
    Then Admin can view error message "Valid Email is required for customer to be in 'Registered' role" and "'Email' must not be empty."
    When Admin clicks on Logout link
    Then Page title should be "Your store. Login"

  Scenario: Unsuccessful Add New Customer Because Admin Inputs WRONG Email Format (Negative)
    When Admin input customer info with inputing Wrong email format
    And Admin clicks on Save button
    Then Admin can view Error message "Please enter a valid email address."
    When Admin clicks on Logout link
    Then Page title should be "Your store. Login"

  Scenario: Unsuccessful Add New Customer Because Admin Selects WRONG Customer Role (Negative)
    When Admin input customer info with Wrong Customer Role
    And Admin clicks on Save button
    Then Admin can view Error message "Add the customer to 'Guests' or 'Registered' customer role"
    When Admin clicks on Logout link
    Then Page title should be "Your store. Login"