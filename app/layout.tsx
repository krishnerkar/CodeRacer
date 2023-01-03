import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "./providers";

export default async function RootLayout({
  children,
}: // session,
{
  children: React.ReactNode;
  // session: Session;
}) {
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
