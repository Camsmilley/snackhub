import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import database from "../database";
import github from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(database),
  session: {
    strategy: "jwt",
  },
  providers: [github],
});
