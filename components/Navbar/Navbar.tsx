import { inter } from "@/lib/fonts";
import { unstable_getServerSession } from "next-auth/next";
import Link from "next/link";
import LoginButton from "@/components/Buttons/LoginButton";
import styles from "./styles.module.css";
import Logo from "./Logo";
import User from "./User";

export default async function Navbar() {
  const session = await unstable_getServerSession();

  return (
    <div className={styles.container}>
      <Logo />

      {session?.user?.email ? (
        <User email={session.user?.email || ""} />
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
