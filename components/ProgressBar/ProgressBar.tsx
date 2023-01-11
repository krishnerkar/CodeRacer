'use client'

import { calSans, inter } from "@/lib/fonts";
import { useSession } from "next-auth/react";
import styles from "./styles.module.css";

export default function ProgressBar({ width }: { width: number }) {
  const { data: session } = useSession();


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={`${calSans.className} ${styles.name}`}>
          {session?.user?.name || "Guest"} 
        </p>
        <div className={styles.progress}>
          <div
            style={{
              width: `${width}%`,
            }}
            className={styles.progressValue}
          ></div>
        </div>
      </div>
    </div>
  );
}
