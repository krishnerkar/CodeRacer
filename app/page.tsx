import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./home.module.css";
import ArrowRightIcon from "../public/arrowRight.svg";
import Link from "next/link";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default async function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className={`${inter.className} ${styles.heading}`}>
          Typing Challenges for Programmers
        </h1>
        <h2 className={`${inter.className} ${styles.subheading}`}>
          Race to the Top with CodeRacer: The Premier Typing Test for
          Programmers. Join the Community and Compete to be the Best. Improve
          Your Coding Speed and Accuracy and Become the Ultimate CodeRacer
        </h2>
        <Link href="/play">
          <button
            style={{
              padding: "15px 30px",
              fontSize: "20px",
              marginTop: "30px",
            }}
            className={`${inter.className} ${styles.button}`}
          >
            Start a challenge
            <Image
              style={{
                marginLeft: "15px",
              }}
              src={ArrowRightIcon}
              alt="Arrow-Right"
              width={25}
              height={25}
            />
          </button>
        </Link>
      </div>

      <div className={styles.leaderboardContainer}>
        <h2
          style={{
            fontWeight: "400",
            fontSize: "25px",
            padding: "50px",
          }}
          className={inter.className}
        >
          Leaderboard
        </h2>
      </div>
    </main>
  );
}
