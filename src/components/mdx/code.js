import { rgba } from 'polished';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import styled from 'styled-components';

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
  font-family: inherit;
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

const Code = ({ children, className, metastring }) => {
  // Remove last empty line
  const code = children.trim();

  // Take language-jsx and convert to just jsx
  const language = className ? className.split('language-').pop() : '';

  // From ```jsx {1,2,5-9} create an an array with [1, 2, 5, 6, 7, 8, 9]
  const linesToHighlight = calculateLinesToHighlight(metastring);

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <Pre css={style}>
          <Codeblock>
            {tokens.map((line, index) => {
              const { className, style, ...lineProps } = getLineProps({ line });

              return (
                <Line
                  {...lineProps}
                  css={style}
                  isHighlighted={linesToHighlight.includes(index + 1)}
                  key={index}
                >
                  {line.map((token, key) => {
                    const { className, style, ...tokenProps } = getTokenProps({
                      token,
                    });

                    return <span {...tokenProps} css={style} key={key} />;
                  })}
                </Line>
              );
            })}
          </Codeblock>
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;