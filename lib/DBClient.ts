import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";

const singletonClient = () => {
  const neon = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaNeon(neon);
  const prisma = new PrismaClient({ adapter });
  return prisma;
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof singletonClient>;
}

const client = global.prismaGlobal || singletonClient();

if (process.env.NODE_ENV !== "production") global.prismaGlobal = client;

export default client;
