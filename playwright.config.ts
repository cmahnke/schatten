import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  timeout: 45_000,
  expect: {
    timeout: 10_000,
  },
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:1313",
    viewport: { width: 1400, height: 900 },
    trace: "retain-on-failure",
  },
  webServer: {
    command: "hugo server --bind 127.0.0.1 --port 1313",
    url: "http://localhost:1313/",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
    stdout: "pipe",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
