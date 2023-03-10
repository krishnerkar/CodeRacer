import { inter, matter } from "@/lib/fonts";
import styles from "./styles.module.css";
import ResetIcon from "@/public/icons/reset.svg";
import Image from "next/image";

export default function ResetRaceButton({
  resetRace,
}: {
  resetRace: () => void;
}) {
  return (
    <button
      style={{
        padding: "15px 30px",
        fontSize: "20px",
        marginTop: "30px",
      }}
      className={`${matter.className} ${styles.button}`}
      onClick={resetRace}
    >
      retry challenge
      <Image
        style={{
          marginLeft: "15px",
        }}
        src={ResetIcon}
        alt="Reset"
        width={20}
        height={20}
      />
    </button>
  );
}
