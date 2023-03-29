import NextAuth, { AuthOptions } from "next-auth";
import { OAuthConfig } from "next-auth/providers";
import GithubProvider from "next-auth/providers/github";

const customProvider: OAuthConfig<any> = {
  id: "fitbit",
  name: "Fitbit",
  type: "oauth",
  //authorization: `https://www.fitbit.com/oauth2/authorize?response_type=code&redirect&client_id=${process.env.CLIENT_ID}&scope=profile+settings+sleep`,
  authorization: {
    url: "https://www.fitbit.com/oauth2/authorize",
    params: {
      response_type: "code",
      client_id: process.env.CLIENT_ID,
      scope: "profile settings sleep",
      redirect_uri: "http://localhost:3000/api/auth/callback/fitbit",
    },
  },
  token: {
    url: "https://api.fitbit.com/oauth2/token",
    params: {
      grant_type: "authorization_code",
      client_id: process.env.CLIENT_ID,
      expires_in: 604800,
      redirect_uri: "http://localhost:3000/api/auth/callback/fitbit",
    },
  },
  userinfo: "https://api.fitbit.com/1/user/-/profile.json",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.SECRET,
  profile(profile: any) {
    return {
      id: profile.user.encodedId,
      name: profile.user.displayName,
      email: "s134542@dtu.dk",
    };
  },
};

export const authOptions: AuthOptions = {
  secret: process.env.NextAuth_SECRET,
  providers: [customProvider],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token;
      return session;
    },
  },
};

export default NextAuth(authOptions);
