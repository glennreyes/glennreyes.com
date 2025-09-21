#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import type { MCPDataSources } from '@/lib/mcp';

import { handleToolCall, listTools, resolveDataSources } from '@/lib/mcp';

export function createMCPServer(overrides?: Partial<MCPDataSources>) {
  const dataSources = resolveDataSources(overrides);
  const server = new Server(
    {
      name: 'glennreyes.com',
      version: '1.0.0',
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );
  // Register all tools
  const tools = listTools();

  server.setRequestHandler(ListToolsRequestSchema, () => {
    return {
      tools: tools.map((tool) => ({
        name: tool.name,
        description: tool.description,
        inputSchema: tool.inputSchema,
      })),
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const response = await handleToolCall(name, args ?? {}, dataSources);

    if (response.isError) {
      throw new Error(response.content?.[0]?.text ?? 'Unknown error');
    }

    return {
      content: response.content ?? [],
    };
  });

  return server;
}

export async function runMCPServer() {
  const server = createMCPServer();
  const transport = new StdioServerTransport();

  await server.connect(transport);

  console.error('Glenn Reyes Portfolio MCP-UI Server started');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runMCPServer().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
  });
}
