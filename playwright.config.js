import { defineConfig, devices } from '@playwright/test';

// Visual-regression config. Screenshots each component's docs page and diffs
// against a committed baseline, so a code change that alters a component's
// appearance fails CI until the baseline is re-approved (npm run test:visual:update).
export default defineConfig({
  testDir: './tests',
  snapshotDir: './tests/__screenshots__',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: 'line',
  use: {
    baseURL: 'http://localhost:5180',
  },
  expect: {
    // Absolute pixel allowance (not a ratio): tolerates tiny sub-pixel/antialias
    // noise but still catches a small component change (which is hundreds+ px),
    // even though it's a small fraction of the whole content area.
    toHaveScreenshot: { maxDiffPixels: 40, animations: 'disabled', caret: 'hide' },
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: 'npm run dev -- --port 5180 --strictPort',
    url: 'http://localhost:5180',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
