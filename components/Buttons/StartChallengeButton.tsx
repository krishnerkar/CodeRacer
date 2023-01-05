import { inter } from "@/lib/fonts";
import Image from "next/image";
import styles from "./styles.module.css";
import ArrowRightIcon from "@/public/icons/arrowRight.svg";
import Link from "next/link";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import mixpanel from "mixpanel-browser";

export default function StartChallengeButton() {
  return (
    <>
      <div className={styles.desktop}>
        <Link href="/play">
          <button
            onClick={() => { 
              mixpanel?.track("Start Challenge Clicked");
            }}
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
      <div className={styles.mobile}>
        <Tooltip delay={false} text="Only availiable on desktop">
          <button
            disabled
            style={{
              padding: "15px 30px",
              fontSize: "20px",
              marginTop: "50px",
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
        </Tooltip>
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 400,
            color: "#ffffff",
            marginTop: "20px",
          }}
          className={inter.className}
        >
          Only availiable on desktop
        </h3>
      </div>
    </>
  );
}
