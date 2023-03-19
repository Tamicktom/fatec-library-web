import NextAuth from "next-auth";
import { authOptions } from "pnpm/server/auth";

export default NextAuth(authOptions);
