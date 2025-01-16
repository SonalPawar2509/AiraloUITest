"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiraloHomePage = void 0;
class AiraloHomePage {
    page;
    constructor(page) {
        this.page = page;
    }
    async navigateToHomePage() {
        await this.page.goto('https://www.airalo.com/');
    }
    async searchForDestination(destination) {
        await this.page.fill('input[data-testid="search-input"]', destination);
        await this.page.click(`text=${destination}`);
        //*[@data-testid='search-input']
    }
    async selectFirstESIMPackage() {
        await this.page.locator('text=Buy Now').first().click();
    }
    async selectSecondESIMPackage() {
        await this.page.locator('text=Buy Now').nth(2).click();
    }
    async verifyPopupDetails() {
        const title = await this.page.textContent('[data-testid="sim-detail-operator-title"]');
        const coverage = await this.page.textContent('[data-testid="COVERAGE-value"]');
        const data = await this.page.textContent('[data-testid="DATA-value"]');
        const validity = await this.page.textContent('[data-testid="VALIDITY-value"]');
        const price = await this.page.textContent('[data-testid="PRICE-value"]');
        return { title, coverage, data, validity, price };
    }
}
exports.AiraloHomePage = AiraloHomePage;
