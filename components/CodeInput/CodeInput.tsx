"use client";

import { source_code } from "@/lib/fonts";
import { useEffect } from "react";
import styles from "./styles.module.css";

export default function CodeInput({
  currWord,
  onChange,
  handleKeyDown,
  isRaceFinished,
  error,
}: {
  currWord: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isRaceFinished: boolean;
  error: boolean;
}) {
  useEffect(() => {
    if (document != null) {
      const input = document.getElementById("input") as HTMLInputElement;
      input?.addEventListener("selectstart", function (e) {
        e.preventDefault();
      });
      input?.addEventListener(
        "select",
        function () {
          this.selectionStart = this.selectionEnd;
        },
        false
      );
      input?.addEventListener("paste", function (e) {
        e.preventDefault();
      });
    }
  }, []);

  return (
    <input
      autoFocus
      id="input"
      autoComplete="off"
      className={`${styles.input} ${source_code.className}`}
      value={currWord}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      placeholder={!isRaceFinished ? "Type the above code here..." : ""}
      disabled={isRaceFinished}
      style={{
        border: error ? "2px solid #ff3333" : "2px solid #fff",
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
