package codeRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/features"
        ,glue={"stepDefintions"}
        ,plugin = { "pretty", "html:target/cucumber-reports"},strict = true, monochrome = true
)

 
public class TestRunner {

 }