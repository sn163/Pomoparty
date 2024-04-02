import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import SettingsAlert from "./SettingsAlert";

type TimerProps = {
  inputHr: number;
  inputMin: number;
  inputSec: number;
  activeTimer: boolean;
  showAlert: boolean;
  setActiveTimer: Dispatch<SetStateAction<boolean>>;
};

export default function Timer({ ...props }: TimerProps) {
  const {
    inputHr,
    inputMin,
    inputSec,
    activeTimer,
    showAlert,
    setActiveTimer,
  } = props;
  const [hours, setHours] = useState(inputHr);
  const [minutes, setMinutes] = useState(inputMin);
  const [seconds, setSeconds] = useState(inputSec);
  const [percentage, setPercentage] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();

  const startButtonText =
    inputHr === hours && inputMin === minutes && inputSec === seconds
      ? "Start"
      : "Resume";

  const timeToSecs = (hr: number, min: number, sec: number): number =>
    hr * 3600 + min * 60 + sec;

  const totalStartSec = useMemo(
    () => timeToSecs(inputHr, inputMin, inputSec),
    [inputHr, inputMin, inputSec],
  );

  useEffect(() => {
    setHours(inputHr);
  }, [inputHr]);

  useEffect(() => {
    setMinutes(inputMin);
  }, [inputMin]);

  useEffect(() => {
    setSeconds(inputSec);
  }, [inputSec]);

  useEffect(() => {
    if (activeTimer) {
      timerRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              clearInterval(timerRef.current);
            } else {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            }
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
  }, [activeTimer, hours, minutes, seconds]);

  useEffect(() => {
    setPercentage(
      100 - (timeToSecs(hours, minutes, seconds) / totalStartSec) * 100,
    );
  }, [totalStartSec, hours, minutes, seconds]);

  const pause = () => {
    // Clears the interval to stop the timer from updating
    setActiveTimer(false);
    clearInterval(timerRef.current);
  };

  const handleClick = () => {
    !activeTimer ? setActiveTimer(true) : pause();
  };

  const restart = () => {
    // Clears the interval to stop the timer from updating
    setActiveTimer(false);
    setHours(inputHr);
    setMinutes(inputMin);
    setSeconds(inputSec);
  };

  return (
    <div className="flex flex-col items-center space-y-10">
      <SettingsAlert showAlert={showAlert} />
      <div
        className="radial-progress border-4 border-primary bg-primary text-white"
        style={
          {
            "--value": percentage,
            "--size": "12rem",
            "--thickness": "2px",
          } as CSSProperties
        }
        role="progressbar"
      >
        <div className="grid auto-cols-max grid-flow-col gap-1 text-center">
          <div className="prose prose-xl flex flex-col text-white">
            <span className="countdown text-2xl text-white">
              <span style={{ "--value": hours } as CSSProperties}></span>:
            </span>
            hr
          </div>
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
          className="btn btn-primary min-w-24"
          onClick={handleClick}
          disabled={hours === 0 && minutes === 0 && seconds === 0}
        >
          {!!activeTimer ? "Pause" : startButtonText}
        </button>
        <button
          className="group btn btn-primary min-w-20"
          disabled={
            inputHr === hours && inputMin === minutes && inputSec === seconds
          }
          onClick={() => restart()}
        >
          <div className="h-6 w-6 group-hover:animate-spin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>Reset</title>
              <path
                data-name="layer1"
                d="M57.521 20.727L54.948 24.5A26.568 26.568 0 0 0 29 4 27.145 27.145 0 0 0 2 31a26.549 26.549 0 0 0 24 26.383V60h6V48h-6v3.321A20.513 20.513 0 0 1 8 31a21.138 21.138 0 0 1 21-21 20.556 20.556 0 0 1 20.19 16.259l-3.574-3.215-4.066 4.412L53.035 37.96 62 24z"
                fill="#FFF"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
