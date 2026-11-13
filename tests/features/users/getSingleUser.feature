Feature: Single User API

  @smoke
  Scenario: Verify single user details

    Given user sends GET single user request
    When API response is received
    Then status code should be 200
    And single user details should be returned