import { test, expect } from "@playwright/test";

test("displaying the content from env", {tag: "@smoke"}, async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  console.log("BaseUrl for main test", process.env.BASE_URL);
  await page.close
});


test("Testing the only command", {tag: "@smoke"}, async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  console.log("BaseUrl for only test", process.env.BASE_URL);
  await page.close
});
