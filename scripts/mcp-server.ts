#!/usr/bin/env node

import { createMCPUIServer } from '@mcp-ui/server';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

import type { MCPDataSources } from '@/lib/mcp';

import { handleToolCall, listTools, resolveDataSources } from '@/lib/mcp';

export function createMCPServer(overrides?: Partial<MCPDataSources>) {
  const dataSources = resolveDataSources(overrides);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const server = createMCPUIServer({
    name: 'glennreyes.com',
    version: '1.0.0',
    description: 'MCP server for Glenn Reyes portfolio management',
  });
  // Register all tools
  const tools = listTools();

  tools.forEach((tool) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    server.addTool(
      tool.name,
      tool.description,
      async (args: Record<string, unknown>) => {
        const response = await handleToolCall(tool.name, args, dataSources);

        if (response.isError) {
          throw new Error(response.content?.[0]?.text ?? 'Unknown error');
        }

        return response.content?.[0]?.text ?? '';
      },
      tool.inputSchema,
    );
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return server;
}

export async function runMCPServer() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const server = createMCPServer();
  const transport = new StdioServerTransport();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  await server.connect(transport);

  console.error('Glenn Reyes Portfolio MCP-UI Server started');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runMCPServer().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
  });
}
