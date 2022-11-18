import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import AssertPage from "../../../support/pageObjects/AssertPage";
import HomePage from "../../../support/pageObjects/HomePage";

const homePage = new HomePage();
const assertPage = new AssertPage();
 
Given(`I open DuckDuckGo page`, () => {
  homePage.goToHomePage();
});

When(`I search for {string}`, (search) => {
  homePage.getSearchInput(search);
  homePage.getSearchButton();
  cy.wait(2000);
});

Then(
  `I verify that an image of Michael Jordan appears on the search results page`,
  () => {
    assertPage.validateImageResult();
  }
);

Then(`I verify that there is at least one wikipedia page results`, () => {
  assertPage.validateWikipediaResult();
});

Then(`I verify that there is at least one nba.com page result`, () => {
  homePage.getMoreResultsButton();
  assertPage.validateNbaResult();
});