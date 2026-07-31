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

export class CheckoutCompletePage {
  private static readonly L = {
    ponyExpress: { strategy: 'css' as const, value: '[data-test="pony-express"]', role: 'img', actionKind: 'generic' as const },
    completeHeader: { strategy: 'css' as const, value: '[data-test="complete-header"]', role: 'heading', level: 2, actionKind: 'text' as const },
    completeText: { strategy: 'css' as const, value: '[data-test="complete-text"]', actionKind: 'text' as const },
    backToProducts: { strategy: 'css' as const, value: '[data-test="back-to-products"]', role: 'button', actionKind: 'button' as const },
    generatePdfOrder: { strategy: 'css' as const, value: '[data-test="generate-pdf-order"]', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickPonyExpress(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.ponyExpress));
  }

  async expectPonyExpressVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), timeoutMs, soft);
  }

  async getInnerTextCompleteHeader(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader));
  }

  async expectCompleteHeaderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs, soft);
  }

  async getInnerTextCompleteText(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeText));
  }

  async expectCompleteTextVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs, soft);
  }

  async clickBackToProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async doubleClickBackToProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async expectBackToProductsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs, soft);
  }

  async clickGeneratePdfOrder(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder));
  }

  async doubleClickGeneratePdfOrder(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder));
  }

  async expectGeneratePdfOrderVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), timeoutMs, soft);
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


  async doubleClickPonyExpress(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.ponyExpress));
  }

  async longPressPonyExpress(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.ponyExpress));
  }

  async expectPonyExpressHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), timeoutMs);
  }

  async expectPonyExpressText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), expected, timeoutMs);
  }

  async expectPonyExpressContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), substring, timeoutMs);
  }

  async expectPonyExpressValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), value, timeoutMs);
  }

  async expectPonyExpressEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), timeoutMs);
  }

  async expectPonyExpressDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), timeoutMs);
  }

  async expectPonyExpressChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), timeoutMs);
  }

  async expectPonyExpressUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), timeoutMs);
  }

  async expectPonyExpressFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), timeoutMs);
  }

  async expectPonyExpressCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.ponyExpress), count, timeoutMs);
  }

  async scrollPonyExpressIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.ponyExpress));
  }

  async clickCompleteHeader(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader));
  }

  async doubleClickCompleteHeader(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader));
  }

  async longPressCompleteHeader(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader));
  }

  async expectCompleteHeaderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.completeHeader), expected, timeoutMs);
  }

  async expectCompleteHeaderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.completeHeader), substring, timeoutMs);
  }

  async expectCompleteHeaderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.completeHeader), value, timeoutMs);
  }

  async expectCompleteHeaderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.completeHeader), count, timeoutMs);
  }

  async scrollCompleteHeaderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader));
  }

  async clickCompleteText(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeText));
  }

  async doubleClickCompleteText(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeText));
  }

  async longPressCompleteText(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeText));
  }

  async expectCompleteTextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.completeText), expected, timeoutMs);
  }

  async expectCompleteTextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.completeText), substring, timeoutMs);
  }

  async expectCompleteTextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.completeText), value, timeoutMs);
  }

  async expectCompleteTextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.completeText), count, timeoutMs);
  }

  async scrollCompleteTextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeText));
  }

  async longPressBackToProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async expectBackToProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.backToProducts), expected, timeoutMs);
  }

  async expectBackToProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.backToProducts), substring, timeoutMs);
  }

  async expectBackToProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.backToProducts), value, timeoutMs);
  }

  async expectBackToProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.backToProducts), count, timeoutMs);
  }

  async scrollBackToProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async longPressGeneratePdfOrder(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder));
  }

  async expectGeneratePdfOrderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), timeoutMs);
  }

  async expectGeneratePdfOrderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), expected, timeoutMs);
  }

  async expectGeneratePdfOrderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), substring, timeoutMs);
  }

  async expectGeneratePdfOrderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), value, timeoutMs);
  }

  async expectGeneratePdfOrderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), timeoutMs);
  }

  async expectGeneratePdfOrderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), timeoutMs);
  }

  async expectGeneratePdfOrderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), timeoutMs);
  }

  async expectGeneratePdfOrderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), timeoutMs);
  }

  async expectGeneratePdfOrderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), timeoutMs);
  }

  async expectGeneratePdfOrderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder), count, timeoutMs);
  }

  async scrollGeneratePdfOrderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.generatePdfOrder));
  }

}
