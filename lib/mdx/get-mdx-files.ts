import { readdirSync } from 'node:fs';

export function getMDXFiles(dir: string) {
  return readdirSync(dir).filter((path) => /\.mdx?$/.test(path));
}
