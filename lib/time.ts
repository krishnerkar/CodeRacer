export default function formatTime(minutes: number, seconds: number) {
  const minutesString = minutes.toString();
  const secondsString = seconds.toString().padStart(2, "0");

  if (minutes == 0) return `${secondsString} secs`;
  
  return `${minutesString} min${minutes == 1 ? "" : "s"} ${secondsString} secs`;
}
