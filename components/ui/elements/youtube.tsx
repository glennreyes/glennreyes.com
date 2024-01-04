interface YouTubeProps {
  title: string;
  url: string;
}

export const YouTube = ({ title, url }: YouTubeProps) => {
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
};
