const { test, expect } = require("@playwright/test");

// Fails if action links regress to small text, or long locale labels overflow.
test("Action buttons stay comfortable in both languages at every breakpoint", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const language of ["ru", "kk"]) {
    await page.locator(`[data-lang="${language}"]`).click();
    for (const width of [320, 390, 768, 1024, 1366, 1920]) {
      await page.setViewportSize({ width, height: 900 });
      const sizes = await page.locator(".button, .text-link, .service-select, .floating-whatsapp").evaluateAll(elements => elements.filter(element => element.getClientRects().length).map(element => ({
        label: element.textContent.trim(),
        height: element.getBoundingClientRect().height,
        overflow: element.scrollWidth > element.clientWidth + 1
      })));
      for (const action of sizes) {
        expect(action.height, `${language} ${width}px: ${action.label}`).toBeGreaterThanOrEqual(52);
        expect(action.overflow, `${language} ${width}px: ${action.label} clipped`).toBe(false);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${language}: overflow at ${width}px`).toBe(true);
      for (const control of await page.locator('[data-lang], #menuToggle').all()) {
        if (await control.isVisible()) {
          const box = await control.boundingBox();
          expect(box.width).toBeGreaterThanOrEqual(44);
          expect(box.height).toBeGreaterThanOrEqual(44);
        }
      }
    }
  }
  expect(await page.locator("body").evaluate(el => getComputedStyle(el).backgroundColor)).toBe("rgb(16, 17, 16)");
});

test("Scroll entrance runs once without hiding content and honors preference changes", async ({ page }) => {
  await page.goto("/");
  const section = page.locator(".service").last();
  await section.scrollIntoViewIfNeeded();
  await expect.poll(() => section.evaluate(el => el.getAnimations().some(animation => animation.effect.getKeyframes().some(frame => frame.transform && frame.transform !== "none")))).toBe(true);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => section.evaluate(el => el.getAnimations().length)).toBe(0);
  await expect(section).toBeVisible();
  expect(await section.evaluate(el => getComputedStyle(el).opacity)).toBe("1");
  expect(await page.locator("html").evaluate(el => getComputedStyle(el).scrollBehavior)).toBe("auto");
});

test("Click decoration is temporary and does not interfere with real controls", async ({ page }) => {
  await page.goto("/");
  await page.locator('[data-lang="kk"]').click();
  // Use a real button without leaving the page; its main action must still run.
  await page.locator(".button.form-submit").click();
  await expect(page.locator(".click-spark").first()).toBeVisible();
  await expect(page.locator(".click-spark")).toHaveCount(0);
  expect(await page.locator("#name").evaluate(el => el.validity.valueMissing)).toBe(true);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.locator(".button.form-submit").click();
  await expect(page.locator(".click-spark")).toHaveCount(0);
  await page.locator('[data-select-service="ppf"]').click();
  await expect(page.locator("#service")).toHaveValue("ppf");
});

test("Mobile menu, locale persistence and WhatsApp request preserve existing behavior", async ({ page }) => {
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator("#menuToggle").click();
  await expect(page.locator("#menuToggle")).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(page.locator("#menuToggle")).toBeFocused();
  await expect(page.locator("#mobileMenu")).toBeHidden();
  await page.locator('[data-lang="kk"]').click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "kk");
  await page.locator('[data-select-service="ppf"]').click();
  await page.locator("#name").fill("Тест");
  await page.locator("#car").fill("Toyota & BMW");
  await page.locator("#consent").check();
  let captured;
  await page.route("https://wa.me/**", route => {
    captured = new URL(route.request().url());
    return route.fulfill({ contentType: "text/html", body: "WhatsApp test destination" });
  });
  await page.locator(".form-submit").click();
  await expect.poll(() => captured?.pathname).toBe("/77078582519");
  expect(captured.searchParams.get("text")).toContain("Toyota & BMW");
  expect(captured.searchParams.get("text")).toContain("Қорғаныш пленкасы");
  expect(errors).toEqual([]);
});

test("Keyboard navigation and a page without JavaScript keep all content available", async ({ browser, page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const plainPage = await context.newPage();
  await plainPage.goto("http://127.0.0.1:4173/");
  for (const selector of [".service", ".work", ".about", ".steps li", ".contact-details"]) {
    for (const element of await plainPage.locator(selector).all()) {
      await expect(element).toBeVisible();
      expect(await element.evaluate(el => getComputedStyle(el).opacity)).toBe("1");
    }
  }
  await plainPage.locator(".faq summary").first().click();
  await expect(plainPage.locator(".faq details").first()).toHaveAttribute("open", "");
  await expect(plainPage.locator(".hero-actions [data-whatsapp]")).toHaveAttribute("href", /wa.me/);
  await context.close();
});
