"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import GithubIcon from "@/public/icons/github.svg";
import { signIn } from "next-auth/react";
import { inter, matter } from "@/lib/fonts";
import { useState } from "react";

export default function LoginButton() {
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);
    signIn("github").then((res) => {});
  };
  return (
    <button
      disabled={loading}
      style={{
        fontSize: "18px",
        padding: "8px 15px",
      }}
      onClick={onClick}
      className={`${matter.className} ${styles.button}`}
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
      <div
        style={{
          marginLeft: "30px",
          display: loading ? "block" : "none",
        }}
        className={styles.spinner}
      />
    </button>
  );
}
