import { test, expect } from "@playwright/test";

test("map loads successfully", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const map = await page.locator(".leaflet-container");
  await expect(map).toBeVisible();
});