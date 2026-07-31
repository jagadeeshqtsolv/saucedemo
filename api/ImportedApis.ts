// Auto-generated from saved API definitions — regenerated whenever "ImportedApis" APIs change. Do not edit by hand.
import type { APIRequestContext } from '@playwright/test';
import env from '@support/env';
import { assertStatus, getByPath, resolveTemplate } from './_runtime';

export class ImportedApis {
  async login(request: APIRequestContext, vars: Record<string, string>): Promise<Record<string, string>> {
    const url = new URL(resolveTemplate("https://dummyjson.com/auth/login", vars, env));
    const headers: Record<string, string> = {};
    headers["Content-Type"] = resolveTemplate("application/json", vars, env);
    if (headers["Content-Type"] === undefined) headers["Content-Type"] = "application/json";
    const res = await request.post(url.toString(), { headers, data: resolveTemplate("{\n	\"username\": \"emilys\",\n    \"password\": \"emilyspass\",\n    \"expiresInMins\": 30\n}", vars, env) });
    const body: unknown = await res.json().catch(() => null);
    assertStatus(res.status(), [], "POST", url.toString(), body);
    return {};
  }

  async getUserDetails(request: APIRequestContext, vars: Record<string, string>): Promise<Record<string, string>> {
    const url = new URL(resolveTemplate("https://dummyjson.com/auth/me", vars, env));
    const headers: Record<string, string> = {};
    headers["Content-Type"] = resolveTemplate("application/json", vars, env);
    headers["Authorization"] = resolveTemplate("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NzY3Njk0OTUsImV4cCI6MTc3Njc3MTI5NX0.e8LT0KQzqQ-MqBfukmkzmwQjKOIGGHKsUL9Qyg2dtcM", vars, env);
    const res = await request.get(url.toString(), { headers });
    const body: unknown = await res.json().catch(() => null);
    assertStatus(res.status(), [200], "GET", url.toString(), body);
    return {};
  }

  async getUserById(request: APIRequestContext, vars: Record<string, string>): Promise<Record<string, string>> {
    const url = new URL(resolveTemplate("https://dummyjson.com/users/1", vars, env));
    const headers: Record<string, string> = {};
    headers["Content-Type"] = resolveTemplate("application/json", vars, env);
    headers["Authorization"] = resolveTemplate("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NzY3Njk0OTUsImV4cCI6MTc3Njc3MTI5NX0.e8LT0KQzqQ-MqBfukmkzmwQjKOIGGHKsUL9Qyg2dtcM", vars, env);
    const res = await request.get(url.toString(), { headers });
    const body: unknown = await res.json().catch(() => null);
    assertStatus(res.status(), [], "GET", url.toString(), body);
    return {};
  }

  async getUserByName(request: APIRequestContext, vars: Record<string, string>): Promise<Record<string, string>> {
    const url = new URL(resolveTemplate("https://dummyjson.com/users/search", vars, env));
    url.searchParams.set("q", resolveTemplate("emilys", vars, env));
    const headers: Record<string, string> = {};
    headers["Content-Type"] = resolveTemplate("application/json", vars, env);
    headers["Authorization"] = resolveTemplate("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NzY3Njk0OTUsImV4cCI6MTc3Njc3MTI5NX0.e8LT0KQzqQ-MqBfukmkzmwQjKOIGGHKsUL9Qyg2dtcM", vars, env);
    const res = await request.get(url.toString(), { headers });
    const body: unknown = await res.json().catch(() => null);
    assertStatus(res.status(), [], "GET", url.toString(), body);
    return {};
  }
}
