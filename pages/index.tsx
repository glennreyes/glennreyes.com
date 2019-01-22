import Head from '../components/Head';
import me from '../data/me';

const title = `${me.name} — ${me.job}`;

export default () => (
  <>
    <Head title={title} />
    <div>Welcome to next.js!</div>
  </>
);
