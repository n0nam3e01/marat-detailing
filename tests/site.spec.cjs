const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;

test("Desktop: loaded assets, correct contacts, accessible page", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Ваш автомобиль.");
  await expect(page.locator("a[data-phone]").first()).toHaveAttribute(
    "href",
    "tel:+77078582519",
  );
  await expect(page.locator("#mapFrame")).toHaveAttribute("src", /51\.203063/);
  await expect(page.locator("#googleRoute")).toHaveAttribute(
    "href",
    /destination=51\.203063/,
  );
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty("complete", true);
    expect(
      await image.evaluate((element) => element.naturalWidth),
    ).toBeGreaterThan(0);
  }
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(results.violations).toEqual([]);
  expect(errors).toEqual([]);
});

test("Mobile navigation, Kazakh locale and persistence", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator("#menuToggle").click();
  await expect(page.locator("#menuToggle")).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await page.locator('#mobileMenu a[href="#services"]').click();
  await expect(page.locator("#menuToggle")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await page.locator('[data-lang="kk"]').click();
  await expect(page.locator("html")).toHaveAttribute("lang", "kk");
  await expect(page.locator("h1")).toContainText("Сіздің көлігіңіз.");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "kk");
  for (const width of [320, 390, 768, 1024, 1366]) {
    await page.setViewportSize({ width, height: 844 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `Kazakh overflow at ${width}px`,
    ).toBe(true);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const accessibility = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(accessibility.violations).toEqual([]);
  await page.screenshot({ path: "output/mobile.png", fullPage: true });
});

test("Consultation preserves the selected service and car in WhatsApp", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator('[data-select-service="ppf"]').click();
  await expect(page.locator("#service")).toHaveValue("ppf");
  await page.locator("#name").fill("Тест");
  await page.locator("#phone").fill("+7 701 123 45 67");
  await page.locator("#car").fill("Toyota Land Cruiser");
  await page.locator("#message").fill("Нужна защита капота & бампера");
  await page.locator("#consent").check();
  let captured;
  await page.route("https://wa.me/**", (route) => {
    captured = new URL(route.request().url());
    return route.fulfill({
      contentType: "text/html",
      body: "<h1>WhatsApp test destination</h1>",
    });
  });
  await page.locator('#leadForm button[type="submit"]').click();
  await expect.poll(() => captured?.pathname).toBe("/77078582519");
  expect(captured.searchParams.get("text")).toContain("Toyota Land Cruiser");
  expect(captured.searchParams.get("text")).toContain("Бронеплёнка");
  expect(captured.searchParams.get("text")).toContain(
    "Нужна защита капота & бампера",
  );
});

test("All breakpoints fit the viewport; reduced motion and keyboard access work", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const width of [320, 390, 768, 1024, 1366, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `Horizontal overflow at ${width}px`,
    ).toBe(true);
  }
  await page.setViewportSize({ width: 1366, height: 768 });
  await page.screenshot({ path: "output/desktop.png", fullPage: true });
  await page.screenshot({ path: "output/hero-desktop.png" });
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
});
