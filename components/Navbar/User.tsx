import { inter } from "@/lib/fonts";
import styles from "./styles.module.css";

export default function User({ email }: { email: string }) {
  return (
    <div>
      <p className={`${inter.className} ${styles.email}`}>{email}</p>
    </div>
  );
}
