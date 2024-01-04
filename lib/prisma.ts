import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export let prisma: PrismaClient;

// Manage database connections in a serverless environment
// https://github.com/prisma/prisma/issues/5007#issuecomment-618433162
// https://github.com/prisma/prisma/issues/5050
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  const { prisma: globalPrisma } = global;

  if (globalPrisma) {
    prisma = globalPrisma;
  } else {
    global.prisma = new PrismaClient();
  }
}
