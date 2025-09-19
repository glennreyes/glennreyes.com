import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { NextRequest } from 'next/server';

import { GET, POST } from '@/app/api/mcp/route';

describe('MCP API route', () => {
  it('returns server metadata on GET', async () => {
    const response = GET();
    const payload = await response.json();

    assert.equal(payload.endpoint, '/mcp');
    assert.ok(Array.isArray(payload.tools));
    assert.ok(payload.tools.length > 0);
  });

  it('lists tools via POST tools/list', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({ method: 'tools/list' }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });

    const response = await POST(request);
    const payload = await response.json();

    assert.ok(Array.isArray(payload.tools));
    assert.ok(payload.tools.length > 0);
  });

  it('invokes tool calls through the core handler', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({
        method: 'tools/call',
        params: { name: 'get_newsletter_stats' },
      }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });

    const response = await POST(request);
    const payload = await response.json();

    assert.equal(response.status, 200);
    assert.ok(Array.isArray(payload.content));
    assert.ok(payload.content[0].text.includes('totalSubscribers'));
  });

  it('validates missing tool names', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({ method: 'tools/call', params: {} }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });

    const response = await POST(request);
    assert.equal(response.status, 400);
  });

  it('rejects unsupported methods', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({ method: 'unknown' }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });

    const response = await POST(request);
    assert.equal(response.status, 400);
  });
});
