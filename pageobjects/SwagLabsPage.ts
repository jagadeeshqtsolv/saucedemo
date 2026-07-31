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

export class SwagLabsPage {
  private static readonly L = {
    username: { strategy: 'css' as const, value: '[data-test="username"]', role: 'textbox', actionKind: 'textbox' as const },
    password: { strategy: 'css' as const, value: '[data-test="password"]', role: 'textbox', actionKind: 'textbox' as const },
    login: { strategy: 'css' as const, value: '[data-test="login-button"]', role: 'textbox', actionKind: 'generic' as const },
    loginCredentials: { strategy: 'css' as const, value: '[data-test="login-credentials"]', actionKind: 'text' as const },
    acceptedUsernamesAre: { strategy: 'role' as const, value: 'Accepted usernames are:', role: 'heading', level: 4, actionKind: 'text' as const },
    loginPassword: { strategy: 'css' as const, value: '[data-test="login-password"]', actionKind: 'text' as const },
    passwordForAllUsers: { strategy: 'role' as const, value: 'Password for all users:', role: 'heading', level: 4, actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async fillUsername(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SwagLabsPage.L.username), value);
  }

  async clearUsername(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SwagLabsPage.L.username));
  }

  async getUsernameValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SwagLabsPage.L.username));
  }

  async expectUsernameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SwagLabsPage.L.username), timeoutMs, soft);
  }

  async fillPassword(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, SwagLabsPage.L.password), value);
  }

  async clearPassword(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, SwagLabsPage.L.password));
  }

  async getPasswordValue(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SwagLabsPage.L.password));
  }

  async expectPasswordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SwagLabsPage.L.password), timeoutMs, soft);
  }

  async clickLogin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SwagLabsPage.L.login));
  }

  async expectLoginVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SwagLabsPage.L.login), timeoutMs, soft);
  }

  async getInnerTextLoginCredentials(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SwagLabsPage.L.loginCredentials));
  }

  async expectLoginCredentialsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SwagLabsPage.L.loginCredentials), timeoutMs, soft);
  }

  async getInnerTextAcceptedUsernamesAre(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre));
  }

  async expectAcceptedUsernamesAreVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), timeoutMs, soft);
  }

  async getInnerTextLoginPassword(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SwagLabsPage.L.loginPassword));
  }

  async expectLoginPasswordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SwagLabsPage.L.loginPassword), timeoutMs, soft);
  }

  async getInnerTextPasswordForAllUsers(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers));
  }

  async expectPasswordForAllUsersVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), timeoutMs, soft);
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

  async performLogin(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }


  async typeTextUsername(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SwagLabsPage.L.username), value);
  }

  async expectUsernameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SwagLabsPage.L.username), timeoutMs);
  }

  async expectUsernameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SwagLabsPage.L.username), expected, timeoutMs);
  }

  async expectUsernameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SwagLabsPage.L.username), substring, timeoutMs);
  }

  async expectUsernameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SwagLabsPage.L.username), value, timeoutMs);
  }

  async expectUsernameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SwagLabsPage.L.username), timeoutMs);
  }

  async expectUsernameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SwagLabsPage.L.username), timeoutMs);
  }

  async expectUsernameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SwagLabsPage.L.username), timeoutMs);
  }

  async expectUsernameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SwagLabsPage.L.username), timeoutMs);
  }

  async expectUsernameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SwagLabsPage.L.username), timeoutMs);
  }

  async expectUsernameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SwagLabsPage.L.username), count, timeoutMs);
  }

  async scrollUsernameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SwagLabsPage.L.username));
  }

  async typeTextPassword(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, SwagLabsPage.L.password), value);
  }

  async expectPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SwagLabsPage.L.password), timeoutMs);
  }

  async expectPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SwagLabsPage.L.password), expected, timeoutMs);
  }

  async expectPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SwagLabsPage.L.password), substring, timeoutMs);
  }

  async expectPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SwagLabsPage.L.password), value, timeoutMs);
  }

  async expectPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SwagLabsPage.L.password), timeoutMs);
  }

  async expectPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SwagLabsPage.L.password), timeoutMs);
  }

  async expectPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SwagLabsPage.L.password), timeoutMs);
  }

  async expectPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SwagLabsPage.L.password), timeoutMs);
  }

  async expectPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SwagLabsPage.L.password), timeoutMs);
  }

  async expectPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SwagLabsPage.L.password), count, timeoutMs);
  }

  async scrollPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SwagLabsPage.L.password));
  }

  async doubleClickLogin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SwagLabsPage.L.login));
  }

  async longPressLogin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SwagLabsPage.L.login));
  }

  async expectLoginHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SwagLabsPage.L.login), timeoutMs);
  }

  async expectLoginText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SwagLabsPage.L.login), expected, timeoutMs);
  }

  async expectLoginContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SwagLabsPage.L.login), substring, timeoutMs);
  }

  async expectLoginValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SwagLabsPage.L.login), value, timeoutMs);
  }

  async expectLoginEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SwagLabsPage.L.login), timeoutMs);
  }

  async expectLoginDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SwagLabsPage.L.login), timeoutMs);
  }

  async expectLoginChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SwagLabsPage.L.login), timeoutMs);
  }

  async expectLoginUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SwagLabsPage.L.login), timeoutMs);
  }

  async expectLoginFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SwagLabsPage.L.login), timeoutMs);
  }

  async expectLoginCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SwagLabsPage.L.login), count, timeoutMs);
  }

  async scrollLoginIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SwagLabsPage.L.login));
  }

  async clickLoginCredentials(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SwagLabsPage.L.loginCredentials));
  }

  async doubleClickLoginCredentials(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SwagLabsPage.L.loginCredentials));
  }

  async longPressLoginCredentials(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SwagLabsPage.L.loginCredentials));
  }

  async expectLoginCredentialsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SwagLabsPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SwagLabsPage.L.loginCredentials), expected, timeoutMs);
  }

  async expectLoginCredentialsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SwagLabsPage.L.loginCredentials), substring, timeoutMs);
  }

  async expectLoginCredentialsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SwagLabsPage.L.loginCredentials), value, timeoutMs);
  }

  async expectLoginCredentialsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SwagLabsPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SwagLabsPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SwagLabsPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SwagLabsPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SwagLabsPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SwagLabsPage.L.loginCredentials), count, timeoutMs);
  }

  async scrollLoginCredentialsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SwagLabsPage.L.loginCredentials));
  }

  async clickAcceptedUsernamesAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre));
  }

  async doubleClickAcceptedUsernamesAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre));
  }

  async longPressAcceptedUsernamesAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre));
  }

  async expectAcceptedUsernamesAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), expected, timeoutMs);
  }

  async expectAcceptedUsernamesAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), substring, timeoutMs);
  }

  async expectAcceptedUsernamesAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), value, timeoutMs);
  }

  async expectAcceptedUsernamesAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre), count, timeoutMs);
  }

  async scrollAcceptedUsernamesAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SwagLabsPage.L.acceptedUsernamesAre));
  }

  async clickLoginPassword(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SwagLabsPage.L.loginPassword));
  }

  async doubleClickLoginPassword(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SwagLabsPage.L.loginPassword));
  }

  async longPressLoginPassword(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SwagLabsPage.L.loginPassword));
  }

  async expectLoginPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SwagLabsPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SwagLabsPage.L.loginPassword), expected, timeoutMs);
  }

  async expectLoginPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SwagLabsPage.L.loginPassword), substring, timeoutMs);
  }

  async expectLoginPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SwagLabsPage.L.loginPassword), value, timeoutMs);
  }

  async expectLoginPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SwagLabsPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SwagLabsPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SwagLabsPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SwagLabsPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SwagLabsPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SwagLabsPage.L.loginPassword), count, timeoutMs);
  }

  async scrollLoginPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SwagLabsPage.L.loginPassword));
  }

  async clickPasswordForAllUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers));
  }

  async doubleClickPasswordForAllUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers));
  }

  async longPressPasswordForAllUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers));
  }

  async expectPasswordForAllUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), expected, timeoutMs);
  }

  async expectPasswordForAllUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), substring, timeoutMs);
  }

  async expectPasswordForAllUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), value, timeoutMs);
  }

  async expectPasswordForAllUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers), count, timeoutMs);
  }

  async scrollPasswordForAllUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SwagLabsPage.L.passwordForAllUsers));
  }

  async expectErrorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SwagLabsPage.L.loginCredentials), substring, timeoutMs);
  }

}
