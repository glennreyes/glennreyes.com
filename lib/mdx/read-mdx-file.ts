import { compileMDX } from 'next-mdx-remote/rsc';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';

import { components } from './components';

const classes = {
  autoLink: `before:absolute before:translate-x-[-0.85em] before:font-medium before:text-slate-400 before:opacity-0 before:transition before:content-['#'] md:before:hover:translate-x-[-1em] md:before:hover:opacity-100 md:before:focus-visible:translate-x-[-1em] md:before:focus-visible:opacity-100`,
  line: `border-x-4 border-transparent px-3 sm:px-5`,
  lineHighlighted: `bg-teal-100/10 border-l-teal-100/25`,
};

export async function readMDXFile<TFrontmatter = Record<string, unknown>>(
  file: string,
) {
  const filePath = path.join(process.cwd(), file);
  const source = readFileSync(filePath, 'utf8');
  const result = await compileMDX<TFrontmatter>({
    components,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: { className: [classes.autoLink] },
            } satisfies Parameters<typeof rehypeAutolinkHeadings>[0],
          ],
          // eslint-disable-next-line unicorn/consistent-function-scoping
          () => (tree) => {
            // Extract raw code from `code` element nested inside `pre` tag and store value in `pre` node.
            // This need to be before `rehypePrettyCode` so that we get the raw value.
            visit(tree, (node) => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              if (!(node?.type === 'element' && node?.tagName === 'pre')) {
                return;
              }

              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              const [element] = node.children;

              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              if (element.tagName !== 'code') {
                return;
              }

              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              node.raw = element.children?.[0].value;
            });
          },
          [
            rehypePrettyCode,
            {
              onVisitHighlightedLine(node) {
                // Each line node by default has `class="line"`.
                node.properties.className?.push(classes.lineHighlighted);
              },
              // Callback hooks to add custom logic to nodes when visiting
              // them.
              onVisitLine(node) {
                node.properties.className = [classes.line];

                // Prevent lines from collapsing in `display: grid` mode, and
                // allow empty lines to be copy/pasted
                if (node.children.length === 0) {
                  node.children = [{ type: 'text', value: ' ' }];
                }
              },
              theme: 'nord',
            } satisfies Parameters<typeof rehypePrettyCode>[0],
          ],
          // eslint-disable-next-line unicorn/consistent-function-scoping
          () => (tree) => {
            // Pass raw value found in `pre` node and store to div[data-rehype-pretty-code-fragment]
            // This is after `rehypePrettyCode` so the stored raw code can be moved to the target div.
            visit(tree, (node) => {
              if (
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                !(node?.type === 'element' && node?.tagName === 'div') ||
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                !('data-rehype-pretty-code-fragment' in node.properties)
              ) {
                return;
              }

              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              for (const child of node.children) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                if (child.tagName === 'pre') {
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                  node.properties.raw = node.raw;
                }
              }
            });
          },
        ],
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: true,
    },
    source,
  });

  return { ...result, source };
}
