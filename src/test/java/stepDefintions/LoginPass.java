package stepDefintions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginPass {

	WebDriver webDriver = null;

	@Given("navigate to  facebook page")
	public void navigate_to_facebook_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\chromeDriver\\chromedriver.exe");
		webDriver = new ChromeDriver();
		webDriver.get("https://www.facebook.com/");
	}
	
	
	@When("^user logged in using username as (.*) and password as (.*)$")
	public void user_logged_in_using_username_as_username_and_password_as_password(String username, String password) {
		webDriver.findElement(By.id("email")).sendKeys(username);
		webDriver.findElement(By.id("pass")).sendKeys(password);
		webDriver.findElement(By.xpath("//*[@id=\"u_0_2\"]")).click();
		webDriver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@Then("^home page should be displayed$")
	public void home_page_should_be_displayed() {
		String expectedText = "Sign Up";
		String actualText = webDriver.findElement(By.name("websubmit")).getText();
		System.out.println("<<<<<<<<<<<<< Login pass step definition>>>>>>>");
		Assert.assertTrue("Login successful", expectedText.equals(actualText));
		webDriver.close();
	}
	
}
