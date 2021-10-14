Feature: Login page feature admin-demo.nopcommerce.com

  Background: Steps to Login Page
    Given Admin opens URL "https://admin-demo.nopcommerce.com/login"

  Scenario: Successful Login Because Admin Inputs Valid Credentials (Positive)
    When Admin inputs Email as "admin@yourstore.com" and Password as "admin"
    And Admin clicks Checkbox also clicks on Login button
    Then Admin can view "Dashboard / nopCommerce administration" page
    When Admin clicks on Logout link
    Then Admin can view "Your store. Login" page

  Scenario: Unsuccessful Login Because Admin Inputs Invalid Password (Negative)
    When Admin inputs Email as "admin@yourstore.com" and Password as "invalidpassword"
    And Admin clicks Checkbox also clicks on Login button
    Then Error message "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect" should be displayed

  Scenario Outline: Unsuccessful Login Because Admin Inputs Invalid Credentials Wrong Email and Wrong Password (Negative)
    When Admin inputs Email as "<email>" and Password as "<password>"
    And Admin clicks Checkbox also clicks on Login button
    Then Error message "Login was unsuccessful. Please correct the errors and try again.No customer account found" should be displayed

    Examples: 
      | email                | password |
      | admin@yourstore      | admin    |
      | admin@gmail.com      | admin123 |
  
  Scenario: Unsuccessful Login Because Admin Inputs Valid Email But Does NOT Input password (Negative)
    When Admin inputs Email as "admin@yourstore.com" and does NOT input Password
    And Admin clicks Checkbox also clicks on Login button
    Then Error message "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect" should be displayed

  Scenario: Unsuccessful Login Because Admin Inputs Invalid Email And Does NOT Input Password (Negative)
    When Admin inputs invalid Email and does NOT input Password
    And Admin clicks Checkbox also clicks on Login button
    Then Error message "Login was unsuccessful. Please correct the errors and try again.No customer account found" should be displayed

  Scenario: Unsuccessful Login Because Admin Inputs Does NOT Input Anything (Negative)
    When Admin does NOT input anything on Email field and Password field
    And Admin clicks Checkbox also clicks on Login button
    Then Email error message "Please enter your email" should be displayed

  Scenario: Unsuccessful Login Because Admin Does NOT Input Email But Input Valid password (Negative)
    When Admin does NOT input Email and input Password as "admin"
    And Admin clicks Checkbox also clicks on Login button
    Then Email error message "Please enter your email" should be displayed

  Scenario: Unsuccessful Login Because Admin Inputs WRONG Email Format (Negative)
    When Admin inputs wrong Email format but input valid Password as "admin"
    And Admin clicks Checkbox also clicks on Login button
    Then Email error message "Wrong email" should be displayed