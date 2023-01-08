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
    <motion.main
      variants={pageAnimationVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className={styles.main}
    >
      <div className={styles.desktop}>
        <div>
          <h1 className={`${inter.className} ${styles.heading}`}>
            Typing Challenges for Programmers
          </h1>
          <h2 className={`${inter.className} ${styles.subheading}`}>
            {
              "Improve your programming speed with CodeRacer! As a programmer, your typing speed is crucial to your productivity. Don't waste your time typing out meaningless paragraphs - test your real coding speed with CodeRacer and see how you measure up."
            }
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
          Improve your programming speed with CodeRacer! As a programmer, your
          typing speed is crucial to your productivity. Don't waste your time
          typing out meaningless paragraphs - test your real coding speed with
          CodeRacer and see how you measure up.
        </h2>
        <StartChallengeButton />
      </div>
    </motion.main>
  );
}
