package stepDefintions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utility.Utility;

public class LoginMultipleParameters {

	WebDriver driver = null;

	@Given("^navigate facebook login page$")
	public void navigate_facebook_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\chromeDriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");  
	   
	}

	@When("^I enter Username as \\\"([^\\\"]*)\\\" and Password as \\\"([^\\\"]*)\\\"$")
	public void i_enter_Username_as_username_and_Password_as_password(String userName, String password) {
		driver.findElement(By.id("email")).sendKeys(userName);
		driver.findElement(By.id("pass")).sendKeys(password);
		driver.findElement(By.xpath("//*[@id=\"u_0_2\"]")).click();
	}

	@Then("^login should be unsuccessful$")
	public void login_should_be_unsuccessful() throws Exception {
		if (driver.getCurrentUrl().equalsIgnoreCase("https://www.facebook.com/login.php?login_attempt=1&lwv=110")) {
			System.out.println("if block");
		} else {
			System.out.println("else block");
			Utility.takeSnapShot(driver, System.getProperty("user.dir") + "\\test.jpg");
		}
		System.out.println("<<<<<<<<<<<<< parameterized scenario>>>>>>>");
		driver.close();
	}
	
	
}
