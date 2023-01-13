import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from "./providers";
import styles from "./home.module.css";
import { calSans, matter } from "@/lib/fonts";
import { AnalyticsWrapper } from "./analytics";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <main
              style={{
                width: "100%",
                maxWidth: "1500px",
                flex: 1,
              }}
              className={styles.main}
            >
              <Navbar />

              {children}
              <AnalyticsWrapper/>
              <br></br>
              <div
                className={`${matter.className} ${styles.desktop}`}
                style={{
                  margin: "80px",
                  fontSize: "20px",
                  marginBottom: "0px",
                }}
              >
                Made by{" "}
                <a
                  href="https://twitter.com/krishnerkar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Krish Nerkar
                  </span>
                </a>
              </div>
            </main>
          </div>
        </body>
      </Providers>
    </html>
  );
}
