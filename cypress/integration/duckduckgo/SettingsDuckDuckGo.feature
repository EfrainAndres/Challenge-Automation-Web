Feature: Settings Theme and language DuckDuckGo

  I want to open DuckDuckGo page

  Background:
    Given I open DuckDuckGo page
    When I select the settings button

  Scenario: Changing the background color to DuckDuckGo
    When I select the "Themes" option
    And I select Terminal theme and Save and Exit
    Then I verify the background color has changed

  Scenario: Changing the language to DuckDuckGo
    And I select the "All Settings" option
    And I select "Lietuvių (Lietuva)" language
    Then I verify the language label has changed by "Lietuvių (Lietuva)"

