Feature: Test the protractor website

@TC1
Scenario: To check the view on github button functionality

Given Open "protractor" website
When User click on "View on GitHub" button
Then Verify that User is redirected to the "GitHub" page

@TC2
Scenario: To check the Auction button functionality
Given Open "osians" website
When User click on "Auction" button
Then Verify that User is redirected to the "Auction" page