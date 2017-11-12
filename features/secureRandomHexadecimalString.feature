@ProtractorScenario
Feature: Secure Random Hexadecimal Strings Generator

 Scenario: Input field for the number of random strings and submit button validation
  Given As a user on the home page
  Then I should see an input field for the number of random strings I want to generate
  And  I should see a submit button

  Scenario: Valid Input and expected result
    Given As a user on the home page
    When  I enter "4" and click submit
    Then  It should show me "4" random strings I requested

  Scenario: Invalid Input and message displayed
    Given As a user on the home page
    When  I enter "abc" and click submit
    Then  It should display "Please enter a number"
