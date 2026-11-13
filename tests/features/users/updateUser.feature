Feature: Update User API

  @smoke
  Scenario: Update user successfully

    Given user provides update payload
    When user sends update user request
    Then status code should be 200
    And user should be updated successfully