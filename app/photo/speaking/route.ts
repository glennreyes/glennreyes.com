import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const GET = async () => {
  const path = join(process.cwd(), 'assets', 'images', 'photo-speaking.jpg');
  const buffer = await readFile(path);

  return new Response(new Uint8Array(buffer), {
    headers: { 'Content-Type': 'image/jpeg' },
  });
};
