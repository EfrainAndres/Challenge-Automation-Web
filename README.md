# Southern Web Automation Challenge

Build a small testing framework for web pages
- Add the following tests for DuckDuckGo — Privacy, simplified.
  - Search for Michael Jordan and verify:
  - A picture of Michael Jordan is displayed in the search results page
  - There is at least one wikipedia page results
  - There is at least one nba.com page result
  - Go to the 'Theme' page of duckduckgo, change the theme to 'Terminal'. Save and go to the main page. Verify the background color has changed.
  - Go to the 'All settings' page of duckduckgo, change the language to 'Lingvo' and verify the 'Language' label has been changed by 'Lingvo'

## Installation
- The code has been tested on Node v14.8.0 and Windows 11
- `Cypress`, `cypress-cucumber-preprocessor` and `multiple-cucumber-html-reporter` libraries were used

1. Clone repository:
```
git clone https://github.com/EfrainAndres/Challenge-Automation-Web.git
```

2. Install Node:
 - Follow the next url: https://nodejs.org/en/download/
 - Install node and add enviroment path to node

3. Install the dependencies:
```
npm install
```

4. Running the tests:
```
npm test
```

## Test Report
- When running the tests, a folder called `report` is generated and inside the folder there is a file called `index.html` we open this file in the browser and we will be able to see the status of the test execution.
  
  Search for Michael Jordan and verify: 
  
  - Test 1: A picture of Michael Jordan is displayed in the search results page
  
  - Test 2: There is at least one wikipedia page results
  
  - Test 3: There is at least one nba.com page result
  
  Settings DuckDuckGo
  
  - Test 4: Go to the 'Theme' page of duckduckgo, change the theme to 'Terminal'. Save and go to the main page. Verify the background color has changed.
  
  - Test 5: Go to the 'All settings' page of duckduckgo, change the language to 'Lingvo' and verify the 'Language' label has been changed by 'Lingvo'
  
