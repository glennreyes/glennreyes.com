#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import {
  handleToolCall,
  listTools,
  resolveDataSources,
  type MCPDataSources,
} from '@/lib/mcp/core';

export function createMCPServer(
  overrides?: Partial<MCPDataSources>,
): Server<ListToolsRequestSchema | CallToolRequestSchema> {
  const dataSources = resolveDataSources(overrides);
  const server = new Server(
    {
      description: 'MCP server for Glenn Reyes portfolio management',
      name: 'glennreyes-portfolio',
      version: '1.0.0',
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: listTools(),
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const response = await handleToolCall(
      request.params.name,
      request.params.arguments ?? {},
      dataSources,
    );

    return response;
  });

  return server;
}

export async function runMCPServer() {
  const server = createMCPServer();
  const transport = new StdioServerTransport();

  await server.connect(transport);

  console.error('Glenn Reyes Portfolio MCP Server started');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runMCPServer().catch((error) => {
    console.error('Server error:', error);
    process.exit(1);
  });
}
