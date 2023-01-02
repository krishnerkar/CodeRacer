"use client";
import Image from "next/image";
import styles from "../app/page.module.css";
import GithubIcon from "../public/github.svg";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  const onClick = () => {
    console.log("clicked");
    signIn("github");
  };
  return (
    <button
      style={{
        fontSize: "18px",
        padding: "8px 15px",
      }}
      onClick={onClick}
      className={styles.button}
    >
      <Image
        style={{
          marginRight: "10px",
        }}
        src={GithubIcon}
        alt="Github"
        width={20}
        height={20}
      />
      Login
    </button>
  );
}
