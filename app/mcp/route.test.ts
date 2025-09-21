import { NextRequest } from 'next/server';
import { describe, it, expect } from 'vitest';

import { GET, POST } from './route';

const readJson = async <T>(response: Response): Promise<T> => {
  const text = await response.text();

  return JSON.parse(text) as T;
};

describe('MCP API route', () => {
  it('returns server metadata on GET', async () => {
    const response = GET();
    const payload = await readJson<{
      endpoint: string;
      tools: unknown[];
    }>(response);

    expect(payload.endpoint).toBe('/mcp');
    expect(Array.isArray(payload.tools)).toBe(true);
    expect(payload.tools.length).toBeGreaterThan(0);
  });

  it('lists tools via POST tools/list', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({ method: 'tools/list' }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });
    const response = await POST(request);
    const payload = await readJson<{ tools: unknown[] }>(response);

    expect(Array.isArray(payload.tools)).toBe(true);
    expect(payload.tools.length).toBeGreaterThan(0);
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
    const payload = await readJson<{ content: { text: string }[] }>(response);

    expect(response.status).toBe(200);
    expect(Array.isArray(payload.content)).toBe(true);
    expect(payload.content[0].text).toContain('totalSubscribers');
  });

  it('validates missing tool names', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({ method: 'tools/call', params: {} }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });
    const response = await POST(request);

    expect(response.status).toBe(400);
  });

  it('rejects unsupported methods', async () => {
    const request = new NextRequest('http://localhost/mcp', {
      body: JSON.stringify({ method: 'unknown' }),
      headers: { 'content-type': 'application/json' },
      method: 'POST',
    });
    const response = await POST(request);

    expect(response.status).toBe(400);
  });
});
