import { NextRequest, NextResponse } from 'next/server';

import {
  handleToolCall,
  listTools,
} from '@/lib/mcp/core';

export function GET(): NextResponse {
  return NextResponse.json({
    description: 'MCP server for Glenn Reyes portfolio management',
    endpoint: '/mcp',
    name: 'glennreyes-portfolio',
    tools: listTools(),
    version: '1.0.0',
  });
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as {
      method: string;
      params?: {
        arguments?: Record<string, unknown>;
        name?: string;
      };
    };

    if (body.method === 'tools/list') {
      return NextResponse.json({ tools: listTools() });
    }

    if (body.method === 'tools/call') {
      const toolName = body.params?.name;
      const args = body.params?.arguments ?? {};

      if (typeof toolName !== 'string') {
        return NextResponse.json(
          { error: 'Tool name must be provided' },
          { status: 400 },
        );
      }

      const response = await handleToolCall(toolName, args);

      return NextResponse.json(response);
    }

    return NextResponse.json(
      { error: 'Unsupported method' },
      { status: 400 },
    );
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}
