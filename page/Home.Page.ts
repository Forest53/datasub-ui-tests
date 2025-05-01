import { Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/');
    }

    async clickFreeQuote() {
        await this.page.click('text=Free Quote');
    }

    async assertRedirectedToQuote() {
        await expect(this.page).toHaveURL(/quote\.html$/);
    }

    async getLogoHref() {
        return await this.page.getAttribute('a.navbar-brand', 'href');
    }

    async getFreeQuoteHref() {
        return await this.page.getAttribute('a[href*="quote.html"]', 'href');
    }
}
