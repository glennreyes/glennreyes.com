import { connection } from 'next/server';

export async function getTimestamp() {
  await connection();

  return Date.now();
}

export async function getCurrentYear() {
  await connection();

  return new Date().getFullYear();
}
