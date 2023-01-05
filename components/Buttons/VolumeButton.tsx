import Image from "next/image";
import VolumeOn from "@/public/icons/volumeOn.svg";
import VolumeOff from "@/public/icons/volumeOff.svg";

export default function VolumeButton({
  isMuted,
  setIsMuted,
}: {
  isMuted: boolean;
  setIsMuted: (isMuted: boolean) => void;
}) {
  return (
    <button
      style={{
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
      }}
      onClick={() => setIsMuted(!isMuted)}
    >
      <Image
        src={isMuted ? VolumeOff : VolumeOn}
        alt="volume control"
        width={20}
        height={20}
      />
    </button>
  );
}
