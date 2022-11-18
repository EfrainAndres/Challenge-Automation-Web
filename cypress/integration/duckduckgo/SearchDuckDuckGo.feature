Feature: Search for Michael Jordan in DuckDuckGo

  I want to open DuckDuckGo page

  Background:
    Given I open DuckDuckGo page
    When I search for "Michael Jordan"

  Scenario: Searching Michael Jordan and verify results image
    Then I verify that an image of Michael Jordan appears on the search results page

  Scenario: Searching Michael Jordan and verify there is at least one wikipedia page results
    Then I verify that there is at least one wikipedia page results

  Scenario: Searching Michael Jordan and verify there is at least one nba.com page result
    Then I verify that there is at least one nba.com page result
