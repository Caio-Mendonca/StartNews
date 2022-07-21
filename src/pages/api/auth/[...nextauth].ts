import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: 'efa404e2114ef2c7d8b5',
      clientSecret: '8a0d6b3016fd984948164a5e24a6b8ea9ac958fb',
      authorization: {
        params: {
          scope: 'read:user',
        },
      },    
    }),
  ],
})