import React from 'react';
import Break from './mdx/break';
import { H3 } from './mdx/headings';
import Link from './mdx/link';
import Paragraph from './mdx/paragraph';

const WorkshopUpsell = () => (
  <>
    <Break />
    <H3>Want to have me do a workshop at your site or event?</H3>
    <Paragraph>
      Let's chat about and{' '}
      <Link to="mailto:glenn@glennreyes.com">get in touch</Link>!
    </Paragraph>
  </>
);

export default WorkshopUpsell;
