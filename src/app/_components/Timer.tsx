import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import SaveSettingsAlert from "./settings/SaveSettingsAlert";
import Image from "next/image";

type TimerProps = {
  inputMin: number;
  activeTimer: boolean;
  showAlert: boolean;
  setActiveTimer: Dispatch<SetStateAction<boolean>>;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
};

export default function Timer({ ...props }: TimerProps) {
  const { inputMin, activeTimer, showAlert, setShowAlert, setActiveTimer } =
    props;
  const [minutes, setMinutes] = useState(inputMin);
  const [seconds, setSeconds] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();
  const startButtonText =
    inputMin === minutes && seconds === 0 ? "Start" : "Resume";

  const timeToSecs = (min: number, sec: number): number => min * 60 + sec;

  const totalStartSec = useMemo(() => timeToSecs(inputMin, 0), [inputMin]);

  useEffect(() => {
    setMinutes(inputMin);
    setSeconds(0);
  }, [inputMin]);

  useEffect(() => {
    if (activeTimer) {
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
  }, [activeTimer, minutes, seconds]);

  useEffect(() => {
    setPercentage(100 - (timeToSecs(minutes, seconds) / totalStartSec) * 100);
  }, [totalStartSec, minutes, seconds]);

  const handleClick = (actionType: "toggle" | "reset") => {
    if (!activeTimer && actionType === "toggle") {
      setActiveTimer(true);
    } else {
      setActiveTimer(false);
      if (actionType === "toggle") {
        clearInterval(timerRef.current);
      } else if (actionType === "reset") {
        setMinutes(inputMin);
        setSeconds(0);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <SaveSettingsAlert showAlert={showAlert} setShowAlert={setShowAlert} />
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
          {!!activeTimer ? (
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
          disabled={inputMin === minutes && seconds === 0}
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
