import { inter } from "@/lib/fonts";
import Image from "next/image";
import styles from "./styles.module.css";
import ArrowRightIcon from "@/public/arrowRight.svg";
import Link from "next/link";

export default function StartChallengeButton() {
  return (
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
  );
}
