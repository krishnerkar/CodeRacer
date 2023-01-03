import { inter } from "@/lib/fonts";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Logo() {
  return (
    <Link href="/">
      <div>
        <p className={`${inter.className} ${styles.logo}`}>CodeRacer</p>
      </div>
    </Link>
  );
}
