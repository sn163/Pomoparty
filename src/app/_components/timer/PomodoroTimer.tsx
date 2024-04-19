import { useEffect, useMemo, useRef, useState } from "react";
import { TimerDisplay } from "./TimerDisplay";
import { useTimerContext } from "../context/TimerContext";
import { timeToSecs } from "@/_utils/helpers";
import { TimerButtonGroup } from "./TimerButtonGroup";
import { updateActiveStep } from "@/_utils/actions";

export default function PomodoroTimer() {
  const { timer, dispatch } = useTimerContext();
  const { pomodoroTime, rounds } = timer.settings;
  const [minutes, setMinutes] = useState(pomodoroTime);
  const [seconds, setSeconds] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
            if (rounds !== timer.activeStep + 1) {
              setMinutes(pomodoroTime);
              setSeconds(0);
            } else {
              if (timerRef.current) clearInterval(timerRef.current);
            }
            updateActiveStep(dispatch, timer);
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
  }, [timer, minutes, pomodoroTime, rounds, seconds, dispatch]);

  useEffect(() => {
    setPercentage(100 - (timeToSecs(minutes, seconds) / totalStartSec) * 100);
  }, [totalStartSec, minutes, seconds]);

  return (
    <>
      <TimerDisplay {...{ minutes, seconds, percentage }} />
      <TimerButtonGroup
        {...{
          timerMinutes: pomodoroTime,
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
