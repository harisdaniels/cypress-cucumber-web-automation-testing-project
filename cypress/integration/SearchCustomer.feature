Feature: Customers page feature admin-demo.nopcommerce.com

  Background: Steps for Searching Customers
    Given Admin opens URL "https://admin-demo.nopcommerce.com/login"
    When Admin input Email as "admin@yourstore.com" and Password as "admin"
    And Admin clicks Checkbox also clicks on Login button
    Then Admin can view the Dashboard
    When Admin clicks on Side Bar Button
    And Admin clicks on Customers Menu
    And Clicks on Customers Menu Item
    Then Admin can view "Customers / nopCommerce administration" page

  Scenario: Search Customer by Email (Positive)
    When Admin input Customer Email
    And Admin clicks on Search button
    Then Admin should find Email in the Search table
    When Admin clicks on Logout link
    Then Page title should be "Your store. Login"

  Scenario: Search Customer by Name (Positive)
    When Admin input Customer First Name
    And Admin input Customer Last Name
    And Admin clicks on Search button
    Then Admin should find their Name in the Search table
    When Admin clicks on Logout link
    Then Page title should be "Your store. Login"

  Scenario Outline: Search Customer by Email Unavailable Data (Negative)
    When Admin input Customer Unavailable Email "<email>"
    And Admin clicks on Search button
    Then "No data available in table" message should be displayed
    When Admin clicks on Logout link
    Then Page title should be "Your store. Login"

    Examples: 
      | email                |
      | nodata@gmail.com     |

  Scenario Outline: Search Customer by Name Unavailable Data (Negative)
    When Admin input Customer First Name "<firstname>"
    And Admin input Customer Last Name "<lastname>"
    And Admin clicks on Search button
    Then "No data available in table" message should be displayed
    When Admin clicks on Logout link
    Then Page title should be "Your store. Login"

    Examples: 
      | firstname | lastname |
      | Ucup      | Surucup  |
