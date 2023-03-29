import { Newsletter } from '../home/Newsletter';
import { AboutAuthor } from './AboutAuthor';

export function PostFooter() {
  return (
    <>
      <AboutAuthor />
      <Newsletter title="Subscribe to my Newsletter">
        Get subscribed to stay in the loop and receive occasional news and updates directly to your inbox. No spam,
        unsubscribe at any time.
      </Newsletter>
    </>
  );
}
