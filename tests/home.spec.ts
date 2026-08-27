import { expect, test } from "@playwright/test";

test("presents the core offer and conversion path without layout errors", async ({
  page,
}, testInfo) => {
  const consoleErrors: string[] = [];

  page.on("console", (message) => {
    if (
      message.type() === "error" &&
      !message.text().includes("/_next/webpack-hmr")
    ) {
      consoleErrors.push(message.text());
    }
  });

  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Clarity across your systems and numbers.",
    }),
  ).toBeVisible();
  await expect(
    page
      .getByLabel("Primary actions")
      .getByRole("link", { name: "Discuss your priorities" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "IT Audit & Consultancy",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Audit, Accounting & Outsourcing",
    }),
  ).toBeVisible();

  const financePractice = page.getByRole("tab", {
    name: "Finance Audit, Accounting & Outsourcing",
  });
  await financePractice.click();
  await expect(financePractice).toHaveAttribute("aria-selected", "true");

  const accountingService = page.getByRole("button", {
    name: /Accounting & bookkeeping/,
  });
  await accountingService.click();
  await expect(accountingService).toHaveAttribute("aria-expanded", "true");

  await page.screenshot({
    path: testInfo.outputPath("home-full-page.png"),
    fullPage: true,
  });

  const brokenImages = await page.locator("img").evaluateAll((images) =>
    images
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => image.currentSrc || image.src),
  );

  expect(brokenImages).toEqual([]);

  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Tell us what needs a clearer answer.",
    }),
  ).toBeVisible();
  await expect(page.getByLabel("Area of support")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Send enquiry" }),
  ).toBeVisible();

  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });

  await page.getByLabel("Name Required").fill("Alex Morgan");
  await page.getByLabel("Work email Required").fill("alex@example.com");
  await page.getByLabel("Area of support Required").selectOption(
    "IT Audit & Consultancy",
  );
  await page
    .getByLabel("What would you like to improve? Required")
    .fill("We need an independent review of our core IT controls.");
  await page.getByRole("button", { name: "Send enquiry" }).click();
  await expect(
    page.getByRole("heading", { level: 3, name: "Form submitted" }),
  ).toBeVisible();
  await expect(page.getByText(/reply to alex@example\.com/)).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
  expect(consoleErrors).toEqual([]);
});
