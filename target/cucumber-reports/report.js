$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/login_fail.feature");
formatter.feature({
  "name": "Login Feature File",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login fail test for facebook",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "navigate to facebooks page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginFail.navigate_to_facebooks_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "users logged in using username as shambhu.sup@gmail.com and password as 12345",
  "keyword": "When "
});
formatter.match({
  "location": "LoginFail.users_logged_in_using_username_as_username_and_password_as_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign up page should not be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFail.sign_up_page_should_not_be_displayed()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cLogin failed\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefintions.LoginFail.sign_up_page_should_not_be_displayed(LoginFail.java:37)\r\n\tat ✽.sign up page should not be displayed(src/test/java/features/login_fail.feature:7)\r\n",
  "status": "failed"
});
formatter.uri("src/test/java/features/login_pass.feature");
formatter.feature({
  "name": "Login Feature File",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login scenario test for facebook",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "navigate to  facebook page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPass.navigate_to_facebook_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in using username as shambhu.sup@gmail.com and password as 12345",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPass.user_logged_in_using_username_as_username_and_password_as_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPass.home_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/java/features/login_with_multiple_parameter.feature");
formatter.feature({
  "name": "Login Feature File",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login functionality for a social networking site.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FirstTest"
    }
  ]
});
formatter.step({
  "name": "navigate facebook login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter Username as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "username1",
        "password1"
      ]
    },
    {
      "cells": [
        "username2",
        "password2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login functionality for a social networking site.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FirstTest"
    }
  ]
});
formatter.step({
  "name": "navigate facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginMultipleParameters.navigate_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"username1\" and Password as \"password1\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginMultipleParameters.i_enter_Username_as_username_and_Password_as_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginMultipleParameters.login_should_be_unsuccessful()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functionality for a social networking site.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FirstTest"
    }
  ]
});
formatter.step({
  "name": "navigate facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginMultipleParameters.navigate_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Username as \"username2\" and Password as \"password2\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginMultipleParameters.i_enter_Username_as_username_and_Password_as_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginMultipleParameters.login_should_be_unsuccessful()"
});
formatter.result({
  "status": "passed"
});
});