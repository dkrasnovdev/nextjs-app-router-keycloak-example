import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions: AuthOptions = {
  providers: [
    // Configure the Keycloak provider
    KeycloakProvider({
      clientId: process.env.OIDC_CLIENT_ID || "",
      clientSecret: process.env.OIDC_CLIENT_SECRET || "",
      issuer: process.env.OIDC_ISSUER,
    }),
  ],
};

// Create NextAuth handler using the defined authentication options
const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests
export { handler as GET, handler as POST };
