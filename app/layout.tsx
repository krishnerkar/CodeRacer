import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Navbardiv = await Navbar();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        {Navbardiv}
        {children}
      </body>
    </html>
  );
}
