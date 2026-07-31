import { test, expect } from '@support/fixtures';
import env from '@support/env';
import datadrivenRows from '@testdata/datasets/datadriven.json';
import testData from '@testdata/test-data.json';

test('[SCRUM-7] Login fails with invalid password', async ({ page, swagLabsPage }) => {
  await test.step('Open — Navigate to application URL', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Fill — Enter valid username', async () => {
    await swagLabsPage.fillUsername(testData.loginFailsWithInvalidPassword.enterValidUsername);
  });

  await test.step('Fill — Enter invalid password', async () => {
    await swagLabsPage.fillPassword(testData.loginFailsWithInvalidPassword.enterInvalidPassword);
  });

  await test.step('Click — Click Login', async () => {
    await swagLabsPage.clickLogin();
  });

  await test.step('Assert contains — Error message for invalid credentials', async () => {
    await swagLabsPage.expectErrorContainsText('do not match any user');
  });

  await test.step('Assert visible — Login button still visible (no redirect)', async () => {
    await swagLabsPage.expectLoginVisible();
  });
});


test('Login fails with empty username', { tag: ["@negative","@regression","@P0","@case-25b64d82-5005-4bc5-be81-16ad5bef7762"] }, async ({ page, swagLabsPage }) => {
  await test.step('Open — Navigate to application URL', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Fill — Enter password only', async () => {
    await swagLabsPage.fillPassword(testData.loginFailsWithEmptyUsername.enterPasswordOnly);
  });

  await test.step('Click — Click Login', async () => {
    await swagLabsPage.clickLogin();
  });

  await test.step('Assert contains — Error message for missing username', async () => {
    await swagLabsPage.expectErrorContainsText('Username is required');
  });
});


test('Login fails with empty password', { tag: ["@negative","@regression","@P0","@case-cc8c3e74-645c-429a-93ce-d3a9e633feeb"] }, async ({ page, swagLabsPage }) => {
  await test.step('Open — Navigate to application URL', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Fill — Enter username only', async () => {
    await swagLabsPage.fillUsername(testData.loginFailsWithEmptyPassword.enterUsernameOnly);
  });

  await test.step('Click — Click Login', async () => {
    await swagLabsPage.clickLogin();
  });

  await test.step('Assert contains — Error message for missing password', async () => {
    await swagLabsPage.expectErrorContainsText('Password is required');
  });
});


test('Login, view & sort products', { tag: ["@e2e","@regression","@P0","@case-578c91e3-8230-4833-9094-b756ee4153ea","@req-315320ca-195a-4653-b20c-8a6a94a08e9b"] }, async ({ page, swagLabsPage, inventoryPage }) => {
  await test.step('Navigate to URL — Navigate to application URL', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await swagLabsPage.fillUsername('standard_user');
  });
  await test.step('Fill — Enter password', async () => {
    await swagLabsPage.fillPassword('secret_sauce');
  });
  await test.step('Click — Click Login', async () => {
    await swagLabsPage.clickLogin();
  });
  await test.step('Assert visible — Verify on Inventory page', async () => {
    await inventoryPage.verifyOnPage();
  });
  await test.step('Assert visible — Backpack name visible', async () => {
    await inventoryPage.expectInventoryItemNameSauceLabsBackpackVisible();
  });
  await test.step('Assert visible — Backpack price visible', async () => {
    await inventoryPage.expectInventoryItemPriceSauceLabsBackpackVisible();
  });
  await test.step('Assert visible — Backpack description visible', async () => {
    await inventoryPage.expectInventoryItemDescSauceLabsBackpackVisible();
  });
  await test.step('Assert visible — Backpack image visible', async () => {
    await inventoryPage.expectItem4ImgVisible();
  });
  await test.step('Click — Open sort dropdown and select Price (Low to High)', async () => {
    await inventoryPage.selectProductSort('lohi');
  });
});

for (const [__rowIndex, __row] of datadrivenRows.entries()) {
  test(`Data driven — row ${__rowIndex + 1}`, { tag: ["@P1","@case-20876b4a-d239-45e2-bbce-e89a77d458f1","@req-315320ca-195a-4653-b20c-8a6a94a08e9b"] }, async ({ page, swagLabsPage }) => {
    const vars: Record<string, string> = {};
    for (const [__k, __v] of Object.entries(__row)) vars[`dataset.${__k}`] = __v;
    await test.step('Navigate to URL — launch sauce demo', async () => {
      await page.goto('https://www.saucedemo.com/');
    });
    await test.step('Click — Fill username', async () => {
      await swagLabsPage.fillUsername(vars["dataset.username"]);
    });
    await test.step('Click — Fill password', async () => {
      await swagLabsPage.fillPassword(vars["dataset.password"]);
    });
    await test.step('Click — click login', async () => {
      await swagLabsPage.clickLogin();
    });
  });
}
