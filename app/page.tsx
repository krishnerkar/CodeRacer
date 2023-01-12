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
          className={`${calSans.className} ${styles.heading}`}
        >
          {"a typing game for people who write code </>"}
        </h1>
        <h2
          style={{
            textAlign: "center",
            color: "#CECECE",
          }}
          className={`${matter.className} ${styles.subheading}`}
        >
          {
            "as a programmer, you need to be able to type fast and accurately. don't waste your time typing meaningless paragraphs. test your true typing speed with coderacer and take your coding skills to the next level."
          }
        </h2>
        <StartChallengeButton />
        <div
          className={`${matter.className} ${styles.mobile}`}
          style={{
            margin: "80px",
            fontSize: "16px",
            marginBottom: "0px",
            display: "block",
            textAlign: "center",
          }}
        >
          Made by{" "}
          <a
            href="https://twitter.com/krishnerkar"
            target="_blank"
            rel="noreferrer"
          >
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Krish Nerkar
            </span>
          </a>
        </div>
      </div>
    </motion.main>
  );
}
