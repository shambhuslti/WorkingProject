package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class PageModel {

	private static WebElement element = null;
	
	public static WebElement txt_email(WebDriver driver)
	{
		element = driver.findElement(By.id("email"));
		return element;
	}
	
	public static WebElement txt_password(WebDriver driver)
	{
		element = driver.findElement(By.id("pass"));
		return element;
	}
	
	public static WebElement button_signIn(WebDriver driver)
	{
		element = driver.findElement(By.xpath("//*[@id=\"u_0_2\"]"));
		return element;
	}
	
	public static WebElement button_submit(WebDriver driver)
	{
		element = driver.findElement(By.name("websubmit"));
		return element;
	}
}
