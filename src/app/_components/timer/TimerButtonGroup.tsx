import Image from "next/image";
import { useTimerContext } from "../context/TimerContext";
import { toggleActiveTimer } from "../../_utils/actions";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

type TimerButtonGroupProps = {
  timerMinutes: number;
  minutes: number;
  seconds: number;
  setMinutes: Dispatch<SetStateAction<number>>;
  setSeconds: Dispatch<SetStateAction<number>>;
  timerRef: MutableRefObject<ReturnType<typeof setInterval> | null>;
};

export const TimerButtonGroup = ({
  timerMinutes,
  minutes,
  seconds,
  setMinutes,
  setSeconds,
  timerRef,
}: TimerButtonGroupProps) => {
  const { timer, dispatch } = useTimerContext();

  const startButtonText =
    timerMinutes === minutes && seconds === 0 ? "Start" : "Resume";

  const handleToggle = () => {
    if (!timer.activeTimer) {
      toggleActiveTimer(dispatch, timer);
    } else {
      toggleActiveTimer(dispatch, timer);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const handleReset = () => {
    if (timer.activeTimer) {
      toggleActiveTimer(dispatch, timer);
    }
    if (timerRef.current) clearInterval(timerRef.current);
    setMinutes(timerMinutes);
    setSeconds(0);
  };

  return (
    <div className="flex space-x-5">
      <button
        className="group btn btn-primary min-w-28"
        onClick={() => handleToggle()}
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
        className="group btn btn-primary min-w-28 disabled:text-base-100"
        disabled={timerMinutes === minutes && seconds === 0}
        onClick={() => handleReset()}
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
  );
};
