"use client";

import styles from "./home.module.css";
import { motion } from "framer-motion";
import StartChallengeButton from "@/components/Buttons/StartChallengeButton";
import Leaderboard from "@/components/Leaderboard/leaderboard";
import { pageAnimationVariants } from "@/lib/animation";
import Logo from "@/components/Navbar/Logo";
import { calSans, inter, matter } from "@/lib/fonts";

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
        <h1
          className={calSans.className}
          style={{
            fontSize: "70px",
          }}
        >
          {"a typing game for people who write code </>"}
        </h1>

        <h2
          className={matter.className}
          style={{
            color: "#CECECE",
            fontWeight: 500,
            fontSize: "25px",
            marginTop: "40px",
          }}
        >
          {
            "as a programmer, you need to be able to type fast and accurately. don't waste your time typing meaningless paragraphs. test your true typing speed with coderacer and take your coding skills to the next level."
          }
        </h2>

        <StartChallengeButton />

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
