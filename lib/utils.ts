export function calculateSpeed(minutes: number, seconds: number, textTyped: string) {
  const totalSeconds = minutes * 60 + seconds;
  const minutesTaken = totalSeconds / 60;
  const charactersTyped = textTyped.length;
  const grossWPM = Math.round(charactersTyped / 5 / minutesTaken);

  return grossWPM;
}

export function skipConsecutiveSpaces(chars: string[], currCharCursor: number) {
  let numConsecutiveSpaces = 0;
  while (chars[currCharCursor + numConsecutiveSpaces] === " ") {
    numConsecutiveSpaces++;
  }
  if (numConsecutiveSpaces > 1) {
    currCharCursor += numConsecutiveSpaces - 1;
  }
  return currCharCursor;
}
