import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js App Router Keycloak Example",
  description:
    "This is a sample Next.js application that demonstrates how to integrate Keycloak for authentication using NextAuth with App router. The app allows uploading files to a storage service and showcases how to manage user sessions and authentication using Keycloak.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
