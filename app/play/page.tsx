"use client";

import styles from "./play.module.css";
import { Source_Code_Pro } from "@next/font/google";
import highlightjs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useEffect, useRef, useState } from "react";
import { CopyBlock } from "react-code-blocks";

const code = Source_Code_Pro({
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function Play() {
  const correctRef = useRef<HTMLSpanElement | null>(null);

  const text = `def test_partial():
    response = client.get("/?q=bar")
    data = response.json()
    assert data == {"some_arg": "foo", "q": "bar"}
  `;

  const characters = text.split("");

  const [currCharIndex, setCurrCharIndex] = useState(0);
  const [correctText, setCorrectText] = useState("");
  const [value, setValue] = useState("");
  const [numberOfIncorrectChars, setNumberOfIncorrectChars] = useState(0);

  useEffect(() => {
    if (correctRef.current) {
      highlightjs.highlightElement(correctRef.current);
    }
  }, [correctRef, correctText]);

  function skipConsecutiveSpaces(chars: string[], currCharCursor: number) {
    let numConsecutiveSpaces = 0;
    while (chars[currCharCursor + numConsecutiveSpaces] === " ") {
      numConsecutiveSpaces++;
    }
    if (numConsecutiveSpaces > 1) {
      currCharCursor += numConsecutiveSpaces - 1;
    }
    console.log(`numConsecutiveSpaces: ${numConsecutiveSpaces}`);
    return currCharCursor;
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const value = event.target.value;
    const currChar = characters[currCharIndex];

    const n = skipConsecutiveSpaces(characters, currCharIndex);
    setCurrCharIndex(n);

    if (value === currChar) {
      setNumberOfIncorrectChars(0);
      setCurrCharIndex(currCharIndex + 1);
      setCorrectText(correctText + currChar);
      setValue("");
    } else {
      setNumberOfIncorrectChars(numberOfIncorrectChars + 1);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      console.log("enter pressed");
      const currChar = characters[currCharIndex];
      if (currChar == "\n") {
        const n = skipConsecutiveSpaces(characters, currCharIndex + 1);
        setCurrCharIndex(n + 1);
        setCorrectText(correctText + currChar);
        setValue("");
      }
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <pre
          style={{
            fontSize: "18px",
            lineHeight: "1.5",
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
            if (index == currCharIndex) {
              console.log(value);
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
                        : "rgba(255, 255, 255)"
                      : "transparent",
                }}
              >
                {index === currCharIndex && char == "\n" ? <>&#8629;</> : ""}
                {char}
              </span>
            );
          })}{" "}
          {/* <span
            style={{
              wordBreak: "break-all",
              display: "inline",
              // color: numberOfIncorrectChars
            }}
          >
            {text.slice(currCharIndex)}
          </span> */}
        </pre>

        <input
          className={code.className}
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder="Type the above code here..."
          style={{
            fontSize: "18px",
            marginTop: "50px",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            width: "100%",
            backgroundColor: "#fff",
            color: "#000",
          }}
        ></input>
      </div>
    </main>
  );
}
