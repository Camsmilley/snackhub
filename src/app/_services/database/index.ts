import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

export default database;
