// Archived from tests/api/api-testing.spec.ts (test case cc232fea-398f-4d03-9437-8245b5cd77c8)
import { test, expect } from '@support/fixtures';


test('Perform login with api', { tag: ["@api","@P1","@case-cc232fea-398f-4d03-9437-8245b5cd77c8"] }, async ({ importedApis }) => {
  await test.step('Click — Call ImportedApis.login', async () => {
    await importedApis.login(env.baseURL, env.username, env.password);
  });
});
