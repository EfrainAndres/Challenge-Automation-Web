class AssertPage {
  validateImageResult() {
    return cy.get(".module--about__img").should("be.visible");
  }

  validateWikipediaResult() {
    return cy.get("span").contains("Michael Jordan - Wikipedia");
  }

  validateNbaResult() {
    return cy.get("span").contains("Michael Jordan | Chicago Bulls | NBA.com");
  }

  validateBackgroundColor() {
    return cy
      .get(".site-wrapper")
      .should("have.css", "background-color")
      .and("eq", "rgb(34, 34, 34)");
  }

  validateSelectLanguage(languaje) {
    return cy
    .get('select#setting_kad option:selected')
    .should('have.text', languaje)
  }
}
export default AssertPage;
