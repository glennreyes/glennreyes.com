import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Glenn Reyes</h1>
      <h2>Software Engineer, Tech Speaker and Workshop Instructor</h2>
      <p>
        With a passion for building innovative products and user interfaces
        using cutting edge web technologies.
      </p>
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
