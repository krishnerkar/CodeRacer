import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Providers } from "./providers";

export default async function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  const Navbardiv = await Navbar();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Providers session={session}>
        <body>
          {Navbardiv}
          {children}
        </body>
      </Providers>
    </html>
  );
}
