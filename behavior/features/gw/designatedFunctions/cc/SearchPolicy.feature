@claimcenter
Feature: Searching for a policy
    As a user I want to for a policy in Claim center

    @SearchPolicy_cc
    Scenario Outline: Seaching with policy from Search Claims
        Given the user logs into the claims center
        When the user loads "cc" data "defaultDataSet" from json "SearchPolicyTestData"
        And the user searches for the policy in Search Claims
        Then the claim details are loaded successfully