import { inter } from "@/lib/fonts";
import { SimpleUser } from "pages/api/getLeaderboard";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Leaderboard() {
  const [data, setData] = useState<SimpleUser[]>();

  if (!data) {
    fetch("/api/getLeaderboard")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  return (
    <div className={styles.container}>
      <h2
        style={{
          fontWeight: "400",
          fontSize: "25px",
          padding: "0px 50px",
        }}
        className={inter.className}
      >
        Leaderboard
      </h2>

      <ul className={`${styles.responsiveTable} ${inter.className}`}>
        {data?.map((user, index) => {
          if (index > 9) return;
          return (
            <li key={index} className={styles.tableRow}>
              <div className={`${styles.col} ${styles.col1}`} data-label="Rank">
                {index + 1}
              </div>
              <div
                className={`${styles.col} ${styles.col2}`}
                data-label="Customer Name"
              >
                {user.username}
              </div>
              <div
                className={`${styles.col} ${styles.col3}`}
                data-label="Amount"
              >
                {user.topspeed} WPM
              </div>
              <div
                className={`${styles.col} ${styles.col4}`}
                data-label="Payment Status"
              ></div>
            </li>
          );
        })}
        {/* 
        <li className="table-row">
          <div className={`${styles.col} ${styles.col1}`} data-label="Job Id">
            1
          </div>
          <div
            className={`${styles.col} ${styles.col2}`}
            data-label="Customer Name"
          >
            Krish-Nerkar
          </div>
          <div className={`${styles.col} ${styles.col3}`} data-label="Amount">
            750 WPM
          </div>
          <div
            className={`${styles.col} ${styles.col4}`}
            data-label="Payment Status"
          ></div>
        </li> */}
      </ul>
    </div>
  );
}
