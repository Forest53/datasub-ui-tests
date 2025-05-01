import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    use: {
        baseURL: 'https://qatest.datasub.com',
        headless: true,
        browserName: 'chromium', // <- здесь можно указать конкретный браузер
    },
    projects: [
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        // Если хочешь только один браузер, остальные можешь удалить
    ],
});

