import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";
const { handler, auth, signIn, signOut } = NextAuth(authOptions)
export { signIn, signOut, auth }
export { handler as GET, handler as POST }