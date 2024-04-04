import Image from "next/image";
import { useRef, useState } from "react";

export default function NotificationSettings() {
  const [soundOption, setSoundOption] = useState("Jingle");
  const [volume, setVolume] = useState(0);
  const dropdownRef = useRef<HTMLDetailsElement>(null);

  const handleSoundSelect = (sound: "Jingle" | "Retro" | "Digital") => {
    if (dropdownRef.current?.hasAttribute("open")) {
      dropdownRef.current?.removeAttribute("open");
    }
    setSoundOption(sound);
  };

  return (
    <div className="flex w-full max-w-sm flex-col items-center justify-center space-y-1 px-5">
      <h4 className="text-md mr-auto font-bold text-base-300">SOUND</h4>
      <div className="space-between flex w-full items-center gap-7">
        <label className="form-control min-h-32 w-full">
          <div className="label flex items-center justify-start">
            <span className="label-text">Notification</span>
          </div>
          <details className="dropdown" ref={dropdownRef}>
            <summary className="group no-animation flex min-h-10 select-none items-center justify-between rounded border-2 px-5 text-sm hover:border-base-300 focus:border-base-300">
              {soundOption}
              <Image
                src="/svg/carat.svg"
                className="-rotate-180"
                alt="settings"
                height={20}
                width={20}
              />
            </summary>
            <ul className="menu dropdown-content z-[1] w-full gap-1 rounded border-2 bg-base-100 p-2 shadow">
              <li>
                <a
                  className={`${soundOption === "Jingle" ? "active" : ""}`}
                  onClick={() => handleSoundSelect("Jingle")}
                >
                  Jingle
                </a>
              </li>
              <li>
                <a
                  className={`${soundOption === "Retro" ? "active" : ""}`}
                  onClick={() => handleSoundSelect("Retro")}
                >
                  Retro
                </a>
              </li>
              <li>
                <a
                  className={`${soundOption === "Digital" ? "active" : ""}`}
                  onClick={() => handleSoundSelect("Digital")}
                >
                  Digital
                </a>
              </li>
            </ul>
          </details>
        </label>
        <label className="form-control min-h-32 w-full max-w-sm">
          <div className="label flex items-center justify-between gap-4">
            <span className="label-text">Volume</span>
            <span className="text-sm text-primary">
              {volume !== 0 ? volume + " %" : "Muted"}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max="100"
            value={volume}
            className="range range-primary range-xs"
            onChange={(e) => setVolume(+e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}
