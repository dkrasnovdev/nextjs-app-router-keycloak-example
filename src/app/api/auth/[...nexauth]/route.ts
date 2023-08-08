import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { ProviderType } from "next-auth/providers/index";
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

// Declare custom types for NextAuth modules
declare module "next-auth" {
  // Define custom session properties
  interface Session {
    user: {
      sub: string;
      email_verified: boolean;
      name: string;
      preferred_username: string;
      given_name: string;
      family_name: string;
      email: string;
      id: string;
      org_name?: string;
      telephone?: string;
    };
    error?: string | null;
    access_token: string;
  }

  // Define custom user properties
  interface User {
    sub: string;
    email_verified: boolean;
    name: string;
    telephone: string;
    preferred_username: string;
    org_name: string;
    given_name: string;
    family_name: string;
    email: string;
    id: string;
  }

  // Define custom account properties
  interface Account {
    provider: string;
    type: ProviderType;
    id: string;
    access_token: string;
    refresh_token: string;
    idToken: string;
    expires_in: number;
    refresh_expires_in: number;
    token_type: string;
    id_token: string;
    "not-before-policy": number;
    session_state: string;
    scope: string;
  }

  // Define custom profile properties
  interface Profile {
    sub?: string;
    email_verified: boolean;
    name?: string;
    telephone: string;
    preferred_username: string;
    org_name: string;
    given_name: string;
    family_name: string;
    email?: string;
  }
}

// Declare custom JWT properties
declare module "next-auth/jwt" {
  interface JWT {
    access_token: string;
    refresh_token: string;
    refresh_expires_in: number;
    expires_in: number;
    user: {
      sub: string;
      email_verified: boolean;
      name: string;
      telephone: string;
      preferred_username: string;
      org_name: string;
      given_name: string;
      family_name: string;
      email: string;
      id: string;
    };
    error?: string | null;
  }
}
