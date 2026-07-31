// Auto-generated — shared helpers for generated API client classes. Do not edit by hand.

export function getByPath(obj: unknown, path: string): unknown {
  const parts = path.replace(/\[(\d+)\]/g, ".$1").split(".").filter((p) => p.length > 0);
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur === null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return cur;
}

export function resolveTemplate(raw: string, vars: Record<string, string>, env: Record<string, unknown>): string {
  return raw.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (match, token: string) => {
    if (token.startsWith("env.")) {
      const found = getByPath(env, token.slice(4));
      return found === undefined ? match : String(found);
    }
    const found = vars[token];
    return found === undefined ? match : found;
  });
}

/** Hard assertion: throws (failing the test) when the response status isn't one of the accepted codes. */
export function assertStatus(
  status: number,
  expected: number[],
  method: string,
  url: string,
  body: unknown,
): void {
  const ok = expected.length > 0 ? expected.includes(status) : status >= 200 && status < 300;
  if (!ok) {
    const label = expected.length > 0 ? expected.join(", ") : "2xx";
    let bodyPreview: string;
    try {
      bodyPreview = JSON.stringify(body);
    } catch {
      bodyPreview = String(body);
    }
    throw new Error(
      `${method} ${url} failed: expected status [${label}] but received ${status}. Response body: ${bodyPreview}`,
    );
  }
}
