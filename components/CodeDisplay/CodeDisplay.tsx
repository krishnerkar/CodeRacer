import { source_code } from "@/lib/fonts";
import styles from "./styles.module.css";

export default function CodeDisplay({
  code,
  currCharIndex,
  characters,
  value,
  isRaceFinished,
  correctRef,
  language,
}: {
  code: string;
  currCharIndex: number;
  characters: string[];
  value: string;
  isRaceFinished: boolean;
  correctRef: React.MutableRefObject<HTMLSpanElement | null>;
  language: string;
}) {
  return (
    <pre className={`${source_code.className} ${styles.container}`}>
      <span className={`${styles.typedChars} ${language}`} ref={correctRef}>
        {code.slice(0, currCharIndex)}
      </span>
      {characters.map((char, index) => {
        if (index < currCharIndex) {
          return null;
        }
        return (
          <span
            key={index}
            style={{
              color:
                index === currCharIndex
                  ? value == char
                    ? "#fff"
                    : "#000"
                  : "#fff",
              background:
                index === currCharIndex
                  ? value == char
                    ? "transparent"
                    : isRaceFinished
                    ? "trasnparent"
                    : "rgba(255, 255, 255)"
                  : "transparent",
            }}
            className={styles.untypedChars}
          >
            {index === currCharIndex && char == "\n" ? <>&#8629;</> : ""}
            {char}
          </span>
        );
      })}
    </pre>
  );
}
