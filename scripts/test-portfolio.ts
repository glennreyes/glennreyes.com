import { execFileSync } from 'node:child_process';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

import { talks } from '../drizzle/schema';

const directory = await mkdtemp(join(tmpdir(), 'portfolio-e2e-'));
const url = pathToFileURL(join(directory, 'archive.db')).href;
const env = {
  ...process.env,
  TURSO_DATABASE_URL: url,
  TURSO_AUTH_TOKEN: 'local-fixture',
  PORTFOLIO_TEST_BUILD: '1',
  PLAYWRIGHT_BUILD: '1',
  PLAYWRIGHT_HTML_OPEN: 'never',
};

function run(...args: string[]) {
  execFileSync('bun', args, { env, stdio: 'inherit' });
}

try {
  const client = createClient({ url });
  try {
    const schema = execFileSync(
      'bun',
      [
        'drizzle-kit',
        'export',
        '--dialect=sqlite',
        '--schema=./drizzle/schema.ts',
      ],
      { encoding: 'utf8' },
    );
    await client.executeMultiple(schema);

    // The conference importer attaches its talk appearance to an existing talk.
    const date = new Date('2026-03-01T00:00:00Z');
    await drizzle(client)
      .insert(talks)
      .values({
        id: 'fixture-talk',
        slug: 'ui-that-builds-itself',
        title: 'UI That Builds Itself',
        abstract: 'A talk about generative interfaces.',
        tags: ['react'],
        createdAt: date,
        updatedAt: date,
      });
  } finally {
    client.close();
  }

  run('run', 'conference:upsert', 'scripts/data/dutch-ai-conference-2026.json');
  run('run', 'build');
  run('run', 'test:e2e', ...process.argv.slice(2));
} finally {
  await rm(directory, { recursive: true, force: true });
}
