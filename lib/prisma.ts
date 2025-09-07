import { PrismaClient } from '@prisma/client';

declare global {
   
  var prisma: PrismaClient | undefined;
}

export let prisma: PrismaClient;

// Manage database connections in a serverless environment
// https://github.com/prisma/prisma/issues/5007#issuecomment-618433162
// https://github.com/prisma/prisma/issues/5050
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }

  const { prisma: globalPrisma } = global;

  prisma = globalPrisma;
}
