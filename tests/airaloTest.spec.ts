import { test, expect } from '@playwright/test';
import { AiraloHomePage } from '../pages/airaloHomePage';
import { airaloTestData } from '../testData/airaloTestData';

test('Verify Japan eSIM first Package on Airalo', async ({ page }) => {
  const homePage = new AiraloHomePage(page);

  // Navigate to Airalo Home Page
  await homePage.navigateToHomePage();

  // Search for "Japan"
  await homePage.searchForDestination('Japan');

  // Select the first eSIM package
  await homePage.selectFirstESIMPackage();

  // Verify Popup Details
  const packageDetails = await homePage.verifyPopupDetails();

  // Assertions for package details
  expect(packageDetails.title?.trim()).toBe(airaloTestData.japanFirstPackage.title);
  expect(packageDetails.coverage?.trim()).toBe(airaloTestData.japanFirstPackage.coverage);
  expect(packageDetails.data?.trim()).toBe(airaloTestData.japanFirstPackage.data);
  expect(packageDetails.validity?.trim()).toBe(airaloTestData.japanFirstPackage.validity);
  expect(packageDetails.price?.trim()).toBe(airaloTestData.japanFirstPackage.price);
  
});

