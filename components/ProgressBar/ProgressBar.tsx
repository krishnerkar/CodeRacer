"use client";

import { calSans, matter } from "@/lib/fonts";
import generateName from "@/lib/randomUsernameGenerator";
import confetti from "canvas-confetti";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function ProgressBar({
  width,
  numberOfChars,
  isRunning,
  name,
  userTypedChars,
  isFinished,
  reset,
}: {
  width: number;
  numberOfChars: number;
  isRunning: boolean;
  name: string;
  userTypedChars: number;
  isFinished: boolean;
  reset: boolean;
}) {
  const { data: session } = useSession();

  const [computerTypedChars, setComputerTypedChars] = useState(0);
  const [userWon, setUserWon] = useState(false);
  const [computerWon, setComputerWon] = useState(false);

  useEffect(() => {
    setComputerTypedChars(0);
    setComputerWon(false);
    setUserWon(false);
  }, [reset]);

  useEffect(() => {
    if (computerTypedChars == 0) return;
    if (computerTypedChars < numberOfChars && isFinished) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setUserWon(true);
    } else if (!isFinished && computerTypedChars >= numberOfChars) {
      setComputerWon(true);
    }
  }, [isRunning, userTypedChars, computerTypedChars, isFinished]);

  useEffect(() => {
    if (
      (!isRunning && computerTypedChars == 0) ||
      computerTypedChars >= numberOfChars ||
      isFinished
    ) {
      return;
    }
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 5) + 4;
      setComputerTypedChars((prevWidth) => prevWidth + random);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, reset, computerTypedChars]);

  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            justifyContent: "space-between",
            gap: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <p className={`${calSans.className} ${styles.name}`}>
              {session?.user?.name || "Guest"}
              <br />
              {userWon && (
                <span
                  className={matter.className}
                  style={{
                    background: "#EABB16",
                    fontSize: "20px",
                  }}
                >
                  (winner 🥳)
                </span>
              )}
            </p>
          </div>
          <div>
            <p className={`${calSans.className} ${styles.name}`}>
              {name}
              <br />
              {computerWon && (
                <span
                  className={matter.className}
                  style={{
                    background: "#EABB16",
                    fontSize: "20px",
                  }}
                >
                  (winner 🥳)
                </span>
              )}
            </p>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            marginLeft: "50px",
          }}
          className={styles.wrapper}
        >
          <div className={styles.progress}>
            <div
              style={{
                width: `${width}%`,
              }}
              className={styles.progressValue}
            ></div>
          </div>{" "}
          <div className={styles.progress}>
            <div
              style={{
                width: `${(computerTypedChars / numberOfChars) * 100}%`,
              }}
              className={styles.progressValue}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
