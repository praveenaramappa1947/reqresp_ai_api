Feature: Users API

@smoke
Scenario: Verify users are returned successfully
 Given user sends GET user request
 When API response is received
 Then verify the response status code is 200
 And response should contain a list of users