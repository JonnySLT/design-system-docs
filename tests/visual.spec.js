import { test, expect } from '@playwright/test';
import { navigation } from '../src/nav.js';

// Every component documented in the nav gets a baseline screenshot of its docs
// page (the .docs-content region — component demos, not the surrounding chrome).
const routes = [];
for (const section of navigation) {
  for (const link of section.links) {
    if (link.path.startsWith('/components/')) routes.push(link.path);
  }
}

test.describe('component visual regression', () => {
  for (const route of routes) {
    const name = route.split('/').pop();
    test(name, async ({ page }) => {
      await page.goto(`/#${route}`);
      await page.waitForLoadState('networkidle');
      await page.evaluate(() => document.fonts.ready);
      const content = page.locator('main.docs-content');
      await expect(content).toHaveScreenshot(`${name}.png`, { fullPage: false });
    });
  }
});
