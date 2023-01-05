import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "./providers";
import mixpanel from "mixpanel-browser";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  mixpanel.init("d5d588f7d38b9c1a1b4e6133ca1af840");

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Providers>
        <body>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
