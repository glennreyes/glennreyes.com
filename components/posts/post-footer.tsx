import { Newsletter } from '../newsletter/newsletter';
import { AboutAuthor } from './about-author';
import { Comments } from './comments';

export function PostFooter() {
  return (
    <>
      <AboutAuthor />
      <Newsletter title="Subscribe to my Newsletter">
        Get subscribed to stay in the loop and receive occasional news and
        updates directly to your inbox. No spam, unsubscribe at any time.
      </Newsletter>
      <Comments />
    </>
  );
}
