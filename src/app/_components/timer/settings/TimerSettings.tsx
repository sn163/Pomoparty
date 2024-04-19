import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { SettingsType } from "@/_utils/types";

type TimerSettingsProps = {
  tempSettings: SettingsType;
  setTempSettings: Dispatch<SetStateAction<SettingsType>>;
};

type SliderBarProps = {
  id: string;
  value: number;
  min: number;
  max: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

const SliderBar = ({ ...props }: SliderBarProps) => {
  const { id, label, min, max, value, onChange } = props;
  return (
    <>
      <label
        className=" flex select-none items-center justify-between"
        htmlFor={id}
      >
        <span>{label}</span>
        <span className="text-lg text-primary">{value + " min"}</span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="range range-primary range-sm w-full"
      />
    </>
  );
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
    <div className="flex w-full max-w-sm flex-col items-center justify-center space-y-4 px-6">
      <h4 className="text-md mr-auto select-none font-bold text-base-300">
        TIMER LENGTH
      </h4>
      <div className="w-full max-w-sm space-y-3 py-1.5">
        <SliderBar
          id="pomodoro"
          min={1}
          max={60}
          value={pomodoroTime}
          onChange={handleSliderInputs("pomodoroTime")}
          label="Pomodoro"
        />
        <div className="mt-2 flex w-full justify-between px-0.5 text-xs text-base-content">
          <span>1</span>
          <span>30</span>
          <span>60</span>
        </div>
      </div>
      <div className="flex w-full max-w-sm items-center gap-7">
        <div className="w-full space-y-3 py-1.5">
          <SliderBar
            id="breaktime"
            min={1}
            max={30}
            value={breakTime}
            onChange={handleSliderInputs("breakTime")}
            label="Short Break"
          />
          <div className="mt-1 flex w-full select-none justify-between px-0.5 text-sm text-black">
            <span>1</span>
            <span>15</span>
            <span>30</span>
          </div>
        </div>
        <div className="w-full space-y-3 py-1.5">
          <SliderBar
            id="rounds"
            min={1}
            max={15}
            value={rounds}
            onChange={handleSliderInputs("rounds")}
            label="Rounds"
          />
          <div className="mt-1 flex  w-full select-none justify-between px-0.5 text-sm text-black">
            <span>1</span>
            <span>8</span>
            <span>15</span>
          </div>
        </div>
      </div>
    </div>
  );
}
