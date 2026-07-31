import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class CartPage {
  private static readonly L = {
    cartQuantityLabel: { strategy: 'css' as const, value: '[data-test="cart-quantity-label"]', actionKind: 'text' as const },
    cartDescLabel: { strategy: 'css' as const, value: '[data-test="cart-desc-label"]', actionKind: 'text' as const },
    continueShoppingSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="continue-shopping"]', role: 'button', scope: '[data-test="cart-contents-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
    checkoutSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="checkout"]', role: 'button', scope: '[data-test="cart-contents-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextCartQuantityLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async expectCartQuantityLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs, soft);
  }

  async getInnerTextCartDescLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async expectCartDescLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs, soft);
  }

  async clickContinueShoppingSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack));
  }

  async doubleClickContinueShoppingSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack));
  }

  async expectContinueShoppingSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs, soft);
  }

  async clickCheckoutSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack));
  }

  async doubleClickCheckoutSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack));
  }

  async expectCheckoutSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'Swag Labs', timeoutMs);
  }


  async clickCartQuantityLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async doubleClickCartQuantityLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async longPressCartQuantityLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async expectCartQuantityLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartQuantityLabel), expected, timeoutMs);
  }

  async expectCartQuantityLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.cartQuantityLabel), substring, timeoutMs);
  }

  async expectCartQuantityLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartQuantityLabel), value, timeoutMs);
  }

  async expectCartQuantityLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartQuantityLabel), count, timeoutMs);
  }

  async scrollCartQuantityLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async clickCartDescLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async doubleClickCartDescLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async longPressCartDescLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async expectCartDescLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartDescLabel), expected, timeoutMs);
  }

  async expectCartDescLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.cartDescLabel), substring, timeoutMs);
  }

  async expectCartDescLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartDescLabel), value, timeoutMs);
  }

  async expectCartDescLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartDescLabel), count, timeoutMs);
  }

  async scrollCartDescLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async longPressContinueShoppingSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack));
  }

  async expectContinueShoppingSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), expected, timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), substring, timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), value, timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), timeoutMs);
  }

  async expectContinueShoppingSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack), count, timeoutMs);
  }

  async scrollContinueShoppingSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.continueShoppingSauceLabsBackpack));
  }

  async longPressCheckoutSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack));
  }

  async expectCheckoutSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), expected, timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), substring, timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), value, timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), timeoutMs);
  }

  async expectCheckoutSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack), count, timeoutMs);
  }

  async scrollCheckoutSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.checkoutSauceLabsBackpack));
  }

}
