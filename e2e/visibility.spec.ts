import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Basic Electric/);
});

test('main content is visible', async ({ page }) => {
    await page.goto('/');

    // Check if the root element is visible
    await expect(page.locator('#root')).toBeVisible();

    // Check if the hero section is visible (assuming there is an h1)
    await expect(page.locator('h1').first()).toBeVisible();
});

test('images are visible', async ({ page }) => {
    await page.goto('/');
    // Check if images are visible. 
    const images = page.locator('img');
    const count = await images.count();
    console.log(`Found ${count} images`);
    if (count > 0) {
        // Check the first image
        const firstImage = images.first();
        await expect(firstImage).toBeVisible();

        // Check opacity specifically, as visibility check might pass if it takes space but is transparent? 
        // Actually toBeVisible() checks for opacity > 0. But let's be explicit if we suspect opacity: 0.
        // Wait, toBeVisible() considers opacity: 0 as hidden.
    }
});
