import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";

type DashBoardProps = {
  startMin: number;
  startSec: number;
};

export default function Dashboard({ startMin, startSec }: DashBoardProps) {
  const [activeTimer, setActiveTimer] = useState(false);
  const [minutes, setMinutes] = useState(startMin);
  const [seconds, setSeconds] = useState(startSec);
  const [percentage, setPercentage] = useState(100);

  // turn 
  const timeToSecs = (min:number, sec:number):number => min * 60 + sec;
  
  const totalStartSec = useMemo(
    () => timeToSecs(startMin, startSec),
    [startMin, startSec]
  );

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (activeTimer) {
      timerRef.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timerRef.current);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [activeTimer, minutes, seconds]);

  useEffect(() => {
    setPercentage(Math.abs((timeToSecs(minutes, seconds) / totalStartSec) * 100));
    console.log((timeToSecs(minutes, seconds) / totalStartSec) * 100);
  }, [minutes, seconds, totalStartSec]);

  const restart = () => {
    // Clears the interval to stop the timer from updating
    setActiveTimer(false);
    setMinutes(startMin);
    setSeconds(startSec);
  };

  const pause = () => {
    // Clears the interval to stop the timer from updating
    if (activeTimer) {
      setActiveTimer(false);
      clearInterval(timerRef.current);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <div
        className="radial-progress bg-primary text-white border-4 border-primary"
        style={
          {
            "--value": percentage,
            "--size": "12rem",
            "--thickness": "2px",
          } as CSSProperties
        }
        role="progressbar"
      >
        <div className="grid grid-flow-col gap-1 text-center auto-cols-max">
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
          className="btn rounded-full btn-primary text-white border-2 shadow-md"
          disabled={!!activeTimer}
          onClick={() => setActiveTimer(true)}
        >
          Start
        </button>
        <button
          className="btn rounded-full btn-primary text-white border-2 shadow-md"
          disabled={!activeTimer}
          onClick={() => pause()}
        >
          Pause
        </button>
        <button
          className="btn rounded-full btn-primary text-white border-2 shadow-md"
          onClick={() => restart()}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
