import { source_code } from "@/lib/fonts";
import styles from "./styles.module.css";

export default function CodeInput({
  currWord,
  onChange,
  handleKeyDown,
  handleInputFocus,
  isRaceFinished,
  error,
}: {
  currWord: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleInputFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  isRaceFinished: boolean;
  error: boolean;
}) {
  return (
    <input
      id="input"
      className={`${styles.input} ${source_code.className}`}
      value={currWord}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      onFocus={handleInputFocus}
      placeholder={isRaceFinished ? "Type the above code here..." : ""}
      disabled={isRaceFinished}
      style={{
        border: error ? "2px solid #ff3333" : "1px solid #fff",
        background: error
          ? "#FFC5C5"
          : isRaceFinished
          ? "rgba(255, 255, 255, 0.57)"
          : "#fff",
        cursor: isRaceFinished ? "not-allowed" : "text",
      }}
    ></input>
  );
}
