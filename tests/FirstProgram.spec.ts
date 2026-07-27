import { test, expect } from "@playwright/test";

test("displaying the content from env", {tag: "@smoke"}, async ({ page }) => {
    console.log("BaseUrl", process.env.BASE_URL);
});