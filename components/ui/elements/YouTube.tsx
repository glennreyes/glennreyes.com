interface YouTubeProps {
  title: string;
  url: string;
}

export function YouTube({ title, url }: YouTubeProps) {
  const isYouTube = url.startsWith('https://youtu.be/');

  if (!isYouTube) {
    return null;
  }

  const source = url.replace('https://youtu.be/', 'https://youtube.com/embed/');

  return (
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="aspect-video w-full rounded-2xl"
      src={source}
      title={title}
    />
  );
}
