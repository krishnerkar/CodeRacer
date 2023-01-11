import { calSans, matter } from "@/lib/fonts";
import { SimpleUser } from "pages/api/getLeaderboard";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import styles from "./styles.module.css";

export default function Leaderboard() {
  const [data, setData] = useState<SimpleUser[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!data) {
      setLoading(true);
      fetch("/api/getLeaderboard").then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setData(data);
          });
        } else {
          toast.error("Something went wrong");
        }
        setLoading(false);
      });
    }
  });

  return (
    <div className={styles.container}>
      <h2
        style={{
          fontWeight: "800",
          fontSize: "25px",
          padding: "0px 50px",
          marginBottom: "50px",
        }}
        className={calSans.className}
      >
        leaderboard
      </h2>

      {loading ? (
        <div
          style={{
            margin: 50,
            width: 40,
            height: 40,
          }}
          className={styles.spinner}
        />
      ) : (
        <ul className={`${styles.responsiveTable} ${matter.className}`}>
          {data?.map((user, index) => {
            if (index > 14) return;
            return (
              <li key={index} className={styles.tableRow}>
                <div className={`${styles.col} ${styles.col1}`}>
                  {index + 1}
                </div>

                <div
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  className={`${styles.col} ${styles.col2}`}
                >
                  <a
                    href={`
                https://github.com/${user.username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {user.username}
                  </a>
                </div>
                <div className={`${styles.col} ${styles.col3}`}>
                  {user.topspeed} WPM
                </div>
                <div className={`${styles.col} ${styles.col4}`}></div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
