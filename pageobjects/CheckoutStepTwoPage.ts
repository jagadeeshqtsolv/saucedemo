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

export class CheckoutStepTwoPage {
  private static readonly L = {
    paymentInfoLabel: { strategy: 'css' as const, value: '[data-test="payment-info-label"]', actionKind: 'text' as const },
    paymentInfoValue: { strategy: 'css' as const, value: '[data-test="payment-info-value"]', actionKind: 'text' as const },
    shippingInfoLabel: { strategy: 'css' as const, value: '[data-test="shipping-info-label"]', actionKind: 'text' as const },
    shippingInfoValue: { strategy: 'css' as const, value: '[data-test="shipping-info-value"]', actionKind: 'text' as const },
    totalInfoLabel: { strategy: 'css' as const, value: '[data-test="total-info-label"]', actionKind: 'text' as const },
    subtotalLabel: { strategy: 'css' as const, value: '[data-test="subtotal-label"]', actionKind: 'text' as const },
    taxLabel: { strategy: 'css' as const, value: '[data-test="tax-label"]', actionKind: 'text' as const },
    totalLabel: { strategy: 'css' as const, value: '[data-test="total-label"]', actionKind: 'text' as const },
    finishSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="finish"]', role: 'button', scope: '[data-test="checkout-summary-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextPaymentInfoLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel));
  }

  async expectPaymentInfoLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), timeoutMs, soft);
  }

  async getInnerTextPaymentInfoValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue));
  }

  async expectPaymentInfoValueVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), timeoutMs, soft);
  }

  async getInnerTextShippingInfoLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel));
  }

  async expectShippingInfoLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), timeoutMs, soft);
  }

  async getInnerTextShippingInfoValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue));
  }

  async expectShippingInfoValueVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), timeoutMs, soft);
  }

  async getInnerTextTotalInfoLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel));
  }

  async expectTotalInfoLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), timeoutMs, soft);
  }

  async getInnerTextSubtotalLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel));
  }

  async expectSubtotalLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), timeoutMs, soft);
  }

  async getInnerTextTaxLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel));
  }

  async expectTaxLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), timeoutMs, soft);
  }

  async getInnerTextTotalLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel));
  }

  async expectTotalLabelVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), timeoutMs, soft);
  }

  async clickFinishSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack));
  }

  async doubleClickFinishSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack));
  }

  async expectFinishSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), timeoutMs, soft);
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


  async clickPaymentInfoLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel));
  }

  async doubleClickPaymentInfoLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel));
  }

  async longPressPaymentInfoLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel));
  }

  async expectPaymentInfoLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), timeoutMs);
  }

  async expectPaymentInfoLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), expected, timeoutMs);
  }

  async expectPaymentInfoLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), substring, timeoutMs);
  }

  async expectPaymentInfoLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), value, timeoutMs);
  }

  async expectPaymentInfoLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), timeoutMs);
  }

  async expectPaymentInfoLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), timeoutMs);
  }

  async expectPaymentInfoLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), timeoutMs);
  }

  async expectPaymentInfoLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), timeoutMs);
  }

  async expectPaymentInfoLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), timeoutMs);
  }

  async expectPaymentInfoLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel), count, timeoutMs);
  }

  async scrollPaymentInfoLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoLabel));
  }

  async clickPaymentInfoValue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue));
  }

  async doubleClickPaymentInfoValue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue));
  }

  async longPressPaymentInfoValue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue));
  }

  async expectPaymentInfoValueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), timeoutMs);
  }

  async expectPaymentInfoValueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), expected, timeoutMs);
  }

  async expectPaymentInfoValueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), substring, timeoutMs);
  }

  async expectPaymentInfoValueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), value, timeoutMs);
  }

  async expectPaymentInfoValueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), timeoutMs);
  }

  async expectPaymentInfoValueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), timeoutMs);
  }

  async expectPaymentInfoValueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), timeoutMs);
  }

  async expectPaymentInfoValueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), timeoutMs);
  }

  async expectPaymentInfoValueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), timeoutMs);
  }

  async expectPaymentInfoValueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue), count, timeoutMs);
  }

  async scrollPaymentInfoValueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.paymentInfoValue));
  }

  async clickShippingInfoLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel));
  }

  async doubleClickShippingInfoLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel));
  }

  async longPressShippingInfoLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel));
  }

  async expectShippingInfoLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), timeoutMs);
  }

  async expectShippingInfoLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), expected, timeoutMs);
  }

  async expectShippingInfoLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), substring, timeoutMs);
  }

  async expectShippingInfoLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), value, timeoutMs);
  }

  async expectShippingInfoLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), timeoutMs);
  }

  async expectShippingInfoLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), timeoutMs);
  }

  async expectShippingInfoLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), timeoutMs);
  }

  async expectShippingInfoLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), timeoutMs);
  }

  async expectShippingInfoLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), timeoutMs);
  }

  async expectShippingInfoLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel), count, timeoutMs);
  }

  async scrollShippingInfoLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoLabel));
  }

  async clickShippingInfoValue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue));
  }

  async doubleClickShippingInfoValue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue));
  }

  async longPressShippingInfoValue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue));
  }

  async expectShippingInfoValueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), timeoutMs);
  }

  async expectShippingInfoValueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), expected, timeoutMs);
  }

  async expectShippingInfoValueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), substring, timeoutMs);
  }

  async expectShippingInfoValueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), value, timeoutMs);
  }

  async expectShippingInfoValueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), timeoutMs);
  }

  async expectShippingInfoValueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), timeoutMs);
  }

  async expectShippingInfoValueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), timeoutMs);
  }

  async expectShippingInfoValueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), timeoutMs);
  }

  async expectShippingInfoValueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), timeoutMs);
  }

  async expectShippingInfoValueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue), count, timeoutMs);
  }

  async scrollShippingInfoValueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.shippingInfoValue));
  }

  async clickTotalInfoLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel));
  }

  async doubleClickTotalInfoLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel));
  }

  async longPressTotalInfoLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel));
  }

  async expectTotalInfoLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), timeoutMs);
  }

  async expectTotalInfoLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), expected, timeoutMs);
  }

  async expectTotalInfoLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), substring, timeoutMs);
  }

  async expectTotalInfoLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), value, timeoutMs);
  }

  async expectTotalInfoLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), timeoutMs);
  }

  async expectTotalInfoLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), timeoutMs);
  }

  async expectTotalInfoLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), timeoutMs);
  }

  async expectTotalInfoLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), timeoutMs);
  }

  async expectTotalInfoLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), timeoutMs);
  }

  async expectTotalInfoLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel), count, timeoutMs);
  }

  async scrollTotalInfoLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalInfoLabel));
  }

  async clickSubtotalLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel));
  }

  async doubleClickSubtotalLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel));
  }

  async longPressSubtotalLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel));
  }

  async expectSubtotalLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), timeoutMs);
  }

  async expectSubtotalLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), expected, timeoutMs);
  }

  async expectSubtotalLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), substring, timeoutMs);
  }

  async expectSubtotalLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), value, timeoutMs);
  }

  async expectSubtotalLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), timeoutMs);
  }

  async expectSubtotalLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), timeoutMs);
  }

  async expectSubtotalLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), timeoutMs);
  }

  async expectSubtotalLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), timeoutMs);
  }

  async expectSubtotalLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), timeoutMs);
  }

  async expectSubtotalLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel), count, timeoutMs);
  }

  async scrollSubtotalLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.subtotalLabel));
  }

  async clickTaxLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel));
  }

  async doubleClickTaxLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel));
  }

  async longPressTaxLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel));
  }

  async expectTaxLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), timeoutMs);
  }

  async expectTaxLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), expected, timeoutMs);
  }

  async expectTaxLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), substring, timeoutMs);
  }

  async expectTaxLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), value, timeoutMs);
  }

  async expectTaxLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), timeoutMs);
  }

  async expectTaxLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), timeoutMs);
  }

  async expectTaxLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), timeoutMs);
  }

  async expectTaxLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), timeoutMs);
  }

  async expectTaxLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), timeoutMs);
  }

  async expectTaxLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel), count, timeoutMs);
  }

  async scrollTaxLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.taxLabel));
  }

  async clickTotalLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel));
  }

  async doubleClickTotalLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel));
  }

  async longPressTotalLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel));
  }

  async expectTotalLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), timeoutMs);
  }

  async expectTotalLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), expected, timeoutMs);
  }

  async expectTotalLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), substring, timeoutMs);
  }

  async expectTotalLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), value, timeoutMs);
  }

  async expectTotalLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), timeoutMs);
  }

  async expectTotalLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), timeoutMs);
  }

  async expectTotalLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), timeoutMs);
  }

  async expectTotalLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), timeoutMs);
  }

  async expectTotalLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), timeoutMs);
  }

  async expectTotalLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel), count, timeoutMs);
  }

  async scrollTotalLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.totalLabel));
  }

  async longPressFinishSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack));
  }

  async expectFinishSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), timeoutMs);
  }

  async expectFinishSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), expected, timeoutMs);
  }

  async expectFinishSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), substring, timeoutMs);
  }

  async expectFinishSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), value, timeoutMs);
  }

  async expectFinishSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), timeoutMs);
  }

  async expectFinishSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), timeoutMs);
  }

  async expectFinishSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), timeoutMs);
  }

  async expectFinishSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), timeoutMs);
  }

  async expectFinishSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), timeoutMs);
  }

  async expectFinishSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack), count, timeoutMs);
  }

  async scrollFinishSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finishSauceLabsBackpack));
  }

}
