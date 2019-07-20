import Break from './break';
import Blockquote from './blockquote';
import Code from './code';
import { H1, H2, H3, H4, H5, H6 } from './headings';
import Link from './link';
import ListItem from './list-item';
import OrderedList from './ordered-list';
import Paragraph from './paragraph';
import UnorderedList from './unordered-list';

const mdxComponents = {
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
};

export default mdxComponents;
