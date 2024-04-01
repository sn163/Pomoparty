import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import Modal from "./Modal";

export default function Dashboard() {
  const [activeTimer, setActiveTimer] = useState(false);
  const [startHr, setStartHr] = useState(0);
  const [startMin, setStartMin] = useState(25);
  const [startSec, setStartSec] = useState(0);
  const [hours, setHours] = useState(startHr);
  const [minutes, setMinutes] = useState(startMin);
  const [seconds, setSeconds] = useState(startSec);
  const [percentage, setPercentage] = useState(100);

  const timeToSecs = (hr: number, min: number, sec: number): number =>
    hr * 3600 + min * 60 + sec;

  const totalStartSec = useMemo(
    () => timeToSecs(startHr, startMin, startSec),
    [startHr, startMin, startSec],
  );

  useEffect(() => {
    setHours(startHr);
    setMinutes(startMin);
    setSeconds(startSec);
  }, [startHr, startMin, startSec]);

  const timerRef = useRef<NodeJS.Timeout>();
// hello this is mr comment
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

  const restart = () => {
    // Clears the interval to stop the timer from updating
    setActiveTimer(false);
    setHours(startHr);
    setMinutes(startMin);
    setSeconds(startSec);
  };

  const pause = () => {
    // Clears the interval to stop the timer from updating
    setActiveTimer(false);
    clearInterval(timerRef.current);
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <Modal
        hr={{ startHr, setStartHr }}
        min={{ startMin, setStartMin }}
        sec={{ startSec, setStartSec }}
      />
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
          <div className="flex flex-col text-white">
            <span className="countdown font-mono text-2xl">
              <span style={{ "--value": hours } as CSSProperties}></span>:
            </span>
            hr
          </div>
          <div className="flex flex-col text-white">
            <span className="countdown font-mono text-2xl">
              <span style={{ "--value": minutes } as CSSProperties}></span>:
            </span>
            min
          </div>
          <div className="flex flex-col text-white">
            <span className="countdown font-mono text-2xl">
              <span style={{ "--value": seconds } as CSSProperties}></span>
            </span>
            sec
          </div>
        </div>
      </div>
      <div className="flex space-x-5">
        <button
          className="btn-main rounded-full"
          disabled={!!activeTimer}
          onClick={() => setActiveTimer(true)}
        >
          {activeTimer ||
          (startHr === hours && startMin === minutes && startSec === seconds)
            ? "Start"
            : "Resume"}
        </button>
        <button
          className="btn-main rounded-full"
          disabled={!activeTimer}
          onClick={() => pause()}
        >
          Pause
        </button>
        <button className="btn-main rounded-full " onClick={() => restart()}>
          Reset
        </button>
      </div>
    </main>
  );
}
