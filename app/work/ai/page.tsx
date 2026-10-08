import type { Metadata } from 'next';
import { SectionLink } from '@/components/site/section-link';
import { Page } from '@/components/ui/layout/page';
export const metadata: Metadata = {
  title: 'AI & interfaces',
  description:
    'Exploring MCP, Generative UI, and thoughtful interfaces with Glenn Reyes.',
};
export default function AiPage() {
  return (
    <Page>
      <Page.Header
        meta="Work / Current explorations"
        lead="What happens when an interface starts with intent?"
      >
        AI & interfaces.
      </Page.Header>
      <section className="grid gap-10 md:grid-cols-2">
        <div className="grid content-start gap-6">
          <p>
            I&apos;m interested in how people use software when conversations
            become part of the interface.
          </p>
          <p className="text-muted-foreground">
            My work explores MCP, authored React views, and the patterns that
            keep these experiences useful and maintainable.
          </p>
          <SectionLink href="/workshops/building-generative-ui-with-mcp-in-react">
            The Generative UI workshop
          </SectionLink>
        </div>
        <div className="grid gap-6 rounded-4xl border p-8">
          <h2>Notes & experiments</h2>
          <SectionLink href="/posts/from-screens-to-intent">
            From screens to intent
          </SectionLink>
          <SectionLink href="/posts/mcp-explained">MCP explained</SectionLink>
          <SectionLink href="/posts/ai-agents">AI coding agents</SectionLink>
          <SectionLink href="https://github.com/glennreyes/generative-ui-mcp-workshop">
            Explore the workshop source
          </SectionLink>
        </div>
      </section>
      <div>
        <SectionLink href="/work">All work</SectionLink>
      </div>
    </Page>
  );
}
