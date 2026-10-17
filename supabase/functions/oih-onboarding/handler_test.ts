function assertEquals(actual: unknown, expected: unknown) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
}

let handle: (request: Request) => Promise<Response>;
// Capture the production handler without opening a server or sending mail.
Deno.serve = ((handler: typeof handle) => { handle = handler; return {}; }) as typeof Deno.serve;
await import('./index.ts');

Deno.test('worker rejects requests without its private secret', async () => {
  Deno.env.delete('OIH_EMAIL_WORKER_SECRET');
  const response = await handle(new Request('https://example.test', { method: 'POST' }));
  assertEquals(response.status, 401);
});
Deno.test('configured worker still fails closed until delivery is explicitly enabled', async () => {
  Deno.env.set('OIH_EMAIL_WORKER_SECRET', 'test-only-secret');
  Deno.env.delete('OIH_EMAIL_ENABLED');
  const response = await handle(new Request('https://example.test', { method: 'POST', headers: { 'x-oih-secret': 'test-only-secret' } }));
  assertEquals(response.status, 503);
  assertEquals(await response.json(), { enabled: false, sent: 0 });
});
Deno.test('invalid opt-out tokens and unauthenticated webhook events are rejected', async () => {
  assertEquals((await handle(new Request('https://example.test?unsubscribe=bad'))).status, 400);
  assertEquals((await handle(new Request('https://example.test?event=1', { method: 'POST' }))).status, 401);
});
