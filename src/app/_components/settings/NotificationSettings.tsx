import Image from "next/image";
import { useRef } from "react";
import useSound from "node_modules/use-sound/dist";
import { useTimerContext } from "../context/TimerContext";
import { updateSoundSettings } from "@/app/_utils/actions";

export default function NotificationSettings() {
  const { timer, dispatch } = useTimerContext();
  const { sound } = timer.settings;
  const dropdownRef = useRef<HTMLDetailsElement>(null);
  const [playJingle, { stop: stopJingle }] = useSound("/sounds/jingle.mp3", {
    volume: 0.5,
  });
  const [playRetro, { stop: stopRetro }] = useSound("/sounds/retro.mp3", {
    volume: 0.5,
  });
  const [playDigital, { stop: stopDigital }] = useSound("/sounds/digital.mp3", {
    volume: 0.5,
  });

  const stopAllSounds = () => {
    stopDigital();
    stopRetro();
    stopJingle();
  };

  const handleSoundSelect = (sound: "Jingle" | "Retro" | "Digital" | "Off") => {
    if (dropdownRef.current?.hasAttribute("open")) {
      dropdownRef.current?.removeAttribute("open");
    }
    stopAllSounds();
    if (sound !== "Off") {
      if (sound === "Jingle") {
        playJingle();
      } else if (sound === "Retro") {
        playRetro();
      } else {
        playDigital();
      }
    }
    updateSoundSettings(dispatch, {
      ...timer,
      settings: { ...timer.settings, sound: sound },
    });
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
            <summary className="group no-animation flex min-h-9 w-40 select-none items-center justify-between rounded border-2 px-5 text-sm hover:border-base-300 focus:border-base-300">
              {sound}
              <Image
                src="/svg/carat.svg"
                className="-rotate-180"
                alt="settings"
                height={20}
                width={20}
              />
            </summary>
            <ul className="menu dropdown-content z-[1] min-h-9 w-40 gap-1 rounded border-2 bg-base-100 p-1 shadow">
              <li>
                <a
                  className={`${sound === "Jingle" ? "active" : ""}`}
                  onClick={() => handleSoundSelect("Jingle")}
                >
                  Jingle
                </a>
              </li>
              <li>
                <a
                  className={`${sound === "Retro" ? "active" : ""}`}
                  onClick={() => handleSoundSelect("Retro")}
                >
                  Retro
                </a>
              </li>
              <li>
                <a
                  className={`${sound === "Digital" ? "active" : ""}`}
                  onClick={() => handleSoundSelect("Digital")}
                >
                  Digital
                </a>
              </li>
              <li>
                <a
                  className={`${sound === "Off" ? "active" : ""}`}
                  onClick={() => handleSoundSelect("Off")}
                >
                  Off
                </a>
              </li>
            </ul>
          </details>
        </label>
      </div>
    </div>
  );
}
