import type { NextResponse } from 'next/server';

import { NextRequest } from 'next/server';
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { GET as routeGet, POST as routePost } from '../app/mcp/route.ts';

const GET = routeGet as () => NextResponse;
const POST = routePost as (request: NextRequest) => Promise<NextResponse>;
const readJson = async <T>(response: Response): Promise<T> => {
  const text = await response.text();

  return JSON.parse(text) as unknown as T;
};

void describe('MCP API route', () => {
  void it('returns server metadata on GET', async () => {
    const response = GET();
    const payload = await readJson<{
      endpoint: string;
      tools: unknown[];
    }>(response);

    assert.equal(payload.endpoint, '/mcp');
    assert.ok(Array.isArray(payload.tools));
    assert.ok(payload.tools.length > 0);
  });

  void it('lists tools via POST tools/list', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({ method: 'tools/list' }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });
    const response = (await POST(request));
    const payload = await readJson<{ tools: unknown[] }>(response);

    assert.ok(Array.isArray(payload.tools));
    assert.ok(payload.tools.length > 0);
  });

  void it('invokes tool calls through the core handler', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({
        method: 'tools/call',
        params: { name: 'get_newsletter_stats' },
      }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });
    const response = (await POST(request));
    const payload = await readJson<{ content: { text: string }[] }>(response);

    assert.equal(response.status, 200);
    assert.ok(Array.isArray(payload.content));
    assert.ok(payload.content[0].text.includes('totalSubscribers'));
  });

  void it('validates missing tool names', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({ method: 'tools/call', params: {} }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });
    const response = (await POST(request));

    assert.equal(response.status, 400);
  });

  void it('rejects unsupported methods', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({ method: 'unknown' }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });
    const response = (await POST(request));

    assert.equal(response.status, 400);
  });
});
