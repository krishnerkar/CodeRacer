import { Tooltip } from "@/components/Tooltip/Tooltip";
import { inter } from "@/lib/fonts";
import styles from "./styles.module.css";

export default function InviteFriendsButton() {
  return (
    <Tooltip text="Coming soon!" delay={false}>
      <button
        style={{
          padding: "15px 30px",
          fontSize: "20px",
        }}
        disabled
        className={`${inter.className} ${styles.button}`}
      >
        Invite Friends
      </button>
    </Tooltip>
  );
}
