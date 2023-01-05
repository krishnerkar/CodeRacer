"use client";

import styles from "./home.module.css";
import { motion } from "framer-motion";
import StartChallengeButton from "@/components/Buttons/StartChallengeButton";
import Leaderboard from "@/components/Leaderboard/leaderboard";
import { inter } from "@/lib/fonts";
import { pageAnimationVariants } from "@/lib/animation";
import Logo from "@/components/Navbar/Logo";

export default function Home() {
  return (
    <main
     
      className={styles.main}
    >
      <div className={styles.desktop}>
        <div>
          <h1 className={`${inter.className} ${styles.heading}`}>
            Typing Challenges for Programmers
          </h1>
          <h2 className={`${inter.className} ${styles.subheading}`}>
            Race to the Top with CodeRacer: The Premier Typing Test for
            Programmers. Join the Community and Compete to be the Best. Improve
            Your Coding Speed and Accuracy and Become the Ultimate CodeRacer
          </h2>
          <StartChallengeButton />
        </div>

        <Leaderboard />
      </div>

      <div className={styles.mobile}>
        <Logo />
        <h1
          style={{
            marginTop: "80px",
            textAlign: "center",
          }}
          className={`${inter.className} ${styles.heading}`}
        >
          Typing Challenges for Programmers
        </h1>
        <h2
          style={{
            textAlign: "center",
          }}
          className={`${inter.className} ${styles.subheading}`}
        >
          Race to the Top with CodeRacer: The Premier Typing Test for
          Programmers. Join the Community and Compete to be the Best. Improve
          Your Coding Speed and Accuracy and Become the Ultimate CodeRacer
        </h2>
        <StartChallengeButton />
      </div>
    </main>
  );
}
