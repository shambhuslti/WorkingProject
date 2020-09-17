Feature: Login Feature File

@SmokeTest
Scenario: Login fail test for facebook
Given navigate to facebooks page
When users logged in using username as shambhu.sup@gmail.com and password as 12345
Then sign up page should not be displayed
