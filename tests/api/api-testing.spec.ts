import { test, expect } from '@support/fixtures';
import env from '@support/env';
import { ImportedApis } from '../../api/ImportedApis';

test('Imported API Testing', { tag: ["@api","@P1","@case-3b032411-2a8c-4177-b754-f59f58ba66bf","@req-0dd15af8-b021-455e-b3e8-e6526ef4326b"] }, async ({ page, request }) => {
  const vars: Record<string, string> = {};
  const importedApis = new ImportedApis();
  await test.step('Click — Call ImportedApis.getUserDetails', async () => {
    for (const [__k, __v] of Object.entries(await importedApis.getUserDetails(request, vars))) vars[`api.${__k}`] = __v;
  });
  await test.step('Click — Call ImportedApis.getUserById', async () => {
    for (const [__k, __v] of Object.entries(await importedApis.getUserById(request, vars))) vars[`api.${__k}`] = __v;
  });
});

test('Perform login with api', { tag: ["@api","@P1","@case-cc232fea-398f-4d03-9437-8245b5cd77c8","@req-0dd15af8-b021-455e-b3e8-e6526ef4326b"] }, async ({ page, request }) => {
  const vars: Record<string, string> = {};
  const importedApis = new ImportedApis();
  await test.step('Click — Call ImportedApis.login', async () => {
    for (const [__k, __v] of Object.entries(await importedApis.login(request, vars))) vars[`api.${__k}`] = __v;
  });
});
