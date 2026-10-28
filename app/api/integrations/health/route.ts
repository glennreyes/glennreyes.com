import { timingSafeEqual } from 'node:crypto';
import { revalidateTag } from 'next/cache';
import { z } from 'zod';

import { normalizeHealthExport } from '@/lib/activities';
import { saveRunningActivities } from '@/lib/activity-store';

const maxBytes = 1024 * 1024;
export async function POST(request: Request) {
  const token = process.env.ACTIVITY_SYNC_TOKEN;
  if (token === undefined || token.length < 32) {
    return Response.json(
      { error: 'Activity import is not configured' },
      { status: 503 },
    );
  }
  const expected = Buffer.from('Bearer ' + token);
  const provided = Buffer.from(request.headers.get('authorization') ?? '');
  if (
    expected.length !== provided.length ||
    !timingSafeEqual(expected, provided)
  ) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (request.body === null) {
    return Response.json({ error: 'Missing JSON body' }, { status: 400 });
  }
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      chunks.push(value);
      if (
        chunks.reduce((size, chunk) => size + chunk.byteLength, 0) > maxBytes
      ) {
        await reader.cancel();
        return Response.json(
          { error: 'Payload exceeds 1 MB' },
          { status: 413 },
        );
      }
    }
    const input: unknown = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    const activities = normalizeHealthExport(input);
    await saveRunningActivities(activities);
    if (activities.length > 0) {
      revalidateTag('activities', 'max');
    }
    return Response.json({ imported: activities.length });
  } catch (error) {
    if (error instanceof SyntaxError || error instanceof z.ZodError) {
      return Response.json(
        { error: 'Invalid Health Auto Export v2 payload' },
        { status: 400 },
      );
    }
    return Response.json(
      { error: 'Activity import is temporarily unavailable' },
      { status: 503 },
    );
  } finally {
    reader.releaseLock();
  }
}
