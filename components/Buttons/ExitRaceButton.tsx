import { inter, matter } from "@/lib/fonts";
import styles from "./styles.module.css";
import CrossIcon from "@/public/icons/cross.svg";
import Image from "next/image";

export default function ExitRaceButton() {
  return (
    <button
      style={{
        padding: "15px 30px",
        fontSize: "20px",
        marginTop: "30px",
        background: "#DB5959",
      }}
      className={`${matter.className} ${styles.button}`}
      onClick={() => {
        window.location.href = "/";
      }}
    >
      exit challenge
      <Image
        style={{
          marginLeft: "15px",
        }}
        src={CrossIcon}
        alt="Arrow-Right"
        width={20}
        height={20}
      />
    </button>
  );
}
