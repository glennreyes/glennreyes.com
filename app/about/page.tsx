import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <h1>About me</h1>
      <div>
        <h2>
          I'm Glenn Reyes, a software engineer, tech speaker and workshop
          instructor based in Vienna.
        </h2>
        <p>
          I have passion for building innovative products and user interfaces
          using cutting edge web technologies.
        </p>
        <p>
          I'm currently building{' '}
          <Link href="https://app.enzyme.finance">Enzyme</Link> at{' '}
          <Link href="https://avantgarde.finance">Avantgarde</Link>
          – a tool for managing assets on the Ethereum blockchain.
        </p>
        <p>
          I am addicted to constantly learn new things and enjoy sharing my
          thoughts and ideas about technologies I deeply care about.
        </p>
        <p>
          One way of my favorite ways to share is at tech conferences and
          meetups. I also run workshops and trainings on emerging web
          technologies topics.
        </p>
      </div>
      <ul>
        <li>
          <Link href="https://twitter.com/glnnrys">Follow on Twitter</Link>
        </li>
        <li>
          <Link href="https://instagram.com/glnnrys">Follow on Instagram</Link>
        </li>
        <li>
          <Link href="https://github.com/glennreyes">Follow on GitHub</Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/glnnrys">Follow on LinkedIn</Link>
        </li>
      </ul>
    </div>
  );
}
