import { test, expect } from '@support/fixtures';
import env from '@support/env';
import { Login } from '../../api/Login';
import { UserDetails } from '../../api/UserDetails';

test('API Testing', { tag: ["@api","@P1","@case-386395d6-b446-4e19-a9c8-b9141e1f3994","@req-0dd15af8-b021-455e-b3e8-e6526ef4326b"] }, async ({ page, apiFlowsPage, request }) => {
  const vars: Record<string, string> = {};
  await test.step('Click — All api\'s', async () => {
    await apiFlowsPage.apiflow(request, vars);
  });
});
