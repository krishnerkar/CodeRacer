import { inter, matter } from "@/lib/fonts";
import styles from "./styles.module.css";
import ArrowRightIcon from "@/public/icons/arrowRight.svg";
import Image from "next/image";

export default function NextRaceButton({
  nextRace,
}: {
  nextRace: () => void;
}) {
  return (
    <button
      style={{
        padding: "15px 30px",
        fontSize: "20px",
        marginTop: "30px",
        background: "#8DD66D",
      }}
      className={`${matter.className} ${styles.button}`}
      onClick={nextRace}
    >
      next race
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
  );
}
