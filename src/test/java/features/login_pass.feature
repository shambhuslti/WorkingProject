Feature: Login Feature File

@RegressionTest
Scenario: Login scenario test for facebook
Given navigate to  facebook page
When user logged in using username as shambhu.sup@gmail.com and password as 12345
Then home page should be displayed
