import { Newsletter } from '../newsletter/Newsletter';
import { AboutAuthor } from './AboutAuthor';
import { Comments } from './Comments';

export function PostFooter() {
  return (
    <>
      <AboutAuthor />
      <Comments />
      <Newsletter title="Subscribe to my Newsletter">
        Get subscribed to stay in the loop and receive occasional news and updates directly to your inbox. No spam,
        unsubscribe at any time.
      </Newsletter>
    </>
  );
}
