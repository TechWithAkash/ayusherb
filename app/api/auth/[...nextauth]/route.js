
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID); // Add this for debugging

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
