import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { SettingsType } from "@/app/_utils/types";

type TimerSettingsProps = {
  tempSettings: SettingsType;
  setTempSettings: Dispatch<SetStateAction<SettingsType>>;
};

export default function TimerSettings({
  tempSettings,
  setTempSettings,
}: TimerSettingsProps) {
  const { pomodoroTime, breakTime, rounds } = tempSettings;

  const handleSliderInputs =
    (sliderType: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setTempSettings({
        ...tempSettings,
        [sliderType]: +event.target.value,
      });
    };

  return (
    <div className="flex w-full max-w-sm flex-col items-center justify-center space-y-1 px-5">
      <h4 className="text-md mr-auto font-bold text-base-300">TIMER LENGTH</h4>
      <label className="form-control w-full max-w-sm py-1.5">
        <div className="label justify-between">
          <span className="label-text">Pomodoro</span>
          <span className="text-lg text-primary">{pomodoroTime + " min"}</span>
        </div>
        <input
          type="range"
          min={1}
          max="60"
          value={pomodoroTime}
          className="range range-primary range-sm"
          onChange={handleSliderInputs("pomodoroTime")}
        />
        <div className="mt-2 flex w-full justify-between px-0.5 text-xs text-base-content">
          <span>1</span>
          <span>30</span>
          <span>60</span>
        </div>
      </label>
      <div className="flex w-full max-w-sm items-center gap-7">
        <label className="form-control w-full py-1">
          <div className="label justify-between">
            <span className="label-text">Short Break</span>
            <span className="text-lg text-primary">{breakTime + " min"}</span>
          </div>
          <input
            type="range"
            min={1}
            max="30"
            value={breakTime}
            className="range range-primary range-sm"
            onChange={handleSliderInputs("breakTime")}
          />
          <div className="mt-2 flex w-full justify-between px-0.5 text-xs text-base-content">
            <span>1</span>
            <span>15</span>
            <span>30</span>
          </div>
        </label>
        <label className="form-control w-full py-1">
          <div className="label justify-between">
            <span className="label-text">Rounds</span>
            <span className="text-lg text-primary">{rounds}</span>
          </div>
          <input
            type="range"
            min={1}
            max="15"
            value={rounds}
            className="range range-primary range-sm"
            onChange={handleSliderInputs("rounds")}
          />
          <div className="mt-2 flex w-full justify-between px-0.5 text-xs text-base-content">
            <span>1</span>
            <span>8</span>
            <span>15</span>
          </div>
        </label>
      </div>
    </div>
  );
}
