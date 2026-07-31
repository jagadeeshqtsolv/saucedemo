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

export class CheckoutStepOnePage {
  private static readonly L = {
    firstname: { strategy: 'css' as const, value: '[data-test="firstName"]', role: 'textbox', actionKind: 'textbox' as const },
    lastname: { strategy: 'css' as const, value: '[data-test="lastName"]', role: 'textbox', actionKind: 'textbox' as const },
    postalcode: { strategy: 'css' as const, value: '[data-test="postalCode"]', role: 'textbox', actionKind: 'textbox' as const },
    canc: { strategy: 'css' as const, value: '[data-test="cancel"]', role: 'button', actionKind: 'button' as const },
    continue: { strategy: 'css' as const, value: '[data-test="continue"]', role: 'textbox', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async fillFirstname(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname), value);
  }

  async clearFirstname(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname));
  }

  async getFirstnameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname));
  }

  async expectFirstnameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs, soft);
  }

  async fillLastname(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname), value);
  }

  async clearLastname(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname));
  }

  async getLastnameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname));
  }

  async expectLastnameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs, soft);
  }

  async fillPostalcode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode), value);
  }

  async clearPostalcode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode));
  }

  async getPostalcodeValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode));
  }

  async expectPostalcodeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs, soft);
  }

  async clickCanc(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.canc));
  }

  async doubleClickCanc(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.canc));
  }

  async expectCancVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs, soft);
  }

  async clickContinue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async expectContinueVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs, soft);
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


  async typeTextFirstname(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname), value);
  }

  async expectFirstnameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.firstname), expected, timeoutMs);
  }

  async expectFirstnameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.firstname), substring, timeoutMs);
  }

  async expectFirstnameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.firstname), value, timeoutMs);
  }

  async expectFirstnameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.firstname), count, timeoutMs);
  }

  async scrollFirstnameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname));
  }

  async typeTextLastname(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname), value);
  }

  async expectLastnameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.lastname), expected, timeoutMs);
  }

  async expectLastnameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.lastname), substring, timeoutMs);
  }

  async expectLastnameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.lastname), value, timeoutMs);
  }

  async expectLastnameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.lastname), count, timeoutMs);
  }

  async scrollLastnameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname));
  }

  async typeTextPostalcode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode), value);
  }

  async expectPostalcodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.postalcode), expected, timeoutMs);
  }

  async expectPostalcodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.postalcode), substring, timeoutMs);
  }

  async expectPostalcodeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.postalcode), value, timeoutMs);
  }

  async expectPostalcodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.postalcode), count, timeoutMs);
  }

  async scrollPostalcodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode));
  }

  async longPressCanc(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.canc));
  }

  async expectCancHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.canc), expected, timeoutMs);
  }

  async expectCancContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.canc), substring, timeoutMs);
  }

  async expectCancValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.canc), value, timeoutMs);
  }

  async expectCancEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.canc), count, timeoutMs);
  }

  async scrollCancIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.canc));
  }

  async doubleClickContinue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async longPressContinue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async expectContinueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.continue), expected, timeoutMs);
  }

  async expectContinueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.continue), substring, timeoutMs);
  }

  async expectContinueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.continue), value, timeoutMs);
  }

  async expectContinueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.continue), count, timeoutMs);
  }

  async scrollContinueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

}
