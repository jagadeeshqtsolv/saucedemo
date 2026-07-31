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

export class InventoryPage {
  private static readonly L = {
    openMenu: { strategy: 'css' as const, value: '#react-burger-menu-btn', role: 'button', actionKind: 'button' as const },
    openMenu2: { strategy: 'css' as const, value: '[data-test="open-menu"]', role: 'img', actionKind: 'generic' as const },
    shoppingCart: { strategy: 'css' as const, value: '[data-test="shopping-cart-link"]', role: 'link', actionKind: 'link' as const },
    title: { strategy: 'css' as const, value: '[data-test="title"]', actionKind: 'text' as const },
    activeOption: { strategy: 'css' as const, value: '[data-test="active-option"]', actionKind: 'text' as const },
    productSort: { strategy: 'css' as const, value: '[data-test="product-sort-container"]', role: 'combobox', actionKind: 'combobox' as const },
    item4Img: { strategy: 'css' as const, value: '[data-test="item-4-img-link"]', role: 'link', actionKind: 'link' as const },
    item4Title: { strategy: 'css' as const, value: '[data-test="item-4-title-link"]', role: 'link', actionKind: 'link' as const },
    inventoryItemNameSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="inventory-item-name"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemDescSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="inventory-item-desc"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemPriceSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="inventory-item-price"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    addToCartSauceLabsBackpackSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="add-to-cart-sauce-labs-backpack"]', role: 'button', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
    item0Img: { strategy: 'css' as const, value: '[data-test="item-0-img-link"]', role: 'link', actionKind: 'link' as const },
    item0Title: { strategy: 'css' as const, value: '[data-test="item-0-title-link"]', role: 'link', actionKind: 'link' as const },
    addToCartSauceLabsBikeLightSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="add-to-cart-sauce-labs-bike-light"]', role: 'button', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
    item1Img: { strategy: 'css' as const, value: '[data-test="item-1-img-link"]', role: 'link', actionKind: 'link' as const },
    item1Title: { strategy: 'css' as const, value: '[data-test="item-1-title-link"]', role: 'link', actionKind: 'link' as const },
    addToCartSauceLabsBoltTShirtSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]', role: 'button', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
    item5Img: { strategy: 'css' as const, value: '[data-test="item-5-img-link"]', role: 'link', actionKind: 'link' as const },
    item5Title: { strategy: 'css' as const, value: '[data-test="item-5-title-link"]', role: 'link', actionKind: 'link' as const },
    addToCartSauceLabsFleeceJacketSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]', role: 'button', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
    item2Img: { strategy: 'css' as const, value: '[data-test="item-2-img-link"]', role: 'link', actionKind: 'link' as const },
    item2Title: { strategy: 'css' as const, value: '[data-test="item-2-title-link"]', role: 'link', actionKind: 'link' as const },
    addToCartSauceLabsOnesieSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="add-to-cart-sauce-labs-onesie"]', role: 'button', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
    item3Img: { strategy: 'css' as const, value: '[data-test="item-3-img-link"]', role: 'link', actionKind: 'link' as const },
    item3Title: { strategy: 'css' as const, value: '[data-test="item-3-title-link"]', role: 'link', actionKind: 'link' as const },
    addToCartTestAllthethingsTShirtRed: { strategy: 'css' as const, value: '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]', role: 'button', actionKind: 'button' as const },
    footer: { strategy: 'css' as const, value: '[data-test="footer"]', actionKind: 'text' as const },
    socialTwitter: { strategy: 'css' as const, value: '[data-test="social-twitter"]', role: 'link', actionKind: 'link' as const },
    socialFacebook: { strategy: 'css' as const, value: '[data-test="social-facebook"]', role: 'link', actionKind: 'link' as const },
    socialLinkedin: { strategy: 'css' as const, value: '[data-test="social-linkedin"]', role: 'link', actionKind: 'link' as const },
    footerCopy: { strategy: 'css' as const, value: '[data-test="footer-copy"]', actionKind: 'text' as const },
    removeSauceLabsBackpackSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="remove-sauce-labs-backpack"]', role: 'button', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOpenMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs, soft);
  }

  async clickOpenMenu2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.openMenu2));
  }

  async expectOpenMenu2Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.openMenu2), timeoutMs, soft);
  }

  async clickShoppingCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.shoppingCart));
  }

  async expectShoppingCartVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs, soft);
  }

  async getInnerTextTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.title));
  }

  async expectTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.title), timeoutMs, soft);
  }

  async getInnerTextActiveOption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.activeOption));
  }

  async expectActiveOptionVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs, soft);
  }

  async selectProductSort(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, InventoryPage.L.productSort), value);
  }

  async expectProductSortVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.productSort), timeoutMs, soft);
  }

  async clickItem4Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async expectItem4ImgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs, soft);
  }

  async clickItem4Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item4Title));
  }

  async expectItem4TitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs, soft);
  }

  async getInnerTextInventoryItemNameSauceLabsBackpack(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack));
  }

  async expectInventoryItemNameSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs, soft);
  }

  async getInnerTextInventoryItemDescSauceLabsBackpack(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack));
  }

  async expectInventoryItemDescSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs, soft);
  }

  async getInnerTextInventoryItemPriceSauceLabsBackpack(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack));
  }

  async expectInventoryItemPriceSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs, soft);
  }

  async clickAddToCartSauceLabsBackpackSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack));
  }

  async doubleClickAddToCartSauceLabsBackpackSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), timeoutMs, soft);
  }

  async clickItem0Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async expectItem0ImgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs, soft);
  }

  async clickItem0Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item0Title));
  }

  async expectItem0TitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs, soft);
  }

  async clickAddToCartSauceLabsBikeLightSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack));
  }

  async doubleClickAddToCartSauceLabsBikeLightSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), timeoutMs, soft);
  }

  async clickItem1Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async expectItem1ImgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs, soft);
  }

  async clickItem1Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item1Title));
  }

  async expectItem1TitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs, soft);
  }

  async clickAddToCartSauceLabsBoltTShirtSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack));
  }

  async doubleClickAddToCartSauceLabsBoltTShirtSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), timeoutMs, soft);
  }

  async clickItem5Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async expectItem5ImgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs, soft);
  }

  async clickItem5Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item5Title));
  }

  async expectItem5TitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs, soft);
  }

  async clickAddToCartSauceLabsFleeceJacketSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack));
  }

  async doubleClickAddToCartSauceLabsFleeceJacketSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), timeoutMs, soft);
  }

  async clickItem2Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async expectItem2ImgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs, soft);
  }

  async clickItem2Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item2Title));
  }

  async expectItem2TitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs, soft);
  }

  async clickAddToCartSauceLabsOnesieSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack));
  }

  async doubleClickAddToCartSauceLabsOnesieSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), timeoutMs, soft);
  }

  async clickItem3Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async expectItem3ImgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs, soft);
  }

  async clickItem3Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item3Title));
  }

  async expectItem3TitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs, soft);
  }

  async clickAddToCartTestAllthethingsTShirtRed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed));
  }

  async doubleClickAddToCartTestAllthethingsTShirtRed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed));
  }

  async expectAddToCartTestAllthethingsTShirtRedVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs, soft);
  }

  async getInnerTextFooter(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.footer));
  }

  async expectFooterVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.footer), timeoutMs, soft);
  }

  async clickSocialTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.socialTwitter));
  }

  async expectSocialTwitterVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs, soft);
  }

  async clickSocialFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.socialFacebook));
  }

  async expectSocialFacebookVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs, soft);
  }

  async clickSocialLinkedin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.socialLinkedin));
  }

  async expectSocialLinkedinVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs, soft);
  }

  async getInnerTextFooterCopy(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.footerCopy));
  }

  async expectFooterCopyVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs, soft);
  }

  async clickRemoveSauceLabsBackpackSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack));
  }

  async doubleClickRemoveSauceLabsBackpackSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack));
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs, soft);
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


  async longPressOpenMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.openMenu), substring, timeoutMs);
  }

  async expectOpenMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.openMenu), value, timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.openMenu), count, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async doubleClickOpenMenu2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.openMenu2));
  }

  async longPressOpenMenu2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.openMenu2));
  }

  async expectOpenMenu2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.openMenu2), timeoutMs);
  }

  async expectOpenMenu2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.openMenu2), expected, timeoutMs);
  }

  async expectOpenMenu2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.openMenu2), substring, timeoutMs);
  }

  async expectOpenMenu2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.openMenu2), value, timeoutMs);
  }

  async expectOpenMenu2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.openMenu2), timeoutMs);
  }

  async expectOpenMenu2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.openMenu2), timeoutMs);
  }

  async expectOpenMenu2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.openMenu2), timeoutMs);
  }

  async expectOpenMenu2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.openMenu2), timeoutMs);
  }

  async expectOpenMenu2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.openMenu2), timeoutMs);
  }

  async expectOpenMenu2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.openMenu2), count, timeoutMs);
  }

  async scrollOpenMenu2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.openMenu2));
  }

  async doubleClickShoppingCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.shoppingCart));
  }

  async longPressShoppingCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.shoppingCart));
  }

  async expectShoppingCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.shoppingCart), expected, timeoutMs);
  }

  async expectShoppingCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.shoppingCart), substring, timeoutMs);
  }

  async expectShoppingCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.shoppingCart), value, timeoutMs);
  }

  async expectShoppingCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.shoppingCart), count, timeoutMs);
  }

  async scrollShoppingCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.shoppingCart));
  }

  async clickTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.title));
  }

  async doubleClickTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.title));
  }

  async longPressTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.title));
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.title), expected, timeoutMs);
  }

  async expectTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.title), substring, timeoutMs);
  }

  async expectTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.title), value, timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.title), count, timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.title));
  }

  async clickActiveOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.activeOption));
  }

  async doubleClickActiveOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.activeOption));
  }

  async longPressActiveOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.activeOption));
  }

  async expectActiveOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.activeOption), expected, timeoutMs);
  }

  async expectActiveOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.activeOption), substring, timeoutMs);
  }

  async expectActiveOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.activeOption), value, timeoutMs);
  }

  async expectActiveOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.activeOption), count, timeoutMs);
  }

  async scrollActiveOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.activeOption));
  }

  async expectProductSortHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.productSort), expected, timeoutMs);
  }

  async expectProductSortContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.productSort), substring, timeoutMs);
  }

  async expectProductSortValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.productSort), value, timeoutMs);
  }

  async expectProductSortEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.productSort), count, timeoutMs);
  }

  async scrollProductSortIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.productSort));
  }

  async doubleClickItem4Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async longPressItem4Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async expectItem4ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item4Img), expected, timeoutMs);
  }

  async expectItem4ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item4Img), substring, timeoutMs);
  }

  async expectItem4ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item4Img), value, timeoutMs);
  }

  async expectItem4ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item4Img), count, timeoutMs);
  }

  async scrollItem4ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async doubleClickItem4Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item4Title));
  }

  async longPressItem4Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item4Title));
  }

  async expectItem4TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item4Title), expected, timeoutMs);
  }

  async expectItem4TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item4Title), substring, timeoutMs);
  }

  async expectItem4TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item4Title), value, timeoutMs);
  }

  async expectItem4TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item4Title), count, timeoutMs);
  }

  async scrollItem4TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item4Title));
  }

  async clickInventoryItemNameSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack));
  }

  async doubleClickInventoryItemNameSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack));
  }

  async longPressInventoryItemNameSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack));
  }

  async expectInventoryItemNameSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), expected, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), substring, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), value, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), count, timeoutMs);
  }

  async scrollInventoryItemNameSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack));
  }

  async clickInventoryItemDescSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack));
  }

  async doubleClickInventoryItemDescSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack));
  }

  async longPressInventoryItemDescSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack));
  }

  async expectInventoryItemDescSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), expected, timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), substring, timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), value, timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), count, timeoutMs);
  }

  async scrollInventoryItemDescSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack));
  }

  async clickInventoryItemPriceSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack));
  }

  async doubleClickInventoryItemPriceSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack));
  }

  async longPressInventoryItemPriceSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack));
  }

  async expectInventoryItemPriceSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), expected, timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), substring, timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), value, timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), count, timeoutMs);
  }

  async scrollInventoryItemPriceSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack));
  }

  async longPressAddToCartSauceLabsBackpackSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), substring, timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), value, timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack), count, timeoutMs);
  }

  async scrollAddToCartSauceLabsBackpackSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpackSauceLabsBackpack));
  }

  async doubleClickItem0Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async longPressItem0Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async expectItem0ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item0Img), expected, timeoutMs);
  }

  async expectItem0ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item0Img), substring, timeoutMs);
  }

  async expectItem0ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item0Img), value, timeoutMs);
  }

  async expectItem0ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item0Img), count, timeoutMs);
  }

  async scrollItem0ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async doubleClickItem0Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item0Title));
  }

  async longPressItem0Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item0Title));
  }

  async expectItem0TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item0Title), expected, timeoutMs);
  }

  async expectItem0TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item0Title), substring, timeoutMs);
  }

  async expectItem0TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item0Title), value, timeoutMs);
  }

  async expectItem0TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item0Title), count, timeoutMs);
  }

  async scrollItem0TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item0Title));
  }

  async longPressAddToCartSauceLabsBikeLightSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), substring, timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), value, timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack), count, timeoutMs);
  }

  async scrollAddToCartSauceLabsBikeLightSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLightSauceLabsBackpack));
  }

  async doubleClickItem1Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async longPressItem1Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async expectItem1ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item1Img), expected, timeoutMs);
  }

  async expectItem1ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item1Img), substring, timeoutMs);
  }

  async expectItem1ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item1Img), value, timeoutMs);
  }

  async expectItem1ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item1Img), count, timeoutMs);
  }

  async scrollItem1ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async doubleClickItem1Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item1Title));
  }

  async longPressItem1Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item1Title));
  }

  async expectItem1TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item1Title), expected, timeoutMs);
  }

  async expectItem1TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item1Title), substring, timeoutMs);
  }

  async expectItem1TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item1Title), value, timeoutMs);
  }

  async expectItem1TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item1Title), count, timeoutMs);
  }

  async scrollItem1TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item1Title));
  }

  async longPressAddToCartSauceLabsBoltTShirtSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), substring, timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), value, timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack), count, timeoutMs);
  }

  async scrollAddToCartSauceLabsBoltTShirtSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirtSauceLabsBackpack));
  }

  async doubleClickItem5Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async longPressItem5Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async expectItem5ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item5Img), expected, timeoutMs);
  }

  async expectItem5ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item5Img), substring, timeoutMs);
  }

  async expectItem5ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item5Img), value, timeoutMs);
  }

  async expectItem5ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item5Img), count, timeoutMs);
  }

  async scrollItem5ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async doubleClickItem5Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item5Title));
  }

  async longPressItem5Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item5Title));
  }

  async expectItem5TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item5Title), expected, timeoutMs);
  }

  async expectItem5TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item5Title), substring, timeoutMs);
  }

  async expectItem5TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item5Title), value, timeoutMs);
  }

  async expectItem5TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item5Title), count, timeoutMs);
  }

  async scrollItem5TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item5Title));
  }

  async longPressAddToCartSauceLabsFleeceJacketSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), substring, timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), value, timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack), count, timeoutMs);
  }

  async scrollAddToCartSauceLabsFleeceJacketSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacketSauceLabsBackpack));
  }

  async doubleClickItem2Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async longPressItem2Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async expectItem2ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item2Img), expected, timeoutMs);
  }

  async expectItem2ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item2Img), substring, timeoutMs);
  }

  async expectItem2ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item2Img), value, timeoutMs);
  }

  async expectItem2ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item2Img), count, timeoutMs);
  }

  async scrollItem2ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async doubleClickItem2Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item2Title));
  }

  async longPressItem2Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item2Title));
  }

  async expectItem2TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item2Title), expected, timeoutMs);
  }

  async expectItem2TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item2Title), substring, timeoutMs);
  }

  async expectItem2TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item2Title), value, timeoutMs);
  }

  async expectItem2TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item2Title), count, timeoutMs);
  }

  async scrollItem2TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item2Title));
  }

  async longPressAddToCartSauceLabsOnesieSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), substring, timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), value, timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack), count, timeoutMs);
  }

  async scrollAddToCartSauceLabsOnesieSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesieSauceLabsBackpack));
  }

  async doubleClickItem3Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async longPressItem3Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async expectItem3ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item3Img), expected, timeoutMs);
  }

  async expectItem3ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item3Img), substring, timeoutMs);
  }

  async expectItem3ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item3Img), value, timeoutMs);
  }

  async expectItem3ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item3Img), count, timeoutMs);
  }

  async scrollItem3ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async doubleClickItem3Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item3Title));
  }

  async longPressItem3Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item3Title));
  }

  async expectItem3TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item3Title), expected, timeoutMs);
  }

  async expectItem3TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item3Title), substring, timeoutMs);
  }

  async expectItem3TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item3Title), value, timeoutMs);
  }

  async expectItem3TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item3Title), count, timeoutMs);
  }

  async scrollItem3TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item3Title));
  }

  async clickFooter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.footer));
  }

  async doubleClickFooter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.footer));
  }

  async longPressFooter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.footer));
  }

  async expectFooterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.footer), timeoutMs);
  }

  async expectFooterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.footer), expected, timeoutMs);
  }

  async expectFooterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.footer), substring, timeoutMs);
  }

  async expectFooterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.footer), value, timeoutMs);
  }

  async expectFooterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.footer), timeoutMs);
  }

  async expectFooterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.footer), timeoutMs);
  }

  async expectFooterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.footer), timeoutMs);
  }

  async expectFooterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.footer), timeoutMs);
  }

  async expectFooterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.footer), timeoutMs);
  }

  async expectFooterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.footer), count, timeoutMs);
  }

  async scrollFooterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.footer));
  }

  async doubleClickSocialTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.socialTwitter));
  }

  async longPressSocialTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.socialTwitter));
  }

  async expectSocialTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.socialTwitter), expected, timeoutMs);
  }

  async expectSocialTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.socialTwitter), substring, timeoutMs);
  }

  async expectSocialTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.socialTwitter), value, timeoutMs);
  }

  async expectSocialTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.socialTwitter), count, timeoutMs);
  }

  async scrollSocialTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.socialTwitter));
  }

  async doubleClickSocialFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.socialFacebook));
  }

  async longPressSocialFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.socialFacebook));
  }

  async expectSocialFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.socialFacebook), expected, timeoutMs);
  }

  async expectSocialFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.socialFacebook), substring, timeoutMs);
  }

  async expectSocialFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.socialFacebook), value, timeoutMs);
  }

  async expectSocialFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.socialFacebook), count, timeoutMs);
  }

  async scrollSocialFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.socialFacebook));
  }

  async doubleClickSocialLinkedin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.socialLinkedin));
  }

  async longPressSocialLinkedin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.socialLinkedin));
  }

  async expectSocialLinkedinHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.socialLinkedin), expected, timeoutMs);
  }

  async expectSocialLinkedinContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.socialLinkedin), substring, timeoutMs);
  }

  async expectSocialLinkedinValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.socialLinkedin), value, timeoutMs);
  }

  async expectSocialLinkedinEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.socialLinkedin), count, timeoutMs);
  }

  async scrollSocialLinkedinIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.socialLinkedin));
  }

  async clickFooterCopy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.footerCopy));
  }

  async doubleClickFooterCopy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.footerCopy));
  }

  async longPressFooterCopy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.footerCopy));
  }

  async expectFooterCopyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.footerCopy), expected, timeoutMs);
  }

  async expectFooterCopyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.footerCopy), substring, timeoutMs);
  }

  async expectFooterCopyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.footerCopy), value, timeoutMs);
  }

  async expectFooterCopyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.footerCopy), count, timeoutMs);
  }

  async scrollFooterCopyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.footerCopy));
  }

  async longPressRemoveSauceLabsBackpackSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack));
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), expected, timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), substring, timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), value, timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack), count, timeoutMs);
  }

  async scrollRemoveSauceLabsBackpackSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpackSauceLabsBackpack));
  }

}
