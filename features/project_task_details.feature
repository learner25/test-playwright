Feature: Verify Asana Project Task Details

  Scenario: Navigate and verify project task details
    Given I am on the login page
    When I login with valid credentials
    Then I should see the dashboard

    Given I have test data for project tasks
    When I navigate to the section "<navigationPath>"
    Then I should see the column "<column>"
    And I should see the task "<task>" with tags "<tags>"
