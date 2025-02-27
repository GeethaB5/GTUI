@policycenter
Feature: Searching for an account
    As a user, I want to search for an account in policy center

    @search_account
    Scenario: Search for an existing commercial account
        Given the user logs into the policy center as "superuser"
        When the user loads "pc" data "searchAccount_01" from json "SearchAccountTestData"
        And the user searches for an account with account number
        Then the account details are loaded