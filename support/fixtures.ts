import { test as base, expect } from "@playwright/test";
import { CartPage } from "../pageobjects/CartPage";
import { CheckoutCompletePage } from "../pageobjects/CheckoutCompletePage";
import { CheckoutStepOnePage } from "../pageobjects/CheckoutStepOnePage";
import { CheckoutStepTwoPage } from "../pageobjects/CheckoutStepTwoPage";
import { InventoryPage } from "../pageobjects/InventoryPage";
import { SwagLabsPage } from "../pageobjects/SwagLabsPage";

type AppFixtures = {
  cartPage: CartPage;
  checkoutCompletePage: CheckoutCompletePage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  inventoryPage: InventoryPage;
  swagLabsPage: SwagLabsPage;
};

export const test = base.extend<AppFixtures>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
  checkoutStepOnePage: async ({ page }, use) => {
    await use(new CheckoutStepOnePage(page));
  },
  checkoutStepTwoPage: async ({ page }, use) => {
    await use(new CheckoutStepTwoPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  swagLabsPage: async ({ page }, use) => {
    await use(new SwagLabsPage(page));
  },
});

export { expect };
