package stepDefintions;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static pageObject.PageModel.*;

public class LoginFail {

	WebDriver webDriver = null;

	@Given("^navigate to facebooks page$")
	public void navigate_to_facebooks_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\chromeDriver\\chromedriver.exe");
		webDriver = new ChromeDriver();
		webDriver.get("https://www.facebook.com/");
	}
	
	
	@When("^users logged in using username as (.*) and password as (.*)$")
	public void users_logged_in_using_username_as_username_and_password_as_password(String username, String password) {
		 txt_email(webDriver).sendKeys(username);
		 txt_password(webDriver).sendKeys(password);
		 button_signIn(webDriver).click();;
		 webDriver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@Then("^sign up page should not be displayed$")
	public void sign_up_page_should_not_be_displayed() {
		String expectedText = "Sign Up1";
		String actualText = button_submit(webDriver).getText();
		System.out.println("<<<<<<<<<<<<< Login Fail step definition>>>>>>>");
		Assert.assertEquals("Login failed", expectedText.equals(actualText));
		webDriver.close();
	}
	
}
