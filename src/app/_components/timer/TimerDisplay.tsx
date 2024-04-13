import { CSSProperties } from "react";

type TimerDisplayProps = {
  minutes: number;
  seconds: number;
  percentage: number;
};

export function TimerDisplay({
  minutes,
  seconds,
  percentage,
}: TimerDisplayProps) {
  return (
    <div
      className="radial-progress border-4 border-primary bg-primary text-accent"
      style={
        {
          "--value": percentage,
          "--size": "13rem",
          "--thickness": "10px",
        } as CSSProperties
      }
      role="progressbar"
    >
      <div className="grid auto-cols-max grid-flow-col gap-1 text-base-100">
        <span className="countdown font-title text-5xl font-bold">
          <span
            style={
              {
                "--value": minutes,
              } as CSSProperties
            }
          />
          :
        </span>
        <span className="countdown font-title text-5xl font-bold text-base-100">
          <span
            style={
              {
                "--value": seconds,
              } as CSSProperties
            }
          />
        </span>
      </div>
    </div>
  );
}
