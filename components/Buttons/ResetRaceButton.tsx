import { inter } from "@/lib/fonts";
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
      className={`${inter.className} ${styles.button}`}
      onClick={resetRace}
    >
      Reset Race
      <Image
        style={{
          marginLeft: "15px",
        }}
        src={ResetIcon}
        alt="Reset"
        width={25}
        height={25}
      />
    </button>
  );
}
