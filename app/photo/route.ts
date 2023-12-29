import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export async function GET() {
  // Read the JPG photo from the assets/images directory
  const path = join(process.cwd(), 'assets', 'images', 'photo.jpg');
  const buffer = await readFile(path);

  // Return the photo as a response with the correct content type
  return new Response(buffer, {
    headers: { 'Content-Type': 'image/jpeg' },
  });
}
