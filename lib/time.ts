import { connection } from 'next/server';

export async function getTimestamp() {
  await connection();

  return Date.now();
}
