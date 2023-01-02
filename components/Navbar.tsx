import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./home.module.css";
import GithubIcon from "../public/github.svg";
import { signIn } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
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
