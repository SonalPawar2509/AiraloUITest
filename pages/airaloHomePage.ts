import { Page } from '@playwright/test';
import { Config } from '../utils/config';
import { AiraloLocators } from '../pageObjects/homePageObjects';

export class AiraloHomePage {
  constructor(private page: Page) {}

  async navigateToHomePage() {
    await this.page.goto(Config.AIRALO_HOME_URL);
  }

  async searchForDestination(destination: string) {
    await this.page.fill(AiraloLocators.SEARCH_INPUT, destination);
    await this.page.click(`text=${destination}`);
  }

  async selectFirstESIMPackage() {
    await this.page.locator(AiraloLocators.GET_FREE_ESIM).first().click();
  }

  async verifyPopupDetails() {
    const title = await this.page.textContent(AiraloLocators.SIM_DETAIL_TITLE);
    const coverage = await this.page.textContent(AiraloLocators.COVERAGE_VALUE);
    const data = await this.page.textContent(AiraloLocators.DATA_VALUE);
    const validity = await this.page.textContent(AiraloLocators.VALIDITY_VALUE);
    const price = await this.page.textContent(AiraloLocators.PRICE_VALUE);

    return { title, coverage, data, validity, price };
  }
}
