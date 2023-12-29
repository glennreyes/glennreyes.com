import { Newsletter } from '../newsletter/newsletter2';
import { AboutAuthor } from './about-author';
import { Comments } from './comments2';

export function PostFooter() {
  return (
    <>
      <AboutAuthor />
      <Comments />
      <Newsletter title="Subscribe to my Newsletter">
        Get subscribed to stay in the loop and receive occasional news and
        updates directly to your inbox. No spam, unsubscribe at any time.
      </Newsletter>
    </>
  );
}
