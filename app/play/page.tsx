"use client";

import styles from "./play.module.css";
import highlightjs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { useEffect, useRef, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import { getSounds, Sounds } from "../../lib/sounds";
import { motion } from "framer-motion";
import getSnippet from "@/lib/snippets";
import { pageAnimationVariants } from "@/lib/animation";
import { skipConsecutiveSpaces, calculateSpeed } from "@/lib/utils";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import RaceInfoBar from "@/components/RaceInfoBar/RaceInfoBar";
import CodeDisplay from "@/components/CodeDisplay/CodeDisplay";
import CodeInput from "@/components/CodeInput/CodeInput";
import ResetRaceButton from "@/components/Buttons/ResetRaceButton";
import NextRaceButton from "@/components/Buttons/NextRaceButton";

export default function Play() {
  const [currCharIndex, setCurrCharIndex] = useState(0);
  const [correctText, setCorrectText] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [currWord, setCurrWord] = useState("");
  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [isRaceFinished, setIsRaceFinished] = useState(false);
  const [percentageOfRaceFinished, setPercentageOfRaceFinished] = useState(0);
  const [grossWPM, setGrossWPM] = useState(0);
  const [correctlyTypedCharacters, setCorrectlyTypedCharacters] = useState(0);
  const [code, setCode] = useState("");

  const correctRef = useRef<HTMLSpanElement | null>(null);
  const soundsRef = useRef<Sounds>();

  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  if (!soundsRef.current && typeof window !== "undefined") {
    soundsRef.current = getSounds();
  }

  useEffect(() => {
    const code = getSnippet();
    setCode(code);
    setIsRaceFinished(false);
    setPercentageOfRaceFinished(0);
  }, []);

  useEffect(() => {
    if (document != null) {
      const input = document.getElementById("input") as HTMLInputElement;
      input.addEventListener("selectstart", function (e) {
        e.preventDefault();
      });
      input.addEventListener(
        "select",
        function () {
          this.selectionStart = this.selectionEnd;
        },
        false
      );
    }
  }, []);

  useEffect(() => {
    if (correctRef.current) {
      highlightjs.highlightElement(correctRef.current);
    }
  }, [correctRef, correctText]);

  useEffect(() => {
    if (currCharIndex === characters.length) {
      endRace();
    }
  }, [currCharIndex]);

  const characters = code.split("");
  const charactersWithoutIndentation = code
    .split(/\n+/)
    .map((line) => {
      let strippedLine = line.replace(/^\s+/, "");
      return line.length > strippedLine.length
        ? "\n" + strippedLine
        : strippedLine;
    })
    .join("")
    .split("");

  const handleInputFocus = () => {
    if (!isRunning && !isRaceFinished) {
      start();
    }
  };

  const endRace = () => {
    if (code == "") return;
    setIsRaceFinished(true);
    pause();
    setCurrWord("");
    setGrossWPM(calculateSpeed(seconds, correctText));
    setPercentageOfRaceFinished(100);
  };

  const resetRace = () => {
    setCorrectText("");
    setCurrWord("");
    setError(false);
    setCurrCharIndex(0);
    setCurrWordIndex(0);
    setGrossWPM(0);
    setCorrectlyTypedCharacters(0);
    setPercentageOfRaceFinished(0);
    setIsRaceFinished(false);
    reset();
    pause();
  };

  const nextRace = () => {
    const code = getSnippet();
    setCode(code);
    resetRace();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrWord(event.target.value);
    const value = event.target.value[currWordIndex];
    const currChar = characters[currCharIndex];
    const n = skipConsecutiveSpaces(characters, currCharIndex);
    setValue(value);
    setCurrCharIndex(n);

    soundsRef.current?.packs["nkCreams"]();

    if (value === currChar) {
      setError(false);
      setCurrCharIndex(currCharIndex + 1);
      setCorrectText(correctText + currChar);
      setValue("");
      setCurrWordIndex(currWordIndex + 1);
      setGrossWPM(calculateSpeed(seconds, correctText));

      try {
        const totalCharacters = characters.length;
        const charactersTyped = correctText.length;
        const percentage = (charactersTyped / totalCharacters) * 100;
        setPercentageOfRaceFinished(percentage);
      } catch (e) {
        console.log(e);
      }
    } else {
      soundsRef.current?.error();
      const textField = event.target;
      textField.classList.add(styles.shake);
      setTimeout(() => {
        textField.classList.remove(styles.shake);
      }, 1000);
      setError(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      const currChar = characters[currCharIndex];
      if (currChar == "\n") {
        const n = skipConsecutiveSpaces(characters, currCharIndex + 1);
        if (characters[n] == " ") {
          setCurrCharIndex(n + 1);
        } else {
          setCurrCharIndex(n);
        }
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
    if (event.keyCode === 8) {
      if (currWordIndex > 0) {
        setCurrWordIndex(currWordIndex - 1);
        setCurrCharIndex(currCharIndex - 1);
      }
    }
  };

  return (
    <motion.main
      variants={pageAnimationVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
      className={styles.main}
    >
      <ProgressBar width={percentageOfRaceFinished} />
      <RaceInfoBar minutes={minutes} seconds={seconds} grossWPM={grossWPM} />

      <div className={styles.container}>
        <CodeDisplay
          code={code}
          currCharIndex={currCharIndex}
          characters={characters}
          value={value}
          isRaceFinished={isRaceFinished}
          correctRef={correctRef}
          language="python"
        />
        <CodeInput
          currWord={currWord}
          onChange={onChange}
          handleInputFocus={handleInputFocus}
          handleKeyDown={handleKeyDown}
          error={error}
          isRaceFinished={isRaceFinished}
        />
      </div>

      <div className={styles.buttonContainer}>
        <ResetRaceButton resetRace={resetRace} />
        <NextRaceButton nextRace={nextRace} />
      </div>
    </motion.main>
  );
}
