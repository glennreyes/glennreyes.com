import type { Metadata } from 'next';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
export const metadata: Metadata = {
  title: 'AI & interfaces',
  description: 'MCP, Generative UI, and interfaces with Glenn Reyes.',
};
export default function AiPage() {
  return (
    <Page>
      <Page.Header meta="Tech" lead="Interfaces that start with intent.">
        AI & interfaces.
      </Page.Header>
      <section className="grid gap-8 md:grid-cols-2">
        <div className="grid content-start gap-5">
          <p>
            Exploring MCP, React, and useful interfaces inside conversations.
          </p>
          <SectionLink href="/workshops/building-generative-ui-with-mcp-in-react">
            The Generative UI workshop
          </SectionLink>
        </div>
        <div className="grid content-start gap-2">
          <h2 className="text-muted-foreground">Notes & experiments</h2>
          <SectionLink href="/posts/from-screens-to-intent">
            From screens to intent
          </SectionLink>
          <SectionLink href="/posts/mcp-explained">MCP explained</SectionLink>
          <SectionLink href="/posts/ai-agents">AI coding agents</SectionLink>
          <SectionLink href="https://github.com/glennreyes/generative-ui-mcp-workshop">
            Workshop source
          </SectionLink>
        </div>
      </section>
      <SectionLink href="/tech">All Tech</SectionLink>
    </Page>
  );
}
