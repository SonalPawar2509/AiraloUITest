"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const airaloHomePage_1 = require("../pages/airaloHomePage");
const airaloTestData_1 = require("../testData/airaloTestData");
(0, test_1.test)('Verify Japan eSIM first Package on Airalo', async ({ page }) => {
    const homePage = new airaloHomePage_1.AiraloHomePage(page);
    // Navigate to Airalo Home Page
    await homePage.navigateToHomePage();
    // Search for "Japan"
    await homePage.searchForDestination('Japan');
    // Select the first eSIM package
    await homePage.selectFirstESIMPackage();
    // Verify Popup Details
    const packageDetails = await homePage.verifyPopupDetails();
    // Assertions for package details
    //expect(packageDetails.title?.trim()).toBe('Moshi Moshi');
    //expect(packageDetails.coverage?.trim()).toBe('Japan');
    //expect(packageDetails.data?.trim()).toBe('500 MB');
    //expect(packageDetails.validity?.trim()).toBe('3 Days');
    //expect(packageDetails.price?.trim()).toBe('$0.00 USD');
    // Assertions for package details
    (0, test_1.expect)(packageDetails.title?.trim()).toBe(airaloTestData_1.airaloTestData.japanFirstPackage.title);
    (0, test_1.expect)(packageDetails.coverage?.trim()).toBe(airaloTestData_1.airaloTestData.japanFirstPackage.coverage);
    (0, test_1.expect)(packageDetails.data?.trim()).toBe(airaloTestData_1.airaloTestData.japanFirstPackage.data);
    (0, test_1.expect)(packageDetails.validity?.trim()).toBe(airaloTestData_1.airaloTestData.japanFirstPackage.validity);
    (0, test_1.expect)(packageDetails.price?.trim()).toBe(airaloTestData_1.airaloTestData.japanFirstPackage.price);
});
(0, test_1.test)('Verify Japan eSIM second Package on Airalo', async ({ page }) => {
    const homePage = new airaloHomePage_1.AiraloHomePage(page);
    // Navigate to Airalo Home Page
    await homePage.navigateToHomePage();
    // Search for "Japan"
    await homePage.searchForDestination('Japan');
    // Select the first eSIM package
    await homePage.selectSecondESIMPackage();
    // Verify Popup Details
    const packageDetails = await homePage.verifyPopupDetails();
    // Assertions for package details
    // expect(packageDetails.title?.trim()).toBe('Moshi Moshi');
    //expect(packageDetails.coverage?.trim()).toBe('Japan');
    //expect(packageDetails.data?.trim()).toBe('500 GB');
    // expect(packageDetails.validity?.trim()).toBe('7 Days');
    //expect(packageDetails.price?.trim()).toBe('$4.50 USD');
    (0, test_1.expect)(packageDetails.title?.trim()).toBe(airaloTestData_1.airaloTestData.japanSecondPackage.title);
    (0, test_1.expect)(packageDetails.coverage?.trim()).toBe(airaloTestData_1.airaloTestData.japanSecondPackage.coverage);
    (0, test_1.expect)(packageDetails.data?.trim()).toBe(airaloTestData_1.airaloTestData.japanSecondPackage.data);
    (0, test_1.expect)(packageDetails.validity?.trim()).toBe(airaloTestData_1.airaloTestData.japanSecondPackage.validity);
    (0, test_1.expect)(packageDetails.price?.trim()).toBe(airaloTestData_1.airaloTestData.japanSecondPackage.price);
});
