"use client";

import styles from "./play.module.css";
import homeStyles from "../home.module.css";
import { Source_Code_Pro } from "@next/font/google";
import highlightjs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useEffect, useRef, useState } from "react";
import { Inter } from "@next/font/google";
import { useStopwatch } from "react-timer-hook";
import { Tooltip } from "@/components/Tooltip/Tooltip";

const code = Source_Code_Pro({
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export default function Play() {
  const correctRef = useRef<HTMLSpanElement | null>(null);

  const text = `def test_router_b():
    with client:
        response = client.get("/b")
    assert response.content == b"Hello B"
    assert response.headers["content-type"] == text_type`;

  const characters = text.split("");
  const charactersWithoutIndentation = text
    .split(/\n+/)
    .map((line) => {
      let strippedLine = line.replace(/^\s+/, "");
      return line.length > strippedLine.length
        ? "\n" + strippedLine
        : strippedLine;
    })
    .join("")
    .split("");

  const [currCharIndex, setCurrCharIndex] = useState(0);
  const [correctText, setCorrectText] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [currWord, setCurrWord] = useState("");
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [correctlyTypedCharacters, setCorrectlyTypedCharacters] = useState(0);

  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  const [isRaceFinished, setIsRaceFinished] = useState(false);
  const [percentageOfRaceFinished, setPercentageOfRaceFinished] = useState(0);
  const [grossWPM, setGrossWPM] = useState(0);

  useEffect(() => {
    if (correctRef.current) {
      highlightjs.highlightElement(correctRef.current);
    }
  }, [correctRef, correctText]);

  const handleInputFocus = () => {
    if (!isRunning && !isRaceFinished) {
      start();
    }
  };

  const calculateSpeed = () => {
    const minutesTaken = seconds / 60;
    const charactersTyped = correctText.length;

    const grossWPM = Math.round(charactersTyped / 5 / minutesTaken);

    setGrossWPM(grossWPM);
  };

  function skipConsecutiveSpaces(chars: string[], currCharCursor: number) {
    let numConsecutiveSpaces = 0;
    while (chars[currCharCursor + numConsecutiveSpaces] === " ") {
      numConsecutiveSpaces++;
    }
    if (numConsecutiveSpaces > 1) {
      currCharCursor += numConsecutiveSpaces - 1;
    }
    return currCharCursor;
  }

  useEffect(() => {
    if (currCharIndex === characters.length) {
      endRace();
    }
  }, [currCharIndex]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrWord(event.target.value);
    const value = event.target.value[currWordIndex];
    const currChar = characters[currCharIndex];
    const n = skipConsecutiveSpaces(characters, currCharIndex);
    setValue(value);
    setCurrCharIndex(n);

    if (value === currChar) {
      setError(false);
      setCurrCharIndex(currCharIndex + 1);
      setCorrectText(correctText + currChar);
      setValue("");
      setCurrWordIndex(currWordIndex + 1);
      if (currCharIndex % 5 === 0) {
        calculateSpeed();
      }
      try {
        const totalCharacters = characters.length;
        const charactersTyped = correctText.length;
        const percentage = (charactersTyped / totalCharacters) * 100;
        setPercentageOfRaceFinished(percentage);
      } catch (e) {
        console.log(e);
      }
    } else {
      const textField = event.target;
      textField.classList.add(styles.shake);
      setTimeout(() => {
        textField.classList.remove(styles.shake);
      }, 1000);
      setError(true);
    }
  };

  const endRace = () => {
    setIsRaceFinished(true);
    pause();
    setCurrWord("");
    calculateSpeed();
    setPercentageOfRaceFinished(100);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      const currChar = characters[currCharIndex];
      if (currChar == "\n") {
        const n = skipConsecutiveSpaces(characters, currCharIndex + 1);
        setCurrCharIndex(n + 1);
        setCorrectText(correctText + currChar);
        setValue("");
        setCurrWordIndex(0);
        setCurrWord("");
      }
    }
    if (event.key == " " && characters[currCharIndex] == " ") {
      setCurrWordIndex(0);
      setCurrWord("");
    }
    //handle backspace
    if (event.keyCode === 8) {
      if (currWordIndex > 0) {
        setCurrWordIndex(currWordIndex - 1);
        setCurrCharIndex(currCharIndex - 1);
      }
    }
  };

  return (
    <main className={styles.main}>
      <div
        style={{
          marginTop: "60px",
          padding: "40px",
        }}
        className={styles.container}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "700",
            }}
            className={inter.className}
          >
            Krish
          </p>
          <div className={styles.progress}>
            <div
              style={{
                width: `${percentageOfRaceFinished}%`,
              }}
              className={styles.progressValue}
            ></div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "700",
            }}
            className={inter.className}
          >
            Elapsed Time:{" "}
            {minutes != 0 && `${minutes} min${minutes == 1 ? "" : "s"} `}
            {seconds.toString().padStart(2, "0")} seconds
          </p>

          <p
            style={{
              marginLeft: "60px",
              fontSize: "20px",
              fontWeight: "700",
            }}
            className={inter.className}
          >
            Speed: {grossWPM} WPM
          </p>
        </div>
        <Tooltip text="Coming soon!" delay={false}>
          <button
            style={{
              padding: "15px 30px",
              fontSize: "20px",
            }}
            disabled
            className={`${inter.className} ${homeStyles.button}`}
          >
            Invite Friends
          </button>
        </Tooltip>
      </div>
      <div className={styles.container}>
        <pre
          style={{
            fontSize: "18px",
            lineHeight: "1.5",
            fontWeight: "600",
          }}
          className={`${code.className}`}
        >
          <span
            style={{
              wordBreak: "break-all",
              display: "inline",
              backgroundColor: "#18181b",
            }}
            className="python"
            ref={correctRef}
          >
            {text.slice(0, currCharIndex)}
          </span>
          {characters.map((char, index) => {
            if (index < currCharIndex) {
              return null;
            }

            return (
              <span
                key={index}
                style={{
                  wordBreak: "break-all",
                  display: "inline",
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
              >
                {index === currCharIndex && char == "\n" ? <>&#8629;</> : ""}
                {char}
              </span>
            );
          })}{" "}
        </pre>
        <input
          className={`${styles.input} ${code.className}`}
          value={currWord}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          placeholder="Type the above code here..."
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
      </div>
    </main>
  );
}
