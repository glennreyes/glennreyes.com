import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { rgba } from 'polished';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import styled from 'styled-components';
import Header from './header';
import { H1, H2, H3, H4, H5, H6 } from '../../components/heading';
import Layout from '../../components/layout';
import Link from '../../components/link';
import SEO from '../../components/seo';
import Text from '../../components/text';

const Break = styled.hr`
  background: ${p => p.theme.borderColor};
  border: none;
  height: ${p => p.theme.space[1]}px;
  margin: ${p => p.theme.space[5]}px 0;

  ${p => p.theme.media.tablet`
    margin-bottom: ${p.theme.space[6]}px;
    margin-top: ${p.theme.space[6]}px;
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidths[0] + p.theme.space[3] * 2}px;
  padding: 0 ${p => p.theme.space[3]}px;
`;

const Paragraph = styled(Text)`
  margin-bottom: ${p => p.theme.space[5]}px;

  > code {
    background: ${p => p.theme.codeBg};
    color: ${p => p.theme.codeColor};
    font-family: ${p => p.theme.fonts.mono};

    // Copied from github.com
    border-radius: 3px;
    font-size: 85%;
    padding: 0.2em 0.4em;
  }
`;

const ListItem = props => <Text {...props} as="li" />;

const UnorderedList = styled.ul`
  margin: ${p => p.theme.space[5]}px 0;
  padding-left: ${p => p.theme.space[5]}px;

  & & {
    margin: 0;
  }
`;

const OrderedList = styled.ol`
  margin: ${p => p.theme.space[5]}px 0;
  padding-left: ${p => p.theme.space[5]}px;

  & &,
  & ${UnorderedList}, ${UnorderedList} & {
    margin: 0;
  }
`;

const Blockquote = styled.blockquote`
  border-left: ${p => p.theme.borders[3]}px solid ${p => p.theme.borderColor};
  color: ${p => p.theme.textColor2};
  font-style: italic;
  line-height: ${p => p.theme.lineHeights[1]};
  margin: ${p => p.theme.space[5]}px 0;
  padding-left: ${p => p.theme.space[4]}px;
`;

const Pre = styled.pre`
  border-radius: ${p => p.theme.radii[1]}px;
  overflow: auto;
  font: ${p => p.theme.fontSizes[1]}px / ${p => p.theme.lineHeights[2]}
    ${p => p.theme.fonts.mono};
  margin: ${p => p.theme.space[5]}px 0;

  ${p => p.theme.media.tablet`
    margin-left: -${p => p.theme.space[3]}px;
    margin-right: -${p => p.theme.space[3]}px;
  `}
`;

const Codeblock = styled.code`
  display: block;
  float: left;
  min-width: 100%;
  padding: ${p => p.theme.space[3]}px 0;

  ${p => p.theme.media.tablet`
    padding-left: ${p => p.theme.space[3]}px;
    padding-right: ${p => p.theme.space[3]}px;
  `}
`;

const Line = styled.span`
  ${p =>
    p.isHighlighted ? `background: ${rgba(p.theme.colors.white, 0.075)};` : ''}
  ${p =>
    p.isHighlighted
      ? `border-left: ${p.theme.space[1]}px solid ${rgba(
          p.theme.colors.white,
          0.2,
        )};`
      : ''};
  display: block;
  padding: 0
    ${p =>
      p.isHighlighted
        ? `${p.theme.space[3]}px 0 ${p.theme.space[3] - p.theme.space[1]}px`
        : `${p.theme.space[3]}px`};

  ${p => p.theme.media.tablet`
    margin-left: -${p => p.theme.space[3]}px;
    margin-right: -${p => p.theme.space[3]}px;
  `}
`;

const calculateLinesToHighlight = metastring => {
  const parsedLines = metastring ? metastring.match(/{([\d,-]+)}/) : null;

  return parsedLines
    ? parsedLines[1].split(',').reduce((acc, value) => {
        if (value.includes('-')) {
          const range = value
            .split('-')
            .filter(Boolean)
            .map(Number);

          if (range.length === 1) return [...acc, range];

          range.sort((a, b) => a < b);
          const [start, end] = range;
          const lines = [
            ...Array.from(
              { length: end - start },
              (value, index) => start + index,
            ),
            end,
          ];

          return [...acc, ...lines];
        }

        return [...acc, Number(value)];
      }, [])
    : [];
};

const Code = ({ children, className, metastring }) => {
  // Take language-jsx and convert to just jsx
  const language = className ? className.split('language-').pop() : '';

  // From ```jsx {1,2,5-9} create an an array with [1, 2, 5, 6, 7, 8, 9]
  const linesToHighlight = calculateLinesToHighlight(metastring);

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <Pre css={style}>
          <Codeblock>
            {tokens.map((line, i) => (
              <Line
                key={i}
                {...getLineProps({ key: i, line })}
                isHighlighted={linesToHighlight.includes(i)}
              >
                {line.map((token, key) => {
                  const { style, ...tokenProps } = getTokenProps({
                    key,
                    token,
                  });
                  return (
                    <span
                      key={key}
                      {...tokenProps}
                      className={undefined}
                      css={style}
                    />
                  );
                })}
              </Line>
            ))}
          </Codeblock>
        </Pre>
      )}
    </Highlight>
  );
};

const Post = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <SEO description={post.excerpt} title={post.frontmatter.title} />
      <article
        itemProp="blogPosts"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <Header post={post} />
        <Content>
          <MDXProvider
            components={{
              a: Link,
              blockquote: Blockquote,
              code: Code,
              h1: H1,
              h2: H2,
              h3: H3,
              h4: H4,
              h5: H5,
              h6: H6,
              hr: Break,
              li: ListItem,
              ol: OrderedList,
              p: Paragraph,
              pre: ({ children }) => children,
              ul: UnorderedList,
            }}
          >
            <MDXRenderer>{post.body}</MDXRenderer>
          </MDXProvider>
        </Content>
      </article>
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query Post($id: String!) {
    mdx(id: { eq: $id }) {
      body
      excerpt(pruneLength: 160)
      frontmatter {
        cover {
          photo {
            childImageSharp {
              fluid(maxHeight: 1920, maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          author {
            name
            url
          }
        }
        date(formatString: "MMM DD, YYYY")
        draft
        title
      }
      id
      timeToRead
    }
  }
`;
