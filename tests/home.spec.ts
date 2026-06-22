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
      name: "Financial clarity built for action.",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Discuss your priorities" }),
  ).toBeVisible();
  const translatorDownload = page.getByRole("link", {
    name: "Download KSA Accounting Translator",
  });
  await expect(translatorDownload).toBeVisible();
  await expect(translatorDownload).toHaveAttribute(
    "href",
    "/KSA_Accounting_Translator.exe",
  );
  await expect(translatorDownload).toHaveAttribute("download", "");
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Specialist support, without the noise.",
    }),
  ).toBeVisible();

  await page.locator("img").evaluateAll(async (images) => {
    await Promise.all(
      images.map(
        (image) =>
          image.complete ||
          new Promise<void>((resolve) => {
            image.addEventListener("load", () => resolve(), { once: true });
            image.addEventListener("error", () => resolve(), { once: true });
          }),
      ),
    );
  });

  await page.screenshot({
    path: testInfo.outputPath("home-full-page.png"),
    fullPage: true,
  });

  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Bring the challenge. Leave with a clear next step.",
    }),
  ).toBeVisible();
  await expect(page.getByLabel("Area of support")).toBeVisible();
  await expect(page.getByRole("button", { name: "Prepare enquiry" })).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );

  expect(hasHorizontalOverflow).toBe(false);
  expect(consoleErrors).toEqual([]);
});
