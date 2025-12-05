import { test, expect } from '@playwright/test';

test('app handles missing automation section in localstorage', async ({ page }) => {
    // 1. Set up localStorage with old data (missing automation)
    await page.addInitScript(() => {
        const oldContent = {
            hero: { title: "Old Title", subtitle: "Old Subtitle" },
            sections: {
                ev: { id: "ev", title: "EV", content: "EV Content", image: "ev.png" },
                ac: { id: "ac", title: "AC", content: "AC Content", image: "ac.png" },
                smartHome: { id: "sh", title: "SH", content: "SH Content", image: "sh.png" }
                // automation is MISSING
            },
            owners: [],
            contactEmail: "test@test.com"
        };
        localStorage.setItem('site_content', JSON.stringify(oldContent));
    });

    // 2. Navigate to home
    await page.goto('/');

    // 3. Check if it loads without error
    await expect(page.locator('h1').first()).toBeVisible();

    // 4. Check if automation section is visible (it should be merged from defaults)
    // The automation section title from defaultContent is "Älykoti ja automaatio"
    await expect(page.getByText('Älykoti ja automaatio').first()).toBeVisible();
});
