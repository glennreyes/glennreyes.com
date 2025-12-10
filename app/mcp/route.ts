import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { handleToolCall, listTools } from '@/lib/mcp';

export function GET(): NextResponse {
  return NextResponse.json({
    description: 'MCP server for Glenn Reyes portfolio management',
    endpoint: '/mcp',
    name: 'glennreyes.com',
    tools: listTools(),
    version: '1.0.0',
  });
}

const MCPRequestSchema = z.object({
  method: z.string(),
  params: z
    .object({
      arguments: z.record(z.string(), z.unknown()).optional(),
      name: z.string().optional(),
    })
    .optional(),
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const rawBody: unknown = await request.json();
    const parseResult = MCPRequestSchema.safeParse(rawBody);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 },
      );
    }

    const body = parseResult.data;

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

    return NextResponse.json({ error: 'Unsupported method' }, { status: 400 });
  } catch (error) {
    console.error('MCP route error:', error);

    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}
