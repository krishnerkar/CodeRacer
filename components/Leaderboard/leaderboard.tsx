import { inter } from "@/lib/fonts";
import styles from "./styles.module.css";

export default function Leaderboard() {
  return (
    <div className={styles.container}>
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
  );
}
