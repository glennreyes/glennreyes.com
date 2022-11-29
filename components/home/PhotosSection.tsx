import { PhotosSectionPhoto } from '../ui/PhotosSectionPhoto';
import { PhotosSection as PhotosSectionBase } from '../ui/PhotosSection';

interface Photo {
  id: string;
  url: string;
}

interface PhotosSectionProps {
  photos: Photo[];
}

export function PhotosSection({ photos }: PhotosSectionProps) {
  return (
    <PhotosSectionBase>
      {photos.map((photo) => (
        <PhotosSectionPhoto alt="" key={photo.id} src={photo.url} />
      ))}
    </PhotosSectionBase>
  );
}
