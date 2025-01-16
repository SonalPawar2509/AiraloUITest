# Airalo UI Automation Framework

## Project Overview
This project implements a UI automation framework using Playwright and TypeScript for testing Airalo's website.

## Test Case
The test automates the following steps:
1. Navigate to Airalo's homepage.
2. Search for Japan and select it from the autocomplete options.
3. Select the first eSIM package.
4. Verify the package details in the popup.

## Project Structure
1. pages folder contains, locators of the page
2. utils folder contains the configs
3. testData folder contains the required test data to perform the test
4. tests folder has the actual test case execution
5. PageObjects folder contains all the locators required to interact.
6. test-results will be maintained after the execution in this folder.

## Setup Instructions

1. Clone the repository or create a similar structure.
2. Install dependencies:
   
   npm install

# Run tests:
   
  npx playwright test

# Generate an HTML report:
   
  npx playwright show-report

# Implementation Approach
Page Object Model: The test uses the POM design pattern for maintainable and scalable code.
Assertions: Validates package title, coverage, data, validity, and price.
Playwright Configuration: Configured for easy debugging and reliable test execution.


