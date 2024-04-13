import { useEffect, useMemo, useRef, useState } from "react";
import { TimerDisplay } from "./TimerDisplay";
import { useTimerContext } from "../context/TimerContext";
import { timeToSecs } from "@/app/_utils/helpers";
import { TimerButtonGroup } from "./TimerButtonGroup";

export default function BreakTimer() {
  const { timer } = useTimerContext();
  const { breakTime } = timer.settings;
  const [minutes, setMinutes] = useState(breakTime);
  const [seconds, setSeconds] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalStartSec = useMemo(() => timeToSecs(breakTime, 0), [breakTime]);

  useEffect(() => {
    setMinutes(breakTime);
    setSeconds(0);
  }, [breakTime]);

  useEffect(() => {
    if (timer.activeTimer) {
      timerRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (timerRef.current) clearInterval(timerRef.current);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => {
      if (timerRef.current)
        if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timer.activeTimer, minutes, seconds]);

  useEffect(() => {
    setPercentage(100 - (timeToSecs(minutes, seconds) / totalStartSec) * 100);
  }, [totalStartSec, minutes, seconds]);

  return (
    <>
      <TimerDisplay {...{ minutes, seconds, percentage }} />
      <TimerButtonGroup
        {...{
          timerMinutes: breakTime,
          minutes,
          seconds,
          setMinutes,
          setSeconds,
          timerRef,
        }}
      />
    </>
  );
}
