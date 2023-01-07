"use client";

import LoginButton from "@/components/Buttons/LoginButton";
import styles from "./styles.module.css";
import Logo from "./Logo";
import User from "./User";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Logo />

      <div className={styles.user}>
        {session?.user?.email ? (
          <User email={session.user?.email || ""} />
        ) : (
          <LoginButton />
        )}
      </div>

      <button
        onClick={() => {
          signOut();
        }}
      >
        Signout
      </button>
    </div>
  );
}
