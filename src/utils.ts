import githubSlugger from 'github-slugger';
import { compose, deburr } from 'lodash/fp';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hasChildren = (child: any) =>
  !!(child && child.props && child.props.children);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onlyText = (children: any): string =>
  React.Children.toArray(children)
    .reduce(
      (flattened, child) => [
        ...flattened,
        hasChildren(child) ? onlyText(child.props.children) : child,
      ],
      [],
    )
    .join('');

export const slugger = githubSlugger();

export const slugify = (node: React.ReactNode) =>
  compose(
    (text: string) => slugger.slug(text),
    deburr,
    onlyText,
  )(node);

export const shortenUrl = (url: string) =>
  url.replace(/^(https?:\/\/)(www\.)?(.*)/, '$3');
