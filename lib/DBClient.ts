import { PrismaClient } from "@prisma/client";

const singletonClient = () => new PrismaClient();

declare global {
  var prismaGlobal: undefined | ReturnType<typeof singletonClient>;
}

const client = global.prismaGlobal || singletonClient();

if (process.env.NODE_ENV !== "production") global.prismaGlobal = client;

export default client;
