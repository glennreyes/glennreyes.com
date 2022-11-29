import { ContentSection } from '../components/home/ContentSection';
import { HeroSection } from '../components/home/HeroSection';
import { PhotosSection } from '../components/home/PhotosSection';
import { queryInstagramPhotos } from '../utils/instagram';

export default async function HomePage() {
  const photos = await queryInstagramPhotos();

  return (
    <>
      <HeroSection />
      <PhotosSection photos={photos} />
      <ContentSection />
    </>
  );
}
