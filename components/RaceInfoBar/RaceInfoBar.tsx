import { inter } from "@/lib/fonts";
import InviteFriendsButton from "@/components/Buttons/InviteFriendsButton";
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
        <p className={`${inter.className} ${styles.text}`}>
          Elapsed Time: {formatTime(minutes, seconds)}
        </p>

        <p
          style={{
            marginLeft: "60px",
          }}
          className={`${inter.className} ${styles.text}`}
        >
          Speed: {grossWPM} WPM
        </p>
      </div>

      <InviteFriendsButton />
    </div>
  );
}
