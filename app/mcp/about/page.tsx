import type { Metadata } from 'next';

import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { MCPContent } from '@/components/mcp/mcp-content';
import { Page } from '@/components/ui/layout/page';
import { InlineLink } from '@/components/ui/link/inline-link';
import { Lead } from '@/components/ui/typography/lead';

const file = path.join(process.cwd(), 'content/pages/mcp.mdx');

export const metadata: Metadata = {
  title: 'MCP Server',
  description:
    'Model Context Protocol server interface for Glenn Reyes portfolio',
};

const MCPPage = async () => {
  const source = await readFile(file, 'utf8');

  return (
    <Page>
      <Page.Header
        lead={
          <Lead>
            Explore the Model Context Protocol interface that powers automated
            access to my content, analytics, and tooling. Learn more about the
            standard in the{' '}
            <InlineLink href="https://modelcontextprotocol.io">
              MCP docs
            </InlineLink>
            .
          </Lead>
        }
      >
        MCP Server Interface
      </Page.Header>
      <Page.Body>
        <div className="mx-auto max-w-4xl space-y-8">
          <MCPContent source={source} />
        </div>
      </Page.Body>
    </Page>
  );
};

export default MCPPage;
