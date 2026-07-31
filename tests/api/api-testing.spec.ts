import { test, expect } from '@support/fixtures';
import env from '@support/env';
import { Login } from '../../api/Login';
import { UserDetails } from '../../api/UserDetails';

test('get user details api', { tag: ["@api","@P1","@case-386395d6-b446-4e19-a9c8-b9141e1f3994","@req-0dd15af8-b021-455e-b3e8-e6526ef4326b"] }, async ({ page, request }) => {
  const vars: Record<string, string> = {};
  const userDetails = new UserDetails();
  await test.step('Click — Call UserDetails.getUserDetails', async () => {
    for (const [__k, __v] of Object.entries(await userDetails.getUserDetails(request, vars))) vars[`api.${__k}`] = __v;
  });
});

test('get user by id', { tag: ["@P1","@case-453ea65c-af63-4b69-a072-d873e1117ec6","@req-0dd15af8-b021-455e-b3e8-e6526ef4326b"] }, async ({ page, request }) => {
  const vars: Record<string, string> = {};
  const userDetails = new UserDetails();
  await test.step('Click — Call UserDetails.getUserById', async () => {
    for (const [__k, __v] of Object.entries(await userDetails.getUserById(request, vars))) vars[`api.${__k}`] = __v;
  });
});

test('all api', { tag: ["@api","@P1","@case-7175c098-2381-4c66-820d-1b02db868404","@req-0dd15af8-b021-455e-b3e8-e6526ef4326b"] }, async ({ page, request }) => {
  const vars: Record<string, string> = {};
  const userDetails = new UserDetails();
  const login = new Login();
  await test.step('Click — Call UserDetails.getUserDetails', async () => {
    for (const [__k, __v] of Object.entries(await userDetails.getUserDetails(request, vars))) vars[`api.${__k}`] = __v;
  });
  await test.step('Click — Call UserDetails.getUserById', async () => {
    for (const [__k, __v] of Object.entries(await userDetails.getUserById(request, vars))) vars[`api.${__k}`] = __v;
  });
  await test.step('Click — Call UserDetails.getUserByName', async () => {
    for (const [__k, __v] of Object.entries(await userDetails.getUserByName(request, vars))) vars[`api.${__k}`] = __v;
  });
  await test.step('Click — Call Login.login', async () => {
    for (const [__k, __v] of Object.entries(await login.login(request, vars))) vars[`api.${__k}`] = __v;
  });
});
