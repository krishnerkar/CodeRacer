"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import GithubIcon from "@/public/icons/github.svg";
import { signIn, useSession } from "next-auth/react";
import { inter } from "@/lib/fonts";

export default function LoginButton() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("unauthenticated");
    },
  }); 


  const onClick = () => {
    signIn("github").then((res) => {
      console.log(res);
    });
  };
  return (
    <button
      style={{
        fontSize: "18px",
        padding: "8px 15px",
      }}
      onClick={onClick}
      className={`${inter.className} ${styles.button}`}
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
