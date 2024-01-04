import { readdirSync } from 'node:fs';

export const getMDXFiles = (dir: string) => readdirSync(dir).filter((path) => /\.mdx?$/.test(path));
