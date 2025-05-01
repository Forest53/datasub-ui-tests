import { test, expect } from '@playwright/test';
import { HomePage } from '../page/Home.Page';

test('Positive: Free Quote redirects to /quote.html', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.clickFreeQuote();
    await home.assertRedirectedToQuote();
});

test('Negative: Logo and Free Quote have different URLs', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    const logo = await home.getLogoHref();
    const quote = await home.getFreeQuoteHref();

    expect(logo).not.toBe(quote);
});
