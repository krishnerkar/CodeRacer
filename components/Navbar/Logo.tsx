import { calSans } from "@/lib/fonts";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Logo() {
  return (
    <Link href="/">
      <div>
        <p className={`${calSans.className} ${styles.logo}`}>coderacer</p>
      </div>
    </Link>
  );
}
