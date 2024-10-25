import { PrismaClient } from "@prisma/client";
import { auth } from "../auth";

const database = new PrismaClient();
// use `prisma` in your application to read and write data in your DB

export default database;


