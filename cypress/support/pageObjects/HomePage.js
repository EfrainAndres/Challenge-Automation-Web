class HomePage {

    url = "https://duckduckgo.com";

    goToHomePage() {
        return cy.visit('https://duckduckgo.com');
    }

    getSearchInput(search) {
        return cy.get('input[name="q"]').type(search);
    }

    getSearchButton() {
        return cy.get('input[id="search_button_homepage"]').click()
    }

    getMoreResultsButton() {
        return cy.get(".result--more__btn").click();
    }

    getMenuButton() {
        return cy.get(".header__button--menu").click();
    }

    getTerminalTheme() {
        return cy.contains("Terminal").click();
    }

    getSaveThemeButton() {
        return cy.get("a:visible").contains("Save and Exit").click();
    }

    getOptionsMenu(link) {
        return cy.contains(link).click();
    }

    getSelectLanguage(languaje) {
        return cy
        .get("#setting_kad")
        .select(languaje)
        .invoke('val')
    }

}
export default HomePage