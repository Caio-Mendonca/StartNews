import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: 'efa404e2114ef2c7d8b5',
      clientSecret: 'a494ae2a83e954e62fcaa96cbde8379b41408521',
      authorization: {
        params: {
          scope: 'read:user',
        },
      },    
    }),
  ],
})