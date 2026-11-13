Feature: Create User API

@smoke
Scenario: Create user successfully
 Given user provide valid user payload
 When user sends POST create user request
 Then status code should be 201
 And user should be created successfully
