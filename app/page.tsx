import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import ArrowRightIcon from "../public/arrowRight.svg";
import { signIn } from "next-auth/react";
import Navbar from "@/components/Navbar";
import { unstable_getServerSession } from "next-auth/next";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
export default async function Home() {
  return (
    <main
      style={{
        margin: "30px",
      }}
    >
      <div>
        <h1
          style={{
            fontWeight: "600",
            fontSize: "44px",
            marginTop: "100px",
          }}
          className={inter.className}
        >
          Typing Challenges for Programmers
        </h1>
        <h2
          style={{
            fontWeight: "400",
            fontSize: "22px",
            marginTop: "30px",
            width: "80%",
            lineHeight: "155.52%",
          }}
          className={inter.className}
        >
          Race to the Top with CodeRacer: The Premier Typing Test for
          Programmers. Join the Community and Compete to be the Best. Improve
          Your Coding Speed and Accuracy and Become the Ultimate CodeRacer
        </h2>
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
      </div>

      <div
        style={{
          backgroundColor: "#18181B",
          marginTop: "100px",
          width: "100%",
          height: "100vw",
          borderRadius: "20px",
        }}
      >
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
