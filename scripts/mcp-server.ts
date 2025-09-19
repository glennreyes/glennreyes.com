#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import type { MCPDataSources } from '@/lib/mcp';

import { handleToolCall, listTools, resolveDataSources } from '@/lib/mcp';

export function createMCPServer(overrides?: Partial<MCPDataSources>) {
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

  server.setRequestHandler(ListToolsRequestSchema, () => ({
    tools: listTools(),
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const response = await handleToolCall(
      request.params.name,
      request.params.arguments ?? {},
      dataSources,
    );

    // Convert MCPResponse to the format expected by the MCP server
    if (response.isError) {
      return {
        content: response.content,
        isError: true,
      };
    }

    return {
      content: response.content,
    };
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
