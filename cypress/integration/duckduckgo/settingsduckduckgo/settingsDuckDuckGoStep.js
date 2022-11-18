import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import AssertPage from "../../../support/pageObjects/AssertPage";
import HomePage from "../../../support/pageObjects/HomePage";

const homePage = new HomePage();
const assertPage = new AssertPage();
 
Given(`I open DuckDuckGo page`, () => {
  homePage.goToHomePage();
});

When(`I select the settings button`, () => {
  homePage.getMenuButton();
});

When(`I select the {string} option`, option => {
  homePage.getOptionsMenu(option);
});

When(`I select Terminal theme and Save and Exit`, () => {
  homePage.getTerminalTheme();
  homePage.getSaveThemeButton();
});

Then(`I verify the background color has changed`, () => {
  assertPage.validateBackgroundColor();
});

When(`I select {string} language`, language => {
  homePage.getSelectLanguage(language);
  cy.wait(2000);
});

Then(`I verify the language label has changed by {string}`, language => {
  assertPage.validateSelectLanguage(language);
});