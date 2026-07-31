// Archived from tests/api/api-testing.spec.ts (test case 453ea65c-af63-4b69-a072-d873e1117ec6)
import { test, expect } from '@support/fixtures';

test('get user by id', { tag: ["@P1","@case-453ea65c-af63-4b69-a072-d873e1117ec6","@req-0dd15af8-b021-455e-b3e8-e6526ef4326b"] }, async ({ page, request }) => {
  const vars: Record<string, string> = {};
  const userDetails = new UserDetails();
  await test.step('Click — Call UserDetails.getUserById', async () => {
    for (const [__k, __v] of Object.entries(await userDetails.getUserById(request, vars))) vars[`api.${__k}`] = __v;
  });
});
