import appleTouchIcon from '../assets/apple-touch-icon.png';
import favicon from '../assets/favicon.png';

export default function Head() {
  return (
    <>
      <title>
        Glenn Reyes - Software engineer, tech speaker and workshop instructor
      </title>
      <meta
        content="Software engineer, tech speaker and workshop instructor with a passion for building innovative products and user interfaces using cutting edge web technologies."
        name="description"
      />
      <link href="/favicon.ico" rel="icon" sizes="any" />
      <link href={favicon.src} rel="icon" type="image/png" />
      <link href={appleTouchIcon.src} rel="apple-touch-icon" />
      <link href={appleTouchIcon.src} rel="apple-touch-icon" />
      <link href="/site.webmanifest" rel="manifest" />
    </>
  );
}
