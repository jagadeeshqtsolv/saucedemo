import { test, expect } from '@support/fixtures';
import env from '@support/env';
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
