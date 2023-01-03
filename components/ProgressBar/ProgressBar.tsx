'use client'

import { inter } from "@/lib/fonts";
import { useSession } from "next-auth/react";
import styles from "./styles.module.css";

export default function ProgressBar({ width }: { width: number }) {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={`${inter.className} ${styles.name}`}>
          {session?.user?.name}
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
