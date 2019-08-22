import React from 'react';
import Break from './mdx/break';
import { H3 } from './mdx/headings';
import Link from './mdx/link';
import Paragraph from './mdx/paragraph';

const TalkUpsell = () => (
  <>
    <Break />
    <H3>Want to have me speak at your event?</H3>
    <Paragraph>
      Let's <Link to="mailto:glenn@glennreyes.com">get in touch</Link>! I'd love
      to share interesting stuff at your event.
    </Paragraph>
  </>
);

export default TalkUpsell;
