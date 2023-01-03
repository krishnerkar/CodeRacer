import { Inter } from "@next/font/google";
import { unstable_getServerSession } from "next-auth/next";
import Link from "next/link";
import LoginButton from "./LoginButton";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default async function Navbar() {
  const session = await unstable_getServerSession();
  return (
    <div
      style={{
        display: "flex",
        margin: "30px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link href="/">
        <div>
          <p
            style={{
              display: "flex",
              fontSize: "24px",
              fontWeight: "800",
            }}
            className={inter.className}
          >
            CodeRacer
          </p>
        </div>
      </Link>

      {session ? (
        <div>
          <p
            className={inter.className}
            style={{
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            {session.user?.email}
          </p>
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
