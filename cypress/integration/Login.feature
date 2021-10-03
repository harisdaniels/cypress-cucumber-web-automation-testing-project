Feature: Login page feature admin-demo.nopcommerce.com

  Background: Steps for Searching Customers
    Given Admin opens URL "https://admin-demo.nopcommerce.com/login"

  Scenario: Successful Login with Valid Credentials (Positive)
    When Admin input Email as "admin@yourstore.com" and Password as "admin"
    And Admin clicks Checkbox also clicks on Login button
    Then Page title should be "Dashboard / nopCommerce administration"
    When Admin clicks on Logout link
    Then Page title should be "Your store. Login"

  Scenario: UnSuccessful Login with Invalid Password (Negative)
    When Admin input Email as "admin@yourstore.com" and Password as "admin123"
    And Admin clicks Checkbox also clicks on Login button
    Then Error message "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect" should be displayed

  Scenario Outline: UnSuccessful Login with Invalid Credentials Wrong Email and Wrong Password (Negative)
    When Admin input Email as "<email>" and Password as "<password>"
    And Admin clicks Checkbox also clicks on Login button
    Then Error message "Login was unsuccessful. Please correct the errors and try again.No customer account found" should be displayed

    Examples: 
      | email                | password |
      | admin@gmail.com      | admin    |
      | admin@gmail.com      | admin123 |

  Scenario: UnSuccessful Login Without inputing anything (Negative)
    When Admin does NOT input anything on Email field and Password field
    And Admin clicks Checkbox also clicks on Login button
    Then Email error message "Please enter your email" should be displayed

  Scenario: UnSuccessful Login by Inputing Valid Email but without inputing password (Negative)
    When Admin input Email as "admin@yourstore.com" and does NOT input Password
    And Admin clicks Checkbox also clicks on Login button
    Then Error message "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect" should be displayed

  Scenario: UnSuccessful Login without inputing Email but inputing Valid password (Negative)
    When Admin does NOT input Email and input Password as "admin"
    And Admin clicks Checkbox also clicks on Login button
    Then Email error message "Please enter your email" should be displayed
    
  Scenario: UnSuccessful Login by inputing Invalid Email and without inputing password (Negative)
    When Admin input Invalid Email and does NOT input Password
    And Admin clicks Checkbox also clicks on Login button
    Then Error message "Login was unsuccessful. Please correct the errors and try again.No customer account found" should be displayed

  Scenario: UnSuccessful Login by inputing Wrong Email Format (Negative)
    When Admin input Wrong Email Format and input Password as "admin"
    And Admin clicks Checkbox also clicks on Login button
    Then Email error message "Wrong email" should be displayed