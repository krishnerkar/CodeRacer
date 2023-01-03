"use client";

import styles from "./home.module.css";
import { motion } from "framer-motion";
import StartChallengeButton from "@/components/Buttons/StartChallengeButton";
import Leaderboard from "@/components/Leaderboard/leaderboard";
import { inter } from "@/lib/fonts";
import { pageAnimationVariants } from "@/lib/animation";

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
    </motion.main>
  );
}
