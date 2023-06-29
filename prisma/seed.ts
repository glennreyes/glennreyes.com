import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(async () => {
  console.info('Seeding database...', prisma);
})();
