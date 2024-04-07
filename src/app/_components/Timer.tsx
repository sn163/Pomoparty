import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import SaveSettingsAlert from "./settings/SaveSettingsAlert";
import Image from "next/image";
import { useTimerContext } from "./context/TimerContext";
import { toggleActiveTimer } from "../_utils/actions";

export default function Timer() {
  const { timer, dispatch } = useTimerContext();
  const { pomodoroTime } = timer.settings;
  const [minutes, setMinutes] = useState(pomodoroTime);
  const [seconds, setSeconds] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();
  const startButtonText =
    pomodoroTime === minutes && seconds === 0 ? "Start" : "Resume";

  const timeToSecs = (min: number, sec: number): number => min * 60 + sec;

  const totalStartSec = useMemo(
    () => timeToSecs(pomodoroTime, 0),
    [pomodoroTime],
  );

  useEffect(() => {
    setMinutes(pomodoroTime);
    setSeconds(0);
  }, [pomodoroTime]);

  useEffect(() => {
    if (timer.activeTimer) {
      timerRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timerRef.current);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [timer.activeTimer, minutes, seconds]);

  useEffect(() => {
    setPercentage(100 - (timeToSecs(minutes, seconds) / totalStartSec) * 100);
  }, [totalStartSec, minutes, seconds]);

  const handleClick = (actionType: "toggle" | "reset") => {
    if (!timer.activeTimer && actionType === "toggle") {
      toggleActiveTimer(dispatch, timer);
    } else {
      toggleActiveTimer(dispatch, timer);
      if (actionType === "toggle") {
        clearInterval(timerRef.current);
      } else if (actionType === "reset") {
        setMinutes(pomodoroTime);
        setSeconds(0);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <SaveSettingsAlert />
      <div
        className="radial-progress border-4 border-primary bg-primary text-white"
        style={
          {
            "--value": percentage,
            "--size": "12rem",
            "--thickness": "4px",
          } as CSSProperties
        }
        role="progressbar"
      >
        <div className="grid auto-cols-max grid-flow-col gap-1 text-center">
          <div className="prose prose-xl flex flex-col text-white">
            <span className="prose-md prose countdown text-2xl text-white">
              <span style={{ "--value": minutes } as CSSProperties}></span>:
            </span>
            min
          </div>
          <div className="prose prose-xl flex flex-col text-white">
            <span className="prose prose-lg countdown text-2xl text-white">
              <span style={{ "--value": seconds } as CSSProperties}></span>
            </span>
            sec
          </div>
        </div>
      </div>
      <div className="flex space-x-5">
        <button
          className="group btn btn-primary min-w-28"
          onClick={() => handleClick("toggle")}
          disabled={minutes === 0 && seconds === 0}
        >
          {timer.activeTimer ? (
            <span className="flex w-full items-center justify-between">
              <Image
                src="/svg/pause.svg"
                className="group-hover:animate-crescendo"
                alt="pause"
                height={14}
                width={14}
              />
              Pause
            </span>
          ) : (
            <span
              className={`flex w-full items-center justify-between ${startButtonText === "Start" ? "pr-2" : ""}`}
            >
              <Image
                src="/svg/play.svg"
                className="group-hover:animate-crescendo"
                alt="play"
                height={14}
                width={14}
              />
              {startButtonText}
            </span>
          )}
        </button>
        <button
          className="group btn btn-primary min-w-28 disabled:text-[#FFF]"
          disabled={pomodoroTime === minutes && seconds === 0}
          onClick={() => handleClick("reset")}
        >
          <span className="flex w-full items-center justify-between">
            <Image
              src="/svg/reset.svg"
              className="group-hover:animate-spin"
              alt="reset"
              height={23}
              width={23}
            />
            Reset
          </span>
        </button>
      </div>
    </div>
  );
}
