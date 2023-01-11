import { calSans, inter, matter } from "@/lib/fonts";
import styles from "./styles.module.css";
import formatTime from "@/lib/time";

export default function RaceInfoBar({
  minutes,
  seconds,
  grossWPM,
}: {
  minutes: number;
  seconds: number;
  grossWPM: number;
}) {
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
        }}
      >
        <p className={`${calSans.className} ${styles.text}`}>
          <span style={{ color: "#656565" }}>time : </span>
          {formatTime(minutes, seconds)}
        </p>

        <p
          style={{
            marginLeft: "60px",
          }}
          className={`${calSans.className} ${styles.text}`}
        >
          <span style={{ color: "#656565" }}>speed : </span>
          {grossWPM} WPM
        </p>
      </div>
    </div>
  );
}
