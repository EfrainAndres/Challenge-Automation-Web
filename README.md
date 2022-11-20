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
  - When running the tests, Cypress generate a diferents videos with the step to step of the tests, so this videos we can found in the folder called `cypress/videos/duckduckgo`
    - Search for Michael Jordan and verify:
    
      ![SearchDuckDuckGofeature](https://user-images.githubusercontent.com/20568951/202929285-1adbb33a-3f96-47da-bca5-b850f82da947.gif)
    
    - Settings DuckDuckGo:
    
      ![SettingsDuckDuckGofeature](https://user-images.githubusercontent.com/20568951/202929350-0675af9b-07ab-45b2-911f-dc28c3dec757.gif)

## Test Report
- When running the tests, a folder called `report` is generated and inside the folder there is a file called `index.html` we open this file in the browser and we will be able to see the status of the test execution.
  
  ![test1](https://user-images.githubusercontent.com/20568951/202928653-d19f6f9d-e5bb-4aa6-aca0-b88ed9da65b3.png)
  
  Search for Michael Jordan and verify: 
  
  ![test1](https://user-images.githubusercontent.com/20568951/202928738-f7d0f84c-9b22-4d89-acc1-4f611b7d5e9a.png)
  
  - Test 1: A picture of Michael Jordan is displayed in the search results page 
  
  ![test1](https://user-images.githubusercontent.com/20568951/202928786-fc2afe2b-800e-4a52-8f18-fd54c5cc394b.png)
  
  - Test 2: There is at least one wikipedia page results
  
  ![test2](https://user-images.githubusercontent.com/20568951/202928815-8afa98dd-2fd5-49cf-ac1a-0a4410b5d05a.png)
  
  - Test 3: There is at least one nba.com page result
  
  ![test3](https://user-images.githubusercontent.com/20568951/202928869-c367c7aa-f8c0-40c7-b145-40c9650a7aa0.png)
  
  Settings DuckDuckGo
  
  ![feature2](https://user-images.githubusercontent.com/20568951/202928949-12f645aa-0024-4bf5-b60b-8296afbbba7d.png)
  
  - Test 4: Go to the 'Theme' page of duckduckgo, change the theme to 'Terminal'. Save and go to the main page. Verify the background color has changed.
  
  ![image](https://user-images.githubusercontent.com/20568951/202928974-74f2fec6-aa45-49dd-addf-71f370d79eaf.png)
  
  - Test 5: Go to the 'All settings' page of duckduckgo, change the language to 'Lingvo' and verify the 'Language' label has been changed by 'Lingvo'
  
  ![image](https://user-images.githubusercontent.com/20568951/202929000-a5d1a069-e62b-419c-9a38-bff14df14040.png)

  
