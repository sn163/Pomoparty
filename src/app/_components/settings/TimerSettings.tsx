import { SliderData } from "@/app/_utils/types";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type TimerSettingsProps = {
  sliderData: SliderData;
  setSliderData: Dispatch<SetStateAction<SliderData>>;
};

export default function TimerSettings({
  sliderData,
  setSliderData,
}: TimerSettingsProps) {
  const handleSliderInputs =
    (sliderType: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setSliderData((prevState) => ({
        ...prevState,
        [sliderType]: +event.target.value,
      }));
    };

  return (
    <div className="flex w-full max-w-sm flex-col items-center justify-center space-y-1 px-5">
      <h4 className="text-md mr-auto font-bold text-base-300">TIMER LENGTH</h4>
      <label className="form-control w-full max-w-sm py-1.5">
        <div className="label justify-between">
          <span className="label-text">Pomodoro</span>
          <span className="text-lg text-primary">
            {sliderData.pomodoro + " min"}
          </span>
        </div>
        <input
          type="range"
          min={1}
          max="60"
          value={sliderData.pomodoro}
          className="range range-primary range-sm"
          onChange={handleSliderInputs("pomodoro")}
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
            <span className="text-lg text-primary">
              {sliderData.break + " min"}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max="30"
            value={sliderData.break}
            className="range range-primary range-sm"
            onChange={handleSliderInputs("break")}
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
            <span className="text-lg text-primary">{sliderData.rounds}</span>
          </div>
          <input
            type="range"
            min={1}
            max="15"
            value={sliderData.rounds}
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
