@policycenter

Feature: New Submission to Bind
    As a user, I want to perform Bind Policy transaction in policy center

    @bind_submission
    Scenario: Creating personal auto bind
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "newSubmission_01" from json "NewSubmissionTestData"
        And the user creates personal account
        And the user bind the new submission
        Then the policy is bound successfully